<script setup lang="ts">
import {computed} from 'vue'
import ECharts from 'vue-echarts'

import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DatasetComponent,
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  DatasetComponent,
]);

const props = defineProps<{
  chartStyle: object,
  dataset: object,
}>()

const options = computed(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      }
    },
    legend: {
      bottom: '5px',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top: '5%',
      show: false,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        }
      }
    ],
    dataset: props.dataset,
    series: [
      {
        type: 'line',
        seriesLayoutBy: 'row',
        stack: 'Total',
        smooth: true,
        showSymbol: true,
        emphasis: {
          focus: 'series'
        },
      },
      {
        type: 'line',
        seriesLayoutBy: 'row',
        stack: 'Total',
        smooth: true,
        showSymbol: true,
        emphasis: {
          focus: 'series'
        },
      },
      {
        type: 'line',
        seriesLayoutBy: 'row',
        stack: 'Total',
        smooth: true,
        showSymbol: true,
        emphasis: {
          focus: 'series'
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
