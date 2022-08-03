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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2Nzcz9kYmU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzUyYzZ1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__HYuN8\",\n\t\"hero\": \"home_hero__lhpWS\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3M/ZTRjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX19IWXVOOFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fX2xocFdTXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./src/Services/Stripe.ts":
/*!********************************!*\
  !*** ./src/Services/Stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"ignews\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvU3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUdyQixNQUFNQyxNQUFNLEdBQUcsSUFBSUQsK0NBQU0sQ0FDOUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCO0lBQ0VDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxPQUFPLEVBQUU7UUFDUEMsSUFBSSxFQUFFLFFBQVE7S0FFZjtDQUNGLENBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvU2VydmljZXMvU3RyaXBlLnRzPzVjMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxuICB7XG4gICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxuICAgIGFwcEluZm86IHtcbiAgICAgIG5hbWU6ICdpZ25ld3MnLFxuICAgXG4gICAgfSxcbiAgfVxuKSAiXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Services/Stripe.ts\n");

/***/ }),

/***/ "./src/Services/api.ts":
/*!*****************************!*\
  !*** ./src/Services/api.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"/api\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUVuQixNQUFNQyxHQUFHLEdBQUdELG1EQUFZLENBQUM7SUFDOUJHLE9BQU8sRUFBRSxNQUFNO0NBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvU2VydmljZXMvYXBpLnRzPzM5NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJy9hcGknXG59KSJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Services/api.ts\n");

/***/ }),

