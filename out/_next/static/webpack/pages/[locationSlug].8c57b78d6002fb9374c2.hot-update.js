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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HawkerCenter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_BannerTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/BannerTop */ \"./components/BannerTop.tsx\");\n/* harmony import */ var components_RatioContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/RatioContainer */ \"./components/RatioContainer.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/[locationSlug]/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.createStyles)({\n    ratioContainer: {\n      boxShadow: \"3px 6px 4px -2px rgba(0,0,0,0.62)\"\n    },\n    stall: {\n      transition: \"transform 0.2s\",\n      \"& > a > div\": {\n        borderColor: theme.palette.common.black\n      },\n      \"&:hover\": {\n        transform: \"translateY(-\".concat(theme.spacing(3), \"px)\"),\n        color: theme.palette.primary.main,\n        \"& > a > div\": {\n          boxShadow: \"3px 0px 4px -2px rgba(0,0,0,0.62)\"\n        }\n      }\n    }\n  });\n});\nvar __N_SSG = true;\nfunction HawkerCenter(_ref) {\n  _s();\n\n  var _this = this;\n\n  var locationData = _ref.locationData,\n      locationSlug = _ref.locationSlug;\n  var classes = useStyles();\n  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n  var isSmall = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default)(theme.breakpoints.up(\"sm\"));\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, locationData.name)), __jsx(components_BannerTop__WEBPACK_IMPORTED_MODULE_3__.default, {\n    image: locationData.images[0].link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, locationData.name))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    fixed: true,\n    className: \"pt-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n    container: true,\n    spacing: isSmall ? 8 : 4,\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, locationData.stalls.map(function (stall, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n      item: true,\n      xs: 12,\n      sm: 4,\n      md: 3,\n      key: i,\n      className: classes.stall,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 13\n      }\n    }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/\".concat(locationSlug, \"/\").concat(stall.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }\n    }, __jsx(components_RatioContainer__WEBPACK_IMPORTED_MODULE_4__.default, {\n      className: classes.ratioContainer,\n      percentage: isSmall ? \"100%\" : \"56.25%\",\n      style: {\n        background: \"url(\".concat(stall.images[0].link, \") no-repeat center\"),\n        backgroundSize: \"cover\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 19\n      }\n    }), __jsx(\"div\", {\n      className: \"text-center mt-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 19\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n      variant: \"h6\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 21\n      }\n    }, stall.name)))));\n  }))));\n}\n\n_s(HawkerCenter, \"J6zGm7J/AIsByPJc+PIH8oIG+8s=\", false, function () {\n  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c = HawkerCenter;\n\nvar _c;\n\n$RefreshReg$(_c, \"HawkerCenter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvY2F0aW9uU2x1Z10vaW5kZXgudHN4PzA0YWIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicmF0aW9Db250YWluZXIiLCJib3hTaGFkb3ciLCJzdGFsbCIsInRyYW5zaXRpb24iLCJib3JkZXJDb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJibGFjayIsInRyYW5zZm9ybSIsInNwYWNpbmciLCJjb2xvciIsInByaW1hcnkiLCJtYWluIiwiSGF3a2VyQ2VudGVyIiwibG9jYXRpb25EYXRhIiwibG9jYXRpb25TbHVnIiwiY2xhc3NlcyIsInVzZVRoZW1lIiwiaXNTbWFsbCIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsInVwIiwibmFtZSIsImltYWdlcyIsImxpbmsiLCJzdGFsbHMiLCJtYXAiLCJpIiwic2x1ZyIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBTUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxrQkFBYyxFQUFFO0FBQ2RDLGVBQVMsRUFBRTtBQURHLEtBREw7QUFJWEMsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUUsZ0JBRFA7QUFFTCxxQkFBZTtBQUNiQyxtQkFBVyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkM7QUFEckIsT0FGVjtBQU1MLGlCQUFXO0FBQ1RDLGlCQUFTLHdCQUFpQlYsS0FBSyxDQUFDVyxPQUFOLENBQWMsQ0FBZCxDQUFqQixRQURBO0FBRVRDLGFBQUssRUFBRVosS0FBSyxDQUFDTyxPQUFOLENBQWNNLE9BQWQsQ0FBc0JDLElBRnBCO0FBSVQsdUJBQWU7QUFDYlgs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QUE7QUFBQSxPQUEwQjVCLEtBQUssQ0FBQ29CLElBQWhDLENBREYsQ0FURixDQURGLENBREYsQ0FEdUI7QUFBQSxHQUF4QixDQURILENBREYsQ0FkRixDQURGO0FBd0NEOztHQWhEdUJULFk7VUFJTmpCLFMsRUFDRnFCLDhELEVBQ0VFLG9FOzs7S0FOTU4sWSIsImZpbGUiOiIuL3BhZ2VzL1tsb2NhdGlvblNsdWddL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7XG4gIG1ha2VTdHlsZXMsXG4gIGNyZWF0ZVN0eWxlcyxcbiAgVGhlbWUsXG4gIHVzZVRoZW1lLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgQmFubmVyVG9wIGZyb20gXCJjb21wb25lbnRzL0Jhbm5lclRvcFwiO1xuaW1wb3J0IFJhdGlvQ29udGFpbmVyIGZyb20gXCJjb21wb25lbnRzL1JhdGlvQ29udGFpbmVyXCI7XG5cbmltcG9ydCB7IExvY2F0aW9uc1NlcnZpY2UgfSBmcm9tIFwibW9kdWxlcy9sb2NhdGlvbnMvbG9jYXRpb25zLnNlcnZpY2VcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIm1vZHVsZXMvbG9jYXRpb25zL2VudGl0aWVzL2xvY2F0aW9uLmVudGl0eVwiO1xuaW1wb3J0IHsgZW50aXR5VG9PYmplY3QgfSBmcm9tIFwibGliL3V0aWxzL2VudGl0eS10by1vYmplY3QudXRpbFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcmF0aW9Db250YWluZXI6IHtcbiAgICAgIGJveFNoYWRvdzogXCIzcHggNnB4IDRweCAtMnB4IHJnYmEoMCwwLDAsMC42MilcIixcbiAgICB9LFxuICAgIHN0YWxsOiB7XG4gICAgICB0cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjJzXCIsXG4gICAgICBcIiYgPiBhID4gZGl2XCI6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxuICAgICAgfSxcblxuICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtJHt0aGVtZS5zcGFjaW5nKDMpfXB4KWAsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcblxuICAgICAgICBcIiYgPiBhID4gZGl2XCI6IHtcbiAgICAgICAgICBib3hTaGFkb3c6IFwiM3B4IDBweCA0cHggLTJweCByZ2JhKDAsMCwwLDAuNjIpXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgSGF3a2VyQ2VudGVyUHJvcHMge1xuICBsb2NhdGlvbkRhdGE6IExvY2F0aW9uO1xuICBsb2NhdGlvblNsdWc6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGF3a2VyQ2VudGVyKHtcbiAgbG9jYXRpb25EYXRhLFxuICBsb2NhdGlvblNsdWcsXG59OiBIYXdrZXJDZW50ZXJQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNTbWFsbCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57bG9jYXRpb25EYXRhLm5hbWV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCYW5uZXJUb3AgaW1hZ2U9e2xvY2F0aW9uRGF0YS5pbWFnZXNbMF0ubGlua30+XG4gICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICBtYXhXaWR0aD1cIm1kXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGgtZnVsbCB0ZXh0LWNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICAgIHtsb2NhdGlvbkRhdGEubmFtZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9CYW5uZXJUb3A+XG4gICAgICA8Q29udGFpbmVyIGZpeGVkIGNsYXNzTmFtZT1cInB0LTE2XCI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc1NtYWxsID8gOCA6IDR9IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7bG9jYXRpb25EYXRhLnN0YWxscy5tYXAoKHN0YWxsLCBpKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezR9IG1kPXszfSBrZXk9e2l9IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGFsbH0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtsb2NhdGlvblNsdWd9LyR7c3RhbGwuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxSYXRpb0NvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucmF0aW9Db250YWluZXJ9XG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U9e2lzU21hbGwgPyBcIjEwMCVcIiA6IFwiNTYuMjUlXCJ9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYHVybCgke3N0YWxsLmltYWdlc1swXS5saW5rfSkgbm8tcmVwZWF0IGNlbnRlcmAsXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID48L1JhdGlvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntzdGFsbC5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jIChsb2NhdGlvblNsdWcpID0+IHtcbiAgY29uc3QgbG9jYXRpb25zU2VydmljZSA9IGF3YWl0IExvY2F0aW9uc1NlcnZpY2UuYnVpbGQoKTtcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgbG9jYXRpb25zU2VydmljZS5maW5kQWxsKCk7XG5cbiAgY29uc3QgcGF0aHMgPSBsb2NhdGlvbnMubWFwKChsb2NhdGlvbikgPT4gKHtcbiAgICBwYXJhbXM6IHsgbG9jYXRpb25TbHVnOiBsb2NhdGlvbi5zbHVnIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBsb2NhdGlvbnNTZXJ2aWNlID0gYXdhaXQgTG9jYXRpb25zU2VydmljZS5idWlsZCgpO1xuICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBsb2NhdGlvbnNTZXJ2aWNlLmZpbmRPbmVEZWVwKFxuICAgIHBhcmFtcy5sb2NhdGlvblNsdWcgYXMgc3RyaW5nXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbG9jYXRpb25EYXRhOiBlbnRpdHlUb09iamVjdChsb2NhdGlvbkRhdGEpLFxuICAgICAgbG9jYXRpb25TbHVnOiBwYXJhbXMubG9jYXRpb25TbHVnLFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[locationSlug]/index.tsx\n");

/***/ })

});