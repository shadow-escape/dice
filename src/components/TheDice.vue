<template>
  <div class="the-dice">
    <div class="dice" :style="{transform: ` rotateX(-15deg) rotateY(30deg) rotateX(${position[0]}deg) rotateY(${position[1]}deg) rotateZ(${position[2]}deg)`}">
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
      [{{ position[0] }}, {{ position[1] }}, {{ position[2] }}]
    </div>
  </div>
</template>

<script>
//https://codepen.io/HunorMarton/pen/mdERrLy
export default {
  name: 'TheDice',
  data() {
    return {
      position: [90, 0, 0],
      variants: [
        {// 0
          value: 1, // 1-2
          position: [0, 0, 90], //0 0 90
          actions: {
            r: {
              2: {state: 4, rotate: [[90, 0, 90], [90, 0, 0], [90, 0, -90]]},
              5: {state: null, rotate: [[0, 90, 90], [0, 180, 90], [90, 180, 90]]},
              6: {state: null, rotate: [[0, 90, 90], [0, 90, 180], [0, 180, 180]]},
            },
            u: {
              3: {state: 11, rotate: [[90, 0, 90], [180, 0, 90], [180, -90, 90]]},
              4: {state: null, rotate: [[0, 90, 90], [0, 90, 180], [0, 90, 270]]},
              6: {state: null, rotate: [[90, 0, 90], [90, 0, 0], [180, 0, 0]]},
            }
          }
        },
        {//1
          value: 1, // 1-3
          position: [0, 0, 180],
          actions: {
            r: {
              3: {state: 8, rotate: [[90, 0, 180], [90, 0, 90], [90, 0, 0]]},
              4: {state: null, rotate: [[0, 90, 180], [0, 180, 180], [90, 180, 180]]},
              6: {state: null, rotate: [[0, 90, 180], [0, 90, 270], [0, 180, 270]]}
            },
            u: {
              2: {state: 6, rotate: [[0, 90, 180], [0, 90, 270], [0, 90, 360]]},
              5: {state: null, rotate: [[90, 0, 180], [180, 0, 180], [180, -90, 180]]},
              6: {state: null, rotate: [[90, 0, 180], [90, 0, 90], [180, 0, 90]]}
            }
          }
        },
        {//2
          value: 1, // 1-4
          position: [0, 0, 0],
          actions: {
            r: {
              3: {state: 11, rotate: [[0, 90, 0], [0, 180, 0], [90, 180, 0]]},
              4: {state: null, rotate: [[90, 0, 0], [90, 0, -90], [90, 0, -180]]},
              6: {state: null, rotate: [[0, 90, 0], [0, 90, 90], [0, 90, 180]]}
            },
            u: {
              2: {state: 5, rotate: [[90, 0, 0], [180, 0, 0], [180, -90, 0]]},
              5: {state: null, rotate: [[0, 90, 0], [0, 90, 90], [0, 90, 180]]},
              6: {state: null, rotate: [[90, 0, 0], [90, 0, -90], [180, 0, -90]]}
            }
          }
        },
        {//3
          value: 1, // 1-5
          position: [0, 0, 270],
          actions: {
            r: {
              2: {state: 7, rotate: [[0, 90, 270], [0, 180, 270], [90, 180, 270]]},
              5: {state: null, rotate: [[90, 0, 270], [90, 0, 180], [90, 0, 90]]},
              6: {state: null, rotate: [[0, 90, 270], [0, 90, 360], [0, 180, 360]]}
            },
            u: {
              3: {state: 9, rotate: [[0, 90, 270], [90, 90, 270], [180, 90, 270]]},
              4: {state: null, rotate: [[90, 0, 270], [180, 0, 270], [180, -90, 270]]},
              6: {state: null, rotate: [[90, 0, 270], [90, 0, 180], [180, 0, 180]]}
            }
          }
        },
        {//4
          value: 2, // 2-1
          position: [90, 0, -90],
          actions: {
            r: {
              1: {state: 0, rotate: [[180, 0, -90], [180, -90, -90], [180, -180, -90]]},
              5: {state: null, rotate: [[90, 0, -180], [180, 0, -180], [180, -90, -180]]},
              6: {state: null, rotate: [[90, 0, -180], [90, 0, -270], [180, 0, -270]]}
            },
            u: {
              3: {state: null, rotate: [[90, 0, -180], [180, 0, -180], [270, 0, -180]]},
              4: {state: null, rotate: [[180, 0, -90], [270, 0, -90], [270, 0, 0]]},
              5: {state: null, rotate: [[180, 0, -90], [180, -90, -90], [270, -90, -90]]}
            }
          }
        },
        {//5
          value: 2, // 2-3
          position: [180, -90, 0],
          actions: {
            r: {
              3: {state: 9, rotate: [[180, 270, -90], [180, 180, -90], [180, 90, -90]]},
              4: {state: null, rotate: [[180, -180, 0], [180, -270, 0], [180, -270, 90]]},
              5: {state: null, rotate: [[180, -180, 0], [270, -180, 0], [270, -180, -90]]}
            },
            u: {
              1: {state: 2, rotate: [[270, -90, 0], [360, -90, 0], [360, 0, 0]]},
              5: {state: null, rotate: [[180, -90, -90], [180, -180, -90], [270, -180, -90]]},
              6: {state: null, rotate: [[180, -180, 0], [270, -180, 0], [360, -180, 0]]}
            }
          }
        },
        {//6
          value: 2, // 2-4
          position: [0, 90, 0],
          actions: {
            r: {
              3: {state: 10, rotate: [[0, 180, 0], [0, 270, 0], [0, 270, -90]]},
              4: {state: null, rotate: [[0, 90, 90], [0, 180, 90], [0, 270, 90]]},
              5: {state: null, rotate: [[0, 180, 0], [90, 180, 0], [90, 180, 90]]}
            },
            u: {
              1: {state: 1, rotate: [[0, 180, 0], [90, 180, 0], [180, 180, 0]]},
              5: {state: null, rotate: [[0, 90, 90], [0, 180, 90], [90, 180, 90]]},
              6: {state: null, rotate: [[0, 90, 90], [0, 90, 180], [0, 180, 180]]}
            }
          }
        },
        {//7
          value: 2, // 2-6
          position: [-90, 0, 90],
          actions: {
            r: {
              1: {state: 3, rotate: [[-90, 0, 180], [-90, 0, 270], [0, 0, 270]]},
              5: {state: null, rotate: [[-90, 0, 180], [0, 0, 180], [0, 90, 180]]},
              6: {state: null, rotate: [[0, 0, 90], [0, 90, 90], [0, 180, 90]]}
            },
            u: {
              3: {state: 8, rotate: [[0, 0, 90], [90, 0, 90], [90, 0, 0]]},
              4: {state: null, rotate: [[-90, 0, 180], [0, 0, 180], [90, 0, 180]]},
              5: {state: null, rotate: [[0, 0, 90], [0, 90, 90], [90, 90, 90]]}
            }
          }
        },
        {//8
          value: 3, // 3-1
          position: [90, 0, 0],
          actions: {
            r: {
              1: {state: 1, rotate: [[180, 0, 0], [180, -90, 0], [180, -180, 0]]},
              4: {state: null, rotate: [[90, 0, -90], [180, 0, -90], [180, -90, -90]]},
              6: {state: null, rotate: [[90, 0, -90], [90, 0, -180], [180, 0, -180]]}
            },
            u: {
              2: {state: 7, rotate: [[180, 0, 0], [270, 0, 0], [270, 0, 90]]},
              4: {state: null, rotate: [[180, 0, 0], [180, -90, 0], [270, -90, 0]]},
              5: {state: null, rotate: [[90, 0, -90], [180, 0, -90], [270, 0, -90]]}
            }
          }
        },
        {//9
          value: 3, // 3-2
          position: [0, 90, -270],
          actions: {
            r: {
              2: {state: 5, rotate: [[0, 90, -180], [0, 180, -180], [0, 270, -180]]},
              4: {state: null, rotate: [[0, 180, -270], [90, 180, -270], [90, 180, -180]]},
              5: {state: null, rotate: [[0, 180, -270], [0, 270, -270], [90, 270, -270]]},
            },
            u: {
              1: {state: 3, rotate: [[0, 180, -270], [90, 180, -270], [180, 180, -270]]},
              4: {state: null, rotate: [[0, 90, -180], [0, 180, -180], [90, 180, -180]]},
              6: {state: null, rotate: [[0, 90, -180], [0, 90, -90], [0, 180, -90]]}
            }
          }
        },
        {//10
          value: 3, // 3-5
          position: [0, -90, 270],
          actions: {
            r: {
              2: {state: 6, rotate: [[0, 0, 270], [0, 90, 270], [90, 90, 270]]},
              4: {state: null, rotate: [[0, 0, 270], [90, 0, 270], [90, 0, 180]]},
              5: {state: null, rotate: [[0, -90, 180], [0, 0, 180], [0, 90, 180]]},
            },
            u: {
              1: {state: 0, rotate: [[90, -90, 270], [180, -90, 270], [180, -180, 270]]},
              4: {state: null, rotate: [[0, -90, 180], [0, 0, 180], [90, 0, 180]]},
              6: {state: null, rotate: [[0, 0, 270], [90, 0, 270], [180, 0, 270]]},
            }
          }
        },
        {//11
          value: 3, // 3-6
          position: null,
          actions: {
            r: {
              1: {state: 2, rotate: [[90, 180, 90], [90, 180, 180], [180, 180, 180]]},
              4: {state: null, rotate: [[90, 180, 90], [180, 180, 90], [180, 90, 90]]},
              6: {state: null, rotate: [[180, 180, 0], [180, 90, 0], [180, 0, 0]]}
            },
            u: {
              2: {state: 4, rotate: [[90, 180, 90], [180, 180, 90], [270, 180, 90]]},
              4: {state: null, rotate: [[180, 180, 0], [180, 90, 0], [270, 90, 0]]},
              5: {state: null, rotate: [[180, 180, 0], [270, 180, 0], [270, 180, -90]]}
            }
          }
        }
      ]
    };
  },
  methods: {
    axisXp() {
      this.position[0] += 90;
    },

    axisYp() {
      this.position[1] += 90;
    },

    axisZp() {
      this.position[2] += 90;
    },

    axisXm() {
      this.position[0] -= 90;
    },

    axisYm() {
      this.position[1] -= 90;
    },

    axisZm() {
      this.position[2] -= 90;
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