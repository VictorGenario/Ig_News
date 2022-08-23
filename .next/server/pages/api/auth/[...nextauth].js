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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/fauna */ \"(api)/./src/Services/fauna.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()({\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET,\n            authorization: {\n                params: {\n                    scope: \"read:user\"\n                }\n            }\n        }), \n    ],\n    callbacks: {\n        async session ({ session  }) {\n            try {\n                const userActiveSubscription = await _Services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Intersection([\n                    faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"subscription_by_user_ref\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"users_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email)))))),\n                    faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"subscription_by_status\"), \"active\"))\n                ]));\n                return {\n                    ...session,\n                    activeSubscription: userActiveSubscription\n                };\n            } catch  {\n                return {\n                    ...session,\n                    activeSubscription: null\n                };\n            }\n        },\n        async signIn ({ user , account , profile , credentials  }) {\n            const { email  } = user;\n            try {\n                await _Services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.If(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Not(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Exists(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"users_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), {\n                    data: {\n                        email\n                    }\n                }), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"users_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(user.email)))));\n                return true;\n            } catch (err) {\n                console.log(err);\n                return false;\n            }\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvQztBQUVKO0FBQ3VCO0FBQ1I7QUFHL0MsaUVBQWVFLGdEQUFRLENBQUM7SUFDdEJHLFNBQVMsRUFBRTtRQUNURixpRUFBYyxDQUFDO1lBQ2JHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7WUFDdkNDLGFBQWEsRUFBRTtnQkFDYkMsTUFBTSxFQUFFO29CQUNOQyxLQUFLLEVBQUUsV0FBVztpQkFFbkI7YUFFRjtTQUNGLENBQUM7S0FDSDtJQUNEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxPQUFPLEVBQUMsRUFBQ0EsT0FBTyxHQUFDLEVBQUM7WUFDdEIsSUFBRztnQkFDRCxNQUFNQyxzQkFBc0IsR0FBRyxNQUFNYix3REFBVyxDQUM5Q0gsdURBQWMsQ0FBQztvQkFDYkEsOENBQUssQ0FDSEEsZ0RBQU8sQ0FDTEEsZ0RBQU8sQ0FBQywwQkFBMEIsQ0FBQyxFQUNuQ0EsaURBQVEsQ0FDTixLQUFLLEVBQ0xBLDhDQUFLLENBQ0hBLGdEQUFPLENBQ0xBLGdEQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFDekJBLG1EQUFVLENBQUNlLE9BQU8sQ0FBQ1EsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FDL0IsQ0FDRixDQUNGLENBQ0YsQ0FDRjtvQkFBQ3hCLDhDQUFLLENBQ0xBLGdEQUFPLENBQ0xBLGdEQUFPLENBQUMsd0JBQXdCLENBQUMsRUFDakMsUUFBUSxDQUNULENBQ0Y7aUJBRUYsQ0FBQyxDQUNIO2dCQUVILE9BQU87b0JBQ0wsR0FBR2UsT0FBTztvQkFDVlUsa0JBQWtCLEVBQUdULHNCQUFzQjtpQkFDNUM7YUFDQSxDQUFDLE9BQUs7Z0JBQ0wsT0FBTTtvQkFDSixHQUFHRCxPQUFPO29CQUNWVSxrQkFBa0IsRUFBRSxJQUFJO2lCQUN6QjthQUNGO1NBQ0Y7UUFFRCxNQUFNQyxNQUFNLEVBQUMsRUFBRUgsSUFBSSxHQUFFSSxPQUFPLEdBQUVDLE9BQU8sR0FBR0MsV0FBVyxHQUFFLEVBQUU7WUFFckQsTUFBTSxFQUFFTCxLQUFLLEdBQUUsR0FBR0QsSUFBSTtZQUV0QixJQUFJO2dCQUNGLE1BQU1wQix3REFBVyxDQUNmSCw2Q0FBSSxDQUNGQSw4Q0FBSyxDQUNIQSxpREFBUSxDQUNOQSxnREFBTyxDQUNMQSxnREFBTyxDQUFDLGdCQUFnQixDQUFDLEVBQ3pCQSxtREFBVSxDQUFDdUIsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FDdkIsQ0FDRixDQUNGLEVBQ0R4QixpREFBUSxDQUNOQSxxREFBWSxDQUFDLE9BQU8sQ0FBQyxFQUNyQjtvQkFBRW1DLElBQUksRUFBRTt3QkFBRVgsS0FBSztxQkFBRTtpQkFBQyxDQUNuQixFQUNEeEIsOENBQUssQ0FDSEEsZ0RBQU8sQ0FDTEEsZ0RBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN6QkEsbURBQVUsQ0FBQ3VCLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQ3ZCLENBQ0YsQ0FDRixDQUNGO2dCQUVELE9BQU8sSUFBSTthQUNaLENBQUMsT0FBT1ksR0FBRyxFQUFFO2dCQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO2dCQUNoQixPQUFPLEtBQUs7YUFDYjtTQUVGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSBcImZhdW5hZGJcIlxuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCJcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSBcIi4uLy4uLy4uL1NlcnZpY2VzL2ZhdW5hXCJcblxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgICBhdXRob3JpemF0aW9uOiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNjb3BlOiAncmVhZDp1c2VyJ1xuICAgICAgICAgIFxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oe3Nlc3Npb259KXtcbiAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgdXNlckFjdGl2ZVN1YnNjcmlwdGlvbiA9IGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICAgIHEuSW50ZXJzZWN0aW9uKFtcbiAgICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3N1YnNjcmlwdGlvbl9ieV91c2VyX3JlZicpLFxuICAgICAgICAgICAgICAgIHEuU2VsZWN0KFxuICAgICAgICAgICAgICAgICAgXCJyZWZcIixcbiAgICAgICAgICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJzX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgcS5DYXNlZm9sZChzZXNzaW9uLnVzZXIuZW1haWwpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkscS5HZXQoXG4gICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgcS5JbmRleCgnc3Vic2NyaXB0aW9uX2J5X3N0YXR1cycpLFxuICAgICAgICAgICAgICAgIFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgICAgIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc2Vzc2lvbixcbiAgICAgICAgYWN0aXZlU3Vic2NyaXB0aW9uIDogdXNlckFjdGl2ZVN1YnNjcmlwdGlvblxuICAgICAgfVxuICAgICAgfSBjYXRjaHtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgIC4uLnNlc3Npb24sXG4gICAgICAgICAgYWN0aXZlU3Vic2NyaXB0aW9uOiBudWxsLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUsICBjcmVkZW50aWFscyB9KSB7XG4gICAgXG4gICAgICBjb25zdCB7IGVtYWlsIH0gPSB1c2VyXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICAgIHEuSWYoXG4gICAgICAgICAgICBxLk5vdChcbiAgICAgICAgICAgICAgcS5FeGlzdHMoXG4gICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJzX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcS5DcmVhdGUoXG4gICAgICAgICAgICAgIHEuQ29sbGVjdGlvbigndXNlcnMnKSxcbiAgICAgICAgICAgICAgeyBkYXRhOiB7IGVtYWlsIH19XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcS5HZXQoXG4gICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcnNfYnlfZW1haWwnKSxcbiAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICB9XG4gIH1cbn0pIl0sIm5hbWVzIjpbInF1ZXJ5IiwicSIsIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJmYXVuYSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlckFjdGl2ZVN1YnNjcmlwdGlvbiIsIkludGVyc2VjdGlvbiIsIkdldCIsIk1hdGNoIiwiSW5kZXgiLCJTZWxlY3QiLCJDYXNlZm9sZCIsInVzZXIiLCJlbWFpbCIsImFjdGl2ZVN1YnNjcmlwdGlvbiIsInNpZ25JbiIsImFjY291bnQiLCJwcm9maWxlIiwiY3JlZGVudGlhbHMiLCJJZiIsIk5vdCIsIkV4aXN0cyIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

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