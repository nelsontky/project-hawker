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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StallContent; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/components/StallContent.tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\nfunction StallContent(_ref) {\n  var _this = this;\n\n  var stallData = _ref.stallData;\n  var information = stallData.information;\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n    fixed: true,\n    className: \"py-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n    container: true,\n    spacing: 8,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, Object.keys(information).map(function (property, i) {\n    return __jsx(\"div\", {\n      key: i,\n      className: \"mb-4\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n      className: \"font-bold text-center sm:text-left\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }\n    }, lodash__WEBPACK_IMPORTED_MODULE_1___default().startCase(property)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n      className: \"text-justify\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 15\n      }\n    }, information[property]));\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n    container: true,\n    item: true,\n    xs: 12,\n    sm: 6,\n    spacing: 4,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, stallData.images.map(function (image, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n      item: true,\n      xs: 12,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      src: image.link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 15\n      }\n    }));\n  }))));\n}\n_c = StallContent;\n\nvar _c;\n\n$RefreshReg$(_c, \"StallContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGFsbENvbnRlbnQudHN4PzkxMmIiXSwibmFtZXMiOlsiU3RhbGxDb250ZW50Iiwic3RhbGxEYXRhIiwiaW5mb3JtYXRpb24iLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicHJvcGVydHkiLCJpIiwiXyIsImltYWdlcyIsImltYWdlIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFPZSxTQUFTQSxZQUFULE9BQXdEO0FBQUE7O0FBQUEsTUFBaENDLFNBQWdDLFFBQWhDQSxTQUFnQztBQUFBLE1BQzdEQyxXQUQ2RCxHQUM3Q0QsU0FENkMsQ0FDN0RDLFdBRDZEO0FBR3JFLFNBQ0UsTUFBQyx3REFBRDtBQUFXLFNBQUssTUFBaEI7QUFBaUIsYUFBUyxFQUFDLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixXQUFaLEVBQXlCRyxHQUF6QixDQUE2QixVQUFDQyxRQUFELEVBQVdDLENBQVg7QUFBQSxXQUM1QjtBQUFLLFNBQUcsRUFBRUEsQ0FBVjtBQUFhLGVBQVMsRUFBQyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5REFBRDtBQUFZLGVBQVMsRUFBQyxvQ0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyx1REFBQSxDQUFZRixRQUFaLENBREgsQ0FERixFQUlFLE1BQUMseURBQUQ7QUFDRSxlQUFTLEVBQUMsY0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0dKLFdBQVcsQ0FBQ0ksUUFBRCxDQUhkLENBSkYsQ0FENEI7QUFBQSxHQUE3QixDQURILENBREYsRUFlRSxNQUFDLG1EQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFFBQUksTUFBcEI7QUFBcUIsTUFBRSxFQUFFLEVBQXpCO0FBQTZCLE1BQUUsRUFBRSxDQUFqQztBQUFvQyxXQUFPLEVBQUUsQ0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxTQUFTLENBQUNRLE1BQVYsQ0FBaUJKLEdBQWpCLENBQXFCLFVBQUNLLEtBQUQsRUFBUUgsQ0FBUjtBQUFBLFdBQ3BCLE1BQUMsbURBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixTQUFHLEVBQUVBLENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUcsS0FBSyxDQUFDQyxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEb0I7QUFBQSxHQUFyQixDQURILENBZkYsQ0FERixDQURGO0FBMkJEO0tBOUJ1QlgsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3RhbGxDb250ZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWxsIH0gZnJvbSBcIm1vZHVsZXMvc3RhbGxzL2VudGl0aWVzL3N0YWxsLmVudGl0eVwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuXG5pbnRlcmZhY2UgU3RhbGxDb250ZW50UHJvcHMge1xuICBzdGFsbERhdGE6IFN0YWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFsbENvbnRlbnQoeyBzdGFsbERhdGEgfTogU3RhbGxDb250ZW50UHJvcHMpIHtcbiAgY29uc3QgeyBpbmZvcm1hdGlvbiB9ID0gc3RhbGxEYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBmaXhlZCBjbGFzc05hbWU9XCJweS04XCI+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17OH0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAge09iamVjdC5rZXlzKGluZm9ybWF0aW9uKS5tYXAoKHByb3BlcnR5LCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAge18uc3RhcnRDYXNlKHByb3BlcnR5KX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aW5mb3JtYXRpb25bcHJvcGVydHldfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgaXRlbSB4cz17MTJ9IHNtPXs2fSBzcGFjaW5nPXs0fT5cbiAgICAgICAgICB7c3RhbGxEYXRhLmltYWdlcy5tYXAoKGltYWdlLCBpKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLmxpbmt9IC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/StallContent.tsx\n");

/***/ })

});