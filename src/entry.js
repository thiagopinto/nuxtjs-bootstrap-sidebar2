// iife/cjs usage extends esm default export - so import it all
import component, * as namedExports from '@/entry.esm';

// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(([exportName, exported]) => {
  if (exportName !== 'default') component[exportName] = exported;
});

// Cria a definição do módulo para Vue.use()
const plugin = {
  install: component.install
};

// Auto-instala quando o Vue é encontrado (no navegador via <script>)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default component;
