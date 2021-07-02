//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "NuxtjsBootstrapSidebar",
  components: {},
  props: {
    links: {
      type: Array,
      default: null
    },
    initialShow: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "default-theme"
    },
    header: {
      type: String,
      default: ""
    },
    align: {
      type: String,
      default: "left"
    }
  },

  data() {
    return {
      show: this.initialShow
    };
  },

  beforeMount() {
    /*     this.$nextTick(function () {
      this.onResize();
    }); */
    window.addEventListener("resize", this.onResize);
    let width = window.document.documentElement.clientWidth;

    if (width <= 991.98) {
      this.show = false;
    } else {
      this.show = true;
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onButtonClick() {
      this.show = !this.show;
      this.$emit("sidebar-changed", this.show);
    },

    onResize(windowResize) {
      let targetElement = windowResize.target || windowResize.srcElement;

      if (targetElement != undefined) {
        let width = targetElement.document.documentElement.clientWidth;

        if (width <= 991.98) {
          this.show = false;
        } else {
          this.show = true;
        }
      }
    }

  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "wrapper"
  }, [_c('nav', {
    class: "sidebar vue-bootstrap-sidebar bg-light text-dark default-theme  " + ([_vm.theme] && [_vm.show ? 'sidebar-visible' : 'sidebar-hidden']) + " " + _vm.align,
    attrs: {
      "id": "sidebar",
      "data-color": "white",
      "data-active-color": "danger"
    }
  }, [_c('div', {
    staticClass: "sidebar-header logo",
    on: {
      "click": _vm.onButtonClick
    }
  }, [_vm._t("logo")], 2), _vm._v(" "), _c('div', {
    staticClass: "sidebar-wrapper"
  }, [_c('b-list-group', {
    staticClass: "items-wrapper nav"
  }, [_vm._l(_vm.links, function (link, index) {
    return [link.href !== undefined ? [_c('div', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover.right",
        modifiers: {
          "hover": true,
          "right": true
        }
      }],
      key: index,
      staticClass: "list-group-item list-group-item-action",
      attrs: {
        "title": link.name
      }
    }, [_c('b-button', {
      staticClass: "btn sidebar-menu-item",
      class: "" + _vm.align,
      attrs: {
        "block": "",
        "to": link.href,
        "variant": "info",
        "squared": true,
        "size": "lg"
      }
    }, [_c('div', {
      staticClass: "fa-icon"
    }, [link.faIcon ? _c('font-awesome-icon', {
      tag: "component",
      attrs: {
        "icon": link.faIcon
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "link-name"
    }, [_vm._v("\n                  " + _vm._s(link.name) + "\n                ")])])], 1)] : [_c('div', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover.right",
        modifiers: {
          "hover": true,
          "right": true
        }
      }],
      key: index,
      staticClass: "list-group-item list-group-item-action",
      attrs: {
        "title": link.name
      }
    }, [_c('b-button', {
      directives: [{
        name: "b-toggle",
        rawName: "v-b-toggle",
        value: "accordion-" + (index + 10),
        expression: "`accordion-${index + 10}`"
      }],
      staticClass: "sidebar-menu-item dropdown-toggle rounded-0",
      class: "" + _vm.align,
      attrs: {
        "block": "",
        "variant": "info",
        "size": "lg"
      }
    }, [_c('div', {
      staticClass: "fa-icon"
    }, [link.faIcon ? _c('font-awesome-icon', {
      tag: "component",
      attrs: {
        "icon": link.faIcon
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "link-name"
    }, [_vm._v("\n                  " + _vm._s(link.name) + "\n                ")])])], 1), _vm._v(" "), _c('b-collapse', {
      key: index + 10,
      attrs: {
        "id": "accordion-" + (index + 10),
        "accordion": "my-accordion",
        "role": "tabpanel"
      }
    }, [_c('b-list-group', _vm._l(link.children, function (child, idx) {
      return _c('div', {
        key: idx,
        staticClass: "list-group-item list-group-item-action"
      }, [_c('b-button', {
        staticClass: "sidebar-menu-item rounded-0 child-level-1",
        class: "" + _vm.align,
        attrs: {
          "block": "",
          "to": child.href,
          "variant": "primary",
          "squared": true
        }
      }, [_c('div', {
        staticClass: "fa-icon"
      }, [child.faIcon ? _c('font-awesome-icon', {
        tag: "component",
        attrs: {
          "icon": child.faIcon
        }
      }) : _vm._e()], 1), _vm._v(" "), _c('div', {
        staticClass: "link-name"
      }, [_vm._v("\n                      " + _vm._s(child.name) + "\n                    ")])])], 1);
    }), 0)], 1)]];
  })], 2)], 1), _vm._v(" "), _vm._t("footer"), _vm._v(" "), _c('div', {
    staticClass: "sidebar-button",
    class: [_vm.theme, {
      cross: _vm.show
    }, _vm.show ? 'visible' : 'hidden'],
    attrs: {
      "id": "sidebarButton"
    },
    on: {
      "click": _vm.onButtonClick
    }
  }, [_c('div', {
    staticClass: "bar1"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar2"
  }), _vm._v(" "), _c('div', {
    staticClass: "bar3"
  })])], 2), _vm._v(" "), _c('div', {
    staticClass: "main-panel"
  }, [_c('nav', {
    staticClass: "\n        navbar navbar-expand-lg navbar-absolute\n        fixed-top\n        navbar-transparent\n      "
  }, [_c('div', {
    class: "container-fluid " + [_vm.show ? 'sidebar' : 'no-sidebar'] + " " + _vm.align,
    attrs: {
      "id": "navbar"
    }
  }, [_vm._t("navbar")], 2)]), _vm._v(" "), _c('div', {
    class: "content " + [_vm.show ? 'sidebar' : 'no-sidebar'] + " " + _vm.align,
    attrs: {
      "id": "content"
    }
  }, [_vm._t("content")], 2)])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-52ca2014_0", {
    source: ".vue-bootstrap-sidebar{transition:all .3s;min-width:250px;max-width:250px;height:100vh;z-index:1031;position:fixed;top:0}.vue-bootstrap-sidebar.left{margin-left:0;left:0}.vue-bootstrap-sidebar.left .sidebar-header{padding:10px}.vue-bootstrap-sidebar.left .sidebar-header .logo-mini{margin:0 auto;display:block;width:250px}.vue-bootstrap-sidebar.left .sidebar-header .logo-mini img{margin:5px;display:inline-block;width:40px;margin-top:-12px;margin-left:10px;margin-right:10px}.vue-bootstrap-sidebar.left .sidebar-header .logo-mini .logo-title{display:inline-block}.vue-bootstrap-sidebar.left .sidebar-header .logo-mini .logo-title h2{display:inline-block}.vue-bootstrap-sidebar.left .list-group-item{padding:0!important}.vue-bootstrap-sidebar.left .list-group-item .dropdown-toggle::before{display:none}.vue-bootstrap-sidebar.left .list-group-item .dropdown-toggle::after{position:absolute;right:20px;margin-top:10px;display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item{text-align:left;padding-left:10px}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item .fa-icon{display:inline-block;text-align:center;width:40px!important;margin-left:10px!important;margin-right:10px!important;top:5px}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item .link-name{display:inline;text-align:left}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item.child-level-1{padding-left:45px!important}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item.child-level-1 .fa-icon{display:inline-block;text-align:center;position:absolute;left:25px}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item.child-level-1 .link-name{display:inline;text-align:left;margin-left:25px}.vue-bootstrap-sidebar.left .sidebar-button{position:fixed;top:10px;left:200px;transition:all .3s}.vue-bootstrap-sidebar.left .sidebar-button.visible{left:200px}.vue-bootstrap-sidebar.left .sidebar-button.hidden{left:0}.vue-bootstrap-sidebar.sidebar-hidden{margin-left:-250px}.vue-bootstrap-sidebar.sidebar-visible{box-shadow:1px}.vue-bootstrap-sidebar{transition:all .3s;min-width:250px;max-width:250px;height:100vh;z-index:1031;position:fixed;top:0}.vue-bootstrap-sidebar.right{margin-right:0;right:0}.vue-bootstrap-sidebar.right .sidebar-header{padding:10px}.vue-bootstrap-sidebar.right .sidebar-header .logo-mini{margin:0 auto;display:block;width:250px}.vue-bootstrap-sidebar.right .sidebar-header .logo-mini img{margin:5px;display:inline-block;width:40px;margin-top:-12px;margin-left:10px;margin-right:10px}.vue-bootstrap-sidebar.right .sidebar-header .logo-mini .logo-title{display:inline-block}.vue-bootstrap-sidebar.right .sidebar-header .logo-mini .logo-title h2{display:inline-block}.vue-bootstrap-sidebar.right .list-group-item{padding:0!important}.vue-bootstrap-sidebar.right .list-group-item .dropdown-toggle::before{position:absolute;left:20px;margin-top:10px;display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.vue-bootstrap-sidebar.right .list-group-item .dropdown-toggle::after{display:none}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item{text-align:right;padding-right:0}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item .fa-icon{display:inline-block;text-align:center;width:25px!important;position:fixed;right:10px}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item .link-name{display:inline;text-align:right;margin-right:50px}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item.child-level-1{padding-left:50px!important}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item.child-level-1 .fa-icon{display:inline-block;text-align:center;position:absolute;right:25px}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item.child-level-1 .link-name{display:inline;text-align:right;margin-left:25px}.vue-bootstrap-sidebar.right .sidebar-button{position:fixed;top:10px;transition:all .3s}.vue-bootstrap-sidebar.right .sidebar-button.visible{right:10px}.vue-bootstrap-sidebar.right .sidebar-button.hidden{right:10px}.vue-bootstrap-sidebar.sidebar-hidden{margin-right:-250px}.vue-bootstrap-sidebar.sidebar-hidden .list-group-item .sidebar-menu-item .fa-icon{right:-30px}.vue-bootstrap-sidebar.sidebar-visible{box-shadow:1px}#navbar.left :first-child{transition:all .3s}#navbar.left.sidebar>nav{padding-left:270px}#navbar.left.no-sidebar>nav{padding-left:50px}#navbar.right :first-child{transition:all .3s}#navbar.right.sidebar>nav{padding-left:10px}#navbar.right.no-sidebar>nav{padding-left:10px}#content.left{transition:all .3s;padding-top:20px}#content.left.sidebar{margin-left:250px}#content.left.no-sidebar{margin-left:0}#content.right{transition:all .3s;padding-top:20px}#content.right.sidebar{margin-right:250px}#content.right.no-sidebar{margin-left:0}@media (min-width:576px) and (max-width:991.98px){.vue-bootstrap-sidebar.left.sidebar-hidden{min-width:80px;max-width:80px;margin-left:0;left:0}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-header{padding-top:10px;padding-left:5px;padding-right:5px}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-header .logo-mini{margin:0 auto;display:block;width:80px}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-header .logo-mini img{display:block;margin-top:-1px;margin-left:auto;margin-right:auto}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-header .logo-mini .logo-title{display:none}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group{margin:0 auto}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item{text-align:left;padding-left:0;min-height:36px}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item .fa-icon{margin:0 auto!important;display:inline-block;text-align:center;width:25px!important;position:absolute;left:5px;right:0;top:5px;min-height:20px}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item .link-name{display:none}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1{padding-left:30px!important;min-height:36px}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1 .fa-icon{display:inline-block;text-align:center;position:absolute;left:20px}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1 .link-name{display:none}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-button{position:fixed;top:10px;left:200px;transition:all .3s}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-button.visible{left:200px}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-button.hidden{left:-40px}.vue-bootstrap-sidebar.right.sidebar-hidden{min-width:80px;max-width:80px;margin-right:0;right:0}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-header{padding-top:10px;padding-left:5px;padding-right:5px}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-header .logo-mini{margin:0 auto;display:block;width:80px}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-header .logo-mini img{display:block;margin-top:-1px;margin-left:auto;margin-right:auto}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-header .logo-mini .logo-title{display:none}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group{margin:0 auto}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item{text-align:right;padding-right:0;min-height:36px}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item .fa-icon{margin:0 auto!important;display:inline-block;text-align:center;width:25px!important;position:absolute;left:5px;right:0;top:5px;min-height:20px}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item .link-name{display:none}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1{padding-left:30px!important;min-height:36px}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1 .fa-icon{display:inline-block;text-align:center;position:absolute;right:20px}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1 .link-name{display:none}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-button{position:fixed;top:10px;transition:all .3s}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-button.visible{right:10px}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-button.hidden{right:-40px}#navbar.left.no-sidebar>nav{padding-left:85px}#navbar.right.no-sidebar>nav{padding-left:10px}#content.left{transition:all .3s;padding-top:20px}#content.left.sidebar{margin-left:250px}#content.left.no-sidebar{margin:0 auto;left:80px;position:absolute}#content.right{transition:all .3s;padding-top:20px}#content.right.sidebar{margin-right:250px}#content.right.no-sidebar{margin-left:-125px}}.default-theme{background:#f8f9fa;color:#000;box-shadow:0 0 0 0 rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.19)}.default-theme .sidebar-header{background-color:#f8f9fa;color:#000}.default-theme .items-wrapper{background-color:#f8f9fa}.default-theme .list-group-item{padding:0!important}.default-theme .list-group-item .sidebar-menu-item{background-color:#f8f9fa;color:#000;border:none}.default-theme .list-group-item .sidebar-menu-item:hover{background-color:#007bff}.default-theme .list-group-item .sidebar-menu-item:active,.default-theme .list-group-item .sidebar-menu-item:focus{outline:0!important;box-shadow:none!important;background-color:#f8f9fa}.default-theme .sidebar-button{background-color:rgba(248,249,250,0);color:#000;border:none;border-radius:0;opacity:1;box-shadow:none;margin-left:10px}.default-theme .sidebar-button:active,.default-theme .sidebar-button:focus,.default-theme .sidebar-button:hover,.default-theme .sidebar-button:visited{background-color:#007bff;color:#000;border:none;border-color:none;box-shadow:none}.default-theme{display:inline-block;cursor:pointer}.default-theme .bar1,.default-theme .bar2,.default-theme .bar3{width:25px;height:3px;background-color:#333;margin:6px 0;transition:.4s}.default-theme.cross .bar1{-webkit-transform:rotate(-45deg) translate(-7px,6px);transform:rotate(-45deg) translate(-7px,6px)}.default-theme.cross .bar2{opacity:0}.default-theme.cross .bar3{-webkit-transform:rotate(45deg) translate(-6px,-6px);transform:rotate(45deg) translate(-6px,-6px)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = Vue => {
    Vue.component('NuxtjsBootstrapSidebar', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export default entry_esm;
