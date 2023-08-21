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
  PolarComponent,
} from 'echarts/components';
import {BarChart} from 'echarts/charts';

echarts.use([
  CanvasRenderer,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  PolarComponent,
  BarChart,
]);

const props = defineProps<{
  dataset: object,
  chartStyle: object,
}>()

const styles = computed(() => {
  return props.dataset.source.filter((_, index) => index != 0).map(i => i[5])
})

const options = computed(() => {
  return {
    tooltip: {
      show: true,
      trigger: 'item',
    },
    legend: {
      show: true,
      bottom: '20px',
    },
    grid: {
      show: false,
    },
    polar: {
      center: ['50%', '40%'],
    },
    angleAxis: {
      show: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    radiusAxis: {
      type: 'category',
      show: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    // legend does not follow color defined in series.itemStyle
    color: styles.value,
    dataset: props.dataset,
    series: [
      {
        type: 'bar',
        coordinateSystem: 'polar',
        stack: 'dummy_name',
        seriesLayoutBy: 'row',
        encode: {
          angle: 'Account A',
          seriesName: 'Account A',
        },
        emphasis: {
          focus: 'series',
        },
      },
      {
        type: 'bar',
        coordinateSystem: 'polar',
        stack: 'dummy_name',
        seriesLayoutBy: 'row',
        encode: {
          angle: 'Account B',
          seriesName: 'Account B',
        },
        emphasis: {
          focus: 'series',
        },
      },
      {
        type: 'bar',
        coordinateSystem: 'polar',
        stack: 'dummy_name',
        seriesLayoutBy: 'row',
        encode: {
          angle: 'Account C',
          seriesName: 'Account C',
        },
        emphasis: {
          focus: 'series',
        },
      },
    ],
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
