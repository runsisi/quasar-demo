<script setup lang="ts">

const url = `https://picsum.photos/500/300?t=`

</script>

<template>

<q-page class="q-pa-lg">
  <div class="row q-col-gutter-md">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <q-card class="no-shadow card_style bg-transparent">
        <!--header-->
        <q-card-section class="q-px-none q-pt-none q-mb-sm col-12">
          <q-btn no-caps color="black" text-color="white" class="float-right btn_style"
                 style="padding: 8px 16px; min-width: 0px; min-height: 0px; margin-left: auto"
          >
            Add New
          </q-btn>
          <q-btn no-caps outline class="float-right text-grey-8 btn_style q-mr-sm"
                 style="padding: 8px 16px; min-width: 0px; min-height: 0px;"
          >
            Sort
          </q-btn>
          <q-btn no-caps outline
                 class="float-right text-grey-8 btn_style q-mr-sm"
                 style="padding: 8px 16px; min-width: 0px; min-height: 0px;"
          >
            Filter
          </q-btn>

          <!--either float-left or nothing-->
          <q-input outlined dense label="Search" style="width: 300px;"
                   v-if="$q.screen.gt.xs">
          </q-input>
        </q-card-section>

        <q-card-section class="col-12 q-px-none" v-if="$q.screen.xs">
          <q-input outlined dense label="Search"
                   class="q-mt-sm"
                   v-model="filter"
          >
          </q-input>
        </q-card-section>

        <!--content-->
        <q-card-section class="q-pa-none">
          <div class="row q-col-gutter-md">
            <template v-for="i in 15" :key="i">
              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <q-card bordered class="card_style no-shadow">
                  <q-img :src="url + Math.random()"></q-img>

                  <q-card-section>
                    <div class="text-h6 text-indigo-7">$16,500</div>
                    <div class="text-subtitle1">Cost of apartment in town</div>
                    <div class="text-subtitle1 text-grey-8">New York, USA</div>
                  </q-card-section>
                </q-card>
              </div>
            </template>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</q-page>

</template>

<style scoped lang="scss">

</style>
