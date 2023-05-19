<script lang="ts" setup>
import { ref } from "vue";

const text = ref("");
</script>

<template>
  <input v-sanitize="text"
         v-model="text"
         type="text"/>
</template>