export default class Spot {
    effect
}

export class EmptySpot extends Spot {
    effect = 'empty'
}

export class StartSpot extends Spot {
    effect = 'in'
}

export class FinishSpot extends Spot {
    effect = 'out'
}

export class BatterySpot extends Spot {
    effect = 'battery'
    completed
    order
}

export class RandomSpot extends Spot {
    effect = 'random'
}

export class ReverseSpot extends Spot {
    effect = 'reverse'
}