import {Handle, DataHandle} from 'nclient-microfront';

class Router1567150993378 extends DataHandle{
  constructor() {
    super('router1567150993378Comp')
    this['comp159630f0-cafa-11e9-913a-85832b642b2e'] = {"style":{"width":"","height":"60px","border":0,"position":"absolute","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","top":"0px","left":"0px","right":"0","border-left":"0 #000 solid","border-right":"0 #000 solid","border-top":"0 #000 solid","border-bottom":"0 #000 solid","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px"},"raw":{}};
this['comp30f3ce70-cafa-11e9-913a-85832b642b2e'] = {"style":{"width":"","height":"","border":0,"position":"absolute","display":"inline-block","box-sizing":"border-box","wordBreak":"break-all","top":"200px","left":"0","bottom":"0","right":"0","border-left":"0 #000 solid","border-right":"0 #000 solid","border-top":"0 #000 solid","border-bottom":"0 #000 solid","border-top-left-radius":"0px","border-top-right-radius":"0px","border-bottom-left-radius":"0px","border-bottom-right-radius":"0px"},"raw":{}};


  }
  init () {
    console.log('Router1567150993378 init')
  }
}

let router1567150993378 = new Router1567150993378()

let handle = new Handle({
  name: 'router1567150993378Comp',
  created () {
    router1567150993378.init()
    console.log('router1567150993378 created')
  },
  mounted () {
    console.log('router1567150993378 mounted')
  },
})

export default handle

export {
  router1567150993378
}