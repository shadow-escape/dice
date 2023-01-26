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

<style>
.the-sidebar {
  width: 10%;
  top: 0;
  right: 0;
  background-color: rgba(255, 255, 255, .2);
}
</style>