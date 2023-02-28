<template>
  <div v-if="robot.batteries.length">
    <p class="my-4 d-none d-sm-inline">
      <strong>Осталось батареек: {{ robot.batteries.length }}</strong><br>
      <span class="text-info">Порядок батареек определяется направлением движения робота.</span>
    </p>

    <ol
        v-if="robot.dice.freeze"
        class="w-100"
    >
      <li
          v-for="(battery, index) in robot.batteries"
          :key="`battery-${index}`"
          class="text-start"
      >
        Шагов: {{ robot.getStepCount(battery) }}

        <fa-icon
            v-if="robot.getStepCount(battery) % 7 === 0"
            v-tippy="{
              allowHTML: true,
              content: `
Количество шагов до батарейки кратно 7,
с этой позиции есть возможность получить батарейку.
Так как любая пара противоположных сторон даёт 7 шагов за 2 хода. <br /><br />
Противоположную сторону можно получить при любой комбинации!`
            }"
            icon="fa-solid fa-circle-exclamation"
        />
      </li>
    </ol>
  </div>

  <p class="my-4" v-else-if="robot.getStepCountExit > 0">
    <strong>Шагов до выхода: {{ robot.getStepCountExit }}</strong>
  </p>
</template>

<script>
import Robot from "@/services/Robot";

export default {
  name: 'StepsInfo',
  props: {
    robot: Robot,
  }
}
</script>