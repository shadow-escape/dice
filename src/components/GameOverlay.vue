<template>
  <div class="overlay">
    <div class="container position-relative h-100">
      <div class="d-flex flex-column justify-content-center display-6 h-100">
        <div class="content">
          <p class="d-none d-lg-block">
            Симмулятор Зала Экзорцизма во Дворце Рассвета.
          </p>

          <p>
            Разместите батарейки на доске, и нажмите кнопку Начать.
          </p>

          <button
              class="btn btn-outline-light"
              @click="$emit('update:overlay', false)"
          >
            <fa-icon icon="fa-solid fa-xmark" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameOverlay',

  props: {
    overlay: Boolean
  }
}
</script>
