<script lang="ts">
import DonutChart from '../components/chart/apex-chart/DonutChart.vue'
import BarChart from '../components/chart/chart-js/BarChart.vue'
import AreaChart from '../components/chart/d3-js/AreaChart.vue'
import LineChart from '../components/chart/high-chart/LineChart.vue'

import Modal from '../components/common/Modal/Modal.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    BarChart,
    LineChart,
    DonutChart,
    AreaChart,
    Modal
  },
  data() {
    return {
      data: [
        { date: new Date(2023, 0, 1), value: 10 },
        { date: new Date(2023, 1, 1), value: 20 },
        { date: new Date(2023, 2, 1), value: 30 }
      ],
      show: false
    }
  },
  methods: {
    openModal() {
      this.show = true
    },
    closeModal() {
      this.show = false
    }
  }
})
</script>

<template>
  <main>
    <DonutChart />
    <AreaChart :data="data" />
    <button @click="openModal">모달</button>

    <Modal :show="show" :closeModal="closeModal">
      <div>모달</div>
    </Modal>
    <!-- <BarChart />
    <LineChart /> -->
  </main>
</template>
