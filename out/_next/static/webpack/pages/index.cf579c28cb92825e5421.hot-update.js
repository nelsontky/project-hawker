/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ImageLink.tsx":
/*!**********************************!*\
  !*** ./components/ImageLink.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageLink; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/app/components/ImageLink.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_2___default().createElement);\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.createStyles)({\n    root: {\n      position: \"relative\",\n      width: 180,\n      height: 180,\n      transition: \"transform 0.2s\",\n      \"&:hover\": {\n        transform: \"scale(1.2)\"\n      }\n    },\n    caption: {\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      position: \"absolute\",\n      backgroundColor: theme.palette.primary.main,\n      left: \"50%\",\n      bottom: theme.spacing(4),\n      transform: \"translateX(-50%)\"\n    }\n  });\n});\nfunction ImageLink(_ref) {\n  _s();\n\n  var src = _ref.src,\n      children = _ref.children,\n      className = _ref.className,\n      target = _ref.target,\n      rel = _ref.rel,\n      rest = (0,_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, [\"src\", \"children\", \"className\", \"target\", \"rel\"]);\n\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__.default)(classes.root, className),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), (0,_app_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }), __jsx(\"a\", {\n    target: target,\n    rel: rel,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: src,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: classes.caption,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n    variant: \"h6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, children)))));\n}\n\n_s(ImageLink, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = ImageLink;\n\nvar _c;\n\n$RefreshReg$(_c, \"ImageLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbWFnZUxpbmsudHN4PzQxMDgiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwiY2FwdGlvbiIsInBhZGRpbmdMZWZ0Iiwic3BhY2luZyIsInBhZGRpbmdSaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImxlZnQiLCJib3R0b20iLCJJbWFnZUxpbmsiLCJzcmMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInRhcmdldCIsInJlbCIsInJlc3QiLCJjbGFzc2VzIiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLHNFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRSxVQUROO0FBRUpDLFdBQUssRUFBRSxHQUZIO0FBR0pDLFlBQU0sRUFBRSxHQUhKO0FBSUpDLGdCQUFVLEVBQUUsZ0JBSlI7QUFNSixpQkFBVztBQUNUQyxpQkFBUyxFQUFFO0FBREY7QUFOUCxLQURLO0FBWVhDLFdBQU8sRUFBRTtBQUNQQyxpQkFBVyxFQUFFVCxLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkLENBRE47QUFFUEMsa0JBQVksRUFBRVgsS0FBSyxDQUFDVSxPQUFOLENBQWMsQ0FBZCxDQUZQO0FBR1BQLGNBQVEsRUFBRSxVQUhIO0FBSVBTLHFCQUFlLEVBQUVaLEtBQUssQ0FBQ2EsT0FBTixDQUFjQyxPQUFkLENBQXNCQyxJQUpoQztBQUtQQyxVQUFJLEVBQUUsS0FMQztBQU1QQyxZQUFNLEVBQUVqQixLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkLENBTkQ7QUFPUEgsZUFBUyxFQUFFO0FBUEo7QUFaRSxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCO0FBaUNlLFNBQVNXLFNBQVQsT0FPSTtBQUFBOztBQUFBLE1BTmpCQyxHQU1pQixRQU5qQkEsR0FNaUI7QUFBQSxNQUxqQkMsUUFLaUIsUUFMakJBLFFBS2lCO0FBQUEsTUFKakJDLFNBSWlCLFFBSmpCQSxTQUlpQjtBQUFBLE1BSGpCQyxNQUdpQixRQUhqQkEsTUFHaUI7QUFBQSxNQUZqQkMsR0FFaUIsUUFGakJBLEdBRWlCO0FBQUEsTUFEZEMsSUFDYzs7QUFDakIsTUFBTUMsT0FBTyxHQUFHM0IsU0FBUyxFQUF6QjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUU0Qiw2Q0FBSSxDQUFDRCxPQUFPLENBQUN2QixJQUFULEVBQWVtQixTQUFmLENBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFELG1HQUFVRyxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRTtBQUFHLFVBQU0sRUFBRUYsTUFBWDtBQUFtQixPQUFHLEVBQUVDLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUosR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRU0sT0FBTyxDQUFDakIsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQlksUUFBMUIsQ0FERixDQUZGLENBREYsQ0FERixDQURGO0FBWUQ7O0dBdEJ1QkYsUztVQVFOcEIsUzs7O0tBUk1vQixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbWFnZUxpbmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCB7IG1ha2VTdHlsZXMsIGNyZWF0ZVN0eWxlcywgVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgTGluaywgeyBMaW5rUHJvcHMgfSBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lOiBUaGVtZSkgPT5cbiAgY3JlYXRlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgd2lkdGg6IDE4MCxcbiAgICAgIGhlaWdodDogMTgwLFxuICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4yc1wiLFxuXG4gICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4yKVwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgY2FwdGlvbjoge1xuICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIGxlZnQ6IFwiNTAlXCIsXG4gICAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtNTAlKVwiLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgSW1hZ2VMaW5rUHJvcHMgZXh0ZW5kcyBMaW5rUHJvcHMge1xuICBzcmM6IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIHJlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VMaW5rKHtcbiAgc3JjLFxuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICB0YXJnZXQsXG4gIHJlbCxcbiAgLi4ucmVzdFxufTogSW1hZ2VMaW5rUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpfT5cbiAgICAgIDxMaW5rIHsuLi5yZXN0fT5cbiAgICAgICAgPGEgdGFyZ2V0PXt0YXJnZXR9IHJlbD17cmVsfT5cbiAgICAgICAgICA8aW1nIHNyYz17c3JjfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcHRpb259PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ImageLink.tsx\n");

/***/ })

});