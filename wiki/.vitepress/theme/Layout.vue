<script setup>
import DefaultTheme from 'vitepress/theme'
import Comments from './components/comments.vue'
import { useData } from 'vitepress'
import { nextTick, provide } from 'vue'

const { Layout } = DefaultTheme
const { isDark } = useData()

provide('toggle-appearance', () => {
  if (!document.startViewTransition) {
    isDark.value = !isDark.value
    return
  }

  document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comments />
    </template>
  </Layout>
</template>