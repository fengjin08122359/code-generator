import {Handle, DataHandle, httplink} from 'nclient-microfront';

let {entries} = Object

class CompsList extends DataHandle{
  constructor() {
    super('compsListComp')
  }
  init () {
    console.log('CompsList init')
    httplink('getcompsList', `/components/getArrangeList`, {}, 'post')
    .then(result => {
      this.list = []
      for(let [key, value] of entries(result.res) ){
        this.list.push({
          name: key,
        })
      }
    })
  }
}

let compsList = new CompsList()

let handle = new Handle({
  name: 'compsListComp',
  created () {
    compsList.init()
    console.log('compsList created')
  },
  mounted () {
    console.log('compsList mounted')
  },
})

export default handle

export {
  compsList
}