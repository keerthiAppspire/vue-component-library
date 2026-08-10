<script setup>
import { useCounterStore } from './stores/counter'
const counter = useCounterStore()
</script>
<template>
  <h1>Count: {{ counter.count }}</h1>
  <h2>Doubled: {{ counter.doubled }}</h2>
  <div class="buttons">
      <button @click="counter.increment">Increment</button>
      <button @click="counter.reset">Reset</button>
  </div>
</template>
<style scoped>
.buttons {
display : flex;
gap : 5px;
}
</style>
