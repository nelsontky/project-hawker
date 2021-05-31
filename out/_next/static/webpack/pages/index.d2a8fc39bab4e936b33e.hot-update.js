/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AppHero.tsx":
/*!********************************!*\
  !*** ./components/AppHero.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AppHero; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var components_ImageLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ImageLink */ \"./components/ImageLink.tsx\");\n/* harmony import */ var components_RotateAnimateImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/RotateAnimateImage */ \"./components/RotateAnimateImage.tsx\");\n/* harmony import */ var components_ProgressiveImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ProgressiveImage */ \"./components/ProgressiveImage.tsx\");\n/* harmony import */ var components_ScrollDownIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ScrollDownIndicator */ \"./components/ScrollDownIndicator.tsx\");\n/* harmony import */ var lib_hooks_use_progressive_image_hook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/hooks/use-progressive-image.hook */ \"./lib/hooks/use-progressive-image.hook.ts\");\n/* harmony import */ var constants_images_and_compressed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/images-and-compressed */ \"./constants/images-and-compressed.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/app/components/AppHero.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);\n\n\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.createStyles)({\n    root: {\n      position: \"relative\",\n      minHeight: \"80vh\",\n      display: \"flex\",\n      justifyContent: \"center\",\n      flexDirection: \"column\",\n      paddingTop: theme.spacing(2),\n      paddingBottom: theme.spacing(2)\n    },\n    background: function background(props) {\n      return {\n        position: \"absolute\",\n        top: 0,\n        height: \"100%\",\n        width: \"100%\",\n        zIndex: -1,\n        background: \"no-repeat center\",\n        backgroundImage: \"linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(\".concat(props.src, \")\"),\n        backgroundSize: \"cover\",\n        filter: props.blur ? \"blur(8px)\" : \"none\",\n        transition: \"filter 0.2s ease-out\"\n      };\n    },\n    logo: {\n      position: \"absolute\",\n      top: 0,\n      left: \"50%\",\n      transform: \"translate(-50%, -50%)\"\n    },\n    content: {\n      display: \"flex\",\n      flexDirection: \"column\",\n      justifyContent: \"center\",\n      position: \"relative\",\n      backgroundColor: \"white\",\n      borderRadius: \"40px\",\n      padding: theme.spacing(8),\n      paddingTop: theme.spacing(20),\n      paddingBottom: theme.spacing(32),\n      textAlign: \"justify\"\n    },\n    contribute: {\n      position: \"absolute\",\n      bottom: 0,\n      left: \"50%\",\n      transform: \"translate(-50%, 25%)\",\n      width: 300\n    },\n    scrollDown: {\n      position: \"fixed\",\n      bottom: theme.spacing(2),\n      left: \"50%\",\n      transform: \"translateX(-50%)\"\n    }\n  });\n});\nvar IMAGE_LINK = constants_images_and_compressed__WEBPACK_IMPORTED_MODULE_7__.IMAGES_AND_COMPRESSED.appHeroBg.link;\nvar COMPRESSED_BASE64 = constants_images_and_compressed__WEBPACK_IMPORTED_MODULE_7__.IMAGES_AND_COMPRESSED.appHeroBg.compressedBase64;\nfunction AppHero() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0),\n      _React$useState2 = (0,_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      arrowOpacity = _React$useState2[0],\n      setArrowOpacity = _React$useState2[1];\n\n  var _useProgressiveImage = (0,lib_hooks_use_progressive_image_hook__WEBPACK_IMPORTED_MODULE_6__.useProgressiveImage)({\n    src: IMAGE_LINK,\n    compressedSrc: COMPRESSED_BASE64\n  }),\n      src = _useProgressiveImage.src,\n      blur = _useProgressiveImage.blur;\n\n  var classes = useStyles({\n    src: src,\n    blur: blur\n  });\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {\n    if (window.scrollY === 0) {\n      setArrowOpacity(1);\n    }\n\n    var PIXEL_TO_DISAPPEAR = 100;\n\n    var changeOpacity = function changeOpacity() {\n      var opacity = (PIXEL_TO_DISAPPEAR - window.scrollY) / 100;\n      setArrowOpacity(opacity);\n    };\n\n    document.addEventListener(\"scroll\", changeOpacity);\n    return function () {\n      document.removeEventListener(\"scroll\", changeOpacity);\n    };\n  }, []);\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.background,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n    container: true,\n    className: \"h-full py-10\",\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n    item: true,\n    xs: 3,\n    className: \"hidden md:flex pr-20 pl-4 flex-col justify-evenly\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 9\n    }\n  }, __jsx(components_RotateAnimateImage__WEBPACK_IMPORTED_MODULE_3__.default, {\n    origin: \"30% 0%\",\n    angle: \"5\",\n    src: \"/images/hawkermain01.png\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }), __jsx(components_RotateAnimateImage__WEBPACK_IMPORTED_MODULE_3__.default, {\n    origin: \"60% 0%\",\n    angle: \"-10\",\n    src: \"/images/hawkermain02.png\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n    item: true,\n    xs: 10,\n    md: 6,\n    className: \"flex flex-col justify-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.content,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 11\n    }\n  }, __jsx(components_ProgressiveImage__WEBPACK_IMPORTED_MODULE_4__.default, {\n    className: classes.logo,\n    src: constants_images_and_compressed__WEBPACK_IMPORTED_MODULE_7__.IMAGES_AND_COMPRESSED.appHeroHeader.link,\n    compressedBase64: constants_images_and_compressed__WEBPACK_IMPORTED_MODULE_7__.IMAGES_AND_COMPRESSED.appHeroHeader.compressedBase64,\n    width: constants_images_and_compressed__WEBPACK_IMPORTED_MODULE_7__.IMAGES_AND_COMPRESSED.appHeroHeader.width,\n    height: constants_images_and_compressed__WEBPACK_IMPORTED_MODULE_7__.IMAGES_AND_COMPRESSED.appHeroHeader.height,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 13\n    }\n  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n    className: \"mb-4 text-lg sm:text-xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 13\n    }\n  }, \"is a passion project aiming to be a\", \" \", __jsx(\"span\", {\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 15\n    }\n  }, \"consolidated place to list all hawkers and their stories.\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n    className: \"mb-4 text-lg sm:text-xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 13\n    }\n  }, \"We are also working on\", \" \", __jsx(\"span\", {\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  }, \"helping to future-proof these hawkers (e.g. by being on listed online and on delivery apps).\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n    className: \"mb-4 text-lg sm:text-xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 13\n    }\n  }, \"But we can't do this alone. We need the help of all hawker supporters to bring these hawkers to light.\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Typography, {\n    className: \"font-bold text-lg sm:text-xl\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 13\n    }\n  }, \"Help us reach out to them and let their stories be heard.\"), __jsx(\"div\", {\n    className: classes.contribute,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 157,\n      columnNumber: 13\n    }\n  }, __jsx(components_ImageLink__WEBPACK_IMPORTED_MODULE_2__.default, {\n    src: \"/images/icons/contribute.png\",\n    href: \"http://projecthawker.com/submit\",\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 158,\n      columnNumber: 15\n    }\n  }))), __jsx(\"div\", {\n    className: classes.scrollDown,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 11\n    }\n  }, __jsx(components_ScrollDownIndicator__WEBPACK_IMPORTED_MODULE_5__.default, {\n    style: {\n      opacity: arrowOpacity,\n      width: \"3rem\",\n      height: \"3rem\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {\n    item: true,\n    xs: 3,\n    className: \"hidden md:flex pl-20 pr-4 flex-col justify-evenly\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 9\n    }\n  }, __jsx(components_RotateAnimateImage__WEBPACK_IMPORTED_MODULE_3__.default, {\n    origin: \"55% 0%\",\n    angle: \"-2\",\n    src: \"/images/hawkermain03.png\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 11\n    }\n  }), __jsx(components_RotateAnimateImage__WEBPACK_IMPORTED_MODULE_3__.default, {\n    origin: \"35% 0%\",\n    angle: \"7\",\n    src: \"/images/hawkermain04.png\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(AppHero, \"G5fz5ug54sET22/QbIyNoLNwxUc=\", false, function () {\n  return [lib_hooks_use_progressive_image_hook__WEBPACK_IMPORTED_MODULE_6__.useProgressiveImage, useStyles];\n});\n\n_c = AppHero;\n\nvar _c;\n\n$RefreshReg$(_c, \"AppHero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBIZXJvLnRzeD85OGYzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJwb3NpdGlvbiIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nVG9wIiwic3BhY2luZyIsInBhZGRpbmdCb3R0b20iLCJiYWNrZ3JvdW5kIiwicHJvcHMiLCJ0b3AiLCJoZWlnaHQiLCJ3aWR0aCIsInpJbmRleCIsImJhY2tncm91bmRJbWFnZSIsInNyYyIsImJhY2tncm91bmRTaXplIiwiZmlsdGVyIiwiYmx1ciIsInRyYW5zaXRpb24iLCJsb2dvIiwibGVmdCIsInRyYW5zZm9ybSIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiY29udHJpYnV0ZSIsImJvdHRvbSIsInNjcm9sbERvd24iLCJJTUFHRV9MSU5LIiwiSU1BR0VTX0FORF9DT01QUkVTU0VEIiwiQ09NUFJFU1NFRF9CQVNFNjQiLCJBcHBIZXJvIiwiUmVhY3QiLCJhcnJvd09wYWNpdHkiLCJzZXRBcnJvd09wYWNpdHkiLCJ1c2VQcm9ncmVzc2l2ZUltYWdlIiwiY29tcHJlc3NlZFNyYyIsImNsYXNzZXMiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiUElYRUxfVE9fRElTQVBQRUFSIiwiY2hhbmdlT3BhY2l0eSIsIm9wYWNpdHkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFvQixVQUFDQyxLQUFEO0FBQUEsU0FDOUND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L0FwcEhlcm8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuaW1wb3J0IEltYWdlTGluayBmcm9tIFwiY29tcG9uZW50cy9JbWFnZUxpbmtcIjtcbmltcG9ydCBSb3RhdGVBbmltYXRlSW1hZ2UgZnJvbSBcImNvbXBvbmVudHMvUm90YXRlQW5pbWF0ZUltYWdlXCI7XG5pbXBvcnQgUHJvZ3Jlc3NpdmVJbWFnZSBmcm9tIFwiY29tcG9uZW50cy9Qcm9ncmVzc2l2ZUltYWdlXCI7XG5pbXBvcnQgU2Nyb2xsRG93bkluZGljYXRvciBmcm9tIFwiY29tcG9uZW50cy9TY3JvbGxEb3duSW5kaWNhdG9yXCI7XG5cbmltcG9ydCB7IHVzZVByb2dyZXNzaXZlSW1hZ2UgfSBmcm9tIFwibGliL2hvb2tzL3VzZS1wcm9ncmVzc2l2ZS1pbWFnZS5ob29rXCI7XG5pbXBvcnQgeyBJTUFHRVNfQU5EX0NPTVBSRVNTRUQgfSBmcm9tIFwiY29uc3RhbnRzL2ltYWdlcy1hbmQtY29tcHJlc3NlZFwiO1xuXG5pbnRlcmZhY2UgU3R5bGVQcm9wcyB7XG4gIGJsdXI6IGJvb2xlYW47XG4gIHNyYzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzPFRoZW1lLCBTdHlsZVByb3BzPigodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBtaW5IZWlnaHQ6IFwiODB2aFwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IChwcm9wcykgPT4gKHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB0b3A6IDAsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgekluZGV4OiAtMSxcblxuICAgICAgYmFja2dyb3VuZDogXCJuby1yZXBlYXQgY2VudGVyXCIsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkpLCB1cmwoJHtwcm9wcy5zcmN9KWAsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuXG4gICAgICBmaWx0ZXI6IHByb3BzLmJsdXIgPyBcImJsdXIoOHB4KVwiIDogXCJub25lXCIsXG4gICAgICB0cmFuc2l0aW9uOiBcImZpbHRlciAwLjJzIGVhc2Utb3V0XCIsXG4gICAgfSksXG4gICAgbG9nbzoge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCI0MHB4XCIsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygyMCksXG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMyKSxcbiAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXG4gICAgfSxcbiAgICBjb250cmlidXRlOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogXCI1MCVcIixcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgMjUlKVwiLFxuICAgICAgd2lkdGg6IDMwMCxcbiAgICB9LFxuICAgIHNjcm9sbERvd246IHtcbiAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIixcbiAgICB9LFxuICB9KVxuKTtcblxuY29uc3QgSU1BR0VfTElOSyA9IElNQUdFU19BTkRfQ09NUFJFU1NFRC5hcHBIZXJvQmcubGluaztcbmNvbnN0IENPTVBSRVNTRURfQkFTRTY0ID0gSU1BR0VTX0FORF9DT01QUkVTU0VELmFwcEhlcm9CZy5jb21wcmVzc2VkQmFzZTY0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBIZXJvKCkge1xuICBjb25zdCBbYXJyb3dPcGFjaXR5LCBzZXRBcnJvd09wYWNpdHldID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IHsgc3JjLCBibHVyIH0gPSB1c2VQcm9ncmVzc2l2ZUltYWdlKHtcbiAgICBzcmM6IElNQUdFX0xJTkssXG4gICAgY29tcHJlc3NlZFNyYzogQ09NUFJFU1NFRF9CQVNFNjQsXG4gIH0pO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgc3JjLCBibHVyIH0pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID09PSAwKSB7XG4gICAgICBzZXRBcnJvd09wYWNpdHkoMSk7XG4gICAgfVxuXG4gICAgY29uc3QgUElYRUxfVE9fRElTQVBQRUFSID0gMTAwO1xuICAgIGNvbnN0IGNoYW5nZU9wYWNpdHkgPSAoKSA9PiB7XG4gICAgICBjb25zdCBvcGFjaXR5ID0gKFBJWEVMX1RPX0RJU0FQUEVBUiAtIHdpbmRvdy5zY3JvbGxZKSAvIDEwMDtcbiAgICAgIHNldEFycm93T3BhY2l0eShvcGFjaXR5KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGFuZ2VPcGFjaXR5KTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoYW5nZU9wYWNpdHkpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH0gLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9XCJoLWZ1bGwgcHktMTBcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgaXRlbVxuICAgICAgICAgIHhzPXszfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IHByLTIwIHBsLTQgZmxleC1jb2wganVzdGlmeS1ldmVubHlcIlxuICAgICAgICA+XG4gICAgICAgICAgPFJvdGF0ZUFuaW1hdGVJbWFnZVxuICAgICAgICAgICAgb3JpZ2luPVwiMzAlIDAlXCJcbiAgICAgICAgICAgIGFuZ2xlPVwiNVwiXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hhd2tlcm1haW4wMS5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJvdGF0ZUFuaW1hdGVJbWFnZVxuICAgICAgICAgICAgb3JpZ2luPVwiNjAlIDAlXCJcbiAgICAgICAgICAgIGFuZ2xlPVwiLTEwXCJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaGF3a2VybWFpbjAyLnBuZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gbWQ9ezZ9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgIDxQcm9ncmVzc2l2ZUltYWdlXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfVxuICAgICAgICAgICAgICBzcmM9e0lNQUdFU19BTkRfQ09NUFJFU1NFRC5hcHBIZXJvSGVhZGVyLmxpbmt9XG4gICAgICAgICAgICAgIGNvbXByZXNzZWRCYXNlNjQ9e1xuICAgICAgICAgICAgICAgIElNQUdFU19BTkRfQ09NUFJFU1NFRC5hcHBIZXJvSGVhZGVyLmNvbXByZXNzZWRCYXNlNjRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aWR0aD17SU1BR0VTX0FORF9DT01QUkVTU0VELmFwcEhlcm9IZWFkZXIud2lkdGh9XG4gICAgICAgICAgICAgIGhlaWdodD17SU1BR0VTX0FORF9DT01QUkVTU0VELmFwcEhlcm9IZWFkZXIuaGVpZ2h0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1sZyBzbTp0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgIGlzIGEgcGFzc2lvbiBwcm9qZWN0IGFpbWluZyB0byBiZSBhe1wiIFwifVxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICBjb25zb2xpZGF0ZWQgcGxhY2UgdG8gbGlzdCBhbGwgaGF3a2VycyBhbmQgdGhlaXIgc3Rvcmllcy5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWxnIHNtOnRleHQteGxcIj5cbiAgICAgICAgICAgICAgV2UgYXJlIGFsc28gd29ya2luZyBvbntcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgaGVscGluZyB0byBmdXR1cmUtcHJvb2YgdGhlc2UgaGF3a2VycyAoZS5nLiBieSBiZWluZyBvbiBsaXN0ZWRcbiAgICAgICAgICAgICAgICBvbmxpbmUgYW5kIG9uIGRlbGl2ZXJ5IGFwcHMpLlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9XCJtYi00IHRleHQtbGcgc206dGV4dC14bFwiPlxuICAgICAgICAgICAgICBCdXQgd2UgY2FuJ3QgZG8gdGhpcyBhbG9uZS4gV2UgbmVlZCB0aGUgaGVscCBvZiBhbGwgaGF3a2VyXG4gICAgICAgICAgICAgIHN1cHBvcnRlcnMgdG8gYnJpbmcgdGhlc2UgaGF3a2VycyB0byBsaWdodC5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxnIHNtOnRleHQteGxcIj5cbiAgICAgICAgICAgICAgSGVscCB1cyByZWFjaCBvdXQgdG8gdGhlbSBhbmQgbGV0IHRoZWlyIHN0b3JpZXMgYmUgaGVhcmQuXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cmlidXRlfT5cbiAgICAgICAgICAgICAgPEltYWdlTGlua1xuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaWNvbnMvY29udHJpYnV0ZS5wbmdcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vcHJvamVjdGhhd2tlci5jb20vc3VibWl0XCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2Nyb2xsRG93bn0+XG4gICAgICAgICAgICB7LyogVE9ETzogd2lkdGggYW5kIGhlaWdodCBpbmNsdWRlZCBkdWUgdG8gdGFpbHdpbmQgYnVnICovfVxuICAgICAgICAgICAgPFNjcm9sbERvd25JbmRpY2F0b3JcbiAgICAgICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogYXJyb3dPcGFjaXR5LCB3aWR0aDogXCIzcmVtXCIsIGhlaWdodDogXCIzcmVtXCIgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBpdGVtXG4gICAgICAgICAgeHM9ezN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggcGwtMjAgcHItNCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Um90YXRlQW5pbWF0ZUltYWdlXG4gICAgICAgICAgICBvcmlnaW49XCI1NSUgMCVcIlxuICAgICAgICAgICAgYW5nbGU9XCItMlwiXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hhd2tlcm1haW4wMy5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJvdGF0ZUFuaW1hdGVJbWFnZVxuICAgICAgICAgICAgb3JpZ2luPVwiMzUlIDAlXCJcbiAgICAgICAgICAgIGFuZ2xlPVwiN1wiXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2hhd2tlcm1haW4wNC5wbmdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppHero.tsx\n");

/***/ })

});