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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ StallPage; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var components_BannerTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/BannerTop */ \"./components/BannerTop.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/[locationSlug]/[stallSlug].tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\nvar __N_SSG = true;\nfunction StallPage(_ref) {\n  var stallData = _ref.stallData;\n  console.log(stallData.images);\n  return __jsx(components_BannerTop__WEBPACK_IMPORTED_MODULE_1__.default, {\n    image: \"/\" + stallData.location.images[0].link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"relative h-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n    variant: \"h4\",\n    className: \"font-bold absolute top-4 left-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"#\" + stallData.stallNumber), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, stallData.name))));\n}\n_c = StallPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"StallPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvY2F0aW9uU2x1Z10vW3N0YWxsU2x1Z10udHN4PzZmMWEiXSwibmFtZXMiOlsiU3RhbGxQYWdlIiwic3RhbGxEYXRhIiwiY29uc29sZSIsImxvZyIsImltYWdlcyIsImxvY2F0aW9uIiwibGluayIsInN0YWxsTnVtYmVyIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7O0FBYWUsU0FBU0EsU0FBVCxPQUFrRDtBQUFBLE1BQTdCQyxTQUE2QixRQUE3QkEsU0FBNkI7QUFDL0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixTQUFTLENBQUNHLE1BQXRCO0FBQ0EsU0FDRSxNQUFDLHlEQUFEO0FBQVcsU0FBSyxFQUFFLE1BQU1ILFNBQVMsQ0FBQ0ksUUFBVixDQUFtQkQsTUFBbkIsQ0FBMEIsQ0FBMUIsRUFBNkJFLElBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUMsaUNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxNQUFNTCxTQUFTLENBQUNNLFdBRG5CLENBREYsRUFJRSxNQUFDLHdEQUFEO0FBQ0UsWUFBUSxFQUFDLElBRFg7QUFFRSxhQUFTLEVBQUMsaURBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMseURBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLFdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sU0FBUyxDQUFDTyxJQURiLENBSkYsQ0FKRixDQURGLENBREY7QUFpQkQ7S0FuQnVCUixTIiwiZmlsZSI6Ii4vcGFnZXMvW2xvY2F0aW9uU2x1Z10vW3N0YWxsU2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgQmFubmVyVG9wIGZyb20gXCJjb21wb25lbnRzL0Jhbm5lclRvcFwiO1xuaW1wb3J0IFN0YWxsQ29udGVudCBmcm9tIFwiY29tcG9uZW50cy9TdGFsbENvbnRlbnRcIjtcblxuaW1wb3J0IHsgTG9jYXRpb25zU2VydmljZSB9IGZyb20gXCJtb2R1bGVzL2xvY2F0aW9ucy9sb2NhdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgU3RhbGxzU2VydmljZSB9IGZyb20gXCJtb2R1bGVzL3N0YWxscy9zdGFsbHMuc2VydmljZVwiO1xuaW1wb3J0IHsgU3RhbGwgfSBmcm9tIFwibW9kdWxlcy9zdGFsbHMvZW50aXRpZXMvc3RhbGwuZW50aXR5XCI7XG5cbmltcG9ydCB7IGVudGl0eVRvT2JqZWN0IH0gZnJvbSBcImxpYi91dGlscy9lbnRpdHktdG8tb2JqZWN0LnV0aWxcIjtcblxuaW50ZXJmYWNlIFN0YWxsUGFnZVByb3BzIHtcbiAgc3RhbGxEYXRhOiBTdGFsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhbGxQYWdlKHsgc3RhbGxEYXRhIH06IFN0YWxsUGFnZVByb3BzKSB7XG4gIGNvbnNvbGUubG9nKHN0YWxsRGF0YS5pbWFnZXMpO1xuICByZXR1cm4gKFxuICAgIDxCYW5uZXJUb3AgaW1hZ2U9e1wiL1wiICsgc3RhbGxEYXRhLmxvY2F0aW9uLmltYWdlc1swXS5saW5rfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsXCI+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBhYnNvbHV0ZSB0b3AtNCBsZWZ0LTRcIj5cbiAgICAgICAgICB7XCIjXCIgKyBzdGFsbERhdGEuc3RhbGxOdW1iZXJ9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG1heFdpZHRoPVwibWRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1mdWxsIHRleHQtY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAge3N0YWxsRGF0YS5uYW1lfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Jhbm5lclRvcD5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzOiBHZXRTdGF0aWNQYXRocyA9IGFzeW5jIChsb2NhdGlvblNsdWcpID0+IHtcbiAgY29uc3QgbG9jYXRpb25zU2VydmljZSA9IGF3YWl0IExvY2F0aW9uc1NlcnZpY2UuYnVpbGQoKTtcbiAgY29uc3QgbG9jYXRpb25zID0gYXdhaXQgbG9jYXRpb25zU2VydmljZS5maW5kQWxsKCk7XG4gIGNvbnN0IHN0YWxsc1NlcnZpY2UgPSBhd2FpdCBTdGFsbHNTZXJ2aWNlLmJ1aWxkKCk7XG5cbiAgbGV0IHBhdGhzID0gW107XG4gIGZvciAoY29uc3QgbG9jYXRpb24gb2YgbG9jYXRpb25zKSB7XG4gICAgY29uc3Qgc3RhbGxzID0gYXdhaXQgc3RhbGxzU2VydmljZS5maW5kQWxsU2x1Z3MobG9jYXRpb24uc2x1Zyk7XG4gICAgZm9yIChjb25zdCBzdGFsbCBvZiBzdGFsbHMpIHtcbiAgICAgIHBhdGhzLnB1c2goe1xuICAgICAgICBwYXJhbXM6IHsgbG9jYXRpb25TbHVnOiBsb2NhdGlvbi5zbHVnLCBzdGFsbFNsdWc6IHN0YWxsLnNsdWcgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHN0YWxsc1NlcnZpY2UgPSBhd2FpdCBTdGFsbHNTZXJ2aWNlLmJ1aWxkKCk7XG4gIGNvbnN0IHN0YWxsRGF0YSA9IGF3YWl0IHN0YWxsc1NlcnZpY2UuZmluZE9uZURlZXAoXG4gICAgcGFyYW1zLmxvY2F0aW9uU2x1ZyBhcyBzdHJpbmcsXG4gICAgcGFyYW1zLnN0YWxsU2x1ZyBhcyBzdHJpbmdcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzdGFsbERhdGE6IGVudGl0eVRvT2JqZWN0KHN0YWxsRGF0YSksXG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[locationSlug]/[stallSlug].tsx\n");

/***/ })

});