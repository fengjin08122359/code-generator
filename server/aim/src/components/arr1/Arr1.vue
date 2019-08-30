<template>
  <div class="arr1">
    <ndiv :rawData='arr1["compe4358160-ca35-11e9-b826-9bfc78642f7f"].raw' :style='arr1["compe4358160-ca35-11e9-b826-9bfc78642f7f"].style'></ndiv>
<elimage :rawData='arr1["compe435a870-ca35-11e9-b826-9bfc78642f7f"].raw' :style='arr1["compe435a870-ca35-11e9-b826-9bfc78642f7f"].style'></elimage>
<nlabel :rawData='arr1["compe435a871-ca35-11e9-b826-9bfc78642f7f"].raw' :style='arr1["compe435a871-ca35-11e9-b826-9bfc78642f7f"].style'></nlabel>


  </div>
</template>

<script>



import handle, { arr1 } from "./index";
export default {
  name: 'Arr1',
  data() {
    return {
      arr1: arr1
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
