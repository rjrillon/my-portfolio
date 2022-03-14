self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Robin\\Desktop\\portfolio_website-STARTER\\src\\components\\TimeLine\\TimeLine.js",
    _this = undefined,
    _s = $RefreshSig$();





var TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

var Timeline = function Timeline() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var scroll = function scroll(node, left) {
    return node.scrollTo({
      left: left,
      behavior: 'smooth'
    });
  };

  var handleClick = function handleClick(e, i) {
    e.preventDefault(); //dont want to refresh

    if (carouselRef.current) {
      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleResize = function handleResize() {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "My name is Robin Rillon and I am currently at the end of my 3rd year at San Francisco State University. My goal is to be a seasoned software engineer/developer but I also really enjoy making websites and other applications! Some of my hobbies include playing video games, watching anime, playing fantasy basketball/football, and more!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
            "final": index === TOTAL_CAROUSEL_COUNT - 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
              index: index,
              id: "carousel_item-".concat(index),
              active: activeItem,
              onClick: function onClick(e) {
                return handleClick(e, index);
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
                children: ["".concat(item.year), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                  width: "208",
                  height: "6",
                  viewBox: "0 0 208 6",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                    fill: "url(#paint0_linear)",
                    "fill-opacity": "0.33"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 71,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                      id: "paint0_linear",
                      x1: "-4.30412e-10",
                      y1: "0.5",
                      x2: "208",
                      y2: "0.500295",
                      gradientUnits: "userSpaceOnUse",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        "stop-color": "white"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        offset: "0.79478",
                        "stop-color": "white",
                        "stop-opacity": "0"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: function onClick(e) {
            return handleClick(e, index);
          },
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(Timeline, "qE2Y7awmqdFA9rYczLkhjQwwAdI=");

_c = Timeline;
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

var _c;

$RefreshReg$(_c, "Timeline");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiXSwibmFtZXMiOlsiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsInVzZVN0YXRlIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLHFFQUE3Qjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2VDLCtDQUFRLENBQUMsQ0FBRCxDQUR2QjtBQUFBLE1BQ2RDLFVBRGM7QUFBQSxNQUNGQyxhQURFOztBQUVyQixNQUFNQyxXQUFXLEdBQUdDLDZDQUFNLEVBQTFCOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUM3QixXQUFPRCxJQUFJLENBQUNFLFFBQUwsQ0FBYztBQUFFRCxVQUFJLEVBQUpBLElBQUY7QUFBUUUsY0FBUSxFQUFFO0FBQWxCLEtBQWQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFD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cy9pbmRleC45NDJjODc5MGZlNmUyNDliMzhjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2Fyb3VzZWxCdXR0b24sIENhcm91c2VsQnV0dG9uRG90LCBDYXJvdXNlbEJ1dHRvbnMsIENhcm91c2VsQ29udGFpbmVyLCBDYXJvdXNlbEl0ZW0sIENhcm91c2VsSXRlbUltZywgQ2Fyb3VzZWxJdGVtVGV4dCwgQ2Fyb3VzZWxJdGVtVGl0bGUsIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSB9IGZyb20gJy4vVGltZUxpbmVTdHlsZXMnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vZG9udCB3YW50IHRvIHJlZnJlc2hcblxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKSk7XG4gICAgICBcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZCgoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC8gKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqIFRpbWVMaW5lRGF0YS5sZW5ndGgpO1xuXG4gICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvLyAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG4gIC8vIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cbiAgICAgIDxTZWN0aW9uVGl0bGU+QWJvdXQgTWU8L1NlY3Rpb25UaXRsZT5cbiAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgTXkgbmFtZSBpcyBSb2JpbiBSaWxsb24gYW5kIEkgYW0gY3VycmVudGx5IGF0IHRoZSBlbmQgb2YgbXkgM3JkIHllYXIgYXQgU2FuIEZyYW5jaXNjbyBTdGF0ZSBVbml2ZXJzaXR5LiBNeSBnb2FsIGlzIHRvIGJlIGEgXG4gICAgICAgIHNlYXNvbmVkIHNvZnR3YXJlIGVuZ2luZWVyL2RldmVsb3BlciBidXQgSSBhbHNvIHJlYWxseSBlbmpveSBtYWtpbmcgd2Vic2l0ZXMgYW5kIG90aGVyIGFwcGxpY2F0aW9ucyEgU29tZSBvZiBteSBob2JiaWVzIGluY2x1ZGVcbiAgICAgICAgcGxheWluZyB2aWRlbyBnYW1lcywgd2F0Y2hpbmcgYW5pbWUsIHBsYXlpbmcgZmFudGFzeSBiYXNrZXRiYWxsL2Zvb3RiYWxsLCBhbmQgbW9yZSEgXG4gICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9IG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9PlxuICAgICAgICA8PlxuICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSBrZXk9e2luZGV4fSBmaW5hbD17aW5kZXggPT09IFRPVEFMX0NBUk9VU0VMX0NPVU5UIC0gMX0+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICBpZD17YGNhcm91c2VsX2l0ZW0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAge2Ake2l0ZW0ueWVhcn1gfVxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbUltZ1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwOFwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwOCA2XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInVybCgjcGFpbnQwX2xpbmVhcilcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjAuMzNcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4MT1cIi00LjMwNDEyZS0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB5MT1cIjAuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjIwOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB5Mj1cIjAuNTAwMjk1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAuNzk0NzhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wLW9wYWNpdHk9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+IFxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XG4gICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvblxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25Eb3QgYWN0aXZlPXthY3RpdmVJdGVtfSAvPlxuICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbEJ1dHRvbnM+XG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgICA8L1NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=