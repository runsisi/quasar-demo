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

echarts.use(  [
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
  let formatter: string | Function = '{c}'

  if (props.formatter) {
    formatter = props.formatter
  }

  return {
    color: ['#80e5ff'],
    itemStyle: {
      borderRadius: [18, 18, 0, 0]
    },
    barWidth: '60%',
    tooltip: {
      show: false,
    },
    legend: {
      show: false,
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '3%',
      top: '11%',
      show: false,
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
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
    dataset: props.dataset,
    series: [
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
