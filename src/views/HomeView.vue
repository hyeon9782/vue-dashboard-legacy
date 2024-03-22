<script lang="ts">
import BarChart from '../components/chart/chart-js/BarChart.vue'
import LineChart from '../components/chart/high-chart/LineChart.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    BarChart,
    LineChart
  },
  data() {
    return {
      articles: [
        {
          id: 1,
          title: '첫 번째 게시글',
          content: '안녕하세요, Vue 3와 TypeScript를 사용한 게시글 목록입니다.'
        },
        {
          id: 2,
          title: '두 번째 게시글',
          content: '이 컴포넌트는 ArticleList 컴포넌트와 ArticleItem 컴포넌트로 구성됩니다.'
        }
      ]
    }
  }
})
</script>

<template>
  <main>
    <BarChart />
    <LineChart />
  </main>
</template>
