/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    font-family: 'Jura', sans-serif;\nmargin: 0px;\n}\nbutton{\n    color: #fae3d9;\n    font-size: 15px;\n    font-weight: 700;\n    border-color: #ffb6b9;\n    background-color: #61c0bf;\n    width: 120px;\n    border-radius: 45px;\n    justify-content: center;\n    align-items: center;\n}\n\n.all:hover, .projectBtn:hover, .addProject:hover, .addTask:hover{\n     color:#61c0bf;\n    \n    border-color: #ffb6b9;\n    background-color: #fae3d9;\n}\n\n.submit{\n    color: black;\n    background-color: aquamarine;\n    font-size: 25px;\n    height: 25px;\n    width: 40px;\n    display:flex;\n\n}\n.submit:hover{\n    background-color: #61c0bf;\n}\n\n.add{\n    color: black;\n    background-color:#fae3d9;\n    font-size: 25px;\n    height: 25px;\n    width: 40px;\n    display:flex;\n}\n\n.add:hover{\n    background-color: #61c0bf;\n}\n\n.head{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color:#61c0bf;\n    height: 5em;\n    border-style: solid;\n    border-width: 15px;\n    border-color:#ffb6b9;\n}\n.titleName{\n    padding-left: 4%;\n    font-weight: 700;\n    font-size: 2.5em;\n    color: #fae3d9;\n}\n\n.user{\n    padding-right: 15px;\n    font-size: 1em;\n}\n.main{\n    display: grid;\n    grid-template-columns: .25fr 1fr;\n    background-color:#ffb6b9;\n    height:100vh;\n    border-right-width: 3em;\n    border-right-style: solid;\n    border-right-color: #ffb6b9;\n  \n}\n.display{\n  \n   border-top-right-radius: 45px;\n   border-top-left-radius: 45px;\n   background-color: aquamarine;\n}\n#date{\n   width: 8em;\n   background-color: lightgray;\n   border: none;\n   text-align: center;\n   height: 1.5em;\n   border-radius: 45px;\n}\n#priority{\n    height: 1.5em;\n    width:5em;\n    background-color: lightgray;\n   border: none;\n   text-align: center;\n   border-radius: 45px;\n}\n#description{\n    width: 15em;\n    height: 2em;\n    background-color: lightgray;\n   border: none;\n   text-align: center;\n   border-radius: 45px;;\n}\n#title{\n    width: 8em;\n    height: 1.75em;\n   background-color: lightgray;\n   border: none;\n   text-align: center;\n   border-radius: 45px;;\n}\ninput:focus,input:active{\n    outline: none;\nbackground-color: lightblue;\n  \n}\n#title:focus, #priority:focus, #date:focus, #description:focus{\n    background-color: lightblue;\n}\n#projName{\n    width: 70%\n}\n\n.formItem{\n    display:flex ;\n    flex-direction: column;\n\n    \n}\n.title, .description, .dueDate ,.priority{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    bottom:-0.2rem;\n    background-color:#ffb6b9;\n    width: 5em;\n    align-items: center;\n    left: .1em;\n    border-radius: 45px;\n    font-size: 13px;\n    \n}\n.description{\n    left: 1.4em;\n    top:.38em;\n    width: 6em;\n}\n.allFolder{\n    width: 100%;\n    background-color:#61c0bf;\n    border-top-left-radius: 45px;\n    border-top-right-radius: 45px;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.addTask{\n    \n    \n}\n.cardBtn, .cardBtn2{\n    \n    width: 75%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    color: black;\n    font-size: 20px;\n    border-top-right-radius: 45px;\n    border-top-left-radius: 45px;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    padding-bottom: 10px;\n}\n\n .toDoForm{\n   \n    display: none;\n    \n    justify-content: center;\n    align-items:center;\n    flex-direction: column;\n    gap:1em;\n}\n.desTit{\n    padding-top: 30px;\n    display: flex;\n    gap: 15px;\n}\n.datPri{\n    display: flex;\n    gap:20px\n}\n.addNew{\n    display:grid ;\n    grid-template-columns:  1fr ;\n    grid-template-rows: 1fr 1fr;\n}\n.posts{\n  \n}\n.card , .card2{\n color:black;\n display: flex;\n align-items: center;\n justify-content: center;\n flex-direction: column;\n background-color:none;\n width: 100%;\n height: 100%;\n gap:10px;\n font-size: 17px;\n}\n#text{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    font-style: italic;\n}\n\n#project{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n   gap:10px;\n   background:none;\n   background-color: aquamarine;\n   color: black;\n   padding-left: 15px;\n   width: 100%\n   \n}\n.rem{\n    width: 25px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: black\n}\n.material-symbols-outlined {\ncolor: black;\n    font-size: 20px;\n}\n.addProject{\n    width: 150px;\n}\n.projectAdd{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap:5px\n}\n.projectForm{\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap:5px\n}\n.projects{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap:5px\n}\n.projCont{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap:5px\n}\n#projTab{\n    font-size: 25px;\n   text-align: center;\n   border-style: ridge;\n   border-width: 2px;\n  border-color: transparent;\n   padding-top: 15px;\n   background-color: #61c0bf;\n   border-top-right-radius: 45px;\n   border-top-left-radius: 45px;\n   justify-content: center;\n   align-items: center;\n   flex-direction: column;\n   gap:10px;\n}\n/* .c1{\n    color:red;\n    width: 100px;\n    height: 20px;\n} */\n.sidebar{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    gap: 15px;\n    padding-top: 20px;\n    background-color: #ffb6b9; \n    \n}\n\n.save, .save2{\n    display: none;\n    width: 20%;\n    background-color: transparent;\n    border-color: transparent;\n}\n\n.editForm, .editForm2{\n    display: flex;\n    gap:15px;\n  \n}\n\n.dele, .dele2{\n    background-color: transparent;\n    border-color: transparent;\n    width: 20%;\n}\n\n.edit, .edit2{\n    background-color: transparent;\n    border-color: transparent;\n    width: 20%;\n}\n\n.dls, .dls2{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    gap:30px;\n}", "",{"version":3,"sources":["webpack://./src/layout.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    font-family: 'Jura', sans-serif;\nmargin: 0px;\n}\nbutton{\n    color: #fae3d9;\n    font-size: 15px;\n    font-weight: 700;\n    border-color: #ffb6b9;\n    background-color: #61c0bf;\n    width: 120px;\n    border-radius: 45px;\n    justify-content: center;\n    align-items: center;\n}\n\n.all:hover, .projectBtn:hover, .addProject:hover, .addTask:hover{\n     color:#61c0bf;\n    \n    border-color: #ffb6b9;\n    background-color: #fae3d9;\n}\n\n.submit{\n    color: black;\n    background-color: aquamarine;\n    font-size: 25px;\n    height: 25px;\n    width: 40px;\n    display:flex;\n\n}\n.submit:hover{\n    background-color: #61c0bf;\n}\n\n.add{\n    color: black;\n    background-color:#fae3d9;\n    font-size: 25px;\n    height: 25px;\n    width: 40px;\n    display:flex;\n}\n\n.add:hover{\n    background-color: #61c0bf;\n}\n\n.head{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color:#61c0bf;\n    height: 5em;\n    border-style: solid;\n    border-width: 15px;\n    border-color:#ffb6b9;\n}\n.titleName{\n    padding-left: 4%;\n    font-weight: 700;\n    font-size: 2.5em;\n    color: #fae3d9;\n}\n\n.user{\n    padding-right: 15px;\n    font-size: 1em;\n}\n.main{\n    display: grid;\n    grid-template-columns: .25fr 1fr;\n    background-color:#ffb6b9;\n    height:100vh;\n    border-right-width: 3em;\n    border-right-style: solid;\n    border-right-color: #ffb6b9;\n  \n}\n.display{\n  \n   border-top-right-radius: 45px;\n   border-top-left-radius: 45px;\n   background-color: aquamarine;\n}\n#date{\n   width: 8em;\n   background-color: lightgray;\n   border: none;\n   text-align: center;\n   height: 1.5em;\n   border-radius: 45px;\n}\n#priority{\n    height: 1.5em;\n    width:5em;\n    background-color: lightgray;\n   border: none;\n   text-align: center;\n   border-radius: 45px;\n}\n#description{\n    width: 15em;\n    height: 2em;\n    background-color: lightgray;\n   border: none;\n   text-align: center;\n   border-radius: 45px;;\n}\n#title{\n    width: 8em;\n    height: 1.75em;\n   background-color: lightgray;\n   border: none;\n   text-align: center;\n   border-radius: 45px;;\n}\ninput:focus,input:active{\n    outline: none;\nbackground-color: lightblue;\n  \n}\n#title:focus, #priority:focus, #date:focus, #description:focus{\n    background-color: lightblue;\n}\n#projName{\n    width: 70%\n}\n\n.formItem{\n    display:flex ;\n    flex-direction: column;\n\n    \n}\n.title, .description, .dueDate ,.priority{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    bottom:-0.2rem;\n    background-color:#ffb6b9;\n    width: 5em;\n    align-items: center;\n    left: .1em;\n    border-radius: 45px;\n    font-size: 13px;\n    \n}\n.description{\n    left: 1.4em;\n    top:.38em;\n    width: 6em;\n}\n.allFolder{\n    width: 100%;\n    background-color:#61c0bf;\n    border-top-left-radius: 45px;\n    border-top-right-radius: 45px;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.addTask{\n    \n    \n}\n.cardBtn, .cardBtn2{\n    \n    width: 75%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    color: black;\n    font-size: 20px;\n    border-top-right-radius: 45px;\n    border-top-left-radius: 45px;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    padding-bottom: 10px;\n}\n\n .toDoForm{\n   \n    display: none;\n    \n    justify-content: center;\n    align-items:center;\n    flex-direction: column;\n    gap:1em;\n}\n.desTit{\n    padding-top: 30px;\n    display: flex;\n    gap: 15px;\n}\n.datPri{\n    display: flex;\n    gap:20px\n}\n.addNew{\n    display:grid ;\n    grid-template-columns:  1fr ;\n    grid-template-rows: 1fr 1fr;\n}\n.posts{\n  \n}\n.card , .card2{\n color:black;\n display: flex;\n align-items: center;\n justify-content: center;\n flex-direction: column;\n background-color:none;\n width: 100%;\n height: 100%;\n gap:10px;\n font-size: 17px;\n}\n#text{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    font-style: italic;\n}\n\n#project{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n   gap:10px;\n   background:none;\n   background-color: aquamarine;\n   color: black;\n   padding-left: 15px;\n   width: 100%\n   \n}\n.rem{\n    width: 25px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: black\n}\n.material-symbols-outlined {\ncolor: black;\n    font-size: 20px;\n}\n.addProject{\n    width: 150px;\n}\n.projectAdd{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap:5px\n}\n.projectForm{\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap:5px\n}\n.projects{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap:5px\n}\n.projCont{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap:5px\n}\n#projTab{\n    font-size: 25px;\n   text-align: center;\n   border-style: ridge;\n   border-width: 2px;\n  border-color: transparent;\n   padding-top: 15px;\n   background-color: #61c0bf;\n   border-top-right-radius: 45px;\n   border-top-left-radius: 45px;\n   justify-content: center;\n   align-items: center;\n   flex-direction: column;\n   gap:10px;\n}\n/* .c1{\n    color:red;\n    width: 100px;\n    height: 20px;\n} */\n.sidebar{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    gap: 15px;\n    padding-top: 20px;\n    background-color: #ffb6b9; \n    \n}\n\n.save, .save2{\n    display: none;\n    width: 20%;\n    background-color: transparent;\n    border-color: transparent;\n}\n\n.editForm, .editForm2{\n    display: flex;\n    gap:15px;\n  \n}\n\n.dele, .dele2{\n    background-color: transparent;\n    border-color: transparent;\n    width: 20%;\n}\n\n.edit, .edit2{\n    background-color: transparent;\n    border-color: transparent;\n    width: 20%;\n}\n\n.dls, .dls2{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    gap:30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/layout.css":
/*!************************!*\
  !*** ./src/layout.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProj": () => (/* binding */ addProj)
