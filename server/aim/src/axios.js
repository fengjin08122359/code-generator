import axios from 'axios'
import qs from 'qs'
//默认
var postFormInstance = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data'
  },
})
//json
var postJsonInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'  
  },
});
var postInstance = axios.create({
  timeout: 15000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data, headers) {
    return qs.stringify(data);
  }],
});

const httpInstance = {
  post(url, params) {
    return postInstance.post(url, params)
  },
  postJson(url, params) {
    return postJsonInstance.post(url, params)
  },
  postForm(url, params) {
    return postFormInstance.post(url, params)
  },
  get(url, params) {
    return postInstance.get(url, params)
  },
}


var test = ({}) => {
  return httpInstance.post(`http://192.168.20.34:8099/nid/member/search/?context=172`, {})
};



export {
  
test,


}