<template>
  <q-layout view="lHr lpr fFr" style="min-height: 956px">

    <q-header class="bg-white" v-if="$q.screen.lt.md">
      <q-toolbar>
        <q-btn class="text-black" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-subtitle2 text-weight-bolder text-grey-9">
          Quasar Minimalist Design
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer :mini="$q.screen.lt.md" :behavior="behavior" show-if-above v-model="leftDrawerOpen" side="left" bordered class="bg-grey-1">

      <q-toolbar>
        <q-item class="q-mt-lg q-px-lg">
          <q-item-section avatar>
            <q-avatar class="cursor-pointer">
              <img src="../assets/Quasar_Minimalist_Design-1.1339d600.png" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-grey-9 text-subtitle2 text-weight-bolder">
            Quasar Minimalist Design
          </q-item-section>
        </q-item>
      </q-toolbar>

      <q-list class="q-mt-lg" :class="{'q-px-lg': !$q.screen.sm}">
        <q-item clickable tag="a" to="/" :active="activeItem === 0" @click="setActiveItem(0)">
          <q-item-section avatar>
            <q-icon name="la la-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Home</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/customers" :active="activeItem === 1" @click="setActiveItem(1)">
          <q-item-section avatar>
            <q-icon name="las la-users" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Customers</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/library" :active="activeItem === 2" @click="setActiveItem(2)">
          <q-item-section avatar>
            <q-icon name="la la-camera" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Library</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/settings" :active="activeItem === 3" @click="setActiveItem(3)">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Settings</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/calendar" :active="activeItem === 4" @click="setActiveItem(4)">
          <q-item-section avatar>
            <q-icon name="la la-calendar" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Calendar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/cards" :active="activeItem === 5" @click="setActiveItem(5)">
          <q-item-section avatar>
            <q-icon name="la la-address-card" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Cards</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/charts" :active="activeItem === 6" @click="setActiveItem(6)">
          <q-item-section avatar>
            <q-icon name="la la-chart-bar" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Charts</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/login" :active="activeItem === 7" @click="setActiveItem(7)">
          <q-item-section avatar>
            <q-icon name="la la-user" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Login</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="absolute-bottom">
        <q-separator />

        <q-item v-ripple class="q-my-md q-px-lg">
          <q-item-section avatar>
            <q-avatar class="cursor-pointer">
              <img src="../assets/avatar6.jpg" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="text-subtitle1 text-weight-medium">
            <q-item-label>Winfield Stapforth</q-item-label>
            <q-item-label caption>Premium</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn flat rounded dense icon="more_horiz" />
              <q-btn flat round icon="brightness_5" />
            </div>
          </q-item-section>
        </q-item>
      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style lang="scss">
.q-focus-helper {
  display: none;
}
</style>

<script setup lang="ts">

import {computed, ref} from 'vue';
import { useQuasar } from 'quasar'

const $q = useQuasar()

const behavior = computed(() => {
  return $q.screen.xs ? "mobile" : "desktop"
})

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const activeItem = ref(0)
const setActiveItem = (id: number) => {
  activeItem.value = id
}

</script>
