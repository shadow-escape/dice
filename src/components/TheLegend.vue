<template>
  <div class="controls">
    <div
        v-for="item in legend"
        :key="`control-${item}`"
        class="control control-0"
        :class="`control-${item}`"
        draggable="true"
        @dragstart="onDragStart($event, item)"
        @dragend="$emit('input', false)"
    ></div>

    <the-dice></the-dice>
  </div>
</template>

<script>
import TheDice from "@/components/TheDice";

export default {
  name: 'TheLegend',

  components: {
    TheDice
  },

  data() {
    return {
      legend: ['battery', 'reverse', 'random', 'none'],
    };
  },

  methods: {
    onDragStart(event, item) {
      event.dataTransfer.setData('text/plain', item);
      this.$emit('input', true);
    }
  },
}
</script>

<style lang="scss">
.control {
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  border: 2px solid #fff;
  margin: 20px;
  background-position: 125% 150%;
  background-size: 90%;
  background-repeat: no-repeat;

  &-battery {
    background-color: #007650;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDMgMzIgMzIiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBmaWxsPSIjMDBmYjVmIiBkPSJNMTUgMjEuMDRIMi4yYy0xLjI0IDAtMi4yLTEtMi4yLTIuMnYtNS42OGMwLTEuMjQgMS0yLjIgMi4yLTIuMkgxNWMxLjIgMCAyLjIuOTYgMi4yIDIuMTYuOTIuMTYgMS42LjkyIDEuNiAxLjg4djEuOTJjMCAuOTYtLjY4IDEuNzItMS42IDEuODh2LjA4Yy4wNCAxLjItLjk2IDIuMTYtMi4yIDIuMTZ6TTIuMiAxMi42Yy0uMzIgMC0uNTYuMjQtLjU2LjU2djUuNjhjMCAuMzIuMjQuNTYuNTYuNTZIMTVjLjMyIDAgLjU2LS4yNC41Ni0uNTZ2LS44OGMwLS40NC4zNi0uODQuODQtLjg0aC41MmMuMTIgMCAuMjQtLjEyLjI0LS4yNHYtMS45MmMwLS4xMi0uMTItLjI0LS4yNC0uMjRoLS41MmMtLjQ0IDAtLjg0LS4zNi0uODQtLjg0di0uNzZjMC0uMzItLjI0LS41Ni0uNTYtLjU2SDIuMnpNNCAxOC4xNmMtLjQ0IDAtLjg0LS4zNi0uODQtLjg0di0yLjY4YzAtLjQ0LjM2LS44NC44NC0uODRzLjg0LjM2Ljg0Ljg0djIuNjhjLS4wNC40OC0uNC44NC0uODQuODR6bTMuMDggMGMtLjQ0IDAtLjg0LS4zNi0uODQtLjg0di0yLjY4YzAtLjQ0LjM2LS44NC44NC0uODRzLjg0LjM2Ljg0Ljg0djIuNjhjLS4wNC40OC0uNC44NC0uODQuODR6bTMuMDggMGMtLjQ0IDAtLjg0LS4zNi0uODQtLjg0di0yLjY4YzAtLjQ0LjM2LS44NC44NC0uODRzLjg0LjM2Ljg0Ljg0djIuNjhjMCAuNDgtLjQuODQtLjg0Ljg0em0zLjA4IDBjLS40NCAwLS44NC0uMzYtLjg0LS44NHYtMi42OGMwLS40NC4zNi0uODQuODQtLjg0LjQ0IDAgLjg0LjM2Ljg0Ljg0djIuNjhjMCAuNDgtLjQuODQtLjg0Ljg0eiIvPjwvc3ZnPg==");
  }

  &-reverse {
    background-color: #006897;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii02IC00IDQwIDQwIj48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMGZkZmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNCA3aDEwYTYgNiAwIDAgMSAwIDEySDRNNCA3bDQtNE00IDdsNCA0Ii8+PC9zdmc+");
  }

  &-random {
    background-color: #88841d;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjxwYXRoIGZpbGw9IiNmZmZkNTEiIGQ9Ik0yMC4xOTEgNC44MTZhOC43MjUgOC43MjUgMCAwIDAtNC4yMTItMS4wNyA4Ljc5MyA4Ljc5MyAwIDAgMC00LjI4MSAxLjEwNWwuMDQ1LS4wMjNjLTEuNzk4IDEuMDAxLTIuOTk0IDIuODktMi45OTQgNS4wNThsLjAwMS4xMjN2LS4wMDZBMS4yNSAxLjI1IDAgMCAwIDEwIDExLjI0OWguMDA0YTEuMjUgMS4yNSAwIDAgMCAxLjI0Ni0xLjI1di0uMDA0YTMuMjc4IDMuMjc4IDAgMCAxIDEuNzMzLTIuOTk3bC4wMTgtLjAwOWE2LjMwMiA2LjMwMiAwIDAgMSAyLjk3Ny0uNzM3YzEuMDg2IDAgMi4xMDguMjcxIDMuMDA0Ljc0OWwtLjAzNC0uMDE3YTMuMzE0IDMuMzE0IDAgMCAxIDEuODAzIDIuOTQ3bC0uMDAxLjA3di0uMDAzYzAgMi40OC0uNjY4IDMuMDYyLTIuMjg5IDMuODcyLTIuNDYgMS4xNzYtMy43MDkgMy41NzQtMy43MTEgNy4xMjggMCAuNjkuNTU5IDEuMjQ5IDEuMjQ5IDEuMjVoLjAwMmMuNjkgMCAxLjI0OS0uNTU5IDEuMjQ5LTEuMjQ5di0uMDAxYy4wMDItMy4zODggMS4zMDctNC40MDMgMi4zMDktNC44ODIgMi4yMDItLjg2NCAzLjczMi0yLjk3MSAzLjczMi01LjQzNWE2LjAyIDYuMDIgMCAwIDAtLjA0My0uNzE1bC4wMDMuMDI4di0uMDYzYTUuODA4IDUuODA4IDAgMCAwLTMuMDI5LTUuMTAybC0uMDMtLjAxNXpNMTYuODggMjUuMTE5Yy0uMjI4LS4yMTgtLjUzOC0uMzUyLS44OC0uMzUycy0uNjUyLjEzNC0uODguMzUzaC4wMDFhLjk2NS45NjUgMCAwIDAtLjI3OC4zOTRsLS4wMDIuMDA3Yy0uMDUxLjEzNi0uMDguMjkyLS4wOC40NTZ2LjAyNi0uMDAxLjAwNmMwIC4zNDEuMTM4LjY0OS4zNi44NzNhMS4yMDMgMS4yMDMgMCAwIDAgMS43NTkuMDAxbC4wMDEtLjAwMWMuMjI5LS4yMjQuMzc0LS41MzQuMzgtLjg3OHYtLjAwMWExLjM2IDEuMzYgMCAwIDAtLjEwNC0uNDg5bC4wMDMuMDA5YS45NjYuOTY2IDAgMCAwLS4yNzgtLjM5OWwtLjAwMS0uMDAxeiIvPjwvc3ZnPg==");
  }

  &-none {
    background-color: lightgray;
  }
}
</style>