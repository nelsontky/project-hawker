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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ StallPage; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var components_BannerTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/BannerTop */ \"./components/BannerTop.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/[locationSlug]/[stallSlug].tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\nvar __N_SSG = true;\nfunction StallPage(_ref) {\n  var stallData = _ref.stallData;\n  console.log(stallData.images);\n  return __jsx(components_BannerTop__WEBPACK_IMPORTED_MODULE_1__.default, {\n    image: \"/\" + stallData.location.images[0].link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"relative h-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n    variant: \"h3\",\n    className: \"absolute top-2 left-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"#\" + stallData.stallNumber), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, stallData.name))));\n}\n_c = StallPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"StallPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvY2F0aW9uU2x1Z10vW3N0YWxsU2x1Z10udHN4PzZmMWEiXSwibmFtZXMiOlsiU3RhbGxQYWdlIiwic3RhbGxEYXRhIiwiY29uc29sZSIsImxvZyIsImltYWdlcyIsImxvY2F0aW9uIiwibGluayIsInN0YWxsTnVtYmVyIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7O0FBWWUsU0FBU0EsU0FBVCxPQUFrRDtBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFDL0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixTQUFTLENBQUNHLE1BQXRCO0FBQ0EsU0FDRSxNQUFDLHlEQUFEO0FBQVcsU0FBSyxFQUFFLE1BQU1ILFNBQVMsQ0FBQ0ksUUFBVixDQUFtQkQsTUFBbkIsQ0FBMEIsQ0FBMUIsRUFBNkJFLElBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUMsdUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxNQUFNTCxTQUFTLENBQUNNLFdBRG5CLENBREYsRUFJRSxNQUFDLHdEQUFEO0FBQ0UsWUFBUSxFQUFDLElBRFg7QUFFRSxhQUFTLEVBQUMsaURBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMseURBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLFdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sU0FBUyxDQUFDTyxJQURiLENBSkYsQ0FKRixDQURGLENBREY7QUFpQkQ7S0FuQnVCUixTIiwiZmlsZSI6Ii4vcGFnZXMvW2xvY2F0aW9uU2x1Z10vW3N0YWxsU2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgQmFubmVyVG9wIGZyb20gXCJjb21wb25lbnRzL0Jhbm5lclRvcFwiO1xuXG5pbXBvcnQgeyBMb2NhdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIm1vZHVsZXMvbG9jYXRpb25zL2xvY2F0aW9ucy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdGFsbHNTZXJ2aWNlIH0gZnJvbSBcIm1vZHVsZXMvc3RhbGxzL3N0YWxscy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdGFsbCB9IGZyb20gXCJtb2R1bGVzL3N0YWxscy9lbnRpdGllcy9zdGFsbC5lbnRpdHlcIjtcblxuaW1wb3J0IHsgZW50aXR5VG9PYmplY3QgfSBmcm9tIFwibGliL3V0aWxzL2VudGl0eS10by1vYmplY3QudXRpbFwiO1xuXG5pbnRlcmZhY2UgU3RhbGxQYWdlUHJvcHMge1xuICBzdGFsbERhdGE6IFN0YWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFsbFBhZ2UoeyBzdGFsbERhdGEgfTogU3RhbGxQYWdlUHJvcHMpIHtcbiAgY29uc29sZS5sb2coc3RhbGxEYXRhLmltYWdlcyk7XG4gIHJldHVybiAoXG4gICAgPEJhbm5lclRvcCBpbWFnZT17XCIvXCIgKyBzdGFsbERhdGEubG9jYXRpb24uaW1hZ2VzWzBdLmxpbmt9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLWZ1bGxcIj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgbGVmdC0yXCI+XG4gICAgICAgICAge1wiI1wiICsgc3RhbGxEYXRhLnN0YWxsTnVtYmVyfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICBtYXhXaWR0aD1cIm1kXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGgtZnVsbCB0ZXh0LWNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICAgIHtzdGFsbERhdGEubmFtZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9CYW5uZXJUb3A+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAobG9jYXRpb25TbHVnKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uc1NlcnZpY2UgPSBhd2FpdCBMb2NhdGlvbnNTZXJ2aWNlLmJ1aWxkKCk7XG4gIGNvbnN0IGxvY2F0aW9ucyA9IGF3YWl0IGxvY2F0aW9uc1NlcnZpY2UuZmluZEFsbCgpO1xuICBjb25zdCBzdGFsbHNTZXJ2aWNlID0gYXdhaXQgU3RhbGxzU2VydmljZS5idWlsZCgpO1xuXG4gIGxldCBwYXRocyA9IFtdO1xuICBmb3IgKGNvbnN0IGxvY2F0aW9uIG9mIGxvY2F0aW9ucykge1xuICAgIGNvbnN0IHN0YWxscyA9IGF3YWl0IHN0YWxsc1NlcnZpY2UuZmluZEFsbFNsdWdzKGxvY2F0aW9uLnNsdWcpO1xuICAgIGZvciAoY29uc3Qgc3RhbGwgb2Ygc3RhbGxzKSB7XG4gICAgICBwYXRocy5wdXNoKHtcbiAgICAgICAgcGFyYW1zOiB7IGxvY2F0aW9uU2x1ZzogbG9jYXRpb24uc2x1Zywgc3RhbGxTbHVnOiBzdGFsbC5zbHVnIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBzdGFsbHNTZXJ2aWNlID0gYXdhaXQgU3RhbGxzU2VydmljZS5idWlsZCgpO1xuICBjb25zdCBzdGFsbERhdGEgPSBhd2FpdCBzdGFsbHNTZXJ2aWNlLmZpbmRPbmVEZWVwKFxuICAgIHBhcmFtcy5sb2NhdGlvblNsdWcgYXMgc3RyaW5nLFxuICAgIHBhcmFtcy5zdGFsbFNsdWcgYXMgc3RyaW5nXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc3RhbGxEYXRhOiBlbnRpdHlUb09iamVjdChzdGFsbERhdGEpLFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[locationSlug]/[stallSlug].tsx\n");

/***/ })

});