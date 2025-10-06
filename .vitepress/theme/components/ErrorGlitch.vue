<template>
  <div :id="rootId" class="eerr">
    <div class="eerr__wrap">
      <div class="eerr__code" :data-text="String(code)" aria-hidden="true">{{ code }}</div>
      <h1 class="eerr__title">{{ title }}</h1>
      <p v-if="description" class="eerr__desc">{{ description }}</p>
      <a class="eerr__btn" :href="homeHref">{{ buttonText }}</a>
    </div>
    <div class="eerr__noise" aria-hidden="true"></div>
    <div class="eerr__scanline" aria-hidden="true"></div>
    <div class="eerr__grain" aria-hidden="true"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue'

interface Props {
  code: string | number
  title: string
  description?: string
  homeHref?: string
  buttonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  homeHref: '/',
  buttonText: 'На главную'
})

const rootId = computed(() => `error-${props.code}`)

let rafId = 0

onMounted(() => {
  const root = document.getElementById(rootId.value)
  if (!root) return
  const codeEl = root.querySelector<HTMLElement>('.eerr__code')
  let t = 0
  const tick = () => {
    t++
    if (codeEl && t % 40 === 0) {
      const dx = (Math.random() * 2 - 1) * 2
      const dy = (Math.random() * 2 - 1) * 2
      codeEl.style.transform = `translate(${dx}px, ${dy}px)`
      setTimeout(() => { if (codeEl) codeEl.style.transform = '' }, 60)
    }
    rafId = requestAnimationFrame(tick)
  }
  rafId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.eerr {
  position: relative;
  min-height: calc(100vh - 120px);
  display: grid;
  place-items: center;
  overflow: hidden;
  background: #0b0d10;
  color: #e6e9ef;
  isolation: isolate;
}

.eerr__wrap {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 48px 24px;
}

.eerr__code {
  font: 900 22vw/0.8 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  letter-spacing: -0.02em;
  color: #7c8aff;
  text-shadow:
    0 0 12px rgba(124,138,255,0.35),
    2px 0 0 #ff2a6d,
    -2px 0 0 #00ffc8;
  position: relative;
  user-select: none;
  filter: saturate(1.2) contrast(1.05);
  animation: eerr-glitch-shift 3.2s infinite steps(1);
}

.eerr__code::after,
.eerr__code::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  mix-blend-mode: screen;
  clip-path: inset(0 0 0 0);
}

.eerr__code::before {
  color: #ff2a6d;
  transform: translate(1.5px, 0);
  animation: eerr-glitch-r 2.4s infinite steps(1);
}

.eerr__code::after {
  color: #00ffc8;
  transform: translate(-1.5px, 0);
  animation: eerr-glitch-g 2.2s infinite steps(1);
}

.eerr__title {
  margin: 12px 0 8px;
  font: 800 clamp(22px, 5vw, 38px)/1.1 system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji";
}

.eerr__desc {
  margin: 0 auto 20px;
  max-width: 760px;
  opacity: 0.9;
}

.eerr__btn {
  display: inline-block;
  padding: 10px 16px;
  border-radius: 8px;
  background: linear-gradient(90deg, #5a6bff, #8f57ff);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 6px 22px rgba(143, 87, 255, 0.25);
}

.eerr__noise,
.eerr__scanline,
.eerr__grain {
  position: absolute;
  inset: -20vmax;
  z-index: 1;
  pointer-events: none;
}

.eerr__noise {
  background: repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 4px);
  animation: eerr-noise-move 7s linear infinite;
  mix-blend-mode: overlay;
}

.eerr__scanline {
  background: repeating-linear-gradient(180deg, rgba(0,0,0,0) 0 2px, rgba(0,0,0,0.2) 2px 3px);
  opacity: 0.45;
  animation: eerr-scanline 6s linear infinite;
}

.eerr__grain {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
  background-size: 160px 160px;
  opacity: 0.4;
  animation: eerr-grain 12s steps(6) infinite;
}

@keyframes eerr-glitch-shift {
  0%, 100% { transform: translate(0, 0) skew(0deg); }
  10% { transform: translate(1px, -1px) skew(0.2deg); }
  20% { transform: translate(-1px, 1px) skew(-0.2deg); }
  30% { transform: translate(2px, 0) skew(0.4deg); }
  40% { transform: translate(-2px, 0) skew(-0.4deg); }
  50% { transform: translate(0, 1px) skew(0.3deg); }
  60% { transform: translate(0, -1px) skew(-0.3deg); }
  70% { transform: translate(1px, 0) skew(0.2deg); }
  80% { transform: translate(-1px, 0) skew(-0.2deg); }
  90% { transform: translate(0, 0) skew(0deg); }
}

@keyframes eerr-glitch-r {
  0%, 100% { clip-path: inset(0 0 0 0); }
  10% { clip-path: inset(6% 0 65% 0); }
  20% { clip-path: inset(60% 0 12% 0); }
  30% { clip-path: inset(30% 0 40% 0); }
  40% { clip-path: inset(42% 0 24% 0); }
  50% { clip-path: inset(12% 0 56% 0); }
  60% { clip-path: inset(70% 0 10% 0); }
  70% { clip-path: inset(28% 0 50% 0); }
  80% { clip-path: inset(12% 0 66% 0); }
  90% { clip-path: inset(54% 0 22% 0); }
}

@keyframes eerr-glitch-g {
  0%, 100% { clip-path: inset(0 0 0 0); }
  10% { clip-path: inset(72% 0 6% 0); }
  20% { clip-path: inset(18% 0 48% 0); }
  30% { clip-path: inset(8% 0 70% 0); }
  40% { clip-path: inset(52% 0 18% 0); }
  50% { clip-path: inset(26% 0 36% 0); }
  60% { clip-path: inset(12% 0 62% 0); }
  70% { clip-path: inset(66% 0 8% 0); }
  80% { clip-path: inset(42% 0 22% 0); }
  90% { clip-path: inset(16% 0 54% 0); }
}

@keyframes eerr-noise-move {
  0% { transform: translate(0,0); }
  100% { transform: translate(-20%, -10%); }
}

@keyframes eerr-scanline {
  0% { transform: translateY(-10%); }
  100% { transform: translateY(10%); }
}

@keyframes eerr-grain {
  to { transform: translate3d(-20px, 10px, 0); }
}

@media (max-width: 768px) {
  .eerr__code { font-size: 34vw; }
}
</style>


