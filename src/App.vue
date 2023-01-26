<template>
  <div class="game-board h-100">
    <div class="game-board__inner">
      <div class="col h-100">
        <div class="p-4 h-100">
          <the-map
              :drag="drag"
              :robot="robot"
              class="game-board__column"
              @update:drop="robot.setSpot($event.index, $event.effect)"
              @update:bounds="bounds = $event"
          ></the-map>
        </div>
      </div>

      <div
          class="content-board position-absolute"
          :style="{
            'max-width': `${bounds.width * 0.3}px`,
            'max-height': `${bounds.height * 0.5}px`,
            'top': `${bounds.height * 0.3}px`,
            'right': `${bounds.height * 0.215}px`
          }"
      >
        <div class="content-board__wrapper h-100">
          <the-dice
              v-if="!isEdit && robot.isReady"
              :dice="robot.dice"
          ></the-dice>

          <div
              v-else
              class="p-4"
              style="color: #fff"
          >
            <p>
              Этот инструмент создан для того, чтобы помочь в прохождении Зала Экзорцизма во Дворце Рассвета.
            </p>
            <p>
              Разместите батарейки на доске, и нажмите кнопку Начать.
            </p>
            <button
                class="btn btn-light mt-4"
                :disabled="!robot.isReady"
                @click="isEdit = false"
            >
              Начать
            </button>
          </div>
        </div>
      </div>
    </div>

    <the-sidebar v-if="isEdit">
      <the-legend
          v-model:drag="drag"
          :robot="robot"
          class="game-board__column"
      ></the-legend>
    </the-sidebar>
  </div>
</template>

<script>
import Robot from '@/services/Robot'

import TheMap from '@/components/TheMap/TheMap.vue'
import TheLegend from '@/components/TheLegend.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheDice from '@/components/TheDice/TheDice.vue'

export default {
  name: 'App',

  components: {
    TheMap,
    TheLegend,
    TheSidebar,
    TheDice
  },

  data() {
    return {
      isEdit: true,
      drag: false,

      robot: new Robot(),

      bounds: {width: 10, height: 10},
    }
  },
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}

.content-board {
  background-color: rgba(255, 255, 255, .2);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 50px;
}

.game-board {
  height: 100%;
  background-image: url(@/assets/bg.png);

  &__inner {
    display: flex;
    height: 100%;
    position: relative;
    padding: 0 10%;
  }
}
</style>