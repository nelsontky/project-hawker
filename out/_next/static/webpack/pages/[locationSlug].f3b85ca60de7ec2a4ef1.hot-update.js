/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locationSlug]",{

/***/ "./pages/[locationSlug]/index.tsx":
/*!****************************************!*\
  !*** ./pages/[locationSlug]/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HawkerCenter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_BannerTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/BannerTop */ \"./components/BannerTop.tsx\");\n/* harmony import */ var components_RatioContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/RatioContainer */ \"./components/RatioContainer.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/[locationSlug]/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction HawkerCenter(_ref) {\n  _s();\n\n  var _this = this;\n\n  var locationData = _ref.locationData,\n      slug = _ref.slug;\n  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme)();\n  var isSmall = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default)(theme.breakpoints.up(\"sm\"));\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, locationData.name)), __jsx(components_BannerTop__WEBPACK_IMPORTED_MODULE_3__.default, {\n    image: locationData.images[0].link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, locationData.name))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Container, {\n    fixed: true,\n    className: \"pt-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n    container: true,\n    spacing: isSmall ? 8 : 4,\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, locationData.stalls.map(function (stall, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n      item: true,\n      xs: 12,\n      sm: 4,\n      md: 3,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n      href: \"/\".concat(slug, \"/\").concat(stall.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }\n    }, __jsx(components_RatioContainer__WEBPACK_IMPORTED_MODULE_4__.default, {\n      className: \"border-black\",\n      percentage: isSmall ? \"100%\" : \"56.25%\",\n      style: {\n        background: \"url(\".concat(stall.images[0].link, \") no-repeat center\"),\n        backgroundSize: \"cover\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 19\n      }\n    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n      variant: \"h6\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 19\n      }\n    }, stall.name))));\n  }))));\n}\n\n_s(HawkerCenter, \"EpQ9wk9sWr7IOjlkl/QcZciwwro=\", false, function () {\n  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.useTheme, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__.default];\n});\n\n_c = HawkerCenter;\n\nvar _c;\n\n$RefreshReg$(_c, \"HawkerCenter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvY2F0aW9uU2x1Z10vaW5kZXgudHN4PzA0YWIiXSwibmFtZXMiOlsiSGF3a2VyQ2VudGVyIiwibG9jYXRpb25EYXRhIiwic2x1ZyIsInRoZW1lIiwidXNlVGhlbWUiLCJpc1NtYWxsIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJuYW1lIiwiaW1hZ2VzIiwibGluayIsInN0YWxscyIsIm1hcCIsInN0YWxsIiwiaSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVllLFNBQVNBLFlBQVQsT0FHTztBQUFBOztBQUFBOztBQUFBLE1BRnBCQyxZQUVvQixRQUZwQkEsWUFFb0I7QUFBQSxNQURwQkMsSUFDb0IsUUFEcEJBLElBQ29CO0FBQ3BCLE1BQU1DLEtBQUssR0FBR0Msa0VBQVEsRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLHdFQUFhLENBQUNILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxDQUE3QjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUVAsWUFBWSxDQUFDUSxJQUFyQixDQURGLENBREYsRUFJRSxNQUFDLHlEQUFEO0FBQVcsU0FBSyxFQUFFUixZQUFZLENBQUNTLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUJDLElBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQ0UsWUFBUSxFQUFDLElBRFg7QUFFRSxhQUFTLEVBQUMsaURBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMseURBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLFdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1YsWUFBWSxDQUFDUSxJQURoQixDQUpGLENBREYsQ0FKRixFQWNFLE1BQUMsd0RBQUQ7QUFBVyxTQUFLLE1BQWhCO0FBQWlCLGFBQVMsRUFBQyxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUVKLE9BQU8sR0FBRyxDQUFILEdBQU8sQ0FBdkM7QUFBMEMsV0FBTyxFQUFDLFFBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osWUFBWSxDQUFDVyxNQUFiLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxXQUN2QixNQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFLENBQXZCO0FBQTBCLFFBQUUsRUFBRSxDQUE5QjtBQUFpQyxTQUFHLEVBQUVBLENBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGtEQUFEO0FBQU0sVUFBSSxhQUFNYixJQUFOLGNBQWNZLEtBQUssQ0FBQ1osSUFBcEIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFDRSxlQUFTLEVBQUMsY0FEWjtBQUVFLGdCQUFVLEVBQUVHLE9BQU8sR0FBRyxNQUFILEdBQVksUUFGakM7QUFHRSxXQUFLLEVBQUU7QUFDTFcsa0JBQVUsZ0JBQVNGLEtBQUssQ0FBQ0osTUFBTixDQUFhLENBQWIsRUFBZ0JDLElBQXpCLHVCQURMO0FBRUxNLHNCQUFjLEVBQUU7QUFGWCxPQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQVNFLE1BQUMseURBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUEwQkgsS0FBSyxDQUFDTCxJQUFoQyxDQVRGLENBREYsQ0FERixDQUR1QjtBQUFBLEdBQXhCLENBREgsQ0FERixDQWRGLENBREY7QUFzQ0Q7O0dBN0N1QlQsWTtVQUlSSSw4RCxFQUNFRSxvRTs7O0tBTE1OLFkiLCJmaWxlIjoiLi9wYWdlcy9bbG9jYXRpb25TbHVnXS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBCYW5uZXJUb3AgZnJvbSBcImNvbXBvbmVudHMvQmFubmVyVG9wXCI7XG5pbXBvcnQgUmF0aW9Db250YWluZXIgZnJvbSBcImNvbXBvbmVudHMvUmF0aW9Db250YWluZXJcIjtcblxuaW1wb3J0IHsgTG9jYXRpb25zU2VydmljZSB9IGZyb20gXCJtb2R1bGVzL2xvY2F0aW9ucy9sb2NhdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwibW9kdWxlcy9sb2NhdGlvbnMvZW50aXRpZXMvbG9jYXRpb24uZW50aXR5XCI7XG5pbXBvcnQgeyBTdGFsbHNTZXJ2aWNlIH0gZnJvbSBcIm1vZHVsZXMvc3RhbGxzL3N0YWxscy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBlbnRpdHlUb09iamVjdCB9IGZyb20gXCJsaWIvdXRpbHMvZW50aXR5LXRvLW9iamVjdC51dGlsXCI7XG5cbmludGVyZmFjZSBIYXdrZXJDZW50ZXJQcm9wcyB7XG4gIGxvY2F0aW9uRGF0YTogTG9jYXRpb247XG4gIHNsdWc6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGF3a2VyQ2VudGVyKHtcbiAgbG9jYXRpb25EYXRhLFxuICBzbHVnLFxufTogSGF3a2VyQ2VudGVyUHJvcHMpIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc1NtYWxsID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntsb2NhdGlvbkRhdGEubmFtZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEJhbm5lclRvcCBpbWFnZT17bG9jYXRpb25EYXRhLmltYWdlc1swXS5saW5rfT5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG1heFdpZHRoPVwibWRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaC1mdWxsIHRleHQtY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAge2xvY2F0aW9uRGF0YS5uYW1lfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0Jhbm5lclRvcD5cbiAgICAgIDxDb250YWluZXIgZml4ZWQgY2xhc3NOYW1lPVwicHQtMTZcIj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9e2lzU21hbGwgPyA4IDogNH0ganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgIHtsb2NhdGlvbkRhdGEuc3RhbGxzLm1hcCgoc3RhbGwsIGkpID0+IChcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17NH0gbWQ9ezN9IGtleT17aX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtzbHVnfS8ke3N0YWxsLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICA8UmF0aW9Db250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZT17aXNTbWFsbCA/IFwiMTAwJVwiIDogXCI1Ni4yNSVcIn1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7c3RhbGwuaW1hZ2VzWzBdLmxpbmt9KSBuby1yZXBlYXQgY2VudGVyYCxcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPjwvUmF0aW9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57c3RhbGwubmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKGxvY2F0aW9uU2x1ZykgPT4ge1xuICBjb25zdCBsb2NhdGlvbnNTZXJ2aWNlID0gYXdhaXQgTG9jYXRpb25zU2VydmljZS5idWlsZCgpO1xuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBsb2NhdGlvbnNTZXJ2aWNlLmZpbmRBbGwoKTtcbiAgY29uc3Qgc3RhbGxzU2VydmljZSA9IGF3YWl0IFN0YWxsc1NlcnZpY2UuYnVpbGQoKTtcblxuICBsZXQgcGF0aHMgPSBbXTtcbiAgZm9yIChjb25zdCBsb2NhdGlvbiBvZiBsb2NhdGlvbnMpIHtcbiAgICBjb25zdCBzdGFsbHMgPSBhd2FpdCBzdGFsbHNTZXJ2aWNlLmZpbmRBbGxTbHVncyhsb2NhdGlvbi5zbHVnKTtcbiAgICBmb3IgKGNvbnN0IHN0YWxsIG9mIHN0YWxscykge1xuICAgICAgcGF0aHMucHVzaCh7XG4gICAgICAgIHBhcmFtczogeyBsb2NhdGlvblNsdWc6IGxvY2F0aW9uLnNsdWcsIHN0YWxsU2x1Zzogc3RhbGwuc2x1ZyB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2cocGF0aHMpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uc1NlcnZpY2UgPSBhd2FpdCBMb2NhdGlvbnNTZXJ2aWNlLmJ1aWxkKCk7XG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGxvY2F0aW9uc1NlcnZpY2UuZmluZE9uZURlZXAoXG4gICAgcGFyYW1zLmxvY2F0aW9uU2x1ZyBhcyBzdHJpbmdcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsb2NhdGlvbkRhdGE6IGVudGl0eVRvT2JqZWN0KGxvY2F0aW9uRGF0YSksXG4gICAgICBsb2NhdGlvblNsdWc6IHBhcmFtcy5sb2NhdGlvblNsdWcsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[locationSlug]/index.tsx\n");

/***/ })

});