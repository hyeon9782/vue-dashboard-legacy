<template lang="">
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Button',
  props: {
    onClick: {
      type: Function,
      default: () => {}
    }
  }
})
</script>
<style scoped>
.button {
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
  padding: 5px 10px;
}
</style>
