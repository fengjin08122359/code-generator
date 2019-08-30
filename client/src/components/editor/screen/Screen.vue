<template>
  <div class="screen">
    <el-row>
      <el-col :span="6">
        <el-switch v-model="screenTo" active-text="竖屏" inactive-text="横屏">
        </el-switch>
      </el-col>
      <el-col :span="6">
        <el-input-number v-model="zoom" :precision="2" :step="0.1" :max="1.5" :min="0.1"></el-input-number>
      </el-col>
      <el-col :span="12">
        <el-button-group>
          <el-button @click="save">save</el-button>
          <el-upload style='  display: inline-block;' action='' :on-change="change" :before-upload='beforeUpload' :show-file-list='false'><el-button @click="importJSON">importJSON</el-button></el-upload>
          <el-button @click="exportJSON">exportJSON</el-button>
          <el-button @click="exportZip">exportZip</el-button>
        </el-button-group>
      </el-col>
    </el-row>
    <div class='screenBack'>
      <div :style='screenStyle' class='screenStyle'>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import handle, {
    screen
  } from "./index";
  export default {
    name: 'Screen',
    data() {
      return {
        screen: screen,
        screenTo: true,
        zoom: 1,
        fileList: [],
        url: ''
      }
    },
    props: ['target'],
    computed: {
      screenStyle() {
        return {
          ...this.screenTo ? {
            width: "600px",
            height: "900px"
          } : {
            width: "900px",
            height: "600px"
          },
          transform: `scale(${this.zoom})`
        }
      }
    },
    created() {
      handle.created()
    },
    mounted() {
      handle.mounted()
    },
    methods: {
      beforeUpload () {
        return false
      },
      change (event) {
        let json = [];
        var that = this
        try {
          var reader = new FileReader();
          reader.readAsText(event.raw);
          reader.onload = function(){
            json = JSON.parse(this.result);
            that.target.importJSON(json)
            console.log(json)
          };
        } catch (error) {
          console.error(error);
        }
      },
      handlePreview(file) {
        console.log(file);
      },
      save () {
        this.target.save()
      },
      exportZip () {
        this.target.exportZip()
      },
      exportJSON () {
        this.target.exportJSON()
      },
      importJSON () {
        // this.target.importJSON()
      },
    },
    watch: {
      zoom(val) {
        handle.setZoom(val)
      }
    },
  }
</script>

<style scoped>
  .screen {
    position: relative;
    width: 100%;
    height: 100%
  }

  .screenBack {
    position: absolute;
    top: 45px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    padding: 20px;
  }

  .screenStyle {
    border: 2px solid rgba(0, 0, 0, 0);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    margin: 0px auto;
    transform-origin: 0 0;
    overflow: hidden;
    background: #fff;
  }
</style>