/***/ "./src/Services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/Services/stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51LAJv9LKoZWWieCEANim0mkwWK1trXRahtXk1GNoCauK8u8rrTqjvJ1xY4BvcZ1H0Z99dA9KGCUkbNCAQayEUyOd00f5Ew9h0F\");\n    return stripeJs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxlQUFlQyxXQUFXLEdBQUc7SUFDbEMsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLDZEQUFVLENBQUNHLDZHQUF5QyxDQUFDO0lBRTVFLE9BQU9ELFFBQVE7Q0FDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvU2VydmljZXMvc3RyaXBlLWpzLnRzP2UxMDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RyaXBlSnMoKSB7XG4gIGNvbnN0IHN0cmlwZUpzID0gYXdhaXQgbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElDX0tFWSlcbiAgXG4gIHJldHVybiBzdHJpcGVKc1xufSJdLCJuYW1lcyI6WyJsb2FkU3RyaXBlIiwiZ2V0U3RyaXBlSnMiLCJzdHJpcGVKcyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElDX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Services/stripe-js.ts\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/api */ \"./src/Services/api.ts\");\n/* harmony import */ var _Services_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/stripe-js */ \"./src/Services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n            return;\n        }\n        try {\n            const response = await _Services_api__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/subscribe\");\n            const { sessionId  } = response.data;\n            const stripe = await (0,_Services_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getStripeJs)();\n            await stripe.redirectToCheckout({\n                sessionId\n            });\n        } catch (err) {\n            alert(err.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n        onClick: handleSubscribe,\n        children: \"Subscribe Now\"\n    }, void 0, false, {\n        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/components/SubscribeButton/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXFEO0FBQ1o7QUFFYztBQUNkO0FBTWxDLFNBQVNLLGVBQWUsQ0FBQyxFQUFDQyxPQUFPLEdBQXVCLEVBQUM7SUFDOUQsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sR0FBRSxHQUFHUCwyREFBVSxFQUFFO0lBRXRDLGVBQWVRLGVBQWUsR0FBRTtRQUM5QixJQUFHLENBQUNELE9BQU8sRUFBQztZQUNWUix1REFBTSxDQUFDLFFBQVEsQ0FBQztZQUNoQixPQUFPO1NBQ1I7UUFHRCxJQUFJO1lBQ0YsTUFBTVUsUUFBUSxHQUFHLE1BQU1SLG1EQUFRLENBQUMsWUFBWSxDQUFDO1lBRTdDLE1BQU0sRUFBRVUsU0FBUyxHQUFFLEdBQUdGLFFBQVEsQ0FBQ0gsSUFBSTtZQUVuQyxNQUFNTSxNQUFNLEdBQUcsTUFBTVYsZ0VBQVcsRUFBRTtZQUVsQyxNQUFNVSxNQUFNLENBQUNDLGtCQUFrQixDQUFFO2dCQUFDRixTQUFTO2FBQUMsQ0FBRTtTQUMvQyxDQUFDLE9BQU9HLEdBQUcsRUFBRTtZQUNaQyxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7U0FDcEI7S0FDRjtJQUVELHFCQUNFLDhEQUFDQyxRQUFNO1FBQUNDLElBQUksRUFBQyxRQUFRO1FBQ3BCQyxTQUFTLEVBQUVoQiw0RUFBc0I7UUFDakNrQixPQUFPLEVBQUViLGVBQWU7a0JBQ3ZCLGVBRUY7Ozs7O1lBQVMsQ0FDVjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeD85MGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi8uLi9TZXJ2aWNlcy9hcGknO1xuXG5pbXBvcnQgeyBnZXRTdHJpcGVKcyB9IGZyb20gJy4uLy4uL1NlcnZpY2VzL3N0cmlwZS1qcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuXG5pbnRlcmZhY2UgU3Vic2NyaWJlQnV0dG9uUHJvcHN7XG4gIHByaWNlSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN1YnNjcmliZUJ1dHRvbih7cHJpY2VJZH06IFN1YnNjcmliZUJ1dHRvblByb3BzKXtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlKCl7XG4gICAgaWYoIXNlc3Npb24pe1xuICAgICAgc2lnbkluKCdnaXRodWInKVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9zdWJzY3JpYmUnKVxuXG4gICAgICBjb25zdCB7IHNlc3Npb25JZCB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgY29uc3Qgc3RyaXBlID0gYXdhaXQgZ2V0U3RyaXBlSnMoKVxuXG4gICAgICBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KCB7c2Vzc2lvbklkfSApXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9XG4gXG4gIHJldHVybihcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJzY3JpYmVCdXR0b259XG4gICAgIG9uQ2xpY2s9e2hhbmRsZVN1YnNjcmliZX1cbiAgICAgPlxuICAgICAgU3Vic2NyaWJlIE5vd1xuICAgIDwvYnV0dG9uPlxuICApXG59Il0sIm5hbWVzIjpbInNpZ25JbiIsInVzZVNlc3Npb24iLCJhcGkiLCJnZXRTdHJpcGVKcyIsInN0eWxlcyIsIlN1YnNjcmliZUJ1dHRvbiIsInByaWNlSWQiLCJkYXRhIiwic2Vzc2lvbiIsImhhbmRsZVN1YnNjcmliZSIsInJlc3BvbnNlIiwicG9zdCIsInNlc3Npb25JZCIsInN0cmlwZSIsInJlZGlyZWN0VG9DaGVja291dCIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJzdWJzY3JpYmVCdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _Services_Stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/Stripe */ \"./src/Services/Stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \" Home | Ig.News \"\n                }, void 0, false, {\n                    fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"\\uD83D\\uDC4F Hey, Wellcome\"\n                            }, void 0, false, {\n                                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \" News about the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 27\n                                    }, this),\n                                    \" world. \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Get access to all the publications \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 44\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"for \",\n                                            product.amount,\n                                            \" month\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceID\n                            }, void 0, false, {\n                                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/images/avatar.svg\",\n                        alt: \"Girl coding\"\n                    }, void 0, false, {\n                        fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getStaticProps = async ()=>{\n    const price = await _Services_Stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(\"price_1LAJzrLKoZWWieCEqf5CXMpF\");\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"en-US\", {\n            style: \"currency\",\n            currency: \"USD\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QjtBQUVtQztBQUNwQjtBQUVMO0FBU3hCLFNBQVNJLElBQUksQ0FBQyxFQUFDQyxPQUFPLEdBQVksRUFBRTtJQUNqRCxxQkFDRTs7MEJBQ0EsOERBQUNMLGtEQUFJOzBCQUNILDRFQUFDTSxPQUFLOzhCQUFDLGtCQUFnQjs7Ozs7d0JBQVE7Ozs7O29CQUMxQjswQkFDUiw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFFTCwyRUFBdUI7O2tDQUN2Qyw4REFBQ08sU0FBTzt3QkFBQ0YsU0FBUyxFQUFFTCwrREFBVzs7MENBQzdCLDhEQUFDUyxNQUFJOzBDQUFDLDRCQUFlOzs7OztvQ0FBTzswQ0FDNUIsOERBQUNDLElBQUU7O29DQUFDLGtCQUFnQjtrREFBQSw4REFBQ0QsTUFBSTtrREFBQyxPQUFLOzs7Ozs0Q0FBTztvQ0FBQSxVQUFROzs7Ozs7b0NBQUs7MENBQ25ELDhEQUFDRSxHQUFDOztvQ0FBQyxxQ0FDa0M7a0RBQUEsOERBQUNDLElBQUU7Ozs7NENBQUc7a0RBQ3pDLDhEQUFDSCxNQUFJOzs0Q0FBQyxNQUFJOzRDQUFDUCxPQUFPLENBQUNXLE1BQU07NENBQUMsUUFBTTs7Ozs7OzRDQUFPOzs7Ozs7b0NBQ3JDOzBDQUNKLDhEQUFDZix3RUFBZTtnQ0FBQ2dCLE9BQU8sRUFBRVosT0FBTyxDQUFDYSxPQUFPOzs7OztvQ0FBSTs7Ozs7OzRCQUNyQztrQ0FFViw4REFBQ0MsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLG9CQUFvQjt3QkFBQ0MsR0FBRyxFQUFDLGFBQWE7Ozs7OzRCQUFPOzs7Ozs7b0JBQ2hEOztvQkFDSCxDQUNIO0NBQ0g7QUFFTSxNQUFNQyxjQUFjLEdBQWtCLFVBQVk7SUFDckQsTUFBTUMsS0FBSyxHQUFHLE1BQU1yQixvRUFBc0IsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUU1RSxNQUFNRyxPQUFPLEdBQUc7UUFDZFksT0FBTyxFQUFFTSxLQUFLLENBQUNHLEVBQUU7UUFDakJWLE1BQU0sRUFBRSxJQUFJVyxJQUFJLENBQUNDLFlBQVksQ0FBQyxPQUFPLEVBQUU7WUFDckNDLEtBQUssRUFBRSxVQUFVO1lBQ2pCQyxRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUNDLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDUyxXQUFXLEdBQUcsR0FBRyxDQUFDO0tBQ25DO0lBRUQsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFDTDVCLE9BQU87U0FDUjtRQUNENkIsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtLQUN6QjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCB7IFN1YnNjcmliZUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uJztcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL1NlcnZpY2VzL1N0cmlwZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJ1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgcHJvZHVjdDoge1xuICAgIHByaWNlSUQ6IHN0cmluZztcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtwcm9kdWN0fTogSG9tZVByb3BzKSB7XG4gIHJldHVybihcbiAgICA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPiBIb21lIHwgSWcuTmV3cyA8L3RpdGxlPlxuICAgIDwvSGVhZD4gICAgIFxuICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lcn0+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICA8c3Bhbj7wn5GPIEhleSwgV2VsbGNvbWU8L3NwYW4+XG4gICAgICA8aDE+IE5ld3MgYWJvdXQgdGhlIDxzcGFuPlJlYWN0PC9zcGFuPiB3b3JsZC4gPC9oMT5cbiAgICAgIDxwPlxuICAgICAgICBHZXQgYWNjZXNzIHRvIGFsbCB0aGUgcHVibGljYXRpb25zIDxiciAvPlxuICAgICAgICA8c3Bhbj5mb3Ige3Byb2R1Y3QuYW1vdW50fSBtb250aDwvc3Bhbj5cbiAgICAgIDwvcD5cbiAgICAgIDxTdWJzY3JpYmVCdXR0b24gcHJpY2VJZD17cHJvZHVjdC5wcmljZUlEfSAvPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxpbWcgc3JjPScvaW1hZ2VzL2F2YXRhci5zdmcnIGFsdD0nR2lybCBjb2RpbmcnPjwvaW1nPlxuICAgPC9tYWluPlxuICAgIDwvPlxuICAgKSAgICBcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9YXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZSgncHJpY2VfMUxBSnpyTEtvWldXaWVDRXFmNUNYTXBGJylcblxuICAgIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgICBwcmljZUlkOiBwcmljZS5pZCxcbiAgICAgIGFtb3VudDogbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgIH0pLmZvcm1hdChwcmljZS51bml0X2Ftb3VudCAvIDEwMClcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgXG4gICAgICBwcm9wczoge1xuICAgICAgICBwcm9kdWN0LFxuICAgICAgfSxcbiAgICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAyNCwgLy8gMjRob3Jhc1xuICAgIH1cbn0iXSwibmFtZXMiOlsiSGVhZCIsIlN1YnNjcmliZUJ1dHRvbiIsInN0cmlwZSIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0IiwidGl0bGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGVudENvbnRhaW5lciIsInNlY3Rpb24iLCJoZXJvIiwic3BhbiIsImgxIiwicCIsImJyIiwiYW1vdW50IiwicHJpY2VJZCIsInByaWNlSUQiLCJpbWciLCJzcmMiLCJhbHQiLCJnZXRTdGF0aWNQcm9wcyIsInByaWNlIiwicHJpY2VzIiwicmV0cmlldmUiLCJpZCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwidW5pdF9hbW91bnQiLCJwcm9wcyIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();