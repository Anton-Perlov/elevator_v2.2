/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./main.css":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./main.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".navigateBtn{\\r\\n    width: 42px;\\r\\n    margin:4px;\\r\\n}\\r\\n\\r\\nbutton:focus {\\r\\n    outline:none;\\r\\n}\\r\\ndiv #floors{\\r\\n    max-width: 600px;\\r\\n    border-right: 1px solid black;\\r\\n}\\r\\ndiv .floor{\\r\\n    border-bottom: 1px solid black;\\r\\n}\\r\\n\\r\\n#elevatorShaft {\\r\\n    background-color: #4d4d4d;\\r\\n    padding-left: 2px;\\r\\n    padding-right: 2px;\\r\\n}\\r\\n\\r\\n.theElevator {\\r\\n    background-color: white;\\r\\n    margin-top: 2px;\\r\\n    position: absolute;\\r\\n    transition: top;\\r\\n    transition-duration: 1s;\\r\\n    -webkit-transition: top;\\r\\n    -webkit-transition-duration: 1s;\\r\\n    transition-timing-function: cubic-bezier(.1,0,.9,1);\\r\\n    z-index: 2;\\r\\n}\\r\\n.user {\\r\\n    position: absolute;\\r\\n    transition: top;\\r\\n    transition-duration: 1s;\\r\\n    -webkit-transition: top;\\r\\n    -webkit-transition-duration: 1s;\\r\\n    transition-timing-function: cubic-bezier(.1,0,.9,1);\\r\\n    z-index: 10;\\r\\n}\\r\\n.user .popover{\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    top: -20px;\\r\\n    left: 10px;\\r\\n    font-size: 10px;\\r\\n    background-color: #dfdfdf;\\r\\n    color: rgb(255, 0, 0);\\r\\n    width: 16px;\\r\\n    text-align: center;\\r\\n    z-index: 10;\\r\\n    border-radius: 3px;\\r\\n    border: 1px solid black;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./main.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./fn-change-settings.js":
/*!*******************************!*\
  !*** ./fn-change-settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return changeSettings; });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main.js\");\n\r\n\r\n\r\nfunction changeSettings(params){\r\n\r\n    \r\n    let FLOORS = params.FLOORS\r\n    let USERS_COUNT = params.USERS_COUNT\r\n\r\n    // Set floor selector default value and make it changeable. \r\n    let floorsSelector = $(\"#floors-number-input\")[0];\r\n    $(floorsSelector).val(FLOORS);\r\n\r\n    // Set tenant selector default value and make it changeable. \r\n    let tenantSelector = $(\"#tenant-number-input\")[0];\r\n    $(tenantSelector).val(USERS_COUNT);\r\n\r\n    $(\"#functionsForm\").submit(function() { // on submit form, return false\r\n        recalc();\r\n        return false;\r\n    });\r\n\r\n    $(\"#ApplyChanges\").on(\"click\", function(){ \r\n        recalc();\r\n    });\r\n\r\n\r\n    function recalc(){\r\n\r\n        if($(floorsSelector).val()>24) { $(floorsSelector).val(24) }; // Max value is 24\r\n        if($(floorsSelector).val()<1) { $(floorsSelector).val(1) }; // Min value is 1\r\n        params.FLOORS = $(floorsSelector).val();\r\n\r\n        if($(tenantSelector).val()>10) { $(tenantSelector).val(10) }; // Max value is 10\r\n        if($(tenantSelector).val()<1) { $(tenantSelector).val(1) }; // Min value is 1\r\n        params.USERS_COUNT = $(tenantSelector).val();\r\n        \r\n        Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"reInit\"])();\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./fn-change-settings.js?");

/***/ }),

