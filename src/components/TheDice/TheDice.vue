<template>
  <div class="the-dice">
    <div class="dice" :style="{
      transform: `rotateX(-15deg)
                  rotateY(30deg)
                  rotateX(${current.coordinates[0] * 90}deg)
                  rotateY(${current.coordinates[1] * 90}deg)
                  rotateZ(${current.coordinates[2] * 90}deg)
                  `}">
      <div class="side one"></div>
      <div class="side two"></div>
      <div class="side three"></div>
      <div class="side four"></div>
      <div class="side five"></div>
      <div class="side six"></div>
    </div>

    <div style="margin-top: 20px">
      <label v-for="item in directions" :key="item" style="color: #fff">
        <input type="radio" v-model="direction" :value="item">
        <span>{{ item }}</span>
      </label>
    </div>
  </div>
</template>

<script>
import {DIRECTIONS, variants} from "@/components/TheDice/config";

export default {
  name: 'TheDice',

  props: {
    position: {
      type: Number,
      validator(value) {
        return value >= 0 && value < 24;
      }
    }
  },

  data() {
    return {
      direction: null,
      variants,
      directions: DIRECTIONS,
    };
  },

  computed: {
    current() {
      return this.variants[this.position];
    }
  },

  watch: {
    direction: {
      handler(value, old) {
        if (value !== old) {
          this.$emit('update:available', this.current.moves[value]);
        }
      },
    },

    position: {
      handler() {
        this.direction = null;
      }
    }
  }
}
</script>

<style lang="scss">
.controls {
  margin-top: 20px;
}

.dice {
  position: relative;
  width: 60px;
  height: 60px;
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
    width: 7px;
    height: 7px;
    background-color: #222;
    border-radius: 50%;
  }
}
.one {
  transform: translateZ(32px);
}
.two {
  transform: translateX(-32px) rotateY(-90deg);
  &:before {
    background: transparent;
    box-shadow:
        #222 -10px -10px 0px 0px,
        #222 10px 10px 0px 0px;
  }
}
.three {
  transform: translateY(32px) rotateX(90deg);
  &:before {
    box-shadow:
        #222 -10px 10px 0px 0px,
        #222 10px -10px 0px 0px;
  }
}
.four {
  transform: translateY(-32px) rotateX(90deg);
  &:before {
    background: transparent;
    box-shadow:
        #222 -10px 10px 0px 0px,
        #222 -10px -10px 0px 0px,
        #222 10px 10px 0px 0px,
        #222 10px -10px 0px 0px;
  }
}
.five {
  transform: translateX(32px) rotateY(90deg);
  &:before {
    box-shadow:
        #222 -10px -10px 0px 0px,
        #222 -10px 10px 0px 0px,
        #222 10px -10px 0px 0px,
        #222 10px 10px 0px 0px;
  }
}
.six {
  transform: translateZ(-32px);
  &:before {
    background: transparent;
    box-shadow:
        #222 -10px -10px 0px 0px,
        #222 -10px 0px 0px 0px,
        #222 -10px 10px 0px 0px,
        #222 10px -10px 0px 0px,
        #222 10px 0px 0px 0px,
        #222 10px 10px 0px 0px;
  }
}
</style>