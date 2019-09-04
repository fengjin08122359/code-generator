import {Handle, DataHandle} from 'nclient-microfront';

class Hehe extends DataHandle{
  constructor() {
    super('heheComp')
    this['compc063c9f0-cd4a-11e9-8c5f-db7599a535ac'] = {"style":{"width":"100px","height":"50px","border":"1px solid #000","position":"absolute","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","top":"3px","left":"7px","backgroundColor":"#CB8787"},"raw":{},"type":"ndiv"};


  }
  init () {
    console.log('Hehe init')
  }
}

let hehe = new Hehe()

let handle = new Handle({
  name: 'heheComp',
  created () {
    hehe.init()
    console.log('hehe created')
  },
  mounted () {
    console.log('hehe mounted')
  },
})

export default handle

export {
  hehe
}