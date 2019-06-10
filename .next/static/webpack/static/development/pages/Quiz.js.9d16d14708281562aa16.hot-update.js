webpackHotUpdate("static\\development\\pages\\Quiz.js",{

/***/ "./components/QuizQuestion.js":
/*!************************************!*\
  !*** ./components/QuizQuestion.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QuizQuestionButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuizQuestionButton.js */ "./components/QuizQuestionButton.js");

var _jsxFileName = "C:\\Users\\C60709\\addyas\\using-react-hooks\\components\\QuizQuestion.js";



var QuizQuestion = function QuizQuestion(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      incorrectAnswer = _useState2[0],
      setIncorrectAnswer = _useState2[1];

  var handleClick = function handleClick(buttonText) {
    if (buttonText === props.quiz_question.answer) {
      props.showNextQuestionHandler();
    }

    setIncorrectAnswer(!incorrectAnswer);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, props.quiz_question.instruction_text)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.quiz_question.answer_options.map(function (option, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_QuizQuestionButton_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      button_text: option,
      clickHandler: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
  }))), incorrectAnswer ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Sorry, that's not right") : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QuizQuestion);

/***/ })

})
//# sourceMappingURL=Quiz.js.9d16d14708281562aa16.hot-update.js.map