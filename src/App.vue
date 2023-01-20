<template>
  <div class="game-board">
    <the-map
        :available="available"
        :scheme="scheme"
        :drag="drag"
        :robot="robot"
        class="game-board__column"
        @update:drop="onDrop"
        @update:position="setPosition"
    ></the-map>

    <the-legend
        v-model:drag="drag"
        :is-edit="isEdit"
        :position="position"
        class="game-board__column"
        @update:available="available = $event"
    >
      <button
          v-if="isEdit"
          @click="isEdit = false"
      >
        Закончить редактирование
      </button>
    </the-legend>
  </div>
</template>

<script>
import TheMap from './components/TheMap/TheMap.vue'
import TheLegend from './components/TheLegend/TheLegend.vue'
import Robot from './services/Robot'
import { SCHEME } from './scheme';

export default {
  name: 'App',

  components: {
    TheMap,
    TheLegend
  },

  data() {
    return {
      isEdit: true,
      robot: new Robot(),
      drag: false,
      available: null,
      position: 0,
      scheme: SCHEME
    };
  },

  methods: {
    onDrop({ index, effect }) {
      if (!['in', 'out'].includes(this.scheme[index].value)) {
        // const group = this.scheme.filter(cell => cell.value === effect)
        // const order = group.map(cell => cell.order).length

        // console.log(order);
        // if (order > 3)

        this.scheme[index].value = effect;

        // this.scheme[index].order = effect;
      }
    },

    setPosition({ position, value }) {
      this.position = position;
      this.robot.move(Number(value));
    },
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