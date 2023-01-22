import {StartSpot, FinishSpot, BatterySpot, RandomSpot, ReverseSpot, EmptySpot} from '@/services/model/Spot'

export const MAPPINGS = {
    empty: EmptySpot,
    in: StartSpot,
    out: FinishSpot,
    battery: BatterySpot,
    random: RandomSpot,
    reverse: ReverseSpot
}

export const SCHEME = [
    'in',
    ...Array(21).fill('empty'),
    'out',
    ...Array(17).fill('empty')
]