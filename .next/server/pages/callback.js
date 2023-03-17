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
exports.id = "pages/callback";
exports.ids = ["pages/callback"];
exports.modules = {

/***/ "./pages/callback.js":
/*!***************************!*\
  !*** ./pages/callback.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.js\");\n\n\n\n\nconst Callback = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleAuth = async ()=>{\n            const { code  } = router.query;\n            console.log(\"Router query:\", router.query);\n            if (code) {\n                try {\n                    console.log(\"Exchanging code for access token...\");\n                    const tokenData = await (0,_utils_auth__WEBPACK_IMPORTED_MODULE_3__.getAccessToken)(code);\n                    console.log(\"Access token received:\", tokenData.access_token);\n                    sessionStorage.setItem(\"spotify_access_token\", tokenData.access_token); // Changed to sessionStorage\n                    router.push(\"/\");\n                } catch (error) {\n                    console.error(\"Error during authentication:\", error);\n                    router.push(\"/\");\n                }\n            }\n        };\n        handleAuth();\n    }, [\n        router.query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Authenticating...\"\n        }, void 0, false, {\n            fileName: \"/Users/m/Desktop/react-top-tracks/pages/callback.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/m/Desktop/react-top-tracks/pages/callback.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Callback);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYWxsYmFjay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ047QUFDYTtBQUUvQyxNQUFNRyxRQUFRLEdBQUcsSUFBTTtJQUNyQixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFFMUJDLGdEQUFTLENBQUMsSUFBTTtRQUNkLE1BQU1JLFVBQVUsR0FBRyxVQUFZO1lBQzdCLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUdGLE1BQU0sQ0FBQ0csS0FBSztZQUM3QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFTCxNQUFNLENBQUNHLEtBQUssQ0FBQyxDQUFDO1lBRTNDLElBQUlELElBQUksRUFBRTtnQkFDUixJQUFJO29CQUNGRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO29CQUNuRCxNQUFNQyxTQUFTLEdBQUcsTUFBTVIsMkRBQWMsQ0FBQ0ksSUFBSSxDQUFDO29CQUM1Q0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsd0JBQXdCLEVBQUVDLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDLENBQUM7b0JBQzlEQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRUgsU0FBUyxDQUFDQyxZQUFZLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtvQkFDcEdQLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixFQUFFLE9BQU9DLEtBQUssRUFBRTtvQkFDZFAsT0FBTyxDQUFDTyxLQUFLLENBQUMsOEJBQThCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO29CQUNyRFgsTUFBTSxDQUFDVSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztRQUVEVCxVQUFVLEVBQUUsQ0FBQztJQUNmLENBQUMsRUFBRTtRQUFDRCxNQUFNLENBQUNHLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFFbkIscUJBQ0UsOERBQUNTLEtBQUc7a0JBQ0YsNEVBQUNDLElBQUU7c0JBQUMsbUJBQWlCOzs7OztxQkFBSzs7Ozs7aUJBQ3RCLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWVkLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1hcHAvLi9wYWdlcy9jYWxsYmFjay5qcz8zZmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEFjY2Vzc1Rva2VuIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XG5cbmNvbnN0IENhbGxiYWNrID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUF1dGggPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IGNvZGUgfSA9IHJvdXRlci5xdWVyeTtcbiAgICAgIGNvbnNvbGUubG9nKCdSb3V0ZXIgcXVlcnk6Jywgcm91dGVyLnF1ZXJ5KTtcblxuICAgICAgaWYgKGNvZGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXhjaGFuZ2luZyBjb2RlIGZvciBhY2Nlc3MgdG9rZW4uLi4nKTtcbiAgICAgICAgICBjb25zdCB0b2tlbkRhdGEgPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbihjb2RlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnQWNjZXNzIHRva2VuIHJlY2VpdmVkOicsIHRva2VuRGF0YS5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Nwb3RpZnlfYWNjZXNzX3Rva2VuJywgdG9rZW5EYXRhLmFjY2Vzc190b2tlbik7IC8vIENoYW5nZWQgdG8gc2Vzc2lvblN0b3JhZ2VcbiAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBhdXRoZW50aWNhdGlvbjonLCBlcnJvcik7XG4gICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBoYW5kbGVBdXRoKCk7XG4gIH0sIFtyb3V0ZXIucXVlcnldKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+QXV0aGVudGljYXRpbmcuLi48L2gxPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsbGJhY2s7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZ2V0QWNjZXNzVG9rZW4iLCJDYWxsYmFjayIsInJvdXRlciIsImhhbmRsZUF1dGgiLCJjb2RlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwidG9rZW5EYXRhIiwiYWNjZXNzX3Rva2VuIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaCIsImVycm9yIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/callback.js\n");

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAccessToken\": () => (/* binding */ getAccessToken),\n/* harmony export */   \"getAuthorizeUrl\": () => (/* binding */ getAuthorizeUrl)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ \"query-string\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst clientId = \"83cabe8ccb85435b9ad3c8cb2e83d111\";\nconst clientSecret = \"b6bbd78d38404ce994dafb616a0d4aee\";\nconst redirectUri = \"http://localhost:3000/callback\";\nconst getAuthorizeUrl = ()=>{\n    const params = {\n        client_id: clientId,\n        response_type: \"code\",\n        redirect_uri: redirectUri,\n        show_dialog: true,\n        scope: \"user-top-read\"\n    };\n    const authorizeUrl = `https://accounts.spotify.com/authorize?${query_string__WEBPACK_IMPORTED_MODULE_1___default().stringify(params)}`;\n    return authorizeUrl;\n};\nconst getAccessToken = async (code)=>{\n    const tokenEndpoint = \"https://accounts.spotify.com/api/token\";\n    const requestBody = {\n        client_id: clientId,\n        client_secret: clientSecret,\n        grant_type: \"authorization_code\",\n        code,\n        redirect_uri: redirectUri\n    };\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(tokenEndpoint, query_string__WEBPACK_IMPORTED_MODULE_1___default().stringify(requestBody), {\n            headers: {\n                \"Content-Type\": \"application/x-www-form-urlencoded\"\n            }\n        });\n        return response.data;\n    } catch (error) {\n        console.error(\"Error during token exchange:\", error);\n        throw error;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBRXZDLE1BQU1FLFFBQVEsR0FBR0Msa0NBQTZCO0FBQzlDLE1BQU1HLFlBQVksR0FBR0gsa0NBQWlDO0FBQ3RELE1BQU1LLFdBQVcsR0FBR0wsZ0NBQWdDO0FBRTdDLE1BQU1PLGVBQWUsR0FBRyxJQUFNO0lBQ25DLE1BQU1DLE1BQU0sR0FBRztRQUNiQyxTQUFTLEVBQUVWLFFBQVE7UUFDbkJXLGFBQWEsRUFBRSxNQUFNO1FBQ3JCQyxZQUFZLEVBQUVOLFdBQVc7UUFDekJPLFdBQVcsRUFBRSxJQUFJO1FBQ2pCQyxLQUFLLEVBQUUsZUFBZTtLQUN2QjtJQUVELE1BQU1DLFlBQVksR0FBRyxDQUFDLHVDQUF1QyxFQUFFaEIsNkRBQXFCLENBQUNVLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFOUYsT0FBT00sWUFBWSxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUVLLE1BQU1FLGNBQWMsR0FBRyxPQUFPQyxJQUFJLEdBQUs7SUFDMUMsTUFBTUMsYUFBYSxHQUFHLHdDQUF3QztJQUU5RCxNQUFNQyxXQUFXLEdBQUc7UUFDbEJWLFNBQVMsRUFBRVYsUUFBUTtRQUNuQnFCLGFBQWEsRUFBRWpCLFlBQVk7UUFDM0JrQixVQUFVLEVBQUUsb0JBQW9CO1FBQ2hDSixJQUFJO1FBQ0pOLFlBQVksRUFBRU4sV0FBVztLQUMxQjtJQUVELElBQUk7UUFDRixNQUFNaUIsUUFBUSxHQUFHLE1BQU16QixpREFBVSxDQUFDcUIsYUFBYSxFQUFFcEIsNkRBQXFCLENBQUNxQixXQUFXLENBQUMsRUFBRTtZQUNuRkssT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxtQ0FBbUM7YUFDcEQ7U0FDRixDQUFDO1FBRUYsT0FBT0YsUUFBUSxDQUFDRyxJQUFJLENBQUM7SUFDdkIsRUFBRSxPQUFPQyxLQUFLLEVBQUU7UUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsOEJBQThCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1FBQ3JELE1BQU1BLEtBQUssQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0anMtYXBwLy4vdXRpbHMvYXV0aC5qcz9lYjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcblxuY29uc3QgY2xpZW50SWQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9JRDtcbmNvbnN0IGNsaWVudFNlY3JldCA9IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX1NFQ1JFVDtcbmNvbnN0IHJlZGlyZWN0VXJpID0gcHJvY2Vzcy5lbnYuU1BPVElGWV9SRURJUkVDVF9VUkk7XG5cbmV4cG9ydCBjb25zdCBnZXRBdXRob3JpemVVcmwgPSAoKSA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBjbGllbnRfaWQ6IGNsaWVudElkLFxuICAgIHJlc3BvbnNlX3R5cGU6ICdjb2RlJyxcbiAgICByZWRpcmVjdF91cmk6IHJlZGlyZWN0VXJpLFxuICAgIHNob3dfZGlhbG9nOiB0cnVlLCBcbiAgICBzY29wZTogJ3VzZXItdG9wLXJlYWQnLFxuICB9O1xuXG4gIGNvbnN0IGF1dGhvcml6ZVVybCA9IGBodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2F1dGhvcml6ZT8ke3F1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpfWA7XG5cbiAgcmV0dXJuIGF1dGhvcml6ZVVybDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBY2Nlc3NUb2tlbiA9IGFzeW5jIChjb2RlKSA9PiB7XG4gICAgY29uc3QgdG9rZW5FbmRwb2ludCA9ICdodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlbic7XG4gIFxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xuICAgICAgY2xpZW50X2lkOiBjbGllbnRJZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IGNsaWVudFNlY3JldCxcbiAgICAgIGdyYW50X3R5cGU6ICdhdXRob3JpemF0aW9uX2NvZGUnLFxuICAgICAgY29kZSxcbiAgICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmksXG4gICAgfTtcbiAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh0b2tlbkVuZHBvaW50LCBxdWVyeVN0cmluZy5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHRva2VuIGV4Y2hhbmdlOicsIGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfTtcbiAgXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJxdWVyeVN0cmluZyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIlNQT1RJRllfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiU1BPVElGWV9DTElFTlRfU0VDUkVUIiwicmVkaXJlY3RVcmkiLCJTUE9USUZZX1JFRElSRUNUX1VSSSIsImdldEF1dGhvcml6ZVVybCIsInBhcmFtcyIsImNsaWVudF9pZCIsInJlc3BvbnNlX3R5cGUiLCJyZWRpcmVjdF91cmkiLCJzaG93X2RpYWxvZyIsInNjb3BlIiwiYXV0aG9yaXplVXJsIiwic3RyaW5naWZ5IiwiZ2V0QWNjZXNzVG9rZW4iLCJjb2RlIiwidG9rZW5FbmRwb2ludCIsInJlcXVlc3RCb2R5IiwiY2xpZW50X3NlY3JldCIsImdyYW50X3R5cGUiLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/auth.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/callback.js"));
module.exports = __webpack_exports__;

})();