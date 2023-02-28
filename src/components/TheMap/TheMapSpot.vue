<template>
  <g :data-index="index">
    <circle
        v-if="available && possible"
        v-bind="attrs"
        class="spot-border"
        :class="{'spot-border_possible': available && possible}"
    />
    <circle
        ref="spot"
        v-bind="attrs"
        :class="classList"
        :data-index="index"
        @mouseover="robot.setOver(index)"
        @mouseleave="robot.setOver(false)"
        @click="robot.move(index)"
    />
  </g>
</template>

<script>
import Robot from '@/services/Robot'

export default {
  name: 'TheMapSpot',

  props: {
    robot: Robot,
    index: Number,
    drag: Boolean,
    attrs: Object,
  },

  data() {
    return {
      hover: false
    };
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
      const isAvailable = available && !this.robot.isAnimated
      const base = `spot-${effect}`

      return [base, {
        'spot-drop': drag,
        'spot-robot': position,
        'spot-available': isAvailable,
        'spot-over': over,
        'spot-completed': completed,
        'spot-possible': possible && isAvailable,
      }];
    }
  }
}
</script>

<style lang="scss">
circle {
  fill: lightgray;

  &:focus {
    outline: 0;
  }
}

.spot-drop:not(.spot-in):not(.spot-out) {
  stroke: #fff;
  stroke-width: 1px;
  stroke-dasharray: 10;
}

.spot-in {
  fill: url(#spot-in);
}

.spot-out {
  fill: url(#spot-out);
}

.spot-battery {
  fill: url(#spot-battery);

  &.spot-completed {
    fill: url(#spot-battery-completed);
  }
}

.spot-reverse {
  fill: url(#spot-reverse);
}

.spot-random {
  fill: url(#spot-random);
}

.spot-robot {
  fill: url(#spot-robot);

  &.spot-in {
    fill: url(#spot-robot-in);
  }

  &.spot-out {
    fill: url(#spot-robot-out);
  }

  &.spot-reverse {
    fill: url(#spot-robot-on-reverse);
  }

  &.spot-random {
    fill: url(#spot-robot-on-random);
  }

  &.spot-battery {
    fill: url(#spot-robot-on-battery);

    &.spot-completed {
      fill: url(#spot-robot-on-battery-completed);
    }
  }
}

.spot-available {
  cursor: pointer;
  mask: url(#mask);
}

.spot-border {
  fill: none;

  &_possible {
    stroke-width: 4px;
    stroke: #0d6efd;
  }
}

.spot-over {
  fill: #a9cdbb !important;
}
</style>