<template>
  <div class="overlay">
    <div class="container position-relative h-100">
      <div class="d-flex flex-column justify-content-center h-100">
        <div class="content">
          <h1>
            Симмулятор Зала Экзорцизма во Дворце Рассвета
            <br>для игры <em>
            <!-- noindex -->
            <a
                href="https://pw.mail.ru/"
                rel="noindex nofollow noreferer"
                target="_blank"
                class="link-info"
            >Perfect World</a>
            <!-- /noindex -->
          </em>
          </h1>

          <p class="my-4">
            <strong><em>Как начать?</em></strong><br>
            Разместите батарейки на доске, и нажмите кнопку Начать.<br>
            Появится кубик. <br>Необходимо выбрать какие кости выпали в игре (2 влево или 2 вправо) и нажать соответствующую
            кнопку слева или справа от кубика. <br>Появятся подсказки с выбором нужного количества шагов.
          </p>

          <p class="my-4">
            <strong><em>Почему нет других типов клеток?</em></strong><br>
            Другие типы клеток не влияют на процесс прохождения, но отнимают время перед стартом.
          </p>

          <p class="my-4">
            <strong><em>Узнать больше</em></strong><br>
            Полную справку ты сможешь получить у меня в сообществе <!-- noindex --><a
                href="https://vk.com/@shadowescape-dice"
                rel="noindex nofollow noreferer"
                target="_blank"
                class="link-info"
            >
              <fa-icon icon="fa-brands fa-vk"/>
              Побег в тень
            </a><!-- /noindex -->
            <br>
            <br>
            <!-- noindex --><a
              href="https://pw.mail.ru/forums/showthread.php?t=205172&p=11400511&viewfull=1#post11400511"
              rel="noindex nofollow noreferer"
              target="_blank"
              class="link-info"
          >
            [Гайд] Дворец рассвета
          </a><!-- /noindex -->
          </p>

          <button
              class="btn btn-outline-light"
              @click="$emit('update:overlay', false)"
          >
            Продолжить
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
    overlay: Boolean,
  }
}
</script>

<style lang="scss">
.overlay {
  @media (max-width: 575.98px) {
    font-size: 80%;
  }
}
</style>
