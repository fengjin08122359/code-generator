<template>
  <div class="ppap">
    <ndiv :rawData='ppap["compa3dbbd90-cd47-11e9-b9d0-5b87d4df74e4"].raw' :style='ppap["compa3dbbd90-cd47-11e9-b9d0-5b87d4df74e4"].style'><Hehe></Hehe></ndiv>


  </div>
</template>

<script>

import Hehe from '@/components/hehe/Hehe'


import handle, { ppap } from "./index";
export default {
  name: 'Ppap',
  data() {
    return {
      ppap: ppap
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  components:{Hehe}
}
</script>

<style>

</style>
