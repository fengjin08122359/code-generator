import {Handle, DataHandle, rgData, httplink} from 'nclient-microfront';

let {entries} = Object

class ArrangeList extends DataHandle{
  constructor() {
    super('arrangeListComp')
    this.list = []
  }
  init () {
    console.log('ArrangeList init')
    httplink('getArrangeList', `/components/getArrangeList`, {}, 'post')
    .then(result => {
      this.list = []
      for(let [key, value] of entries(result.res) ){
        var items = JSON.parse(value);
        var citems = rgData.componentsClass.resetToComponents(items)
        this.list.push({
          name: key,
          value: citems
        })
      }
    })
  }
}

let arrangeList = new ArrangeList()

let handle = new Handle({
  name: 'arrangeListComp',
  created () {
    console.log('arrangeList created')
  },
  mounted () {
    arrangeList.init()
    console.log('arrangeList mounted')
  },
})

export default handle

export {
  arrangeList
}