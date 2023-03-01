<template>
  <div class="the-sidebar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar'
}
</script>

<style lang="scss">
.the-sidebar {
  background-color: rgba(255, 255, 255, .2);
  position: absolute;
  z-index: 10;

  @media (max-width: 575.98px) {
    bottom: 0;
    left: 0;
    padding: .5vh;
    width: 100%;
  }

  @media (min-width: 576px) {
    top: 0;
    right: 0;
    width: 10%;
    height: 100%;
  }
}
</style>