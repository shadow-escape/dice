<template>
  <strong>Доступные комбинации:</strong>

  <ul class="list-unstyled my-2">
    <li
        v-for="({index, value, moves}) in robot.available"
        :key="index"
        class="list-inline-item"
    >
      <button
          class="btn btn-sm"
          :class="{
            'btn-light': !isOver(index),
            'btn-primary': isOver(index)
          }"
          @mouseover="robot.setOver(index)"
          @mouseleave="robot.setOver(false)"
          @click="robot.move(index)"
      >
        <strong>{{ value }}</strong>: {{ moves.title }}
      </button>
    </li>
  </ul>
</template>

<script>
import Robot from '@/services/Robot'

export default {
  name: 'MovesInfo',

  props: {
    robot: Robot
  },

  methods: {
    isOver(index) {
      return this.robot.over === index
    }
  }
}
</script>