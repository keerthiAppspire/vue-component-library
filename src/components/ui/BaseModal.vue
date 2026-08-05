<script setup>
import { onMounted, onUnmounted, watch, ref, nextTick } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  title: { type: String, default: '' },
  size: { type: String, default: 'md', validator: v => ['sm', 'md', 'lg', 'full'].includes(v) },
  closeOnEsc: { type: Boolean, default: true },
  closeOnBackdrop: { type: Boolean, default: true }
})
const emit = defineEmits(['update:modelValue', 'close'])

const dialogRef = ref(null)
let lastFocused = null

function close() {
  emit('update:modelValue', false)
  emit('close')
}

function onKey(e) {
  if (props.closeOnEsc && e.key === 'Escape') close()
  if (e.key === 'Tab') trapFocus(e)
}

function trapFocus(e) {
  if (!dialogRef.value) return
  const focusable = dialogRef.value.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  if (!focusable.length) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault() }
  else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault() }
}

watch(() => props.modelValue, async (open) => {
  if (open) {
    lastFocused = document.activeElement
    document.body.style.overflow = 'hidden'
    await nextTick()
    dialogRef.value?.focus()
  } else {
    document.body.style.overflow = ''
    lastFocused?.focus?.()
  }
})

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="backdrop"
        @click.self="closeOnBackdrop && close()"
      >
        <div
          ref="dialogRef"
          :class="['modal', `modal-${size}`]"
          role="dialog"
          aria-modal="true"
          :aria-label="title"
          tabindex="-1"
        >
          <header v-if="title || $slots.header" class="modal-header">
            <slot name="header">
              <h2>{{ title }}</h2>
            </slot>
            <button @click="close" class="close-btn" aria-label="Close dialog">×</button>
          </header>

          <div class="modal-body">
            <slot />
          </div>

          <footer v-if="$slots.footer" class="modal-footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.backdrop {
  position: fixed; inset: 0;
  background: rgba(17, 24, 39, .5);
  display: grid; place-items: center;
  z-index: 1000; padding: 1rem;
}
.modal {
  background: white; border-radius: 12px;
  width: 100%; max-height: 90vh; overflow: auto;
  display: flex; flex-direction: column;
  box-shadow: 0 20px 60px rgba(0,0,0,.2);
}
.modal:focus { outline: none; }
.modal-sm { max-width: 360px; }
.modal-md { max-width: 520px; }
.modal-lg { max-width: 780px; }
.modal-full { max-width: 100%; max-height: 100%; }

.modal-header {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
  display: flex; align-items: center; justify-content: space-between;
}
.modal-header h2 { margin: 0; font-size: 1.125rem; }
.close-btn {
  border: 0; background: transparent; font-size: 1.5rem;
  cursor: pointer; color: var(--color-muted); line-height: 1;
}
.modal-body { padding: 1.25rem; flex: 1; }
.modal-footer {
  padding: .75rem 1.25rem;
  border-top: 1px solid var(--color-border);
  display: flex; justify-content: flex-end; gap: .5rem;
}

.modal-enter-active, .modal-leave-active { transition: opacity .2s; }
.modal-enter-active .modal, .modal-leave-active .modal { transition: transform .2s; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .modal, .modal-leave-to .modal { transform: scale(.96); }
</style>


