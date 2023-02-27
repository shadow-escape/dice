import {plainToClass} from 'class-transformer'
import {MAPPINGS, SCHEME} from '@/scheme'
import Dice from '@/services/Dice'
import {BatterySpot, FinishSpot, ReverseSpot} from '@/services/model/Spot'

export default class Robot {
    position = 0
    direction = 1
    dice = new Dice()
    scheme = SCHEME.map(effect => plainToClass(MAPPINGS[effect], { effect }))
    legend = ['empty', 'battery', 'random', 'reverse']
    over = false

    /**
     * Текущее положение робота
     */
    get currentSpot() {
        return this.scheme[this.position]
    }

    /**
     * Разворачиваем робота
     */
    reverse() {
        this.direction *= -1
    }

    /**
     * Перемещение робота на указанную позицию
     */
    async move(index) {
        const needle = this.available.find(spot => spot.index === index)

        if (needle?.moves && !this.isAnimated) {
            const { moves } = needle

            this.setPosition(index)
            await this.dice.rotate(moves.steps)
            this.dice.setPosition(moves.position)

            if (this.currentSpot instanceof ReverseSpot) {
                this.reverse()
            } else if (
                this.currentSpot instanceof BatterySpot
                && !this.currentSpot.completed
            ) {
                this.currentSpot.completed = true
            }
        }
    }

    async step() {
        const position = this.position
        const index = this.direction > 0 ? position+1 : position-1
        const target = this.cut(index)

        this.setPosition(target)
    }

    setPosition(position) {
        this.position = position
    }

    /**
     * Смыкаем маршрут
     */
    cut(index) {
        if (index > 39) {
            return index % 40
        } else if (index < 0) {
            return  40 + index
        }

        return index
    }

    /**
     * Доступные позицци для текущего положения кубика
     */
    get available() {
        if (this.dice.steps) {
            return Object.keys(this.dice.steps).map(value => {
                let index = this.position + Number(value) * this.direction


                return {
                    index: this.cut(index),
                    value: Number(value),
                    moves: this.dice.steps[value]
                }
            })
        }

        return []
    }

    /**
     * Маркируем ячейку
     */
    setSpot(index, effect) {
        if (!['in', 'out'].includes(this.scheme[index].effect)) {
            if (this.getLimit(effect) < 4) {
                this.scheme[index] = new MAPPINGS[effect]()
            } else {
                alert(`Достигнут лимит для этого типа ячейки`)
            }
        }
    }

    /**
     * Получаем ячейку
     */
    getSpot(index) {
        return this.scheme[index]
    }

    /**
     * Запрашиваем количество ячеек указанного типа
     */
    getLimit(effect) {
        return this.scheme.filter(spot => spot instanceof MAPPINGS[effect] && effect !== 'empty').length
    }

    get batteries() {
        const batteries = this.scheme.filter(spot => spot instanceof BatterySpot && !spot.completed);

        // развернём список в обратную сторону
        return this.direction > 0
            ? batteries
            : batteries.slice().reverse()
    }

    /**
     * Флаг начала игры
     */
    get isReady() {
        return this.getLimit('battery') > 0
    }

    setOver(over) {
        this.over = over
    }

    /**
     * Флаг анимации кубика
     */
    get isAnimated() {
        return !(this.available.length
            && this.dice.freeze)
    }

    getStepCount(spot) {
        let diff = this.scheme.indexOf(spot) - this.position

        if (this.direction < 0) {
            diff *= -1
        }

        return diff < 0 ? 40 + diff : diff
    }

    get getStepCountExit() {
        const finishSpot = this.scheme.find(spot => spot instanceof FinishSpot)

        return this.getStepCount(finishSpot);
    }
}