/* harmony export */ });
/* harmony import */ var _togglesAndBtns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./togglesAndBtns */ "./src/togglesAndBtns.js");

function addProj() {
  let myProjs = [];
  const form = document.querySelector(".projectForm");

  class Proj {
    constructor(title, data) {
      this.title = title;
      this.data = data;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newProj = new Proj(
      document.getElementById("projName").value,
      Math.random() * 7
    );
    myProjs.push(newProj);
    (0,_togglesAndBtns__WEBPACK_IMPORTED_MODULE_0__.oneOpen)();
    updateArr();
    form.reset();
  }

  form.addEventListener("submit", handleSubmit);

  function updateArr() {
    // projs.innerText = "";
    myProjs.forEach((res) => {
      const data = document.createElement("div");
      const title_rem = document.createElement("button");
      const rem = document.createElement("button");
      const proj = document.querySelector(".projCont");
      const posts = document.querySelector(".posts");
      const projPost = document.createElement("div");
      projPost.setAttribute("class", res.title);
      projPost.setAttribute("id", "projTab");
      projPost.innerText = res.title;
      projPost.style.display = "flex";
      data.setAttribute("class", "data");
      title_rem.setAttribute("class", res.title);
      title_rem.setAttribute("id", "project");
      rem.setAttribute("class", "rem");
      data.style.display = "none";
      const projCardData = document.createTextNode(res.data);
      proj.append(data, title_rem);
      data.appendChild(projCardData);
      // title_rem.appendChild(projCardTitle);
      title_rem.innerText = res.title;
      title_rem.appendChild(rem);

      posts.appendChild(projPost);
      rem.innerHTML = `<span class="material-symbols-outlined">
delete
</span>`;

      title_rem.addEventListener("click", function () {
        if (projPost.style.display === "none") {
          (0,_togglesAndBtns__WEBPACK_IMPORTED_MODULE_0__.oneOpen)();
          projPost.style.display = "flex";
        } else {
          projPost.style.display = "none";
        }
      });

      rem.addEventListener("click", (e) => {
        if (e.target) {
          for (let i = 0; i < myProjs.length; i++) {
            if (myProjs[i].data == data.innerText) {
              myProjs.splice(i, 1);
              break;
            }
          }

          let allFolder = document.querySelector(".allFolder");

          for (let i = 0; i < projPost.children.length; i++) {
            let cardBtnId = projPost.children[i].id;
            let cardBtn2 = document.querySelector(
              "#" + cardBtnId + ".cardBtn2"
            );
            let cardBtn2Id = cardBtn2 ? cardBtn2.id : null;

            if (cardBtnId === cardBtn2Id) {
              allFolder.removeChild(cardBtn2);
            }
          }

          proj.removeChild(data);
          proj.removeChild(title_rem);
          posts.removeChild(projPost);
        }
      });
      myProjs.pop();
    });
  }

  return { updateArr };
}




/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTasks": () => (/* binding */ addTasks)
/* harmony export */ });


