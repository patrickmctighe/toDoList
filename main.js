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
    form.style.display = "none"
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
      
        (this.data = data);
    }
  }
  form.addEventListener("submit", function addTask(event) {
    const newTask = new Task(
      document.getElementById("title").value,
      document.getElementById("description").value,
      document.getElementById("date").value,
      document.getElementById("priority").value,
      
      Math.random() * 7
    );
    event.preventDefault();
    myTasks.push(newTask);
    updateArr();
    form.reset();
    form.style.display = "none"
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
/* harmony export */   "oneOpen": () => (/* binding */ oneOpen),
/* harmony export */   "projAll": () => (/* binding */ projAll),
/* harmony export */   "projBtnToggle": () => (/* binding */ projBtnToggle),
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
// //hides the task form after submit
// function addBtn() {
//   let addBtn = document.querySelector(".add");
//   let form = document.getElementById("form");

//   addBtn.addEventListener("click", function () {
//     form.style.display = "none";
//     console.log("hello")
//   });
// }

// //hides project form after submit
// function projFormSubmitBtn() {
//   let addBtn = document.querySelector(".submit");
//   let form = document.querySelector(".projectForm");
//   let projName = document.querySelector("#projName")
//   addBtn.addEventListener("click", function () {
//     if (projName.innerText !== "")
//     form.style.display = "none";
//     console.log("hi")
//   });
// }
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
// projFormSubmitBtn();
(0,_togglesAndBtns__WEBPACK_IMPORTED_MODULE_2__.projFormToggle)();
(0,_addProject__WEBPACK_IMPORTED_MODULE_3__.addProj)();
(0,_togglesAndBtns__WEBPACK_IMPORTED_MODULE_2__.projBtnToggle)();
// addBtn();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssUUFBUSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxh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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG9CQUFvQjtBQUM5QztBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSwwQkFBMEIsb0JBQW9CO0FBQzlDO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWixzREFBc0Q7QUFDdEQsWUFBWTtBQUNaO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7O0FBWUU7Ozs7Ozs7VUNuR0Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNlO0FBUVg7QUFDYTs7QUFFdkMsd0RBQU87QUFDUDtBQUNBLCtEQUFjO0FBQ2Qsb0RBQU87QUFDUCw4REFBYTtBQUNiO0FBQ0EsOERBQWE7QUFDYixrREFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xheW91dC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGF5b3V0LmNzcz9lYWVjIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZ2dsZXNBbmRCdG5zLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgZm9udC1mYW1pbHk6ICdKdXJhJywgc2Fucy1zZXJpZjtcXG5tYXJnaW46IDBweDtcXG59XFxuYnV0dG9ue1xcbiAgICBjb2xvcjogI2ZhZTNkOTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3JkZXItY29sb3I6ICNmZmI2Yjk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MWMwYmY7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hbGw6aG92ZXIsIC5wcm9qZWN0QnRuOmhvdmVyLCAuYWRkUHJvamVjdDpob3ZlciwgLmFkZFRhc2s6aG92ZXJ7XFxuICAgICBjb2xvcjojNjFjMGJmO1xcbiAgICBcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZiNmI5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFlM2Q5O1xcbn1cXG5cXG4uc3VibWl0e1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcblxcbn1cXG4uc3VibWl0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFjMGJmO1xcbn1cXG5cXG4uYWRke1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZhZTNkOTtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi5hZGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MWMwYmY7XFxufVxcblxcbi5oZWFke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzYxYzBiZjtcXG4gICAgaGVpZ2h0OiA1ZW07XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMTVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiNmZmI2Yjk7XFxufVxcbi50aXRsZU5hbWV7XFxuICAgIHBhZGRpbmctbGVmdDogNCU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgIGNvbG9yOiAjZmFlM2Q5O1xcbn1cXG5cXG4udXNlcntcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcbi5tYWlue1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZiNmI5O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogM2VtO1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNmZmI2Yjk7XFxuICBcXG59XFxuLmRpc3BsYXl7XFxuICBcXG4gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDVweDtcXG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NXB4O1xcbiAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbiNkYXRle1xcbiAgIHdpZHRoOiA4ZW07XFxuICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgIGJvcmRlcjogbm9uZTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgaGVpZ2h0OiAxLjVlbTtcXG4gICBib3JkZXItcmFkaXVzOiA0NXB4O1xcbn1cXG4jcHJpb3JpdHl7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIHdpZHRoOjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgIGJvcmRlcjogbm9uZTtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgYm9yZGVyLXJhZGl1czogNDVweDtcXG59XFxuI2Rlc2NyaXB0aW9ue1xcbiAgICB3aWR0aDogMTVlbTtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICBib3JkZXI6IG5vbmU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7O1xcbn1cXG4jdGl0bGV7XFxuICAgIHdpZHRoOiA4ZW07XFxuICAgIGhlaWdodDogMS43NWVtO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICBib3JkZXI6IG5vbmU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7O1xcbn1cXG5pbnB1dDpmb2N1cyxpbnB1dDphY3RpdmV7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgXFxufVxcbiN0aXRsZTpmb2N1cywgI3ByaW9yaXR5OmZvY3VzLCAjZGF0ZTpmb2N1cywgI2Rlc2NyaXB0aW9uOmZvY3Vze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcbiNwcm9qTmFtZXtcXG4gICAgd2lkdGg6IDcwJVxcbn1cXG5cXG4uZm9ybUl0ZW17XFxuICAgIGRpc3BsYXk6ZmxleCA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIFxcbn1cXG4udGl0bGUsIC5kZXNjcmlwdGlvbiwgLmR1ZURhdGUgLC5wcmlvcml0eXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206LTAuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZiNmI5O1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsZWZ0OiAuMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIFxcbn1cXG4uZGVzY3JpcHRpb257XFxuICAgIGxlZnQ6IDEuNGVtO1xcbiAgICB0b3A6LjM4ZW07XFxuICAgIHdpZHRoOiA2ZW07XFxufVxcbi5hbGxGb2xkZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2MWMwYmY7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmFkZFRhc2t7XFxuICAgIFxcbiAgICBcXG59XFxuLmNhcmRCdG4sIC5jYXJkQnRuMntcXG4gICAgXFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDVweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuIC50b0RvRm9ybXtcXG4gICBcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoxZW07XFxufVxcbi5kZXNUaXR7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcbi5kYXRQcml7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDoyMHB4XFxufVxcbi5hZGROZXd7XFxuICAgIGRpc3BsYXk6Z3JpZCA7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIDFmciA7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuLnBvc3Rze1xcbiAgXFxufVxcbi5jYXJkICwgLmNhcmQye1xcbiBjb2xvcjpibGFjaztcXG4gZGlzcGxheTogZmxleDtcXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuIGJhY2tncm91bmQtY29sb3I6bm9uZTtcXG4gd2lkdGg6IDEwMCU7XFxuIGhlaWdodDogMTAwJTtcXG4gZ2FwOjEwcHg7XFxuIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuI3RleHR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNwcm9qZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgZ2FwOjEwcHg7XFxuICAgYmFja2dyb3VuZDpub25lO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgY29sb3I6IGJsYWNrO1xcbiAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICB3aWR0aDogMTAwJVxcbiAgIFxcbn1cXG4ucmVte1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFja1xcbn1cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5hZGRQcm9qZWN0e1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcbi5wcm9qZWN0QWRke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjVweFxcbn1cXG4ucHJvamVjdEZvcm17XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6NXB4XFxufVxcbi5wcm9qZWN0c3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDo1cHhcXG59XFxuLnByb2pDb250e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjVweFxcbn1cXG4jcHJvalRhYntcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBib3JkZXItc3R5bGU6IHJpZGdlO1xcbiAgIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFjMGJmO1xcbiAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0NXB4O1xcbiAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XFxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIGdhcDoxMHB4O1xcbn1cXG4vKiAuYzF7XFxuICAgIGNvbG9yOnJlZDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufSAqL1xcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI2Yjk7IFxcbiAgICBcXG59XFxuXFxuLnNhdmUsIC5zYXZlMntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5lZGl0Rm9ybSwgLmVkaXRGb3JtMntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjE1cHg7XFxuICBcXG59XFxuXFxuLmRlbGUsIC5kZWxlMntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbi5lZGl0LCAuZWRpdDJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4uZGxzLCAuZGxzMntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOjMwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksK0JBQStCO0FBQ25DLFdBQVc7QUFDWDtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7S0FDSyxhQUFhOztJQUVkLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDJCQUEyQjs7QUFFL0I7QUFDQTs7R0FFRyw2QkFBNkI7R0FDN0IsNEJB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QXlCO0dBQ3hCLGlCQUFpQjtHQUNqQix5QkFBeUI7R0FDekIsNkJBQTZCO0dBQzdCLDRCQUE0QjtHQUM1Qix1QkFBdUI7R0FDdkIsbUJBQW1CO0dBQ25CLHNCQUFzQjtHQUN0QixRQUFRO0FBQ1g7QUFDQTs7OztHQUlHO0FBQ0g7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7O0FBRVo7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGZvbnQtZmFtaWx5OiAnSnVyYScsIHNhbnMtc2VyaWY7XFxubWFyZ2luOiAwcHg7XFxufVxcbmJ1dHRvbntcXG4gICAgY29sb3I6ICNmYWUzZDk7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZiNmI5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFjMGJmO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWxsOmhvdmVyLCAucHJvamVjdEJ0bjpob3ZlciwgLmFkZFByb2plY3Q6aG92ZXIsIC5hZGRUYXNrOmhvdmVye1xcbiAgICAgY29sb3I6IzYxYzBiZjtcXG4gICAgXFxuICAgIGJvcmRlci1jb2xvcjogI2ZmYjZiOTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZTNkOTtcXG59XFxuXFxuLnN1Ym1pdHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG5cXG59XFxuLnN1Ym1pdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYxYzBiZjtcXG59XFxuXFxuLmFkZHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmYWUzZDk7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4uYWRkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFjMGJmO1xcbn1cXG5cXG4uaGVhZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2MWMwYmY7XFxuICAgIGhlaWdodDogNWVtO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1jb2xvcjojZmZiNmI5O1xcbn1cXG4udGl0bGVOYW1le1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDIuNWVtO1xcbiAgICBjb2xvcjogI2ZhZTNkOTtcXG59XFxuXFxuLnVzZXJ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4ubWFpbntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMjVmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYjZiOTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDNlbTtcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZiNmI5O1xcbiAgXFxufVxcbi5kaXNwbGF5e1xcbiAgXFxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XFxuICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDVweDtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG4jZGF0ZXtcXG4gICB3aWR0aDogOGVtO1xcbiAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICBib3JkZXI6IG5vbmU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGhlaWdodDogMS41ZW07XFxuICAgYm9yZGVyLXJhZGl1czogNDVweDtcXG59XFxuI3ByaW9yaXR5e1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICB3aWR0aDo1ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICBib3JkZXI6IG5vbmU7XFxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIGJvcmRlci1yYWRpdXM6IDQ1cHg7XFxufVxcbiNkZXNjcmlwdGlvbntcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgYm9yZGVyOiBub25lO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBib3JkZXItcmFkaXVzOiA0NXB4OztcXG59XFxuI3RpdGxle1xcbiAgICB3aWR0aDogOGVtO1xcbiAgICBoZWlnaHQ6IDEuNzVlbTtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgYm9yZGVyOiBub25lO1xcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBib3JkZXItcmFkaXVzOiA0NXB4OztcXG59XFxuaW5wdXQ6Zm9jdXMsaW5wdXQ6YWN0aXZle1xcbiAgICBvdXRsaW5lOiBub25lO1xcbmJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIFxcbn1cXG4jdGl0bGU6Zm9jdXMsICNwcmlvcml0eTpmb2N1cywgI2RhdGU6Zm9jdXMsICNkZXNjcmlwdGlvbjpmb2N1c3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG4jcHJvak5hbWV7XFxuICAgIHdpZHRoOiA3MCVcXG59XFxuXFxuLmZvcm1JdGVte1xcbiAgICBkaXNwbGF5OmZsZXggO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBcXG59XFxuLnRpdGxlLCAuZGVzY3JpcHRpb24sIC5kdWVEYXRlICwucHJpb3JpdHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOi0wLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmYjZiOTtcXG4gICAgd2lkdGg6IDVlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbGVmdDogLjFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBcXG59XFxuLmRlc2NyaXB0aW9ue1xcbiAgICBsZWZ0OiAxLjRlbTtcXG4gICAgdG9wOi4zOGVtO1xcbiAgICB3aWR0aDogNmVtO1xcbn1cXG4uYWxsRm9sZGVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNjFjMGJmO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5hZGRUYXNre1xcbiAgICBcXG4gICAgXFxufVxcbi5jYXJkQnRuLCAuY2FyZEJ0bjJ7XFxuICAgIFxcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ1cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbiAudG9Eb0Zvcm17XFxuICAgXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MWVtO1xcbn1cXG4uZGVzVGl0e1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4uZGF0UHJpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MjBweFxcbn1cXG4uYWRkTmV3e1xcbiAgICBkaXNwbGF5OmdyaWQgO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnIgO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcbi5wb3N0c3tcXG4gIFxcbn1cXG4uY2FyZCAsIC5jYXJkMntcXG4gY29sb3I6YmxhY2s7XFxuIGRpc3BsYXk6IGZsZXg7XFxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiBiYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XFxuIHdpZHRoOiAxMDAlO1xcbiBoZWlnaHQ6IDEwMCU7XFxuIGdhcDoxMHB4O1xcbiBmb250LXNpemU6IDE3cHg7XFxufVxcbiN0ZXh0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jcHJvamVjdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIGdhcDoxMHB4O1xcbiAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgIGNvbG9yOiBibGFjaztcXG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgd2lkdGg6IDEwMCVcXG4gICBcXG59XFxuLnJlbXtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2tcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbmNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uYWRkUHJvamVjdHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG4ucHJvamVjdEFkZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDo1cHhcXG59XFxuLnByb2plY3RGb3Jte1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjVweFxcbn1cXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6NXB4XFxufVxcbi5wcm9qQ29udHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDo1cHhcXG59XFxuI3Byb2pUYWJ7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgYm9yZGVyLXN0eWxlOiByaWRnZTtcXG4gICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzYxYzBiZjtcXG4gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDVweDtcXG4gICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0NXB4O1xcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBnYXA6MTBweDtcXG59XFxuLyogLmMxe1xcbiAgICBjb2xvcjpyZWQ7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn0gKi9cXG4uc2lkZWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNmI5OyBcXG4gICAgXFxufVxcblxcbi5zYXZlLCAuc2F2ZTJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZWRpdEZvcm0sIC5lZGl0Rm9ybTJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDoxNXB4O1xcbiAgXFxufVxcblxcbi5kZWxlLCAuZGVsZTJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4uZWRpdCwgLmVkaXQye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLmRscywgLmRsczJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDozMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sYXlvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBvbmVPcGVuIH0gZnJvbSBcIi4vdG9nZ2xlc0FuZEJ0bnNcIjtcbmZ1bmN0aW9uIGFkZFByb2ooKSB7XG4gIGxldCBteVByb2pzID0gW107XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xuXG4gIGNsYXNzIFByb2oge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkYXRhKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3UHJvaiA9IG5ldyBQcm9qKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qTmFtZVwiKS52YWx1ZSxcbiAgICAgIE1hdGgucmFuZG9tKCkgKiA3XG4gICAgKTtcbiAgICBteVByb2pzLnB1c2gobmV3UHJvaik7XG4gICAgb25lT3BlbigpO1xuICAgIHVwZGF0ZUFycigpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICB9XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlQXJyKCkge1xuICAgIC8vIHByb2pzLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgbXlQcm9qcy5mb3JFYWNoKChyZXMpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgdGl0bGVfcmVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IHJlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qQ29udFwiKTtcbiAgICAgIGNvbnN0IHBvc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3N0c1wiKTtcbiAgICAgIGNvbnN0IHByb2pQb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByb2pQb3N0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHJlcy50aXRsZSk7XG4gICAgICBwcm9qUG9zdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2pUYWJcIik7XG4gICAgICBwcm9qUG9zdC5pbm5lclRleHQgPSByZXMudGl0bGU7XG4gICAgICBwcm9qUG9zdC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICBkYXRhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGF0YVwiKTtcbiAgICAgIHRpdGxlX3JlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCByZXMudGl0bGUpO1xuICAgICAgdGl0bGVfcmVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdFwiKTtcbiAgICAgIHJlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJlbVwiKTtcbiAgICAgIGRhdGEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgY29uc3QgcHJvakNhcmREYXRhID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVzLmRhdGEpO1xuICAgICAgcHJvai5hcHBlbmQoZGF0YSwgdGl0bGVfcmVtKTtcbiAgICAgIGRhdGEuYXBwZW5kQ2hpbGQocHJvakNhcmREYXRhKTtcbiAgICAgIC8vIHRpdGxlX3JlbS5hcHBlbmRDaGlsZChwcm9qQ2FyZFRpdGxlKTtcbiAgICAgIHRpdGxlX3JlbS5pbm5lclRleHQgPSByZXMudGl0bGU7XG4gICAgICB0aXRsZV9yZW0uYXBwZW5kQ2hpbGQocmVtKTtcblxuICAgICAgcG9zdHMuYXBwZW5kQ2hpbGQocHJvalBvc3QpO1xuICAgICAgcmVtLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbmRlbGV0ZVxuPC9zcGFuPmA7XG5cbiAgICAgIHRpdGxlX3JlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocHJvalBvc3Quc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICBvbmVPcGVuKCk7XG4gICAgICAgICAgcHJvalBvc3Quc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2pQb3N0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVByb2pzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobXlQcm9qc1tpXS5kYXRhID09IGRhdGEuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICAgIG15UHJvanMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgYWxsRm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxGb2xkZXJcIik7XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2pQb3N0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2FyZEJ0bklkID0gcHJvalBvc3QuY2hpbGRyZW5baV0uaWQ7XG4gICAgICAgICAgICBsZXQgY2FyZEJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBcIiNcIiArIGNhcmRCdG5JZCArIFwiLmNhcmRCdG4yXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsZXQgY2FyZEJ0bjJJZCA9IGNhcmRCdG4yID8gY2FyZEJ0bjIuaWQgOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAoY2FyZEJ0bklkID09PSBjYXJkQnRuMklkKSB7XG4gICAgICAgICAgICAgIGFsbEZvbGRlci5yZW1vdmVDaGlsZChjYXJkQnRuMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJvai5yZW1vdmVDaGlsZChkYXRhKTtcbiAgICAgICAgICBwcm9qLnJlbW92ZUNoaWxkKHRpdGxlX3JlbSk7XG4gICAgICAgICAgcG9zdHMucmVtb3ZlQ2hpbGQocHJvalBvc3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG15UHJvanMucG9wKCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4geyB1cGRhdGVBcnIgfTtcbn1cblxuZXhwb3J0IHsgYWRkUHJvaiB9O1xuIiwiZXhwb3J0IHsgYWRkVGFza3MgfTtcblxuZnVuY3Rpb24gYWRkVGFza3MoKSB7XG4gIGxldCBteVRhc2tzID0gW107XG4gIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuICBsZXQgYWxsRm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGxGb2xkZXJcIik7XG4gIGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGRhdGEpIHtcbiAgICAgICh0aGlzLnRpdGxlID0gdGl0bGUpLFxuICAgICAgICAodGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uKSxcbiAgICAgICAgKHRoaXMuZGF0ZSA9IGRhdGUpLFxuICAgICAgICAodGhpcy5wcmlvcml0eSA9IHByaW9yaXR5KSxcbiAgICAgIFxuICAgICAgICAodGhpcy5kYXRhID0gZGF0YSk7XG4gICAgfVxuICB9XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiBhZGRUYXNrKGV2ZW50KSB7XG4gICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZSxcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWUsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUsXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlLFxuICAgICAgXG4gICAgICBNYXRoLnJhbmRvbSgpICogN1xuICAgICk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBteVRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgdXBkYXRlQXJyKCk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gIH0pO1xuICBmdW5jdGlvbiB1cGRhdGVBcnIoKSB7XG4gICAgLy8gcG9zdHMuaW5uZXJUZXh0ID0gXCIgXCI7XG5cbiAgICBteVRhc2tzLmZvckVhY2goKHJlcykgPT4ge1xuICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBjMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYzAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBjMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYzEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYzIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBjMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYzMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBjNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgYzQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxldCBlZGl0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBsZXQgc2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBsZXQgc2F2ZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbGV0IGNhcmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbGV0IGNhcmRCdG4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxldCBkZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxldCBkZWxlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBsZXQgcG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvc3RzXCIpO1xuICAgICAgbGV0IGRscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZGxzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgY2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgICAgIFwiRGVzY3JpcHRpb246IFwiICsgcmVzLmRlc2NyaXB0aW9uXG4gICAgICApO1xuICAgICAgbGV0IGNhcmREZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgXCJEZXNjcmlwdGlvbjogXCIgKyByZXMuZGVzY3JpcHRpb25cbiAgICAgICk7XG4gICAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVzLnRpdGxlKTtcbiAgICAgIGxldCBjYXJkVGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVzLnRpdGxlKTtcbiAgICAgIGxldCBjYXJkRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRHVlIERhdGU6IFwiICsgcmVzLmRhdGUpO1xuICAgICAgbGV0IGNhcmREYXRlMiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRHVlIERhdGU6IFwiICsgcmVzLmRhdGUpO1xuICAgICAgbGV0IGNhcmRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiUHJpb3JpdHk6IFwiICsgcmVzLnByaW9yaXR5KTtcbiAgICAgIGxldCBjYXJkUHJpb3JpdHkyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJQcmlvcml0eTogXCIgKyByZXMucHJpb3JpdHkpO1xuICAgICAgbGV0IGNhcmRDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbXBsZXRlZDogXCIpO1xuICAgICAgbGV0IGNhcmRDb21wbGV0ZWQyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb21wbGV0ZWQ6IFwiKTtcbiAgICAgIGxldCBjYXJkQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBsZXQgY2FyZENoZWNrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNhcmRDaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgY2FyZENoZWNrMi50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgY2FyZENoZWNrLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZENoZWNrXCIpO1xuICAgICAgY2FyZENoZWNrMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRDaGVjazJcIik7XG4gICAgICBsZXQgY2FyZERhdGEgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShyZXMuZGF0YSk7XG4gICAgICBsZXQgY2FyZERhdGEyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocmVzLmRhdGEpO1xuICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRcIik7XG4gICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIHJlcy50aXRsZSk7XG4gICAgICBjYXJkMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmQyXCIpO1xuICAgICAgY2FyZDIuc2V0QXR0cmlidXRlKFwiaWRcIiwgcmVzLnRpdGxlKTtcbiAgICAgIGMwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYzBcIik7XG4gICAgICBjMDIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjMDJcIik7XG4gICAgICBjMS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImMxXCIpO1xuICAgICAgYzEyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYzEyXCIpO1xuICAgICAgYzIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjMlwiKTtcbiAgICAgIGMyMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImMyMlwiKTtcbiAgICAgIGMzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYzNcIik7XG4gICAgICBjMzIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjMzJcIik7XG4gICAgICBjNC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImM0XCIpO1xuICAgICAgYzQyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYzQyXCIpO1xuICAgICAgZGVsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGVcIik7XG4gICAgICBkZWxlMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGUyXCIpO1xuICAgICAgZWRpdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXRcIik7XG4gICAgICBlZGl0Mi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVkaXQyXCIpO1xuICAgICAgc2F2ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNhdmVcIik7XG4gICAgICBzYXZlMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNhdmUyXCIpO1xuICAgICAgZGxzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGxzXCIpO1xuICAgICAgZGxzMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRsczJcIik7XG4gICAgICBjMC5hcHBlbmRDaGlsZChjYXJkRGF0YSk7XG4gICAgICBjMDIuYXBwZW5kQ2hpbGQoY2FyZERhdGEyKTtcbiAgICAgIGMyLmFwcGVuZENoaWxkKGNhcmREZXNjcmlwdGlvbik7XG4gICAgICBjMjIuYXBwZW5kQ2hpbGQoY2FyZERlc2NyaXB0aW9uMik7XG4gICAgICBjMy5hcHBlbmRDaGlsZChjYXJkRGF0ZSk7XG4gICAgICBjMzIuYXBwZW5kQ2hpbGQoY2FyZERhdGUyKTtcbiAgICAgIGM0LmFwcGVuZENoaWxkKGNhcmRQcmlvcml0eSk7XG4gICAgICBjNDIuYXBwZW5kQ2hpbGQoY2FyZFByaW9yaXR5Mik7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGMyKTtcbiAgICAgIGNhcmQyLmFwcGVuZENoaWxkKGMyMik7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGMzKTtcbiAgICAgIGNhcmQyLmFwcGVuZENoaWxkKGMzMik7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKGM0KTtcbiAgICAgIGNhcmQyLmFwcGVuZENoaWxkKGM0Mik7XG4gICAgICBjMS5hcHBlbmQoY2FyZENvbXBsZXRlZCwgY2FyZENoZWNrKTtcbiAgICAgIGMxMi5hcHBlbmQoY2FyZENvbXBsZXRlZDIsIGNhcmRDaGVjazIpO1xuICAgICAgZGxzLmFwcGVuZChzYXZlLCBlZGl0LCBkZWxlKTtcbiAgICAgIGRsczIuYXBwZW5kKHNhdmUyLCBlZGl0MiwgZGVsZTIpO1xuICAgICAgY2FyZC5hcHBlbmRDaGlsZChkbHMpO1xuICAgICAgY2FyZDIuYXBwZW5kQ2hpbGQoZGxzMik7XG4gICAgICBkZWxlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgIGRlbGV0ZVxuICAgICAgPC9zcGFuPmA7XG4gICAgICBkZWxlMi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICBkZWxldGVcbiAgICAgIDwvc3Bhbj5gO1xuICAgICAgZWRpdC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICBlZGl0XG4gICAgICA8L3NwYW4+YDtcbiAgICAgIGVkaXQyLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgIGVkaXRcbiAgICAgIDwvc3Bhbj5gO1xuICAgICAgc2F2ZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICBzYXZlXG4gICAgICA8L3NwYW4+YDtcbiAgICAgIHNhdmUyLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgIHNhdmVcbiAgICAgIDwvc3Bhbj5gO1xuXG4gICAgICBkZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChteVRhc2tzW2ldLmRhdGEgPT0gYzAuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICAgIG15VGFza3Muc3BsaWNlKGksIDEpOyAvLyByZW1vdmUgdGhlIGNvcnJlc3BvbmRpbmcgdGFzayBmcm9tIG15VGFza3MgYXJyYXlcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICAgICAgY2FyZEJ0bi5yZW1vdmUoKTtcbiAgICAgICAgICBjYXJkMi5yZW1vdmUoKTtcbiAgICAgICAgICBjYXJkQnRuMi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkZWxlMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobXlUYXNrc1tpXS5kYXRhID09IGMwMi5pbm5lclRleHQpIHtcbiAgICAgICAgICAgICAgbXlUYXNrcy5zcGxpY2UoaSwgMSk7IC8vIHJlbW92ZSB0aGUgY29ycmVzcG9uZGluZyB0YXNrIGZyb20gbXlUYXNrcyBhcnJheVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgICAgICAgIGNhcmRCdG4ucmVtb3ZlKCk7XG4gICAgICAgICAgY2FyZDIucmVtb3ZlKCk7XG4gICAgICAgICAgY2FyZEJ0bjIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjYXJkQnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZEJ0blwiKTtcbiAgICAgIGNhcmRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgcmVzLnRpdGxlKTtcbiAgICAgIGNhcmRCdG4yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZEJ0bjJcIik7XG4gICAgICBjYXJkQnRuMi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCByZXMudGl0bGUpO1xuICAgICAgY2FyZEJ0bi5hcHBlbmQoY2FyZFRpdGxlKTtcbiAgICAgIGNhcmRCdG4yLmFwcGVuZChjYXJkVGl0bGUyKTtcbiAgICAgIGxldCBkaXNwbGF5ZWRDYXJkID0gbnVsbDtcblxuICAgICAgcG9zdHMuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgICAgICBkaXNwbGF5ZWRDYXJkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGlzcGxheWVkQ2FyZCAmJiBkaXNwbGF5ZWRDYXJkICE9PSBhbGxGb2xkZXIpIHtcbiAgICAgICAgZGlzcGxheWVkQ2FyZC5hcHBlbmQoY2FyZEJ0bik7XG4gICAgICAgIGFsbEZvbGRlci5hcHBlbmQoY2FyZEJ0bjIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxsRm9sZGVyLmFwcGVuZChjYXJkQnRuMik7XG4gICAgICB9XG5cbiAgICAgIGNhcmRCdG4uYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICBjYXJkQnRuMi5hcHBlbmRDaGlsZChjYXJkMik7XG4gICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGNhcmQyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGNhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChjYXJkLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiICYmIGUudGFyZ2V0ID09IGNhcmRCdG4pIHtcbiAgICAgICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfSBlbHNlIGlmIChjYXJkLnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiICYmIGUudGFyZ2V0ID09IGNhcmRCdG4pIHtcbiAgICAgICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNhcmRCdG4yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoY2FyZDIuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgJiYgZS50YXJnZXQgPT0gY2FyZEJ0bjIpIHtcbiAgICAgICAgICBjYXJkMi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FyZDIuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIgJiYgZS50YXJnZXQgPT0gY2FyZEJ0bjIpIHtcbiAgICAgICAgICBjYXJkMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHJlcy5wcmlvcml0eSA9PSBcIkxvd1wiKSB7XG4gICAgICAgIGNhcmRCdG4yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2JiZGVkNlwiO1xuICAgICAgICBjYXJkQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2JiZGVkNlwiO1xuICAgICAgfSBlbHNlIGlmIChyZXMucHJpb3JpdHkgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICBjYXJkQnRuMi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmYWUzZDlcIjtcbiAgICAgICAgY2FyZEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmYWUzZDlcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcmRCdG4yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmYjZiOVwiO1xuICAgICAgICBjYXJkQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmYjZiOVwiO1xuICAgICAgfVxuXG4gICAgICBsZXQgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGxldCBlZGl0Rm9ybTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGVkaXRGb3JtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZWRpdEZvcm1cIik7XG4gICAgICBlZGl0Rm9ybTIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJlZGl0Rm9ybTJcIik7XG4gICAgICBsZXQgbGFiZWxEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGxhYmVsRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjogXCI7XG4gICAgICBsZXQgbGFiZWxEZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBsYWJlbERlc2NyaXB0aW9uMi5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgaW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0RGVzY3JpcHRpb25cIik7XG4gICAgICBsZXQgaW5wdXREZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBpbnB1dERlc2NyaXB0aW9uMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0RGVzY3JpcHRpb25cIik7XG4gICAgICBsZXQgbGFiZWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgbGFiZWxEYXRlLmlubmVyVGV4dCA9IFwiRGF0ZTogXCI7XG4gICAgICBsZXQgbGFiZWxEYXRlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGxhYmVsRGF0ZTIuaW5uZXJUZXh0ID0gXCJEYXRlOiBcIjtcblxuICAgICAgbGV0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGlucHV0RGF0ZS50eXBlID0gXCJkYXRlXCI7XG5cbiAgICAgIGxldCBpbnB1dERhdGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgaW5wdXREYXRlMi50eXBlID0gXCJkYXRlXCI7XG5cbiAgICAgIGlucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImlucHV0RGF0ZVwiKTtcbiAgICAgIGlucHV0RGF0ZTIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dERhdGUyXCIpO1xuXG4gICAgICBsZXQgbGFiZWxQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGxhYmVsUHJpb3JpdHkuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogXCI7XG4gICAgICBsZXQgbGFiZWxQcmlvcml0eTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBsYWJlbFByaW9yaXR5Mi5pbm5lclRleHQgPSBcIlByaW9yaXR5OiBcIjtcbiAgICAgIGxldCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgIGlucHV0UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbnB1dFByaW9yaXR5XCIpO1xuICAgICAgbGV0IGlucHV0UHJpb3JpdHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgIGlucHV0UHJpb3JpdHkyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5wdXRQcmlvcml0eVwiKTtcblxuICAgICAgY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24xLnZhbHVlID0gXCJMb3dcIjtcbiAgICAgIG9wdGlvbjEudGV4dCA9IFwiTG93XCI7XG5cbiAgICAgIGNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uMi52YWx1ZSA9IFwiTWVkaXVtXCI7XG4gICAgICBvcHRpb24yLnRleHQgPSBcIk1lZGl1bVwiO1xuXG4gICAgICBjb25zdCBvcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbjMudmFsdWUgPSBcIkhpZ2hcIjtcbiAgICAgIG9wdGlvbjMudGV4dCA9IFwiSGlnaFwiO1xuXG4gICAgICBjb25zdCBvcHRpb24xMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24xMi52YWx1ZSA9IFwiTG93XCI7XG4gICAgICBvcHRpb24xMi50ZXh0ID0gXCJMb3dcIjtcblxuICAgICAgY29uc3Qgb3B0aW9uMjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uMjIudmFsdWUgPSBcIk1lZGl1bVwiO1xuICAgICAgb3B0aW9uMjIudGV4dCA9IFwiTWVkaXVtXCI7XG5cbiAgICAgIGNvbnN0IG9wdGlvbjMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbjMyLnZhbHVlID0gXCJIaWdoXCI7XG4gICAgICBvcHRpb24zMi50ZXh0ID0gXCJIaWdoXCI7XG5cbiAgICAgIGlucHV0UHJpb3JpdHkuYWRkKG9wdGlvbjEpO1xuICAgICAgaW5wdXRQcmlvcml0eS5hZGQob3B0aW9uMik7XG4gICAgICBpbnB1dFByaW9yaXR5LmFkZChvcHRpb24zKTtcblxuICAgICAgaW5wdXRQcmlvcml0eTIuYWRkKG9wdGlvbjEyKTtcbiAgICAgIGlucHV0UHJpb3JpdHkyLmFkZChvcHRpb24yMik7XG4gICAgICBpbnB1dFByaW9yaXR5Mi5hZGQob3B0aW9uMzIpO1xuXG4gICAgICBlZGl0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBlZGl0Rm9ybTIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgZWRpdEZvcm0uYXBwZW5kKGxhYmVsRGVzY3JpcHRpb24sIGxhYmVsRGF0ZSwgbGFiZWxQcmlvcml0eSk7XG4gICAgICBlZGl0Rm9ybTIuYXBwZW5kKGxhYmVsRGVzY3JpcHRpb24yLCBsYWJlbERhdGUyLCBsYWJlbFByaW9yaXR5Mik7XG4gICAgICBsYWJlbERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuICAgICAgbGFiZWxEZXNjcmlwdGlvbjIuYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbjIpO1xuICAgICAgbGFiZWxEYXRlLmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG4gICAgICBsYWJlbERhdGUyLmFwcGVuZENoaWxkKGlucHV0RGF0ZTIpO1xuICAgICAgbGFiZWxQcmlvcml0eS5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5KTtcbiAgICAgIGxhYmVsUHJpb3JpdHkyLmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkyKTtcbiAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdEZvcm0pO1xuICAgICAgY2FyZDIuYXBwZW5kQ2hpbGQoZWRpdEZvcm0yKTtcblxuICAgICAgZWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBlZGl0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGVkaXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBzYXZlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIH0pO1xuICAgICAgZWRpdDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZWRpdEZvcm0yLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgZWRpdDIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBzYXZlMi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICB9KTtcbiAgICAgIC8vY29ycmVjdFxuICAgICAgc2F2ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gc2F2ZVRhc2soZSkge1xuICAgICAgICBsZXQgZ29vZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGxldCBnb29kQyA9IGdvb2QucGFyZW50Tm9kZTtcbiAgICAgICAgbGV0IGdvb2RDYXJkID0gZ29vZEMucGFyZW50Tm9kZTtcbiAgICAgICAgbGV0IGdvb2RDYXJkSWQgPSBnb29kQ2FyZC5pZDtcblxuICAgICAgICBsZXQgZ29vZENhcmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ29vZENhcmRJZCk7XG4gICAgICAgIGxldCBjYXJkMiA9IGdvb2RDYXJkMjtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZ29vZENhcmQucXVlcnlTZWxlY3RvcihcIi5jMlwiKTtcbiAgICAgICAgbGV0IGRhdGUgPSBnb29kQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmMzXCIpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBnb29kQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLmM0XCIpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24yID0gY2FyZDIucXVlcnlTZWxlY3RvcihcIi5jMjJcIik7XG4gICAgICAgIGxldCBkYXRlMiA9IGNhcmQyLnF1ZXJ5U2VsZWN0b3IoXCIuYzMyXCIpO1xuICAgICAgICBsZXQgcHJpb3JpdHkyID0gY2FyZDIucXVlcnlTZWxlY3RvcihcIi5jNDJcIik7XG5cbiAgICAgICAgaWYgKGdvb2RDYXJkLmlkID09IGNhcmQyLmlkKSB7XG4gICAgICAgICAgZGVzY3JpcHRpb24yLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb246IFwiICsgaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgICBkYXRlMi5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlOiBcIiArIGlucHV0RGF0ZS52YWx1ZTtcbiAgICAgICAgICBwcmlvcml0eTIuaW5uZXJIVE1MID0gXCJQcmlvcml0eTogXCIgKyBpbnB1dFByaW9yaXR5LnZhbHVlO1xuXG4gICAgICAgICAgaWYgKGlucHV0UHJpb3JpdHkudmFsdWUgPT0gXCJMb3dcIikge1xuICAgICAgICAgICAgY2FyZEJ0bjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmJkZWQ2XCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFByaW9yaXR5LnZhbHVlID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgICAgIGNhcmRCdG4yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZhZTNkOTtcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FyZEJ0bjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZiNmI5XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmQyLCBnb29kQ2FyZCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGlucHV0RGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIGRhdGUuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZTogXCIgKyBpbnB1dERhdGUudmFsdWU7XG4gICAgICAgIHByaW9yaXR5LmlubmVySFRNTCA9IFwiUHJpb3JpdHk6IFwiICsgaW5wdXRQcmlvcml0eS52YWx1ZTtcblxuICAgICAgICBpZiAoaW5wdXRQcmlvcml0eS52YWx1ZSA9PSBcIkxvd1wiKSB7XG4gICAgICAgICAgY2FyZEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiYmRlZDZcIjtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dFByaW9yaXR5LnZhbHVlID09IFwiTWVkaXVtXCIpIHtcbiAgICAgICAgICBjYXJkQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZhZTNkOVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhcmRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZiNmI5XCI7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGVkaXQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBzYXZlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuXG4gICAgICBzYXZlMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gc2F2ZVRhc2syKGUpIHtcbiAgICAgICAgbGV0IGdvb2QyID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgbGV0IGdvb2RDMiA9IGdvb2QyLnBhcmVudE5vZGU7XG4gICAgICAgIGxldCBnb29kQ2FyZDIgPSBnb29kQzIucGFyZW50Tm9kZTtcbiAgICAgICAgbGV0IGdvb2RDYXJkSWQyID0gZ29vZENhcmQyLmlkO1xuICAgICAgICBjb25zb2xlLmxvZyhnb29kQ2FyZElkMiwgZ29vZENhcmQyKTtcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgZ29vZENhcmRJZDIgKyBcIi5jYXJkXCIpO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbjIgPSBnb29kQ2FyZDIucXVlcnlTZWxlY3RvcihcIi5jMjJcIik7XG4gICAgICAgIGxldCBkYXRlMiA9IGdvb2RDYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmMzMlwiKTtcbiAgICAgICAgbGV0IHByaW9yaXR5MiA9IGdvb2RDYXJkMi5xdWVyeVNlbGVjdG9yKFwiLmM0MlwiKTtcblxuICAgICAgICBpZiAoY2FyZCkge1xuICAgICAgICAgIGlmIChnb29kQ2FyZDIuaWQgPT0gY2FyZC5pZCkge1xuICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiLmMyXCIpO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuYzNcIik7XG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIuYzRcIik7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGlucHV0RGVzY3JpcHRpb24yLnZhbHVlO1xuICAgICAgICAgICAgZGF0ZS5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlOiBcIiArIGlucHV0RGF0ZTIudmFsdWU7XG4gICAgICAgICAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5OiBcIiArIGlucHV0UHJpb3JpdHkyLnZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoaW5wdXRQcmlvcml0eTIudmFsdWUgPT0gXCJMb3dcIikge1xuICAgICAgICAgICAgICBjYXJkQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2JiZGVkNlwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFByaW9yaXR5Mi52YWx1ZSA9PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgICAgICAgIGNhcmRCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmFlM2Q5XCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYXJkQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmYjZiOVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGRlc2NyaXB0aW9uMi5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uOiBcIiArIGlucHV0RGVzY3JpcHRpb24yLnZhbHVlO1xuICAgICAgICBkYXRlMi5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlOiBcIiArIGlucHV0RGF0ZTIudmFsdWU7XG4gICAgICAgIHByaW9yaXR5Mi5pbm5lckhUTUwgPSBcIlByaW9yaXR5OiBcIiArIGlucHV0UHJpb3JpdHkyLnZhbHVlO1xuXG4gICAgICAgIGlmIChpbnB1dFByaW9yaXR5Mi52YWx1ZSA9PSBcIkxvd1wiKSB7XG4gICAgICAgICAgY2FyZEJ0bjIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmJkZWQ2XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXRQcmlvcml0eTIudmFsdWUgPT0gXCJNZWRpdW1cIikge1xuICAgICAgICAgIGNhcmRCdG4yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZhZTNkOVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhcmRCdG4yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmYjZiOVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgZWRpdEZvcm0yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZWRpdDIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBzYXZlMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9KTtcblxuICAgICAgbXlUYXNrcy5wb3AoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLy90b2dnbGVzIHRhc2sgZm9ybVxuZnVuY3Rpb24gdGFza0J0blRvZ2dsZSgpIHtcbiAgY29uc3QgYWRkVGFza0J0blRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGFza1wiKTtcbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1cIik7XG4gIGFkZFRhc2tCdG5Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG59XG4vL3RvZ2dsZXMgbGlzdCBvZiBwcm9qZWN0c1xuZnVuY3Rpb24gcHJvakJ0blRvZ2dsZSgpIHtcbiAgY29uc3QgcHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEJ0blwiKTtcbiAgbGV0IHByb2pDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qQ29udFwiKTtcbiAgcHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9qQ29udC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgcHJvakNvbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qQ29udC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9KTtcbn1cbi8vIHRvZ2dsZXMgdGhlIGZvcm0gdG8gbWFrZSBuZXcgcHJvamVjdHNcbmZ1bmN0aW9uIHByb2pGb3JtVG9nZ2xlKCkge1xuICBjb25zdCBhZGRQcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0XCIpO1xuICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdEZvcm1cIik7XG4gIFxuICBhZGRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xufVxuLy8gLy9oaWRlcyB0aGUgdGFzayBmb3JtIGFmdGVyIHN1Ym1pdFxuLy8gZnVuY3Rpb24gYWRkQnRuKCkge1xuLy8gICBsZXQgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRcIik7XG4vLyAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtXCIpO1xuXG4vLyAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIilcbi8vICAgfSk7XG4vLyB9XG5cbi8vIC8vaGlkZXMgcHJvamVjdCBmb3JtIGFmdGVyIHN1Ym1pdFxuLy8gZnVuY3Rpb24gcHJvakZvcm1TdWJtaXRCdG4oKSB7XG4vLyAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFwiKTtcbi8vICAgbGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RGb3JtXCIpO1xuLy8gICBsZXQgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2pOYW1lXCIpXG4vLyAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgIGlmIChwcm9qTmFtZS5pbm5lclRleHQgIT09IFwiXCIpXG4vLyAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgICAgY29uc29sZS5sb2coXCJoaVwiKVxuLy8gICB9KTtcbi8vIH1cbmZ1bmN0aW9uIG9uZU9wZW4oKXtcbiAgbGV0IHBvc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwcm9qVGFiXCIpXG4gIFxuICBmb3IobGV0IGkgPSAwIDsgaTxwb3N0cy5sZW5ndGg7IGkgKyspe1xuICAgIGlmKHBvc3RzW2ldLnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiKXtcbiAgcG9zdHNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG59XG4gIH1cblxufVxuZnVuY3Rpb24gcHJvakFsbCgpIHtcbiAgbGV0IGFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsXCIpO1xuICBsZXQgcG9zdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvc3RzXCIpO1xuICBsZXQgYWxsRm9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWxsRm9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgYWxsRm9sZGVyLmlubmVyVGV4dCA9IFwiQWxsXCI7XG4gIGFsbEZvbGRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFsbEZvbGRlclwiKTtcbiAgYWxsRm9sZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJwcm9qVGFiXCIpXG4gIHBvc3RzLmFwcGVuZENoaWxkKGFsbEZvbGRlcik7XG4gIGFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gc2VsZWN0QWxsKCkge1xuICAgIFxuICAgIGlmIChhbGxGb2xkZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgIG9uZU9wZW4oKVxuICAgICAgYWxsRm9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxsRm9sZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuZXhwb3J0IHtcbiBvbmVPcGVuLFxuICB0YXNrQnRuVG9nZ2xlLFxuICAvLyBhZGRCdG4sXG4gIHByb2pCdG5Ub2dnbGUsXG4gIHByb2pGb3JtVG9nZ2xlLFxuICAvLyBwcm9qRm9ybVN1Ym1pdEJ0bixcbiAgcHJvakFsbCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2xheW91dC5jc3NcIjtcbmltcG9ydCB7IGFkZFRhc2tzIH0gZnJvbSBcIi4vYWRkVGFza1wiO1xuaW1wb3J0IHtcbiAgdGFza0J0blRvZ2dsZSxcbiAgLy8gYWRkQnRuLFxuICBwcm9qQnRuVG9nZ2xlLFxuICBwcm9qRm9ybVRvZ2dsZSxcbiAgLy8gcHJvakZvcm1TdWJtaXRCdG4sXG4gIHByb2pBbGwsXG59IGZyb20gXCIuL3RvZ2dsZXNBbmRCdG5zXCI7XG5pbXBvcnQgeyBhZGRQcm9qIH0gZnJvbSBcIi4vYWRkUHJvamVjdFwiO1xuXG5wcm9qQWxsKCk7XG4vLyBwcm9qRm9ybVN1Ym1pdEJ0bigpO1xucHJvakZvcm1Ub2dnbGUoKTtcbmFkZFByb2ooKTtcbnByb2pCdG5Ub2dnbGUoKTtcbi8vIGFkZEJ0bigpO1xudGFza0J0blRvZ2dsZSgpO1xuYWRkVGFza3MoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMzIpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChcbiAgICAgIGVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTlBVVFwiIHx8XG4gICAgICBlbGVtZW50LnRhZ05hbWUgPT09IFwiVEVYVEFSRUFcIiB8fFxuICAgICAgZWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZVxuICAgICkge1xuICAgICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gZWxlbWVudC5zZWxlY3Rpb25TdGFydDtcbiAgICAgIHZhciBzZWxlY3Rpb25FbmQgPSBlbGVtZW50LnNlbGVjdGlvbkVuZDtcbiAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICB2YXIgbmV3VmFsdWUgPVxuICAgICAgICB2YWx1ZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uU3RhcnQpICtcbiAgICAgICAgXCIgXCIgK1xuICAgICAgICB2YWx1ZS5zdWJzdHJpbmcoc2VsZWN0aW9uRW5kKTtcbiAgICAgIGVsZW1lbnQudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsZWN0aW9uU3RhcnQgKyAxLCBzZWxlY3Rpb25TdGFydCArIDEpO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=