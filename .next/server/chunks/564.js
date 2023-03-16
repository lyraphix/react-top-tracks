"use strict";
exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ getAuthorizeUrl),
/* harmony export */   "h": () => (/* binding */ getAccessToken)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);


const clientId = "83cabe8ccb85435b9ad3c8cb2e83d111";
const clientSecret = "b6bbd78d38404ce994dafb616a0d4aee";
const redirectUri = "http://localhost:3000/callback";
const getAuthorizeUrl = ()=>{
    const params = {
        client_id: clientId,
        response_type: "code",
        redirect_uri: redirectUri,
        show_dialog: true,
        scope: "user-top-read"
    };
    const authorizeUrl = `https://accounts.spotify.com/authorize?${query_string__WEBPACK_IMPORTED_MODULE_1___default().stringify(params)}`;
    return authorizeUrl;
};
const getAccessToken = async (code)=>{
    const tokenEndpoint = "https://accounts.spotify.com/api/token";
    const requestBody = {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri
    };
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(tokenEndpoint, query_string__WEBPACK_IMPORTED_MODULE_1___default().stringify(requestBody), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error during token exchange:", error);
        throw error;
    }
};


/***/ })

};
;