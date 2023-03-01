<template>
  <strong class="d-sm-none d-md-inline-block">
    Доступные комбинации:
  </strong>

  <ul class="list-unstyled my-2">
    <li
        v-for="({index, value, moves}) in robot.available"
        :key="index"
        class="list-inline-item"
    >
      <button
          class="btn btn-sm animated-button"
          :class="{
            'btn-light': !isOver(index),
            'btn-primary': isOver(index)
          }"
          @mouseover="robot.setOver(index)"
          @mouseleave="robot.setOver(false)"
          @click="robot.move(index)"
      >
        <strong class="d-sm-none d-md-inline-block">{{ value }}:</strong> {{ moves.title }}
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

<style scoped>
ul {
  white-space: nowrap;
}

li {
  max-width: 33%;
}
</style>