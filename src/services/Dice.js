import {DIRECTIONS, LOC} from '@/components/TheDice/config';
import {variants} from '@/components/TheDice/config';

export default class Dice {
    position = 0

    direction = null

    directions = Object.values(DIRECTIONS)

    setPosition(position) {
        this.position = position;
        this.direction = null;
    }

    setDirection(direction) {
        if (this.directions.includes(direction)) {
            this.direction = direction;
        } else {
            this.direction = null;
        }
    }

    /**
     * Получение доступных ходов для текущей позиции кубика
     */
    get steps() {
        return variants[this.position].moves[this.direction];
    }

    /**
     * Координаты для текущей позиции кубика
     */
    get coordinates() {
        return variants[this.position].coordinates;
    }

    getDirectionTitle(direction) {
        return LOC[direction];
    }
}