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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/Services/Stripe.ts":
/*!********************************!*\
  !*** ./src/Services/Stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"(api)/./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"ignews\",\n        version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvU2VydmljZXMvU3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEI7QUFDZ0I7QUFFckMsTUFBTUUsTUFBTSxHQUFHLElBQUlGLCtDQUFNLENBQzlCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYyxFQUMxQjtJQUNFQyxVQUFVLEVBQUUsWUFBWTtJQUN4QkMsT0FBTyxFQUFFO1FBQ1BDLElBQUksRUFBRSxRQUFRO1FBQ2RQLE9BQU87S0FDUjtDQUNGLENBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvU2VydmljZXMvU3RyaXBlLnRzPzVjMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxuICB7XG4gICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxuICAgIGFwcEluZm86IHtcbiAgICAgIG5hbWU6ICdpZ25ld3MnLFxuICAgICAgdmVyc2lvbiBcbiAgICB9LFxuICB9XG4pICJdLCJuYW1lcyI6WyJTdHJpcGUiLCJ2ZXJzaW9uIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/Services/Stripe.ts\n");

/***/ }),

/***/ "(api)/./src/Services/fauna.ts":
/*!*******************************!*\
  !*** ./src/Services/fauna.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": () => (/* binding */ fauna)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n    secret: process.env.FAUNADB_KEY\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvU2VydmljZXMvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLE1BQU1DLEtBQUssR0FBRyxJQUFJRCwyQ0FBTSxDQUFDO0lBQzlCRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0NBRWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvU2VydmljZXMvZmF1bmEudHM/YWJjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJ1xuXG5leHBvcnQgY29uc3QgZmF1bmEgPSBuZXcgQ2xpZW50KHtcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX0tFWVxuICBcbn0pIl0sIm5hbWVzIjpbIkNsaWVudCIsImZhdW5hIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIkZBVU5BREJfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/Services/fauna.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Services_fauna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/fauna */ \"(api)/./src/Services/fauna.ts\");\n/* harmony import */ var _Services_Stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/Stripe */ \"(api)/./src/Services/Stripe.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method == \"POST\") {\n        const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n            req\n        });\n        const user = await _Services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index(\"users_by_email\"), faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Casefold(session.user.email))));\n        let customerId = user.data.stripe_customer_id;\n        if (!customerId) {\n            const stripeCustomer = await _Services_Stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.customers.create({\n                email: session.user.email\n            });\n            await _Services_fauna__WEBPACK_IMPORTED_MODULE_2__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection(\"users\"), user.ref.id), {\n                data: {\n                    stripe_customer_id: stripeCustomer.id\n                }\n            }));\n            customerId = stripeCustomer.id;\n        }\n        const stripeCheckoutSession = await _Services_Stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.checkout.sessions.create({\n            customer: customerId,\n            payment_method_types: [\n                \"card\"\n            ],\n            billing_address_collection: \"required\",\n            line_items: [\n                {\n                    price: \"price_1LAJzrLKoZWWieCEqf5CXMpF\",\n                    quantity: 1\n                }\n            ],\n            mode: \"subscription\",\n            allow_promotion_codes: true,\n            success_url: process.env.STRIPE_SUCCESS_URL,\n            cancel_url: process.env.STRIPE_CANCEL_URL\n        });\n        return res.status(200).json({\n            sessionId: stripeCheckoutSession.id\n        });\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method not allowed\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21DO0FBQ1U7QUFDQTtBQUNDO0FBVzlDLGlFQUFlLE9BQU9LLEdBQW1CLEVBQUVDLEdBQW9CLEdBQUs7SUFDbEUsSUFBR0QsR0FBRyxDQUFDRSxNQUFNLElBQUksTUFBTSxFQUFDO1FBQ3RCLE1BQU1DLE9BQU8sR0FBRyxNQUFNTiwyREFBVSxDQUFDO1lBQUNHLEdBQUc7U0FBQyxDQUFDO1FBRXZDLE1BQU1JLElBQUksR0FBRyxNQUFNTix3REFBVyxDQUM1QkYsOENBQUssQ0FDSEEsZ0RBQU8sQ0FDTEEsZ0RBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN6QkEsbURBQVUsQ0FBQ08sT0FBTyxDQUFDQyxJQUFJLENBQUNLLEtBQUssQ0FBQyxDQUMvQixDQUNGLENBQ0Y7UUFFRCxJQUFJQyxVQUFVLEdBQUdOLElBQUksQ0FBQ08sSUFBSSxDQUFDQyxrQkFBa0I7UUFFN0MsSUFBRyxDQUFDRixVQUFVLEVBQUM7WUFFZixNQUFNRyxjQUFjLEdBQUcsTUFBTWQscUVBQXVCLENBQUM7Z0JBQ25EVSxLQUFLLEVBQUVOLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDSyxLQUFLO2FBRTFCLENBQUM7WUFFQSxNQUFNWCx3REFBVyxDQUNmRixpREFBUSxDQUNSQSw4Q0FBSyxDQUFDQSxxREFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFUSxJQUFJLENBQUNlLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDLEVBQ3pDO2dCQUNBVCxJQUFJLEVBQUM7b0JBQ0xDLGtCQUFrQixFQUFFQyxjQUFjLENBQUNPLEVBQUU7aUJBQ3BDO2FBQ0EsQ0FDQSxDQUNBO1lBR0hWLFVBQVUsR0FBR0csY0FBYyxDQUFDTyxFQUFFLENBQUM7U0FDaEM7UUFHRCxNQUFNQyxxQkFBcUIsR0FBRyxNQUFNdEIsNkVBQStCLENBQUM7WUFDbEV5QixRQUFRLEVBQUVkLFVBQVU7WUFDcEJlLG9CQUFvQixFQUFFO2dCQUFDLE1BQU07YUFBQztZQUM5QkMsMEJBQTBCLEVBQUUsVUFBVTtZQUN0Q0MsVUFBVSxFQUFFO2dCQUNWO29CQUFFQyxLQUFLLEVBQUUsZ0NBQWdDO29CQUFFQyxRQUFRLEVBQUUsQ0FBQztpQkFBQzthQUN4RDtZQUNEQyxJQUFJLEVBQUUsY0FBYztZQUNwQkMscUJBQXFCLEVBQUUsSUFBSTtZQUMzQkMsV0FBVyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msa0JBQWtCO1lBQzNDQyxVQUFVLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxpQkFBaUI7U0FDMUMsQ0FBQztRQUVGLE9BQU9wQyxHQUFHLENBQUNxQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxTQUFTLEVBQUVuQixxQkFBcUIsQ0FBQ0QsRUFBRTtTQUFFLENBQUM7S0FDckUsTUFBTTtRQUNMbkIsR0FBRyxDQUFDd0MsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7UUFDOUJ4QyxHQUFHLENBQUNxQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztLQUMxQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL2FwaS9zdWJzY3JpYmUudHM/MDU4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHtxdWVyeSBhcyBxfSBmcm9tIFwiZmF1bmFkYlwiO1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSBcIi4uLy4uL1NlcnZpY2VzL2ZhdW5hXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vU2VydmljZXMvU3RyaXBlXCJcblxudHlwZSBVc2VyID0ge1xuICByZWY6IHtcbiAgICBpZDogc3RyaW5nO1xuICB9XG4gIGRhdGE6IHtcbiAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYocmVxLm1ldGhvZCA9PSAnUE9TVCcpe1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHtyZXF9KVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGZhdW5hLnF1ZXJ5PFVzZXI+KFxuICAgICAgcS5HZXQoXG4gICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgcS5JbmRleCgndXNlcnNfYnlfZW1haWwnKSxcbiAgICAgICAgICBxLkNhc2Vmb2xkKHNlc3Npb24udXNlci5lbWFpbClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcblxuICAgIGxldCBjdXN0b21lcklkID0gdXNlci5kYXRhLnN0cmlwZV9jdXN0b21lcl9pZFxuXG4gICAgaWYoIWN1c3RvbWVySWQpe1xuXG4gICAgY29uc3Qgc3RyaXBlQ3VzdG9tZXIgPSBhd2FpdCBzdHJpcGUuY3VzdG9tZXJzLmNyZWF0ZSh7XG4gICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsXG4gICBcbiAgICB9KVxuXG4gICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgcS5VcGRhdGUoXG4gICAgICAgIHEuUmVmKHEuQ29sbGVjdGlvbigndXNlcnMnKSwgdXNlci5yZWYuaWQpLFxuICAgICAgICB7XG4gICAgICAgIGRhdGE6e1xuICAgICAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmlwZUN1c3RvbWVyLmlkLFxuICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICApXG5cblxuICAgICAgY3VzdG9tZXJJZCA9IHN0cmlwZUN1c3RvbWVyLmlkO1xuICAgIH0gICAgICBcblxuXG4gICAgY29uc3Qgc3RyaXBlQ2hlY2tvdXRTZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICBjdXN0b21lcjogY3VzdG9tZXJJZCxcbiAgICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbJ2NhcmQnXSxcbiAgICAgIGJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiAncmVxdWlyZWQnLFxuICAgICAgbGluZV9pdGVtczogW1xuICAgICAgICB7IHByaWNlOiAncHJpY2VfMUxBSnpyTEtvWldXaWVDRXFmNUNYTXBGJywgcXVhbnRpdHk6IDF9XG4gICAgICBdLFxuICAgICAgbW9kZTogJ3N1YnNjcmlwdGlvbicsXG4gICAgICBhbGxvd19wcm9tb3Rpb25fY29kZXM6IHRydWUsXG4gICAgICBzdWNjZXNzX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX1NVQ0NFU1NfVVJMLFxuICAgICAgY2FuY2VsX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX0NBTkNFTF9VUkxcbiAgICB9KVxuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbklkOiBzdHJpcGVDaGVja291dFNlc3Npb24uaWQgfSlcbiAgfSBlbHNlIHtcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJylcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2Qgbm90IGFsbG93ZWQnKVxuICB9XG59Il0sIm5hbWVzIjpbInF1ZXJ5IiwicSIsImdldFNlc3Npb24iLCJmYXVuYSIsInN0cmlwZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJ1c2VyIiwiR2V0IiwiTWF0Y2giLCJJbmRleCIsIkNhc2Vmb2xkIiwiZW1haWwiLCJjdXN0b21lcklkIiwiZGF0YSIsInN0cmlwZV9jdXN0b21lcl9pZCIsInN0cmlwZUN1c3RvbWVyIiwiY3VzdG9tZXJzIiwiY3JlYXRlIiwiVXBkYXRlIiwiUmVmIiwiQ29sbGVjdGlvbiIsInJlZiIsImlkIiwic3RyaXBlQ2hlY2tvdXRTZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImN1c3RvbWVyIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsInN1Y2Nlc3NfdXJsIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TVUNDRVNTX1VSTCIsImNhbmNlbF91cmwiLCJTVFJJUEVfQ0FOQ0VMX1VSTCIsInN0YXR1cyIsImpzb24iLCJzZXNzaW9uSWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "(api)/./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^1.34.0","axios":"^0.27.2","faunadb":"^4.6.0","next":"12.1.6","next-auth":"^4.5.0","react":"18.1.0","react-dom":"18.1.0","react-icons":"^4.4.0","sass":"^1.52.2","stripe":"^9.8.0"},"devDependencies":{"@types/next-auth":"^3.15.0","@types/node":"^17.0.38","@types/react":"^18.0.10","eslint":"8.16.0","eslint-config-next":"12.1.6","typescript":"^4.7.2"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();