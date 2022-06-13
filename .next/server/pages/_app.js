/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Header/styles.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/styles.module.scss ***!
  \**************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"headerContainer\": \"styles_headerContainer__uAgJk\",\n\t\"headerContent\": \"styles_headerContent__h9eUe\",\n\t\"active\": \"styles_active__l7I1o\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3M/YTIzOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJDb250YWluZXJcIjogXCJzdHlsZXNfaGVhZGVyQ29udGFpbmVyX191QWdKa1wiLFxuXHRcImhlYWRlckNvbnRlbnRcIjogXCJzdHlsZXNfaGVhZGVyQ29udGVudF9faDllVWVcIixcblx0XCJhY3RpdmVcIjogXCJzdHlsZXNfYWN0aXZlX19sN0kxb1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/styles.module.scss\n");

/***/ }),

/***/ "./src/components/SignInButton/styles.module.scss":
/*!********************************************************!*\
  !*** ./src/components/SignInButton/styles.module.scss ***!
  \********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"signInButton\": \"styles_signInButton__byt5_\",\n\t\"closeIcon\": \"styles_closeIcon__yr0aw\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzPzBhN2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lnbkluQnV0dG9uXCI6IFwic3R5bGVzX3NpZ25JbkJ1dHRvbl9fYnl0NV9cIixcblx0XCJjbG9zZUljb25cIjogXCJzdHlsZXNfY2xvc2VJY29uX195cjBhd1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SignInButton/styles.module.scss\n");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SignInButton */ \"./src/components/SignInButton/index.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Header() {\n    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleNavBar() {\n        setIsActive(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().headerContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/logo.svg\",\n                    alt: \"ig.news\"\n                }, void 0, false, {\n                    fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            onClick: handleNavBar,\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            onClick: handleNavBar,\n                            children: \"Posts\"\n                        }, void 0, false, {\n                            fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignInButton__WEBPACK_IMPORTED_MODULE_2__.SignInButton, {}, void 0, false, {\n                    fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/Header/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDYztBQUNMO0FBRW5DLFNBQVNHLE1BQU0sR0FBRTtJQUN0QixNQUFNLEVBTFIsR0FLU0MsUUFBUSxHQUxqQixHQUttQkMsV0FBVyxNQUFJTCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUUvQyxTQUFTTSxZQUFZLEdBQUc7UUFDdEJELFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQjtJQUVELHFCQUNFLDhEQUFDRSxRQUFNO1FBQUNDLFNBQVMsRUFBRU4sNEVBQXNCO2tCQUN2Qyw0RUFBQ1EsS0FBRztZQUFDRixTQUFTLEVBQUVOLDBFQUFvQjs7OEJBQ2xDLDhEQUFDVSxLQUFHO29CQUFDQyxHQUFHLEVBQUMsa0JBQWtCO29CQUFDQyxHQUFHLEVBQUMsU0FBUzs7Ozs7d0JBQUc7OEJBQzVDLDhEQUFDQyxLQUFHOztzQ0FDRiw4REFBQ0MsR0FBQzs0QkFBQ0MsSUFBSSxFQUFDLEdBQUc7NEJBQUNDLE9BQU8sRUFBRVosWUFBWTtzQ0FBRSxNQUFJOzs7OztnQ0FBSTtzQ0FDM0MsOERBQUNVLEdBQUM7NEJBQUNDLElBQUksRUFBQyxHQUFHOzRCQUFDQyxPQUFPLEVBQUVaLFlBQVk7c0NBQUUsT0FBSzs7Ozs7Z0NBQUk7Ozs7Ozt3QkFHeEM7OEJBQ04sOERBQUNMLHVEQUFZOzs7O3dCQUFHOzs7Ozs7Z0JBQ1o7Ozs7O1lBQ0MsQ0FDVDtDQUVIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD80MDAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2lnbkluQnV0dG9uIH0gZnJvbSAnLi4vU2lnbkluQnV0dG9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCl7XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgZnVuY3Rpb24gaGFuZGxlTmF2QmFyICgpe1xuICAgIHNldElzQWN0aXZlKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ29udGVudH0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnN2Z1wiIGFsdD1cImlnLm5ld3NcIiAvPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxhIGhyZWY9JyMnIG9uQ2xpY2s9e2hhbmRsZU5hdkJhcn0+SG9tZTwvYT5cbiAgICAgICAgICA8YSBocmVmPScjJyBvbkNsaWNrPXtoYW5kbGVOYXZCYXJ9PlBvc3RzPC9hPlxuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8U2lnbkluQnV0dG9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbiAgXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2lnbkluQnV0dG9uIiwic3R5bGVzIiwiSGVhZGVyIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsImhhbmRsZU5hdkJhciIsImhlYWRlciIsImNsYXNzTmFtZSIsImhlYWRlckNvbnRhaW5lciIsImRpdiIsImhlYWRlckNvbnRlbnQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYXYiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ }),