/***/ "./fn-create-buttons.js":
/*!******************************!*\
  !*** ./fn-create-buttons.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createButtons; });\n/* harmony import */ var _fn_move_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn-move-to */ \"./fn-move-to.js\");\n\r\n\r\n\r\nfunction createButtons(params) {\r\n    \r\n    let buttonsBlock = $(\"#buttons\")[0];\r\n    buttonsBlock.innerHTML = \"\";\r\n    \r\n    // Insert to floor selector box buttons\r\n    for (let i = 0; i < params.FLOORS; i++) {\r\n        $(buttonsBlock).append(\"<button type='button' class='btn btn-secondary navigateBtn' value='\" + (params.FLOORS - i) + \"'>\" + (params.FLOORS - i) + \"</button>\");\r\n    }\r\n    \r\n    setActive(params);\r\n    \r\n    return true;\r\n\r\n\r\n    function setActive(params){\r\n\r\n        // make buttons active\r\n        $('.navigateBtn').on('click touch', function(){\r\n            $('.navigateBtn').removeClass( \"btn-success\" ).addClass( \"btn-secondary\" );\r\n            $(this).removeClass( \"btn-secondary\" ).addClass( \"btn-success\" );\r\n            \r\n            Object(_fn_move_to__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.value, params); // this function in fn-move-to.js file\r\n        });\r\n    }\r\n};\n\n//# sourceURL=webpack:///./fn-create-buttons.js?");

/***/ }),

/***/ "./fn-create-floors.js":
/*!*****************************!*\
  !*** ./fn-create-floors.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createFloors; });\nfunction createFloors(params){\r\n    \r\n    let floors = $(\"#floors\")[0];\r\n    $(floors).html(\"\");\r\n\r\n\r\n    for (let i = 0; i < params.FLOORS; i++) {\r\n        $(floors).append(\"<div class='row floor' floor=\" + (params.FLOORS - i) + \"'>\" + (params.FLOORS - i) + \"</div>\");\r\n    }\r\n\r\n    $(\".floor\").height(params.FLOOR_HEIGHT);\r\n}\n\n//# sourceURL=webpack:///./fn-create-floors.js?");

/***/ }),

/***/ "./fn-create-shaft.js":
/*!****************************!*\
  !*** ./fn-create-shaft.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createShaft; });\n/* harmony import */ var _fn_move_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn-move-to */ \"./fn-move-to.js\");\n\r\n\r\nfunction createShaft(params){\r\n    \r\n    \r\n    let elevatorShaft = $(\"#elevatorShaft\")[0];\r\n    $(elevatorShaft).html(\"<div class='theElevator'></div>\").css({\r\n        \"min-width\": params.FLOOR_HEIGHT * 0.75 + \"px\", \r\n        \"max-width\": params.FLOOR_HEIGHT * 0.75 + \"px\"\r\n    });;\r\n    \r\n    //\r\n    let elevator = $(\".theElevator\")[0];\r\n    $(elevator).height(params.FLOOR_HEIGHT - 2).width((params.FLOOR_HEIGHT * 0.75) - 4);\r\n\r\n    // Set elevator to last floor\r\n    elevator.floor = params.FLOORS;\r\n    elevator.style.top = (params.FLOORS - 1) + \"px\";\r\n    \r\n    Object(_fn_move_to__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, params); // Move lift to first floor\r\n    \r\n}\n\n//# sourceURL=webpack:///./fn-create-shaft.js?");

/***/ }),

