<template>
  <div class="area-chart">
    <svg :width="width" :height="height" ref="svg"></svg>
  </div>
</template>

<script lang="ts">
import * as d3 from 'd3'
import { PropType } from 'vue'
import { Datum } from '../../../types/index'

export default {
  name: 'AreaChart',
  props: {
    data: {
      type: Array as PropType<Datum[]>,
      required: true
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 300
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      console.log('렌더링')
      console.log(this.data)

      const svg = d3.select(this.$refs.svg)

      if (svg.empty()) {
        console.error('SVG 요소를 찾을 수 없습니다')
      }

      // X축 설정
      const xScale = d3
        .scaleTime()
        .domain([d3.min(this.data, (d) => d.date), d3.max(this.data, (d) => d.date)])
        .range([0, this.width])

      // Y축 설정
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(this.data, (d) => d.value)])
        .range([this.height, 0])

      // Area path 설정
      const area = d3
        .area()
        .x((d: Datum) => xScale(d.date))
        .y1((d: Datum) => yScale(d.value))
        .y0(this.height)

      // 차트 그리기
      svg.append('path').attr('d', area(this.data)).attr('fill', '#337ab7')

      // X축 추가
      svg.append('g').attr('transform', `translate(0, ${this.height})`).call(d3.axisBottom(xScale))

      // Y축 추가
      svg.append('g').call(d3.axisLeft(yScale))
    }
  }
}
</script>
