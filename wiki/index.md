---
layout: home

hero:
  name: "Malw.link Wiki"
  tagline: "(>⩊<)"
  image:
    src: '/img/main_cat.png'
  actions:
    - theme: brand
      text: Статьи
      link: /docs
    - theme: alt
      text: Основной сайт
      link: https://malw.link
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { contributions } from '../.vitepress/config/_data/team'
const members = contributions
</script>

<VPTeamMembers :members="members" size="medium" />