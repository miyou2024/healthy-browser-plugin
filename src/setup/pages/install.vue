<script setup lang="ts">
const displayName = __DISPLAY_NAME__
const version = __VERSION__
</script>

<template>
  <div class="w-full h-full flex flex-col gap-y-4 justify-center items-center">
    <h1 class="text-4xl font-bold">
      这个页面是首次安装插件成功后第一次打开的提示页面
    </h1>
    <p class="text-xl">
      Thank you for installing {{ displayName }}! ❤️
    </p>
    <p class="text-lg">
      Now you can close this tab and start using the extension.
    </p>
    <p>Version: {{ version }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
