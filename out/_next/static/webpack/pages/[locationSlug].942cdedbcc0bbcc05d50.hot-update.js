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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HawkerCenter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var components_StallLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/StallLink */ \"./components/StallLink.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/[locationSlug]/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.createStyles)({\n    stall: {\n      \"&:hover\": {\n        color: theme.palette.primary.main\n      }\n    }\n  });\n});\nvar __N_SSG = true;\nfunction HawkerCenter(_ref) {\n  _s();\n\n  var _this = this;\n\n  var locationData = _ref.locationData,\n      locationSlug = _ref.locationSlug;\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, locationData.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center pt-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, locationData.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    fixed: true,\n    className: \"py-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n    container: true,\n    spacing: 10,\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, locationData.stalls.map(function (stall, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n      item: true,\n      xs: 12,\n      sm: 6,\n      md: 4,\n      lg: 3,\n      key: i,\n      className: classes.stall,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 13\n      }\n    }, __jsx(components_StallLink__WEBPACK_IMPORTED_MODULE_2__.default, {\n      stall: stall,\n      locationSlug: locationSlug,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 15\n      }\n    }));\n  }))));\n}\n\n_s(HawkerCenter, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = HawkerCenter;\n\nvar _c;\n\n$RefreshReg$(_c, \"HawkerCenter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvY2F0aW9uU2x1Z10vaW5kZXgudHN4PzA0YWIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwic3RhbGwiLCJjb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIkhhd2tlckNlbnRlciIsImxvY2F0aW9uRGF0YSIsImxvY2F0aW9uU2x1ZyIsImNsYXNzZXMiLCJuYW1lIiwic3RhbGxzIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFXQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyxzRUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMLGlCQUFXO0FBQ1RDLGFBQUssRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDO0FBRHBCO0FBRE47QUFESSxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCOztBQVVlLFNBQVNDLFlBQVQsT0FHTztBQUFBOztBQUFBOztBQUFBLE1BRnBCQyxZQUVvQixRQUZwQkEsWUFFb0I7QUFBQSxNQURwQkMsWUFDb0IsUUFEcEJBLFlBQ29CO0FBQ3BCLE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6QjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUVUsWUFBWSxDQUFDRyxJQUFyQixDQURGLENBREYsRUFLRSxNQUFDLHdEQUFEO0FBQ0UsWUFBUSxFQUFDLElBRFg7QUFFRSxhQUFTLEVBQUMsc0RBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMseURBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLFdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsWUFBWSxDQUFDRyxJQURoQixDQUpGLENBTEYsRUFjRSxNQUFDLHdEQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFpQixhQUFTLEVBQUMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLEVBQXpCO0FBQTZCLFdBQU8sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFlBQVksQ0FBQ0ksTUFBYixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ1gsS0FBRCxFQUFRWSxDQUFSO0FBQUEsV0FDdkIsTUFBQyxtREFBRDtBQUNFLFVBQUksTUFETjtBQUVFLFFBQUUsRUFBRSxFQUZOO0FBR0UsUUFBRSxFQUFFLENBSE47QUFJRSxRQUFFLEVBQUUsQ0FKTjtBQUtFLFFBQUUsRUFBRSxDQUxOO0FBTUUsU0FBRyxFQUFFQSxDQU5QO0FBT0UsZUFBUyxFQUFFSixPQUFPLENBQUNSLEtBUHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTRSxNQUFDLHlEQUFEO0FBQVcsV0FBSyxFQUFFQSxLQUFsQjtBQUF5QixrQkFBWSxFQUFFTyxZQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEYsQ0FEdUI7QUFBQSxHQUF4QixDQURILENBREYsQ0FkRixDQURGO0FBa0NEOztHQXhDdUJGLFk7VUFJTlQsUzs7O0tBSk1TLFkiLCJmaWxlIjoiLi9wYWdlcy9bbG9jYXRpb25TbHVnXS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbXBvcnQgQmFubmVyVG9wIGZyb20gXCJjb21wb25lbnRzL0Jhbm5lclRvcFwiO1xuaW1wb3J0IFN0YWxsTGluayBmcm9tIFwiY29tcG9uZW50cy9TdGFsbExpbmtcIjtcblxuaW1wb3J0IHsgTG9jYXRpb25zU2VydmljZSB9IGZyb20gXCJtb2R1bGVzL2xvY2F0aW9ucy9sb2NhdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwibW9kdWxlcy9sb2NhdGlvbnMvZW50aXRpZXMvbG9jYXRpb24uZW50aXR5XCI7XG5pbXBvcnQgeyBlbnRpdHlUb09iamVjdCB9IGZyb20gXCJsaWIvdXRpbHMvZW50aXR5LXRvLW9iamVjdC51dGlsXCI7XG5cbmludGVyZmFjZSBIYXdrZXJDZW50ZXJQcm9wcyB7XG4gIGxvY2F0aW9uRGF0YTogTG9jYXRpb247XG4gIGxvY2F0aW9uU2x1Zzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgc3RhbGw6IHtcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhd2tlckNlbnRlcih7XG4gIGxvY2F0aW9uRGF0YSxcbiAgbG9jYXRpb25TbHVnLFxufTogSGF3a2VyQ2VudGVyUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2xvY2F0aW9uRGF0YS5uYW1lfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7LyogPEJhbm5lclRvcCBpbWFnZT17bG9jYXRpb25EYXRhLmltYWdlc1swXX0+ICovfVxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBtYXhXaWR0aD1cIm1kXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgdGV4dC1jZW50ZXIgcHQtOFwiXG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgIHtsb2NhdGlvbkRhdGEubmFtZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICB7LyogPC9CYW5uZXJUb3A+ICovfVxuICAgICAgPENvbnRhaW5lciBmaXhlZCBjbGFzc05hbWU9XCJweS0xNlwiPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MTB9IGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7bG9jYXRpb25EYXRhLnN0YWxscy5tYXAoKHN0YWxsLCBpKSA9PiAoXG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgIHhzPXsxMn1cbiAgICAgICAgICAgICAgc209ezZ9XG4gICAgICAgICAgICAgIG1kPXs0fVxuICAgICAgICAgICAgICBsZz17M31cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3RhbGx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTdGFsbExpbmsgc3RhbGw9e3N0YWxsfSBsb2NhdGlvblNsdWc9e2xvY2F0aW9uU2x1Z30gLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAobG9jYXRpb25TbHVnKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uc1NlcnZpY2UgPSBhd2FpdCBMb2NhdGlvbnNTZXJ2aWNlLmJ1aWxkKCk7XG4gIGNvbnN0IGxvY2F0aW9ucyA9IGF3YWl0IGxvY2F0aW9uc1NlcnZpY2UuZmluZEFsbCgpO1xuXG4gIGNvbnN0IHBhdGhzID0gbG9jYXRpb25zLm1hcCgobG9jYXRpb24pID0+ICh7XG4gICAgcGFyYW1zOiB7IGxvY2F0aW9uU2x1ZzogbG9jYXRpb24uc2x1ZyB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgbG9jYXRpb25zU2VydmljZSA9IGF3YWl0IExvY2F0aW9uc1NlcnZpY2UuYnVpbGQoKTtcbiAgY29uc3QgbG9jYXRpb25EYXRhID0gYXdhaXQgbG9jYXRpb25zU2VydmljZS5maW5kT25lRGVlcChcbiAgICBwYXJhbXMubG9jYXRpb25TbHVnIGFzIHN0cmluZ1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxvY2F0aW9uRGF0YTogZW50aXR5VG9PYmplY3QobG9jYXRpb25EYXRhKSxcbiAgICAgIGxvY2F0aW9uU2x1ZzogcGFyYW1zLmxvY2F0aW9uU2x1ZyxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[locationSlug]/index.tsx\n");

/***/ })

});