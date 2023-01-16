<template>
  <div class="the-dice">
    <div class="dice" :style="{transform: ` rotateX(-15deg) rotateY(30deg) rotateX(${coordinates[0]}deg) rotateY(${coordinates[1]}deg) rotateZ(${coordinates[2]}deg)`}">
      <div class="side one"></div>
      <div class="side two"></div>
      <div class="side three"></div>
      <div class="side four"></div>
      <div class="side five"></div>
      <div class="side six"></div>
    </div>

    <div class="controls">
      <button @click="axisXp">
        x+
      </button>

      <button @click="axisYp">
        y+
      </button>

      <button @click="axisZp">
        z+
      </button>

      <button @click="axisXm">
        x-
      </button>

      <button @click="axisYm">
        y-
      </button>

      <button @click="axisZm">
        z-
      </button>
    </div>

    <div style="color: #fff">
      {{ coordinates[0] }}, {{ coordinates[1] }}, {{ coordinates[2] }}
    </div>
  </div>
</template>

<script>
//https://codepen.io/HunorMarton/pen/mdERrLy
const DIRECTIONS = {
  RIGHT: 'RIGHT',
  UP: 'UP'
}

export default {
  name: 'TheDice',
  data() {
    return {
      coordinates: [180, 270, 180],
      variants: [
        {// 0
          value: 1, // 1-2
          coordinates: [0, 0, 90], //0 0 90
          actions: {
            [DIRECTIONS.RIGHT]: {
              2: {position: 4, rotate: [90, 0, 90, 90, 0, 0, 90, 0, -90]},
              5: {position: 19, rotate: [0, 90, 90, 0, 180, 90, 90, 180, 90]},
              6: {position: 21, rotate: [0, 90, 90, 0, 90, 180, 0, 180, 180]}
            },
            [DIRECTIONS.UP]: {
              3: {position: 11, rotate: [90, 0, 90, 180, 0, 90, 180, -90, 90]},
              4: {position: 14, rotate: [0, 90, 90, 0, 90, 180, 0, 90, 270]},
              6: {position: 21, rotate: [90, 0, 90, 90, 0, 0, 180, 0, 0]}
            }
          }
        },
        {//1
          value: 1, // 1-3
          coordinates: [0, 0, 180],
          actions: {
            [DIRECTIONS.RIGHT]: {
              3: {position: 8, rotate: [90, 0, 180, 90, 0, 90, 90, 0, 0]},
              4: {position: 15, rotate: [0, 90, 180, 0, 180, 180, 90, 180, 180]},
              6: {position: 23, rotate: [0, 90, 180, 0, 90, 270, 0, 180, 270]}
            },
            [DIRECTIONS.UP]: {
              2: {position: 6, rotate: [0, 90, 180, 0, 90, 270, 0, 90, 360]},
              5: {position: 18, rotate: [90, 0, 180, 180, 0, 180, 180, -90, 180]},
              6: {position: 23, rotate: [90, 0, 180, 90, 0, 90, 180, 0, 90]}
            }
          }
        },
        {//2
          value: 1, // 1-4
          coordinates: [0, 0, 0],
          actions: {
            [DIRECTIONS.RIGHT]: {
              3: {position: 11, rotate: [0, 90, 0, 0, 180, 0, 90, 180, 0]},
              4: {position: 12, rotate: [90, 0, 0, 90, 0, -90, 90, 0, -180]},
              6: {position: 20, rotate: [0, 90, 0, 0, 90, 90, 0, 180, 90]}
            },
            [DIRECTIONS.UP]: {
              2: {position: 5, rotate: [90, 0, 0, 180, 0, 0, 180, -90, 0]},
              5: {position: 17, rotate: [0, 90, 0, 0, 90, 90, 0, 90, 180]},
              6: {position: 20, rotate: [90, 0, 0, 90, 0, -90, 180, 0, -90]}
            }
          }
        },
        {//3
          value: 1, // 1-5
          coordinates: [0, 0, 270],
          actions: {
            [DIRECTIONS.RIGHT]: {
              2: {position: 7, rotate: [0, 90, 270, 0, 180, 270, 90, 180, 270]},
              5: {position: 16, rotate: [90, 0, 270, 90, 0, 180, 90, 0, 90]},
              6: {position: 22, rotate: [0, 90, 270, 0, 90, 360, 0, 180, 360]}
            },
            [DIRECTIONS.UP]: {
              3: {position: 9, rotate: [0, 90, 270, 90, 90, 270, 180, 90, 270]},
              4: {position: 13, rotate: [90, 0, 270, 180, 0, 270, 180, -90, 270]},
              6: {position: 22, rotate: [90, 0, 270, 90, 0, 180, 180, 0, 180]}
            }
          }
        },
        {//4
          value: 2, // 2-1
          coordinates: [90, 0, -90],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 0, rotate: [180, 0, -90, 180, -90, -90, 180, -180, -90]},
              5: {position: 18, rotate: [90, 0, -180, 180, 0, -180, 180, -90, -180]},
              6: {position: 23, rotate: [90, 0, -180, 90, 0, -270, 180, 0, -270]}
            },
            [DIRECTIONS.UP]: {
              3: {position: 11, rotate: [90, 0, -180, 180, 0, -180, 270, 0, -180]},
              4: {position: 15, rotate: [180, 0, -90, 270, 0, -90, 270, 0, 0]},
              5: {position: 18, rotate: [180, 0, -90, 180, -90, -90, 270, -90, -90]}
            }
          }
        },
        {//5
          value: 2, // 2-3
          coordinates: [180, -90, 0],
          actions: {
            [DIRECTIONS.RIGHT]: {
              3: {position: 9, rotate: [180, 270, -90, 180, 180, -90, 180, 90, -90]},
              4: {position: 16, rotate: [180, -180, 0, 180, -270, 0, 180, -270, 90]},
              5: {position: 16, rotate: [180, -180, 0, 270, -180, 0, 270, -180, -90]}
            },
            [DIRECTIONS.UP]: {
              1: {position: 2, rotate: [270, -90, 0, 360, -90, 0, 360, 0, 0]},
              5: {position: 16, rotate: [180, -90, -90, 180, -180, -90, 270, -180, -90]},
              6: {position: 22, rotate: [180, -180, 0, 270, -180, 0, 360, -180, 0]}
            }
          }
        },
        {//6
          value: 2, // 2-4
          coordinates: [0, 90, 0],
          actions: {
            [DIRECTIONS.RIGHT]: {
              3: {position: 10, rotate: [0, 180, 0, 0, 270, 0, 0, 270, -90]},
              4: {position: 13, rotate: [0, 90, 90, 0, 180, 90, 0, 270, 90]},
              5: {position: 19, rotate: [0, 180, 0, 90, 180, 0, 90, 180, 90]}
            },
            [DIRECTIONS.UP]: {
              1: {position: 1, rotate: [0, 180, 0, 90, 180, 0, 180, 180, 0]},
              5: {position: 19, rotate: [0, 90, 90, 0, 180, 90, 90, 180, 90]},
              6: {position: 21, rotate: [0, 90, 90, 0, 90, 180, 0, 180, 180]}
            }
          }
        },
        {//7
          value: 2, // 2-6
          coordinates: [-90, 0, 90],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 3, rotate: [-90, 0, 180, -90, 0, 270, 0, 0, 270]},
              5: {position: 17, rotate: [-90, 0, 180, 0, 0, 180, 0, 90, 180]},
              6: {position: 20, rotate: [0, 0, 90, 0, 90, 90, 0, 180, 90]}
            },
            [DIRECTIONS.UP]: {
              3: {position: 8, rotate: [0, 0, 90, 90, 0, 90, 90, 0, 0]},
              4: {position: 12, rotate: [-90, 0, 180, 0, 0, 180, 90, 0, 180]},
              5: {position: 17, rotate: [0, 0, 90, 0, 90, 90, 90, 90, 90]}
            }
          }
        },
        {//8
          value: 3, // 3-1
          coordinates: [90, 0, 0],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 1, rotate: [180, 0, 0, 180, -90, 0, 180, -180, 0]},
              4: {position: 13, rotate: [90, 0, -90, 180, 0, -90, 180, -90, -90]},
              6: {position: 22, rotate: [90, 0, -90, 90, 0, -180, 180, 0, -180]}
            },
            [DIRECTIONS.UP]: {
              2: {position: 7, rotate: [180, 0, 0, 270, 0, 0, 270, 0, 90]},
              4: {position: 13, rotate: [180, 0, 0, 180, -90, 0, 270, -90, 0]},
              5: {position: 19, rotate: [90, 0, -90, 180, 0, -90, 270, 0, -90]}
            }
          }
        },
        {//9
          value: 3, // 3-2
          coordinates: [0, 90, -270],
          actions: {
            [DIRECTIONS.RIGHT]: {
              2: {position: 5, rotate: [0, 90, -180, 0, 180, -180, 0, 270, -180]},
              4: {position: 15, rotate: [0, 180, -270, 90, 180, -270, 90, 180, -180]},
              5: {position: 18, rotate: [0, 180, -270, 0, 270, -270, 90, 270, -270]}
            },
            [DIRECTIONS.UP]: {
              1: {position: 3, rotate: [0, 180, -270, 90, 180, -270, 180, 180, -270]},
              4: {position: 15, rotate: [0, 90, -180, 0, 180, -180, 90, 180, -180]},
              6: {position: 23, rotate: [0, 90, -180, 0, 90, -90, 0, 180, -90]}
            }
          }
        },
        {//10
          value: 3, // 3-5
          coordinates: [0, -90, 270],
          actions: {
            [DIRECTIONS.RIGHT]: {
              2: {position: 6, rotate: [0, 0, 270, 0, 90, 270, 90, 90, 270]},
              4: {position: 12, rotate: [0, 0, 270, 90, 0, 270, 90, 0, 180]},
              5: {position: 17, rotate: [0, -90, 180, 0, 0, 180, 0, 90, 180]}
            },
            [DIRECTIONS.UP]: {
              1: {position: 0, rotate: [90, -90, 270, 180, -90, 270, 180, -180, 270]},
              4: {position: 12, rotate: [0, -90, 180, 0, 0, 180, 90, 0, 180]},
              6: {position: 20, rotate: [0, 0, 270, 90, 0, 270, 180, 0, 270]}
            }
          }
        },
        {//11
          value: 3, // 3-6
          coordinates: [90, 180, 0],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 2, rotate: [90, 180, 90, 90, 180, 180, 180, 180, 180]},
              4: {position: 14, rotate: [90, 180, 90, 180, 180, 90, 180, 90, 90]},
              6: {position: 21, rotate: [180, 180, 0, 180, 90, 0, 180, 0, 0]}
            },
            [DIRECTIONS.UP]: {
              2: {position: 4, rotate: [90, 180, 90, 180, 180, 90, 270, 180, 90]},
              4: {position: 14, rotate: [180, 180, 0, 180, 90, 0, 270, 90, 0]},
              5: {position: 16, rotate: [180, 180, 0, 270, 180, 0, 270, 180, -90]}
            }
          }
        },
        {//12
          value: 4, // 4-1
          coordinates: [90, 0, 180],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 2, rotate: [180, 0, 180, 180, -90, 180, 180, -180, 180]},
              3: {position: 10, rotate: [90, 0, 90, 180, 0, 90, 180, -90, 90]},
              6: {position: 21, rotate: [90, 0, 90, 90, 0, 0, 180, 0, 0]}
            },
            [DIRECTIONS.UP]: {
              2: {position: 7, rotate: [90, 0, 90, 180, 0, 90, 270, 0, 90]},
              3: {position: 10, rotate: [180, 0, 180, 180, -90, 180, 270, -90, 180]},
              5: {position: 19, rotate: [180, 0, 180, 270, 0, 180, 270, 0, 270]}
            }
          }
        },
        {//13
          value: 4, // 4-2
          coordinates: [0, -90, 90],
          actions: {
            [DIRECTIONS.RIGHT]: {
              2: {position: 6, rotate: [0, -90, 0, 0, 0, 0, 0, 90, 0]},
              3: {position: 8, rotate: [0, 0, 90, 90, 0, 90, 90, 0, 0]},
              5: {position: 17, rotate: [0, 0, 90, 0, 90, 90, 90, 90, 90]}
            },
            [DIRECTIONS.UP]: {
              1: {position: 3, rotate: [90, -90, 90, 180, -90, 90, 180, -180, 90]},
              3: {position: 8, rotate: [0, -90, 0, 0, 0, 0, 90, 0, 0]},
              6: {position: 23, rotate: [0, 0, 90, 90, 0, 90, 180, 0, 90]}
            }
          }
        },
        {//14
          value: 4, // 4-5
          coordinates: [0, 90, -90],
          actions: {
            [DIRECTIONS.RIGHT]: {
              2: {position: 5, rotate: [0, 180, -90, 0, 270, -90, 90, 270, -90]},
              3: {position: 11, rotate: [0, 180, -90, 90, 180, -90, 90, 180, 0]},
              5: {position: 18, rotate: [0, 90, 0, 0, 180, 0, 0, 270, 0]}
            },
            [DIRECTIONS.UP]: {
              1: {position: 0, rotate: [0, 180, -90, 90, 180, -90, 180, 180, -90]},
              3: {position: 11, rotate: [0, 90, 0, 0, 180, 0, 90, 180, 0]},
              6: {position: 20, rotate: [0, 90, 0, 0, 90, 90, 0, 180, 90]}
            }
          }
        },
        {//15
          value: 4, // 4-6
          coordinates: [90, 180, -180],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 1, rotate: [90, 180, -90, 90, 180, 0, 180, 180, 0]},
              3: {position: 9, rotate: [90, 180, -90, 180, 180, -90, 180, 90, -90]},
              6: {position: 22, rotate: [180, 180, -180, 180, 90, -180, 180, 0, -180]}
            },
            [DIRECTIONS.UP]: {
              2: {position: 4, rotate: [180, 180, -180, 270, 180, -180, 270, 180, -270]},
              3: {position: 9, rotate: [180, 180, -180, 180, 90, -180, 270, 90, -180]},
              5: {position: 16, rotate: [90, 180, -90, 180, 180, -90, 270, 180, -90]}
            }
          }
        },
        {//16
          value: 5, //5-1
          coordinates: [-90, 180, -90],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 3, rotate: [0, 180, -90, 0, 270, -90, 0, 360, -90]},
              2: {position: 5, rotate: [-90, 180, -180, 0, 180, -180, 0, 270, -180]},
              6: {position: 20, rotate: [-90, 180, -180, -90, 180, -270, 0, 180, -270]}
            },
            [DIRECTIONS.UP]: {
              2: {position: 5, rotate: [0, 180, -90, 0, 270, -90, 90, 270, -90]},
              3: {position: 11, rotate: [0, 180, -90, 90, 180, -90, 90, 180, 0]},
              4: {position: 15, rotate: [-90, 180, -180, 0, 180, -180, 90, 180, -180]}
            }
          }
        },
        {//17
          value: 5, //5-3
          coordinates: [-90, 90, -90],
          actions: {
            [DIRECTIONS.RIGHT]: {
              2: {position: 7, rotate: [0, 180, 180, 90, 180, 180, 90, 180, 270]},
              3: {position: 10, rotate: [0, 90, 180, 0, 180, 270, 0, 270, 270]},
              4: {position: 13, rotate: [0, 180, 180, 0, 270, 180, 90, 270, 180]}
            },
            [DIRECTIONS.UP]: {
              1: {position: 2, rotate: [0, 180, 180, 90, 180, 180, 180, 180, 180]},
              2: {position: 7, rotate: [0, 180, 180, 90, 180, 180, 90, 180, 270]},
              6: {position: 22, rotate: [90, 90, 180, 180, 90, 180, 180, 0, 180]}
            }
          }
        },
        {//18
          value: 5, //5-4
          coordinates: [180, -90, 180],
          actions: {
            [DIRECTIONS.RIGHT]: {
              2: {position: 4, rotate: [180, -180, 180, 270, -180, 180, 270, -180, 90]},
              3: {position: 9, rotate: [180, -180, 180, 180, -270, 180, 270, -270, 180]},
              4: {position: 14, rotate: [180, -90, 90, 180, -180, 90, 180, -270, 90]}
            },
            [DIRECTIONS.UP]: {
              1: {position: 1, rotate: [270, -90, 180, 360, -90, 180, 360, 0, 180]},
              2: {position: 4, rotate: [180, -90, 90, 180, -180, 90, 270, -180, 90]},
              6: {position: 21, rotate: [180, -180, 180, 270, -180, 180, 360, -180, 180]}
            }
          }
        },
        {//19
          value: 5, //5-6
          coordinates: [90, 180, 90],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 0, rotate: [90, 180, 180, 90, 180, 270, 180, 180, 270]},
              2: {position: 6, rotate: [90, 180, 180, 180, 180, 180, 180, 90, 180]},
              6: {position: 23, rotate: [180, 180, 90, 180, 90, 90, 180, 0, 90]}
            },
            [DIRECTIONS.UP]: {
              2: {position: 6, rotate: [180, 180, 90, 180, 90, 90, 270, 90, 90]},
              3: {position: 8, rotate: [90, 180, 180, 180, 180, 180, 270, 180, 180]},
              4: {position: 12, rotate: [180, 180, 90, 270, 180, 90, 270, 180, 0]}
            }
          }
        },
        {//20
          value: 6, //6-2
          coordinates: [0, 180, 90],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 2, rotate: [0, 270, 90, 0, 270, 0, 0, 360, 0]},
              2: {position: 7, rotate: [90, 180, 90, 90, 180, 180, 90, 180, 270]},
              5: {position: 16, rotate: [0, 270, 90, 0, 360, 90, 90, 360, 90]}
            },
            [DIRECTIONS.UP]: {
              1: {position: 2, rotate: [90, 180, 90, 90, 180, 180, 180, 180, 180]},
              3: {position: 10, rotate: [0, 270, 90, 90, 270, 90, 180, 270, 90]},
              4: {position: 14, rotate: [90, 180, 90, 180, 180, 90, 180, 90, 90]}
            },
          }
        },
        {//21
          value: 6, //6-3
          coordinates: [0, 180, 180],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 0, rotate: [0, 270, 180, 0, 270, 90, 0, 360, 90]},
              3: {position: 11, rotate: [90, 180, 180, 90, 180, 270, 90, 180, 360]},
              4: {position: 12, rotate: [0, 270, 180, 0, 360, 180, 90, 360, 180]}
            },
            [DIRECTIONS.UP]: {
              1: {position: 0, rotate: [90, 180, 180, 90, 180, 270, 180, 180, 270]},
              2: {position: 6, rotate: [90, 180, 180, 180, 180, 180, 180, 90, 180]},
              5: {position: 18, rotate: [0, 270, 180, 90, 270, 180, 180, 270, 180]}
            }
          }
        },
        {//22
          value: 6, //6-4
          coordinates: [0, 180, 0],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 3, rotate: [0, 270, 0, 0, 270, -90, 0, 360, -90]},
              3: {position: 8, rotate: [0, 270, 0, 0, 360, 0, 90, 360, 0]},
              4: {position: 15, rotate: [90, 180, 0, 90, 180, 90, 90, 180, 180]}
            },
            [DIRECTIONS.UP]: {
              1: {position: 3, rotate: [90, 180, 0, 90, 180, 90, 180, 180, 90]},
              2: {position: 5, rotate: [0, 270, 0, 90, 270, 0, 180, 270, 0]},
              5: {position: 17, rotate: [90, 180, 0, 180, 180, 0, 180, 90, 0]}
            }
          }
        },
        {
          value: 6,
          coordinates: [0, 180, 270],
          actions: {
            [DIRECTIONS.RIGHT]: {
              1: {position: 1, rotate: [0, 270, 270, 0, 270, 180, 0, 360, 180]},
              2: {position: 4, rotate: [0, 270, 270, 0, 360, 270, 90, 360, 270]},
              5: {position: 19, rotate: [90, 180, 270, 90, 180, 360, 90, 180, 450]},
            },
            [DIRECTIONS.UP]: {
              1: {position: 1, rotate: [90, 180, 270, 90, 180, 360, 180, 180, 360]},
              3: {position: 9, rotate: [90, 180, 270, 180, 180, 270, 180, 90, 270]},
              4: {position: 13, rotate: [0, 270, 270, 90, 270, 270, 180, 270, 270]},
            }
          }
        }
      ]
    };
  },
  methods: {
    axisXp() {
      this.coordinates[0] += 90;
    },

    axisYp() {
      this.coordinates[1] += 90;
    },

    axisZp() {
      this.coordinates[2] += 90;
    },

    axisXm() {
      this.coordinates[0] -= 90;
    },

    axisYm() {
      this.coordinates[1] -= 90;
    },

    axisZm() {
      this.coordinates[2] -= 90;
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