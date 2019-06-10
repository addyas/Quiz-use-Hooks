webpackHotUpdate("static\\development\\pages\\Quiz.js",{

/***/ "./pages/Quiz.js":
/*!***********************!*\
  !*** ./pages/Quiz.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\C60709\\addyas\\using-react-hooks\\pages\\Quiz.js";


var quizData = __webpack_require__(/*! ../data/quiz_data.json */ "./data/quiz_data.json");

var Quiz = function Quiz() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      quizPosition = _useState2[0],
      setQuizPosition = _useState2[1];

  var showNextQuestion = function showNextQuestion() {
    setQuizPosition(quizPosition + 1);
  };

  var handleResetClick = function handleResetClick() {
    setQuizPosition(1);
  };

  var isQuizEnd = quizPosition - 1 === quizData.quiz_questions.length ? true : false;
  var display;

  if (isQuizEnd) {
    display = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "quiz end, congrats");
  } else {
    display = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "not quiz end, no congrats");
  }

  return display;
};

/* harmony default export */ __webpack_exports__["default"] = (Quiz);

/***/ })

})
//# sourceMappingURL=Quiz.js.f54b0c3fd046ce552065.hot-update.js.map