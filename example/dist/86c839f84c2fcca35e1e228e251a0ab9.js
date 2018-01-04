// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({20:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 获取目标元素的样式
 * @param  {Object HTMLElement} el 目标元素
 * @return {Object}    目标元素的所有样式
 */
// function _getStyle(el) {
// 	let style = window.getComputedStyle ? 
// 		window.getComputedStyle(el, null) :
// 		el.currentStyle;
// 	return style;
// }

// export function borderWidth(el) {
// 	let rect = el.getBoundingClientRect();
// 	return rect.width;
// }

// export function paddingWidth(el) {
// 	return el.clientWidth;
// }

// export function contentWidth(el) {
// 	let paddingWidth = el.clientWidth;
// 	let paddingLeft = parseInt(_getStyle(el)['paddingLeft'], 10),
// 		paddingRight = parseInt(_getStyle(el)['paddingRight'], 10);

// 	return paddingWidth - paddingLeft - paddingRight;
// }
var Width = function () {
  function Width() {
    _classCallCheck(this, Width);
  }

  _createClass(Width, [{
    key: "getBorderWidth",
    value: function getBorderWidth(el) {
      var rect = el.getBoundingClientRect();
      return rect.width;
    }
  }, {
    key: "getPaddingWidth",
    value: function getPaddingWidth(el) {
      // 除了 html 元素外，body 以及 body 内的所有元素，
      // 其 clientWidth 属性都是包含 padding 在内的宽度
      var borderLeft = parseInt(Width._getStyle(el)['borderLeftWidth'], 10),
          borderRight = parseInt(Width._getStyle(el)['borderRightWidth'], 10);
      return this.getBorderWidth(el) - borderLeft - borderRight;
    }
  }, {
    key: "getContentWidth",
    value: function getContentWidth(el) {
      var paddingLeft = parseInt(Width._getStyle(el)['paddingLeft'], 10),
          paddingRight = parseInt(Width._getStyle(el)['paddingRight'], 10);

      return this.getPaddingWidth(el) - paddingLeft - paddingRight;
    }

    /**
     * 获取目标元素的样式
     * @param  {Object HTMLElement} el 目标元素
     * @return {Object}    目标元素的所有样式
     */

  }], [{
    key: "_getStyle",
    value: function _getStyle(el) {
      var style = window.getComputedStyle ? window.getComputedStyle(el, null) : el.currentStyle;
      return style;
    }
  }]);

  return Width;
}();

var width = new Width();
exports.default = width;
},{}],21:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Height = function () {
  function Height() {
    _classCallCheck(this, Height);
  }

  _createClass(Height, [{
    key: "getBorderHeight",
    value: function getBorderHeight(el) {
      var rect = el.getBoundingClientRect();
      return rect.height;
    }
  }, {
    key: "getPaddingHeight",
    value: function getPaddingHeight(el) {
      return el.clientHeight;
    }
  }, {
    key: "getContentHeight",
    value: function getContentHeight(el) {
      var paddingHeight = el.clientHeight;
      var paddingTop = parseInt(Height._getStyle(el)['paddingTop'], 10),
          paddingBottom = parseInt(Height._getStyle(el)['paddingBottom'], 10);

      return paddingHeight - paddingTop - paddingBottom;
    }

    /**
     * 获取目标元素的样式
     * @param  {Object HTMLElement} el 目标元素
     * @return {Object}    目标元素的所有样式
     */

  }], [{
    key: "_getStyle",
    value: function _getStyle(el) {
      var style = window.getComputedStyle ? window.getComputedStyle(el, null) : el.currentStyle;
      return style;
    }
  }]);

  return Height;
}();

var height = new Height();
exports.default = height;
},{}],19:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.box = undefined;

var _width = require("./width/width.js");

var _width2 = _interopRequireDefault(_width);

var _height = require("./height/height.js");

var _height2 = _interopRequireDefault(_height);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var box = exports.box = {
  getContentWidth: _width2.default.getContentWidth,
  getPaddingWidth: _width2.default.getPaddingWidth,
  getBorderWidth: _width2.default.getBorderWidth,

  getContentHeight: _height2.default.getContentHeight,
  getPaddingHeight: _height2.default.getPaddingHeight,
  getBorderHeight: _height2.default.getBorderHeight
};
},{"./width/width.js":20,"./height/height.js":21}],11:[function(require,module,exports) {
"use strict";

var _smartBox = require("../src/smart-box.js");

// var item1 = document.querySelector('.content-item1');
// var item1 = document.documentElement;
var item1 = document.body;
// 
var contentWidth = _smartBox.box.getContentWidth(item1);
var paddingWidth = _smartBox.box.getPaddingWidth(item1);
var borderWidth = _smartBox.box.getBorderWidth(item1);
console.log(contentWidth, paddingWidth, borderWidth);

var contentHeight = _smartBox.box.getContentHeight(item1);
var paddingHeight = _smartBox.box.getPaddingHeight(item1);
var borderHeight = _smartBox.box.getBorderHeight(item1);
console.log(contentHeight, paddingHeight, borderHeight);
// 
// function _getStyle(el) {
// 	var style = window.getComputedStyle ? 
// 		window.getComputedStyle(el,null) :
// 		el.currentStyle;
// 	return style;
// }


// function contentWidth(el) {
// 	var paddingWidth = el.clientWidth;
// 	var paddingLeft = parseInt(_getStyle(el)['paddingLeft'], 10),
// 		paddingRight = parseInt(_getStyle(el)['paddingRight'], 10);

// 	return paddingWidth - paddingLeft - paddingRight;
// }

// var Width = contentWidth(item1)
// console.log(Width)
// 
// var de = document.documentElement;
// console.log(de.clientWidth, de.clientHeight)
// // var de = document.documentElement;
// console.log(window.innerWidth, window.innerHeight)
// var db = document.body;
// console.log(db.clientWidth, db.clientHeight)
},{"../src/smart-box.js":19}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://localhost:50536/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,11])