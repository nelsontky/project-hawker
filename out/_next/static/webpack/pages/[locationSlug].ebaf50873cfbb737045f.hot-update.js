/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locationSlug]",{

/***/ "./components/SquareLinkGrid.tsx":
/*!***************************************!*\
  !*** ./components/SquareLinkGrid.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SquareLinkGrid; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var components_SquareLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/SquareLink */ \"./components/SquareLink.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/components/SquareLinkGrid.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\nfunction SquareLinkGrid(_ref) {\n  _s();\n\n  var _this = this;\n\n  var items = _ref.items;\n  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n  var isSmall = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__.default)(theme.breakpoints.up(\"sm\"));\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n    container: true,\n    spacing: isSmall ? 10 : 6,\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, items.map(function (item, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n      item: true,\n      xs: 6,\n      md: 4,\n      lg: 3,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }\n    }, __jsx(components_SquareLink__WEBPACK_IMPORTED_MODULE_1__.default, {\n      href: item.slug,\n      image: item.image,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }\n    }, item.name));\n  }));\n}\n\n_s(SquareLinkGrid, \"EpQ9wk9sWr7IOjlkl/QcZciwwro=\", false, function () {\n  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n_c = SquareLinkGrid;\n\nvar _c;\n\n$RefreshReg$(_c, \"SquareLinkGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcXVhcmVMaW5rR3JpZC50c3g/YzE4MSJdLCJuYW1lcyI6WyJTcXVhcmVMaW5rR3JpZCIsIml0ZW1zIiwidGhlbWUiLCJ1c2VUaGVtZSIsImlzU21hbGwiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1hcCIsIml0ZW0iLCJpIiwic2x1ZyIsImltYWdlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBUWUsU0FBU0EsY0FBVCxPQUF3RDtBQUFBOztBQUFBOztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFDckUsTUFBTUMsS0FBSyxHQUFHQyxrRUFBUSxFQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ0gsS0FBSyxDQUFDSSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELENBQTdCO0FBRUEsU0FDRSxNQUFDLG1EQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRUgsT0FBTyxHQUFHLEVBQUgsR0FBUSxDQUF4QztBQUEyQyxXQUFPLEVBQUMsUUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxLQUFLLENBQUNPLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNULE1BQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsQ0FBZjtBQUFrQixRQUFFLEVBQUUsQ0FBdEI7QUFBeUIsUUFBRSxFQUFFLENBQTdCO0FBQWdDLFNBQUcsRUFBRUEsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMERBQUQ7QUFBWSxVQUFJLEVBQUVELElBQUksQ0FBQ0UsSUFBdkI7QUFBNkIsV0FBSyxFQUFFRixJQUFJLENBQUNHLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0gsSUFBSSxDQUFDSSxJQURSLENBREYsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQURGO0FBV0Q7O0dBZnVCYixjO1VBQ1JHLDhELEVBQ0VFLG9FOzs7S0FGTUwsYyIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3F1YXJlTGlua0dyaWQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiO1xuXG5pbXBvcnQgU3F1YXJlTGluayBmcm9tIFwiY29tcG9uZW50cy9TcXVhcmVMaW5rXCI7XG5cbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcIm1vZHVsZXMvaW1hZ2VzL2VudGl0aWVzL2ltYWdlLmVudGl0eVwiO1xuXG5pbnRlcmZhY2UgU3F1YXJlTGlua0dyaWRQcm9wcyB7XG4gIGl0ZW1zOiB7IHNsdWc6IHN0cmluZzsgaW1hZ2U6IEltYWdlOyBuYW1lOiBzdHJpbmcgfVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcXVhcmVMaW5rR3JpZCh7IGl0ZW1zIH06IFNxdWFyZUxpbmtHcmlkUHJvcHMpIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc1NtYWxsID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpKTtcblxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc1NtYWxsID8gMTAgOiA2fSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IG1kPXs0fSBsZz17M30ga2V5PXtpfT5cbiAgICAgICAgICA8U3F1YXJlTGluayBocmVmPXtpdGVtLnNsdWd9IGltYWdlPXtpdGVtLmltYWdlfT5cbiAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgPC9TcXVhcmVMaW5rPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICApKX1cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SquareLinkGrid.tsx\n");

/***/ }),

