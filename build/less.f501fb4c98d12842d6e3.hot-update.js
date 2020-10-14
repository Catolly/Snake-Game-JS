webpackHotUpdate("less",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./style/style.less":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./style/style.less ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  font-family: 'Shovel Knight (extended)';\n}\n.disabled {\n  display: none !important;\n}\n.hidden {\n  opacity: 0;\n}\n#game-nav-wrap {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto;\n  width: fit-content;\n  height: 100vh;\n}\n#game-nav {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n#game-title {\n  margin: 0px;\n  margin-bottom: 10px;\n  user-select: none;\n}\n.btn {\n  line-height: 45px;\n  height: 45px;\n  border: 3px solid red;\n  background: none;\n  font-family: 'Shovel Knight (extended)';\n  user-select: none;\n}\n#game-nav .btn {\n  margin-top: 30px;\n}\n#game {\n  display: block;\n  margin: 0 auto;\n  height: fit-content;\n}\n#game-wrap {\n  height: fit-content;\n  width: fit-content;\n  margin: 0 auto;\n  position: relative;\n}\n#game-container {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n#restart {\n  position: absolute;\n  top: 16px;\n  left: 378px;\n  width: 192px;\n  text-align: center;\n  height: 35px;\n  line-height: 38px;\n  color: #fff;\n  z-index: 10;\n}\n#main-menu {\n  position: absolute;\n  top: 16px;\n  left: 154px;\n  width: 192px;\n  text-align: center;\n  height: 35px;\n  line-height: 38px;\n  color: #fff;\n  z-index: 10;\n}\n", "",{"version":3,"sources":["webpack://style/style.less","webpack://style/mainMenu.less","webpack://style/game.less"],"names":[],"mappings":"AAAA;EACC,SAAA;EACA,UAAA;EAEA,uCAAA;AAAD;AAGA;EACC,wBAAA;AADD;AAIA;EACC,UAAA;AAFD;ACRA;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EAEA,kBAAA;EACA,aAAA;ADSD;ACNA;EACC,aAAA;EACA,sBAAA;EACA,kBAAA;ADQD;ACLA;EACC,WAAA;EACA,mBAAA;EAEA,iBAAA;ADMD;ACHA;EACC,iBAAA;EACA,YAAA;EAEA,qBAAA;EACA,gBAAA;EAEA,uCAAA;EAEA,iBAAA;ADED;ACCA;EACC,gBAAA;ADCD;AErCA;EACC,cAAA;EACA,cAAA;EACA,mBAAA;AFuCD;AEpCA;EACC,mBAAA;EACA,kBAAA;EACA,cAAA;EAEA,kBAAA;AFqCD;AElCA;EACC,aAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AFoCD;AEjCA;EACC,kBAAA;EACA,SAAA;EACA,WAAA;EAEA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EAEA,WAAA;EACA,WAAA;AFiCD;AE9BA;EACC,kBAAA;EACA,SAAA;EACA,WAAA;EAEA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EAEA,WAAA;EACA,WAAA;AF8BD","sourcesContent":["body {\n\tmargin: 0;\n\tpadding: 0;\n\n\tfont-family: 'Shovel Knight (extended)';\n}\n\n.disabled {\n\tdisplay: none !important;\n}\n\n.hidden {\n\topacity: 0;\n}\n\n@import './mainMenu.less';\n@import './game.less';","@btnHeight: 45px;\n\n#game-nav-wrap {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmargin: auto;\n\n\twidth: fit-content;\n\theight: 100vh;\n}\n\n#game-nav {\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: center;\n}\n\n#game-title {\n\tmargin: 0px;\n\tmargin-bottom: 10px;\n\n\tuser-select: none;\n}\n\n.btn {\n\tline-height: @btnHeight;\n\theight: @btnHeight;\n\n\tborder: 3px solid red;\n\tbackground: none;\n\n\tfont-family: 'Shovel Knight (extended)';\n\n\tuser-select: none;\n}\n\n#game-nav .btn {\n\tmargin-top: 30px;\n}","@box: 32px;\n\n#game {\n\tdisplay: block;\n\tmargin: 0 auto;\n\theight: fit-content;\n}\n\n#game-wrap {\n\theight: fit-content;\n\twidth: fit-content;\n\tmargin: 0 auto;\n\n\tposition: relative;\n}\n\n#game-container {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n\n#restart {\n\tposition: absolute;\n\ttop: @box * 0.5;\n\tleft: @box * 12 - 6;\n\n\twidth: @box * 6;\n\ttext-align: center;\n\theight: 35px;\n\tline-height: 38px;\n\n\tcolor: #fff;\n\tz-index: 10;\n}\n\n#main-menu {\n\tposition: absolute;\n\ttop: @box * 0.5;\n\tleft: @box * 5 - 6;\n\n\twidth: @box * 6;\n\ttext-align: center;\n\theight: 35px;\n\tline-height: 38px;\n\n\tcolor: #fff;\n\tz-index: 10;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZS9zdHlsZS5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJfaSIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsInNvdXJjZU1hcHBpbmciLCJ0b0NvbW1lbnQiLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJzb3VyY2VNYXAiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDekYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFNBQVMsY0FBYyxlQUFlLDRDQUE0QyxHQUFHLGFBQWEsNkJBQTZCLEdBQUcsV0FBVyxlQUFlLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGlCQUFpQix1QkFBdUIsa0JBQWtCLEdBQUcsYUFBYSxrQkFBa0IsMkJBQTJCLHVCQUF1QixHQUFHLGVBQWUsZ0JBQWdCLHdCQUF3QixzQkFBc0IsR0FBRyxRQUFRLHNCQUFzQixpQkFBaUIsMEJBQTBCLHFCQUFxQiw0Q0FBNEMsc0JBQXNCLEdBQUcsa0JBQWtCLHFCQUFxQixHQUFHLFNBQVMsbUJBQW1CLG1CQUFtQix3QkFBd0IsR0FBRyxjQUFjLHdCQUF3Qix1QkFBdUIsbUJBQW1CLHVCQUF1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QUFwQixDQUFQO0FBQ0QsQyIsImZpbGUiOiJsZXNzLmY1MDFmYjRjOThkMTI4NDJkNmUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogJ1Nob3ZlbCBLbmlnaHQgKGV4dGVuZGVkKSc7XFxufVxcbi5kaXNhYmxlZCB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuI2dhbWUtbmF2LXdyYXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbiNnYW1lLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2dhbWUtdGl0bGUge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5idG4ge1xcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdTaG92ZWwgS25pZ2h0IChleHRlbmRlZCknO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbiNnYW1lLW5hdiAuYnRuIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbiNnYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG4jZ2FtZS13cmFwIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuI2dhbWUtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jcmVzdGFydCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE2cHg7XFxuICBsZWZ0OiAzNzhweDtcXG4gIHdpZHRoOiAxOTJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMzVweDtcXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuI21haW4tbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE2cHg7XFxuICBsZWZ0OiAxNTRweDtcXG4gIHdpZHRoOiAxOTJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMzVweDtcXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlL3N0eWxlLmxlc3NcIixcIndlYnBhY2s6Ly9zdHlsZS9tYWluTWVudS5sZXNzXCIsXCJ3ZWJwYWNrOi8vc3R5bGUvZ2FtZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFFQSx1Q0FBQTtBQUFEO0FBR0E7RUFDQyx3QkFBQTtBQUREO0FBSUE7RUFDQyxVQUFBO0FBRkQ7QUNSQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtBRFNEO0FDTkE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRFFEO0FDTEE7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtBRE1EO0FDSEE7RUFDQyxpQkFBQTtFQUNBLFlBQUE7RUFFQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsdUNBQUE7RUFFQSxpQkFBQTtBREVEO0FDQ0E7RUFDQyxnQkFBQTtBRENEO0FFckNBO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRnVDRDtBRXBDQTtFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7QUZxQ0Q7QUVsQ0E7RUFDQyxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUZvQ0Q7QUVqQ0E7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QUZpQ0Q7QUU5QkE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QUY4QkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFxuXFx0Zm9udC1mYW1pbHk6ICdTaG92ZWwgS25pZ2h0IChleHRlbmRlZCknO1xcbn1cXG5cXG4uZGlzYWJsZWQge1xcblxcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuXFx0b3BhY2l0eTogMDtcXG59XFxuXFxuQGltcG9ydCAnLi9tYWluTWVudS5sZXNzJztcXG5AaW1wb3J0ICcuL2dhbWUubGVzcyc7XCIsXCJAYnRuSGVpZ2h0OiA0NXB4O1xcblxcbiNnYW1lLW5hdi13cmFwIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0bWFyZ2luOiBhdXRvO1xcblxcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jZ2FtZS1uYXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNnYW1lLXRpdGxlIHtcXG5cXHRtYXJnaW46IDBweDtcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYnRuIHtcXG5cXHRsaW5lLWhlaWdodDogQGJ0bkhlaWdodDtcXG5cXHRoZWlnaHQ6IEBidG5IZWlnaHQ7XFxuXFxuXFx0Ym9yZGVyOiAzcHggc29saWQgcmVkO1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFxuXFx0Zm9udC1mYW1pbHk6ICdTaG92ZWwgS25pZ2h0IChleHRlbmRlZCknO1xcblxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4jZ2FtZS1uYXYgLmJ0biB7XFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXG59XCIsXCJAYm94OiAzMnB4O1xcblxcbiNnYW1lIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXHRoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jZ2FtZS13cmFwIHtcXG5cXHRoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG5cXHRtYXJnaW46IDAgYXV0bztcXG5cXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNyZXN0YXJ0IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiBAYm94ICogMC41O1xcblxcdGxlZnQ6IEBib3ggKiAxMiAtIDY7XFxuXFxuXFx0d2lkdGg6IEBib3ggKiA2O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDM1cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDM4cHg7XFxuXFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0ei1pbmRleDogMTA7XFxufVxcblxcbiNtYWluLW1lbnUge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IEBib3ggKiAwLjU7XFxuXFx0bGVmdDogQGJveCAqIDUgLSA2O1xcblxcblxcdHdpZHRoOiBAYm94ICogNjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAzNXB4O1xcblxcdGxpbmUtaGVpZ2h0OiAzOHB4O1xcblxcblxcdGNvbG9yOiAjZmZmO1xcblxcdHotaW5kZXg6IDEwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==