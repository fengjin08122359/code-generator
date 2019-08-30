<template>
  <div class="arrangeList">
    <el-input v-model='name'>
      <template slot='prepend'>
        组件名称
      </template>
      <template slot='append'>
        <el-button @click="addArrange">修改组件</el-button>
      </template>
    </el-input>
    <el-col>currentChildren: {{childrenName}}</el-col>
    <div v-for="(item, index) in arrangeList.list" :key="index">
      <el-button-group>
        <el-button @click="saveChildren(item)">{{item.name}}</el-button>
        <el-button @click="editorArrange(item)">修改</el-button>
      </el-button-group>
    </div>
  </div>
</template>

<script>
  import handle, {
    arrangeList
  } from "./index";
  import {
    components
  } from '@/sdk/components'
  export default {
    name: 'ArrangeList',
    data() {
      return {
        components: components,
        arrangeList: arrangeList,
        name: ''
      }
    },
    computed: {
      active() {
        return this.components.active[0] || null
      },
      childrenName () {
        return this.active ? this.active.childrenName : ''
      }
    },
    created() {
      handle.created()
    },
    mounted() {
      handle.mounted()
    },
    methods: {
      saveChildren(item) {
        if (this.active) {
          this.active.saveChildren(item.value, item.name)
        }
      },
      addArrange() {
        if (this.name != '') {
          let routeData = this.$router.resolve({
            path: `/Arrange/arr${this.name}`
          });;
          window.open(routeData.href, '_blank')
        }
      },
      editorArrange (item) {
        if (item.name != '') {
          let routeData = this.$router.resolve({
            path: `/Arrange/${item.name}`
          });;
          window.open(routeData.href, '_blank')
        }
      }
    },
  }
</script>

<style>

</style>