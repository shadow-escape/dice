<template>
  <draggable
      class="d-flex flex-column align-items-center"
      :list="this.robot.legend"
      :group="{ name: 'legend', pull: 'clone', put: false }"
      :sort="false"
      handle=".handle"
      item-key="effect"
      :move="onMove"
      @start="onStart"
      @end="onEnd"
  >
    <template #item="{ element }">
      <div
          class="control mb-2"
          :class="[`control-${element}`, {
            'handle': robot.getLimit(element) < 4,
            'is-disabled': robot.getLimit(element) > 3
          }]"
          :data-effect="element"
      ></div>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

import Robot from '@/services/Robot'

export default {
  name: 'TheLegend',

  components: {
    draggable,
  },

  props: {
    drag: Boolean,
    robot: Robot
  },

  data() {
    return {
      index: null
    }
  },

  methods: {
    onStart() {
      this.$emit('update:drag', true)
    },

    onMove({ originalEvent }) {
      const { target } = originalEvent

      if (target?.dataset) {
        this.index = target.dataset.index
      }

      return false
    },

    onEnd(event) {
      const { effect } = event.item.dataset
      const { index } = event.originalEvent instanceof TouchEvent
          ? this
          : event.originalEvent.target.dataset

      this.$emit('update:drop', { index, effect })
      this.$emit('update:drag', false)
    }
  }
}
</script>

<style lang="scss">
.control {
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: grab;

  @media screen and (orientation: portrait) {
    width: 10vw;
    height: 10vw;
  }

  @media screen and (orientation:landscape) {
    width: 10vh;
    height: 10vh;
  }

  &:hover {
    box-shadow: inset 0 0 15px -5px #fff, inset 0 0 1px 2px #000;
  }

  &-empty {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+CiAgPHBhdGggZmlsbD0iI2QzZDNkMyIgZD0iTTAgMGg0MHY0MEgweiIvPgo8L3N2Zz4K");
  }

  &-battery {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+CiAgPHBhdGggZmlsbD0iIzAwNzY1MCIgZD0iTTAgMGg0MHY0MEgweiIvPgogIDxwYXRoIGZpbGw9IiMwMGZiNWYiIGQ9Ik0yNS42IDI1SDEyLjhjLTEuMiAwLTIuMi0xLTIuMi0yLjJ2LTUuN2MwLTEuMiAxLTIuMiAyLjItMi4yaDEyLjhjMS4yIDAgMi4yIDEgMi4yIDIuMi45LjIgMS42LjkgMS42IDEuOXYxLjljMCAxLS43IDEuNy0xLjYgMS45di4xYzAgMS4yLTEgMi4xLTIuMiAyLjF6bS0xMi44LTguNGMtLjMgMC0uNi4yLS42LjZ2NS43YzAgLjMuMi42LjYuNmgxMi44Yy4zIDAgLjYtLjIuNi0uNlYyMmMwLS40LjQtLjguOC0uOGguNWMuMSAwIC4yLS4xLjItLjJ2LTJjMC0uMS0uMS0uMi0uMi0uMkgyN2MtLjQgMC0uOC0uNC0uOC0uOHYtLjhjMC0uMy0uMi0uNi0uNi0uNkgxMi44em0xLjggNS42Yy0uNCAwLS44LS40LS44LS44di0yLjdjMC0uNC40LS44LjgtLjguNSAwIC44LjQuOC44djIuN2MwIC40LS40LjgtLjguOHptMy4xIDBjLS40IDAtLjgtLjQtLjgtLjh2LTIuN2MwLS40LjQtLjguOC0uOC41IDAgLjguNC44Ljh2Mi43YzAgLjQtLjQuOC0uOC44em0zLjEgMGMtLjQgMC0uOC0uNC0uOC0uOHYtMi43YzAtLjQuNC0uOC44LS44LjUgMCAuOC40LjguOHYyLjdjMCAuNC0uNC44LS44Ljh6bTMgMGMtLjQgMC0uOC0uNC0uOC0uOHYtMi43YzAtLjQuNC0uOC44LS44cy44LjQuOC44djIuN2MuMS40LS4zLjgtLjguOHoiLz4KPC9zdmc+Cg==");
  }

  &-random {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+CiAgPHBhdGggZmlsbD0iIzg4ODQxZCIgZD0iTTAgMGg0MHY0MEgweiIvPgogIDxwYXRoIGZpbGw9IiNmZmZkNTEiIGQ9Ik0yNC4yIDkuM2MtMS4zLS43LTIuNy0xLjEtNC4yLTEuMXMtMyAuNC00LjMgMS4xYy0xLjggMS0zIDIuOS0zIDUuMXYuMWMwIC43LjYgMS4yIDEuMiAxLjIuNyAwIDEuMi0uNiAxLjItMS4yIDAtMS4yLjYtMi40IDEuNy0zIC45LS41IDEuOS0uNyAzLS43czIuMS4zIDMgLjdjMS4xLjYgMS44IDEuNyAxLjggMi45di4xYzAgMi41LS43IDMuMS0yLjMgMy45LTIuNSAxLjItMy43IDMuNi0zLjcgNy4xIDAgLjcuNiAxLjIgMS4yIDEuMi43IDAgMS4yLS42IDEuMi0xLjIgMC0zLjQgMS4zLTQuNCAyLjMtNC45IDIuMi0uOSAzLjctMyAzLjctNS40VjE0LjRjLjItMi4xLS45LTQuMS0yLjgtNS4xem0tMy4zIDIwLjNjLS4yLS4yLS41LS40LS45LS40LS4zIDAtLjcuMS0uOS40LS4xLjEtLjIuMi0uMy40LS4xLjEtLjEuMy0uMS41IDAgLjMuMS42LjQuOS41LjUgMS4yLjUgMS43LjFsLjEtLjFjLjItLjIuNC0uNS40LS45IDAtLjIgMC0uMy0uMS0uNS0uMS0uMS0uMi0uMy0uMy0uNHoiLz4KPC9zdmc+Cg==");
  }

  &-reverse {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iIzAwNjg5NyIgZD0iTTAgMGg0MHY0MEgweiIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwZmRmZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMyAxNWgxMGMzLjMgMCA2IDIuNyA2IDZzLTIuNyA2LTYgNkgxM20wLTEyIDQtNG0tNCA0IDQgNCIvPjwvc3ZnPg==");
  }

  &.is-disabled {
    cursor: not-allowed;
    opacity: .1;
  }
}
</style>