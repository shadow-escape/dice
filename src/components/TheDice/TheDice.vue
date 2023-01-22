<template>
  <div class="the-dice position-relative">
    <div class="dice" :style="{
        transform: `rotateX(-15deg) rotateY(30deg)
                  rotateX(${dice.coordinates[0] * 90}deg)
                  rotateY(${dice.coordinates[1] * 90}deg)
                  rotateZ(${dice.coordinates[2] * 90}deg)
        `}">
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
        <label class="btn btn-light w-100" :for="direction">
          {{ dice.getDirectionTitle(direction) }}
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
  }
}
</script>

<style lang="scss">
$size: 6vh;
$offset: calc($size / 2);

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
  transition: transform .3s;
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
    content: "";
    width: 1vh;
    height: 1vh;
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
        #222 -1.25vh -1.25vh 0px 0px,
        #222 1.25vh 1.25vh 0px 0px;
  }
}

.three {
  transform: translateY($offset) rotateX(90deg);
  &:before {
    box-shadow:
        #222 -1.25vh 1.25vh 0px 0px,
        #222 1.25vh -1.25vh 0px 0px;
  }
}

.four {
  transform: translateY(-$offset) rotateX(90deg);
  &:before {
    background: transparent;
    box-shadow:
        #222 -1.25vh 1.25vh 0px 0px,
        #222 -1.25vh -1.25vh 0px 0px,
        #222 1.25vh 1.25vh 0px 0px,
        #222 1.25vh -1.25vh 0px 0px;
  }
}

.five {
  transform: translateX($offset) rotateY(90deg);
  &:before {
    box-shadow:
        #222 -1.25vh -1.25vh 0px 0px,
        #222 -1.25vh 1.25vh 0px 0px,
        #222 1.25vh -1.25vh 0px 0px,
        #222 1.25vh 1.25vh 0px 0px;
  }
}

.six {
  transform: translateZ(-$offset);
  &:before {
    background: transparent;
    box-shadow:
        #222 -1.25vh -1.25vh 0px 0px,
        #222 -1.25vh 0px 0px 0px,
        #222 -1.25vh 1.25vh 0px 0px,
        #222 1.25vh -1.25vh 0px 0px,
        #222 1.25vh 0px 0px 0px,
        #222 1.25vh 1.25vh 0px 0px;
  }
}
</style>