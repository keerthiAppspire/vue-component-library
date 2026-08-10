<script setup>
import { useCounterStore } from './stores/counter'
import { storeToRefs } from 'pinia';
const counter = useCounterStore()
const  {count,doubled}=storeToRefs(counter)
const {increment,reset}=counter
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <h2>Doubled: {{ doubled }}</h2>
  <div class="buttons">
      <button @click="increment">Increment</button>
      <button @click="reset">Reset</button>
  </div>
</template>
<style scoped>
.buttons {
display : flex;
gap : 5px;
}
</style>
