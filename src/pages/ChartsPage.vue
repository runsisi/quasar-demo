<script setup lang="ts">

import {ref, Ref} from 'vue'

import {PieDataset} from "components/models";

import LineChart from "components/LineChart.vue";
import BarChart2 from "components/BarChart2.vue";
import BarChart3 from "components/BarChart3.vue";
import StockChart from "components/StockChart.vue";
import PieChart from "components/PieChart.vue";
import PolarChart from "components/PolarChart.vue";

const lineChartDataset = ref()

lineChartDataset.value = {
  sourceHeader: false,
  dimensions: [null, 'Email', 'Ads', 'Search Engine'],
  source: [
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    [120, 132, 101, 134, 90, 230, 210],
    [220, 182, 191, 234, 290, 330, 310],
    [520, 432, 501, 334, 290, 330, 320],
  ],
}

const barChartDataset = ref({
  sourceHeader: false,
  source: [
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    [552, 130, 600, 900, 700, 100, 350, 650, 950],
  ],
})

const multibarChartDataset = ref({
  sourceHeader: true,
  source: [
    ['xxx', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    ['This Week', 130, 405, 550, 600, 333, 200, 500],
    ['Last Week', 230, 400, 530, 200, 650, 300, 400],
  ],
})

const stockChartDataset = ref({
  source: [
    ["date", "open", "close", "lowest", "highest",],
    ["2013/1/24", 2320.26, 2320.26, 2287.3, 2362.94,],
    ["2013/1/25", 2300, 2291.3, 2288.26, 2308.38,],
    ["2013/1/28", 2295.35, 2346.5, 2295.35, 2346.92,],
    ["2013/1/29", 2347.22, 2358.98, 2337.35, 2363.8,],
    ["2013/1/30", 2360.75, 2382.48, 2347.89, 2383.76,],
    ["2013/1/31", 2383.43, 2385.42, 2371.23, 2391.82,],
    ["2013/2/1", 2377.41, 2419.02, 2369.57, 2421.15,],
    ["2013/2/4", 2425.92, 2428.15, 2417.58, 2440.38,],
    ["2013/2/5", 2411, 2433.13, 2403.3, 2437.42,],
    ["2013/2/6", 2432.68, 2434.48, 2427.7, 2441.73,],
    ["2013/2/7", 2430.69, 2418.53, 2394.22, 2433.89,],
    ["2013/2/8", 2416.62, 2432.4, 2414.4, 2443.03,],
    ["2013/2/18", 2441.91, 2421.56, 2415.43, 2444.8,],
    ["2013/2/19", 2420.26, 2382.91, 2373.53, 2427.07,],
    ["2013/2/20", 2383.49, 2397.18, 2370.61, 2397.94,],
  ],
})

const pieChartDataset: Ref<PieDataset> = ref({
  source: [
    { value: 1048, name: 'Search Engine', style: { color: '#3760FC' } },
    { value: 735, name: 'Direct', style: { color: '#80E4FD' } },
    { value: 580, name: 'Email', style: { color: '#A05CFC' } },
    { value: 484, name: 'Ads', style: { color: '#DDE6F5' } },
  ],
})

const polarChartDataset = ref({
  sourceHeader: true,
  source: [
    ['xxx', 'Mon', 'Tue', 'Wed', 'Thu',],
    ['Account A', 1, 2, 3, 4, '#80E4FD'],
    ['Account B', 2, 4, 6, 8, '#A05CFC'],
    ['Account C', 1, 2, 3, 4, '#DDE6F5'],
  ],
})

</script>

<template>

<q-page class="q-pa-lg">
  <div class="row q-col-gutter-md">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <q-card class="no-shadow bg-transparent card_style">
        <q-card-section class="q-px-none q-pt-none q-mb-sm">
          <div class="text-subtitle1">Charts</div>
        </q-card-section>
      </q-card>
    </div>

    <!--line chart-->
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-card class="no-shadow card_style bg-grey-1">
        <q-card-section>
          <div class="text-h6 text-grey-8">Line Chart</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <line-chart :chart-style="{height: '405px'}" :dataset="lineChartDataset"></line-chart>
        </q-card-section>
      </q-card>
    </div>

    <!--bar chart-->
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-card class="no-shadow card_style bg-grey-1">
        <q-card-section>
          <div class="text-h6 text-grey-8">Bar Chart</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <bar-chart2
            :chart-style="{height: '405px'}" :dataset="barChartDataset"
            :formatter="params => (`${params.value[params.encode.y[0]]}`)"
          >
          </bar-chart2>
        </q-card-section>
      </q-card>
    </div>

    <!--multi bar chart-->
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-card class="no-shadow card_style bg-grey-1">
        <q-card-section>
          <div class="text-h6 text-grey-8">Multi Bar Chart</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <bar-chart3
            :chart-style="{height: '405px'}" :dataset="multibarChartDataset"
          >
          </bar-chart3>
        </q-card-section>
      </q-card>
    </div>

    <!--stock chart-->
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-card class="no-shadow card_style bg-grey-1">
        <q-card-section>
          <div class="text-h6 text-grey-8">Stock Chart</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <stock-chart
            :chart-style="{height: '405px'}" :dataset="stockChartDataset"
          >
          </stock-chart>
        </q-card-section>
      </q-card>
    </div>

    <!--pie chart-->
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-card class="no-shadow card_style bg-grey-1">
        <q-card-section>
          <div class="text-h6 text-grey-8">Pie Chart</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <pie-chart
            :chart-style="{height: '405px'}" :dataset="pieChartDataset"
          >
          </pie-chart>
        </q-card-section>
      </q-card>
    </div>

    <!--polar chart-->
    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <q-card class="no-shadow card_style bg-grey-1">
        <q-card-section>
          <div class="text-h6 text-grey-8">Polar Chart</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <polar-chart
            :chart-style="{height: '405px'}" :dataset="polarChartDataset"
          >
          </polar-chart>
        </q-card-section>
      </q-card>
    </div>
  </div>
</q-page>

</template>

<style scoped lang="scss">

</style>
