

const fs = require('fs'); 

function editorConfigInJs(componentJs, dataConfig){ 
  var data = fs.readFileSync(componentJs,'utf-8');
  var newData = data.replace(/\/\* data start \*\/([\s\S]*)\/\* data end \*\//g,`${dataConfig}\r\n`)
  fs.writeFileSync(componentJs, newData, 'utf8');
}

function editorConfigInVue(componentVue, templateConfig,importConfig, compConfig){ 
  var data = fs.readFileSync(componentVue,'utf-8');
  var newData = data.replace(/<!-- template start -->([\s\S]*)<!-- template end -->/g,`${templateConfig}\r\n`)
        .replace(/\/\* import start \*\/([\s\S]*)\/\* import end \*\//g,`\r\n${importConfig}\r\n`)
        .replace(/\/\* comp start \*\/([\s\S]*)\/\* comp end \*\//g,`${compConfig}`)
  fs.writeFileSync(componentVue, newData, 'utf8');
}
function editorConfigInRouter(router_path, routerConfig) {
  var data = fs.readFileSync(router_path,'utf-8');
  var newData = data.replace(/\/\* router config start \*\/([\s\S]*)\/\* router config end \*\//g,`\r\n${routerConfig}\r\n`)
  fs.writeFileSync(router_path, newData, 'utf8');
}
module.exports = {
  editorConfigInJs,
  editorConfigInVue,
  editorConfigInRouter
}