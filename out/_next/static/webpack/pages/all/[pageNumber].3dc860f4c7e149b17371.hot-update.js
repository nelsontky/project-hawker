/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/all/[pageNumber]",{

/***/ "./pages/all/[pageNumber].tsx":
/*!************************************!*\
  !*** ./pages/all/[pageNumber].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ All; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var components_SquareLinkGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/SquareLinkGrid */ \"./components/SquareLinkGrid.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/all/[pageNumber].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.createStyles)({\n    root: {\n      backgroundColor: theme.palette.primary.main\n    }\n  });\n});\nvar __N_SSG = true;\nfunction All(_ref) {\n  _s();\n\n  var _this = this;\n\n  var stalls = _ref.stalls;\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"All Stalls\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center pt-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"All Stalls\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    fixed: true,\n    className: \"py-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(components_SquareLinkGrid__WEBPACK_IMPORTED_MODULE_2__.default, {\n    items: stalls.map(function (stall) {\n      return {\n        href: \"/\".concat(stall.location.slug, \"/\").concat(stall.slug),\n        image: stall.images[0],\n        children: __jsx(\"span\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 15\n          }\n        }, stall.name, __jsx(\"br\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 17\n          }\n        }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n          color: \"textSecondary\",\n          variant: \"subtitle2\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 17\n          }\n        }, \"(\", stall.location.name, \")\"))\n      };\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  })));\n}\n\n_s(All, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = All;\n\nvar _c;\n\n$RefreshReg$(_c, \"All\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWxsL1twYWdlTnVtYmVyXS50c3g/ZWFhNiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiQWxsIiwic3RhbGxzIiwiY2xhc3NlcyIsIm1hcCIsInN0YWxsIiwiaHJlZiIsImxvY2F0aW9uIiwic2x1ZyIsImltYWdlIiwiaW1hZ2VzIiwiY2hpbGRyZW4iLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLHNFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLHFCQUFlLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQURuQztBQURLLEdBQUQsQ0FEZTtBQUFBLENBQUQsQ0FBNUI7O0FBUWUsU0FBU0MsR0FBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7QUFDaEQsTUFBTUMsT0FBTyxHQUFHWCxTQUFTLEVBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRVcsT0FBTyxDQUFDUCxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLEVBSUUsTUFBQyx3REFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsYUFBUyxFQUFDLHVEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLHlEQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBQyxXQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLENBSkYsRUFZRSxNQUFDLHdEQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFpQixhQUFTLEVBQUMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFDRSxTQUFLLEVBQUVNLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSxhQUFZO0FBQzVCQyxZQUFJLGFBQU1ELEtBQUssQ0FBQ0UsUUFBTixDQUFlQyxJQUFyQixjQUE2QkgsS0FBSyxDQUFDRyxJQUFuQyxDQUR3QjtBQUU1QkMsYUFBSyxFQUFFSixLQUFLLENBQUNLLE1BQU4sQ0FBYSxDQUFiLENBRnFCO0FBRzVCQyxnQkFBUSxFQUNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDR04sS0FBSyxDQUFDTyxJQURULEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGLEVBR0UsTUFBQyx5REFBRDtBQUFZLGVBQUssRUFBQyxlQUFsQjtBQUFrQyxpQkFBTyxFQUFDLFdBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQ0lQLEtBQUssQ0FBQ0UsUUFBTixDQUFlSyxJQURuQixNQUhGO0FBSjBCLE9BQVo7QUFBQSxLQUFYLENBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWkYsQ0FERjtBQWdDRDs7R0FuQ3VCWCxHO1VBQ05ULFM7OztLQURNUyxHIiwiZmlsZSI6Ii4vcGFnZXMvYWxsL1twYWdlTnVtYmVyXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbXBvcnQgU3F1YXJlTGlua0dyaWQgZnJvbSBcImNvbXBvbmVudHMvU3F1YXJlTGlua0dyaWRcIjtcblxuaW1wb3J0IHsgU3RhbGxzU2VydmljZSB9IGZyb20gXCJtb2R1bGVzL3N0YWxscy9zdGFsbHMuc2VydmljZVwiO1xuaW1wb3J0IHsgU3RhbGwgfSBmcm9tIFwibW9kdWxlcy9zdGFsbHMvZW50aXRpZXMvc3RhbGwuZW50aXR5XCI7XG5cbmltcG9ydCB7IGVudGl0eVRvT2JqZWN0IH0gZnJvbSBcImxpYi91dGlscy9lbnRpdHktdG8tb2JqZWN0LnV0aWxcIjtcblxuaW50ZXJmYWNlIEFsbFByb3BzIHtcbiAgc3RhbGxzOiBTdGFsbFtdO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICB9LFxuICB9KVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxsKHsgc3RhbGxzIH06IEFsbFByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BbGwgU3RhbGxzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgbWF4V2lkdGg9XCJtZFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1mdWxsIHRleHQtY2VudGVyIHB0LTEwXCJcbiAgICAgID5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgQWxsIFN0YWxsc1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxDb250YWluZXIgZml4ZWQgY2xhc3NOYW1lPVwicHktMTZcIj5cbiAgICAgICAgPFNxdWFyZUxpbmtHcmlkXG4gICAgICAgICAgaXRlbXM9e3N0YWxscy5tYXAoKHN0YWxsKSA9PiAoe1xuICAgICAgICAgICAgaHJlZjogYC8ke3N0YWxsLmxvY2F0aW9uLnNsdWd9LyR7c3RhbGwuc2x1Z31gLFxuICAgICAgICAgICAgaW1hZ2U6IHN0YWxsLmltYWdlc1swXSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiAoXG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHtzdGFsbC5uYW1lfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj5cbiAgICAgICAgICAgICAgICAgICh7c3RhbGwubG9jYXRpb24ubmFtZX0pXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApLFxuICAgICAgICAgIH0pKX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBzdGFsbHNTZXJ2aWNlID0gYXdhaXQgU3RhbGxzU2VydmljZS5idWlsZCgpO1xuICBjb25zdCBzdGFsbHNDb3VudCA9IGF3YWl0IHN0YWxsc1NlcnZpY2UuY291bnRTdGFsbHMoKTtcblxuICBjb25zdCBwYXRocyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHN0YWxsc0NvdW50IH0sIChfLCBpKSA9PiAoe1xuICAgIHBhcmFtczogeyBwYWdlTnVtYmVyOiBpICsgMSArIFwiXCIgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IFBBR0VfU0laRSA9IDEyO1xuICBjb25zdCBwYWdlTnVtYmVyID0gK3BhcmFtcy5wYWdlTnVtYmVyO1xuXG4gIGNvbnN0IHN0YWxsc1NlcnZpY2UgPSBhd2FpdCBTdGFsbHNTZXJ2aWNlLmJ1aWxkKCk7XG4gIGNvbnN0IHN0YWxscyA9IGF3YWl0IHN0YWxsc1NlcnZpY2UuZmluZEFsbCh7XG4gICAgc2tpcDogUEFHRV9TSVpFICogcGFnZU51bWJlcixcbiAgICBsaW1pdDogUEFHRV9TSVpFLFxuICB9KTtcbiAgY29uc3QgbnVtYmVyT2ZQYWdlcyA9IGF3YWl0IHN0YWxsc1NlcnZpY2UuY291bnRTdGFsbHMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBzdGFsbHM6IGVudGl0eVRvT2JqZWN0KHN0YWxscyksXG4gICAgICBudW1iZXJPZlBhZ2VzLFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/all/[pageNumber].tsx\n");

/***/ })

});