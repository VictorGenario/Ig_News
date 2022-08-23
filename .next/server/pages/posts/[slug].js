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
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__MzB65\",\n\t\"post\": \"post_post__ejhnw\",\n\t\"postContent\": \"post_postContent__B93C3\",\n\t\"previewContent\": \"post_previewContent__2mmIt\",\n\t\"continueReading\": \"post_continueReading___ZrFL\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL3Bvc3RzL3Bvc3QubW9kdWxlLnNjc3M/YTNiNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwb3N0X2NvbnRhaW5lcl9fTXpCNjVcIixcblx0XCJwb3N0XCI6IFwicG9zdF9wb3N0X19lamhud1wiLFxuXHRcInBvc3RDb250ZW50XCI6IFwicG9zdF9wb3N0Q29udGVudF9fQjkzQzNcIixcblx0XCJwcmV2aWV3Q29udGVudFwiOiBcInBvc3RfcHJldmlld0NvbnRlbnRfXzJtbUl0XCIsXG5cdFwiY29udGludWVSZWFkaW5nXCI6IFwicG9zdF9jb250aW51ZVJlYWRpbmdfX19ackZMXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/post.module.scss\n");

/***/ }),

/***/ "./src/Services/prismic.ts":
/*!*********************************!*\
  !*** ./src/Services/prismic.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": () => (/* binding */ getPrismicClient)\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_0__]);\n_prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction getPrismicClient(req) {\n    const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0__.createClient(process.env.PRISMIC_ENDPOINT, {\n        accessToken: process.env.PRISMIC_ACCESS_TOKEN\n    });\n    return prismic;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvcHJpc21pYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUVyQyxTQUFTQyxnQkFBZ0IsQ0FBQ0MsR0FBYSxFQUFDO0lBQzdDLE1BQU1DLE9BQU8sR0FBR0gsMkRBQW9CLENBQ2xDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCLEVBQzVCO1FBQ0VDLFdBQVcsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtLQUM5QyxDQUNGO0lBQ0QsT0FBT04sT0FBTztDQUNmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL1NlcnZpY2VzL3ByaXNtaWMudHM/YmQzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJpc21pY0NsaWVudChyZXE/OiB1bmtub3duKXtcbiAgY29uc3QgcHJpc21pYyA9IFByaXNtaWMuY3JlYXRlQ2xpZW50KFxuICAgIHByb2Nlc3MuZW52LlBSSVNNSUNfRU5EUE9JTlQsXG4gICAge1xuICAgICAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LlBSSVNNSUNfQUNDRVNTX1RPS0VOXG4gICAgfVxuICApXG4gIHJldHVybiBwcmlzbWljXG59Il0sIm5hbWVzIjpbIlByaXNtaWMiLCJnZXRQcmlzbWljQ2xpZW50IiwicmVxIiwicHJpc21pYyIsImNyZWF0ZUNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0VORFBPSU5UIiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Services/prismic.ts\n");

/***/ }),

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Services_prismic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/prismic */ \"./src/Services/prismic.ts\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Services_prismic__WEBPACK_IMPORTED_MODULE_4__]);\n_Services_prismic__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction Post({ post  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        post.title,\n                        \" | Ignews\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/posts/[slug].tsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/posts/[slug].tsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().post),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/posts/[slug].tsx\",\n                            lineNumber: 26,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            children: post.updatedAt\n                        }, void 0, false, {\n                            fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/posts/[slug].tsx\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().postContent),\n                            dangerouslySetInnerHTML: {\n                                __html: post.content\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/posts/[slug].tsx\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/posts/[slug].tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/victor/ignite-aulas/reactjs/ignews/src/pages/posts/[slug].tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n};\nconst getServerSideProps = async ({ req , params  })=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    const { slug  } = params;\n    console.log(session);\n    if (!(session === null || session === void 0 ? void 0 : session.activeSubscription)) {\n        return {\n            redirect: {\n                destination: \"/\",\n                permanent: false\n            }\n        };\n    }\n    const prismic = (0,_Services_prismic__WEBPACK_IMPORTED_MODULE_4__.getPrismicClient)();\n    const response = await prismic.getByUID(\"publication\", String(slug), {});\n    const post = {\n        slug: response.uid,\n        title: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asText(response.data.title),\n        content: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asHtml(response.data.content),\n        updatedAt: new Date(response.last_publication_date).toLocaleDateString(\"pt-BR\", {\n            day: \"2-digit\",\n            month: \"long\",\n            year: \"numeric\"\n        })\n    };\n    return {\n        props: {\n            post\n        }\n    };\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEM7QUFDaEI7QUFDVTtBQUNtQjtBQUVsQjtBQVd4QixTQUFTSyxJQUFJLENBQUMsRUFBQ0MsSUFBSSxHQUFXLEVBQUM7SUFDNUMscUJBQ0U7OzBCQUNBLDhEQUFDTCxrREFBSTswQkFDSCw0RUFBQ00sT0FBSzs7d0JBQUVELElBQUksQ0FBQ0MsS0FBSzt3QkFBQyxXQUFTOzs7Ozs7d0JBQVE7Ozs7O29CQUMvQjswQkFDUCw4REFBQ0MsTUFBSTtnQkFBQ0MsU0FBUyxFQUFFTCxvRUFBZ0I7MEJBQy9CLDRFQUFDTyxTQUFPO29CQUFDRixTQUFTLEVBQUVMLCtEQUFXOztzQ0FDN0IsOERBQUNRLElBQUU7c0NBQUVOLElBQUksQ0FBQ0MsS0FBSzs7Ozs7Z0NBQU07c0NBQ3JCLDhEQUFDTSxNQUFJO3NDQUFFUCxJQUFJLENBQUNRLFNBQVM7Ozs7O2dDQUFRO3NDQUM3Qiw4REFBQ0MsS0FBRzs0QkFDSk4sU0FBUyxFQUFFTCxzRUFBa0I7NEJBQzdCYSx1QkFBdUIsRUFBRTtnQ0FBQ0MsTUFBTSxFQUFFWixJQUFJLENBQUNhLE9BQU87NkJBQUM7Ozs7O2dDQUM3Qzs7Ozs7O3dCQUNNOzs7OztvQkFDTDs7b0JBQ0osQ0FDSjtDQUNGO0FBRU0sTUFBTUMsa0JBQWtCLEdBQXVCLE9BQU8sRUFBRUMsR0FBRyxHQUFFQyxNQUFNLEdBQUUsR0FBSztJQUMvRSxNQUFNQyxPQUFPLEdBQUcsTUFBTXZCLDJEQUFVLENBQUM7UUFBRXFCLEdBQUc7S0FBRSxDQUFDO0lBQ3pDLE1BQU0sRUFBRUcsSUFBSSxHQUFFLEdBQUdGLE1BQU07SUFFdkJHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPLENBQUMsQ0FBQztJQUdyQixJQUFJLENBQUNBLENBQUFBLE9BQU8sYUFBUEEsT0FBTyxXQUFvQixHQUEzQkEsS0FBQUEsQ0FBMkIsR0FBM0JBLE9BQU8sQ0FBRUksa0JBQWtCLEdBQUU7UUFDaEMsT0FBTztZQUNMQyxRQUFRLEVBQUU7Z0JBQ1JDLFdBQVcsRUFBRSxHQUFHO2dCQUNoQkMsU0FBUyxFQUFFLEtBQUs7YUFDakI7U0FDRjtLQUNGO0lBRUQsTUFBTUMsT0FBTyxHQUFHNUIsbUVBQWdCLEVBQUU7SUFFbEMsTUFBTTZCLFFBQVEsR0FBRyxNQUFNRCxPQUFPLENBQUNFLFFBQVEsQ0FBTSxhQUFhLEVBQUVDLE1BQU0sQ0FBQ1YsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRTdFLE1BQU1sQixJQUFJLEdBQUc7UUFDWGtCLElBQUksRUFBRVEsUUFBUSxDQUFDRyxHQUFHO1FBQ2xCNUIsS0FBSyxFQUFFTCx3REFBZSxDQUFDOEIsUUFBUSxDQUFDSyxJQUFJLENBQUM5QixLQUFLLENBQUM7UUFDM0NZLE9BQU8sRUFBRWpCLHdEQUFlLENBQUM4QixRQUFRLENBQUNLLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQztRQUMvQ0wsU0FBUyxFQUFFLElBQUl5QixJQUFJLENBQUNQLFFBQVEsQ0FBQ1EscUJBQXFCLENBQUMsQ0FBQ0Msa0JBQWtCLENBQ3RFLE9BQU8sRUFBRTtZQUFDQyxHQUFHLEVBQUUsU0FBUztZQUN2QkMsS0FBSyxFQUFFLE1BQU07WUFDYkMsSUFBSSxFQUFFLFNBQVM7U0FDZixDQUFDO0tBQ0g7SUFFQyxPQUFPO1FBQ0hDLEtBQUssRUFBQztZQUNKdkMsSUFBSTtTQUNMO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9wYWdlcy9wb3N0cy9bc2x1Z10udHN4Pzc3OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBSaWNoVGV4dCB9IGZyb20gXCJwcmlzbWljLWRvbVwiXG5pbXBvcnQgeyBnZXRQcmlzbWljQ2xpZW50IH0gZnJvbSBcIi4uLy4uL1NlcnZpY2VzL3ByaXNtaWNcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3Bvc3QubW9kdWxlLnNjc3NcIlxuXG5pbnRlcmZhY2UgUG9zdFByb3BzIHtcbiAgcG9zdDoge1xuICAgIHNsdWc6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtwb3N0fTpQb3N0UHJvcHMpe1xuICByZXR1cm4oXG4gICAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57cG9zdC50aXRsZX0gfCBJZ25ld3M8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XG4gICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICA8dGltZT57cG9zdC51cGRhdGVkQXR9PC90aW1lPlxuICAgICAgICA8ZGl2IFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Q29udGVudH1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBvc3QuY29udGVudH19XG4gICAgICAgIC8+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHJlcSwgcGFyYW1zIH0pID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSlcbiAgY29uc3QgeyBzbHVnIH0gPSBwYXJhbXM7XG5cbiAgY29uc29sZS5sb2coc2Vzc2lvbik7XG4gIFxuXG4gIGlmICghc2Vzc2lvbj8uYWN0aXZlU3Vic2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgIGRlc3RpbmF0aW9uOiBcIi9cIixcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudCgpXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLmdldEJ5VUlEPGFueT4oXCJwdWJsaWNhdGlvblwiLCBTdHJpbmcoc2x1ZyksIHt9KVxuXG4gIGNvbnN0IHBvc3QgPSB7XG4gICAgc2x1ZzogcmVzcG9uc2UudWlkLFxuICAgIHRpdGxlOiBSaWNoVGV4dC5hc1RleHQocmVzcG9uc2UuZGF0YS50aXRsZSksXG4gICAgY29udGVudDogUmljaFRleHQuYXNIdG1sKHJlc3BvbnNlLmRhdGEuY29udGVudCksXG4gICAgdXBkYXRlZEF0OiBuZXcgRGF0ZShyZXNwb25zZS5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAncHQtQlInLCB7ZGF5OiAnMi1kaWdpdCcsXG4gICAgIG1vbnRoOiAnbG9uZycsIFxuICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICB9KVxuICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgIHBvc3QsXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJIZWFkIiwiUmljaFRleHQiLCJnZXRQcmlzbWljQ2xpZW50Iiwic3R5bGVzIiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJhcnRpY2xlIiwiaDEiLCJ0aW1lIiwidXBkYXRlZEF0IiwiZGl2IiwicG9zdENvbnRlbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJwYXJhbXMiLCJzZXNzaW9uIiwic2x1ZyIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmVTdWJzY3JpcHRpb24iLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJpc21pYyIsInJlc3BvbnNlIiwiZ2V0QnlVSUQiLCJTdHJpbmciLCJ1aWQiLCJhc1RleHQiLCJkYXRhIiwiYXNIdG1sIiwiRGF0ZSIsImxhc3RfcHVibGljYXRpb25fZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n");

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

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismic-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@prismicio/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[slug].tsx"));
module.exports = __webpack_exports__;

})();