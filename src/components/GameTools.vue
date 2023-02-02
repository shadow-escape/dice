<template>
  <div class="game-tools">
    <div class="row justify-content-center">
      <button
          class="col-2 btn btn-light btn-sm mx-1"
          @click="$emit('update:overlay', true)"
      >
        <fa-icon icon="fa-solid fa-info"/>
      </button>

      <button
          class="col-2 btn btn-light btn-sm mx-1"
          @click="overlay = !overlay"
          style="z-index: 10"
      >
        <fa-icon icon="fa-solid fa-dice-d6"/>
      </button>

      <button
          class="col-2 btn btn-light btn-sm mx-1"
          title="Повернуть робота"
          @click="robot.reverse"
      >
        <fa-icon icon="fa-solid fa-rotate-left"/>
      </button>

      <button
          class="col-2 btn btn-light btn-sm mx-1"
          title="Сделать шаг"
          @click="robot.step"
      >
        <fa-icon icon="fa-solid fa-plus"/>
      </button>
    </div>

    <div
        v-if="overlay"
        class="dice-overlay position-absolute"
    >
      <div class="row flex-wrap justify-content-center align-items-center">
        <button
            v-for="(item, index) in maps"
            :key="`button-${index}`"
            class="col-2 btn btn-light btn-sm m-1"
            @click="robot.dice.setPosition(index)"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, ref, toRefs} from 'vue'
import Robot from '@/services/Robot'
import {MAPPINGS} from '@/components/TheDice/config'

const props = defineProps({robot: Robot})
const {robot} = toRefs(props)

const overlay = ref(false)
const maps = ref(MAPPINGS)
</script>

<style lang="scss">
.game-tools {
  height: 10%;
}

.dice-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: -10px;
  border-radius: 20px;
  z-index: 5;
  padding: 50% 13.5% 0;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
    filter: blur(5px);
    z-index: -1;
  }
}
</style>