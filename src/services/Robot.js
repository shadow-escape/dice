import {plainToClass} from 'class-transformer'
import {MAPPINGS, SCHEME} from '@/scheme'
import Dice from '@/services/Dice'
import {BatterySpot, ReverseSpot} from '@/services/model/Spot'

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

        if (needle?.moves) {
            const { moves } = needle

            await this.dice.rotate(moves.steps)
            this.dice.setPosition(moves.position)
            this.setPosition(index)

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
        return this.scheme.filter(spot => spot instanceof BatterySpot && !spot.completed)
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
}