/***/ "./pages/[locationSlug]/index.tsx":
/*!****************************************!*\
  !*** ./pages/[locationSlug]/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HawkerCenter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var components_SquareLinkGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/SquareLinkGrid */ \"./components/SquareLinkGrid.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/[locationSlug]/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.createStyles)({\n    root: {\n      backgroundColor: theme.palette.primary.main\n    }\n  });\n});\nvar __N_SSG = true;\nfunction HawkerCenter(_ref) {\n  _s();\n\n  var locationData = _ref.locationData,\n      locationSlug = _ref.locationSlug;\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, locationData.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center pt-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, locationData.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    fixed: true,\n    className: \"py-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, __jsx(components_SquareLinkGrid__WEBPACK_IMPORTED_MODULE_2__.default, {\n    items: locationData.stalls.map(function (stall) {\n      return {\n        slug: \"/\".concat(stall.location.slug, \"/\").concat(stall.slug),\n        image: stall.images[0],\n        name: stall.name\n      };\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(HawkerCenter, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = HawkerCenter;\n\nvar _c;\n\n$RefreshReg$(_c, \"HawkerCenter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvY2F0aW9uU2x1Z10vaW5kZXgudHN4PzA0YWIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIkhhd2tlckNlbnRlciIsImxvY2F0aW9uRGF0YSIsImxvY2F0aW9uU2x1ZyIsImNsYXNzZXMiLCJuYW1lIiwic3RhbGxzIiwibWFwIiwic3RhbGwiLCJzbHVnIiwibG9jYXRpb24iLCJpbWFnZSIsImltYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyxzRUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxxQkFBZSxFQUFFSCxLQUFLLENBQUNJLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkM7QUFEbkM7QUFESyxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCOztBQVFlLFNBQVNDLFlBQVQsT0FHTztBQUFBOztBQUFBLE1BRnBCQyxZQUVvQixRQUZwQkEsWUFFb0I7QUFBQSxNQURwQkMsWUFDb0IsUUFEcEJBLFlBQ29CO0FBQ3BCLE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVZLE9BQU8sQ0FBQ1IsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUU0sWUFBWSxDQUFDRyxJQUFyQixDQURGLENBREYsRUFJRSxNQUFDLHdEQUFEO0FBQ0UsWUFBUSxFQUFDLElBRFg7QUFFRSxhQUFTLEVBQUMsdURBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMseURBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLFdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsWUFBWSxDQUFDRyxJQURoQixDQUpGLENBSkYsRUFZRSxNQUFDLHdEQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFpQixhQUFTLEVBQUMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFDRSxTQUFLLEVBQUVILFlBQVksQ0FBQ0ksTUFBYixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsS0FBRDtBQUFBLGFBQVk7QUFDekNDLFlBQUksYUFBTUQsS0FBSyxDQUFDRSxRQUFOLENBQWVELElBQXJCLGNBQTZCRCxLQUFLLENBQUNDLElBQW5DLENBRHFDO0FBRXpDRSxhQUFLLEVBQUVILEtBQUssQ0FBQ0ksTUFBTixDQUFhLENBQWIsQ0FGa0M7QUFHekNQLFlBQUksRUFBRUcsS0FBSyxDQUFDSDtBQUg2QixPQUFaO0FBQUEsS0FBeEIsQ0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FaRixDQURGO0FBd0JEOztHQTlCdUJKLFk7VUFJTlQsUzs7O0tBSk1TLFkiLCJmaWxlIjoiLi9wYWdlcy9bbG9jYXRpb25TbHVnXS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbXBvcnQgU3F1YXJlTGlua0dyaWQgZnJvbSBcImNvbXBvbmVudHMvU3F1YXJlTGlua0dyaWRcIjtcblxuaW1wb3J0IHsgTG9jYXRpb25zU2VydmljZSB9IGZyb20gXCJtb2R1bGVzL2xvY2F0aW9ucy9sb2NhdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwibW9kdWxlcy9sb2NhdGlvbnMvZW50aXRpZXMvbG9jYXRpb24uZW50aXR5XCI7XG5pbXBvcnQgeyBlbnRpdHlUb09iamVjdCB9IGZyb20gXCJsaWIvdXRpbHMvZW50aXR5LXRvLW9iamVjdC51dGlsXCI7XG5cbmludGVyZmFjZSBIYXdrZXJDZW50ZXJQcm9wcyB7XG4gIGxvY2F0aW9uRGF0YTogTG9jYXRpb247XG4gIGxvY2F0aW9uU2x1Zzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGF3a2VyQ2VudGVyKHtcbiAgbG9jYXRpb25EYXRhLFxuICBsb2NhdGlvblNsdWcsXG59OiBIYXdrZXJDZW50ZXJQcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2xvY2F0aW9uRGF0YS5uYW1lfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIG1heFdpZHRoPVwibWRcIlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGgtZnVsbCB0ZXh0LWNlbnRlciBwdC0xMFwiXG4gICAgICA+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgIHtsb2NhdGlvbkRhdGEubmFtZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Q29udGFpbmVyIGZpeGVkIGNsYXNzTmFtZT1cInB5LTE2XCI+XG4gICAgICAgIDxTcXVhcmVMaW5rR3JpZFxuICAgICAgICAgIGl0ZW1zPXtsb2NhdGlvbkRhdGEuc3RhbGxzLm1hcCgoc3RhbGwpID0+ICh7XG4gICAgICAgICAgICBzbHVnOiBgLyR7c3RhbGwubG9jYXRpb24uc2x1Z30vJHtzdGFsbC5zbHVnfWAsXG4gICAgICAgICAgICBpbWFnZTogc3RhbGwuaW1hZ2VzWzBdLFxuICAgICAgICAgICAgbmFtZTogc3RhbGwubmFtZSxcbiAgICAgICAgICB9KSl9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jIChsb2NhdGlvblNsdWcpID0+IHtcbiAgY29uc3QgbG9jYXRpb25zU2VydmljZSA9IGF3YWl0IExvY2F0aW9uc1NlcnZpY2UuYnVpbGQoKTtcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgbG9jYXRpb25zU2VydmljZS5maW5kQWxsKCk7XG5cbiAgY29uc3QgcGF0aHMgPSBsb2NhdGlvbnMubWFwKChsb2NhdGlvbikgPT4gKHtcbiAgICBwYXJhbXM6IHsgbG9jYXRpb25TbHVnOiBsb2NhdGlvbi5zbHVnIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBsb2NhdGlvbnNTZXJ2aWNlID0gYXdhaXQgTG9jYXRpb25zU2VydmljZS5idWlsZCgpO1xuICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBsb2NhdGlvbnNTZXJ2aWNlLmZpbmRPbmVEZWVwKFxuICAgIHBhcmFtcy5sb2NhdGlvblNsdWcgYXMgc3RyaW5nXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbG9jYXRpb25EYXRhOiBlbnRpdHlUb09iamVjdChsb2NhdGlvbkRhdGEpLFxuICAgICAgbG9jYXRpb25TbHVnOiBwYXJhbXMubG9jYXRpb25TbHVnLFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[locationSlug]/index.tsx\n");

/***/ })

});