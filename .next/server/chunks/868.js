"use strict";
exports.id = 868;
exports.ids = [868];
exports.modules = {

/***/ 7669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const NavItem = ({ text , href , active  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href ?? "",
        className: `nav__item ${active ? "active" : ""}`,
        children: text
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);


/***/ }),

/***/ 1868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Components_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/images/smallLogo2.png
/* harmony default export */ const smallLogo2 = ({"src":"/_next/static/media/smallLogo2.58324a85.png","height":399,"width":400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEWUkcKdmr9US922traxsLe8vLSMicOPi8W2trW7u7Rwac+urbmurbhcU9jExrB8d82NicRzbc2oprtkXdWlo724uLVmX9NuaNKrqrqiobw6L+h+eseBfM2y8/iuAAAAFXRSTlP++/pgt7T8iIfA+4/4+7Wztf5Hh4euZxx6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVQImQXBBwKAMAgEsOsEWrcCdfz/nSbgnEspkiCuN4CO9Ylzqy9hs2heK2EZsL3ZiawTQggEUdXhX0di5ovo+AFjBQLzLPEZAwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./pages/Components/NavItem.jsx
var NavItem = __webpack_require__(7669);
;// CONCATENATED MODULE: ./pages/Components/Navbar.jsx






const MENU_LIST = [
    {
        text: "Home",
        href: "/Homepage"
    },
    {
        text: "About",
        href: "/AboutMe"
    },
    {
        text: "Projects",
        href: "/Projects"
    }
];
const Navbar = ()=>{
    const [navActive, setNavActive] = (0,external_react_.useState)(null);
    const [activeIdx, setActiveIdx] = (0,external_react_.useState)(-1);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: `nav`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "navlogo",
                        src: smallLogo2,
                        alt: "Picture of the author",
                        width: "350px",
                        height: "300px"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>setNavActive(!navActive),
                    className: `nav__menu-bar`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${navActive ? "active" : ""} nav__menu-list`,
                    children: MENU_LIST.map((menu, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>{
                                setActiveIdx(idx);
                                setNavActive(false);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NavItem["default"], {
                                active: activeIdx === idx,
                                ...menu
                            })
                        }, menu.text))
                })
            ]
        })
    });
};
/* harmony default export */ const Components_Navbar = (Navbar);


/***/ })

};
;