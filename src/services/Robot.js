import {plainToClass} from 'class-transformer';
import {MAPPINGS, SCHEME} from '@/scheme';

export default class Robot {
    position = 0
    direction = 1

    scheme = SCHEME.map(spot => plainToClass(MAPPINGS[spot.effect], spot))

    legend = ['empty', 'battery', 'random', 'reverse']

    move(value) {
        this.position += value * this.direction;
    }

    reverse() {
        this.direction *= -1;
    }

    setSpot(index, effect) {
        if (!['in', 'out'].includes(this.scheme[index].effect)) {
            if (this.getLimit(effect) < 4) {
                this.scheme[index] = new MAPPINGS[effect]();
            } else {
                alert(`Достигнут лимит для этого типа ячейки`)
            }
        }
    }

    getSpot(index) {
        return this.scheme[index]
    }

    getLimit(effect) {
        return this.scheme.filter(spot => spot instanceof MAPPINGS[effect] && effect !== 'empty').length
    }
}