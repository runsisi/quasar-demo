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
              <q-card flat class="card_style">
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

                <q-card-section>

                </q-card-section>
              </q-card>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <q-card flat class="card_style">
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

                <q-card-section>

                </q-card-section>
              </q-card>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <q-card flat class="card_style">
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

                <q-card-section>

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
              <q-btn type="a" flat no-caps icon-right="arrow_forward" href="/customers"
                     class="text-grey-8 float-right"
                     style="padding: 4px; min-width: 0px; min-height: 0px;">
                Show More
              </q-btn>
            </div>
          </q-card-section>

          <q-card-section class="q-pa-none">
            <q-table bordered class="no-shadow card_style">

            </q-table>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {Todo, Meta} from 'components/models';
import {ref} from 'vue';


const meta = ref<Meta>({
  totalCount: 1200
});

const account = ref<string>()
const month = ref<string>()
</script>
