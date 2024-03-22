<template lang="">
  <div>
    <apexchart width="500" type="donut" :options="options" :series="series" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      options: {},
      series: [44, 55, 41, 17, 15]
    }
  }
})
</script>
<style lang=""></style>
