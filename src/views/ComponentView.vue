<template lang="">
  <div>
    <div class="button-container">
      <VButton variant="primary">Primary</VButton>
      <VButton variant="secondary">Secondary</VButton>
      <VButton variant="warning">Warning</VButton>
      <VButton variant="danger">Danger</VButton>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import VButton from '../components/common/VButton/VButton.vue'
export default defineComponent({
  components: {
    VButton
  }
})
</script>
<style lang="css">
.button-container {
  display: 'flex';
}
</style>
