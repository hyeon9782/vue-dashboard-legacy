<template lang="">
  <div class="modal" v-if="show" @click.self="handleClickOutside">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    closeModal: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleClickOutside(event: MouseEvent) {
      console.log('클릭')

      const clickedElement = event.target as HTMLElement
      if (clickedElement.closest('.modal-content')) {
        console.log('클릭2')

        this.closeModal()
      }
    }
  }
})
</script>
<style lang="css">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
