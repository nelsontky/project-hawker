/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locationSlug]/[stallSlug]",{

/***/ "./components/StallContent.tsx":
/*!*************************************!*\
  !*** ./components/StallContent.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StallContent; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/components/StallContent.tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\nfunction StallContent(_ref) {\n  var _this = this;\n\n  var stallData = _ref.stallData;\n  var information = stallData.information;\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n    fixed: true,\n    className: \"py-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n    container: true,\n    spacing: 8,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, Object.keys(information).map(function (property, i) {\n    return __jsx(\"div\", {\n      key: i,\n      className: \"mb-4\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n      className: \"font-bold text-center\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 15\n      }\n    }, lodash__WEBPACK_IMPORTED_MODULE_1___default().startCase(property)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n      className: \"text-justify\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 15\n      }\n    }, information[property]));\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n    container: true,\n    item: true,\n    xs: 12,\n    sm: 6,\n    spacing: 4,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, stallData.images.map(function (image, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n      item: true,\n      xs: 12,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      src: \"/\" + image.link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 15\n      }\n    }));\n  }))));\n}\n_c = StallContent;\n\nvar _c;\n\n$RefreshReg$(_c, \"StallContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGFsbENvbnRlbnQudHN4PzkxMmIiXSwibmFtZXMiOlsiU3RhbGxDb250ZW50Iiwic3RhbGxEYXRhIiwiaW5mb3JtYXRpb24iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicHJvcGVydHkiLCJpIiwiXyIsImltYWdlcyIsImltYWdlIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFNZSxTQUFTQSxZQUFULE9BQXdEO0FBQUE7O0FBQUEsTUFBaENDLFNBQWdDLFFBQWhDQSxTQUFnQztBQUFBLE1BQzdEQyxXQUQ2RCxHQUM3Q0QsU0FENkMsQ0FDN0RDLFdBRDZEO0FBR3JFLFNBQ0UsTUFBQyx3REFBRDtBQUFXLFNBQUssTUFBaEI7QUFBaUIsYUFBUyxFQUFDLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixXQUFaLEVBQXlCRyxHQUF6QixDQUE2QixVQUFDQyxRQUFELEVBQVdDLENBQVg7QUFBQSxXQUM1QjtBQUFLLFNBQUcsRUFBRUEsQ0FBVjtBQUFhLGVBQVMsRUFBQyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5REFBRDtBQUFZLGVBQVMsRUFBQyx1QkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyx1REFBQSxDQUFZRixRQUFaLENBREgsQ0FERixFQUlFLE1BQUMseURBQUQ7QUFBWSxlQUFTLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSixXQUFXLENBQUNJLFFBQUQsQ0FEZCxDQUpGLENBRDRCO0FBQUEsR0FBN0IsQ0FESCxDQURGLEVBYUUsTUFBQyxtREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixRQUFJLE1BQXBCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUE2QixNQUFFLEVBQUUsQ0FBakM7QUFBb0MsV0FBTyxFQUFFLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsU0FBUyxDQUFDUSxNQUFWLENBQWlCSixHQUFqQixDQUFxQixVQUFDSyxLQUFELEVBQVFILENBQVI7QUFBQSxXQUNwQixNQUFDLG1EQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsU0FBRyxFQUFFQSxDQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUUsTUFBTUcsS0FBSyxDQUFDQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEb0I7QUFBQSxHQUFyQixDQURILENBYkYsQ0FERixDQURGO0FBeUJEO0tBNUJ1QlgsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3RhbGxDb250ZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWxsIH0gZnJvbSBcIm1vZHVsZXMvc3RhbGxzL2VudGl0aWVzL3N0YWxsLmVudGl0eVwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmludGVyZmFjZSBTdGFsbENvbnRlbnRQcm9wcyB7XG4gIHN0YWxsRGF0YTogU3RhbGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YWxsQ29udGVudCh7IHN0YWxsRGF0YSB9OiBTdGFsbENvbnRlbnRQcm9wcykge1xuICBjb25zdCB7IGluZm9ybWF0aW9uIH0gPSBzdGFsbERhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGZpeGVkIGNsYXNzTmFtZT1cInB5LThcIj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoaW5mb3JtYXRpb24pLm1hcCgocHJvcGVydHksIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHtfLnN0YXJ0Q2FzZShwcm9wZXJ0eSl9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5XCI+XG4gICAgICAgICAgICAgICAge2luZm9ybWF0aW9uW3Byb3BlcnR5XX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGl0ZW0geHM9ezEyfSBzbT17Nn0gc3BhY2luZz17NH0+XG4gICAgICAgICAge3N0YWxsRGF0YS5pbWFnZXMubWFwKChpbWFnZSwgaSkgPT4gKFxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGtleT17aX0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtcIi9cIiArIGltYWdlLmxpbmt9IC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StallContent.tsx\n");

/***/ })

});