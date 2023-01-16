<template>
  <svg class="the-map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 832 736">
    <symbol id="battery" viewBox="-4 3 32 32" width="100" height="100">
      <path d="M15 21.04H2.2c-1.24 0-2.2-1-2.2-2.2v-5.68c0-1.24 1-2.2 2.2-2.2H15c1.2 0 2.2.96 2.2 2.16.92.16 1.6.92 1.6 1.88v1.92c0 .96-.68 1.72-1.6 1.88v.08c.04 1.2-.96 2.16-2.2 2.16zM2.2 12.6c-.32 0-.56.24-.56.56v5.68c0 .32.24.56.56.56H15c.32 0 .56-.24.56-.56v-.88c0-.44.36-.84.84-.84h.52c.12 0 .24-.12.24-.24v-1.92c0-.12-.12-.24-.24-.24h-.52c-.44 0-.84-.36-.84-.84v-.76c0-.32-.24-.56-.56-.56H2.2zM4 18.16c-.44 0-.84-.36-.84-.84v-2.68c0-.44.36-.84.84-.84s.84.36.84.84v2.68c-.04.48-.4.84-.84.84zm3.08 0c-.44 0-.84-.36-.84-.84v-2.68c0-.44.36-.84.84-.84s.84.36.84.84v2.68c-.04.48-.4.84-.84.84zm3.08 0c-.44 0-.84-.36-.84-.84v-2.68c0-.44.36-.84.84-.84s.84.36.84.84v2.68c0 .48-.4.84-.84.84zm3.08 0c-.44 0-.84-.36-.84-.84v-2.68c0-.44.36-.84.84-.84.44 0 .84.36.84.84v2.68c0 .48-.4.84-.84.84z"/>
    </symbol>

    <symbol id="reverse" viewBox="-6 -4 40 40" width="100" height="100">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h10a6 6 0 0 1 0 12H4M4 7l4-4M4 7l4 4"/>
    </symbol>

    <symbol id="random" viewBox="0 0 40 40" width="100" height="100">
      <path d="M20.191 4.816a8.725 8.725 0 0 0-4.212-1.07 8.793 8.793 0 0 0-4.281 1.105l.045-.023c-1.798 1.001-2.994 2.89-2.994 5.058l.001.123v-.006A1.25 1.25 0 0 0 10 11.249h.004a1.25 1.25 0 0 0 1.246-1.25v-.004a3.278 3.278 0 0 1 1.733-2.997l.018-.009a6.302 6.302 0 0 1 2.977-.737c1.086 0 2.108.271 3.004.749l-.034-.017a3.314 3.314 0 0 1 1.803 2.947l-.001.07v-.003c0 2.48-.668 3.062-2.289 3.872-2.46 1.176-3.709 3.574-3.711 7.128 0 .69.559 1.249 1.249 1.25h.002c.69 0 1.249-.559 1.249-1.249v-.001c.002-3.388 1.307-4.403 2.309-4.882 2.202-.864 3.732-2.971 3.732-5.435a6.02 6.02 0 0 0-.043-.715l.003.028v-.063a5.808 5.808 0 0 0-3.029-5.102l-.03-.015zM16.88 25.119c-.228-.218-.538-.352-.88-.352s-.652.134-.88.353h.001a.965.965 0 0 0-.278.394l-.002.007c-.051.136-.08.292-.08.456v.026-.001.006c0 .341.138.649.36.873a1.203 1.203 0 0 0 1.759.001l.001-.001c.229-.224.374-.534.38-.878v-.001a1.36 1.36 0 0 0-.104-.489l.003.009a.966.966 0 0 0-.278-.399l-.001-.001z"/>
    </symbol>

    <defs>
      <pattern id="cell-battery" x="0" y="0" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill="#007650"></rect>
        <use xlink:href="#battery" fill="#00fb5f"/>
      </pattern>

      <pattern id="cell-reverse" x="0" y="0" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill="#006897"></rect>
        <use xlink:href="#reverse" fill="none" stroke="#00fdfd"/>
      </pattern>

      <pattern id="cell-random" x="0" y="0" width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill="#88841d"/>
        <use xlink:href="#random" fill="#fffd51"/>
      </pattern>
    </defs>

    <path
        class="the-map__line"
        :class="{
          'the-map__line_forward': robot.direction > 0,
          'the-map__backward': robot.direction < 0,
        }"
        d="M544 448v96h128l128 32v128H32V576l128 33-36-94-92-99h128V288H32V32h128l32 128 96 64V32h256l32 128v97l-96-33 32 96 96 33 65-65-1-257 128 1v384l-128 32z"
    />

    <circle
        v-for="(node, index) in nodes"
        :key="`position-${index}`"
        :class="[
            `cell-${scheme[index].value}`,
            {'cell-drop': drag},
            {'cell-robot': robot.position === index},
            {'cell-available': cells.some(cell => cell.index === index) }
        ]"
        :data-index="index"
        :cx="node.x"
        :cy="node.y"
        r="40"
        draggable="true"
        @drop="onDrop"
        @dragenter.prevent
        @dragover.prevent
        @click="move(index)"
    />
  </svg>
</template>

<script>
import {nodes, lines} from "@/components/TheMap/shape";

export default {
  name: 'TheMap',

  props: {
    available: Object,
    scheme: Array,
    drag: Boolean,
    robot: Object
  },

  data() {
    return {
      nodes,
      lines,
      hover: false
    };
  },

  computed: {
    cells() {
      if (this.available) {
        if (this.robot.direction > 0) {
          return Object.keys(this.available).map(value => ({
            index: this.robot.position + Number(value),
            value: Number(value),
            moves: this.available[value]
          }));
        }
      }

      return []
    }
  },

  methods: {
    onDrop(event) {
      this.$emit('update:drop', {
        index: event.target.dataset.index,
        effect: event.dataTransfer.getData('text')
      });
    },
    move(index) {
      const needle = this.cells.find(cell => cell.index === index)

      if (needle) {
        this.$emit('update:position', {
          position: needle.moves.position,
          value: needle.value
        })
      }
    }
  }
}
</script>

<style lang="scss">
.the-map {
  overflow: unset;

  &__line {
    fill: none;
    stroke: #fff;
    stroke-miterlimit: 10;
    stroke-width: 4px;
    stroke-dasharray: 10;

    &_forward {
      animation: dash 60s linear infinite;
    }

    &_backward {
      animation: dash 60s linear infinite;
    }

    @keyframes dash {
      from { stroke-dashoffset: 0}
      to { stroke-dashoffset: 1000 }
    }

    @keyframes dash-reverse {
      from { stroke-dashoffset: 1000}
      to { stroke-dashoffset: 0 }
    }
  }

  circle {
    fill: lightgray;
    stroke: #fff;
    stroke-width: 2px;
  }

  .cell-drop {
    stroke: #fff;
    stroke-width: 2px;
    stroke-dasharray: 8;
  }

  .cell-in {fill: red; }
  .cell-out { fill: #00fc9d; }
  .cell-battery { fill: url(#cell-battery); }
  .cell-reverse { fill: url(#cell-reverse); }
  .cell-random { fill: url(#cell-random); }
  .cell-robot { fill: #000 }
  .cell-available {
    stroke: green;
    stroke-width: 4px;
    cursor: pointer;

    &:hover {
      stroke: red;
    }
  }
}
</style>