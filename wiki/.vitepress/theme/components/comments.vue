<script setup lang="ts">
import { useData } from 'vitepress'

const { title } = useData()
</script>

<template>
  <div :key="title" class="giscus">
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="ImMALWARE/wiki.malw.link"
      data-repo-id="R_kgDOPjI_cw"
      data-category="Комментарии Giscus"
      data-category-id="DIC_kwDOPjI_c84CuiwL"
      data-mapping="pathname"
      data-strict="1"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-lang="ru"
      data-theme="transparent_dark"
      crossorigin="anonymous"
      async
    />
  </div>
</template>