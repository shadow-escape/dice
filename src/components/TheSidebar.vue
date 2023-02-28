<template>
  <div class="the-sidebar position-absolute h-100">
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
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, .2);

  @media (max-width: 575.98px) {
    padding: .5vh;
  }

  @media (min-width: 576px) {
    width: 10%;
  }
}
</style>