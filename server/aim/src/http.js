import {httplink, Handle} from 'nclient-microfront'

var http = new Handle({
  
test ({}){
      return httplink('test', `http://192.168.20.34:8099/nid/member/search/?context=172`,{}, 'post')
    },
    

})

export default http