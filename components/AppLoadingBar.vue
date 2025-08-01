<script setup lang="ts">
import { useNuxtApp, onBeforeUnmount, reactive } from '#imports';

interface Props {
  throttle?: number;
  duration?: number;
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  throttle: 200,
  duration: 2000,
  height: 3,
});

const nuxtApp = useNuxtApp();

// Options & Data
const data = reactive({
  percent: 0,
  show: false,
  canSucceed: true,
});

// Local variables
let _cut;
let _timer = null;
let _throttle = null;

// Functions
function clear() {
  _timer && clearInterval(_timer);
  _throttle && clearTimeout(_throttle);
  _timer = null;
}

function start() {
  if (data.show) {
    return;
  }

  clear();
  data.percent = 0;
  data.canSucceed = true;
  if (props.throttle) {
    _throttle = setTimeout(startTimer, props.throttle);
  } else {
    startTimer();
  }
}

function increase(num) {
  data.percent = Math.min(100, Math.floor(data.percent + num));
}

function finish() {
  data.percent = 100;
  hide();
}

function hide() {
  clear();
  setTimeout(() => {
    data.show = false;
    setTimeout(() => {
      data.percent = 0;
    }, 400);
  }, 500);
}

function startTimer() {
  data.show = true;
  _cut = 10000 / Math.floor(props.duration);
  _timer = setInterval(() => {
    increase(_cut);
  }, 100);
}

// Hooks
nuxtApp.hook('content:middleware:start', start);
nuxtApp.hook('page:start', start);
nuxtApp.hook('page:finish', finish);

onBeforeUnmount(() => clear);
</script>

<template>
  <div
    class="nuxt-progress"
    :class="{
      'nuxt-progress-failed': ! data.canSucceed,
    }"
    :style="{
      width: `${data.percent}%`,
      height: `${props.height}px`,
      opacity: data.show ? 1 : 0,
      backgroundSize: `${(100 / data.percent) * 100}% auto`,
    }"
  >
  </div>
</template>

<style scoped>
@reference "../assets/css/main.css";

.nuxt-progress {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 0%;
  opacity: 1;
  transition: width 0.1s, height 0.4s, opacity 0.4s;
  background: repeating-linear-gradient(to right, --var('--colors-primary-500') 0%, --var('--colors-primary-800') 50%, --var('--colors-secondary-500') 100%);
  z-index: 9999;
}
</style>
