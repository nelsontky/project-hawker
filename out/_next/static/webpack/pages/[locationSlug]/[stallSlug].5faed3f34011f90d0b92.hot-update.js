/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locationSlug]/[stallSlug]",{

/***/ "./pages/[locationSlug]/[stallSlug].tsx":
/*!**********************************************!*\
  !*** ./pages/[locationSlug]/[stallSlug].tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ StallPage; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_BannerTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/BannerTop */ \"./components/BannerTop.tsx\");\n/* harmony import */ var components_StallContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/StallContent */ \"./components/StallContent.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/[locationSlug]/[stallSlug].tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\nvar __N_SSG = true;\nfunction StallPage(_ref) {\n  var stallData = _ref.stallData;\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, stallData.name)), __jsx(components_BannerTop__WEBPACK_IMPORTED_MODULE_2__.default, {\n    image: stallData.images[0],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"relative h-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n    variant: \"h4\",\n    className: \"font-bold absolute top-4 left-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, stallData.stallNumber), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, stallData.name)))), __jsx(components_StallContent__WEBPACK_IMPORTED_MODULE_3__.default, {\n    stallData: stallData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }));\n}\n_c = StallPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"StallPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvY2F0aW9uU2x1Z10vW3N0YWxsU2x1Z10udHN4PzZmMWEiXSwibmFtZXMiOlsiU3RhbGxQYWdlIiwic3RhbGxEYXRhIiwibmFtZSIsImltYWdlcyIsInN0YWxsTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBWWUsU0FBU0EsU0FBVCxPQUFrRDtBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFDL0QsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSxTQUFTLENBQUNDLElBQWxCLENBREYsQ0FERixFQUlFLE1BQUMseURBQUQ7QUFBVyxTQUFLLEVBQUVELFNBQVMsQ0FBQ0UsTUFBVixDQUFpQixDQUFqQixDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLGlDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFNBQVMsQ0FBQ0csV0FEYixDQURGLEVBSUUsTUFBQyx3REFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsYUFBUyxFQUFDLGlEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLHlEQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBQyxXQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFNBQVMsQ0FBQ0MsSUFEYixDQUpGLENBSkYsQ0FERixDQUpGLEVBbUJFLE1BQUMsNERBQUQ7QUFBYyxhQUFTLEVBQUVELFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkYsQ0FERjtBQXVCRDtLQXhCdUJELFMiLCJmaWxlIjoiLi9wYWdlcy9bbG9jYXRpb25TbHVnXS9bc3RhbGxTbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBCYW5uZXJUb3AgZnJvbSBcImNvbXBvbmVudHMvQmFubmVyVG9wXCI7XG5pbXBvcnQgU3RhbGxDb250ZW50IGZyb20gXCJjb21wb25lbnRzL1N0YWxsQ29udGVudFwiO1xuXG5pbXBvcnQgeyBMb2NhdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIm1vZHVsZXMvbG9jYXRpb25zL2xvY2F0aW9ucy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdGFsbHNTZXJ2aWNlIH0gZnJvbSBcIm1vZHVsZXMvc3RhbGxzL3N0YWxscy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdGFsbCB9IGZyb20gXCJtb2R1bGVzL3N0YWxscy9lbnRpdGllcy9zdGFsbC5lbnRpdHlcIjtcblxuaW1wb3J0IHsgZW50aXR5VG9PYmplY3QgfSBmcm9tIFwibGliL3V0aWxzL2VudGl0eS10by1vYmplY3QudXRpbFwiO1xuXG5pbnRlcmZhY2UgU3RhbGxQYWdlUHJvcHMge1xuICBzdGFsbERhdGE6IFN0YWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFsbFBhZ2UoeyBzdGFsbERhdGEgfTogU3RhbGxQYWdlUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c3RhbGxEYXRhLm5hbWV9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxCYW5uZXJUb3AgaW1hZ2U9e3N0YWxsRGF0YS5pbWFnZXNbMF19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtZnVsbFwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBhYnNvbHV0ZSB0b3AtNCBsZWZ0LTRcIj5cbiAgICAgICAgICAgIHtzdGFsbERhdGEuc3RhbGxOdW1iZXJ9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgIG1heFdpZHRoPVwibWRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICB7c3RhbGxEYXRhLm5hbWV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CYW5uZXJUb3A+XG4gICAgICA8U3RhbGxDb250ZW50IHN0YWxsRGF0YT17c3RhbGxEYXRhfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKGxvY2F0aW9uU2x1ZykgPT4ge1xuICBjb25zdCBsb2NhdGlvbnNTZXJ2aWNlID0gYXdhaXQgTG9jYXRpb25zU2VydmljZS5idWlsZCgpO1xuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBsb2NhdGlvbnNTZXJ2aWNlLmZpbmRBbGwoKTtcbiAgY29uc3Qgc3RhbGxzU2VydmljZSA9IGF3YWl0IFN0YWxsc1NlcnZpY2UuYnVpbGQoKTtcblxuICBsZXQgcGF0aHMgPSBbXTtcbiAgZm9yIChjb25zdCBsb2NhdGlvbiBvZiBsb2NhdGlvbnMpIHtcbiAgICBjb25zdCBzdGFsbHMgPSBhd2FpdCBzdGFsbHNTZXJ2aWNlLmZpbmRBbGxTbHVncyhsb2NhdGlvbi5zbHVnKTtcbiAgICBmb3IgKGNvbnN0IHN0YWxsIG9mIHN0YWxscykge1xuICAgICAgcGF0aHMucHVzaCh7XG4gICAgICAgIHBhcmFtczogeyBsb2NhdGlvblNsdWc6IGxvY2F0aW9uLnNsdWcsIHN0YWxsU2x1Zzogc3RhbGwuc2x1ZyB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3Qgc3RhbGxzU2VydmljZSA9IGF3YWl0IFN0YWxsc1NlcnZpY2UuYnVpbGQoKTtcbiAgY29uc3Qgc3RhbGxEYXRhID0gYXdhaXQgc3RhbGxzU2VydmljZS5maW5kT25lRGVlcChcbiAgICBwYXJhbXMubG9jYXRpb25TbHVnIGFzIHN0cmluZyxcbiAgICBwYXJhbXMuc3RhbGxTbHVnIGFzIHN0cmluZ1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHN0YWxsRGF0YTogZW50aXR5VG9PYmplY3Qoc3RhbGxEYXRhKSxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[locationSlug]/[stallSlug].tsx\n");

/***/ })

});