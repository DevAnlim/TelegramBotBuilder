module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "9kNL":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Layout_container__2QLYW",
	"main": "Layout_main__3m1yK"
};


/***/ }),

/***/ "Ea3V":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react-beautiful-dnd"
var external_react_beautiful_dnd_ = __webpack_require__("uzjx");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// CONCATENATED MODULE: ./src/utils/shuffle.js
const shuffle = array => array.sort(() => Math.random() - 0.5)[0];

/* harmony default export */ var utils_shuffle = (shuffle);
// CONCATENATED MODULE: ./src/utils/colors.js
const colors = ['#a4ffd3', '#ff10ae', '#fffa76', '#d67dff', '#ff4141'];
/* harmony default export */ var utils_colors = (colors);
// CONCATENATED MODULE: ./src/redux/reducers/dashboard.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  botList: [{
    id: 0,
    name: 'bot1',
    img: null,
    color: utils_shuffle(utils_colors)
  }, {
    id: 1,
    name: 'bot2',
    img: null,
    color: utils_shuffle(utils_colors)
  }, {
    id: 2,
    name: 'bot3',
    img: null,
    color: utils_shuffle(utils_colors)
  }, {
    id: 3,
    name: 'bot4',
    img: null,
    color: utils_shuffle(utils_colors)
  }, {
    id: 4,
    name: 'bot5',
    img: null,
    color: utils_shuffle(utils_colors)
  }, {
    id: 5,
    name: 'bot6',
    img: null,
    color: utils_shuffle(utils_colors)
  }]
};
function dashboard(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ORDER_DASHBOARD':
      return _objectSpread(_objectSpread({}, state), {}, {
        botList: action.payload
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/bot.js
function bot_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function bot_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bot_ownKeys(Object(source), true).forEach(function (key) { bot_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bot_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bot_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const intitalState = {
  list: []
};
function bot(state = intitalState, action) {
  var _newList;

  switch (action.type) {
    case 'ADD_ITEM':
      let newList = [...state.list];
      const idList = newList.map(({
        id
      }) => id);
      const index = idList.indexOf(action.payload.id);

      if (index === -1) {
        newList.push(action.payload);
      }

      return bot_objectSpread(bot_objectSpread({}, state), {}, {
        list: [...newList]
      });

    case 'UPDATE_LIST':
      return bot_objectSpread(bot_objectSpread({}, state), {}, {
        list: [...action.payload]
      });

    case 'CHANGE_VALUE':
      newList = [...state.list];
      newList = (_newList = newList) === null || _newList === void 0 ? void 0 : _newList.map(newListItem => {
        if (newListItem.id === action.payload.id) {
          newListItem.values[action.payload.name] = action.payload.value;
        }

        return newListItem;
      });
      return bot_objectSpread(bot_objectSpread({}, state), {}, {
        list: [...newList]
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/apiKeyModal.js
function apiKeyModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function apiKeyModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { apiKeyModal_ownKeys(Object(source), true).forEach(function (key) { apiKeyModal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { apiKeyModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function apiKeyModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const apiKeyModal_initialState = {
  isOpen: false
};
function apiKeyModal(state = apiKeyModal_initialState, action) {
  switch (action.type) {
    case 'OPEN_APIKEY_MODAL':
      return apiKeyModal_objectSpread(apiKeyModal_objectSpread({}, state), {}, {
        isOpen: true
      });

    case 'CLOSE_APIKEY_MODAL':
      return apiKeyModal_objectSpread(apiKeyModal_objectSpread({}, state), {}, {
        isOpen: false
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/reducers/index.js




const app = Object(external_redux_["combineReducers"])({
  dashboard: dashboard,
  bot: bot,
  apiKeyModal: apiKeyModal
});
/* harmony default export */ var reducers = (app);
// CONCATENATED MODULE: ./src/redux/store.js





const initiateStore = () => Object(external_redux_["createStore"])(reducers, Object(external_redux_devtools_extension_["composeWithDevTools"])());

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(initiateStore);
/* harmony default export */ var store = (wrapper);
// EXTERNAL MODULE: ./src/components/Layout/Layout.module.scss
var Layout_module = __webpack_require__("9kNL");
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);

// EXTERNAL MODULE: ./src/components/Header/index.jsx
var Header = __webpack_require__("M8b6");

// CONCATENATED MODULE: ./src/components/Layout/index.jsx





function Layout({
  children
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Layout_module_default.a.container,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
        className: Layout_module_default.a.main,
        children: children
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__("Ea3V");

// CONCATENATED MODULE: ./src/pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
  });
}

Object(external_react_beautiful_dnd_["resetServerContext"])();
/* harmony default export */ var _app = __webpack_exports__["default"] = (store.withRedux(App));

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "M8b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eWwy");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Header({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("header", {
    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    children: children
  });
}

/***/ }),

/***/ "eWwy":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__fqqrS"
};


/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "uzjx":
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

/***/ })

/******/ });