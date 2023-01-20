export default class Robot {
    position = 0
    direction = 1

    move(value) {
        this.position += value * this.direction;
    }

    reverse() {
        this.direction *= -1;
    }
}