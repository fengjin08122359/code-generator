<template>
  <div class="router1567150993378">
    <ndiv :rawData='router1567150993378["comp159630f0-cafa-11e9-913a-85832b642b2e"].raw' :style='router1567150993378["comp159630f0-cafa-11e9-913a-85832b642b2e"].style'><Arr1></Arr1></ndiv>
<ndiv :rawData='router1567150993378["comp30f3ce70-cafa-11e9-913a-85832b642b2e"].raw' :style='router1567150993378["comp30f3ce70-cafa-11e9-913a-85832b642b2e"].style'><Arrall></Arrall></ndiv>


  </div>
</template>

<script>

import Arr1 from '@/components/arr1/Arr1'
import Arrall from '@/components/arrall/Arrall'


import handle, { router1567150993378 } from "./index";
export default {
  name: 'Router1567150993378',
  data() {
    return {
      router1567150993378: router1567150993378
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  components:{Arr1,Arrall}
}
</script>

<style>

</style>