function addTasks() {
  let myTasks = [];
  let form = document.getElementById("form");
  let allFolder = document.querySelector(".allFolder");
  class Task {
    constructor(title, description, date, priority, data) {
      (this.title = title),
        (this.description = description),
        (this.date = date),
        (this.priority = priority),
        // (this.completed= completed),
        (this.data = data);
    }
  }
  form.addEventListener("submit", function addTask(event) {
    const newTask = new Task(
      document.getElementById("title").value,
      document.getElementById("description").value,
      document.getElementById("date").value,
      document.getElementById("priority").value,
      // document.getElementById("check").value,
      Math.random() * 7
    );
    event.preventDefault();
    myTasks.push(newTask);
    updateArr();
    form.reset();
  });
  function updateArr() {
    // posts.innerText = " ";

    myTasks.forEach((res) => {
      let card = document.createElement("div");
      let card2 = document.createElement("div");
      let c0 = document.createElement("div");
      let c02 = document.createElement("div");
      let c1 = document.createElement("div");
      let c12 = document.createElement("div");
      let c2 = document.createElement("div");
      let c22 = document.createElement("div");
      let c3 = document.createElement("div");
      let c32 = document.createElement("div");
      let c4 = document.createElement("div");
      let c42 = document.createElement("div");
      let edit = document.createElement("button");
      let edit2 = document.createElement("button");
      let save = document.createElement("button");
      let save2 = document.createElement("button");
      let cardBtn = document.createElement("button");
      let cardBtn2 = document.createElement("button");
      let dele = document.createElement("button");
      let dele2 = document.createElement("button");
      let posts = document.querySelector(".posts");
      let dls = document.createElement("div");
      let dls2 = document.createElement("div");
      let cardDescription = document.createTextNode(
        "Description: " + res.description
      );
      let cardDescription2 = document.createTextNode(
        "Description: " + res.description
      );
      let cardTitle = document.createTextNode(res.title);
      let cardTitle2 = document.createTextNode(res.title);
      let cardDate = document.createTextNode("Due Date: " + res.date);
      let cardDate2 = document.createTextNode("Due Date: " + res.date);
      let cardPriority = document.createTextNode("Priority: " + res.priority);
      let cardPriority2 = document.createTextNode("Priority: " + res.priority);
      let cardCompleted = document.createTextNode("Completed: ");
      let cardCompleted2 = document.createTextNode("Completed: ");
      let cardCheck = document.createElement("input");
      let cardCheck2 = document.createElement("input");
      cardCheck.type = "checkbox";
      cardCheck2.type = "checkbox";
      cardCheck.setAttribute("class", "cardCheck");
      cardCheck2.setAttribute("class", "cardCheck2");
      let cardData = document.createTextNode(res.data);
      let cardData2 = document.createTextNode(res.data);
      card.setAttribute("class", "card");
      card.setAttribute("id", res.title);
      card2.setAttribute("class", "card2");
      card2.setAttribute("id", res.title);
      c0.setAttribute("class", "c0");
      c02.setAttribute("class", "c02");
      c1.setAttribute("class", "c1");
      c12.setAttribute("class", "c12");
      c2.setAttribute("class", "c2");
      c22.setAttribute("class", "c22");
      c3.setAttribute("class", "c3");
      c32.setAttribute("class", "c32");
      c4.setAttribute("class", "c4");
      c42.setAttribute("class", "c42");
      dele.setAttribute("class", "dele");
      dele2.setAttribute("class", "dele2");
      edit.setAttribute("class", "edit");
      edit2.setAttribute("class", "edit2");
      save.setAttribute("class", "save");
      save2.setAttribute("class", "save2");
      dls.setAttribute("class", "dls");
      dls2.setAttribute("class", "dls2");
      c0.appendChild(cardData);
      c02.appendChild(cardData2);
      c2.appendChild(cardDescription);
      c22.appendChild(cardDescription2);
      c3.appendChild(cardDate);
      c32.appendChild(cardDate2);
      c4.appendChild(cardPriority);
      c42.appendChild(cardPriority2);
      card.appendChild(c2);
      card2.appendChild(c22);
      card.appendChild(c3);
      card2.appendChild(c32);
      card.appendChild(c4);
      card2.appendChild(c42);
      c1.append(cardCompleted, cardCheck);
      c12.append(cardCompleted2, cardCheck2);
      dls.append(save, edit, dele);
      dls2.append(save2, edit2, dele2);
      card.appendChild(dls);
      card2.appendChild(dls2);
      dele.innerHTML = `<span class="material-symbols-outlined">
      delete
      </span>`;
      dele2.innerHTML = `<span class="material-symbols-outlined">
      delete
      </span>`;
      edit.innerHTML = `<span class="material-symbols-outlined">
      edit
      </span>`;
      edit2.innerHTML = `<span class="material-symbols-outlined">
      edit
      </span>`;
      save.innerHTML = `<span class="material-symbols-outlined">
      save
      </span>`;
      save2.innerHTML = `<span class="material-symbols-outlined">
      save
      </span>`;

      dele.addEventListener("click", (e) => {
        if (e.target) {
          for (let i = 0; i < myTasks.length; i++) {
            if (myTasks[i].data == c0.innerText) {
              myTasks.splice(i, 1); // remove the corresponding task from myTasks array
              break;
            }
          }
          card.remove();
          cardBtn.remove();
          card2.remove();
          cardBtn2.remove();
        }
      });
      dele2.addEventListener("click", (e) => {
        if (e.target) {
          for (let i = 0; i < myTasks.length; i++) {
            if (myTasks[i].data == c02.innerText) {
              myTasks.splice(i, 1); // remove the corresponding task from myTasks array
              break;
            }
          }

          card.remove();
          cardBtn.remove();
          card2.remove();
          cardBtn2.remove();
        }
      });

      cardBtn.setAttribute("class", "cardBtn");
      cardBtn.setAttribute("id", res.title);
      cardBtn2.setAttribute("class", "cardBtn2");
      cardBtn2.setAttribute("id", res.title);
      cardBtn.append(cardTitle);
      cardBtn2.append(cardTitle2);
      let displayedCard = null;

      posts.childNodes.forEach((child) => {
        if (child.style.display === "flex") {
          displayedCard = child;
        }
      });

      if (displayedCard && displayedCard !== allFolder) {
        displayedCard.append(cardBtn);
        allFolder.append(cardBtn2);
      } else {
        allFolder.append(cardBtn2);
      }

      cardBtn.appendChild(card);
      cardBtn2.appendChild(card2);
      card.style.display = "none";
      card2.style.display = "none";
      cardBtn.addEventListener("click", function (e) {
        if (card.style.display === "none" && e.target == cardBtn) {
          card.style.display = "flex";
        } else if (card.style.display === "flex" && e.target == cardBtn) {
          card.style.display = "none";
        }
      });

      cardBtn2.addEventListener("click", function (e) {
        if (card2.style.display === "none" && e.target == cardBtn2) {
          card2.style.display = "flex";
        } else if (card2.style.display === "flex" && e.target == cardBtn2) {
          card2.style.display = "none";
        }
      });
      if (res.priority == "Low") {
        cardBtn2.style.backgroundColor = "#bbded6";
        cardBtn.style.backgroundColor = "#bbded6";
      } else if (res.priority == "Medium") {
        cardBtn2.style.backgroundColor = "#fae3d9";
        cardBtn.style.backgroundColor = "#fae3d9";
      } else {
        cardBtn2.style.backgroundColor = "#ffb6b9";
        cardBtn.style.backgroundColor = "#ffb6b9";
      }

      let editForm = document.createElement("form");
      let editForm2 = document.createElement("form");
      editForm.setAttribute("class", "editForm");
      editForm2.setAttribute("class", "editForm2");
      let labelDescription = document.createElement("label");
      labelDescription.innerText = "Description: ";
      let labelDescription2 = document.createElement("label");
      labelDescription2.innerText = "Description: ";
      let inputDescription = document.createElement("input");
      inputDescription.setAttribute("class", "inputDescription");
      let inputDescription2 = document.createElement("input");
      inputDescription2.setAttribute("class", "inputDescription");
      let labelDate = document.createElement("label");
      labelDate.innerText = "Date: ";
      let labelDate2 = document.createElement("label");
      labelDate2.innerText = "Date: ";

      let inputDate = document.createElement("input");
      inputDate.type = "date";

      let inputDate2 = document.createElement("input");
      inputDate2.type = "date";

      inputDate.setAttribute("class", "inputDate");
      inputDate2.setAttribute("class", "inputDate2");

      let labelPriority = document.createElement("label");
      labelPriority.innerText = "Priority: ";
      let labelPriority2 = document.createElement("label");
      labelPriority2.innerText = "Priority: ";
      let inputPriority = document.createElement("select");
      inputPriority.setAttribute("class", "inputPriority");
      let inputPriority2 = document.createElement("select");
      inputPriority2.setAttribute("class", "inputPriority");

      const option1 = document.createElement("option");
      option1.value = "Low";
      option1.text = "Low";

      const option2 = document.createElement("option");
      option2.value = "Medium";
      option2.text = "Medium";

      const option3 = document.createElement("option");
      option3.value = "High";
      option3.text = "High";

      const option12 = document.createElement("option");
      option12.value = "Low";
      option12.text = "Low";

      const option22 = document.createElement("option");
      option22.value = "Medium";
      option22.text = "Medium";

      const option32 = document.createElement("option");
      option32.value = "High";
      option32.text = "High";

      inputPriority.add(option1);
      inputPriority.add(option2);
      inputPriority.add(option3);

      inputPriority2.add(option12);
      inputPriority2.add(option22);
      inputPriority2.add(option32);

      editForm.style.display = "none";
      editForm2.style.display = "none";
      editForm.append(labelDescription, labelDate, labelPriority);
      editForm2.append(labelDescription2, labelDate2, labelPriority2);
      labelDescription.appendChild(inputDescription);
      labelDescription2.appendChild(inputDescription2);
      labelDate.appendChild(inputDate);
      labelDate2.appendChild(inputDate2);
      labelPriority.appendChild(inputPriority);
      labelPriority2.appendChild(inputPriority2);
      card.appendChild(editForm);
      card2.appendChild(editForm2);

      edit.addEventListener("click", () => {
        editForm.style.display = "flex";
        edit.style.display = "none";
        save.style.display = "flex";
      });
      edit2.addEventListener("click", () => {
        editForm2.style.display = "flex";
        edit2.style.display = "none";
        save2.style.display = "flex";
      });
      //correct
      save.addEventListener("click", function saveTask(e) {
        let good = e.target.parentNode;
        let goodC = good.parentNode;
        let goodCard = goodC.parentNode;
        let goodCardId = goodCard.id;

        let goodCard2 = document.getElementById(goodCardId);
        let card2 = goodCard2;
        let description = goodCard.querySelector(".c2");
        let date = goodCard.querySelector(".c3");
        let priority = goodCard.querySelector(".c4");
        let description2 = card2.querySelector(".c22");
        let date2 = card2.querySelector(".c32");
        let priority2 = card2.querySelector(".c42");

        if (goodCard.id == card2.id) {
          description2.innerHTML = "Description: " + inputDescription.value;
          date2.innerHTML = "Due Date: " + inputDate.value;
          priority2.innerHTML = "Priority: " + inputPriority.value;

          if (inputPriority.value == "Low") {
            cardBtn2.style.backgroundColor = "#bbded6";
          } else if (inputPriority.value == "Medium") {
            cardBtn2.style.backgroundColor = "#fae3d9;";
          } else {
            cardBtn2.style.backgroundColor = "#ffb6b9";
          }
        } else {
          console.log(card2, goodCard);
        }

        description.innerHTML = "Description: " + inputDescription.value;
        date.innerHTML = "Due Date: " + inputDate.value;
        priority.innerHTML = "Priority: " + inputPriority.value;

        if (inputPriority.value == "Low") {
          cardBtn.style.backgroundColor = "#bbded6";
        } else if (inputPriority.value == "Medium") {
          cardBtn.style.backgroundColor = "#fae3d9";
        } else {
          cardBtn.style.backgroundColor = "#ffb6b9";
        }

        editForm.style.display = "none";
        edit.style.display = "flex";
        save.style.display = "none";
      });

      save2.addEventListener("click", function saveTask2(e) {
        let good2 = e.target.parentNode;
        let goodC2 = good2.parentNode;
        let goodCard2 = goodC2.parentNode;
        let goodCardId2 = goodCard2.id;
        console.log(goodCardId2, goodCard2);
        let card = document.querySelector("#" + goodCardId2 + ".card");

        let description2 = goodCard2.querySelector(".c22");
        let date2 = goodCard2.querySelector(".c32");
        let priority2 = goodCard2.querySelector(".c42");

        if (card) {
          if (goodCard2.id == card.id) {
            let description = card.querySelector(".c2");
            let date = card.querySelector(".c3");
            let priority = card.querySelector(".c4");
            description.innerHTML = "Description: " + inputDescription2.value;
            date.innerHTML = "Due Date: " + inputDate2.value;
            priority.innerHTML = "Priority: " + inputPriority2.value;

            if (inputPriority2.value == "Low") {
              cardBtn.style.backgroundColor = "#bbded6";
            } else if (inputPriority2.value == "Medium") {
              cardBtn.style.backgroundColor = "#fae3d9";
            } else {
              cardBtn.style.backgroundColor = "#ffb6b9";
            }
          }
        }

        description2.innerHTML = "Description: " + inputDescription2.value;
        date2.innerHTML = "Due Date: " + inputDate2.value;
        priority2.innerHTML = "Priority: " + inputPriority2.value;

        if (inputPriority2.value == "Low") {
          cardBtn2.style.backgroundColor = "#bbded6";
        } else if (inputPriority2.value == "Medium") {
          cardBtn2.style.backgroundColor = "#fae3d9";
        } else {
          cardBtn2.style.backgroundColor = "#ffb6b9";
        }

        editForm2.style.display = "none";
        edit2.style.display = "flex";
        save2.style.display = "none";
      });

      myTasks.pop();
    });
  }
}


/***/ }),

/***/ "./src/togglesAndBtns.js":
/*!*******************************!*\
  !*** ./src/togglesAndBtns.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBtn": () => (/* binding */ addBtn),
