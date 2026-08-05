<script setup>
defineProps({
  padding: { type: String, default: 'md', validator: v => ['none', 'sm', 'md', 'lg'].includes(v) },
  hover: { type: Boolean, default: false }
})
</script>

<template>
  <article :class="['card', `pad-${padding}`, { hover }]">
    <header v-if="$slots.header" class="card-header">
      <slot name="header" />
    </header>

    <div class="card-body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </footer>
  </article>
</template>

<style scoped>
.card {
  background: rgba(11, 75, 75, 0.185);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,.06);
  display: flex; flex-direction: column;
  transition: box-shadow .2s, transform .2s;
}
.card.hover:hover { box-shadow: 0 8px 20px rgba(0,0,0,.08); transform: translateY(-2px); }
.pad-none > .card-body { padding: 0; }
.pad-sm > .card-body { padding: .75rem; }
.pad-md > .card-body { padding: 1.25rem; }
.pad-lg > .card-body { padding: 2rem; }
.card-header, .card-footer {
  padding: .75rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
}
.card-footer { border-bottom: 0; border-top: 1px solid var(--color-border); }
</style>
