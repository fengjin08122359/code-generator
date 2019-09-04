<template>
  <div class="upload">
     <el-upload
      action="/uploadFile/img"
      :show-file-list="false"
      :on-success="handleAvatarSuccess">
      上传文件
    </el-upload>
  </div>
</template>

<script>
import handle, { upload } from "./index";
export default {
  name: 'Upload',
  data() {
    return {
      upload: upload
    }
  },
  props: ['value'],
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  methods: {
    handleAvatarSuccess (files) {
      console.log(files)
      this.$emit('uploadChange', document.location.protocol + '//' + location.host + files.url)
    }
  },
}
</script>

<style>

</style>
