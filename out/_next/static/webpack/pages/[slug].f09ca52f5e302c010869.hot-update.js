/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[slug]",{

/***/ "./pages/[slug].tsx":
/*!**************************!*\
  !*** ./pages/[slug].tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HawkerCenter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_BannerTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/BannerTop */ \"./components/BannerTop.tsx\");\n/* harmony import */ var components_RatioContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/RatioContainer */ \"./components/RatioContainer.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction HawkerCenter(_ref) {\n  _s();\n\n  var _this = this;\n\n  var locationData = _ref.locationData;\n  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n  var isSmall = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default)(theme.breakpoints.up(\"sm\"));\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, locationData.name)), __jsx(components_BannerTop__WEBPACK_IMPORTED_MODULE_3__.default, {\n    image: locationData.images[0].link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, locationData.name))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    fixed: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n    container: true,\n    spacing: 8,\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, locationData.stalls.map(function (stall, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n      item: true,\n      xs: 12,\n      sm: 4,\n      md: 3,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }\n    }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/\" + stall.slug,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }\n    }, __jsx(components_RatioContainer__WEBPACK_IMPORTED_MODULE_4__.default, {\n      percentage: isSmall ? \"100%\" : \"56.25%\",\n      style: {\n        background: \"url(\".concat(stall.images[0].link, \") no-repeat center\"),\n        backgroundSize: \"cover\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 19\n      }\n    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n      variant: \"h6\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 19\n      }\n    }, stall.name))));\n  }))));\n}\n\n_s(HawkerCenter, \"EpQ9wk9sWr7IOjlkl/QcZciwwro=\", false, function () {\n  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c = HawkerCenter;\n\nvar _c;\n\n$RefreshReg$(_c, \"HawkerCenter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLnRzeD83OGJkIl0sIm5hbWVzIjpbIkhhd2tlckNlbnRlciIsImxvY2F0aW9uRGF0YSIsInRoZW1lIiwidXNlVGhlbWUiLCJpc1NtYWxsIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJuYW1lIiwiaW1hZ2VzIiwibGluayIsInN0YWxscyIsIm1hcCIsInN0YWxsIiwiaSIsInNsdWciLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFVZSxTQUFTQSxZQUFULE9BQTJEO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkNDLFlBQW1DLFFBQW5DQSxZQUFtQztBQUN4RSxNQUFNQyxLQUFLLEdBQUdDLGtFQUFRLEVBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyx3RUFBYSxDQUFDSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsQ0FBN0I7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFOLFlBQVksQ0FBQ08sSUFBckIsQ0FERixDQURGLEVBSUUsTUFBQyx5REFBRDtBQUFXLFNBQUssRUFBRVAsWUFBWSxDQUFDUSxNQUFiLENBQW9CLENBQXBCLEVBQXVCQyxJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsYUFBUyxFQUFDLGlEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLHlEQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBQyxXQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dULFlBQVksQ0FBQ08sSUFEaEIsQ0FKRixDQURGLENBSkYsRUFjRSxNQUFDLHdEQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBNEIsV0FBTyxFQUFDLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsWUFBWSxDQUFDVSxNQUFiLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxXQUN2QixNQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFLENBQXZCO0FBQTBCLFFBQUUsRUFBRSxDQUE5QjtBQUFpQyxTQUFHLEVBQUVBLENBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFFLE1BQU1ELEtBQUssQ0FBQ0UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhEQUFEO0FBQ0UsZ0JBQVUsRUFBRVgsT0FBTyxHQUFHLE1BQUgsR0FBWSxRQURqQztBQUVFLFdBQUssRUFBRTtBQUNMWSxrQkFBVSxnQkFBU0gsS0FBSyxDQUFDSixNQUFOLENBQWEsQ0FBYixFQUFnQkMsSUFBekIsdUJBREw7QUFFTE8sc0JBQWMsRUFBRTtBQUZYLE9BRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBUUUsTUFBQyx5REFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dKLEtBQUssQ0FBQ0wsSUFEVCxDQVJGLENBREYsQ0FERixDQUR1QjtBQUFBLEdBQXhCLENBREgsQ0FERixDQWRGLENBREY7QUF1Q0Q7O0dBM0N1QlIsWTtVQUNSRyw4RCxFQUNFRSxvRTs7O0tBRk1MLFkiLCJmaWxlIjoiLi9wYWdlcy9bc2x1Z10udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgVHlwb2dyYXBoeSwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5pbXBvcnQgQmFubmVyVG9wIGZyb20gXCJjb21wb25lbnRzL0Jhbm5lclRvcFwiO1xuaW1wb3J0IFJhdGlvQ29udGFpbmVyIGZyb20gXCJjb21wb25lbnRzL1JhdGlvQ29udGFpbmVyXCI7XG5cbmltcG9ydCB7IExvY2F0aW9uc1NlcnZpY2UgfSBmcm9tIFwibW9kdWxlcy9sb2NhdGlvbnMvbG9jYXRpb25zLnNlcnZpY2VcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIm1vZHVsZXMvbG9jYXRpb25zL2VudGl0aWVzL2xvY2F0aW9uLmVudGl0eVwiO1xuaW1wb3J0IHsgZW50aXR5VG9PYmplY3QgfSBmcm9tIFwibGliL3V0aWxzL2VudGl0eS10by1vYmplY3QudXRpbFwiO1xuXG5pbnRlcmZhY2UgSGF3a2VyQ2VudGVyUHJvcHMge1xuICBsb2NhdGlvbkRhdGE6IExvY2F0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIYXdrZXJDZW50ZXIoeyBsb2NhdGlvbkRhdGEgfTogSGF3a2VyQ2VudGVyUHJvcHMpIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc1NtYWxsID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntsb2NhdGlvbkRhdGEubmFtZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJhbm5lclRvcCBpbWFnZT17bG9jYXRpb25EYXRhLmltYWdlc1swXS5saW5rfT5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG1heFdpZHRoPVwibWRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1mdWxsIHRleHQtY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAge2xvY2F0aW9uRGF0YS5uYW1lfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0Jhbm5lclRvcD5cbiAgICAgIDxDb250YWluZXIgZml4ZWQ+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAge2xvY2F0aW9uRGF0YS5zdGFsbHMubWFwKChzdGFsbCwgaSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fSBtZD17M30ga2V5PXtpfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvXCIgKyBzdGFsbC5zbHVnfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxSYXRpb0NvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlPXtpc1NtYWxsID8gXCIxMDAlXCIgOiBcIjU2LjI1JVwifVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtzdGFsbC5pbWFnZXNbMF0ubGlua30pIG5vLXJlcGVhdCBjZW50ZXJgLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9SYXRpb0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgICB7c3RhbGwubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uc1NlcnZpY2UgPSBhd2FpdCBMb2NhdGlvbnNTZXJ2aWNlLmJ1aWxkKCk7XG4gIGNvbnN0IHBhdGhzID0gKGF3YWl0IGxvY2F0aW9uc1NlcnZpY2UuZmluZEFsbCgpKS5tYXAoKGxvY2F0aW9uKSA9PiAoe1xuICAgIHBhcmFtczogeyBzbHVnOiBsb2NhdGlvbi5zbHVnIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBsb2NhdGlvbnNTZXJ2aWNlID0gYXdhaXQgTG9jYXRpb25zU2VydmljZS5idWlsZCgpO1xuICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBsb2NhdGlvbnNTZXJ2aWNlLmZpbmRPbmVEZWVwKFxuICAgIHBhcmFtcy5zbHVnIGFzIHN0cmluZ1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxvY2F0aW9uRGF0YTogZW50aXR5VG9PYmplY3QobG9jYXRpb25EYXRhKSxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[slug].tsx\n");

/***/ })

});