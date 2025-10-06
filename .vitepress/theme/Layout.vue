<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import MouseFollower from './components/MouseFollower.vue'
import MouseClicker from './components/MouseClicker.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-top>
      <MouseFollower />
      <MouseClicker />
    </template>
  </Layout>
  
</template>