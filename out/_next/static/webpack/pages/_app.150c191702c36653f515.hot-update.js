/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/theme.ts":
/*!**********************!*\
  !*** ./lib/theme.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({\n  spacing: 4,\n  typography: {\n    fontFamily: \"'Poppins', sans-serif\"\n  },\n  palette: {\n    primary: {\n      main: \"#FF9F80\"\n    },\n    secondary: {\n      main: \"#80E0FF\"\n    }\n  }\n});\ntheme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.responsiveFontSizes)(theme);\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLnRzPzc0MjkiXSwibmFtZXMiOlsidGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsInNwYWNpbmciLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsInJlc3BvbnNpdmVGb250U2l6ZXMiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUEsSUFBSUEsS0FBSyxHQUFHQyx3RUFBYyxDQUFDO0FBQ3pCQyxTQUFPLEVBQUUsQ0FEZ0I7QUFFekJDLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUU7QUFERixHQUZhO0FBS3pCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFO0FBQUVDLFVBQUksRUFBRTtBQUFSLEtBREY7QUFFUEMsYUFBUyxFQUFFO0FBQUVELFVBQUksRUFBRTtBQUFSO0FBRko7QUFMZ0IsQ0FBRCxDQUExQjtBQVVBUCxLQUFLLEdBQUdTLDZFQUFtQixDQUFDVCxLQUFELENBQTNCO0FBRUEsK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9saWIvdGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSwgcmVzcG9uc2l2ZUZvbnRTaXplcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxubGV0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBzcGFjaW5nOiA0LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogXCInUG9wcGlucycsIHNhbnMtc2VyaWZcIixcbiAgfSxcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHsgbWFpbjogXCIjRkY5RjgwXCIgfSxcbiAgICBzZWNvbmRhcnk6IHsgbWFpbjogXCIjODBFMEZGXCIgfSxcbiAgfSxcbn0pO1xudGhlbWUgPSByZXNwb25zaXZlRm9udFNpemVzKHRoZW1lKTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/theme.ts\n");

/***/ })

});