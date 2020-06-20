webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _web3_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../web3.js */ \"./web3.js\");\n/* harmony import */ var _web3_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_web3_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _ethereum_build_contracts_Storage_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ethereum/build/contracts/Storage.json */ \"./ethereum/build/contracts/Storage.json\");\nvar _ethereum_build_contracts_Storage_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../ethereum/build/contracts/Storage.json */ \"./ethereum/build/contracts/Storage.json\", 1);\n/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_error.js */ \"./pages/_error.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/cryptokowsik/next-semantic-DappKit/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar App = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(App, _Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, App);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(App, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          accounts = _this$props.accounts,\n          StorageInstance = _this$props.StorageInstance,\n          name = _this$props.name,\n          errorOccured = _this$props.errorOccured;\n\n      if (errorOccured) {\n        return __jsx(_error_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 20\n          }\n        });\n      }\n\n      console.log(accounts);\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        accounts: accounts,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 17\n        }\n      }, \"Edit index.js file\"));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var errorOccured, accounts, networkId, StorageDeployedAddress, StorageInstance, name;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                errorOccured = false;\n                _context.prev = 1;\n                _context.next = 4;\n                return _web3_js__WEBPACK_IMPORTED_MODULE_9___default.a.eth.getAccounts();\n\n              case 4:\n                accounts = _context.sent;\n                _context.next = 7;\n                return _web3_js__WEBPACK_IMPORTED_MODULE_9___default.a.eth.net.getId();\n\n              case 7:\n                networkId = _context.sent;\n                StorageDeployedAddress = _ethereum_build_contracts_Storage_json__WEBPACK_IMPORTED_MODULE_10__.networks[networkId].address;\n                _context.next = 11;\n                return new _web3_js__WEBPACK_IMPORTED_MODULE_9___default.a.eth.Contract(_ethereum_build_contracts_Storage_json__WEBPACK_IMPORTED_MODULE_10__.abi, StorageDeployedAddress);\n\n              case 11:\n                StorageInstance = _context.sent;\n                _context.next = 14;\n                return StorageInstance.methods.name().call();\n\n              case 14:\n                name = _context.sent;\n                _context.next = 21;\n                break;\n\n              case 17:\n                _context.prev = 17;\n                _context.t0 = _context[\"catch\"](1);\n                console.log(error);\n                errorOccured = true;\n\n              case 21:\n                return _context.abrupt(\"return\", {\n                  accounts: accounts,\n                  StorageInstance: StorageInstance,\n                  name: name\n                });\n\n              case 22:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[1, 17]]);\n      }));\n\n      function getInitialProps() {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiYWNjb3VudHMiLCJTdG9yYWdlSW5zdGFuY2UiLCJuYW1lIiwiZXJyb3JPY2N1cmVkIiwiY29uc29sZSIsImxvZyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm5ldCIsImdldElkIiwibmV0d29ya0lkIiwiU3RvcmFnZURlcGxveWVkQWRkcmVzcyIsIlN0b3JhZ2UiLCJuZXR3b3JrcyIsImFkZHJlc3MiLCJDb250cmFjdCIsImFiaSIsIm1ldGhvZHMiLCJjYWxsIiwiZXJyb3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxHOzs7Ozs7Ozs7Ozs7OzZCQWlCTTtBQUFBLHdCQUNpRCxLQUFLQyxLQUR0RDtBQUFBLFVBQ0dDLFFBREgsZUFDR0EsUUFESDtBQUFBLFVBQ1lDLGVBRFosZUFDWUEsZUFEWjtBQUFBLFVBQzRCQyxJQUQ1QixlQUM0QkEsSUFENUI7QUFBQSxVQUNpQ0MsWUFEakMsZUFDaUNBLFlBRGpDOztBQUVKLFVBQUdBLFlBQUgsRUFBZ0I7QUFDWixlQUFPLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0FBQ0RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaO0FBQ0EsYUFDSSxNQUFDLDBEQUFEO0FBQVEsZ0JBQVEsRUFBRUEsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosQ0FESjtBQU1IOzs7Ozs7Ozs7O0FBM0JPRyw0QixHQUFlLEs7Ozt1QkFHRUcsK0NBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEU7OztBQUFqQlIsd0I7O3VCQUNrQk0sK0NBQUksQ0FBQ0MsR0FBTCxDQUFTRSxHQUFULENBQWFDLEtBQWIsRTs7O0FBQWxCQyx5QjtBQUNBQyxzQ0FBc0IsR0FBR0Msb0VBQU8sQ0FBQ0MsUUFBUixDQUFpQkgsU0FBakIsRUFBNEJJLE9BQXJEOzt1QkFDd0IsSUFBSVQsK0NBQUksQ0FBQ0MsR0FBTCxDQUFTUyxRQUFiLENBQXNCSCxvRUFBTyxDQUFDSSxHQUE5QixFQUFtQ0wsc0JBQW5DLEM7OztBQUF4QlgsK0I7O3VCQUNhQSxlQUFlLENBQUNpQixPQUFoQixDQUF3QmhCLElBQXhCLEdBQStCaUIsSUFBL0IsRTs7O0FBQWJqQixvQjs7Ozs7OztBQUdFRSx1QkFBTyxDQUFDQyxHQUFSLENBQVllLEtBQVo7QUFDQWpCLDRCQUFZLEdBQUMsSUFBYjs7O2lEQUVDO0FBQUNILDBCQUFRLEVBQVJBLFFBQUQ7QUFBVUMsaUNBQWUsRUFBZkEsZUFBVjtBQUEwQkMsc0JBQUksRUFBSkE7QUFBMUIsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFmR21CLCtDOztBQWdDSHZCLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi93ZWIzLmpzJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4uL2V0aGVyZXVtL2J1aWxkL2NvbnRyYWN0cy9TdG9yYWdlLmpzb24nO1xuaW1wb3J0IEVycm9yIGZyb20gJy4vX2Vycm9yLmpzJ1xuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcbiAgICAgICAgbGV0IGVycm9yT2NjdXJlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgYWNjb3VudHMsbmV0d29ya0lkLFN0b3JhZ2VEZXBsb3llZEFkZHJlc3MsU3RvcmFnZUluc3RhbmNlLG5hbWU7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xuICAgICAgICAgICAgU3RvcmFnZURlcGxveWVkQWRkcmVzcyA9IFN0b3JhZ2UubmV0d29ya3NbbmV0d29ya0lkXS5hZGRyZXNzO1xuICAgICAgICAgICAgU3RvcmFnZUluc3RhbmNlID0gYXdhaXQgbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFN0b3JhZ2UuYWJpLCBTdG9yYWdlRGVwbG95ZWRBZGRyZXNzKTtcbiAgICAgICAgICAgIG5hbWUgPSBhd2FpdCBTdG9yYWdlSW5zdGFuY2UubWV0aG9kcy5uYW1lKCkuY2FsbCgpO1xuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgIGVycm9yT2NjdXJlZD10cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7YWNjb3VudHMsU3RvcmFnZUluc3RhbmNlLG5hbWV9O1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3Qge2FjY291bnRzLFN0b3JhZ2VJbnN0YW5jZSxuYW1lLGVycm9yT2NjdXJlZH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZihlcnJvck9jY3VyZWQpe1xuICAgICAgICAgICAgcmV0dXJuIDxFcnJvciAvPlxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGFjY291bnRzKVxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TGF5b3V0IGFjY291bnRzPXthY2NvdW50c30+XG4gICAgICAgICAgICAgICAgPGgyPkVkaXQgaW5kZXguanMgZmlsZTwvaDI+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})