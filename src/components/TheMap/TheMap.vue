<template>
  <svg
      ref="the-map"
      class="the-map position-absolute top-0 bottom-0 left-0 right-0 m-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 860 760"
  >
    <symbol id="background">
      <rect x="0" y="0" width="100%" height="100%"></rect>
    </symbol>

    <symbol id="battery" viewBox="0 0 40 40" width="100" height="100">
      <path d="M25.6 25H12.8c-1.2 0-2.2-1-2.2-2.2v-5.7c0-1.2 1-2.2 2.2-2.2h12.8c1.2 0 2.2 1 2.2 2.2.9.2 1.6.9 1.6 1.9v1.9c0 1-.7 1.7-1.6 1.9v.1c0 1.2-1 2.1-2.2 2.1zm-12.8-8.4c-.3 0-.6.2-.6.6v5.7c0 .3.2.6.6.6h12.8c.3 0 .6-.2.6-.6V22c0-.4.4-.8.8-.8h.5c.1 0 .2-.1.2-.2v-2c0-.1-.1-.2-.2-.2H27c-.4 0-.8-.4-.8-.8v-.8c0-.3-.2-.6-.6-.6H12.8zm1.8 5.6c-.4 0-.8-.4-.8-.8v-2.7c0-.4.4-.8.8-.8.5 0 .8.4.8.8v2.7c0 .4-.4.8-.8.8zm3.1 0c-.4 0-.8-.4-.8-.8v-2.7c0-.4.4-.8.8-.8.5 0 .8.4.8.8v2.7c0 .4-.4.8-.8.8zm3.1 0c-.4 0-.8-.4-.8-.8v-2.7c0-.4.4-.8.8-.8.5 0 .8.4.8.8v2.7c0 .4-.4.8-.8.8zm3 0c-.4 0-.8-.4-.8-.8v-2.7c0-.4.4-.8.8-.8s.8.4.8.8v2.7c.1.4-.3.8-.8.8z"/>
    </symbol>

    <symbol id="reverse" viewBox="0 0 40 40" width="100" height="100">
      <path d="M12 14h10c3.3 0 6 2.7 6 6s-2.7 6-6 6H12m0-12 4-4m-4 4 4 4"/>
    </symbol>

    <symbol id="random" viewBox="0 0 40 40" width="100" height="100">
      <path d="M24.2 9.3c-1.3-.7-2.7-1.1-4.2-1.1s-3 .4-4.3 1.1c-1.8 1-3 2.9-3 5.1v.1c0 .7.6 1.2 1.2 1.2.7 0 1.2-.6 1.2-1.2 0-1.2.6-2.4 1.7-3 .9-.5 1.9-.7 3-.7s2.1.3 3 .7c1.1.6 1.8 1.7 1.8 2.9v.1c0 2.5-.7 3.1-2.3 3.9-2.5 1.2-3.7 3.6-3.7 7.1 0 .7.6 1.2 1.2 1.2.7 0 1.2-.6 1.2-1.2 0-3.4 1.3-4.4 2.3-4.9 2.2-.9 3.7-3 3.7-5.4V14.4c.2-2.1-.9-4.1-2.8-5.1zm-3.3 20.3c-.2-.2-.5-.4-.9-.4-.3 0-.7.1-.9.4-.1.1-.2.2-.3.4-.1.1-.1.3-.1.5 0 .3.1.6.4.9.5.5 1.2.5 1.7.1l.1-.1c.2-.2.4-.5.4-.9 0-.2 0-.3-.1-.5-.1-.1-.2-.3-.3-.4z"/>
    </symbol>

    <symbol id="out" viewBox="0 0 40 40" width="100" height="100">
      <path d="M15.8 18.6c0 3.5-2.1 5.3-4.7 5.3-2.7 0-4.5-2.1-4.5-5.1 0-3.2 2-5.3 4.7-5.3s4.5 2.1 4.5 5.1zm-7.9.2c0 2.2 1.2 4.1 3.2 4.1 2.1 0 3.2-1.9 3.2-4.2 0-2-1.1-4.1-3.2-4.1-2.1-.1-3.2 1.9-3.2 4.2z"/>
      <path d="M18.8 13.6v6c0 2.3 1 3.2 2.4 3.2 1.5 0 2.5-1 2.5-3.2v-6H25v5.9c0 3.1-1.6 4.4-3.8 4.4-2.1 0-3.6-1.2-3.6-4.3v-6h1.2z"/>
      <path d="M29.1 14.8H26v-1.1h7.5v1.1h-3.1v9h-1.3v-9z"/>
    </symbol>

    <symbol id="in" viewBox="0 0 40 40" width="100" height="100">
      <path d="M15.4 13.6v10.1h-1.3V13.6h1.3z"/>
      <path d="M17.7 23.7V13.6h1.4l3.2 5.1c.8 1.2 1.3 2.2 1.8 3.3-.1-1.3-.2-2.6-.2-4.2v-4.2h1.2v10.1H24l-3.2-5.1c-.7-1.1-1.4-2.3-1.9-3.4.1 1.3.1 2.5.1 4.2v4.3h-1.3z"/>
    </symbol>

    <symbol id="robot" viewBox="0 0 40 40" width="100" height="100">
      <path d="M23.3 19.2H25V25h-1.7z" fill="#5a8bb0"/>
      <path d="M15 19.2h1.7V25H15z" fill="#93c7ef"/>
      <path d="M17.7 22.9v2.3c0 1.3 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-2.3h-4.6z" fill="#93c7ef"/>
      <path d="M20 27.5c1.3 0 2.3-1 2.3-2.3v-2.3H20" fill="#5a8bb0"/>
      <path fill="#cce9f9" d="M24.2 25.8v-8.3c0-2.3-1.9-4.2-4.2-4.2s-4.2 1.9-4.2 4.2v8.3h8.4z"/>
      <path d="M24.2 25.8v-8.3c0-2.3-1.9-4.2-4.2-4.2v12.5h4.2z" fill="#93c7ef"/>
      <path d="M17.9 16.7h4.2v1.2h-4.2z" fill="#3c5d76"/>
      <path d="M18.8 19.2c0 .7.6 1.2 1.2 1.2.7 0 1.2-.6 1.2-1.2h-2.4z" fill="#3c5d76"/>
      <path d="M20 16.7h2.1v1.2H20z" fill="#1e2e3b"/>
      <path d="M20 19.2v1.2c.7 0 1.2-.6 1.2-1.2H20z" fill="#1e2e3b"/>
      <circle cx="17.5" cy="23.1" r=".6" fill="#3c5d76"/>
      <circle cx="20" cy="23.1" r=".6" fill="#1e2e3b"/>
      <circle cx="22.5" cy="23.1" r=".6" fill="#1e2e3b"/>
    </symbol>

    <defs>
      <pattern id="stripe" patternTransform="rotate(45)" width="100%" height="10" x="0" y="0" patternUnits="userSpaceOnUse">
        <rect x="0" y="0" width="100%" height="9" fill="#fff"></rect>
      </pattern>

      <mask id="mask">
        <rect x="0" y="0" height="100%" width="100%" fill="url(#stripe)"/>
      </mask>

      <pattern id="spot-battery" width="100%" height="100%">
        <use xlink:href="#background" fill="#007650"></use>
        <use xlink:href="#battery" x="-8px" y="-8px" fill="#00fb5f"/>
      </pattern>

      <pattern id="spot-battery-completed" width="100%" height="100%">
        <use class="is-disabled" xlink:href="#background" fill="#007650"></use>
        <use class="is-disabled" xlink:href="#battery" x="-8px" y="-8px" fill="#00fb5f"/>
      </pattern>

      <pattern id="spot-reverse" width="100%" height="100%">
        <use xlink:href="#background" fill="#006897"></use>
        <use xlink:href="#reverse" x="-8px" y="-8px" fill="none" stroke="#00fdfd" stroke-linecap="round" stroke-width="2"/>
      </pattern>

      <pattern id="spot-random" width="100%" height="100%">
        <use xlink:href="#background" fill="#88841d"></use>
        <use xlink:href="#random" x="-8px" y="-8px" fill="#fffd51"/>
      </pattern>

      <pattern id="spot-out" width="100%" height="100%">
        <use xlink:href="#background" fill="#551a18"></use>
        <use xlink:href="#out" x="-10px" y="-6px" fill="#ff2b2b"/>
      </pattern>

      <pattern id="spot-in" width="100%" height="100%">
        <use xlink:href="#background" fill="#007866"></use>
        <use xlink:href="#in" x="-8px" y="-6px" fill="#00fc90"/>
      </pattern>

      <pattern id="spot-robot" width="100%" height="100%">
        <use xlink:href="#background" fill="#d3d3d3"></use>
        <use xlink:href="#robot" x="-10px" y="-8px" fill="#000"/>
      </pattern>

      <pattern id="spot-robot-in" width="100%" height="100%">
        <use xlink:href="#background" fill="#007866"></use>
        <use xlink:href="#robot" x="-10px" y="-8px" fill="#000"/>
      </pattern>

      <pattern id="spot-robot-out" width="100%" height="100%">
        <use xlink:href="#background" fill="#551a18"></use>
        <use xlink:href="#robot" x="-10px" y="-8px" fill="#000"/>
      </pattern>

      <pattern id="spot-robot-on-reverse" width="100%" height="100%">
        <use xlink:href="#background" fill="#006897"></use>
        <use xlink:href="#robot" x="-10px" y="-8px" fill="#000"/>
      </pattern>

      <pattern id="spot-robot-on-random" width="100%" height="100%">
        <use xlink:href="#background" fill="#88841d"></use>
        <use xlink:href="#robot" x="-10px" y="-8px" fill="#000"/>
      </pattern>

      <pattern id="spot-robot-on-battery" width="100%" height="100%">
        <use xlink:href="#background" fill="#007650"></use>
        <use xlink:href="#battery" x="-8px" y="-8px" fill="#00fb5f"/>
        <use xlink:href="#robot" x="-10px" y="-8px" fill="#000"/>
      </pattern>

      <pattern id="spot-robot-on-battery-completed" width="100%" height="100%">
        <use class="is-disabled" xlink:href="#background" fill="#007650"></use>
        <use class="is-disabled" xlink:href="#battery" x="-8px" y="-8px" fill="#00fb5f"/>
        <use xlink:href="#robot" x="-10px" y="-8px" fill="#000"/>
      </pattern>
    </defs>

    <path
        d="M558 460v96h128l128 32v128H46V588l128 33-36-94-92-99h128V300H46V44h128l32 128 96 64V44h256l32 128v97l-96-33 32 96 96 33 65-65-1-257 128 1v384l-128 32H558z"
        class="the-map__line"
        :class="{
          'the-map__line_forward': robot.direction > 0,
          'the-map__line_backward': robot.direction < 0,
        }"
    />

    <draggable
        :list="robot.scheme"
        :item-key="element => robot.scheme.indexOf(element)"
        tag="svg-group"
        :group="{ name: 'map', put: 'legend' }"
        :sort="false"
    >
      <template #item="{ index }">
        <the-map-spot
            v-bind="{...$attrs, index, drag, robot}"
            :attrs="{cx: nodes[index][0], cy: nodes[index][1], r: 40}"
        ></the-map-spot>
      </template>
    </draggable>
  </svg>
</template>

<script>
import { chunk } from 'lodash'
import draggable from 'vuedraggable'

import Robot from '@/services/Robot'

import {nodes} from './shape'
import TheMapSpot from './TheMapSpot.vue'

export default {
  name: 'TheMap',

  components: {
    draggable,
    TheMapSpot
  },

  props: {
    drag: Boolean,
    robot: Robot,
  },

  data() {
    return {
      nodes: chunk(nodes, 2),
    }
  },

  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },

  unmounted() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      const {clientWidth: width, clientHeight: height} = this.$refs['the-map']

      this.$emit('update:bounds', {width, height})
    }
  }
}
</script>

<style lang="scss">
.the-map {
  overflow: unset;
  max-height: 100%;
  left: 0;
  right: 0;

  &__line {
    fill: none;
    stroke: #fff;
    stroke-width: 4px;
    stroke-dasharray: 10;
    animation: dash 60s linear infinite;

    &_forward {
      animation-direction: normal;
    }

    &_backward {
      animation-direction: reverse;
    }
  }
}

@keyframes dash {
  from { stroke-dashoffset: 0}
  to { stroke-dashoffset: 1000 }
}

use.is-disabled {
  filter: grayscale(50);
}
</style>