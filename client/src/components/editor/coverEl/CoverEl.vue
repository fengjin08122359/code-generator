<template>
  <div class="coverEl"
    @mousedown.prevent="e => $emit('activated', e)">
    <slot></slot>
  </div>
</template>

<script>
import handle, { coverEl } from "./index";
export default {
  name: 'CoverEl',
  data() {
    return {
      coverEl: coverEl
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


<style scoped>
.coverEl {
  position: absolute;
  box-sizing: border-box;
}
.coverEl:hover {
  cursor: move;
}
.coverEl > * {
  margin: 0;
  width: 100%;
  height: 100%;
  /* position: absolute; */
  box-sizing: border-box;
}

.selection-box {
  border: 2px solid #03a9f4;
}

.handle {
  box-sizing: border-box;
  display: none;
  position: absolute;
  width: 10px;
  height: 10px;
  font-size: 1px;
  border-radius: 50%;
  border: 1px solid #fff;
}
.tl {
  top: -3px;
  left: -3px;
  cursor: nwse-resize;
  background: #03a9f4;
}
.mt {
  top: 0;
  width: 100%;
  border-radius: 0;
  border-width: 2px;
  border-color: #03a9f4;
  border-style: solid none none none;
  cursor: ns-resize;
}
.tr {
  top: -3px;
  right: -3px;
  cursor: nesw-resize;
  background: #03a9f4;
}
.mr {
  top: 0;
  right: 0;
  height: 100%;
  border-radius: 0;
  border-width: 2px;
  border-color: #03a9f4;
  border-style: none solid none none;
  cursor: ew-resize;
}
.br {
  bottom: -3px;
  right: -3px;
  cursor: nwse-resize;
  background: #03a9f4;
}
.mb {
  bottom: 0;
  width: 100%;
  border-radius: 0;
  border-width: 2px;
  border-color: #03a9f4;
  border-style: none none solid none;
  cursor: ns-resize;
}
.bl {
  bottom: -3px;
  left: -3px;
  cursor: nesw-resize;
  background: #03a9f4;
}
.ml {
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 0;
  border-width: 2px;
  border-color: #03a9f4;
  border-style: none none none solid;
  cursor: ew-resize;
}
</style>
