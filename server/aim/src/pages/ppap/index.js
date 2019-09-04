import {Handle, DataHandle} from 'nclient-microfront';

class Ppap extends DataHandle{
  constructor() {
    super('ppapComp')
    this['compa3dbbd90-cd47-11e9-b9d0-5b87d4df74e4'] = {"style":{"width":"100px","height":"50px","border":"1px solid #000","position":"absolute","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","top":"161px","left":"481px"},"raw":{},"type":"ndiv"};


  }
  init () {
    console.log('Ppap init')
  }
}

let ppap = new Ppap()

let handle = new Handle({
  name: 'ppapComp',
  created () {
    ppap.init()
    console.log('ppap created')
  },
  mounted () {
    console.log('ppap mounted')
  },
})

export default handle

export {
  ppap
}