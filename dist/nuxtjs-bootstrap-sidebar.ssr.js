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
//
//
//
//
//
//
//
//
//
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
    staticClass: "wrapper container-fluid"
  }, [_vm._ssrNode("<nav id=\"sidebar\" data-color=\"white\" data-active-color=\"danger\"" + _vm._ssrClass(null, "nuxtjs-bootstrap-sidebar default-theme  " + ([_vm.theme] && [_vm.show ? 'visible' : 'hidden']) + " " + _vm.align) + ">", "</nav>", [_vm._ssrNode("<div class=\"sidebar-header logo\">", "</div>", [_vm._ssrNode("<div class=\"logo-mini\">", "</div>", [_vm._t("logo")], 2), _vm._ssrNode(" "), _vm._ssrNode("<span id=\"sidebarButton\"" + _vm._ssrClass("sidebar-button", [_vm.theme, _vm.show ? 'visible' : 'hidden']) + ">", "</span>", [_c('font-awesome-icon', {
    attrs: {
      "icon": ['far', 'times-circle'],
      "size": "1x"
    }
  }), _vm._ssrNode(" <i class=\"far fa-times-circle\"></i>")], 2)], 2), _vm._ssrNode(" <hr> "), _vm._ssrNode("<div class=\"sidebar-wrapper\">", "</div>", [_c('b-list-group', {
    staticClass: "items-wrapper nav"
  }, [_vm._l(_vm.links, function (link, index) {
    return [link.href !== undefined ? [_c('b-list-group-item', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover.right",
        modifiers: {
          "hover": true,
          "right": true
        }
      }],
      key: index,
      staticClass: "sidebar-menu-item mt-3 mb-3 pt-2 pb-2",
      class: "" + _vm.align,
      attrs: {
        "title": link.name,
        "to": link.href
      }
    }, [_c('div', {
      staticClass: "before"
    }), _vm._v(" "), _c('span', {
      staticClass: "fa-icon left"
    }, [link.faIcon ? _c('font-awesome-icon', {
      tag: "component",
      attrs: {
        "icon": link.faIcon
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('span', {
      staticClass: "link-name"
    }, [_vm._v("\n                " + _vm._s(link.name) + "\n              ")]), _vm._v(" "), _c('span', {
      staticClass: "fa-icon right"
    }, [link.faIcon ? _c('font-awesome-icon', {
      tag: "component",
      attrs: {
        "icon": link.faIcon
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "after"
    })])] : [_c('b-list-group-item', {
      directives: [{
        name: "b-tooltip",
        rawName: "v-b-tooltip.hover.right",
        modifiers: {
          "hover": true,
          "right": true
        }
      }, {
        name: "b-toggle",
        rawName: "v-b-toggle",
        value: "accordion-" + index + "-" + link.href,
        expression: "`accordion-${index}-${link.href}`"
      }],
      key: index,
      staticClass: "sidebar-menu-item sidebar-dropdown mt-3 mb-3 pt-2 pb-2",
      class: "" + _vm.align,
      staticStyle: {
        "padding-right": "0.03rem"
      },
      attrs: {
        "title": link.name
      }
    }, [_c('div', {
      staticClass: "before"
    }), _vm._v(" "), _c('span', {
      staticClass: "fa-icon left"
    }, [link.faIcon ? _c('font-awesome-icon', {
      tag: "component",
      attrs: {
        "icon": link.faIcon
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('span', {
      staticClass: "link-name"
    }, [_vm._v("\n                " + _vm._s(link.name) + "\n              ")]), _vm._v(" "), _c('span', {
      staticClass: "fa-icon right"
    }, [link.faIcon ? _c('font-awesome-icon', {
      tag: "component",
      attrs: {
        "icon": link.faIcon
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "after"
    })]), _vm._v(" "), _c('b-collapse', {
      key: index + 100,
      attrs: {
        "id": "accordion-" + index + "-" + link.href,
        "accordion": "child-level-1",
        "role": "tabpanel"
      }
    }, [_c('b-list-group', _vm._l(link.children, function (child, idChild) {
      return _c('b-list-group-item', {
        directives: [{
          name: "b-tooltip",
          rawName: "v-b-tooltip.hover.right",
          modifiers: {
            "hover": true,
            "right": true
          }
        }],
        key: idChild,
        staticClass: "sidebar-menu-item child-level-1 mt-3 mb-3 pt-2 pb-2",
        class: "" + _vm.align,
        attrs: {
          "title": child.name,
          "to": child.href
        }
      }, [_c('div', {
        staticClass: "before"
      }), _vm._v(" "), _c('span', {
        staticClass: "fa-icon left"
      }, [child.faIcon ? _c('font-awesome-icon', {
        tag: "component",
        attrs: {
          "icon": child.faIcon
        }
      }) : _vm._e()], 1), _vm._v(" "), _c('span', {
        staticClass: "link-name"
      }, [_vm._v("\n                    " + _vm._s(child.name) + "\n                  ")]), _vm._v(" "), _c('span', {
        staticClass: "fa-icon right"
      }, [child.faIcon ? _c('font-awesome-icon', {
        tag: "component",
        attrs: {
          "icon": child.faIcon
        }
      }) : _vm._e()], 1), _vm._v(" "), _c('div', {
        staticClass: "after"
      })]);
    }), 1)], 1)]];
  })], 2)], 1), _vm._ssrNode(" "), _vm._t("footer")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass(null, "main-panel  default-theme " + ([_vm.theme] && [_vm.show ? 'visible' : 'hidden']) + " " + _vm.align) + ">", "</div>", [_c('b-nav', {
    staticClass: "container-fluid"
  }, [_c('b-nav-item', {
    staticClass: "left",
    on: {
      "click": _vm.onButtonClick
    }
  }, [_c('span', {
    staticClass: "sidebar-button",
    class: [_vm.theme, !_vm.show ? 'visible' : 'hidden'],
    attrs: {
      "id": "sidebarButton"
    }
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'bars'],
      "size": "1x"
    }
  })], 1)]), _vm._v(" "), _vm._t("navbar"), _vm._v(" "), _c('b-nav-item', {
    staticClass: "right",
    on: {
      "click": _vm.onButtonClick
    }
  }, [_c('span', {
    staticClass: "sidebar-button",
    class: [_vm.theme, !_vm.show ? 'visible' : 'hidden'],
    attrs: {
      "id": "sidebarButton"
    }
  }, [_c('font-awesome-icon', {
    attrs: {
      "icon": ['fas', 'bars'],
      "size": "1x"
    }
  })], 1)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div id=\"content\"" + _vm._ssrClass(null, "content container-fluid " + [_vm.show ? 'visible' : 'hidden'] + " " + _vm.align) + ">", "</div>", [_vm._t("content")], 2)], 2)], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-bd292122_0", {
    source: ".nuxtjs-bootstrap-sidebar{position:fixed;width:250px;height:100vh;border-radius:10px;top:10px;bottom:10px;box-sizing:initial;transition:.5s}.nuxtjs-bootstrap-sidebar.left{border-left:5px solid #4d5bf9;left:10px}.nuxtjs-bootstrap-sidebar.left .sidebar-header{padding:10px;border-radius:10px;margin:5px;padding:5px;width:240px}.nuxtjs-bootstrap-sidebar.left .sidebar-header .logo-mini{margin:0 auto;display:inline}.nuxtjs-bootstrap-sidebar.left .sidebar-header .logo-mini img{margin:5px;display:inline-block;width:40px;margin-top:-12px;margin-left:10px;margin-right:10px}.nuxtjs-bootstrap-sidebar.left .sidebar-header .logo-mini .logo-title{display:inline-block}.nuxtjs-bootstrap-sidebar.left .sidebar-header .logo-mini .logo-title h2{display:inline-block}.nuxtjs-bootstrap-sidebar.left .sidebar-header .sidebar-button.visible{position:absolute;margin:auto;right:10px;border-radius:50%}.nuxtjs-bootstrap-sidebar.left .sidebar-header .sidebar-button.visible svg{display:block;margin:auto}.nuxtjs-bootstrap-sidebar.left .sidebar-header .sidebar-button.hidden{display:none}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.sidebar-dropdown::before{position:absolute;right:10%;top:50%;display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.router-link-exact-active,.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item:hover{border-bottom-left-radius:1rem;border-top-left-radius:1rem;border-bottom-right-radius:0;border-top-right-radius:0}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.router-link-exact-active .before,.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item:hover .before{position:absolute;height:1rem;width:100%;top:-1rem}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.router-link-exact-active .after,.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item:hover .after{position:absolute;height:1rem;width:100%;bottom:-1rem}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.router-link-exact-active .before::before,.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item:hover .before::before{content:\"\";position:absolute;height:100%;width:100%;top:0;left:0;border-bottom-right-radius:1rem}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.router-link-exact-active .after::after,.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item:hover .after::after{content:\"\";position:absolute;height:100%;width:100%;top:0;left:0;border-top-right-radius:1rem}.nuxtjs-bootstrap-sidebar.left .list-group{top:100px;left:0;width:100%;padding-left:5px;padding-right:0}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item{position:relative;width:100%;background-color:transparent;border:none;padding-left:0;padding-right:0;text-align:left}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item a{position:relative;display:block;width:100%;display:flex}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item span.fa-icon.left{position:relative;display:inline;margin-left:10px;margin-right:10px}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item span.fa-icon.right{display:none}.nuxtjs-bootstrap-sidebar.hidden{left:-260px}.nuxtjs-bootstrap-sidebar.right{border-right:5px solid #4d5bf9;right:10px}.nuxtjs-bootstrap-sidebar.right .sidebar-header{padding:10px;border-radius:10px;margin:5px;padding:5px;width:240px}.nuxtjs-bootstrap-sidebar.right .sidebar-header .logo-mini{margin:0 auto;display:inline}.nuxtjs-bootstrap-sidebar.right .sidebar-header .logo-mini img{margin:5px;display:inline-block;width:40px;margin-top:-12px;margin-left:10px;margin-right:10px}.nuxtjs-bootstrap-sidebar.right .sidebar-header .logo-mini .logo-title{display:inline-block}.nuxtjs-bootstrap-sidebar.right .sidebar-header .logo-mini .logo-title h2{display:inline-block}.nuxtjs-bootstrap-sidebar.right .sidebar-header .sidebar-button.visible{position:absolute;right:10px;border-radius:50%}.nuxtjs-bootstrap-sidebar.right .sidebar-header .sidebar-button.visible svg{display:block;margin:auto}.nuxtjs-bootstrap-sidebar.right .sidebar-header .sidebar-button.hidden{display:none}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.sidebar-dropdown::after{position:absolute;left:10%;top:50%;display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.router-link-exact-active,.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item:hover{border-bottom-right-radius:1rem;border-top-right-radius:1rem;border-bottom-left-radius:0;border-top-left-radius:0}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.router-link-exact-active .before,.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item:hover .before{position:absolute;height:1rem;width:100%;top:-1rem}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.router-link-exact-active .after,.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item:hover .after{position:absolute;height:1rem;width:100%;bottom:-1rem}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.router-link-exact-active .before::before,.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item:hover .before::before{content:\"\";position:absolute;height:100%;width:100%;top:0;left:0;border-bottom-left-radius:1rem}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.router-link-exact-active .after::after,.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item:hover .after::after{content:\"\";position:absolute;height:100%;width:100%;top:0;left:0;border-top-left-radius:1rem}.nuxtjs-bootstrap-sidebar.right .list-group{top:100px;left:0;width:100%;padding-right:5px;padding-left:0}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item{position:relative;width:100%;background-color:transparent;border:none;padding-left:0;padding-right:0;text-align:right}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item a{position:relative;display:block;width:100%;display:flex}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item span.fa-icon.left{display:none}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item span.fa-icon.right{position:relative;display:inline;margin-left:10px;margin-right:10px}.nuxtjs-bootstrap-sidebar.hidden{right:-260px}.main-panel.left{position:fixed;border-radius:10px;top:10px;bottom:10px;transition:.5s;right:10px;left:275px}.main-panel.left .nav{margin-bottom:10px;padding-left:40px;padding-right:10px;border-radius:10px}.main-panel.left .nav .nav-item.left{position:fixed;top:10px;left:10px}.main-panel.left .nav .nav-item.left .nav-link{padding:.75rem 1rem}.main-panel.left .nav .nav-item.left .nav-link .sidebar-button.visible{margin-top:1px;width:25px;height:25px;padding-top:3px;right:0;border-radius:50%}.main-panel.left .nav .nav-item.left .nav-link .sidebar-button.visible svg{display:block;margin:auto}.main-panel.left .nav .nav-item.left .nav-link .sidebar-button.hidden{display:none}.main-panel.left .nav .nav-item.right{display:none}.main-panel.left .content{height:94%;border-radius:10px}.main-panel.left.hidden{left:10px}.main-panel.right{position:fixed;border-radius:10px;top:10px;bottom:10px;transition:.5s;left:10px;right:275px}.main-panel.right .nav{margin-bottom:10px;padding-left:10px;padding-right:10px;border-radius:10px}.main-panel.right .nav-item.left{display:none}.main-panel.right .nav-item.right{position:fixed;top:10px;right:10px}.main-panel.right .nav-item.right .nav-link{padding:.75rem 1rem}.main-panel.right .nav-item.right .nav-link .sidebar-button.visible{margin-top:1px;width:25px;height:25px;padding-top:3px;right:0;border-radius:50%}.main-panel.right .nav-item.right .nav-link .sidebar-button.visible svg{display:block;margin:auto}.main-panel.right .nav-item.right .nav-link .sidebar-button.hidden{display:none}.main-panel.right .content{height:94%;border-radius:10px}.main-panel.right.hidden{right:10px}@media (min-width:576px) and (max-width:991.98px){.nuxtjs-bootstrap-sidebar.left.hidden{left:10px;right:auto;width:60px}.nuxtjs-bootstrap-sidebar.left.hidden .sidebar-header .logo-mini img{margin:auto}.nuxtjs-bootstrap-sidebar.left.hidden .sidebar-header .logo-mini .logo-title{display:none}.nuxtjs-bootstrap-sidebar.left.hidden .list-group .list-group-item .link-name{display:none}.nuxtjs-bootstrap-sidebar.right.hidden{left:auto;right:10px;width:60px}.nuxtjs-bootstrap-sidebar.right.hidden .sidebar-header .logo-mini img{margin:auto}.nuxtjs-bootstrap-sidebar.right.hidden .sidebar-header .logo-mini .logo-title{display:none}.nuxtjs-bootstrap-sidebar.right.hidden .list-group .list-group-item .link-name{display:none}.main-panel.left.hidden{left:90px}.main-panel.left.hidden .nav-item.left{left:90px}.main-panel.right.hidden{right:90px}.main-panel.right.hidden .nav-item.right{right:90px}}.nuxtjs-bootstrap-sidebar.default-theme{background-color:rgba(77,91,249,.9)}.nuxtjs-bootstrap-sidebar.default-theme .sidebar-header .sidebar-button.visible{border:1px solid #f4f3ef;color:#f4f3ef;background-color:#007bff}.nuxtjs-bootstrap-sidebar.default-theme .sidebar-header .sidebar-button.visible:hover{border:1px solid #007bff;color:#007bff;background-color:#f4f3ef}.nuxtjs-bootstrap-sidebar.default-theme hr{margin:0 auto;width:80%;color:#4d5bf9;background-color:#4d5bf9}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item{color:#fff}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item.router-link-exact-active,.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item:hover{background-color:#f4f3ef;color:#333}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item.router-link-exact-active .before,.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item:hover .before{background-color:#f4f3ef}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item.router-link-exact-active .after,.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item:hover .after{background-color:#f4f3ef}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item.router-link-exact-active .before::before,.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item:hover .before::before{background-color:rgba(77,91,249,.9)}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item.router-link-exact-active .after::after,.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item:hover .after::after{background-color:rgba(77,91,249,.9)}.main-panel.default-theme .nav{background-color:#f4f3ef}.main-panel.default-theme .content{background-color:#f4f3ef}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-bd292122";
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