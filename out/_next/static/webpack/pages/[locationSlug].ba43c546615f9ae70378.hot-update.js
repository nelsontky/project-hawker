/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locationSlug]",{

/***/ "./pages/[locationSlug]/index.tsx":
/*!****************************************!*\
  !*** ./pages/[locationSlug]/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HawkerCenter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_BannerTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/BannerTop */ \"./components/BannerTop.tsx\");\n/* harmony import */ var components_RatioContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/RatioContainer */ \"./components/RatioContainer.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/[locationSlug]/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.createStyles)({\n    ratioContainer: {\n      boxShadow: \"3px 6px 4px -2px rgba(0,0,0,0.62)\",\n      transition: \"transform 0.2s, box-shadow 0.2s\",\n      \"&:hover\": {\n        transform: \"translateY(-\".concat(theme.spacing(3), \"px)\"),\n        boxShadow: \"3px 18px 4px -2px rgba(0,0,0,0.62)\"\n      }\n    },\n    stall: {\n      \"&:hover\": {\n        color: theme.palette.primary.main\n      }\n    }\n  });\n});\nvar __N_SSG = true;\nfunction HawkerCenter(_ref) {\n  _s();\n\n  var _this = this;\n\n  var locationData = _ref.locationData,\n      locationSlug = _ref.locationSlug;\n  var classes = useStyles();\n  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n  var isSmall = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default)(theme.breakpoints.up(\"sm\"));\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, locationData.name)), __jsx(components_BannerTop__WEBPACK_IMPORTED_MODULE_3__.default, {\n    image: locationData.images[0].link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, locationData.name))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    fixed: true,\n    className: \"pt-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n    container: true,\n    spacing: isSmall ? 12 : 4,\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, locationData.stalls.map(function (stall, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n      item: true,\n      xs: 12,\n      sm: 4,\n      md: 3,\n      key: i,\n      className: classes.stall,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 13\n      }\n    }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/\".concat(locationSlug, \"/\").concat(stall.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }\n    }, __jsx(components_RatioContainer__WEBPACK_IMPORTED_MODULE_4__.default, {\n      className: classes.ratioContainer,\n      percentage: isSmall ? \"100%\" : \"56.25%\",\n      style: {\n        background: \"url(\".concat(stall.images[0].link, \") no-repeat center\"),\n        backgroundSize: \"cover\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 19\n      }\n    }), __jsx(\"div\", {\n      className: \"text-center mt-4\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 19\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n      variant: \"h6\",\n      className: \"font-bold leading-none\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 21\n      }\n    }, stall.name)))));\n  }))));\n}\n\n_s(HawkerCenter, \"J6zGm7J/AIsByPJc+PIH8oIG+8s=\", false, function () {\n  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c = HawkerCenter;\n\nvar _c;\n\n$RefreshReg$(_c, \"HawkerCenter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvY2F0aW9uU2x1Z10vaW5kZXgudHN4PzA0YWIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicmF0aW9Db250YWluZXIiLCJib3hTaGFkb3ciLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwic3BhY2luZyIsInN0YWxsIiwiY29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJIYXdrZXJDZW50ZXIiLCJsb2NhdGlvbkRhdGEiLCJsb2NhdGlvblNsdWciLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJpc1NtYWxsIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJuYW1lIiwiaW1hZ2VzIiwibGluayIsInN0YWxscyIsIm1hcCIsImkiLCJzbHVnIiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFNQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyxzRUFBWSxDQUFDO0FBQ1hDLGtCQUFjLEVBQUU7QUFDZEMsZUFBUyxFQUFFLG1DQURHO0FBRWRDLGdCQUFVLEVBQUUsaUNBRkU7QUFJZCxpQkFBVztBQUNUQyxpQkFBUyx3QkFBaUJMLEtBQUssQ0FBQ00sT0FBTixDQUFjLENBQWQsQ0FBakIsUUFEQTtBQUVUSCxpQkFBUztBQUZBO0FBSkcsS0FETDtBQVVYSSxTQUFLLEVBQUU7QUFDTCxpQkFBVztBQUNUQyxhQUFLLEVBQUVSLEtBQUssQ0FBQ1MsT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQURwQjtBQUROO0FBVkksR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1Qjs7QUF3QmUsU0FBU0MsWUFBVCxPQUdPO0FBQUE7O0FBQUE7O0FBQUEsTUFGcEJDLFlBRW9C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QTBDRDs7R0FsRHVCVCxZO1VBSU5kLFMsRUFDRmtCLDhELEVBQ0VFLG9FOzs7S0FOTU4sWSIsImZpbGUiOiIuL3BhZ2VzL1tsb2NhdGlvblNsdWddL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7XG4gIG1ha2VTdHlsZXMsXG4gIGNyZWF0ZVN0eWxlcyxcbiAgVGhlbWUsXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgQmFubmVyVG9wIGZyb20gXCJjb21wb25lbnRzL0Jhbm5lclRvcFwiO1xuaW1wb3J0IFJhdGlvQ29udGFpbmVyIGZyb20gXCJjb21wb25lbnRzL1JhdGlvQ29udGFpbmVyXCI7XG5cbmltcG9ydCB7IExvY2F0aW9uc1NlcnZpY2UgfSBmcm9tIFwibW9kdWxlcy9sb2NhdGlvbnMvbG9jYXRpb25zLnNlcnZpY2VcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIm1vZHVsZXMvbG9jYXRpb25zL2VudGl0aWVzL2xvY2F0aW9uLmVudGl0eVwiO1xuaW1wb3J0IHsgZW50aXR5VG9PYmplY3QgfSBmcm9tIFwibGliL3V0aWxzL2VudGl0eS10by1vYmplY3QudXRpbFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcmF0aW9Db250YWluZXI6IHtcbiAgICAgIGJveFNoYWRvdzogXCIzcHggNnB4IDRweCAtMnB4IHJnYmEoMCwwLDAsMC42MilcIixcbiAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDAuMnMsIGJveC1zaGFkb3cgMC4yc1wiLFxuXG4gICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke3RoZW1lLnNwYWNpbmcoMyl9cHgpYCxcbiAgICAgICAgYm94U2hhZG93OiBgM3B4IDE4cHggNHB4IC0ycHggcmdiYSgwLDAsMCwwLjYyKWAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc3RhbGw6IHtcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBIYXdrZXJDZW50ZXJQcm9wcyB7XG4gIGxvY2F0aW9uRGF0YTogTG9jYXRpb247XG4gIGxvY2F0aW9uU2x1Zzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIYXdrZXJDZW50ZXIoe1xuICBsb2NhdGlvbkRhdGEsXG4gIGxvY2F0aW9uU2x1Zyxcbn06IEhhd2tlckNlbnRlclByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc1NtYWxsID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntsb2NhdGlvbkRhdGEubmFtZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJhbm5lclRvcCBpbWFnZT17bG9jYXRpb25EYXRhLmltYWdlc1swXS5saW5rfT5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG1heFdpZHRoPVwibWRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1mdWxsIHRleHQtY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAge2xvY2F0aW9uRGF0YS5uYW1lfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0Jhbm5lclRvcD5cbiAgICAgIDxDb250YWluZXIgZml4ZWQgY2xhc3NOYW1lPVwicHQtMTZcIj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e2lzU21hbGwgPyAxMiA6IDR9IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7bG9jYXRpb25EYXRhLnN0YWxscy5tYXAoKHN0YWxsLCBpKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9IG1kPXszfSBrZXk9e2l9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFsbH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtsb2NhdGlvblNsdWd9LyR7c3RhbGwuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxSYXRpb0NvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucmF0aW9Db250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U9e2lzU21hbGwgPyBcIjEwMCVcIiA6IFwiNTYuMjUlXCJ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3N0YWxsLmltYWdlc1swXS5saW5rfSkgbm8tcmVwZWF0IGNlbnRlcmAsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID48L1JhdGlvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhbGwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKGxvY2F0aW9uU2x1ZykgPT4ge1xuICBjb25zdCBsb2NhdGlvbnNTZXJ2aWNlID0gYXdhaXQgTG9jYXRpb25zU2VydmljZS5idWlsZCgpO1xuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBsb2NhdGlvbnNTZXJ2aWNlLmZpbmRBbGwoKTtcblxuICBjb25zdCBwYXRocyA9IGxvY2F0aW9ucy5tYXAoKGxvY2F0aW9uKSA9PiAoe1xuICAgIHBhcmFtczogeyBsb2NhdGlvblNsdWc6IGxvY2F0aW9uLnNsdWcgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uc1NlcnZpY2UgPSBhd2FpdCBMb2NhdGlvbnNTZXJ2aWNlLmJ1aWxkKCk7XG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGxvY2F0aW9uc1NlcnZpY2UuZmluZE9uZURlZXAoXG4gICAgcGFyYW1zLmxvY2F0aW9uU2x1ZyBhcyBzdHJpbmdcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsb2NhdGlvbkRhdGE6IGVudGl0eVRvT2JqZWN0KGxvY2F0aW9uRGF0YSksXG4gICAgICBsb2NhdGlvblNsdWc6IHBhcmFtcy5sb2NhdGlvblNsdWcsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[locationSlug]/index.tsx\n");

/***/ })

});