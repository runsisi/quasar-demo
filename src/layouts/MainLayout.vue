<template>
  <q-layout view="LHr Lpr Lfr">

    <q-header class="bg-white" v-if="$q.screen.lt.md">
      <q-toolbar>
        <q-btn class="text-black" dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-subtitle2 text-weight-bolder text-grey-9">
          Quasar Minimalist Design
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer :mini="$q.screen.lt.md" :behavior="behavior" show-if-above v-model="leftDrawerOpen" side="left" bordered class="full-height bg-grey-1">

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
        <q-item clickable tag="a" :to="{name: 'home'}" :active="isActiveItem('home')">
          <q-item-section avatar>
            <q-icon name="la la-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="isActiveItem('home') ? 'text-weight-bolder' : 'text-weight-medium'">Home</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" :to="{name: 'customers'}" :active="isActiveItem('customers')">
          <q-item-section avatar>
            <q-icon name="las la-users" />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="isActiveItem('customers') ? 'text-weight-bolder' : 'text-weight-medium'">Customers</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" :to="{name: 'library'}" :active="isActiveItem('library')">
          <q-item-section avatar>
            <q-icon name="la la-camera" />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="isActiveItem('library') ? 'text-weight-bolder' : 'text-weight-medium'">Library</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" :to="{name: 'settings'}" :active="isActiveItem('settings')">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="isActiveItem('settings') ? 'text-weight-bolder' : 'text-weight-medium'">Settings</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" :to="{name: 'calendar'}" :active="isActiveItem('calendar')">
          <q-item-section avatar>
            <q-icon name="la la-calendar" />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="isActiveItem('calendar') ? 'text-weight-bolder' : 'text-weight-medium'">Calendar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" :to="{name: 'cards'}" :active="isActiveItem('cards')">
          <q-item-section avatar>
            <q-icon name="la la-address-card" />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="isActiveItem('cards') ? 'text-weight-bolder' : 'text-weight-medium'">Cards</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" :to="{name: 'charts'}" :active="isActiveItem('charts')">
          <q-item-section avatar>
            <q-icon name="la la-chart-bar" />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="isActiveItem('charts') ? 'text-weight-bolder' : 'text-weight-medium'">Charts</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" :to="{name: 'login'}" :active="isActiveItem('login')">
          <q-item-section avatar>
            <q-icon name="la la-user" />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="isActiveItem('login') ? 'text-weight-bolder' : 'text-weight-medium'">Login</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" :to="{name: 'element'}" :active="isActiveItem('element')">
          <q-item-section avatar>
            <q-icon name="fa-brands fa-elementor" />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="isActiveItem('element') ? 'text-weight-bolder' : 'text-weight-medium'">Element</q-item-label>
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

import { useRoute } from 'vue-router'

const route = useRoute()

const $q = useQuasar()

const behavior = computed(() => {
  return $q.screen.xs ? "mobile" : "desktop"
})

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const isActiveItem = (id: string): boolean => {
  return route.name === id
}

</script>
