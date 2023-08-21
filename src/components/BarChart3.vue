<script setup lang="ts">

import {computed} from 'vue'
import ECharts from 'vue-echarts'

import * as echarts from 'echarts/core';
import {BarChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
} from 'echarts/components';

echarts.use([
  BarChart,
  CanvasRenderer,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
]);

const props = defineProps<{
  dataset: object,
  chartStyle: object,
  formatter?: string | Function,
}>()

const options = computed(() => {
  let formatter: string | Function = ''

  if (props.formatter) {
    formatter = props.formatter
  }

  return {
    color: ['#80e5ff', '#0468ff'],
    itemStyle: {
      borderRadius: [18, 18, 0, 0]
    },
    barWidth: '33%',
    tooltip: {
      show: true,
    },
    legend: {
      show: true,
      bottom: '5px',
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '70',
      top: '5%',
      show: false,
      containLabel: false,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        show: true,
        axisLine: {
          show: true,
        },
        axisTick: {
          show: true,
        },
        axisLabel: {
          show: true,
        },
        splitLine: {
          show: false,
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
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
        splitLine: {
          show: false,
        }
      },
    ],
    dataset: props.dataset,
    series: [
      {
        type: 'bar',
        seriesLayoutBy: 'row',
        label: {
          show: true,
          position: 'top',
          color: '#767B88',
          formatter: '',
        },
      },
      {
        type: 'bar',
        seriesLayoutBy: 'row',
        label: {
          show: true,
          position: 'top',
          color: '#767B88',
          formatter,
        },
      },
    ]
  }
})

</script>

<template>

<ECharts autoresize
         :init-options="{width: 'auto', height: 'auto'}"
         :option="options"
         :style="props.chartStyle"
/>

</template>

<style scoped lang="scss">

</style>
