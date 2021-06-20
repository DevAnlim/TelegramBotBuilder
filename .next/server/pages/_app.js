(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.scss */ "./src/components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\githubProjects\\TelegramBotBuilder\\src\\components\\Header\\index.jsx";


function Header({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header),
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
Header.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.elementType.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.instanceOf(Object).isRequired])
};

/***/ }),

/***/ "./src/components/Layout/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout.module.scss */ "./src/components/Layout/Layout.module.scss");
/* harmony import */ var _Layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.jsx");


var _jsxFileName = "C:\\githubProjects\\TelegramBotBuilder\\src\\components\\Layout\\index.jsx";



function Layout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: (_Layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.elementType.isRequired
};

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.jsx");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\githubProjects\\TelegramBotBuilder\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_1__.PropTypes.instanceOf(Object).isRequired
};
(0,react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.resetServerContext)();
/* harmony default export */ __webpack_exports__["default"] = (_redux_store__WEBPACK_IMPORTED_MODULE_3__.default.withRedux(App));

/***/ }),

/***/ "./src/redux/reducers/apiKeyModal.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/apiKeyModal.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ apiKeyModal; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isOpen: false
};
function apiKeyModal(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_APIKEY_MODAL':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: true
      });

    case 'CLOSE_APIKEY_MODAL':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/bot.js":
/*!***********************************!*\
  !*** ./src/redux/reducers/bot.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ bot; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

      return _objectSpread(_objectSpread({}, state), {}, {
        list: [...newList]
      });

    case 'UPDATE_LIST':
      return _objectSpread(_objectSpread({}, state), {}, {
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
      return _objectSpread(_objectSpread({}, state), {}, {
        list: [...newList]
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/dashboard.js":
/*!*****************************************!*\
  !*** ./src/redux/reducers/dashboard.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ dashboard; }
/* harmony export */ });
/* harmony import */ var _utils_shuffle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/shuffle */ "./src/utils/shuffle.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/colors */ "./src/utils/colors.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  botList: [{
    id: 0,
    name: 'bot1',
    img: null,
    color: (0,_utils_shuffle__WEBPACK_IMPORTED_MODULE_0__.default)(_utils_colors__WEBPACK_IMPORTED_MODULE_1__.default)
  }, {
    id: 1,
    name: 'bot2',
    img: null,
    color: (0,_utils_shuffle__WEBPACK_IMPORTED_MODULE_0__.default)(_utils_colors__WEBPACK_IMPORTED_MODULE_1__.default)
  }, {
    id: 2,
    name: 'bot3',
    img: null,
    color: (0,_utils_shuffle__WEBPACK_IMPORTED_MODULE_0__.default)(_utils_colors__WEBPACK_IMPORTED_MODULE_1__.default)
  }, {
    id: 3,
    name: 'bot4',
    img: null,
    color: (0,_utils_shuffle__WEBPACK_IMPORTED_MODULE_0__.default)(_utils_colors__WEBPACK_IMPORTED_MODULE_1__.default)
  }, {
    id: 4,
    name: 'bot5',
    img: null,
    color: (0,_utils_shuffle__WEBPACK_IMPORTED_MODULE_0__.default)(_utils_colors__WEBPACK_IMPORTED_MODULE_1__.default)
  }, {
    id: 5,
    name: 'bot6',
    img: null,
    color: (0,_utils_shuffle__WEBPACK_IMPORTED_MODULE_0__.default)(_utils_colors__WEBPACK_IMPORTED_MODULE_1__.default)
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

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard */ "./src/redux/reducers/dashboard.js");
/* harmony import */ var _bot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bot */ "./src/redux/reducers/bot.js");
/* harmony import */ var _apiKeyModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiKeyModal */ "./src/redux/reducers/apiKeyModal.js");




const app = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  dashboard: _dashboard__WEBPACK_IMPORTED_MODULE_1__.default,
  bot: _bot__WEBPACK_IMPORTED_MODULE_2__.default,
  apiKeyModal: _apiKeyModal__WEBPACK_IMPORTED_MODULE_3__.default
});
/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/redux/reducers/index.js");





const initiateStore = () => (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.default, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)());

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(initiateStore);
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./src/utils/colors.js":
/*!*****************************!*\
  !*** ./src/utils/colors.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const colors = ['#a4ffd3', '#ff10ae', '#fffa76', '#d67dff', '#ff4141'];
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./src/utils/shuffle.js":
/*!******************************!*\
  !*** ./src/utils/shuffle.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shuffle = array => array.sort(() => Math.random() - 0.5)[0];

/* harmony default export */ __webpack_exports__["default"] = (shuffle);

/***/ }),

