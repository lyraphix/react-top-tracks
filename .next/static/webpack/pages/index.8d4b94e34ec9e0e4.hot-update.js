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

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAccessToken\": function() { return /* binding */ getAccessToken; },\n/* harmony export */   \"getAuthorizeUrl\": function() { return /* binding */ getAuthorizeUrl; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n\n\n\n\nvar clientId = \"83cabe8ccb85435b9ad3c8cb2e83d111\";\nvar clientSecret = \"b6bbd78d38404ce994dafb616a0d4aee\";\nvar redirectUri = \"http://localhost:3000/callback\";\nvar getAuthorizeUrl = function() {\n    var params = {\n        client_id: clientId,\n        response_type: \"code\",\n        redirect_uri: redirectUri,\n        show_dialog: true,\n        scope: \"user-top-read\"\n    };\n    var authorizeUrl = \"https://accounts.spotify.com/authorize?\".concat(query_string__WEBPACK_IMPORTED_MODULE_1__.stringify(params));\n    return authorizeUrl;\n};\nvar getAccessToken = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function(code) {\n        var tokenEndpoint, requestBody, response, error;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    tokenEndpoint = \"https://accounts.spotify.com/api/token\";\n                    requestBody = {\n                        client_id: clientId,\n                        client_secret: clientSecret,\n                        grant_type: \"authorization_code\",\n                        code: code,\n                        redirect_uri: redirectUri\n                    };\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_0___default().post(tokenEndpoint, query_string__WEBPACK_IMPORTED_MODULE_1__.stringify(requestBody), {\n                            headers: {\n                                \"Content-Type\": \"application/x-www-form-urlencoded\"\n                            }\n                        })\n                    ];\n                case 2:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 3:\n                    error = _state.sent();\n                    console.error(\"Error during token exchange:\", error);\n                    throw error;\n                case 4:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function getAccessToken(code) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDYTtBQUV2QyxJQUFNRSxRQUFRLEdBQUdDLGtDQUE2QjtBQUM5QyxJQUFNRyxZQUFZLEdBQUdILGtDQUFpQztBQUN0RCxJQUFNSyxXQUFXLEdBQUdMLGdDQUFnQztBQUU3QyxJQUFNTyxlQUFlLEdBQUcsV0FBTTtJQUNuQyxJQUFNQyxNQUFNLEdBQUc7UUFDYkMsU0FBUyxFQUFFVixRQUFRO1FBQ25CVyxhQUFhLEVBQUUsTUFBTTtRQUNyQkMsWUFBWSxFQUFFTixXQUFXO1FBQ3pCTyxXQUFXLEVBQUUsSUFBSTtRQUNqQkMsS0FBSyxFQUFFLGVBQWU7S0FDdkI7SUFFRCxJQUFNQyxZQUFZLEdBQUcseUNBQXdDLENBQWdDLE9BQTlCaEIsbURBQXFCLENBQUNVLE1BQU0sQ0FBQyxDQUFFO0lBRTlGLE9BQU9NLFlBQVksQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFSyxJQUFNRSxjQUFjO2VBQUcsNkZBQU9DLElBQUksRUFBSztZQUNwQ0MsYUFBYSxFQUViQyxXQUFXLEVBU1RDLFFBQVEsRUFPUEMsS0FBSzs7OztvQkFsQlJILGFBQWEsR0FBRyx3Q0FBd0MsQ0FBQztvQkFFekRDLFdBQVcsR0FBRzt3QkFDbEJWLFNBQVMsRUFBRVYsUUFBUTt3QkFDbkJ1QixhQUFhLEVBQUVuQixZQUFZO3dCQUMzQm9CLFVBQVUsRUFBRSxvQkFBb0I7d0JBQ2hDTixJQUFJLEVBQUpBLElBQUk7d0JBQ0pOLFlBQVksRUFBRU4sV0FBVztxQkFDMUIsQ0FBQzs7Ozs7Ozs7O29CQUdpQjs7d0JBQU1SLGlEQUFVLENBQUNxQixhQUFhLEVBQUVwQixtREFBcUIsQ0FBQ3FCLFdBQVcsQ0FBQyxFQUFFOzRCQUNuRk0sT0FBTyxFQUFFO2dDQUNQLGNBQWMsRUFBRSxtQ0FBbUM7NkJBQ3BEO3lCQUNGLENBQUM7c0JBQUE7O29CQUpJTCxRQUFRLEdBQUcsYUFJZjtvQkFFRjs7d0JBQU9BLFFBQVEsQ0FBQ00sSUFBSTtzQkFBQzs7b0JBQ2RMLEtBQUs7b0JBQ1pNLE9BQU8sQ0FBQ04sS0FBSyxDQUFDLDhCQUE4QixFQUFFQSxLQUFLLENBQUMsQ0FBQztvQkFDckQsTUFBTUEsS0FBSyxDQUFDOzs7Ozs7O0lBRWhCLENBQUM7b0JBdkJVTCxjQUFjLENBQVVDLElBQUk7OztHQXVCdEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9hdXRoLmpzP2ViNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xuXG5jb25zdCBjbGllbnRJZCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX0lEO1xuY29uc3QgY2xpZW50U2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9DTElFTlRfU0VDUkVUO1xuY29uc3QgcmVkaXJlY3RVcmkgPSBwcm9jZXNzLmVudi5TUE9USUZZX1JFRElSRUNUX1VSSTtcblxuZXhwb3J0IGNvbnN0IGdldEF1dGhvcml6ZVVybCA9ICgpID0+IHtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIGNsaWVudF9pZDogY2xpZW50SWQsXG4gICAgcmVzcG9uc2VfdHlwZTogJ2NvZGUnLFxuICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmksXG4gICAgc2hvd19kaWFsb2c6IHRydWUsIFxuICAgIHNjb3BlOiAndXNlci10b3AtcmVhZCcsXG4gIH07XG5cbiAgY29uc3QgYXV0aG9yaXplVXJsID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXV0aG9yaXplPyR7cXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcyl9YDtcblxuICByZXR1cm4gYXV0aG9yaXplVXJsO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKGNvZGUpID0+IHtcbiAgICBjb25zdCB0b2tlbkVuZHBvaW50ID0gJ2h0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuJztcbiAgXG4gICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XG4gICAgICBjbGllbnRfaWQ6IGNsaWVudElkLFxuICAgICAgY2xpZW50X3NlY3JldDogY2xpZW50U2VjcmV0LFxuICAgICAgZ3JhbnRfdHlwZTogJ2F1dGhvcml6YXRpb25fY29kZScsXG4gICAgICBjb2RlLFxuICAgICAgcmVkaXJlY3RfdXJpOiByZWRpcmVjdFVyaSxcbiAgICB9O1xuICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KHRva2VuRW5kcG9pbnQsIHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICBcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgdG9rZW4gZXhjaGFuZ2U6JywgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9O1xuICBcbiJdLCJuYW1lcyI6WyJheGlvcyIsInF1ZXJ5U3RyaW5nIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiU1BPVElGWV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJTUE9USUZZX0NMSUVOVF9TRUNSRVQiLCJyZWRpcmVjdFVyaSIsIlNQT1RJRllfUkVESVJFQ1RfVVJJIiwiZ2V0QXV0aG9yaXplVXJsIiwicGFyYW1zIiwiY2xpZW50X2lkIiwicmVzcG9uc2VfdHlwZSIsInJlZGlyZWN0X3VyaSIsInNob3dfZGlhbG9nIiwic2NvcGUiLCJhdXRob3JpemVVcmwiLCJzdHJpbmdpZnkiLCJnZXRBY2Nlc3NUb2tlbiIsImNvZGUiLCJ0b2tlbkVuZHBvaW50IiwicmVxdWVzdEJvZHkiLCJyZXNwb25zZSIsImVycm9yIiwiY2xpZW50X3NlY3JldCIsImdyYW50X3R5cGUiLCJwb3N0IiwiaGVhZGVycyIsImRhdGEiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/auth.js\n"));

/***/ })

});