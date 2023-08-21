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
import {PieChart} from 'echarts/charts';

echarts.use([
  CanvasRenderer,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  PieChart,
]);

import {PieDataset} from "components/models";

const props = defineProps<{
  dataset: PieDataset,
  chartStyle: object,
}>()

const styles = computed(() => {
  return props.dataset.source.map(i => i.style)
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
    dataset: props.dataset,
    series: [
      {
        type: 'pie',
        name: 'Access Form',
        encode: {
          value: 'value',
          itemName: 'name',
        },
        center: ['50%', '40%'],
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
          color: ({dataIndex}: {dataIndex: number}) => styles.value[dataIndex].color
        },
        label: {
          show: false,
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
