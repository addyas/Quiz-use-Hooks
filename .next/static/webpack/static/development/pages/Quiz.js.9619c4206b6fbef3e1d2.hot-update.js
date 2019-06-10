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
/* harmony import */ var _QuizQuestionButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuizQuestionButton.js */ "./components/QuizQuestionButton.js");
/* harmony import */ var _QuizQuestionButton_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_QuizQuestionButton_js__WEBPACK_IMPORTED_MODULE_3__);

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
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_QuizQuestionButton_js__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: index,
      button_text: option,
      clickHandler: handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }))), incorrectAnswer ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Sorry, that's not right") : null);
};

/* harmony default export */ __webpack_exports__["default"] = (QuizQuestion);

/***/ }),

/***/ "./components/QuizQuestionButton.js":
/*!******************************************!*\
  !*** ./components/QuizQuestionButton.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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
/* harmony import */ var _components_QuizQuestion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QuizQuestion.js */ "./components/QuizQuestion.js");
/* harmony import */ var _components_QuizEnd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/QuizEnd.js */ "./components/QuizEnd.js");
/* harmony import */ var _components_QuizEnd_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_QuizEnd_js__WEBPACK_IMPORTED_MODULE_4__);

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
  var quiz = null;

  if (isQuizEnd) {
    quiz = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_QuizEnd_js__WEBPACK_IMPORTED_MODULE_4___default.a, {
      resetClickHandler: handleResetClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  } else {
    quiz = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_QuizQuestion_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      quiz_question: quizData.quiz_questions[quiz_position - 1],
      showNextQuestionHandler: showNextQuestion,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    });
  }

  return quiz;
};

/* harmony default export */ __webpack_exports__["default"] = (Quiz);

/***/ })

})
//# sourceMappingURL=Quiz.js.9619c4206b6fbef3e1d2.hot-update.js.map