/***/ "./fn-create-users.js":
/*!****************************!*\
  !*** ./fn-create-users.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createUsers; });\nfunction createUsers(params){\r\n    let FLOORS = params.FLOORS\r\n    let USERS_COUNT = params.USERS_COUNT\r\n    const FLOOR_HEIGHT = params.FLOOR_HEIGHT\r\n\r\n    let floors = $(\"#floors\")[0];\r\n    \r\n    for (let i = 0; i < USERS_COUNT; i++) {\r\n        let picId = Math.floor(Math.random() * users.length); // random image\r\n        // import picUrl from `./images/${users[picId]}`\r\n\r\n\r\n        $(floors).append(\"<div class='user' userId=\" + i + \"'><div class='popover'></div><img src='./images/\" + users[picId] + \"' /></div>\"); // add user\r\n        // $(floors).append(\"<div class='user' userId=\" + i + \"'><div class='popover'></div><img src='\" + picUrl + \"' /></div>\"); // add user\r\n    }\r\n    $(\".user\").css({top:calcTopFloor(1),left: 0}); // put users to first floor\r\n    \r\n    $(\".user\").each(function(userId, user){\r\n        user.position = 0;\r\n        user.currentFloor = 1;\r\n        user.wantMoveToFloor = 1;\r\n        user.wantChangeFloor = false;\r\n        user.inLift = false;\r\n        user.waitLift = false;\r\n    });\r\n\r\n    function calcTopFloor(floor){\r\n        // Calculate top position of user on floor\r\n        return (FLOORS - floor) * (FLOOR_HEIGHT+1) + (FLOOR_HEIGHT - 32);\r\n    }\r\n\r\n}\r\n\r\n\r\n// List of images\r\nlet users = [\r\n    \"user_alien.png\",\r\n    \"user_bart.png\",\r\n    \"user_batman.png\",\r\n    \"user_c3po.png\",\r\n    \"user_clown.png\",\r\n    \"user_cowboy.png\",\r\n    \"user_crabs.png\",\r\n    \"user_darth_vader.png\",\r\n    \"user_dracula.png\",\r\n    \"user_freddy.png\",\r\n    \"user_halk.png\",\r\n    \"user_ironman.png\",\r\n    \"user_lisa.png\",\r\n    \"user_mexican.png\",\r\n    \"user_nude_female.png\",\r\n    \"user_patrick.png\",\r\n    \"user_plankton.png\",\r\n    \"user_spiderman.png\",\r\n    \"user_sponge_bob.png\",\r\n    \"user_superman.png\",\r\n    \"user_yoda.png\"\r\n];\n\n//# sourceURL=webpack:///./fn-create-users.js?");

/***/ }),

