<script setup lang="ts">
import { ref } from 'vue'

const email = ref<string>('Pratik')
const password = ref<string>('passw0rd')
</script>

<template>
  <q-page class="bg-image flex flex-center">
    <q-card bordered class="no-shadow card_style" style="width: 25%">
      <q-card-section class="text-center q-pa-md">
        <q-avatar class="cursor-pointer">
          <img src="../assets/Quasar_Minimalist_Design-1.1339d600.png" />
        </q-avatar>
      </q-card-section>

      <q-card-section class="q-pa-none">
        <div class="text-center q-pt-sm">
          <div class="col text-body1 text-weight-bolder ellipsis text-dark">
            Login
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-mx-sm">
        <q-item class="full-width">
          <q-item-section>
            <q-item-label class="q-mb-sm text-grey-7">
              Email
            </q-item-label>
            <q-input outlined dense v-model="email" />
          </q-item-section>
        </q-item>

        <q-item class="full-width">
          <q-item-section>
            <q-item-label class="q-mb-sm text-grey-7">
              Password
            </q-item-label>
            <q-input outlined dense type="password" v-model="password" />
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-section class="text-center q-pa-none text-grey-8">
        <div>
          <a>Forgot Password</a>
        </div>
      </q-card-section>

      <q-card-section class="text-center q-mx-sm q-mb-md">
        <div>
          <q-btn type="a" to="/"
                 class="bg-dark text-white text-capitalize text-weight-bold full-width btn_style"
                 style="border-radius: 8px;"
          >
            Login
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped lang="scss">

</style>