/* harmony export */   "oneOpen": () => (/* binding */ oneOpen),
/* harmony export */   "projAll": () => (/* binding */ projAll),
/* harmony export */   "projBtnToggle": () => (/* binding */ projBtnToggle),
/* harmony export */   "projFormSubmitBtn": () => (/* binding */ projFormSubmitBtn),
/* harmony export */   "projFormToggle": () => (/* binding */ projFormToggle),
/* harmony export */   "taskBtnToggle": () => (/* binding */ taskBtnToggle)
/* harmony export */ });
//toggles task form
function taskBtnToggle() {
  const addTaskBtnToggle = document.querySelector(".addTask");
  let form = document.getElementById("form");
  addTaskBtnToggle.addEventListener("click", function () {
    if (form.style.display === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  });
}
//toggles list of projects
function projBtnToggle() {
  const projBtn = document.querySelector(".projectBtn");
  let projCont = document.querySelector(".projCont");
  projBtn.addEventListener("click", function () {
    if (projCont.style.display === "none") {
      projCont.style.display = "flex";
    } else {
      projCont.style.display = "none";
    }
  });
}
// toggles the form to make new projects
function projFormToggle() {
  const addProj = document.querySelector(".addProject");
  let form = document.querySelector(".projectForm");
  addProj.addEventListener("click", function () {
    if (form.style.display === "none") {
      form.style.display = "flex";
    } else {
      form.style.display = "none";
    }
  });
}
//hides the task form after submit
function addBtn() {
  let addBtn = document.querySelector(".add");
  let form = document.getElementById("form");
  addBtn.addEventListener("click", function () {
    form.style.display = "none";
  });
}

//hides project form after submit
function projFormSubmitBtn() {
  let addBtn = document.querySelector(".submit");
  let form = document.querySelector(".projectForm");
  addBtn.addEventListener("click", function () {
    form.style.display = "none";
  });
}
function oneOpen(){
  let posts = document.querySelectorAll("#projTab")
  
  for(let i = 0 ; i<posts.length; i ++){
    if(posts[i].style.display === "flex"){
  posts[i].style.display = "none"
}
  }

}
function projAll() {
  let allBtn = document.querySelector(".all");
  let posts = document.querySelector(".posts");
  let allFolder = document.createElement("div");
  allFolder.style.display = "none";
  allFolder.innerText = "All";
  allFolder.setAttribute("class", "allFolder");
  allFolder.setAttribute("id","projTab")
  posts.appendChild(allFolder);
  allBtn.addEventListener("click", function selectAll() {
    
    if (allFolder.style.display === "none") {
      oneOpen()
      allFolder.style.display = "flex";
    } else {
      allFolder.style.display = "none";
    }
  });
}






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.css */ "./src/layout.css");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _togglesAndBtns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./togglesAndBtns */ "./src/togglesAndBtns.js");
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProject */ "./src/addProject.js");





(0,_togglesAndBtns__WEBPACK_IMPORTED_MODULE_2__.projAll)();
(0,_togglesAndBtns__WEBPACK_IMPORTED_MODULE_2__.projFormSubmitBtn)();
(0,_togglesAndBtns__WEBPACK_IMPORTED_MODULE_2__.projFormToggle)();
(0,_addProject__WEBPACK_IMPORTED_MODULE_3__.addProj)();
(0,_togglesAndBtns__WEBPACK_IMPORTED_MODULE_2__.projBtnToggle)();
(0,_togglesAndBtns__WEBPACK_IMPORTED_MODULE_2__.addBtn)();
(0,_togglesAndBtns__WEBPACK_IMPORTED_MODULE_2__.taskBtnToggle)();
(0,_addTask__WEBPACK_IMPORTED_MODULE_1__.addTasks)();

