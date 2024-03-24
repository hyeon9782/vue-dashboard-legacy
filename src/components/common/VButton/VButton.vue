<template lang="">
  <button :class="[$style.baseButton]" v-bind="$attrs">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VButton',
  props: {
    variant: {
      type: String,
      validators: (value) => ['primary', 'secondary', 'warning', 'danger'].includes(value)
    }
  }
})
</script>
<style scoped>
.baseButton {
  border: none;
  background: transparent;
  padding: 0.6rem 1rem;
}
</style>
