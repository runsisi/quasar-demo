<script setup lang="ts">

import {computed} from 'vue'
import ECharts from 'vue-echarts'

import * as echarts from 'echarts/core';
import {CanvasRenderer} from 'echarts/renderers';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
} from 'echarts/components';
import {CandlestickChart} from 'echarts/charts';

echarts.use([
  CanvasRenderer,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  CandlestickChart,
]);

const props = defineProps<{
  dataset: object,
  chartStyle: object,
}>()

const options = computed(() => {
  return {
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      show: false,
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
        boundaryGap: false,
        show: true,
        scale: true,
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
        scale: true,
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
        type: 'candlestick',
        name: 'Stock',
        encode: {
          x: "date",
          y: ["open", "close", "lowest", "highest"],
          tooltip: ["open", "close", "lowest", "highest"],
        },
        itemStyle: {
          color: '#E33C3B',
          color0: '#47B9A3',
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
