<script setup lang="ts">

import {inject} from "vue";
import {AxiosInstance} from "axios";

const api = inject('api') as AxiosInstance

console.log(api)

api.get('/test')

</script>

<template>

<q-page>

</q-page>

</template>

<style scoped lang="scss">

</style>
