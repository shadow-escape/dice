<template>
  <circle
      ref="spot"
      v-tippy
      v-bind="$attrs"
      :class="classList"
      :data-index="index"
      @drop="onDrop"
      @dragenter.prevent
      @dragover.prevent="hover = true"
      @dragleave="hover = false"
      @mouseover="robot.setOver(index)"
      @mouseleave="robot.setOver(false)"
      @click="robot.move(index)"
  />
</template>

<script>
import Robot from '@/services/Robot'
import tippy, {hideAll} from 'tippy.js';

tippy.setDefaultProps({
  allowHTML: true,
  trigger: 'manual',
  hideOnClick: false,
  arrow: false
});

export default {
  name: 'TheMapSpot',

  props: {
    robot: Robot,
    index: Number,
    drag: Boolean,
  },

  data() {
    return {
      hover: false
    };
  },

  watch: {
    available: {
      immediate: true,
      deep: true,
      handler(value) {
        hideAll()
        if (value) {
          const tooltip = tippy(this.$el)
          const { value, moves } = this.robot.available.find(spot => spot.index === this.index)

          tooltip.setContent(`
            <div class="tippy-wrapper">
                <strong>${value}</strong>: ${moves.title}
            </div>
          `)
          tooltip.show()
        }
      }
    }
  },

  computed: {
    effect() {
      return this.robot.getSpot(this.index).effect
    },

    position() {
      return this.robot.position === this.index
    },

    available() {
      return this.robot.available.some(spot => spot.index === this.index)
    },

    over() {
      return this.hover === this.index
    },

    possible() {
      return this.robot.over === this.index
    },

    completed() {
      return this.robot.getSpot(this.index)?.completed
    },

    classList() {
      const {drag, effect, position, available, over, completed, possible} = this
      const base = `spot-${effect}`

      return [base, {
        'spot-drop': drag,
        'spot-robot': position,
        'spot-available': available,
        'spot-over': over,
        'spot-completed': completed,
        'spot-possible': possible
      }];
    }
  },

  methods: {
    onDrop(event) {
      this.hover = false

      this.$emit('update:drop', {
        index: event.target.dataset.index,
        effect: event.dataTransfer.getData('text')
      })
    }
  }
}
</script>

<style lang="scss">
.tippy-wrapper {
  font-size: 2.5vh
}

circle {
  fill: lightgray;

  &:focus {
    outline: 0;
  }
}

.spot-drop:not(.spot-in):not(.spot-out) {
  // filter: drop-shadow(0 0 5px #fff);
  stroke: #fff;
  stroke-width: 1px;
  stroke-dasharray: 10;
  //paint-order: stroke;
}

.spot-in { fill: url(#spot-in); }
.spot-out { fill: url(#spot-out); }
.spot-battery {
  fill: url(#spot-battery);

  &.spot-completed {
    stroke: #000000;
  }
}
.spot-reverse { fill: url(#spot-reverse); }
.spot-random { fill: url(#spot-random); }
.spot-robot {
  fill: url(#spot-robot);

  &.spot-in { fill: url(#spot-robot-in); }
  &.spot-out { fill: url(#spot-robot-out); }
  &.spot-reverse { fill: url(#spot-robot-on-reverse); }
  &.spot-random { fill: url(#spot-robot-on-random); }
  &.spot-battery { fill: url(#spot-robot-on-battery); }
}

.spot-available {
  stroke: #ff0000;
  stroke-width: 4px;
  cursor: pointer;

  &:hover, &.spot-possible {
    fill: url(#spot-robot);

    &.spot-in { fill: url(#spot-robot-in); }
    &.spot-out { fill: url(#spot-robot-out); }
    &.spot-reverse { fill: url(#spot-robot-on-reverse); }
    &.spot-random { fill: url(#spot-robot-on-random); }
    &.spot-battery { fill: url(#spot-robot-on-battery); }
  }
}

.spot-over {
  fill: #a9cdbb !important;
}
</style>