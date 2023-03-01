<template>
  <div class="game-board h-100">
    <the-sidebar v-if="isEdit">
      <the-legend
          v-model:drag="drag"
          :robot="robot"
          @update:drop="robot.setSpot($event.index, $event.effect)"
      ></the-legend>
    </the-sidebar>

    <div class="game-board__inner">
      <div class="col h-100">
        <div class="h-100 position-relative">
          <the-map
              v-bind="{ drag, robot }"
              @update:bounds="bounds = $event"
          ></the-map>
        </div>
      </div>

      <div
          class="content-board"
          :style="{
            'max-width': `${bounds.width * 0.3}px`,
            'max-height': `${bounds.height * 0.5}px`,
            'top': `${bounds.height * 0.265}px`,
            'right': `${bounds.height * 0.215}px`
          }"
      >
        <div class="content-board__wrapper h-100">
          <div
              v-if="!isEdit && robot.isReady"
              class="content-board__dice position-relative h-100 d-flex flex-column justify-content-between"
          >

            <p>
              <strong>
                Каких костей больше?
              </strong>
            </p>

            <the-dice
                v-bind="{ dice: robot.dice }"
            ></the-dice>

            <div class="d-flex flex-column h-100">
              <div class="d-flex flex-column h-100">
                <moves-info
                    v-if="!robot.isAnimated"
                    v-bind="{ robot }"
                ></moves-info>

                <steps-info
                    v-bind="{ robot }"
                ></steps-info>
              </div>

              <game-tools
                  v-bind="{ robot }"
                  @update:overlay="overlay = true"
              ></game-tools>
            </div>
          </div>

          <div
              v-else
              class="d-flex flex-column justify-content-center h-100"
          >
            <div>
              <p>
                Разместите батарейки на доске
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
    </div>
  </div>

  <game-overlay
      v-if="overlay"
      v-model:overlay="overlay"
      v-bind="{ isEdit }"
  ></game-overlay>
</template>

<script setup>
import {reactive, ref, toRefs} from 'vue'

import Robot from '@/services/Robot'

import TheMap from '@/components/TheMap/TheMap.vue'
import TheLegend from '@/components/TheLegend.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheDice from '@/components/TheDice/TheDice.vue'
import MovesInfo from '@/components/MovesInfo.vue'
import GameTools from '@/components/GameTools.vue'
import GameOverlay from "@/components/GameOverlay.vue";
import StepsInfo from "@/components/StepsInfo.vue";

const data = reactive({
  isEdit: true,
  drag: false,
  robot: new Robot(),
  bounds: {width: 10, height: 10},
})
const { isEdit, drag, robot, bounds } = toRefs(data)

const overlay = ref(true)
</script>

<style lang="scss">
html,
body {
  height: 100%;
  min-height: 500px;
}

.content-board {
  background-color: rgba(255, 255, 255, .2);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 20px;
  padding: 10px;

  @media (max-width: 575.98px) {
    max-width: 100% !important;
    width: 100%;
    max-height: 50vh !important;
    height: 50vh;
  }

  @media (min-width: 576px) {
    position: absolute;
  }
}

.game-board {
  height: 100%;
  background-image: url(@/assets/bg.png);

  &__inner {
    display: flex;
    height: 100%;
    position: relative;

    @media (max-width: 575.98px) {
      flex-flow: column;
    }

    @media (min-width: 576px) {
      padding: 1% 12%;
    }
  }
}
</style>