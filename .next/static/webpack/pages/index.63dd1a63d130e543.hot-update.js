"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), topTracks = ref[0], setTopTracks = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sessionStorage.getItem(\"spotify_access_token\")), accessToken = ref1[0], setAccessToken = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var token = localStorage.getItem(\"spotify_access_token\");\n        setAccessToken(token);\n        var fetchTopTracks = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var response, data, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                5,\n                                ,\n                                6\n                            ]);\n                            return [\n                                4,\n                                isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://api.spotify.com/v1/me/top/tracks?limit=5\", {\n                                    headers: {\n                                        \"Authorization\": \"Bearer \".concat(token)\n                                    }\n                                })\n                            ];\n                        case 1:\n                            response = _state.sent();\n                            if (!response.ok) return [\n                                3,\n                                3\n                            ];\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            setTopTracks(data.items);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            console.error(\"Failed to fetch top tracks:\", response.statusText);\n                            _state.label = 4;\n                        case 4:\n                            return [\n                                3,\n                                6\n                            ];\n                        case 5:\n                            error = _state.sent();\n                            console.error(\"Error fetching top tracks:\", error);\n                            return [\n                                3,\n                                6\n                            ];\n                        case 6:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchTopTracks() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (token) {\n            fetchTopTracks();\n        }\n    }, [\n        router.query\n    ]);\n    var handleLogin = function() {\n        var authorizeUrl = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_4__.getAuthorizeUrl)();\n        router.push(authorizeUrl);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Your Top 5 Tracks on Spotify\"\n            }, void 0, false, {\n                fileName: \"/Users/m/Desktop/react-top-tracks/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            !accessToken && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogin,\n                children: \"Log in with Spotify\"\n            }, void 0, false, {\n                fileName: \"/Users/m/Desktop/react-top-tracks/pages/index.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, _this),\n            accessToken && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: topTracks.map(function(track, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            index + 1,\n                            \". \",\n                            track.name,\n                            \" - \",\n                            track.artists.map(function(artist) {\n                                return artist.name;\n                            }).join(\", \")\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/m/Desktop/react-top-tracks/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/m/Desktop/react-top-tracks/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/m/Desktop/react-top-tracks/pages/index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"FtcGIyZOItKd/zQAiYf82IaaduY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztRQUVNRixrREFBUzs7O0FBRnBCRSxLQUFBQSxLQUFLO0FBNERYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0QXV0aG9yaXplVXJsIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbdG9wVHJhY2tzLCBzZXRUb3BUcmFja3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Nwb3RpZnlfYWNjZXNzX3Rva2VuJykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3BvdGlmeV9hY2Nlc3NfdG9rZW4nKTtcbiAgICBzZXRBY2Nlc3NUb2tlbih0b2tlbik7XG4gIFxuICAgIGNvbnN0IGZldGNoVG9wVHJhY2tzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wL3RyYWNrcz9saW1pdD01Jywge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gIFxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHNldFRvcFRyYWNrcyhkYXRhLml0ZW1zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdG9wIHRyYWNrczonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdG9wIHRyYWNrczonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBmZXRjaFRvcFRyYWNrcygpO1xuICAgIH1cbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xuICBcbiAgXG5cbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3QgYXV0aG9yaXplVXJsID0gZ2V0QXV0aG9yaXplVXJsKCk7XG4gICAgcm91dGVyLnB1c2goYXV0aG9yaXplVXJsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+WW91ciBUb3AgNSBUcmFja3Mgb24gU3BvdGlmeTwvaDE+XG4gICAgICB7IWFjY2Vzc1Rva2VuICYmIChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+TG9nIGluIHdpdGggU3BvdGlmeTwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHthY2Nlc3NUb2tlbiAmJiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dG9wVHJhY2tzLm1hcCgodHJhY2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIHtpbmRleCArIDF9LiB7dHJhY2submFtZX0gLSB7dHJhY2suYXJ0aXN0cy5tYXAoKGFydGlzdCkgPT4gYXJ0aXN0Lm5hbWUpLmpvaW4oJywgJyl9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInVzZVJvdXRlciIsImdldEF1dGhvcml6ZVVybCIsIkluZGV4IiwidG9wVHJhY2tzIiwic2V0VG9wVHJhY2tzIiwicm91dGVyIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiYWNjZXNzVG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZmV0Y2hUb3BUcmFja3MiLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImhlYWRlcnMiLCJvayIsImpzb24iLCJpdGVtcyIsImNvbnNvbGUiLCJzdGF0dXNUZXh0IiwicXVlcnkiLCJoYW5kbGVMb2dpbiIsImF1dGhvcml6ZVVybCIsInB1c2giLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsInRyYWNrIiwiaW5kZXgiLCJsaSIsIm5hbWUiLCJhcnRpc3RzIiwiYXJ0aXN0Iiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});