/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./components/BannerTop.tsx":
/*!**********************************!*\
  !*** ./components/BannerTop.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BannerTop; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/app/components/BannerTop.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.createStyles)({\n    root: {\n      background: \"no-repeat center\",\n      backgroundImage: function backgroundImage(props) {\n        return \"linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(\".concat(props.image, \")\");\n      },\n      backgroundSize: \"cover\",\n      paddingTop: \"56.25\",\n      height: 0\n    }\n  });\n});\nfunction BannerTop(_ref) {\n  _s();\n\n  var image = _ref.image,\n      rest = (0,_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, [\"image\"]);\n\n  var classes = useStyles({\n    image: image\n  });\n  return __jsx(\"div\", (0,_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n    className: classes.root\n  }, rest, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 10\n    }\n  }));\n}\n\n_s(BannerTop, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = BannerTop;\n\nvar _c;\n\n$RefreshReg$(_c, \"BannerTop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYW5uZXJUb3AudHN4PzhhZjgiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcm9wcyIsImltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJwYWRkaW5nVG9wIiwiaGVpZ2h0IiwiQmFubmVyVG9wIiwicmVzdCIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBb0IsVUFBQ0MsS0FBRDtBQUFBLFNBQzlDQyxzRUFBWSxDQUFDO0FBQ1hDLFFBQUksRUFBRTtBQUNKQyxnQkFBVSxFQUFFLGtCQURSO0FBRUpDLHFCQUFlLEVBQUUseUJBQUNDLEtBQUQ7QUFBQSxrR0FDNkRBLEtBQUssQ0FBQ0MsS0FEbkU7QUFBQSxPQUZiO0FBSUpDLG9CQUFjLEVBQUUsT0FKWjtBQUtKQyxnQkFBVSxFQUFFLE9BTFI7QUFNSkMsWUFBTSxFQUFFO0FBTko7QUFESyxHQUFELENBRGtDO0FBQUEsQ0FBcEIsQ0FBNUI7QUFxQmUsU0FBU0MsU0FBVCxPQUF1RDtBQUFBOztBQUFBLE1BQWxDSixLQUFrQyxRQUFsQ0EsS0FBa0M7QUFBQSxNQUF4QkssSUFBd0I7O0FBQ3BFLE1BQU1DLE9BQU8sR0FBR2QsU0FBUyxDQUFDO0FBQUVRLFNBQUssRUFBTEE7QUFBRixHQUFELENBQXpCO0FBRUEsU0FBTztBQUFLLGFBQVMsRUFBRU0sT0FBTyxDQUFDVjtBQUF4QixLQUFrQ1MsSUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFQO0FBQ0Q7O0dBSnVCRCxTO1VBQ05aLFM7OztLQURNWSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CYW5uZXJUb3AudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcywgY3JlYXRlU3R5bGVzLCBUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcblxuaW50ZXJmYWNlIFN0eWxlUHJvcHMge1xuICBpbWFnZTogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzPFRoZW1lLCBTdHlsZVByb3BzPigodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmQ6IFwibm8tcmVwZWF0IGNlbnRlclwiLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiAocHJvcHMpID0+XG4gICAgICAgIGBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpLCB1cmwoJHtwcm9wcy5pbWFnZX0pYCxcbiAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICBwYWRkaW5nVG9wOiBcIjU2LjI1XCIsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgfSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBCYW5uZXJUb3BQcm9wc1xuICBleHRlbmRzIFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PixcbiAgICBIVE1MRGl2RWxlbWVudFxuICA+IHtcbiAgaW1hZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyVG9wKHsgaW1hZ2UsIC4uLnJlc3QgfTogQmFubmVyVG9wUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IGltYWdlIH0pO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSB7Li4ucmVzdH0+PC9kaXY+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BannerTop.tsx\n");

/***/ })

});