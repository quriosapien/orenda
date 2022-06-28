import _OrendaButton from './components/Button.vue'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('orenda-button', _OrendaButton)
}

const plugin = {
  install,
}

let GlobalVue = globalThis.Vue || globalThis.vue || null

if (GlobalVue) {
  GlobalVue.use(plugin)
}

_OrendaButton.install = install

export const OrendaButton = _OrendaButton
export default { _OrendaButton }
