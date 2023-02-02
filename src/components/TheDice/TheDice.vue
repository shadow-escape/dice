<template>
  <div class="the-dice position-relative">
    <div
        class="dice"
        :class="{'is-frozen': dice.freeze }"
        :style="{ transform: `rotateX(-15deg) rotateY(30deg) ${transform}` }">
      <div class="side one"></div>
      <div class="side two"></div>
      <div class="side three"></div>
      <div class="side four"></div>
      <div class="side five"></div>
      <div class="side six"></div>
    </div>

    <div class="position-absolute row justify-content-between w-100 h-100">
      <div
          v-for="direction in dice.directions"
          :key="direction"
          class="col-4 align-self-center"
      >
        <input
            :id="direction"
            :value="direction"
            class="btn-check"
            type="radio"
            :checked="dice.direction === direction"
            @change="dice.setDirection(direction)"
        >
        <label class="btn btn-light btn-sm" :for="direction">
          <fa-icon
              :icon="dice.getDirectionTitle(direction)"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import Dice from '@/services/Dice'

export default {
  name: 'TheDice',

  props: {
    dice: Dice
  },

  computed: {
    transform() {
      const [x, y, z] = this.dice.coordinates

      return `rotateX(${x * 90}deg) rotateY(${y * 90}deg) rotateZ(${z * 90}deg)`
    }
  }
}
</script>

<style lang="scss">
$size: 3.5vw;
$offset: calc($size / 2);
$spot: calc($size / 4);
$spot-size: calc($spot / 1.25);

.the-dice {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dice {
  position: relative;
  width: $size;
  height: $size;
  transform-style: preserve-3d;
  transition: transform .25s;

  &.is-frozen {
    transition: unset !important;
  }
}

.side {
  width: 100%;
  height: 100%;
  background: #fff;
  border: 2px inset black;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    width: $spot-size;
    height: $spot-size;
    background-color: #222;
    border-radius: 50%;
  }
}

.one {
  transform: translateZ($offset);
}

.two {
  transform: translateX(-$offset) rotateY(-90deg);

  &:before {
    background: transparent;
    box-shadow:
        #222 (-$spot) (-$spot) 0 0,
        #222 $spot $spot 0 0;
  }
}

.three {
  transform: translateY($offset) rotateX(90deg);
  &:before {
    box-shadow:
        #222 (-$spot) $spot 0 0,
        #222 $spot (-$spot) 0 0;
  }
}

.four {
  transform: translateY(-$offset) rotateX(90deg);
  &:before {
    background: transparent;
    box-shadow:
        #222 (-$spot) $spot 0 0,
        #222 (-$spot) (-$spot) 0 0,
        #222 $spot $spot 0 0,
        #222 $spot (-$spot) 0 0;
  }
}

.five {
  transform: translateX($offset) rotateY(90deg);
  &:before {
    box-shadow:
        #222 (-$spot) (-$spot) 0 0,
        #222 (-$spot) $spot 0 0,
        #222 $spot (-$spot) 0 0,
        #222 $spot $spot 0 0;
  }
}

.six {
  transform: translateZ(-$offset);
  &:before {
    background: transparent;
    box-shadow:
        #222 (-$spot) (-$spot) 0 0,
        #222 (-$spot) 0 0 0,
        #222 (-$spot) $spot 0 0,
        #222 $spot (-$spot) 0 0,
        #222 $spot 0 0 0,
        #222 $spot $spot 0 0;
  }
}
</style>