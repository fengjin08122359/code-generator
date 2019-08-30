import {Handle, DataHandle, httplink, rgData, logger} from 'nclient-microfront';

class Arrange extends DataHandle{
  constructor() {
    super('arrangeComp')
    this.id = ''
  }
  init () {
    console.log('Arrange init')
  }
  save () {
    httplink('saveArrange', `/components/saveArrange`, {
      id: this.id,
      list: JSON.stringify(rgData.componentsClass.getSaveableList())
    }, 'post')
    .then(result => {

    })
  }
  exportZip () {
    httplink('exportZipcomponent', `/exportZip/component`, {
      id: this.id
    }, 'post')
    .then(result => {
      window.open(result.res.src, '_blank')
    })
  }
  exportJSON () {
    logger.saveTextAs(JSON.stringify(rgData.componentsClass.getSaveableList()),  this.id + '.json')
  }
  importJSON (json) {
    rgData.componentsClass.setList(json)
  }
}

let arrange = new Arrange()

let handle = new Handle({
  name: 'arrangeComp',
  created () {
    arrange.init()
    console.log('arrange created')
  },
  mounted () {
    console.log('arrange mounted')
  },
  switchRoute (id) {
    arrange.id = id;
    httplink('getArrange', `/components/getArrange`, {id}, 'post')
    .then(result => {
      console.log(result)
      rgData.componentsClass.setList(result.res)
    })
  },
})

export default handle

export {
  arrange
}