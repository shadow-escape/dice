import { chunk } from 'lodash'
import {DIRECTIONS, LOC} from '@/components/TheDice/config'
import {variants} from '@/components/TheDice/config'
import {delay} from '@/utils/delay'

export default class Dice {
    position = 0

    coordinates = []

    direction = null

    directions = Object.values(DIRECTIONS)

    freeze = true

    constructor() {
        const { coordinates } = variants[this.position]

        this.setCoordinates(coordinates)
    }

    setPosition(position) {
        this.position = position

        const { coordinates } = variants[this.position]

        this.setCoordinates(coordinates)
        this.direction = null
    }

    setCoordinates(coordinates) {
        this.coordinates = coordinates
    }

    setDirection(direction) {
        if (this.directions.includes(direction)) {
            this.direction = direction
        } else {
            this.direction = null
        }
    }

    /**
     * Получение доступных ходов для текущей позиции кубика
     */
    get steps() {
        return variants[this.position].moves[this.direction]
    }

    /**
     * Наименование для кнопок
     */
    getDirectionTitle(direction) {
        return LOC[direction]
    }

    /**
     * Анимация вращения кубика
     */
    async rotate(steps) {
        this.freeze = false

        for (const coordinates of chunk(steps, 3)) {
            this.setCoordinates(coordinates)
            await delay(300)
        }

        this.freeze = true
    }
}