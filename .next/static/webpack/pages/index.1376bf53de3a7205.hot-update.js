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

/***/ "./src/components/signin/SignInComponent.js":
/*!**************************************************!*\
  !*** ./src/components/signin/SignInComponent.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/auth */ \"./src/utils/auth.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst SignInComponent = (param)=>{\n    let { navigateToLanding  } = param;\n    _s();\n    const rectangle = \"/signin/rectangle.svg\";\n    const vector = \"/signin/linevector.svg\";\n    const logo = \"/signin/logotext.png\";\n    const vector2 = \"/signin/vector0.svg\";\n    const spotify = \"/signin/spotify.png\";\n    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [error, setError] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleChange = (event)=>{\n        setState(!state);\n    };\n    const handleClick = (event)=>{\n        if (state) {\n            setError(false);\n            const url = (0,_utils_auth__WEBPACK_IMPORTED_MODULE_4__.getAuthorizeUrl)();\n            history.push(url);\n        } else {\n            setError(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().all),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().landing),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().signinoutercontainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().flexcontainer11),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().signinlogobox),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().signinlogo),\n                                        src: logo\n                                    }, void 0, false, {\n                                        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 30\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().vvector1),\n                                src: vector\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().flexcontainer22),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Checkbox, {\n                                        onChange: handleChange\n                                    }, void 0, false, {\n                                        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().iagreewiththeter),\n                                        children: [\n                                            \"I agree with the\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: \"/tos\",\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().iagreewiththeter),\n                                                children: \"Terms of Service\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            \"and\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().iagreewiththeter),\n                                                href: \"https://www.gdprprivacypolicy.net/live.php?token=RYjiEytOOHcu0QGU3fMFSlUObDcusrYS\",\n                                                children: \"Privacy Policy\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            \"of this site\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().rectangle1157instance),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    variant: \"outlined\",\n                                    onClick: handleClick,\n                                    href: ()=>{\n                                        if (error) {\n                                            \"\";\n                                        } else {\n                                            (0,_utils_auth__WEBPACK_IMPORTED_MODULE_4__.getAuthorizeUrl)();\n                                        }\n                                    },\n                                    fullWidth: true,\n                                    sx: {\n                                        height: 45,\n                                        borderWidth: 2\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().spotifylogin),\n                                            src: spotify\n                                        }, void 0, false, {\n                                            fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \"Login with Spotify\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().whydoihavetolog),\n                                children: \"You need to agree with our policies before you continue\"\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().whydoihavetolog)\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().vector0),\n                    src: vector2\n                }, void 0, false, {\n                    fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().num20238bitsterms),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().num20238bitstermsbtext),\n                            children: \"@2023 8BITS\"\n                        }, void 0, false, {\n                            fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/tos\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().num20238bitstermsbtext),\n                            children: \"Terms of Service\"\n                        }, void 0, false, {\n                            fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().num20238bitstermsbtext),\n                            href: \"https://www.gdprprivacypolicy.net/live.php?token=RYjiEytOOHcu0QGU3fMFSlUObDcusrYS\",\n                            children: \"Privacy Policy\"\n                        }, void 0, false, {\n                            fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/signin/SignInComponent.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignInComponent, \"KQtzHhp08NF/41++ZjnEYYC0Ahc=\");\n_c = SignInComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInComponent);\nvar _c;\n$RefreshReg$(_c, \"SignInComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaWduaW4vU2lnbkluQ29tcG9uZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDbUI7QUFDakI7QUFDYztBQUNkO0FBQ2E7QUFDVTtBQUVuRCxNQUFNTyxrQkFBa0IsU0FBMkI7UUFBMUIsRUFBRUMsa0JBQWlCLEVBQUU7O0lBQzVDLE1BQU1DLFlBQVk7SUFDbEIsTUFBTUMsU0FBUztJQUNmLE1BQU1DLE9BQU87SUFDYixNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLFVBQVU7SUFDaEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdmLHFEQUFjLENBQUMsS0FBSztJQUM5QyxNQUFNLENBQUNpQixPQUFPQyxTQUFTLEdBQUdsQixxREFBYyxDQUFDLEtBQUs7SUFDOUMsTUFBTW1CLGVBQWUsQ0FBQ0MsUUFBVTtRQUM5QkwsU0FBUyxDQUFDRDtJQUNaO0lBQ0EsTUFBTU8sY0FBYyxDQUFDRCxRQUFVO1FBQzdCLElBQUlOLE9BQU07WUFDUkksU0FBUyxLQUFLO1lBQ2QsTUFBTUksTUFBTWhCLDREQUFlQTtZQUMzQmlCLFFBQVFDLElBQUksQ0FBQ0Y7UUFDZixPQUFPO1lBQ0xKLFNBQVMsSUFBSTtRQUNmLENBQUM7SUFFSDtJQUNBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFXekIsb0VBQVU7a0JBRXhCLDRFQUFDd0I7WUFBSUMsV0FBV3pCLHdFQUFjOzs4QkFDNUIsOERBQUN3QjtvQkFBSUMsV0FBV3pCLHFGQUEyQjs4QkFHekMsNEVBQUN3Qjt3QkFBSUMsV0FBV3pCLGdGQUFzQjs7MENBQ3BDLDhEQUFDd0I7Z0NBQUlDLFdBQVd6Qiw4RUFBb0I7MENBQ3BDLDRFQUFDRSw0REFBTUE7b0NBQUM2QixNQUFLOzhDQUFJLDRFQUFDQzt3Q0FBSVAsV0FBV3pCLDJFQUFpQjt3Q0FBRWtDLEtBQUt4Qjs7Ozs7Ozs7Ozs7Ozs7OzswQ0FFekQsOERBQUNzQjtnQ0FBSVAsV0FBV3pCLHlFQUFlO2dDQUFFa0MsS0FBS3pCOzs7Ozs7MENBQ3RDLDhEQUFDZTtnQ0FBSUMsV0FBV3pCLGdGQUFzQjs7a0RBQ3BDLDhEQUFDSSxtREFBUUE7d0NBQUNpQyxVQUFVbkI7Ozs7OztrREFDcEIsOERBQUNvQjt3Q0FBS2IsV0FBV3pCLGlGQUF1Qjs7NENBQUU7MERBRXhDLDhEQUFDRyxrREFBSUE7Z0RBQUM0QixNQUFLO2dEQUFPTixXQUFXekIsaUZBQXVCOzBEQUFFOzs7Ozs7NENBRS9DOzBEQUVQLDhEQUFDRyxrREFBSUE7Z0RBQUNzQixXQUFXekIsaUZBQXVCO2dEQUFFK0IsTUFBSzswREFBb0Y7Ozs7Ozs0Q0FFNUg7Ozs7Ozs7Ozs7Ozs7MENBSVgsOERBQUNQO2dDQUFJQyxXQUFXekIsc0ZBQTRCOzBDQUc1Qyw0RUFBQ0UsNERBQU1BO29DQUFDdUMsU0FBUTtvQ0FBV0MsU0FBU3RCO29DQUFhVyxNQUFNLElBQUk7d0NBQUMsSUFBR2YsT0FBTTs0Q0FBQzt3Q0FBRSxPQUFNOzRDQUFDWCw0REFBZUE7d0NBQUUsQ0FBQztvQ0FBQTtvQ0FBR3NDLFNBQVM7b0NBQUNDLElBQUk7d0NBQUNDLFFBQU87d0NBQUlDLGFBQVk7b0NBQUM7O3NEQUN2SSw4REFBQ2Q7NENBQUlQLFdBQVd6Qiw2RUFBbUI7NENBQUVrQyxLQUFLdEI7Ozs7Ozt3Q0FBVzs7Ozs7Ozs7Ozs7OzRCQUl6REksc0JBQ0EsOERBQUNzQjtnQ0FBS2IsV0FBV3pCLGdGQUFzQjswQ0FBRzs7Ozs7MERBRzFDLDhEQUFDc0M7Z0NBQUtiLFdBQVd6QixnRkFBc0I7Ozs7O3lDQUNoQzs7Ozs7Ozs7Ozs7OzhCQUlYLDhEQUFDZ0M7b0JBQUlQLFdBQVd6Qix3RUFBYztvQkFBRWtDLEtBQUt2Qjs7Ozs7OzhCQUNyQyw4REFBQzJCO29CQUFLYixXQUFXekIsa0ZBQXdCOztzQ0FDckMsOERBQUNzQzs0QkFBS2IsV0FBV3pCLHVGQUE2QjtzQ0FBRTs7Ozs7O3NDQUNoRCw4REFBQ0csa0RBQUlBOzRCQUFDNEIsTUFBSzs0QkFBT04sV0FBV3pCLHVGQUE2QjtzQ0FBRTs7Ozs7O3NDQUc1RCw4REFBQ0csa0RBQUlBOzRCQUFDc0IsV0FBV3pCLHVGQUE2Qjs0QkFBRStCLE1BQUs7c0NBQW9GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNySjtHQS9FTXpCO0tBQUFBO0FBZ0ZOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NpZ25pbi9TaWduSW5Db21wb25lbnQuanM/NGFmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBnZXRBdXRob3JpemVVcmwgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoJztcblxuY29uc3QgU2lnbkluQ29tcG9uZW50ID0gKHsgbmF2aWdhdGVUb0xhbmRpbmcgfSkgPT4ge1xuICBjb25zdCByZWN0YW5nbGUgPSBcIi9zaWduaW4vcmVjdGFuZ2xlLnN2Z1wiO1xuICBjb25zdCB2ZWN0b3IgPSBcIi9zaWduaW4vbGluZXZlY3Rvci5zdmdcIjtcbiAgY29uc3QgbG9nbyA9IFwiL3NpZ25pbi9sb2dvdGV4dC5wbmdcIjtcbiAgY29uc3QgdmVjdG9yMiA9IFwiL3NpZ25pbi92ZWN0b3IwLnN2Z1wiO1xuICBjb25zdCBzcG90aWZ5ID0gXCIvc2lnbmluL3Nwb3RpZnkucG5nXCI7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U3RhdGUoIXN0YXRlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoc3RhdGUpe1xuICAgICAgc2V0RXJyb3IoZmFsc2UpO1xuICAgICAgY29uc3QgdXJsID0gZ2V0QXV0aG9yaXplVXJsKCk7XG4gICAgICBoaXN0b3J5LnB1c2godXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgfVxuICAgIFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxsfT5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5kaW5nfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWduaW5vdXRlcmNvbnRhaW5lcn0+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbmluZmxleGNvbnRhaW5lcn0+XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleGNvbnRhaW5lcjExfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbmlubG9nb2JveH0+XG4gICAgICAgICAgICA8QnV0dG9uIGhyZWY9XCIvXCI+PGltZyBjbGFzc05hbWU9e3N0eWxlcy5zaWduaW5sb2dvfSBzcmM9e2xvZ299IC8+PC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMudnZlY3RvcjF9IHNyYz17dmVjdG9yfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Y29udGFpbmVyMjJ9PlxuICAgICAgICAgICAgICA8Q2hlY2tib3ggb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5pYWdyZWV3aXRodGhldGVyfT5cbiAgICAgICAgICAgICAgICBJIGFncmVlIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90b3NcIiBjbGFzc05hbWU9e3N0eWxlcy5pYWdyZWV3aXRodGhldGVyfT5cbiAgICAgICAgICAgICAgICAgICAgVGVybXMgb2YgU2VydmljZVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICBhbmRcbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5pYWdyZWV3aXRodGhldGVyfSBocmVmPVwiaHR0cHM6Ly93d3cuZ2RwcnByaXZhY3lwb2xpY3kubmV0L2xpdmUucGhwP3Rva2VuPVJZamlFeXRPT0hjdTBRR1UzZk1GU2xVT2JEY3VzcllTXCI+XG4gICAgICAgICAgICAgICAgICAgIFByaXZhY3kgUG9saWN5XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIG9mIHRoaXMgc2l0ZVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWN0YW5nbGUxMTU3aW5zdGFuY2V9PlxuXG4gICAgICAgICAgICB7LyogaHR0cHM6Ly91aS10ZXN0aW5nLWJhY2tlbmQudmVyY2VsLmFwcCAqL31cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGhyZWY9eygpPT57aWYoZXJyb3Ipe1wiXCJ9IGVsc2V7Z2V0QXV0aG9yaXplVXJsKCl9fX0gZnVsbFdpZHRoIHN4PXt7aGVpZ2h0OjQ1LCBib3JkZXJXaWR0aDoyfX0+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5zcG90aWZ5bG9naW59IHNyYz17c3BvdGlmeX0gLz4gXG4gICAgICAgICAgICAgICAgTG9naW4gd2l0aCBTcG90aWZ5XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7KGVycm9yKT9cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLndoeWRvaWhhdmV0b2xvZ30gPlxuICAgICAgICAgICAgICBZb3UgbmVlZCB0byBhZ3JlZSB3aXRoIG91ciBwb2xpY2llcyBiZWZvcmUgeW91IGNvbnRpbnVlXG4gICAgICAgICAgICA8L3NwYW4+OlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMud2h5ZG9paGF2ZXRvbG9nfT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLnZlY3RvcjB9IHNyYz17dmVjdG9yMn0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtMjAyMzhiaXRzdGVybXN9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubnVtMjAyMzhiaXRzdGVybXNidGV4dH0+QDIwMjMgOEJJVFM8L3NwYW4+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Rvc1wiIGNsYXNzTmFtZT17c3R5bGVzLm51bTIwMjM4Yml0c3Rlcm1zYnRleHR9PlxuICAgICAgICAgICAgICAgIFRlcm1zIG9mIFNlcnZpY2VcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLm51bTIwMjM4Yml0c3Rlcm1zYnRleHR9IGhyZWY9XCJodHRwczovL3d3dy5nZHBycHJpdmFjeXBvbGljeS5uZXQvbGl2ZS5waHA/dG9rZW49UllqaUV5dE9PSGN1MFFHVTNmTUZTbFVPYkRjdXNyWVNcIj5cbiAgICAgICAgICAgICAgICBQcml2YWN5IFBvbGljeVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2lnbkluQ29tcG9uZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIkhlYWQiLCJCdXR0b24iLCJMaW5rIiwiQ2hlY2tib3giLCJnZXRBdXRob3JpemVVcmwiLCJTaWduSW5Db21wb25lbnQiLCJuYXZpZ2F0ZVRvTGFuZGluZyIsInJlY3RhbmdsZSIsInZlY3RvciIsImxvZ28iLCJ2ZWN0b3IyIiwic3BvdGlmeSIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImhhbmRsZUNsaWNrIiwidXJsIiwiaGlzdG9yeSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJhbGwiLCJsYW5kaW5nIiwic2lnbmlub3V0ZXJjb250YWluZXIiLCJmbGV4Y29udGFpbmVyMTEiLCJzaWduaW5sb2dvYm94IiwiaHJlZiIsImltZyIsInNpZ25pbmxvZ28iLCJzcmMiLCJ2dmVjdG9yMSIsImZsZXhjb250YWluZXIyMiIsIm9uQ2hhbmdlIiwic3BhbiIsImlhZ3JlZXdpdGh0aGV0ZXIiLCJyZWN0YW5nbGUxMTU3aW5zdGFuY2UiLCJ2YXJpYW50Iiwib25DbGljayIsImZ1bGxXaWR0aCIsInN4IiwiaGVpZ2h0IiwiYm9yZGVyV2lkdGgiLCJzcG90aWZ5bG9naW4iLCJ3aHlkb2loYXZldG9sb2ciLCJ2ZWN0b3IwIiwibnVtMjAyMzhiaXRzdGVybXMiLCJudW0yMDIzOGJpdHN0ZXJtc2J0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/signin/SignInComponent.js\n"));

/***/ })

});