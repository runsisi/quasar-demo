<script setup lang="ts">

import {ref} from 'vue'

const name = ref('Tony Danza')
const email = ref('Igeorage@imail.com')
const country = ref('USA')
const city = ref('New York')
const visibility = ref('Private')

</script>

<template>

<q-page class="q-pa-lg">
  <div class="row q-col-gutter-md">
    <div class="col">
      <q-card bordered class="no-shadow card_style">
        <q-card-section class="q-mb-sm">
          <div class="text-subtitle1">
            Account Details
          </div>
          <div class="text-subtitle1 text-grey-8">
            Update your account details
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-pa-none q-py-md">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="no-shadow card_style">
                <q-card-section>
                  <div class="text-subtitle1">Profile</div>
                  <div class="text-grey-8 text-caption">Update your name and email</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-card class="no-shadow card_style">
                <q-card-section>
                  <q-item class="full-width">
                    <q-item-section>
                      <q-item-label class="text-grey-7 q-mb-sm">Name</q-item-label>
                      <q-input outlined dense class="no-shadow q-mr-sm"
                               v-model="name"
                    />
                    </q-item-section>
                  </q-item>

                  <q-item class="full-width">
                    <q-item-section>
                      <q-item-label class="text-grey-7 q-mb-sm">Email</q-item-label>
                      <q-input outlined dense class="no-shadow q-mr-sm"
                               v-model="email"
                      />
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-pa-none q-py-md">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="no-shadow card_style">
                <q-card-section>
                  <div class="text-subtitle1">Location</div>
                  <div class="text-grey-8 text-caption">Update your location</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-card class="no-shadow card_style">
                <q-card-section>
                  <q-item class="full-width">
                    <q-item-section>
                      <q-item-label class="text-grey-7 q-mb-sm">Country</q-item-label>
                      <q-input outlined dense class="no-shadow q-mr-sm"
                               v-model="country"
                      />
                    </q-item-section>
                  </q-item>

                  <q-item class="full-width">
                    <q-item-section>
                      <q-item-label class="text-grey-7 q-mb-sm">City</q-item-label>
                      <q-input outlined dense class="no-shadow q-mr-sm"
                               v-model="city"
                      />
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section class="q-pa-none q-py-md">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <q-card class="no-shadow card_style">
                <q-card-section>
                  <div class="text-subtitle1">Privacy</div>
                  <div class="text-grey-8 text-caption">Update your visibility preference</div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <q-card class="no-shadow card_style">
                <q-card-section>
                  <q-item class="full-width">
                    <q-item-section>
                      <q-item-label class="text-grey-7 q-mb-sm">Visibility</q-item-label>
                      <q-select outlined dense class="no-shadow"
                                :options="['Private', 'Public']"
                                v-model="visibility"
                      />
                    </q-item-section>
                  </q-item>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="row justify-end">
            <q-btn no-caps flat text-color="grey-8" class="btn_style q-mr-sm" style="padding: 8px 16px; min-width: 0px; min-height: 0px;">Cancel</q-btn>
            <q-btn no-caps color="dark" class="btn_style" style="padding: 8px 16px; min-width: 0px; min-height: 0px;">Update</q-btn>
        </q-card-section>
      </q-card>
    </div>
  </div>
</q-page>

</template>

<style scoped lang="scss">

</style>
