<script setup>
import { useOptionsCounterStore } from './stores/optionsCounter';
const counter=useOptionsCounterStore()
function patchCount(){
  counter.$patch({
    count:10
  })
}
function patchMultiple(){
  counter.$patch({
    count:20,
    name:'keerthi'
  })
}
function reset(){
  counter.$reset()
}
</script>
<template>
  <h1>Options Store</h1>
  <p>count:{{ counter.count }}</p>
  <p>Doubled:{{ counter.doubled }}</p>
  <p>Name:{{ counter.name }}</p>
  <div class="buttons">
    <button @click="counter.increment">Increment</button>
    <button @click="patchCount">$patch Count->10</button>
    <button @click="patchMultiple">$patch Multiple</button>
    <button @click="reset">$reset</button>
  </div>
</template>
<style scoped>
.buttons{
  display:flex;
  gap:5px;
}
</style>