document.addEventListener("keydown", function (e) {
  if (e.keyCode === 32) {
    e.preventDefault();
    var element = document.activeElement;
    if (
      element.tagName === "INPUT" ||
      element.tagName === "TEXTAREA" ||
      element.isContentEditable
    ) {
      var selectionStart = element.selectionStart;
      var selectionEnd = element.selectionEnd;
      var value = element.value;
      var newValue =
        value.substring(0, selectionStart) +
        " " +
        value.substring(selectionEnd);
      element.value = newValue;
      element.setSelectionRange(selectionStart + 1, selectionStart + 1);
    }
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxh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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsb0JBQW9CO0FBQzlDO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLDBCQUEwQixvQkFBb0I7QUFDOUM7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLHNEQUFzRDtBQUN0RCxZQUFZO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7QUFZRTs7Ozs7OztVQzdGRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2U7QUFRWDtBQUNhOztBQUV2Qyx3REFBTztBQUNQLGtFQUFpQjtBQUNqQiwrREFBYztBQUNkLG9EQUFPO0FBQ1AsOERBQWE7QUFDYix1REFBTTtBQUNOLDhEQUFhO0FBQ2Isa0RBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9sYXlvdXQuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xheW91dC5jc3M/ZWFlYyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2dnbGVzQW5kQnRucy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XFxubWFyZ2luOiAwcHg7XFxufVxcbmJ1dHRvbntcXG4gICAgY29sb3I6ICNmYWUzZDk7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZiNmI5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFjMGJmO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWxsOmhvdmVyLCAucHJvamVjdEJ0bjpob3ZlciwgLmFkZFByb2plY3Q6aG92ZXIsIC5hZGRUYXNrOmhvdmVye1xcbiAgICAgY29sb3I6IzYxYzBiZjtcXG4gICAgXFxuICAgIGJvcmRlci1jb2xvcjogI2ZmYjZiOTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZTNkOTtcXG59XFxuXFxuLnN1Ym1pdHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG5cXG59XFxuLnN1Ym1pdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxYzBiZjtcXG59XFxuXFxuLmFkZHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmYWUzZDk7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4uYWRkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFjMGJmO1xcbn1cXG5cXG4uaGVhZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2MWMwYmY7XFxuICAgIGhlaWdodDogNWVtO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1jb2xvcjojZmZiNmI5O1xcbn1cXG4udGl0bGVOYW1le1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDIuNWVtO1xcbiAgICBjb2xvcjogI2ZhZTNkOTtcXG59XFxuXFxuLnVzZXJ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubWFpbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMjVmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYjZiOTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDNlbTtcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZiNmI5O1xcbiAgXFxufVxcbi5kaXNwbGF5e1xcbiAgXFxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XFxuICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDVweDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG4jZGF0ZXtcXG4gICB3aWR0aDogOGVtO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICBib3JkZXI6IG5vbmU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGhlaWdodDogMS41ZW07XFxuICAgYm9yZGVyLXJhZGl1czogNDVweDtcXG59XFxuI3ByaW9yaXR5e1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICB3aWR0aDo1ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICBib3JkZXI6IG5vbmU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxufVxcbiNkZXNjcmlwdGlvbntcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgYm9yZGVyOiBub25lO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBib3JkZXItcmFkaXVzOiA0NXB4OztcXG59XFxuI3RpdGxle1xcbiAgICB3aWR0aDogOGVtO1xcbiAgICBoZWlnaHQ6IDEuNzVlbTtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgYm9yZGVyOiBub25lO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBib3JkZXItcmFkaXVzOiA0NXB4OztcXG59XFxuaW5wdXQ6Zm9jdXMsaW5wdXQ6YWN0aXZle1xcbiAgICBvdXRsaW5lOiBub25lO1xcbmJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIFxcbn1cXG4jdGl0bGU6Zm9jdXMsICNwcmlvcml0eTpmb2N1cywgI2RhdGU6Zm9jdXMsICNkZXNjcmlwdGlvbjpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG4jcHJvak5hbWV7XFxuICAgIHdpZHRoOiA3MCVcXG59XFxuXFxuLmZvcm1JdGVte1xcbiAgICBkaXNwbGF5OmZsZXggO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBcXG59XFxuLnRpdGxlLCAuZGVzY3JpcHRpb24sIC5kdWVEYXRlICwucHJpb3JpdHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOi0wLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYjZiOTtcXG4gICAgd2lkdGg6IDVlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGVmdDogLjFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBcXG59XFxuLmRlc2NyaXB0aW9ue1xcbiAgICBsZWZ0OiAxLjRlbTtcXG4gICAgdG9wOi4zOGVtO1xcbiAgICB3aWR0aDogNmVtO1xcbn1cXG4uYWxsRm9sZGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjFjMGJmO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5hZGRUYXNre1xcbiAgICBcXG4gICAgXFxufVxcbi5jYXJkQnRuLCAuY2FyZEJ0bjJ7XFxuICAgIFxcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbiAudG9Eb0Zvcm17XFxuICAgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MWVtO1xcbn1cXG4uZGVzVGl0e1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4uZGF0UHJpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MjBweFxcbn1cXG4uYWRkTmV3e1xcbiAgICBkaXNwbGF5OmdyaWQgO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnIgO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcbi5wb3N0c3tcXG4gIFxcbn1cXG4uY2FyZCAsIC5jYXJkMntcXG4gY29sb3I6YmxhY2s7XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XFxuIHdpZHRoOiAxMDAlO1xcbiBoZWlnaHQ6IDEwMCU7XFxuIGdhcDoxMHB4O1xcbiBmb250LXNpemU6IDE3cHg7XFxufVxcbiN0ZXh0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jcHJvamVjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGdhcDoxMHB4O1xcbiAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgIGNvbG9yOiBibGFjaztcXG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgd2lkdGg6IDEwMCVcXG4gICBcXG59XFxuLnJlbXtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2tcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbmNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uYWRkUHJvamVjdHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG4ucHJvamVjdEFkZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDo1cHhcXG59XFxuLnByb2plY3RGb3Jte1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjVweFxcbn1cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6NXB4XFxufVxcbi5wcm9qQ29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDo1cHhcXG59XFxuI3Byb2pUYWJ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgYm9yZGVyLXN0eWxlOiByaWRnZTtcXG4gICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzYxYzBiZjtcXG4gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDVweDtcXG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NXB4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBnYXA6MTBweDtcXG59XFxuLyogLmMxe1xcbiAgICBjb2xvcjpyZWQ7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn0gKi9cXG4uc2lkZWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNmI5OyBcXG4gICAgXFxufVxcblxcbi5zYXZlLCAuc2F2ZTJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZWRpdEZvcm0sIC5lZGl0Rm9ybTJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDoxNXB4O1xcbiAgXFxufVxcblxcbi5kZWxlLCAuZGVsZTJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4uZWRpdCwgLmVkaXQye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLmRscywgLmRsczJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDozMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtCQUErQjtBQUNuQyxXQUFXO0FBQ1g7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0tBQ0ssYUFBYTs7SUFFZCxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZOztBQUVoQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QiwyQkFBMkI7O0FBRS9CO0FBQ0E7O0dBRUcsNkJBQTZCO0dBQzdCLDRCQUE0QjtHQUM1Qiw0QkFBNEI7QUFD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akIseUJBQXlCO0dBQ3pCLDZCQUE2QjtHQUM3Qiw0QkFBNEI7R0FDNUIsdUJBQXVCO0dBQ3ZCLG1CQUFtQjtHQUNuQixzQkFBc0I7R0FDdEIsUUFBUTtBQUNYO0FBQ0E7Ozs7R0FJRztBQUNIO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFROztBQUVaOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBmb250LWZhbWlseTogJ0p1cmEnLCBzYW5zLXNlcmlmO1xcbm1hcmdpbjogMHB4O1xcbn1cXG5idXR0b257XFxuICAgIGNvbG9yOiAjZmFlM2Q5O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmYjZiOTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxYzBiZjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFsbDpob3ZlciwgLnByb2plY3RCdG46aG92ZXIsIC5hZGRQcm9qZWN0OmhvdmVyLCAuYWRkVGFzazpob3ZlcntcXG4gICAgIGNvbG9yOiM2MWMwYmY7XFxuICAgIFxcbiAgICBib3JkZXItY29sb3I6ICNmZmI2Yjk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWUzZDk7XFxufVxcblxcbi5zdWJtaXR7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuXFxufVxcbi5zdWJtaXQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MWMwYmY7XFxufVxcblxcbi5hZGR7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmFlM2Q5O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLmFkZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxYzBiZjtcXG59XFxuXFxuLmhlYWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjFjMGJmO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItY29sb3I6I2ZmYjZiOTtcXG59XFxuLnRpdGxlTmFtZXtcXG4gICAgcGFkZGluZy1sZWZ0OiA0JTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gICAgY29sb3I6ICNmYWUzZDk7XFxufVxcblxcbi51c2Vye1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuLm1haW57XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjI1ZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmI2Yjk7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAzZW07XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmYjZiOTtcXG4gIFxcbn1cXG4uZGlzcGxheXtcXG4gIFxcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NXB4O1xcbiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuI2RhdGV7XFxuICAgd2lkdGg6IDhlbTtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgYm9yZGVyOiBub25lO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBoZWlnaHQ6IDEuNWVtO1xcbiAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxufVxcbiNwcmlvcml0eXtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgd2lkdGg6NWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgYm9yZGVyOiBub25lO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBib3JkZXItcmFkaXVzOiA0NXB4O1xcbn1cXG4jZGVzY3JpcHRpb257XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgIGJvcmRlcjogbm9uZTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgYm9yZGVyLXJhZGl1czogNDVweDs7XFxufVxcbiN0aXRsZXtcXG4gICAgd2lkdGg6IDhlbTtcXG4gICAgaGVpZ2h0OiAxLjc1ZW07XFxuICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgIGJvcmRlcjogbm9uZTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgYm9yZGVyLXJhZGl1czogNDVweDs7XFxufVxcbmlucHV0OmZvY3VzLGlucHV0OmFjdGl2ZXtcXG4gICAgb3V0bGluZTogbm9uZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBcXG59XFxuI3RpdGxlOmZvY3VzLCAjcHJpb3JpdHk6Zm9jdXMsICNkYXRlOmZvY3VzLCAjZGVzY3JpcHRpb246Zm9jdXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuI3Byb2pOYW1le1xcbiAgICB3aWR0aDogNzAlXFxufVxcblxcbi5mb3JtSXRlbXtcXG4gICAgZGlzcGxheTpmbGV4IDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgXFxufVxcbi50aXRsZSwgLmRlc2NyaXB0aW9uLCAuZHVlRGF0ZSAsLnByaW9yaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTotMC4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmI2Yjk7XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxlZnQ6IC4xZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgXFxufVxcbi5kZXNjcmlwdGlvbntcXG4gICAgbGVmdDogMS40ZW07XFxuICAgIHRvcDouMzhlbTtcXG4gICAgd2lkdGg6IDZlbTtcXG59XFxuLmFsbEZvbGRlcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzYxYzBiZjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uYWRkVGFza3tcXG4gICAgXFxuICAgIFxcbn1cXG4uY2FyZEJ0biwgLmNhcmRCdG4ye1xcbiAgICBcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NXB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NXB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4gLnRvRG9Gb3Jte1xcbiAgIFxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjFlbTtcXG59XFxuLmRlc1RpdHtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuLmRhdFByaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjIwcHhcXG59XFxuLmFkZE5ld3tcXG4gICAgZGlzcGxheTpncmlkIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG4ucG9zdHN7XFxuICBcXG59XFxuLmNhcmQgLCAuY2FyZDJ7XFxuIGNvbG9yOmJsYWNrO1xcbiBkaXNwbGF5OiBmbGV4O1xcbiBhbGlnbi1pdGVtczogY2VudGVyO1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gYmFja2dyb3VuZC1jb2xvcjpub25lO1xcbiB3aWR0aDogMTAwJTtcXG4gaGVpZ2h0OiAxMDAlO1xcbiBnYXA6MTBweDtcXG4gZm9udC1zaXplOiAxN3B4O1xcbn1cXG4jdGV4dHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI3Byb2plY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBnYXA6MTBweDtcXG4gICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICBjb2xvcjogYmxhY2s7XFxuICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgIHdpZHRoOiAxMDAlXFxuICAgXFxufVxcbi5yZW17XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrXFxufVxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG5jb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLmFkZFByb2plY3R7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuLnByb2plY3RBZGR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6NXB4XFxufVxcbi5wcm9qZWN0Rm9ybXtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDo1cHhcXG59XFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjVweFxcbn1cXG4ucHJvakNvbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6NXB4XFxufVxcbiNwcm9qVGFie1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGJvcmRlci1zdHlsZTogcmlkZ2U7XFxuICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICM2MWMwYmY7XFxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XFxuICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDVweDtcXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgZ2FwOjEwcHg7XFxufVxcbi8qIC5jMXtcXG4gICAgY29sb3I6cmVkO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59ICovXFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjZiOTsgXFxuICAgIFxcbn1cXG5cXG4uc2F2ZSwgLnNhdmUye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmVkaXRGb3JtLCAuZWRpdEZvcm0ye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MTVweDtcXG4gIFxcbn1cXG5cXG4uZGVsZSwgLmRlbGUye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLmVkaXQsIC5lZGl0MntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbi5kbHMsIC5kbHMye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6MzBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgb25lT3BlbiB9IGZyb20gXCIuL3RvZ2dsZXNBbmRCdG5zXCI7XG5mdW5jdGlvbiBhZGRQcm9qKCkge1xuICBsZXQgbXlQcm9qcyA9IFtdO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybVwiKTtcblxuICBjbGFzcyBQcm9qIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0YSkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5ld1Byb2ogPSBuZXcgUHJvaihcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvak5hbWVcIikudmFsdWUsXG4gICAgICBNYXRoLnJhbmRvbSgpICogN1xuICAgICk7XG4gICAgbXlQcm9qcy5wdXNoKG5ld1Byb2opO1xuICAgIG9uZU9wZW4oKTtcbiAgICB1cGRhdGVBcnIoKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH1cblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcblxuICBmdW5jdGlvbiB1cGRhdGVBcnIoKSB7XG4gICAgLy8gcHJvanMuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICBteVByb2pzLmZvckVhY2goKHJlcykgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCB0aXRsZV9yZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY29uc3QgcmVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pDb250XCIpO1xuICAgICAgY29uc3QgcG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvc3RzXCIpO1xuICAgICAgY29uc3QgcHJvalBvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvalBvc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgcmVzLnRpdGxlKTtcbiAgICAgIHByb2pQb3N0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvalRhYlwiKTtcbiAgICAgIHByb2pQb3N0LmlubmVyVGV4dCA9IHJlcy50aXRsZTtcbiAgICAgIHByb2pQb3N0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGRhdGEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkYXRhXCIpO1xuICAgICAgdGl0bGVfcmVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHJlcy50aXRsZSk7XG4gICAgICB0aXRsZV9yZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0XCIpO1xuICAgICAgcmVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmVtXCIpO1xuICAgICAgZGF0YS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBjb25zdCBwcm9qQ2FyZERhdGEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXMuZGF0YSk7XG4gICAgICBwcm9qLmFwcGVuZChkYXRhLCB0aXRsZV9yZW0pO1xuICAgICAgZGF0YS5hcHBlbmRDaGlsZChwcm9qQ2FyZERhdGEpO1xuICAgICAgLy8gdGl0bGVfcmVtLmFwcGVuZENoaWxkKHByb2pDYXJkVGl0bGUpO1xuICAgICAgdGl0bGVfcmVtLmlubmVyVGV4dCA9IHJlcy50aXRsZTtcbiAgICAgIHRpdGxlX3JlbS5hcHBlbmRDaGlsZChyZW0pO1xuXG4gICAgICBwb3N0cy5hcHBlbmRDaGlsZChwcm9qUG9zdCk7XG4gICAgICByZW0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPlxuZGVsZXRlXG48L3NwYW4+YDtcblxuICAgICAgdGl0bGVfcmVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChwcm9qUG9zdC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgIG9uZU9wZW4oKTtcbiAgICAgICAgICBwcm9qUG9zdC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvalBvc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvanMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChteVByb2pzW2ldLmRhdGEgPT0gZGF0YS5pbm5lclRleHQpIHtcbiAgICAgICAgICAgICAgbXlQcm9qcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBhbGxGb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbEZvbGRlclwiKTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvalBvc3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjYXJkQnRuSWQgPSBwcm9qUG9zdC5jaGlsZHJlbltpXS5pZDtcbiAgICAgICAgICAgIGxldCBjYXJkQnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIFwiI1wiICsgY2FyZEJ0bklkICsgXCIuY2FyZEJ0bjJcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxldCBjYXJkQnRuMklkID0gY2FyZEJ0bjIgPyBjYXJkQnRuMi5pZCA6IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChjYXJkQnRuSWQgPT09IGNhcmRCdG4ySWQpIHtcbiAgICAgICAgICAgICAgYWxsRm9sZGVyLnJlbW92ZUNoaWxkKGNhcmRCdG4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcm9qLnJlbW92ZUNoaWxkKGRhdGEpO1xuICAgICAgICAgIHByb2oucmVtb3ZlQ2hpbGQodGl0bGVfcmVtKTtcbiAgICAgICAgICBwb3N0cy5yZW1vdmVDaGlsZChwcm9qUG9zdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgbXlQcm9qcy5wb3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHVwZGF0ZUFyciB9O1xufVxuXG5leHBvcnQgeyBhZGRQcm9qIH07XG4iLCJleHBvcnQgeyBhZGRUYXNrcyB9O1xuXG5mdW5jdGlvbiBhZGRUYXNrcygpIHtcbiAgbGV0IG15VGFza3MgPSBbXTtcbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG4gIGxldCBhbGxGb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbEZvbGRlclwiKTtcbiAgY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgZGF0YSkge1xuICAgICAgKHRoaXMudGl0bGUgPSB0aXRsZSksXG4gICAgICAgICh0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24pLFxuICAgICAgICAodGhpcy5kYXRlID0gZGF0ZSksXG4gICAgICAgICh0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHkpLFxuICAgICAgICAvLyAodGhpcy5jb21wbGV0ZWQ9IGNvbXBsZXRlZCksXG4gICAgICAgICh0aGlzLmRhdGEgPSBkYXRhKTtcbiAgICB9XG4gIH1cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIGFkZFRhc2soZXZlbnQpIHtcbiAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlLFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWUsXG4gICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrXCIpLnZhbHVlLFxuICAgICAgTWF0aC5yYW5kb20oKSAqIDdcbiAgICApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbXlUYXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIHVwZGF0ZUFycigpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG4gIGZ1bmN0aW9uIHVwZGF0ZUFycigpIHtcbiAgICAvLyBwb3N0cy5pbm5lclRleHQgPSBcIiBcIjtcblxuICAgIG15VGFza3MuZm9yRWFjaCgocmVzKSA9PiB7XG4gICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGMwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBjMDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBjMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBjMjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBjMzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGM0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBjNDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbGV0IGVkaXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxldCBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxldCBzYXZlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBsZXQgY2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBsZXQgY2FyZEJ0bjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbGV0IGRlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbGV0IGRlbGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxldCBwb3N0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zdHNcIik7XG4gICAgICBsZXQgZGxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBkbHMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBjYXJkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgXCJEZXNjcmlwdGlvbjogXCIgKyByZXMuZGVzY3JpcHRpb25cbiAgICAgICk7XG4gICAgICBsZXQgY2FyZERlc2NyaXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICBcIkRlc2NyaXB0aW9uOiBcIiArIHJlcy5kZXNjcmlwdGlvblxuICAgICAgKTtcbiAgICAgIGxldCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXMudGl0bGUpO1xuICAgICAgbGV0IGNhcmRUaXRsZTIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXMudGl0bGUpO1xuICAgICAgbGV0IGNhcmREYXRlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJEdWUgRGF0ZTogXCIgKyByZXMuZGF0ZSk7XG4gICAgICBsZXQgY2FyZERhdGUyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJEdWUgRGF0ZTogXCIgKyByZXMuZGF0ZSk7XG4gICAgICBsZXQgY2FyZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJQcmlvcml0eTogXCIgKyByZXMucHJpb3JpdHkpO1xuICAgICAgbGV0IGNhcmRQcmlvcml0eTIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlByaW9yaXR5OiBcIiArIHJlcy5wcmlvcml0eSk7XG4gICAgICBsZXQgY2FyZENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29tcGxldGVkOiBcIik7XG4gICAgICBsZXQgY2FyZENvbXBsZXRlZDIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbXBsZXRlZDogXCIpO1xuICAgICAgbGV0IGNhcmRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGxldCBjYXJkQ2hlY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2FyZENoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjYXJkQ2hlY2syLnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjYXJkQ2hlY2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQ2hlY2tcIik7XG4gICAgICBjYXJkQ2hlY2syLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZENoZWNrMlwiKTtcbiAgICAgIGxldCBjYXJkRGF0YSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJlcy5kYXRhKTtcbiAgICAgIGxldCBjYXJkRGF0YTIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXMuZGF0YSk7XG4gICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZFwiKTtcbiAgICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgcmVzLnRpdGxlKTtcbiAgICAgIGNhcmQyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZDJcIik7XG4gICAgICBjYXJkMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCByZXMudGl0bGUpO1xuICAgICAgYzAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjMFwiKTtcbiAgICAgIGMwMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImMwMlwiKTtcbiAgICAgIGMxLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYzFcIik7XG4gICAgICBjMTIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjMTJcIik7XG4gICAgICBjMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImMyXCIpO1xuICAgICAgYzIyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYzIyXCIpO1xuICAgICAgYzMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjM1wiKTtcbiAgICAgIGMzMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImMzMlwiKTtcbiAgICAgIGM0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYzRcIik7XG4gICAgICBjNDIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjNDJcIik7XG4gICAgICBkZWxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZVwiKTtcbiAgICAgIGRlbGUyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZTJcIik7XG4gICAgICBlZGl0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdFwiKTtcbiAgICAgIGVkaXQyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdDJcIik7XG4gICAgICBzYXZlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2F2ZVwiKTtcbiAgICAgIHNhdmUyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2F2ZTJcIik7XG4gICAgICBkbHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkbHNcIik7XG4gICAgICBkbHMyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGxzMlwiKTtcbiAgICAgIGMwLmFwcGVuZENoaWxkKGNhcmREYXRhKTtcbiAgICAgIGMwMi5hcHBlbmRDaGlsZChjYXJkRGF0YTIpO1xuICAgICAgYzIuYXBwZW5kQ2hpbGQoY2FyZERlc2NyaXB0aW9uKTtcbiAgICAgIGMyMi5hcHBlbmRDaGlsZChjYXJkRGVzY3JpcHRpb24yKTtcbiAgICAgIGMzLmFwcGVuZENoaWxkKGNhcmREYXRlKTtcbiAgICAgIGMzMi5hcHBlbmRDaGlsZChjYXJkRGF0ZTIpO1xuICAgICAgYzQuYXBwZW5kQ2hpbGQoY2FyZFByaW9yaXR5KTtcbiAgICAgIGM0Mi5hcHBlbmRDaGlsZChjYXJkUHJpb3JpdHkyKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYzIpO1xuICAgICAgY2FyZDIuYXBwZW5kQ2hpbGQoYzIyKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYzMpO1xuICAgICAgY2FyZDIuYXBwZW5kQ2hpbGQoYzMyKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYzQpO1xuICAgICAgY2FyZDIuYXBwZW5kQ2hpbGQoYzQyKTtcbiAgICAgIGMxLmFwcGVuZChjYXJkQ29tcGxldGVkLCBjYXJkQ2hlY2spO1xuICAgICAgYzEyLmFwcGVuZChjYXJkQ29tcGxldGVkMiwgY2FyZENoZWNrMik7XG4gICAgICBkbHMuYXBwZW5kKHNhdmUsIGVkaXQsIGRlbGUpO1xuICAgICAgZGxzMi5hcHBlbmQoc2F2ZTIsIGVkaXQyLCBkZWxlMik7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGRscyk7XG4gICAgICBjYXJkMi5hcHBlbmRDaGlsZChkbHMyKTtcbiAgICAgIGRlbGUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPlxuICAgICAgZGVsZXRlXG4gICAgICA8L3NwYW4+YDtcbiAgICAgIGRlbGUyLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgIGRlbGV0ZVxuICAgICAgPC9zcGFuPmA7XG4gICAgICBlZGl0LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgIGVkaXRcbiAgICAgIDwvc3Bhbj5gO1xuICAgICAgZWRpdDIuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPlxuICAgICAgZWRpdFxuICAgICAgPC9zcGFuPmA7XG4gICAgICBzYXZlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgIHNhdmVcbiAgICAgIDwvc3Bhbj5gO1xuICAgICAgc2F2ZTIuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPlxuICAgICAgc2F2ZVxuICAgICAgPC9zcGFuPmA7XG5cbiAgICAgIGRlbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG15VGFza3NbaV0uZGF0YSA9PSBjMC5pbm5lclRleHQpIHtcbiAgICAgICAgICAgICAgbXlUYXNrcy5zcGxpY2UoaSwgMSk7IC8vIHJlbW92ZSB0aGUgY29ycmVzcG9uZGluZyB0YXNrIGZyb20gbXlUYXNrcyBhcnJheVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY2FyZC5yZW1vdmUoKTtcbiAgICAgICAgICBjYXJkQnRuLnJlbW92ZSgpO1xuICAgICAgICAgIGNhcmQyLnJlbW92ZSgpO1xuICAgICAgICAgIGNhcmRCdG4yLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRlbGUyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChteVRhc2tzW2ldLmRhdGEgPT0gYzAyLmlubmVyVGV4dCkge1xuICAgICAgICAgICAgICBteVRhc2tzLnNwbGljZShpLCAxKTsgLy8gcmVtb3ZlIHRoZSBjb3JyZXNwb25kaW5nIHRhc2sgZnJvbSBteVRhc2tzIGFycmF5XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgICAgY2FyZEJ0bi5yZW1vdmUoKTtcbiAgICAgICAgICBjYXJkMi5yZW1vdmUoKTtcbiAgICAgICAgICBjYXJkQnRuMi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNhcmRCdG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQnRuXCIpO1xuICAgICAgY2FyZEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCByZXMudGl0bGUpO1xuICAgICAgY2FyZEJ0bjIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkQnRuMlwiKTtcbiAgICAgIGNhcmRCdG4yLnNldEF0dHJpYnV0ZShcImlkXCIsIHJlcy50aXRsZSk7XG4gICAgICBjYXJkQnRuLmFwcGVuZChjYXJkVGl0bGUpO1xuICAgICAgY2FyZEJ0bjIuYXBwZW5kKGNhcmRUaXRsZTIpO1xuICAgICAgbGV0IGRpc3BsYXllZENhcmQgPSBudWxsO1xuXG4gICAgICBwb3N0cy5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xuICAgICAgICAgIGRpc3BsYXllZENhcmQgPSBjaGlsZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChkaXNwbGF5ZWRDYXJkICYmIGRpc3BsYXllZENhcmQgIT09IGFsbEZvbGRlcikge1xuICAgICAgICBkaXNwbGF5ZWRDYXJkLmFwcGVuZChjYXJkQnRuKTtcbiAgICAgICAgYWxsRm9sZGVyLmFwcGVuZChjYXJkQnRuMik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGxGb2xkZXIuYXBwZW5kKGNhcmRCdG4yKTtcbiAgICAgIH1cblxuICAgICAgY2FyZEJ0bi5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgIGNhcmRCdG4yLmFwcGVuZENoaWxkKGNhcmQyKTtcbiAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgY2FyZDIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgY2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGNhcmQuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgJiYgZS50YXJnZXQgPT0gY2FyZEJ0bikge1xuICAgICAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGNhcmQuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIgJiYgZS50YXJnZXQgPT0gY2FyZEJ0bikge1xuICAgICAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY2FyZEJ0bjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChjYXJkMi5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiAmJiBlLnRhcmdldCA9PSBjYXJkQnRuMikge1xuICAgICAgICAgIGNhcmQyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYXJkMi5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIiAmJiBlLnRhcmdldCA9PSBjYXJkQnRuMikge1xuICAgICAgICAgIGNhcmQyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocmVzLnByaW9yaXR5ID09IFwiTG93XCIpIHtcbiAgICAgICAgY2FyZEJ0bjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmJkZWQ2XCI7XG4gICAgICAgIGNhcmRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmJkZWQ2XCI7XG4gICAgICB9IGVsc2UgaWYgKHJlcy5wcmlvcml0eSA9PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgIGNhcmRCdG4yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZhZTNkOVwiO1xuICAgICAgICBjYXJkQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZhZTNkOVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZEJ0bjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZiNmI5XCI7XG4gICAgICAgIGNhcmRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZiNmI5XCI7XG4gICAgICB9XG5cbiAgICAgIGxldCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgbGV0IGVkaXRGb3JtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgZWRpdEZvcm0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0Rm9ybVwiKTtcbiAgICAgIGVkaXRGb3JtMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXRGb3JtMlwiKTtcbiAgICAgIGxldCBsYWJlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgbGFiZWxEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgICAgIGxldCBsYWJlbERlc2NyaXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGxhYmVsRGVzY3JpcHRpb24yLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246IFwiO1xuICAgICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpbnB1dERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXREZXNjcmlwdGlvblwiKTtcbiAgICAgIGxldCBpbnB1dERlc2NyaXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGlucHV0RGVzY3JpcHRpb24yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXREZXNjcmlwdGlvblwiKTtcbiAgICAgIGxldCBsYWJlbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBsYWJlbERhdGUuaW5uZXJUZXh0ID0gXCJEYXRlOiBcIjtcbiAgICAgIGxldCBsYWJlbERhdGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgbGFiZWxEYXRlMi5pbm5lclRleHQgPSBcIkRhdGU6IFwiO1xuXG4gICAgICBsZXQgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgaW5wdXREYXRlLnR5cGUgPSBcImRhdGVcIjtcblxuICAgICAgbGV0IGlucHV0RGF0ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpbnB1dERhdGUyLnR5cGUgPSBcImRhdGVcIjtcblxuICAgICAgaW5wdXREYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXREYXRlXCIpO1xuICAgICAgaW5wdXREYXRlMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0RGF0ZTJcIik7XG5cbiAgICAgIGxldCBsYWJlbFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgbGFiZWxQcmlvcml0eS5pbm5lclRleHQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICAgIGxldCBsYWJlbFByaW9yaXR5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGxhYmVsUHJpb3JpdHkyLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6IFwiO1xuICAgICAgbGV0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgaW5wdXRQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0UHJpb3JpdHlcIik7XG4gICAgICBsZXQgaW5wdXRQcmlvcml0eTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgaW5wdXRQcmlvcml0eTIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5XCIpO1xuXG4gICAgICBjb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbjEudmFsdWUgPSBcIkxvd1wiO1xuICAgICAgb3B0aW9uMS50ZXh0ID0gXCJMb3dcIjtcblxuICAgICAgY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24yLnZhbHVlID0gXCJNZWRpdW1cIjtcbiAgICAgIG9wdGlvbjIudGV4dCA9IFwiTWVkaXVtXCI7XG5cbiAgICAgIGNvbnN0IG9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uMy52YWx1ZSA9IFwiSGlnaFwiO1xuICAgICAgb3B0aW9uMy50ZXh0ID0gXCJIaWdoXCI7XG5cbiAgICAgIGNvbnN0IG9wdGlvbjEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbjEyLnZhbHVlID0gXCJMb3dcIjtcbiAgICAgIG9wdGlvbjEyLnRleHQgPSBcIkxvd1wiO1xuXG4gICAgICBjb25zdCBvcHRpb24yMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24yMi52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gICAgICBvcHRpb24yMi50ZXh0ID0gXCJNZWRpdW1cIjtcblxuICAgICAgY29uc3Qgb3B0aW9uMzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uMzIudmFsdWUgPSBcIkhpZ2hcIjtcbiAgICAgIG9wdGlvbjMyLnRleHQgPSBcIkhpZ2hcIjtcblxuICAgICAgaW5wdXRQcmlvcml0eS5hZGQob3B0aW9uMSk7XG4gICAgICBpbnB1dFByaW9yaXR5LmFkZChvcHRpb24yKTtcbiAgICAgIGlucHV0UHJpb3JpdHkuYWRkKG9wdGlvbjMpO1xuXG4gICAgICBpbnB1dFByaW9yaXR5Mi5hZGQob3B0aW9uMTIpO1xuICAgICAgaW5wdXRQcmlvcml0eTIuYWRkKG9wdGlvbjIyKTtcbiAgICAgIGlucHV0UHJpb3JpdHkyLmFkZChvcHRpb24zMik7XG5cbiAgICAgIGVkaXRGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGVkaXRGb3JtMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBlZGl0Rm9ybS5hcHBlbmQobGFiZWxEZXNjcmlwdGlvbiwgbGFiZWxEYXRlLCBsYWJlbFByaW9yaXR5KTtcbiAgICAgIGVkaXRGb3JtMi5hcHBlbmQobGFiZWxEZXNjcmlwdGlvbjIsIGxhYmVsRGF0ZTIsIGxhYmVsUHJpb3JpdHkyKTtcbiAgICAgIGxhYmVsRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG4gICAgICBsYWJlbERlc2NyaXB0aW9uMi5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uMik7XG4gICAgICBsYWJlbERhdGUuYXBwZW5kQ2hpbGQoaW5wdXREYXRlKTtcbiAgICAgIGxhYmVsRGF0ZTIuYXBwZW5kQ2hpbGQoaW5wdXREYXRlMik7XG4gICAgICBsYWJlbFByaW9yaXR5LmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkpO1xuICAgICAgbGFiZWxQcmlvcml0eTIuYXBwZW5kQ2hpbGQoaW5wdXRQcmlvcml0eTIpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG4gICAgICBjYXJkMi5hcHBlbmRDaGlsZChlZGl0Rm9ybTIpO1xuXG4gICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGVkaXRGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHNhdmUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgfSk7XG4gICAgICBlZGl0Mi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBlZGl0Rm9ybTIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBlZGl0Mi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHNhdmUyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIH0pO1xuICAgICAgLy9jb3JyZWN0XG4gICAgICBzYXZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBzYXZlVGFzayhlKSB7XG4gICAgICAgIGxldCBnb29kID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgbGV0IGdvb2RDID0gZ29vZC5wYXJlbnROb2RlO1xuICAgICAgICBsZXQgZ29vZENhcmQgPSBnb29kQy5wYXJlbnROb2RlO1xuICAgICAgICBsZXQgZ29vZENhcmRJZCA9IGdvb2RDYXJkLmlkO1xuXG4gICAgICAgIGxldCBnb29kQ2FyZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnb29kQ2FyZElkKTtcbiAgICAgICAgbGV0IGNhcmQyID0gZ29vZENhcmQyO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBnb29kQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmMyXCIpO1xuICAgICAgICBsZXQgZGF0ZSA9IGdvb2RDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuYzNcIik7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGdvb2RDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuYzRcIik7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbjIgPSBjYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmMyMlwiKTtcbiAgICAgICAgbGV0IGRhdGUyID0gY2FyZDIucXVlcnlTZWxlY3RvcihcIi5jMzJcIik7XG4gICAgICAgIGxldCBwcmlvcml0eTIgPSBjYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmM0MlwiKTtcblxuICAgICAgICBpZiAoZ29vZENhcmQuaWQgPT0gY2FyZDIuaWQpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjIuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvbjogXCIgKyBpbnB1dERlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICAgIGRhdGUyLmlubmVySFRNTCA9IFwiRHVlIERhdGU6IFwiICsgaW5wdXREYXRlLnZhbHVlO1xuICAgICAgICAgIHByaW9yaXR5Mi5pbm5lckhUTUwgPSBcIlByaW9yaXR5OiBcIiArIGlucHV0UHJpb3JpdHkudmFsdWU7XG5cbiAgICAgICAgICBpZiAoaW5wdXRQcmlvcml0eS52YWx1ZSA9PSBcIkxvd1wiKSB7XG4gICAgICAgICAgICBjYXJkQnRuMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiYmRlZDZcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0UHJpb3JpdHkudmFsdWUgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICAgICAgY2FyZEJ0bjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlM2Q5O1wiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYXJkQnRuMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmI2YjlcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coY2FyZDIsIGdvb2RDYXJkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb246IFwiICsgaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgZGF0ZS5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlOiBcIiArIGlucHV0RGF0ZS52YWx1ZTtcbiAgICAgICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gXCJQcmlvcml0eTogXCIgKyBpbnB1dFByaW9yaXR5LnZhbHVlO1xuXG4gICAgICAgIGlmIChpbnB1dFByaW9yaXR5LnZhbHVlID09IFwiTG93XCIpIHtcbiAgICAgICAgICBjYXJkQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2JiZGVkNlwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0UHJpb3JpdHkudmFsdWUgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICAgIGNhcmRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlM2Q5XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FyZEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmI2YjlcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWRpdC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHNhdmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSk7XG5cbiAgICAgIHNhdmUyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBzYXZlVGFzazIoZSkge1xuICAgICAgICBsZXQgZ29vZDIgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICBsZXQgZ29vZEMyID0gZ29vZDIucGFyZW50Tm9kZTtcbiAgICAgICAgbGV0IGdvb2RDYXJkMiA9IGdvb2RDMi5wYXJlbnROb2RlO1xuICAgICAgICBsZXQgZ29vZENhcmRJZDIgPSBnb29kQ2FyZDIuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGdvb2RDYXJkSWQyLCBnb29kQ2FyZDIpO1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBnb29kQ2FyZElkMiArIFwiLmNhcmRcIik7XG5cbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uMiA9IGdvb2RDYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmMyMlwiKTtcbiAgICAgICAgbGV0IGRhdGUyID0gZ29vZENhcmQyLnF1ZXJ5U2VsZWN0b3IoXCIuYzMyXCIpO1xuICAgICAgICBsZXQgcHJpb3JpdHkyID0gZ29vZENhcmQyLnF1ZXJ5U2VsZWN0b3IoXCIuYzQyXCIpO1xuXG4gICAgICAgIGlmIChjYXJkKSB7XG4gICAgICAgICAgaWYgKGdvb2RDYXJkMi5pZCA9PSBjYXJkLmlkKSB7XG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuYzJcIik7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5jM1wiKTtcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIi5jNFwiKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb246IFwiICsgaW5wdXREZXNjcmlwdGlvbjIudmFsdWU7XG4gICAgICAgICAgICBkYXRlLmlubmVySFRNTCA9IFwiRHVlIERhdGU6IFwiICsgaW5wdXREYXRlMi52YWx1ZTtcbiAgICAgICAgICAgIHByaW9yaXR5LmlubmVySFRNTCA9IFwiUHJpb3JpdHk6IFwiICsgaW5wdXRQcmlvcml0eTIudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChpbnB1dFByaW9yaXR5Mi52YWx1ZSA9PSBcIkxvd1wiKSB7XG4gICAgICAgICAgICAgIGNhcmRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmJkZWQ2XCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0UHJpb3JpdHkyLnZhbHVlID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgICAgICAgY2FyZEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmYWUzZDlcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhcmRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZiNmI5XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVzY3JpcHRpb24yLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb246IFwiICsgaW5wdXREZXNjcmlwdGlvbjIudmFsdWU7XG4gICAgICAgIGRhdGUyLmlubmVySFRNTCA9IFwiRHVlIERhdGU6IFwiICsgaW5wdXREYXRlMi52YWx1ZTtcbiAgICAgICAgcHJpb3JpdHkyLmlubmVySFRNTCA9IFwiUHJpb3JpdHk6IFwiICsgaW5wdXRQcmlvcml0eTIudmFsdWU7XG5cbiAgICAgICAgaWYgKGlucHV0UHJpb3JpdHkyLnZhbHVlID09IFwiTG93XCIpIHtcbiAgICAgICAgICBjYXJkQnRuMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiYmRlZDZcIjtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dFByaW9yaXR5Mi52YWx1ZSA9PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgICAgY2FyZEJ0bjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlM2Q5XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FyZEJ0bjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZiNmI5XCI7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0Rm9ybTIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBlZGl0Mi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIHNhdmUyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuXG4gICAgICBteVRhc2tzLnBvcCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCIvL3RvZ2dsZXMgdGFzayBmb3JtXG5mdW5jdGlvbiB0YXNrQnRuVG9nZ2xlKCkge1xuICBjb25zdCBhZGRUYXNrQnRuVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpO1xuICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbiAgYWRkVGFza0J0blRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChmb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9KTtcbn1cbi8vdG9nZ2xlcyBsaXN0IG9mIHByb2plY3RzXG5mdW5jdGlvbiBwcm9qQnRuVG9nZ2xlKCkge1xuICBjb25zdCBwcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0QnRuXCIpO1xuICBsZXQgcHJvakNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2pDb250XCIpO1xuICBwcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2pDb250LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICBwcm9qQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2pDb250LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xufVxuLy8gdG9nZ2xlcyB0aGUgZm9ybSB0byBtYWtlIG5ldyBwcm9qZWN0c1xuZnVuY3Rpb24gcHJvakZvcm1Ub2dnbGUoKSB7XG4gIGNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RcIik7XG4gIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybVwiKTtcbiAgYWRkUHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChmb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9KTtcbn1cbi8vaGlkZXMgdGhlIHRhc2sgZm9ybSBhZnRlciBzdWJtaXRcbmZ1bmN0aW9uIGFkZEJ0bigpIHtcbiAgbGV0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkXCIpO1xuICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufVxuXG4vL2hpZGVzIHByb2plY3QgZm9ybSBhZnRlciBzdWJtaXRcbmZ1bmN0aW9uIHByb2pGb3JtU3VibWl0QnRuKCkge1xuICBsZXQgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XG4gIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0Rm9ybVwiKTtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufVxuZnVuY3Rpb24gb25lT3Blbigpe1xuICBsZXQgcG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3Byb2pUYWJcIilcbiAgXG4gIGZvcihsZXQgaSA9IDAgOyBpPHBvc3RzLmxlbmd0aDsgaSArKyl7XG4gICAgaWYocG9zdHNbaV0uc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpe1xuICBwb3N0c1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbn1cbiAgfVxuXG59XG5mdW5jdGlvbiBwcm9qQWxsKCkge1xuICBsZXQgYWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxcIik7XG4gIGxldCBwb3N0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9zdHNcIik7XG4gIGxldCBhbGxGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhbGxGb2xkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBhbGxGb2xkZXIuaW5uZXJUZXh0ID0gXCJBbGxcIjtcbiAgYWxsRm9sZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWxsRm9sZGVyXCIpO1xuICBhbGxGb2xkZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcInByb2pUYWJcIilcbiAgcG9zdHMuYXBwZW5kQ2hpbGQoYWxsRm9sZGVyKTtcbiAgYWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiBzZWxlY3RBbGwoKSB7XG4gICAgXG4gICAgaWYgKGFsbEZvbGRlci5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgb25lT3BlbigpXG4gICAgICBhbGxGb2xkZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGxGb2xkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG59XG5cblxuXG5leHBvcnQge1xuIG9uZU9wZW4sXG4gIHRhc2tCdG5Ub2dnbGUsXG4gIGFkZEJ0bixcbiAgcHJvakJ0blRvZ2dsZSxcbiAgcHJvakZvcm1Ub2dnbGUsXG4gIHByb2pGb3JtU3VibWl0QnRuLFxuICBwcm9qQWxsLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vbGF5b3V0LmNzc1wiO1xuaW1wb3J0IHsgYWRkVGFza3MgfSBmcm9tIFwiLi9hZGRUYXNrXCI7XG5pbXBvcnQge1xuICB0YXNrQnRuVG9nZ2xlLFxuICBhZGRCdG4sXG4gIHByb2pCdG5Ub2dnbGUsXG4gIHByb2pGb3JtVG9nZ2xlLFxuICBwcm9qRm9ybVN1Ym1pdEJ0bixcbiAgcHJvakFsbCxcbn0gZnJvbSBcIi4vdG9nZ2xlc0FuZEJ0bnNcIjtcbmltcG9ydCB7IGFkZFByb2ogfSBmcm9tIFwiLi9hZGRQcm9qZWN0XCI7XG5cbnByb2pBbGwoKTtcbnByb2pGb3JtU3VibWl0QnRuKCk7XG5wcm9qRm9ybVRvZ2dsZSgpO1xuYWRkUHJvaigpO1xucHJvakJ0blRvZ2dsZSgpO1xuYWRkQnRuKCk7XG50YXNrQnRuVG9nZ2xlKCk7XG5hZGRUYXNrcygpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICBpZiAoZS5rZXlDb2RlID09PSAzMikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKFxuICAgICAgZWxlbWVudC50YWdOYW1lID09PSBcIklOUFVUXCIgfHxcbiAgICAgIGVsZW1lbnQudGFnTmFtZSA9PT0gXCJURVhUQVJFQVwiIHx8XG4gICAgICBlbGVtZW50LmlzQ29udGVudEVkaXRhYmxlXG4gICAgKSB7XG4gICAgICB2YXIgc2VsZWN0aW9uU3RhcnQgPSBlbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xuICAgICAgdmFyIHNlbGVjdGlvbkVuZCA9IGVsZW1lbnQuc2VsZWN0aW9uRW5kO1xuICAgICAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9XG4gICAgICAgIHZhbHVlLnN1YnN0cmluZygwLCBzZWxlY3Rpb25TdGFydCkgK1xuICAgICAgICBcIiBcIiArXG4gICAgICAgIHZhbHVlLnN1YnN0cmluZyhzZWxlY3Rpb25FbmQpO1xuICAgICAgZWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb25TdGFydCArIDEsIHNlbGVjdGlvblN0YXJ0ICsgMSk7XG4gICAgfVxuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==