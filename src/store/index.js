import { createStore } from 'vuex'
import getters from './getters'

const modulesFiles = import.meta.globEager('./modules/*.js')
let modules = {}
console.log(modulesFiles);
for (const path in modulesFiles) {
  const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
  modules[moduleName] = modulesFiles[path].default
}
export default createStore({
  modules,
  getters
})
