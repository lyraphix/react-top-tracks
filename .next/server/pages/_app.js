"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);




function MyApp({ Component , pageProps  }) {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.createTheme)({
        palette: {
            mode: "dark",
            primary: {
                main: "#8791F9",
                mainPage: "#47A85A",
                light: "#cad6ff",
                dark: "#394221",
                text: "white"
            },
            secondary: {
                main: "#9BB9D8",
                light: "#92AFCE",
                dark: "#0C233B",
                text: "white"
            },
            third: {
                main: "#A02937",
                light: "#F0D7DA",
                dark: "#3D1519",
                text: "white"
            },
            forth: {
                main: "#DD7C22",
                light: "#E9BF98",
                dark: "#54361A",
                text: "white"
            },
            divider: "#ffffff",
            info: {
                main: "#ffffff"
            },
            background: {
                default: "#19191B"
            },
            login: "#8791F9"
        },
        background: {
            default: "#191722",
            paper: "#000000"
        },
        spacing: 8,
        shape: {
            borderRadius: 4
        },
        typography: {
            h1: {
                fontFamily: `"Gill Sans", sans-serif`,
                fontWeight: 350,
                fontSize: "1.7rem"
            },
            h2: {
                fontSize: "2rem",
                fontWeight: 150,
                fontStretch: "condensed"
            },
            iconFont: {
                fontWeight: 700,
                fontSize: "1.3rem"
            },
            text: {
                fontWeight: 20,
                fontSize: "1rem"
            },
            bottom: {
                fontWeight: 20,
                fontSize: "1.5rem"
            },
            h2Large: {
                fontSize: "4rem",
                fontWeight: 150,
                fontStretch: "condensed"
            }
        }
    });
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        if (user) {
            sessionStorage.setItem("user", JSON.stringify(user));
        } else {
            const storedUser = sessionStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }, [
        user
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Musaic"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/landing/logo.png",
                        type: "image/png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                        children: `
            body {
              margin: 0;
            }
          `
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                theme: theme,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps,
                    user: user,
                    setUser: setUser
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8375));
module.exports = __webpack_exports__;

})();