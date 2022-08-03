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
exports.id = "pages/api/webhooks";
exports.ids = ["pages/api/webhooks"];
exports.modules = {

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2020-08-27\",\n    appInfo: {\n        name: \"ignews\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvU2VydmljZXMvU3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUdyQixNQUFNQyxNQUFNLEdBQUcsSUFBSUQsK0NBQU0sQ0FDOUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLEVBQzFCO0lBQ0VDLFVBQVUsRUFBRSxZQUFZO0lBQ3hCQyxPQUFPLEVBQUU7UUFDUEMsSUFBSSxFQUFFLFFBQVE7S0FFZjtDQUNGLENBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvU2VydmljZXMvU3RyaXBlLnRzPzVjMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcblxuZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXG4gIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxuICB7XG4gICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxuICAgIGFwcEluZm86IHtcbiAgICAgIG5hbWU6ICdpZ25ld3MnLFxuICAgXG4gICAgfSxcbiAgfVxuKSAiXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/Services/Stripe.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/webhooks.ts":
/*!***********************************!*\
  !*** ./src/pages/api/webhooks.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Services_Stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/Stripe */ \"(api)/./src/Services/Stripe.ts\");\n\nasync function buffer(readable) {\n    const chunks = [];\n    for await (const chunk of readable){\n        chunks.push(typeof chunk === \"string\" ? Buffer.from(chunk) : chunk);\n    }\n    return Buffer.concat(chunks);\n}\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst relevantEvents = new Set([\n    \"checkout.session.completed\"\n]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method == \"POST\") {\n        const buf = await buffer(req);\n        const secret = req.headers[\"stripe-signature\"];\n        let event;\n        try {\n            event = _Services_Stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);\n        } catch (err) {\n            return res.status(400).send(`Webhook error: ${err.message}`);\n        }\n        const type = event.type;\n        if (relevantEvents.has(type)) {\n            console.log(\"Evento recebido\", event);\n        }\n        res.json({\n            received: true\n        });\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method not allowed\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2tzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUcrQztBQUUvQyxlQUFlQyxNQUFNLENBQUNDLFFBQWtCLEVBQUU7SUFDMUMsTUFBTUMsTUFBTSxHQUFHLEVBQUU7SUFFakIsV0FBVyxNQUFNQyxLQUFLLElBQUlGLFFBQVEsQ0FBQztRQUNuQ0MsTUFBTSxDQUFDRSxJQUFJLENBQ1gsT0FBT0QsS0FBSyxLQUFLLFFBQVEsR0FBR0UsTUFBTSxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQyxHQUFHQSxLQUFLLENBQ3JELENBQUM7S0FDRDtJQUVELE9BQU9FLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDTCxNQUFNLENBQUMsQ0FBQztDQUM1QjtBQUVNLE1BQU1NLE1BQU0sR0FBRztJQUN0QkMsR0FBRyxFQUFFO1FBQ0xDLFVBQVUsRUFBRSxLQUFLO0tBQ2hCO0NBQ0E7QUFFRCxNQUFNQyxjQUFjLEdBQUcsSUFBSUMsR0FBRyxDQUFDO0lBQy9CLDRCQUE0QjtDQUMzQixDQUFDO0FBRUYsaUVBQWUsT0FBT0MsR0FBbUIsRUFBRUMsR0FBb0IsR0FBSztJQUNwRSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sSUFBSSxNQUFNLEVBQUM7UUFDekIsTUFBTUMsR0FBRyxHQUFHLE1BQU1oQixNQUFNLENBQUNhLEdBQUcsQ0FBQztRQUM3QixNQUFNSSxNQUFNLEdBQUdKLEdBQUcsQ0FBQ0ssT0FBTyxDQUFDLGtCQUFrQixDQUFDO1FBRTlDLElBQUlDLEtBQUs7UUFFVCxJQUFJO1lBQ0pBLEtBQUssR0FBR3BCLDRFQUE4QixDQUFDaUIsR0FBRyxFQUFFQyxNQUFNLEVBQUVLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxxQkFBcUIsQ0FBQztTQUNyRixDQUFDLE9BQU9DLEdBQUcsRUFBQztZQUNiLE9BQU9YLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUVGLEdBQUcsQ0FBQ0csT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsTUFBTUMsSUFBSSxHQUFHVixLQUFLLENBQUNVLElBQUk7UUFFdkIsSUFBR2xCLGNBQWMsQ0FBQ21CLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDLEVBQUM7WUFDNUJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFYixLQUFLLENBQUM7U0FDcEM7UUFFREwsR0FBRyxDQUFDbUIsSUFBSSxDQUFDO1lBQUVDLFFBQVEsRUFBRSxJQUFJO1NBQUUsQ0FBQztLQUMzQixNQUFNO1FBQ1BwQixHQUFHLENBQUNxQixTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztRQUM5QnJCLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDVSxHQUFHLENBQUMsb0JBQW9CLENBQUM7S0FDeEM7Q0FFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9hcGkvd2ViaG9va3MudHM/ZDNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSBcInN0cmVhbVwiO1xuaW1wb3J0IFN0cmlwZSBmcm9tIFwic3RyaXBlXCI7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tIFwiLi4vLi4vU2VydmljZXMvU3RyaXBlXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGJ1ZmZlcihyZWFkYWJsZTogUmVhZGFibGUpIHtcbmNvbnN0IGNodW5rcyA9IFtdO1xuXG5mb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHJlYWRhYmxlKXtcbmNodW5rcy5wdXNoKFxudHlwZW9mIGNodW5rID09PSBcInN0cmluZ1wiID8gQnVmZmVyLmZyb20oY2h1bmspIDogY2h1bmtcbik7XG59XG5cbnJldHVybiBCdWZmZXIuY29uY2F0KGNodW5rcyk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG5hcGk6IHtcbmJvZHlQYXJzZXI6IGZhbHNlXG59XG59XG5cbmNvbnN0IHJlbGV2YW50RXZlbnRzID0gbmV3IFNldChbXG4nY2hlY2tvdXQuc2Vzc2lvbi5jb21wbGV0ZWQnXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbmlmIChyZXEubWV0aG9kID09ICdQT1NUJyl7XG5jb25zdCBidWYgPSBhd2FpdCBidWZmZXIocmVxKVxuY29uc3Qgc2VjcmV0ID0gcmVxLmhlYWRlcnNbJ3N0cmlwZS1zaWduYXR1cmUnXVxuXG5sZXQgZXZlbnQ6IFN0cmlwZS5FdmVudDtcblxudHJ5IHtcbmV2ZW50ID0gc3RyaXBlLndlYmhvb2tzLmNvbnN0cnVjdEV2ZW50KGJ1Ziwgc2VjcmV0LCBwcm9jZXNzLmVudi5TVFJJUEVfV0VCSE9PS19TRUNSRVQpXG59IGNhdGNoIChlcnIpe1xucmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKGBXZWJob29rIGVycm9yOiAke2Vyci5tZXNzYWdlfWApO1xufVxuXG5jb25zdCB0eXBlID0gZXZlbnQudHlwZTsgXG5cbmlmKHJlbGV2YW50RXZlbnRzLmhhcyh0eXBlKSl7XG5jb25zb2xlLmxvZygnRXZlbnRvIHJlY2ViaWRvJywgZXZlbnQpXG59XG5cbnJlcy5qc29uKHsgcmVjZWl2ZWQ6IHRydWUgfSlcbn0gZWxzZSB7XG5yZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJylcbnJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBub3QgYWxsb3dlZCcpXG59XG5cbn1cbiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJidWZmZXIiLCJyZWFkYWJsZSIsImNodW5rcyIsImNodW5rIiwicHVzaCIsIkJ1ZmZlciIsImZyb20iLCJjb25jYXQiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwicmVsZXZhbnRFdmVudHMiLCJTZXQiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJidWYiLCJzZWNyZXQiLCJoZWFkZXJzIiwiZXZlbnQiLCJ3ZWJob29rcyIsImNvbnN0cnVjdEV2ZW50IiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9XRUJIT09LX1NFQ1JFVCIsImVyciIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwidHlwZSIsImhhcyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwicmVjZWl2ZWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/webhooks.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/webhooks.ts"));
module.exports = __webpack_exports__;

})();