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
        const { moves = false } = this.available.find(spot => spot.index === index)

        if (moves) {
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

    setPosition(position) {
        this.position = position
    }

    /**
     * Доступные позицци для текущего положения кубика
     */
    get available() {
        if (this.dice.steps) {
            return Object.keys(this.dice.steps).map(value => {
                let index = this.position + Number(value) * this.direction

                if (index > 39) {
                    index = index % 40
                } else if (index < 0) {
                    index = 40 + index
                }

                return {
                    index,
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

    /**
     * Флаг начала игры
     */
    get isReady() {
        return this.getLimit('battery') > 0
    }
}