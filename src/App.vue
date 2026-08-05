<script setup>
import { ref } from 'vue'
import {
  BaseButton, BaseInput, BaseSelect, BaseCheckbox,
  BaseBadge, BaseCard, BaseModal, BaseToast,BaseTextarea
} from '@/components/ui'
import { useToast } from '@/composables/useToast'


const showModal = ref(false)
const name = ref('')
const role = ref('user')
const agreed = ref(false)
const skills = ref(['vue'])
const message = ref('')
const { success, error, info } = useToast()
</script>

<template>
  <main class="showcase">
    <h1>Component Library Demo</h1>

    <BaseCard hover>
      <template #header><h2>Buttons</h2></template>
      <div class="row">
        <BaseButton variant="primary">Primary</BaseButton>
        <BaseButton variant="secondary">Secondary</BaseButton>
        <BaseButton variant="danger">Danger</BaseButton>
        <BaseButton variant="ghost">Ghost</BaseButton>
        <BaseButton loading>Loading</BaseButton>
        <BaseButton disabled>Disabled</BaseButton>
      </div>
    </BaseCard>

    <BaseCard>
      <template #header><h2>Inputs</h2></template>
      <div class="col">
        <BaseInput v-model="name" label="Full Name" placeholder="Full Name" />
        <BaseSelect v-model="role" label="Role" :options="['user', 'admin','guest']" />
        <BaseCheckbox v-model="agreed" label="I agree to the terms" />
        <fieldset>
          <legend>Skills</legend>
          <BaseCheckbox v-model="skills" value="vue" label="Vue" />
          <BaseCheckbox v-model="skills" value="react" label="React" />
          <BaseCheckbox v-model="skills" value="ts" label="TypeScript" />
          <BaseCheckbox v-model="skills" value="js" label="JavaScript" />
        </fieldset>
      </div>
    </BaseCard>

    <BaseCard>
      <template #header><h2>Badges</h2></template>
      <div class="row">
        <BaseBadge>Default</BaseBadge>
        <BaseBadge variant="primary">Primary</BaseBadge>
        <BaseBadge variant="success">Active</BaseBadge>
        <BaseBadge variant="warning">Pending</BaseBadge>
        <BaseBadge variant="danger" pill>Critical</BaseBadge>
      </div>
    </BaseCard>

    <BaseCard>
      <template #header><h2>Toasts</h2></template>
      <div class="row">
        <BaseButton @click="success('Saved successfully!')">Success</BaseButton>
        <BaseButton variant="danger" @click="error('Something broke.')">Error</BaseButton>
        <BaseButton variant="secondary" @click="info('FYI…')">Info</BaseButton>
      </div>
    </BaseCard>

    <BaseCard>
      <template #header><h2>Modal</h2></template>
      <BaseButton @click="showModal = true">Open Modal</BaseButton>

      <BaseModal v-model="showModal" title="Edit profile" size="md">
        <p>Modal content goes here. Tab around to test focus trap. Press Esc to close.</p>
        <BaseInput v-model="name" label="Name" />

        <template #footer>
          <BaseButton variant="ghost" @click="showModal = false">Cancel</BaseButton>
          <BaseButton @click="showModal = false; success('Profile updated!')">Save</BaseButton>
        </template>
      </BaseModal>
    </BaseCard>


    <BaseCard>
      <template #header><h2>Textarea</h2></template>
      <BaseTextarea v-model="message" label="Message" placeholder="Type your message..." />
      <p>Typed message: {{ message }}</p>
    </BaseCard>
     <BaseToast />
  </main>
</template>

<style scoped>
.showcase { max-width: 720px; margin: 2rem auto; padding: 0 1rem; display: grid; gap: 1.5rem; }
.row { display: flex; flex-wrap: wrap; gap: .5rem; }
.col { display: flex; flex-direction: column; gap: 1rem; }
fieldset { border: 1px solid var(--color-border); border-radius: var(--radius); padding: .75rem; display: flex; gap: 1rem; }
legend { font-size: .875rem; font-weight: 500; padding: 0 .5rem; }
</style>