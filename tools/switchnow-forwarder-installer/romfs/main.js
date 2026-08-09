var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = /* @__PURE__ */ Symbol.for("react.element");
    var n = /* @__PURE__ */ Symbol.for("react.portal");
    var p = /* @__PURE__ */ Symbol.for("react.fragment");
    var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var r = /* @__PURE__ */ Symbol.for("react.profiler");
    var t = /* @__PURE__ */ Symbol.for("react.provider");
    var u = /* @__PURE__ */ Symbol.for("react.context");
    var v = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var w = /* @__PURE__ */ Symbol.for("react.suspense");
    var x = /* @__PURE__ */ Symbol.for("react.memo");
    var y = /* @__PURE__ */ Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.act = X;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = X;
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.3.1";
  }
});

// node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/.pnpm/parse-svg-path@0.1.2/node_modules/parse-svg-path/index.js
var require_parse_svg_path = __commonJS({
  "node_modules/.pnpm/parse-svg-path@0.1.2/node_modules/parse-svg-path/index.js"(exports, module) {
    module.exports = parse;
    var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 };
    var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
    function parse(path) {
      var data = [];
      path.replace(segment, function(_, command, args) {
        var type = command.toLowerCase();
        args = parseValues(args);
        if (type == "m" && args.length > 2) {
          data.push([command].concat(args.splice(0, 2)));
          type = "l";
          command = command == "m" ? "l" : "L";
        }
        while (true) {
          if (args.length == length[type]) {
            args.unshift(command);
            return data.push(args);
          }
          if (args.length < length[type]) throw new Error("malformed path data");
          data.push([command].concat(args.splice(0, length[type])));
        }
      });
      return data;
    }
    var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
    function parseValues(args) {
      var numbers = args.match(number);
      return numbers ? numbers.map(Number) : [];
    }
  }
});

// node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/cjs/scheduler.production.min.js
var require_scheduler_production_min = __commonJS({
  "node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
    "use strict";
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a: for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
      }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length) return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
          var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
          if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
          else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
          else break a;
        }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      l = performance;
      exports.unstable_now = function() {
        return l.now();
      };
    } else {
      p = Date, q = p.now();
      exports.unstable_now = function() {
        return p.now() - q;
      };
    }
    var l;
    var p;
    var q;
    var r = [];
    var t = [];
    var u = 1;
    var v = null;
    var y = 3;
    var z = false;
    var A = false;
    var B = false;
    var D = "function" === typeof setTimeout ? setTimeout : null;
    var E = "function" === typeof clearTimeout ? clearTimeout : null;
    var F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(a) {
      for (var b = h(t); null !== b; ) {
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
        else break;
        b = h(t);
      }
    }
    function H(a) {
      B = false;
      G(a);
      if (!A) if (null !== h(r)) A = true, I(J);
      else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
      }
    }
    function J(a, b) {
      A = false;
      B && (B = false, E(L), L = -1);
      z = true;
      var c = y;
      try {
        G(b);
        for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
          var d = v.callback;
          if ("function" === typeof d) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d(v.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
            G(b);
          } else k(r);
          v = h(r);
        }
        if (null !== v) var w = true;
        else {
          var m = h(t);
          null !== m && K(H, m.startTime - b);
          w = false;
        }
        return w;
      } finally {
        v = null, y = c, z = false;
      }
    }
    var N = false;
    var O = null;
    var L = -1;
    var P = 5;
    var Q = -1;
    function M() {
      return exports.unstable_now() - Q < P ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = true;
        try {
          b = O(true, a);
        } finally {
          b ? S() : (N = false, O = null);
        }
      } else N = false;
    }
    var S;
    if ("function" === typeof F) S = function() {
      F(R);
    };
    else if ("undefined" !== typeof MessageChannel) {
      T = new MessageChannel(), U = T.port2;
      T.port1.onmessage = R;
      S = function() {
        U.postMessage(null);
      };
    } else S = function() {
      D(R, 0);
    };
    var T;
    var U;
    function I(a) {
      O = a;
      N || (N = true, S());
    }
    function K(a, b) {
      L = D(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A || z || (A = true, I(J));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r);
    };
    exports.unstable_next = function(a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function(a) {
      var b = y;
      return function() {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  }
});

// node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_scheduler_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/.pnpm/react-reconciler@0.29.2_react@18.3.1/node_modules/react-reconciler/cjs/react-reconciler.production.min.js
var require_react_reconciler_production_min = __commonJS({
  "node_modules/.pnpm/react-reconciler@0.29.2_react@18.3.1/node_modules/react-reconciler/cjs/react-reconciler.production.min.js"(exports, module) {
    module.exports = function $$$reconciler($$$hostConfig) {
      var exports2 = {};
      "use strict";
      var aa = require_react(), ba = require_scheduler(), ca = Object.assign;
      function n(a) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ea = /* @__PURE__ */ Symbol.for("react.element"), fa = /* @__PURE__ */ Symbol.for("react.portal"), ha = /* @__PURE__ */ Symbol.for("react.fragment"), ia = /* @__PURE__ */ Symbol.for("react.strict_mode"), ja = /* @__PURE__ */ Symbol.for("react.profiler"), ka = /* @__PURE__ */ Symbol.for("react.provider"), la = /* @__PURE__ */ Symbol.for("react.context"), ma = /* @__PURE__ */ Symbol.for("react.forward_ref"), na = /* @__PURE__ */ Symbol.for("react.suspense"), oa = /* @__PURE__ */ Symbol.for("react.suspense_list"), pa = /* @__PURE__ */ Symbol.for("react.memo"), qa = /* @__PURE__ */ Symbol.for("react.lazy");
      /* @__PURE__ */ Symbol.for("react.scope");
      /* @__PURE__ */ Symbol.for("react.debug_trace_mode");
      var ra = /* @__PURE__ */ Symbol.for("react.offscreen");
      /* @__PURE__ */ Symbol.for("react.legacy_hidden");
      /* @__PURE__ */ Symbol.for("react.cache");
      /* @__PURE__ */ Symbol.for("react.tracing_marker");
      var sa = Symbol.iterator;
      function ta(a) {
        if (null === a || "object" !== typeof a) return null;
        a = sa && a[sa] || a["@@iterator"];
        return "function" === typeof a ? a : null;
      }
      function ua(a) {
        if (null == a) return null;
        if ("function" === typeof a) return a.displayName || a.name || null;
        if ("string" === typeof a) return a;
        switch (a) {
          case ha:
            return "Fragment";
          case fa:
            return "Portal";
          case ja:
            return "Profiler";
          case ia:
            return "StrictMode";
          case na:
            return "Suspense";
          case oa:
            return "SuspenseList";
        }
        if ("object" === typeof a) switch (a.$$typeof) {
          case la:
            return (a.displayName || "Context") + ".Consumer";
          case ka:
            return (a._context.displayName || "Context") + ".Provider";
          case ma:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case pa:
            return b = a.displayName || null, null !== b ? b : ua(a.type) || "Memo";
          case qa:
            b = a._payload;
            a = a._init;
            try {
              return ua(a(b));
            } catch (c) {
            }
        }
        return null;
      }
      function va(a) {
        var b = a.type;
        switch (a.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return ua(b);
          case 8:
            return b === ia ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function wa(a) {
        var b = a, c = a;
        if (a.alternate) for (; b.return; ) b = b.return;
        else {
          a = b;
          do
            b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
          while (a);
        }
        return 3 === b.tag ? c : null;
      }
      function xa(a) {
        if (wa(a) !== a) throw Error(n(188));
      }
      function za(a) {
        var b = a.alternate;
        if (!b) {
          b = wa(a);
          if (null === b) throw Error(n(188));
          return b !== a ? null : a;
        }
        for (var c = a, d = b; ; ) {
          var e = c.return;
          if (null === e) break;
          var f = e.alternate;
          if (null === f) {
            d = e.return;
            if (null !== d) {
              c = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c) return xa(e), a;
              if (f === d) return xa(e), b;
              f = f.sibling;
            }
            throw Error(n(188));
          }
          if (c.return !== d.return) c = e, d = f;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c) {
                g = true;
                c = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h; ) {
                if (h === c) {
                  g = true;
                  c = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(n(189));
            }
          }
          if (c.alternate !== d) throw Error(n(190));
        }
        if (3 !== c.tag) throw Error(n(188));
        return c.stateNode.current === c ? a : b;
      }
      function Aa(a) {
        a = za(a);
        return null !== a ? Ba(a) : null;
      }
      function Ba(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          var b = Ba(a);
          if (null !== b) return b;
          a = a.sibling;
        }
        return null;
      }
      function Ca(a) {
        if (5 === a.tag || 6 === a.tag) return a;
        for (a = a.child; null !== a; ) {
          if (4 !== a.tag) {
            var b = Ca(a);
            if (null !== b) return b;
          }
          a = a.sibling;
        }
        return null;
      }
      var Da = Array.isArray, Ea = $$$hostConfig.getPublicInstance, Fa = $$$hostConfig.getRootHostContext, Ga = $$$hostConfig.getChildHostContext, Ha = $$$hostConfig.prepareForCommit, Ia = $$$hostConfig.resetAfterCommit, Ja = $$$hostConfig.createInstance, Ka = $$$hostConfig.appendInitialChild, La = $$$hostConfig.finalizeInitialChildren, Ma = $$$hostConfig.prepareUpdate, Na = $$$hostConfig.shouldSetTextContent, Oa = $$$hostConfig.createTextInstance, Pa = $$$hostConfig.scheduleTimeout, Qa = $$$hostConfig.cancelTimeout, Ra = $$$hostConfig.noTimeout, Sa = $$$hostConfig.isPrimaryRenderer, Ta = $$$hostConfig.supportsMutation, Ua = $$$hostConfig.supportsPersistence, Va = $$$hostConfig.supportsHydration, Wa = $$$hostConfig.getInstanceFromNode, Xa = $$$hostConfig.preparePortalMount, Ya = $$$hostConfig.getCurrentEventPriority, Za = $$$hostConfig.detachDeletedInstance, $a = $$$hostConfig.supportsMicrotasks, ab = $$$hostConfig.scheduleMicrotask, bb = $$$hostConfig.supportsTestSelectors, cb = $$$hostConfig.findFiberRoot, db = $$$hostConfig.getBoundingRect, eb = $$$hostConfig.getTextContent, fb = $$$hostConfig.isHiddenSubtree, gb = $$$hostConfig.matchAccessibilityRole, hb = $$$hostConfig.setFocusIfFocusable, ib = $$$hostConfig.setupIntersectionObserver, jb = $$$hostConfig.appendChild, kb = $$$hostConfig.appendChildToContainer, lb = $$$hostConfig.commitTextUpdate, mb = $$$hostConfig.commitMount, nb = $$$hostConfig.commitUpdate, ob = $$$hostConfig.insertBefore, pb = $$$hostConfig.insertInContainerBefore, qb = $$$hostConfig.removeChild, rb = $$$hostConfig.removeChildFromContainer, sb = $$$hostConfig.resetTextContent, tb = $$$hostConfig.hideInstance, ub = $$$hostConfig.hideTextInstance, vb = $$$hostConfig.unhideInstance, wb = $$$hostConfig.unhideTextInstance, xb = $$$hostConfig.clearContainer, yb = $$$hostConfig.cloneInstance, zb = $$$hostConfig.createContainerChildSet, Ab = $$$hostConfig.appendChildToContainerChildSet, Bb = $$$hostConfig.finalizeContainerChildren, Cb = $$$hostConfig.replaceContainerChildren, Eb = $$$hostConfig.cloneHiddenInstance, Fb = $$$hostConfig.cloneHiddenTextInstance, Gb = $$$hostConfig.canHydrateInstance, Hb = $$$hostConfig.canHydrateTextInstance, Ib = $$$hostConfig.canHydrateSuspenseInstance, Jb = $$$hostConfig.isSuspenseInstancePending, Kb = $$$hostConfig.isSuspenseInstanceFallback, Lb = $$$hostConfig.getSuspenseInstanceFallbackErrorDetails, Mb = $$$hostConfig.registerSuspenseInstanceRetry, Nb = $$$hostConfig.getNextHydratableSibling, Ob = $$$hostConfig.getFirstHydratableChild, Pb = $$$hostConfig.getFirstHydratableChildWithinContainer, Qb = $$$hostConfig.getFirstHydratableChildWithinSuspenseInstance, Rb = $$$hostConfig.hydrateInstance, Sb = $$$hostConfig.hydrateTextInstance, Tb = $$$hostConfig.hydrateSuspenseInstance, Ub = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance, Vb = $$$hostConfig.commitHydratedContainer, Wb = $$$hostConfig.commitHydratedSuspenseInstance, Xb = $$$hostConfig.clearSuspenseBoundary, Yb = $$$hostConfig.clearSuspenseBoundaryFromContainer, Zb = $$$hostConfig.shouldDeleteUnhydratedTailInstances, $b = $$$hostConfig.didNotMatchHydratedContainerTextInstance, ac = $$$hostConfig.didNotMatchHydratedTextInstance, bc;
      function cc(a) {
        if (void 0 === bc) try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          bc = b && b[1] || "";
        }
        return "\n" + bc + a;
      }
      var dc = false;
      function ec(a, b) {
        if (!a || dc) return "";
        dc = true;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l) {
              var d = l;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l) {
              d = l;
            }
            a.call(b.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e[g] !== f[h]) {
                    var k = "\n" + e[g].replace(" at new ", " at ");
                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                    return k;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          dc = false, Error.prepareStackTrace = c;
        }
        return (a = a ? a.displayName || a.name : "") ? cc(a) : "";
      }
      var fc = Object.prototype.hasOwnProperty, gc = [], hc = -1;
      function ic(a) {
        return { current: a };
      }
      function q(a) {
        0 > hc || (a.current = gc[hc], gc[hc] = null, hc--);
      }
      function v(a, b) {
        hc++;
        gc[hc] = a.current;
        a.current = b;
      }
      var jc = {}, x = ic(jc), z = ic(false), kc = jc;
      function mc(a, b) {
        var c = a.type.contextTypes;
        if (!c) return jc;
        var d = a.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c) e[f] = b[f];
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function A(a) {
        a = a.childContextTypes;
        return null !== a && void 0 !== a;
      }
      function nc() {
        q(z);
        q(x);
      }
      function oc(a, b, c) {
        if (x.current !== jc) throw Error(n(168));
        v(x, b);
        v(z, c);
      }
      function pc(a, b, c) {
        var d = a.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c;
        d = d.getChildContext();
        for (var e in d) if (!(e in b)) throw Error(n(108, va(a) || "Unknown", e));
        return ca({}, c, d);
      }
      function qc(a) {
        a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || jc;
        kc = x.current;
        v(x, a);
        v(z, z.current);
        return true;
      }
      function rc(a, b, c) {
        var d = a.stateNode;
        if (!d) throw Error(n(169));
        c ? (a = pc(a, b, kc), d.__reactInternalMemoizedMergedChildContext = a, q(z), q(x), v(x, a)) : q(z);
        v(z, c);
      }
      var tc = Math.clz32 ? Math.clz32 : sc, uc = Math.log, vc = Math.LN2;
      function sc(a) {
        a >>>= 0;
        return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
      }
      var wc = 64, xc = 4194304;
      function yc(a) {
        switch (a & -a) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a;
        }
      }
      function zc(a, b) {
        var c = a.pendingLanes;
        if (0 === c) return 0;
        var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
        if (0 !== g) {
          var h = g & ~e;
          0 !== h ? d = yc(h) : (f &= g, 0 !== f && (d = yc(f)));
        } else g = c & ~e, 0 !== g ? d = yc(g) : 0 !== f && (d = yc(f));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
        0 !== (d & 4) && (d |= c & 16);
        b = a.entangledLanes;
        if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - tc(b), e = 1 << c, d |= a[c], b &= ~e;
        return d;
      }
      function Ac(a, b) {
        switch (a) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function Bc(a, b) {
        for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
          var g = 31 - tc(f), h = 1 << g, k = e[g];
          if (-1 === k) {
            if (0 === (h & c) || 0 !== (h & d)) e[g] = Ac(h, b);
          } else k <= b && (a.expiredLanes |= h);
          f &= ~h;
        }
      }
      function Cc(a) {
        a = a.pendingLanes & -1073741825;
        return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
      }
      function Dc() {
        var a = wc;
        wc <<= 1;
        0 === (wc & 4194240) && (wc = 64);
        return a;
      }
      function Ec(a) {
        for (var b = [], c = 0; 31 > c; c++) b.push(a);
        return b;
      }
      function Fc(a, b, c) {
        a.pendingLanes |= b;
        536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
        a = a.eventTimes;
        b = 31 - tc(b);
        a[b] = c;
      }
      function Gc(a, b) {
        var c = a.pendingLanes & ~b;
        a.pendingLanes = b;
        a.suspendedLanes = 0;
        a.pingedLanes = 0;
        a.expiredLanes &= b;
        a.mutableReadLanes &= b;
        a.entangledLanes &= b;
        b = a.entanglements;
        var d = a.eventTimes;
        for (a = a.expirationTimes; 0 < c; ) {
          var e = 31 - tc(c), f = 1 << e;
          b[e] = 0;
          d[e] = -1;
          a[e] = -1;
          c &= ~f;
        }
      }
      function Hc(a, b) {
        var c = a.entangledLanes |= b;
        for (a = a.entanglements; c; ) {
          var d = 31 - tc(c), e = 1 << d;
          e & b | a[d] & b && (a[d] |= b);
          c &= ~e;
        }
      }
      var C = 0;
      function Ic(a) {
        a &= -a;
        return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Jc = ba.unstable_scheduleCallback, Kc = ba.unstable_cancelCallback, Lc = ba.unstable_shouldYield, Mc = ba.unstable_requestPaint, D = ba.unstable_now, Nc = ba.unstable_ImmediatePriority, Oc = ba.unstable_UserBlockingPriority, Pc = ba.unstable_NormalPriority, Qc = ba.unstable_IdlePriority, Rc = null, Sc = null;
      function Tc(a) {
        if (Sc && "function" === typeof Sc.onCommitFiberRoot) try {
          Sc.onCommitFiberRoot(Rc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
      }
      function Uc(a, b) {
        return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
      }
      var Vc = "function" === typeof Object.is ? Object.is : Uc, Wc = null, Xc = false, Yc = false;
      function Zc(a) {
        null === Wc ? Wc = [a] : Wc.push(a);
      }
      function $c(a) {
        Xc = true;
        Zc(a);
      }
      function ad() {
        if (!Yc && null !== Wc) {
          Yc = true;
          var a = 0, b = C;
          try {
            var c = Wc;
            for (C = 1; a < c.length; a++) {
              var d = c[a];
              do
                d = d(true);
              while (null !== d);
            }
            Wc = null;
            Xc = false;
          } catch (e) {
            throw null !== Wc && (Wc = Wc.slice(a + 1)), Jc(Nc, ad), e;
          } finally {
            C = b, Yc = false;
          }
        }
        return null;
      }
      var bd = [], cd = 0, dd = null, ed = 0, fd = [], gd = 0, hd = null, id = 1, jd = "";
      function kd(a, b) {
        bd[cd++] = ed;
        bd[cd++] = dd;
        dd = a;
        ed = b;
      }
      function ld(a, b, c) {
        fd[gd++] = id;
        fd[gd++] = jd;
        fd[gd++] = hd;
        hd = a;
        var d = id;
        a = jd;
        var e = 32 - tc(d) - 1;
        d &= ~(1 << e);
        c += 1;
        var f = 32 - tc(b) + e;
        if (30 < f) {
          var g = e - e % 5;
          f = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          id = 1 << 32 - tc(b) + e | c << e | d;
          jd = f + a;
        } else id = 1 << f | c << e | d, jd = a;
      }
      function md(a) {
        null !== a.return && (kd(a, 1), ld(a, 1, 0));
      }
      function nd(a) {
        for (; a === dd; ) dd = bd[--cd], bd[cd] = null, ed = bd[--cd], bd[cd] = null;
        for (; a === hd; ) hd = fd[--gd], fd[gd] = null, jd = fd[--gd], fd[gd] = null, id = fd[--gd], fd[gd] = null;
      }
      var od = null, pd = null, F = false, qd = false, rd = null;
      function sd(a, b) {
        var c = td(5, null, null, 0);
        c.elementType = "DELETED";
        c.stateNode = b;
        c.return = a;
        b = a.deletions;
        null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
      }
      function ud(a, b) {
        switch (a.tag) {
          case 5:
            return b = Gb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, od = a, pd = Ob(b), true) : false;
          case 6:
            return b = Hb(b, a.pendingProps), null !== b ? (a.stateNode = b, od = a, pd = null, true) : false;
          case 13:
            b = Ib(b);
            if (null !== b) {
              var c = null !== hd ? { id, overflow: jd } : null;
              a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 };
              c = td(18, null, null, 0);
              c.stateNode = b;
              c.return = a;
              a.child = c;
              od = a;
              pd = null;
              return true;
            }
            return false;
          default:
            return false;
        }
      }
      function vd(a) {
        return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
      }
      function wd(a) {
        if (F) {
          var b = pd;
          if (b) {
            var c = b;
            if (!ud(a, b)) {
              if (vd(a)) throw Error(n(418));
              b = Nb(c);
              var d = od;
              b && ud(a, b) ? sd(d, c) : (a.flags = a.flags & -4097 | 2, F = false, od = a);
            }
          } else {
            if (vd(a)) throw Error(n(418));
            a.flags = a.flags & -4097 | 2;
            F = false;
            od = a;
          }
        }
      }
      function xd(a) {
        for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
        od = a;
      }
      function yd(a) {
        if (!Va || a !== od) return false;
        if (!F) return xd(a), F = true, false;
        if (3 !== a.tag && (5 !== a.tag || Zb(a.type) && !Na(a.type, a.memoizedProps))) {
          var b = pd;
          if (b) {
            if (vd(a)) throw zd(), Error(n(418));
            for (; b; ) sd(a, b), b = Nb(b);
          }
        }
        xd(a);
        if (13 === a.tag) {
          if (!Va) throw Error(n(316));
          a = a.memoizedState;
          a = null !== a ? a.dehydrated : null;
          if (!a) throw Error(n(317));
          pd = Ub(a);
        } else pd = od ? Nb(a.stateNode) : null;
        return true;
      }
      function zd() {
        for (var a = pd; a; ) a = Nb(a);
      }
      function Ad() {
        Va && (pd = od = null, qd = F = false);
      }
      function Bd(a) {
        null === rd ? rd = [a] : rd.push(a);
      }
      var Cd = da.ReactCurrentBatchConfig;
      function Dd(a, b) {
        if (Vc(a, b)) return true;
        if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
        var c = Object.keys(a), d = Object.keys(b);
        if (c.length !== d.length) return false;
        for (d = 0; d < c.length; d++) {
          var e = c[d];
          if (!fc.call(b, e) || !Vc(a[e], b[e])) return false;
        }
        return true;
      }
      function Ed(a) {
        switch (a.tag) {
          case 5:
            return cc(a.type);
          case 16:
            return cc("Lazy");
          case 13:
            return cc("Suspense");
          case 19:
            return cc("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a = ec(a.type, false), a;
          case 11:
            return a = ec(a.type.render, false), a;
          case 1:
            return a = ec(a.type, true), a;
          default:
            return "";
        }
      }
      function Fd(a, b, c) {
        a = c.ref;
        if (null !== a && "function" !== typeof a && "object" !== typeof a) {
          if (c._owner) {
            c = c._owner;
            if (c) {
              if (1 !== c.tag) throw Error(n(309));
              var d = c.stateNode;
            }
            if (!d) throw Error(n(147, a));
            var e = d, f = "" + a;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
            b = function(a2) {
              var b2 = e.refs;
              null === a2 ? delete b2[f] : b2[f] = a2;
            };
            b._stringRef = f;
            return b;
          }
          if ("string" !== typeof a) throw Error(n(284));
          if (!c._owner) throw Error(n(290, a));
        }
        return a;
      }
      function Gd(a, b) {
        a = Object.prototype.toString.call(b);
        throw Error(n(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
      }
      function Hd(a) {
        var b = a._init;
        return b(a._payload);
      }
      function Id(a) {
        function b(b2, c2) {
          if (a) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
          }
        }
        function c(c2, d2) {
          if (!a) return null;
          for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
          return null;
        }
        function d(a2, b2) {
          for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
          return a2;
        }
        function e(a2, b2) {
          a2 = Jd(a2, b2);
          a2.index = 0;
          a2.sibling = null;
          return a2;
        }
        function f(b2, c2, d2) {
          b2.index = d2;
          if (!a) return b2.flags |= 1048576, c2;
          d2 = b2.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
          b2.flags |= 2;
          return c2;
        }
        function g(b2) {
          a && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a2, b2, c2, d2) {
          if (null === b2 || 6 !== b2.tag) return b2 = Kd(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function k(a2, b2, c2, d2) {
          var f2 = c2.type;
          if (f2 === ha) return m(a2, b2, c2.props.children, d2, c2.key);
          if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === qa && Hd(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Fd(a2, b2, c2), d2.return = a2, d2;
          d2 = Ld(c2.type, c2.key, c2.props, null, a2.mode, d2);
          d2.ref = Fd(a2, b2, c2);
          d2.return = a2;
          return d2;
        }
        function l(a2, b2, c2, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Md(c2, a2.mode, d2), b2.return = a2, b2;
          b2 = e(b2, c2.children || []);
          b2.return = a2;
          return b2;
        }
        function m(a2, b2, c2, d2, f2) {
          if (null === b2 || 7 !== b2.tag) return b2 = Nd(c2, a2.mode, d2, f2), b2.return = a2, b2;
          b2 = e(b2, c2);
          b2.return = a2;
          return b2;
        }
        function r(a2, b2, c2) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Kd("" + b2, a2.mode, c2), b2.return = a2, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case ea:
                return c2 = Ld(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Fd(a2, null, b2), c2.return = a2, c2;
              case fa:
                return b2 = Md(b2, a2.mode, c2), b2.return = a2, b2;
              case qa:
                var d2 = b2._init;
                return r(a2, d2(b2._payload), c2);
            }
            if (Da(b2) || ta(b2)) return b2 = Nd(b2, a2.mode, c2, null), b2.return = a2, b2;
            Gd(a2, b2);
          }
          return null;
        }
        function p(a2, b2, c2, d2) {
          var e2 = null !== b2 ? b2.key : null;
          if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
          if ("object" === typeof c2 && null !== c2) {
            switch (c2.$$typeof) {
              case ea:
                return c2.key === e2 ? k(a2, b2, c2, d2) : null;
              case fa:
                return c2.key === e2 ? l(a2, b2, c2, d2) : null;
              case qa:
                return e2 = c2._init, p(
                  a2,
                  b2,
                  e2(c2._payload),
                  d2
                );
            }
            if (Da(c2) || ta(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
            Gd(a2, c2);
          }
          return null;
        }
        function B(a2, b2, c2, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case ea:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
              case fa:
                return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
              case qa:
                var f2 = d2._init;
                return B(a2, b2, c2, f2(d2._payload), e2);
            }
            if (Da(d2) || ta(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
            Gd(b2, d2);
          }
          return null;
        }
        function w(e2, g2, h2, k2) {
          for (var l2 = null, m2 = null, u = g2, t = g2 = 0, E = null; null !== u && t < h2.length; t++) {
            u.index > t ? (E = u, u = null) : E = u.sibling;
            var y = p(e2, u, h2[t], k2);
            if (null === y) {
              null === u && (u = E);
              break;
            }
            a && u && null === y.alternate && b(e2, u);
            g2 = f(y, g2, t);
            null === m2 ? l2 = y : m2.sibling = y;
            m2 = y;
            u = E;
          }
          if (t === h2.length) return c(e2, u), F && kd(e2, t), l2;
          if (null === u) {
            for (; t < h2.length; t++) u = r(e2, h2[t], k2), null !== u && (g2 = f(u, g2, t), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
            F && kd(e2, t);
            return l2;
          }
          for (u = d(e2, u); t < h2.length; t++) E = B(u, e2, t, h2[t], k2), null !== E && (a && null !== E.alternate && u.delete(null === E.key ? t : E.key), g2 = f(E, g2, t), null === m2 ? l2 = E : m2.sibling = E, m2 = E);
          a && u.forEach(function(a2) {
            return b(e2, a2);
          });
          F && kd(e2, t);
          return l2;
        }
        function Y(e2, g2, h2, k2) {
          var l2 = ta(h2);
          if ("function" !== typeof l2) throw Error(n(150));
          h2 = l2.call(h2);
          if (null == h2) throw Error(n(151));
          for (var u = l2 = null, m2 = g2, t = g2 = 0, E = null, y = h2.next(); null !== m2 && !y.done; t++, y = h2.next()) {
            m2.index > t ? (E = m2, m2 = null) : E = m2.sibling;
            var w2 = p(e2, m2, y.value, k2);
            if (null === w2) {
              null === m2 && (m2 = E);
              break;
            }
            a && m2 && null === w2.alternate && b(e2, m2);
            g2 = f(w2, g2, t);
            null === u ? l2 = w2 : u.sibling = w2;
            u = w2;
            m2 = E;
          }
          if (y.done) return c(
            e2,
            m2
          ), F && kd(e2, t), l2;
          if (null === m2) {
            for (; !y.done; t++, y = h2.next()) y = r(e2, y.value, k2), null !== y && (g2 = f(y, g2, t), null === u ? l2 = y : u.sibling = y, u = y);
            F && kd(e2, t);
            return l2;
          }
          for (m2 = d(e2, m2); !y.done; t++, y = h2.next()) y = B(m2, e2, t, y.value, k2), null !== y && (a && null !== y.alternate && m2.delete(null === y.key ? t : y.key), g2 = f(y, g2, t), null === u ? l2 = y : u.sibling = y, u = y);
          a && m2.forEach(function(a2) {
            return b(e2, a2);
          });
          F && kd(e2, t);
          return l2;
        }
        function ya(a2, d2, f2, h2) {
          "object" === typeof f2 && null !== f2 && f2.type === ha && null === f2.key && (f2 = f2.props.children);
          if ("object" === typeof f2 && null !== f2) {
            switch (f2.$$typeof) {
              case ea:
                a: {
                  for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                    if (l2.key === k2) {
                      k2 = f2.type;
                      if (k2 === ha) {
                        if (7 === l2.tag) {
                          c(a2, l2.sibling);
                          d2 = e(l2, f2.props.children);
                          d2.return = a2;
                          a2 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === qa && Hd(k2) === l2.type) {
                        c(a2, l2.sibling);
                        d2 = e(l2, f2.props);
                        d2.ref = Fd(a2, l2, f2);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      c(a2, l2);
                      break;
                    } else b(a2, l2);
                    l2 = l2.sibling;
                  }
                  f2.type === ha ? (d2 = Nd(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Ld(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Fd(a2, d2, f2), h2.return = a2, a2 = h2);
                }
                return g(a2);
              case fa:
                a: {
                  for (l2 = f2.key; null !== d2; ) {
                    if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                      c(a2, d2.sibling);
                      d2 = e(d2, f2.children || []);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    } else {
                      c(a2, d2);
                      break;
                    }
                    else b(a2, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Md(f2, a2.mode, h2);
                  d2.return = a2;
                  a2 = d2;
                }
                return g(a2);
              case qa:
                return l2 = f2._init, ya(a2, d2, l2(f2._payload), h2);
            }
            if (Da(f2)) return w(a2, d2, f2, h2);
            if (ta(f2)) return Y(a2, d2, f2, h2);
            Gd(a2, f2);
          }
          return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Kd(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
        }
        return ya;
      }
      var Od = Id(true), Pd = Id(false), Qd = ic(null), Rd = null, Sd = null, Td = null;
      function Ud() {
        Td = Sd = Rd = null;
      }
      function Vd(a, b, c) {
        Sa ? (v(Qd, b._currentValue), b._currentValue = c) : (v(Qd, b._currentValue2), b._currentValue2 = c);
      }
      function Wd(a) {
        var b = Qd.current;
        q(Qd);
        Sa ? a._currentValue = b : a._currentValue2 = b;
      }
      function Xd(a, b, c) {
        for (; null !== a; ) {
          var d = a.alternate;
          (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a === c) break;
          a = a.return;
        }
      }
      function Yd(a, b) {
        Rd = a;
        Td = Sd = null;
        a = a.dependencies;
        null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (G = true), a.firstContext = null);
      }
      function Zd(a) {
        var b = Sa ? a._currentValue : a._currentValue2;
        if (Td !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Sd) {
          if (null === Rd) throw Error(n(308));
          Sd = a;
          Rd.dependencies = { lanes: 0, firstContext: a };
        } else Sd = Sd.next = a;
        return b;
      }
      var $d = null;
      function ae(a) {
        null === $d ? $d = [a] : $d.push(a);
      }
      function be(a, b, c, d) {
        var e = b.interleaved;
        null === e ? (c.next = c, ae(b)) : (c.next = e.next, e.next = c);
        b.interleaved = c;
        return ce(a, d);
      }
      function ce(a, b) {
        a.lanes |= b;
        var c = a.alternate;
        null !== c && (c.lanes |= b);
        c = a;
        for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
        return 3 === c.tag ? c.stateNode : null;
      }
      var de = false;
      function ee(a) {
        a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function fe(a, b) {
        a = a.updateQueue;
        b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
      }
      function ge(a, b) {
        return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function he(a, b, c) {
        var d = a.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (H & 2)) {
          var e = d.pending;
          null === e ? b.next = b : (b.next = e.next, e.next = b);
          d.pending = b;
          return ce(a, c);
        }
        e = d.interleaved;
        null === e ? (b.next = b, ae(d)) : (b.next = e.next, e.next = b);
        d.interleaved = b;
        return ce(a, c);
      }
      function ie(a, b, c) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Hc(a, c);
        }
      }
      function je(a, b) {
        var c = a.updateQueue, d = a.alternate;
        if (null !== d && (d = d.updateQueue, c === d)) {
          var e = null, f = null;
          c = c.firstBaseUpdate;
          if (null !== c) {
            do {
              var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
              null === f ? e = f = g : f = f.next = g;
              c = c.next;
            } while (null !== c);
            null === f ? e = f = b : f = f.next = b;
          } else e = f = b;
          c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
          a.updateQueue = c;
          return;
        }
        a = c.lastBaseUpdate;
        null === a ? c.firstBaseUpdate = b : a.next = b;
        c.lastBaseUpdate = b;
      }
      function ke(a, b, c, d) {
        var e = a.updateQueue;
        de = false;
        var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k = h, l = k.next;
          k.next = null;
          null === g ? f = l : g.next = l;
          g = k;
          var m = a.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
        }
        if (null !== f) {
          var r = e.baseState;
          g = 0;
          m = l = k = null;
          h = f;
          do {
            var p = h.lane, B = h.eventTime;
            if ((d & p) === p) {
              null !== m && (m = m.next = {
                eventTime: B,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var w = a, Y = h;
                p = b;
                B = c;
                switch (Y.tag) {
                  case 1:
                    w = Y.payload;
                    if ("function" === typeof w) {
                      r = w.call(B, r, p);
                      break a;
                    }
                    r = w;
                    break a;
                  case 3:
                    w.flags = w.flags & -65537 | 128;
                  case 0:
                    w = Y.payload;
                    p = "function" === typeof w ? w.call(B, r, p) : w;
                    if (null === p || void 0 === p) break a;
                    r = ca({}, r, p);
                    break a;
                  case 2:
                    de = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a.flags |= 64, p = e.effects, null === p ? e.effects = [h] : p.push(h));
            } else B = { eventTime: B, lane: p, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = B, k = r) : m = m.next = B, g |= p;
            h = h.next;
            if (null === h) if (h = e.shared.pending, null === h) break;
            else p = h, h = p.next, p.next = null, e.lastBaseUpdate = p, e.shared.pending = null;
          } while (1);
          null === m && (k = r);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = m;
          b = e.shared.interleaved;
          if (null !== b) {
            e = b;
            do
              g |= e.lane, e = e.next;
            while (e !== b);
          } else null === f && (e.shared.lanes = 0);
          le |= g;
          a.lanes = g;
          a.memoizedState = r;
        }
      }
      function me(a, b, c) {
        a = b.effects;
        b.effects = null;
        if (null !== a) for (b = 0; b < a.length; b++) {
          var d = a[b], e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = c;
            if ("function" !== typeof e) throw Error(n(191, e));
            e.call(d);
          }
        }
      }
      var ne = {}, oe = ic(ne), pe = ic(ne), qe = ic(ne);
      function re(a) {
        if (a === ne) throw Error(n(174));
        return a;
      }
      function se(a, b) {
        v(qe, b);
        v(pe, a);
        v(oe, ne);
        a = Fa(b);
        q(oe);
        v(oe, a);
      }
      function te() {
        q(oe);
        q(pe);
        q(qe);
      }
      function ue(a) {
        var b = re(qe.current), c = re(oe.current);
        b = Ga(c, a.type, b);
        c !== b && (v(pe, a), v(oe, b));
      }
      function ve(a) {
        pe.current === a && (q(oe), q(pe));
      }
      var I = ic(0);
      function we(a) {
        for (var b = a; null !== b; ) {
          if (13 === b.tag) {
            var c = b.memoizedState;
            if (null !== c && (c = c.dehydrated, null === c || Jb(c) || Kb(c))) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var xe = [];
      function ye() {
        for (var a = 0; a < xe.length; a++) {
          var b = xe[a];
          Sa ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
        }
        xe.length = 0;
      }
      var ze = da.ReactCurrentDispatcher, Ae = da.ReactCurrentBatchConfig, Be = 0, J = null, K = null, L = null, Ce = false, De = false, Ee = 0, Fe = 0;
      function M() {
        throw Error(n(321));
      }
      function Ge(a, b) {
        if (null === b) return false;
        for (var c = 0; c < b.length && c < a.length; c++) if (!Vc(a[c], b[c])) return false;
        return true;
      }
      function He(a, b, c, d, e, f) {
        Be = f;
        J = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        ze.current = null === a || null === a.memoizedState ? Ie : Je;
        a = c(d, e);
        if (De) {
          f = 0;
          do {
            De = false;
            Ee = 0;
            if (25 <= f) throw Error(n(301));
            f += 1;
            L = K = null;
            b.updateQueue = null;
            ze.current = Ke;
            a = c(d, e);
          } while (De);
        }
        ze.current = Le;
        b = null !== K && null !== K.next;
        Be = 0;
        L = K = J = null;
        Ce = false;
        if (b) throw Error(n(300));
        return a;
      }
      function Me() {
        var a = 0 !== Ee;
        Ee = 0;
        return a;
      }
      function Ne() {
        var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === L ? J.memoizedState = L = a : L = L.next = a;
        return L;
      }
      function Oe() {
        if (null === K) {
          var a = J.alternate;
          a = null !== a ? a.memoizedState : null;
        } else a = K.next;
        var b = null === L ? J.memoizedState : L.next;
        if (null !== b) L = b, K = a;
        else {
          if (null === a) throw Error(n(310));
          K = a;
          a = { memoizedState: K.memoizedState, baseState: K.baseState, baseQueue: K.baseQueue, queue: K.queue, next: null };
          null === L ? J.memoizedState = L = a : L = L.next = a;
        }
        return L;
      }
      function Pe(a, b) {
        return "function" === typeof b ? b(a) : b;
      }
      function Qe(a) {
        var b = Oe(), c = b.queue;
        if (null === c) throw Error(n(311));
        c.lastRenderedReducer = a;
        var d = K, e = d.baseQueue, f = c.pending;
        if (null !== f) {
          if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c.pending = null;
        }
        if (null !== e) {
          f = e.next;
          d = d.baseState;
          var h = g = null, k = null, l = f;
          do {
            var m = l.lane;
            if ((Be & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
            else {
              var r = {
                lane: m,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h = k = r, g = d) : k = k.next = r;
              J.lanes |= m;
              le |= m;
            }
            l = l.next;
          } while (null !== l && l !== f);
          null === k ? g = d : k.next = h;
          Vc(d, b.memoizedState) || (G = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k;
          c.lastRenderedState = d;
        }
        a = c.interleaved;
        if (null !== a) {
          e = a;
          do
            f = e.lane, J.lanes |= f, le |= f, e = e.next;
          while (e !== a);
        } else null === e && (c.lanes = 0);
        return [b.memoizedState, c.dispatch];
      }
      function Re(a) {
        var b = Oe(), c = b.queue;
        if (null === c) throw Error(n(311));
        c.lastRenderedReducer = a;
        var d = c.dispatch, e = c.pending, f = b.memoizedState;
        if (null !== e) {
          c.pending = null;
          var g = e = e.next;
          do
            f = a(f, g.action), g = g.next;
          while (g !== e);
          Vc(f, b.memoizedState) || (G = true);
          b.memoizedState = f;
          null === b.baseQueue && (b.baseState = f);
          c.lastRenderedState = f;
        }
        return [f, d];
      }
      function Se() {
      }
      function Te(a, b) {
        var c = J, d = Oe(), e = b(), f = !Vc(d.memoizedState, e);
        f && (d.memoizedState = e, G = true);
        d = d.queue;
        Ue(Ve.bind(null, c, d, a), [a]);
        if (d.getSnapshot !== b || f || null !== L && L.memoizedState.tag & 1) {
          c.flags |= 2048;
          We(9, Xe.bind(null, c, d, e, b), void 0, null);
          if (null === N) throw Error(n(349));
          0 !== (Be & 30) || Ye(c, b, e);
        }
        return e;
      }
      function Ye(a, b, c) {
        a.flags |= 16384;
        a = { getSnapshot: b, value: c };
        b = J.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, J.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
      }
      function Xe(a, b, c, d) {
        b.value = c;
        b.getSnapshot = d;
        Ze(b) && $e(a);
      }
      function Ve(a, b, c) {
        return c(function() {
          Ze(b) && $e(a);
        });
      }
      function Ze(a) {
        var b = a.getSnapshot;
        a = a.value;
        try {
          var c = b();
          return !Vc(a, c);
        } catch (d) {
          return true;
        }
      }
      function $e(a) {
        var b = ce(a, 1);
        null !== b && af(b, a, 1, -1);
      }
      function bf(a) {
        var b = Ne();
        "function" === typeof a && (a = a());
        b.memoizedState = b.baseState = a;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pe, lastRenderedState: a };
        b.queue = a;
        a = a.dispatch = cf.bind(null, J, a);
        return [b.memoizedState, a];
      }
      function We(a, b, c, d) {
        a = { tag: a, create: b, destroy: c, deps: d, next: null };
        b = J.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, J.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
        return a;
      }
      function df() {
        return Oe().memoizedState;
      }
      function ef(a, b, c, d) {
        var e = Ne();
        J.flags |= a;
        e.memoizedState = We(1 | b, c, void 0, void 0 === d ? null : d);
      }
      function ff(a, b, c, d) {
        var e = Oe();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== K) {
          var g = K.memoizedState;
          f = g.destroy;
          if (null !== d && Ge(d, g.deps)) {
            e.memoizedState = We(b, c, f, d);
            return;
          }
        }
        J.flags |= a;
        e.memoizedState = We(1 | b, c, f, d);
      }
      function gf(a, b) {
        return ef(8390656, 8, a, b);
      }
      function Ue(a, b) {
        return ff(2048, 8, a, b);
      }
      function hf(a, b) {
        return ff(4, 2, a, b);
      }
      function jf(a, b) {
        return ff(4, 4, a, b);
      }
      function kf(a, b) {
        if ("function" === typeof b) return a = a(), b(a), function() {
          b(null);
        };
        if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
          b.current = null;
        };
      }
      function lf(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ff(4, 4, kf.bind(null, b, a), c);
      }
      function mf() {
      }
      function nf(a, b) {
        var c = Oe();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Ge(b, d[1])) return d[0];
        c.memoizedState = [a, b];
        return a;
      }
      function of(a, b) {
        var c = Oe();
        b = void 0 === b ? null : b;
        var d = c.memoizedState;
        if (null !== d && null !== b && Ge(b, d[1])) return d[0];
        a = a();
        c.memoizedState = [a, b];
        return a;
      }
      function pf(a, b, c) {
        if (0 === (Be & 21)) return a.baseState && (a.baseState = false, G = true), a.memoizedState = c;
        Vc(c, b) || (c = Dc(), J.lanes |= c, le |= c, a.baseState = true);
        return b;
      }
      function qf(a, b) {
        var c = C;
        C = 0 !== c && 4 > c ? c : 4;
        a(true);
        var d = Ae.transition;
        Ae.transition = {};
        try {
          a(false), b();
        } finally {
          C = c, Ae.transition = d;
        }
      }
      function rf() {
        return Oe().memoizedState;
      }
      function sf(a, b, c) {
        var d = tf(a);
        c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (uf(a)) vf(b, c);
        else if (c = be(a, b, c, d), null !== c) {
          var e = O();
          af(c, a, d, e);
          wf(c, b, d);
        }
      }
      function cf(a, b, c) {
        var d = tf(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
        if (uf(a)) vf(b, e);
        else {
          var f = a.alternate;
          if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
            var g = b.lastRenderedState, h = f(g, c);
            e.hasEagerState = true;
            e.eagerState = h;
            if (Vc(h, g)) {
              var k = b.interleaved;
              null === k ? (e.next = e, ae(b)) : (e.next = k.next, k.next = e);
              b.interleaved = e;
              return;
            }
          } catch (l) {
          } finally {
          }
          c = be(a, b, e, d);
          null !== c && (e = O(), af(c, a, d, e), wf(c, b, d));
        }
      }
      function uf(a) {
        var b = a.alternate;
        return a === J || null !== b && b === J;
      }
      function vf(a, b) {
        De = Ce = true;
        var c = a.pending;
        null === c ? b.next = b : (b.next = c.next, c.next = b);
        a.pending = b;
      }
      function wf(a, b, c) {
        if (0 !== (c & 4194240)) {
          var d = b.lanes;
          d &= a.pendingLanes;
          c |= d;
          b.lanes = c;
          Hc(a, c);
        }
      }
      var Le = { readContext: Zd, useCallback: M, useContext: M, useEffect: M, useImperativeHandle: M, useInsertionEffect: M, useLayoutEffect: M, useMemo: M, useReducer: M, useRef: M, useState: M, useDebugValue: M, useDeferredValue: M, useTransition: M, useMutableSource: M, useSyncExternalStore: M, useId: M, unstable_isNewReconciler: false }, Ie = { readContext: Zd, useCallback: function(a, b) {
        Ne().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: Zd, useEffect: gf, useImperativeHandle: function(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ef(
          4194308,
          4,
          kf.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function(a, b) {
        return ef(4194308, 4, a, b);
      }, useInsertionEffect: function(a, b) {
        return ef(4, 2, a, b);
      }, useMemo: function(a, b) {
        var c = Ne();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function(a, b, c) {
        var d = Ne();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = sf.bind(null, J, a);
        return [d.memoizedState, a];
      }, useRef: function(a) {
        var b = Ne();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: bf, useDebugValue: mf, useDeferredValue: function(a) {
        return Ne().memoizedState = a;
      }, useTransition: function() {
        var a = bf(false), b = a[0];
        a = qf.bind(null, a[1]);
        Ne().memoizedState = a;
        return [b, a];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a, b, c) {
        var d = J, e = Ne();
        if (F) {
          if (void 0 === c) throw Error(n(407));
          c = c();
        } else {
          c = b();
          if (null === N) throw Error(n(349));
          0 !== (Be & 30) || Ye(d, b, c);
        }
        e.memoizedState = c;
        var f = { value: c, getSnapshot: b };
        e.queue = f;
        gf(Ve.bind(
          null,
          d,
          f,
          a
        ), [a]);
        d.flags |= 2048;
        We(9, Xe.bind(null, d, f, c, b), void 0, null);
        return c;
      }, useId: function() {
        var a = Ne(), b = N.identifierPrefix;
        if (F) {
          var c = jd;
          var d = id;
          c = (d & ~(1 << 32 - tc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Ee++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Fe++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false }, Je = {
        readContext: Zd,
        useCallback: nf,
        useContext: Zd,
        useEffect: Ue,
        useImperativeHandle: lf,
        useInsertionEffect: hf,
        useLayoutEffect: jf,
        useMemo: of,
        useReducer: Qe,
        useRef: df,
        useState: function() {
          return Qe(Pe);
        },
        useDebugValue: mf,
        useDeferredValue: function(a) {
          var b = Oe();
          return pf(b, K.memoizedState, a);
        },
        useTransition: function() {
          var a = Qe(Pe)[0], b = Oe().memoizedState;
          return [a, b];
        },
        useMutableSource: Se,
        useSyncExternalStore: Te,
        useId: rf,
        unstable_isNewReconciler: false
      }, Ke = { readContext: Zd, useCallback: nf, useContext: Zd, useEffect: Ue, useImperativeHandle: lf, useInsertionEffect: hf, useLayoutEffect: jf, useMemo: of, useReducer: Re, useRef: df, useState: function() {
        return Re(Pe);
      }, useDebugValue: mf, useDeferredValue: function(a) {
        var b = Oe();
        return null === K ? b.memoizedState = a : pf(b, K.memoizedState, a);
      }, useTransition: function() {
        var a = Re(Pe)[0], b = Oe().memoizedState;
        return [a, b];
      }, useMutableSource: Se, useSyncExternalStore: Te, useId: rf, unstable_isNewReconciler: false };
      function xf(a, b) {
        if (a && a.defaultProps) {
          b = ca({}, b);
          a = a.defaultProps;
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b;
        }
        return b;
      }
      function yf(a, b, c, d) {
        b = a.memoizedState;
        c = c(d, b);
        c = null === c || void 0 === c ? b : ca({}, b, c);
        a.memoizedState = c;
        0 === a.lanes && (a.updateQueue.baseState = c);
      }
      var zf = { isMounted: function(a) {
        return (a = a._reactInternals) ? wa(a) === a : false;
      }, enqueueSetState: function(a, b, c) {
        a = a._reactInternals;
        var d = O(), e = tf(a), f = ge(d, e);
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = he(a, f, e);
        null !== b && (af(b, a, e, d), ie(b, a, e));
      }, enqueueReplaceState: function(a, b, c) {
        a = a._reactInternals;
        var d = O(), e = tf(a), f = ge(d, e);
        f.tag = 1;
        f.payload = b;
        void 0 !== c && null !== c && (f.callback = c);
        b = he(a, f, e);
        null !== b && (af(b, a, e, d), ie(b, a, e));
      }, enqueueForceUpdate: function(a, b) {
        a = a._reactInternals;
        var c = O(), d = tf(a), e = ge(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = he(a, e, d);
        null !== b && (af(b, a, d, c), ie(b, a, d));
      } };
      function Af(a, b, c, d, e, f, g) {
        a = a.stateNode;
        return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Dd(c, d) || !Dd(e, f) : true;
      }
      function Bf(a, b, c) {
        var d = false, e = jc;
        var f = b.contextType;
        "object" === typeof f && null !== f ? f = Zd(f) : (e = A(b) ? kc : x.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? mc(a, e) : jc);
        b = new b(c, f);
        a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = zf;
        a.stateNode = b;
        b._reactInternals = a;
        d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
        return b;
      }
      function Cf(a, b, c, d) {
        a = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
        b.state !== a && zf.enqueueReplaceState(b, b.state, null);
      }
      function Df(a, b, c, d) {
        var e = a.stateNode;
        e.props = c;
        e.state = a.memoizedState;
        e.refs = {};
        ee(a);
        var f = b.contextType;
        "object" === typeof f && null !== f ? e.context = Zd(f) : (f = A(b) ? kc : x.current, e.context = mc(a, f));
        e.state = a.memoizedState;
        f = b.getDerivedStateFromProps;
        "function" === typeof f && (yf(a, b, f, c), e.state = a.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && zf.enqueueReplaceState(e, e.state, null), ke(a, c, e, d), e.state = a.memoizedState);
        "function" === typeof e.componentDidMount && (a.flags |= 4194308);
      }
      function Ef(a, b) {
        try {
          var c = "", d = b;
          do
            c += Ed(d), d = d.return;
          while (d);
          var e = c;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a, source: b, stack: e, digest: null };
      }
      function Ff(a, b, c) {
        return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
      }
      function Gf(a, b) {
        try {
          console.error(b.value);
        } catch (c) {
          setTimeout(function() {
            throw c;
          });
        }
      }
      var Hf = "function" === typeof WeakMap ? WeakMap : Map;
      function If(a, b, c) {
        c = ge(-1, c);
        c.tag = 3;
        c.payload = { element: null };
        var d = b.value;
        c.callback = function() {
          Jf || (Jf = true, Kf = d);
          Gf(a, b);
        };
        return c;
      }
      function Lf(a, b, c) {
        c = ge(-1, c);
        c.tag = 3;
        var d = a.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b.value;
          c.payload = function() {
            return d(e);
          };
          c.callback = function() {
            Gf(a, b);
          };
        }
        var f = a.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
          Gf(a, b);
          "function" !== typeof d && (null === Mf ? Mf = /* @__PURE__ */ new Set([this]) : Mf.add(this));
          var c2 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
        });
        return c;
      }
      function Nf(a, b, c) {
        var d = a.pingCache;
        if (null === d) {
          d = a.pingCache = new Hf();
          var e = /* @__PURE__ */ new Set();
          d.set(b, e);
        } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
        e.has(c) || (e.add(c), a = Of.bind(null, a, b, c), b.then(a, a));
      }
      function Pf(a) {
        do {
          var b;
          if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a;
          a = a.return;
        } while (null !== a);
        return null;
      }
      function Qf(a, b, c, d, e) {
        if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ge(-1, 1), b.tag = 2, he(c, b, 1))), c.lanes |= 1), a;
        a.flags |= 65536;
        a.lanes = e;
        return a;
      }
      var Rf = da.ReactCurrentOwner, G = false;
      function P(a, b, c, d) {
        b.child = null === a ? Pd(b, null, c, d) : Od(b, a.child, c, d);
      }
      function Sf(a, b, c, d, e) {
        c = c.render;
        var f = b.ref;
        Yd(b, e);
        d = He(a, b, c, d, f, e);
        c = Me();
        if (null !== a && !G) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Tf(a, b, e);
        F && c && md(b);
        b.flags |= 1;
        P(a, b, d, e);
        return b.child;
      }
      function Uf(a, b, c, d, e) {
        if (null === a) {
          var f = c.type;
          if ("function" === typeof f && !Vf(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, Wf(a, b, f, d, e);
          a = Ld(c.type, null, d, b, b.mode, e);
          a.ref = b.ref;
          a.return = b;
          return b.child = a;
        }
        f = a.child;
        if (0 === (a.lanes & e)) {
          var g = f.memoizedProps;
          c = c.compare;
          c = null !== c ? c : Dd;
          if (c(g, d) && a.ref === b.ref) return Tf(a, b, e);
        }
        b.flags |= 1;
        a = Jd(f, d);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      function Wf(a, b, c, d, e) {
        if (null !== a) {
          var f = a.memoizedProps;
          if (Dd(f, d) && a.ref === b.ref) if (G = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (G = true);
          else return b.lanes = a.lanes, Tf(a, b, e);
        }
        return Xf(a, b, c, d, e);
      }
      function Yf(a, b, c) {
        var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, v(Zf, $f), $f |= c;
        else {
          if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, v(Zf, $f), $f |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f ? f.baseLanes : c;
          v(Zf, $f);
          $f |= d;
        }
        else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, v(Zf, $f), $f |= d;
        P(a, b, e, c);
        return b.child;
      }
      function ag(a, b) {
        var c = b.ref;
        if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
      }
      function Xf(a, b, c, d, e) {
        var f = A(c) ? kc : x.current;
        f = mc(b, f);
        Yd(b, e);
        c = He(a, b, c, d, f, e);
        d = Me();
        if (null !== a && !G) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Tf(a, b, e);
        F && d && md(b);
        b.flags |= 1;
        P(a, b, c, e);
        return b.child;
      }
      function bg(a, b, c, d, e) {
        if (A(c)) {
          var f = true;
          qc(b);
        } else f = false;
        Yd(b, e);
        if (null === b.stateNode) cg(a, b), Bf(b, c, d), Df(b, c, d, e), d = true;
        else if (null === a) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k = g.context, l = c.contextType;
          "object" === typeof l && null !== l ? l = Zd(l) : (l = A(c) ? kc : x.current, l = mc(b, l));
          var m = c.getDerivedStateFromProps, r = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          r || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Cf(b, g, d, l);
          de = false;
          var p = b.memoizedState;
          g.state = p;
          ke(b, d, g, e);
          k = b.memoizedState;
          h !== d || p !== k || z.current || de ? ("function" === typeof m && (yf(b, c, m, d), k = b.memoizedState), (h = de || Af(b, c, h, d, p, k, l)) ? (r || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          fe(a, b);
          h = b.memoizedProps;
          l = b.type === b.elementType ? h : xf(b.type, h);
          g.props = l;
          r = b.pendingProps;
          p = g.context;
          k = c.contextType;
          "object" === typeof k && null !== k ? k = Zd(k) : (k = A(c) ? kc : x.current, k = mc(b, k));
          var B = c.getDerivedStateFromProps;
          (m = "function" === typeof B || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== r || p !== k) && Cf(b, g, d, k);
          de = false;
          p = b.memoizedState;
          g.state = p;
          ke(b, d, g, e);
          var w = b.memoizedState;
          h !== r || p !== w || z.current || de ? ("function" === typeof B && (yf(b, c, B, d), w = b.memoizedState), (l = de || Af(b, c, l, d, p, w, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, w, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, w, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = w), g.props = d, g.state = w, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 1024), d = false);
        }
        return dg(a, b, c, d, f, e);
      }
      function dg(a, b, c, d, e, f) {
        ag(a, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g) return e && rc(b, c, false), Tf(a, b, f);
        d = b.stateNode;
        Rf.current = b;
        var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a && g ? (b.child = Od(b, a.child, null, f), b.child = Od(b, null, h, f)) : P(a, b, h, f);
        b.memoizedState = d.state;
        e && rc(b, c, true);
        return b.child;
      }
      function eg(a) {
        var b = a.stateNode;
        b.pendingContext ? oc(a, b.pendingContext, b.pendingContext !== b.context) : b.context && oc(a, b.context, false);
        se(a, b.containerInfo);
      }
      function fg(a, b, c, d, e) {
        Ad();
        Bd(e);
        b.flags |= 256;
        P(a, b, c, d);
        return b.child;
      }
      var gg = { dehydrated: null, treeContext: null, retryLane: 0 };
      function hg(a) {
        return { baseLanes: a, cachePool: null, transitions: null };
      }
      function ig(a, b, c) {
        var d = b.pendingProps, e = I.current, f = false, g = 0 !== (b.flags & 128), h;
        (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
        if (h) f = true, b.flags &= -129;
        else if (null === a || null !== a.memoizedState) e |= 1;
        v(I, e & 1);
        if (null === a) {
          wd(b);
          a = b.memoizedState;
          if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : Kb(a) ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a = d.fallback;
          return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = jg(g, d, 0, null), a = Nd(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = hg(c), b.memoizedState = gg, a) : kg(b, g);
        }
        e = a.memoizedState;
        if (null !== e && (h = e.dehydrated, null !== h)) return lg(a, b, g, d, h, e, c);
        if (f) {
          f = d.fallback;
          g = b.mode;
          e = a.child;
          h = e.sibling;
          var k = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Jd(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h ? f = Jd(h, f) : (f = Nd(f, g, c, null), f.flags |= 2);
          f.return = b;
          d.return = b;
          d.sibling = f;
          b.child = d;
          d = f;
          f = b.child;
          g = a.child.memoizedState;
          g = null === g ? hg(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
          f.memoizedState = g;
          f.childLanes = a.childLanes & ~c;
          b.memoizedState = gg;
          return d;
        }
        f = a.child;
        a = f.sibling;
        d = Jd(f, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c);
        d.return = b;
        d.sibling = null;
        null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function kg(a, b) {
        b = jg({ mode: "visible", children: b }, a.mode, 0, null);
        b.return = a;
        return a.child = b;
      }
      function mg(a, b, c, d) {
        null !== d && Bd(d);
        Od(b, a.child, null, c);
        a = kg(b, b.pendingProps.children);
        a.flags |= 2;
        b.memoizedState = null;
        return a;
      }
      function lg(a, b, c, d, e, f, g) {
        if (c) {
          if (b.flags & 256) return b.flags &= -257, d = Ff(Error(n(422))), mg(a, b, g, d);
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f = d.fallback;
          e = b.mode;
          d = jg({ mode: "visible", children: d.children }, e, 0, null);
          f = Nd(f, e, g, null);
          f.flags |= 2;
          d.return = b;
          f.return = b;
          d.sibling = f;
          b.child = d;
          0 !== (b.mode & 1) && Od(b, a.child, null, g);
          b.child.memoizedState = hg(g);
          b.memoizedState = gg;
          return f;
        }
        if (0 === (b.mode & 1)) return mg(a, b, g, null);
        if (Kb(e)) return d = Lb(e).digest, f = Error(n(419)), d = Ff(
          f,
          d,
          void 0
        ), mg(a, b, g, d);
        c = 0 !== (g & a.childLanes);
        if (G || c) {
          d = N;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, ce(a, e), af(
              d,
              a,
              e,
              -1
            ));
          }
          ng();
          d = Ff(Error(n(421)));
          return mg(a, b, g, d);
        }
        if (Jb(e)) return b.flags |= 128, b.child = a.child, b = og.bind(null, a), Mb(e, b), null;
        a = f.treeContext;
        Va && (pd = Qb(e), od = b, F = true, rd = null, qd = false, null !== a && (fd[gd++] = id, fd[gd++] = jd, fd[gd++] = hd, id = a.id, jd = a.overflow, hd = b));
        b = kg(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function pg(a, b, c) {
        a.lanes |= b;
        var d = a.alternate;
        null !== d && (d.lanes |= b);
        Xd(a.return, b, c);
      }
      function qg(a, b, c, d, e) {
        var f = a.memoizedState;
        null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
      }
      function rg(a, b, c) {
        var d = b.pendingProps, e = d.revealOrder, f = d.tail;
        P(a, b, d.children, c);
        d = I.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
            if (13 === a.tag) null !== a.memoizedState && pg(a, c, b);
            else if (19 === a.tag) pg(a, c, b);
            else if (null !== a.child) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b) break a;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === b) break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
          d &= 1;
        }
        v(I, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;
        else switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; null !== c; ) a = c.alternate, null !== a && null === we(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            qg(b, false, e, c, f);
            break;
          case "backwards":
            c = null;
            e = b.child;
            for (b.child = null; null !== e; ) {
              a = e.alternate;
              if (null !== a && null === we(a)) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            qg(b, true, c, null, f);
            break;
          case "together":
            qg(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function cg(a, b) {
        0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function Tf(a, b, c) {
        null !== a && (b.dependencies = a.dependencies);
        le |= b.lanes;
        if (0 === (c & b.childLanes)) return null;
        if (null !== a && b.child !== a.child) throw Error(n(153));
        if (null !== b.child) {
          a = b.child;
          c = Jd(a, a.pendingProps);
          b.child = c;
          for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Jd(a, a.pendingProps), c.return = b;
          c.sibling = null;
        }
        return b.child;
      }
      function sg(a, b, c) {
        switch (b.tag) {
          case 3:
            eg(b);
            Ad();
            break;
          case 5:
            ue(b);
            break;
          case 1:
            A(b.type) && qc(b);
            break;
          case 4:
            se(b, b.stateNode.containerInfo);
            break;
          case 10:
            Vd(b, b.type._context, b.memoizedProps.value);
            break;
          case 13:
            var d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return v(I, I.current & 1), b.flags |= 128, null;
              if (0 !== (c & b.child.childLanes)) return ig(a, b, c);
              v(I, I.current & 1);
              a = Tf(a, b, c);
              return null !== a ? a.sibling : null;
            }
            v(I, I.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 128)) {
              if (d) return rg(
                a,
                b,
                c
              );
              b.flags |= 128;
            }
            var e = b.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            v(I, I.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b.lanes = 0, Yf(a, b, c);
        }
        return Tf(a, b, c);
      }
      function tg(a) {
        a.flags |= 4;
      }
      function ug(a, b) {
        if (null !== a && a.child === b.child) return true;
        if (0 !== (b.flags & 16)) return false;
        for (a = b.child; null !== a; ) {
          if (0 !== (a.flags & 12854) || 0 !== (a.subtreeFlags & 12854)) return false;
          a = a.sibling;
        }
        return true;
      }
      var vg, wg, xg, yg;
      if (Ta) vg = function(a, b) {
        for (var c = b.child; null !== c; ) {
          if (5 === c.tag || 6 === c.tag) Ka(a, c.stateNode);
          else if (4 !== c.tag && null !== c.child) {
            c.child.return = c;
            c = c.child;
            continue;
          }
          if (c === b) break;
          for (; null === c.sibling; ) {
            if (null === c.return || c.return === b) return;
            c = c.return;
          }
          c.sibling.return = c.return;
          c = c.sibling;
        }
      }, wg = function() {
      }, xg = function(a, b, c, d, e) {
        a = a.memoizedProps;
        if (a !== d) {
          var f = b.stateNode, g = re(oe.current);
          c = Ma(f, c, a, d, e, g);
          (b.updateQueue = c) && tg(b);
        }
      }, yg = function(a, b, c, d) {
        c !== d && tg(b);
      };
      else if (Ua) {
        vg = function(a, b, c, d) {
          for (var e = b.child; null !== e; ) {
            if (5 === e.tag) {
              var f = e.stateNode;
              c && d && (f = Eb(f, e.type, e.memoizedProps, e));
              Ka(a, f);
            } else if (6 === e.tag) f = e.stateNode, c && d && (f = Fb(f, e.memoizedProps, e)), Ka(a, f);
            else if (4 !== e.tag) {
              if (22 === e.tag && null !== e.memoizedState) f = e.child, null !== f && (f.return = e), vg(a, e, true, true);
              else if (null !== e.child) {
                e.child.return = e;
                e = e.child;
                continue;
              }
            }
            if (e === b) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === b) return;
              e = e.return;
            }
            e.sibling.return = e.return;
            e = e.sibling;
          }
        };
        var zg = function(a, b, c, d) {
          for (var e = b.child; null !== e; ) {
            if (5 === e.tag) {
              var f = e.stateNode;
              c && d && (f = Eb(f, e.type, e.memoizedProps, e));
              Ab(a, f);
            } else if (6 === e.tag) f = e.stateNode, c && d && (f = Fb(f, e.memoizedProps, e)), Ab(a, f);
            else if (4 !== e.tag) {
              if (22 === e.tag && null !== e.memoizedState) f = e.child, null !== f && (f.return = e), zg(a, e, true, true);
              else if (null !== e.child) {
                e.child.return = e;
                e = e.child;
                continue;
              }
            }
            if (e === b) break;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === b) return;
              e = e.return;
            }
            e.sibling.return = e.return;
            e = e.sibling;
          }
        };
        wg = function(a, b) {
          var c = b.stateNode;
          if (!ug(a, b)) {
            a = c.containerInfo;
            var d = zb(a);
            zg(d, b, false, false);
            c.pendingChildren = d;
            tg(b);
            Bb(a, d);
          }
        };
        xg = function(a, b, c, d, e) {
          var f = a.stateNode, g = a.memoizedProps;
          if ((a = ug(a, b)) && g === d) b.stateNode = f;
          else {
            var h = b.stateNode, k = re(oe.current), l = null;
            g !== d && (l = Ma(h, c, g, d, e, k));
            a && null === l ? b.stateNode = f : (f = yb(f, l, c, g, d, b, a, h), La(f, c, d, e, k) && tg(b), b.stateNode = f, a ? tg(b) : vg(f, b, false, false));
          }
        };
        yg = function(a, b, c, d) {
          c !== d ? (a = re(qe.current), c = re(oe.current), b.stateNode = Oa(d, a, c, b), tg(b)) : b.stateNode = a.stateNode;
        };
      } else wg = function() {
      }, xg = function() {
      }, yg = function() {
      };
      function Ag(a, b) {
        if (!F) switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
            null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
        }
      }
      function Q(a) {
        var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
        if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
        else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
        a.subtreeFlags |= d;
        a.childLanes = c;
        return b;
      }
      function Bg(a, b, c) {
        var d = b.pendingProps;
        nd(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Q(b), null;
          case 1:
            return A(b.type) && nc(), Q(b), null;
          case 3:
            c = b.stateNode;
            te();
            q(z);
            q(x);
            ye();
            c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null);
            if (null === a || null === a.child) yd(b) ? tg(b) : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== rd && (Cg(rd), rd = null));
            wg(a, b);
            Q(b);
            return null;
          case 5:
            ve(b);
            c = re(qe.current);
            var e = b.type;
            if (null !== a && null != b.stateNode) xg(a, b, e, d, c), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode) throw Error(n(166));
                Q(b);
                return null;
              }
              a = re(oe.current);
              if (yd(b)) {
                if (!Va) throw Error(n(175));
                a = Rb(b.stateNode, b.type, b.memoizedProps, c, a, b, !qd);
                b.updateQueue = a;
                null !== a && tg(b);
              } else {
                var f = Ja(e, d, c, a, b);
                vg(f, b, false, false);
                b.stateNode = f;
                La(f, e, d, c, a) && tg(b);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            Q(b);
            return null;
          case 6:
            if (a && null != b.stateNode) yg(a, b, a.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(n(166));
              a = re(qe.current);
              c = re(oe.current);
              if (yd(b)) {
                if (!Va) throw Error(n(176));
                a = b.stateNode;
                c = b.memoizedProps;
                if (d = Sb(a, c, b, !qd)) {
                  if (e = od, null !== e) switch (e.tag) {
                    case 3:
                      $b(e.stateNode.containerInfo, a, c, 0 !== (e.mode & 1));
                      break;
                    case 5:
                      ac(e.type, e.memoizedProps, e.stateNode, a, c, 0 !== (e.mode & 1));
                  }
                }
                d && tg(b);
              } else b.stateNode = Oa(d, a, c, b);
            }
            Q(b);
            return null;
          case 13:
            q(I);
            d = b.memoizedState;
            if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
              if (F && null !== pd && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) zd(), Ad(), b.flags |= 98560, e = false;
              else if (e = yd(b), null !== d && null !== d.dehydrated) {
                if (null === a) {
                  if (!e) throw Error(n(318));
                  if (!Va) throw Error(n(344));
                  e = b.memoizedState;
                  e = null !== e ? e.dehydrated : null;
                  if (!e) throw Error(n(317));
                  Tb(e, b);
                } else Ad(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                Q(b);
                e = false;
              } else null !== rd && (Cg(rd), rd = null), e = true;
              if (!e) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c, b;
            c = null !== d;
            c !== (null !== a && null !== a.memoizedState) && c && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (I.current & 1) ? 0 === R && (R = 3) : ng()));
            null !== b.updateQueue && (b.flags |= 4);
            Q(b);
            return null;
          case 4:
            return te(), wg(a, b), null === a && Xa(b.stateNode.containerInfo), Q(b), null;
          case 10:
            return Wd(b.type._context), Q(b), null;
          case 17:
            return A(b.type) && nc(), Q(b), null;
          case 19:
            q(I);
            e = b.memoizedState;
            if (null === e) return Q(b), null;
            d = 0 !== (b.flags & 128);
            f = e.rendering;
            if (null === f) if (d) Ag(e, false);
            else {
              if (0 !== R || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                f = we(a);
                if (null !== f) {
                  b.flags |= 128;
                  Ag(e, false);
                  a = f.updateQueue;
                  null !== a && (b.updateQueue = a, b.flags |= 4);
                  b.subtreeFlags = 0;
                  a = c;
                  for (c = b.child; null !== c; ) d = c, e = a, d.flags &= 14680066, f = d.alternate, null === f ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = f.childLanes, d.lanes = f.lanes, d.child = f.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = f.memoizedProps, d.memoizedState = f.memoizedState, d.updateQueue = f.updateQueue, d.type = f.type, e = f.dependencies, d.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), c = c.sibling;
                  v(I, I.current & 1 | 2);
                  return b.child;
                }
                a = a.sibling;
              }
              null !== e.tail && D() > Dg && (b.flags |= 128, d = true, Ag(e, false), b.lanes = 4194304);
            }
            else {
              if (!d) if (a = we(f), null !== a) {
                if (b.flags |= 128, d = true, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), Ag(e, true), null === e.tail && "hidden" === e.tailMode && !f.alternate && !F) return Q(b), null;
              } else 2 * D() - e.renderingStartTime > Dg && 1073741824 !== c && (b.flags |= 128, d = true, Ag(e, false), b.lanes = 4194304);
              e.isBackwards ? (f.sibling = b.child, b.child = f) : (a = e.last, null !== a ? a.sibling = f : b.child = f, e.last = f);
            }
            if (null !== e.tail) return b = e.tail, e.rendering = b, e.tail = b.sibling, e.renderingStartTime = D(), b.sibling = null, a = I.current, v(I, d ? a & 1 | 2 : a & 1), b;
            Q(b);
            return null;
          case 22:
          case 23:
            return Eg(), c = null !== b.memoizedState, null !== a && null !== a.memoizedState !== c && (b.flags |= 8192), c && 0 !== (b.mode & 1) ? 0 !== ($f & 1073741824) && (Q(b), Ta && b.subtreeFlags & 6 && (b.flags |= 8192)) : Q(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(n(
          156,
          b.tag
        ));
      }
      function Fg(a, b) {
        nd(b);
        switch (b.tag) {
          case 1:
            return A(b.type) && nc(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 3:
            return te(), q(z), q(x), ye(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
          case 5:
            return ve(b), null;
          case 13:
            q(I);
            a = b.memoizedState;
            if (null !== a && null !== a.dehydrated) {
              if (null === b.alternate) throw Error(n(340));
              Ad();
            }
            a = b.flags;
            return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
          case 19:
            return q(I), null;
          case 4:
            return te(), null;
          case 10:
            return Wd(b.type._context), null;
          case 22:
          case 23:
            return Eg(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Gg = false, S = false, Hg = "function" === typeof WeakSet ? WeakSet : Set, T = null;
      function Ig(a, b) {
        var c = a.ref;
        if (null !== c) if ("function" === typeof c) try {
          c(null);
        } catch (d) {
          U(a, b, d);
        }
        else c.current = null;
      }
      function Jg(a, b, c) {
        try {
          c();
        } catch (d) {
          U(a, b, d);
        }
      }
      var Kg = false;
      function Lg(a, b) {
        Ha(a.containerInfo);
        for (T = b; null !== T; ) if (a = T, b = a.child, 0 !== (a.subtreeFlags & 1028) && null !== b) b.return = a, T = b;
        else for (; null !== T; ) {
          a = T;
          try {
            var c = a.alternate;
            if (0 !== (a.flags & 1024)) switch (a.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== c) {
                  var d = c.memoizedProps, e = c.memoizedState, f = a.stateNode, g = f.getSnapshotBeforeUpdate(a.elementType === a.type ? d : xf(a.type, d), e);
                  f.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                Ta && xb(a.stateNode.containerInfo);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(n(163));
            }
          } catch (h) {
            U(a, a.return, h);
          }
          b = a.sibling;
          if (null !== b) {
            b.return = a.return;
            T = b;
            break;
          }
          T = a.return;
        }
        c = Kg;
        Kg = false;
        return c;
      }
      function Mg(a, b, c) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a) === a) {
              var f = e.destroy;
              e.destroy = void 0;
              void 0 !== f && Jg(b, c, f);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Ng(a, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c = b = b.next;
          do {
            if ((c.tag & a) === a) {
              var d = c.create;
              c.destroy = d();
            }
            c = c.next;
          } while (c !== b);
        }
      }
      function Og(a) {
        var b = a.ref;
        if (null !== b) {
          var c = a.stateNode;
          switch (a.tag) {
            case 5:
              a = Ea(c);
              break;
            default:
              a = c;
          }
          "function" === typeof b ? b(a) : b.current = a;
        }
      }
      function Pg(a) {
        var b = a.alternate;
        null !== b && (a.alternate = null, Pg(b));
        a.child = null;
        a.deletions = null;
        a.sibling = null;
        5 === a.tag && (b = a.stateNode, null !== b && Za(b));
        a.stateNode = null;
        a.return = null;
        a.dependencies = null;
        a.memoizedProps = null;
        a.memoizedState = null;
        a.pendingProps = null;
        a.stateNode = null;
        a.updateQueue = null;
      }
      function Qg(a) {
        return 5 === a.tag || 3 === a.tag || 4 === a.tag;
      }
      function Rg(a) {
        a: for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Qg(a.return)) return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2) continue a;
            if (null === a.child || 4 === a.tag) continue a;
            else a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2)) return a.stateNode;
        }
      }
      function Sg(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? pb(c, a, b) : kb(c, a);
        else if (4 !== d && (a = a.child, null !== a)) for (Sg(a, b, c), a = a.sibling; null !== a; ) Sg(a, b, c), a = a.sibling;
      }
      function Tg(a, b, c) {
        var d = a.tag;
        if (5 === d || 6 === d) a = a.stateNode, b ? ob(c, a, b) : jb(c, a);
        else if (4 !== d && (a = a.child, null !== a)) for (Tg(a, b, c), a = a.sibling; null !== a; ) Tg(a, b, c), a = a.sibling;
      }
      var V = null, Ug = false;
      function Vg(a, b, c) {
        for (c = c.child; null !== c; ) Wg(a, b, c), c = c.sibling;
      }
      function Wg(a, b, c) {
        if (Sc && "function" === typeof Sc.onCommitFiberUnmount) try {
          Sc.onCommitFiberUnmount(Rc, c);
        } catch (h) {
        }
        switch (c.tag) {
          case 5:
            S || Ig(c, b);
          case 6:
            if (Ta) {
              var d = V, e = Ug;
              V = null;
              Vg(a, b, c);
              V = d;
              Ug = e;
              null !== V && (Ug ? rb(V, c.stateNode) : qb(V, c.stateNode));
            } else Vg(a, b, c);
            break;
          case 18:
            Ta && null !== V && (Ug ? Yb(V, c.stateNode) : Xb(V, c.stateNode));
            break;
          case 4:
            Ta ? (d = V, e = Ug, V = c.stateNode.containerInfo, Ug = true, Vg(a, b, c), V = d, Ug = e) : (Ua && (d = c.stateNode.containerInfo, e = zb(d), Cb(d, e)), Vg(a, b, c));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!S && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f = e, g = f.destroy;
                f = f.tag;
                void 0 !== g && (0 !== (f & 2) ? Jg(c, b, g) : 0 !== (f & 4) && Jg(c, b, g));
                e = e.next;
              } while (e !== d);
            }
            Vg(a, b, c);
            break;
          case 1:
            if (!S && (Ig(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
            } catch (h) {
              U(c, b, h);
            }
            Vg(a, b, c);
            break;
          case 21:
            Vg(a, b, c);
            break;
          case 22:
            c.mode & 1 ? (S = (d = S) || null !== c.memoizedState, Vg(a, b, c), S = d) : Vg(a, b, c);
            break;
          default:
            Vg(
              a,
              b,
              c
            );
        }
      }
      function Xg(a) {
        var b = a.updateQueue;
        if (null !== b) {
          a.updateQueue = null;
          var c = a.stateNode;
          null === c && (c = a.stateNode = new Hg());
          b.forEach(function(b2) {
            var d = Yg.bind(null, a, b2);
            c.has(b2) || (c.add(b2), b2.then(d, d));
          });
        }
      }
      function Zg(a, b) {
        var c = b.deletions;
        if (null !== c) for (var d = 0; d < c.length; d++) {
          var e = c[d];
          try {
            var f = a, g = b;
            if (Ta) {
              var h = g;
              a: for (; null !== h; ) {
                switch (h.tag) {
                  case 5:
                    V = h.stateNode;
                    Ug = false;
                    break a;
                  case 3:
                    V = h.stateNode.containerInfo;
                    Ug = true;
                    break a;
                  case 4:
                    V = h.stateNode.containerInfo;
                    Ug = true;
                    break a;
                }
                h = h.return;
              }
              if (null === V) throw Error(n(160));
              Wg(f, g, e);
              V = null;
              Ug = false;
            } else Wg(f, g, e);
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
          } catch (l) {
            U(e, b, l);
          }
        }
        if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) $g(b, a), b = b.sibling;
      }
      function $g(a, b) {
        var c = a.alternate, d = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Zg(b, a);
            ah(a);
            if (d & 4) {
              try {
                Mg(3, a, a.return), Ng(3, a);
              } catch (p) {
                U(a, a.return, p);
              }
              try {
                Mg(5, a, a.return);
              } catch (p) {
                U(a, a.return, p);
              }
            }
            break;
          case 1:
            Zg(b, a);
            ah(a);
            d & 512 && null !== c && Ig(c, c.return);
            break;
          case 5:
            Zg(b, a);
            ah(a);
            d & 512 && null !== c && Ig(c, c.return);
            if (Ta) {
              if (a.flags & 32) {
                var e = a.stateNode;
                try {
                  sb(e);
                } catch (p) {
                  U(a, a.return, p);
                }
              }
              if (d & 4 && (e = a.stateNode, null != e)) {
                var f = a.memoizedProps;
                c = null !== c ? c.memoizedProps : f;
                d = a.type;
                b = a.updateQueue;
                a.updateQueue = null;
                if (null !== b) try {
                  nb(e, b, d, c, f, a);
                } catch (p) {
                  U(a, a.return, p);
                }
              }
            }
            break;
          case 6:
            Zg(b, a);
            ah(a);
            if (d & 4 && Ta) {
              if (null === a.stateNode) throw Error(n(162));
              e = a.stateNode;
              f = a.memoizedProps;
              c = null !== c ? c.memoizedProps : f;
              try {
                lb(e, c, f);
              } catch (p) {
                U(a, a.return, p);
              }
            }
            break;
          case 3:
            Zg(b, a);
            ah(a);
            if (d & 4) {
              if (Ta && Va && null !== c && c.memoizedState.isDehydrated) try {
                Vb(b.containerInfo);
              } catch (p) {
                U(a, a.return, p);
              }
              if (Ua) {
                e = b.containerInfo;
                f = b.pendingChildren;
                try {
                  Cb(e, f);
                } catch (p) {
                  U(a, a.return, p);
                }
              }
            }
            break;
          case 4:
            Zg(
              b,
              a
            );
            ah(a);
            if (d & 4 && Ua) {
              f = a.stateNode;
              e = f.containerInfo;
              f = f.pendingChildren;
              try {
                Cb(e, f);
              } catch (p) {
                U(a, a.return, p);
              }
            }
            break;
          case 13:
            Zg(b, a);
            ah(a);
            e = a.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (bh = D()));
            d & 4 && Xg(a);
            break;
          case 22:
            var g = null !== c && null !== c.memoizedState;
            a.mode & 1 ? (S = (c = S) || g, Zg(b, a), S = c) : Zg(b, a);
            ah(a);
            if (d & 8192) {
              c = null !== a.memoizedState;
              if ((a.stateNode.isHidden = c) && !g && 0 !== (a.mode & 1)) for (T = a, d = a.child; null !== d; ) {
                for (b = T = d; null !== T; ) {
                  g = T;
                  var h = g.child;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Mg(4, g, g.return);
                      break;
                    case 1:
                      Ig(g, g.return);
                      var k = g.stateNode;
                      if ("function" === typeof k.componentWillUnmount) {
                        var l = g, m = g.return;
                        try {
                          var r = l;
                          k.props = r.memoizedProps;
                          k.state = r.memoizedState;
                          k.componentWillUnmount();
                        } catch (p) {
                          U(l, m, p);
                        }
                      }
                      break;
                    case 5:
                      Ig(g, g.return);
                      break;
                    case 22:
                      if (null !== g.memoizedState) {
                        ch(b);
                        continue;
                      }
                  }
                  null !== h ? (h.return = g, T = h) : ch(b);
                }
                d = d.sibling;
              }
              if (Ta) {
                a: if (d = null, Ta) for (b = a; ; ) {
                  if (5 === b.tag) {
                    if (null === d) {
                      d = b;
                      try {
                        e = b.stateNode, c ? tb(e) : vb(b.stateNode, b.memoizedProps);
                      } catch (p) {
                        U(a, a.return, p);
                      }
                    }
                  } else if (6 === b.tag) {
                    if (null === d) try {
                      f = b.stateNode, c ? ub(f) : wb(f, b.memoizedProps);
                    } catch (p) {
                      U(a, a.return, p);
                    }
                  } else if ((22 !== b.tag && 23 !== b.tag || null === b.memoizedState || b === a) && null !== b.child) {
                    b.child.return = b;
                    b = b.child;
                    continue;
                  }
                  if (b === a) break a;
                  for (; null === b.sibling; ) {
                    if (null === b.return || b.return === a) break a;
                    d === b && (d = null);
                    b = b.return;
                  }
                  d === b && (d = null);
                  b.sibling.return = b.return;
                  b = b.sibling;
                }
              }
            }
            break;
          case 19:
            Zg(b, a);
            ah(a);
            d & 4 && Xg(a);
            break;
          case 21:
            break;
          default:
            Zg(b, a), ah(a);
        }
      }
      function ah(a) {
        var b = a.flags;
        if (b & 2) {
          try {
            if (Ta) {
              b: {
                for (var c = a.return; null !== c; ) {
                  if (Qg(c)) {
                    var d = c;
                    break b;
                  }
                  c = c.return;
                }
                throw Error(n(160));
              }
              switch (d.tag) {
                case 5:
                  var e = d.stateNode;
                  d.flags & 32 && (sb(e), d.flags &= -33);
                  var f = Rg(a);
                  Tg(a, f, e);
                  break;
                case 3:
                case 4:
                  var g = d.stateNode.containerInfo, h = Rg(a);
                  Sg(a, h, g);
                  break;
                default:
                  throw Error(n(161));
              }
            }
          } catch (k) {
            U(a, a.return, k);
          }
          a.flags &= -3;
        }
        b & 4096 && (a.flags &= -4097);
      }
      function dh(a, b, c) {
        T = a;
        eh(a, b, c);
      }
      function eh(a, b, c) {
        for (var d = 0 !== (a.mode & 1); null !== T; ) {
          var e = T, f = e.child;
          if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Gg;
            if (!g) {
              var h = e.alternate, k = null !== h && null !== h.memoizedState || S;
              h = Gg;
              var l = S;
              Gg = g;
              if ((S = k) && !l) for (T = e; null !== T; ) g = T, k = g.child, 22 === g.tag && null !== g.memoizedState ? fh(e) : null !== k ? (k.return = g, T = k) : fh(e);
              for (; null !== f; ) T = f, eh(f, b, c), f = f.sibling;
              T = e;
              Gg = h;
              S = l;
            }
            gh(a, b, c);
          } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, T = f) : gh(a, b, c);
        }
      }
      function gh(a) {
        for (; null !== T; ) {
          var b = T;
          if (0 !== (b.flags & 8772)) {
            var c = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  S || Ng(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !S) if (null === c) d.componentDidMount();
                  else {
                    var e = b.elementType === b.type ? c.memoizedProps : xf(b.type, c.memoizedProps);
                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f = b.updateQueue;
                  null !== f && me(b, f, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c = Ea(b.child.stateNode);
                        break;
                      case 1:
                        c = b.child.stateNode;
                    }
                    me(b, g, c);
                  }
                  break;
                case 5:
                  var h = b.stateNode;
                  null === c && b.flags & 4 && mb(h, b.type, b.memoizedProps, b);
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (Va && null === b.memoizedState) {
                    var k = b.alternate;
                    if (null !== k) {
                      var l = k.memoizedState;
                      if (null !== l) {
                        var m = l.dehydrated;
                        null !== m && Wb(m);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(n(163));
              }
              S || b.flags & 512 && Og(b);
            } catch (r) {
              U(b, b.return, r);
            }
          }
          if (b === a) {
            T = null;
            break;
          }
          c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            T = c;
            break;
          }
          T = b.return;
        }
      }
      function ch(a) {
        for (; null !== T; ) {
          var b = T;
          if (b === a) {
            T = null;
            break;
          }
          var c = b.sibling;
          if (null !== c) {
            c.return = b.return;
            T = c;
            break;
          }
          T = b.return;
        }
      }
      function fh(a) {
        for (; null !== T; ) {
          var b = T;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c = b.return;
                try {
                  Ng(4, b);
                } catch (k) {
                  U(b, c, k);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    U(b, e, k);
                  }
                }
                var f = b.return;
                try {
                  Og(b);
                } catch (k) {
                  U(b, f, k);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Og(b);
                } catch (k) {
                  U(b, g, k);
                }
            }
          } catch (k) {
            U(b, b.return, k);
          }
          if (b === a) {
            T = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            T = h;
            break;
          }
          T = b.return;
        }
      }
      var hh = 0, ih = 1, jh = 2, kh = 3, lh = 4;
      if ("function" === typeof Symbol && Symbol.for) {
        var mh = Symbol.for;
        hh = mh("selector.component");
        ih = mh("selector.has_pseudo_class");
        jh = mh("selector.role");
        kh = mh("selector.test_id");
        lh = mh("selector.text");
      }
      function nh(a) {
        var b = Wa(a);
        if (null != b) {
          if ("string" !== typeof b.memoizedProps["data-testname"]) throw Error(n(364));
          return b;
        }
        a = cb(a);
        if (null === a) throw Error(n(362));
        return a.stateNode.current;
      }
      function oh(a, b) {
        switch (b.$$typeof) {
          case hh:
            if (a.type === b.value) return true;
            break;
          case ih:
            a: {
              b = b.value;
              a = [a, 0];
              for (var c = 0; c < a.length; ) {
                var d = a[c++], e = a[c++], f = b[e];
                if (5 !== d.tag || !fb(d)) {
                  for (; null != f && oh(d, f); ) e++, f = b[e];
                  if (e === b.length) {
                    b = true;
                    break a;
                  } else for (d = d.child; null !== d; ) a.push(d, e), d = d.sibling;
                }
              }
              b = false;
            }
            return b;
          case jh:
            if (5 === a.tag && gb(a.stateNode, b.value)) return true;
            break;
          case lh:
            if (5 === a.tag || 6 === a.tag) {
              if (a = eb(a), null !== a && 0 <= a.indexOf(b.value)) return true;
            }
            break;
          case kh:
            if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) return true;
            break;
          default:
            throw Error(n(365));
        }
        return false;
      }
      function ph(a) {
        switch (a.$$typeof) {
          case hh:
            return "<" + (ua(a.value) || "Unknown") + ">";
          case ih:
            return ":has(" + (ph(a) || "") + ")";
          case jh:
            return '[role="' + a.value + '"]';
          case lh:
            return '"' + a.value + '"';
          case kh:
            return '[data-testname="' + a.value + '"]';
          default:
            throw Error(n(365));
        }
      }
      function qh(a, b) {
        var c = [];
        a = [a, 0];
        for (var d = 0; d < a.length; ) {
          var e = a[d++], f = a[d++], g = b[f];
          if (5 !== e.tag || !fb(e)) {
            for (; null != g && oh(e, g); ) f++, g = b[f];
            if (f === b.length) c.push(e);
            else for (e = e.child; null !== e; ) a.push(e, f), e = e.sibling;
          }
        }
        return c;
      }
      function rh(a, b) {
        if (!bb) throw Error(n(363));
        a = nh(a);
        a = qh(a, b);
        b = [];
        a = Array.from(a);
        for (var c = 0; c < a.length; ) {
          var d = a[c++];
          if (5 === d.tag) fb(d) || b.push(d.stateNode);
          else for (d = d.child; null !== d; ) a.push(d), d = d.sibling;
        }
        return b;
      }
      var sh = Math.ceil, th = da.ReactCurrentDispatcher, uh = da.ReactCurrentOwner, W = da.ReactCurrentBatchConfig, H = 0, N = null, X = null, Z = 0, $f = 0, Zf = ic(0), R = 0, vh = null, le = 0, wh = 0, xh = 0, yh = null, zh = null, bh = 0, Dg = Infinity, Ah = null;
      function Bh() {
        Dg = D() + 500;
      }
      var Jf = false, Kf = null, Mf = null, Ch = false, Dh = null, Eh = 0, Fh = 0, Gh = null, Hh = -1, Ih = 0;
      function O() {
        return 0 !== (H & 6) ? D() : -1 !== Hh ? Hh : Hh = D();
      }
      function tf(a) {
        if (0 === (a.mode & 1)) return 1;
        if (0 !== (H & 2) && 0 !== Z) return Z & -Z;
        if (null !== Cd.transition) return 0 === Ih && (Ih = Dc()), Ih;
        a = C;
        return 0 !== a ? a : Ya();
      }
      function af(a, b, c, d) {
        if (50 < Fh) throw Fh = 0, Gh = null, Error(n(185));
        Fc(a, c, d);
        if (0 === (H & 2) || a !== N) a === N && (0 === (H & 2) && (wh |= c), 4 === R && Jh(a, Z)), Kh(a, d), 1 === c && 0 === H && 0 === (b.mode & 1) && (Bh(), Xc && ad());
      }
      function Kh(a, b) {
        var c = a.callbackNode;
        Bc(a, b);
        var d = zc(a, a === N ? Z : 0);
        if (0 === d) null !== c && Kc(c), a.callbackNode = null, a.callbackPriority = 0;
        else if (b = d & -d, a.callbackPriority !== b) {
          null != c && Kc(c);
          if (1 === b) 0 === a.tag ? $c(Lh.bind(null, a)) : Zc(Lh.bind(null, a)), $a ? ab(function() {
            0 === (H & 6) && ad();
          }) : Jc(Nc, ad), c = null;
          else {
            switch (Ic(d)) {
              case 1:
                c = Nc;
                break;
              case 4:
                c = Oc;
                break;
              case 16:
                c = Pc;
                break;
              case 536870912:
                c = Qc;
                break;
              default:
                c = Pc;
            }
            c = Mh(c, Nh.bind(null, a));
          }
          a.callbackPriority = b;
          a.callbackNode = c;
        }
      }
      function Nh(a, b) {
        Hh = -1;
        Ih = 0;
        if (0 !== (H & 6)) throw Error(n(327));
        var c = a.callbackNode;
        if (Oh() && a.callbackNode !== c) return null;
        var d = zc(a, a === N ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ph(a, d);
        else {
          b = d;
          var e = H;
          H |= 2;
          var f = Qh();
          if (N !== a || Z !== b) Ah = null, Bh(), Rh(a, b);
          do
            try {
              Sh();
              break;
            } catch (h) {
              Th(a, h);
            }
          while (1);
          Ud();
          th.current = f;
          H = e;
          null !== X ? b = 0 : (N = null, Z = 0, b = R);
        }
        if (0 !== b) {
          2 === b && (e = Cc(a), 0 !== e && (d = e, b = Uh(a, e)));
          if (1 === b) throw c = vh, Rh(a, 0), Jh(a, d), Kh(a, D()), c;
          if (6 === b) Jh(a, d);
          else {
            e = a.current.alternate;
            if (0 === (d & 30) && !Vh(e) && (b = Ph(a, d), 2 === b && (f = Cc(a), 0 !== f && (d = f, b = Uh(a, f))), 1 === b)) throw c = vh, Rh(a, 0), Jh(a, d), Kh(a, D()), c;
            a.finishedWork = e;
            a.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(n(345));
              case 2:
                Wh(a, zh, Ah);
                break;
              case 3:
                Jh(a, d);
                if ((d & 130023424) === d && (b = bh + 500 - D(), 10 < b)) {
                  if (0 !== zc(a, 0)) break;
                  e = a.suspendedLanes;
                  if ((e & d) !== d) {
                    O();
                    a.pingedLanes |= a.suspendedLanes & e;
                    break;
                  }
                  a.timeoutHandle = Pa(Wh.bind(null, a, zh, Ah), b);
                  break;
                }
                Wh(a, zh, Ah);
                break;
              case 4:
                Jh(a, d);
                if ((d & 4194240) === d) break;
                b = a.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g = 31 - tc(d);
                  f = 1 << g;
                  g = b[g];
                  g > e && (e = g);
                  d &= ~f;
                }
                d = e;
                d = D() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * sh(d / 1960)) - d;
                if (10 < d) {
                  a.timeoutHandle = Pa(Wh.bind(null, a, zh, Ah), d);
                  break;
                }
                Wh(a, zh, Ah);
                break;
              case 5:
                Wh(a, zh, Ah);
                break;
              default:
                throw Error(n(329));
            }
          }
        }
        Kh(a, D());
        return a.callbackNode === c ? Nh.bind(null, a) : null;
      }
      function Uh(a, b) {
        var c = yh;
        a.current.memoizedState.isDehydrated && (Rh(a, b).flags |= 256);
        a = Ph(a, b);
        2 !== a && (b = zh, zh = c, null !== b && Cg(b));
        return a;
      }
      function Cg(a) {
        null === zh ? zh = a : zh.push.apply(zh, a);
      }
      function Vh(a) {
        for (var b = a; ; ) {
          if (b.flags & 16384) {
            var c = b.updateQueue;
            if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
              var e = c[d], f = e.getSnapshot;
              e = e.value;
              try {
                if (!Vc(f(), e)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c = b.child;
          if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
          else {
            if (b === a) break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Jh(a, b) {
        b &= ~xh;
        b &= ~wh;
        a.suspendedLanes |= b;
        a.pingedLanes &= ~b;
        for (a = a.expirationTimes; 0 < b; ) {
          var c = 31 - tc(b), d = 1 << c;
          a[c] = -1;
          b &= ~d;
        }
      }
      function Lh(a) {
        if (0 !== (H & 6)) throw Error(n(327));
        Oh();
        var b = zc(a, 0);
        if (0 === (b & 1)) return Kh(a, D()), null;
        var c = Ph(a, b);
        if (0 !== a.tag && 2 === c) {
          var d = Cc(a);
          0 !== d && (b = d, c = Uh(a, d));
        }
        if (1 === c) throw c = vh, Rh(a, 0), Jh(a, b), Kh(a, D()), c;
        if (6 === c) throw Error(n(345));
        a.finishedWork = a.current.alternate;
        a.finishedLanes = b;
        Wh(a, zh, Ah);
        Kh(a, D());
        return null;
      }
      function Xh(a) {
        null !== Dh && 0 === Dh.tag && 0 === (H & 6) && Oh();
        var b = H;
        H |= 1;
        var c = W.transition, d = C;
        try {
          if (W.transition = null, C = 1, a) return a();
        } finally {
          C = d, W.transition = c, H = b, 0 === (H & 6) && ad();
        }
      }
      function Eg() {
        $f = Zf.current;
        q(Zf);
      }
      function Rh(a, b) {
        a.finishedWork = null;
        a.finishedLanes = 0;
        var c = a.timeoutHandle;
        c !== Ra && (a.timeoutHandle = Ra, Qa(c));
        if (null !== X) for (c = X.return; null !== c; ) {
          var d = c;
          nd(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && nc();
              break;
            case 3:
              te();
              q(z);
              q(x);
              ye();
              break;
            case 5:
              ve(d);
              break;
            case 4:
              te();
              break;
            case 13:
              q(I);
              break;
            case 19:
              q(I);
              break;
            case 10:
              Wd(d.type._context);
              break;
            case 22:
            case 23:
              Eg();
          }
          c = c.return;
        }
        N = a;
        X = a = Jd(a.current, null);
        Z = $f = b;
        R = 0;
        vh = null;
        xh = wh = le = 0;
        zh = yh = null;
        if (null !== $d) {
          for (b = 0; b < $d.length; b++) if (c = $d[b], d = c.interleaved, null !== d) {
            c.interleaved = null;
            var e = d.next, f = c.pending;
            if (null !== f) {
              var g = f.next;
              f.next = e;
              d.next = g;
            }
            c.pending = d;
          }
          $d = null;
        }
        return a;
      }
      function Th(a, b) {
        do {
          var c = X;
          try {
            Ud();
            ze.current = Le;
            if (Ce) {
              for (var d = J.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Ce = false;
            }
            Be = 0;
            L = K = J = null;
            De = false;
            Ee = 0;
            uh.current = null;
            if (null === c || null === c.return) {
              R = 1;
              vh = b;
              X = null;
              break;
            }
            a: {
              var f = a, g = c.return, h = c, k = b;
              b = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k, m = h, r = m.tag;
                if (0 === (m.mode & 1) && (0 === r || 11 === r || 15 === r)) {
                  var p = m.alternate;
                  p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var B = Pf(g);
                if (null !== B) {
                  B.flags &= -257;
                  Qf(B, g, h, f, b);
                  B.mode & 1 && Nf(f, l, b);
                  b = B;
                  k = l;
                  var w = b.updateQueue;
                  if (null === w) {
                    var Y = /* @__PURE__ */ new Set();
                    Y.add(k);
                    b.updateQueue = Y;
                  } else w.add(k);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Nf(f, l, b);
                    ng();
                    break a;
                  }
                  k = Error(n(426));
                }
              } else if (F && h.mode & 1) {
                var ya = Pf(g);
                if (null !== ya) {
                  0 === (ya.flags & 65536) && (ya.flags |= 256);
                  Qf(ya, g, h, f, b);
                  Bd(Ef(k, h));
                  break a;
                }
              }
              f = k = Ef(k, h);
              4 !== R && (R = 2);
              null === yh ? yh = [f] : yh.push(f);
              f = g;
              do {
                switch (f.tag) {
                  case 3:
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var E = If(f, k, b);
                    je(f, E);
                    break a;
                  case 1:
                    h = k;
                    var u = f.type, t = f.stateNode;
                    if (0 === (f.flags & 128) && ("function" === typeof u.getDerivedStateFromError || null !== t && "function" === typeof t.componentDidCatch && (null === Mf || !Mf.has(t)))) {
                      f.flags |= 65536;
                      b &= -b;
                      f.lanes |= b;
                      var Db = Lf(f, h, b);
                      je(f, Db);
                      break a;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Yh(c);
          } catch (lc) {
            b = lc;
            X === c && null !== c && (X = c = c.return);
            continue;
          }
          break;
        } while (1);
      }
      function Qh() {
        var a = th.current;
        th.current = Le;
        return null === a ? Le : a;
      }
      function ng() {
        if (0 === R || 3 === R || 2 === R) R = 4;
        null === N || 0 === (le & 268435455) && 0 === (wh & 268435455) || Jh(N, Z);
      }
      function Ph(a, b) {
        var c = H;
        H |= 2;
        var d = Qh();
        if (N !== a || Z !== b) Ah = null, Rh(a, b);
        do
          try {
            Zh();
            break;
          } catch (e) {
            Th(a, e);
          }
        while (1);
        Ud();
        H = c;
        th.current = d;
        if (null !== X) throw Error(n(261));
        N = null;
        Z = 0;
        return R;
      }
      function Zh() {
        for (; null !== X; ) $h(X);
      }
      function Sh() {
        for (; null !== X && !Lc(); ) $h(X);
      }
      function $h(a) {
        var b = ai(a.alternate, a, $f);
        a.memoizedProps = a.pendingProps;
        null === b ? Yh(a) : X = b;
        uh.current = null;
      }
      function Yh(a) {
        var b = a;
        do {
          var c = b.alternate;
          a = b.return;
          if (0 === (b.flags & 32768)) {
            if (c = Bg(c, b, $f), null !== c) {
              X = c;
              return;
            }
          } else {
            c = Fg(c, b);
            if (null !== c) {
              c.flags &= 32767;
              X = c;
              return;
            }
            if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
            else {
              R = 6;
              X = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            X = b;
            return;
          }
          X = b = a;
        } while (null !== b);
        0 === R && (R = 5);
      }
      function Wh(a, b, c) {
        var d = C, e = W.transition;
        try {
          W.transition = null, C = 1, bi(a, b, c, d);
        } finally {
          W.transition = e, C = d;
        }
        return null;
      }
      function bi(a, b, c, d) {
        do
          Oh();
        while (null !== Dh);
        if (0 !== (H & 6)) throw Error(n(327));
        c = a.finishedWork;
        var e = a.finishedLanes;
        if (null === c) return null;
        a.finishedWork = null;
        a.finishedLanes = 0;
        if (c === a.current) throw Error(n(177));
        a.callbackNode = null;
        a.callbackPriority = 0;
        var f = c.lanes | c.childLanes;
        Gc(a, f);
        a === N && (X = N = null, Z = 0);
        0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || Ch || (Ch = true, Mh(Pc, function() {
          Oh();
          return null;
        }));
        f = 0 !== (c.flags & 15990);
        if (0 !== (c.subtreeFlags & 15990) || f) {
          f = W.transition;
          W.transition = null;
          var g = C;
          C = 1;
          var h = H;
          H |= 4;
          uh.current = null;
          Lg(a, c);
          $g(c, a);
          Ia(a.containerInfo);
          a.current = c;
          dh(c, a, e);
          Mc();
          H = h;
          C = g;
          W.transition = f;
        } else a.current = c;
        Ch && (Ch = false, Dh = a, Eh = e);
        f = a.pendingLanes;
        0 === f && (Mf = null);
        Tc(c.stateNode, d);
        Kh(a, D());
        if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Jf) throw Jf = false, a = Kf, Kf = null, a;
        0 !== (Eh & 1) && 0 !== a.tag && Oh();
        f = a.pendingLanes;
        0 !== (f & 1) ? a === Gh ? Fh++ : (Fh = 0, Gh = a) : Fh = 0;
        ad();
        return null;
      }
      function Oh() {
        if (null !== Dh) {
          var a = Ic(Eh), b = W.transition, c = C;
          try {
            W.transition = null;
            C = 16 > a ? 16 : a;
            if (null === Dh) var d = false;
            else {
              a = Dh;
              Dh = null;
              Eh = 0;
              if (0 !== (H & 6)) throw Error(n(331));
              var e = H;
              H |= 4;
              for (T = a.current; null !== T; ) {
                var f = T, g = f.child;
                if (0 !== (T.flags & 16)) {
                  var h = f.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l = h[k];
                      for (T = l; null !== T; ) {
                        var m = T;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Mg(8, m, f);
                        }
                        var r = m.child;
                        if (null !== r) r.return = m, T = r;
                        else for (; null !== T; ) {
                          m = T;
                          var p = m.sibling, B = m.return;
                          Pg(m);
                          if (m === l) {
                            T = null;
                            break;
                          }
                          if (null !== p) {
                            p.return = B;
                            T = p;
                            break;
                          }
                          T = B;
                        }
                      }
                    }
                    var w = f.alternate;
                    if (null !== w) {
                      var Y = w.child;
                      if (null !== Y) {
                        w.child = null;
                        do {
                          var ya = Y.sibling;
                          Y.sibling = null;
                          Y = ya;
                        } while (null !== Y);
                      }
                    }
                    T = f;
                  }
                }
                if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, T = g;
                else b: for (; null !== T; ) {
                  f = T;
                  if (0 !== (f.flags & 2048)) switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mg(9, f, f.return);
                  }
                  var E = f.sibling;
                  if (null !== E) {
                    E.return = f.return;
                    T = E;
                    break b;
                  }
                  T = f.return;
                }
              }
              var u = a.current;
              for (T = u; null !== T; ) {
                g = T;
                var t = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== t) t.return = g, T = t;
                else b: for (g = u; null !== T; ) {
                  h = T;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ng(9, h);
                    }
                  } catch (lc) {
                    U(h, h.return, lc);
                  }
                  if (h === g) {
                    T = null;
                    break b;
                  }
                  var Db = h.sibling;
                  if (null !== Db) {
                    Db.return = h.return;
                    T = Db;
                    break b;
                  }
                  T = h.return;
                }
              }
              H = e;
              ad();
              if (Sc && "function" === typeof Sc.onPostCommitFiberRoot) try {
                Sc.onPostCommitFiberRoot(Rc, a);
              } catch (lc) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c, W.transition = b;
          }
        }
        return false;
      }
      function ci(a, b, c) {
        b = Ef(c, b);
        b = If(a, b, 1);
        a = he(a, b, 1);
        b = O();
        null !== a && (Fc(a, 1, b), Kh(a, b));
      }
      function U(a, b, c) {
        if (3 === a.tag) ci(a, a, c);
        else for (; null !== b; ) {
          if (3 === b.tag) {
            ci(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Mf || !Mf.has(d))) {
              a = Ef(c, a);
              a = Lf(b, a, 1);
              b = he(b, a, 1);
              a = O();
              null !== b && (Fc(b, 1, a), Kh(b, a));
              break;
            }
          }
          b = b.return;
        }
      }
      function Of(a, b, c) {
        var d = a.pingCache;
        null !== d && d.delete(b);
        b = O();
        a.pingedLanes |= a.suspendedLanes & c;
        N === a && (Z & c) === c && (4 === R || 3 === R && (Z & 130023424) === Z && 500 > D() - bh ? Rh(a, 0) : xh |= c);
        Kh(a, b);
      }
      function di(a, b) {
        0 === b && (0 === (a.mode & 1) ? b = 1 : (b = xc, xc <<= 1, 0 === (xc & 130023424) && (xc = 4194304)));
        var c = O();
        a = ce(a, b);
        null !== a && (Fc(a, b, c), Kh(a, c));
      }
      function og(a) {
        var b = a.memoizedState, c = 0;
        null !== b && (c = b.retryLane);
        di(a, c);
      }
      function Yg(a, b) {
        var c = 0;
        switch (a.tag) {
          case 13:
            var d = a.stateNode;
            var e = a.memoizedState;
            null !== e && (c = e.retryLane);
            break;
          case 19:
            d = a.stateNode;
            break;
          default:
            throw Error(n(314));
        }
        null !== d && d.delete(b);
        di(a, c);
      }
      var ai;
      ai = function(a, b, c) {
        if (null !== a) if (a.memoizedProps !== b.pendingProps || z.current) G = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return G = false, sg(a, b, c);
          G = 0 !== (a.flags & 131072) ? true : false;
        }
        else G = false, F && 0 !== (b.flags & 1048576) && ld(b, ed, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            cg(a, b);
            a = b.pendingProps;
            var e = mc(b, x.current);
            Yd(b, c);
            e = He(null, b, d, a, e, c);
            var f = Me();
            b.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, A(d) ? (f = true, qc(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ee(b), e.updater = zf, b.stateNode = e, e._reactInternals = b, Df(b, d, a, c), b = dg(null, b, d, true, f, c)) : (b.tag = 0, F && f && md(b), P(null, b, e, c), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              cg(a, b);
              a = b.pendingProps;
              e = d._init;
              d = e(d._payload);
              b.type = d;
              e = b.tag = ei(d);
              a = xf(d, a);
              switch (e) {
                case 0:
                  b = Xf(null, b, d, a, c);
                  break a;
                case 1:
                  b = bg(null, b, d, a, c);
                  break a;
                case 11:
                  b = Sf(null, b, d, a, c);
                  break a;
                case 14:
                  b = Uf(null, b, d, xf(d.type, a), c);
                  break a;
              }
              throw Error(n(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf(d, e), Xf(a, b, d, e, c);
          case 1:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf(d, e), bg(a, b, d, e, c);
          case 3:
            a: {
              eg(b);
              if (null === a) throw Error(n(387));
              d = b.pendingProps;
              f = b.memoizedState;
              e = f.element;
              fe(a, b);
              ke(b, d, null, c);
              var g = b.memoizedState;
              d = g.element;
              if (Va && f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                e = Ef(Error(n(423)), b);
                b = fg(a, b, d, c, e);
                break a;
              } else if (d !== e) {
                e = Ef(Error(n(424)), b);
                b = fg(a, b, d, c, e);
                break a;
              } else for (Va && (pd = Pb(b.stateNode.containerInfo), od = b, F = true, rd = null, qd = false), c = Pd(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
              else {
                Ad();
                if (d === e) {
                  b = Tf(a, b, c);
                  break a;
                }
                P(a, b, d, c);
              }
              b = b.child;
            }
            return b;
          case 5:
            return ue(b), null === a && wd(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Na(d, e) ? g = null : null !== f && Na(d, f) && (b.flags |= 32), ag(a, b), P(a, b, g, c), b.child;
          case 6:
            return null === a && wd(b), null;
          case 13:
            return ig(a, b, c);
          case 4:
            return se(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Od(b, null, d, c) : P(a, b, d, c), b.child;
          case 11:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf(d, e), Sf(a, b, d, e, c);
          case 7:
            return P(a, b, b.pendingProps, c), b.child;
          case 8:
            return P(a, b, b.pendingProps.children, c), b.child;
          case 12:
            return P(a, b, b.pendingProps.children, c), b.child;
          case 10:
            a: {
              d = b.type._context;
              e = b.pendingProps;
              f = b.memoizedProps;
              g = e.value;
              Vd(b, d, g);
              if (null !== f) if (Vc(f.value, g)) {
                if (f.children === e.children && !z.current) {
                  b = Tf(a, b, c);
                  break a;
                }
              } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                var h = f.dependencies;
                if (null !== h) {
                  g = f.child;
                  for (var k = h.firstContext; null !== k; ) {
                    if (k.context === d) {
                      if (1 === f.tag) {
                        k = ge(-1, c & -c);
                        k.tag = 2;
                        var l = f.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m = l.pending;
                          null === m ? k.next = k : (k.next = m.next, m.next = k);
                          l.pending = k;
                        }
                      }
                      f.lanes |= c;
                      k = f.alternate;
                      null !== k && (k.lanes |= c);
                      Xd(f.return, c, b);
                      h.lanes |= c;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
                else if (18 === f.tag) {
                  g = f.return;
                  if (null === g) throw Error(n(341));
                  g.lanes |= c;
                  h = g.alternate;
                  null !== h && (h.lanes |= c);
                  Xd(g, c, b);
                  g = f.sibling;
                } else g = f.child;
                if (null !== g) g.return = f;
                else for (g = f; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f = g.sibling;
                  if (null !== f) {
                    f.return = g.return;
                    g = f;
                    break;
                  }
                  g = g.return;
                }
                f = g;
              }
              P(a, b, e.children, c);
              b = b.child;
            }
            return b;
          case 9:
            return e = b.type, d = b.pendingProps.children, Yd(b, c), e = Zd(e), d = d(e), b.flags |= 1, P(a, b, d, c), b.child;
          case 14:
            return d = b.type, e = xf(d, b.pendingProps), e = xf(d.type, e), Uf(a, b, d, e, c);
          case 15:
            return Wf(a, b, b.type, b.pendingProps, c);
          case 17:
            return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf(d, e), cg(a, b), b.tag = 1, A(d) ? (a = true, qc(b)) : a = false, Yd(b, c), Bf(b, d, e), Df(b, d, e, c), dg(null, b, d, true, a, c);
          case 19:
            return rg(a, b, c);
          case 22:
            return Yf(a, b, c);
        }
        throw Error(n(156, b.tag));
      };
      function Mh(a, b) {
        return Jc(a, b);
      }
      function fi(a, b, c, d) {
        this.tag = a;
        this.key = c;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function td(a, b, c, d) {
        return new fi(a, b, c, d);
      }
      function Vf(a) {
        a = a.prototype;
        return !(!a || !a.isReactComponent);
      }
      function ei(a) {
        if ("function" === typeof a) return Vf(a) ? 1 : 0;
        if (void 0 !== a && null !== a) {
          a = a.$$typeof;
          if (a === ma) return 11;
          if (a === pa) return 14;
        }
        return 2;
      }
      function Jd(a, b) {
        var c = a.alternate;
        null === c ? (c = td(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
        c.flags = a.flags & 14680064;
        c.childLanes = a.childLanes;
        c.lanes = a.lanes;
        c.child = a.child;
        c.memoizedProps = a.memoizedProps;
        c.memoizedState = a.memoizedState;
        c.updateQueue = a.updateQueue;
        b = a.dependencies;
        c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c.sibling = a.sibling;
        c.index = a.index;
        c.ref = a.ref;
        return c;
      }
      function Ld(a, b, c, d, e, f) {
        var g = 2;
        d = a;
        if ("function" === typeof a) Vf(a) && (g = 1);
        else if ("string" === typeof a) g = 5;
        else a: switch (a) {
          case ha:
            return Nd(c.children, e, f, b);
          case ia:
            g = 8;
            e |= 8;
            break;
          case ja:
            return a = td(12, c, b, e | 2), a.elementType = ja, a.lanes = f, a;
          case na:
            return a = td(13, c, b, e), a.elementType = na, a.lanes = f, a;
          case oa:
            return a = td(19, c, b, e), a.elementType = oa, a.lanes = f, a;
          case ra:
            return jg(c, e, f, b);
          default:
            if ("object" === typeof a && null !== a) switch (a.$$typeof) {
              case ka:
                g = 10;
                break a;
              case la:
                g = 9;
                break a;
              case ma:
                g = 11;
                break a;
              case pa:
                g = 14;
                break a;
              case qa:
                g = 16;
                d = null;
                break a;
            }
            throw Error(n(130, null == a ? a : typeof a, ""));
        }
        b = td(g, c, b, e);
        b.elementType = a;
        b.type = d;
        b.lanes = f;
        return b;
      }
      function Nd(a, b, c, d) {
        a = td(7, a, d, b);
        a.lanes = c;
        return a;
      }
      function jg(a, b, c, d) {
        a = td(22, a, d, b);
        a.elementType = ra;
        a.lanes = c;
        a.stateNode = { isHidden: false };
        return a;
      }
      function Kd(a, b, c) {
        a = td(6, a, null, b);
        a.lanes = c;
        return a;
      }
      function Md(a, b, c) {
        b = td(4, null !== a.children ? a.children : [], a.key, b);
        b.lanes = c;
        b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
        return b;
      }
      function gi(a, b, c, d, e) {
        this.tag = b;
        this.containerInfo = a;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = Ra;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = Ec(0);
        this.expirationTimes = Ec(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = Ec(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        Va && (this.mutableSourceEagerHydrationData = null);
      }
      function hi(a, b, c, d, e, f, g, h, k) {
        a = new gi(a, b, c, h, k);
        1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
        f = td(3, null, null, b);
        a.current = f;
        f.stateNode = a;
        f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        ee(f);
        return a;
      }
      function ii(a) {
        if (!a) return jc;
        a = a._reactInternals;
        a: {
          if (wa(a) !== a || 1 !== a.tag) throw Error(n(170));
          var b = a;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (A(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(n(171));
        }
        if (1 === a.tag) {
          var c = a.type;
          if (A(c)) return pc(a, c, b);
        }
        return b;
      }
      function ji(a) {
        var b = a._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a.render) throw Error(n(188));
          a = Object.keys(a).join(",");
          throw Error(n(268, a));
        }
        a = Aa(b);
        return null === a ? null : a.stateNode;
      }
      function ki(a, b) {
        a = a.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          var c = a.retryLane;
          a.retryLane = 0 !== c && c < b ? c : b;
        }
      }
      function li(a, b) {
        ki(a, b);
        (a = a.alternate) && ki(a, b);
      }
      function mi(a) {
        a = Aa(a);
        return null === a ? null : a.stateNode;
      }
      function ni() {
        return null;
      }
      exports2.attemptContinuousHydration = function(a) {
        if (13 === a.tag) {
          var b = ce(a, 134217728);
          if (null !== b) {
            var c = O();
            af(b, a, 134217728, c);
          }
          li(a, 134217728);
        }
      };
      exports2.attemptDiscreteHydration = function(a) {
        if (13 === a.tag) {
          var b = ce(a, 1);
          if (null !== b) {
            var c = O();
            af(b, a, 1, c);
          }
          li(a, 1);
        }
      };
      exports2.attemptHydrationAtCurrentPriority = function(a) {
        if (13 === a.tag) {
          var b = tf(a), c = ce(a, b);
          if (null !== c) {
            var d = O();
            af(c, a, b, d);
          }
          li(a, b);
        }
      };
      exports2.attemptSynchronousHydration = function(a) {
        switch (a.tag) {
          case 3:
            var b = a.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c = yc(b.pendingLanes);
              0 !== c && (Hc(b, c | 1), Kh(b, D()), 0 === (H & 6) && (Bh(), ad()));
            }
            break;
          case 13:
            Xh(function() {
              var b2 = ce(a, 1);
              if (null !== b2) {
                var c2 = O();
                af(b2, a, 1, c2);
              }
            }), li(a, 1);
        }
      };
      exports2.batchedUpdates = function(a, b) {
        var c = H;
        H |= 1;
        try {
          return a(b);
        } finally {
          H = c, 0 === H && (Bh(), Xc && ad());
        }
      };
      exports2.createComponentSelector = function(a) {
        return { $$typeof: hh, value: a };
      };
      exports2.createContainer = function(a, b, c, d, e, f, g) {
        return hi(a, b, false, null, c, d, e, f, g);
      };
      exports2.createHasPseudoClassSelector = function(a) {
        return { $$typeof: ih, value: a };
      };
      exports2.createHydrationContainer = function(a, b, c, d, e, f, g, h, k) {
        a = hi(c, d, true, a, e, f, g, h, k);
        a.context = ii(null);
        c = a.current;
        d = O();
        e = tf(c);
        f = ge(d, e);
        f.callback = void 0 !== b && null !== b ? b : null;
        he(c, f, e);
        a.current.lanes = e;
        Fc(a, e, d);
        Kh(a, d);
        return a;
      };
      exports2.createPortal = function(a, b, c) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: fa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
      };
      exports2.createRoleSelector = function(a) {
        return { $$typeof: jh, value: a };
      };
      exports2.createTestNameSelector = function(a) {
        return { $$typeof: kh, value: a };
      };
      exports2.createTextSelector = function(a) {
        return { $$typeof: lh, value: a };
      };
      exports2.deferredUpdates = function(a) {
        var b = C, c = W.transition;
        try {
          return W.transition = null, C = 16, a();
        } finally {
          C = b, W.transition = c;
        }
      };
      exports2.discreteUpdates = function(a, b, c, d, e) {
        var f = C, g = W.transition;
        try {
          return W.transition = null, C = 1, a(b, c, d, e);
        } finally {
          C = f, W.transition = g, 0 === H && Bh();
        }
      };
      exports2.findAllNodes = rh;
      exports2.findBoundingRects = function(a, b) {
        if (!bb) throw Error(n(363));
        b = rh(a, b);
        a = [];
        for (var c = 0; c < b.length; c++) a.push(db(b[c]));
        for (b = a.length - 1; 0 < b; b--) {
          c = a[b];
          for (var d = c.x, e = d + c.width, f = c.y, g = f + c.height, h = b - 1; 0 <= h; h--) if (b !== h) {
            var k = a[h], l = k.x, m = l + k.width, r = k.y, p = r + k.height;
            if (d >= l && f >= r && e <= m && g <= p) {
              a.splice(b, 1);
              break;
            } else if (!(d !== l || c.width !== k.width || p < f || r > g)) {
              r > f && (k.height += r - f, k.y = f);
              p < g && (k.height = g - r);
              a.splice(b, 1);
              break;
            } else if (!(f !== r || c.height !== k.height || m < d || l > e)) {
              l > d && (k.width += l - d, k.x = d);
              m < e && (k.width = e - l);
              a.splice(b, 1);
              break;
            }
          }
        }
        return a;
      };
      exports2.findHostInstance = ji;
      exports2.findHostInstanceWithNoPortals = function(a) {
        a = za(a);
        a = null !== a ? Ca(a) : null;
        return null === a ? null : a.stateNode;
      };
      exports2.findHostInstanceWithWarning = function(a) {
        return ji(a);
      };
      exports2.flushControlled = function(a) {
        var b = H;
        H |= 1;
        var c = W.transition, d = C;
        try {
          W.transition = null, C = 1, a();
        } finally {
          C = d, W.transition = c, H = b, 0 === H && (Bh(), ad());
        }
      };
      exports2.flushPassiveEffects = Oh;
      exports2.flushSync = Xh;
      exports2.focusWithin = function(a, b) {
        if (!bb) throw Error(n(363));
        a = nh(a);
        b = qh(a, b);
        b = Array.from(b);
        for (a = 0; a < b.length; ) {
          var c = b[a++];
          if (!fb(c)) {
            if (5 === c.tag && hb(c.stateNode)) return true;
            for (c = c.child; null !== c; ) b.push(c), c = c.sibling;
          }
        }
        return false;
      };
      exports2.getCurrentUpdatePriority = function() {
        return C;
      };
      exports2.getFindAllNodesFailureDescription = function(a, b) {
        if (!bb) throw Error(n(363));
        var c = 0, d = [];
        a = [nh(a), 0];
        for (var e = 0; e < a.length; ) {
          var f = a[e++], g = a[e++], h = b[g];
          if (5 !== f.tag || !fb(f)) {
            if (oh(f, h) && (d.push(ph(h)), g++, g > c && (c = g)), g < b.length) for (f = f.child; null !== f; ) a.push(f, g), f = f.sibling;
          }
        }
        if (c < b.length) {
          for (a = []; c < b.length; c++) a.push(ph(b[c]));
          return "findAllNodes was able to match part of the selector:\n  " + (d.join(" > ") + "\n\nNo matching component was found for:\n  ") + a.join(" > ");
        }
        return null;
      };
      exports2.getPublicRootInstance = function(a) {
        a = a.current;
        if (!a.child) return null;
        switch (a.child.tag) {
          case 5:
            return Ea(a.child.stateNode);
          default:
            return a.child.stateNode;
        }
      };
      exports2.injectIntoDevTools = function(a) {
        a = { bundleType: a.bundleType, version: a.version, rendererPackageName: a.rendererPackageName, rendererConfig: a.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: da.ReactCurrentDispatcher, findHostInstanceByFiber: mi, findFiberByHostInstance: a.findFiberByHostInstance || ni, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1" };
        if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) a = false;
        else {
          var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (b.isDisabled || !b.supportsFiber) a = true;
          else {
            try {
              Rc = b.inject(a), Sc = b;
            } catch (c) {
            }
            a = b.checkDCE ? true : false;
          }
        }
        return a;
      };
      exports2.isAlreadyRendering = function() {
        return false;
      };
      exports2.observeVisibleRects = function(a, b, c, d) {
        if (!bb) throw Error(n(363));
        a = rh(a, b);
        var e = ib(a, c, d).disconnect;
        return { disconnect: function() {
          e();
        } };
      };
      exports2.registerMutableSourceForHydration = function(a, b) {
        var c = b._getVersion;
        c = c(b._source);
        null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
      };
      exports2.runWithPriority = function(a, b) {
        var c = C;
        try {
          return C = a, b();
        } finally {
          C = c;
        }
      };
      exports2.shouldError = function() {
        return null;
      };
      exports2.shouldSuspend = function() {
        return false;
      };
      exports2.updateContainer = function(a, b, c, d) {
        var e = b.current, f = O(), g = tf(e);
        c = ii(c);
        null === b.context ? b.context = c : b.pendingContext = c;
        b = ge(f, g);
        b.payload = { element: a };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a = he(e, b, g);
        null !== a && (af(a, e, g, f), ie(a, e, g));
        return g;
      };
      return exports2;
    };
  }
});

// node_modules/.pnpm/react-reconciler@0.29.2_react@18.3.1/node_modules/react-reconciler/index.js
var require_react_reconciler = __commonJS({
  "node_modules/.pnpm/react-reconciler@0.29.2_react@18.3.1/node_modules/react-reconciler/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_reconciler_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
  "node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
    "use strict";
    var f = require_react();
    var k = /* @__PURE__ */ Symbol.for("react.element");
    var l = /* @__PURE__ */ Symbol.for("react.fragment");
    var m = Object.prototype.hasOwnProperty;
    var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var p = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    exports.Fragment = l;
    exports.jsx = q;
    exports.jsxs = q;
  }
});

// node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_jsx_runtime_production_min();
    } else {
      module.exports = null;
    }
  }
});

// src/hacbrewpack.js
var require_hacbrewpack = __commonJS({
  "src/hacbrewpack.js"(exports, module) {
    "use strict";
    var hacbrewpack = (() => {
      var _scriptName = typeof document != "undefined" ? document.currentScript?.src : void 0;
      return function(moduleArg = {}) {
        var moduleRtn;
        var Module = moduleArg;
        var readyPromiseResolve, readyPromiseReject;
        var readyPromise = new Promise((resolve, reject) => {
          readyPromiseResolve = resolve;
          readyPromiseReject = reject;
        });
        [
          "_memory",
          "___indirect_function_table",
          "_main",
          "onRuntimeInitialized"
        ].forEach((prop) => {
          if (!Object.getOwnPropertyDescriptor(readyPromise, prop)) {
            Object.defineProperty(readyPromise, prop, {
              get: () => abort(
                "You are getting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
              ),
              set: () => abort(
                "You are setting " + prop + " on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js"
              )
            });
          }
        });
        var ENVIRONMENT_IS_WEB = true;
        var ENVIRONMENT_IS_WORKER = false;
        var ENVIRONMENT_IS_NODE = false;
        var ENVIRONMENT_IS_SHELL = false;
        var moduleOverrides = Object.assign({}, Module);
        var arguments_ = [];
        var thisProgram = "./this.program";
        var quit_ = (status, toThrow) => {
          throw toThrow;
        };
        var scriptDirectory = "";
        function locateFile(path) {
          if (Module["locateFile"]) {
            return Module["locateFile"](path, scriptDirectory);
          }
          return scriptDirectory + path;
        }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_SHELL) {
          if (typeof process == "object" && typeof __require === "function" || typeof window == "object" || typeof importScripts == "function")
            throw new Error(
              "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)"
            );
        } else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
          if (ENVIRONMENT_IS_WORKER) {
            scriptDirectory = self.location.href;
          } else if (typeof document != "undefined" && document.currentScript) {
            scriptDirectory = document.currentScript.src;
          }
          if (_scriptName) {
            scriptDirectory = _scriptName;
          }
          if (scriptDirectory.startsWith("blob:")) {
            scriptDirectory = "";
          } else {
            scriptDirectory = scriptDirectory.substr(
              0,
              scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1
            );
          }
          if (!(typeof window == "object" || typeof importScripts == "function"))
            throw new Error(
              "not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)"
            );
          {
            readAsync = (url) => {
              assert(!isFileURI(url), "readAsync does not work with file:// URLs");
              return fetch(url, { credentials: "same-origin" }).then((response) => {
                if (response.ok) {
                  return response.arrayBuffer();
                }
                return Promise.reject(
                  new Error(response.status + " : " + response.url)
                );
              });
            };
          }
        } else {
          throw new Error("environment detection error");
        }
        var out = Module["print"] || console.log.bind(console);
        var err = Module["printErr"] || console.error.bind(console);
        Object.assign(Module, moduleOverrides);
        moduleOverrides = null;
        checkIncomingModuleAPI();
        if (Module["arguments"]) arguments_ = Module["arguments"];
        legacyModuleProp("arguments", "arguments_");
        if (Module["thisProgram"]) thisProgram = Module["thisProgram"];
        legacyModuleProp("thisProgram", "thisProgram");
        assert(
          typeof Module["memoryInitializerPrefixURL"] == "undefined",
          "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"
        );
        assert(
          typeof Module["pthreadMainPrefixURL"] == "undefined",
          "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"
        );
        assert(
          typeof Module["cdInitializerPrefixURL"] == "undefined",
          "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"
        );
        assert(
          typeof Module["filePackagePrefixURL"] == "undefined",
          "Module.filePackagePrefixURL option was removed, use Module.locateFile instead"
        );
        assert(
          typeof Module["read"] == "undefined",
          "Module.read option was removed"
        );
        assert(
          typeof Module["readAsync"] == "undefined",
          "Module.readAsync option was removed (modify readAsync in JS)"
        );
        assert(
          typeof Module["readBinary"] == "undefined",
          "Module.readBinary option was removed (modify readBinary in JS)"
        );
        assert(
          typeof Module["setWindowTitle"] == "undefined",
          "Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"
        );
        assert(
          typeof Module["TOTAL_MEMORY"] == "undefined",
          "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"
        );
        legacyModuleProp("asm", "wasmExports");
        legacyModuleProp("readAsync", "readAsync");
        legacyModuleProp("readBinary", "readBinary");
        legacyModuleProp("setWindowTitle", "setWindowTitle");
        var IDBFS = "IDBFS is no longer included by default; build with -lidbfs.js";
        var PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js";
        var WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js";
        var FETCHFS = "FETCHFS is no longer included by default; build with -lfetchfs.js";
        var ICASEFS = "ICASEFS is no longer included by default; build with -licasefs.js";
        var JSFILEFS = "JSFILEFS is no longer included by default; build with -ljsfilefs.js";
        var OPFS = "OPFS is no longer included by default; build with -lopfs.js";
        var NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js";
        assert(
          !ENVIRONMENT_IS_WORKER,
          "worker environment detected but not enabled at build time.  Add `worker` to `-sENVIRONMENT` to enable."
        );
        assert(
          !ENVIRONMENT_IS_NODE,
          "node environment detected but not enabled at build time.  Add `node` to `-sENVIRONMENT` to enable."
        );
        assert(
          !ENVIRONMENT_IS_SHELL,
          "shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable."
        );
        var wasmBinary = Module["wasmBinary"];
        legacyModuleProp("wasmBinary", "wasmBinary");
        if (typeof WebAssembly != "object") {
          err("no native wasm support detected");
        }
        var wasmMemory;
        var ABORT = false;
        var EXITSTATUS;
        function assert(condition, text) {
          if (!condition) {
            abort("Assertion failed" + (text ? ": " + text : ""));
          }
        }
        function _malloc() {
          abort(
            "malloc() called but not included in the build - add `_malloc` to EXPORTED_FUNCTIONS"
          );
        }
        function _free() {
          abort(
            "free() called but not included in the build - add `_free` to EXPORTED_FUNCTIONS"
          );
        }
        var HEAP, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
        function updateMemoryViews() {
          var b = wasmMemory.buffer;
          Module["HEAP8"] = HEAP8 = new Int8Array(b);
          Module["HEAP16"] = HEAP16 = new Int16Array(b);
          Module["HEAPU8"] = HEAPU8 = new Uint8Array(b);
          Module["HEAPU16"] = HEAPU16 = new Uint16Array(b);
          Module["HEAP32"] = HEAP32 = new Int32Array(b);
          Module["HEAPU32"] = HEAPU32 = new Uint32Array(b);
          Module["HEAPF32"] = HEAPF32 = new Float32Array(b);
          Module["HEAPF64"] = HEAPF64 = new Float64Array(b);
        }
        assert(
          !Module["STACK_SIZE"],
          "STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"
        );
        assert(
          typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != void 0 && Int32Array.prototype.set != void 0,
          "JS engine does not provide full typed array support"
        );
        assert(
          !Module["wasmMemory"],
          "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"
        );
        assert(
          !Module["INITIAL_MEMORY"],
          "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"
        );
        function writeStackCookie() {
          var max = _emscripten_stack_get_end();
          assert((max & 3) == 0);
          if (max == 0) {
            max += 4;
          }
          HEAPU32[max >> 2] = 34821223;
          HEAPU32[max + 4 >> 2] = 2310721022;
          HEAPU32[0 >> 2] = 1668509029;
        }
        function checkStackCookie() {
          if (ABORT) return;
          var max = _emscripten_stack_get_end();
          if (max == 0) {
            max += 4;
          }
          var cookie1 = HEAPU32[max >> 2];
          var cookie2 = HEAPU32[max + 4 >> 2];
          if (cookie1 != 34821223 || cookie2 != 2310721022) {
            abort(
              `Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`
            );
          }
          if (HEAPU32[0 >> 2] != 1668509029) {
            abort(
              "Runtime error: The application has corrupted its heap memory area (address zero)!"
            );
          }
        }
        var __ATPRERUN__ = [];
        var __ATINIT__ = [];
        var __ATMAIN__ = [];
        var __ATEXIT__ = [];
        var __ATPOSTRUN__ = [];
        var runtimeInitialized = false;
        function preRun() {
          var preRuns = Module["preRun"];
          if (preRuns) {
            if (typeof preRuns == "function") preRuns = [preRuns];
            preRuns.forEach(addOnPreRun);
          }
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          assert(!runtimeInitialized);
          runtimeInitialized = true;
          checkStackCookie();
          if (!Module["noFSInit"] && !FS.initialized) FS.init();
          FS.ignorePermissions = false;
          TTY.init();
          callRuntimeCallbacks(__ATINIT__);
        }
        function preMain() {
          checkStackCookie();
          callRuntimeCallbacks(__ATMAIN__);
        }
        function postRun() {
          checkStackCookie();
          var postRuns = Module["postRun"];
          if (postRuns) {
            if (typeof postRuns == "function") postRuns = [postRuns];
            postRuns.forEach(addOnPostRun);
          }
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(cb) {
          __ATPRERUN__.unshift(cb);
        }
        function addOnInit(cb) {
          __ATINIT__.unshift(cb);
        }
        function addOnPreMain(cb) {
          __ATMAIN__.unshift(cb);
        }
        function addOnExit(cb) {
        }
        function addOnPostRun(cb) {
          __ATPOSTRUN__.unshift(cb);
        }
        assert(
          Math.imul,
          "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
        );
        assert(
          Math.fround,
          "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
        );
        assert(
          Math.clz32,
          "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
        );
        assert(
          Math.trunc,
          "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill"
        );
        var runDependencies = 0;
        var runDependencyWatcher = null;
        var dependenciesFulfilled = null;
        var runDependencyTracking = {};
        function getUniqueRunDependency(id) {
          var orig = id;
          while (1) {
            if (!runDependencyTracking[id]) return id;
            id = orig + Math.random();
          }
        }
        function addRunDependency(id) {
          runDependencies++;
          Module["monitorRunDependencies"]?.(runDependencies);
          if (id) {
            assert(!runDependencyTracking[id]);
            runDependencyTracking[id] = 1;
            if (runDependencyWatcher === null && typeof setInterval != "undefined") {
              runDependencyWatcher = setInterval(() => {
                if (ABORT) {
                  clearInterval(runDependencyWatcher);
                  runDependencyWatcher = null;
                  return;
                }
                var shown = false;
                for (var dep in runDependencyTracking) {
                  if (!shown) {
                    shown = true;
                    err("still waiting on run dependencies:");
                  }
                  err(`dependency: ${dep}`);
                }
                if (shown) {
                  err("(end of list)");
                }
              }, 1e4);
            }
          } else {
            err("warning: run dependency added without ID");
          }
        }
        function removeRunDependency(id) {
          runDependencies--;
          Module["monitorRunDependencies"]?.(runDependencies);
          if (id) {
            assert(runDependencyTracking[id]);
            delete runDependencyTracking[id];
          } else {
            err("warning: run dependency removed without ID");
          }
          if (runDependencies == 0) {
            if (runDependencyWatcher !== null) {
              clearInterval(runDependencyWatcher);
              runDependencyWatcher = null;
            }
            if (dependenciesFulfilled) {
              var callback = dependenciesFulfilled;
              dependenciesFulfilled = null;
              callback();
            }
          }
        }
        function abort(what) {
          Module["onAbort"]?.(what);
          what = "Aborted(" + what + ")";
          err(what);
          ABORT = true;
          var e = new WebAssembly.RuntimeError(what);
          readyPromiseReject(e);
          throw e;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,";
        var isDataURI = (filename) => filename.startsWith(dataURIPrefix);
        var isFileURI = (filename) => filename.startsWith("file://");
        function createExportWrapper(name, nargs) {
          return (...args) => {
            assert(
              runtimeInitialized,
              `native function \`${name}\` called before runtime initialization`
            );
            var f = wasmExports[name];
            assert(f, `exported native function \`${name}\` not found`);
            assert(
              args.length <= nargs,
              `native function \`${name}\` called with ${args.length} args but expects ${nargs}`
            );
            return f(...args);
          };
        }
        function findWasmBinary() {
          var f = "hacbrewpack.wasm";
          if (!isDataURI(f)) {
            return locateFile(f);
          }
          return f;
        }
        var wasmBinaryFile;
        function getBinarySync(file) {
          if (file == wasmBinaryFile && wasmBinary) {
            return new Uint8Array(wasmBinary);
          }
          if (readBinary) {
            return readBinary(file);
          }
          throw "both async and sync fetching of the wasm failed";
        }
        function getBinaryPromise(binaryFile) {
          if (!wasmBinary) {
            return readAsync(binaryFile).then(
              (response) => new Uint8Array(
                /** @type{!ArrayBuffer} */
                response
              ),
              // Fall back to getBinarySync if readAsync fails
              () => getBinarySync(binaryFile)
            );
          }
          return Promise.resolve().then(() => getBinarySync(binaryFile));
        }
        function instantiateArrayBuffer(binaryFile, imports, receiver) {
          return getBinaryPromise(binaryFile).then((binary) => {
            return WebAssembly.instantiate(binary, imports);
          }).then(receiver, (reason) => {
            err(`failed to asynchronously prepare wasm: ${reason}`);
            if (isFileURI(wasmBinaryFile)) {
              err(
                `warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`
              );
            }
            abort(reason);
          });
        }
        function instantiateAsync(binary, binaryFile, imports, callback) {
          if (!binary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(binaryFile) && typeof fetch == "function") {
            return fetch(binaryFile, { credentials: "same-origin" }).then(
              (response) => {
                var result = WebAssembly.instantiateStreaming(response, imports);
                return result.then(callback, function(reason) {
                  err(`wasm streaming compile failed: ${reason}`);
                  err("falling back to ArrayBuffer instantiation");
                  return instantiateArrayBuffer(binaryFile, imports, callback);
                });
              }
            );
          }
          return instantiateArrayBuffer(binaryFile, imports, callback);
        }
        function getWasmImports() {
          return {
            env: wasmImports,
            wasi_snapshot_preview1: wasmImports
          };
        }
        function createWasm() {
          var info = getWasmImports();
          function receiveInstance(instance, module2) {
            wasmExports = instance.exports;
            wasmMemory = wasmExports["memory"];
            assert(wasmMemory, "memory not found in wasm exports");
            updateMemoryViews();
            wasmTable = wasmExports["__indirect_function_table"];
            assert(wasmTable, "table not found in wasm exports");
            addOnInit(wasmExports["__wasm_call_ctors"]);
            removeRunDependency("wasm-instantiate");
            return wasmExports;
          }
          addRunDependency("wasm-instantiate");
          var trueModule = Module;
          function receiveInstantiationResult(result) {
            assert(
              Module === trueModule,
              "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"
            );
            trueModule = null;
            receiveInstance(result["instance"]);
          }
          if (Module["instantiateWasm"]) {
            try {
              return Module["instantiateWasm"](info, receiveInstance);
            } catch (e) {
              err(`Module.instantiateWasm callback failed with error: ${e}`);
              readyPromiseReject(e);
            }
          }
          wasmBinaryFile ??= findWasmBinary();
          instantiateAsync(
            wasmBinary,
            wasmBinaryFile,
            info,
            receiveInstantiationResult
          ).catch(readyPromiseReject);
          return {};
        }
        var tempDouble;
        var tempI64;
        (() => {
          var h16 = new Int16Array(1);
          var h8 = new Int8Array(h16.buffer);
          h16[0] = 25459;
          if (h8[0] !== 115 || h8[1] !== 99)
            throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
        })();
        if (Module["ENVIRONMENT"]) {
          throw new Error(
            "Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"
          );
        }
        function legacyModuleProp(prop, newName, incoming = true) {
          if (!Object.getOwnPropertyDescriptor(Module, prop)) {
            Object.defineProperty(Module, prop, {
              configurable: true,
              get() {
                let extra = incoming ? " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)" : "";
                abort(
                  `\`Module.${prop}\` has been replaced by \`${newName}\`` + extra
                );
              }
            });
          }
        }
        function ignoredModuleProp(prop) {
          if (Object.getOwnPropertyDescriptor(Module, prop)) {
            abort(
              `\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`
            );
          }
        }
        function isExportedByForceFilesystem(name) {
          return name === "FS_createPath" || name === "FS_createDataFile" || name === "FS_createPreloadedFile" || name === "FS_unlink" || name === "addRunDependency" || // The old FS has some functionality that WasmFS lacks.
          name === "FS_createLazyFile" || name === "FS_createDevice" || name === "removeRunDependency";
        }
        function hookGlobalSymbolAccess(sym, func) {
        }
        function missingGlobal(sym, msg) {
          hookGlobalSymbolAccess(sym, () => {
            warnOnce(`\`${sym}\` is not longer defined by emscripten. ${msg}`);
          });
        }
        missingGlobal("buffer", "Please use HEAP8.buffer or wasmMemory.buffer");
        missingGlobal("asm", "Please use wasmExports instead");
        function missingLibrarySymbol(sym) {
          hookGlobalSymbolAccess(sym, () => {
            var msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
            var librarySymbol = sym;
            if (!librarySymbol.startsWith("_")) {
              librarySymbol = "$" + sym;
            }
            msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
            if (isExportedByForceFilesystem(sym)) {
              msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
            }
            warnOnce(msg);
          });
          unexportedRuntimeSymbol(sym);
        }
        function unexportedRuntimeSymbol(sym) {
          if (!Object.getOwnPropertyDescriptor(Module, sym)) {
            Object.defineProperty(Module, sym, {
              configurable: true,
              get() {
                var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
                if (isExportedByForceFilesystem(sym)) {
                  msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
                }
                abort(msg);
              }
            });
          }
        }
        function dbg(...args) {
          console.warn(...args);
        }
        function ExitStatus(status) {
          this.name = "ExitStatus";
          this.message = `Program terminated with exit(${status})`;
          this.status = status;
        }
        var callRuntimeCallbacks = (callbacks) => {
          callbacks.forEach((f) => f(Module));
        };
        function getValue(ptr, type = "i8") {
          if (type.endsWith("*")) type = "*";
          switch (type) {
            case "i1":
              return HEAP8[ptr];
            case "i8":
              return HEAP8[ptr];
            case "i16":
              return HEAP16[ptr >> 1];
            case "i32":
              return HEAP32[ptr >> 2];
            case "i64":
              abort("to do getValue(i64) use WASM_BIGINT");
            case "float":
              return HEAPF32[ptr >> 2];
            case "double":
              return HEAPF64[ptr >> 3];
            case "*":
              return HEAPU32[ptr >> 2];
            default:
              abort(`invalid type for getValue: ${type}`);
          }
        }
        var noExitRuntime = Module["noExitRuntime"] || true;
        var ptrToString = (ptr) => {
          assert(typeof ptr === "number");
          ptr >>>= 0;
          return "0x" + ptr.toString(16).padStart(8, "0");
        };
        function setValue(ptr, value, type = "i8") {
          if (type.endsWith("*")) type = "*";
          switch (type) {
            case "i1":
              HEAP8[ptr] = value;
              break;
            case "i8":
              HEAP8[ptr] = value;
              break;
            case "i16":
              HEAP16[ptr >> 1] = value;
              break;
            case "i32":
              HEAP32[ptr >> 2] = value;
              break;
            case "i64":
              abort("to do setValue(i64) use WASM_BIGINT");
            case "float":
              HEAPF32[ptr >> 2] = value;
              break;
            case "double":
              HEAPF64[ptr >> 3] = value;
              break;
            case "*":
              HEAPU32[ptr >> 2] = value;
              break;
            default:
              abort(`invalid type for setValue: ${type}`);
          }
        }
        var stackRestore = (val) => __emscripten_stack_restore(val);
        var stackSave = () => _emscripten_stack_get_current();
        var warnOnce = (text) => {
          warnOnce.shown ||= {};
          if (!warnOnce.shown[text]) {
            warnOnce.shown[text] = 1;
            err(text);
          }
        };
        var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder() : void 0;
        var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead = NaN) => {
          var endIdx = idx + maxBytesToRead;
          var endPtr = idx;
          while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
          if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
            return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
          }
          var str = "";
          while (idx < endPtr) {
            var u0 = heapOrArray[idx++];
            if (!(u0 & 128)) {
              str += String.fromCharCode(u0);
              continue;
            }
            var u1 = heapOrArray[idx++] & 63;
            if ((u0 & 224) == 192) {
              str += String.fromCharCode((u0 & 31) << 6 | u1);
              continue;
            }
            var u2 = heapOrArray[idx++] & 63;
            if ((u0 & 240) == 224) {
              u0 = (u0 & 15) << 12 | u1 << 6 | u2;
            } else {
              if ((u0 & 248) != 240)
                warnOnce(
                  "Invalid UTF-8 leading byte " + ptrToString(u0) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!"
                );
              u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
            }
            if (u0 < 65536) {
              str += String.fromCharCode(u0);
            } else {
              var ch = u0 - 65536;
              str += String.fromCharCode(
                55296 | ch >> 10,
                56320 | ch & 1023
              );
            }
          }
          return str;
        };
        var UTF8ToString = (ptr, maxBytesToRead) => {
          assert(
            typeof ptr == "number",
            `UTF8ToString expects a number (got ${typeof ptr})`
          );
          return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
        };
        var ___assert_fail = (condition, filename, line, func) => {
          abort(
            `Assertion failed: ${UTF8ToString(condition)}, at: ` + [
              filename ? UTF8ToString(filename) : "unknown filename",
              line,
              func ? UTF8ToString(func) : "unknown function"
            ]
          );
        };
        var wasmTableMirror = [];
        var wasmTable;
        var getWasmTableEntry = (funcPtr) => {
          var func = wasmTableMirror[funcPtr];
          if (!func) {
            if (funcPtr >= wasmTableMirror.length)
              wasmTableMirror.length = funcPtr + 1;
            wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
          }
          assert(
            wasmTable.get(funcPtr) == func,
            "JavaScript-side Wasm function table mirror is out of date!"
          );
          return func;
        };
        var ___call_sighandler = (fp, sig) => getWasmTableEntry(fp)(sig);
        function syscallGetVarargI() {
          assert(SYSCALLS.varargs != void 0);
          var ret = HEAP32[+SYSCALLS.varargs >> 2];
          SYSCALLS.varargs += 4;
          return ret;
        }
        var syscallGetVarargP = syscallGetVarargI;
        var PATH = {
          isAbs: (path) => path.charAt(0) === "/",
          splitPath: (filename) => {
            var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
            return splitPathRe.exec(filename).slice(1);
          },
          normalizeArray: (parts, allowAboveRoot) => {
            var up = 0;
            for (var i = parts.length - 1; i >= 0; i--) {
              var last = parts[i];
              if (last === ".") {
                parts.splice(i, 1);
              } else if (last === "..") {
                parts.splice(i, 1);
                up++;
              } else if (up) {
                parts.splice(i, 1);
                up--;
              }
            }
            if (allowAboveRoot) {
              for (; up; up--) {
                parts.unshift("..");
              }
            }
            return parts;
          },
          normalize: (path) => {
            var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
            path = PATH.normalizeArray(
              path.split("/").filter((p) => !!p),
              !isAbsolute
            ).join("/");
            if (!path && !isAbsolute) {
              path = ".";
            }
            if (path && trailingSlash) {
              path += "/";
            }
            return (isAbsolute ? "/" : "") + path;
          },
          dirname: (path) => {
            var result = PATH.splitPath(path), root = result[0], dir = result[1];
            if (!root && !dir) {
              return ".";
            }
            if (dir) {
              dir = dir.substr(0, dir.length - 1);
            }
            return root + dir;
          },
          basename: (path) => {
            if (path === "/") return "/";
            path = PATH.normalize(path);
            path = path.replace(/\/$/, "");
            var lastSlash = path.lastIndexOf("/");
            if (lastSlash === -1) return path;
            return path.substr(lastSlash + 1);
          },
          join: (...paths) => PATH.normalize(paths.join("/")),
          join2: (l, r) => PATH.normalize(l + "/" + r)
        };
        var initRandomFill = () => {
          if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
            return (view2) => crypto.getRandomValues(view2);
          } else
            abort(
              "no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };"
            );
        };
        var randomFill = (view2) => {
          return (randomFill = initRandomFill())(view2);
        };
        var PATH_FS = {
          resolve: (...args) => {
            var resolvedPath = "", resolvedAbsolute = false;
            for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
              var path = i >= 0 ? args[i] : FS.cwd();
              if (typeof path != "string") {
                throw new TypeError("Arguments to path.resolve must be strings");
              } else if (!path) {
                return "";
              }
              resolvedPath = path + "/" + resolvedPath;
              resolvedAbsolute = PATH.isAbs(path);
            }
            resolvedPath = PATH.normalizeArray(
              resolvedPath.split("/").filter((p) => !!p),
              !resolvedAbsolute
            ).join("/");
            return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
          },
          relative: (from, to) => {
            from = PATH_FS.resolve(from).substr(1);
            to = PATH_FS.resolve(to).substr(1);
            function trim(arr) {
              var start = 0;
              for (; start < arr.length; start++) {
                if (arr[start] !== "") break;
              }
              var end = arr.length - 1;
              for (; end >= 0; end--) {
                if (arr[end] !== "") break;
              }
              if (start > end) return [];
              return arr.slice(start, end - start + 1);
            }
            var fromParts = trim(from.split("/"));
            var toParts = trim(to.split("/"));
            var length = Math.min(fromParts.length, toParts.length);
            var samePartsLength = length;
            for (var i = 0; i < length; i++) {
              if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break;
              }
            }
            var outputParts = [];
            for (var i = samePartsLength; i < fromParts.length; i++) {
              outputParts.push("..");
            }
            outputParts = outputParts.concat(toParts.slice(samePartsLength));
            return outputParts.join("/");
          }
        };
        var FS_stdin_getChar_buffer = [];
        var lengthBytesUTF8 = (str) => {
          var len = 0;
          for (var i = 0; i < str.length; ++i) {
            var c = str.charCodeAt(i);
            if (c <= 127) {
              len++;
            } else if (c <= 2047) {
              len += 2;
            } else if (c >= 55296 && c <= 57343) {
              len += 4;
              ++i;
            } else {
              len += 3;
            }
          }
          return len;
        };
        var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
          assert(
            typeof str === "string",
            `stringToUTF8Array expects a string (got ${typeof str})`
          );
          if (!(maxBytesToWrite > 0)) return 0;
          var startIdx = outIdx;
          var endIdx = outIdx + maxBytesToWrite - 1;
          for (var i = 0; i < str.length; ++i) {
            var u = str.charCodeAt(i);
            if (u >= 55296 && u <= 57343) {
              var u1 = str.charCodeAt(++i);
              u = 65536 + ((u & 1023) << 10) | u1 & 1023;
            }
            if (u <= 127) {
              if (outIdx >= endIdx) break;
              heap[outIdx++] = u;
            } else if (u <= 2047) {
              if (outIdx + 1 >= endIdx) break;
              heap[outIdx++] = 192 | u >> 6;
              heap[outIdx++] = 128 | u & 63;
            } else if (u <= 65535) {
              if (outIdx + 2 >= endIdx) break;
              heap[outIdx++] = 224 | u >> 12;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            } else {
              if (outIdx + 3 >= endIdx) break;
              if (u > 1114111)
                warnOnce(
                  "Invalid Unicode code point " + ptrToString(u) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."
                );
              heap[outIdx++] = 240 | u >> 18;
              heap[outIdx++] = 128 | u >> 12 & 63;
              heap[outIdx++] = 128 | u >> 6 & 63;
              heap[outIdx++] = 128 | u & 63;
            }
          }
          heap[outIdx] = 0;
          return outIdx - startIdx;
        };
        function intArrayFromString(stringy, dontAddNull, length) {
          var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
          var u8array = new Array(len);
          var numBytesWritten = stringToUTF8Array(
            stringy,
            u8array,
            0,
            u8array.length
          );
          if (dontAddNull) u8array.length = numBytesWritten;
          return u8array;
        }
        var FS_stdin_getChar = () => {
          if (!FS_stdin_getChar_buffer.length) {
            var result = null;
            if (typeof window != "undefined" && typeof window.prompt == "function") {
              result = window.prompt("Input: ");
              if (result !== null) {
                result += "\n";
              }
            } else {
            }
            if (!result) {
              return null;
            }
            FS_stdin_getChar_buffer = intArrayFromString(result, true);
          }
          return FS_stdin_getChar_buffer.shift();
        };
        var TTY = {
          ttys: [],
          init() {
          },
          shutdown() {
          },
          register(dev, ops) {
            TTY.ttys[dev] = { input: [], output: [], ops };
            FS.registerDevice(dev, TTY.stream_ops);
          },
          stream_ops: {
            open(stream) {
              var tty = TTY.ttys[stream.node.rdev];
              if (!tty) {
                throw new FS.ErrnoError(43);
              }
              stream.tty = tty;
              stream.seekable = false;
            },
            close(stream) {
              stream.tty.ops.fsync(stream.tty);
            },
            fsync(stream) {
              stream.tty.ops.fsync(stream.tty);
            },
            read(stream, buffer, offset, length, pos) {
              if (!stream.tty || !stream.tty.ops.get_char) {
                throw new FS.ErrnoError(60);
              }
              var bytesRead = 0;
              for (var i = 0; i < length; i++) {
                var result;
                try {
                  result = stream.tty.ops.get_char(stream.tty);
                } catch (e) {
                  throw new FS.ErrnoError(29);
                }
                if (result === void 0 && bytesRead === 0) {
                  throw new FS.ErrnoError(6);
                }
                if (result === null || result === void 0) break;
                bytesRead++;
                buffer[offset + i] = result;
              }
              if (bytesRead) {
                stream.node.timestamp = Date.now();
              }
              return bytesRead;
            },
            write(stream, buffer, offset, length, pos) {
              if (!stream.tty || !stream.tty.ops.put_char) {
                throw new FS.ErrnoError(60);
              }
              try {
                for (var i = 0; i < length; i++) {
                  stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
                }
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (length) {
                stream.node.timestamp = Date.now();
              }
              return i;
            }
          },
          default_tty_ops: {
            get_char(tty) {
              return FS_stdin_getChar();
            },
            put_char(tty, val) {
              if (val === null || val === 10) {
                out(UTF8ArrayToString(tty.output));
                tty.output = [];
              } else {
                if (val != 0) tty.output.push(val);
              }
            },
            fsync(tty) {
              if (tty.output && tty.output.length > 0) {
                out(UTF8ArrayToString(tty.output));
                tty.output = [];
              }
            },
            ioctl_tcgets(tty) {
              return {
                c_iflag: 25856,
                c_oflag: 5,
                c_cflag: 191,
                c_lflag: 35387,
                c_cc: [
                  3,
                  28,
                  127,
                  21,
                  4,
                  0,
                  1,
                  0,
                  17,
                  19,
                  26,
                  0,
                  18,
                  15,
                  23,
                  22,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              };
            },
            ioctl_tcsets(tty, optional_actions, data) {
              return 0;
            },
            ioctl_tiocgwinsz(tty) {
              return [24, 80];
            }
          },
          default_tty1_ops: {
            put_char(tty, val) {
              if (val === null || val === 10) {
                err(UTF8ArrayToString(tty.output));
                tty.output = [];
              } else {
                if (val != 0) tty.output.push(val);
              }
            },
            fsync(tty) {
              if (tty.output && tty.output.length > 0) {
                err(UTF8ArrayToString(tty.output));
                tty.output = [];
              }
            }
          }
        };
        var zeroMemory = (address, size) => {
          HEAPU8.fill(0, address, address + size);
        };
        var alignMemory = (size, alignment) => {
          assert(alignment, "alignment argument is required");
          return Math.ceil(size / alignment) * alignment;
        };
        var mmapAlloc = (size) => {
          abort(
            "internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported"
          );
        };
        var MEMFS = {
          ops_table: null,
          mount(mount) {
            return MEMFS.createNode(null, "/", 16384 | 511, 0);
          },
          createNode(parent, name, mode, dev) {
            if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
              throw new FS.ErrnoError(63);
            }
            MEMFS.ops_table ||= {
              dir: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr,
                  lookup: MEMFS.node_ops.lookup,
                  mknod: MEMFS.node_ops.mknod,
                  rename: MEMFS.node_ops.rename,
                  unlink: MEMFS.node_ops.unlink,
                  rmdir: MEMFS.node_ops.rmdir,
                  readdir: MEMFS.node_ops.readdir,
                  symlink: MEMFS.node_ops.symlink
                },
                stream: {
                  llseek: MEMFS.stream_ops.llseek
                }
              },
              file: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr
                },
                stream: {
                  llseek: MEMFS.stream_ops.llseek,
                  read: MEMFS.stream_ops.read,
                  write: MEMFS.stream_ops.write,
                  allocate: MEMFS.stream_ops.allocate,
                  mmap: MEMFS.stream_ops.mmap,
                  msync: MEMFS.stream_ops.msync
                }
              },
              link: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr,
                  readlink: MEMFS.node_ops.readlink
                },
                stream: {}
              },
              chrdev: {
                node: {
                  getattr: MEMFS.node_ops.getattr,
                  setattr: MEMFS.node_ops.setattr
                },
                stream: FS.chrdev_stream_ops
              }
            };
            var node = FS.createNode(parent, name, mode, dev);
            if (FS.isDir(node.mode)) {
              node.node_ops = MEMFS.ops_table.dir.node;
              node.stream_ops = MEMFS.ops_table.dir.stream;
              node.contents = {};
            } else if (FS.isFile(node.mode)) {
              node.node_ops = MEMFS.ops_table.file.node;
              node.stream_ops = MEMFS.ops_table.file.stream;
              node.usedBytes = 0;
              node.contents = null;
            } else if (FS.isLink(node.mode)) {
              node.node_ops = MEMFS.ops_table.link.node;
              node.stream_ops = MEMFS.ops_table.link.stream;
            } else if (FS.isChrdev(node.mode)) {
              node.node_ops = MEMFS.ops_table.chrdev.node;
              node.stream_ops = MEMFS.ops_table.chrdev.stream;
            }
            node.timestamp = Date.now();
            if (parent) {
              parent.contents[name] = node;
              parent.timestamp = node.timestamp;
            }
            return node;
          },
          getFileDataAsTypedArray(node) {
            if (!node.contents) return new Uint8Array(0);
            if (node.contents.subarray)
              return node.contents.subarray(0, node.usedBytes);
            return new Uint8Array(node.contents);
          },
          expandFileStorage(node, newCapacity) {
            var prevCapacity = node.contents ? node.contents.length : 0;
            if (prevCapacity >= newCapacity) return;
            var CAPACITY_DOUBLING_MAX = 1024 * 1024;
            newCapacity = Math.max(
              newCapacity,
              prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0
            );
            if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
            var oldContents = node.contents;
            node.contents = new Uint8Array(newCapacity);
            if (node.usedBytes > 0)
              node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
          },
          resizeFileStorage(node, newSize) {
            if (node.usedBytes == newSize) return;
            if (newSize == 0) {
              node.contents = null;
              node.usedBytes = 0;
            } else {
              var oldContents = node.contents;
              node.contents = new Uint8Array(newSize);
              if (oldContents) {
                node.contents.set(
                  oldContents.subarray(0, Math.min(newSize, node.usedBytes))
                );
              }
              node.usedBytes = newSize;
            }
          },
          node_ops: {
            getattr(node) {
              var attr = {};
              attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
              attr.ino = node.id;
              attr.mode = node.mode;
              attr.nlink = 1;
              attr.uid = 0;
              attr.gid = 0;
              attr.rdev = node.rdev;
              if (FS.isDir(node.mode)) {
                attr.size = 4096;
              } else if (FS.isFile(node.mode)) {
                attr.size = node.usedBytes;
              } else if (FS.isLink(node.mode)) {
                attr.size = node.link.length;
              } else {
                attr.size = 0;
              }
              attr.atime = new Date(node.timestamp);
              attr.mtime = new Date(node.timestamp);
              attr.ctime = new Date(node.timestamp);
              attr.blksize = 4096;
              attr.blocks = Math.ceil(attr.size / attr.blksize);
              return attr;
            },
            setattr(node, attr) {
              if (attr.mode !== void 0) {
                node.mode = attr.mode;
              }
              if (attr.timestamp !== void 0) {
                node.timestamp = attr.timestamp;
              }
              if (attr.size !== void 0) {
                MEMFS.resizeFileStorage(node, attr.size);
              }
            },
            lookup(parent, name) {
              throw FS.genericErrors[44];
            },
            mknod(parent, name, mode, dev) {
              return MEMFS.createNode(parent, name, mode, dev);
            },
            rename(old_node, new_dir, new_name) {
              if (FS.isDir(old_node.mode)) {
                var new_node;
                try {
                  new_node = FS.lookupNode(new_dir, new_name);
                } catch (e) {
                }
                if (new_node) {
                  for (var i in new_node.contents) {
                    throw new FS.ErrnoError(55);
                  }
                }
              }
              delete old_node.parent.contents[old_node.name];
              old_node.parent.timestamp = Date.now();
              old_node.name = new_name;
              new_dir.contents[new_name] = old_node;
              new_dir.timestamp = old_node.parent.timestamp;
            },
            unlink(parent, name) {
              delete parent.contents[name];
              parent.timestamp = Date.now();
            },
            rmdir(parent, name) {
              var node = FS.lookupNode(parent, name);
              for (var i in node.contents) {
                throw new FS.ErrnoError(55);
              }
              delete parent.contents[name];
              parent.timestamp = Date.now();
            },
            readdir(node) {
              var entries = [".", ".."];
              for (var key of Object.keys(node.contents)) {
                entries.push(key);
              }
              return entries;
            },
            symlink(parent, newname, oldpath) {
              var node = MEMFS.createNode(
                parent,
                newname,
                511 | 40960,
                0
              );
              node.link = oldpath;
              return node;
            },
            readlink(node) {
              if (!FS.isLink(node.mode)) {
                throw new FS.ErrnoError(28);
              }
              return node.link;
            }
          },
          stream_ops: {
            read(stream, buffer, offset, length, position) {
              var contents = stream.node.contents;
              if (position >= stream.node.usedBytes) return 0;
              var size = Math.min(stream.node.usedBytes - position, length);
              assert(size >= 0);
              if (size > 8 && contents.subarray) {
                buffer.set(contents.subarray(position, position + size), offset);
              } else {
                for (var i = 0; i < size; i++)
                  buffer[offset + i] = contents[position + i];
              }
              return size;
            },
            write(stream, buffer, offset, length, position, canOwn) {
              assert(!(buffer instanceof ArrayBuffer));
              if (buffer.buffer === HEAP8.buffer) {
                canOwn = false;
              }
              if (!length) return 0;
              var node = stream.node;
              node.timestamp = Date.now();
              if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                if (canOwn) {
                  assert(
                    position === 0,
                    "canOwn must imply no weird position inside the file"
                  );
                  node.contents = buffer.subarray(offset, offset + length);
                  node.usedBytes = length;
                  return length;
                } else if (node.usedBytes === 0 && position === 0) {
                  node.contents = buffer.slice(offset, offset + length);
                  node.usedBytes = length;
                  return length;
                } else if (position + length <= node.usedBytes) {
                  node.contents.set(
                    buffer.subarray(offset, offset + length),
                    position
                  );
                  return length;
                }
              }
              MEMFS.expandFileStorage(node, position + length);
              if (node.contents.subarray && buffer.subarray) {
                node.contents.set(
                  buffer.subarray(offset, offset + length),
                  position
                );
              } else {
                for (var i = 0; i < length; i++) {
                  node.contents[position + i] = buffer[offset + i];
                }
              }
              node.usedBytes = Math.max(node.usedBytes, position + length);
              return length;
            },
            llseek(stream, offset, whence) {
              var position = offset;
              if (whence === 1) {
                position += stream.position;
              } else if (whence === 2) {
                if (FS.isFile(stream.node.mode)) {
                  position += stream.node.usedBytes;
                }
              }
              if (position < 0) {
                throw new FS.ErrnoError(28);
              }
              return position;
            },
            allocate(stream, offset, length) {
              MEMFS.expandFileStorage(stream.node, offset + length);
              stream.node.usedBytes = Math.max(
                stream.node.usedBytes,
                offset + length
              );
            },
            mmap(stream, length, position, prot, flags) {
              if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(43);
              }
              var ptr;
              var allocated;
              var contents = stream.node.contents;
              if (!(flags & 2) && contents && contents.buffer === HEAP8.buffer) {
                allocated = false;
                ptr = contents.byteOffset;
              } else {
                allocated = true;
                ptr = mmapAlloc(length);
                if (!ptr) {
                  throw new FS.ErrnoError(48);
                }
                if (contents) {
                  if (position > 0 || position + length < contents.length) {
                    if (contents.subarray) {
                      contents = contents.subarray(position, position + length);
                    } else {
                      contents = Array.prototype.slice.call(
                        contents,
                        position,
                        position + length
                      );
                    }
                  }
                  HEAP8.set(contents, ptr);
                }
              }
              return { ptr, allocated };
            },
            msync(stream, buffer, offset, length, mmapFlags) {
              MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
              return 0;
            }
          }
        };
        var asyncLoad = (url, onload, onerror, noRunDep) => {
          var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : "";
          readAsync(url).then(
            (arrayBuffer) => {
              assert(
                arrayBuffer,
                `Loading data file "${url}" failed (no arrayBuffer).`
              );
              onload(new Uint8Array(arrayBuffer));
              if (dep) removeRunDependency(dep);
            },
            (err2) => {
              if (onerror) {
                onerror();
              } else {
                throw `Loading data file "${url}" failed.`;
              }
            }
          );
          if (dep) addRunDependency(dep);
        };
        var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
          FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
        };
        var preloadPlugins = Module["preloadPlugins"] || [];
        var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
          if (typeof Browser != "undefined") Browser.init();
          var handled = false;
          preloadPlugins.forEach((plugin) => {
            if (handled) return;
            if (plugin["canHandle"](fullname)) {
              plugin["handle"](byteArray, fullname, finish, onerror);
              handled = true;
            }
          });
          return handled;
        };
        var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
          var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
          var dep = getUniqueRunDependency(`cp ${fullname}`);
          function processData(byteArray) {
            function finish(byteArray2) {
              preFinish?.();
              if (!dontCreateFile) {
                FS_createDataFile(
                  parent,
                  name,
                  byteArray2,
                  canRead,
                  canWrite,
                  canOwn
                );
              }
              onload?.();
              removeRunDependency(dep);
            }
            if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
              onerror?.();
              removeRunDependency(dep);
            })) {
              return;
            }
            finish(byteArray);
          }
          addRunDependency(dep);
          if (typeof url == "string") {
            asyncLoad(url, processData, onerror);
          } else {
            processData(url);
          }
        };
        var FS_modeStringToFlags = (str) => {
          var flagModes = {
            r: 0,
            "r+": 2,
            w: 512 | 64 | 1,
            "w+": 512 | 64 | 2,
            a: 1024 | 64 | 1,
            "a+": 1024 | 64 | 2
          };
          var flags = flagModes[str];
          if (typeof flags == "undefined") {
            throw new Error(`Unknown file open mode: ${str}`);
          }
          return flags;
        };
        var FS_getMode = (canRead, canWrite) => {
          var mode = 0;
          if (canRead) mode |= 292 | 73;
          if (canWrite) mode |= 146;
          return mode;
        };
        var strError = (errno) => {
          return UTF8ToString(_strerror(errno));
        };
        var ERRNO_CODES = {
          EPERM: 63,
          ENOENT: 44,
          ESRCH: 71,
          EINTR: 27,
          EIO: 29,
          ENXIO: 60,
          E2BIG: 1,
          ENOEXEC: 45,
          EBADF: 8,
          ECHILD: 12,
          EAGAIN: 6,
          EWOULDBLOCK: 6,
          ENOMEM: 48,
          EACCES: 2,
          EFAULT: 21,
          ENOTBLK: 105,
          EBUSY: 10,
          EEXIST: 20,
          EXDEV: 75,
          ENODEV: 43,
          ENOTDIR: 54,
          EISDIR: 31,
          EINVAL: 28,
          ENFILE: 41,
          EMFILE: 33,
          ENOTTY: 59,
          ETXTBSY: 74,
          EFBIG: 22,
          ENOSPC: 51,
          ESPIPE: 70,
          EROFS: 69,
          EMLINK: 34,
          EPIPE: 64,
          EDOM: 18,
          ERANGE: 68,
          ENOMSG: 49,
          EIDRM: 24,
          ECHRNG: 106,
          EL2NSYNC: 156,
          EL3HLT: 107,
          EL3RST: 108,
          ELNRNG: 109,
          EUNATCH: 110,
          ENOCSI: 111,
          EL2HLT: 112,
          EDEADLK: 16,
          ENOLCK: 46,
          EBADE: 113,
          EBADR: 114,
          EXFULL: 115,
          ENOANO: 104,
          EBADRQC: 103,
          EBADSLT: 102,
          EDEADLOCK: 16,
          EBFONT: 101,
          ENOSTR: 100,
          ENODATA: 116,
          ETIME: 117,
          ENOSR: 118,
          ENONET: 119,
          ENOPKG: 120,
          EREMOTE: 121,
          ENOLINK: 47,
          EADV: 122,
          ESRMNT: 123,
          ECOMM: 124,
          EPROTO: 65,
          EMULTIHOP: 36,
          EDOTDOT: 125,
          EBADMSG: 9,
          ENOTUNIQ: 126,
          EBADFD: 127,
          EREMCHG: 128,
          ELIBACC: 129,
          ELIBBAD: 130,
          ELIBSCN: 131,
          ELIBMAX: 132,
          ELIBEXEC: 133,
          ENOSYS: 52,
          ENOTEMPTY: 55,
          ENAMETOOLONG: 37,
          ELOOP: 32,
          EOPNOTSUPP: 138,
          EPFNOSUPPORT: 139,
          ECONNRESET: 15,
          ENOBUFS: 42,
          EAFNOSUPPORT: 5,
          EPROTOTYPE: 67,
          ENOTSOCK: 57,
          ENOPROTOOPT: 50,
          ESHUTDOWN: 140,
          ECONNREFUSED: 14,
          EADDRINUSE: 3,
          ECONNABORTED: 13,
          ENETUNREACH: 40,
          ENETDOWN: 38,
          ETIMEDOUT: 73,
          EHOSTDOWN: 142,
          EHOSTUNREACH: 23,
          EINPROGRESS: 26,
          EALREADY: 7,
          EDESTADDRREQ: 17,
          EMSGSIZE: 35,
          EPROTONOSUPPORT: 66,
          ESOCKTNOSUPPORT: 137,
          EADDRNOTAVAIL: 4,
          ENETRESET: 39,
          EISCONN: 30,
          ENOTCONN: 53,
          ETOOMANYREFS: 141,
          EUSERS: 136,
          EDQUOT: 19,
          ESTALE: 72,
          ENOTSUP: 138,
          ENOMEDIUM: 148,
          EILSEQ: 25,
          EOVERFLOW: 61,
          ECANCELED: 11,
          ENOTRECOVERABLE: 56,
          EOWNERDEAD: 62,
          ESTRPIPE: 135
        };
        var FS = {
          root: null,
          mounts: [],
          devices: {},
          streams: [],
          nextInode: 1,
          nameTable: null,
          currentPath: "/",
          initialized: false,
          ignorePermissions: true,
          ErrnoError: class extends Error {
            // We set the `name` property to be able to identify `FS.ErrnoError`
            // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
            // - when using PROXYFS, an error can come from an underlying FS
            // as different FS objects have their own FS.ErrnoError each,
            // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
            // we'll use the reliable test `err.name == "ErrnoError"` instead
            constructor(errno) {
              super(runtimeInitialized ? strError(errno) : "");
              this.name = "ErrnoError";
              this.errno = errno;
              for (var key in ERRNO_CODES) {
                if (ERRNO_CODES[key] === errno) {
                  this.code = key;
                  break;
                }
              }
            }
          },
          genericErrors: {},
          filesystems: null,
          syncFSRequests: 0,
          readFiles: {},
          FSStream: class {
            constructor() {
              this.shared = {};
            }
            get object() {
              return this.node;
            }
            set object(val) {
              this.node = val;
            }
            get isRead() {
              return (this.flags & 2097155) !== 1;
            }
            get isWrite() {
              return (this.flags & 2097155) !== 0;
            }
            get isAppend() {
              return this.flags & 1024;
            }
            get flags() {
              return this.shared.flags;
            }
            set flags(val) {
              this.shared.flags = val;
            }
            get position() {
              return this.shared.position;
            }
            set position(val) {
              this.shared.position = val;
            }
          },
          FSNode: class {
            constructor(parent, name, mode, rdev) {
              if (!parent) {
                parent = this;
              }
              this.parent = parent;
              this.mount = parent.mount;
              this.mounted = null;
              this.id = FS.nextInode++;
              this.name = name;
              this.mode = mode;
              this.node_ops = {};
              this.stream_ops = {};
              this.rdev = rdev;
              this.readMode = 292 | 73;
              this.writeMode = 146;
            }
            get read() {
              return (this.mode & this.readMode) === this.readMode;
            }
            set read(val) {
              val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
            }
            get write() {
              return (this.mode & this.writeMode) === this.writeMode;
            }
            set write(val) {
              val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
            }
            get isFolder() {
              return FS.isDir(this.mode);
            }
            get isDevice() {
              return FS.isChrdev(this.mode);
            }
          },
          lookupPath(path, opts = {}) {
            path = PATH_FS.resolve(path);
            if (!path) return { path: "", node: null };
            var defaults = {
              follow_mount: true,
              recurse_count: 0
            };
            opts = Object.assign(defaults, opts);
            if (opts.recurse_count > 8) {
              throw new FS.ErrnoError(32);
            }
            var parts = path.split("/").filter((p) => !!p);
            var current = FS.root;
            var current_path = "/";
            for (var i = 0; i < parts.length; i++) {
              var islast = i === parts.length - 1;
              if (islast && opts.parent) {
                break;
              }
              current = FS.lookupNode(current, parts[i]);
              current_path = PATH.join2(current_path, parts[i]);
              if (FS.isMountpoint(current)) {
                if (!islast || islast && opts.follow_mount) {
                  current = current.mounted.root;
                }
              }
              if (!islast || opts.follow) {
                var count = 0;
                while (FS.isLink(current.mode)) {
                  var link = FS.readlink(current_path);
                  current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                  var lookup = FS.lookupPath(current_path, {
                    recurse_count: opts.recurse_count + 1
                  });
                  current = lookup.node;
                  if (count++ > 40) {
                    throw new FS.ErrnoError(32);
                  }
                }
              }
            }
            return { path: current_path, node: current };
          },
          getPath(node) {
            var path;
            while (true) {
              if (FS.isRoot(node)) {
                var mount = node.mount.mountpoint;
                if (!path) return mount;
                return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path;
              }
              path = path ? `${node.name}/${path}` : node.name;
              node = node.parent;
            }
          },
          hashName(parentid, name) {
            var hash = 0;
            for (var i = 0; i < name.length; i++) {
              hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
            }
            return (parentid + hash >>> 0) % FS.nameTable.length;
          },
          hashAddNode(node) {
            var hash = FS.hashName(node.parent.id, node.name);
            node.name_next = FS.nameTable[hash];
            FS.nameTable[hash] = node;
          },
          hashRemoveNode(node) {
            var hash = FS.hashName(node.parent.id, node.name);
            if (FS.nameTable[hash] === node) {
              FS.nameTable[hash] = node.name_next;
            } else {
              var current = FS.nameTable[hash];
              while (current) {
                if (current.name_next === node) {
                  current.name_next = node.name_next;
                  break;
                }
                current = current.name_next;
              }
            }
          },
          lookupNode(parent, name) {
            var errCode = FS.mayLookup(parent);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            var hash = FS.hashName(parent.id, name);
            for (var node = FS.nameTable[hash]; node; node = node.name_next) {
              var nodeName = node.name;
              if (node.parent.id === parent.id && nodeName === name) {
                return node;
              }
            }
            return FS.lookup(parent, name);
          },
          createNode(parent, name, mode, rdev) {
            assert(typeof parent == "object");
            var node = new FS.FSNode(parent, name, mode, rdev);
            FS.hashAddNode(node);
            return node;
          },
          destroyNode(node) {
            FS.hashRemoveNode(node);
          },
          isRoot(node) {
            return node === node.parent;
          },
          isMountpoint(node) {
            return !!node.mounted;
          },
          isFile(mode) {
            return (mode & 61440) === 32768;
          },
          isDir(mode) {
            return (mode & 61440) === 16384;
          },
          isLink(mode) {
            return (mode & 61440) === 40960;
          },
          isChrdev(mode) {
            return (mode & 61440) === 8192;
          },
          isBlkdev(mode) {
            return (mode & 61440) === 24576;
          },
          isFIFO(mode) {
            return (mode & 61440) === 4096;
          },
          isSocket(mode) {
            return (mode & 49152) === 49152;
          },
          flagsToPermissionString(flag) {
            var perms = ["r", "w", "rw"][flag & 3];
            if (flag & 512) {
              perms += "w";
            }
            return perms;
          },
          nodePermissions(node, perms) {
            if (FS.ignorePermissions) {
              return 0;
            }
            if (perms.includes("r") && !(node.mode & 292)) {
              return 2;
            } else if (perms.includes("w") && !(node.mode & 146)) {
              return 2;
            } else if (perms.includes("x") && !(node.mode & 73)) {
              return 2;
            }
            return 0;
          },
          mayLookup(dir) {
            if (!FS.isDir(dir.mode)) return 54;
            var errCode = FS.nodePermissions(dir, "x");
            if (errCode) return errCode;
            if (!dir.node_ops.lookup) return 2;
            return 0;
          },
          mayCreate(dir, name) {
            try {
              var node = FS.lookupNode(dir, name);
              return 20;
            } catch (e) {
            }
            return FS.nodePermissions(dir, "wx");
          },
          mayDelete(dir, name, isdir) {
            var node;
            try {
              node = FS.lookupNode(dir, name);
            } catch (e) {
              return e.errno;
            }
            var errCode = FS.nodePermissions(dir, "wx");
            if (errCode) {
              return errCode;
            }
            if (isdir) {
              if (!FS.isDir(node.mode)) {
                return 54;
              }
              if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                return 10;
              }
            } else {
              if (FS.isDir(node.mode)) {
                return 31;
              }
            }
            return 0;
          },
          mayOpen(node, flags) {
            if (!node) {
              return 44;
            }
            if (FS.isLink(node.mode)) {
              return 32;
            } else if (FS.isDir(node.mode)) {
              if (FS.flagsToPermissionString(flags) !== "r" || // opening for write
              flags & 512) {
                return 31;
              }
            }
            return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
          },
          MAX_OPEN_FDS: 4096,
          nextfd() {
            for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
              if (!FS.streams[fd]) {
                return fd;
              }
            }
            throw new FS.ErrnoError(33);
          },
          getStreamChecked(fd) {
            var stream = FS.getStream(fd);
            if (!stream) {
              throw new FS.ErrnoError(8);
            }
            return stream;
          },
          getStream: (fd) => FS.streams[fd],
          createStream(stream, fd = -1) {
            assert(fd >= -1);
            stream = Object.assign(new FS.FSStream(), stream);
            if (fd == -1) {
              fd = FS.nextfd();
            }
            stream.fd = fd;
            FS.streams[fd] = stream;
            return stream;
          },
          closeStream(fd) {
            FS.streams[fd] = null;
          },
          dupStream(origStream, fd = -1) {
            var stream = FS.createStream(origStream, fd);
            stream.stream_ops?.dup?.(stream);
            return stream;
          },
          chrdev_stream_ops: {
            open(stream) {
              var device = FS.getDevice(stream.node.rdev);
              stream.stream_ops = device.stream_ops;
              stream.stream_ops.open?.(stream);
            },
            llseek() {
              throw new FS.ErrnoError(70);
            }
          },
          major: (dev) => dev >> 8,
          minor: (dev) => dev & 255,
          makedev: (ma, mi) => ma << 8 | mi,
          registerDevice(dev, ops) {
            FS.devices[dev] = { stream_ops: ops };
          },
          getDevice: (dev) => FS.devices[dev],
          getMounts(mount) {
            var mounts = [];
            var check = [mount];
            while (check.length) {
              var m = check.pop();
              mounts.push(m);
              check.push(...m.mounts);
            }
            return mounts;
          },
          syncfs(populate, callback) {
            if (typeof populate == "function") {
              callback = populate;
              populate = false;
            }
            FS.syncFSRequests++;
            if (FS.syncFSRequests > 1) {
              err(
                `warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`
              );
            }
            var mounts = FS.getMounts(FS.root.mount);
            var completed = 0;
            function doCallback(errCode) {
              assert(FS.syncFSRequests > 0);
              FS.syncFSRequests--;
              return callback(errCode);
            }
            function done(errCode) {
              if (errCode) {
                if (!done.errored) {
                  done.errored = true;
                  return doCallback(errCode);
                }
                return;
              }
              if (++completed >= mounts.length) {
                doCallback(null);
              }
            }
            mounts.forEach((mount) => {
              if (!mount.type.syncfs) {
                return done(null);
              }
              mount.type.syncfs(mount, populate, done);
            });
          },
          mount(type, opts, mountpoint) {
            if (typeof type == "string") {
              throw type;
            }
            var root = mountpoint === "/";
            var pseudo = !mountpoint;
            var node;
            if (root && FS.root) {
              throw new FS.ErrnoError(10);
            } else if (!root && !pseudo) {
              var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
              mountpoint = lookup.path;
              node = lookup.node;
              if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10);
              }
              if (!FS.isDir(node.mode)) {
                throw new FS.ErrnoError(54);
              }
            }
            var mount = {
              type,
              opts,
              mountpoint,
              mounts: []
            };
            var mountRoot = type.mount(mount);
            mountRoot.mount = mount;
            mount.root = mountRoot;
            if (root) {
              FS.root = mountRoot;
            } else if (node) {
              node.mounted = mount;
              if (node.mount) {
                node.mount.mounts.push(mount);
              }
            }
            return mountRoot;
          },
          unmount(mountpoint) {
            var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
            if (!FS.isMountpoint(lookup.node)) {
              throw new FS.ErrnoError(28);
            }
            var node = lookup.node;
            var mount = node.mounted;
            var mounts = FS.getMounts(mount);
            Object.keys(FS.nameTable).forEach((hash) => {
              var current = FS.nameTable[hash];
              while (current) {
                var next = current.name_next;
                if (mounts.includes(current.mount)) {
                  FS.destroyNode(current);
                }
                current = next;
              }
            });
            node.mounted = null;
            var idx = node.mount.mounts.indexOf(mount);
            assert(idx !== -1);
            node.mount.mounts.splice(idx, 1);
          },
          lookup(parent, name) {
            return parent.node_ops.lookup(parent, name);
          },
          mknod(path, mode, dev) {
            var lookup = FS.lookupPath(path, { parent: true });
            var parent = lookup.node;
            var name = PATH.basename(path);
            if (!name || name === "." || name === "..") {
              throw new FS.ErrnoError(28);
            }
            var errCode = FS.mayCreate(parent, name);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            if (!parent.node_ops.mknod) {
              throw new FS.ErrnoError(63);
            }
            return parent.node_ops.mknod(parent, name, mode, dev);
          },
          create(path, mode) {
            mode = mode !== void 0 ? mode : 438;
            mode &= 4095;
            mode |= 32768;
            return FS.mknod(path, mode, 0);
          },
          mkdir(path, mode) {
            mode = mode !== void 0 ? mode : 511;
            mode &= 511 | 512;
            mode |= 16384;
            return FS.mknod(path, mode, 0);
          },
          mkdirTree(path, mode) {
            var dirs = path.split("/");
            var d = "";
            for (var i = 0; i < dirs.length; ++i) {
              if (!dirs[i]) continue;
              d += "/" + dirs[i];
              try {
                FS.mkdir(d, mode);
              } catch (e) {
                if (e.errno != 20) throw e;
              }
            }
          },
          mkdev(path, mode, dev) {
            if (typeof dev == "undefined") {
              dev = mode;
              mode = 438;
            }
            mode |= 8192;
            return FS.mknod(path, mode, dev);
          },
          symlink(oldpath, newpath) {
            if (!PATH_FS.resolve(oldpath)) {
              throw new FS.ErrnoError(44);
            }
            var lookup = FS.lookupPath(newpath, { parent: true });
            var parent = lookup.node;
            if (!parent) {
              throw new FS.ErrnoError(44);
            }
            var newname = PATH.basename(newpath);
            var errCode = FS.mayCreate(parent, newname);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            if (!parent.node_ops.symlink) {
              throw new FS.ErrnoError(63);
            }
            return parent.node_ops.symlink(parent, newname, oldpath);
          },
          rename(old_path, new_path) {
            var old_dirname = PATH.dirname(old_path);
            var new_dirname = PATH.dirname(new_path);
            var old_name = PATH.basename(old_path);
            var new_name = PATH.basename(new_path);
            var lookup, old_dir, new_dir;
            lookup = FS.lookupPath(old_path, { parent: true });
            old_dir = lookup.node;
            lookup = FS.lookupPath(new_path, { parent: true });
            new_dir = lookup.node;
            if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
            if (old_dir.mount !== new_dir.mount) {
              throw new FS.ErrnoError(75);
            }
            var old_node = FS.lookupNode(old_dir, old_name);
            var relative = PATH_FS.relative(old_path, new_dirname);
            if (relative.charAt(0) !== ".") {
              throw new FS.ErrnoError(28);
            }
            relative = PATH_FS.relative(new_path, old_dirname);
            if (relative.charAt(0) !== ".") {
              throw new FS.ErrnoError(55);
            }
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (old_node === new_node) {
              return;
            }
            var isdir = FS.isDir(old_node.mode);
            var errCode = FS.mayDelete(old_dir, old_name, isdir);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            if (!old_dir.node_ops.rename) {
              throw new FS.ErrnoError(63);
            }
            if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
              throw new FS.ErrnoError(10);
            }
            if (new_dir !== old_dir) {
              errCode = FS.nodePermissions(old_dir, "w");
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
            }
            FS.hashRemoveNode(old_node);
            try {
              old_dir.node_ops.rename(old_node, new_dir, new_name);
              old_node.parent = new_dir;
            } catch (e) {
              throw e;
            } finally {
              FS.hashAddNode(old_node);
            }
          },
          rmdir(path) {
            var lookup = FS.lookupPath(path, { parent: true });
            var parent = lookup.node;
            var name = PATH.basename(path);
            var node = FS.lookupNode(parent, name);
            var errCode = FS.mayDelete(parent, name, true);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            if (!parent.node_ops.rmdir) {
              throw new FS.ErrnoError(63);
            }
            if (FS.isMountpoint(node)) {
              throw new FS.ErrnoError(10);
            }
            parent.node_ops.rmdir(parent, name);
            FS.destroyNode(node);
          },
          readdir(path) {
            var lookup = FS.lookupPath(path, { follow: true });
            var node = lookup.node;
            if (!node.node_ops.readdir) {
              throw new FS.ErrnoError(54);
            }
            return node.node_ops.readdir(node);
          },
          unlink(path) {
            var lookup = FS.lookupPath(path, { parent: true });
            var parent = lookup.node;
            if (!parent) {
              throw new FS.ErrnoError(44);
            }
            var name = PATH.basename(path);
            var node = FS.lookupNode(parent, name);
            var errCode = FS.mayDelete(parent, name, false);
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            if (!parent.node_ops.unlink) {
              throw new FS.ErrnoError(63);
            }
            if (FS.isMountpoint(node)) {
              throw new FS.ErrnoError(10);
            }
            parent.node_ops.unlink(parent, name);
            FS.destroyNode(node);
          },
          readlink(path) {
            var lookup = FS.lookupPath(path);
            var link = lookup.node;
            if (!link) {
              throw new FS.ErrnoError(44);
            }
            if (!link.node_ops.readlink) {
              throw new FS.ErrnoError(28);
            }
            return PATH_FS.resolve(
              FS.getPath(link.parent),
              link.node_ops.readlink(link)
            );
          },
          stat(path, dontFollow) {
            var lookup = FS.lookupPath(path, { follow: !dontFollow });
            var node = lookup.node;
            if (!node) {
              throw new FS.ErrnoError(44);
            }
            if (!node.node_ops.getattr) {
              throw new FS.ErrnoError(63);
            }
            return node.node_ops.getattr(node);
          },
          lstat(path) {
            return FS.stat(path, true);
          },
          chmod(path, mode, dontFollow) {
            var node;
            if (typeof path == "string") {
              var lookup = FS.lookupPath(path, { follow: !dontFollow });
              node = lookup.node;
            } else {
              node = path;
            }
            if (!node.node_ops.setattr) {
              throw new FS.ErrnoError(63);
            }
            node.node_ops.setattr(node, {
              mode: mode & 4095 | node.mode & ~4095,
              timestamp: Date.now()
            });
          },
          lchmod(path, mode) {
            FS.chmod(path, mode, true);
          },
          fchmod(fd, mode) {
            var stream = FS.getStreamChecked(fd);
            FS.chmod(stream.node, mode);
          },
          chown(path, uid, gid, dontFollow) {
            var node;
            if (typeof path == "string") {
              var lookup = FS.lookupPath(path, { follow: !dontFollow });
              node = lookup.node;
            } else {
              node = path;
            }
            if (!node.node_ops.setattr) {
              throw new FS.ErrnoError(63);
            }
            node.node_ops.setattr(node, {
              timestamp: Date.now()
              // we ignore the uid / gid for now
            });
          },
          lchown(path, uid, gid) {
            FS.chown(path, uid, gid, true);
          },
          fchown(fd, uid, gid) {
            var stream = FS.getStreamChecked(fd);
            FS.chown(stream.node, uid, gid);
          },
          truncate(path, len) {
            if (len < 0) {
              throw new FS.ErrnoError(28);
            }
            var node;
            if (typeof path == "string") {
              var lookup = FS.lookupPath(path, { follow: true });
              node = lookup.node;
            } else {
              node = path;
            }
            if (!node.node_ops.setattr) {
              throw new FS.ErrnoError(63);
            }
            if (FS.isDir(node.mode)) {
              throw new FS.ErrnoError(31);
            }
            if (!FS.isFile(node.mode)) {
              throw new FS.ErrnoError(28);
            }
            var errCode = FS.nodePermissions(node, "w");
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            node.node_ops.setattr(node, {
              size: len,
              timestamp: Date.now()
            });
          },
          ftruncate(fd, len) {
            var stream = FS.getStreamChecked(fd);
            if ((stream.flags & 2097155) === 0) {
              throw new FS.ErrnoError(28);
            }
            FS.truncate(stream.node, len);
          },
          utime(path, atime, mtime) {
            var lookup = FS.lookupPath(path, { follow: true });
            var node = lookup.node;
            node.node_ops.setattr(node, {
              timestamp: Math.max(atime, mtime)
            });
          },
          open(path, flags, mode) {
            if (path === "") {
              throw new FS.ErrnoError(44);
            }
            flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
            if (flags & 64) {
              mode = typeof mode == "undefined" ? 438 : mode;
              mode = mode & 4095 | 32768;
            } else {
              mode = 0;
            }
            var node;
            if (typeof path == "object") {
              node = path;
            } else {
              path = PATH.normalize(path);
              try {
                var lookup = FS.lookupPath(path, {
                  follow: !(flags & 131072)
                });
                node = lookup.node;
              } catch (e) {
              }
            }
            var created = false;
            if (flags & 64) {
              if (node) {
                if (flags & 128) {
                  throw new FS.ErrnoError(20);
                }
              } else {
                node = FS.mknod(path, mode, 0);
                created = true;
              }
            }
            if (!node) {
              throw new FS.ErrnoError(44);
            }
            if (FS.isChrdev(node.mode)) {
              flags &= ~512;
            }
            if (flags & 65536 && !FS.isDir(node.mode)) {
              throw new FS.ErrnoError(54);
            }
            if (!created) {
              var errCode = FS.mayOpen(node, flags);
              if (errCode) {
                throw new FS.ErrnoError(errCode);
              }
            }
            if (flags & 512 && !created) {
              FS.truncate(node, 0);
            }
            flags &= ~(128 | 512 | 131072);
            var stream = FS.createStream({
              node,
              path: FS.getPath(node),
              // we want the absolute path to the node
              flags,
              seekable: true,
              position: 0,
              stream_ops: node.stream_ops,
              // used by the file family libc calls (fopen, fwrite, ferror, etc.)
              ungotten: [],
              error: false
            });
            if (stream.stream_ops.open) {
              stream.stream_ops.open(stream);
            }
            if (Module["logReadFiles"] && !(flags & 1)) {
              if (!(path in FS.readFiles)) {
                FS.readFiles[path] = 1;
              }
            }
            return stream;
          },
          close(stream) {
            if (FS.isClosed(stream)) {
              throw new FS.ErrnoError(8);
            }
            if (stream.getdents) stream.getdents = null;
            try {
              if (stream.stream_ops.close) {
                stream.stream_ops.close(stream);
              }
            } catch (e) {
              throw e;
            } finally {
              FS.closeStream(stream.fd);
            }
            stream.fd = null;
          },
          isClosed(stream) {
            return stream.fd === null;
          },
          llseek(stream, offset, whence) {
            if (FS.isClosed(stream)) {
              throw new FS.ErrnoError(8);
            }
            if (!stream.seekable || !stream.stream_ops.llseek) {
              throw new FS.ErrnoError(70);
            }
            if (whence != 0 && whence != 1 && whence != 2) {
              throw new FS.ErrnoError(28);
            }
            stream.position = stream.stream_ops.llseek(stream, offset, whence);
            stream.ungotten = [];
            return stream.position;
          },
          read(stream, buffer, offset, length, position) {
            assert(offset >= 0);
            if (length < 0 || position < 0) {
              throw new FS.ErrnoError(28);
            }
            if (FS.isClosed(stream)) {
              throw new FS.ErrnoError(8);
            }
            if ((stream.flags & 2097155) === 1) {
              throw new FS.ErrnoError(8);
            }
            if (FS.isDir(stream.node.mode)) {
              throw new FS.ErrnoError(31);
            }
            if (!stream.stream_ops.read) {
              throw new FS.ErrnoError(28);
            }
            var seeking = typeof position != "undefined";
            if (!seeking) {
              position = stream.position;
            } else if (!stream.seekable) {
              throw new FS.ErrnoError(70);
            }
            var bytesRead = stream.stream_ops.read(
              stream,
              buffer,
              offset,
              length,
              position
            );
            if (!seeking) stream.position += bytesRead;
            return bytesRead;
          },
          write(stream, buffer, offset, length, position, canOwn) {
            assert(offset >= 0);
            if (length < 0 || position < 0) {
              throw new FS.ErrnoError(28);
            }
            if (FS.isClosed(stream)) {
              throw new FS.ErrnoError(8);
            }
            if ((stream.flags & 2097155) === 0) {
              throw new FS.ErrnoError(8);
            }
            if (FS.isDir(stream.node.mode)) {
              throw new FS.ErrnoError(31);
            }
            if (!stream.stream_ops.write) {
              throw new FS.ErrnoError(28);
            }
            if (stream.seekable && stream.flags & 1024) {
              FS.llseek(stream, 0, 2);
            }
            var seeking = typeof position != "undefined";
            if (!seeking) {
              position = stream.position;
            } else if (!stream.seekable) {
              throw new FS.ErrnoError(70);
            }
            var bytesWritten = stream.stream_ops.write(
              stream,
              buffer,
              offset,
              length,
              position,
              canOwn
            );
            if (!seeking) stream.position += bytesWritten;
            return bytesWritten;
          },
          allocate(stream, offset, length) {
            if (FS.isClosed(stream)) {
              throw new FS.ErrnoError(8);
            }
            if (offset < 0 || length <= 0) {
              throw new FS.ErrnoError(28);
            }
            if ((stream.flags & 2097155) === 0) {
              throw new FS.ErrnoError(8);
            }
            if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
              throw new FS.ErrnoError(43);
            }
            if (!stream.stream_ops.allocate) {
              throw new FS.ErrnoError(138);
            }
            stream.stream_ops.allocate(stream, offset, length);
          },
          mmap(stream, length, position, prot, flags) {
            if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
              throw new FS.ErrnoError(2);
            }
            if ((stream.flags & 2097155) === 1) {
              throw new FS.ErrnoError(2);
            }
            if (!stream.stream_ops.mmap) {
              throw new FS.ErrnoError(43);
            }
            if (!length) {
              throw new FS.ErrnoError(28);
            }
            return stream.stream_ops.mmap(stream, length, position, prot, flags);
          },
          msync(stream, buffer, offset, length, mmapFlags) {
            assert(offset >= 0);
            if (!stream.stream_ops.msync) {
              return 0;
            }
            return stream.stream_ops.msync(
              stream,
              buffer,
              offset,
              length,
              mmapFlags
            );
          },
          ioctl(stream, cmd, arg) {
            if (!stream.stream_ops.ioctl) {
              throw new FS.ErrnoError(59);
            }
            return stream.stream_ops.ioctl(stream, cmd, arg);
          },
          readFile(path, opts = {}) {
            opts.flags = opts.flags || 0;
            opts.encoding = opts.encoding || "binary";
            if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
              throw new Error(`Invalid encoding type "${opts.encoding}"`);
            }
            var ret;
            var stream = FS.open(path, opts.flags);
            var stat = FS.stat(path);
            var length = stat.size;
            var buf = new Uint8Array(length);
            FS.read(stream, buf, 0, length, 0);
            if (opts.encoding === "utf8") {
              ret = UTF8ArrayToString(buf);
            } else if (opts.encoding === "binary") {
              ret = buf;
            }
            FS.close(stream);
            return ret;
          },
          writeFile(path, data, opts = {}) {
            opts.flags = opts.flags || 577;
            var stream = FS.open(path, opts.flags, opts.mode);
            if (typeof data == "string") {
              var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
              var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
              FS.write(stream, buf, 0, actualNumBytes, void 0, opts.canOwn);
            } else if (ArrayBuffer.isView(data)) {
              FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
            } else {
              throw new Error("Unsupported data type");
            }
            FS.close(stream);
          },
          cwd: () => FS.currentPath,
          chdir(path) {
            var lookup = FS.lookupPath(path, { follow: true });
            if (lookup.node === null) {
              throw new FS.ErrnoError(44);
            }
            if (!FS.isDir(lookup.node.mode)) {
              throw new FS.ErrnoError(54);
            }
            var errCode = FS.nodePermissions(lookup.node, "x");
            if (errCode) {
              throw new FS.ErrnoError(errCode);
            }
            FS.currentPath = lookup.path;
          },
          createDefaultDirectories() {
            FS.mkdir("/tmp");
            FS.mkdir("/home");
            FS.mkdir("/home/web_user");
          },
          createDefaultDevices() {
            FS.mkdir("/dev");
            FS.registerDevice(FS.makedev(1, 3), {
              read: () => 0,
              write: (stream, buffer, offset, length, pos) => length
            });
            FS.mkdev("/dev/null", FS.makedev(1, 3));
            TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
            TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
            FS.mkdev("/dev/tty", FS.makedev(5, 0));
            FS.mkdev("/dev/tty1", FS.makedev(6, 0));
            var randomBuffer = new Uint8Array(1024), randomLeft = 0;
            var randomByte = () => {
              if (randomLeft === 0) {
                randomLeft = randomFill(randomBuffer).byteLength;
              }
              return randomBuffer[--randomLeft];
            };
            FS.createDevice("/dev", "random", randomByte);
            FS.createDevice("/dev", "urandom", randomByte);
            FS.mkdir("/dev/shm");
            FS.mkdir("/dev/shm/tmp");
          },
          createSpecialDirectories() {
            FS.mkdir("/proc");
            var proc_self = FS.mkdir("/proc/self");
            FS.mkdir("/proc/self/fd");
            FS.mount(
              {
                mount() {
                  var node = FS.createNode(
                    proc_self,
                    "fd",
                    16384 | 511,
                    73
                  );
                  node.node_ops = {
                    lookup(parent, name) {
                      var fd = +name;
                      var stream = FS.getStreamChecked(fd);
                      var ret = {
                        parent: null,
                        mount: { mountpoint: "fake" },
                        node_ops: { readlink: () => stream.path }
                      };
                      ret.parent = ret;
                      return ret;
                    }
                  };
                  return node;
                }
              },
              {},
              "/proc/self/fd"
            );
          },
          createStandardStreams(input, output, error) {
            if (input) {
              FS.createDevice("/dev", "stdin", input);
            } else {
              FS.symlink("/dev/tty", "/dev/stdin");
            }
            if (output) {
              FS.createDevice("/dev", "stdout", null, output);
            } else {
              FS.symlink("/dev/tty", "/dev/stdout");
            }
            if (error) {
              FS.createDevice("/dev", "stderr", null, error);
            } else {
              FS.symlink("/dev/tty1", "/dev/stderr");
            }
            var stdin = FS.open("/dev/stdin", 0);
            var stdout = FS.open("/dev/stdout", 1);
            var stderr = FS.open("/dev/stderr", 1);
            assert(stdin.fd === 0, `invalid handle for stdin (${stdin.fd})`);
            assert(stdout.fd === 1, `invalid handle for stdout (${stdout.fd})`);
            assert(stderr.fd === 2, `invalid handle for stderr (${stderr.fd})`);
          },
          staticInit() {
            [44].forEach((code) => {
              FS.genericErrors[code] = new FS.ErrnoError(code);
              FS.genericErrors[code].stack = "<generic error, no stack>";
            });
            FS.nameTable = new Array(4096);
            FS.mount(MEMFS, {}, "/");
            FS.createDefaultDirectories();
            FS.createDefaultDevices();
            FS.createSpecialDirectories();
            FS.filesystems = {
              MEMFS
            };
          },
          init(input, output, error) {
            assert(
              !FS.initialized,
              "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"
            );
            FS.initialized = true;
            input ??= Module["stdin"];
            output ??= Module["stdout"];
            error ??= Module["stderr"];
            FS.createStandardStreams(input, output, error);
          },
          quit() {
            FS.initialized = false;
            _fflush(0);
            for (var i = 0; i < FS.streams.length; i++) {
              var stream = FS.streams[i];
              if (!stream) {
                continue;
              }
              FS.close(stream);
            }
          },
          findObject(path, dontResolveLastLink) {
            var ret = FS.analyzePath(path, dontResolveLastLink);
            if (!ret.exists) {
              return null;
            }
            return ret.object;
          },
          analyzePath(path, dontResolveLastLink) {
            try {
              var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
              path = lookup.path;
            } catch (e) {
            }
            var ret = {
              isRoot: false,
              exists: false,
              error: 0,
              name: null,
              path: null,
              object: null,
              parentExists: false,
              parentPath: null,
              parentObject: null
            };
            try {
              var lookup = FS.lookupPath(path, { parent: true });
              ret.parentExists = true;
              ret.parentPath = lookup.path;
              ret.parentObject = lookup.node;
              ret.name = PATH.basename(path);
              lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
              ret.exists = true;
              ret.path = lookup.path;
              ret.object = lookup.node;
              ret.name = lookup.node.name;
              ret.isRoot = lookup.path === "/";
            } catch (e) {
              ret.error = e.errno;
            }
            return ret;
          },
          createPath(parent, path, canRead, canWrite) {
            parent = typeof parent == "string" ? parent : FS.getPath(parent);
            var parts = path.split("/").reverse();
            while (parts.length) {
              var part = parts.pop();
              if (!part) continue;
              var current = PATH.join2(parent, part);
              try {
                FS.mkdir(current);
              } catch (e) {
              }
              parent = current;
            }
            return current;
          },
          createFile(parent, name, properties, canRead, canWrite) {
            var path = PATH.join2(
              typeof parent == "string" ? parent : FS.getPath(parent),
              name
            );
            var mode = FS_getMode(canRead, canWrite);
            return FS.create(path, mode);
          },
          createDataFile(parent, name, data, canRead, canWrite, canOwn) {
            var path = name;
            if (parent) {
              parent = typeof parent == "string" ? parent : FS.getPath(parent);
              path = name ? PATH.join2(parent, name) : parent;
            }
            var mode = FS_getMode(canRead, canWrite);
            var node = FS.create(path, mode);
            if (data) {
              if (typeof data == "string") {
                var arr = new Array(data.length);
                for (var i = 0, len = data.length; i < len; ++i)
                  arr[i] = data.charCodeAt(i);
                data = arr;
              }
              FS.chmod(node, mode | 146);
              var stream = FS.open(node, 577);
              FS.write(stream, data, 0, data.length, 0, canOwn);
              FS.close(stream);
              FS.chmod(node, mode);
            }
          },
          createDevice(parent, name, input, output) {
            var path = PATH.join2(
              typeof parent == "string" ? parent : FS.getPath(parent),
              name
            );
            var mode = FS_getMode(!!input, !!output);
            FS.createDevice.major ??= 64;
            var dev = FS.makedev(FS.createDevice.major++, 0);
            FS.registerDevice(dev, {
              open(stream) {
                stream.seekable = false;
              },
              close(stream) {
                if (output?.buffer?.length) {
                  output(10);
                }
              },
              read(stream, buffer, offset, length, pos) {
                var bytesRead = 0;
                for (var i = 0; i < length; i++) {
                  var result;
                  try {
                    result = input();
                  } catch (e) {
                    throw new FS.ErrnoError(29);
                  }
                  if (result === void 0 && bytesRead === 0) {
                    throw new FS.ErrnoError(6);
                  }
                  if (result === null || result === void 0) break;
                  bytesRead++;
                  buffer[offset + i] = result;
                }
                if (bytesRead) {
                  stream.node.timestamp = Date.now();
                }
                return bytesRead;
              },
              write(stream, buffer, offset, length, pos) {
                for (var i = 0; i < length; i++) {
                  try {
                    output(buffer[offset + i]);
                  } catch (e) {
                    throw new FS.ErrnoError(29);
                  }
                }
                if (length) {
                  stream.node.timestamp = Date.now();
                }
                return i;
              }
            });
            return FS.mkdev(path, mode, dev);
          },
          forceLoadFile(obj) {
            if (obj.isDevice || obj.isFolder || obj.link || obj.contents)
              return true;
            if (typeof XMLHttpRequest != "undefined") {
              throw new Error(
                "Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread."
              );
            } else {
              try {
                obj.contents = readBinary(obj.url);
                obj.usedBytes = obj.contents.length;
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
          },
          createLazyFile(parent, name, url, canRead, canWrite) {
            class LazyUint8Array {
              constructor() {
                this.lengthKnown = false;
                this.chunks = [];
              }
              get(idx) {
                if (idx > this.length - 1 || idx < 0) {
                  return void 0;
                }
                var chunkOffset = idx % this.chunkSize;
                var chunkNum = idx / this.chunkSize | 0;
                return this.getter(chunkNum)[chunkOffset];
              }
              setDataGetter(getter) {
                this.getter = getter;
              }
              cacheLength() {
                var xhr = new XMLHttpRequest();
                xhr.open("HEAD", url, false);
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
                  throw new Error(
                    "Couldn't load " + url + ". Status: " + xhr.status
                  );
                var datalength = Number(xhr.getResponseHeader("Content-length"));
                var header;
                var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
                var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
                var chunkSize = 1024 * 1024;
                if (!hasByteServing) chunkSize = datalength;
                var doXHR = (from, to) => {
                  if (from > to)
                    throw new Error(
                      "invalid range (" + from + ", " + to + ") or no bytes requested!"
                    );
                  if (to > datalength - 1)
                    throw new Error(
                      "only " + datalength + " bytes available! programmer error!"
                    );
                  var xhr2 = new XMLHttpRequest();
                  xhr2.open("GET", url, false);
                  if (datalength !== chunkSize)
                    xhr2.setRequestHeader("Range", "bytes=" + from + "-" + to);
                  xhr2.responseType = "arraybuffer";
                  if (xhr2.overrideMimeType) {
                    xhr2.overrideMimeType("text/plain; charset=x-user-defined");
                  }
                  xhr2.send(null);
                  if (!(xhr2.status >= 200 && xhr2.status < 300 || xhr2.status === 304))
                    throw new Error(
                      "Couldn't load " + url + ". Status: " + xhr2.status
                    );
                  if (xhr2.response !== void 0) {
                    return new Uint8Array(
                      /** @type{Array<number>} */
                      xhr2.response || []
                    );
                  }
                  return intArrayFromString(xhr2.responseText || "", true);
                };
                var lazyArray2 = this;
                lazyArray2.setDataGetter((chunkNum) => {
                  var start = chunkNum * chunkSize;
                  var end = (chunkNum + 1) * chunkSize - 1;
                  end = Math.min(end, datalength - 1);
                  if (typeof lazyArray2.chunks[chunkNum] == "undefined") {
                    lazyArray2.chunks[chunkNum] = doXHR(start, end);
                  }
                  if (typeof lazyArray2.chunks[chunkNum] == "undefined")
                    throw new Error("doXHR failed!");
                  return lazyArray2.chunks[chunkNum];
                });
                if (usesGzip || !datalength) {
                  chunkSize = datalength = 1;
                  datalength = this.getter(0).length;
                  chunkSize = datalength;
                  out(
                    "LazyFiles on gzip forces download of the whole file when length is accessed"
                  );
                }
                this._length = datalength;
                this._chunkSize = chunkSize;
                this.lengthKnown = true;
              }
              get length() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
              get chunkSize() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
            if (typeof XMLHttpRequest != "undefined") {
              if (!ENVIRONMENT_IS_WORKER)
                throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
              var lazyArray = new LazyUint8Array();
              var properties = { isDevice: false, contents: lazyArray };
            } else {
              var properties = { isDevice: false, url };
            }
            var node = FS.createFile(parent, name, properties, canRead, canWrite);
            if (properties.contents) {
              node.contents = properties.contents;
            } else if (properties.url) {
              node.contents = null;
              node.url = properties.url;
            }
            Object.defineProperties(node, {
              usedBytes: {
                get: function() {
                  return this.contents.length;
                }
              }
            });
            var stream_ops = {};
            var keys = Object.keys(node.stream_ops);
            keys.forEach((key) => {
              var fn = node.stream_ops[key];
              stream_ops[key] = (...args) => {
                FS.forceLoadFile(node);
                return fn(...args);
              };
            });
            function writeChunks(stream, buffer, offset, length, position) {
              var contents = stream.node.contents;
              if (position >= contents.length) return 0;
              var size = Math.min(contents.length - position, length);
              assert(size >= 0);
              if (contents.slice) {
                for (var i = 0; i < size; i++) {
                  buffer[offset + i] = contents[position + i];
                }
              } else {
                for (var i = 0; i < size; i++) {
                  buffer[offset + i] = contents.get(position + i);
                }
              }
              return size;
            }
            stream_ops.read = (stream, buffer, offset, length, position) => {
              FS.forceLoadFile(node);
              return writeChunks(stream, buffer, offset, length, position);
            };
            stream_ops.mmap = (stream, length, position, prot, flags) => {
              FS.forceLoadFile(node);
              var ptr = mmapAlloc(length);
              if (!ptr) {
                throw new FS.ErrnoError(48);
              }
              writeChunks(stream, HEAP8, ptr, length, position);
              return { ptr, allocated: true };
            };
            node.stream_ops = stream_ops;
            return node;
          },
          absolutePath() {
            abort("FS.absolutePath has been removed; use PATH_FS.resolve instead");
          },
          createFolder() {
            abort("FS.createFolder has been removed; use FS.mkdir instead");
          },
          createLink() {
            abort("FS.createLink has been removed; use FS.symlink instead");
          },
          joinPath() {
            abort("FS.joinPath has been removed; use PATH.join instead");
          },
          mmapAlloc() {
            abort(
              "FS.mmapAlloc has been replaced by the top level function mmapAlloc"
            );
          },
          standardizePath() {
            abort(
              "FS.standardizePath has been removed; use PATH.normalize instead"
            );
          }
        };
        var SYSCALLS = {
          DEFAULT_POLLMASK: 5,
          calculateAt(dirfd, path, allowEmpty) {
            if (PATH.isAbs(path)) {
              return path;
            }
            var dir;
            if (dirfd === -100) {
              dir = FS.cwd();
            } else {
              var dirstream = SYSCALLS.getStreamFromFD(dirfd);
              dir = dirstream.path;
            }
            if (path.length == 0) {
              if (!allowEmpty) {
                throw new FS.ErrnoError(44);
              }
              return dir;
            }
            return PATH.join2(dir, path);
          },
          doStat(func, path, buf) {
            var stat = func(path);
            HEAP32[buf >> 2] = stat.dev;
            HEAP32[buf + 4 >> 2] = stat.mode;
            HEAPU32[buf + 8 >> 2] = stat.nlink;
            HEAP32[buf + 12 >> 2] = stat.uid;
            HEAP32[buf + 16 >> 2] = stat.gid;
            HEAP32[buf + 20 >> 2] = stat.rdev;
            tempI64 = [
              stat.size >>> 0,
              (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
                (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
              ) >>> 0 : 0)
            ], HEAP32[buf + 24 >> 2] = tempI64[0], HEAP32[buf + 28 >> 2] = tempI64[1];
            HEAP32[buf + 32 >> 2] = 4096;
            HEAP32[buf + 36 >> 2] = stat.blocks;
            var atime = stat.atime.getTime();
            var mtime = stat.mtime.getTime();
            var ctime = stat.ctime.getTime();
            tempI64 = [
              Math.floor(atime / 1e3) >>> 0,
              (tempDouble = Math.floor(atime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
                (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
              ) >>> 0 : 0)
            ], HEAP32[buf + 40 >> 2] = tempI64[0], HEAP32[buf + 44 >> 2] = tempI64[1];
            HEAPU32[buf + 48 >> 2] = atime % 1e3 * 1e3 * 1e3;
            tempI64 = [
              Math.floor(mtime / 1e3) >>> 0,
              (tempDouble = Math.floor(mtime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
                (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
              ) >>> 0 : 0)
            ], HEAP32[buf + 56 >> 2] = tempI64[0], HEAP32[buf + 60 >> 2] = tempI64[1];
            HEAPU32[buf + 64 >> 2] = mtime % 1e3 * 1e3 * 1e3;
            tempI64 = [
              Math.floor(ctime / 1e3) >>> 0,
              (tempDouble = Math.floor(ctime / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
                (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
              ) >>> 0 : 0)
            ], HEAP32[buf + 72 >> 2] = tempI64[0], HEAP32[buf + 76 >> 2] = tempI64[1];
            HEAPU32[buf + 80 >> 2] = ctime % 1e3 * 1e3 * 1e3;
            tempI64 = [
              stat.ino >>> 0,
              (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
                (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
              ) >>> 0 : 0)
            ], HEAP32[buf + 88 >> 2] = tempI64[0], HEAP32[buf + 92 >> 2] = tempI64[1];
            return 0;
          },
          doMsync(addr, stream, len, flags, offset) {
            if (!FS.isFile(stream.node.mode)) {
              throw new FS.ErrnoError(43);
            }
            if (flags & 2) {
              return 0;
            }
            var buffer = HEAPU8.slice(addr, addr + len);
            FS.msync(stream, buffer, offset, len, flags);
          },
          getStreamFromFD(fd) {
            var stream = FS.getStreamChecked(fd);
            return stream;
          },
          varargs: void 0,
          getStr(ptr) {
            var ret = UTF8ToString(ptr);
            return ret;
          }
        };
        function ___syscall_fcntl64(fd, cmd, varargs) {
          SYSCALLS.varargs = varargs;
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            switch (cmd) {
              case 0: {
                var arg = syscallGetVarargI();
                if (arg < 0) {
                  return -28;
                }
                while (FS.streams[arg]) {
                  arg++;
                }
                var newStream;
                newStream = FS.dupStream(stream, arg);
                return newStream.fd;
              }
              case 1:
              case 2:
                return 0;
              // FD_CLOEXEC makes no sense for a single process.
              case 3:
                return stream.flags;
              case 4: {
                var arg = syscallGetVarargI();
                stream.flags |= arg;
                return 0;
              }
              case 12: {
                var arg = syscallGetVarargP();
                var offset = 0;
                HEAP16[arg + offset >> 1] = 2;
                return 0;
              }
              case 13:
              case 14:
                return 0;
            }
            return -28;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        function ___syscall_fstat64(fd, buf) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            return SYSCALLS.doStat(FS.stat, stream.path, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
          assert(
            typeof maxBytesToWrite == "number",
            "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"
          );
          return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
        };
        function ___syscall_getdents64(fd, dirp, count) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            stream.getdents ||= FS.readdir(stream.path);
            var struct_size = 280;
            var pos = 0;
            var off = FS.llseek(stream, 0, 1);
            var idx = Math.floor(off / struct_size);
            while (idx < stream.getdents.length && pos + struct_size <= count) {
              var id;
              var type;
              var name = stream.getdents[idx];
              if (name === ".") {
                id = stream.node.id;
                type = 4;
              } else if (name === "..") {
                var lookup = FS.lookupPath(stream.path, { parent: true });
                id = lookup.node.id;
                type = 4;
              } else {
                var child = FS.lookupNode(stream.node, name);
                id = child.id;
                type = FS.isChrdev(child.mode) ? 2 : (
                  // DT_CHR, character device.
                  FS.isDir(child.mode) ? 4 : (
                    // DT_DIR, directory.
                    FS.isLink(child.mode) ? 10 : (
                      // DT_LNK, symbolic link.
                      8
                    )
                  )
                );
              }
              assert(id);
              tempI64 = [
                id >>> 0,
                (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
                  (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
                ) >>> 0 : 0)
              ], HEAP32[dirp + pos >> 2] = tempI64[0], HEAP32[dirp + pos + 4 >> 2] = tempI64[1];
              tempI64 = [
                (idx + 1) * struct_size >>> 0,
                (tempDouble = (idx + 1) * struct_size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
                  (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
                ) >>> 0 : 0)
              ], HEAP32[dirp + pos + 8 >> 2] = tempI64[0], HEAP32[dirp + pos + 12 >> 2] = tempI64[1];
              HEAP16[dirp + pos + 16 >> 1] = 280;
              HEAP8[dirp + pos + 18] = type;
              stringToUTF8(name, dirp + pos + 19, 256);
              pos += struct_size;
              idx += 1;
            }
            FS.llseek(stream, idx * struct_size, 0);
            return pos;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        function ___syscall_ioctl(fd, op, varargs) {
          SYSCALLS.varargs = varargs;
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            switch (op) {
              case 21509: {
                if (!stream.tty) return -59;
                return 0;
              }
              case 21505: {
                if (!stream.tty) return -59;
                if (stream.tty.ops.ioctl_tcgets) {
                  var termios = stream.tty.ops.ioctl_tcgets(stream);
                  var argp = syscallGetVarargP();
                  HEAP32[argp >> 2] = termios.c_iflag || 0;
                  HEAP32[argp + 4 >> 2] = termios.c_oflag || 0;
                  HEAP32[argp + 8 >> 2] = termios.c_cflag || 0;
                  HEAP32[argp + 12 >> 2] = termios.c_lflag || 0;
                  for (var i = 0; i < 32; i++) {
                    HEAP8[argp + i + 17] = termios.c_cc[i] || 0;
                  }
                  return 0;
                }
                return 0;
              }
              case 21510:
              case 21511:
              case 21512: {
                if (!stream.tty) return -59;
                return 0;
              }
              case 21506:
              case 21507:
              case 21508: {
                if (!stream.tty) return -59;
                if (stream.tty.ops.ioctl_tcsets) {
                  var argp = syscallGetVarargP();
                  var c_iflag = HEAP32[argp >> 2];
                  var c_oflag = HEAP32[argp + 4 >> 2];
                  var c_cflag = HEAP32[argp + 8 >> 2];
                  var c_lflag = HEAP32[argp + 12 >> 2];
                  var c_cc = [];
                  for (var i = 0; i < 32; i++) {
                    c_cc.push(HEAP8[argp + i + 17]);
                  }
                  return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
                    c_iflag,
                    c_oflag,
                    c_cflag,
                    c_lflag,
                    c_cc
                  });
                }
                return 0;
              }
              case 21519: {
                if (!stream.tty) return -59;
                var argp = syscallGetVarargP();
                HEAP32[argp >> 2] = 0;
                return 0;
              }
              case 21520: {
                if (!stream.tty) return -59;
                return -28;
              }
              case 21531: {
                var argp = syscallGetVarargP();
                return FS.ioctl(stream, op, argp);
              }
              case 21523: {
                if (!stream.tty) return -59;
                if (stream.tty.ops.ioctl_tiocgwinsz) {
                  var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
                  var argp = syscallGetVarargP();
                  HEAP16[argp >> 1] = winsize[0];
                  HEAP16[argp + 2 >> 1] = winsize[1];
                }
                return 0;
              }
              case 21524: {
                if (!stream.tty) return -59;
                return 0;
              }
              case 21515: {
                if (!stream.tty) return -59;
                return 0;
              }
              default:
                return -28;
            }
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        function ___syscall_lstat64(path, buf) {
          try {
            path = SYSCALLS.getStr(path);
            return SYSCALLS.doStat(FS.lstat, path, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        function ___syscall_mkdirat(dirfd, path, mode) {
          try {
            path = SYSCALLS.getStr(path);
            path = SYSCALLS.calculateAt(dirfd, path);
            path = PATH.normalize(path);
            if (path[path.length - 1] === "/")
              path = path.substr(0, path.length - 1);
            FS.mkdir(path, mode, 0);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        function ___syscall_newfstatat(dirfd, path, buf, flags) {
          try {
            path = SYSCALLS.getStr(path);
            var nofollow = flags & 256;
            var allowEmpty = flags & 4096;
            flags = flags & ~6400;
            assert(!flags, `unknown flags in __syscall_newfstatat: ${flags}`);
            path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
            return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        function ___syscall_openat(dirfd, path, flags, varargs) {
          SYSCALLS.varargs = varargs;
          try {
            path = SYSCALLS.getStr(path);
            path = SYSCALLS.calculateAt(dirfd, path);
            var mode = varargs ? syscallGetVarargI() : 0;
            return FS.open(path, flags, mode).fd;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
          try {
            oldpath = SYSCALLS.getStr(oldpath);
            newpath = SYSCALLS.getStr(newpath);
            oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
            newpath = SYSCALLS.calculateAt(newdirfd, newpath);
            FS.rename(oldpath, newpath);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        function ___syscall_rmdir(path) {
          try {
            path = SYSCALLS.getStr(path);
            FS.rmdir(path);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        function ___syscall_stat64(path, buf) {
          try {
            path = SYSCALLS.getStr(path);
            return SYSCALLS.doStat(FS.stat, path, buf);
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        function ___syscall_unlinkat(dirfd, path, flags) {
          try {
            path = SYSCALLS.getStr(path);
            path = SYSCALLS.calculateAt(dirfd, path);
            if (flags === 0) {
              FS.unlink(path);
            } else if (flags === 512) {
              FS.rmdir(path);
            } else {
              abort("Invalid flags passed to unlinkat");
            }
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return -e.errno;
          }
        }
        var __abort_js = () => {
          abort("native code called abort()");
        };
        var __emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);
        var __emscripten_runtime_keepalive_clear = () => {
          noExitRuntime = false;
          runtimeKeepaliveCounter = 0;
        };
        var timers = {};
        var handleException = (e) => {
          if (e instanceof ExitStatus || e == "unwind") {
            return EXITSTATUS;
          }
          checkStackCookie();
          if (e instanceof WebAssembly.RuntimeError) {
            if (_emscripten_stack_get_current() <= 0) {
              err(
                "Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 655360)"
              );
            }
          }
          quit_(1, e);
        };
        var runtimeKeepaliveCounter = 0;
        var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
        var _proc_exit = (code) => {
          EXITSTATUS = code;
          if (!keepRuntimeAlive()) {
            Module["onExit"]?.(code);
            ABORT = true;
          }
          quit_(code, new ExitStatus(code));
        };
        var exitJS = (status, implicit) => {
          EXITSTATUS = status;
          checkUnflushedContent();
          if (keepRuntimeAlive() && !implicit) {
            var msg = `program exited (with status: ${status}), but keepRuntimeAlive() is set (counter=${runtimeKeepaliveCounter}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;
            readyPromiseReject(msg);
            err(msg);
          }
          _proc_exit(status);
        };
        var _exit = exitJS;
        var maybeExit = () => {
          if (!keepRuntimeAlive()) {
            try {
              _exit(EXITSTATUS);
            } catch (e) {
              handleException(e);
            }
          }
        };
        var callUserCallback = (func) => {
          if (ABORT) {
            err(
              "user callback triggered after runtime exited or application aborted.  Ignoring."
            );
            return;
          }
          try {
            func();
            maybeExit();
          } catch (e) {
            handleException(e);
          }
        };
        var _emscripten_get_now = () => performance.now();
        var __setitimer_js = (which, timeout_ms) => {
          if (timers[which]) {
            clearTimeout(timers[which].id);
            delete timers[which];
          }
          if (!timeout_ms) return 0;
          var id = setTimeout(() => {
            assert(which in timers);
            delete timers[which];
            callUserCallback(
              () => __emscripten_timeout(which, _emscripten_get_now())
            );
          }, timeout_ms);
          timers[which] = { id, timeout_ms };
          return 0;
        };
        var _emscripten_date_now = () => Date.now();
        var getHeapMax = () => (
          // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
          // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
          // for any code that deals with heap sizes, which would require special
          // casing all heap size related code to treat 0 specially.
          2147483648
        );
        var growMemory = (size) => {
          var b = wasmMemory.buffer;
          var pages = (size - b.byteLength + 65535) / 65536 | 0;
          try {
            wasmMemory.grow(pages);
            updateMemoryViews();
            return 1;
          } catch (e) {
            err(
              `growMemory: Attempted to grow heap from ${b.byteLength} bytes to ${size} bytes, but got error: ${e}`
            );
          }
        };
        var _emscripten_resize_heap = (requestedSize) => {
          var oldSize = HEAPU8.length;
          requestedSize >>>= 0;
          assert(requestedSize > oldSize);
          var maxHeapSize = getHeapMax();
          if (requestedSize > maxHeapSize) {
            err(
              `Cannot enlarge memory, requested ${requestedSize} bytes, but the limit is ${maxHeapSize} bytes!`
            );
            return false;
          }
          for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
            var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
            overGrownHeapSize = Math.min(
              overGrownHeapSize,
              requestedSize + 100663296
            );
            var newSize = Math.min(
              maxHeapSize,
              alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536)
            );
            var replacement = growMemory(newSize);
            if (replacement) {
              return true;
            }
          }
          err(
            `Failed to grow the heap from ${oldSize} bytes to ${newSize} bytes, not enough memory!`
          );
          return false;
        };
        var ENV = {};
        var getExecutableName = () => {
          return thisProgram || "./this.program";
        };
        var getEnvStrings = () => {
          if (!getEnvStrings.strings) {
            var lang = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
            var env = {
              USER: "web_user",
              LOGNAME: "web_user",
              PATH: "/",
              PWD: "/",
              HOME: "/home/web_user",
              LANG: lang,
              _: getExecutableName()
            };
            for (var x in ENV) {
              if (ENV[x] === void 0) delete env[x];
              else env[x] = ENV[x];
            }
            var strings = [];
            for (var x in env) {
              strings.push(`${x}=${env[x]}`);
            }
            getEnvStrings.strings = strings;
          }
          return getEnvStrings.strings;
        };
        var stringToAscii = (str, buffer) => {
          for (var i = 0; i < str.length; ++i) {
            assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
            HEAP8[buffer++] = str.charCodeAt(i);
          }
          HEAP8[buffer] = 0;
        };
        var _environ_get = (__environ, environ_buf) => {
          var bufSize = 0;
          getEnvStrings().forEach((string, i) => {
            var ptr = environ_buf + bufSize;
            HEAPU32[__environ + i * 4 >> 2] = ptr;
            stringToAscii(string, ptr);
            bufSize += string.length + 1;
          });
          return 0;
        };
        var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
          var strings = getEnvStrings();
          HEAPU32[penviron_count >> 2] = strings.length;
          var bufSize = 0;
          strings.forEach((string) => bufSize += string.length + 1);
          HEAPU32[penviron_buf_size >> 2] = bufSize;
          return 0;
        };
        function _fd_close(fd) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            FS.close(stream);
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return e.errno;
          }
        }
        var doReadv = (stream, iov, iovcnt, offset) => {
          var ret = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[iov + 4 >> 2];
            iov += 8;
            var curr = FS.read(stream, HEAP8, ptr, len, offset);
            if (curr < 0) return -1;
            ret += curr;
            if (curr < len) break;
            if (typeof offset != "undefined") {
              offset += curr;
            }
          }
          return ret;
        };
        function _fd_read(fd, iov, iovcnt, pnum) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doReadv(stream, iov, iovcnt);
            HEAPU32[pnum >> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return e.errno;
          }
        }
        var convertI32PairToI53Checked = (lo, hi) => {
          assert(lo == lo >>> 0 || lo == (lo | 0));
          assert(hi === (hi | 0));
          return hi + 2097152 >>> 0 < 4194305 - !!lo ? (lo >>> 0) + hi * 4294967296 : NaN;
        };
        function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
          var offset = convertI32PairToI53Checked(offset_low, offset_high);
          try {
            if (isNaN(offset)) return 61;
            var stream = SYSCALLS.getStreamFromFD(fd);
            FS.llseek(stream, offset, whence);
            tempI64 = [
              stream.position >>> 0,
              (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil(
                (tempDouble - +(~~tempDouble >>> 0)) / 4294967296
              ) >>> 0 : 0)
            ], HEAP32[newOffset >> 2] = tempI64[0], HEAP32[newOffset + 4 >> 2] = tempI64[1];
            if (stream.getdents && offset === 0 && whence === 0)
              stream.getdents = null;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return e.errno;
          }
        }
        var doWritev = (stream, iov, iovcnt, offset) => {
          var ret = 0;
          for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAPU32[iov >> 2];
            var len = HEAPU32[iov + 4 >> 2];
            iov += 8;
            var curr = FS.write(stream, HEAP8, ptr, len, offset);
            if (curr < 0) return -1;
            ret += curr;
            if (curr < len) {
              break;
            }
            if (typeof offset != "undefined") {
              offset += curr;
            }
          }
          return ret;
        };
        function _fd_write(fd, iov, iovcnt, pnum) {
          try {
            var stream = SYSCALLS.getStreamFromFD(fd);
            var num = doWritev(stream, iov, iovcnt);
            HEAPU32[pnum >> 2] = num;
            return 0;
          } catch (e) {
            if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
            return e.errno;
          }
        }
        var stackAlloc = (sz) => __emscripten_stack_alloc(sz);
        var stringToUTF8OnStack = (str) => {
          var size = lengthBytesUTF8(str) + 1;
          var ret = stackAlloc(size);
          stringToUTF8(str, ret, size);
          return ret;
        };
        FS.createPreloadedFile = FS_createPreloadedFile;
        FS.staticInit();
        function checkIncomingModuleAPI() {
          ignoredModuleProp("fetchSettings");
        }
        var wasmImports = {
          /** @export */
          __assert_fail: ___assert_fail,
          /** @export */
          __call_sighandler: ___call_sighandler,
          /** @export */
          __syscall_fcntl64: ___syscall_fcntl64,
          /** @export */
          __syscall_fstat64: ___syscall_fstat64,
          /** @export */
          __syscall_getdents64: ___syscall_getdents64,
          /** @export */
          __syscall_ioctl: ___syscall_ioctl,
          /** @export */
          __syscall_lstat64: ___syscall_lstat64,
          /** @export */
          __syscall_mkdirat: ___syscall_mkdirat,
          /** @export */
          __syscall_newfstatat: ___syscall_newfstatat,
          /** @export */
          __syscall_openat: ___syscall_openat,
          /** @export */
          __syscall_renameat: ___syscall_renameat,
          /** @export */
          __syscall_rmdir: ___syscall_rmdir,
          /** @export */
          __syscall_stat64: ___syscall_stat64,
          /** @export */
          __syscall_unlinkat: ___syscall_unlinkat,
          /** @export */
          _abort_js: __abort_js,
          /** @export */
          _emscripten_memcpy_js: __emscripten_memcpy_js,
          /** @export */
          _emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear,
          /** @export */
          _setitimer_js: __setitimer_js,
          /** @export */
          emscripten_date_now: _emscripten_date_now,
          /** @export */
          emscripten_resize_heap: _emscripten_resize_heap,
          /** @export */
          environ_get: _environ_get,
          /** @export */
          environ_sizes_get: _environ_sizes_get,
          /** @export */
          exit: _exit,
          /** @export */
          fd_close: _fd_close,
          /** @export */
          fd_read: _fd_read,
          /** @export */
          fd_seek: _fd_seek,
          /** @export */
          fd_write: _fd_write,
          /** @export */
          proc_exit: _proc_exit
        };
        var wasmExports = createWasm();
        var ___wasm_call_ctors = createExportWrapper("__wasm_call_ctors", 0);
        var _main = Module["_main"] = createExportWrapper("__main_argc_argv", 2);
        var _fflush = createExportWrapper("fflush", 1);
        var __emscripten_timeout = createExportWrapper("_emscripten_timeout", 2);
        var _strerror = createExportWrapper("strerror", 1);
        var _emscripten_stack_init = () => (_emscripten_stack_init = wasmExports["emscripten_stack_init"])();
        var _emscripten_stack_get_free = () => (_emscripten_stack_get_free = wasmExports["emscripten_stack_get_free"])();
        var _emscripten_stack_get_base = () => (_emscripten_stack_get_base = wasmExports["emscripten_stack_get_base"])();
        var _emscripten_stack_get_end = () => (_emscripten_stack_get_end = wasmExports["emscripten_stack_get_end"])();
        var __emscripten_stack_restore = (a0) => (__emscripten_stack_restore = wasmExports["_emscripten_stack_restore"])(
          a0
        );
        var __emscripten_stack_alloc = (a0) => (__emscripten_stack_alloc = wasmExports["_emscripten_stack_alloc"])(a0);
        var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports["emscripten_stack_get_current"])();
        var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper(
          "dynCall_jiji",
          5
        );
        Module["run"] = run;
        Module["callMain"] = callMain;
        Module["FS"] = FS;
        var missingLibrarySymbols = [
          "writeI53ToI64",
          "writeI53ToI64Clamped",
          "writeI53ToI64Signaling",
          "writeI53ToU64Clamped",
          "writeI53ToU64Signaling",
          "readI53FromI64",
          "readI53FromU64",
          "convertI32PairToI53",
          "convertU32PairToI53",
          "getTempRet0",
          "setTempRet0",
          "inetPton4",
          "inetNtop4",
          "inetPton6",
          "inetNtop6",
          "readSockaddr",
          "writeSockaddr",
          "emscriptenLog",
          "readEmAsmArgs",
          "jstoi_q",
          "listenOnce",
          "autoResumeAudioContext",
          "dynCallLegacy",
          "getDynCaller",
          "dynCall",
          "runtimeKeepalivePush",
          "runtimeKeepalivePop",
          "asmjsMangle",
          "HandleAllocator",
          "getNativeTypeSize",
          "STACK_SIZE",
          "STACK_ALIGN",
          "POINTER_SIZE",
          "ASSERTIONS",
          "getCFunc",
          "ccall",
          "cwrap",
          "uleb128Encode",
          "sigToWasmTypes",
          "generateFuncType",
          "convertJsFunctionToWasm",
          "getEmptyTableSlot",
          "updateTableMap",
          "getFunctionAddress",
          "addFunction",
          "removeFunction",
          "reallyNegative",
          "unSign",
          "strLen",
          "reSign",
          "formatString",
          "intArrayToString",
          "AsciiToString",
          "UTF16ToString",
          "stringToUTF16",
          "lengthBytesUTF16",
          "UTF32ToString",
          "stringToUTF32",
          "lengthBytesUTF32",
          "stringToNewUTF8",
          "writeArrayToMemory",
          "registerKeyEventCallback",
          "maybeCStringToJsString",
          "findEventTarget",
          "getBoundingClientRect",
          "fillMouseEventData",
          "registerMouseEventCallback",
          "registerWheelEventCallback",
          "registerUiEventCallback",
          "registerFocusEventCallback",
          "fillDeviceOrientationEventData",
          "registerDeviceOrientationEventCallback",
          "fillDeviceMotionEventData",
          "registerDeviceMotionEventCallback",
          "screenOrientation",
          "fillOrientationChangeEventData",
          "registerOrientationChangeEventCallback",
          "fillFullscreenChangeEventData",
          "registerFullscreenChangeEventCallback",
          "JSEvents_requestFullscreen",
          "JSEvents_resizeCanvasForFullscreen",
          "registerRestoreOldStyle",
          "hideEverythingExceptGivenElement",
          "restoreHiddenElements",
          "setLetterbox",
          "softFullscreenResizeWebGLRenderTarget",
          "doRequestFullscreen",
          "fillPointerlockChangeEventData",
          "registerPointerlockChangeEventCallback",
          "registerPointerlockErrorEventCallback",
          "requestPointerLock",
          "fillVisibilityChangeEventData",
          "registerVisibilityChangeEventCallback",
          "registerTouchEventCallback",
          "fillGamepadEventData",
          "registerGamepadEventCallback",
          "registerBeforeUnloadEventCallback",
          "fillBatteryEventData",
          "battery",
          "registerBatteryEventCallback",
          "setCanvasElementSize",
          "getCanvasElementSize",
          "jsStackTrace",
          "getCallstack",
          "convertPCtoSourceLocation",
          "checkWasiClock",
          "wasiRightsToMuslOFlags",
          "wasiOFlagsToMuslOFlags",
          "createDyncallWrapper",
          "safeSetTimeout",
          "setImmediateWrapped",
          "clearImmediateWrapped",
          "polyfillSetImmediate",
          "registerPostMainLoop",
          "registerPreMainLoop",
          "getPromise",
          "makePromise",
          "idsToPromises",
          "makePromiseCallback",
          "ExceptionInfo",
          "findMatchingCatch",
          "Browser_asyncPrepareDataCounter",
          "safeRequestAnimationFrame",
          "isLeapYear",
          "ydayFromDate",
          "arraySum",
          "addDays",
          "getSocketFromFD",
          "getSocketAddress",
          "FS_unlink",
          "FS_mkdirTree",
          "_setNetworkCallback",
          "heapObjectForWebGLType",
          "toTypedArrayIndex",
          "webgl_enable_ANGLE_instanced_arrays",
          "webgl_enable_OES_vertex_array_object",
          "webgl_enable_WEBGL_draw_buffers",
          "webgl_enable_WEBGL_multi_draw",
          "webgl_enable_EXT_polygon_offset_clamp",
          "webgl_enable_EXT_clip_control",
          "webgl_enable_WEBGL_polygon_mode",
          "emscriptenWebGLGet",
          "computeUnpackAlignedImageSize",
          "colorChannelsInGlTextureFormat",
          "emscriptenWebGLGetTexPixelData",
          "emscriptenWebGLGetUniform",
          "webglGetUniformLocation",
          "webglPrepareUniformLocationsBeforeFirstUse",
          "webglGetLeftBracePos",
          "emscriptenWebGLGetVertexAttrib",
          "__glGetActiveAttribOrUniform",
          "writeGLArray",
          "registerWebGlEventCallback",
          "runAndAbortIfError",
          "ALLOC_NORMAL",
          "ALLOC_STACK",
          "allocate",
          "writeStringToMemory",
          "writeAsciiToMemory",
          "setErrNo",
          "demangle",
          "stackTrace"
        ];
        missingLibrarySymbols.forEach(missingLibrarySymbol);
        var unexportedSymbols = [
          "addOnPreRun",
          "addOnInit",
          "addOnPreMain",
          "addOnExit",
          "addOnPostRun",
          "addRunDependency",
          "removeRunDependency",
          "out",
          "err",
          "abort",
          "wasmMemory",
          "wasmExports",
          "writeStackCookie",
          "checkStackCookie",
          "convertI32PairToI53Checked",
          "stackSave",
          "stackRestore",
          "stackAlloc",
          "ptrToString",
          "zeroMemory",
          "exitJS",
          "getHeapMax",
          "growMemory",
          "ENV",
          "ERRNO_CODES",
          "strError",
          "DNS",
          "Protocols",
          "Sockets",
          "initRandomFill",
          "randomFill",
          "timers",
          "warnOnce",
          "readEmAsmArgsArray",
          "jstoi_s",
          "getExecutableName",
          "handleException",
          "keepRuntimeAlive",
          "callUserCallback",
          "maybeExit",
          "asyncLoad",
          "alignMemory",
          "mmapAlloc",
          "wasmTable",
          "noExitRuntime",
          "freeTableIndexes",
          "functionsInTableMap",
          "setValue",
          "getValue",
          "PATH",
          "PATH_FS",
          "UTF8Decoder",
          "UTF8ArrayToString",
          "UTF8ToString",
          "stringToUTF8Array",
          "stringToUTF8",
          "lengthBytesUTF8",
          "intArrayFromString",
          "stringToAscii",
          "UTF16Decoder",
          "stringToUTF8OnStack",
          "JSEvents",
          "specialHTMLTargets",
          "findCanvasEventTarget",
          "currentFullscreenStrategy",
          "restoreOldWindowedStyle",
          "UNWIND_CACHE",
          "ExitStatus",
          "getEnvStrings",
          "doReadv",
          "doWritev",
          "promiseMap",
          "uncaughtExceptionCount",
          "exceptionLast",
          "exceptionCaught",
          "Browser",
          "getPreloadedImageData__data",
          "wget",
          "MONTH_DAYS_REGULAR",
          "MONTH_DAYS_LEAP",
          "MONTH_DAYS_REGULAR_CUMULATIVE",
          "MONTH_DAYS_LEAP_CUMULATIVE",
          "SYSCALLS",
          "preloadPlugins",
          "FS_createPreloadedFile",
          "FS_modeStringToFlags",
          "FS_getMode",
          "FS_stdin_getChar_buffer",
          "FS_stdin_getChar",
          "FS_createPath",
          "FS_createDevice",
          "FS_readFile",
          "FS_createDataFile",
          "FS_createLazyFile",
          "MEMFS",
          "TTY",
          "PIPEFS",
          "SOCKFS",
          "tempFixedLengthArray",
          "miniTempWebGLFloatBuffers",
          "miniTempWebGLIntBuffers",
          "GL",
          "AL",
          "GLUT",
          "EGL",
          "GLEW",
          "IDBStore",
          "SDL",
          "SDL_gfx",
          "allocateUTF8",
          "allocateUTF8OnStack",
          "print",
          "printErr"
        ];
        unexportedSymbols.forEach(unexportedRuntimeSymbol);
        var calledRun;
        var calledPrerun;
        dependenciesFulfilled = function runCaller() {
          if (!calledRun) run();
          if (!calledRun) dependenciesFulfilled = runCaller;
        };
        function callMain(args = []) {
          assert(
            runDependencies == 0,
            'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])'
          );
          assert(calledPrerun, "cannot call main without calling preRun first");
          var entryFunction = _main;
          args.unshift(thisProgram);
          var argc = args.length;
          var argv = stackAlloc((argc + 1) * 4);
          var argv_ptr = argv;
          args.forEach((arg) => {
            HEAPU32[argv_ptr >> 2] = stringToUTF8OnStack(arg);
            argv_ptr += 4;
          });
          HEAPU32[argv_ptr >> 2] = 0;
          try {
            var ret = entryFunction(argc, argv);
            exitJS(
              ret,
              /* implicit = */
              true
            );
            return ret;
          } catch (e) {
            return handleException(e);
          }
        }
        function stackCheckInit() {
          _emscripten_stack_init();
          writeStackCookie();
        }
        function run(args = arguments_) {
          if (runDependencies > 0) {
            return;
          }
          stackCheckInit();
          if (!calledPrerun) {
            calledPrerun = 1;
            preRun();
            if (runDependencies > 0) {
              return;
            }
          }
          function doRun() {
            if (calledRun) return;
            calledRun = 1;
            Module["calledRun"] = 1;
            if (ABORT) return;
            initRuntime();
            preMain();
            readyPromiseResolve(Module);
            Module["onRuntimeInitialized"]?.();
            if (shouldRunNow) callMain(args);
            postRun();
          }
          if (Module["setStatus"]) {
            Module["setStatus"]("Running...");
            setTimeout(() => {
              setTimeout(() => Module["setStatus"](""), 1);
              doRun();
            }, 1);
          } else {
            doRun();
          }
          checkStackCookie();
        }
        function checkUnflushedContent() {
          var oldOut = out;
          var oldErr = err;
          var has = false;
          out = err = (x) => {
            has = true;
          };
          try {
            _fflush(0);
            ["stdout", "stderr"].forEach((name) => {
              var info = FS.analyzePath("/dev/" + name);
              if (!info) return;
              var stream = info.object;
              var rdev = stream.rdev;
              var tty = TTY.ttys[rdev];
              if (tty?.output?.length) {
                has = true;
              }
            });
          } catch (e) {
          }
          out = oldOut;
          err = oldErr;
          if (has) {
            warnOnce(
              "stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc."
            );
          }
        }
        if (Module["preInit"]) {
          if (typeof Module["preInit"] == "function")
            Module["preInit"] = [Module["preInit"]];
          while (Module["preInit"].length > 0) {
            Module["preInit"].pop()();
          }
        }
        var shouldRunNow = true;
        if (Module["noInitialRun"]) shouldRunNow = false;
        run();
        moduleRtn = readyPromise;
        for (const prop of Object.keys(Module)) {
          if (!(prop in moduleArg)) {
            Object.defineProperty(moduleArg, prop, {
              configurable: true,
              get() {
                abort(
                  `Access to module property ('${prop}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`
                );
              }
            });
          }
        }
        return moduleRtn;
      };
    })();
    if (typeof exports === "object" && typeof module === "object")
      module.exports = hacbrewpack;
    else if (typeof define === "function" && define["amd"])
      define([], () => hacbrewpack);
  }
});

// node_modules/.pnpm/@nx.js+constants@0.4.0/node_modules/@nx.js/constants/dist/applet.js
var AppletType;
(function(AppletType2) {
  AppletType2[AppletType2["None"] = -2] = "None";
  AppletType2[AppletType2["Default"] = -1] = "Default";
  AppletType2[AppletType2["Application"] = 0] = "Application";
  AppletType2[AppletType2["SystemApplet"] = 1] = "SystemApplet";
  AppletType2[AppletType2["LibraryApplet"] = 2] = "LibraryApplet";
  AppletType2[AppletType2["OverlayApplet"] = 3] = "OverlayApplet";
  AppletType2[AppletType2["SystemApplication"] = 4] = "SystemApplication";
})(AppletType || (AppletType = {}));
var OperationMode;
(function(OperationMode2) {
  OperationMode2[OperationMode2["Handheld"] = 0] = "Handheld";
  OperationMode2[OperationMode2["Console"] = 1] = "Console";
})(OperationMode || (OperationMode = {}));

// node_modules/.pnpm/@nx.js+constants@0.4.0/node_modules/@nx.js/constants/dist/fs.js
var FsSaveDataSpaceId;
(function(FsSaveDataSpaceId2) {
  FsSaveDataSpaceId2[FsSaveDataSpaceId2["System"] = 0] = "System";
  FsSaveDataSpaceId2[FsSaveDataSpaceId2["User"] = 1] = "User";
  FsSaveDataSpaceId2[FsSaveDataSpaceId2["SdSystem"] = 2] = "SdSystem";
  FsSaveDataSpaceId2[FsSaveDataSpaceId2["Temporary"] = 3] = "Temporary";
  FsSaveDataSpaceId2[FsSaveDataSpaceId2["SdUser"] = 4] = "SdUser";
  FsSaveDataSpaceId2[FsSaveDataSpaceId2["ProperSystem"] = 100] = "ProperSystem";
  FsSaveDataSpaceId2[FsSaveDataSpaceId2["SafeMode"] = 101] = "SafeMode";
})(FsSaveDataSpaceId || (FsSaveDataSpaceId = {}));
var FsSaveDataType;
(function(FsSaveDataType2) {
  FsSaveDataType2[FsSaveDataType2["System"] = 0] = "System";
  FsSaveDataType2[FsSaveDataType2["Account"] = 1] = "Account";
  FsSaveDataType2[FsSaveDataType2["Bcat"] = 2] = "Bcat";
  FsSaveDataType2[FsSaveDataType2["Device"] = 3] = "Device";
  FsSaveDataType2[FsSaveDataType2["Temporary"] = 4] = "Temporary";
  FsSaveDataType2[FsSaveDataType2["Cache"] = 5] = "Cache";
  FsSaveDataType2[FsSaveDataType2["SystemBcat"] = 6] = "SystemBcat";
})(FsSaveDataType || (FsSaveDataType = {}));
var BisPartitionId;
(function(BisPartitionId2) {
  BisPartitionId2[BisPartitionId2["BootPartition1Root"] = 0] = "BootPartition1Root";
  BisPartitionId2[BisPartitionId2["BootPartition2Root"] = 10] = "BootPartition2Root";
  BisPartitionId2[BisPartitionId2["UserDataRoot"] = 20] = "UserDataRoot";
  BisPartitionId2[BisPartitionId2["BootConfigAndPackage2Part1"] = 21] = "BootConfigAndPackage2Part1";
  BisPartitionId2[BisPartitionId2["BootConfigAndPackage2Part2"] = 22] = "BootConfigAndPackage2Part2";
  BisPartitionId2[BisPartitionId2["BootConfigAndPackage2Part3"] = 23] = "BootConfigAndPackage2Part3";
  BisPartitionId2[BisPartitionId2["BootConfigAndPackage2Part4"] = 24] = "BootConfigAndPackage2Part4";
  BisPartitionId2[BisPartitionId2["BootConfigAndPackage2Part5"] = 25] = "BootConfigAndPackage2Part5";
  BisPartitionId2[BisPartitionId2["BootConfigAndPackage2Part6"] = 26] = "BootConfigAndPackage2Part6";
  BisPartitionId2[BisPartitionId2["CalibrationBinary"] = 27] = "CalibrationBinary";
  BisPartitionId2[BisPartitionId2["CalibrationFile"] = 28] = "CalibrationFile";
  BisPartitionId2[BisPartitionId2["SafeMode"] = 29] = "SafeMode";
  BisPartitionId2[BisPartitionId2["User"] = 30] = "User";
  BisPartitionId2[BisPartitionId2["System"] = 31] = "System";
  BisPartitionId2[BisPartitionId2["SystemProperEncryption"] = 32] = "SystemProperEncryption";
  BisPartitionId2[BisPartitionId2["SystemProperPartition"] = 33] = "SystemProperPartition";
  BisPartitionId2[BisPartitionId2["SignedSystemPartitionOnSafeMode"] = 34] = "SignedSystemPartitionOnSafeMode";
  BisPartitionId2[BisPartitionId2["DeviceTreeBlob"] = 35] = "DeviceTreeBlob";
  BisPartitionId2[BisPartitionId2["System0"] = 36] = "System0";
})(BisPartitionId || (BisPartitionId = {}));
var FsFileSystemType;
(function(FsFileSystemType2) {
  FsFileSystemType2[FsFileSystemType2["Logo"] = 2] = "Logo";
  FsFileSystemType2[FsFileSystemType2["ContentControl"] = 3] = "ContentControl";
  FsFileSystemType2[FsFileSystemType2["ContentManual"] = 4] = "ContentManual";
  FsFileSystemType2[FsFileSystemType2["ContentMeta"] = 5] = "ContentMeta";
  FsFileSystemType2[FsFileSystemType2["ContentData"] = 6] = "ContentData";
  FsFileSystemType2[FsFileSystemType2["ApplicationPackage"] = 7] = "ApplicationPackage";
  FsFileSystemType2[FsFileSystemType2["RegisteredUpdate"] = 8] = "RegisteredUpdate";
})(FsFileSystemType || (FsFileSystemType = {}));
var FsContentAttributes;
(function(FsContentAttributes2) {
  FsContentAttributes2[FsContentAttributes2["None"] = 0] = "None";
  FsContentAttributes2[FsContentAttributes2["All"] = 15] = "All";
})(FsContentAttributes || (FsContentAttributes = {}));

// node_modules/.pnpm/@nx.js+constants@0.4.0/node_modules/@nx.js/constants/dist/hid.js
var HidNpadButton;
(function(HidNpadButton2) {
  HidNpadButton2[HidNpadButton2["A"] = 1] = "A";
  HidNpadButton2[HidNpadButton2["B"] = 2] = "B";
  HidNpadButton2[HidNpadButton2["X"] = 4] = "X";
  HidNpadButton2[HidNpadButton2["Y"] = 8] = "Y";
  HidNpadButton2[HidNpadButton2["StickL"] = 16] = "StickL";
  HidNpadButton2[HidNpadButton2["StickR"] = 32] = "StickR";
  HidNpadButton2[HidNpadButton2["L"] = 64] = "L";
  HidNpadButton2[HidNpadButton2["R"] = 128] = "R";
  HidNpadButton2[HidNpadButton2["ZL"] = 256] = "ZL";
  HidNpadButton2[HidNpadButton2["ZR"] = 512] = "ZR";
  HidNpadButton2[HidNpadButton2["Plus"] = 1024] = "Plus";
  HidNpadButton2[HidNpadButton2["Minus"] = 2048] = "Minus";
  HidNpadButton2[HidNpadButton2["Left"] = 4096] = "Left";
  HidNpadButton2[HidNpadButton2["Up"] = 8192] = "Up";
  HidNpadButton2[HidNpadButton2["Right"] = 16384] = "Right";
  HidNpadButton2[HidNpadButton2["Down"] = 32768] = "Down";
  HidNpadButton2[HidNpadButton2["StickLLeft"] = 65536] = "StickLLeft";
  HidNpadButton2[HidNpadButton2["StickLUp"] = 131072] = "StickLUp";
  HidNpadButton2[HidNpadButton2["StickLRight"] = 262144] = "StickLRight";
  HidNpadButton2[HidNpadButton2["StickLDown"] = 524288] = "StickLDown";
  HidNpadButton2[HidNpadButton2["StickRLeft"] = 1048576] = "StickRLeft";
  HidNpadButton2[HidNpadButton2["StickRUp"] = 2097152] = "StickRUp";
  HidNpadButton2[HidNpadButton2["StickRRight"] = 4194304] = "StickRRight";
  HidNpadButton2[HidNpadButton2["StickRDown"] = 8388608] = "StickRDown";
  HidNpadButton2[HidNpadButton2["LeftSL"] = 16777216] = "LeftSL";
  HidNpadButton2[HidNpadButton2["LeftSR"] = 33554432] = "LeftSR";
  HidNpadButton2[HidNpadButton2["RightSL"] = 67108864] = "RightSL";
  HidNpadButton2[HidNpadButton2["RightSR"] = 134217728] = "RightSR";
  HidNpadButton2[HidNpadButton2["Palma"] = 268435456] = "Palma";
  HidNpadButton2[HidNpadButton2["Verification"] = 536870912] = "Verification";
  HidNpadButton2[HidNpadButton2["HandheldLeftB"] = 1073741824] = "HandheldLeftB";
  HidNpadButton2[HidNpadButton2["LagonCLeft"] = -2147483648] = "LagonCLeft";
  HidNpadButton2[HidNpadButton2["LagonCUp"] = 1] = "LagonCUp";
  HidNpadButton2[HidNpadButton2["LagonCRight"] = 2] = "LagonCRight";
  HidNpadButton2[HidNpadButton2["LagonCDown"] = 4] = "LagonCDown";
  HidNpadButton2[HidNpadButton2["AnyLeft"] = 1118208] = "AnyLeft";
  HidNpadButton2[HidNpadButton2["AnyUp"] = 2236416] = "AnyUp";
  HidNpadButton2[HidNpadButton2["AnyRight"] = 4472832] = "AnyRight";
  HidNpadButton2[HidNpadButton2["AnyDown"] = 8945664] = "AnyDown";
  HidNpadButton2[HidNpadButton2["AnySL"] = 83886080] = "AnySL";
  HidNpadButton2[HidNpadButton2["AnySR"] = 167772160] = "AnySR";
})(HidNpadButton || (HidNpadButton = {}));
var HidDeviceTypeBits;
(function(HidDeviceTypeBits2) {
  HidDeviceTypeBits2[HidDeviceTypeBits2["FullKey"] = 1] = "FullKey";
  HidDeviceTypeBits2[HidDeviceTypeBits2["DebugPad"] = 2] = "DebugPad";
  HidDeviceTypeBits2[HidDeviceTypeBits2["HandheldLeft"] = 4] = "HandheldLeft";
  HidDeviceTypeBits2[HidDeviceTypeBits2["HandheldRight"] = 8] = "HandheldRight";
  HidDeviceTypeBits2[HidDeviceTypeBits2["JoyLeft"] = 16] = "JoyLeft";
  HidDeviceTypeBits2[HidDeviceTypeBits2["JoyRight"] = 32] = "JoyRight";
  HidDeviceTypeBits2[HidDeviceTypeBits2["Palma"] = 64] = "Palma";
  HidDeviceTypeBits2[HidDeviceTypeBits2["LarkHvcLeft"] = 128] = "LarkHvcLeft";
  HidDeviceTypeBits2[HidDeviceTypeBits2["LarkHvcRight"] = 256] = "LarkHvcRight";
  HidDeviceTypeBits2[HidDeviceTypeBits2["LarkNesLeft"] = 512] = "LarkNesLeft";
  HidDeviceTypeBits2[HidDeviceTypeBits2["LarkNesRight"] = 1024] = "LarkNesRight";
  HidDeviceTypeBits2[HidDeviceTypeBits2["HandheldLarkHvcLeft"] = 2048] = "HandheldLarkHvcLeft";
  HidDeviceTypeBits2[HidDeviceTypeBits2["HandheldLarkHvcRight"] = 4096] = "HandheldLarkHvcRight";
  HidDeviceTypeBits2[HidDeviceTypeBits2["HandheldLarkNesLeft"] = 8192] = "HandheldLarkNesLeft";
  HidDeviceTypeBits2[HidDeviceTypeBits2["HandheldLarkNesRight"] = 16384] = "HandheldLarkNesRight";
  HidDeviceTypeBits2[HidDeviceTypeBits2["Lucia"] = 32768] = "Lucia";
  HidDeviceTypeBits2[HidDeviceTypeBits2["Lagon"] = 65536] = "Lagon";
  HidDeviceTypeBits2[HidDeviceTypeBits2["Lager"] = 131072] = "Lager";
  HidDeviceTypeBits2[HidDeviceTypeBits2["System"] = -2147483648] = "System";
})(HidDeviceTypeBits || (HidDeviceTypeBits = {}));
var HidNpadStyleTag;
(function(HidNpadStyleTag2) {
  HidNpadStyleTag2[HidNpadStyleTag2["FullKey"] = 1] = "FullKey";
  HidNpadStyleTag2[HidNpadStyleTag2["Handheld"] = 2] = "Handheld";
  HidNpadStyleTag2[HidNpadStyleTag2["JoyDual"] = 4] = "JoyDual";
  HidNpadStyleTag2[HidNpadStyleTag2["JoyLeft"] = 8] = "JoyLeft";
  HidNpadStyleTag2[HidNpadStyleTag2["JoyRight"] = 16] = "JoyRight";
  HidNpadStyleTag2[HidNpadStyleTag2["Gc"] = 32] = "Gc";
  HidNpadStyleTag2[HidNpadStyleTag2["Palma"] = 64] = "Palma";
  HidNpadStyleTag2[HidNpadStyleTag2["Lark"] = 128] = "Lark";
  HidNpadStyleTag2[HidNpadStyleTag2["HandheldLark"] = 256] = "HandheldLark";
  HidNpadStyleTag2[HidNpadStyleTag2["Lucia"] = 512] = "Lucia";
  HidNpadStyleTag2[HidNpadStyleTag2["Lagon"] = 1024] = "Lagon";
  HidNpadStyleTag2[HidNpadStyleTag2["Lager"] = 2048] = "Lager";
  HidNpadStyleTag2[HidNpadStyleTag2["SystemExt"] = 536870912] = "SystemExt";
  HidNpadStyleTag2[HidNpadStyleTag2["System"] = 1073741824] = "System";
})(HidNpadStyleTag || (HidNpadStyleTag = {}));

// node_modules/.pnpm/@nx.js+constants@0.4.0/node_modules/@nx.js/constants/dist/service.js
var SfBufferAttr;
(function(SfBufferAttr2) {
  SfBufferAttr2[SfBufferAttr2["In"] = 1] = "In";
  SfBufferAttr2[SfBufferAttr2["Out"] = 2] = "Out";
  SfBufferAttr2[SfBufferAttr2["HipcMapAlias"] = 4] = "HipcMapAlias";
  SfBufferAttr2[SfBufferAttr2["HipcPointer"] = 8] = "HipcPointer";
  SfBufferAttr2[SfBufferAttr2["FixedSize"] = 16] = "FixedSize";
  SfBufferAttr2[SfBufferAttr2["HipcAutoSelect"] = 32] = "HipcAutoSelect";
  SfBufferAttr2[SfBufferAttr2["HipcMapTransferAllowsNonSecure"] = 64] = "HipcMapTransferAllowsNonSecure";
  SfBufferAttr2[SfBufferAttr2["HipcMapTransferAllowsNonDevice"] = 128] = "HipcMapTransferAllowsNonDevice";
})(SfBufferAttr || (SfBufferAttr = {}));
var SfOutHandleAttr;
(function(SfOutHandleAttr2) {
  SfOutHandleAttr2[SfOutHandleAttr2["None"] = 0] = "None";
  SfOutHandleAttr2[SfOutHandleAttr2["HipcCopy"] = 1] = "HipcCopy";
  SfOutHandleAttr2[SfOutHandleAttr2["HipcMove"] = 2] = "HipcMove";
})(SfOutHandleAttr || (SfOutHandleAttr = {}));

// node_modules/.pnpm/@nx.js+util@1.1.0/node_modules/@nx.js/util/dist/index.js
function createSingleton(init) {
  const map = /* @__PURE__ */ new WeakMap();
  return (k) => {
    if (!map.has(k)) {
      const v = init(k);
      map.set(k, v);
      return v;
    }
    return map.get(k);
  };
}
var view = createSingleton((view2) => new DataView(view2.buffer, view2.byteOffset, view2.byteLength));
var u8 = createSingleton((view2) => new Uint8Array(view2.buffer, view2.byteOffset, view2.byteLength));
function decodeCString(view2) {
  const arr = u8(view2);
  const nul = arr.indexOf(0);
  return new TextDecoder().decode(nul !== -1 ? arr.subarray(0, nul) : arr);
}
var ArrayBufferStruct = class {
  buffer;
  byteLength;
  byteOffset;
  static sizeof = 0;
  constructor(buffer, byteOffset, byteLength) {
    let buf;
    let bo = 0;
    if (buffer) {
      if ("buffer" in buffer) {
        buf = buffer.buffer;
        bo = buffer.byteOffset;
      } else {
        buf = buffer;
      }
    } else {
      buf = new ArrayBuffer(new.target.sizeof);
    }
    if (typeof byteOffset === "number") {
      bo += byteOffset;
    }
    Object.defineProperties(this, {
      buffer: { value: buf, enumerable: false },
      byteLength: { value: byteLength ?? new.target.sizeof, enumerable: false },
      byteOffset: { value: bo, enumerable: false }
    });
  }
  /**
   * Creates a copy of the struct buffer view as a new `ArrayBuffer` instance.
   */
  toArrayBuffer() {
    return this.buffer.slice(this.byteOffset, this.byteOffset + this.byteLength);
  }
};

// node_modules/.pnpm/@nx.js+ncm@1.2.0/node_modules/@nx.js/ncm/dist/service.js
var ncm = new Switch.Service("ncm");

// node_modules/.pnpm/@nx.js+ncm@1.2.0/node_modules/@nx.js/ncm/dist/types.js
var contentIdCache = createSingleton((self2) => new NcmContentId(self2, 0));
var contentMetaKeyCache = createSingleton((self2) => new NcmContentMetaKey(self2, 0));
var NcmStorageId;
(function(NcmStorageId2) {
  NcmStorageId2[NcmStorageId2["None"] = 0] = "None";
  NcmStorageId2[NcmStorageId2["Host"] = 1] = "Host";
  NcmStorageId2[NcmStorageId2["GameCard"] = 2] = "GameCard";
  NcmStorageId2[NcmStorageId2["BuiltInSystem"] = 3] = "BuiltInSystem";
  NcmStorageId2[NcmStorageId2["BuiltInUser"] = 4] = "BuiltInUser";
  NcmStorageId2[NcmStorageId2["SdCard"] = 5] = "SdCard";
  NcmStorageId2[NcmStorageId2["Any"] = 6] = "Any";
})(NcmStorageId || (NcmStorageId = {}));
var NcmContentType;
(function(NcmContentType2) {
  NcmContentType2[NcmContentType2["Meta"] = 0] = "Meta";
  NcmContentType2[NcmContentType2["Program"] = 1] = "Program";
  NcmContentType2[NcmContentType2["Data"] = 2] = "Data";
  NcmContentType2[NcmContentType2["Control"] = 3] = "Control";
  NcmContentType2[NcmContentType2["HtmlDocument"] = 4] = "HtmlDocument";
  NcmContentType2[NcmContentType2["LegalInformation"] = 5] = "LegalInformation";
  NcmContentType2[NcmContentType2["DeltaFragment"] = 6] = "DeltaFragment";
})(NcmContentType || (NcmContentType = {}));
var NcmContentMetaType;
(function(NcmContentMetaType2) {
  NcmContentMetaType2[NcmContentMetaType2["Unknown"] = 0] = "Unknown";
  NcmContentMetaType2[NcmContentMetaType2["SystemProgram"] = 1] = "SystemProgram";
  NcmContentMetaType2[NcmContentMetaType2["SystemData"] = 2] = "SystemData";
  NcmContentMetaType2[NcmContentMetaType2["SystemUpdate"] = 3] = "SystemUpdate";
  NcmContentMetaType2[NcmContentMetaType2["BootImagePackage"] = 4] = "BootImagePackage";
  NcmContentMetaType2[NcmContentMetaType2["BootImagePackageSafe"] = 5] = "BootImagePackageSafe";
  NcmContentMetaType2[NcmContentMetaType2["Application"] = 128] = "Application";
  NcmContentMetaType2[NcmContentMetaType2["Patch"] = 129] = "Patch";
  NcmContentMetaType2[NcmContentMetaType2["AddOnContent"] = 130] = "AddOnContent";
  NcmContentMetaType2[NcmContentMetaType2["Delta"] = 131] = "Delta";
  NcmContentMetaType2[NcmContentMetaType2["DataPatch"] = 132] = "DataPatch";
})(NcmContentMetaType || (NcmContentMetaType = {}));
var NcmContentMetaAttribute;
(function(NcmContentMetaAttribute2) {
  NcmContentMetaAttribute2[NcmContentMetaAttribute2["None"] = 0] = "None";
  NcmContentMetaAttribute2[NcmContentMetaAttribute2["IncludesExFatDriver"] = 1] = "IncludesExFatDriver";
  NcmContentMetaAttribute2[NcmContentMetaAttribute2["Rebootless"] = 2] = "Rebootless";
  NcmContentMetaAttribute2[NcmContentMetaAttribute2["Compacted"] = 4] = "Compacted";
})(NcmContentMetaAttribute || (NcmContentMetaAttribute = {}));
var NcmContentInstallType;
(function(NcmContentInstallType2) {
  NcmContentInstallType2[NcmContentInstallType2["Full"] = 0] = "Full";
  NcmContentInstallType2[NcmContentInstallType2["FragmentOnly"] = 1] = "FragmentOnly";
  NcmContentInstallType2[NcmContentInstallType2["Unknown"] = 7] = "Unknown";
})(NcmContentInstallType || (NcmContentInstallType = {}));
var NcmContentMetaPlatform;
(function(NcmContentMetaPlatform2) {
  NcmContentMetaPlatform2[NcmContentMetaPlatform2["Nx"] = 0] = "Nx";
})(NcmContentMetaPlatform || (NcmContentMetaPlatform = {}));
var NcmContentId = class _NcmContentId extends ArrayBufferStruct {
  //u8 c[0x10]; ///< Id
  static sizeof = 16;
  toString() {
    if (this.byteLength !== 16) {
      throw new Error("Content ID must be 16 bytes");
    }
    const v = view(this);
    return `${v.getBigUint64(0).toString(16).padStart(16, "0")}${v.getBigUint64(8).toString(16).padStart(16, "0")}`;
  }
  static from(s) {
    const lower = BigInt(`0x${s.slice(0, 16)}`);
    const upper = BigInt(`0x${s.slice(16, 32)}`);
    const id = new _NcmContentId();
    const v = view(id);
    v.setBigUint64(0, lower);
    v.setBigUint64(8, upper);
    return id;
  }
};
var NcmPlaceHolderId = class extends ArrayBufferStruct {
  //Uuid uuid;  ///< UUID
  static sizeof = 16;
};
var NcmContentStorageRecord = class extends ArrayBufferStruct {
  //NcmContentMetaKey key;
  //u8 storage_id;
  //u8 padding[0x7];
  static sizeof = 24;
  get key() {
    return contentMetaKeyCache(this);
  }
  set key(v) {
    u8(this).set(u8(v), 0);
  }
  get storageId() {
    return view(this).getUint8(16);
  }
  set storageId(v) {
    view(this).setUint8(16, v);
  }
};
var NcmContentMetaKey = class extends ArrayBufferStruct {
  //u64 id;                             ///< Id.
  //u32 version;                        ///< Version.
  //u8 type;                            ///< \ref NcmContentMetaType
  //u8 install_type;                    ///< \ref NcmContentInstallType
  //u8 padding[2];                      ///< Padding.
  static sizeof = 16;
  get id() {
    return view(this).getBigUint64(0, true);
  }
  set id(v) {
    view(this).setBigUint64(0, v, true);
  }
  get version() {
    return view(this).getUint32(8, true);
  }
  set version(v) {
    view(this).setUint32(8, v, true);
  }
  get type() {
    return view(this).getUint8(12);
  }
  set type(v) {
    view(this).setUint8(12, v);
  }
  get installType() {
    return view(this).getUint8(13);
  }
  set installType(v) {
    view(this).setUint8(13, v);
  }
};
var NcmContentInfo = class extends ArrayBufferStruct {
  //NcmContentId content_id;     ///< \ref NcmContentId
  //u32 size_low;                ///< Content size (low).
  //u8 size_high;                ///< Content size (high).
  //u8 attr;                     ///< Content attributes.
  //u8 content_type;             ///< \ref NcmContentType.
  //u8 id_offset;                ///< Offset of this content. Unused by most applications.
  static sizeof = 24;
  get contentId() {
    return contentIdCache(this);
  }
  set contentId(v) {
    u8(this).set(u8(v), 0);
  }
  get sizeLow() {
    return view(this).getUint32(16, true);
  }
  get sizeHigh() {
    return view(this).getUint8(20);
  }
  get size() {
    return BigInt(this.sizeHigh) << 32n | BigInt(this.sizeLow);
  }
  set size(v) {
    const dv = view(this);
    dv.setUint32(16, Number(v & 0xffffffffn), true);
    dv.setUint8(20, Number(v >> 32n));
  }
  get attr() {
    return view(this).getUint8(21);
  }
  set attr(v) {
    view(this).setUint8(21, v);
  }
  get contentType() {
    return view(this).getUint8(22);
  }
  set contentType(v) {
    view(this).setUint8(22, v);
  }
  get idOffset() {
    return view(this).getUint8(23);
  }
  set idOffset(v) {
    view(this).setUint8(23, v);
  }
};
var NcmPackagedContentInfo = class extends ArrayBufferStruct {
  //u8 hash[SHA256_HASH_SIZE];
  //NcmContentInfo info;
  static sizeof = 56;
  get hash() {
    return u8(this).subarray(0, 32);
  }
  set hash(v) {
    u8(this).set(v.subarray(0, 32), 0);
  }
  get contentInfo() {
    return new NcmContentInfo(this, 32);
  }
};
var NcmContentMetaHeader = class extends ArrayBufferStruct {
  // u16 extended_header_size;           ///< Size of optional struct that comes after this one.
  // u16 content_count;                  ///< Number of NcmContentInfos after the extra bytes.
  // u16 content_meta_count;             ///< Number of NcmContentMetaInfos that come after the NcmContentInfos.
  // u8 attributes;                      ///< Usually None (0).
  // u8 storage_id;                      ///< Usually None (0).
  static sizeof = 8;
  get extendedHeaderSize() {
    return view(this).getUint16(0, true);
  }
  set extendedHeaderSize(v) {
    view(this).setUint16(0, v, true);
  }
  get contentCount() {
    return view(this).getUint16(2, true);
  }
  set contentCount(v) {
    view(this).setUint16(2, v, true);
  }
  get contentMetaCount() {
    return view(this).getUint16(4, true);
  }
  set contentMetaCount(v) {
    view(this).setUint16(4, v, true);
  }
  get attributes() {
    return view(this).getUint8(6);
  }
  set attributes(v) {
    view(this).setUint8(6, v);
  }
  get storageId() {
    return view(this).getUint8(7);
  }
  set storageId(v) {
    view(this).setUint8(7, v);
  }
};
var NcmApplicationMetaExtendedHeader = class extends ArrayBufferStruct {
  // u64 patch_id;                     ///< PatchId of this application's patch.
  // u32 required_system_version;      ///< Firmware version required by this application.
  // u32 required_application_version; ///< [9.0.0+] Owner application version required by this application. Previously padding.
  static sizeof = 16;
  get patchId() {
    return view(this).getBigUint64(0, true);
  }
  set patchId(v) {
    view(this).setBigUint64(0, v, true);
  }
  get requiredSystemVersion() {
    return view(this).getUint32(8, true);
  }
  set requiredSystemVersion(v) {
    view(this).setUint32(8, v, true);
  }
  get requiredApplicationVersion() {
    return view(this).getUint32(12, true);
  }
  set requiredApplicationVersion(v) {
    view(this).setUint32(12, v, true);
  }
};
var NcmPatchMetaExtendedHeader = class extends ArrayBufferStruct {
  // u64 application_id;          ///< ApplicationId of this patch's corresponding application.
  // u32 required_system_version; ///< Firmware version required by this patch.
  // u32 extended_data_size;      ///< Size of the extended data following the NcmContentInfos.
  // u8 reserved[0x8];            ///< Unused.
  static sizeof = 24;
  get applicationId() {
    return view(this).getBigUint64(0, true);
  }
  set applicationId(v) {
    view(this).setBigUint64(0, v, true);
  }
  get requiredSystemVersion() {
    return view(this).getUint32(8, true);
  }
  set requiredSystemVersion(v) {
    view(this).setUint32(8, v, true);
  }
  get extendedDataSize() {
    return view(this).getUint32(12, true);
  }
  set extendedDataSize(v) {
    view(this).setUint32(12, v, true);
  }
};

// node_modules/.pnpm/@nx.js+ncm@1.2.0/node_modules/@nx.js/ncm/dist/content-storage.js
var NcmContentStorage = class _NcmContentStorage {
  static open(storageId) {
    const out = new Switch.Service();
    const inArr = new Uint8Array([storageId]);
    ncm.dispatchIn(4, inArr, {
      outObjects: [out]
    });
    return new _NcmContentStorage(out);
  }
  #srv;
  /**
   * @private
   */
  constructor(srv) {
    this.#srv = srv;
  }
  generatePlaceHolderId() {
    const uuid = new NcmPlaceHolderId();
    this.#srv.dispatchOut(0, uuid);
    return uuid;
  }
  createPlaceHolder(contentId, placeholderId, size) {
    const inData = new Uint8Array(40);
    inData.set(u8(placeholderId), 0);
    inData.set(u8(contentId), NcmPlaceHolderId.sizeof);
    view(inData).setBigInt64(32, size, true);
    this.#srv.dispatchIn(1, inData);
  }
  deletePlaceHolder(placeholderId) {
    this.#srv.dispatchIn(2, placeholderId);
  }
  hasPlaceHolder(placeholderId) {
    const out = new Uint8Array(1);
    this.#srv.dispatchInOut(3, placeholderId, out);
    return Boolean(out[0] & 1);
  }
  writePlaceHolder(placeholderId, offset, data) {
    const inData = new Uint8Array(24);
    inData.set(u8(placeholderId), 0);
    view(inData).setBigUint64(NcmPlaceHolderId.sizeof, offset, true);
    this.#srv.dispatchIn(4, inData, {
      bufferAttrs: [SfBufferAttr.HipcMapAlias | SfBufferAttr.In],
      buffers: [data]
    });
  }
  register(contentId, placeholderId) {
    const inData = new Uint8Array(32);
    inData.set(u8(placeholderId), 0);
    inData.set(u8(contentId), NcmPlaceHolderId.sizeof);
    this.#srv.dispatchIn(5, inData);
  }
  delete(contentId) {
    this.#srv.dispatchIn(6, contentId);
  }
  has(contentId) {
    const out = new Uint8Array(1);
    this.#srv.dispatchInOut(7, contentId, out);
    return Boolean(out[0] & 1);
  }
  getPath(contentId) {
    const out = new Uint8Array(768);
    this.#srv.dispatchIn(8, contentId, {
      bufferAttrs: [
        SfBufferAttr.FixedSize | SfBufferAttr.HipcPointer | SfBufferAttr.Out
      ],
      buffers: [out]
    });
    return decodeCString(out);
  }
  getPlaceHolderPath(placeholderId) {
    const out = new Uint8Array(768);
    this.#srv.dispatchIn(9, placeholderId, {
      bufferAttrs: [
        SfBufferAttr.FixedSize | SfBufferAttr.HipcPointer | SfBufferAttr.Out
      ],
      buffers: [out]
    });
    return decodeCString(out);
  }
  cleanupAllPlaceHolder() {
    this.#srv.dispatch(10);
  }
  listPlaceHolder(maxCount = 20) {
    const outIds = new ArrayBuffer(maxCount * NcmPlaceHolderId.sizeof);
    const out = new Int32Array(1);
    this.#srv.dispatchOut(11, out, {
      bufferAttrs: [SfBufferAttr.HipcMapAlias | SfBufferAttr.Out],
      buffers: [outIds]
    });
    const outCount = out[0];
    const rtn = new Array(outCount);
    for (let i = 0; i < outCount; i++) {
      rtn[i] = new NcmPlaceHolderId(outIds, i * NcmPlaceHolderId.sizeof);
    }
    return rtn;
  }
  getContentCount() {
    const out = new Int32Array(1);
    this.#srv.dispatchOut(12, out);
    return out[0];
  }
  listContentId(startOffset = 0, maxCount = this.getContentCount()) {
    const inData = new Int32Array([startOffset]);
    const outIds = new ArrayBuffer(maxCount * 16);
    const out = new Int32Array(1);
    this.#srv.dispatchInOut(13, inData, out, {
      bufferAttrs: [SfBufferAttr.HipcMapAlias | SfBufferAttr.Out],
      buffers: [outIds]
    });
    const outCount = out[0];
    const rtn = new Array(outCount);
    for (let i = 0; i < outCount; i++) {
      rtn[i] = new NcmContentId(outIds, i * 16);
    }
    return rtn;
  }
  getSizeFromContentId(contentId) {
    const out = new BigInt64Array(1);
    this.#srv.dispatchInOut(14, contentId, out);
    return out[0];
  }
  disableForcibly() {
    this.#srv.dispatch(15);
  }
  get freeSpace() {
    const out = new BigInt64Array(1);
    this.#srv.dispatchOut(22, out);
    return out[0];
  }
  get totalSpace() {
    const out = new BigInt64Array(1);
    this.#srv.dispatchOut(23, out);
    return out[0];
  }
  flushPlaceHolder() {
    this.#srv.dispatch(24);
  }
  getSizeFromPlaceHolderId(placeholderId) {
    const out = new BigInt64Array(1);
    this.#srv.dispatchInOut(25, placeholderId, out);
    return out[0];
  }
  repairInvalidFileAttribute() {
    this.#srv.dispatch(26);
  }
};

// node_modules/.pnpm/@nx.js+ncm@1.2.0/node_modules/@nx.js/ncm/dist/content-meta-database.js
var NcmContentMetaDatabase = class _NcmContentMetaDatabase {
  static open(storageId) {
    const out = new Switch.Service();
    const inArr = new Uint8Array([storageId]);
    ncm.dispatchIn(5, inArr, {
      outObjects: [out]
    });
    return new _NcmContentMetaDatabase(out);
  }
  #srv;
  /**
   * @private
   */
  constructor(srv) {
    this.#srv = srv;
  }
  set(key, data) {
    this.#srv.dispatchIn(0, key, {
      bufferAttrs: [SfBufferAttr.HipcMapAlias | SfBufferAttr.In],
      buffers: [data]
    });
  }
  getInto(key, data) {
    const out = new BigUint64Array(1);
    this.#srv.dispatchInOut(1, key, out.buffer, {
      bufferAttrs: [SfBufferAttr.HipcMapAlias | SfBufferAttr.Out],
      buffers: [data]
    });
    return out[0];
  }
  get(key) {
    const expectedSize = this.getSize(key);
    const data = new Uint8Array(Number(expectedSize));
    const size = this.getInto(key, data);
    if (size !== expectedSize) {
      throw new Error(`Unexpected size: ${size} (expected: ${expectedSize})`);
    }
    return data;
  }
  delete(key) {
    this.#srv.dispatchIn(2, key);
  }
  getContentIdByType(key, type) {
    const inData = new Uint8Array(24);
    inData[0] = type;
    inData.set(u8(key), 8);
    const out = new NcmContentId();
    this.#srv.dispatchInOut(3, inData, out);
    return out;
  }
  listContentInfo(key, startIndex, outInfo) {
    const inData = new Uint8Array(24);
    const inView = view(inData);
    inView.setInt32(0, startIndex ?? 0, true);
    inView.setUint32(4, 0, true);
    inData.set(u8(key), 8);
    const out = new Int32Array(1);
    this.#srv.dispatchInOut(4, inData, out, {
      bufferAttrs: [SfBufferAttr.HipcMapAlias | SfBufferAttr.Out],
      buffers: [outInfo]
    });
    return out[0];
  }
  has(key) {
    const out = new Uint8Array(1);
    this.#srv.dispatchInOut(8, key, out);
    return Boolean(out[0] & 1);
  }
  hasAll(keys) {
    const inData = new Uint8Array(keys.length * NcmContentMetaKey.sizeof);
    for (let i = 0; i < keys.length; i++) {
      inData.set(u8(keys[i]), i * 16);
    }
    const out = new Uint8Array(1);
    this.#srv.dispatchOut(9, out, {
      bufferAttrs: [SfBufferAttr.HipcMapAlias | SfBufferAttr.In],
      buffers: [inData]
    });
    return Boolean(out[0] & 1);
  }
  getSize(key) {
    const out = new BigUint64Array(1);
    this.#srv.dispatchInOut(10, key, out);
    return out[0];
  }
  commit() {
    this.#srv.dispatch(15);
  }
};

// node_modules/.pnpm/@nx.js+ns@1.0.0/node_modules/@nx.js/ns/dist/types.js
var NsApplicationRecordType;
(function(NsApplicationRecordType2) {
  NsApplicationRecordType2[NsApplicationRecordType2["Installed"] = 3] = "Installed";
  NsApplicationRecordType2[NsApplicationRecordType2["GamecardMissing"] = 5] = "GamecardMissing";
  NsApplicationRecordType2[NsApplicationRecordType2["Archived"] = 11] = "Archived";
})(NsApplicationRecordType || (NsApplicationRecordType = {}));

// node_modules/.pnpm/@nx.js+ns@1.0.0/node_modules/@nx.js/ns/dist/index.js
var nsAm2 = new Switch.Service("ns:am2");
var nsAppManSrv = new Switch.Service();
nsAm2.dispatch(7996, {
  outObjects: [nsAppManSrv]
});
function nsPushApplicationRecord(titleId, lastModifiedEvent, contentRecords) {
  const inData = new ArrayBuffer(16);
  new Uint8Array(inData)[0] = lastModifiedEvent;
  new BigUint64Array(inData, 8)[0] = titleId;
  nsAppManSrv.dispatchIn(16, inData, {
    bufferAttrs: [SfBufferAttr.HipcMapAlias | SfBufferAttr.In],
    buffers: [contentRecords]
  });
}
function nsListApplicationRecordContentMeta(offset, titleId, outBuf) {
  const inData = new BigUint64Array([offset, titleId]);
  const out = new Uint32Array(1);
  nsAppManSrv.dispatchInOut(17, inData, out, {
    bufferAttrs: [SfBufferAttr.HipcMapAlias | SfBufferAttr.Out],
    buffers: [outBuf]
  });
  return out[0];
}
function nsDeleteApplicationRecord(titleId) {
  const inData = new BigUint64Array([titleId]);
  nsAppManSrv.dispatchIn(27, inData);
}
function nsInvalidateApplicationControlCache(titleId) {
  const inData = new BigUint64Array([titleId]);
  nsAppManSrv.dispatchIn(404, inData);
}

// node_modules/.pnpm/@tootallnate+nsp@0.0.2/node_modules/@tootallnate/nsp/dist/index.js
var SIZEOF_HEADER = 16;
var SIZEOF_FILE_ENTRY = 24;
var decoder = new TextDecoder();
async function parseNsp(blob) {
  const s = blob.slice(0, SIZEOF_HEADER);
  const buf = await s.arrayBuffer();
  const view2 = new DataView(buf);
  const magic = view2.getUint32(0, true);
  if (magic !== 810763856) {
    throw new Error("Not a PFS0 file");
  }
  const fileCount = view2.getUint32(4, true);
  const stringTableSize = view2.getUint32(8, true);
  const reserved = view2.getUint32(12, true);
  if (reserved !== 0) {
    throw new Error("Reserved must be 0");
  }
  const stringTableOffset = SIZEOF_HEADER + fileCount * SIZEOF_FILE_ENTRY;
  const stringTableBlob = blob.slice(stringTableOffset, stringTableOffset + stringTableSize);
  const stringTableData = new Uint8Array(await stringTableBlob.arrayBuffer());
  const files = /* @__PURE__ */ new Map();
  const fileDataOffset = stringTableOffset + stringTableSize;
  for (let i = 0; i < fileCount; i++) {
    const offset = SIZEOF_HEADER + i * SIZEOF_FILE_ENTRY;
    const data = await blob.slice(offset, offset + SIZEOF_FILE_ENTRY).arrayBuffer();
    const view3 = new DataView(data);
    const fileEntry = {
      offset: view3.getBigUint64(0, true),
      size: view3.getBigUint64(8, true),
      stringTableOffset: view3.getUint32(16, true),
      pad: view3.getUint32(20, true)
    };
    let nameEndOffset = 0;
    for (let j = fileEntry.stringTableOffset; j < stringTableSize; j++) {
      const ch = stringTableData[j];
      if (ch === 0) {
        nameEndOffset = j;
        break;
      }
    }
    const name = decoder.decode(stringTableData.subarray(fileEntry.stringTableOffset, nameEndOffset));
    const fileContents = blob.slice(fileDataOffset + Number(fileEntry.offset), fileDataOffset + Number(fileEntry.offset + fileEntry.size));
    files.set(name, {
      offset: fileEntry.offset,
      size: fileEntry.size,
      stringTableOffset: fileEntry.stringTableOffset,
      pad: fileEntry.pad,
      data: fileContents
    });
  }
  return {
    fileCount,
    stringTableSize,
    reserved,
    files
  };
}

// node_modules/.pnpm/@nx.js+install-title@0.0.3/node_modules/@nx.js/install-title/dist/ipc/es.js
var es = new Switch.Service("es");
function esImportTicket(tik, cert) {
  es.dispatch(1, {
    bufferAttrs: [
      SfBufferAttr.HipcMapAlias | SfBufferAttr.In,
      SfBufferAttr.HipcMapAlias | SfBufferAttr.In
    ],
    buffers: [tik, cert]
  });
}

// node_modules/.pnpm/@nx.js+install-title@0.0.3/node_modules/@nx.js/install-title/dist/types.js
var PackagedContentMetaHeader = class extends ArrayBufferStruct {
  //u64 title_id;
  //u32 version;
  //u8 type; /* NcmContentMetaType */
  //u8 _0xd;
  //u16 extended_header_size;
  //u16 content_count;
  //u16 content_meta_count;
  //u8 attributes;
  //u8 storage_id;
  //u8 install_type; /* NcmContentInstallType */
  //bool comitted;
  //u32 required_system_version;
  //u32 _0x1c;
  static sizeof = 32;
  get titleId() {
    return view(this).getBigUint64(0, true);
  }
  get version() {
    return view(this).getUint32(8, true);
  }
  get type() {
    return view(this).getUint8(12);
  }
  get extendedHeaderSize() {
    return view(this).getUint16(14, true);
  }
  get contentCount() {
    return view(this).getUint16(16, true);
  }
};

// node_modules/.pnpm/@nx.js+install-title@0.0.3/node_modules/@nx.js/install-title/dist/index.js
async function* step(name, fn) {
  const timeStart = performance.now();
  yield { type: "start", name, timeStart };
  try {
    return yield* fn();
  } finally {
    yield { type: "end", name, timeStart, timeEnd: performance.now() };
  }
}
async function* installNsp(data, storageId) {
  const contentStorage = NcmContentStorage.open(storageId);
  const contentMetaDatabase = NcmContentMetaDatabase.open(storageId);
  const ncaFiles = /* @__PURE__ */ new Set();
  const titleIdToContentMetaKeysMap = /* @__PURE__ */ new Map();
  const nsp = yield* step("Parse NSP", async function* () {
    return parseNsp(data);
  });
  const cnmtNcaFiles = nsp.files.entries().filter(([name]) => name.endsWith(".cnmt.nca"));
  for (const [name, entry] of cnmtNcaFiles) {
    await installNca(name, entry, contentStorage);
    const cnmtData = await readContentMeta(name, contentStorage);
    const contentMetaKey = await installContentMetaRecords(contentMetaDatabase, cnmtData, createMetaContentInfo(name, entry), ncaFiles);
    const cnmtHeader = new PackagedContentMetaHeader(cnmtData);
    const titleId = getBaseTitleId(cnmtHeader.titleId, cnmtHeader.type);
    let contentMetaKeys = titleIdToContentMetaKeysMap.get(titleId);
    if (!contentMetaKeys) {
      contentMetaKeys = [];
      titleIdToContentMetaKeysMap.set(titleId, contentMetaKeys);
    }
    contentMetaKeys.push(contentMetaKey);
  }
  yield* importTicketCerts(nsp.files);
  for (const name of ncaFiles) {
    const entry = nsp.files.get(name);
    if (!entry) {
      throw new Error(`Missing "${name}" file`);
    }
    await installNca(name, entry, contentStorage);
  }
  for (const [titleId, contentMetaKeys] of titleIdToContentMetaKeysMap) {
    await pushApplicationRecord(titleId, contentMetaKeys, storageId);
  }
}
var ContentStoragePlaceholderWriteStream = class extends WritableStream {
  #offset;
  constructor(contentStorage, contentId, size) {
    const placeholderId = contentStorage.generatePlaceHolderId();
    try {
      contentStorage.deletePlaceHolder(placeholderId);
    } catch {
    }
    contentStorage.createPlaceHolder(contentId, placeholderId, BigInt(size));
    super({
      write: (chunk) => {
        console.debug(`Writing ${chunk.byteLength} bytes (${this.#offset})`);
        contentStorage.writePlaceHolder(placeholderId, this.#offset, chunk);
        this.#offset += BigInt(chunk.byteLength);
      },
      close: () => {
        console.debug(`Finished writing ${this.#offset} bytes`);
        try {
          contentStorage.delete(contentId);
        } catch {
        }
        contentStorage.register(contentId, placeholderId);
      }
    });
    this.#offset = 0n;
  }
};
function createContentMetaKey(header) {
  const key = new NcmContentMetaKey();
  key.id = header.titleId;
  key.version = header.version;
  key.type = header.type;
  key.installType = NcmContentInstallType.Full;
  return key;
}
function createMetaContentInfo(name, entry) {
  const info = new NcmContentInfo();
  info.contentId = NcmContentId.from(name);
  info.size = entry.size;
  info.contentType = NcmContentType.Meta;
  return info;
}
async function installNca(name, entry, contentStorage) {
  console.debug(`Installing "${name}" (${entry.size} bytes)`);
  const contentId = NcmContentId.from(name);
  await entry.data.stream().pipeTo(new ContentStoragePlaceholderWriteStream(contentStorage, contentId, entry.size));
}
async function* importTicketCerts(files) {
  const ticketFiles = files.keys().filter((name) => name.endsWith(".tik"));
  for (const tikName of ticketFiles) {
    yield* step(`Importing ticket "${tikName}"`, async function* () {
      const hash = tikName.slice(0, -4);
      const tikEntry = files.get(tikName);
      if (!tikEntry) {
        throw new Error(`Missing "${tikName}" file`);
      }
      const certName = `${hash}.cert`;
      const certEntry = files.get(certName);
      if (!certEntry) {
        throw new Error(`Missing "${certName}" file`);
      }
      const tik = await tikEntry.data.arrayBuffer();
      const cert = await certEntry.data.arrayBuffer();
      console.debug(`Importing "${tikName}" and "${certName}" certificate`);
      esImportTicket(tik, cert);
    });
  }
}
async function readContentMeta(name, contentStorage) {
  const contentId = NcmContentId.from(name);
  const path = contentStorage.getPath(contentId);
  console.debug(`Mounting path "${path}"`);
  const fs = Switch.FileSystem.openWithId(0n, FsFileSystemType.ContentMeta, path);
  const url = fs.mount();
  const files = Switch.readDirSync(url);
  if (!files) {
    throw new Error("Failed to read directory");
  }
  const cnmtName = files.find((name2) => name2.endsWith(".cnmt"));
  if (!cnmtName) {
    throw new Error('Failed to find ".cnmt" file');
  }
  console.debug(`Reading "${cnmtName}" file`);
  const cnmt = Switch.readFileSync(new URL(cnmtName, url));
  if (!cnmt) {
    throw new Error('Failed to read ".cnmt" file');
  }
  return cnmt;
}
async function installContentMetaRecords(contentMetaDatabase, cnmtData, cnmtContentInfo, ncaFilesToInstall) {
  const contentInfos = [];
  const cnmtHeader = new PackagedContentMetaHeader(cnmtData);
  const key = createContentMetaKey(cnmtHeader);
  const extendedHeaderSize = cnmtHeader.extendedHeaderSize;
  const type = cnmtHeader.type;
  let extendedDataSize = 0;
  contentInfos.push(cnmtContentInfo);
  const contentCount = cnmtHeader.contentCount;
  for (let i = 0; i < contentCount; i++) {
    const packagedContentInfoOffset = PackagedContentMetaHeader.sizeof + extendedHeaderSize + i * NcmPackagedContentInfo.sizeof;
    const packagedContentInfo = new NcmPackagedContentInfo(cnmtData, packagedContentInfoOffset);
    const contentInfo = packagedContentInfo.contentInfo;
    if (contentInfo.contentType === NcmContentType.DeltaFragment) {
      continue;
    }
    contentInfos.push(contentInfo);
    ncaFilesToInstall.add(`${contentInfo.contentId}.nca`);
  }
  if (type === NcmContentMetaType.Patch) {
    const patchMetaExtendedHeader = new NcmPatchMetaExtendedHeader(cnmtData, PackagedContentMetaHeader.sizeof);
    extendedDataSize = patchMetaExtendedHeader.extendedDataSize;
  }
  const contentMetaData = new Uint8Array(NcmContentMetaHeader.sizeof + extendedHeaderSize + contentInfos.length * NcmContentInfo.sizeof + extendedDataSize);
  const contentMetaHeader = new NcmContentMetaHeader(contentMetaData);
  contentMetaHeader.extendedHeaderSize = extendedHeaderSize;
  contentMetaHeader.contentCount = contentInfos.length;
  contentMetaHeader.contentMetaCount = 0;
  contentMetaHeader.attributes = 0;
  contentMetaHeader.storageId = 0;
  contentMetaData.set(new Uint8Array(cnmtData, PackagedContentMetaHeader.sizeof, extendedHeaderSize), NcmContentMetaHeader.sizeof);
  if (type === NcmContentMetaType.Application) {
    const extendedHeader = new NcmApplicationMetaExtendedHeader(contentMetaData, NcmContentMetaHeader.sizeof);
    extendedHeader.requiredSystemVersion = 0;
  } else if (type === NcmContentMetaType.Patch) {
    const extendedHeader = new NcmPatchMetaExtendedHeader(contentMetaData, NcmContentMetaHeader.sizeof);
    extendedHeader.requiredSystemVersion = 0;
  }
  for (let i = 0; i < contentInfos.length; i++) {
    const offset = NcmContentMetaHeader.sizeof + extendedHeaderSize + i * NcmContentInfo.sizeof;
    contentMetaData.set(u8(contentInfos[i]), offset);
  }
  if (extendedDataSize > 0) {
    contentMetaData.set(new Uint8Array(cnmtData, PackagedContentMetaHeader.sizeof + extendedHeaderSize + contentInfos.length * NcmContentInfo.sizeof, extendedDataSize), NcmContentMetaHeader.sizeof + extendedHeaderSize + contentInfos.length * NcmContentInfo.sizeof);
  }
  contentMetaDatabase.set(key, contentMetaData);
  contentMetaDatabase.commit();
  return key;
}
async function pushApplicationRecord(titleId, contentMetaKeys, storageId) {
  console.debug(`Pushing application record for "${titleId.toString(16).padStart(16, "0")}" (${contentMetaKeys.length} content meta keys)`);
  const contentStorageRecords = new Uint8Array(NcmContentStorageRecord.sizeof * 20);
  let entriesRead = 0;
  try {
    entriesRead = nsListApplicationRecordContentMeta(0n, titleId, contentStorageRecords);
    console.debug(`Found ${entriesRead} existing content meta records`);
  } catch (err) {
  }
  for (let i = 0; i < contentMetaKeys.length; i++) {
    const contentStorageRecord = new NcmContentStorageRecord(contentStorageRecords, (entriesRead + i) * NcmContentStorageRecord.sizeof);
    contentStorageRecord.key = contentMetaKeys[i];
    contentStorageRecord.storageId = storageId;
  }
  try {
    nsDeleteApplicationRecord(titleId);
  } catch {
  }
  nsPushApplicationRecord(titleId, NsApplicationRecordType.Installed, contentStorageRecords.slice(0, (entriesRead + contentMetaKeys.length) * NcmContentStorageRecord.sizeof));
  if (entriesRead > 0) {
    nsInvalidateApplicationControlCache(titleId);
  }
}
function getBaseTitleId(titleId, type) {
  switch (type) {
    case NcmContentMetaType.Patch:
      return titleId ^ 0x800n;
    case NcmContentMetaType.AddOnContent:
      return (titleId ^ 0x1000n) & ~0xfffn;
    default:
      return titleId;
  }
}

// node_modules/.pnpm/@tootallnate+nacp@0.2.0/node_modules/@tootallnate/nacp/dist/index.js
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _NACP_dataView;
var encoder = new TextEncoder();
var decoder2 = new TextDecoder();
var VideoCapture;
(function(VideoCapture2) {
  VideoCapture2[VideoCapture2["Disabled"] = 0] = "Disabled";
  VideoCapture2[VideoCapture2["Enabled"] = 1] = "Enabled";
  VideoCapture2[VideoCapture2["Automatic"] = 2] = "Automatic";
})(VideoCapture || (VideoCapture = {}));
function encodeWithSize(v, size, name) {
  const buf = encoder.encode(v);
  if (buf.length >= size) {
    throw new TypeError(`"${name}" length must be <= ${size - 1} bytes, got ${buf.length}`);
  }
  const bufWithZeros = new Uint8Array(size);
  bufWithZeros.set(buf);
  return bufWithZeros;
}
function parseU64(v) {
  let id = v;
  if (typeof id === "string") {
    if (id.length > 16) {
      throw new TypeError(`"id" length must be 16, got ${id.length}`);
    }
    id = BigInt(`0x${v}`);
  }
  return id;
}
var NACP = class {
  constructor(buffer) {
    _NACP_dataView.set(this, void 0);
    if (buffer) {
      this.buffer = buffer;
      __classPrivateFieldSet(this, _NACP_dataView, new DataView(this.buffer), "f");
    } else {
      this.buffer = new ArrayBuffer(16384);
      __classPrivateFieldSet(this, _NACP_dataView, new DataView(this.buffer), "f");
      __classPrivateFieldGet(this, _NACP_dataView, "f").setUint32(12324, 256, true);
      __classPrivateFieldGet(this, _NACP_dataView, "f").setUint32(12332, 3071, true);
      __classPrivateFieldGet(this, _NACP_dataView, "f").setUint32(12340, 65536, true);
      const unkData = new Uint8Array([
        12,
        255,
        255,
        10,
        255,
        12,
        12,
        12,
        12,
        12,
        13,
        13,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255,
        255
      ]);
      new Uint8Array(this.buffer, 12352, unkData.length).set(unkData);
      __classPrivateFieldGet(this, _NACP_dataView, "f").setUint32(12416, 65011712, true);
      __classPrivateFieldGet(this, _NACP_dataView, "f").setUint32(12424, 1572864, true);
      __classPrivateFieldGet(this, _NACP_dataView, "f").setUint32(12528, 258, true);
    }
  }
  get title() {
    const data = new Uint8Array(this.buffer, 0, 512);
    return decoder2.decode(data).replace(/\0*$/, "");
  }
  set title(v) {
    const buf = encodeWithSize(v, 512, "title");
    for (let i = 0; i < 12; i++) {
      new Uint8Array(this.buffer, i * 768, buf.length).set(buf);
    }
  }
  get author() {
    const data = new Uint8Array(this.buffer, 512, 256);
    return decoder2.decode(data).replace(/\0*$/, "");
  }
  set author(v) {
    const buf = encodeWithSize(v, 256, "author");
    for (let i = 0; i < 12; i++) {
      new Uint8Array(this.buffer, i * 768 + 512, buf.length).set(buf);
    }
  }
  set id(v) {
    const val = parseU64(v);
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12344, val, true);
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12408, val, true);
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12400, val + 0x1000n, true);
    for (let x = 0; x < 8; x++) {
      __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12464 + x * 8, val, true);
    }
  }
  get id() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12344, true);
  }
  /**
   * Whether or not to display the user account picker
   * when booting up the application.
   */
  set startupUserAccount(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12325, v);
  }
  get startupUserAccount() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12325);
  }
  set userAccountSwitchLock(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12326, v);
  }
  get userAccountSwitchLock() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12326);
  }
  set addOnContentRegistrationType(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12327, v);
  }
  get addOnContentRegistrationType() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12327);
  }
  set attributeFlag(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint32(12328, v, true);
  }
  get attributeFlag() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint32(12328, true);
  }
  set supportedLanguageFlag(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint32(12332, v, true);
  }
  get supportedLanguageFlag() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint32(12332, true);
  }
  set parentalControlFlag(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint32(12336, v, true);
  }
  get parentalControlFlag() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint32(12336, true);
  }
  /**
   * Whether or not pressing the screenshot button will capture a screenshot.
   *   - Value of `0`: Enabled
   *   - Value of `1`: Disabled
   */
  set screenshot(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12340, v);
  }
  get screenshot() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12340);
  }
  /**
   * Whether or not holding the screenshot button will capture a video.
   *   - Value of `0`: Disabled
   *   - Value of `1`: Only enabled if app invokes `appletInitializeGamePlayRecording()`
   *   - Value of `2`: Always enabled
   */
  set videoCapture(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12341, v);
  }
  get videoCapture() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12341);
  }
  set dataLossConfirmation(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12342, v);
  }
  get dataLossConfirmation() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12342);
  }
  set playLogPolicy(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12343, v);
  }
  get playLogPolicy() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12343);
  }
  set presenceGroupId(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12344, parseU64(v), true);
  }
  get presenceGroupId() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12344, true);
  }
  get version() {
    const data = new Uint8Array(this.buffer, 12384, 16);
    return decoder2.decode(data).replace(/\0*$/, "");
  }
  set version(v) {
    const buf = encodeWithSize(v, 16, "version");
    new Uint8Array(this.buffer, 12384, buf.length).set(buf);
  }
  set addOnContentBaseId(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12400, parseU64(v), true);
  }
  get addOnContentBaseId() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12400, true);
  }
  set saveDataOwnerId(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12408, parseU64(v), true);
  }
  get saveDataOwnerId() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12408, true);
  }
  set userAccountSaveDataSize(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12416, parseU64(v), true);
  }
  get userAccountSaveDataSize() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12416, true);
  }
  set userAccountSaveDataJournalSize(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12424, parseU64(v), true);
  }
  get userAccountSaveDataJournalSize() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12424, true);
  }
  set deviceSaveDataSize(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12432, parseU64(v), true);
  }
  get deviceSaveDataSize() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12432, true);
  }
  set deviceSaveDataJournalSize(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12440, parseU64(v), true);
  }
  get deviceSaveDataJournalSize() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12440, true);
  }
  set bcatDeliveryCacheStorageSize(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12448, parseU64(v), true);
  }
  get bcatDeliveryCacheStorageSize() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12448, true);
  }
  set applicationErrorCodeCategory(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12456, parseU64(v), true);
  }
  get applicationErrorCodeCategory() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12456, true);
  }
  /**
   * Text shown above logo during boot-up.
   *   - Value of 0: "Licensed by"
   *   - Value of 1: "Distributed by"
   *   - Anything else: no text shown
   */
  set logoType(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12528, v);
  }
  get logoType() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12528);
  }
  set logoHandling(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12529, v);
  }
  get logoHandling() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12529);
  }
  set runtimeAddOnContentInstall(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12530, v);
  }
  get runtimeAddOnContentInstall() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12530);
  }
  set runtimeParameterDelivery(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12531, v);
  }
  get runtimeParameterDelivery() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12531);
  }
  set crashReport(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12534, v);
  }
  get crashReport() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12534);
  }
  set hdcp(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12535, v);
  }
  get hdcp() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12535);
  }
  set pseudoDeviceIdSeed(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12456, parseU64(v), true);
  }
  get pseudoDeviceIdSeed() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12456, true);
  }
  set startupUserAccountOption(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12609, v);
  }
  get startupUserAccountOption() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12609);
  }
  set userAccountSaveDataSizeMax(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12616, parseU64(v), true);
  }
  get userAccountSaveDataSizeMax() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12616, true);
  }
  set userAccountSaveDataJournalSizeMax(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12624, parseU64(v), true);
  }
  get userAccountSaveDataJournalSizeMax() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12624, true);
  }
  set deviceSaveDataSizeMax(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12632, parseU64(v), true);
  }
  get deviceSaveDataSizeMax() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12632, true);
  }
  set deviceSaveDataJournalSizeMax(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12640, parseU64(v), true);
  }
  get deviceSaveDataJournalSizeMax() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12640, true);
  }
  set temporaryStorageSize(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12648, parseU64(v), true);
  }
  get temporaryStorageSize() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12648, true);
  }
  set cacheStorageSize(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12656, parseU64(v), true);
  }
  get cacheStorageSize() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12656, true);
  }
  set cacheStorageJournalSize(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12664, parseU64(v), true);
  }
  get cacheStorageJournalSize() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12664, true);
  }
  set cacheStorageDataAndJournalSizeMax(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setBigUint64(12672, parseU64(v), true);
  }
  get cacheStorageDataAndJournalSizeMax() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getBigUint64(12672, true);
  }
  set cacheStorageIndexMax(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint16(12680, v, true);
  }
  get cacheStorageIndexMax() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint16(12680, true);
  }
  set playLogQueryCapability(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12816, v);
  }
  get playLogQueryCapability() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12816);
  }
  set repairFlag(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12817, v);
  }
  get repairFlag() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12817);
  }
  set programIndex(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12818, v);
  }
  get programIndex() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12818);
  }
  set requiredNetworkServiceLicenseOnLaunch(v) {
    __classPrivateFieldGet(this, _NACP_dataView, "f").setUint8(12819, v);
  }
  get requiredNetworkServiceLicenseOnLaunch() {
    return __classPrivateFieldGet(this, _NACP_dataView, "f").getUint8(12819);
  }
};
_NACP_dataView = /* @__PURE__ */ new WeakMap();

// src/main.tsx
var import_react9 = __toESM(require_react());

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/event-target.js
var PATCHED_EVENT = /* @__PURE__ */ new WeakSet();
var STOP_PROPAGATION = /* @__PURE__ */ new WeakSet();
var TelaEventTarget = class extends EventTarget {
  get parentNode() {
    return null;
  }
  dispatchEvent(event) {
    if (!PATCHED_EVENT.has(event)) {
      Object.defineProperty(event, "stopPropagation", {
        configurable: true,
        value: function stopPropagation() {
          STOP_PROPAGATION.add(event);
        }
      });
      PATCHED_EVENT.add(event);
    }
    const rtn = super.dispatchEvent(event);
    const prop = `on${event.type}`;
    const fn = this[prop];
    if (typeof fn === "function") {
      if (!fn.call(this, event)) {
        event.preventDefault();
      }
    }
    if (!event.cancelBubble && STOP_PROPAGATION.has(event)) {
      Object.defineProperty(event, "cancelBubble", {
        configurable: true,
        value: true
      });
    }
    if (this.parentNode && event.bubbles && !event.cancelBubble) {
      return this.parentNode.dispatchEvent(event);
    }
    return rtn;
  }
};

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/entity.js
var __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet2 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Entity_x;
var _Entity_y;
var _Entity_width;
var _Entity_height;
var _Entity_rotate;
var _Entity_scaleX;
var _Entity_scaleY;
var _Entity_matrixDirty;
var _Entity_cachedMatrix;
var _Entity_inverseMatrixDirty;
var _Entity_cachedInverseMatrix;
var Entity = class extends TelaEventTarget {
  constructor(opts = {}) {
    super();
    _Entity_x.set(this, void 0);
    _Entity_y.set(this, void 0);
    _Entity_width.set(this, void 0);
    _Entity_height.set(this, void 0);
    _Entity_rotate.set(this, void 0);
    _Entity_scaleX.set(this, void 0);
    _Entity_scaleY.set(this, void 0);
    _Entity_matrixDirty.set(this, true);
    _Entity_cachedMatrix.set(this, null);
    _Entity_inverseMatrixDirty.set(this, true);
    _Entity_cachedInverseMatrix.set(this, null);
    this._pathDirty = true;
    this._cachedPath = null;
    this._root = null;
    this._hidden = false;
    __classPrivateFieldSet2(this, _Entity_x, opts.x ?? 0, "f");
    __classPrivateFieldSet2(this, _Entity_y, opts.y ?? 0, "f");
    __classPrivateFieldSet2(this, _Entity_width, opts.width ?? 0, "f");
    __classPrivateFieldSet2(this, _Entity_height, opts.height ?? 0, "f");
    this.alpha = opts.alpha ?? 1;
    this.filter = opts.filter;
    __classPrivateFieldSet2(this, _Entity_rotate, opts.rotate ?? 0, "f");
    __classPrivateFieldSet2(this, _Entity_scaleX, opts.scaleX, "f");
    __classPrivateFieldSet2(this, _Entity_scaleY, opts.scaleY, "f");
    this.shadowColor = opts.shadowColor;
    this.shadowBlur = opts.shadowBlur;
    this.shadowOffsetX = opts.shadowOffsetX;
    this.shadowOffsetY = opts.shadowOffsetY;
    this.blendMode = opts.blendMode;
    this.pointerEvents = opts.pointerEvents !== false;
    this.onclick = opts.onClick ?? null;
    this.onmousemove = opts.onMouseMove ?? null;
    this.onmouseenter = opts.onMouseEnter ?? null;
    this.onmouseleave = opts.onMouseLeave ?? null;
    this.onmousedown = opts.onMouseDown ?? null;
    this.onmouseup = opts.onMouseUp ?? null;
    this.ontouchstart = opts.onTouchStart ?? null;
    this.ontouchmove = opts.onTouchMove ?? null;
    this.ontouchend = opts.onTouchEnd ?? null;
  }
  // --- Getter/setter pairs for matrix- and path-affecting properties ---
  get x() {
    return __classPrivateFieldGet2(this, _Entity_x, "f");
  }
  set x(v) {
    if (__classPrivateFieldGet2(this, _Entity_x, "f") !== v) {
      __classPrivateFieldSet2(this, _Entity_x, v, "f");
      __classPrivateFieldSet2(this, _Entity_matrixDirty, true, "f");
      __classPrivateFieldSet2(this, _Entity_inverseMatrixDirty, true, "f");
    }
  }
  get y() {
    return __classPrivateFieldGet2(this, _Entity_y, "f");
  }
  set y(v) {
    if (__classPrivateFieldGet2(this, _Entity_y, "f") !== v) {
      __classPrivateFieldSet2(this, _Entity_y, v, "f");
      __classPrivateFieldSet2(this, _Entity_matrixDirty, true, "f");
      __classPrivateFieldSet2(this, _Entity_inverseMatrixDirty, true, "f");
    }
  }
  get width() {
    return __classPrivateFieldGet2(this, _Entity_width, "f");
  }
  set width(v) {
    if (__classPrivateFieldGet2(this, _Entity_width, "f") !== v) {
      __classPrivateFieldSet2(this, _Entity_width, v, "f");
      __classPrivateFieldSet2(this, _Entity_matrixDirty, true, "f");
      __classPrivateFieldSet2(this, _Entity_inverseMatrixDirty, true, "f");
      this._pathDirty = true;
    }
  }
  get height() {
    return __classPrivateFieldGet2(this, _Entity_height, "f");
  }
  set height(v) {
    if (__classPrivateFieldGet2(this, _Entity_height, "f") !== v) {
      __classPrivateFieldSet2(this, _Entity_height, v, "f");
      __classPrivateFieldSet2(this, _Entity_matrixDirty, true, "f");
      __classPrivateFieldSet2(this, _Entity_inverseMatrixDirty, true, "f");
      this._pathDirty = true;
    }
  }
  get rotate() {
    return __classPrivateFieldGet2(this, _Entity_rotate, "f");
  }
  set rotate(v) {
    if (__classPrivateFieldGet2(this, _Entity_rotate, "f") !== v) {
      __classPrivateFieldSet2(this, _Entity_rotate, v, "f");
      __classPrivateFieldSet2(this, _Entity_matrixDirty, true, "f");
      __classPrivateFieldSet2(this, _Entity_inverseMatrixDirty, true, "f");
    }
  }
  get scaleX() {
    return __classPrivateFieldGet2(this, _Entity_scaleX, "f");
  }
  set scaleX(v) {
    if (__classPrivateFieldGet2(this, _Entity_scaleX, "f") !== v) {
      __classPrivateFieldSet2(this, _Entity_scaleX, v, "f");
      __classPrivateFieldSet2(this, _Entity_matrixDirty, true, "f");
      __classPrivateFieldSet2(this, _Entity_inverseMatrixDirty, true, "f");
    }
  }
  get scaleY() {
    return __classPrivateFieldGet2(this, _Entity_scaleY, "f");
  }
  set scaleY(v) {
    if (__classPrivateFieldGet2(this, _Entity_scaleY, "f") !== v) {
      __classPrivateFieldSet2(this, _Entity_scaleY, v, "f");
      __classPrivateFieldSet2(this, _Entity_matrixDirty, true, "f");
      __classPrivateFieldSet2(this, _Entity_inverseMatrixDirty, true, "f");
    }
  }
  get parentNode() {
    return this._root;
  }
  get root() {
    const r = this._root;
    if (!r) {
      throw new Error(`Entity "${this.constructor.name}" has not been added to a \`Root\` context`);
    }
    return r;
  }
  get calculatedX() {
    return __classPrivateFieldGet2(this, _Entity_x, "f") + __classPrivateFieldGet2(this, _Entity_width, "f") / 2;
  }
  get calculatedY() {
    return __classPrivateFieldGet2(this, _Entity_y, "f") + __classPrivateFieldGet2(this, _Entity_height, "f") / 2;
  }
  get offsetX() {
    return -__classPrivateFieldGet2(this, _Entity_width, "f") / 2;
  }
  get offsetY() {
    return -__classPrivateFieldGet2(this, _Entity_height, "f") / 2;
  }
  get matrix() {
    if (__classPrivateFieldGet2(this, _Entity_matrixDirty, "f") || !__classPrivateFieldGet2(this, _Entity_cachedMatrix, "f")) {
      const m = new this.root.DOMMatrix();
      m.translateSelf(this.calculatedX, this.calculatedY);
      if (typeof __classPrivateFieldGet2(this, _Entity_rotate, "f") === "number") {
        m.rotateSelf(__classPrivateFieldGet2(this, _Entity_rotate, "f"));
      }
      if (__classPrivateFieldGet2(this, _Entity_scaleX, "f") || __classPrivateFieldGet2(this, _Entity_scaleY, "f")) {
        m.scaleSelf(__classPrivateFieldGet2(this, _Entity_scaleX, "f") ?? 1, __classPrivateFieldGet2(this, _Entity_scaleY, "f") ?? 1);
      }
      m.translateSelf(this.offsetX, this.offsetY);
      __classPrivateFieldSet2(this, _Entity_cachedMatrix, m, "f");
      __classPrivateFieldSet2(this, _Entity_matrixDirty, false, "f");
    }
    return __classPrivateFieldGet2(this, _Entity_cachedMatrix, "f");
  }
  get inverseMatrix() {
    if (__classPrivateFieldGet2(this, _Entity_inverseMatrixDirty, "f") || !__classPrivateFieldGet2(this, _Entity_cachedInverseMatrix, "f")) {
      __classPrivateFieldSet2(this, _Entity_cachedInverseMatrix, this.matrix.inverse(), "f");
      __classPrivateFieldSet2(this, _Entity_inverseMatrixDirty, false, "f");
    }
    return __classPrivateFieldGet2(this, _Entity_cachedInverseMatrix, "f");
  }
  isPointInPath(x, y) {
    const { ctx } = this.root;
    ctx.setTransform(this.matrix);
    const result = ctx.isPointInPath(this.path, x, y);
    return result;
  }
  /**
   * Override in subclasses to build the Path2D for this entity.
   * Called by the cached `path` getter when the path is dirty.
   */
  _buildPath() {
    const p = new this.root.Path2D();
    p.rect(0, 0, __classPrivateFieldGet2(this, _Entity_width, "f"), __classPrivateFieldGet2(this, _Entity_height, "f"));
    return p;
  }
  get path() {
    if (this._pathDirty || !this._cachedPath) {
      this._cachedPath = this._buildPath();
      this._pathDirty = false;
    }
    return this._cachedPath;
  }
  render() {
    if (!this.root) {
      throw new Error(`${this.constructor.name} instance has not been added to a root context`);
    }
    const { ctx } = this.root;
    ctx.globalAlpha = this.alpha;
    if (this.filter) {
      ctx.filter = this.filter;
    }
    if (this.blendMode) {
      ctx.globalCompositeOperation = this.blendMode;
    }
    if (this.shadowColor) {
      ctx.shadowColor = this.shadowColor;
    }
    if (typeof this.shadowBlur === "number") {
      ctx.shadowBlur = this.shadowBlur;
    }
    if (typeof this.shadowOffsetX === "number") {
      ctx.shadowOffsetX = this.shadowOffsetX;
    }
    if (typeof this.shadowOffsetY === "number") {
      ctx.shadowOffsetY = this.shadowOffsetY;
    }
    ctx.setTransform(this.matrix);
  }
};
_Entity_x = /* @__PURE__ */ new WeakMap(), _Entity_y = /* @__PURE__ */ new WeakMap(), _Entity_width = /* @__PURE__ */ new WeakMap(), _Entity_height = /* @__PURE__ */ new WeakMap(), _Entity_rotate = /* @__PURE__ */ new WeakMap(), _Entity_scaleX = /* @__PURE__ */ new WeakMap(), _Entity_scaleY = /* @__PURE__ */ new WeakMap(), _Entity_matrixDirty = /* @__PURE__ */ new WeakMap(), _Entity_cachedMatrix = /* @__PURE__ */ new WeakMap(), _Entity_inverseMatrixDirty = /* @__PURE__ */ new WeakMap(), _Entity_cachedInverseMatrix = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/shape.js
function resolveFillStroke(v) {
  if (!v)
    return void 0;
  if (typeof v === "object" && "current" in v) {
    const c = v.current;
    if (c && typeof c === "object" && "pattern" in c) {
      return c.pattern ?? void 0;
    }
    return c ?? void 0;
  }
  return v;
}
var Shape = class extends Entity {
  constructor(opts) {
    super(opts);
    this.clip = opts.clip;
    this.clipRule = opts.clipRule;
    this.fill = opts.fill;
    this.stroke = opts.stroke;
    this.lineCap = opts.lineCap;
    this.lineDash = opts.lineDash;
    this.lineDashOffset = opts.lineDashOffset;
    this.lineJoin = opts.lineJoin;
    this.lineWidth = opts.lineWidth ?? 1;
    this.miterLimit = opts.miterLimit;
  }
  isPointInPath(x, y) {
    const { ctx } = this.root;
    const { lineWidth, matrix, path } = this;
    const stroke = resolveFillStroke(this.stroke);
    const fill = resolveFillStroke(this.fill);
    ctx.setTransform(matrix);
    if (stroke) {
      ctx.lineWidth = lineWidth;
    }
    const result = stroke && ctx.isPointInStroke(path, x, y) || fill && ctx.isPointInPath(path, x, y) || false;
    return result;
  }
  render() {
    super.render();
    const { clip, clipRule, root, fill, fillRule, stroke, lineWidth, lineDash, lineDashOffset, lineCap, lineJoin, miterLimit } = this;
    const { ctx } = root;
    if (typeof lineWidth === "number") {
      ctx.lineWidth = lineWidth;
    }
    if (lineDash) {
      ctx.setLineDash(lineDash);
    }
    if (typeof lineDashOffset === "number") {
      ctx.lineDashOffset = lineDashOffset;
    }
    if (lineCap) {
      ctx.lineCap = lineCap;
    }
    if (lineJoin) {
      ctx.lineJoin = lineJoin;
    }
    if (typeof miterLimit === "number") {
      ctx.miterLimit = miterLimit;
    }
    ctx.beginPath();
    const path = this.path;
    if (clip || clipRule) {
      ctx.clip(path, clipRule);
    }
    const resolvedFill = resolveFillStroke(fill);
    const resolvedStroke = resolveFillStroke(stroke);
    if (resolvedFill) {
      ctx.fillStyle = resolvedFill;
      ctx.fill(path, fillRule);
    }
    if (resolvedStroke) {
      ctx.strokeStyle = resolvedStroke;
      ctx.stroke(path);
    }
  }
};

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/events.js
function scaledCoordinates(canvas, x, y) {
  const cssWidth = canvas.clientWidth ?? canvas.width;
  const cssHeight = canvas.clientHeight ?? canvas.height;
  const bufferWidth = canvas.width;
  const bufferHeight = canvas.height;
  const widthRatio = bufferWidth / cssWidth;
  const heightRatio = bufferHeight / cssHeight;
  return { x: x * widthRatio, y: y * heightRatio };
}
function dispatchEvent(target, event, originalEvent) {
  target.dispatchEvent(event);
  if (event.defaultPrevented) {
    originalEvent.preventDefault();
  }
  if (event.cancelBubble) {
    originalEvent.stopPropagation();
  }
}
function proxyEvents(canvasOrGroup, root, shouldScalePoint) {
  if (!canvasOrGroup.addEventListener) {
    return;
  }
  let mouseCurrentlyOver = null;
  const scalePoint = shouldScalePoint ? (x, y) => scaledCoordinates(canvasOrGroup, x, y) : (x, y) => ({ x, y });
  const activeTouches = /* @__PURE__ */ new Map();
  canvasOrGroup.addEventListener("touchstart", (_event) => {
    const event = _event;
    const offsetX = shouldScalePoint ? _event.target.offsetLeft : 0;
    const offsetY = shouldScalePoint ? _event.target.offsetTop : 0;
    let target = root;
    for (const touch of event.changedTouches) {
      const point = scalePoint(touch.clientX - offsetX, touch.clientY - offsetY);
      const radius = scalePoint(touch.radiusX, touch.radiusY);
      target = findTarget(root, point);
      activeTouches.set(touch.identifier, new Touch({
        clientX: point.x,
        clientY: point.y,
        force: touch.force,
        identifier: touch.identifier,
        pageX: point.x,
        pageY: point.y,
        radiusX: radius.x,
        radiusY: radius.y,
        rotationAngle: touch.rotationAngle,
        screenX: point.x,
        screenY: point.y,
        target
      }));
    }
    const ev = cloneTouchEvent(event, activeTouches);
    dispatchEvent(target, ev, event);
  });
  canvasOrGroup.addEventListener("touchmove", (_event) => {
    const event = _event;
    const offsetX = shouldScalePoint ? _event.target.offsetLeft : 0;
    const offsetY = shouldScalePoint ? _event.target.offsetTop : 0;
    let target = root;
    for (const touch of event.changedTouches) {
      const prevTouch = activeTouches.get(touch.identifier);
      const point = scalePoint(touch.clientX - offsetX, touch.clientY - offsetY);
      const radius = scalePoint(touch.radiusX, touch.radiusY);
      if (prevTouch) {
        target = prevTouch.target;
      }
      activeTouches.set(touch.identifier, new Touch({
        clientX: point.x,
        clientY: point.y,
        force: touch.force,
        identifier: touch.identifier,
        pageX: point.x,
        pageY: point.y,
        radiusX: radius.x,
        radiusY: radius.y,
        rotationAngle: touch.rotationAngle,
        screenX: point.x,
        screenY: point.y,
        target
      }));
    }
    const ev = cloneTouchEvent(event, activeTouches);
    dispatchEvent(target, ev, event);
  });
  canvasOrGroup.addEventListener("touchend", (_event) => {
    const event = _event;
    const ev = cloneTouchEvent(event, activeTouches);
    for (const touch of event.changedTouches) {
      activeTouches.delete(touch.identifier);
    }
    dispatchEvent(ev.changedTouches[0].target, ev, event);
  });
  function doMouseEvent(_event) {
    const event = _event;
    const point = scalePoint(event.layerX, event.layerY);
    const target = findTarget(root, point);
    const layer = getLayer(target, point);
    const ev = cloneMouseEvent(event, point, layer);
    dispatchEvent(target, ev, event);
  }
  canvasOrGroup.addEventListener("click", doMouseEvent);
  canvasOrGroup.addEventListener("mousedown", doMouseEvent);
  canvasOrGroup.addEventListener("mouseup", doMouseEvent);
  canvasOrGroup.addEventListener("mousemove", (e) => {
    const event = e;
    const point = scalePoint(event.layerX, event.layerY);
    const target = findTarget(root, point);
    const layer = getLayer(target, point);
    if (target !== mouseCurrentlyOver) {
      if (mouseCurrentlyOver instanceof Entity && !mouseCurrentlyOver._root) {
        mouseCurrentlyOver = null;
      }
      if (mouseCurrentlyOver) {
        mouseCurrentlyOver.dispatchEvent(cloneMouseEvent(event, point, getLayer(mouseCurrentlyOver, point), "mouseleave", {
          bubbles: false,
          cancelable: false
        }));
      }
      mouseCurrentlyOver = target;
      target.dispatchEvent(cloneMouseEvent(event, point, layer, "mouseenter", {
        bubbles: false,
        cancelable: false
      }));
    }
    const ev = cloneMouseEvent(event, point, layer);
    dispatchEvent(target, ev, event);
  });
  canvasOrGroup.addEventListener("mouseleave", (_e) => {
    mouseCurrentlyOver = null;
    const event = _e;
    const point = scalePoint(event.layerX, event.layerY);
    const ev = cloneMouseEvent(_e, point, point);
    dispatchEvent(root, ev, event);
  });
}

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/root.js
var __classPrivateFieldGet3 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet3 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _a;
var _Root_loadImageImpl;
var _Root_defaultLoadImage;
function createOffscreenCanvas(doc) {
  return (w, h) => {
    const c = doc.createElement("canvas");
    c.width = w;
    c.height = h;
    return c;
  };
}
var Root = class extends TelaEventTarget {
  constructor(ctx, opts = {}) {
    super();
    _Root_loadImageImpl.set(this, void 0);
    this.ctx = ctx;
    this.dirty = false;
    this.entities = [];
    this.render = this.render.bind(this);
    this.renderCount = 0;
    this.renderQueued = false;
    this.Canvas = opts.Canvas || globalThis.OffscreenCanvas || createOffscreenCanvas(ctx.canvas.ownerDocument);
    this.DOMMatrix = opts.DOMMatrix || globalThis.DOMMatrix;
    this.Path2D = opts.Path2D || globalThis.Path2D;
    __classPrivateFieldSet3(this, _Root_loadImageImpl, opts.loadImage ?? __classPrivateFieldGet3(_a, _a, "m", _Root_defaultLoadImage), "f");
    this.proxyEvents();
  }
  async loadImage(src, opts) {
    const signal = opts?.signal;
    if (signal?.aborted) {
      throw signal.reason ?? new DOMException("The operation was aborted.", "AbortError");
    }
    return new Promise((resolve, reject) => {
      let settled = false;
      const onAbort = () => {
        if (settled)
          return;
        settled = true;
        reject(signal.reason ?? new DOMException("The operation was aborted.", "AbortError"));
      };
      signal?.addEventListener("abort", onAbort, { once: true });
      __classPrivateFieldGet3(this, _Root_loadImageImpl, "f").call(this, src).then((img) => {
        if (settled)
          return;
        settled = true;
        signal?.removeEventListener("abort", onAbort);
        resolve(img);
      }, (err) => {
        if (settled)
          return;
        settled = true;
        signal?.removeEventListener("abort", onAbort);
        reject(err);
      });
    });
  }
  then(r) {
    if (r) {
      this.addEventListener("render", r, { once: true });
    }
  }
  proxyEvents() {
    proxyEvents(this.ctx.canvas, this, true);
  }
  clear() {
    for (const e of this.entities) {
      e._root = null;
    }
    this.entities.length = 0;
    this.queueRender();
  }
  add(entity) {
    if (entity._root)
      entity._root.remove(entity);
    entity._root = this;
    this.entities.push(entity);
    entity.dispatchEvent(new Event("add"));
    this.queueRender();
  }
  remove(entity) {
    const i = this.entities.indexOf(entity);
    if (i !== -1) {
      entity._root = null;
      this.entities.splice(i, 1);
      entity.dispatchEvent(new Event("remove"));
      this.queueRender();
    }
  }
  insertBefore(child, beforeChild) {
    const i = this.entities.indexOf(beforeChild);
    if (i === -1) {
      throw new Error("Entity to insert before is not a child of this Root");
    }
    if (child._root)
      child._root.remove(child);
    child._root = this;
    this.entities.splice(i, 0, child);
    this.queueRender();
  }
  render() {
    this.renderQueued = false;
    if (!this.dirty)
      return;
    this.renderCount++;
    const { ctx } = this;
    const { canvas } = ctx;
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const entity of this.entities) {
      if (entity._hidden)
        continue;
      ctx.save();
      entity.render();
      ctx.restore();
    }
    this.dirty = false;
    this.dispatchEvent(new Event("render"));
  }
  get width() {
    return this.ctx.canvas.width;
  }
  get height() {
    return this.ctx.canvas.height;
  }
  queueRender() {
    if (this.renderQueued)
      return;
    this.dirty = true;
    this.renderQueued = true;
    queueMicrotask(this.render);
  }
};
_a = Root, _Root_loadImageImpl = /* @__PURE__ */ new WeakMap(), _Root_defaultLoadImage = async function _Root_defaultLoadImage2(src) {
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = rej;
    img.src = src;
  });
  return img;
};

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/util.js
var MouseEvent = globalThis.MouseEvent || class MouseEvent2 extends Event {
};
function cloneMouseEvent(e, client, layer, type = e.type, init) {
  const clone = new MouseEvent(type, {
    ...e,
    bubbles: e.bubbles,
    cancelable: e.cancelable,
    button: e.button,
    buttons: e.buttons,
    composed: e.composed,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    shiftKey: e.shiftKey,
    detail: e.detail,
    which: e.which,
    view: e.view,
    ...init,
    clientX: client.x,
    clientY: client.y
  });
  Object.defineProperties(clone, {
    offsetX: { value: client.x, configurable: true },
    offsetY: { value: client.y, configurable: true },
    layerX: { value: layer.x, configurable: true },
    layerY: { value: layer.y, configurable: true }
  });
  return clone;
}
function mapTouches(list, touches) {
  return [...list].map((t) => {
    const touch = touches.get(t.identifier);
    if (!touch) {
      throw new Error(`Could not find Touch for ${t.identifier}`);
    }
    return touch;
  });
}
function cloneTouchEvent(e, touches, type = e.type) {
  const clone = new TouchEvent(type, {
    ...e,
    bubbles: e.bubbles,
    cancelable: e.cancelable,
    composed: e.composed,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    shiftKey: e.shiftKey,
    detail: e.detail,
    which: e.which,
    view: e.view,
    touches: mapTouches(e.touches, touches),
    changedTouches: mapTouches(e.changedTouches, touches),
    targetTouches: mapTouches(e.targetTouches, touches)
  });
  return clone;
}
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}
function findTarget(root, point) {
  let target = root;
  for (let i = root.entities.length - 1; i >= 0; i--) {
    const entity = root.entities[i];
    if (entity.pointerEvents && entity.isPointInPath(point.x, point.y)) {
      target = entity;
      break;
    }
  }
  return target;
}
function getLayer(target, point) {
  return target instanceof Root ? point : target.inverseMatrix.transformPoint(point);
}

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/arc.js
var __classPrivateFieldGet4 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet4 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Arc_startAngle;
var _Arc_endAngle;
var _Arc_counterclockwise;
var _Arc_radius;
var Arc = class extends Shape {
  get radius() {
    return __classPrivateFieldGet4(this, _Arc_radius, "f");
  }
  set radius(v) {
    if (__classPrivateFieldGet4(this, _Arc_radius, "f") !== v) {
      this.width = this.height = v * 2;
      __classPrivateFieldSet4(this, _Arc_radius, v, "f");
      this._pathDirty = true;
    }
  }
  get startAngle() {
    return __classPrivateFieldGet4(this, _Arc_startAngle, "f");
  }
  set startAngle(v) {
    if (__classPrivateFieldGet4(this, _Arc_startAngle, "f") !== v) {
      __classPrivateFieldSet4(this, _Arc_startAngle, v, "f");
      this._pathDirty = true;
    }
  }
  get endAngle() {
    return __classPrivateFieldGet4(this, _Arc_endAngle, "f");
  }
  set endAngle(v) {
    if (__classPrivateFieldGet4(this, _Arc_endAngle, "f") !== v) {
      __classPrivateFieldSet4(this, _Arc_endAngle, v, "f");
      this._pathDirty = true;
    }
  }
  get counterclockwise() {
    return __classPrivateFieldGet4(this, _Arc_counterclockwise, "f");
  }
  set counterclockwise(v) {
    if (__classPrivateFieldGet4(this, _Arc_counterclockwise, "f") !== v) {
      __classPrivateFieldSet4(this, _Arc_counterclockwise, v, "f");
      this._pathDirty = true;
    }
  }
  constructor(opts) {
    const r2 = opts.radius * 2;
    super({
      ...opts,
      width: r2,
      height: r2
    });
    _Arc_startAngle.set(this, void 0);
    _Arc_endAngle.set(this, void 0);
    _Arc_counterclockwise.set(this, void 0);
    _Arc_radius.set(this, void 0);
    __classPrivateFieldSet4(this, _Arc_startAngle, opts.startAngle, "f");
    __classPrivateFieldSet4(this, _Arc_endAngle, opts.endAngle, "f");
    __classPrivateFieldSet4(this, _Arc_counterclockwise, opts.counterclockwise, "f");
    __classPrivateFieldSet4(this, _Arc_radius, opts.radius, "f");
  }
  _buildPath() {
    const p = new this.root.Path2D();
    p.arc(__classPrivateFieldGet4(this, _Arc_radius, "f"), __classPrivateFieldGet4(this, _Arc_radius, "f"), __classPrivateFieldGet4(this, _Arc_radius, "f"), degreesToRadians(__classPrivateFieldGet4(this, _Arc_startAngle, "f")), degreesToRadians(__classPrivateFieldGet4(this, _Arc_endAngle, "f")), __classPrivateFieldGet4(this, _Arc_counterclockwise, "f"));
    return p;
  }
};
_Arc_startAngle = /* @__PURE__ */ new WeakMap(), _Arc_endAngle = /* @__PURE__ */ new WeakMap(), _Arc_counterclockwise = /* @__PURE__ */ new WeakMap(), _Arc_radius = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/bezier-curve.js
var __classPrivateFieldGet5 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet5 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _BezierCurve_x0;
var _BezierCurve_y0;
var _BezierCurve_cp1x;
var _BezierCurve_cp1y;
var _BezierCurve_cp2x;
var _BezierCurve_cp2y;
var _BezierCurve_x1;
var _BezierCurve_y1;
var BezierCurve = class extends Shape {
  /** The x-coordinate of the start point. */
  get x0() {
    return __classPrivateFieldGet5(this, _BezierCurve_x0, "f");
  }
  set x0(v) {
    if (__classPrivateFieldGet5(this, _BezierCurve_x0, "f") !== v) {
      __classPrivateFieldSet5(this, _BezierCurve_x0, v, "f");
      this._pathDirty = true;
    }
  }
  /** The y-coordinate of the start point. */
  get y0() {
    return __classPrivateFieldGet5(this, _BezierCurve_y0, "f");
  }
  set y0(v) {
    if (__classPrivateFieldGet5(this, _BezierCurve_y0, "f") !== v) {
      __classPrivateFieldSet5(this, _BezierCurve_y0, v, "f");
      this._pathDirty = true;
    }
  }
  /** The x-coordinate of the first control point. */
  get cp1x() {
    return __classPrivateFieldGet5(this, _BezierCurve_cp1x, "f");
  }
  set cp1x(v) {
    if (__classPrivateFieldGet5(this, _BezierCurve_cp1x, "f") !== v) {
      __classPrivateFieldSet5(this, _BezierCurve_cp1x, v, "f");
      this._pathDirty = true;
    }
  }
  /** The y-coordinate of the first control point. */
  get cp1y() {
    return __classPrivateFieldGet5(this, _BezierCurve_cp1y, "f");
  }
  set cp1y(v) {
    if (__classPrivateFieldGet5(this, _BezierCurve_cp1y, "f") !== v) {
      __classPrivateFieldSet5(this, _BezierCurve_cp1y, v, "f");
      this._pathDirty = true;
    }
  }
  /** The x-coordinate of the second control point. */
  get cp2x() {
    return __classPrivateFieldGet5(this, _BezierCurve_cp2x, "f");
  }
  set cp2x(v) {
    if (__classPrivateFieldGet5(this, _BezierCurve_cp2x, "f") !== v) {
      __classPrivateFieldSet5(this, _BezierCurve_cp2x, v, "f");
      this._pathDirty = true;
    }
  }
  /** The y-coordinate of the second control point. */
  get cp2y() {
    return __classPrivateFieldGet5(this, _BezierCurve_cp2y, "f");
  }
  set cp2y(v) {
    if (__classPrivateFieldGet5(this, _BezierCurve_cp2y, "f") !== v) {
      __classPrivateFieldSet5(this, _BezierCurve_cp2y, v, "f");
      this._pathDirty = true;
    }
  }
  /** The x-coordinate of the end point. */
  get x1() {
    return __classPrivateFieldGet5(this, _BezierCurve_x1, "f");
  }
  set x1(v) {
    if (__classPrivateFieldGet5(this, _BezierCurve_x1, "f") !== v) {
      __classPrivateFieldSet5(this, _BezierCurve_x1, v, "f");
      this._pathDirty = true;
    }
  }
  /** The y-coordinate of the end point. */
  get y1() {
    return __classPrivateFieldGet5(this, _BezierCurve_y1, "f");
  }
  set y1(v) {
    if (__classPrivateFieldGet5(this, _BezierCurve_y1, "f") !== v) {
      __classPrivateFieldSet5(this, _BezierCurve_y1, v, "f");
      this._pathDirty = true;
    }
  }
  constructor(opts) {
    const xs = [opts.x0, opts.cp1x, opts.cp2x, opts.x1];
    const ys = [opts.y0, opts.cp1y, opts.cp2y, opts.y1];
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    const maxX = Math.max(...xs);
    const maxY = Math.max(...ys);
    super({
      ...opts,
      width: maxX - minX,
      height: maxY - minY
    });
    _BezierCurve_x0.set(this, void 0);
    _BezierCurve_y0.set(this, void 0);
    _BezierCurve_cp1x.set(this, void 0);
    _BezierCurve_cp1y.set(this, void 0);
    _BezierCurve_cp2x.set(this, void 0);
    _BezierCurve_cp2y.set(this, void 0);
    _BezierCurve_x1.set(this, void 0);
    _BezierCurve_y1.set(this, void 0);
    __classPrivateFieldSet5(this, _BezierCurve_x0, opts.x0, "f");
    __classPrivateFieldSet5(this, _BezierCurve_y0, opts.y0, "f");
    __classPrivateFieldSet5(this, _BezierCurve_cp1x, opts.cp1x, "f");
    __classPrivateFieldSet5(this, _BezierCurve_cp1y, opts.cp1y, "f");
    __classPrivateFieldSet5(this, _BezierCurve_cp2x, opts.cp2x, "f");
    __classPrivateFieldSet5(this, _BezierCurve_cp2y, opts.cp2y, "f");
    __classPrivateFieldSet5(this, _BezierCurve_x1, opts.x1, "f");
    __classPrivateFieldSet5(this, _BezierCurve_y1, opts.y1, "f");
  }
  _buildPath() {
    const p = new this.root.Path2D();
    p.moveTo(__classPrivateFieldGet5(this, _BezierCurve_x0, "f"), __classPrivateFieldGet5(this, _BezierCurve_y0, "f"));
    p.bezierCurveTo(__classPrivateFieldGet5(this, _BezierCurve_cp1x, "f"), __classPrivateFieldGet5(this, _BezierCurve_cp1y, "f"), __classPrivateFieldGet5(this, _BezierCurve_cp2x, "f"), __classPrivateFieldGet5(this, _BezierCurve_cp2y, "f"), __classPrivateFieldGet5(this, _BezierCurve_x1, "f"), __classPrivateFieldGet5(this, _BezierCurve_y1, "f"));
    return p;
  }
};
_BezierCurve_x0 = /* @__PURE__ */ new WeakMap(), _BezierCurve_y0 = /* @__PURE__ */ new WeakMap(), _BezierCurve_cp1x = /* @__PURE__ */ new WeakMap(), _BezierCurve_cp1y = /* @__PURE__ */ new WeakMap(), _BezierCurve_cp2x = /* @__PURE__ */ new WeakMap(), _BezierCurve_cp2y = /* @__PURE__ */ new WeakMap(), _BezierCurve_x1 = /* @__PURE__ */ new WeakMap(), _BezierCurve_y1 = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/canvas.js
var Canvas = class extends Entity {
  constructor(opts, root) {
    super(opts);
    this.subcanvas = new root.Canvas(this.width, this.height);
  }
  getContext(...args) {
    return this.subcanvas.getContext(...args);
  }
  render() {
    if (this.subcanvas.width !== this.width) {
      this.subcanvas.width = this.width;
    }
    if (this.subcanvas.height !== this.height) {
      this.subcanvas.height = this.height;
    }
    super.render();
    this.root.ctx.drawImage(this.subcanvas, 0, 0, this.width, this.height);
  }
};

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/ellipse.js
var __classPrivateFieldGet6 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet6 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Ellipse_radiusX;
var _Ellipse_radiusY;
var _Ellipse_ellipseRotation;
var _Ellipse_startAngle;
var _Ellipse_endAngle;
var _Ellipse_counterclockwise;
var Ellipse = class extends Shape {
  get radiusX() {
    return __classPrivateFieldGet6(this, _Ellipse_radiusX, "f");
  }
  set radiusX(v) {
    if (__classPrivateFieldGet6(this, _Ellipse_radiusX, "f") !== v) {
      this.width = v * 2;
      __classPrivateFieldSet6(this, _Ellipse_radiusX, v, "f");
      this._pathDirty = true;
    }
  }
  get radiusY() {
    return __classPrivateFieldGet6(this, _Ellipse_radiusY, "f");
  }
  set radiusY(v) {
    if (__classPrivateFieldGet6(this, _Ellipse_radiusY, "f") !== v) {
      this.height = v * 2;
      __classPrivateFieldSet6(this, _Ellipse_radiusY, v, "f");
      this._pathDirty = true;
    }
  }
  get ellipseRotation() {
    return __classPrivateFieldGet6(this, _Ellipse_ellipseRotation, "f");
  }
  set ellipseRotation(v) {
    if (__classPrivateFieldGet6(this, _Ellipse_ellipseRotation, "f") !== v) {
      __classPrivateFieldSet6(this, _Ellipse_ellipseRotation, v, "f");
      this._pathDirty = true;
    }
  }
  get startAngle() {
    return __classPrivateFieldGet6(this, _Ellipse_startAngle, "f");
  }
  set startAngle(v) {
    if (__classPrivateFieldGet6(this, _Ellipse_startAngle, "f") !== v) {
      __classPrivateFieldSet6(this, _Ellipse_startAngle, v, "f");
      this._pathDirty = true;
    }
  }
  get endAngle() {
    return __classPrivateFieldGet6(this, _Ellipse_endAngle, "f");
  }
  set endAngle(v) {
    if (__classPrivateFieldGet6(this, _Ellipse_endAngle, "f") !== v) {
      __classPrivateFieldSet6(this, _Ellipse_endAngle, v, "f");
      this._pathDirty = true;
    }
  }
  get counterclockwise() {
    return __classPrivateFieldGet6(this, _Ellipse_counterclockwise, "f");
  }
  set counterclockwise(v) {
    if (__classPrivateFieldGet6(this, _Ellipse_counterclockwise, "f") !== v) {
      __classPrivateFieldSet6(this, _Ellipse_counterclockwise, v, "f");
      this._pathDirty = true;
    }
  }
  constructor(opts) {
    super({
      ...opts,
      width: opts.radiusX * 2,
      height: opts.radiusY * 2
    });
    _Ellipse_radiusX.set(this, void 0);
    _Ellipse_radiusY.set(this, void 0);
    _Ellipse_ellipseRotation.set(this, void 0);
    _Ellipse_startAngle.set(this, void 0);
    _Ellipse_endAngle.set(this, void 0);
    _Ellipse_counterclockwise.set(this, void 0);
    __classPrivateFieldSet6(this, _Ellipse_radiusX, opts.radiusX, "f");
    __classPrivateFieldSet6(this, _Ellipse_radiusY, opts.radiusY, "f");
    __classPrivateFieldSet6(this, _Ellipse_ellipseRotation, opts.ellipseRotation ?? 0, "f");
    __classPrivateFieldSet6(this, _Ellipse_startAngle, opts.startAngle ?? 0, "f");
    __classPrivateFieldSet6(this, _Ellipse_endAngle, opts.endAngle ?? 360, "f");
    __classPrivateFieldSet6(this, _Ellipse_counterclockwise, opts.counterclockwise, "f");
  }
  _buildPath() {
    const p = new this.root.Path2D();
    p.ellipse(__classPrivateFieldGet6(this, _Ellipse_radiusX, "f"), __classPrivateFieldGet6(this, _Ellipse_radiusY, "f"), __classPrivateFieldGet6(this, _Ellipse_radiusX, "f"), __classPrivateFieldGet6(this, _Ellipse_radiusY, "f"), degreesToRadians(__classPrivateFieldGet6(this, _Ellipse_ellipseRotation, "f")), degreesToRadians(__classPrivateFieldGet6(this, _Ellipse_startAngle, "f")), degreesToRadians(__classPrivateFieldGet6(this, _Ellipse_endAngle, "f")), __classPrivateFieldGet6(this, _Ellipse_counterclockwise, "f"));
    return p;
  }
};
_Ellipse_radiusX = /* @__PURE__ */ new WeakMap(), _Ellipse_radiusY = /* @__PURE__ */ new WeakMap(), _Ellipse_ellipseRotation = /* @__PURE__ */ new WeakMap(), _Ellipse_startAngle = /* @__PURE__ */ new WeakMap(), _Ellipse_endAngle = /* @__PURE__ */ new WeakMap(), _Ellipse_counterclockwise = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/group.js
var __classPrivateFieldGet7 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet7 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Group_borderRadius;
var Group = class extends Entity {
  get borderRadius() {
    return __classPrivateFieldGet7(this, _Group_borderRadius, "f");
  }
  set borderRadius(v) {
    __classPrivateFieldSet7(this, _Group_borderRadius, v, "f");
    this.root?.queueRender();
  }
  constructor(opts) {
    super(opts);
    _Group_borderRadius.set(this, void 0);
    this.subroot = opts.root;
    this.contentWidth = opts.contentWidth;
    this.contentHeight = opts.contentHeight;
    this.scrollTop = opts.scrollTop ?? 0;
    this.scrollLeft = opts.scrollLeft ?? 0;
    __classPrivateFieldSet7(this, _Group_borderRadius, opts.borderRadius, "f");
    proxyEvents(this, this.subroot, false);
  }
  render() {
    super.render();
    const isViewport = typeof this.contentWidth === "number" || typeof this.contentHeight === "number";
    const effectiveW = this.contentWidth ?? this.width;
    const effectiveH = this.contentHeight ?? this.height;
    if (!effectiveW || !effectiveH) {
      return;
    }
    this.subroot.render();
    const { ctx } = this.root;
    const borderRadius = __classPrivateFieldGet7(this, _Group_borderRadius, "f");
    let sx = 0;
    let sy = 0;
    if (isViewport) {
      sx = this.scrollLeft;
      sy = this.scrollTop;
    }
    if (borderRadius != null) {
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(0, 0, this.width, this.height, borderRadius);
      ctx.clip();
      ctx.drawImage(this.subroot.ctx.canvas, sx, sy, this.width, this.height, 0, 0, this.width, this.height);
      ctx.restore();
    } else if (isViewport) {
      ctx.drawImage(this.subroot.ctx.canvas, sx, sy, this.width, this.height, 0, 0, this.width, this.height);
    } else {
      ctx.drawImage(this.subroot.ctx.canvas, 0, 0, this.width, this.height);
    }
  }
};
_Group_borderRadius = /* @__PURE__ */ new WeakMap();
var GroupRoot = class extends Root {
  constructor(ctx, parent) {
    super(ctx, parent);
    this.parent = parent;
  }
  queueRender() {
    this.dirty = true;
    this.parent.queueRender();
  }
};

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/image.js
var __classPrivateFieldSet8 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet8 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Image_root;
var _Image_src;
var _Image_image;
var _Image_abortController;
var Image2 = class extends Entity {
  constructor(opts, root) {
    super({
      width: 0,
      height: 0,
      ...opts
    });
    _Image_root.set(this, void 0);
    _Image_src.set(this, void 0);
    _Image_image.set(this, void 0);
    _Image_abortController.set(this, void 0);
    this.sx = opts.sx;
    this.sy = opts.sy;
    this.sw = opts.sw;
    this.sh = opts.sh;
    this.imageSmoothing = opts.imageSmoothing;
    this.imageSmoothingQuality = opts.imageSmoothingQuality;
    __classPrivateFieldSet8(this, _Image_root, root, "f");
    __classPrivateFieldSet8(this, _Image_src, opts.src, "f");
    this.addEventListener("remove", () => this.abort(), { once: true });
    this.loadImage();
  }
  get src() {
    return __classPrivateFieldGet8(this, _Image_src, "f");
  }
  set src(v) {
    __classPrivateFieldSet8(this, _Image_src, v, "f");
    this.loadImage();
  }
  async loadImage() {
    __classPrivateFieldGet8(this, _Image_abortController, "f")?.abort();
    const controller = new AbortController();
    __classPrivateFieldSet8(this, _Image_abortController, controller, "f");
    try {
      const img = await __classPrivateFieldGet8(this, _Image_root, "f").loadImage(__classPrivateFieldGet8(this, _Image_src, "f"), {
        signal: controller.signal
      });
      __classPrivateFieldSet8(this, _Image_image, img, "f");
      if (this.width === 0) {
        this.width = img.naturalWidth;
      }
      if (this.height === 0) {
        this.height = img.naturalHeight;
      }
      this.root?.queueRender();
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError")
        return;
      throw err;
    }
  }
  /**
   * Cancel any in-flight image load. Called when the entity is removed from the tree.
   */
  abort() {
    __classPrivateFieldGet8(this, _Image_abortController, "f")?.abort();
    __classPrivateFieldSet8(this, _Image_abortController, void 0, "f");
  }
  render() {
    super.render();
    const { root } = this;
    const img = __classPrivateFieldGet8(this, _Image_image, "f");
    if (!img)
      return;
    if (typeof this.imageSmoothing === "boolean") {
      root.ctx.imageSmoothingEnabled = this.imageSmoothing;
    }
    if (this.imageSmoothingQuality) {
      root.ctx.imageSmoothingQuality = this.imageSmoothingQuality;
    }
    root.ctx.drawImage(img, this.sx ?? 0, this.sy ?? 0, this.sw ?? img.naturalWidth, this.sh ?? img.naturalHeight, 0, 0, this.width, this.height);
  }
};
_Image_root = /* @__PURE__ */ new WeakMap(), _Image_src = /* @__PURE__ */ new WeakMap(), _Image_image = /* @__PURE__ */ new WeakMap(), _Image_abortController = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/line.js
var __classPrivateFieldGet9 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet9 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Line_points;
var Line = class extends Shape {
  get points() {
    return __classPrivateFieldGet9(this, _Line_points, "f");
  }
  set points(v) {
    __classPrivateFieldSet9(this, _Line_points, v, "f");
    this._pathDirty = true;
  }
  constructor(opts) {
    const points = opts.points;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const p of points) {
      if (p.x < minX)
        minX = p.x;
      if (p.y < minY)
        minY = p.y;
      if (p.x > maxX)
        maxX = p.x;
      if (p.y > maxY)
        maxY = p.y;
    }
    const width = maxX - minX;
    const height = maxY - minY;
    super({
      ...opts,
      width,
      height
    });
    _Line_points.set(this, void 0);
    __classPrivateFieldSet9(this, _Line_points, points, "f");
  }
  _buildPath() {
    const p = new this.root.Path2D();
    const points = __classPrivateFieldGet9(this, _Line_points, "f");
    if (points.length > 0) {
      p.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        p.lineTo(points[i].x, points[i].y);
      }
    }
    return p;
  }
};
_Line_points = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/path.js
var import_parse_svg_path = __toESM(require_parse_svg_path(), 1);
var __classPrivateFieldGet10 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet10 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Path_d;
var Path = class extends Shape {
  get d() {
    return __classPrivateFieldGet10(this, _Path_d, "f");
  }
  set d(v) {
    if (__classPrivateFieldGet10(this, _Path_d, "f") !== v) {
      __classPrivateFieldSet10(this, _Path_d, v, "f");
      this._pathDirty = true;
    }
  }
  constructor(opts) {
    super(opts);
    _Path_d.set(this, void 0);
    __classPrivateFieldSet10(this, _Path_d, opts.d, "f");
  }
  _buildPath() {
    const parsed = (0, import_parse_svg_path.default)(__classPrivateFieldGet10(this, _Path_d, "f"));
    const modified = parsed.map((c) => `${c[0]}${c.slice(1).join(",")}`).join("");
    return new this.root.Path2D(modified);
  }
};
_Path_d = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/pattern.js
var Pattern = class extends Group {
  constructor(opts) {
    super(opts);
    this.pattern = null;
    this.repetition = opts.repetition ?? "repeat";
  }
  render() {
    Entity.prototype.render.call(this);
    this.subroot.render();
    this.pattern = this.root.ctx.createPattern(this.subroot.ctx.canvas, this.repetition);
  }
};

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/quadratic-curve.js
var __classPrivateFieldGet11 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet11 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _QuadraticCurve_x0;
var _QuadraticCurve_y0;
var _QuadraticCurve_cpx;
var _QuadraticCurve_cpy;
var _QuadraticCurve_x1;
var _QuadraticCurve_y1;
var QuadraticCurve = class extends Shape {
  /** The x-coordinate of the start point. */
  get x0() {
    return __classPrivateFieldGet11(this, _QuadraticCurve_x0, "f");
  }
  set x0(v) {
    if (__classPrivateFieldGet11(this, _QuadraticCurve_x0, "f") !== v) {
      __classPrivateFieldSet11(this, _QuadraticCurve_x0, v, "f");
      this._pathDirty = true;
    }
  }
  /** The y-coordinate of the start point. */
  get y0() {
    return __classPrivateFieldGet11(this, _QuadraticCurve_y0, "f");
  }
  set y0(v) {
    if (__classPrivateFieldGet11(this, _QuadraticCurve_y0, "f") !== v) {
      __classPrivateFieldSet11(this, _QuadraticCurve_y0, v, "f");
      this._pathDirty = true;
    }
  }
  /** The x-coordinate of the control point. */
  get cpx() {
    return __classPrivateFieldGet11(this, _QuadraticCurve_cpx, "f");
  }
  set cpx(v) {
    if (__classPrivateFieldGet11(this, _QuadraticCurve_cpx, "f") !== v) {
      __classPrivateFieldSet11(this, _QuadraticCurve_cpx, v, "f");
      this._pathDirty = true;
    }
  }
  /** The y-coordinate of the control point. */
  get cpy() {
    return __classPrivateFieldGet11(this, _QuadraticCurve_cpy, "f");
  }
  set cpy(v) {
    if (__classPrivateFieldGet11(this, _QuadraticCurve_cpy, "f") !== v) {
      __classPrivateFieldSet11(this, _QuadraticCurve_cpy, v, "f");
      this._pathDirty = true;
    }
  }
  /** The x-coordinate of the end point. */
  get x1() {
    return __classPrivateFieldGet11(this, _QuadraticCurve_x1, "f");
  }
  set x1(v) {
    if (__classPrivateFieldGet11(this, _QuadraticCurve_x1, "f") !== v) {
      __classPrivateFieldSet11(this, _QuadraticCurve_x1, v, "f");
      this._pathDirty = true;
    }
  }
  /** The y-coordinate of the end point. */
  get y1() {
    return __classPrivateFieldGet11(this, _QuadraticCurve_y1, "f");
  }
  set y1(v) {
    if (__classPrivateFieldGet11(this, _QuadraticCurve_y1, "f") !== v) {
      __classPrivateFieldSet11(this, _QuadraticCurve_y1, v, "f");
      this._pathDirty = true;
    }
  }
  constructor(opts) {
    const xs = [opts.x0, opts.cpx, opts.x1];
    const ys = [opts.y0, opts.cpy, opts.y1];
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    const maxX = Math.max(...xs);
    const maxY = Math.max(...ys);
    super({
      ...opts,
      width: maxX - minX,
      height: maxY - minY
    });
    _QuadraticCurve_x0.set(this, void 0);
    _QuadraticCurve_y0.set(this, void 0);
    _QuadraticCurve_cpx.set(this, void 0);
    _QuadraticCurve_cpy.set(this, void 0);
    _QuadraticCurve_x1.set(this, void 0);
    _QuadraticCurve_y1.set(this, void 0);
    __classPrivateFieldSet11(this, _QuadraticCurve_x0, opts.x0, "f");
    __classPrivateFieldSet11(this, _QuadraticCurve_y0, opts.y0, "f");
    __classPrivateFieldSet11(this, _QuadraticCurve_cpx, opts.cpx, "f");
    __classPrivateFieldSet11(this, _QuadraticCurve_cpy, opts.cpy, "f");
    __classPrivateFieldSet11(this, _QuadraticCurve_x1, opts.x1, "f");
    __classPrivateFieldSet11(this, _QuadraticCurve_y1, opts.y1, "f");
  }
  _buildPath() {
    const p = new this.root.Path2D();
    p.moveTo(__classPrivateFieldGet11(this, _QuadraticCurve_x0, "f"), __classPrivateFieldGet11(this, _QuadraticCurve_y0, "f"));
    p.quadraticCurveTo(__classPrivateFieldGet11(this, _QuadraticCurve_cpx, "f"), __classPrivateFieldGet11(this, _QuadraticCurve_cpy, "f"), __classPrivateFieldGet11(this, _QuadraticCurve_x1, "f"), __classPrivateFieldGet11(this, _QuadraticCurve_y1, "f"));
    return p;
  }
};
_QuadraticCurve_x0 = /* @__PURE__ */ new WeakMap(), _QuadraticCurve_y0 = /* @__PURE__ */ new WeakMap(), _QuadraticCurve_cpx = /* @__PURE__ */ new WeakMap(), _QuadraticCurve_cpy = /* @__PURE__ */ new WeakMap(), _QuadraticCurve_x1 = /* @__PURE__ */ new WeakMap(), _QuadraticCurve_y1 = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/rect.js
var __classPrivateFieldGet12 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet12 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Rect_borderRadius;
var Rect = class extends Shape {
  get borderRadius() {
    return __classPrivateFieldGet12(this, _Rect_borderRadius, "f");
  }
  set borderRadius(v) {
    __classPrivateFieldSet12(this, _Rect_borderRadius, v, "f");
    this._pathDirty = true;
  }
  constructor(opts) {
    super(opts);
    _Rect_borderRadius.set(this, void 0);
    __classPrivateFieldSet12(this, _Rect_borderRadius, opts.borderRadius, "f");
  }
  _buildPath() {
    const p = new this.root.Path2D();
    if (__classPrivateFieldGet12(this, _Rect_borderRadius, "f") !== void 0) {
      p.roundRect(0, 0, this.width, this.height, __classPrivateFieldGet12(this, _Rect_borderRadius, "f"));
    } else {
      p.rect(0, 0, this.width, this.height);
    }
    return p;
  }
};
_Rect_borderRadius = /* @__PURE__ */ new WeakMap();

// node_modules/.pnpm/@react-tela+core@1.0.1/node_modules/@react-tela/core/dist/text.js
var __classPrivateFieldGet13 = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet13 = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _Text_instances;
var _Text_value;
var _Text_wrapText;
var _Text_ellipsisText;
function quoteFamilyName(name) {
  if (name.includes(" ")) {
    return `"${name}"`;
  }
  return name;
}
function formatFontFamily(fontFamily) {
  if (Array.isArray(fontFamily)) {
    return fontFamily.map(quoteFamilyName).join(", ");
  }
  if (fontFamily.includes(",")) {
    return fontFamily;
  }
  return quoteFamilyName(fontFamily);
}
var Text = class extends Entity {
  get value() {
    return __classPrivateFieldGet13(this, _Text_value, "f");
  }
  set value(v) {
    __classPrivateFieldSet13(this, _Text_value, v, "f");
  }
  constructor(opts) {
    super({
      width: 0,
      height: 0,
      ...opts
    });
    _Text_instances.add(this);
    _Text_value.set(this, void 0);
    this.value = opts.value;
    this.fontFamily = opts.fontFamily;
    this.fontWeight = opts.fontWeight;
    this.fontSize = opts.fontSize;
    this.fill = opts.fill;
    this.stroke = opts.stroke;
    this.lineWidth = opts.lineWidth;
    this.textAlign = opts.textAlign || "start";
    this.textBaseline = opts.textBaseline || "top";
    this.letterSpacing = opts.letterSpacing;
    this.wordSpacing = opts.wordSpacing;
    this.direction = opts.direction;
    this.fontKerning = opts.fontKerning;
    this.fontStretch = opts.fontStretch;
    this.fontVariantCaps = opts.fontVariantCaps;
    this.maxWidth = opts.maxWidth;
    this.lineHeight = opts.lineHeight;
    this.overflow = opts.overflow;
  }
  render() {
    const { value, fontFamily = "sans-serif", fontWeight = "", fontSize = 24, lineWidth, textAlign, textBaseline, fill, stroke, letterSpacing, wordSpacing, direction, fontKerning, fontStretch, fontVariantCaps, root, maxWidth, lineHeight = 1.2, overflow = "wrap" } = this;
    const { ctx } = root;
    ctx.font = `${fontWeight} ${fontSize}px ${formatFontFamily(fontFamily)}`.trim();
    if (typeof letterSpacing === "number") {
      ctx.letterSpacing = `${letterSpacing}px`;
    }
    if (typeof wordSpacing === "number") {
      ctx.wordSpacing = `${wordSpacing}px`;
    }
    if (direction) {
      ctx.direction = direction;
    }
    if (fontKerning) {
      ctx.fontKerning = fontKerning;
    }
    if (fontStretch) {
      ctx.fontStretch = fontStretch;
    }
    if (fontVariantCaps) {
      ctx.fontVariantCaps = fontVariantCaps;
    }
    const lineHeightPx = fontSize * lineHeight;
    let lines;
    if (maxWidth != null) {
      switch (overflow) {
        case "ellipsis":
          lines = [__classPrivateFieldGet13(this, _Text_instances, "m", _Text_ellipsisText).call(this, ctx, value, maxWidth)];
          break;
        case "clip":
          lines = [value];
          break;
        case "wrap":
        default:
          lines = __classPrivateFieldGet13(this, _Text_instances, "m", _Text_wrapText).call(this, ctx, value, maxWidth);
          break;
      }
    } else {
      lines = value.split("\n");
    }
    let maxLineWidth = 0;
    for (const line of lines) {
      const w = ctx.measureText(line).width;
      if (w > maxLineWidth)
        maxLineWidth = w;
    }
    this.width = maxWidth != null ? Math.min(maxLineWidth, maxWidth) : maxLineWidth;
    this.height = lines.length === 1 ? fontSize : lineHeightPx * (lines.length - 1) + fontSize;
    super.render();
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    if (typeof lineWidth === "number") {
      ctx.lineWidth = lineWidth;
    }
    if (overflow === "clip" && maxWidth != null) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, maxWidth, this.height);
      ctx.clip();
    }
    const resolvedFill = resolveFillStroke(fill);
    const resolvedStroke = resolveFillStroke(stroke);
    for (let i = 0; i < lines.length; i++) {
      const y = i * lineHeightPx;
      if (resolvedFill) {
        ctx.fillStyle = resolvedFill;
        ctx.fillText(lines[i], 0, y);
      }
      if (resolvedStroke) {
        ctx.strokeStyle = resolvedStroke;
        ctx.strokeText(lines[i], 0, y);
      }
    }
    if (overflow === "clip" && maxWidth != null) {
      ctx.restore();
    }
  }
};
_Text_value = /* @__PURE__ */ new WeakMap(), _Text_instances = /* @__PURE__ */ new WeakSet(), _Text_wrapText = function _Text_wrapText2(ctx, text, maxWidth) {
  const lines = [];
  const paragraphs = text.split("\n");
  for (const paragraph of paragraphs) {
    const words = paragraph.split(/\s+/);
    if (words.length === 0 || words.length === 1 && words[0] === "") {
      lines.push("");
      continue;
    }
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const testLine = `${currentLine} ${words[i]}`;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);
  }
  return lines;
}, _Text_ellipsisText = function _Text_ellipsisText2(ctx, text, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth)
    return text;
  const ellipsis = "\u2026";
  let truncated = text;
  while (truncated.length > 0) {
    truncated = truncated.slice(0, -1);
    if (ctx.measureText(truncated + ellipsis).width <= maxWidth) {
      return truncated + ellipsis;
    }
  }
  return ellipsis;
};

// node_modules/.pnpm/react-tela@1.0.1_react@18.3.1/node_modules/react-tela/dist/index.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/.pnpm/react-tela@1.0.1_react@18.3.1/node_modules/react-tela/dist/hooks/use-layout.js
var import_react = __toESM(require_react(), 1);
var DEFAULT_LAYOUT = Object.freeze({
  x: 0,
  y: 0,
  width: 0,
  height: 0
});
var LayoutContext = (0, import_react.createContext)(DEFAULT_LAYOUT);
LayoutContext.displayName = "LayoutContext";
function useLayout() {
  return (0, import_react.useContext)(LayoutContext);
}

// node_modules/.pnpm/react-tela@1.0.1_react@18.3.1/node_modules/react-tela/dist/hooks/use-parent.js
var import_react2 = __toESM(require_react(), 1);
var ParentContext = (0, import_react2.createContext)(null);
ParentContext.displayName = "ParentContext";
function useParent() {
  const parent = (0, import_react2.useContext)(ParentContext);
  if (!parent) {
    throw new Error("Could not find parent context");
  }
  return parent;
}

// node_modules/.pnpm/react-tela@1.0.1_react@18.3.1/node_modules/react-tela/dist/hooks/use-gradient.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/.pnpm/react-tela@1.0.1_react@18.3.1/node_modules/react-tela/dist/hooks/use-dimensions.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/.pnpm/react-tela@1.0.1_react@18.3.1/node_modules/react-tela/dist/hooks/use-text-metrics.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/.pnpm/react-tela@1.0.1_react@18.3.1/node_modules/react-tela/dist/hooks/use-pattern.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/.pnpm/react-tela@1.0.1_react@18.3.1/node_modules/react-tela/dist/index.js
function useAdjustedLayout(props) {
  const layout = useLayout();
  if (layout === DEFAULT_LAYOUT) {
    return props;
  }
  return {
    ...props,
    x: layout.x + (props.x ?? 0),
    y: layout.y + (props.y ?? 0),
    width: layout.width + (props.width ?? 0),
    height: layout.height + (props.height ?? 0)
  };
}
var factory = (type) => {
  const c = (0, import_react7.forwardRef)((props, ref) => {
    const adjusted = useAdjustedLayout(props);
    return (0, import_react7.createElement)(type, adjusted === props ? { ...props, ref } : { ...adjusted, ref });
  });
  c.displayName = type;
  return c;
};
var BezierCurve2 = factory("BezierCurve");
var Canvas2 = factory("Canvas");
var Ellipse2 = factory("Ellipse");
var Image3 = factory("Image");
var Line2 = factory("Line");
var Path2 = factory("Path");
var QuadraticCurve2 = factory("QuadraticCurve");
var Rect2 = factory("Rect");
var Text2 = factory("Text");
var Arc2 = (0, import_react7.forwardRef)((props, ref) => {
  const adjusted = useAdjustedLayout(props);
  const x = adjusted === props ? props.x ?? 0 : adjusted.x;
  const y = adjusted === props ? props.y ?? 0 : adjusted.y;
  const w = adjusted === props ? 0 : adjusted.width;
  const h = adjusted === props ? 0 : adjusted.height;
  const radius = props.radius ?? Math.min(w, h) / 2;
  return (0, import_react7.createElement)("Arc", {
    ...props,
    x,
    y,
    radius,
    ref
  });
});
Arc2.displayName = "Arc";
var Circle = (0, import_react7.forwardRef)((props, ref) => {
  return import_react7.default.createElement(Arc2, { ...props, ref, startAngle: 0, endAngle: 360 });
});
Circle.displayName = "Circle";
var Group2 = (0, import_react7.forwardRef)((props, ref) => {
  const root = useParent();
  const rootRef = (0, import_react7.useRef)();
  let canvas;
  const adjusted = useAdjustedLayout(props);
  const w = adjusted === props ? props.width ?? 0 : adjusted.width;
  const h = adjusted === props ? props.height ?? 0 : adjusted.height;
  const canvasW = typeof props.contentWidth === "number" ? props.contentWidth : w;
  const canvasH = typeof props.contentHeight === "number" ? props.contentHeight : h;
  if (rootRef.current) {
    canvas = rootRef.current.ctx.canvas;
  } else {
    canvas = new root.Canvas(canvasW, canvasH);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error('Could not get "2d" canvas context');
    }
    rootRef.current = new GroupRoot(ctx, root);
  }
  if (canvasW !== canvas.width) {
    canvas.width = canvasW;
  }
  if (canvasH !== canvas.height) {
    canvas.height = canvasH;
  }
  return import_react7.default.createElement(
    ParentContext.Provider,
    { value: rootRef.current },
    import_react7.default.createElement(LayoutContext.Provider, { value: DEFAULT_LAYOUT }, (0, import_react7.createElement)("Group", {
      ...adjusted === props ? props : adjusted,
      root: rootRef.current,
      ref
    }))
  );
});
Group2.displayName = "Group";
var Pattern2 = (0, import_react7.forwardRef)((props, ref) => {
  const root = useParent();
  const rootRef = (0, import_react7.useRef)();
  let canvas;
  const adjusted = useAdjustedLayout(props);
  const w = adjusted === props ? props.width : adjusted.width;
  const h = adjusted === props ? props.height : adjusted.height;
  if (rootRef.current) {
    canvas = rootRef.current.ctx.canvas;
  } else {
    canvas = new root.Canvas(w, h);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error('Could not get "2d" canvas context');
    }
    rootRef.current = new GroupRoot(ctx, root);
  }
  if (w > 0 && w !== canvas.width) {
    canvas.width = w;
  }
  if (h > 0 && h !== canvas.height) {
    canvas.height = h;
  }
  return import_react7.default.createElement(
    ParentContext.Provider,
    { value: rootRef.current },
    import_react7.default.createElement(LayoutContext.Provider, { value: DEFAULT_LAYOUT }, (0, import_react7.createElement)("Pattern", {
      ...adjusted === props ? props : adjusted,
      root: rootRef.current,
      ref
    }))
  );
});
Pattern2.displayName = "Pattern";

// node_modules/.pnpm/react-tela@1.0.1_react@18.3.1/node_modules/react-tela/dist/render.js
var import_react8 = __toESM(require_react(), 1);
var import_react_reconciler = __toESM(require_react_reconciler(), 1);
var is = (type, t) => {
  return type === t.type;
};
function assertIsGroup(v) {
  if (!(v && v instanceof Group)) {
    throw new Error("Expected Group");
  }
}
var getText = ({ children: c }) => {
  if (c == null)
    return "";
  return Array.isArray(c) ? c.map(String).join("") : String(c);
};
var reconciler = (0, import_react_reconciler.default)({
  supportsHydration: false,
  supportsMutation: true,
  supportsPersistence: false,
  createInstance(type, props, root) {
    const t = { type, props };
    if (is("Pattern", t)) {
      return new Pattern(t.props);
    }
    if (is("Group", t)) {
      return new Group(t.props);
    }
    if (is("Arc", t)) {
      return new Arc(t.props);
    }
    if (is("BezierCurve", t)) {
      return new BezierCurve(t.props);
    }
    if (is("Canvas", t)) {
      return new Canvas(t.props, root);
    }
    if (is("Ellipse", t)) {
      return new Ellipse(t.props);
    }
    if (is("Image", t)) {
      return new Image2(t.props, root);
    }
    if (is("Line", t)) {
      return new Line(t.props);
    }
    if (is("Path", t)) {
      return new Path(t.props);
    }
    if (is("QuadraticCurve", t)) {
      return new QuadraticCurve(t.props);
    }
    if (is("Rect", t)) {
      return new Rect(t.props);
    }
    if (is("Text", t)) {
      return new Text({ ...t.props, value: getText(t.props) });
    }
    throw new Error(`Unsupported type: ${type}`);
  },
  createTextInstance(text, root) {
    console.log("createTextInstance", { text, root });
    throw new Error("Text must be placed inside of a <Text> component");
  },
  appendInitialChild(parentInstance, child) {
    assertIsGroup(parentInstance);
    parentInstance.subroot.add(child);
    parentInstance._root?.queueRender();
  },
  appendChild(parentInstance, child) {
    assertIsGroup(parentInstance);
    parentInstance.subroot.add(child);
    parentInstance._root?.queueRender();
  },
  appendChildToContainer(container, child) {
    container.add(child);
    container.queueRender();
  },
  insertBefore(parentInstance, child, beforeChild) {
    assertIsGroup(parentInstance);
    parentInstance.subroot.insertBefore(child, beforeChild);
    parentInstance._root?.queueRender();
  },
  insertInContainerBefore(root, child, beforeChild) {
    root.insertBefore(child, beforeChild);
    root.queueRender();
  },
  removeChild(parentInstance, child) {
    assertIsGroup(parentInstance);
    parentInstance.subroot.remove(child);
    parentInstance.subroot.queueRender();
  },
  removeChildFromContainer(root, child) {
    root.remove(child);
    root.queueRender();
  },
  finalizeInitialChildren(instance, type, props, rootContainer, hostContext) {
    return false;
  },
  prepareUpdate(instance, type, oldProps, newProps, rootContainer, hostContext) {
    let payload = null;
    for (const k of Object.keys(newProps)) {
      if (k === "children")
        continue;
      if (oldProps[k] !== newProps[k]) {
        if (!payload)
          payload = {};
        const prop = /^on[A-Z]/.test(k) ? k.toLowerCase() : k;
        payload[prop] = newProps[k];
      }
    }
    if (type === "Text") {
      const newValue = getText(newProps);
      if (instance.value !== newValue) {
        if (!payload)
          payload = {};
        payload.value = newValue;
      }
    }
    return payload;
  },
  commitUpdate(instance, payload) {
    Object.assign(instance, payload);
    instance._root?.queueRender();
  },
  commitTextUpdate(instance, oldText, newText) {
    console.log("commitTextUpdate", { instance, oldText, newText });
  },
  clearContainer(container) {
    container.clear();
  },
  shouldSetTextContent(type, props) {
    return type === "Text";
  },
  resetTextContent(instance) {
    console.log("resetTextContent", { instance });
  },
  getRootHostContext(rootContainer) {
    return null;
  },
  getChildHostContext(parentHostContext, type, rootContainer) {
    return parentHostContext;
  },
  getPublicInstance(instance) {
    return instance;
  },
  prepareForCommit(containerInfo) {
    return null;
  },
  resetAfterCommit(containerInfo) {
  },
  preparePortalMount(containerInfo) {
    throw new Error("Function not implemented.");
  },
  scheduleTimeout(fn, delay) {
    return setTimeout(fn, delay);
  },
  cancelTimeout(id) {
    clearTimeout(id);
  },
  noTimeout: -1,
  isPrimaryRenderer: false,
  getCurrentEventPriority() {
    throw new Error("Function not implemented.");
  },
  getInstanceFromNode(node) {
    throw new Error("Function not implemented.");
  },
  beforeActiveInstanceBlur() {
    throw new Error("Function not implemented.");
  },
  afterActiveInstanceBlur() {
    throw new Error("Function not implemented.");
  },
  prepareScopeUpdate(scopeInstance, instance) {
    throw new Error("Function not implemented.");
  },
  getInstanceFromScope(scopeInstance) {
    throw new Error("Function not implemented.");
  },
  detachDeletedInstance(instance) {
  },
  hideInstance(instance) {
    instance._hidden = true;
  },
  unhideInstance(instance, props) {
    instance._hidden = false;
  }
});
reconciler.injectIntoDevTools({
  bundleType: true ? 1 : 0,
  rendererPackageName: "react-tela",
  version: "0.0.0"
});
function render(app, canvas, opts) {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new TypeError(`canvas.getContext('2d') returned: ${ctx}`);
  }
  const root = new Root(ctx, opts);
  globalThis.root = root;
  const container = reconciler.createContainer(root, false, false);
  reconciler.updateContainer(
    (0, import_react8.createElement)(ParentContext.Provider, { value: root }, app),
    container,
    null,
    null
    /* callback */
  );
  return root;
}

// src/ipc/spl.ts
var splMig = new Switch.Service("spl:mig");
function generateAesKek(wrappedKek, keyGeneration, option) {
  const input = new Uint8Array(24);
  input.set(new Uint8Array(wrappedKek, 0, 16), 0);
  const options = new Uint32Array(input.buffer, 16, 2);
  options[0] = keyGeneration;
  options[1] = option;
  const output = new Uint8Array(16);
  splMig.dispatchInOut(2, input.buffer, output.buffer);
  return output.buffer;
}
function generateAesKey(sealedKek, wrappedKey) {
  const input = new Uint8Array(32);
  input.set(new Uint8Array(sealedKek, 0, 16), 0);
  input.set(new Uint8Array(wrappedKey, 0, 16), 16);
  const output = new Uint8Array(16);
  splMig.dispatchInOut(4, input.buffer, output.buffer);
  return output.buffer;
}

// src/util.ts
function arrayBufferToHex(value) {
  return Array.from(new Uint8Array(value)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
async function deterministicTitleId(nroPath, args) {
  const encoded = new TextEncoder().encode(nroPath + args);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  const hash64 = new DataView(digest).getBigUint64(0, true);
  const id = 0x0100000000000000n | hash64 & 0x00fffffffffff000n;
  return id.toString(16).padStart(16, "0");
}

// src/prod-keys.ts
function loadForwarderKeys() {
  const existing = Switch.readFileSync("sdmc:/switch/prod.keys");
  if (existing) return new Uint8Array(existing);
  const headerKekSource = new Uint8Array([
    31,
    18,
    145,
    58,
    74,
    203,
    240,
    13,
    76,
    222,
    58,
    246,
    213,
    35,
    136,
    42
  ]);
  const headerKeySource = new Uint8Array([
    90,
    62,
    216,
    79,
    222,
    192,
    216,
    38,
    49,
    247,
    226,
    93,
    25,
    123,
    245,
    208,
    28,
    155,
    123,
    250,
    246,
    40,
    24,
    61,
    113,
    246,
    77,
    115,
    241,
    80,
    185,
    210
  ]);
  const kek = generateAesKek(headerKekSource.buffer, 0, 0);
  const key0 = generateAesKey(kek, headerKeySource.buffer.slice(0, 16));
  const key1 = generateAesKey(kek, headerKeySource.buffer.slice(16));
  const keyHex = arrayBufferToHex(
    new Uint8Array([
      ...new Uint8Array(key0),
      ...new Uint8Array(key1)
    ]).buffer
  );
  return new TextEncoder().encode(
    `header_key = ${keyHex}
key_area_key_application_00 = 00000000000000000000000000000001
`
  );
}

// src/main.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime());
var requestPath = "sdmc:/switch/SwitchNOW/forwarder_request.json";
var resultPath = "sdmc:/switch/SwitchNOW/forwarder_result.json";
var exitEnabled = false;
var plusReleasedAfterInstall = false;
function waitForPaint() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}
function keepInstallerAlive() {
  const rawButtons = navigator.getGamepads()[0]?.rawButtons ?? 0n;
  const plusPressed = (rawButtons & BigInt(HidNpadButton.Plus)) !== 0n;
  if (!exitEnabled) {
    plusReleasedAfterInstall = false;
  } else {
    if (!plusPressed) plusReleasedAfterInstall = true;
    if (plusReleasedAfterInstall && plusPressed) Switch.exit();
  }
  requestAnimationFrame(keepInstallerAlive);
}
requestAnimationFrame(keepInstallerAlive);
function readRequest() {
  const data = Switch.readFileSync(requestPath);
  if (!data) throw new Error("SwitchNOW forwarder request is missing.");
  const request = JSON.parse(new TextDecoder().decode(data));
  if (request.version !== 1 || !request.name || !request.nroPath.startsWith("sdmc:/") || !request.returnPath?.startsWith("sdmc:/") || !request.returnPath.endsWith(".nro") || !request.args.includes(request.nroPath) || request.name.length > 511 || request.args.length > 1800) {
    throw new Error("SwitchNOW forwarder request is invalid.");
  }
  return request;
}
async function returnToSwitchNow(request) {
  await waitForPaint();
  await waitForPaint();
  return new Switch.Application(request.returnPath).launch(
    "--forwarder-result"
  );
}
async function generateNsp(request) {
  const wasm = Switch.readFileSync("romfs:/hacbrewpack.wasm");
  const main = Switch.readFileSync("romfs:/template/exefs/main");
  const mainNpdm = Switch.readFileSync("romfs:/template/exefs/main.npdm");
  if (!wasm || !main || !mainNpdm) {
    throw new Error("Forwarder generator resources are incomplete.");
  }
  const app = new Switch.Application(request.nroPath);
  if (!app.icon) throw new Error("The shortcut NRO has no embedded icon.");
  const icon = app.icon;
  const titleId = await deterministicTitleId(request.nroPath, request.args);
  const keys = loadForwarderKeys();
  const createModule = (await Promise.resolve().then(() => __toESM(require_hacbrewpack()))).default;
  return await new Promise((resolve, reject) => {
    let module;
    void createModule({
      noInitialRun: true,
      wasmBinary: wasm,
      preRun(instance) {
        module = instance;
        const { FS } = instance;
        FS.writeFile("/keys.dat", keys);
        FS.mkdir("/exefs");
        FS.writeFile("/exefs/main", new Uint8Array(main));
        FS.writeFile("/exefs/main.npdm", new Uint8Array(mainNpdm));
        const nacp = new NACP();
        nacp.id = titleId;
        nacp.title = request.name;
        nacp.author = request.author || "OpenCloudGaming";
        nacp.version = request.displayVersion || "0.0.6";
        nacp.startupUserAccount = 0;
        nacp.userAccountSaveDataSize = 0n;
        nacp.userAccountSaveDataJournalSize = 0n;
        FS.mkdir("/control");
        FS.writeFile("/control/control.nacp", new Uint8Array(nacp.buffer));
        FS.writeFile("/control/icon_AmericanEnglish.dat", new Uint8Array(icon));
        FS.mkdir("/romfs");
        FS.writeFile("/romfs/nextArgv", new TextEncoder().encode(request.args));
        FS.writeFile(
          "/romfs/nextNroPath",
          new TextEncoder().encode(request.nroPath)
        );
      },
      onRuntimeInitialized() {
        try {
          const exitCode = module.callMain([
            "--nopatchnacplogo",
            "--titleid",
            titleId,
            "--nologo",
            "--plaintext"
          ]);
          if (exitCode !== 0) {
            reject(new Error(`Forwarder generator exited with code ${exitCode}.`));
            return;
          }
          const name = module.FS.readdir("/hacbrewpack_nsp").find((entry) => entry.endsWith(".nsp"));
          if (!name) throw new Error("Generated NSP could not be found.");
          resolve(module.FS.readFile(`/hacbrewpack_nsp/${name}`));
        } catch (error) {
          reject(error);
        }
      }
    }).catch(reject);
  });
}
function Installer() {
  const [heading, setHeading] = (0, import_react9.useState)("Preparing HOME shortcut");
  const [detail, setDetail] = (0, import_react9.useState)("Reading the request from SwitchNOW...");
  const [failed, setFailed] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    function writeResult(result) {
      try {
        Switch.writeFileSync(resultPath, JSON.stringify(result));
      } catch {
      }
    }
    async function install() {
      if (Switch.appletType() !== AppletType.Application) {
        throw new Error(
          "Full-memory/application mode is required to install a forwarder."
        );
      }
      const request = readRequest();
      setHeading(`Creating ${request.name}`);
      setDetail("Building the personalized Horizon application...");
      const nsp = await generateNsp(request);
      setHeading(`Installing ${request.name}`);
      setDetail("Writing the forwarder to SD storage. Do not power off.");
      for await (const _event of installNsp(
        new Blob([nsp]),
        NcmStorageId.SdCard
      )) {
      }
      writeResult({
        version: 1,
        success: true,
        name: request.name,
        installedAt: Date.now()
      });
      Switch.removeSync(requestPath);
      setHeading(`${request.name} installed`);
      setDetail(
        "The NSP has been installed to the Horizon HOME screen.\n\nReturning to SwitchNOW..."
      );
      await returnToSwitchNow(request);
    }
    void install().catch(async (error) => {
      const message = error instanceof Error ? error.message : String(error);
      writeResult({ version: 1, success: false, error: message });
      setFailed(true);
      setHeading("Could not install the HOME shortcut");
      setDetail(`${message}

Returning to SwitchNOW...`);
      try {
        await returnToSwitchNow(readRequest());
      } catch {
        await waitForPaint();
        await waitForPaint();
        exitEnabled = true;
      }
    });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rect2, { fill: "#0a0c0f", height: 720, width: 1280, x: 0, y: 0 }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Text2,
      {
        fill: failed ? "#ff6b6b" : "#58d98a",
        fontSize: 42,
        x: 72,
        y: 210,
        children: heading
      }
    ),
    detail.split("\n").map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Text2,
      {
        fill: "#f2f4f7",
        fontSize: 25,
        x: 72,
        y: 290 + index * 38,
        children: line
      },
      `${index}-${line}`
    )),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text2, { fill: "#9098a5", fontSize: 18, x: 72, y: 630, children: "SwitchNOW Forwarder Installer - SD storage" })
  ] });
}
render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Installer, {}), screen);
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-reconciler/cjs/react-reconciler.production.min.js:
  (**
   * @license React
   * react-reconciler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
