<template>
  <div class="the-dice">
    <div class="dice" :style="{ transform: `rotateY(${y}deg) rotateX(${x}deg) rotateZ(${z}deg)`}">
      <div class="box">
        <svg class="front">
          <circle cx="30" cy="30" r="20"></circle>
          <circle cx="75" cy="30" r="20"></circle>
          <circle cx="120" cy="30" r="20"></circle>
          <circle cx="30" cy="120" r="20"></circle>
          <circle cx="75" cy="120" r="20"></circle>
          <circle cx="120" cy="120" r="20"></circle>
        </svg>
        <svg class="back">
          <circle cx="75" cy="75" r="20"></circle>
        </svg>
        <svg class="left">
          <circle cx="30" cy="30" r="20"></circle>
          <circle cx="120" cy="120" r="20"></circle>
        </svg>
        <svg class="right">
          <circle cx="30" cy="30" r="20"></circle>
          <circle cx="120" cy="30" r="20"></circle>
          <circle cx="30" cy="120" r="20"></circle>
          <circle cx="120" cy="120" r="20"></circle>
          <circle cx="75" cy="75" r="20"></circle>
        </svg>
        <svg class="top">
          <circle cx="30" cy="30" r="20"></circle>
          <circle cx="120" cy="30" r="20"></circle>
          <circle cx="30" cy="120" r="20"></circle>
          <circle cx="120" cy="120" r="20"></circle>
        </svg>
        <svg class="bottom">
          <circle cx="30" cy="30" r="20"></circle>
          <circle cx="75" cy="75" r="20"></circle>
          <circle cx="120" cy="120" r="20"></circle>
        </svg>
      </div>
    </div>

    <div class="controls">
      <button @click="axisX">
        x
      </button>

      <button @click="axisY">
        y
      </button>

      <button @click="axisZ">
        z
      </button>
    </div>
  </div>
</template>

<script>
//https://codepen.io/HunorMarton/pen/mdERrLy
export default {
  name: 'TheDice',
  data() {
    return {
      x: 0,
      y: 0,
      z: 0,
    };
  },
  methods: {
    axisX() {
      this.x += 10;
    },

    axisY() {
      this.y += 10;
    },

    axisZ() {
      this.z += 10;
    }
  }
}
</script>

<style lang="scss">
.the-dice {
  position: absolute;
  margin: auto;
  left: 0;
  top: 300px;
  right: 0;

  .controls {
    top: 100%;
    position: relative;
  }
}

$base-color: lighten(#036, 10%);

.dice {
  display: flex;
  justify-content: center;
  align-items: center;

  transform-origin: center center;
  transform-style: preserve-3d;
  transition: transform 1s;

  .box {
    transform-style: preserve-3d;

    $size: 150px;

    width: $size;
    height: $size;
    position: relative;

    svg {
      background-color: white;
      border: 2px solid lighten($base-color, 5%);
      fill: darken($base-color, 10%);
      position: absolute;
      border-radius: 10px;

      width: $size;
      height: $size;
    }

    // Put the sides of the dice in place
    .front {
      transform: translateX(-$size / 2) translateZ($size / 2);
    }
    .back {
      transform: translateX(-$size / 2) rotateX(180deg) translateZ($size / 2);
    }
    .right {
      transform: translateX(-$size / 2) rotateY(90deg) translateZ($size / 2);
    }
    .left {
      transform: translateX(-$size / 2) rotateY(-90deg) translateZ($size / 2);
    }
    .top {
      transform: translateX(-$size / 2) rotateX(90deg) translateZ($size / 2);
    }
    .bottom {
      transform: translateX(-$size / 2) rotateX(-90deg) translateZ($size / 2);
    }
  }
}
</style>