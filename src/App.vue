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
  </div>
</template>

<script>
import TheMap from './components/TheMap/TheMap.vue'
import TheLegend from './components/TheLegend.vue'

export default {
  name: 'App',

  components: {
    TheMap,
    TheLegend
  },

  data() {
    return {
      drag: false,
      scheme: [
        { value: 'in', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'out', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null },
        { value: 'none', order: null }
      ]
    };
  },

  methods: {
    paint({ index, effect }) {
      if (!['in', 'out'].includes(this.scheme[index].value)) {
        const group = this.scheme.filter(cell => cell.value === effect)
        // const order = group.map(cell => cell.order).length

        // if (order > 3)

        this.scheme[index].value = effect;

        // this.scheme[index].order = effect;
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