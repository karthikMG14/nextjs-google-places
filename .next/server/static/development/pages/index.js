module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/user/Documents/Accenture/next-js-places-map/components/layout.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Layout({\n  children\n}) {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://rsms.me/inter/inter.css\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, children));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcz8wOWE3Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCO0FBQUVDO0FBQUYsQ0FBaEIsRUFBOEI7QUFDM0MsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxPQUFHLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsaUNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxRQURILENBSkYsQ0FERjtBQVVEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9yc21zLm1lL2ludGVyL2ludGVyLmNzc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./components/searchForm.js":
/*!**********************************!*\
  !*** ./components/searchForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ \"@react-google-maps/api\");\n/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_maps_mapSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/maps/mapSlice */ \"./redux/maps/mapSlice.js\");\nvar _jsxFileName = \"/Users/user/Documents/Accenture/next-js-places-map/components/searchForm.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst scriptOptions = {\n  googleMapsApiKey: \"AIzaSyCn7YgQgOtNoSwAXJ_OQ-urMB5oNVq73cM\",\n  libraries: ['places']\n};\nfunction SearchForm({\n  action\n}) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    isLoaded,\n    loadError\n  } = Object(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__[\"useLoadScript\"])(scriptOptions);\n  const {\n    0: autocomplete,\n    1: setAutocomplete\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  let locationData = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(state => state.mapsData);\n  let dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  console.log(locationData.data);\n\n  const onKeypress = e => {\n    if (e.key === 'Enter') {\n      e.preventDefault();\n      return false;\n    }\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n  };\n\n  const onLoad = autocompleteObj => {\n    setAutocomplete(autocompleteObj);\n  };\n\n  const onPlaceChanged = e => {\n    if (autocomplete) {\n      const place = autocomplete.getPlace();\n\n      if ('place_id' in place) {\n        dispatch(Object(_redux_maps_mapSlice__WEBPACK_IMPORTED_MODULE_5__[\"getMapLocation\"])({\n          place: place\n        }));\n      }\n    }\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {}, [dispatch, locationData.data]);\n  return __jsx(\"div\", {\n    className: \"bg-white shadow p-10 rounded\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, loadError && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, \"Google Map script can't be loaded, please reload the page\"), isLoaded && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-3xl leading-9 font-extrabold tracking-tight text-gray-900 mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, \"Search Place\"), __jsx(\"form\", {\n    className: \"flex\",\n    onSubmit: handleSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"w-full\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__[\"Autocomplete\"], {\n    onLoad: onLoad,\n    fields: ['place_id'],\n    onPlaceChanged: onPlaceChanged,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, __jsx(\"input\", {\n    ref: inputEl,\n    type: \"text\",\n    className: \"form-input block py-3 w-full rounded-md\",\n    placeholder: \"Type keywords...\",\n    onKeyPress: onKeypress,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 17\n    }\n  }))))), __jsx(\"div\", {\n    style: {\n      marginTop: '1em'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }, __jsx(\"iframe\", {\n    src: `https://maps.google.com/maps?q=${locationData.data.lat},${locationData.data.lng}&output=embed`,\n    width: '100%',\n    height: 450,\n    style: {\n      border: 0\n    },\n    allowfullscreen: \"\",\n    loading: \"lazy\",\n    referrerpolicy: \"no-referrer-when-downgrade\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlYXJjaEZvcm0uanM/MzAyNSJdLCJuYW1lcyI6WyJzY3JpcHRPcHRpb25zIiwiZ29vZ2xlTWFwc0FwaUtleSIsImxpYnJhcmllcyIsIlNlYXJjaEZvcm0iLCJhY3Rpb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0xvYWRlZCIsImxvYWRFcnJvciIsInVzZUxvYWRTY3JpcHQiLCJhdXRvY29tcGxldGUiLCJzZXRBdXRvY29tcGxldGUiLCJ1c2VTdGF0ZSIsImlucHV0RWwiLCJ1c2VSZWYiLCJsb2NhdGlvbkRhdGEiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibWFwc0RhdGEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJvbktleXByZXNzIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU3VibWl0Iiwib25Mb2FkIiwiYXV0b2NvbXBsZXRlT2JqIiwib25QbGFjZUNoYW5nZWQiLCJwbGFjZSIsImdldFBsYWNlIiwiZ2V0TWFwTG9jYXRpb24iLCJSZWFjdCIsInVzZUVmZmVjdCIsIm1hcmdpblRvcCIsImxhdCIsImxuZyIsImJvcmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsYUFBYSxHQUFHO0FBQ3BCQyxrQkFBZ0IsRUFBRSx5Q0FERTtBQUVwQkMsV0FBUyxFQUFFLENBQUMsUUFBRDtBQUZTLENBQXRCO0FBT2UsU0FBU0MsVUFBVCxDQUFvQjtBQUFFQztBQUFGLENBQXBCLEVBQWdDO0FBQzdDLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDLFlBQUY7QUFBWUM7QUFBWixNQUEwQkMsNEVBQWEsQ0FBQ1QsYUFBRCxDQUE3QztBQUNBLFFBQU07QUFBQSxPQUFDVSxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Msc0RBQVEsQ0FBQyxJ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K0wsa0JBQWMsRUFBQyw0QkFBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUROLENBNUJGLENBREY7QUFrQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlYXJjaEZvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge1xuICB1c2VMb2FkU2NyaXB0LFxuICBBdXRvY29tcGxldGUsXG59IGZyb20gJ0ByZWFjdC1nb29nbGUtbWFwcy9hcGknO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7dXNlU2VsZWN0b3IsdXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtnZXRNYXBMb2NhdGlvbn0gZnJvbSBcIi4uL3JlZHV4L21hcHMvbWFwU2xpY2VcIjtcbmNvbnN0IHNjcmlwdE9wdGlvbnMgPSB7XG4gIGdvb2dsZU1hcHNBcGlLZXk6IFwiQUl6YVN5Q243WWdRZ090Tm9Td0FYSl9PUS11ck1CNW9OVnE3M2NNXCIsXG4gIGxpYnJhcmllczogWydwbGFjZXMnXSxcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBhY3Rpb24gfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpc0xvYWRlZCwgbG9hZEVycm9yIH0gPSB1c2VMb2FkU2NyaXB0KHNjcmlwdE9wdGlvbnMpXG4gIGNvbnN0IFthdXRvY29tcGxldGUsIHNldEF1dG9jb21wbGV0ZV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBpbnB1dEVsID0gdXNlUmVmKG51bGwpXG5cbiAgbGV0IGxvY2F0aW9uRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWFwc0RhdGEpXG4gIGxldCBkaXNwYXRjaCA9ICB1c2VEaXNwYXRjaCgpXG5cbiAgY29uc29sZS5sb2cobG9jYXRpb25EYXRhLmRhdGEpXG5cbiAgY29uc3Qgb25LZXlwcmVzcyA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgY29uc3Qgb25Mb2FkID0gKGF1dG9jb21wbGV0ZU9iaikgPT4ge1xuICAgIHNldEF1dG9jb21wbGV0ZShhdXRvY29tcGxldGVPYmopXG4gIH1cblxuICBjb25zdCBvblBsYWNlQ2hhbmdlZCA9IChlKSA9PiB7XG4gICAgaWYgKGF1dG9jb21wbGV0ZSkge1xuICAgICAgY29uc3QgcGxhY2UgPSBhdXRvY29tcGxldGUuZ2V0UGxhY2UoKVxuICAgICAgaWYgKCdwbGFjZV9pZCcgaW4gcGxhY2UpIHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0TWFwTG9jYXRpb24oe3BsYWNlOnBsYWNlfSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgfSxbZGlzcGF0Y2gsbG9jYXRpb25EYXRhLmRhdGFdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3cgcC0xMCByb3VuZGVkXCI+XG4gICAgICB7IGxvYWRFcnJvciAmJiAoXG4gICAgICAgIDxkaXY+R29vZ2xlIE1hcCBzY3JpcHQgY2FuJ3QgYmUgbG9hZGVkLCBwbGVhc2UgcmVsb2FkIHRoZSBwYWdlPC9kaXY+XG4gICAgICApIH1cblxuICAgICAgeyBpc0xvYWRlZCAmJiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGVhZGluZy05IGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgbWItNFwiPlNlYXJjaCBQbGFjZTwvaDE+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgIG9uTG9hZD17b25Mb2FkfVxuICAgICAgICAgICAgICAgIGZpZWxkcz17WydwbGFjZV9pZCddfVxuICAgICAgICAgICAgICAgIG9uUGxhY2VDaGFuZ2VkPXtvblBsYWNlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgcmVmPXtpbnB1dEVsfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dCBibG9jayBweS0zIHctZnVsbCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBrZXl3b3Jkcy4uLlwiXG4gICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbktleXByZXNzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKSB9XG5cbiAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzFlbSd9fT5cbiAgICAgICAgICAgIDxpZnJhbWUgc3JjPXtgaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz9xPSR7bG9jYXRpb25EYXRhLmRhdGEubGF0fSwke2xvY2F0aW9uRGF0YS5kYXRhLmxuZ30mb3V0cHV0PWVtYmVkYH0gd2lkdGg9eycxMDAlJ30gaGVpZ2h0PXs0NTB9IHN0eWxlPXt7Ym9yZGVyOjB9fSBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/searchForm.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TestPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_searchForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/searchForm */ \"./components/searchForm.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\nvar _jsxFileName = \"/Users/user/Documents/Accenture/next-js-places-map/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction TestPage() {\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Search Place\")), __jsx(\"div\", {\n    className: \"container mx-auto px-10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"m-20 w-full lg:w-6/12 mx-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, __jsx(_components_searchForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    action: \"/search\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIlRlc3RQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFDakMsU0FFRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBWSxVQUFNLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FMRixDQUZGO0FBY0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoRm9ybSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNlYXJjaCBQbGFjZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTIwIHctZnVsbCBsZzp3LTYvMTIgbXgtYXV0b1wiPlxuICAgICAgICAgIDxTZWFyY2hGb3JtIGFjdGlvbj1cIi9zZWFyY2hcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./redux/maps/mapSlice.js":
/*!********************************!*\
  !*** ./redux/maps/mapSlice.js ***!
  \********************************/
/*! exports provided: getMapLocation, mapsSlice, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMapLocation\", function() { return getMapLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapsSlice\", function() { return mapsSlice; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getMapLocation = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createAsyncThunk\"])('map/getMapLocation', async (payload, {\n  getState\n}) => {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://localhost:3000/api/mapdata?placeId=${payload.place.place_id}`).then(res => {\n    try {\n      return {\n        data: res.data.result.result.geometry.location\n      };\n    } catch (e) {\n      return {\n        data: {}\n      };\n    }\n  }).catch(err => alert(\"Something went wrong try again later\"));\n});\nconst mapsSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'maps',\n  initialState: {\n    loading: true,\n    error: false,\n    data: {\n      lat: 17.4770936,\n      lng: 78.3920437\n    }\n  },\n  extraReducers: {\n    [getMapLocation.pending]: state => {\n      state.loading = true;\n      state.error = false;\n    },\n    [getMapLocation.fulfilled]: (state, action) => {\n      state.loading = false;\n      state.error = false;\n      state.data = action.payload.data;\n    },\n    [getMapLocation.rejected]: state => {\n      state.loading = false;\n      state.error = true;\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mapsSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9tYXBzL21hcFNsaWNlLmpzP2IwYTkiXSwibmFtZXMiOlsiZ2V0TWFwTG9jYXRpb24iLCJjcmVhdGVBc3luY1RodW5rIiwicGF5bG9hZCIsImdldFN0YXRlIiwiYXhpb3MiLCJnZXQiLCJwbGFjZSIsInBsYWNlX2lkIiwidGhlbiIsInJlcyIsImRhdGEiLCJyZXN1bHQiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwiZSIsImNhdGNoIiwiZXJyIiwiYWxlcnQiLCJtYXBzU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJsYXQiLCJsbmciLCJleHRyYVJlZHVjZXJzIiwicGVuZGluZyIsInN0YXRlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicmVqZWN0ZWQiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHTyxNQUFNQSxjQUFjLEdBQUdDLHlFQUFnQixDQUFDLG9CQUFELEVBQzdDLE9BQU9DLE9BQVAsRUFBZ0I7QUFBQ0M7QUFBRCxDQUFoQixLQUErQjtBQUN4QixTQUFPQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVcsNkNBQTRDSCxPQUFPLENBQUNJLEtBQVIsQ0FBY0MsUUFBUyxFQUE5RSxFQUNOQyxJQURNLENBQ0RDLEdBQUcsSUFBSTtBQUNULFFBQUc7QUFDQyxhQUFPO0FBQUNDLFlBQUksRUFBQ0QsR0FBRyxDQUFDQyxJQUFKLENBQVNDLE1BQVQsQ0FBZ0JBLE1BQWhCLENBQXVCQyxRQUF2QixDQUFnQ0M7QUFBdEMsT0FBUDtBQUNILEtBRkQsQ0FFQyxPQUFNQyxDQUFOLEVBQVE7QUFDTCxhQUFPO0FBQUNKLFlBQUksRUFBQztBQUFOLE9BQVA7QUFDSDtBQUNKLEdBUE0sRUFRTkssS0FSTSxDQVFBQyxHQUFHLElBQUlDLEtBQUssQ0FBQyxzQ0FBRCxDQVJaLENBQVA7QUFTTixDQVg0QyxDQUF2QztBQWNBLE1BQU1DLFNBQVMsR0FBR0Msb0VBQVcsQ0FBQztBQUNwQ0MsTUFBSSxFQUFFLE1BRDhCO0FBRXBDQyxjQUFZLEVBQUU7QUFDUEMsV0FBTyxFQUFFLElBREY7QUFFUEMsU0FBSyxFQUFFLEtBRkE7QUFHUGIsUUFBSSxFQUFFO0FBQUNjLFNBQUcsRUFBQyxVQUFMO0FBQWdCQyxTQUFHLEVBQUM7QUFBcEI7QUFIQyxHQUZzQjtBQU9wQ0MsZUFBYSxFQUFFO0FBQ2QsS0FBQzFCLGNBQWMsQ0FBQzJCLE9BQWhCLEdBQTJCQyxLQUFELElBQVc7QUFDM0JBLFdBQUssQ0FBQ04sT0FBTixHQUFnQixJQUFoQjtBQUNBTSxXQUFLLENBQUNMLEtBQU4sR0FBYyxLQUFkO0FBQ1QsS0FKYTtBQUtkLEtBQUN2QixjQUFjLENBQUM2QixTQUFoQixHQUE0QixDQUFDRCxLQUFELEVBQVFFLE1BQVIsS0FBbUI7QUFDckNGLFdBQUssQ0FBQ04sT0FBTixHQUFnQixLQUFoQjtBQUNBTSxXQUFLLENBQUNMLEtBQU4sR0FBYyxLQUFkO0FBQ0FLLFdBQUssQ0FBQ2xCLElBQU4sR0FBYW9CLE1BQU0sQ0FBQzVCLE9BQVAsQ0FBZVEsSUFBNUI7QUFDVCxLQVRhO0FBVWQsS0FBQ1YsY0FBYyxDQUFDK0IsUUFBaEIsR0FBNEJILEtBQUQsSUFBVztBQUNyQ0EsV0FBSyxDQUFDTixPQUFOLEdBQWdCLEtBQWhCO0FBQ1NNLFdBQUssQ0FBQ0wsS0FBTixHQUFjLElBQWQ7QUFDVDtBQWJhO0FBUHFCLENBQUQsQ0FBN0I7QUF5QlFMLHdFQUFTLENBQUNjLE9BQXpCIiwiZmlsZSI6Ii4vcmVkdXgvbWFwcy9tYXBTbGljZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1hcExvY2F0aW9uID0gY3JlYXRlQXN5bmNUaHVuaygnbWFwL2dldE1hcExvY2F0aW9uJywgXHJcblx0YXN5bmMgKHBheWxvYWQsIHtnZXRTdGF0ZX0pID0+IHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL21hcGRhdGE/cGxhY2VJZD0ke3BheWxvYWQucGxhY2UucGxhY2VfaWR9YClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge2RhdGE6cmVzLmRhdGEucmVzdWx0LnJlc3VsdC5nZW9tZXRyeS5sb2NhdGlvbn1cclxuICAgICAgICAgICAgfWNhdGNoKGUpeyBcclxuICAgICAgICAgICAgICAgIHJldHVybiB7ZGF0YTp7fX1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nIHRyeSBhZ2FpbiBsYXRlclwiKSlcclxuXHR9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBtYXBzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcblx0bmFtZTogJ21hcHMnLFxyXG5cdGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICAgIGRhdGE6IHtsYXQ6MTcuNDc3MDkzNixsbmc6NzguMzkyMDQzN30sXHJcbiAgICB9LFxyXG5cdGV4dHJhUmVkdWNlcnM6IHtcclxuXHRcdFtnZXRNYXBMb2NhdGlvbi5wZW5kaW5nXTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gZmFsc2VcclxuXHRcdH0sXHJcblx0XHRbZ2V0TWFwTG9jYXRpb24uZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gZmFsc2VcclxuICAgICAgICAgICAgc3RhdGUuZGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGFcclxuXHRcdH0sXHJcblx0XHRbZ2V0TWFwTG9jYXRpb24ucmVqZWN0ZWRdOiAoc3RhdGUpID0+IHtcclxuXHRcdFx0c3RhdGUubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gdHJ1ZVxyXG5cdFx0fSxcclxuXHR9XHJcblx0XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFwc1NsaWNlLnJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/maps/mapSlice.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Documents/Accenture/next-js-places-map/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@react-google-maps/api":
/*!*****************************************!*\
  !*** external "@react-google-maps/api" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@react-google-maps/api\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpXCI/Y2FmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVhY3QtZ29vZ2xlLW1hcHMvYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@react-google-maps/api\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCI/Y2NkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVkdXhqcy90b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@reduxjs/toolkit\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ })

/******/ });