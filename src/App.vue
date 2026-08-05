<script setup>
import { ref } from 'vue'
import { BaseSelect, BaseCheckbox ,BaseBadge, BaseCard, BaseModal, BaseTextarea } from '@/components/ui'

const country = ref('')
const role = ref('')
const agree =ref(false)
const skills = ref([])
const open = ref(false)
const message = ref('')
function save() {
  console.log('Saved')}
</script>

<template>
  <div class="page">
    <h3>BaseSelect</h3>
    <BaseSelect
      v-model="country"
      label="Country"
      :options="['India', 'Germany', 'USA','Afrrica', 'Australia']"
    />
    <p>Selected Country: {{ country }}</p>
    <BaseSelect
      v-model="role" 
      label="Role"
      :options="[
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
        { value: 'guest', label: 'Guest' }
      ]"
    />
    <p>Selected Role: {{ role }}</p>
  </div>
  <div>
    <h3>BaseCheckbox</h3>
    <BaseCheckbox v-model="agree" label="I agree to terms"/>
    <p>Agreed: {{ agree }}</p>
    <BaseCheckbox v-model="skills" value="vue" label="Vue"/>
    <BaseCheckbox v-model="skills" value="react" label="React"/>
    <BaseCheckbox v-model="skills" value="JavaScript" label="JavaScript"/>
    <p>Selected Skills: {{ skills }}</p>
  </div>
  <div class="BaseBadge">
    <h3>BaseBadge</h3>
    <BaseBadge variant="success">Active</BaseBadge>
    <BaseBadge variant="danger" pill>Critical</BaseBadge>
    <BaseBadge variant="warning" size="lg">Pending</BaseBadge>
  </div>
  <div class="BaseCard">
    <h3>BaseCard</h3>
    <BaseCard hover>
       <template #header><h3>Featured</h3></template>
       <p>Body content</p>
       <template #footer><button>Action</button></template>
    </BaseCard>
  </div>
  <div> 
    <h3>BaseModal</h3>
    <BaseButton @click="open = true">Open</BaseButton>
    <BaseModal v-model="open" title="Edit profile" size="md">
       <p>Some content goes here.</p>
       <template #footer>
       <BaseButton variant="ghost" @click="open = false">Cancel</BaseButton>
       <BaseButton @click="save">Save</BaseButton>
        </template>
    </BaseModal>
  </div>
  <div>
    <h3>BaseTextarea</h3>
    <BaseTextarea v-model="message" placeholder="Type your message..." />
    <p>Message: {{ message }}</p>
  </div>
</template>


<style scoped> 
  .page { display: flex; flex-direction: column; gap: 0.5rem; max-width: 400px;}
  .BaseBadge { max-width: 300px; display: flex; flex-direction: column; gap: 0.5rem;}
</style>

