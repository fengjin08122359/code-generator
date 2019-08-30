<template>
  <div class="arrall">
    <ndiv :rawData='arrall["comp5fee7aa2-ca36-11e9-a05f-93f26222d1a8"].raw' :style='arrall["comp5fee7aa2-ca36-11e9-a05f-93f26222d1a8"].style'></ndiv>
<ndiv :rawData='arrall["compc5209540-cb06-11e9-b32e-bd1297c9391d"].raw' :style='arrall["compc5209540-cb06-11e9-b32e-bd1297c9391d"].style'><Arr1></Arr1></ndiv>


  </div>
</template>

<script>

import Arr1 from '@/components/arr1/Arr1'


import handle, { arrall } from "./index";
export default {
  name: 'Arrall',
  data() {
    return {
      arrall: arrall
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  components:{Arr1}
}
</script>

<style>

</style>
