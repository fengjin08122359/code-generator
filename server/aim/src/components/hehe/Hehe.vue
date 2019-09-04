<template>
  <div class="hehe">
    <ndiv :rawData='hehe["compc063c9f0-cd4a-11e9-8c5f-db7599a535ac"].raw' :style='hehe["compc063c9f0-cd4a-11e9-8c5f-db7599a535ac"].style'></ndiv>


  </div>
</template>

<script>



import handle, { hehe } from "./index";
export default {
  name: 'Hehe',
  data() {
    return {
      hehe: hehe
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
