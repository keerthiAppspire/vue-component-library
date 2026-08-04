import { ref } from 'vue'

const toasts = ref([])
let nextId = 1

export function useToast() {
  function show(message, options = {}) {
    const id = nextId++
    const toast = { id, message, type: options.type || 'info', duration: options.duration || 3000 }
    toasts.value.push(toast)
    if (toast.duration > 0) setTimeout(() => dismiss(id), toast.duration)
  }

  function dismiss(id) {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return {
    toasts,
    show,
    dismiss,
    success: (msg, opts) => show(msg, { ...opts, type: 'success' }),
    error:   (msg, opts) => show(msg, { ...opts, type: 'error' }),
    info:    (msg, opts) => show(msg, { ...opts, type: 'info' })
  }
}