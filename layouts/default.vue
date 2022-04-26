<template>
  <div class="layout main bg-light">
    <header-default />
    <nuxt class="container d-flex flex-column" style="flex: 1" />
  </div>
</template>

<style lang="scss">
.layout.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}
</style>

<script lang="ts">
import Vue from "vue";
import HeaderDefault from "~/components/layout/header.default.vue";

export default Vue.extend({
  components: { HeaderDefault },
});
</script>