/***/ "./src/components/Header/Header.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/Header.module.scss ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Header_header__fqqrS"
};


/***/ }),

/***/ "./src/components/Layout/Layout.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Layout/Layout.module.scss ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Layout_container__2QLYW",
	"main": "Layout_main__3m1yK"
};


/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-beautiful-dnd");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWxlZ3JhbS1ib3QtYnVpbGRlci8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vdGVsZWdyYW0tYm90LWJ1aWxkZXIvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanN4Iiwid2VicGFjazovL3RlbGVncmFtLWJvdC1idWlsZGVyLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vdGVsZWdyYW0tYm90LWJ1aWxkZXIvLi9zcmMvcmVkdXgvcmVkdWNlcnMvYXBpS2V5TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdGVsZWdyYW0tYm90LWJ1aWxkZXIvLi9zcmMvcmVkdXgvcmVkdWNlcnMvYm90LmpzIiwid2VicGFjazovL3RlbGVncmFtLWJvdC1idWlsZGVyLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly90ZWxlZ3JhbS1ib3QtYnVpbGRlci8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZWxlZ3JhbS1ib3QtYnVpbGRlci8uL3NyYy9yZWR1eC9zdG9yZS5qcyIsIndlYnBhY2s6Ly90ZWxlZ3JhbS1ib3QtYnVpbGRlci8uL3NyYy91dGlscy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vdGVsZWdyYW0tYm90LWJ1aWxkZXIvLi9zcmMvdXRpbHMvc2h1ZmZsZS5qcyIsIndlYnBhY2s6Ly90ZWxlZ3JhbS1ib3QtYnVpbGRlci8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdGVsZWdyYW0tYm90LWJ1aWxkZXIvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL3RlbGVncmFtLWJvdC1idWlsZGVyL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vdGVsZWdyYW0tYm90LWJ1aWxkZXIvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vdGVsZWdyYW0tYm90LWJ1aWxkZXIvZXh0ZXJuYWwgXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIiLCJ3ZWJwYWNrOi8vdGVsZWdyYW0tYm90LWJ1aWxkZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly90ZWxlZ3JhbS1ib3QtYnVpbGRlci9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vdGVsZWdyYW0tYm90LWJ1aWxkZXIvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjaGlsZHJlbiIsInN0eWxlcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIk9iamVjdCIsImlzUmVxdWlyZWQiLCJMYXlvdXQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZXNldFNlcnZlckNvbnRleHQiLCJ3cmFwcGVyIiwiaW5pdGlhbFN0YXRlIiwiaXNPcGVuIiwiYXBpS2V5TW9kYWwiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpbnRpdGFsU3RhdGUiLCJsaXN0IiwiYm90IiwibmV3TGlzdCIsImlkTGlzdCIsIm1hcCIsImlkIiwiaW5kZXgiLCJpbmRleE9mIiwicGF5bG9hZCIsInB1c2giLCJuZXdMaXN0SXRlbSIsInZhbHVlcyIsIm5hbWUiLCJ2YWx1ZSIsImJvdExpc3QiLCJpbWciLCJjb2xvciIsInNodWZmbGUiLCJjb2xvcnMiLCJkYXNoYm9hcmQiLCJhcHAiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWF0ZVN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiY3JlYXRlV3JhcHBlciIsImFycmF5Iiwic29ydCIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQztBQUFGLENBQWhCLEVBQThCO0FBQzNDLHNCQUFPO0FB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R0FBRyxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDLENBQWY7QUFFQSwrREFBZUEsTUFBZixFOzs7Ozs7Ozs7Ozs7QUNGQSxNQUFNRCxPQUFPLEdBQUdTLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVcsTUFBTUMsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWpDLEVBQXNDLENBQXRDLENBQXpCOztBQUVBLCtEQUFlWixPQUFmLEU7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PntjaGlsZHJlbn08L2hlYWRlcj47XHJcbn1cclxuXHJcbkhlYWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXHJcbiAgXSksXHJcbn07XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYXlvdXQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbkxheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgcmVzZXRTZXJ2ZXJDb250ZXh0IH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3JlZHV4L3N0b3JlJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuQXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxucmVzZXRTZXJ2ZXJDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNPcGVuOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwaUtleU1vZGFsKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdPUEVOX0FQSUtFWV9NT0RBTCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc09wZW46IHRydWUgfTtcclxuXHJcbiAgICBjYXNlICdDTE9TRV9BUElLRVlfTU9EQUwnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNPcGVuOiBmYWxzZSB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgaW50aXRhbFN0YXRlID0ge1xyXG4gIGxpc3Q6IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm90KHN0YXRlID0gaW50aXRhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdBRERfSVRFTSc6XHJcbiAgICAgIGxldCBuZXdMaXN0ID0gWy4uLnN0YXRlLmxpc3RdO1xyXG4gICAgICBjb25zdCBpZExpc3QgPSBuZXdMaXN0Lm1hcCgoeyBpZCB9KSA9PiBpZCk7XHJcblxyXG4gICAgICBjb25zdCBpbmRleCA9IGlkTGlzdC5pbmRleE9mKGFjdGlvbi5wYXlsb2FkLmlkKTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICBuZXdMaXN0LnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbGlzdDogWy4uLm5ld0xpc3RdIH07XHJcblxyXG4gICAgY2FzZSAnVVBEQVRFX0xJU1QnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbGlzdDogWy4uLmFjdGlvbi5wYXlsb2FkXSB9O1xyXG5cclxuICAgIGNhc2UgJ0NIQU5HRV9WQUxVRSc6XHJcbiAgICAgIG5ld0xpc3QgPSBbLi4uc3RhdGUubGlzdF07XHJcblxyXG4gICAgICBuZXdMaXN0ID0gbmV3TGlzdD8ubWFwKG5ld0xpc3RJdGVtID0+IHtcclxuICAgICAgICBpZiAobmV3TGlzdEl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XHJcbiAgICAgICAgICBuZXdMaXN0SXRlbS52YWx1ZXNbYWN0aW9uLnBheWxvYWQubmFtZV0gPSBhY3Rpb24ucGF5bG9hZC52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdMaXN0SXRlbTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbGlzdDogWy4uLm5ld0xpc3RdIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBzaHVmZmxlIGZyb20gJy4uLy4uL3V0aWxzL3NodWZmbGUnO1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL3V0aWxzL2NvbG9ycyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgYm90TGlzdDogW1xyXG4gICAgeyBpZDogMCwgbmFtZTogJ2JvdDEnLCBpbWc6IG51bGwsIGNvbG9yOiBzaHVmZmxlKGNvbG9ycykgfSxcclxuICAgIHsgaWQ6IDEsIG5hbWU6ICdib3QyJywgaW1nOiBudWxsLCBjb2xvcjogc2h1ZmZsZShjb2xvcnMpIH0sXHJcbiAgICB7IGlkOiAyLCBuYW1lOiAnYm90MycsIGltZzogbnVsbCwgY29sb3I6IHNodWZmbGUoY29sb3JzKSB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogJ2JvdDQnLCBpbWc6IG51bGwsIGNvbG9yOiBzaHVmZmxlKGNvbG9ycykgfSxcclxuICAgIHsgaWQ6IDQsIG5hbWU6ICdib3Q1JywgaW1nOiBudWxsLCBjb2xvcjogc2h1ZmZsZShjb2xvcnMpIH0sXHJcbiAgICB7IGlkOiA1LCBuYW1lOiAnYm90NicsIGltZzogbnVsbCwgY29sb3I6IHNodWZmbGUoY29sb3JzKSB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXNoYm9hcmQoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0NIQU5HRV9PUkRFUl9EQVNIQk9BUkQnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYm90TGlzdDogYWN0aW9uLnBheWxvYWQgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGRhc2hib2FyZCBmcm9tICcuL2Rhc2hib2FyZCc7XHJcbmltcG9ydCBib3QgZnJvbSAnLi9ib3QnO1xyXG5pbXBvcnQgYXBpS2V5TW9kYWwgZnJvbSAnLi9hcGlLZXlNb2RhbCc7XHJcblxyXG5jb25zdCBhcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGRhc2hib2FyZCxcclxuICBib3QsXHJcbiAgYXBpS2V5TW9kYWwsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgYXBwIGZyb20gJy4vcmVkdWNlcnMnO1xyXG5cclxuY29uc3QgaW5pdGlhdGVTdG9yZSA9ICgpID0+IGNyZWF0ZVN0b3JlKGFwcCwgY29tcG9zZVdpdGhEZXZUb29scygpKTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGluaXRpYXRlU3RvcmUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwiY29uc3QgY29sb3JzID0gWycjYTRmZmQzJywgJyNmZjEwYWUnLCAnI2ZmZmE3NicsICcjZDY3ZGZmJywgJyNmZjQxNDEnXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbG9ycztcclxuIiwiY29uc3Qgc2h1ZmZsZSA9IGFycmF5ID0+IGFycmF5LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSlbMF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaHVmZmxlO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX19mcXFyU1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTGF5b3V0X2NvbnRhaW5lcl9fMlFMWVdcIixcblx0XCJtYWluXCI6IFwiTGF5b3V0X21haW5fXzNtMXlLXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==