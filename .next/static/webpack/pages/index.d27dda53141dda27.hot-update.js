/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \" Home | Ig.News \"\n                }, void 0, false, {\n                    fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"\\uD83D\\uDC4F Hey, Wellcome\"\n                            }, void 0, false, {\n                                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 13,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                        lineNumber: 14,\n                                        columnNumber: 27\n                                    }, this),\n                                    \" world. \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get access to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                        lineNumber: 16,\n                                        columnNumber: 44\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"for $9.90 month\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                        lineNumber: 17,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {}, void 0, false, {\n                                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl coding\"\n                    }, void 0, false, {\n                        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ21DO0FBQ3pCO0FBRXhCLFNBQVNHLElBQUksR0FBRztJQUM3QixxQkFDRTs7MEJBQ0EsOERBQUNILGtEQUFJOzBCQUNILDRFQUFDSSxPQUFLOzhCQUFDLGtCQUFnQjs7Ozs7d0JBQVE7Ozs7O29CQUMxQjswQkFDUiw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFFSiwyRUFBdUI7O2tDQUN2Qyw4REFBQ00sU0FBTzt3QkFBQ0YsU0FBUyxFQUFFSiwrREFBVzs7MENBQzdCLDhEQUFDUSxNQUFJOzBDQUFDLDRCQUFlOzs7OztvQ0FBTzswQ0FDNUIsOERBQUNDLElBQUU7O29DQUFDLGtCQUFnQjtrREFBQSw4REFBQ0QsTUFBSTtrREFBQyxPQUFLOzs7Ozs0Q0FBTztvQ0FBQSxVQUFROzs7Ozs7b0NBQUs7MENBQ25ELDhEQUFDRSxHQUFDOztvQ0FBQyxxQ0FDa0M7a0RBQUEsOERBQUNDLElBQUU7Ozs7NENBQUc7a0RBQ3pDLDhEQUFDSCxNQUFJO2tEQUFDLGlCQUFlOzs7Ozs0Q0FBTzs7Ozs7O29DQUMxQjswQ0FDSiw4REFBQ1Qsd0VBQWU7Ozs7b0NBQUc7Ozs7Ozs0QkFDWDtrQ0FFViw4REFBQ2EsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLG9CQUFvQjt3QkFBQ0MsR0FBRyxFQUFDLGFBQWE7Ozs7OzRCQUFPOzs7Ozs7b0JBQ2hEOztvQkFDSCxDQUNIO0NBQ0g7QUFyQnVCYixLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgU3Vic2NyaWJlQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybihcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPiBIb21lIHwgSWcuTmV3cyA8L3RpdGxlPlxuICAgIDwvSGVhZD4gICAgIFxuICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lcn0+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICA8c3Bhbj7wn5GPIEhleSwgV2VsbGNvbWU8L3NwYW4+XG4gICAgICA8aDE+IE5ld3MgYWJvdXQgdGhlIDxzcGFuPlJlYWN0PC9zcGFuPiB3b3JsZC4gPC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBHZXQgYWNjZXNzIHRvIGFsbCB0aGUgcHVibGljYXRpb25zIDxiciAvPlxuICAgICAgICA8c3Bhbj5mb3IgJDkuOTAgbW9udGg8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8U3Vic2NyaWJlQnV0dG9uIC8+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPGltZyBzcmM9Jy9pbWFnZXMvYXZhdGFyLnN2ZycgYWx0PSdHaXJsIGNvZGluZyc+PC9pbWc+XG4gICA8L21haW4+XG4gICAgPC8+XG4gICApICAgIFxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJTdWJzY3JpYmVCdXR0b24iLCJzdHlsZXMiLCJIb21lIiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGVudENvbnRhaW5lciIsInNlY3Rpb24iLCJoZXJvIiwic3BhbiIsImgxIiwicCIsImJyIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});