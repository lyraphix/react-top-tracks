"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/active/_friendbar.js":
/*!*********************************************!*\
  !*** ./src/components/active/_friendbar.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _friendbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_friendbar.module.css */ \"./src/components/active/_friendbar.module.css\");\n/* harmony import */ var _friendbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_friendbar_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst FriendListSidebar = (param)=>{\n    let { friends  } = param;\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSearchChange = (event)=>{\n        setSearchTerm(event.target.value);\n    };\n    const filteredFriends = friends.filter((friend)=>friend.name.toLowerCase().includes(searchTerm.toLowerCase()));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_friendbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainbox),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_friendbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainheadtext),\n                        children: \"FRIEND LIST\"\n                    }, void 0, false, {\n                        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_friendbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().search),\n                        type: \"text\",\n                        placeholder: \"Search\",\n                        value: searchTerm,\n                        onChange: handleSearchChange\n                    }, void 0, false, {\n                        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    justifyContent: \"center\",\n                    flexDirection: \"column\"\n                },\n                children: filteredFriends.map((friend)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: friend.avatar,\n                                alt: friend.name\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: (_friendbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nametext),\n                                    children: friend.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, friend.id, true, {\n                        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/VanessaWei/Desktop/react-top-tracks-1/src/components/active/_friendbar.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FriendListSidebar, \"+YdqPTpSlp4r5CWiFEQiF/UjThM=\");\n_c = FriendListSidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FriendListSidebar);\nvar _c;\n$RefreshReg$(_c, \"FriendListSidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hY3RpdmUvX2ZyaWVuZGJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDSTtBQUU1QyxNQUFNRyxvQkFBb0IsU0FBaUI7UUFBaEIsRUFBRUMsUUFBTyxFQUFFOztJQUNsQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFFN0MsTUFBTU0scUJBQXFCLENBQUNDLFFBQVU7UUFDbENGLGNBQWNFLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNwQztJQUVBLE1BQU1DLGtCQUFrQlAsUUFBUVEsTUFBTSxDQUFDLENBQUNDLFNBQ3BDQSxPQUFPQyxJQUFJLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDWCxXQUFXVSxXQUFXO0lBRzdELHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFXaEIsc0VBQWM7OzBCQUMxQiw4REFBQ2U7O2tDQUNHLDhEQUFDRzt3QkFBR0YsV0FBV2hCLDJFQUFtQjtrQ0FBRTs7Ozs7O2tDQUNwQyw4REFBQ29CO3dCQUFNSixXQUFXaEIscUVBQWE7d0JBQzNCc0IsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWmYsT0FBT0w7d0JBQ1BxQixVQUFVbkI7Ozs7Ozs7Ozs7OzswQkFHbEIsOERBQUNvQjtnQkFBR0MsT0FBUztvQkFBQ0MsZ0JBQWU7b0JBQVVDLGVBQWM7Z0JBQVE7MEJBQ3hEbkIsZ0JBQWdCb0IsR0FBRyxDQUFDLENBQUNsQix1QkFDbEIsOERBQUNJOzswQ0FDRyw4REFBQ2U7Z0NBQUlDLEtBQUtwQixPQUFPcUIsTUFBTTtnQ0FBRUMsS0FBS3RCLE9BQU9DLElBQUk7Ozs7OzswQ0FDekMsOERBQUNHOzBDQUNHLDRFQUFDbUI7b0NBQUdsQixXQUFXaEIsdUVBQWU7OENBQUdXLE9BQU9DLElBQUk7Ozs7Ozs7Ozs7Ozt1QkFIMUNELE9BQU95QixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBVXZDO0dBbENNbkM7S0FBQUE7QUFvQ04sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY3RpdmUvX2ZyaWVuZGJhci5qcz9jNWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL19mcmllbmRiYXIubW9kdWxlLmNzcydcblxuY29uc3QgRnJpZW5kTGlzdFNpZGViYXIgPSAoeyBmcmllbmRzIH0pID0+IHtcbiAgICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZpbHRlcmVkRnJpZW5kcyA9IGZyaWVuZHMuZmlsdGVyKChmcmllbmQpID0+XG4gICAgICAgIGZyaWVuZC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5ib3h9PlxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm1haW5oZWFkdGV4dH0+RlJJRU5EIExJU1Q8L2gyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWwgc3R5bGUgPSB7e2p1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIn19PlxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZEZyaWVuZHMubWFwKChmcmllbmQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZyaWVuZC5pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ZyaWVuZC5hdmF0YXJ9IGFsdD17ZnJpZW5kLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMubmFtZXRleHR9PntmcmllbmQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZExpc3RTaWRlYmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJGcmllbmRMaXN0U2lkZWJhciIsImZyaWVuZHMiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsImhhbmRsZVNlYXJjaENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZEZyaWVuZHMiLCJmaWx0ZXIiLCJmcmllbmQiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImRpdiIsImNsYXNzTmFtZSIsIm1haW5ib3giLCJoMiIsIm1haW5oZWFkdGV4dCIsImlucHV0Iiwic2VhcmNoIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ1bCIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwibWFwIiwiaW1nIiwic3JjIiwiYXZhdGFyIiwiYWx0IiwiaDMiLCJuYW1ldGV4dCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/active/_friendbar.js\n"));

/***/ })

});