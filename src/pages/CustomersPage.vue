<script setup lang="ts">

import {computed, ref} from 'vue'

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

const filter = ref('')
const addNew = ref(false)
const addName = ref('')
const addEmail = ref('')
const addBalance = ref('')
const addPlan = ref('Premium')

const addEnabled = computed(() => {
  return addName.value && addEmail.value && addBalance.value && addPlan.value
})

const tblColumns = [
  {
    name: 'name',
    label: 'Name',
    field: (row: any): any => row.name,
    align: 'left',
    sortable: true,
    sort: (a: any, b: any, rowA: Object, rowB: Object): Number => a.localeCompare(b),
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
  },
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
]

</script>

<template>
  <q-dialog persistent v-model="addNew">
    <q-card style="width: 650px; border-radius: 12px;">
      <q-card-section>
        <div class="text-subtitle1">
          Add Customer
          <q-btn flat round icon="close" class="float-right" v-close-popup>
          </q-btn>
        </div>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-section class="col-12">
        <q-item class="full-width">
          <q-item-section>
            <q-item-label class="q-mb-sm text-grey-7">
              Name
            </q-item-label>
            <q-input outlined dense class="float-right q-mr-sm"
                     v-model="addName"
            >
            </q-input>
          </q-item-section>
        </q-item>

        <q-item class="full-width">
          <q-item-section>
            <q-item-label class="q-mb-sm text-grey-7">
              Email
            </q-item-label>
            <q-input outlined dense class="float-right q-mr-sm"
                     v-model="addEmail"
            >
            </q-input>
          </q-item-section>
        </q-item>

        <q-item class="full-width">
          <q-item-section>
            <q-item-label class="q-mb-sm text-grey-7">
              Balance
            </q-item-label>
            <q-input outlined dense class="float-right q-mr-sm"
                     v-model="addBalance"
            >
            </q-input>
          </q-item-section>
        </q-item>

        <q-item class="full-width">
          <q-item-section>
            <q-item-label class="q-mb-sm text-grey-7">
              Plan
            </q-item-label>
            <q-select outlined dense :options="['Premium', 'Free']" class="float-right q-mr-sm"
                      v-model="addPlan"
            >
            </q-select>
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-section class="float-right">
        <q-btn no-caps text-color="white" color="dark" class="btn_style no-shadow q-mr-lg"
               style="padding: 8px 16px; min-width: 0px; min-height: 0px;"
               :disable="!addEnabled"
               v-close-popup
        >
          Add Customer
        </q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-md">
      <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">
        <q-card class="no-shadow bg-transparent card_style">
          <q-card-section class="q-px-none q-pt-none q-mb-sm col-12">
            <div class="text-subtitle1">
              Customers
              <q-btn no-caps color="black" text-color="white" class="float-right btn_style"
                     style="padding: 8px 16px; min-width: 0px; min-height: 0px;"
                     @click="addNew = true"
                     v-if="$q.screen.gt.xs"
              >
                Add New
              </q-btn>
              <q-btn no-caps outline class="float-right text-grey-8 btn_style q-mr-sm"
                     style="padding: 8px 16px; min-width: 0px; min-height: 0px;"
                     v-if="$q.screen.gt.xs"
              >
                Sort
              </q-btn>
              <q-btn no-caps outline
                     class="float-right text-grey-8 btn_style q-mr-sm"
                     style="padding: 8px 16px; min-width: 0px; min-height: 0px;"
                     v-if="$q.screen.gt.xs"
              >
                Filter
              </q-btn>
              <q-input outlined dense label="Search"
                       class="float-right q-mr-sm"
                       style="width: 200px;"
                       v-model="filter"
                       v-if="$q.screen.gt.xs"
              >
              </q-input>
            </div>

          </q-card-section>

          <q-card-section class="col-12 q-px-none" v-if="$q.screen.xs">
            <q-input outlined dense label="Search"
                     class="q-mr-sm"
                     v-model="filter"
            >
            </q-input>
          </q-card-section>

          <q-card-section class="q-pa-none">
            <q-table bordered
                     class="no-shadow card_style"
                     :columns="tblColumns as any" :rows="tblData"
                     :table-header-class="'text-grey-7'"
                     :pagination="{rowsPerPage: 7}"
                     :filter="filter"
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

<style scoped lang="scss">

</style>
