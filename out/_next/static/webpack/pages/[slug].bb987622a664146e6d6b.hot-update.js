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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HawkerCenter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_BannerTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/BannerTop */ \"./components/BannerTop.tsx\");\n/* harmony import */ var components_RatioContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/RatioContainer */ \"./components/RatioContainer.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/[slug].tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction HawkerCenter(_ref) {\n  _s();\n\n  var _this = this;\n\n  var locationData = _ref.locationData,\n      slug = _ref.slug;\n  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n  var isSmall = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default)(theme.breakpoints.up(\"sm\"));\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, locationData.name)), __jsx(components_BannerTop__WEBPACK_IMPORTED_MODULE_3__.default, {\n    image: locationData.images[0].link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, locationData.name))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    fixed: true,\n    className: \"pt-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n    container: true,\n    spacing: isSmall ? 8 : 4,\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, locationData.stalls.map(function (stall, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n      item: true,\n      xs: 12,\n      sm: 4,\n      md: 3,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }\n    }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/\".concat(slug, \"/\").concat(stall.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }\n    }, __jsx(components_RatioContainer__WEBPACK_IMPORTED_MODULE_4__.default, {\n      className: \"border-black\",\n      percentage: isSmall ? \"100%\" : \"56.25%\",\n      style: {\n        background: \"url(\".concat(stall.images[0].link, \") no-repeat center\"),\n        backgroundSize: \"cover\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 19\n      }\n    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n      variant: \"h6\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 19\n      }\n    }, stall.name))));\n  }))));\n}\n\n_s(HawkerCenter, \"EpQ9wk9sWr7IOjlkl/QcZciwwro=\", false, function () {\n  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c = HawkerCenter;\n\nvar _c;\n\n$RefreshReg$(_c, \"HawkerCenter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3NsdWddLnRzeD83OGJkIl0sIm5hbWVzIjpbIkhhd2tlckNlbnRlciIsImxvY2F0aW9uRGF0YSIsInNsdWciLCJ0aGVtZSIsInVzZVRoZW1lIiwiaXNTbWFsbCIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsInVwIiwibmFtZSIsImltYWdlcyIsImxpbmsiLCJzdGFsbHMiLCJtYXAiLCJzdGFsbCIsImkiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFXZSxTQUFTQSxZQUFULE9BR087QUFBQTs7QUFBQTs7QUFBQSxNQUZwQkMsWUFFb0IsUUFGcEJBLFlBRW9CO0FBQUEsTUFEcEJDLElBQ29CLFFBRHBCQSxJQUNvQjtBQUNwQixNQUFNQyxLQUFLLEdBQUdDLGtFQUFRLEVBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyx3RUFBYSxDQUFDSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsQ0FBN0I7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFQLFlBQVksQ0FBQ1EsSUFBckIsQ0FERixDQURGLEVBSUUsTUFBQyx5REFBRDtBQUFXLFNBQUssRUFBRVIsWUFBWSxDQUFDUyxNQUFiLENBQW9CLENBQXBCLEVBQXVCQyxJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsYUFBUyxFQUFDLGlEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLHlEQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBQyxXQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dWLFlBQVksQ0FBQ1EsSUFEaEIsQ0FKRixDQURGLENBSkYsRUFjRSxNQUFDLHdEQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFpQixhQUFTLEVBQUMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFSixPQUFPLEdBQUcsQ0FBSCxHQUFPLENBQXZDO0FBQTBDLFdBQU8sRUFBQyxRQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFlBQVksQ0FBQ1csTUFBYixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSO0FBQUEsV0FDdkIsTUFBQyxtREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLFFBQUUsRUFBRSxDQUF2QjtBQUEwQixRQUFFLEVBQUUsQ0FBOUI7QUFBaUMsU0FBRyxFQUFFQSxDQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrREFBRDtBQUFNLFVBQUksYUFBTWIsSUFBTixjQUFjWSxLQUFLLENBQUNaLElBQXBCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhEQUFEO0FBQ0UsZUFBUyxFQUFDLGNBRFo7QUFFRSxnQkFBVSxFQUFFRyxPQUFPLEdBQUcsTUFBSCxHQUFZLFFBRmpDO0FBR0UsV0FBSyxFQUFFO0FBQ0xXLGtCQUFVLGdCQUFTRixLQUFLLENBQUNKLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxJQUF6Qix1QkFETDtBQUVMTSxzQkFBYyxFQUFFO0FBRlgsT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFTRSxNQUFDLHlEQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBMEJILEtBQUssQ0FBQ0wsSUFBaEMsQ0FURixDQURGLENBREYsQ0FEdUI7QUFBQSxHQUF4QixDQURILENBREYsQ0FkRixDQURGO0FBc0NEOztHQTdDdUJULFk7VUFJUkksOEQsRUFDRUUsb0U7OztLQUxNTixZIiwiZmlsZSI6Ii4vcGFnZXMvW3NsdWddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQYXRocyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IEJhbm5lclRvcCBmcm9tIFwiY29tcG9uZW50cy9CYW5uZXJUb3BcIjtcbmltcG9ydCBSYXRpb0NvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9SYXRpb0NvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBMb2NhdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIm1vZHVsZXMvbG9jYXRpb25zL2xvY2F0aW9ucy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJtb2R1bGVzL2xvY2F0aW9ucy9lbnRpdGllcy9sb2NhdGlvbi5lbnRpdHlcIjtcbmltcG9ydCB7IGVudGl0eVRvT2JqZWN0IH0gZnJvbSBcImxpYi91dGlscy9lbnRpdHktdG8tb2JqZWN0LnV0aWxcIjtcblxuaW50ZXJmYWNlIEhhd2tlckNlbnRlclByb3BzIHtcbiAgbG9jYXRpb25EYXRhOiBMb2NhdGlvbjtcbiAgc2x1Zzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIYXdrZXJDZW50ZXIoe1xuICBsb2NhdGlvbkRhdGEsXG4gIHNsdWcsXG59OiBIYXdrZXJDZW50ZXJQcm9wcykge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzU21hbGwgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIikpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2xvY2F0aW9uRGF0YS5uYW1lfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QmFubmVyVG9wIGltYWdlPXtsb2NhdGlvbkRhdGEuaW1hZ2VzWzBdLmxpbmt9PlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgbWF4V2lkdGg9XCJtZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgdGV4dC1jZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgyXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XG4gICAgICAgICAgICB7bG9jYXRpb25EYXRhLm5hbWV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQmFubmVyVG9wPlxuICAgICAgPENvbnRhaW5lciBmaXhlZCBjbGFzc05hbWU9XCJwdC0xNlwiPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17aXNTbWFsbCA/IDggOiA0fSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAge2xvY2F0aW9uRGF0YS5zdGFsbHMubWFwKChzdGFsbCwgaSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fSBtZD17M30ga2V5PXtpfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3NsdWd9LyR7c3RhbGwuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxSYXRpb0NvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlPXtpc1NtYWxsID8gXCIxMDAlXCIgOiBcIjU2LjI1JVwifVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtzdGFsbC5pbWFnZXNbMF0ubGlua30pIG5vLXJlcGVhdCBjZW50ZXJgLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9SYXRpb0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntzdGFsbC5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uc1NlcnZpY2UgPSBhd2FpdCBMb2NhdGlvbnNTZXJ2aWNlLmJ1aWxkKCk7XG4gIGNvbnN0IHBhdGhzID0gKGF3YWl0IGxvY2F0aW9uc1NlcnZpY2UuZmluZEFsbCgpKS5tYXAoKGxvY2F0aW9uKSA9PiAoe1xuICAgIHBhcmFtczogeyBzbHVnOiBsb2NhdGlvbi5zbHVnIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBsb2NhdGlvbnNTZXJ2aWNlID0gYXdhaXQgTG9jYXRpb25zU2VydmljZS5idWlsZCgpO1xuICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBsb2NhdGlvbnNTZXJ2aWNlLmZpbmRPbmVEZWVwKFxuICAgIHBhcmFtcy5zbHVnIGFzIHN0cmluZ1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxvY2F0aW9uRGF0YTogZW50aXR5VG9PYmplY3QobG9jYXRpb25EYXRhKSxcbiAgICAgIHNsdWc6IHBhcmFtcy5zbHVnLFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[slug].tsx\n");

/***/ })

});