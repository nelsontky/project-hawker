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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StallContent; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/components/StallContent.tsx\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\nfunction StallContent(_ref) {\n  var _this = this;\n\n  var stallData = _ref.stallData;\n  var information = stallData.information;\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Container, {\n    fixed: true,\n    className: \"py-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n    container: true,\n    spacing: 8,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n    className: \"font-bold text-left\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, \"Location\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n    className: \"text-justify\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, information[property]), Object.keys(information).map(function (property, i) {\n    return __jsx(\"div\", {\n      key: i,\n      className: \"mb-4\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 13\n      }\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n      className: \"font-bold text-left\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 15\n      }\n    }, lodash__WEBPACK_IMPORTED_MODULE_1___default().startCase(property)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n      className: \"text-justify\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }, information[property]));\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n    container: true,\n    item: true,\n    xs: 12,\n    sm: 6,\n    spacing: 4,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, stallData.images.map(function (image, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n      item: true,\n      xs: 12,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      src: image.link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 15\n      }\n    }));\n  }))));\n}\n_c = StallContent;\n\nvar _c;\n\n$RefreshReg$(_c, \"StallContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGFsbENvbnRlbnQudHN4PzkxMmIiXSwibmFtZXMiOlsiU3RhbGxDb250ZW50Iiwic3RhbGxEYXRhIiwiaW5mb3JtYXRpb24iLCJwcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpIiwiXyIsImltYWdlcyIsImltYWdlIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFNZSxTQUFTQSxZQUFULE9BQXdEO0FBQUE7O0FBQUEsTUFBaENDLFNBQWdDLFFBQWhDQSxTQUFnQztBQUFBLE1BQzdEQyxXQUQ2RCxHQUM3Q0QsU0FENkMsQ0FDN0RDLFdBRDZEO0FBR3JFLFNBQ0UsTUFBQyx3REFBRDtBQUFXLFNBQUssTUFBaEI7QUFBaUIsYUFBUyxFQUFDLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBRSxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFZLGFBQVMsRUFBQyxxQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFLE1BQUMseURBQUQ7QUFBWSxhQUFTLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxXQUFXLENBQUNDLFFBQUQsQ0FEZCxDQUZGLEVBS0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxXQUFaLEVBQXlCSSxHQUF6QixDQUE2QixVQUFDSCxRQUFELEVBQVdJLENBQVg7QUFBQSxXQUM1QjtBQUFLLFNBQUcsRUFBRUEsQ0FBVjtBQUFhLGVBQVMsRUFBQyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5REFBRDtBQUFZLGVBQVMsRUFBQyxxQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyx1REFBQSxDQUFZTCxRQUFaLENBREgsQ0FERixFQUlFLE1BQUMseURBQUQ7QUFBWSxlQUFTLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxXQUFXLENBQUNDLFFBQUQsQ0FEZCxDQUpGLENBRDRCO0FBQUEsR0FBN0IsQ0FMSCxDQURGLEVBaUJFLE1BQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsUUFBSSxNQUFwQjtBQUFxQixNQUFFLEVBQUUsRUFBekI7QUFBNkIsTUFBRSxFQUFFLENBQWpDO0FBQW9DLFdBQU8sRUFBRSxDQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFNBQVMsQ0FBQ1EsTUFBVixDQUFpQkgsR0FBakIsQ0FBcUIsVUFBQ0ksS0FBRCxFQUFRSCxDQUFSO0FBQUEsV0FDcEIsTUFBQyxtREFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLFNBQUcsRUFBRUEsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFRyxLQUFLLENBQUNDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURvQjtBQUFBLEdBQXJCLENBREgsQ0FqQkYsQ0FERixDQURGO0FBNkJEO0tBaEN1QlgsWSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU3RhbGxDb250ZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWxsIH0gZnJvbSBcIm1vZHVsZXMvc3RhbGxzL2VudGl0aWVzL3N0YWxsLmVudGl0eVwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmludGVyZmFjZSBTdGFsbENvbnRlbnRQcm9wcyB7XG4gIHN0YWxsRGF0YTogU3RhbGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YWxsQ29udGVudCh7IHN0YWxsRGF0YSB9OiBTdGFsbENvbnRlbnRQcm9wcykge1xuICBjb25zdCB7IGluZm9ybWF0aW9uIH0gPSBzdGFsbERhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGZpeGVkIGNsYXNzTmFtZT1cInB5LThcIj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs4fT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZWZ0XCI+TG9jYXRpb248L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5XCI+XG4gICAgICAgICAgICB7aW5mb3JtYXRpb25bcHJvcGVydHldfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoaW5mb3JtYXRpb24pLm1hcCgocHJvcGVydHksIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICB7Xy5zdGFydENhc2UocHJvcGVydHkpfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT1cInRleHQtanVzdGlmeVwiPlxuICAgICAgICAgICAgICAgIHtpbmZvcm1hdGlvbltwcm9wZXJ0eV19XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBpdGVtIHhzPXsxMn0gc209ezZ9IHNwYWNpbmc9ezR9PlxuICAgICAgICAgIHtzdGFsbERhdGEuaW1hZ2VzLm1hcCgoaW1hZ2UsIGkpID0+IChcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBrZXk9e2l9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2UubGlua30gLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/StallContent.tsx\n");

/***/ })

});