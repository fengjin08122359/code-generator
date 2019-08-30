import {Handle, DataHandle} from 'nclient-microfront';

class Arrall extends DataHandle{
  constructor() {
    super('arrallComp')
    this['comp5fee7aa2-ca36-11e9-a05f-93f26222d1a8'] = {"style":{"width":"60px","height":"","border":"1px solid #000","position":"absolute","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","zIndex":"","top":"60px","left":"0","bottom":"0","backgroundColor":"#A7A1A1"},"raw":{}};
this['compc5209540-cb06-11e9-b32e-bd1297c9391d'] = {"style":{"width":"","height":"60px","border":0,"position":"absolute","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","top":"0","left":"0","right":"0","border-left":"0 #000 solid","border-right":"0 #000 solid","border-top":"0 #000 solid","border-bottom":"0 #000 solid","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px"},"raw":{}};


  }
  init () {
    console.log('Arrall init')
  }
}

let arrall = new Arrall()

let handle = new Handle({
  name: 'arrallComp',
  created () {
    arrall.init()
    console.log('arrall created')
  },
  mounted () {
    console.log('arrall mounted')
  },
})

export default handle

export {
  arrall
}