/***/ "./fn-move-to.js":
/*!***********************!*\
  !*** ./fn-move-to.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return moveTo; });\n/* harmony import */ var _fn_user_move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn-user-move */ \"./fn-user-move.js\");\n\r\n\r\nfunction moveTo(floor, params){\r\n    \r\n    let FLOORS = params.FLOORS\r\n    const FLOOR_HEIGHT = params.FLOOR_HEIGHT\r\n    const MOOVE_SPEED = params.MOOVE_SPEED\r\n\r\n    let elevator = $(\".theElevator\")[0];\r\n    let focusCheckBox = $(\"#focus\")[0];\r\n    let folowCheckBox = $(\"#folow\")[0];\r\n\r\n    let moveTime = Math.abs(elevator.floor - floor);\r\n    let moveTimeSeconds = (moveTime/MOOVE_SPEED);\r\n    let moveTimeMilSeconds = (moveTime/MOOVE_SPEED) * 1000;\r\n    let moveToPx = (FLOORS * FLOOR_HEIGHT) - (FLOOR_HEIGHT * floor) + (FLOORS - floor) ;\r\n    let moveFromPx = (FLOORS * FLOOR_HEIGHT) - (FLOOR_HEIGHT * elevator.floor) + (FLOORS - elevator.floor);\r\n\r\n    let currentScrollPosition = $( window ).scrollTop();\r\n    let currentLiftPosition = $( elevator ).offset().top;\r\n    let windowHeight = $( window ).height();\r\n\r\n    let usersInLift = [];\r\n\r\n\r\n    if(elevator.floor != floor && !elevator.move){ // If lift not in move and needed floor is not current lift floor\r\n\r\n        // --------------------------------------------------------------------------------------------------------------------------------------------\r\n\r\n        usersInLift = getUsers(elevator.floor); // Get users who ready to move\r\n\r\n        elevator.move = true; // Set the elevator in move state\r\n        elevator.floor = floor; // Set lift current position\r\n\r\n        $(elevator).css({\"transitionDuration\": moveTimeSeconds + \"s\",\"top\" : moveToPx + \"px\"}); // move lift\r\n        $(usersInLift).css({\"transitionDuration\": moveTimeSeconds + \"s\",\"top\": calcTopFloor(floor) + \"px\"}); // move users in lift\r\n\r\n        // --------------------------------------------------------------------------------------------------------------------------------------------\r\n        // Focus screen into Lift if it out of screen\r\n        //\r\n        if( ( currentScrollPosition > (currentLiftPosition + FLOOR_HEIGHT) ) || ( (windowHeight + currentScrollPosition) < currentLiftPosition ) ){\r\n            if(focusCheckBox.checked){\r\n                $('html, body').animate({scrollTop: moveFromPx}, 1000); // focus on lift\r\n            }\r\n            // moveTimeMilSeconds = (moveTimeMilSeconds > 1000 ? moveTimeMilSeconds - 1000 : moveTimeMilSeconds); // reduce folow time\r\n        }\r\n        if(folowCheckBox.checked){\r\n            $('html, body').animate({scrollTop: moveToPx}, moveTimeMilSeconds); // Move screen focus to the end moving position\r\n        }\r\n        //\r\n        // --------------------------------------------------------------------------------------------------------------------------------------------\r\n\r\n    }else{\r\n        $('.navigateBtn').removeClass( \"btn-success\" ).addClass( \"btn-secondary\" ); // Set all buttons in wait mode\r\n    }\r\n\r\n    // When elevator finish moving\r\n    $(elevator).one(\"transitionend webkitTransitionEnd oTransitionEnd\",function(){\r\n        elevator.move = false; // Remove move state\r\n        \r\n        $('.navigateBtn').removeClass( \"btn-success\" ).addClass( \"btn-secondary\" ); // Set all buttons in wait mode\r\n        \r\n        $.each(usersInLift, function(userId, user){\r\n            user.currentFloor = elevator.floor;\r\n            if(user.wantMoveToFloor == elevator.floor){ // when user on his floor\r\n                $(user).find(\".popover\").hide(); // hide popover\r\n                user.wantChangeFloor = false; // remove flags\r\n                user.waitLift = false;\r\n                $(user).animate({\"left\": \"0px\"}, 500,\"linear\", function(){ // walk out from lift\r\n                    \r\n                    //console.log('user walk() from fn-move-to.js', params)\r\n                    Object(_fn_user_move__WEBPACK_IMPORTED_MODULE_0__[\"walk\"])(user, params); // resume user wlaking\r\n                    // userMove(params)\r\n                });\r\n            }\r\n        });\r\n\r\n        usersInLift = getUsers(elevator.floor); // check again who ready to move\r\n        $.each(usersInLift, function(userId, user){\r\n            if(user.wantChangeFloor && user.currentFloor == elevator.floor){\r\n                $(user).animate({\"left\": \"-34px\"}, 500,\"linear\"); // come in lift\r\n            }\r\n        });\r\n\r\n    });\r\n\r\n\r\n    function calcTopFloor(floor){\r\n        // Calculate top position of user on floor\r\n        return (FLOORS - floor) * (FLOOR_HEIGHT+1) + (FLOOR_HEIGHT - 32);\r\n    }\r\n    // this function collects users who want to move\r\n    function getUsers(elevatorCurrentFloor){\r\n        let usersInLift = [];\r\n        $(\".user\").each(function(userId, user){\r\n            if(user.currentFloor == elevatorCurrentFloor && user.waitLift){\r\n                usersInLift.push(user);\r\n            }\r\n        });\r\n        return usersInLift;\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./fn-move-to.js?");

/***/ }),

/***/ "./fn-user-move.js":
/*!*************************!*\
  !*** ./fn-user-move.js ***!
  \*************************/
