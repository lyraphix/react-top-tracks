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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), topTracks = ref[0], setTopTracks = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), accessToken = ref1[0], setAccessToken = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var token = localStorage.getItem(\"spotify_access_token\");\n        setAccessToken(token);\n        var fetchTopTracks = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(function() {\n                var response, data, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                5,\n                                ,\n                                6\n                            ]);\n                            return [\n                                4,\n                                isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://api.spotify.com/v1/me/top/tracks?limit=5\", {\n                                    headers: {\n                                        \"Authorization\": \"Bearer \".concat(token)\n                                    }\n                                })\n                            ];\n                        case 1:\n                            response = _state.sent();\n                            if (!response.ok) return [\n                                3,\n                                3\n                            ];\n                            return [\n                                4,\n                                response.json()\n                            ];\n                        case 2:\n                            data = _state.sent();\n                            setTopTracks(data.items);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            console.error(\"Failed to fetch top tracks:\", response.statusText);\n                            _state.label = 4;\n                        case 4:\n                            return [\n                                3,\n                                6\n                            ];\n                        case 5:\n                            error = _state.sent();\n                            console.error(\"Error fetching top tracks:\", error);\n                            return [\n                                3,\n                                6\n                            ];\n                        case 6:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchTopTracks() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (token) {\n            fetchTopTracks();\n        }\n    }, [\n        router.query\n    ]);\n    var handleLogin = function() {\n        var authorizeUrl = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_4__.getAuthorizeUrl)();\n        router.push(authorizeUrl);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Your Top 5 Tracks on Spotify\"\n            }, void 0, false, {\n                fileName: \"/Users/m/Desktop/react-top-tracks/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            !accessToken && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogin,\n                children: \"Log in with Spotify\"\n            }, void 0, false, {\n                fileName: \"/Users/m/Desktop/react-top-tracks/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this),\n            accessToken && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: topTracks.map(function(track, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            index + 1,\n                            \". \",\n                            track.name,\n                            \" - \",\n                            track.artists.map(function(artist) {\n                                return artist.name;\n                            }).join(\", \")\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/m/Desktop/react-top-tracks/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/m/Desktop/react-top-tracks/pages/index.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/m/Desktop/react-top-tracks/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_s(Index, \"uDY+AzbDklw5u2EYvtj+mYKiUUU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEwRFgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRBdXRob3JpemVVcmwgfSBmcm9tICcuLi91dGlscy9hdXRoJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFt0b3BUcmFja3MsIHNldFRvcFRyYWNrc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3BvdGlmeV9hY2Nlc3NfdG9rZW4nKTtcbiAgICBzZXRBY2Nlc3NUb2tlbih0b2tlbik7XG4gIFxuICAgIGNvbnN0IGZldGNoVG9wVHJhY2tzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdG9wL3RyYWNrcz9saW1pdD01Jywge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gIFxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHNldFRvcFRyYWNrcyhkYXRhLml0ZW1zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdG9wIHRyYWNrczonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdG9wIHRyYWNrczonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBmZXRjaFRvcFRyYWNrcygpO1xuICAgIH1cbiAgfSwgW3JvdXRlci5xdWVyeV0pO1xuICBcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCBhdXRob3JpemVVcmwgPSBnZXRBdXRob3JpemVVcmwoKTtcbiAgICByb3V0ZXIucHVzaChhdXRob3JpemVVcmwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Zb3VyIFRvcCA1IFRyYWNrcyBvbiBTcG90aWZ5PC9oMT5cbiAgICAgIHshYWNjZXNzVG9rZW4gJiYgKFxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5Mb2cgaW4gd2l0aCBTcG90aWZ5PC9idXR0b24+XG4gICAgICApfVxuICAgICAge2FjY2Vzc1Rva2VuICYmIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0b3BUcmFja3MubWFwKCh0cmFjaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAge2luZGV4ICsgMX0uIHt0cmFjay5uYW1lfSAtIHt0cmFjay5hcnRpc3RzLm1hcCgoYXJ0aXN0KSA9PiBhcnRpc3QubmFtZSkuam9pbignLCAnKX1cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwidXNlUm91dGVyIiwiZ2V0QXV0aG9yaXplVXJsIiwiSW5kZXgiLCJ0b3BUcmFja3MiLCJzZXRUb3BUcmFja3MiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwicm91dGVyIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hUb3BUcmFja3MiLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImhlYWRlcnMiLCJvayIsImpzb24iLCJpdGVtcyIsImNvbnNvbGUiLCJzdGF0dXNUZXh0IiwicXVlcnkiLCJoYW5kbGVMb2dpbiIsImF1dGhvcml6ZVVybCIsInB1c2giLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsInRyYWNrIiwiaW5kZXgiLCJsaSIsIm5hbWUiLCJhcnRpc3RzIiwiYXJ0aXN0Iiwiam9pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});