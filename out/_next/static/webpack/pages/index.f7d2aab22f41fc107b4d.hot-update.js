/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/RatioContainer.tsx":
/*!***************************************!*\
  !*** ./components/RatioContainer.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RatioContainer; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/app/components/RatioContainer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.createStyles)({\n    root: {\n      height: 0,\n      paddingTop: function paddingTop(props) {\n        return props.percentage;\n      },\n      // borderStyle: \"solid\",\n      // borderColor: theme.palette.common.white,\n      // borderWidth: theme.spacing(2),\n      boxShadow: theme.shadows[20]\n    }\n  });\n});\nfunction RatioContainer(_ref) {\n  _s();\n\n  var percentage = _ref.percentage,\n      className = _ref.className,\n      children = _ref.children,\n      rest = (0,_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, [\"percentage\", \"className\", \"children\"]);\n\n  var classes = useStyles({\n    percentage: percentage\n  });\n  return __jsx(\"div\", (0,_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)(classes.root, className)\n  }, rest, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }), children);\n}\n\n_s(RatioContainer, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = RatioContainer;\n\nvar _c;\n\n$RefreshReg$(_c, \"RatioContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRpb0NvbnRhaW5lci50c3g/NTkyOSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsInByb3BzIiwicGVyY2VudGFnZSIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJSYXRpb0NvbnRhaW5lciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicmVzdCIsImNsYXNzZXMiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQW9CLFVBQUNDLEtBQUQ7QUFBQSxTQUM5Q0Msc0VBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMsWUFBTSxFQUFFLENBREo7QUFFSkMsZ0JBQVUsRUFBRSxvQkFBQ0MsS0FBRDtBQUFBLGVBQVdBLEtBQUssQ0FBQ0MsVUFBakI7QUFBQSxPQUZSO0FBR0o7QUFDQTtBQUNBO0FBQ0FDLGVBQVMsRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWMsRUFBZDtBQU5QO0FBREssR0FBRCxDQURrQztBQUFBLENBQXBCLENBQTVCO0FBcUJlLFNBQVNDLGNBQVQsT0FLUztBQUFBOztBQUFBLE1BSnRCSCxVQUlzQixRQUp0QkEsVUFJc0I7QUFBQSxNQUh0QkksU0FHc0IsUUFIdEJBLFNBR3NCO0FBQUEsTUFGdEJDLFFBRXNCLFFBRnRCQSxRQUVzQjtBQUFBLE1BRG5CQyxJQUNtQjs7QUFDdEIsTUFBTUMsT0FBTyxHQUFHZixTQUFTLENBQUM7QUFBRVEsY0FBVSxFQUFWQTtBQUFGLEdBQUQsQ0FBekI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFUSw2Q0FBSSxDQUFDRCxPQUFPLENBQUNYLElBQVQsRUFBZVEsU0FBZjtBQUFwQixLQUFtREUsSUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNHRCxRQURILENBREY7QUFLRDs7R0FidUJGLGM7VUFNTlgsUzs7O0tBTk1XLGMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1JhdGlvQ29udGFpbmVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbnRlcmZhY2UgU3R5bGVQcm9wcyB7XG4gIHBlcmNlbnRhZ2U6IHN0cmluZztcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlczxUaGVtZSwgU3R5bGVQcm9wcz4oKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBwYWRkaW5nVG9wOiAocHJvcHMpID0+IHByb3BzLnBlcmNlbnRhZ2UsXG4gICAgICAvLyBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgLy8gYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgLy8gYm9yZGVyV2lkdGg6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMjBdLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgUmF0aW9Db250YWluZXJQcm9wc1xuICBleHRlbmRzIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PixcbiAgICBIVE1MRGl2RWxlbWVudFxuICA+IHtcbiAgcGVyY2VudGFnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYXRpb0NvbnRhaW5lcih7XG4gIHBlcmNlbnRhZ2UsXG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIC4uLnJlc3Rcbn06IFJhdGlvQ29udGFpbmVyUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHBlcmNlbnRhZ2UgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSl9IHsuLi5yZXN0fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RatioContainer.tsx\n");

/***/ })

});