<template>
  <div class="game-tools">
    <div
        v-if="!overlay"
        class="row justify-content-center"
    >
      <button
          class="col-2 btn btn-light btn-sm mx-1"
          @click="$emit('update:overlay', true)"
      >
        <fa-icon icon="fa-solid fa-info"/>
      </button>

      <button
          :disabled="!robot.dice.freeze"
          class="col-2 btn btn-light btn-sm mx-1"
          @click="showPositions"
      >
        <fa-icon icon="fa-solid fa-dice-d6"/>
      </button>

      <button
          :disabled="!robot.dice.freeze"
          class="col-2 btn btn-light btn-sm mx-1"
          title="Повернуть робота"
          @click="robot.reverse"
      >
        <fa-icon icon="fa-solid fa-rotate-left"/>
      </button>

      <button
          :disabled="!robot.dice.freeze"
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
      <div class="row row-cols-4 flex-wrap justify-content-center align-items-center">
        <div
            class="d-flex justify-content-center"
            v-for="(item, index) in maps"
            :key="`button-${index}`"
        >
          <button
              class="btn text-nowrap d-flex flex-column-reverse w-100 align-items-center my-1"
              :class="{
                'btn-light': index === robot.dice.position,
                'btn-outline-light': index !== robot.dice.position,
              }"
              @click="select(index)"
          >
            <fa-icon
                v-for="(dice, key) in item"
                :key="`dice-${index}-${key}`"
                :icon="icons[dice]"
                class="d-block"
                :class="{ 'd-sm-none d-md-block': key === 0 }"
            ></fa-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {chunk} from 'lodash'
import {defineProps, ref, toRefs} from 'vue'
import Robot from '@/services/Robot'
import {MAPPINGS} from '@/components/TheDice/config'

const props = defineProps({robot: Robot})
const {robot} = toRefs(props)

const overlay = ref(false)
const maps = ref(chunk(MAPPINGS, 2))

const select = index => {
  robot.value.dice.setPosition(index)
  overlay.value = false
}

const icons = ref({
  1: 'fa-solid fa-dice-one',
  2: 'fa-solid fa-dice-two',
  3: 'fa-solid fa-dice-three',
  4: 'fa-solid fa-dice-four',
  5: 'fa-solid fa-dice-five',
  6: 'fa-solid fa-dice-six',
})

const showPositions = () => {
  overlay.value = !overlay.value
  robot.value.dice.setDirection()
}
</script>

<style lang="scss">
.dice-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  z-index: 5;
  padding: 50% 0 0;

  @media (max-width: 767.98px) {
    padding-top: 0;
  }

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