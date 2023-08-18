<script setup lang="ts">
import {ref, Ref} from 'vue';

import BarChart from "components/BarChart.vue";

const account = ref<string>()
const month = ref<string>()

const fetchData = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  })

  return [12, 10, 6, 9, 7, {value: 10, itemStyle: {color: 'rgb(16, 22, 41)'}}]
}

fetchData().then((res: (number|object)[]) => {
  barData.value = res
})

const barData: Ref<(number|object)[]> = ref([])

const tblColumns = [
  {
    name: 'name',
    label: 'Name',
    field: (row: any): any => row.name,
    align: 'left',
    sortable: true,
  },
  {
    name: 'plan',
    label: 'Plan',
    field: 'plan',
    align: 'left',
    sortable: true,
  },
  {
    name: 'balance',
    label: 'Balance',
    field: 'balance',
    align: 'right',
    sortable: true,
  },
  {
    name: 'status',
    label: 'Status',
    field: 'status',
    align: 'center',
  },
  {
    name: 'action',
    label: 'Action',
    field: 'action',
    align: 'right',
  },
]

const status = new Map([
  [0, {
    str: 'Active',
    color: 'positive',
  }],
  [1, {
    str: 'Inactive',
    color: 'orange',
  }],
  [2, {
    str: 'Paused',
    color: 'warning',
  }],
])

const tblData = [
  {
    name: 'Winfield Stapforth',
    email: 'wstapforth5@pcworld.com',
    avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
    plan: 'Premium',
    balance: '$2,189',
    status: 0,
    action: 0,
  },
  {
    name: 'Ruddy Jedrzej',
    email: 'rjedrzej0@discuz.net',
    avatar: 'https://cdn.quasar.dev/img/avatar2.jpg',
    plan: 'Premium',
    balance: '$2,189',
    status: 1,
    action: 0,
  },
  {
    name: 'Elisabetta Wicklen',
    email: 'ewicklen2@microsoft.com',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
    plan: 'Premium',
    balance: '$2,189',
    status: 0,
    action: 0,
  },
  {
    name: 'Seka Fawdrey',
    email: 'sfawdrey3@wired.com',
    avatar: 'https://cdn.quasar.dev/img/avatar4.jpg',
    plan: 'Premium',
    balance: '$2,189',
    status: 2,
    action: 0,
  },
  {
    name: 'Brunhilde Panswick',
    email: 'bpanswick4@csmonitor.com',
    avatar: 'https://cdn.quasar.dev/img/avatar5.jpg',
    plan: 'Premium',
    balance: '$2,189',
    status: 0,
    action: 0,
  }
]
</script>

<template>
  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-md">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-select outlined dense label="All Accounts" :options="['Account 1', 'Account 2', 'Account 3', 'Account 4']"
                  style="width: 200px" v-model="account" class="float-left">
        </q-select>

        <q-select outlined dense label="This month" :options="['Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020']"
                  style="width: 155px" v-model="month" class="float-right">
        </q-select>
      </div>

      <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <q-card bordered flat class="card_style">
          <q-card-section>
            <div class="text-subtitle1">Sales Overview</div>
            <div class="text-caption text-grey-8">Your performance this month</div>
          </q-card-section>

          <q-card-section class="row q-pa-none">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <q-card class="no-shadow card_style">
                <q-card-section>
                  <div class="text-h6">
                    43
                    <q-chip outline color="orange" style="font-size: 10px">
                      +28%
                    </q-chip>
                  </div>

                  <div class="text-subtitle1 text-grey-8">
                    New Customers
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <bar-chart :data="barData" :formatter="'{c}'" :chart-style="{height: '155px'}" ></bar-chart>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <q-card class="no-shadow card_style">
                <q-card-section>
                  <div class="text-h6">
                    $6,500
                    <q-chip outline color="orange" style="font-size: 10px">
                      +28%
                    </q-chip>
                  </div>

                  <div class="text-subtitle1 text-grey-8">
                    Gross Volume
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <bar-chart :data="barData" :formatter="(v: number) => `$${v}k`" :chart-style="{height: '155px'}" ></bar-chart>
                </q-card-section>
              </q-card>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <q-card class="no-shadow card_style">
                <q-card-section>
                  <div class="text-h6">
                    291
                    <q-chip outline color="orange" style="font-size: 10px">
                      +6%
                    </q-chip>
                  </div>

                  <div class="text-subtitle1 text-grey-8">
                    Transactions
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <bar-chart :data="[56, 43, 26, 39, 27, {value: 40, itemStyle: {color: 'rgb(16, 22, 41)'}}]" :chart-style="{height: '155px'}" ></bar-chart>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <q-card bordered flat class="fit card_style">
          <q-card-section>
            <div class="text-subtitle1">
              Balance
            </div>
            <div class="text-h6">
              $6,500
            </div>
            <div class="text-caption text-grey-8">
              Estimated future payouts
            </div>
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle1">
              Payouts
            </div>
            <div class="text-h6">
              $20,500
            </div>
            <div class="text-caption text-grey-8">
              Deposited Dec 27, 2023
            </div>
          </q-card-section>

          <q-card-section class="q-mt-xl">
            <q-btn outline no-caps class="text-grey-8 full-width card_style">
              View Receipt
            </q-btn>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <q-card class="card_style bg-transparent no-shadow">
          <q-card-section class="q-pl-none col-12">
            <div class="text-subtitle1 q-pl-md">
              New Customers
              <q-btn type="a" flat no-caps push href="/customers"
                     class="text-grey-8 float-right"
                     style="padding: 4px; min-width: 0px; min-height: 0px;">
                <span class="block">Show More</span>
                <q-icon name="arrow_forward" right role="img"></q-icon>
              </q-btn>
            </div>
          </q-card-section>

          <q-card-section class="q-pa-none">
            <q-table bordered
                     hide-pagination
                     class="no-shadow card_style"
                     :columns="tblColumns as any" :rows="tblData"
                     :table-header-class="'text-grey-7'"
            >
              <template v-slot:[`body-cell-name`]="props">
                <q-td class="text-left">
                  <q-item dense class="q-pl-none q-py-sm">
                    <q-item-section side>
                      <q-avatar>
                        <img :src="props.row.avatar" />
                      </q-avatar>
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>
                        {{props.row.name}}
                      </q-item-label>
                      <q-item-label class="text-grey-6">
                        {{props.row.email}}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-td>
              </template>

              <template v-slot:[`body-cell-status`]="props">
                <q-td class="text-center">
                  <q-chip outline :color="status.get(props.row.status)?.color" style="font-size: 12px">
                    {{status.get(props.row.status)?.str}}
                  </q-chip>
                </q-td>
              </template>

              <template v-slot:[`body-cell-action`]="props">
                <q-td class="text-right">
                  <q-btn type="button" flat dense rounded class="text-grey-6"
                         icon="more_horiz"
                         v-if="props.row.status === 2"
                  >
                  </q-btn>
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