/***/ "./src/components/SignInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SignInButton/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignInButton\": () => (/* binding */ SignInButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SignInButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction SignInButton() {\n    const isUserLoggedIn = true;\n    return isUserLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {\n                color: \"#04d361\"\n            }, void 0, false, {\n                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            \"NickName\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, {\n                color: \"#737380\",\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().closeIcon)\n            }, void 0, false, {\n                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().signInButton),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {\n                color: \"#eba417\"\n            }, void 0, false, {\n                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            \"Sing in  with GitHub\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/SignInButton/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ0w7QUFFSztBQUVsQyxTQUFTRyxZQUFZLEdBQUU7SUFDNUIsTUFBTUMsY0FBYyxHQUFHLElBQUk7SUFDM0IsT0FBT0EsY0FBYyxpQkFFbkIsOERBQUNDLFFBQU07UUFBQ0MsSUFBSSxFQUFDLFFBQVE7UUFBQ0MsU0FBUyxFQUFFTCx5RUFBbUI7OzBCQUNsRCw4REFBQ0Ysb0RBQVE7Z0JBQUNTLEtBQUssRUFBQyxTQUFTOzs7OztvQkFBRTtZQUFBLFVBRTNCOzBCQUFBLDhEQUFDUiwrQ0FBRztnQkFBQ1EsS0FBSyxFQUFDLFNBQVM7Z0JBQUNGLFNBQVMsRUFBRUwsc0VBQWdCOzs7OztvQkFBSTs7Ozs7O1lBQzdDLGlCQUVULDhEQUFDRyxRQUFNO1FBQUNDLElBQUksRUFBQyxRQUFRO1FBQUNDLFNBQVMsRUFBRUwseUVBQW1COzswQkFDbEQsOERBQUNGLG9EQUFRO2dCQUFDUyxLQUFLLEVBQUMsU0FBUzs7Ozs7b0JBQUU7WUFBQSxzQkFFN0I7Ozs7OztZQUFTLENBQ1Q7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL1NpZ25JbkJ1dHRvbi9pbmRleC50c3g/Y2I0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYUdpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xuaW1wb3J0IHsgRmlYIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBTaWduSW5CdXR0b24oKXtcbiAgY29uc3QgaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICByZXR1cm4gaXNVc2VyTG9nZ2VkSW4gPyAoXG5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5zaWduSW5CdXR0b259PiBcbiAgICAgIDxGYUdpdGh1YiBjb2xvcj0nIzA0ZDM2MScvPlxuICAgICAgTmlja05hbWVcbiAgICAgIDxGaVggY29sb3I9JyM3MzczODAnIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlSWNvbn0gLz5cbiAgICA8L2J1dHRvbj5cbiAgKSA6IChcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5zaWduSW5CdXR0b259PiBcbiAgICAgIDxGYUdpdGh1YiBjb2xvcj0nI2ViYTQxNycvPlxuICAgICAgU2luZyBpbiAgd2l0aCBHaXRIdWJcbiAgICA8L2J1dHRvbj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiRmFHaXRodWIiLCJGaVgiLCJzdHlsZXMiLCJTaWduSW5CdXR0b24iLCJpc1VzZXJMb2dnZWRJbiIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJzaWduSW5CdXR0b24iLCJjb2xvciIsImNsb3NlSWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SignInButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ \"./src/styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7QUFDZjtBQUUvQixTQUFTQyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQVksRUFBSztJQUNwRCxxQkFDRTs7MEJBRUEsOERBQUNILHNEQUFNOzs7O29CQUFFOzBCQUNULDhEQUFDRSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOztvQkFFekIsQ0FDSjtDQUVGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2Nzcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMgICApIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIFxuICAgIDxIZWFkZXIvPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICBcbiAgICA8Lz5cbiAgKSBcbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.scss":
/*!********************************!*\
  !*** ./src/styles/global.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();