<template>
  <q-layout view="hHh lpR fFf" style="min-height: 956px">

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" overlay bordered class="bg-grey-1">
      <!-- drawer content -->
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

      <q-list class="q-mt-lg q-px-lg">
        <q-item clickable tag="a" href="/" manual-focus>
          <q-item-section avatar>
            <q-icon name="la la-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Home</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="/customers">
          <q-item-section avatar>
            <q-icon name="las la-users" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Customers</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="/library">
          <q-item-section avatar>
            <q-icon name="la la-camera" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Library</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="/settings">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Settings</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="/calendar">
          <q-item-section avatar>
            <q-icon name="la la-calendar" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Calendar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="/cards">
          <q-item-section avatar>
            <q-icon name="la la-address-card" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Cards</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="/charts">
          <q-item-section avatar>
            <q-icon name="la la-chart-bar" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-medium">Charts</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="/login">
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
import { ref } from 'vue';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const leftDrawerOpen = ref(false)
</script>
