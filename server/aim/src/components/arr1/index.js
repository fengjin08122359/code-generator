import {Handle, DataHandle} from 'nclient-microfront';

class Arr1 extends DataHandle{
  constructor() {
    super('arr1Comp')
    this['compe4358160-ca35-11e9-b826-9bfc78642f7f'] = {"style":{"width":"","height":"60px","border":0,"position":"absolute","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","top":"0px","left":"0px","right":"0","backgroundColor":"#5A78FB","border-left":"0 #000 solid","border-right":"0 #000 solid","border-top":"0 #000 solid","border-bottom":"0 #000 solid","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px"},"raw":{}};
this['compe435a870-ca35-11e9-b826-9bfc78642f7f'] = {"style":{"wordBreak":"break-all","top":"6px","left":"10px","width":"auto","height":"auto","position":"absolute","boxSizing":"border-box"},"raw":{"url":"http://ronghe.any800.com/Any800Chat/bootstrapUI/img/logo.png","fit":{"value":"","options":["","fill","contain","cover","none","scale-down"],"type":"array"},"lazy":false}};
this['compe435a871-ca35-11e9-b826-9bfc78642f7f'] = {"style":{"width":"","height":"20px","border":0,"position":"absolute","display":"inline","box-sizing":"border-box","wordBreak":"break-all","top":"20px","left":"","right":"20px","color":"#FFFFFF","border-left":"0 #000 solid","border-right":"0 #000 solid","border-top":"0 #000 solid","border-bottom":"0 #000 solid","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px"},"raw":{"text":"退出系统"}};


  }
  init () {
    console.log('Arr1 init')
  }
}

let arr1 = new Arr1()

let handle = new Handle({
  name: 'arr1Comp',
  created () {
    arr1.init()
    console.log('arr1 created')
  },
  mounted () {
    console.log('arr1 mounted')
  },
})

export default handle

export {
  arr1
}