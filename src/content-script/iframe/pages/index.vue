<script setup lang="ts">
import { useDraggable } from 'vue-draggable-plus'
const el = ref()
const list = ref([
  {
    name: 'Joao',
    id: 1
  },
  {
    name: 'Jean',
    id: 2
  },
  {
    name: 'Johanna',
    id: 3
  },
  {
    name: 'Juan',
    id: 4
  }
])

// 返回值是一个对象，包含了一些方法，比如 start、destroy、pause 等
const draggable = useDraggable(el, list, {
  animation: 150,
  onStart() {
    console.log('start')
  },
  onUpdate() {
    console.log('update')
  }
})

function handleClick() {
  console.log(chrome.runtime)
  alert('chrome.runtime is available in content script')
}

// console.log('iframe-page', window.document.documentElement.outerHTML)

window.addEventListener('message', handleMessage, false)

// 接收方的 message event handler
function handleMessage(event: any) {
  console.log('event', event)
}

onMounted(() => {

})
</script>

<template>
  <div>
    <div ref="el">
      <div v-for="item in list" :key="item.id">
        {{ item.name }}
      </div>
    </div>
    <h1
      id="title"
      class="text-red-800 font-bold text-xl"
    >
      Content Script Iframe
    </h1>
    <button
      id="button"
      class="btn btn-primary"
      @click="handleClick"
    >
      Sample Daisy UI Button
    </button>
  </div>
</template>

<style scoped></style>
