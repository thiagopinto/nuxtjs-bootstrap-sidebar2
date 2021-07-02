'use strict';function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest$1();
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
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

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var PERFORMANCE = _PERFORMANCE;
!!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
(function () {
  try {
    return "production" === 'production';
  } catch (e) {
    return false;
  }
})();

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
typeof setImmediate === 'undefined' ? setTimeout : setImmediate;

var noop$1 = function noop() {};

config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();

namespace.styles;

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
({
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
});

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

({
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
});
({
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
});
({
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
});

namespace.styles;

namespace.styles;

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

var library = new Library();/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var faBars = {
  prefix: 'fas',
  iconName: 'bars',
  icon: [448, 512, [], "f0c9", "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"]
};/*!
 * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var faTimesCircle = {
  prefix: 'far',
  iconName: 'times-circle',
  icon: [512, 512, [], "f057", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"]
};//
library.add(faBars);
library.add(faTimesCircle);
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
  inject("data-v-8901a43e_0", {
    source: ".nuxtjs-bootstrap-sidebar{position:fixed;width:250px;height:100vh;border-radius:10px;top:10px;bottom:10px;box-sizing:initial;transition:.5s}.nuxtjs-bootstrap-sidebar.left{border-left:5px solid #4d5bf9;left:10px}.nuxtjs-bootstrap-sidebar.left .sidebar-header{padding:10px;border-radius:10px;margin:5px;padding:5px;width:240px}.nuxtjs-bootstrap-sidebar.left .sidebar-header .logo-mini{margin:0 auto;display:inline}.nuxtjs-bootstrap-sidebar.left .sidebar-header .logo-mini img{margin:5px;display:inline-block;width:40px;margin-top:-12px;margin-left:10px;margin-right:10px}.nuxtjs-bootstrap-sidebar.left .sidebar-header .logo-mini .logo-title{display:inline-block}.nuxtjs-bootstrap-sidebar.left .sidebar-header .logo-mini .logo-title h2{display:inline-block}.nuxtjs-bootstrap-sidebar.left .sidebar-header .sidebar-button.visible{position:absolute;margin:auto;right:10px;border-radius:50%}.nuxtjs-bootstrap-sidebar.left .sidebar-header .sidebar-button.visible svg{display:block;margin:auto}.nuxtjs-bootstrap-sidebar.left .sidebar-header .sidebar-button.hidden{display:none}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.sidebar-dropdown::before{position:absolute;right:10%;top:50%;display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.router-link-exact-active,.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item:hover{border-bottom-left-radius:1rem;border-top-left-radius:1rem;border-bottom-right-radius:0;border-top-right-radius:0}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.router-link-exact-active .before,.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item:hover .before{position:absolute;height:1rem;width:100%;top:-1rem}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.router-link-exact-active .after,.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item:hover .after{position:absolute;height:1rem;width:100%;bottom:-1rem}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.router-link-exact-active .before::before,.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item:hover .before::before{content:\"\";position:absolute;height:100%;width:100%;top:0;left:0;border-bottom-right-radius:1rem}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item.router-link-exact-active .after::after,.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item:hover .after::after{content:\"\";position:absolute;height:100%;width:100%;top:0;left:0;border-top-right-radius:1rem}.nuxtjs-bootstrap-sidebar.left .list-group{top:100px;left:0;width:100%;padding-left:5px;padding-right:0}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item{position:relative;width:100%;background-color:transparent;border:none;padding-left:0;padding-right:0;text-align:left}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item a{position:relative;display:block;width:100%;display:flex}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item span.fa-icon.left{position:relative;display:inline;margin-left:10px;margin-right:10px}.nuxtjs-bootstrap-sidebar.left .list-group .list-group-item span.fa-icon.right{display:none}.nuxtjs-bootstrap-sidebar.hidden{left:-260px}.nuxtjs-bootstrap-sidebar.right{border-right:5px solid #4d5bf9;right:10px}.nuxtjs-bootstrap-sidebar.right .sidebar-header{padding:10px;border-radius:10px;margin:5px;padding:5px;width:240px}.nuxtjs-bootstrap-sidebar.right .sidebar-header .logo-mini{margin:0 auto;display:inline}.nuxtjs-bootstrap-sidebar.right .sidebar-header .logo-mini img{margin:5px;display:inline-block;width:40px;margin-top:-12px;margin-left:10px;margin-right:10px}.nuxtjs-bootstrap-sidebar.right .sidebar-header .logo-mini .logo-title{display:inline-block}.nuxtjs-bootstrap-sidebar.right .sidebar-header .logo-mini .logo-title h2{display:inline-block}.nuxtjs-bootstrap-sidebar.right .sidebar-header .sidebar-button.visible{position:absolute;right:10px;border-radius:50%}.nuxtjs-bootstrap-sidebar.right .sidebar-header .sidebar-button.visible svg{display:block;margin:auto}.nuxtjs-bootstrap-sidebar.right .sidebar-header .sidebar-button.hidden{display:none}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.sidebar-dropdown::after{position:absolute;left:10%;top:50%;display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.router-link-exact-active,.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item:hover{border-bottom-right-radius:1rem;border-top-right-radius:1rem;border-bottom-left-radius:0;border-top-left-radius:0}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.router-link-exact-active .before,.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item:hover .before{position:absolute;height:1rem;width:100%;top:-1rem}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.router-link-exact-active .after,.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item:hover .after{position:absolute;height:1rem;width:100%;bottom:-1rem}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.router-link-exact-active .before::before,.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item:hover .before::before{content:\"\";position:absolute;height:100%;width:100%;top:0;left:0;border-bottom-left-radius:1rem}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item.router-link-exact-active .after::after,.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item:hover .after::after{content:\"\";position:absolute;height:100%;width:100%;top:0;left:0;border-top-left-radius:1rem}.nuxtjs-bootstrap-sidebar.right .list-group{top:100px;left:0;width:100%;padding-right:5px;padding-left:0}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item{position:relative;width:100%;background-color:transparent;border:none;padding-left:0;padding-right:0;text-align:right}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item a{position:relative;display:block;width:100%;display:flex}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item span.fa-icon.left{display:none}.nuxtjs-bootstrap-sidebar.right .list-group .list-group-item span.fa-icon.right{position:relative;display:inline;margin-left:10px;margin-right:10px}.nuxtjs-bootstrap-sidebar.hidden{right:-260px}.main-panel.left{position:fixed;border-radius:10px;top:10px;bottom:10px;transition:.5s;right:10px;left:275px}.main-panel.left .nav{margin-bottom:10px;padding-left:40px;padding-right:10px;border-radius:10px}.main-panel.left .nav .nav-item.left{position:fixed;top:10px;left:10px}.main-panel.left .nav .nav-item.left .nav-link{padding:.75rem 1rem}.main-panel.left .nav .nav-item.left .nav-link .sidebar-button.visible{margin-top:1px;width:25px;height:25px;padding-top:3px;right:0;border-radius:50%}.main-panel.left .nav .nav-item.left .nav-link .sidebar-button.visible svg{display:block;margin:auto}.main-panel.left .nav .nav-item.left .nav-link .sidebar-button.hidden{display:none}.main-panel.left .nav .nav-item.right{display:none}.main-panel.left .content{height:94%;border-radius:10px}.main-panel.left.hidden{left:10px}.main-panel.right{position:fixed;border-radius:10px;top:10px;bottom:10px;transition:.5s;left:10px;right:275px}.main-panel.right .nav{margin-bottom:10px;padding-left:10px;padding-right:10px;border-radius:10px}.main-panel.right .nav-item.left{display:none}.main-panel.right .nav-item.right{position:fixed;top:10px;right:10px}.main-panel.right .nav-item.right .nav-link{padding:.75rem 1rem}.main-panel.right .nav-item.right .nav-link .sidebar-button.visible{margin-top:1px;width:25px;height:25px;padding-top:3px;right:0;border-radius:50%}.main-panel.right .nav-item.right .nav-link .sidebar-button.visible svg{display:block;margin:auto}.main-panel.right .nav-item.right .nav-link .sidebar-button.hidden{display:none}.main-panel.right .content{height:94%;border-radius:10px}.main-panel.right.hidden{right:10px}@media (min-width:576px) and (max-width:991.98px){.nuxtjs-bootstrap-sidebar.left.hidden{left:10px;right:auto;width:60px}.nuxtjs-bootstrap-sidebar.left.hidden .sidebar-header .logo-mini img{margin:auto}.nuxtjs-bootstrap-sidebar.left.hidden .sidebar-header .logo-mini .logo-title{display:none}.nuxtjs-bootstrap-sidebar.left.hidden .list-group .list-group-item .link-name{display:none}.nuxtjs-bootstrap-sidebar.right.hidden{left:auto;right:10px;width:60px}.nuxtjs-bootstrap-sidebar.right.hidden .sidebar-header .logo-mini img{margin:auto}.nuxtjs-bootstrap-sidebar.right.hidden .sidebar-header .logo-mini .logo-title{display:none}.nuxtjs-bootstrap-sidebar.right.hidden .list-group .list-group-item .link-name{display:none}.main-panel.left.hidden{left:90px}.main-panel.left.hidden .nav-item.left{left:90px}.main-panel.right.hidden{right:90px}.main-panel.right.hidden .nav-item.right{right:90px}}.nuxtjs-bootstrap-sidebar.default-theme{background-color:rgba(77,91,249,.9)}.nuxtjs-bootstrap-sidebar.default-theme .sidebar-header .sidebar-button.visible{border:1px solid #f4f3ef;color:#f4f3ef;background-color:#007bff}.nuxtjs-bootstrap-sidebar.default-theme .sidebar-header .sidebar-button.visible:hover{border:1px solid #007bff;color:#007bff;background-color:#f4f3ef}.nuxtjs-bootstrap-sidebar.default-theme hr{margin:0 auto;width:80%;color:#4d5bf9;background-color:#4d5bf9}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item{color:#fff}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item.router-link-exact-active,.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item:hover{background-color:#f4f3ef;color:#333}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item.router-link-exact-active .before,.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item:hover .before{background-color:#f4f3ef}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item.router-link-exact-active .after,.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item:hover .after{background-color:#f4f3ef}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item.router-link-exact-active .before::before,.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item:hover .before::before{background-color:rgba(77,91,249,.9)}.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item.router-link-exact-active .after::after,.nuxtjs-bootstrap-sidebar.default-theme .list-group .list-group-item:hover .after::after{background-color:rgba(77,91,249,.9)}.main-panel.default-theme .nav{background-color:#f4f3ef}.main-panel.default-theme .content{background-color:#f4f3ef}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-8901a43e";
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
  var _ref2 = _slicedToArray$1(_ref, 2),
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