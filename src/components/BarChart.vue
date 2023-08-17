<script setup lang="ts">
import {computed} from 'vue'
import ECharts from 'vue-echarts'

import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';

echarts.use([BarChart, CanvasRenderer, GridComponent, TooltipComponent, LegendComponent]);

const props = defineProps<{
  data: (number|object)[],
  chartStyle: object,
  formatter?: string | Function,
}>()

const options = computed(() => {
  let formatter: string | Function = '{c}'

  if (props.formatter) {
    formatter = props.formatter

    if (typeof props.formatter === 'function') {
      formatter = ({value}: {value: number}) => (props.formatter as Function)?.(value)
    }
  }

  return {
    color: ['#E2E8F0'],
    itemStyle: {
      borderRadius: [50, 50, 0, 0]
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
          formatter,
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
