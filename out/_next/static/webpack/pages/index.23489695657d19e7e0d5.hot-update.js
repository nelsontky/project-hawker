/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/LocationList.tsx":
/*!*************************************!*\
  !*** ./components/LocationList.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LocationList; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_RatioContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/RatioContainer */ \"./components/RatioContainer.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/components/LocationList.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.createStyles)({\n    root: {\n      backgroundColor: theme.palette.primary.main\n    },\n    location: {\n      color: theme.palette.common.white\n    }\n  });\n});\nfunction LocationList(_ref) {\n  _s();\n\n  var _this = this;\n\n  var allLocationsData = _ref.allLocationsData;\n  var classes = useStyles();\n  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n  var isSmall = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.default)(theme.breakpoints.up(\"sm\"));\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Container, {\n    fixed: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"text-center py-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold text-white\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"Explore\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n    container: true,\n    spacing: isSmall ? 8 : 4,\n    justify: \"center\",\n    className: classes.location,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, allLocationsData.map(function (location, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n      item: true,\n      xs: 12,\n      sm: 4,\n      md: 3,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }\n    }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/\" + location.slug,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    }, __jsx(components_RatioContainer__WEBPACK_IMPORTED_MODULE_2__.default, {\n      percentage: isSmall ? \"100%\" : \"56.25%\",\n      style: {\n        background: \"url(\".concat(location.images[0].link, \") no-repeat center\"),\n        backgroundSize: \"cover\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 19\n      }\n    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n      variant: \"h6\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 19\n      }\n    }, location.name))));\n  }))));\n}\n\n_s(LocationList, \"J6zGm7J/AIsByPJc+PIH8oIG+8s=\", false, function () {\n  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.default];\n});\n\n_c = LocationList;\n\nvar _c;\n\n$RefreshReg$(_c, \"LocationList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2NhdGlvbkxpc3QudHN4PzE1YjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImxvY2F0aW9uIiwiY29sb3IiLCJjb21tb24iLCJ3aGl0ZSIsIkxvY2F0aW9uTGlzdCIsImFsbExvY2F0aW9uc0RhdGEiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJpc1NtYWxsIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJtYXAiLCJpIiwic2x1ZyIsImJhY2tncm91bmQiLCJpbWFnZXMiLCJsaW5rIiwiYmFja2dyb3VuZFNpemUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUMzQkMsc0VBQVksQ0FBQztBQUNYQyxRQUFJLEVBQUU7QUFDSkMscUJBQWUsRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDO0FBRG5DLEtBREs7QUFJWEMsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRVIsS0FBSyxDQUFDSSxPQUFOLENBQWNLLE1BQWQsQ0FBcUJDO0FBRHBCO0FBSkMsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQWVlLFNBQVNDLFlBQVQsT0FBK0Q7QUFBQTs7QUFBQTs7QUFBQSxNQUF2Q0MsZ0JBQXVDLFFBQXZDQSxnQkFBdUM7QUFDNUUsTUFBTUMsT0FBTyxHQUFHZixTQUFTLEVBQXpCO0FBQ0EsTUFBTUUsS0FBSyxHQUFHYyxrRUFBUSxFQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ2hCLEtBQUssQ0FBQ2lCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsQ0FBN0I7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFFTCxPQUFPLENBQUNYLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLHNCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixFQU1FLE1BQUMsbURBQUQ7QUFDRSxhQUFTLE1BRFg7QUFFRSxXQUFPLEVBQUVhLE9BQU8sR0FBRyxDQUFILEdBQU8sQ0FGekI7QUFHRSxXQUFPLEVBQUMsUUFIVjtBQUlFLGFBQVMsRUFBRUYsT0FBTyxDQUFDTixRQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdLLGdCQUFnQixDQUFDTyxHQUFqQixDQUFxQixVQUFDWixRQUFELEVBQVdhLENBQVg7QUFBQSxXQUNwQixNQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFLENBQXZCO0FBQTBCLFFBQUUsRUFBRSxDQUE5QjtBQUFpQyxTQUFHLEVBQUVBLENBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFFLE1BQU1iLFFBQVEsQ0FBQ2MsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhEQUFEO0FBQ0UsZ0JBQVUsRUFBRU4sT0FBTyxHQUFHLE1BQUgsR0FBWSxRQURqQztBQUVFLFdBQUssRUFBRTtBQUNMTyxrQkFBVSxnQkFBU2YsUUFBUSxDQUFDZ0IsTUFBVCxDQUFnQixDQUFoQixFQUFtQkMsSUFBNUIsdUJBREw7QUFFTEMsc0JBQWMsRUFBRTtBQUZYLE9BRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBUUUsTUFBQyx5REFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTBCbEIsUUFBUSxDQUFDbUIsSUFBbkMsQ0FSRixDQURGLENBREYsQ0FEb0I7QUFBQSxHQUFyQixDQU5ILENBTkYsQ0FERixDQURGO0FBa0NEOztHQXZDdUJmLFk7VUFDTmIsUyxFQUNGZ0IsOEQsRUFDRUUsb0U7OztLQUhNTCxZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Mb2NhdGlvbkxpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgQ29udGFpbmVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQge1xuICBtYWtlU3R5bGVzLFxuICBjcmVhdGVTdHlsZXMsXG4gIFRoZW1lLFxuICB1c2VUaGVtZSxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IFJhdGlvQ29udGFpbmVyIGZyb20gXCJjb21wb25lbnRzL1JhdGlvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJtb2R1bGVzL2xvY2F0aW9ucy9lbnRpdGllcy9sb2NhdGlvbi5lbnRpdHlcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgfSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgTG9jYXRpb25MaXN0UHJvcHMge1xuICBhbGxMb2NhdGlvbnNEYXRhOiBMb2NhdGlvbltdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvbkxpc3QoeyBhbGxMb2NhdGlvbnNEYXRhIH06IExvY2F0aW9uTGlzdFByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc1NtYWxsID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPENvbnRhaW5lciBmaXhlZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweS0xMFwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBFeHBsb3JlXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBzcGFjaW5nPXtpc1NtYWxsID8gOCA6IDR9XG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvY2F0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAge2FsbExvY2F0aW9uc0RhdGEubWFwKChsb2NhdGlvbiwgaSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs0fSBtZD17M30ga2V5PXtpfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvXCIgKyBsb2NhdGlvbi5zbHVnfT5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxSYXRpb0NvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlPXtpc1NtYWxsID8gXCIxMDAlXCIgOiBcIjU2LjI1JVwifVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtsb2NhdGlvbi5pbWFnZXNbMF0ubGlua30pIG5vLXJlcGVhdCBjZW50ZXJgLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9SYXRpb0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntsb2NhdGlvbi5uYW1lfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LocationList.tsx\n");

/***/ })

});