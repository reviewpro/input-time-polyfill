(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(require("./time-input-polyfill.scss"), require("./input"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(global.timeInputPolyfill, global.input);
	    global.timeInputPolyfill = mod.exports;
	  }
	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_timeInputPolyfill, _input) {
	  "use strict";

	  var addPickers = function addPickers() {
	    (0, _input.addPickerToOtherInputs)(); // Check if type="time" is supported.

	    if (!(0, _input.supportsTimeInput)()) {
	      (0, _input.addPickerToTimeInputs)();
	    }
	  }; // Run the above code on any <input type="time"> in the document, also on dynamically created ones.


	  addPickers();
	  document.addEventListener("DOMContentLoaded", function () {
	    addPickers();
	  }); // This is also on mousedown event so it will capture new inputs that might
	  // be added to the DOM dynamically.

	  document.querySelector("body").addEventListener("mousedown", function () {
	    addPickers();
	  });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./time-input-polyfill.scss", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js!./time-input-polyfill.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "time-input-polyfill {\n  background: #fff;\n  color: #000;\n  text-shadow: none;\n  border: 0;\n  padding: 0;\n  height: auto;\n  width: auto;\n  line-height: normal;\n  font-family: sans-serif;\n  font-size: 14px;\n  position: absolute !important;\n  text-align: center;\n  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.22);\n  cursor: default;\n  z-index: 1;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  overflow: hidden;\n  display: block; }\n  time-input-polyfill[data-open=\"false\"] {\n    visibility: hidden;\n    z-index: -100 !important;\n    top: 0; }\n  time-input-polyfill[data-open=\"true\"] {\n    visibility: visible; }\n  time-input-polyfill select {\n    background: #fff;\n    color: #000;\n    text-shadow: none;\n    border: 0;\n    padding: 0;\n    height: auto;\n    width: auto;\n    line-height: normal;\n    font-family: sans-serif;\n    font-size: 14px;\n    box-shadow: none;\n    font-family: \"Lato\", Helvetica, Arial, sans-serif;\n    display: inline-block;\n    border: 0;\n    border-radius: 0;\n    border-bottom: 1px solid #dadfe1;\n    height: 200px;\n    vertical-align: top;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    overflow: overlay;\n    width: 80px;\n    padding: 4px; }\n    time-input-polyfill select:first-of-type {\n      border-right: 1px solid #dadfe1;\n      border-radius: 5px 0 0 0;\n      -moz-border-radius: 5px 0 0 0;\n      -webkit-border-radius: 5px 0 0 0; }\n    time-input-polyfill select > option {\n      text-align: center;\n      font-size: 12px;\n      padding: 8px; }\n      time-input-polyfill select > option:hover {\n        background-color: #ddd; }\n  time-input-polyfill [data-selected] {\n    font-weight: bold;\n    background: #d8eaf6; }\n  time-input-polyfill ::-webkit-scrollbar {\n    width: 0px;\n    height: 0px; }\n  time-input-polyfill ::-webkit-scrollbar-thumb {\n    background: transparent; }\n  time-input-polyfill ::-webkit-scrollbar-track {\n    background: transparent; }\n\n.time-polyfill {\n  font-family: monospace;\n  width: 40px; }\n", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory();
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory();
	    global.cssBase = mod.exports;
	  }
	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
	  "use strict";

	  /*
	  	MIT License http://www.opensource.org/licenses/mit-license.php
	  	Author Tobias Koppers @sokra
	  */
	  // css base code, injected by the css-loader
	  module.exports = function () {
	    var list = []; // return the list of modules as css string

	    list.toString = function toString() {
	      var result = [];

	      for (var i = 0; i < this.length; i++) {
	        var item = this[i];

	        if (item[2]) {
	          result.push("@media " + item[2] + "{" + item[1] + "}");
	        } else {
	          result.push(item[1]);
	        }
	      }

	      return result.join("");
	    }; // import a list of modules into the list


	    list.i = function (modules, mediaQuery) {
	      if (typeof modules === "string") modules = [[null, modules, ""]];
	      var alreadyImportedModules = {};

	      for (var i = 0; i < this.length; i++) {
	        var id = this[i][0];
	        if (typeof id === "number") alreadyImportedModules[id] = true;
	      }

	      for (i = 0; i < modules.length; i++) {
	        var item = modules[i]; // skip already imported module
	        // this implementation is not 100% perfect for weird media query combinations
	        //  when a module is imported multiple times with different media queries.
	        //  I hope this will never occur (Hey this way we have smaller bundles)

	        if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
	          if (mediaQuery && !item[2]) {
	            item[2] = mediaQuery;
	          } else if (mediaQuery) {
	            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
	          }

	          list.push(item);
	        }
	      }
	    };

	    return list;
	  };
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require("./timePicker"));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.timePicker);
	    global.input = mod.exports;
	  }
	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _timePicker) {
	  "use strict";

	  Object.defineProperty(_exports, "__esModule", {
	    value: true
	  });
	  _exports.supportsTimeInput = supportsTimeInput;
	  _exports.addPickerToTimeInputs = addPickerToTimeInputs;
	  _exports.addPickerToOtherInputs = addPickerToOtherInputs;
	  _exports.default = void 0;
	  _timePicker = _interopRequireDefault(_timePicker);

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  var Input = function Input(input) {
	    var _this = this;

	    _classCallCheck(this, Input);

	    this.element = input;
	    this.element.setAttribute("data-has-picker", "");
	    this.element.readOnly = true;
	    var selectedPart = -1;

	    var selectRange = function selectRange() {
	      if (_this.element.setSelectionRange) {
	        if (_this.element.selectedPart == 0) {
	          _this.element.setSelectionRange(0, 2);
	        } else if (_this.element.selectedPart == 1) {
	          _this.element.setSelectionRange(3, 5);
	        }
	      }
	    };

	    Object.defineProperties(this.element, {
	      selectedPart: {
	        get: function get() {
	          return selectedPart;
	        },
	        set: function set(val) {
	          selectedPart = val;
	        }
	      },
	      valueAsTime: {
	        get: function get() {
	          if (!_this.element.value) {
	            return null;
	          }

	          var parts = _this.element.value.split(":");

	          return {
	            hour: parseInt(parts[0], 10) || 0,
	            minute: parseInt(parts[1], 10) || 0
	          };
	        },
	        set: function set(val) {
	          var newVal = "";

	          if (typeof val.hour !== "undefined") {
	            newVal += Math.max(Math.min(val.hour, 23), 0).toString().padStart(2, "0");
	          } else {
	            newVal += "--";
	          }

	          newVal += ":";

	          if (typeof val.minute !== "undefined") {
	            newVal += Math.max(Math.min(val.minute, 59), 0).toString().padStart(2, "0");
	          } else {
	            newVal += "--";
	          }

	          _this.element.value = newVal;
	          selectRange();
	        }
	      }
	    }); // Open the picker when the input get focus,
	    // also on various click events to capture it in all corner cases.

	    var showPicker = function showPicker(e) {
	      var elm = _this.element;

	      var didAttach = _timePicker.default.attachTo(elm);

	      selectedPart = elm.selectionStart < 3 ? 0 : 1;
	      selectRange();
	    };

	    this.element.addEventListener("focus", showPicker);
	    this.element.addEventListener("mouseup", showPicker); // Update the picker if the date changed manually in the input.

	    this.element.addEventListener("keydown", function (e) {
	      var time = {
	        hour: null,
	        minute: null
	      };

	      switch (e.keyCode) {
	        case 9:
	        case 27:
	        case 13:
	          _timePicker.default.hide();

	          break;

	        case 38:
	          if (_this.element.valueAsTime) {
	            time = {
	              hour: _this.element.valueAsTime.hour - (_this.element.selectedPart == 0 ? 1 : 0),
	              minute: _this.element.valueAsTime.minute - (_this.element.selectedPart == 1 ? 1 : 0)
	            };
	            _this.element.valueAsTime = time;

	            _timePicker.default.pingInput();

	            e.preventDefault();
	            return false;
	          }

	          break;

	        case 40:
	          if (_this.element.valueAsTime) {
	            time = {
	              hour: _this.element.valueAsTime.hour + (_this.element.selectedPart == 0 ? 1 : 0),
	              minute: _this.element.valueAsTime.minute + (_this.element.selectedPart == 1 ? 1 : 0)
	            };
	            _this.element.valueAsTime = time;

	            _timePicker.default.pingInput();

	            e.preventDefault();
	            return false;
	          }

	          break;

	        case 37:
	          if (_this.element.valueAsTime) {
	            _this.element.selectedPart = 0;
	            _this.element.valueAsTime = _this.element.valueAsTime;
	            e.preventDefault();
	            return false;
	          }

	          break;

	        case 39:
	          if (_this.element.valueAsTime) {
	            _this.element.selectedPart = 1;
	            _this.element.valueAsTime = _this.element.valueAsTime;
	            e.preventDefault();
	            return false;
	          }

	          break;
	      }

	      _timePicker.default.sync();
	    });
	    this.element.addEventListener("keyup", function (e) {
	      _timePicker.default.sync();
	    });

	    if (this.element.value.length == 0) {
	      this.element.valueAsTime = {};
	    }
	  }; // Return false if the browser does not support input[type="date"].


	  _exports.default = Input;

	  function supportsTimeInput() {
	    var input = document.createElement("input");
	    input.setAttribute("type", "time");
	    var notADateValue = "not-a-time";
	    input.setAttribute("value", notADateValue);
	    return !(input.value === notADateValue);
	  } // Will add the Picker to all inputs in the page.


	  function addPickerToTimeInputs() {
	    // Get and loop all the input[type="time"]s in the page that do not have `[data-has-picker]` yet.
	    var timeInputs = document.querySelectorAll("input[type=\"time\"]:not([data-has-picker])");
	    var length = timeInputs.length;

	    if (!length) {
	      return false;
	    }

	    for (var i = 0; i < length; ++i) {
	      new Input(timeInputs[i]);
	    }
	  }

	  function addPickerToOtherInputs() {
	    // Get and loop all the input[type="text"] class time-polyfill in the page that do not have `[data-has-picker]` yet.
	    var timeInputs = document.querySelectorAll("input[type=\"text\"].time-polyfill:not([data-has-picker])");
	    var length = timeInputs.length;

	    if (!length) {
	      return false;
	    }

	    for (var i = 0; i < length; ++i) {
	      new Input(timeInputs[i]);
	    }
	  }
	});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.timePicker = mod.exports;
	  }
	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
	  "use strict";

	  Object.defineProperty(_exports, "__esModule", {
	    value: true
	  });
	  _exports.default = void 0;

	  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	  var TimePicker = /*#__PURE__*/function () {
	    function TimePicker() {
	      var _this = this;

	      _classCallCheck(this, TimePicker);

	      // This is a singleton.
	      if (window.timePicker) {
	        return window.timePicker;
	      }

	      this.input = null;
	      this.isOpen = false;
	      this.time = {
	        hour: null,
	        minute: null
	      }; // The picker element. Unique tag name attempts to protect against
	      // generic selectors.

	      this.container = document.createElement("time-input-polyfill"); // Add controls.
	      // Hours picker.

	      this.hour = document.createElement("select");
	      TimePicker.createRangeSelect(this.hour, 0, 23);
	      this.hour.className = "hourSelect";
	      this.hour.addEventListener("change", function () {
	        _this.time = _objectSpread(_objectSpread({}, _this.time), {}, {
	          hour: parseInt(_this.hour.value) || 0
	        });
	        _this.input.selectedPart = 0;

	        _this.setInput(false);
	      });
	      this.container.appendChild(this.hour); // Minutes picker.

	      this.minute = document.createElement("select");
	      TimePicker.createRangeSelect(this.minute, 0, 59);
	      this.minute.className = "minuteSelect";
	      this.minute.addEventListener("change", function () {
	        _this.time = _objectSpread(_objectSpread({
	          hour: 0
	        }, _this.time), {}, {
	          minute: parseInt(_this.minute.value) || 0
	        });
	        _this.input.selectedPart = 1;

	        _this.setInput(false);
	      });
	      this.container.appendChild(this.minute);
	      this.hide();
	      document.body.appendChild(this.container);

	      this.removeClickOut = function (e) {
	        if (_this.isOpen) {
	          var el = e.target;
	          var isPicker = el === _this.container || el === _this.input;

	          while (!isPicker && (el = el.parentNode)) {
	            isPicker = el === _this.container;
	          }

	          (e.target.getAttribute("type") !== "date" && !isPicker || !isPicker) && _this.hide();
	        }
	      };

	      this.removeBlur = function (e) {
	        if (_this.isOpen) {
	          _this.hide();
	        }
	      };
	    } // Hide.


	    _createClass(TimePicker, [{
	      key: "hide",
	      value: function hide() {
	        this.container.setAttribute("data-open", this.isOpen = false); // Close the picker when clicking outside of a date input or picker.

	        if (this.input) {
	          this.input.blur();
	        }

	        document.removeEventListener("mousedown", this.removeClickOut);
	        document.removeEventListener("touchstart", this.removeClickOut);
	      } // Show.

	    }, {
	      key: "show",
	      value: function show() {
	        var _this2 = this;

	        this.container.setAttribute("data-open", this.isOpen = true); // Close the picker when clicking outside of a date input or picker.

	        setTimeout(function () {
	          document.addEventListener("mousedown", _this2.removeClickOut);
	          document.addEventListener("touchstart", _this2.removeClickOut);
	        }, 500); // when used in a single-page app  or otherwise,
	        // hide datepicker when the browser's back button is pressed

	        window.onpopstate = function () {
	          _this2.hide();
	        };
	      } // Position picker below element. Align to element's right edge.

	    }, {
	      key: "goto",
	      value: function goto(element) {
	        var _this3 = this;

	        var rekt = element.getBoundingClientRect();
	        this.container.style.top = "".concat(rekt.top + rekt.height + (document.documentElement.scrollTop || document.body.scrollTop) + 3, "px");
	        var contRekt = this.container.getBoundingClientRect();
	        var width = contRekt.width ? contRekt.width : 280;

	        var classWithOutPos = function classWithOutPos() {
	          return _this3.container.className.replace("polyfill-left-aligned", "").replace("polyfill-right-aligned", "").replace(/\s+/g, " ").trim();
	        };

	        var base = rekt.right - width;

	        if (rekt.right < width) {
	          base = rekt.left;
	          this.container.className = "".concat(classWithOutPos(), " polyfill-left-aligned");
	        } else {
	          this.container.className = "".concat(classWithOutPos(), " polyfill-right-aligned");
	        }

	        this.container.style.left = "".concat(base + (document.documentElement.scrollLeft || document.body.scrollLeft), "px");
	        this.show();
	      } // Initiate I/O with given date input.

	    }, {
	      key: "attachTo",
	      value: function attachTo(input) {
	        if (input === this.input && this.isOpen) {
	          return false;
	        }

	        this.input = input;
	        this.sync();
	        this.goto(this.input);
	        return true;
	      } // Match picker time with input time.

	    }, {
	      key: "sync",
	      value: function sync() {
	        // fixes bug where an empty calendar appears if year is missing from keyboard input
	        this.time = this.input.valueAsTime;

	        if (this.time) {
	          this.hour.value = this.time.hour;
	          this.minute.value = this.time.minute;
	        }
	      } // Match input date with picker date.

	    }, {
	      key: "setInput",
	      value: function setInput(hide) {
	        var _this4 = this;

	        this.input.valueAsTime = this.time;
	        this.input.focus();

	        if (hide) {
	          setTimeout(function () {
	            // IE wouldn't hide, so in a timeout you go.
	            _this4.hide();
	          }, 100);
	        }

	        this.pingInput();
	      }
	    }, {
	      key: "pingInput",
	      value: function pingInput() {
	        // Dispatch DOM events to the input.
	        var inputEvent;
	        var changeEvent; // Modern event creation.

	        try {
	          inputEvent = new Event("input");
	          changeEvent = new Event("change");
	        } catch (e) {
	          // Old-fashioned way.
	          inputEvent = document.createEvent("KeyboardEvent");
	          inputEvent.initEvent("input", true, false);
	          changeEvent = document.createEvent("KeyboardEvent");
	          changeEvent.initEvent("change", true, false);
	        }

	        this.input.dispatchEvent(inputEvent);
	        this.input.dispatchEvent(changeEvent);
	      }
	    }], [{
	      key: "createRangeSelect",
	      value: function createRangeSelect(theSelect, min, max, namesArray) {
	        theSelect.setAttribute("size", "5");
	        theSelect.innerHTML = "";

	        for (var i = min; i <= max; ++i) {
	          var aOption = document.createElement("option");
	          theSelect.appendChild(aOption);
	          var theText = namesArray ? namesArray[i - min] : i;
	          aOption.text = theText;
	          aOption.value = i;
	        }

	        return theSelect;
	      }
	    }]);

	    return TimePicker;
	  }();

	  window.timePicker = new TimePicker();
	  var _default = window.timePicker;
	  _exports.default = _default;
	});

/***/ })
/******/ ])
});
;