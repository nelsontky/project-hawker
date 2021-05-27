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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LocationList; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var components_LocationLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/LocationLink */ \"./components/LocationLink.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/components/LocationList.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.createStyles)({\n    root: {\n      backgroundColor: theme.palette.primary.main,\n      paddingTop: theme.spacing(10),\n      paddingBottom: theme.spacing(10)\n    },\n    header: {\n      fontFamily: \"'Fredericka the Great', cursive\",\n      \"-webkit-text-stroke-width\": \"1px\",\n      \"-webkit-text-stroke-color\": \"black\"\n    },\n    ratioContainer: {\n      borderStyle: \"solid\",\n      borderColor: theme.palette.common.white,\n      borderWidth: theme.spacing(2)\n    },\n    location: {\n      color: theme.palette.common.white,\n      transition: \"transform 0.2s\",\n      \"&:hover\": {\n        transform: \"translateY(-\".concat(theme.spacing(3), \"px)\"),\n        color: theme.palette.secondary.main,\n        \"& > a > div\": {\n          borderColor: theme.palette.secondary.main\n        }\n      }\n    }\n  });\n});\nfunction LocationList(_ref) {\n  _s();\n\n  var _this = this;\n\n  var allLocationsData = _ref.allLocationsData;\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    fixed: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"text-center mb-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    variant: \"h3\",\n    className: classes.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, \"Explore\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n    container: true,\n    spacing: 10,\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, allLocationsData.map(function (location, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n      item: true,\n      xs: 12,\n      sm: 6,\n      md: 4,\n      lg: 3,\n      key: i,\n      className: classes.location,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }\n    }, __jsx(components_LocationLink__WEBPACK_IMPORTED_MODULE_1__.default, {\n      location: location,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 15\n      }\n    }));\n  }))));\n}\n\n_s(LocationList, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = LocationList;\n\nvar _c;\n\n$RefreshReg$(_c, \"LocationList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2NhdGlvbkxpc3QudHN4PzE1YjYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInBhZGRpbmdUb3AiLCJzcGFjaW5nIiwicGFkZGluZ0JvdHRvbSIsImhlYWRlciIsImZvbnRGYW1pbHkiLCJyYXRpb0NvbnRhaW5lciIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJjb21tb24iLCJ3aGl0ZSIsImJvcmRlcldpZHRoIiwibG9jYXRpb24iLCJjb2xvciIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJzZWNvbmRhcnkiLCJMb2NhdGlvbkxpc3QiLCJhbGxMb2NhdGlvbnNEYXRhIiwiY2xhc3NlcyIsIm1hcCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUlBLElBQU1BLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FDM0JDLHNFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLHFCQUFlLEVBQUVILEtBQUssQ0FBQ0ksT0FBTixDQUFjQyxPQUFkLENBQXNCQyxJQURuQztBQUVKQyxnQkFBVSxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxFQUFkLENBRlI7QUFHSkMsbUJBQWEsRUFBRVQsS0FBSyxDQUFDUSxPQUFOLENBQWMsRUFBZDtBQUhYLEtBREs7QUFNWEUsVUFBTSxFQUFFO0FBQ05DLGdCQUFVLEVBQUUsaUNBRE47QUFFTixtQ0FBNkIsS0FGdkI7QUFHTixtQ0FBNkI7QUFIdkIsS0FORztBQVdYQyxrQkFBYyxFQUFFO0FBQ2RDLGlCQUFXLEVBQUUsT0FEQztBQUVkQyxpQkFBVyxFQUFFZCxLQUFLLENBQUNJLE9BQU4sQ0FBY1csTUFBZCxDQUFxQkMsS0FGcEI7QUFHZEMsaUJBQVcsRUFBRWpCLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQ7QUFIQyxLQVhMO0FBZ0JYVSxZQUFRLEVBQUU7QUFDUkMsV0FBSyxFQUFFbkIsS0FBSyxDQUFDSSxPQUFOLENBQWNXLE1BQWQsQ0FBcUJDLEtBRHBCO0FBRVJJLGdCQUFVLEVBQUUsZ0JBRko7QUFJUixpQkFBVztBQUNUQyxpQkFBUyx3QkFBaUJyQixLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLENBQWpCLFFBREE7QUFFVFcsYUFBSyxFQUFFbkIsS0FBSyxDQUFDSSxPQUFOLENBQWNrQixTQUFkLENBQXdCaEIsSUFGdEI7QUFJVCx1QkFBZTtBQUNiUSxxQkFBVyxFQUFFZCxLQUFLLENBQUNJLE9BQU4sQ0FBY2tCLFNBQWQsQ0FBd0JoQjtBQUR4QjtBQUpOO0FBSkg7QUFoQkMsR0FBRCxDQURlO0FBQUEsQ0FBRCxDQUE1QjtBQXFDZSxTQUFTaUIsWUFBVCxPQUErRDtBQUFBOztBQUFBOztBQUFBLE1BQXZDQyxnQkFBdUMsUUFBdkNBLGdCQUF1QztBQUM1RSxNQUFNQyxPQUFPLEdBQUczQixTQUFTLEVBQXpCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBRTJCLE9BQU8sQ0FBQ3ZCLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFFdUIsT0FBTyxDQUFDZixNQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixFQU1FLE1BQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLEVBQXpCO0FBQTZCLFdBQU8sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0djLGdCQUFnQixDQUFDRSxHQUFqQixDQUFxQixVQUFDUixRQUFELEVBQVdTLENBQVg7QUFBQSxXQUNwQixNQUFDLG1EQUFEO0FBQ0UsVUFBSSxNQUROO0FBRUUsUUFBRSxFQUFFLEVBRk47QUFHRSxRQUFFLEVBQUUsQ0FITjtBQUlFLFFBQUUsRUFBRSxDQUpOO0FBS0UsUUFBRSxFQUFFLENBTE47QUFNRSxTQUFHLEVBQUVBLENBTlA7QUFPRSxlQUFTLEVBQUVGLE9BQU8sQ0FBQ1AsUUFQckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVNFLE1BQUMsNERBQUQ7QUFBYyxjQUFRLEVBQUVBLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFURixDQURvQjtBQUFBLEdBQXJCLENBREgsQ0FORixDQURGLENBREY7QUEwQkQ7O0dBN0J1QkssWTtVQUNOekIsUzs7O0tBRE15QixZIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Mb2NhdGlvbkxpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JpZCwgVHlwb2dyYXBoeSwgQ29udGFpbmVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbXBvcnQgTG9jYXRpb25MaW5rIGZyb20gXCJjb21wb25lbnRzL0xvY2F0aW9uTGlua1wiO1xuXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJtb2R1bGVzL2xvY2F0aW9ucy9lbnRpdGllcy9sb2NhdGlvbi5lbnRpdHlcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxuICBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDEwKSxcbiAgICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICBmb250RmFtaWx5OiBcIidGcmVkZXJpY2thIHRoZSBHcmVhdCcsIGN1cnNpdmVcIixcbiAgICAgIFwiLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aFwiOiBcIjFweFwiLFxuICAgICAgXCItd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yXCI6IFwiYmxhY2tcIixcbiAgICB9LFxuICAgIHJhdGlvQ29udGFpbmVyOiB7XG4gICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgYm9yZGVyV2lkdGg6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4yc1wiLFxuXG4gICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke3RoZW1lLnNwYWNpbmcoMyl9cHgpYCxcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG5cbiAgICAgICAgXCImID4gYSA+IGRpdlwiOiB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4pO1xuXG5pbnRlcmZhY2UgTG9jYXRpb25MaXN0UHJvcHMge1xuICBhbGxMb2NhdGlvbnNEYXRhOiBMb2NhdGlvbltdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvbkxpc3QoeyBhbGxMb2NhdGlvbnNEYXRhIH06IExvY2F0aW9uTGlzdFByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPENvbnRhaW5lciBmaXhlZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi04XCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICAgICAgICBFeHBsb3JlXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezEwfSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAge2FsbExvY2F0aW9uc0RhdGEubWFwKChsb2NhdGlvbiwgaSkgPT4gKFxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgIHNtPXs2fVxuICAgICAgICAgICAgICBtZD17NH1cbiAgICAgICAgICAgICAgbGc9ezN9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvY2F0aW9ufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TG9jYXRpb25MaW5rIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LocationList.tsx\n");

/***/ })

});