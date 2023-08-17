<script setup lang="ts">
import {computed} from 'vue'
import ECharts from 'vue-echarts'
import * as echarts from 'echarts'

const props = defineProps<{
  data: number[],
  chartStyle: object,
}>()

const options = computed(() => {
  return {
    color: ['#E2E8F0'],
    itemStyle: {
      borderRadius: [50, 50, 0, 0]
    },
    tooltip: {
      show: false,
    },
    legend: {
      show: false,
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '15%',
      show: false,
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        show: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        show: false,
        axisLabel: {
          show: false
        },
      },
    ],
    series: [
      {
        type: 'bar',
        label: {
          show: true,
          position: 'top',
          color: '#767B88',
        },
        data: props.data,
      },
    ]
  }
})
</script>

<template>
  <ECharts autoresize :init-options="{width: 'auto', height: 'auto'}" :option="options" :style="props.chartStyle" />
</template>

<style scoped lang="scss">

</style>
