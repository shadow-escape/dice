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

    <div
        v-if="dice.freeze"
        class="position-absolute row justify-content-between w-100 h-100"
    >
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
          <fa-icon :icon="dice.getDirectionTitle(direction)"/>
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
.the-dice {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dice {
  --size: 4vh;
  --offset: calc(var(--size) / 2);
  --n-offset: calc(-1 * var(--offset));
  --spot: calc(var(--size) / 4);
  --n-spot: calc(-1 * var(--spot));
  --spot-size: calc(var(--spot) / 1.25);
  position: relative;
  width: var(--size);
  height: var(--size);
  transform-style: preserve-3d;
  transition: transform .25s;

  @media screen and (orientation: landscape) {
    --size: 4vw;
  }

  &.is-frozen {
    transition: unset !important;
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
      width: var(--spot-size);
      height: var(--spot-size);
      background-color: #222;
      border-radius: 50%;
    }
  }

  .one {
    transform: translateZ(var(--offset));
  }

  .two {
    transform: translateX(var(--n-offset)) rotateY(-90deg);

    &:before {
      background: transparent;
      box-shadow:
          #222 var(--n-spot) var(--n-spot) 0 0,
          #222 var(--spot) var(--spot) 0 0;
    }
  }

  .three {
    transform: translateY(var(--offset)) rotateX(90deg);
    &:before {
      box-shadow:
          #222 var(--n-spot) var(--spot) 0 0,
          #222 var(--spot) var(--n-spot) 0 0;
    }
  }

  .four {
    transform: translateY(var(--n-offset)) rotateX(90deg);
    &:before {
      background: transparent;
      box-shadow:
          #222 var(--n-spot) var(--spot) 0 0,
          #222 var(--n-spot) var(--n-spot) 0 0,
          #222 var(--spot) var(--spot) 0 0,
          #222 var(--spot) var(--n-spot) 0 0;
    }
  }

  .five {
    transform: translateX(var(--offset)) rotateY(90deg);
    &:before {
      box-shadow:
          #222 var(--n-spot) var(--n-spot) 0 0,
          #222 var(--n-spot) var(--spot) 0 0,
          #222 var(--spot) var(--n-spot) 0 0,
          #222 var(--spot) var(--spot) 0 0;
    }
  }

  .six {
    transform: translateZ(var(--n-offset));
    &:before {
      background: transparent;
      box-shadow:
          #222 var(--n-spot) var(--n-spot) 0 0,
          #222 var(--n-spot) 0 0 0,
          #222 var(--n-spot) var(--spot) 0 0,
          #222 var(--spot) var(--n-spot) 0 0,
          #222 var(--spot) 0 0 0,
          #222 var(--spot) var(--spot) 0 0;
    }
  }
}

</style>