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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RatioContainer; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/app/components/RatioContainer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.createStyles)({\n    root: {\n      height: 0,\n      paddingTop: function paddingTop(props) {\n        return props.percentage;\n      }\n    }\n  });\n});\nfunction RatioContainer(_ref) {\n  _s();\n\n  var percentage = _ref.percentage,\n      className = _ref.className,\n      children = _ref.children,\n      rest = (0,_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, [\"percentage\", \"className\", \"children\"]);\n\n  var classes = useStyles({\n    percentage: percentage\n  });\n  return __jsx(\"div\", (0,_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)(classes.root, className)\n  }, rest, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }), children);\n}\n\n_s(RatioContainer, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = RatioContainer;\n\nvar _c;\n\n$RefreshReg$(_c, \"RatioContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYXRpb0NvbnRhaW5lci50c3g/NTkyOSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsInByb3BzIiwicGVyY2VudGFnZSIsIlJhdGlvQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJyZXN0IiwiY2xhc3NlcyIsImNsc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBb0IsVUFBQ0MsS0FBRDtBQUFBLFNBQzlDQyxzRUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUUsQ0FESjtBQUVKQyxnQkFBVSxFQUFFLG9CQUFDQyxLQUFEO0FBQUEsZUFBV0EsS0FBSyxDQUFDQyxVQUFqQjtBQUFBO0FBRlI7QUFESyxHQUFELENBRGtDO0FBQUEsQ0FBcEIsQ0FBNUI7QUFpQmUsU0FBU0MsY0FBVCxPQUtTO0FBQUE7O0FBQUEsTUFKdEJELFVBSXNCLFFBSnRCQSxVQUlzQjtBQUFBLE1BSHRCRSxTQUdzQixRQUh0QkEsU0FHc0I7QUFBQSxNQUZ0QkMsUUFFc0IsUUFGdEJBLFFBRXNCO0FBQUEsTUFEbkJDLElBQ21COztBQUN0QixNQUFNQyxPQUFPLEdBQUdiLFNBQVMsQ0FBQztBQUFFUSxjQUFVLEVBQVZBO0FBQUYsR0FBRCxDQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUVNLDZDQUFJLENBQUNELE9BQU8sQ0FBQ1QsSUFBVCxFQUFlTSxTQUFmO0FBQXBCLEtBQW1ERSxJQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0dELFFBREgsQ0FERjtBQUtEOztHQWJ1QkYsYztVQU1OVCxTOzs7S0FOTVMsYyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmF0aW9Db250YWluZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5cbmludGVyZmFjZSBTdHlsZVByb3BzIHtcbiAgcGVyY2VudGFnZTogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzPFRoZW1lLCBTdHlsZVByb3BzPigodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHBhZGRpbmdUb3A6IChwcm9wcykgPT4gcHJvcHMucGVyY2VudGFnZSxcbiAgICB9LFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIFJhdGlvQ29udGFpbmVyUHJvcHNcbiAgZXh0ZW5kcyBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4sXG4gICAgSFRNTERpdkVsZW1lbnRcbiAgPiB7XG4gIHBlcmNlbnRhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmF0aW9Db250YWluZXIoe1xuICBwZXJjZW50YWdlLFxuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICAuLi5yZXN0XG59OiBSYXRpb0NvbnRhaW5lclByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyBwZXJjZW50YWdlIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfSB7Li4ucmVzdH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RatioContainer.tsx\n");

/***/ })

});