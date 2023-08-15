<script setup lang="ts">
import {ref} from 'vue'
import ECharts from 'vue-echarts'
import * as echarts from 'echarts'

const options = ref({
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
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
    top: '0%',
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
      name: 'Line 1',
      type: 'bar',
      label: {
        show: true,
        position: 'top',
      },
      data: [12, 10, 6, 9, 7, 10],
    },
  ]
})
</script>

<template>
  <ECharts autoresize :init-options="{width: 'auto', height: 'auto'}" :option="options" style="height: 155px;" />
</template>

<style scoped lang="scss">

</style>