/*! exports provided: default, walk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userMove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"walk\", function() { return walk; });\nfunction userMove(params){\r\n\r\n    $(\".user\").each(function(userId, user){\r\n        walk(user, params); // make each user active\r\n    });\r\n\r\n}\r\n\r\nfunction walk(user, params){\r\n\r\n    let newPosition = getNewPosition(user, params); // calculate new destination\r\n\r\n    user.position = newPosition.position; // save current destination for calculating timnig in next move\r\n    \r\n    if(!user.waitLift){ // if user dont wait lift\r\n        $(user).animate(\r\n            {left: newPosition.position + \"px\"}, newPosition.timing, \"linear\", // walk\r\n            function(){ // when user got the destination\r\n                if(newPosition.wantChangeFloor){ // if user decided to change floor\r\n                    user.wantMoveToFloor = newPosition.wantMoveToFloor;\r\n                    user.wantChangeFloor = true;\r\n                    user.waitLift = true;\r\n                    $(user).find(\".popover\").html(user.wantMoveToFloor).show(); // show decided floor\r\n                    \r\n                    let elevator = $(\".theElevator\")[0];\r\n                    if(user.currentFloor == elevator.floor && !elevator.move){ // check if lift in this floor\r\n                        $(user).animate({\"left\": \"-34px\"}, 500,\"linear\"); // if true, come in\r\n                    }\r\n                } else {\r\n                    walk(user, params); // walk again\r\n                }\r\n            }\r\n        );\r\n    }\r\n\r\n    function getNewPosition(userObject, params){ // calculate\r\n    \r\n        const USER_MOOVE_SPEED = params.USER_MOOVE_SPEED\r\n    \r\n        let retVal = [];\r\n        let maxLeft = parseInt($(\"#floors\").outerWidth() - 32 ,10); // get maximum position\r\n        \r\n        retVal.position = Math.floor(Math.random() * maxLeft); // generate new position\r\n        \r\n        if(changeFloorDecision(params)){\r\n            retVal.position = 0;\r\n            retVal.wantChangeFloor = true;\r\n            retVal.wantMoveToFloor = getNewFloor(userObject.currentFloor, params);\r\n        }\r\n    \r\n        retVal.timing = Math.abs(userObject.position - retVal.position) * USER_MOOVE_SPEED; // calculate the timing of move\r\n        \r\n        return retVal;\r\n    }\r\n\r\n    function changeFloorDecision(params){\r\n    \r\n        const CHANCE = params.CHANCE\r\n    \r\n        if(Math.floor(Math.random() * CHANCE) ==1 ){\r\n            return true;\r\n        };\r\n        return false;\r\n    }\r\n    \r\n    function getNewFloor(currentFloor, params){\r\n        \r\n        let FLOORS = params.FLOORS\r\n    \r\n        let newFloor = Math.floor(Math.random() * FLOORS) + 1;\r\n        if(FLOORS>1 && newFloor==currentFloor) {\r\n            newFloor = getNewFloor(currentFloor,params);\r\n        }\r\n        return newFloor;\r\n    }\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./fn-user-move.js?");

/***/ }),

/***/ "./main.css":
/*!******************!*\
  !*** ./main.css ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./main.css */ \"../node_modules/css-loader/dist/cjs.js!./main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./main.css?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: reInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reInit\", function() { return reInit; });\n/* harmony import */ var _fn_create_buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fn-create-buttons */ \"./fn-create-buttons.js\");\n/* harmony import */ var _fn_create_floors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fn-create-floors */ \"./fn-create-floors.js\");\n/* harmony import */ var _fn_create_shaft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fn-create-shaft */ \"./fn-create-shaft.js\");\n/* harmony import */ var _fn_create_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fn-create-users */ \"./fn-create-users.js\");\n/* harmony import */ var _fn_change_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fn-change-settings */ \"./fn-change-settings.js\");\n/* harmony import */ var _fn_user_move__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fn-user-move */ \"./fn-user-move.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.css */ \"./main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst params = {\r\n    FLOORS: 12,\r\n    USERS_COUNT: 5,\r\n    FLOOR_HEIGHT: 50,\r\n    MOOVE_SPEED: 5,\r\n    USER_MOOVE_SPEED: 15,\r\n    CHANCE: 10\r\n}\r\n\r\n$(document).ready(function(){\r\n    \r\n\r\n    reInit();\r\n    \r\n    Object(_fn_change_settings__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(params);\r\n\r\n    $('[data-toggle=\"tooltip\"]').tooltip();\r\n    \r\n});\r\n    \r\nfunction reInit(){\r\n    console.log('document redy')\r\n\r\n    Object(_fn_create_floors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(params);\r\n    Object(_fn_create_shaft__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(params);\r\n    Object(_fn_create_buttons__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params);\r\n    Object(_fn_create_users__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(params);\r\n    Object(_fn_user_move__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(params);\r\n\r\n}\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });