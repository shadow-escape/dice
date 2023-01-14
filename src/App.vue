<template>
  <div class="game-board">
    <the-map
        :scheme="scheme"
        :drag="drag"
        class="game-board__column"
        @input="paint"
    ></the-map>

    <the-legend
        @input="drag = $event"
        class="game-board__column"
    ></the-legend>

    <the-dice></the-dice>
  </div>
</template>

<script>
import TheMap from './components/TheMap/TheMap.vue'
import TheLegend from './components/TheLegend.vue'
import TheDice from './components/TheDice.vue'

export default {
  name: 'App',

  components: {
    TheMap,
    TheLegend,
    TheDice
  },

  data() {
    return {
      scheme: ['in', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'out', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
      drag: false,
    };
  },

  methods: {
    paint({ index, effect }) {
      if (!['in', 'out'].includes(this.scheme[index])) {
        this.scheme[index] = effect;
      }
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

html, body, #app {
  height: 100%;
}

.game-board {
  display: flex;
  height: 100%;
  background-color: #222;
  background-image: url(@/assets/bg.png);

  &__column {
    padding: 20px;
  }
}
</style>