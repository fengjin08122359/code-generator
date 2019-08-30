<template>
  <div class="rawControl">
    <div v-for="(item, index) in raw" :key="index">
      <template v-if='item.type=="string"'>
        <el-input v-model="item.value" @input="save"><template slot='prepend' >{{item.name}}</template></el-input>
      </template>
      <template v-else-if='item.type=="number"'>
        <el-input-number v-model="item.value" @change="save"  :label="item.name"></el-input-number>
      </template>
      <template v-else-if='item.type=="boolean"'>
        <el-checkbox v-model="item.value" @change="save" >{{item.name}}</el-checkbox>
      </template>
      <template v-else-if='item.type=="object"'>
        <template v-if='item.valueType=="array"'>
          <el-select v-model="item.value.value" :placeholder="item.name" @change="save">
            <el-option
              v-for="item in item.value.options"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </template>
        <template v-if='item.valueType=="color"'>
          <el-col>{{item.name}}: <el-color-picker v-model="item.value.value" @change="save"></el-color-picker></el-col>
        </template>
      </template>
      <template v-else-if='item.type=="array"'>
        {{item.name}}:
        <div v-for="(target, tindex) in item.value" :key="'target' + tindex">
          <el-row>
            <template v-if='typeof target.name !="undefined"'>
              <el-input v-model="target.name" @input="save"><template slot='prepend' >name</template></el-input>
            </template>
            <el-input v-model="target.value" @input="save"><template slot='prepend' >value</template></el-input>
            <el-button v-if='tindex == 0' @click="item.add()">add</el-button>
            <el-button v-if='tindex != 0' @click="item.del(tindex)">del</el-button>
          </el-row>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import handle, { rawControl } from "./index";
export default {
  name: 'RawControl',
  data() {
    return {
      rawControl: rawControl,
      raw: []
    }
  },
  props: ['target'],
  computed: {
    rawData () {
      return this.target ? this.target.raw : {}
    }
  },
  created() {
    handle.created()
  },
  mounted() {
    handle.mounted()
  },
  methods: {
    save () {
      this.target.saveRaw(handle.getRaw(this.raw))
    },
    getTargetValues (val) {
      return handle.getData(val)
    },
    add (target) {
      target.push({
        name: '',
        value: ''
      })
      this.save()
    },
    del (target, index) {
      target.splice(index, 1)
      this.save()
    }
  },
  watch: {
    rawData(val) {
      this.raw = handle.getData(val);
    }
  },
}
</script>

<style>

</style>
