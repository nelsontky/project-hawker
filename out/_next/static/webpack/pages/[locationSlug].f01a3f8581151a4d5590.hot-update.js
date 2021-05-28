/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locationSlug]",{

/***/ "./components/StallLink.tsx":
/*!**********************************!*\
  !*** ./components/StallLink.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StallLink; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ \"./node_modules/@material-ui/core/esm/useMediaQuery/index.js\");\n/* harmony import */ var components_RatioContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/RatioContainer */ \"./components/RatioContainer.tsx\");\n/* harmony import */ var lib_hooks_use_progressive_image_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/hooks/use-progressive-image.hook */ \"./lib/hooks/use-progressive-image.hook.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/components/StallLink.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.createStyles)({\n    root: {\n      boxShadow: \"3px 6px 4px -2px rgba(0,0,0,0.62)\",\n      transition: \"transform 0.2s, box-shadow 0.2s, filter 0.2s ease-out\",\n      \"&:hover\": {\n        transform: \"translateY(-\".concat(theme.spacing(3), \"px)\"),\n        boxShadow: \"3px 18px 4px -2px rgba(0,0,0,0.62)\"\n      }\n    },\n    ratioContainer: function ratioContainer(props) {\n      return {\n        backgroundImage: \"url(\".concat(props.src, \")\"),\n        backgroundPosition: \"center center\",\n        backgroundRepeat: \"no-repeat\",\n        backgroundSize: \"cover\",\n        filter: props.blur ? \"blur(8px)\" : \"none\"\n      };\n    }\n  });\n});\nfunction StallLink(_ref) {\n  _s();\n\n  var stall = _ref.stall,\n      locationSlug = _ref.locationSlug;\n  var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme)();\n  var isSmall = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.default)(theme.breakpoints.up(\"sm\"));\n  var image = stall.images[0];\n\n  var _useProgressiveImage = (0,lib_hooks_use_progressive_image_hook__WEBPACK_IMPORTED_MODULE_3__.useProgressiveImage)({\n    compressedSrc: image.compressedBase64,\n    src: image.link\n  }),\n      src = _useProgressiveImage.src,\n      blur = _useProgressiveImage.blur;\n\n  var classes = useStyles({\n    src: src,\n    blur: blur\n  });\n  return __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n    href: \"/\".concat(locationSlug, \"/\").concat(stall.slug),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(components_RatioContainer__WEBPACK_IMPORTED_MODULE_2__.default, {\n    className: classes.ratioContainer,\n    percentage: isSmall ? \"100%\" : \"56.25%\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"text-center mt-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n    variant: \"h6\",\n    className: \"font-bold leading-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, stall.name))));\n}\n\n_s(StallLink, \"sRd7VfuJWvjaPSmfGum1kHbSiik=\", false, function () {\n  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.useTheme, _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__.default, lib_hooks_use_progressive_image_hook__WEBPACK_IMPORTED_MODULE_3__.useProgressiveImage, useStyles];\n});\n\n_c = StallLink;\n\nvar _c;\n\n$RefreshReg$(_c, \"StallLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdGFsbExpbmsudHN4P2UwZmEiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwicm9vdCIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJ0cmFuc2Zvcm0iLCJzcGFjaW5nIiwicmF0aW9Db250YWluZXIiLCJwcm9wcyIsImJhY2tncm91bmRJbWFnZSIsInNyYyIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImZpbHRlciIsImJsdXIiLCJTdGFsbExpbmsiLCJzdGFsbCIsImxvY2F0aW9uU2x1ZyIsInVzZVRoZW1lIiwiaXNTbWFsbCIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsInVwIiwiaW1hZ2UiLCJpbWFnZXMiLCJ1c2VQcm9ncmVzc2l2ZUltYWdlIiwiY29tcHJlc3NlZFNyYyIsImNvbXByZXNzZWRCYXNlNjQiLCJsaW5rIiwiY2xhc3NlcyIsInNsdWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUdBO0FBT0EsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFvQixVQUFDQyxLQUFEO0FBQUEsU0FDOUNDLHNFQUFZLENBQUM7QUFDWEMsUUFBSSxFQUFFO0FBQ0pDLGVBQVMsRUFBRSxtQ0FEUDtBQUVKQyxnQkFBVSxFQUFFLHVEQUZSO0FBSUosaUJBQVc7QUFDVEMsaUJBQVMsd0JBQWlCTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLENBQWpCLFFBREE7QUFFVEgsaUJBQVM7QUFGQTtBQUpQLEtBREs7QUFVWEksa0JBQWMsRUFBRSx3QkFBQ0MsS0FBRDtBQUFBLGFBQVk7QUFDMUJDLHVCQUFlLGdCQUFTRCxLQUFLLENBQUNFLEdBQWYsTUFEVztBQUUxQkMsMEJBQWtCLEVBQUUsZUFGTTtBQUcxQkMsd0JBQWdCLEVBQUUsV0FIUTtBQUkxQkMsc0JBQWMsRUFBRSxPQUpVO0FBTTFCQyxjQUFNLEVBQUVOLEtBQUssQ0FBQ08sSUFBTixHQUFhLFdBQWIsR0FBMkI7QUFOVCxPQUFaO0FBQUE7QUFWTCxHQUFELENBRGtDO0FBQUEsQ0FBcEIsQ0FBNUI7QUEyQmUsU0FBU0MsU0FBVCxPQUE0RDtBQUFBOztBQUFBLE1BQXZDQyxLQUF1QyxRQUF2Q0EsS0FBdUM7QUFBQSxNQUFoQ0MsWUFBZ0MsUUFBaENBLFlBQWdDO0FBQ3pFLE1BQU1sQixLQUFLLEdBQUdtQixrRUFBUSxFQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ3JCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsQ0FBN0I7QUFFQSxNQUFNQyxLQUFLLEdBQUdQLEtBQUssQ0FBQ1EsTUFBTixDQUFhLENBQWIsQ0FBZDs7QUFKeUUsNkJBS25EQyx5RkFBbUIsQ0FBQztBQUN4Q0MsaUJBQWEsRUFBRUgsS0FBSyxDQUFDSSxnQkFEbUI7QUFFeENsQixPQUFHLEVBQUVjLEtBQUssQ0FBQ0s7QUFGNkIsR0FBRCxDQUxnQztBQUFBLE1BS2pFbkIsR0FMaUUsd0JBS2pFQSxHQUxpRTtBQUFBLE1BSzVESyxJQUw0RCx3QkFLNURBLElBTDREOztBQVV6RSxNQUFNZSxPQUFPLEdBQUdoQyxTQUFTLENBQUM7QUFBRVksT0FBRyxFQUFIQSxHQUFGO0FBQU9LLFFBQUksRUFBSkE7QUFBUCxHQUFELENBQXpCO0FBRUEsU0FDRSxNQUFDLGtEQUFEO0FBQU0sUUFBSSxhQUFNRyxZQUFOLGNBQXNCRCxLQUFLLENBQUNjLElBQTVCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsT0FBTyxDQUFDNUIsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFDRSxhQUFTLEVBQUU0QixPQUFPLENBQUN2QixjQURyQjtBQUVFLGNBQVUsRUFBRWEsT0FBTyxHQUFHLE1BQUgsR0FBWSxRQUZqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBQyx3QkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxLQUFLLENBQUNlLElBRFQsQ0FERixDQVBGLENBREYsQ0FERjtBQWlCRDs7R0E3QnVCaEIsUztVQUNSRyw4RCxFQUNFRSxvRSxFQUdNSyxxRixFQUtONUIsUzs7O0tBVk1rQixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TdGFsbExpbmsudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHtcbiAgbWFrZVN0eWxlcyxcbiAgY3JlYXRlU3R5bGVzLFxuICBUaGVtZSxcbiAgdXNlVGhlbWUsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCI7XG5cbmltcG9ydCBSYXRpb0NvbnRhaW5lciBmcm9tIFwiY29tcG9uZW50cy9SYXRpb0NvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBTdGFsbCB9IGZyb20gXCJtb2R1bGVzL3N0YWxscy9lbnRpdGllcy9zdGFsbC5lbnRpdHlcIjtcbmltcG9ydCB7IHVzZVByb2dyZXNzaXZlSW1hZ2UgfSBmcm9tIFwibGliL2hvb2tzL3VzZS1wcm9ncmVzc2l2ZS1pbWFnZS5ob29rXCI7XG5cbmludGVyZmFjZSBTdHlsZVByb3BzIHtcbiAgYmx1cjogYm9vbGVhbjtcbiAgc3JjOiBzdHJpbmc7XG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXM8VGhlbWUsIFN0eWxlUHJvcHM+KCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgYm94U2hhZG93OiBcIjNweCA2cHggNHB4IC0ycHggcmdiYSgwLDAsMCwwLjYyKVwiLFxuICAgICAgdHJhbnNpdGlvbjogXCJ0cmFuc2Zvcm0gMC4ycywgYm94LXNoYWRvdyAwLjJzLCBmaWx0ZXIgMC4ycyBlYXNlLW91dFwiLFxuXG4gICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0ke3RoZW1lLnNwYWNpbmcoMyl9cHgpYCxcbiAgICAgICAgYm94U2hhZG93OiBgM3B4IDE4cHggNHB4IC0ycHggcmdiYSgwLDAsMCwwLjYyKWAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmF0aW9Db250YWluZXI6IChwcm9wcykgPT4gKHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb3BzLnNyY30pYCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXIgY2VudGVyXCIsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcblxuICAgICAgZmlsdGVyOiBwcm9wcy5ibHVyID8gXCJibHVyKDhweClcIiA6IFwibm9uZVwiLFxuICAgIH0pLFxuICB9KVxuKTtcblxuaW50ZXJmYWNlIFN0YWxsTGlua1Byb3BzIHtcbiAgc3RhbGw6IFN0YWxsO1xuICBsb2NhdGlvblNsdWc6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhbGxMaW5rKHsgc3RhbGwsIGxvY2F0aW9uU2x1ZyB9OiBTdGFsbExpbmtQcm9wcykge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzU21hbGwgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKFwic21cIikpO1xuXG4gIGNvbnN0IGltYWdlID0gc3RhbGwuaW1hZ2VzWzBdO1xuICBjb25zdCB7IHNyYywgYmx1ciB9ID0gdXNlUHJvZ3Jlc3NpdmVJbWFnZSh7XG4gICAgY29tcHJlc3NlZFNyYzogaW1hZ2UuY29tcHJlc3NlZEJhc2U2NCxcbiAgICBzcmM6IGltYWdlLmxpbmssXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyBzcmMsIGJsdXIgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmPXtgLyR7bG9jYXRpb25TbHVnfS8ke3N0YWxsLnNsdWd9YH0+XG4gICAgICA8YT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgPFJhdGlvQ29udGFpbmVyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucmF0aW9Db250YWluZXJ9XG4gICAgICAgICAgICBwZXJjZW50YWdlPXtpc1NtYWxsID8gXCIxMDAlXCIgOiBcIjU2LjI1JVwifVxuICAgICAgICAgID48L1JhdGlvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGxlYWRpbmctbm9uZVwiPlxuICAgICAgICAgICAge3N0YWxsLm5hbWV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICA8L0xpbms+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/StallLink.tsx\n");

