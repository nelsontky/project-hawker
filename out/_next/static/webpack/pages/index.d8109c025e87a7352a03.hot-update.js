/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProgressiveImage.tsx":
/*!*****************************************!*\
  !*** ./components/ProgressiveImage.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProgressiveImage; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var lib_hooks_use_progressive_image_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/hooks/use-progressive-image.hook */ \"./lib/hooks/use-progressive-image.hook.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/app/components/ProgressiveImage.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.createStyles)({\n    root: function root(props) {\n      return {\n        filter: props.blur ? \"blur(8px)\" : \"none\",\n        transition: \"filter 0.2s ease-out\"\n      };\n    }\n  });\n});\nfunction ProgressiveImage(_ref) {\n  _s();\n\n  var compressedBase64 = _ref.compressedBase64,\n      src = _ref.src,\n      className = _ref.className,\n      rest = (0,_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, [\"compressedBase64\", \"src\", \"className\"]);\n\n  var _useProgressiveImage = (0,lib_hooks_use_progressive_image_hook__WEBPACK_IMPORTED_MODULE_4__.useProgressiveImage)({\n    compressedSrc: compressedBase64,\n    src: src\n  }),\n      blur = _useProgressiveImage.blur,\n      imageSrc = _useProgressiveImage.src;\n\n  var classes = useStyles({\n    blur: blur\n  });\n  return __jsx(\"img\", (0,_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n    src: imageSrc,\n    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)(className, classes.root)\n  }, rest, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }));\n}\n\n_s(ProgressiveImage, \"eQxX4v1KlqXv1re8PtmV2ICaaVI=\", false, function () {\n  return [lib_hooks_use_progressive_image_hook__WEBPACK_IMPORTED_MODULE_4__.useProgressiveImage, useStyles];\n});\n\n_c = ProgressiveImage;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProgressiveImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmVzc2l2ZUltYWdlLnRzeD9lNDVlIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNyZWF0ZVN0eWxlcyIsInJvb3QiLCJwcm9wcyIsImZpbHRlciIsImJsdXIiLCJ0cmFuc2l0aW9uIiwiUHJvZ3Jlc3NpdmVJbWFnZSIsImNvbXByZXNzZWRCYXNlNjQiLCJzcmMiLCJjbGFzc05hbWUiLCJyZXN0IiwidXNlUHJvZ3Jlc3NpdmVJbWFnZSIsImNvbXByZXNzZWRTcmMiLCJpbWFnZVNyYyIsImNsYXNzZXMiLCJjbHN4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFNQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQW9CLFVBQUNDLEtBQUQ7QUFBQSxTQUM5Q0Msc0VBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUUsY0FBQ0MsS0FBRDtBQUFBLGFBQVk7QUFDaEJDLGNBQU0sRUFBRUQsS0FBSyxDQUFDRSxJQUFOLEdBQWEsV0FBYixHQUEyQixNQURuQjtBQUVoQkMsa0JBQVUsRUFBRTtBQUZJLE9BQVo7QUFBQTtBQURLLEdBQUQsQ0FEa0M7QUFBQSxDQUFwQixDQUE1QjtBQWlCZSxTQUFTQyxnQkFBVCxPQUtXO0FBQUE7O0FBQUEsTUFKeEJDLGdCQUl3QixRQUp4QkEsZ0JBSXdCO0FBQUEsTUFIeEJDLEdBR3dCLFFBSHhCQSxHQUd3QjtBQUFBLE1BRnhCQyxTQUV3QixRQUZ4QkEsU0FFd0I7QUFBQSxNQURyQkMsSUFDcUI7O0FBQUEsNkJBQ1FDLHlGQUFtQixDQUFDO0FBQ2xEQyxpQkFBYSxFQUFFTCxnQkFEbUM7QUFFbERDLE9BQUcsRUFBSEE7QUFGa0QsR0FBRCxDQUQzQjtBQUFBLE1BQ2hCSixJQURnQix3QkFDaEJBLElBRGdCO0FBQUEsTUFDTFMsUUFESyx3QkFDVkwsR0FEVTs7QUFNeEIsTUFBTU0sT0FBTyxHQUFHakIsU0FBUyxDQUFDO0FBQUVPLFFBQUksRUFBSkE7QUFBRixHQUFELENBQXpCO0FBRUEsU0FDRTtBQUFLLE9BQUcsRUFBRVMsUUFBVjtBQUFvQixhQUFTLEVBQUVFLDZDQUFJLENBQUNOLFNBQUQsRUFBWUssT0FBTyxDQUFDYixJQUFwQjtBQUFuQyxLQUFrRVMsSUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBR0Q7O0dBaEJ1QkosZ0I7VUFNVUsscUYsRUFLaEJkLFM7OztLQVhNUyxnQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZ3Jlc3NpdmVJbWFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcblxuaW1wb3J0IHsgdXNlUHJvZ3Jlc3NpdmVJbWFnZSB9IGZyb20gXCJsaWIvaG9va3MvdXNlLXByb2dyZXNzaXZlLWltYWdlLmhvb2tcIjtcblxuaW50ZXJmYWNlIFN0eWxlUHJvcHMge1xuICBibHVyOiBib29sZWFuO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzPFRoZW1lLCBTdHlsZVByb3BzPigodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IChwcm9wcykgPT4gKHtcbiAgICAgIGZpbHRlcjogcHJvcHMuYmx1ciA/IFwiYmx1cig4cHgpXCIgOiBcIm5vbmVcIixcbiAgICAgIHRyYW5zaXRpb246IFwiZmlsdGVyIDAuMnMgZWFzZS1vdXRcIixcbiAgICB9KSxcbiAgfSlcbik7XG5cbmludGVyZmFjZSBQcm9ncmVzc2l2ZUltYWdlUHJvcHNcbiAgZXh0ZW5kcyBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICBSZWFjdC5JbWdIVE1MQXR0cmlidXRlczxIVE1MSW1hZ2VFbGVtZW50PixcbiAgICBIVE1MSW1hZ2VFbGVtZW50XG4gID4ge1xuICBjb21wcmVzc2VkQmFzZTY0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzaXZlSW1hZ2Uoe1xuICBjb21wcmVzc2VkQmFzZTY0LFxuICBzcmMsXG4gIGNsYXNzTmFtZSxcbiAgLi4ucmVzdFxufTogUHJvZ3Jlc3NpdmVJbWFnZVByb3BzKSB7XG4gIGNvbnN0IHsgYmx1ciwgc3JjOiBpbWFnZVNyYyB9ID0gdXNlUHJvZ3Jlc3NpdmVJbWFnZSh7XG4gICAgY29tcHJlc3NlZFNyYzogY29tcHJlc3NlZEJhc2U2NCxcbiAgICBzcmMsXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyBibHVyIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGltZyBzcmM9e2ltYWdlU3JjfSBjbGFzc05hbWU9e2Nsc3goY2xhc3NOYW1lLCBjbGFzc2VzLnJvb3QpfSB7Li4ucmVzdH0gLz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProgressiveImage.tsx\n");

/***/ })

});