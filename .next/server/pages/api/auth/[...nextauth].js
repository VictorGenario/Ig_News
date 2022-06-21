"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./src/Services/fauna.ts":
/*!*******************************!*\
  !*** ./src/Services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvU2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzlCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0NBRWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvU2VydmljZXMvZmF1bmEudHM/YWJjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJ1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX0tFWVxuICBcbn0pIl0sIm5hbWVzIjpbIkNsaWVudCIsImZhdW5hIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkZBVU5BREJfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/Services/fauna.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/fauna */ \"(api)/./src/Services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        async signIn ({ user , account , profile , credentials  }) {\n            const { email  } = user;\n            try {\n                await _Services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"users_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"users_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))));\n                return true;\n            } catch (err) {\n                console.log(err);\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvQztBQUVKO0FBQ3VCO0FBQ1I7QUFHL0MsaUVBQWVFLGdEQUFRLENBQUM7SUFDdEJHLFNBQVMsRUFBRTtRQUNURixpRUFBYyxDQUFDO1lBQ2JHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7WUFDdkNDLGFBQWEsRUFBRTtnQkFDYkMsTUFBTSxFQUFFO29CQUNOQyxLQUFLLEVBQUUsV0FBVztpQkFFbkI7YUFFRjtTQUNGLENBQUM7S0FDSDtJQUNEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxNQUFNLEVBQUMsRUFBRUMsSUFBSSxHQUFFQyxPQUFPLEdBQUVDLE9BQU8sR0FBR0MsV0FBVyxHQUFFLEVBQUU7WUFFckQsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0osSUFBSTtZQUV0QixJQUFJO2dCQUNGLE1BQU1iLHdEQUFXLENBQ2ZILDZDQUFJLENBQ0ZBLDhDQUFLLENBQ0hBLGlEQUFRLENBQ05BLGdEQUFPLENBQ0xBLGdEQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFDekJBLG1EQUFVLENBQUNnQixJQUFJLENBQUNJLEtBQUssQ0FBQyxDQUN2QixDQUNGLENBQ0YsRUFDRHBCLGlEQUFRLENBQ05BLHFEQUFZLENBQUMsT0FBTyxDQUFDLEVBQ3JCO29CQUFFNkIsSUFBSSxFQUFFO3dCQUFFVCxLQUFLO3FCQUFFO2lCQUFDLENBQ25CLEVBQ0RwQiw4Q0FBSyxDQUNIQSxnREFBTyxDQUNMQSxnREFBTyxDQUFDLGdCQUFnQixDQUFDLEVBQ3pCQSxtREFBVSxDQUFDZ0IsSUFBSSxDQUFDSSxLQUFLLENBQUMsQ0FDdkIsQ0FDRixDQUNGLENBQ0Y7Z0JBRUQsT0FBTyxJQUFJO2FBQ1osQ0FBQyxPQUFPVyxHQUFHLEVBQUU7Z0JBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7Z0JBQ2hCLE9BQU8sS0FBSzthQUNiO1NBRUY7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tIFwiZmF1bmFkYlwiXG5cbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxuaW1wb3J0IHsgZmF1bmEgfSBmcm9tIFwiLi4vLi4vLi4vU2VydmljZXMvZmF1bmFcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0aHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2NvcGU6ICdyZWFkOnVzZXInXG4gICAgICAgICAgXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgIGNyZWRlbnRpYWxzIH0pIHtcbiAgICBcbiAgICAgIGNvbnN0IHsgZW1haWwgfSA9IHVzZXJcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICAgICAgcS5JZihcbiAgICAgICAgICAgIHEuTm90KFxuICAgICAgICAgICAgICBxLkV4aXN0cyhcbiAgICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcnNfYnlfZW1haWwnKSxcbiAgICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQodXNlci5lbWFpbClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxLkNyZWF0ZShcbiAgICAgICAgICAgICAgcS5Db2xsZWN0aW9uKCd1c2VycycpLFxuICAgICAgICAgICAgICB7IGRhdGE6IHsgZW1haWwgfX1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2Vyc19ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQodXNlci5lbWFpbClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgIH1cbiAgfVxufSkiXSwibmFtZXMiOlsicXVlcnkiLCJxIiwiTmV4dEF1dGgiLCJHaXRodWJQcm92aWRlciIsImZhdW5hIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJzY29wZSIsImNhbGxiYWNrcyIsInNpZ25JbiIsInVzZXIiLCJhY2NvdW50IiwicHJvZmlsZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJJZiIsIk5vdCIsIkV4aXN0cyIsIk1hdGNoIiwiSW5kZXgiLCJDYXNlZm9sZCIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJkYXRhIiwiR2V0IiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();