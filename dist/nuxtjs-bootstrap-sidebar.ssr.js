'use strict';function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
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
  data: function data() {
    return {
      show: this.initialShow
    };
  },
  beforeMount: function beforeMount() {
    /*     this.$nextTick(function () {
      this.onResize();
    }); */
    window.addEventListener("resize", this.onResize);
    var width = window.document.documentElement.clientWidth;

    if (width <= 991.98) {
      this.show = false;
    } else {
      this.show = true;
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onButtonClick: function onButtonClick() {
      this.show = !this.show;
      this.$emit("sidebar-changed", this.show);
    },
    onResize: function onResize(windowResize) {
      var targetElement = windowResize.target || windowResize.srcElement;

      if (targetElement != undefined) {
        var width = targetElement.document.documentElement.clientWidth;

        if (width <= 991.98) {
          this.show = false;
        } else {
          this.show = true;
        }
      }
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "wrapper"
  }, [_vm._ssrNode("<nav id=\"sidebar\" data-color=\"white\" data-active-color=\"danger\"" + _vm._ssrClass(null, "sidebar vue-bootstrap-sidebar bg-light text-dark default-theme  " + ([_vm.theme] && [_vm.show ? 'sidebar-visible' : 'sidebar-hidden']) + " " + _vm.align) + ">", "</nav>", [_vm._ssrNode("<div class=\"sidebar-header logo\">", "</div>", [_vm._t("logo")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sidebar-wrapper\">", "</div>", [_c('b-list-group', {
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
  })], 2)], 1), _vm._ssrNode(" "), _vm._t("footer"), _vm._ssrNode(" <div id=\"sidebarButton\"" + _vm._ssrClass("sidebar-button", [_vm.theme, {
    cross: _vm.show
  }, _vm.show ? 'visible' : 'hidden']) + "><div class=\"bar1\"></div> <div class=\"bar2\"></div> <div class=\"bar3\"></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"main-panel\">", "</div>", [_vm._ssrNode("<nav class=\"\n        navbar navbar-expand-lg navbar-absolute\n        fixed-top\n        navbar-transparent\n      \">", "</nav>", [_vm._ssrNode("<div id=\"navbar\"" + _vm._ssrClass(null, "container-fluid " + [_vm.show ? 'sidebar' : 'no-sidebar'] + " " + _vm.align) + ">", "</div>", [_vm._t("navbar")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"content\"" + _vm._ssrClass(null, "content " + [_vm.show ? 'sidebar' : 'no-sidebar'] + " " + _vm.align) + ">", "</div>", [_vm._t("content")], 2)], 2)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-52ca2014_0", {
    source: ".vue-bootstrap-sidebar{transition:all .3s;min-width:250px;max-width:250px;height:100vh;z-index:1031;position:fixed;top:0}.vue-bootstrap-sidebar.left{margin-left:0;left:0}.vue-bootstrap-sidebar.left .sidebar-header{padding:10px}.vue-bootstrap-sidebar.left .sidebar-header .logo-mini{margin:0 auto;display:block;width:250px}.vue-bootstrap-sidebar.left .sidebar-header .logo-mini img{margin:5px;display:inline-block;width:40px;margin-top:-12px;margin-left:10px;margin-right:10px}.vue-bootstrap-sidebar.left .sidebar-header .logo-mini .logo-title{display:inline-block}.vue-bootstrap-sidebar.left .sidebar-header .logo-mini .logo-title h2{display:inline-block}.vue-bootstrap-sidebar.left .list-group-item{padding:0!important}.vue-bootstrap-sidebar.left .list-group-item .dropdown-toggle::before{display:none}.vue-bootstrap-sidebar.left .list-group-item .dropdown-toggle::after{position:absolute;right:20px;margin-top:10px;display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item{text-align:left;padding-left:10px}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item .fa-icon{display:inline-block;text-align:center;width:40px!important;margin-left:10px!important;margin-right:10px!important;top:5px}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item .link-name{display:inline;text-align:left}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item.child-level-1{padding-left:45px!important}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item.child-level-1 .fa-icon{display:inline-block;text-align:center;position:absolute;left:25px}.vue-bootstrap-sidebar.left .list-group-item .sidebar-menu-item.child-level-1 .link-name{display:inline;text-align:left;margin-left:25px}.vue-bootstrap-sidebar.left .sidebar-button{position:fixed;top:10px;left:200px;transition:all .3s}.vue-bootstrap-sidebar.left .sidebar-button.visible{left:200px}.vue-bootstrap-sidebar.left .sidebar-button.hidden{left:0}.vue-bootstrap-sidebar.sidebar-hidden{margin-left:-250px}.vue-bootstrap-sidebar.sidebar-visible{box-shadow:1px}.vue-bootstrap-sidebar{transition:all .3s;min-width:250px;max-width:250px;height:100vh;z-index:1031;position:fixed;top:0}.vue-bootstrap-sidebar.right{margin-right:0;right:0}.vue-bootstrap-sidebar.right .sidebar-header{padding:10px}.vue-bootstrap-sidebar.right .sidebar-header .logo-mini{margin:0 auto;display:block;width:250px}.vue-bootstrap-sidebar.right .sidebar-header .logo-mini img{margin:5px;display:inline-block;width:40px;margin-top:-12px;margin-left:10px;margin-right:10px}.vue-bootstrap-sidebar.right .sidebar-header .logo-mini .logo-title{display:inline-block}.vue-bootstrap-sidebar.right .sidebar-header .logo-mini .logo-title h2{display:inline-block}.vue-bootstrap-sidebar.right .list-group-item{padding:0!important}.vue-bootstrap-sidebar.right .list-group-item .dropdown-toggle::before{position:absolute;left:20px;margin-top:10px;display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.vue-bootstrap-sidebar.right .list-group-item .dropdown-toggle::after{display:none}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item{text-align:right;padding-right:0}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item .fa-icon{display:inline-block;text-align:center;width:25px!important;position:fixed;right:10px}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item .link-name{display:inline;text-align:right;margin-right:50px}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item.child-level-1{padding-left:50px!important}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item.child-level-1 .fa-icon{display:inline-block;text-align:center;position:absolute;right:25px}.vue-bootstrap-sidebar.right .list-group-item .sidebar-menu-item.child-level-1 .link-name{display:inline;text-align:right;margin-left:25px}.vue-bootstrap-sidebar.right .sidebar-button{position:fixed;top:10px;transition:all .3s}.vue-bootstrap-sidebar.right .sidebar-button.visible{right:10px}.vue-bootstrap-sidebar.right .sidebar-button.hidden{right:10px}.vue-bootstrap-sidebar.sidebar-hidden{margin-right:-250px}.vue-bootstrap-sidebar.sidebar-hidden .list-group-item .sidebar-menu-item .fa-icon{right:-30px}.vue-bootstrap-sidebar.sidebar-visible{box-shadow:1px}#navbar.left :first-child{transition:all .3s}#navbar.left.sidebar>nav{padding-left:270px}#navbar.left.no-sidebar>nav{padding-left:50px}#navbar.right :first-child{transition:all .3s}#navbar.right.sidebar>nav{padding-left:10px}#navbar.right.no-sidebar>nav{padding-left:10px}#content.left{transition:all .3s;padding-top:20px}#content.left.sidebar{margin-left:250px}#content.left.no-sidebar{margin-left:0}#content.right{transition:all .3s;padding-top:20px}#content.right.sidebar{margin-right:250px}#content.right.no-sidebar{margin-left:0}@media (min-width:576px) and (max-width:991.98px){.vue-bootstrap-sidebar.left.sidebar-hidden{min-width:80px;max-width:80px;margin-left:0;left:0}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-header{padding-top:10px;padding-left:5px;padding-right:5px}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-header .logo-mini{margin:0 auto;display:block;width:80px}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-header .logo-mini img{display:block;margin-top:-1px;margin-left:auto;margin-right:auto}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-header .logo-mini .logo-title{display:none}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group{margin:0 auto}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item{text-align:left;padding-left:0;min-height:36px}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item .fa-icon{margin:0 auto!important;display:inline-block;text-align:center;width:25px!important;position:absolute;left:5px;right:0;top:5px;min-height:20px}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item .link-name{display:none}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1{padding-left:30px!important;min-height:36px}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1 .fa-icon{display:inline-block;text-align:center;position:absolute;left:20px}.vue-bootstrap-sidebar.left.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1 .link-name{display:none}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-button{position:fixed;top:10px;left:200px;transition:all .3s}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-button.visible{left:200px}.vue-bootstrap-sidebar.left.sidebar-hidden .sidebar-button.hidden{left:-40px}.vue-bootstrap-sidebar.right.sidebar-hidden{min-width:80px;max-width:80px;margin-right:0;right:0}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-header{padding-top:10px;padding-left:5px;padding-right:5px}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-header .logo-mini{margin:0 auto;display:block;width:80px}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-header .logo-mini img{display:block;margin-top:-1px;margin-left:auto;margin-right:auto}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-header .logo-mini .logo-title{display:none}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group{margin:0 auto}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item{text-align:right;padding-right:0;min-height:36px}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item .fa-icon{margin:0 auto!important;display:inline-block;text-align:center;width:25px!important;position:absolute;left:5px;right:0;top:5px;min-height:20px}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item .link-name{display:none}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1{padding-left:30px!important;min-height:36px}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1 .fa-icon{display:inline-block;text-align:center;position:absolute;right:20px}.vue-bootstrap-sidebar.right.sidebar-hidden .list-group-item .sidebar-menu-item.child-level-1 .link-name{display:none}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-button{position:fixed;top:10px;transition:all .3s}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-button.visible{right:10px}.vue-bootstrap-sidebar.right.sidebar-hidden .sidebar-button.hidden{right:-40px}#navbar.left.no-sidebar>nav{padding-left:85px}#navbar.right.no-sidebar>nav{padding-left:10px}#content.left{transition:all .3s;padding-top:20px}#content.left.sidebar{margin-left:250px}#content.left.no-sidebar{margin:0 auto;left:80px;position:absolute}#content.right{transition:all .3s;padding-top:20px}#content.right.sidebar{margin-right:250px}#content.right.no-sidebar{margin-left:-125px}}.default-theme{background:#f8f9fa;color:#000;box-shadow:0 0 0 0 rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.19)}.default-theme .sidebar-header{background-color:#f8f9fa;color:#000}.default-theme .items-wrapper{background-color:#f8f9fa}.default-theme .list-group-item{padding:0!important}.default-theme .list-group-item .sidebar-menu-item{background-color:#f8f9fa;color:#000;border:none}.default-theme .list-group-item .sidebar-menu-item:hover{background-color:#007bff}.default-theme .list-group-item .sidebar-menu-item:active,.default-theme .list-group-item .sidebar-menu-item:focus{outline:0!important;box-shadow:none!important;background-color:#f8f9fa}.default-theme .sidebar-button{background-color:rgba(248,249,250,0);color:#000;border:none;border-radius:0;opacity:1;box-shadow:none;margin-left:10px}.default-theme .sidebar-button:active,.default-theme .sidebar-button:focus,.default-theme .sidebar-button:hover,.default-theme .sidebar-button:visited{background-color:#007bff;color:#000;border:none;border-color:none;box-shadow:none}.default-theme{display:inline-block;cursor:pointer}.default-theme .bar1,.default-theme .bar2,.default-theme .bar3{width:25px;height:3px;background-color:#333;margin:6px 0;transition:.4s}.default-theme.cross .bar1{-webkit-transform:rotate(-45deg) translate(-7px,6px);transform:rotate(-45deg) translate(-7px,6px)}.default-theme.cross .bar2{opacity:0}.default-theme.cross .bar3{-webkit-transform:rotate(45deg) translate(-6px,-6px);transform:rotate(45deg) translate(-6px,-6px)}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-52ca2014";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = __vue_component__; // Attach install function executed by Vue.use()

  installable.install = function (Vue) {
    Vue.component('NuxtjsBootstrapSidebar', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default': component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
}); // Cria a definição do módulo para Vue.use()

var plugin = {
  install: component.install
}; // Auto-instala quando o Vue é encontrado (no navegador via <script>)

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}module.exports=component;