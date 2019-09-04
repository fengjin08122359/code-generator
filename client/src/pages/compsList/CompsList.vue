<template>
  <div class="compsList">
  </div>
</template>

<script>
import '@/components/ele'
import '@/components/normal'
import handle, { compsList } from "./index";
export default {
  name: 'CompsList',
  data() {
    return {
      compsList: compsList
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
}
</script>

<style>

</style>
