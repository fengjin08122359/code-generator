const fse = require('fs-extra');
const fs = require('fs'); 
const path = require('path');
const {
  lowerCamelCase,
  upperCamelCase
} = require('./camel')
const {
  editorConfigInJs,
  editorConfigInVue,
  editorConfigInRouter
} = require('./editor')
const components_path = path.resolve(__dirname, '../template/components');
const component_path = path.resolve(__dirname, '../template/component');
const pages_path = path.resolve(__dirname, '../template/pages');
const projectsrc_path = path.resolve(__dirname, '../template/projectsrc');
const project_path = path.resolve(__dirname, '../template/project');
const aim_dest_path = path.resolve(__dirname, '../aim/src');
const public_dest_path = path.resolve(__dirname, '../public/dist');
require('shelljs/global');

async function createZip(isproject) {
  deletePath(public_dest_path);
  if (isproject) {
    await copyByPath(project_path, path.resolve(public_dest_path))
  }
  await copyByPath(aim_dest_path, path.resolve(public_dest_path, './src'))
  exec(`cd ${public_dest_path} && jar -cvf ../server/dist.zip *`)
  deletePath(public_dest_path);
}

async function  generateRouters (data) {
  var json = []
  if (data && data != '[]') {
    // json = JSON.parse(data);
    json = data
    await copyByPath(projectsrc_path, aim_dest_path)
    modifyRouter(data)
  }
  return json
}

function modifyRouter (data) {
  const router_path = path.resolve(aim_dest_path, './router/index.js');
  let routerConfig = ''
  let routes = ''
  data.forEach(item => {
    let lowerchild = lowerCamelCase(item.id)
    let upperchild = upperCamelCase(item.id)
    routerConfig += `const ${upperchild} = () => import('../pages/${lowerchild}/${upperchild}.vue');\r\n`
    routes += `{path: '${item.path}',name: '${item.name}',component: ${upperchild}},`
  });
  routerConfig += `var routes = [${routes}];`
  editorConfigInRouter(router_path, routerConfig)
}

async function  generatePages (name, data) {
  if (data && data != '[]') {
    var json = JSON.parse(data);
    await copyByPath(pages_path, aim_dest_path)
    await generateComponent(name, json, aim_dest_path, './pages/')
  }
}

async function  generateComponents (name, data) {
  if (data && data != '[]') {
    var json = JSON.parse(data);
    //copy components from template
    await copyByPath(components_path, aim_dest_path)
    await generateComponent(name, json, aim_dest_path, './components/')
  }
}
async function  generateComponent (name, data, dest_path, to_path) {
  // console.log(name, data, dest_path)
  const lower = lowerCamelCase(name)
  const upper = upperCamelCase(name)
  const componentDest_path = path.resolve(dest_path, to_path+lower);
  //新建一个 component 
  await initComponent(lower, upper, component_path ,componentDest_path)
  //遍历data 修改js和vue
  modifyComponent(lower, upper, data, componentDest_path)
}
function clearAim () {
  var aimpath = path.resolve(__dirname, '../aim/src');
  deletePath(aimpath)
}
function deletePath (cur_path) {
  var files = [];
	if(fs.existsSync(cur_path)) {
		files = fs.readdirSync(cur_path);
		files.forEach(function(file, index) {
			var curPath = cur_path + "/" + file;
			if(fs.statSync(curPath).isDirectory()) {
				deletePath(curPath);
			} else { 
				fs.unlinkSync(curPath);
			}
    });
    fs.rmdirSync(cur_path);
	}
}

function copyByPath (src ,dest) {
  return new Promise(resolve => {
    if (!fs.existsSync(dest)) {
      fse.copy(src, dest)
      .then(() => {
        resolve()
      });
    } else {
      resolve()
    }
  })
}

function initComponent (lower, upper, src ,dest) {
  return new Promise(resolve => {
    fse.copy(src, dest)
    .then(() => {
      let componentVue = path.resolve(dest, 'Component.vue');
      let componentJs = path.resolve(dest, 'index.js');
      var componentVueData = fs.readFileSync(componentVue,'utf-8');
      var newComponentVueData = componentVueData.replace(/component/g, lower).replace(/Component/g, upper)
      fs.writeFileSync(path.resolve(dest, upper + '.vue'), newComponentVueData, 'utf8');
      fs.unlinkSync(componentVue)
      var componentJsData = fs.readFileSync(componentJs,'utf-8');
      var newComponentJsData = componentJsData.replace(/component/g, lower).replace(/Component/g, upper)
      fs.writeFileSync(componentJs, newComponentJsData, 'utf8');
      resolve()
    });
  })
}

function modifyComponent (lower, upper, data, dest_path ) {
  // console.log(name, data, dest_path )
  var dataConfig = ''
  var templateConfig = ''
  var importConfig = ''
  var compConfig = ''
  let compList = []
  data.forEach(item => {
    var target = {
      style: item.style,
      raw: item.raw,
      type: item.type
    }
    var childrenTemplate = ''
    dataConfig += `this['${item.id}'] = ${JSON.stringify(target)};\r\n`
    if (item.children.length > 0 && item.childrenName) {
      let lowerchild = lowerCamelCase(item.childrenName)
      let upperchild = upperCamelCase(item.childrenName)
      childrenTemplate = `<${upperchild}></${upperchild}>`
      importConfig += `import ${upperchild} from '@/components/${lowerchild}/${upperchild}'\r\n`
      compList.push(upperchild)
      generateComponent(lowerchild, item.children, aim_dest_path, './components/')
    }
    templateConfig += `<${item.type} :rawData='${lower}["${item.id}"].raw' :style='${lower}["${item.id}"].style'>${childrenTemplate}</${item.type}>\r\n`
  })
  if (compList.length > 0) {
    compConfig = `components:{${compList.join(',')}}`
  }
  // console.log(importConfig, compConfig, compList)
  let componentVue = path.resolve(dest_path, upper + '.vue');
  let componentJs = path.resolve(dest_path, 'index.js');
  editorConfigInJs(componentJs, dataConfig)
  editorConfigInVue(componentVue, templateConfig,importConfig, compConfig)
}

module.exports = {
  generateComponents,
  generatePages,
  generateRouters,
  clearAim,
  createZip,
}