/***/ }),

/***/ "./pages/[locationSlug]/index.tsx":
/*!****************************************!*\
  !*** ./pages/[locationSlug]/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ HawkerCenter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var components_StallLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/StallLink */ \"./components/StallLink.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/app/pages/[locationSlug]/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\nvar useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(function (theme) {\n  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.createStyles)({\n    stall: {\n      \"&:hover\": {\n        color: theme.palette.primary.main\n      }\n    }\n  });\n});\nvar __N_SSG = true;\nfunction HawkerCenter(_ref) {\n  _s();\n\n  var _this = this;\n\n  var locationData = _ref.locationData,\n      locationSlug = _ref.locationSlug;\n  var classes = useStyles();\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, locationData.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    maxWidth: \"md\",\n    className: \"flex flex-col justify-center h-full text-center pt-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n    variant: \"h2\",\n    className: \"font-bold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, locationData.name)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    fixed: true,\n    className: \"py-16\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n    container: true,\n    spacing: 10,\n    justify: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, locationData.stalls.map(function (stall, i) {\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n      item: true,\n      xs: 12,\n      sm: 6,\n      md: 4,\n      lg: 3,\n      key: i,\n      className: classes.stall,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 13\n      }\n    }, __jsx(components_StallLink__WEBPACK_IMPORTED_MODULE_2__.default, {\n      stall: stall,\n      locationSlug: locationSlug,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 15\n      }\n    }));\n  }))));\n}\n\n_s(HawkerCenter, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = HawkerCenter;\n\nvar _c;\n\n$RefreshReg$(_c, \"HawkerCenter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvY2F0aW9uU2x1Z10vaW5kZXgudHN4PzA0YWIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY3JlYXRlU3R5bGVzIiwic3RhbGwiLCJjb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsIkhhd2tlckNlbnRlciIsImxvY2F0aW9uRGF0YSIsImxvY2F0aW9uU2x1ZyIsImNsYXNzZXMiLCJuYW1lIiwic3RhbGxzIiwibWFwIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFXQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQzNCQyxzRUFBWSxDQUFDO0FBQ1hDLFNBQUssRUFBRTtBQUNMLGlCQUFXO0FBQ1RDLGFBQUssRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDO0FBRHBCO0FBRE47QUFESSxHQUFELENBRGU7QUFBQSxDQUFELENBQTVCOztBQVVlLFNBQVNDLFlBQVQsT0FHTztBQUFBOztBQUFBOztBQUFBLE1BRnBCQyxZQUVvQixRQUZwQkEsWUFFb0I7QUFBQSxNQURwQkMsWUFDb0IsUUFEcEJBLFlBQ29CO0FBQ3BCLE1BQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6QjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUVUsWUFBWSxDQUFDRyxJQUFyQixDQURGLENBREYsRUFLRSxNQUFDLHdEQUFEO0FBQ0UsWUFBUSxFQUFDLElBRFg7QUFFRSxhQUFTLEVBQUMsdURBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMseURBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLFdBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsWUFBWSxDQUFDRyxJQURoQixDQUpGLENBTEYsRUFjRSxNQUFDLHdEQUFEO0FBQVcsU0FBSyxNQUFoQjtBQUFpQixhQUFTLEVBQUMsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsV0FBTyxFQUFFLEVBQXpCO0FBQTZCLFdBQU8sRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFlBQVksQ0FBQ0ksTUFBYixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ1gsS0FBRCxFQUFRWSxDQUFSO0FBQUEsV0FDdkIsTUFBQyxtREFBRDtBQUNFLFVBQUksTUFETjtBQUVFLFFBQUUsRUFBRSxFQUZOO0FBR0UsUUFBRSxFQUFFLENBSE47QUFJRSxRQUFFLEVBQUUsQ0FKTjtBQUtFLFFBQUUsRUFBRSxDQUxOO0FBTUUsU0FBRyxFQUFFQSxDQU5QO0FBT0UsZUFBUyxFQUFFSixPQUFPLENBQUNSLEtBUHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FTRSxNQUFDLHlEQUFEO0FBQVcsV0FBSyxFQUFFQSxLQUFsQjtBQUF5QixrQkFBWSxFQUFFTyxZQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEYsQ0FEdUI7QUFBQSxHQUF4QixDQURILENBREYsQ0FkRixDQURGO0FBa0NEOztHQXhDdUJGLFk7VUFJTlQsUzs7O0tBSk1TLFkiLCJmaWxlIjoiLi9wYWdlcy9bbG9jYXRpb25TbHVnXS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUeXBvZ3JhcGh5LCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBjcmVhdGVTdHlsZXMsIFRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuXG5pbXBvcnQgQmFubmVyVG9wIGZyb20gXCJjb21wb25lbnRzL0Jhbm5lclRvcFwiO1xuaW1wb3J0IFN0YWxsTGluayBmcm9tIFwiY29tcG9uZW50cy9TdGFsbExpbmtcIjtcblxuaW1wb3J0IHsgTG9jYXRpb25zU2VydmljZSB9IGZyb20gXCJtb2R1bGVzL2xvY2F0aW9ucy9sb2NhdGlvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwibW9kdWxlcy9sb2NhdGlvbnMvZW50aXRpZXMvbG9jYXRpb24uZW50aXR5XCI7XG5pbXBvcnQgeyBlbnRpdHlUb09iamVjdCB9IGZyb20gXCJsaWIvdXRpbHMvZW50aXR5LXRvLW9iamVjdC51dGlsXCI7XG5cbmludGVyZmFjZSBIYXdrZXJDZW50ZXJQcm9wcyB7XG4gIGxvY2F0aW9uRGF0YTogTG9jYXRpb247XG4gIGxvY2F0aW9uU2x1Zzogc3RyaW5nO1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZTogVGhlbWUpID0+XG4gIGNyZWF0ZVN0eWxlcyh7XG4gICAgc3RhbGw6IHtcbiAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhhd2tlckNlbnRlcih7XG4gIGxvY2F0aW9uRGF0YSxcbiAgbG9jYXRpb25TbHVnLFxufTogSGF3a2VyQ2VudGVyUHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2xvY2F0aW9uRGF0YS5uYW1lfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7LyogPEJhbm5lclRvcCBpbWFnZT17bG9jYXRpb25EYXRhLmltYWdlc1swXX0+ICovfVxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBtYXhXaWR0aD1cIm1kXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBoLWZ1bGwgdGV4dC1jZW50ZXIgcHQtMTBcIlxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDJcIiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cbiAgICAgICAgICB7bG9jYXRpb25EYXRhLm5hbWV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgey8qIDwvQmFubmVyVG9wPiAqL31cbiAgICAgIDxDb250YWluZXIgZml4ZWQgY2xhc3NOYW1lPVwicHktMTZcIj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezEwfSBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAge2xvY2F0aW9uRGF0YS5zdGFsbHMubWFwKChzdGFsbCwgaSkgPT4gKFxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICB4cz17MTJ9XG4gICAgICAgICAgICAgIHNtPXs2fVxuICAgICAgICAgICAgICBtZD17NH1cbiAgICAgICAgICAgICAgbGc9ezN9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN0YWxsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3RhbGxMaW5rIHN0YWxsPXtzdGFsbH0gbG9jYXRpb25TbHVnPXtsb2NhdGlvblNsdWd9IC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKGxvY2F0aW9uU2x1ZykgPT4ge1xuICBjb25zdCBsb2NhdGlvbnNTZXJ2aWNlID0gYXdhaXQgTG9jYXRpb25zU2VydmljZS5idWlsZCgpO1xuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBsb2NhdGlvbnNTZXJ2aWNlLmZpbmRBbGwoKTtcblxuICBjb25zdCBwYXRocyA9IGxvY2F0aW9ucy5tYXAoKGxvY2F0aW9uKSA9PiAoe1xuICAgIHBhcmFtczogeyBsb2NhdGlvblNsdWc6IGxvY2F0aW9uLnNsdWcgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uc1NlcnZpY2UgPSBhd2FpdCBMb2NhdGlvbnNTZXJ2aWNlLmJ1aWxkKCk7XG4gIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGxvY2F0aW9uc1NlcnZpY2UuZmluZE9uZURlZXAoXG4gICAgcGFyYW1zLmxvY2F0aW9uU2x1ZyBhcyBzdHJpbmdcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsb2NhdGlvbkRhdGE6IGVudGl0eVRvT2JqZWN0KGxvY2F0aW9uRGF0YSksXG4gICAgICBsb2NhdGlvblNsdWc6IHBhcmFtcy5sb2NhdGlvblNsdWcsXG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[locationSlug]/index.tsx\n");

/***/ })

});