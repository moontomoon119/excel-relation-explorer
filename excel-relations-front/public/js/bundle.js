/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/filter.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/components/filter.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * 필터 컴포넌트 스타일
 */

/* 필터 사이드바 */
.filter-sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-bottom: 1px solid var(--border-color);
}

.filter-header h4 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

.filter-controls {
  display: flex;
  gap: 5px;
}

/* 버튼 아이콘화를 위한 스타일 */
.filter-controls .btn,
.filter-header .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter-controls .btn i,
.filter-header .btn i {
  font-size: 0.85rem;
}

.filters-container {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

/* 필터 카드 */
.filter-card {
  background-color: #fff;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  margin-bottom: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  overflow: hidden;
}

.filter-card:last-child {
  margin-bottom: 0;
}

.filter-card.expanded .filter-header {
  background-color: #ffffff;
}

.filter-card.collapsed .filter-body {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
  overflow: hidden;
}

.filter-card .filter-header {
  cursor: pointer;
  background-color: #f8f9fa;
  padding: 8px 10px;
}

.filter-title {
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  cursor: pointer;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 0;
  overflow: hidden;
}

.filter-name-wrapper {
  display: flex;
  align-items: center;
  flex-grow: 1;
  min-width: 0;
  overflow: hidden;
}

.filter-name {
  margin-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;
  max-width: 180px;
  font-size: 0.85rem;
}

.filter-type {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  flex-shrink: 0;
}

.filter-body {
  padding: 10px;
  transition: max-height 0.3s ease-out, padding 0.3s ease-out, opacity 0.3s ease-out;
  max-height: 500px;
  opacity: 1;
}

/* 필터 옵션 */
.filter-options {
  margin-top: 8px;
}

/* 기본적으로 필터 옵션 숨김 (인라인 스타일 제거용) */
.filter-options.numeric-options,
.filter-options.text-options,
.filter-options.date-options {
  display: none;
}

/* 활성화된 필터 옵션 표시 */
.filter-options.active {
  display: block;
}

.value-list {
  max-height: 180px;
  overflow-y: auto;
  background-color: #f9f9f9;
  font-size: 0.8rem;
}

.value-item {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-bottom: 1px solid #eee;
}

.value-item:last-child {
  border-bottom: none;
}

.value-checkbox {
  margin-right: 8px;
}

.value-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  width: 100%;
  font-size: 0.8rem;
}

.value-count {
  font-size: 0.75rem;
  color: #888;
  margin-left: auto;
}

/* 결과 미리보기 */
.filter-results-preview {
  padding: 12px;
  border-top: 1px solid var(--border-color);
  background-color: #f5f9ff;
  font-size: 0.85rem;
}

.results-summary h5 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.pnu-preview {
  font-size: 0.8rem;
  margin-top: 8px;
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
}

.pnu-item {
  font-family: monospace;
  background-color: #f0f0f0;
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 0.8rem;
} `, "",{"version":3,"sources":["webpack://./src/styles/components/filter.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF,YAAY;AACZ;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,4CAA4C;AAC9C;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA,oBAAoB;AACpB;;EAEE,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,YAAY;AACd;;AAEA,UAAU;AACV;EACE,sBAAsB;EACtB,qCAAqC;EACrC,kBAAkB;EAClB,mBAAmB;EACnB,yCAAyC;EACzC,2DAA2D;EAC3D,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,cAAc;EACd,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,kFAAkF;EAClF,iBAAiB;EACjB,UAAU;AACZ;;AAEA,UAAU;AACV;EACE,eAAe;AACjB;;AAEA,iCAAiC;AACjC;;;EAGE,aAAa;AACf;;AAEA,kBAAkB;AAClB;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;AACnB;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,yCAAyC;EACzC,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":["/**\n * 필터 컴포넌트 스타일\n */\n\n/* 필터 사이드바 */\n.filter-sidebar {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.filter-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.filter-header h4 {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.filter-controls {\n  display: flex;\n  gap: 5px;\n}\n\n/* 버튼 아이콘화를 위한 스타일 */\n.filter-controls .btn,\n.filter-header .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.8rem;\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.filter-controls .btn i,\n.filter-header .btn i {\n  font-size: 0.85rem;\n}\n\n.filters-container {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px;\n}\n\n/* 필터 카드 */\n.filter-card {\n  background-color: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 4px;\n  margin-bottom: 12px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;\n  overflow: hidden;\n}\n\n.filter-card:last-child {\n  margin-bottom: 0;\n}\n\n.filter-card.expanded .filter-header {\n  background-color: #ffffff;\n}\n\n.filter-card.collapsed .filter-body {\n  max-height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  opacity: 0;\n  overflow: hidden;\n}\n\n.filter-card .filter-header {\n  cursor: pointer;\n  background-color: #f8f9fa;\n  padding: 8px 10px;\n}\n\n.filter-title {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  font-size: 0.85rem;\n  cursor: pointer;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.filter-name-wrapper {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.filter-name {\n  margin-right: 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-shrink: 1;\n  max-width: 180px;\n  font-size: 0.85rem;\n}\n\n.filter-type {\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  flex-shrink: 0;\n}\n\n.filter-body {\n  padding: 10px;\n  transition: max-height 0.3s ease-out, padding 0.3s ease-out, opacity 0.3s ease-out;\n  max-height: 500px;\n  opacity: 1;\n}\n\n/* 필터 옵션 */\n.filter-options {\n  margin-top: 8px;\n}\n\n/* 기본적으로 필터 옵션 숨김 (인라인 스타일 제거용) */\n.filter-options.numeric-options,\n.filter-options.text-options,\n.filter-options.date-options {\n  display: none;\n}\n\n/* 활성화된 필터 옵션 표시 */\n.filter-options.active {\n  display: block;\n}\n\n.value-list {\n  max-height: 180px;\n  overflow-y: auto;\n  background-color: #f9f9f9;\n  font-size: 0.8rem;\n}\n\n.value-item {\n  display: flex;\n  align-items: center;\n  padding: 6px 10px;\n  border-bottom: 1px solid #eee;\n}\n\n.value-item:last-child {\n  border-bottom: none;\n}\n\n.value-checkbox {\n  margin-right: 8px;\n}\n\n.value-label {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  width: 100%;\n  font-size: 0.8rem;\n}\n\n.value-count {\n  font-size: 0.75rem;\n  color: #888;\n  margin-left: auto;\n}\n\n/* 결과 미리보기 */\n.filter-results-preview {\n  padding: 12px;\n  border-top: 1px solid var(--border-color);\n  background-color: #f5f9ff;\n  font-size: 0.85rem;\n}\n\n.results-summary h5 {\n  margin-top: 0;\n  margin-bottom: 8px;\n  font-size: 0.9rem;\n}\n\n.pnu-preview {\n  font-size: 0.8rem;\n  margin-top: 8px;\n  background-color: #fff;\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #e0e0e0;\n}\n\n.pnu-item {\n  font-family: monospace;\n  background-color: #f0f0f0;\n  padding: 2px 4px;\n  border-radius: 3px;\n  font-size: 0.8rem;\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/grid.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/components/grid.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * 그리드 컴포넌트 스타일
 */

.grid-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.grid-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-bottom: 1px solid var(--border-color);
}

.grid-header h4 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

.grid-controls {
  display: flex;
  gap: 5px;
}

.data-grid {
  flex: 1;
  overflow-y: auto;
  background-color: #fff;
}

.grid-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  color: #666;
  font-size: 0.85rem;
}

.grid-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-top: 1px solid var(--border-color);
  background-color: #f9f9f9;
}

.grid-info {
  font-size: 0.8rem;
  color: #666;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.page-info {
  font-size: 0.8rem;
  display: inline-block;
  min-width: 40px;
  text-align: center;
}

/* 입지분석 컨테이너 스타일 */
.location-analysis-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-bottom: 1px solid var(--border-color);
}

.location-analysis-header h4 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

.location-analysis-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}

/* 평가 지수 설정 스타일 */
.index-settings-container {
  background-color: #fff;
  border-bottom: 1px solid var(--border-color);
  padding: 10px;
}

.index-settings-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.settings-row {
  display: flex;
  align-items: flex-end;
  gap: 10px;
}

.table-column-row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}

.setting-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.setting-item label {
  font-size: 0.75rem;
  font-weight: 500;
  color: #555;
}

.flex-grow {
  flex: 1;
  min-width: 120px;
}

/* 이동시간 선택기 스타일 */
.time-range-group {
  margin-bottom: 5px;
}

.time-range-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.time-option {
  padding: 3px 8px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.7rem;
  min-width: 36px;
  text-align: center;
  transition: all 0.2s;
}

.time-option:hover {
  background-color: #e9e9e9;
}

.time-option.active {
  background-color: #007bff;
  color: white;
  border-color: #0069d9;
}

.add-index-btn-container {
  display: flex;
  align-items: flex-end;
}

.add-index-btn {
  width: 28px;
  height: 28px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.index-settings-list {
  margin-top: 10px;
  max-height: 120px;
  overflow-y: auto;
}

.empty-settings-message {
  text-align: center;
  color: #888;
  font-size: 0.8rem;
  padding: 8px;
}

.index-setting-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  background-color: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 6px;
}

.setting-index-name {
  padding: 3px 6px;
  background-color: #0d6efd;
  color: white;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
}

.setting-index-name:hover {
  background-color: #0b5ed7;
}

.setting-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex: 1;
  overflow: hidden;
}

.setting-badge {
  background-color: #e9ecef;
  color: #495057;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.65rem;
  white-space: nowrap;
}

.remove-setting-btn {
  margin-left: auto;
  padding: 2px 5px;
  font-size: 0.7rem;
  margin-left: 0;
  flex-shrink: 0;
}

/* 분석 결과 스타일 */
.analysis-results-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fff;
  padding: 10px;
}

.pnu-toggle-list {
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
}

.pnu-toggle-header {
  padding: 8px 12px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eee;
  font-size: 0.8rem;
  font-weight: 500;
}

.pnu-header-count {
  color: #666;
  font-weight: normal;
  margin-left: 5px;
}

.pnu-toggle-body {
  max-height: 150px;
  overflow-y: auto;
}

.empty-pnu-message {
  text-align: center;
  color: #888;
  font-size: 0.8rem;
  padding: 15px;
}

.pnu-toggle-item {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-bottom: 1px solid #f0f0f0;
}

.pnu-toggle-item.failed {
  background-color: #fff5f5;
}

.pnu-toggle-item:last-child {
  border-bottom: none;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 18px;
  margin-right: 10px;
}

.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-label {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 18px;
}

.toggle-label:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

.toggle-input:checked + .toggle-label {
  background-color: #2196F3;
}

.toggle-input:checked + .toggle-label:before {
  transform: translateX(12px);
}

.pnu-code {
  flex: 1;
  font-size: 0.75rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pnu-rank {
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 600;
  min-width: 30px;
  text-align: center;
  margin-left: auto;
  background-color: #f0f0f0;
  color: #333;
}

.rank-1 {
  background-color: #ffd700;
  color: #333;
  font-weight: 700;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.rank-2 {
  background-color: #c0c0c0;
  color: #333;
  font-weight: 700;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.rank-3 {
  background-color: #cd7f32;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

/* 통계 요약 토글 버튼 */
.statistics-toggle {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.statistics-toggle button {
  width: 100%;
  max-width: 180px;
  font-size: 0.75rem;
}

.result-comparison {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 10px;
}

.result-comparison h5 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-weight: 500;
}

.comparison-chart {
  flex: 1;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
}

.placeholder-chart {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #888;
  font-size: 0.8rem;
  background-color: #f9f9f9;
}

.analysis-stats {
  margin: 10px 0;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
  border: 1px solid #eee;
}

.analysis-stats h5 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-weight: 500;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-label {
  font-size: 0.7rem;
  color: #666;
}

.stat-value {
  font-size: 0.8rem;
  font-weight: 500;
  color: #333;
}

.result-actions {
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 10px;
}

/* 순위 계산 관련 스타일 */
.ranking-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0;
  padding: 8px 10px;
  background-color: #f0f7ff;
  border-radius: 4px;
  border: 1px solid #cfe2ff;
}

.calculate-ranking-btn {
  font-size: 0.85rem;
  padding: 6px 12px;
  white-space: nowrap;
}

.ranking-status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: #0d6efd;
}

.ranking-status .fa-check-circle {
  color: #198754;
}

/* PNU 목록 토글 스타일 */
.pnu-toggle-list {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  margin-bottom: 10px;
}

.pnu-analyzed-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: #ecffec;
  border-radius: 50%;
  color: #28a745;
  font-size: 0.6rem;
  margin-left: 5px;
}

.pnu-failed-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: #ffe9e9;
  border-radius: 50%;
  color: #dc3545;
  font-size: 0.6rem;
  margin-left: 5px;
  cursor: help;
}

/* PNU 점수 스타일 */
.pnu-score {
  margin-left: 8px;
  font-size: 0.65rem;
  color: #0066cc;
  font-weight: 500;
  background-color: #e6f2ff;
  border-radius: 4px;
  padding: 2px 6px;
  display: inline-block;
} `, "",{"version":3,"sources":["webpack://./src/styles/components/grid.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,4CAA4C;AAC9C;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;EACb,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,yCAAyC;EACzC,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;EACf,kBAAkB;AACpB;;AAEA,kBAAkB;AAClB;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,4CAA4C;AAC9C;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;EACP,gBAAgB;AAClB;;AAEA,iBAAiB;AACjB;EACE,sBAAsB;EACtB,4CAA4C;EAC5C,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,OAAO;EACP,gBAAgB;AAClB;;AAEA,iBAAiB;AACjB;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,OAAO;EACP,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,cAAc;AAChB;;AAEA,cAAc;AACd;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,6BAA6B;EAC7B,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,sBAAsB;EACtB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,OAAO;EACP,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,gBAAgB;EAChB,qCAAqC;AACvC;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,gBAAgB;EAChB,qCAAqC;AACvC;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,gBAAgB;EAChB,qCAAqC;AACvC;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,4DAA4D;EAC5D,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,QAAQ;EACR,gBAAgB;AAClB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;EACT,cAAc;EACd,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA,kBAAkB;AAClB;EACE,sBAAsB;EACtB,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;AACd;;AAEA,eAAe;AACf;EACE,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;AACvB","sourcesContent":["/**\n * 그리드 컴포넌트 스타일\n */\n\n.grid-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n\n.grid-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.grid-header h4 {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.grid-controls {\n  display: flex;\n  gap: 5px;\n}\n\n.data-grid {\n  flex: 1;\n  overflow-y: auto;\n  background-color: #fff;\n}\n\n.grid-placeholder {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  text-align: center;\n  background-color: #f9f9f9;\n  padding: 20px;\n  color: #666;\n  font-size: 0.85rem;\n}\n\n.grid-pagination {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  border-top: 1px solid var(--border-color);\n  background-color: #f9f9f9;\n}\n\n.grid-info {\n  font-size: 0.8rem;\n  color: #666;\n}\n\n.pagination-controls {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.page-info {\n  font-size: 0.8rem;\n  display: inline-block;\n  min-width: 40px;\n  text-align: center;\n}\n\n/* 입지분석 컨테이너 스타일 */\n.location-analysis-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.location-analysis-header h4 {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.location-analysis-content {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n}\n\n/* 평가 지수 설정 스타일 */\n.index-settings-container {\n  background-color: #fff;\n  border-bottom: 1px solid var(--border-color);\n  padding: 10px;\n}\n\n.index-settings-form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.settings-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 10px;\n}\n\n.table-column-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n}\n\n.setting-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.setting-item label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: #555;\n}\n\n.flex-grow {\n  flex: 1;\n  min-width: 120px;\n}\n\n/* 이동시간 선택기 스타일 */\n.time-range-group {\n  margin-bottom: 5px;\n}\n\n.time-range-selector {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.time-option {\n  padding: 3px 8px;\n  background-color: #f1f1f1;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 0.7rem;\n  min-width: 36px;\n  text-align: center;\n  transition: all 0.2s;\n}\n\n.time-option:hover {\n  background-color: #e9e9e9;\n}\n\n.time-option.active {\n  background-color: #007bff;\n  color: white;\n  border-color: #0069d9;\n}\n\n.add-index-btn-container {\n  display: flex;\n  align-items: flex-end;\n}\n\n.add-index-btn {\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.index-settings-list {\n  margin-top: 10px;\n  max-height: 120px;\n  overflow-y: auto;\n}\n\n.empty-settings-message {\n  text-align: center;\n  color: #888;\n  font-size: 0.8rem;\n  padding: 8px;\n}\n\n.index-setting-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 8px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  margin-bottom: 6px;\n}\n\n.setting-index-name {\n  padding: 3px 6px;\n  background-color: #0d6efd;\n  color: white;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 500;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.setting-index-name:hover {\n  background-color: #0b5ed7;\n}\n\n.setting-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  flex: 1;\n  overflow: hidden;\n}\n\n.setting-badge {\n  background-color: #e9ecef;\n  color: #495057;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 0.65rem;\n  white-space: nowrap;\n}\n\n.remove-setting-btn {\n  margin-left: auto;\n  padding: 2px 5px;\n  font-size: 0.7rem;\n  margin-left: 0;\n  flex-shrink: 0;\n}\n\n/* 분석 결과 스타일 */\n.analysis-results-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background-color: #fff;\n  padding: 10px;\n}\n\n.pnu-toggle-list {\n  border: 1px solid #eee;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 15px;\n}\n\n.pnu-toggle-header {\n  padding: 8px 12px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #eee;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.pnu-header-count {\n  color: #666;\n  font-weight: normal;\n  margin-left: 5px;\n}\n\n.pnu-toggle-body {\n  max-height: 150px;\n  overflow-y: auto;\n}\n\n.empty-pnu-message {\n  text-align: center;\n  color: #888;\n  font-size: 0.8rem;\n  padding: 15px;\n}\n\n.pnu-toggle-item {\n  display: flex;\n  align-items: center;\n  padding: 6px 12px;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.pnu-toggle-item.failed {\n  background-color: #fff5f5;\n}\n\n.pnu-toggle-item:last-child {\n  border-bottom: none;\n}\n\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 30px;\n  height: 18px;\n  margin-right: 10px;\n}\n\n.toggle-input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.toggle-label {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n  border-radius: 18px;\n}\n\n.toggle-label:before {\n  position: absolute;\n  content: \"\";\n  height: 14px;\n  width: 14px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: .4s;\n  border-radius: 50%;\n}\n\n.toggle-input:checked + .toggle-label {\n  background-color: #2196F3;\n}\n\n.toggle-input:checked + .toggle-label:before {\n  transform: translateX(12px);\n}\n\n.pnu-code {\n  flex: 1;\n  font-size: 0.75rem;\n  color: #333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.pnu-rank {\n  padding: 2px 5px;\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 600;\n  min-width: 30px;\n  text-align: center;\n  margin-left: auto;\n  background-color: #f0f0f0;\n  color: #333;\n}\n\n.rank-1 {\n  background-color: #ffd700;\n  color: #333;\n  font-weight: 700;\n  box-shadow: 0 1px 2px rgba(0,0,0,0.1);\n}\n\n.rank-2 {\n  background-color: #c0c0c0;\n  color: #333;\n  font-weight: 700;\n  box-shadow: 0 1px 2px rgba(0,0,0,0.1);\n}\n\n.rank-3 {\n  background-color: #cd7f32;\n  color: #fff;\n  font-weight: 700;\n  box-shadow: 0 1px 2px rgba(0,0,0,0.1);\n}\n\n/* 통계 요약 토글 버튼 */\n.statistics-toggle {\n  display: flex;\n  justify-content: center;\n  margin: 10px 0;\n}\n\n.statistics-toggle button {\n  width: 100%;\n  max-width: 180px;\n  font-size: 0.75rem;\n}\n\n.result-comparison {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.result-comparison h5 {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.comparison-chart {\n  flex: 1;\n  border: 1px solid #eee;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.placeholder-chart {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  color: #888;\n  font-size: 0.8rem;\n  background-color: #f9f9f9;\n}\n\n.analysis-stats {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #f8f9fa;\n  border-radius: 4px;\n  border: 1px solid #eee;\n}\n\n.analysis-stats h5 {\n  margin-top: 0;\n  margin-bottom: 10px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 10px;\n}\n\n.stat-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.stat-label {\n  font-size: 0.7rem;\n  color: #666;\n}\n\n.stat-value {\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: #333;\n}\n\n.result-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 5px;\n  margin-top: 10px;\n}\n\n/* 순위 계산 관련 스타일 */\n.ranking-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin: 10px 0;\n  padding: 8px 10px;\n  background-color: #f0f7ff;\n  border-radius: 4px;\n  border: 1px solid #cfe2ff;\n}\n\n.calculate-ranking-btn {\n  font-size: 0.85rem;\n  padding: 6px 12px;\n  white-space: nowrap;\n}\n\n.ranking-status {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.8rem;\n  color: #0d6efd;\n}\n\n.ranking-status .fa-check-circle {\n  color: #198754;\n}\n\n/* PNU 목록 토글 스타일 */\n.pnu-toggle-list {\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid var(--border-color);\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.pnu-analyzed-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  background: #ecffec;\n  border-radius: 50%;\n  color: #28a745;\n  font-size: 0.6rem;\n  margin-left: 5px;\n}\n\n.pnu-failed-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  background: #ffe9e9;\n  border-radius: 50%;\n  color: #dc3545;\n  font-size: 0.6rem;\n  margin-left: 5px;\n  cursor: help;\n}\n\n/* PNU 점수 스타일 */\n.pnu-score {\n  margin-left: 8px;\n  font-size: 0.65rem;\n  color: #0066cc;\n  font-weight: 500;\n  background-color: #e6f2ff;\n  border-radius: 4px;\n  padding: 2px 6px;\n  display: inline-block;\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/layout.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/components/layout.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * 레이아웃 스타일
 */

/* 기본 레이아웃 구조 */
.main-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.left-sidebar {
  width: var(--sidebar-width);
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
  background-color: var(--background-light);
  transition: width 0.3s ease;
}

.right-sidebar {
  width: var(--sidebar-width);
  border-left: 1px solid var(--border-color);
  overflow-y: auto;
  background-color: var(--background-light);
  transition: width 0.3s ease;
}

.main-content {
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: #fff;
}

/* 반응형 레이아웃 */
@media (max-width: 992px) {
  .main-layout {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }
  
  .left-sidebar,
  .right-sidebar {
    width: 100%;
    max-height: 50vh;
    border-right: none;
    border-left: none;
  }
  
  .left-sidebar {
    border-bottom: 1px solid var(--border-color);
  }
  
  .right-sidebar {
    border-top: 1px solid var(--border-color);
  }
  
  .main-content {
    height: 50vh;
  }
}

/* 사이드바 접기/펼치기 */
.sidebar-toggle {
  position: absolute;
  top: 50%;
  width: 20px;
  height: 50px;
  background-color: #fff;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  border-radius: 0 4px 4px 0;
}

.left-toggle {
  right: -20px;
  border-left: none;
}

.right-toggle {
  left: -20px;
  border-right: none;
}

.sidebar-collapsed {
  width: 0;
  overflow: hidden;
  border: none;
}

/* 접힌 사이드바의 토글 버튼 */
.sidebar-collapsed .sidebar-toggle {
  right: -20px;
} `, "",{"version":3,"sources":["webpack://./src/styles/components/layout.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF,eAAe;AACf;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,2CAA2C;EAC3C,gBAAgB;EAChB,yCAAyC;EACzC,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;EAC3B,0CAA0C;EAC1C,gBAAgB;EAChB,yCAAyC;EACzC,2BAA2B;AAC7B;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA,aAAa;AACb;EACE;IACE,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;EACnB;;EAEA;;IAEE,WAAW;IACX,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,4CAA4C;EAC9C;;EAEA;IACE,yCAAyC;EAC3C;;EAEA;IACE,YAAY;EACd;AACF;;AAEA,gBAAgB;AAChB;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,qCAAqC;EACrC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,QAAQ;EACR,gBAAgB;EAChB,YAAY;AACd;;AAEA,mBAAmB;AACnB;EACE,YAAY;AACd","sourcesContent":["/**\n * 레이아웃 스타일\n */\n\n/* 기본 레이아웃 구조 */\n.main-layout {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.left-sidebar {\n  width: var(--sidebar-width);\n  border-right: 1px solid var(--border-color);\n  overflow-y: auto;\n  background-color: var(--background-light);\n  transition: width 0.3s ease;\n}\n\n.right-sidebar {\n  width: var(--sidebar-width);\n  border-left: 1px solid var(--border-color);\n  overflow-y: auto;\n  background-color: var(--background-light);\n  transition: width 0.3s ease;\n}\n\n.main-content {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  background-color: #fff;\n}\n\n/* 반응형 레이아웃 */\n@media (max-width: 992px) {\n  .main-layout {\n    flex-direction: column;\n    height: auto;\n    min-height: 100vh;\n  }\n  \n  .left-sidebar,\n  .right-sidebar {\n    width: 100%;\n    max-height: 50vh;\n    border-right: none;\n    border-left: none;\n  }\n  \n  .left-sidebar {\n    border-bottom: 1px solid var(--border-color);\n  }\n  \n  .right-sidebar {\n    border-top: 1px solid var(--border-color);\n  }\n  \n  .main-content {\n    height: 50vh;\n  }\n}\n\n/* 사이드바 접기/펼치기 */\n.sidebar-toggle {\n  position: absolute;\n  top: 50%;\n  width: 20px;\n  height: 50px;\n  background-color: #fff;\n  border: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 100;\n  border-radius: 0 4px 4px 0;\n}\n\n.left-toggle {\n  right: -20px;\n  border-left: none;\n}\n\n.right-toggle {\n  left: -20px;\n  border-right: none;\n}\n\n.sidebar-collapsed {\n  width: 0;\n  overflow: hidden;\n  border: none;\n}\n\n/* 접힌 사이드바의 토글 버튼 */\n.sidebar-collapsed .sidebar-toggle {\n  right: -20px;\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/map.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/components/map.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * 맵 컴포넌트 스타일
 */

.map-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.map-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-bottom: 1px solid var(--border-color);
}

.map-title-area {
  display: flex;
  align-items: center;
}

.map-header h4 {
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

.map-controls {
  display: flex;
  gap: 5px;
}

.map-provider-selector {
  margin-left: 15px;
  position: relative;
}

.map-provider-selector .current-provider {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  color: #333;
  transition: background-color 0.2s;
}

.map-provider-selector .current-provider:hover {
  background-color: #e5e5e5;
}

.map-provider-selector .current-provider i {
  font-size: 0.7rem;
}

.map-provider-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  margin-top: 5px;
  max-width: 250px;
  display: none;
}

.map-provider-dropdown.show {
  display: block;
}

.map-provider-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.map-provider-item {
  padding: 8px 12px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s;
}

.map-provider-item:last-child {
  border-bottom: none;
}

.map-provider-item:hover {
  background-color: #f5f5f5;
}

.map-provider-item.active {
  background-color: #e6f7ff;
  font-weight: 500;
}

.map-provider-item .provider-name {
  font-weight: 500;
  display: block;
  font-size: 0.8rem;
}

.map-provider-item .provider-description {
  font-size: 0.75rem;
  color: #666;
  margin-top: 3px;
}

.map-view {
  flex: 1;
  position: relative;
  background-color: #f5f5f5;
  overflow: hidden;
}

.map-view-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/* 맵 플레이스홀더 (맵 라이브러리 로드 전) */
.map-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f5f5f5;
  z-index: 1;
}

.placeholder-content {
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 0.85rem;
}

.placeholder-content.error {
  border-left: 4px solid #dc3545;
}

.placeholder-content.error i {
  color: #dc3545;
  margin-right: 5px;
}

.pnu-sample {
  text-align: left;
  margin-top: 15px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: 0.8rem;
}

.pnu-sample ul {
  margin: 5px 0 0 0;
  padding-left: 20px;
}

.pnu-sample li {
  font-family: monospace;
  margin-bottom: 3px;
}

/* 로딩 스피너 */
.loading-spinner {
  width: 40px;
  height: 40px;
  margin: 15px auto;
  border-radius: 50%;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Leaflet 지도 커스텀 스타일 */
.leaflet-container {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}

/* OpenLayers 지도 커스텀 스타일 */
.ol-control {
  background-color: transparent;
  padding: 0;
}

.ol-popup {
  position: absolute;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  bottom: 12px;
  left: -50px;
  min-width: 220px;
}

.ol-popup:after, .ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.ol-popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}

.ol-popup:before {
  border-top-color: #ccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}

/* PNU 팝업 스타일 */
.pnu-popup {
  min-width: 200px;
  max-width: 300px;
  padding: 5px;
}

.pnu-popup h4 {
  margin-top: 0;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 0.9rem;
}

.pnu-popup p {
  margin: 5px 0;
  font-size: 0.8rem;
}

/* MapContainer.js에서 이동된 스타일 */
.map-header-left h4 {
  margin: 0;
  font-size: 0.9rem;
}

.map-header-right {
  display: flex;
  align-items: center;
  gap: 8px; /* 컨트롤 간의 간격 */
}

/* 프로바이더 선택기 스타일 */
.map-provider-selector {
  position: relative;
  display: inline-block;
}

#currentProvider {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  min-width: 85px;
  white-space: nowrap;
  height: 31px;
}

.provider-name {
  margin-right: 5px;
  white-space: nowrap;
}

.map-provider-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1000;
  margin-top: 5px;
  min-width: max-content;
  width: auto;
  padding: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  overflow: hidden;
}

.map-provider-dropdown.show {
  display: block;
}

.map-provider-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.map-provider-item {
  padding: 8px 12px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  white-space: nowrap;
  font-size: 0.75rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s;
  font-family: inherit;
}

.provider-description {
  display: none; /* 설명 텍스트 숨김 */
}

.map-provider-item:hover {
  background-color: #f0f0f0;
}

.map-provider-item.active {
  background-color: #e6e6e6;
  font-weight: bold;
}

/* 지도 스타일 컨트롤 플레이스홀더 스타일 */
.map-style-control-placeholder {
  display: inline-block;
}

.map-style-control-placeholder button.btn {
  height: 31px;
} `, "",{"version":3,"sources":["webpack://./src/styles/components/map.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;EACX,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EACR,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,wCAAwC;EACxC,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,gCAAgC;EAChC,iCAAiC;AACnC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA,4BAA4B;AAC5B;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,6BAA6B;EAC7B,kCAAkC;AACpC;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC;;AAEA,uBAAuB;AACvB;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;AAC3B;;AAEA,0BAA0B;AAC1B;EACE,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,qCAAqC;EACrC,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,yBAAyB;EACzB,YAAY;EACZ,SAAS;EACT,QAAQ;EACR,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,UAAU;EACV,kBAAkB;AACpB;;AAEA,eAAe;AACf;EACE,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA,8BAA8B;AAC9B;EACE,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ,EAAE,cAAc;AAC1B;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,UAAU;EACV,uBAAuB;EACvB,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,gCAAgC;EAChC,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,qBAAqB;EACrB,iCAAiC;EACjC,oBAAoB;AACtB;;AAEA;EACE,aAAa,EAAE,cAAc;AAC/B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA,0BAA0B;AAC1B;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd","sourcesContent":["/**\n * 맵 컴포넌트 스타일\n */\n\n.map-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.map-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  background-color: #f9f9f9;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.map-title-area {\n  display: flex;\n  align-items: center;\n}\n\n.map-header h4 {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n\n.map-controls {\n  display: flex;\n  gap: 5px;\n}\n\n.map-provider-selector {\n  margin-left: 15px;\n  position: relative;\n}\n\n.map-provider-selector .current-provider {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  cursor: pointer;\n  padding: 3px 8px;\n  border-radius: 4px;\n  font-size: 0.8rem;\n  background-color: #f0f0f0;\n  border: 1px solid #ddd;\n  color: #333;\n  transition: background-color 0.2s;\n}\n\n.map-provider-selector .current-provider:hover {\n  background-color: #e5e5e5;\n}\n\n.map-provider-selector .current-provider i {\n  font-size: 0.7rem;\n}\n\n.map-provider-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  border: 1px solid #ddd;\n  margin-top: 5px;\n  max-width: 250px;\n  display: none;\n}\n\n.map-provider-dropdown.show {\n  display: block;\n}\n\n.map-provider-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.map-provider-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  border-bottom: 1px solid #f0f0f0;\n  transition: background-color 0.2s;\n}\n\n.map-provider-item:last-child {\n  border-bottom: none;\n}\n\n.map-provider-item:hover {\n  background-color: #f5f5f5;\n}\n\n.map-provider-item.active {\n  background-color: #e6f7ff;\n  font-weight: 500;\n}\n\n.map-provider-item .provider-name {\n  font-weight: 500;\n  display: block;\n  font-size: 0.8rem;\n}\n\n.map-provider-item .provider-description {\n  font-size: 0.75rem;\n  color: #666;\n  margin-top: 3px;\n}\n\n.map-view {\n  flex: 1;\n  position: relative;\n  background-color: #f5f5f5;\n  overflow: hidden;\n}\n\n.map-view-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n\n/* 맵 플레이스홀더 (맵 라이브러리 로드 전) */\n.map-placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background-color: #f5f5f5;\n  z-index: 1;\n}\n\n.placeholder-content {\n  max-width: 400px;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  font-size: 0.85rem;\n}\n\n.placeholder-content.error {\n  border-left: 4px solid #dc3545;\n}\n\n.placeholder-content.error i {\n  color: #dc3545;\n  margin-right: 5px;\n}\n\n.pnu-sample {\n  text-align: left;\n  margin-top: 15px;\n  padding: 10px;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  background-color: #f9f9f9;\n  font-size: 0.8rem;\n}\n\n.pnu-sample ul {\n  margin: 5px 0 0 0;\n  padding-left: 20px;\n}\n\n.pnu-sample li {\n  font-family: monospace;\n  margin-bottom: 3px;\n}\n\n/* 로딩 스피너 */\n.loading-spinner {\n  width: 40px;\n  height: 40px;\n  margin: 15px auto;\n  border-radius: 50%;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n/* Leaflet 지도 커스텀 스타일 */\n.leaflet-container {\n  height: 100%;\n  width: 100%;\n  background-color: #f5f5f5;\n}\n\n/* OpenLayers 지도 커스텀 스타일 */\n.ol-control {\n  background-color: transparent;\n  padding: 0;\n}\n\n.ol-popup {\n  position: absolute;\n  background-color: white;\n  box-shadow: 0 1px 4px rgba(0,0,0,0.2);\n  padding: 15px;\n  border-radius: 10px;\n  border: 1px solid #ccc;\n  bottom: 12px;\n  left: -50px;\n  min-width: 220px;\n}\n\n.ol-popup:after, .ol-popup:before {\n  top: 100%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.ol-popup:after {\n  border-top-color: white;\n  border-width: 10px;\n  left: 48px;\n  margin-left: -10px;\n}\n\n.ol-popup:before {\n  border-top-color: #ccc;\n  border-width: 11px;\n  left: 48px;\n  margin-left: -11px;\n}\n\n/* PNU 팝업 스타일 */\n.pnu-popup {\n  min-width: 200px;\n  max-width: 300px;\n  padding: 5px;\n}\n\n.pnu-popup h4 {\n  margin-top: 0;\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 0.9rem;\n}\n\n.pnu-popup p {\n  margin: 5px 0;\n  font-size: 0.8rem;\n}\n\n/* MapContainer.js에서 이동된 스타일 */\n.map-header-left h4 {\n  margin: 0;\n  font-size: 0.9rem;\n}\n\n.map-header-right {\n  display: flex;\n  align-items: center;\n  gap: 8px; /* 컨트롤 간의 간격 */\n}\n\n/* 프로바이더 선택기 스타일 */\n.map-provider-selector {\n  position: relative;\n  display: inline-block;\n}\n\n#currentProvider {\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  min-width: 85px;\n  white-space: nowrap;\n  height: 31px;\n}\n\n.provider-name {\n  margin-right: 5px;\n  white-space: nowrap;\n}\n\n.map-provider-dropdown {\n  display: none;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  z-index: 1000;\n  margin-top: 5px;\n  min-width: max-content;\n  width: auto;\n  padding: 0;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow: 0 2px 6px rgba(0,0,0,0.3);\n  overflow: hidden;\n}\n\n.map-provider-dropdown.show {\n  display: block;\n}\n\n.map-provider-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.map-provider-item {\n  padding: 8px 12px;\n  cursor: pointer;\n  border-bottom: 1px solid #f0f0f0;\n  white-space: nowrap;\n  font-size: 0.75rem;\n  color: #333;\n  text-decoration: none;\n  transition: background-color 0.2s;\n  font-family: inherit;\n}\n\n.provider-description {\n  display: none; /* 설명 텍스트 숨김 */\n}\n\n.map-provider-item:hover {\n  background-color: #f0f0f0;\n}\n\n.map-provider-item.active {\n  background-color: #e6e6e6;\n  font-weight: bold;\n}\n\n/* 지도 스타일 컨트롤 플레이스홀더 스타일 */\n.map-style-control-placeholder {\n  display: inline-block;\n}\n\n.map-style-control-placeholder button.btn {\n  height: 31px;\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_layout_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/layout.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_filter_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/filter.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/filter.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_map_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/map.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/map.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_components_grid_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./components/grid.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/components/grid.css");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_layout_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_filter_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_map_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_components_grid_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * 메인 스타일시트
 */

:root {
  --sidebar-width: 300px;
  --header-height: 60px;
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --background-light: #f5f5f5;
  --text-color: #333;
  --border-color: #ddd;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  color: var(--text-color);
}

/* 메인 레이아웃 */
.main-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.left-sidebar {
  width: var(--sidebar-width);
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
  background-color: var(--background-light);
}

.right-sidebar {
  width: var(--sidebar-width);
  border-left: 1px solid var(--border-color);
  overflow-y: auto;
}

.main-content {
  flex: 1;
  overflow: hidden;
  position: relative;
  background-color: #fff;
}

/* 공통 컴포넌트 스타일 */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid var(--border-color);
  background-color: #f9f9f9;
}

.section-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
}

/* 버튼 및 폼 요소 */
.btn {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}

.btn-primary {
  color: #fff;
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-secondary {
  color: #fff;
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-primary {
  color: var(--primary-color);
  border-color: var(--primary-color);
  background-color: transparent;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: var(--primary-color);
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
  background-color: transparent;
}

.btn-outline-danger {
  color: #dc3545;
  border-color: #dc3545;
  background-color: transparent;
}

.btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* 유틸리티 클래스 */
.mb-3 {
  margin-bottom: 1rem !important;
}

.px-3 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.text-muted {
  color: #6c757d !important;
}

.border {
  border: 1px solid var(--border-color) !important;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
  padding-left: 15px;
}

/* 테이블 스타일 */
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: var(--text-color);
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid var(--border-color);
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid var(--border-color);
  background-color: #f5f5f5;
}

.table tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.03);
} `, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;;EAEE;;AAOF;EACE,sBAAsB;EACtB,qBAAqB;EACrB,wBAAwB;EACxB,0BAA0B;EAC1B,2BAA2B;EAC3B,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,uCAAuC;EACvC,wBAAwB;AAC1B;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,2CAA2C;EAC3C,gBAAgB;EAChB,yCAAyC;AAC3C;;AAEA;EACE,2BAA2B;EAC3B,0CAA0C;EAC1C,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,cAAc;AACd;EACE,qBAAqB;EACrB,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,6BAA6B;EAC7B,sBAAsB;EACtB,uGAAuG;AACzG;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,sCAAsC;EACtC,kCAAkC;AACpC;;AAEA;EACE,WAAW;EACX,wCAAwC;EACxC,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,kCAAkC;EAClC,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,sCAAsC;AACxC;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;EACd,sBAAsB;EACtB,yBAAyB;EACzB,sBAAsB;EACtB,wEAAwE;AAC1E;;AAEA,aAAa;AACb;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;EAC9B,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gDAAgD;AAClD;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA,YAAY;AACZ;EACE,WAAW;EACX,mBAAmB;EACnB,wBAAwB;EACxB,yBAAyB;AAC3B;;AAEA;;EAEE,gBAAgB;EAChB,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE,sBAAsB;EACtB,4CAA4C;EAC5C,yBAAyB;AAC3B;;AAEA;EACE,qCAAqC;AACvC","sourcesContent":["/**\n * 메인 스타일시트\n */\n\n@import './components/layout.css';\n@import './components/filter.css';\n@import './components/map.css';\n@import './components/grid.css';\n\n:root {\n  --sidebar-width: 300px;\n  --header-height: 60px;\n  --primary-color: #3498db;\n  --secondary-color: #2ecc71;\n  --background-light: #f5f5f5;\n  --text-color: #333;\n  --border-color: #ddd;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Noto Sans KR', sans-serif;\n  color: var(--text-color);\n}\n\n/* 메인 레이아웃 */\n.main-layout {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.left-sidebar {\n  width: var(--sidebar-width);\n  border-right: 1px solid var(--border-color);\n  overflow-y: auto;\n  background-color: var(--background-light);\n}\n\n.right-sidebar {\n  width: var(--sidebar-width);\n  border-left: 1px solid var(--border-color);\n  overflow-y: auto;\n}\n\n.main-content {\n  flex: 1;\n  overflow: hidden;\n  position: relative;\n  background-color: #fff;\n}\n\n/* 공통 컴포넌트 스타일 */\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n  border-bottom: 1px solid var(--border-color);\n  background-color: #f9f9f9;\n}\n\n.section-title {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 500;\n}\n\n/* 버튼 및 폼 요소 */\n.btn {\n  display: inline-block;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.9rem;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n}\n\n.btn-sm {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n\n.btn-secondary {\n  color: #fff;\n  background-color: var(--secondary-color);\n  border-color: var(--secondary-color);\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745;\n}\n\n.btn-outline-primary {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n  background-color: transparent;\n}\n\n.btn-outline-primary:hover {\n  color: #fff;\n  background-color: var(--primary-color);\n}\n\n.btn-outline-secondary {\n  color: #6c757d;\n  border-color: #6c757d;\n  background-color: transparent;\n}\n\n.btn-outline-danger {\n  color: #dc3545;\n  border-color: #dc3545;\n  background-color: transparent;\n}\n\n.btn:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n/* 유틸리티 클래스 */\n.mb-3 {\n  margin-bottom: 1rem !important;\n}\n\n.px-3 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n\n.text-muted {\n  color: #6c757d !important;\n}\n\n.border {\n  border: 1px solid var(--border-color) !important;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n.col-md-6 {\n  flex: 0 0 50%;\n  max-width: 50%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n/* 테이블 스타일 */\n.table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: var(--text-color);\n  border-collapse: collapse;\n}\n\n.table th,\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid var(--border-color);\n}\n\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid var(--border-color);\n  background-color: #f5f5f5;\n}\n\n.table tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.03);\n} "],"sourceRoot":""}]);
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

/***/ "./src/components/filter/FilterCore.js":
/*!*********************************************!*\
  !*** ./src/components/filter/FilterCore.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterCore)
/* harmony export */ });
/* harmony import */ var _services_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.js */ "./src/services/api.js");
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/eventBus.js */ "./src/utils/eventBus.js");
/* harmony import */ var _utils_filterRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/filterRenderer.js */ "./src/components/filter/utils/filterRenderer.js");
/* harmony import */ var _types_NumericFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/NumericFilter.js */ "./src/components/filter/types/NumericFilter.js");
/* harmony import */ var _types_TextFilter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/TextFilter.js */ "./src/components/filter/types/TextFilter.js");
/* harmony import */ var _types_DateFilter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/DateFilter.js */ "./src/components/filter/types/DateFilter.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 필터 컴포넌트 코어 클래스
 * 각 필터 UI를 관리합니다.
 */







var FilterCore = /*#__PURE__*/function () {
  /**
   * 필터 컴포넌트 생성
   * @param {number} id 필터 ID
   * @param {Object} filter 필터 객체
   * @param {HTMLElement} container 필터를 추가할 컨테이너
   * @param {Function} onFilterApplied 필터 적용 시 호출될 콜백
   * @param {Function} onFilterRemoved 필터 제거 시 호출될 콜백
   * @param {boolean} isInitiallyCollapsed 필터가 초기에 접힌 상태인지 여부
   */
  function FilterCore(id, filter, container, onFilterApplied, onFilterRemoved) {
    var isInitiallyCollapsed = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    _classCallCheck(this, FilterCore);
    this.id = id;
    this.filter = filter;
    this.container = container;
    this.onFilterApplied = onFilterApplied;
    this.onFilterRemoved = onFilterRemoved;
    this.isCollapsed = isInitiallyCollapsed;
    this.createFilterElement();
    if (this.isCollapsed) {
      this.filterBody.style.display = 'none';
    } else {
      this.element.classList.add('expanded');
    }
  }

  /**
   * 필터 요소 생성
   */
  return _createClass(FilterCore, [{
    key: "createFilterElement",
    value: function createFilterElement() {
      // HTML 생성
      var filterHtml = (0,_utils_filterRenderer_js__WEBPACK_IMPORTED_MODULE_2__.createFilterHTML)(this.id);

      // DOM에 추가
      var filterDiv = document.createElement('div');
      filterDiv.innerHTML = filterHtml;
      var filterElement = filterDiv.firstElementChild;
      this.container.appendChild(filterElement);

      // 요소 참조 저장
      this.element = filterElement;
      this.nameElement = filterElement.querySelector('.filter-name');
      this.typeElement = filterElement.querySelector('.filter-type');
      this.filterTitleElement = filterElement.querySelector('.filter-title');
      this.filterBody = filterElement.querySelector('.filter-body');
      this.tableSelect = filterElement.querySelector('.tableSelect');
      this.columnSelect = filterElement.querySelector('.columnSelect');
      this.numericOptions = filterElement.querySelector('.numeric-options');
      this.textOptions = filterElement.querySelector('.text-options');
      this.dateOptions = filterElement.querySelector('.date-options');

      // 모든 필터 옵션 초기에 숨기기
      this.hideFilterOptions();

      // 이벤트 리스너 추가
      this.bindEvents();

      // 테이블 목록 로드
      this.populateTableOptions();
    }

    /**
     * 이벤트 리스너 바인딩
     */
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;
      // 테이블 선택 이벤트
      this.tableSelect.addEventListener('change', function () {
        return _this.onTableSelect();
      });

      // 컬럼 선택 이벤트
      this.columnSelect.addEventListener('change', function () {
        return _this.onColumnSelect();
      });

      // 필터 제목 클릭 이벤트 (접기/펼치기)
      this.filterTitleElement.addEventListener('click', function () {
        return _this.toggleCollapse();
      });

      // 필터 적용 버튼 클릭
      this.element.querySelector('.apply-filter-btn').addEventListener('click', function () {
        return _this.applyFilter();
      });

      // 필터 제거 버튼 클릭
      this.element.querySelector('.remove-filter-btn').addEventListener('click', function () {
        return _this.removeFilter();
      });
    }

    /**
     * 테이블 옵션 채우기
     */
  }, {
    key: "populateTableOptions",
    value: function populateTableOptions() {
      if (!window.filterManager) {
        console.error('filterManager가 정의되지 않았습니다.');
        return;
      }
      var tables = window.filterManager.getAllTables();
      (0,_utils_filterRenderer_js__WEBPACK_IMPORTED_MODULE_2__.populateTableSelect)(tables, this.tableSelect);
    }

    /**
     * 테이블 선택 시 이벤트 핸들러
     */
  }, {
    key: "onTableSelect",
    value: function onTableSelect() {
      var tableName = this.tableSelect.value;
      this.filter.tableName = tableName;
      if (!tableName) {
        this.hideFilterOptions();
        this.updateFilterTitle();
        return;
      }

      // 컬럼 목록 로드
      var tableData = window.filterManager.getTableColumns(tableName);
      (0,_utils_filterRenderer_js__WEBPACK_IMPORTED_MODULE_2__.populateColumnSelect)(tableData, this.columnSelect);

      // 필터 제목 업데이트
      this.updateFilterTitle();
    }

    /**
     * 컬럼 선택 시 이벤트 핸들러
     */
  }, {
    key: "onColumnSelect",
    value: (function () {
      var _onColumnSelect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var columnName, selectedOption, columnInfo;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              columnName = this.columnSelect.value;
              this.filter.columnName = columnName;
              if (!(!this.filter.tableName || !columnName)) {
                _context.next = 6;
                break;
              }
              this.hideFilterOptions();
              this.updateFilterTitle();
              return _context.abrupt("return");
            case 6:
              // 선택된 옵션 요소
              selectedOption = this.columnSelect.options[this.columnSelect.selectedIndex]; // 컬럼 타입 (numeric, text 또는 date)
              this.filter.columnType = selectedOption.dataset.type;

              // 필터링 옵션 숨기기
              this.hideFilterOptions();
              _context.prev = 9;
              if (!(this.filter.columnType === 'numeric')) {
                _context.next = 17;
                break;
              }
              // 숫자형 컬럼인 경우
              columnInfo = window.filterManager.getColumnInfo(this.filter.tableName, this.filter.columnName, 'numeric');
              if (!columnInfo) {
                _context.next = 15;
                break;
              }
              _context.next = 15;
              return (0,_types_NumericFilter_js__WEBPACK_IMPORTED_MODULE_3__.setupNumericFilter)(this.filter, this.element, columnInfo);
            case 15:
              _context.next = 25;
              break;
            case 17:
              if (!(this.filter.columnType === 'text')) {
                _context.next = 22;
                break;
              }
              _context.next = 20;
              return (0,_types_TextFilter_js__WEBPACK_IMPORTED_MODULE_4__.setupTextFilter)(this.filter, this.element);
            case 20:
              _context.next = 25;
              break;
            case 22:
              if (!(this.filter.columnType === 'date')) {
                _context.next = 25;
                break;
              }
              _context.next = 25;
              return (0,_types_DateFilter_js__WEBPACK_IMPORTED_MODULE_5__.setupDateFilter)(this.filter, this.element);
            case 25:
              // 필터 제목 업데이트
              this.updateFilterTitle();
              _context.next = 31;
              break;
            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](9);
              console.error('컬럼 세부정보 로드 오류:', _context.t0);
            case 31:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[9, 28]]);
      }));
      function onColumnSelect() {
        return _onColumnSelect.apply(this, arguments);
      }
      return onColumnSelect;
    }()
    /**
     * 모든 필터링 옵션 숨기기
     */
    )
  }, {
    key: "hideFilterOptions",
    value: function hideFilterOptions() {
      this.numericOptions.classList.remove('active');
      this.textOptions.classList.remove('active');
      this.dateOptions.classList.remove('active');
    }

    /**
     * 필터 제목 업데이트
     */
  }, {
    key: "updateFilterTitle",
    value: function updateFilterTitle() {
      (0,_utils_filterRenderer_js__WEBPACK_IMPORTED_MODULE_2__.updateFilterTitle)(this.filter, this.nameElement, this.typeElement);
    }

    /**
     * 필터 접기/펼치기 토글
     */
  }, {
    key: "toggleCollapse",
    value: function toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
      this.filterBody.style.display = this.isCollapsed ? 'none' : '';
      this.element.classList.toggle('expanded', !this.isCollapsed);
    }

    /**
     * 필터 접기
     */
  }, {
    key: "collapse",
    value: function collapse() {
      if (!this.isCollapsed) {
        this.toggleCollapse();
      }
    }

    /**
     * 필터 펼치기
     */
  }, {
    key: "expand",
    value: function expand() {
      if (this.isCollapsed) {
        this.toggleCollapse();
      }
    }

    /**
     * 필터 적용
     */
  }, {
    key: "applyFilter",
    value: (function () {
      var _applyFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!this.filter.tableName || !this.filter.columnName)) {
                _context2.next = 3;
                break;
              }
              alert('테이블과 컬럼을 선택하세요.');
              return _context2.abrupt("return");
            case 3:
              _context2.prev = 3;
              if (!(this.filter.columnType === 'numeric')) {
                _context2.next = 10;
                break;
              }
              _context2.next = 7;
              return (0,_types_NumericFilter_js__WEBPACK_IMPORTED_MODULE_3__.applyNumericFilter)(this.filter, this.element);
            case 7:
              result = _context2.sent;
              _context2.next = 20;
              break;
            case 10:
              if (!(this.filter.columnType === 'text')) {
                _context2.next = 16;
                break;
              }
              _context2.next = 13;
              return (0,_types_TextFilter_js__WEBPACK_IMPORTED_MODULE_4__.applyTextFilter)(this.filter, this.element);
            case 13:
              result = _context2.sent;
              _context2.next = 20;
              break;
            case 16:
              if (!(this.filter.columnType === 'date')) {
                _context2.next = 20;
                break;
              }
              _context2.next = 19;
              return (0,_types_DateFilter_js__WEBPACK_IMPORTED_MODULE_5__.applyDateFilter)(this.filter, this.element);
            case 19:
              result = _context2.sent;
            case 20:
              if (result) {
                this.filter.result = result;

                // 필터 상태 UI 업데이트
                this.typeElement.textContent = "".concat(result.pnu_count, "\uAC1C");
                this.typeElement.classList.remove('bg-secondary', 'bg-primary', 'bg-success', 'bg-info');
                this.typeElement.classList.add('bg-success');

                // 필터 적용 이벤트 발행
                _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('filterApplied', {
                  filterId: this.id,
                  filter: this.filter
                });

                // 콜백 호출
                if (this.onFilterApplied) {
                  this.onFilterApplied(this.filter);
                }
              }
              _context2.next = 27;
              break;
            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2["catch"](3);
              console.error('필터 적용 오류:', _context2.t0);
              alert(_context2.t0.message || '필터를 적용하는 데 실패했습니다.');
            case 27:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 23]]);
      }));
      function applyFilter() {
        return _applyFilter.apply(this, arguments);
      }
      return applyFilter;
    }()
    /**
     * 필터 제거
     */
    )
  }, {
    key: "removeFilter",
    value: function removeFilter() {
      // DOM에서 제거
      this.element.remove();

      // 필터 매니저에서 제거
      window.filterManager.removeFilter(this.id);

      // 필터 제거 이벤트 발행
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('filterRemoved', {
        filterId: this.id
      });

      // 콜백 호출
      if (this.onFilterRemoved) {
        this.onFilterRemoved(this.id);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/components/filter/FilterList.js":
/*!*********************************************!*\
  !*** ./src/components/filter/FilterList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterList)
/* harmony export */ });
/* harmony import */ var _FilterCore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterCore.js */ "./src/components/filter/FilterCore.js");
/* harmony import */ var _utils_filterManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/filterManager.js */ "./src/utils/filterManager.js");
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/eventBus.js */ "./src/utils/eventBus.js");
/* harmony import */ var _core_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/config.js */ "./src/core/config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 필터 목록 컴포넌트
 * 왼쪽 사이드바에 표시될 필터 목록을 관리합니다.
 */





var FilterList = /*#__PURE__*/function () {
  /**
   * 필터 목록 컴포넌트 생성
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   */
  function FilterList(container) {
    _classCallCheck(this, FilterList);
    this.container = container;
    this.filterManager = new _utils_filterManager_js__WEBPACK_IMPORTED_MODULE_1__.FilterManager();
    window.filterManager = this.filterManager; // 전역 객체로 등록 (기존 코드 호환성)
    this.activeFilters = new Map(); // 활성 필터 인스턴스 저장

    this.init();
  }

  /**
   * 컴포넌트 초기화
   */
  return _createClass(FilterList, [{
    key: "init",
    value: (function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log('필터 목록 컴포넌트 초기화 시작');
              this.renderControls();
              _context.next = 4;
              return this.filterManager.loadAllTablesData();
            case 4:
              this.addNewFilter();
              this.bindEvents();
              console.log('필터 목록 컴포넌트 초기화 완료');
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
    /**
     * 컨트롤 UI 렌더링
     */
    )
  }, {
    key: "renderControls",
    value: function renderControls() {
      this.container.innerHTML = "\n      <div class=\"filter-sidebar\">\n        <div class=\"filter-header\">\n          <h4>\uD544\uD130</h4>\n          <div class=\"filter-controls\">\n            <button class=\"btn btn-sm btn-outline-secondary add-filter-btn\" title=\"\uD544\uD130 \uCD94\uAC00\">\n              <i class=\"fas fa-plus\"></i>\n            </button>\n            <button class=\"btn btn-sm btn-outline-secondary\" id=\"applyAllFiltersBtn\" title=\"\uBAA8\uB4E0 \uD544\uD130 \uC801\uC6A9\">\n              <i class=\"fas fa-sync-alt\"></i>\n            </button>\n          </div>\n        </div>\n        <div id=\"filtersContainer\" class=\"filters-container\"></div>\n        <div id=\"filterResultsPreview\" class=\"filter-results-preview\"></div>\n      </div>\n    ";
      this.filtersContainer = document.getElementById('filtersContainer');
      this.resultsPreview = document.getElementById('filterResultsPreview');
    }

    /**
     * 이벤트 리스너 바인딩
     */
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;
      document.querySelector('.add-filter-btn').addEventListener('click', function () {
        _this.addNewFilter();
      });
      document.getElementById('applyAllFiltersBtn').addEventListener('click', function () {
        _this.applyAllFilters();
      });

      // 필터 적용 이벤트 구독
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('filterApplied', function (data) {
        console.log('필터 적용됨:', data);
      });

      // 필터 제거 이벤트 구독
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('filterRemoved', function (data) {
        console.log('필터 제거됨:', data);
      });
    }

    /**
     * 새 필터 추가
     */
  }, {
    key: "addNewFilter",
    value: function addNewFilter() {
      var _this2 = this;
      var filter = this.filterManager.createFilter();

      // 새 필터 추가 전, 기존 활성 필터들을 모두 접음
      this.activeFilters.forEach(function (f) {
        return f.collapse();
      });
      var newFilterInstance = new _FilterCore_js__WEBPACK_IMPORTED_MODULE_0__["default"](filter.id, filter, this.filtersContainer, function (appliedFilter) {
        return _this2.onFilterApplied(appliedFilter);
      }, function (removedId) {
        return _this2.onFilterRemoved(removedId);
      }, false // 새 필터는 펼쳐진 상태로 시작 (isInitiallyCollapsed = false)
      );
      this.activeFilters.set(filter.id, newFilterInstance);
    }

    /**
     * 모든 필터 적용
     */
  }, {
    key: "applyAllFilters",
    value: (function () {
      var _applyAllFilters = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var activeFilters, filterResults, intersection;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              activeFilters = this.filterManager.getActiveFilters();
              if (!(activeFilters.length === 0)) {
                _context2.next = 4;
                break;
              }
              alert('적용할 필터가 없습니다.');
              return _context2.abrupt("return");
            case 4:
              filterResults = activeFilters.map(function (filter) {
                return filter.result;
              });
              intersection = this.filterManager.calculateFilterIntersection(filterResults); // 결과 미리보기 표시
              this.renderFilterResults(intersection);

              // 이벤트 발행 - 맵과 그리드가 이 이벤트를 구독
              _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__["default"].publish('pnuFiltered', intersection);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function applyAllFilters() {
        return _applyAllFilters.apply(this, arguments);
      }
      return applyAllFilters;
    }()
    /**
     * 필터링 결과 렌더링
     * @param {Object} intersection 교집합 결과
     */
    )
  }, {
    key: "renderFilterResults",
    value: function renderFilterResults(intersection) {
      // 간단한 결과 요약 표시
      this.resultsPreview.innerHTML = "\n      <div class=\"results-summary\">\n        <h5>\uD544\uD130\uB9C1 \uACB0\uACFC</h5>\n        <p>\uCC3E\uC740 PNU: <strong>".concat(intersection.count, "</strong>\uAC1C</p>\n      </div>\n    ");

      // 결과가 있는 경우에만 미리보기 표시
      if (intersection.count > 0) {
        var maxPreview = Math.min(intersection.pnuList.length, 5);
        var previewHtml = '<div class="pnu-preview"><strong>샘플:</strong> ';
        for (var i = 0; i < maxPreview; i++) {
          previewHtml += "<span class=\"pnu-item\">".concat(intersection.pnuList[i], "</span>");
          if (i < maxPreview - 1) previewHtml += ', ';
        }
        previewHtml += '</div>';
        this.resultsPreview.innerHTML += previewHtml;
      }
    }

    /**
     * 필터 적용 콜백
     * @param {Object} filter 적용된 필터
     */
  }, {
    key: "onFilterApplied",
    value: function onFilterApplied(filter) {
      console.log("\uD544\uD130 ".concat(filter.id, " \uC801\uC6A9\uB428:"), filter);
    }

    /**
     * 필터 제거 콜백
     * @param {number} id 제거된 필터 ID
     */
  }, {
    key: "onFilterRemoved",
    value: function onFilterRemoved(id) {
      console.log("\uD544\uD130 ".concat(id, " \uC81C\uAC70\uB428"));
      this.activeFilters["delete"](id); // 활성 필터 맵에서 제거
    }
  }]);
}();


/***/ }),

/***/ "./src/components/filter/types/DateFilter.js":
/*!***************************************************!*\
  !*** ./src/components/filter/types/DateFilter.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyDateFilter: () => (/* binding */ applyDateFilter),
/* harmony export */   renderDateFilterHTML: () => (/* binding */ renderDateFilterHTML),
/* harmony export */   setupDateFilter: () => (/* binding */ setupDateFilter)
/* harmony export */ });
/* harmony import */ var _services_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.js */ "./src/services/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * 날짜형 필터 모듈
 * 날짜 범위 선택을 위한 기능 제공
 */



/**
 * 날짜형 필터 렌더링 HTML 생성
 * @param {number} filterId 필터 ID
 * @returns {string} 필터 HTML
 */
function renderDateFilterHTML(filterId) {
  return "\n    <div id=\"dateFilterOptions-".concat(filterId, "\" class=\"filter-options date-options\">\n      <div class=\"form-group\">\n        <label class=\"small fw-bold\">\uB0A0\uC9DC \uBC94\uC704</label>\n        <div id=\"dateInfoDisplay-").concat(filterId, "\" class=\"mb-2 small text-muted\"></div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <label for=\"startDate-").concat(filterId, "\" class=\"form-label small\">\uC2DC\uC791\uC77C</label>\n            <input type=\"date\" id=\"startDate-").concat(filterId, "\" class=\"form-control form-control-sm\" placeholder=\"\uC2DC\uC791\uC77C\">\n          </div>\n          <div class=\"col-md-6\">\n            <label for=\"endDate-").concat(filterId, "\" class=\"form-label small\">\uC885\uB8CC\uC77C</label>\n            <input type=\"date\" id=\"endDate-").concat(filterId, "\" class=\"form-control form-control-sm\" placeholder=\"\uC885\uB8CC\uC77C\">\n          </div>\n        </div>\n      </div>\n    </div>\n  ");
}

/**
 * 날짜형 컬럼 정보 로드
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 */
function setupDateFilter(_x, _x2) {
  return _setupDateFilter.apply(this, arguments);
}

/**
 * 날짜를 YYYY-MM-DD 형식으로 포맷팅합니다.
 * @param {string|Date} date 날짜 문자열 또는 Date 객체
 * @returns {string} 포맷팅된 날짜 문자열
 */
function _setupDateFilter() {
  _setupDateFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(filter, element) {
    var filterId, dateInfoDisplay, startDateInput, endDateInput, dateOptions, columnInfo, minDate, maxDate, formattedMinDate, formattedMaxDate;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          filterId = filter.id;
          dateInfoDisplay = element.querySelector("#dateInfoDisplay-".concat(filterId));
          startDateInput = element.querySelector("#startDate-".concat(filterId));
          endDateInput = element.querySelector("#endDate-".concat(filterId));
          dateOptions = element.querySelector('.date-options');
          if (dateInfoDisplay) dateInfoDisplay.textContent = '정보 로딩 중...';
          _context.prev = 7;
          _context.next = 10;
          return _services_api_js__WEBPACK_IMPORTED_MODULE_0__.loadDateColumnInfo(filter.tableName, filter.columnName);
        case 10:
          columnInfo = _context.sent;
          // 컬럼 정보 캐싱
          filter.columnInfo = columnInfo;
          if (columnInfo) {
            // 날짜 표시용 형식 변환
            minDate = formatDate(columnInfo.min_date);
            maxDate = formatDate(columnInfo.max_date); // 정보 표시
            if (dateInfoDisplay) {
              dateInfoDisplay.textContent = "\uAE30\uAC04: ".concat(minDate || 'N/A', " ~ ").concat(maxDate || 'N/A');
            }

            // 값 설정
            if (startDateInput && endDateInput) {
              if (columnInfo.min_date) {
                formattedMinDate = formatDateForInput(columnInfo.min_date);
                startDateInput.value = formattedMinDate;
                startDateInput.min = formattedMinDate;
                endDateInput.min = formattedMinDate;
              }
              if (columnInfo.max_date) {
                formattedMaxDate = formatDateForInput(columnInfo.max_date);
                endDateInput.value = formattedMaxDate;
                startDateInput.max = formattedMaxDate;
                endDateInput.max = formattedMaxDate;
              }
            }
          } else {
            if (dateInfoDisplay) dateInfoDisplay.textContent = '날짜 정보를 불러올 수 없습니다.';
          }

          // 옵션 표시
          if (dateOptions) dateOptions.classList.add('active');
          _context.next = 20;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](7);
          console.error('날짜형 컬럼 정보 로드 오류:', _context.t0);
          if (dateInfoDisplay) dateInfoDisplay.textContent = '오류 발생: 날짜 정보를 불러올 수 없습니다.';
        case 20:
          _context.next = 25;
          break;
        case 22:
          _context.prev = 22;
          _context.t1 = _context["catch"](0);
          console.error('날짜형 필터 설정 오류:', _context.t1);
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 22], [7, 16]]);
  }));
  return _setupDateFilter.apply(this, arguments);
}
function formatDate(date) {
  if (!date) return '';
  var dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) {
    return date; // 유효하지 않은 날짜는 원본 반환
  }
  var year = dateObj.getFullYear();
  var month = String(dateObj.getMonth() + 1).padStart(2, '0');
  var day = String(dateObj.getDate()).padStart(2, '0');
  return "".concat(year, "-").concat(month, "-").concat(day);
}

/**
 * 날짜를 input[type=date]에 사용할 수 있는 YYYY-MM-DD 형식으로 포맷팅합니다.
 * @param {string|Date} date 날짜 문자열 또는 Date 객체
 * @returns {string} 포맷팅된 날짜 문자열
 */
function formatDateForInput(date) {
  return formatDate(date);
}

/**
 * 날짜형 필터 적용
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 * @returns {Promise<Object>} API 응답 결과
 */
function applyDateFilter(_x3, _x4) {
  return _applyDateFilter.apply(this, arguments);
}
function _applyDateFilter() {
  _applyDateFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(filter, element) {
    var filterId, startDateInput, endDateInput, startDate, endDate;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          filterId = filter.id;
          startDateInput = element.querySelector("#startDate-".concat(filterId));
          endDateInput = element.querySelector("#endDate-".concat(filterId));
          if (!(!startDateInput || !endDateInput)) {
            _context2.next = 5;
            break;
          }
          throw new Error('날짜 입력 필드를 찾을 수 없습니다.');
        case 5:
          startDate = startDateInput.value;
          endDate = endDateInput.value;
          if (!(!startDate || !endDate)) {
            _context2.next = 9;
            break;
          }
          throw new Error('시작일과 종료일을 선택하세요.');
        case 9:
          if (!(new Date(startDate) > new Date(endDate))) {
            _context2.next = 11;
            break;
          }
          throw new Error('시작일은 종료일보다 이전 날짜여야 합니다.');
        case 11:
          // 필터 파라미터 저장
          filter.filterParams = {
            startDate: startDate,
            endDate: endDate
          };

          // API 호출
          _context2.next = 14;
          return _services_api_js__WEBPACK_IMPORTED_MODULE_0__.applyDateFilter(filter.tableName, filter.columnName, startDate, endDate);
        case 14:
          return _context2.abrupt("return", _context2.sent);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _applyDateFilter.apply(this, arguments);
}

/***/ }),

/***/ "./src/components/filter/types/NumericFilter.js":
/*!******************************************************!*\
  !*** ./src/components/filter/types/NumericFilter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyNumericFilter: () => (/* binding */ applyNumericFilter),
/* harmony export */   renderNumericFilterHTML: () => (/* binding */ renderNumericFilterHTML),
/* harmony export */   setupNumericFilter: () => (/* binding */ setupNumericFilter)
/* harmony export */ });
/* harmony import */ var _services_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.js */ "./src/services/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * 숫자형 필터 모듈
 * 값 범위 선택을 위한 슬라이더 및 숫자 입력 관련 기능 제공
 */



/**
 * 숫자형 필터 렌더링 HTML 생성
 * @param {number} filterId 필터 ID
 * @returns {string} 필터 HTML
 */
function renderNumericFilterHTML(filterId) {
  return "\n    <div id=\"numericFilterOptions-".concat(filterId, "\" class=\"filter-options numeric-options\">\n      <div class=\"form-group\">\n        <div class=\"d-flex justify-content-between align-items-center mb-2\">\n          <label class=\"small fw-bold\">\uAC12 \uBC94\uC704</label>\n          <span id=\"columnInfoDisplay-").concat(filterId, "\" class=\"small text-muted\"></span>\n        </div>\n        \n        <!-- \uBC94\uC704 \uC2AC\uB77C\uC774\uB354 -->\n        <div class=\"range-slider-container mb-3\">\n          <div class=\"position-relative\">\n            <div class=\"range-slider position-relative\" style=\"height: 20px;\">\n              <div class=\"slider-track\" style=\"position: absolute; top: 9px; height: 3px; width: 100%; background-color: #dee2e6;\"></div>\n              <div class=\"slider-selection\" style=\"position: absolute; top: 9px; height: 3px; background-color: #007bff; border-radius: 2px;\"></div>\n              <input type=\"range\" id=\"minValue-").concat(filterId, "\" class=\"form-range position-absolute\" style=\"pointer-events: none; z-index: 2; opacity: 0.8;\" min=\"\" max=\"\" step=\"any\">\n              <input type=\"range\" id=\"maxValue-").concat(filterId, "\" class=\"form-range position-absolute\" style=\"pointer-events: none; z-index: 2; opacity: 0.8;\" min=\"\" max=\"\" step=\"any\">\n              <div class=\"slider-touch-area\" style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;\"></div>\n            </div>\n          </div>\n          \n          <!-- \uAC12 \uD45C\uC2DC \uC601\uC5ED (\uC2AC\uB77C\uC774\uB354 \uC544\uB798) -->\n          <div class=\"d-flex justify-content-between mt-2\">\n            <input type=\"number\" id=\"minValueInput-").concat(filterId, "\" class=\"form-control form-control-sm\" placeholder=\"\uCD5C\uC18C\uAC12\" style=\"max-width: 100px; text-align: center;\">\n            <input type=\"number\" id=\"maxValueInput-").concat(filterId, "\" class=\"form-control form-control-sm\" placeholder=\"\uCD5C\uB300\uAC12\" style=\"max-width: 100px; text-align: center;\">\n          </div>\n        </div>\n      </div>\n    </div>\n  ");
}

/**
 * 숫자형 컬럼 정보 로드 및 설정
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 * @param {Object} columnInfo 컬럼 정보
 */
function setupNumericFilter(filter, element, columnInfo) {
  try {
    var filterId = filter.id;

    // UI 요소 참조 가져오기
    var minValueInput = element.querySelector("#minValueInput-".concat(filterId));
    var maxValueInput = element.querySelector("#maxValueInput-".concat(filterId));
    var minValueSlider = element.querySelector("#minValue-".concat(filterId));
    var maxValueSlider = element.querySelector("#maxValue-".concat(filterId));
    var columnInfoDisplay = element.querySelector("#columnInfoDisplay-".concat(filterId));
    var sliderSelection = element.querySelector('.slider-selection');
    var sliderTouchArea = element.querySelector('.slider-touch-area');
    var numericOptions = element.querySelector('.numeric-options');
    if (!columnInfo) {
      if (columnInfoDisplay) columnInfoDisplay.textContent = '컬럼 정보를 불러올 수 없습니다.';
      return;
    }

    // UI 업데이트 (기본 정보 표시)
    if (columnInfoDisplay) {
      columnInfoDisplay.textContent = "\uD3C9\uADE0: ".concat(columnInfo.avg_value ? columnInfo.avg_value.toFixed(2) : 'N/A');
    }

    // 슬라이더 설정
    var minVal = columnInfo.min_value || 0;
    var maxVal = columnInfo.max_value || 100;

    // 값이 너무 크면 스케일 조정 (5자리 이내로 보이도록)
    var needsScaling = maxVal > 99999 || Math.abs(minVal) > 99999;
    var scaleLabel = '';
    var scaleFactor = 1;
    if (needsScaling) {
      if (maxVal >= 1000000000) {
        // 10억 이상
        scaleFactor = 1000000000;
        scaleLabel = '10억 단위';
        minVal = minVal / scaleFactor;
        maxVal = maxVal / scaleFactor;
      } else if (maxVal >= 1000000) {
        // 백만 이상
        scaleFactor = 1000000;
        scaleLabel = '백만 단위';
        minVal = minVal / scaleFactor;
        maxVal = maxVal / scaleFactor;
      } else if (maxVal >= 1000) {
        // 천 이상
        scaleFactor = 1000;
        scaleLabel = '천 단위';
        minVal = minVal / scaleFactor;
        maxVal = maxVal / scaleFactor;
      }

      // 스케일 정보 표시
      if (columnInfoDisplay && needsScaling) {
        columnInfoDisplay.textContent += " (".concat(scaleLabel, ")");
      }
    }
    var range = maxVal - minVal;

    // 최소값/최대값 슬라이더 설정
    if (minValueSlider && maxValueSlider) {
      minValueSlider.min = minVal;
      minValueSlider.max = maxVal;
      minValueSlider.value = minVal;
      minValueSlider.step = range / 100; // 100단계로 나누기

      maxValueSlider.min = minVal;
      maxValueSlider.max = maxVal;
      maxValueSlider.value = maxVal;
      maxValueSlider.step = range / 100; // 100단계로 나누기
    }

    // 입력 필드 초기값 설정
    if (minValueInput && maxValueInput) {
      minValueInput.value = minVal;
      maxValueInput.value = maxVal;
      minValueInput.min = minVal;
      minValueInput.max = maxVal;
      maxValueInput.min = minVal;
      maxValueInput.max = maxVal;
    }

    // 슬라이더 선택 영역 업데이트 함수
    var updateSliderSelection = function updateSliderSelection() {
      if (sliderSelection) {
        var minPercent = (minValueSlider.value - minVal) / range * 100;
        var maxPercent = (maxValueSlider.value - minVal) / range * 100;
        sliderSelection.style.left = "".concat(minPercent, "%");
        sliderSelection.style.width = "".concat(maxPercent - minPercent, "%");
      }
    };
    updateSliderSelection(); // 초기 업데이트

    // 슬라이더 컨트롤 개선을 위한 터치 영역 설정
    if (sliderTouchArea) {
      var currentlyDragging = null; // 'min' 또는 'max' 또는 null

      // 어떤 슬라이더를 활성화할지 결정하는 함수
      var determineSlider = function determineSlider(e) {
        var rect = sliderTouchArea.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var width = rect.width;
        var position = x / width;
        var minPos = (minValueSlider.value - minVal) / range;
        var maxPos = (maxValueSlider.value - minVal) / range;

        // 두 슬라이더 중 어디에 가까운지 계산
        var distToMin = Math.abs(position - minPos);
        var distToMax = Math.abs(position - maxPos);

        // 더 가까운 슬라이더 선택 (또는 이미 드래그 중인 경우 해당 슬라이더 계속 사용)
        return currentlyDragging || (distToMin <= distToMax ? 'min' : 'max');
      };

      // 슬라이더 위치 업데이트 함수
      var updateSlider = function updateSlider(e) {
        if (!currentlyDragging) return;
        var rect = sliderTouchArea.getBoundingClientRect();
        var x = Math.max(0, Math.min(rect.width, e.clientX - rect.left));
        var percentage = x / rect.width;

        // 값 계산
        var newValue = minVal + percentage * range;
        var roundedValue = Math.round(newValue * 100) / 100; // 소수점 둘째 자리까지

        if (currentlyDragging === 'min') {
          var maxValue = parseFloat(maxValueSlider.value);
          minValueSlider.value = Math.min(roundedValue, maxValue);
          if (minValueInput) minValueInput.value = minValueSlider.value;
        } else {
          var minValue = parseFloat(minValueSlider.value);
          maxValueSlider.value = Math.max(roundedValue, minValue);
          if (maxValueInput) maxValueInput.value = maxValueSlider.value;
        }
        updateSliderSelection();
      };

      // 터치 이벤트 설정
      sliderTouchArea.addEventListener('mousedown', function (e) {
        currentlyDragging = determineSlider(e);
        updateSlider(e);

        // 마우스 이동 및 업 이벤트
        var onMouseMove = function onMouseMove(moveEvent) {
          return updateSlider(moveEvent);
        };
        var _onMouseUp = function onMouseUp() {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', _onMouseUp);
          currentlyDragging = null;
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', _onMouseUp);
      });
    }

    // === 이벤트 리스너 추가 ===
    if (minValueSlider) {
      minValueSlider.addEventListener('input', function () {
        // 최소값이 최대값보다 커지지 않도록
        if (parseFloat(minValueSlider.value) > parseFloat(maxValueSlider.value)) {
          minValueSlider.value = maxValueSlider.value;
        }
        if (minValueInput) minValueInput.value = minValueSlider.value;
        updateSliderSelection();
      });
    }
    if (maxValueSlider) {
      maxValueSlider.addEventListener('input', function () {
        // 최대값이 최소값보다 작아지지 않도록
        if (parseFloat(maxValueSlider.value) < parseFloat(minValueSlider.value)) {
          maxValueSlider.value = minValueSlider.value;
        }
        if (maxValueInput) maxValueInput.value = maxValueSlider.value;
        updateSliderSelection();
      });
    }
    if (minValueInput) {
      minValueInput.addEventListener('change', function () {
        var val = parseFloat(minValueInput.value);

        // 범위 내로 제한
        if (val < minVal) val = minVal;
        if (val > maxVal) val = maxVal;

        // 최소값이 최대값보다 커지지 않도록
        if (val > parseFloat(maxValueInput.value)) {
          val = parseFloat(maxValueInput.value);
        }
        minValueInput.value = val;
        if (minValueSlider) minValueSlider.value = val;
        updateSliderSelection();
      });
    }
    if (maxValueInput) {
      maxValueInput.addEventListener('change', function () {
        var val = parseFloat(maxValueInput.value);

        // 범위 내로 제한
        if (val < minVal) val = minVal;
        if (val > maxVal) val = maxVal;

        // 최대값이 최소값보다 작아지지 않도록
        if (val < parseFloat(minValueInput.value)) {
          val = parseFloat(minValueInput.value);
        }
        maxValueInput.value = val;
        if (maxValueSlider) maxValueSlider.value = val;
        updateSliderSelection();
      });
    }

    // 옵션 표시
    if (numericOptions) numericOptions.classList.add('active');

    // 필터 객체에 스케일 정보 저장 (나중에 API 호출 시 사용)
    filter.numericScale = {
      factor: scaleFactor,
      needsScaling: needsScaling
    };
  } catch (error) {
    console.error('숫자형 필터 설정 오류:', error);
  }
}

/**
 * 숫자형 필터 적용
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 * @returns {Promise<Object>} API 응답 결과
 */
function applyNumericFilter(_x, _x2) {
  return _applyNumericFilter.apply(this, arguments);
}
function _applyNumericFilter() {
  _applyNumericFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(filter, element) {
    var filterId, minValueInput, maxValueInput, minValueSlider, maxValueSlider, minValue, maxValue, scaleInfo;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          filterId = filter.id; // 입력 필드에서 값 가져오기
          minValueInput = element.querySelector("#minValueInput-".concat(filterId));
          maxValueInput = element.querySelector("#maxValueInput-".concat(filterId));
          minValueSlider = element.querySelector("#minValue-".concat(filterId));
          maxValueSlider = element.querySelector("#maxValue-".concat(filterId));
          minValue = minValueInput ? minValueInput.value : minValueSlider ? minValueSlider.value : null;
          maxValue = maxValueInput ? maxValueInput.value : maxValueSlider ? maxValueSlider.value : null;
          if (!(!minValue || !maxValue)) {
            _context.next = 9;
            break;
          }
          throw new Error('최소값과 최대값을 입력하세요.');
        case 9:
          // 스케일링 된 값이라면 원래 값으로 복원
          scaleInfo = filter.numericScale || {
            factor: 1,
            needsScaling: false
          };
          if (scaleInfo.needsScaling) {
            minValue = parseFloat(minValue) * scaleInfo.factor;
            maxValue = parseFloat(maxValue) * scaleInfo.factor;
          }

          // 필터 파라미터 저장
          filter.filterParams = {
            minValue: Number(minValue),
            maxValue: Number(maxValue)
          };

          // API 호출
          _context.next = 14;
          return _services_api_js__WEBPACK_IMPORTED_MODULE_0__.applyNumericFilter(filter.tableName, filter.columnName, minValue, maxValue);
        case 14:
          return _context.abrupt("return", _context.sent);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _applyNumericFilter.apply(this, arguments);
}

/***/ }),

/***/ "./src/components/filter/types/TextFilter.js":
/*!***************************************************!*\
  !*** ./src/components/filter/types/TextFilter.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyTextFilter: () => (/* binding */ applyTextFilter),
/* harmony export */   renderTextFilterHTML: () => (/* binding */ renderTextFilterHTML),
/* harmony export */   setupTextFilter: () => (/* binding */ setupTextFilter)
/* harmony export */ });
/* harmony import */ var _services_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.js */ "./src/services/api.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * 텍스트형 필터 모듈
 * 고유값 선택을 위한 체크박스 목록 관련 기능 제공
 */



/**
 * 텍스트형 필터 렌더링 HTML 생성
 * @param {number} filterId 필터 ID
 * @returns {string} 필터 HTML
 */
function renderTextFilterHTML(filterId) {
  return "\n    <div id=\"textFilterOptions-".concat(filterId, "\" class=\"filter-options text-options\">\n      <div class=\"form-group\">\n        <label class=\"small fw-bold mb-2\">\uACE0\uC720\uAC12 \uC120\uD0DD</label>\n        <div id=\"valueList-").concat(filterId, "\" class=\"border p-2 value-list\" style=\"max-height: 200px; overflow-y: auto;\">\n          <!-- \uAC12 \uBAA9\uB85D\uC774 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4 -->\n        </div>\n      </div>\n    </div>\n  ");
}

/**
 * 텍스트 데이터 로드 및 UI 설정
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 */
function setupTextFilter(_x, _x2) {
  return _setupTextFilter.apply(this, arguments);
}

/**
 * 고유값 목록을 표시합니다.
 * @param {Array} valueStats 고유값 통계 데이터
 * @param {HTMLElement} valueListElement 값 목록을 표시할 DOM 요소
 * @param {number} filterId 필터 ID
 */
function _setupTextFilter() {
  _setupTextFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(filter, element) {
    var filterId, valueList, textOptions, columnInfo;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          filterId = filter.id;
          valueList = element.querySelector("#valueList-".concat(filterId));
          textOptions = element.querySelector('.text-options');
          if (valueList) {
            _context.next = 7;
            break;
          }
          console.error('값 목록 요소를 찾을 수 없습니다.');
          return _context.abrupt("return");
        case 7:
          valueList.innerHTML = '<p class="text-muted">값 로딩 중...</p>';
          _context.prev = 8;
          _context.next = 11;
          return _services_api_js__WEBPACK_IMPORTED_MODULE_0__.loadTextColumnValues(filter.tableName, filter.columnName);
        case 11:
          columnInfo = _context.sent;
          // 컬럼 정보 캐싱
          filter.columnInfo = columnInfo;

          // UI 업데이트
          if (columnInfo && columnInfo.value_stats) {
            displayTextValues(columnInfo.value_stats, valueList, filterId);
          } else {
            valueList.innerHTML = '<p class="text-muted">데이터가 없습니다.</p>';
          }

          // 옵션 표시
          if (textOptions) textOptions.classList.add('active');
          _context.next = 21;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](8);
          console.error('글자형 값 로드 오류:', _context.t0);
          valueList.innerHTML = '<p class="text-danger">데이터 로드 중 오류가 발생했습니다.</p>';
        case 21:
          _context.next = 26;
          break;
        case 23:
          _context.prev = 23;
          _context.t1 = _context["catch"](0);
          console.error('텍스트형 필터 설정 오류:', _context.t1);
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 23], [8, 17]]);
  }));
  return _setupTextFilter.apply(this, arguments);
}
function displayTextValues(valueStats, valueListElement, filterId) {
  valueListElement.innerHTML = '';
  if (!valueStats || valueStats.length === 0) {
    valueListElement.innerHTML = '<p class="text-muted">데이터가 없습니다.</p>';
    return;
  }

  // 고유값 추가
  valueStats.forEach(function (stat) {
    var div = document.createElement('div');
    div.className = 'form-check';
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'form-check-input value-checkbox';
    input.value = stat.value;
    input.id = "value-".concat(filterId, "-").concat(stat.value);
    input.dataset.value = stat.value;
    var label = document.createElement('label');
    label.className = 'form-check-label small';
    label.htmlFor = "value-".concat(filterId, "-").concat(stat.value);
    label.textContent = "".concat(stat.value, " (").concat(stat.frequency, ")");
    div.appendChild(input);
    div.appendChild(label);
    valueListElement.appendChild(div);
  });
}

/**
 * 텍스트형 필터 적용
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} element 필터 요소
 * @returns {Promise<Object>} API 응답 결과
 */
function applyTextFilter(_x3, _x4) {
  return _applyTextFilter.apply(this, arguments);
}
function _applyTextFilter() {
  _applyTextFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(filter, element) {
    var filterId, valueList, checkboxes, selectedValues;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          filterId = filter.id;
          valueList = element.querySelector("#valueList-".concat(filterId));
          if (valueList) {
            _context2.next = 4;
            break;
          }
          throw new Error('값 목록을 찾을 수 없습니다.');
        case 4:
          checkboxes = valueList.querySelectorAll('.value-checkbox:checked');
          selectedValues = Array.from(checkboxes).map(function (cb) {
            return cb.dataset.value;
          });
          if (!(selectedValues.length === 0)) {
            _context2.next = 8;
            break;
          }
          throw new Error('하나 이상의 값을 선택하세요.');
        case 8:
          // 필터 파라미터 저장
          filter.filterParams = {
            selectedValues: selectedValues
          };

          // API 호출
          _context2.next = 11;
          return _services_api_js__WEBPACK_IMPORTED_MODULE_0__.applyTextFilter(filter.tableName, filter.columnName, selectedValues);
        case 11:
          return _context2.abrupt("return", _context2.sent);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _applyTextFilter.apply(this, arguments);
}

/***/ }),

/***/ "./src/components/filter/utils/filterRenderer.js":
/*!*******************************************************!*\
  !*** ./src/components/filter/utils/filterRenderer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFilterHTML: () => (/* binding */ createFilterHTML),
/* harmony export */   populateColumnSelect: () => (/* binding */ populateColumnSelect),
/* harmony export */   populateTableSelect: () => (/* binding */ populateTableSelect),
/* harmony export */   updateFilterTitle: () => (/* binding */ updateFilterTitle)
/* harmony export */ });
/* harmony import */ var _types_NumericFilter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/NumericFilter.js */ "./src/components/filter/types/NumericFilter.js");
/* harmony import */ var _types_TextFilter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/TextFilter.js */ "./src/components/filter/types/TextFilter.js");
/* harmony import */ var _types_DateFilter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/DateFilter.js */ "./src/components/filter/types/DateFilter.js");
/**
 * 필터 렌더링 유틸리티
 * 필터 UI 생성 및 업데이트 관련 기능 제공
 */





/**
 * 필터 기본 HTML 템플릿 생성
 * @param {number} filterId 필터 ID
 * @returns {string} 필터 HTML
 */
function createFilterHTML(filterId) {
  return "\n    <div class=\"filter-card\" id=\"filter-".concat(filterId, "\">\n      <div class=\"filter-header\">\n        <h6 class=\"filter-title\">\n          <span class=\"filter-name-wrapper\">\n            <span class=\"filter-name\">\uC0C8 \uD544\uD130</span>\n            <span class=\"badge bg-secondary filter-type\"></span>\n          </span>\n        </h6>\n        <div class=\"d-flex\">\n          <button class=\"btn btn-sm btn-outline-secondary apply-filter-btn me-1\" title=\"\uD544\uD130 \uC801\uC6A9\" style=\"padding: 0.2rem 0.4rem;\">\n            <i class=\"fas fa-check\"></i>\n          </button>\n          <button class=\"btn btn-sm btn-outline-secondary remove-filter-btn\" title=\"\uD544\uD130 \uC0AD\uC81C\" style=\"padding: 0.2rem 0.4rem;\">\n            <i class=\"fas fa-trash\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"filter-body\">\n        <!-- \uD14C\uC774\uBE14 \uBC0F \uCEEC\uB7FC \uC120\uD0DD -->\n        <div class=\"row mb-3\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"tableSelect-").concat(filterId, "\" class=\"small fw-bold\">\uD14C\uC774\uBE14 \uC120\uD0DD</label>\n              <select id=\"tableSelect-").concat(filterId, "\" class=\"form-control form-control-sm tableSelect\">\n                <option value=\"\">\uD14C\uC774\uBE14 \uC120\uD0DD...</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"columnSelect-").concat(filterId, "\" class=\"small fw-bold\">\uCEEC\uB7FC \uC120\uD0DD</label>\n              <select id=\"columnSelect-").concat(filterId, "\" class=\"form-control form-control-sm columnSelect\">\n                <option value=\"\">\uCEEC\uB7FC \uC120\uD0DD...</option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n        <!-- \uD544\uD130 \uC635\uC158 \uC601\uC5ED: \uD0C0\uC785\uBCC4 \uD544\uD130 UI\uAC00 \uC5EC\uAE30\uC5D0 \uC0BD\uC785\uB428 -->\n        ").concat((0,_types_NumericFilter_js__WEBPACK_IMPORTED_MODULE_0__.renderNumericFilterHTML)(filterId), "\n        ").concat((0,_types_TextFilter_js__WEBPACK_IMPORTED_MODULE_1__.renderTextFilterHTML)(filterId), "\n        ").concat((0,_types_DateFilter_js__WEBPACK_IMPORTED_MODULE_2__.renderDateFilterHTML)(filterId), "\n      </div>\n    </div>\n  ");
}

/**
 * 필터 제목 업데이트
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} nameElement 필터 이름 요소
 * @param {HTMLElement} typeElement 필터 타입 요소
 */
function updateFilterTitle(filter, nameElement, typeElement) {
  if (filter.tableName && filter.columnName) {
    // 'src_' 접두사 제거
    var displayTableName = filter.tableName.startsWith('src_') ? filter.tableName.substring(4) : filter.tableName;
    nameElement.textContent = "".concat(displayTableName, ".").concat(filter.columnName);
    if (filter.columnType === 'numeric') {
      typeElement.textContent = '숫자형';
      typeElement.className = 'badge bg-primary filter-type';
    } else if (filter.columnType === 'text') {
      typeElement.textContent = '글자형';
      typeElement.className = 'badge bg-success filter-type';
    } else if (filter.columnType === 'date') {
      typeElement.textContent = '날짜형';
      typeElement.className = 'badge bg-info filter-type';
    }
  } else if (filter.tableName) {
    // 'src_' 접두사 제거
    nameElement.textContent = filter.tableName.startsWith('src_') ? filter.tableName.substring(4) : filter.tableName;
    typeElement.textContent = '';
  } else {
    nameElement.textContent = '새 필터';
    typeElement.textContent = '';
  }
}

/**
 * 테이블 선택 드롭다운을 채웁니다.
 * @param {Array<string>} tables 테이블 목록
 * @param {HTMLSelectElement} selectElement <select> 요소
 */
function populateTableSelect(tables, selectElement) {
  selectElement.innerHTML = '<option value="">테이블 선택...</option>';
  tables.forEach(function (table) {
    var option = document.createElement('option');
    option.value = table;
    // 'src_' 접두사를 제거하여 표시
    option.textContent = table.startsWith('src_') ? table.substring(4) : table;
    selectElement.appendChild(option);
  });
}

/**
 * 컬럼 선택 드롭다운을 채웁니다.
 * @param {Object} tableData 테이블 컬럼 데이터 { numeric: [], text: [], date: [] }
 * @param {HTMLSelectElement} selectElement <select> 요소
 */
function populateColumnSelect(tableData, selectElement) {
  selectElement.innerHTML = '<option value="">컬럼 선택...</option>';

  // 숫자형 컬럼 추가
  if (tableData.numeric && tableData.numeric.length > 0) {
    var numericGroup = document.createElement('optgroup');
    numericGroup.label = '숫자형';
    tableData.numeric.forEach(function (col) {
      var option = document.createElement('option');
      option.value = col.column_name;
      option.textContent = "".concat(col.column_name, " (").concat(col.data_type, ")");
      option.dataset.type = 'numeric';
      numericGroup.appendChild(option);
    });
    selectElement.appendChild(numericGroup);
  }

  // 글자형 컬럼 추가
  if (tableData.text && tableData.text.length > 0) {
    var textGroup = document.createElement('optgroup');
    textGroup.label = '글자형';
    tableData.text.forEach(function (col) {
      var option = document.createElement('option');
      option.value = col.column_name;
      option.textContent = "".concat(col.column_name, " (").concat(col.data_type, ")");
      option.dataset.type = 'text';
      textGroup.appendChild(option);
    });
    selectElement.appendChild(textGroup);
  }

  // 날짜형 컬럼 추가
  if (tableData.date && tableData.date.length > 0) {
    var dateGroup = document.createElement('optgroup');
    dateGroup.label = '날짜형';
    tableData.date.forEach(function (col) {
      var option = document.createElement('option');
      option.value = col.column_name;
      option.textContent = "".concat(col.column_name, " (").concat(col.data_type, ")");
      option.dataset.type = 'date';
      dateGroup.appendChild(option);
    });
    selectElement.appendChild(dateGroup);
  }
}

/***/ }),

/***/ "./src/components/grid/AnalysisResultComponent.js":
/*!********************************************************!*\
  !*** ./src/components/grid/AnalysisResultComponent.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnalysisResultComponent)
/* harmony export */ });
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/eventBus.js */ "./src/utils/eventBus.js");
/* harmony import */ var _services_IsochroneApiService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/IsochroneApiService.js */ "./src/services/IsochroneApiService.js");
/* harmony import */ var _analysis_AnalysisResultRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analysis/AnalysisResultRenderer.js */ "./src/components/grid/analysis/AnalysisResultRenderer.js");
/* harmony import */ var _analysis_AnalysisResultEventsHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analysis/AnalysisResultEventsHandler.js */ "./src/components/grid/analysis/AnalysisResultEventsHandler.js");
/* harmony import */ var _analysis_PnuAnalysisService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./analysis/PnuAnalysisService.js */ "./src/components/grid/analysis/PnuAnalysisService.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 분석 결과 컴포넌트
 * 아이소크론맵 분석 결과를 표시합니다.
 */






var AnalysisResultComponent = /*#__PURE__*/function () {
  /**
   * 분석 결과 컴포넌트 생성
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   * @param {Function} onPnuToggle PNU 토글 상태 변경시 호출될 콜백 함수
   * @param {Function} onPnuSelect PNU 선택 시 호출될 콜백 함수
   * @param {IsochroneApiService} apiService API 서비스 인스턴스
   */
  function AnalysisResultComponent(container, onPnuToggle, onPnuSelect, apiService) {
    _classCallCheck(this, AnalysisResultComponent);
    this.container = container;
    this.onPnuToggle = onPnuToggle || function () {};
    this.onPnuSelect = onPnuSelect || function () {};

    // API 서비스 설정
    this.apiService = apiService || new _services_IsochroneApiService_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

    // 클래스 데이터 초기화
    this.pnuList = [];
    this.statistics = null;
    this.selectedPnu = null;
    this.analysisParams = null;
    this.indexSettings = []; // 평가 지수 설정
    this.isAnalyzing = false; // 분석 중 상태
    this.analyzedPnus = new Map(); // 이미 분석된 PNU와 결과 데이터를 저장하는 Map
    this.activeToggles = new Set(); // 활성화된 토글 상태를 저장하는 Set
    this.pnuRankingCalculated = false; // 순위 계산 여부

    // 컴포넌트 모듈 초기화
    this.initializeModules();

    // 이벤트 구독 설정
    this.setupEventSubscriptions();
    this.init();
  }

  /**
   * 컴포넌트 모듈 초기화
   */
  return _createClass(AnalysisResultComponent, [{
    key: "initializeModules",
    value: function initializeModules() {
      // 렌더링 모듈
      this.renderer = new _analysis_AnalysisResultRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);

      // 이벤트 핸들러 모듈
      this.eventsHandler = new _analysis_AnalysisResultEventsHandler_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);

      // PNU 분석 서비스 모듈
      this.analysisService = new _analysis_PnuAnalysisService_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.apiService);
    }

    /**
     * 이벤트 구독 설정
     */
  }, {
    key: "setupEventSubscriptions",
    value: function setupEventSubscriptions() {
      var _this = this;
      // 평가 지수 설정 업데이트 구독
      this.unsubscribeIndexSettings = _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('indexSettings.updated', function (settings) {
        _this.indexSettings = settings;

        // PNU 목록에 적용된 설정이 있다면 UI 업데이트
        if (_this.pnuList.length > 0) {
          _this.render();
          _this.eventsHandler.attachEventListeners();
        }
      });

      // PNU 필터링 결과 구독 - 기존 이벤트
      this.unsubscribePnuFilter = _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('pnuFilter.results', function (pnuList) {
        // 데이터 할당
        if (pnuList !== null && pnuList !== void 0 && pnuList.pnuList) {
          _this.pnuList = _toConsumableArray(pnuList.pnuList); // 배열 복사로 참조 문제 방지
        } else if (Array.isArray(pnuList)) {
          _this.pnuList = _toConsumableArray(pnuList); // 배열 복사
        } else {
          _this.pnuList = []; // 유효한 데이터가 없으면 빈 배열로 초기화
        }

        // 기존 토글 상태 유지를 위해 활성화된 토글 정보 적용
        _this.applyActiveToggles();

        // UI 업데이트
        _this.render();
        _this.eventsHandler.attachEventListeners();
      });

      // pnuFiltered 이벤트 구독 추가 (MapContainer에서 사용하는 이벤트)
      this.unsubscribePnuFiltered = _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('pnuFiltered', function (data) {
        // 데이터 할당
        if (data !== null && data !== void 0 && data.pnuList) {
          _this.pnuList = _toConsumableArray(data.pnuList); // 배열 복사로 참조 문제 방지
        } else {
          _this.pnuList = []; // 유효한 데이터가 없으면 빈 배열로 초기화
        }

        // 기존 토글 상태 유지를 위해 활성화된 토글 정보 적용
        _this.applyActiveToggles();

        // UI 업데이트
        _this.render();
        _this.eventsHandler.attachEventListeners();
      });
    }

    /**
     * 활성화된 토글 정보를 적용하는 메서드
     */
  }, {
    key: "applyActiveToggles",
    value: function applyActiveToggles() {
      var _this2 = this;
      // 활성화된 토글 정보가 있는 경우 PNU 목록에 적용
      if (this.activeToggles.size > 0) {
        this.pnuList.forEach(function (pnu, index) {
          var pnuCode = _typeof(pnu) === 'object' ? pnu.code || pnu.pnu : pnu;

          // 이미 분석된 PNU인 경우 analyzed 상태와 value 설정
          if (_this2.analyzedPnus.has(pnuCode)) {
            var analysisData = _this2.analyzedPnus.get(pnuCode);

            // 객체인 경우 속성 업데이트
            if (_typeof(_this2.pnuList[index]) === 'object') {
              _this2.pnuList[index].analyzed = true;
              if (analysisData && analysisData.value !== undefined) {
                _this2.pnuList[index].value = analysisData.value;
              }
            } else {
              // 문자열인 경우 객체로 변환
              _this2.pnuList[index] = {
                pnu: pnuCode,
                code: pnuCode,
                analyzed: true,
                value: analysisData === null || analysisData === void 0 ? void 0 : analysisData.value
              };
            }
          }

          // 활성화된 토글 상태 적용
          if (_typeof(_this2.pnuList[index]) === 'object') {
            _this2.pnuList[index].active = _this2.activeToggles.has(pnuCode);
          }
        });
      }
    }

    /**
     * 구독 해제
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      if (this.unsubscribeIndexSettings) {
        this.unsubscribeIndexSettings();
      }
      if (this.unsubscribePnuFilter) {
        this.unsubscribePnuFilter();
      }
      if (this.unsubscribePnuFiltered) {
        this.unsubscribePnuFiltered();
      }
    }

    /**
     * 컴포넌트 초기화
     */
  }, {
    key: "init",
    value: function init() {
      // 초기 렌더링
      this.render();
      this.eventsHandler.attachEventListeners();

      // 디버깅용 빈 PNU 항목 추가 (테스트 목적)
      if (this.pnuList.length === 0) {
        // 이벤트 버스 통해 샘플 PNU 가져오기 시도
        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('pnu.getSample', {});
      }
    }

    /**
     * 컴포넌트 렌더링
     */
  }, {
    key: "render",
    value: function render() {
      this.container.innerHTML = this.renderer.generateHtml();
    }

    /**
     * PNU 토글 상태 변경 처리
     * @param {string} pnu PNU 코드
     * @param {boolean} isActive 활성화 여부
     */
  }, {
    key: "togglePnu",
    value: (function () {
      var _togglePnu = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(pnu, isActive) {
        var analysisData, _analysisData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log("\uD1A0\uAE00 \uBCC0\uACBD: PNU=".concat(pnu, ", isActive=").concat(isActive, ", \uBD84\uC11D\uC5EC\uBD80=").concat(this.analyzedPnus.has(pnu)));
              console.log('현재 분석된 PNU 목록:', Array.from(this.analyzedPnus.keys()));

              // 토글 상태 업데이트
              if (!isActive) {
                _context.next = 26;
                break;
              }
              this.activeToggles.add(pnu);

              // 아직 분석되지 않은 PNU인 경우에만 분석 실행
              if (this.analyzedPnus.has(pnu)) {
                _context.next = 21;
                break;
              }
              console.log("PNU ".concat(pnu, " \uBD84\uC11D \uC2DC\uC791 (API \uC694\uCCAD)"));
              _context.prev = 6;
              _context.next = 9;
              return this.analyzePnu(pnu);
            case 9:
              analysisData = _context.sent;
              // 분석 데이터 저장
              this.analyzedPnus.set(pnu, analysisData);
              console.log("PNU ".concat(pnu, " \uBD84\uC11D \uC644\uB8CC \uBC0F \uB370\uC774\uD130 \uC800\uC7A5\uB428"));

              // 맵에 표시하기 위한 이벤트 발행
              _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('analysis.toggle', {
                pnu: pnu,
                isActive: true,
                data: analysisData
              });
              _context.next = 19;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](6);
              console.error("PNU ".concat(pnu, " \uBD84\uC11D \uC2E4\uD328:"), _context.t0);

              // 실패 시 토글 상태 롤백
              this.activeToggles["delete"](pnu);
            case 19:
              _context.next = 24;
              break;
            case 21:
              console.log("PNU ".concat(pnu, " \uC774\uBBF8 \uBD84\uC11D\uB428, \uCE90\uC2DC\uB41C \uB370\uC774\uD130 \uC0AC\uC6A9"));
              // 이미 분석된 PNU는 저장된 데이터를 사용하여 맵에 표시
              _analysisData = this.analyzedPnus.get(pnu); // 맵에 표시하기 위한 이벤트 발행
              _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('analysis.toggle', {
                pnu: pnu,
                isActive: true,
                data: _analysisData
              });
            case 24:
              _context.next = 28;
              break;
            case 26:
              // 비활성화 (토글 off)
              this.activeToggles["delete"](pnu);

              // 맵에서 제거하기 위한 이벤트 발행
              _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('analysis.toggle', {
                pnu: pnu,
                isActive: false
              });
            case 28:
              // UI 업데이트를 위해 토글 상태 적용
              this.applyActiveToggles();

              // 순위를 점수 기준으로 다시 정렬
              if (this.analyzedPnus.size > 1) {
                console.log('토글 상태 변경 후 점수 기준으로 정렬합니다.');
                this.sortPnuListByScore();
              }

              // UI 다시 렌더링
              this.render();
              this.eventsHandler.attachEventListeners();

              // 콜백 호출
              this.onPnuToggle(pnu, isActive);
            case 33:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[6, 15]]);
      }));
      function togglePnu(_x, _x2) {
        return _togglePnu.apply(this, arguments);
      }
      return togglePnu;
    }()
    /**
     * PNU 분석 실행
     * @param {string} pnu PNU 코드
     * @returns {Promise<void>}
     */
    )
  }, {
    key: "analyzePnu",
    value: (function () {
      var _analyzePnu = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pnu) {
        var indexSetting, rangeMinutes, gridTable, columnName, response, pnuIndex, pnuItem, _response$data, statsGrid, analysisParamsInfo;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!this.indexSettings || this.indexSettings.length === 0)) {
                _context2.next = 2;
                break;
              }
              throw new Error('평가 지수 설정이 없습니다. 평가 지수를 먼저 추가해주세요.');
            case 2:
              // 선택된 평가 지수 중 첫 번째 항목 사용
              indexSetting = this.indexSettings[0];
              rangeMinutes = indexSetting.time;
              gridTable = indexSetting.table;
              columnName = indexSetting.column;
              _context2.prev = 6;
              _context2.next = 9;
              return this.analysisService.analyze(pnu, rangeMinutes, gridTable, columnName);
            case 9:
              response = _context2.sent;
              if (!response.success) {
                _context2.next = 26;
                break;
              }
              // 분석된 PNU 데이터 업데이트
              pnuIndex = this.pnuList.findIndex(function (p) {
                if (_typeof(p) === 'object') {
                  return p.code === pnu || p.pnu === pnu;
                } else {
                  return p === pnu;
                }
              });
              if (pnuIndex !== -1) {
                // PNU 항목 찾기
                pnuItem = this.pnuList[pnuIndex]; // 객체인 경우 속성 업데이트
                if (_typeof(pnuItem) === 'object') {
                  pnuItem.analyzed = true;
                  pnuItem.active = true; // 토글 활성화 상태로 설정
                  if (response.data && response.data.value !== undefined) {
                    pnuItem.value = response.data.value;
                  }
                } else {
                  // 문자열인 경우 객체로 변환
                  this.pnuList[pnuIndex] = {
                    pnu: pnu,
                    code: pnu,
                    analyzed: true,
                    active: true,
                    // 토글 활성화 상태로 설정
                    value: (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.value
                  };
                }
              }

              // 분석된 PNU 데이터 저장
              this.analyzedPnus.set(pnu, response.data);

              // 분석 파라미터 저장
              this.analysisParams = {
                pnu: pnu,
                rangeMinutes: rangeMinutes,
                gridTable: gridTable,
                columnName: columnName,
                timestamp: new Date()
              };

              // 통계 정보 업데이트
              if (response.data && response.data.statistics) {
                this.statistics = response.data.statistics;
              }

              // 분석 완료 후 점수 기준으로 정렬 (2개 이상일 때만)
              if (this.analyzedPnus.size > 1) {
                console.log('분석 완료 후 점수 기준으로 정렬합니다.');
                this.sortPnuListByScore();
              }

              // UI 업데이트 (결과 표시 부분만)
              statsGrid = this.container.querySelector('#statsGrid');
              if (statsGrid) {
                statsGrid.innerHTML = this.renderer.getStatisticsHtml();
              }

              // 분석정보 업데이트
              analysisParamsInfo = this.container.querySelector('#analysisParamsInfo');
              if (analysisParamsInfo) {
                analysisParamsInfo.innerHTML = this.renderer.getAnalysisParamsHtml();
              }

              // 이벤트 발행: 분석 결과 업데이트
              _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('analysis.results', {
                pnu: pnu,
                settings: indexSetting,
                results: response.data
              });

              // polygon과 gridPoints를 지도에 표시하기 위한 이벤트 발행
              if (response.data.polygon || response.data.gridPoints) {
                _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('analysis.mapData', {
                  pnu: pnu,
                  polygon: response.data.polygon,
                  gridPoints: response.data.gridPoints
                });
              }
              return _context2.abrupt("return", response.data);
            case 26:
              throw new Error(response.message || '분석 처리 중 오류가 발생했습니다.');
            case 27:
              _context2.next = 33;
              break;
            case 29:
              _context2.prev = 29;
              _context2.t0 = _context2["catch"](6);
              console.error("".concat(pnu, " \uBD84\uC11D \uC2E4\uD328:"), _context2.t0);
              throw _context2.t0;
            case 33:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[6, 29]]);
      }));
      function analyzePnu(_x3) {
        return _analyzePnu.apply(this, arguments);
      }
      return analyzePnu;
    }()
    /**
     * 분석 결과 데이터 설정
     * @param {Array} pnuList PNU 목록
     * @param {Object} statistics 통계 정보
     * @param {Object} params 분석 매개변수
     */
    )
  }, {
    key: "setAnalysisResults",
    value: function setAnalysisResults(pnuList, statistics, params) {
      this.pnuList = pnuList || [];
      this.statistics = statistics || null;
      this.analysisParams = params || null;

      // 기존 토글 상태 유지를 위해 활성화된 토글 정보 적용
      this.applyActiveToggles();

      // 컴포넌트 다시 렌더링
      this.render();
      this.eventsHandler.attachEventListeners();
    }

    /**
     * 분석 결과 초기화
     */
  }, {
    key: "resetResults",
    value: function resetResults() {
      this.pnuList = [];
      this.statistics = null;
      this.analysisParams = null;
      this.selectedPnu = null;
      this.analyzedPnus.clear();
      this.activeToggles.clear();
      this.pnuRankingCalculated = false;

      // 컴포넌트 다시 렌더링
      this.render();
      this.eventsHandler.attachEventListeners();
    }

    /**
     * PNU 목록 설정
     * @param {Array} pnuList PNU 목록
     */
  }, {
    key: "setPnuList",
    value: function setPnuList(pnuList) {
      // 데이터 유효성 검사 및 할당
      if (pnuList !== null && pnuList !== void 0 && pnuList.pnuList) {
        this.pnuList = _toConsumableArray(pnuList.pnuList); // 배열 복사
      } else if (Array.isArray(pnuList)) {
        this.pnuList = _toConsumableArray(pnuList); // 배열 복사
      } else {
        this.pnuList = []; // 데이터가 없으면 빈 배열
      }

      // 기존 토글 상태 유지를 위해 활성화된 토글 정보 적용
      this.applyActiveToggles();

      // UI 업데이트
      this.render();
      this.eventsHandler.attachEventListeners();
    }

    /**
     * 모든 PNU에 대한 순위 계산 실행
     */
  }, {
    key: "calculateRankings",
    value: (function () {
      var _calculateRankings = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this3 = this;
        var indexSetting, rangeMinutes, gridTable, columnName, unanalyzedPnus, successCount, failedPnus, currentProgress, totalPnus, _iterator, _step, pnu, pnuCode, response, _response$data2, failMessage;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!this.indexSettings || this.indexSettings.length === 0)) {
                _context3.next = 3;
                break;
              }
              alert('평가 지수 설정이 없습니다. 평가 지수를 먼저 추가해주세요.');
              return _context3.abrupt("return");
            case 3:
              if (!(!this.pnuList || this.pnuList.length === 0)) {
                _context3.next = 6;
                break;
              }
              alert('PNU 데이터가 없습니다.');
              return _context3.abrupt("return");
            case 6:
              _context3.prev = 6;
              // 분석 진행 중 상태로 설정
              this.isAnalyzing = true;

              // UI 업데이트 - 분석 중 상태 표시
              this.render();

              // 선택된 평가 지수 중 첫 번째 항목 사용
              indexSetting = this.indexSettings[0];
              rangeMinutes = indexSetting.time;
              gridTable = indexSetting.table;
              columnName = indexSetting.column; // 아직 분석되지 않은 PNU 목록
              unanalyzedPnus = this.pnuList.filter(function (pnu) {
                var pnuCode = _typeof(pnu) === 'object' ? pnu.code || pnu.pnu : pnu;
                return !_this3.analyzedPnus.has(pnuCode);
              });
              console.log("\uC21C\uC704 \uACC4\uC0B0 \uC2DC\uC791: \uC804\uCCB4 ".concat(this.pnuList.length, "\uAC1C \uC911 ").concat(unanalyzedPnus.length, "\uAC1C \uBBF8\uBD84\uC11D"));

              // 분석되지 않은 모든 PNU에 대해 분석 수행
              successCount = 0;
              failedPnus = [];
              currentProgress = 0;
              totalPnus = unanalyzedPnus.length; // 순차적으로 처리하되, 각 PNU의 처리 결과 기록
              _iterator = _createForOfIteratorHelper(unanalyzedPnus);
              _context3.prev = 20;
              _iterator.s();
            case 22:
              if ((_step = _iterator.n()).done) {
                _context3.next = 48;
                break;
              }
              pnu = _step.value;
              pnuCode = _typeof(pnu) === 'object' ? pnu.code || pnu.pnu : pnu;
              currentProgress++;
              _context3.prev = 26;
              // 현재 분석중인 PNU 출력
              console.log("PNU ".concat(pnuCode, " \uBD84\uC11D \uC911... (").concat(currentProgress, "/").concat(totalPnus, ")"));
              _context3.prev = 28;
              _context3.next = 31;
              return this.analysisService.analyze(pnuCode, rangeMinutes, gridTable, columnName);
            case 31:
              response = _context3.sent;
              // 성공한 경우 데이터 저장
              if (response.success) {
                this.analyzedPnus.set(pnuCode, response.data);
                successCount++;

                // PnuList에 값 업데이트
                this.updatePnuValue(pnuCode, (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.value);
              } else {
                // 실패한 경우 목록에 추가
                failedPnus.push({
                  pnuCode: pnuCode,
                  reason: response.message || '알 수 없는 오류'
                });
                console.warn("PNU ".concat(pnuCode, " \uBD84\uC11D \uC2E4\uD328: ").concat(response.message));

                // 실패한 경우에도 PNU 객체 업데이트 (실패 상태로)
                this.updatePnuValue(pnuCode, null, true);
              }
              _context3.next = 40;
              break;
            case 35:
              _context3.prev = 35;
              _context3.t0 = _context3["catch"](28);
              // API 오류 발생 시 처리
              failedPnus.push({
                pnuCode: pnuCode,
                reason: _context3.t0.message || '요청 오류'
              });
              console.error("PNU ".concat(pnuCode, " \uBD84\uC11D \uC624\uB958:"), _context3.t0);

              // 오류가 발생한 경우에도 PNU 객체 업데이트 (실패 상태로)
              this.updatePnuValue(pnuCode, null, true);
            case 40:
              _context3.next = 46;
              break;
            case 42:
              _context3.prev = 42;
              _context3.t1 = _context3["catch"](26);
              // 예상치 못한 오류 발생 시에도 계속 진행
              console.error("PNU ".concat(pnuCode, " \uCC98\uB9AC \uC911 \uC608\uC0C1\uCE58 \uBABB\uD55C \uC624\uB958:"), _context3.t1);
              failedPnus.push({
                pnuCode: pnuCode,
                reason: '내부 처리 오류'
              });
            case 46:
              _context3.next = 22;
              break;
            case 48:
              _context3.next = 53;
              break;
            case 50:
              _context3.prev = 50;
              _context3.t2 = _context3["catch"](20);
              _iterator.e(_context3.t2);
            case 53:
              _context3.prev = 53;
              _iterator.f();
              return _context3.finish(53);
            case 56:
              console.log("\uBD84\uC11D \uC644\uB8CC: \uC131\uACF5=".concat(successCount, ", \uC2E4\uD328=").concat(failedPnus.length));

              // 모든 분석이 완료된 후에 순위 처리
              console.log('점수 기준으로 내림차순 정렬 시작');

              // 모든 PNU(이미 분석된 것 포함) 점수 기준으로 내림차순 정렬
              this.sortPnuListByScore();

              // 데이터가 없는 실패한 PNU는 맨 뒤로 정렬
              this.moveFailedPnusToEnd(failedPnus.map(function (item) {
                return item.pnuCode;
              }));

              // 순위 계산 완료 표시
              this.pnuRankingCalculated = true;
              console.log('점수 기준 정렬 완료, UI 업데이트');

              // UI 업데이트
              this.render();
              this.eventsHandler.attachEventListeners();

              // 분석 완료 메시지
              if (failedPnus.length > 0) {
                failMessage = failedPnus.length <= 3 ? failedPnus.map(function (item) {
                  return "".concat(item.pnuCode, ": ").concat(item.reason);
                }).join('\n') : "".concat(failedPnus.length, "\uAC1C PNU (\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uCF58\uC194\uC744 \uD655\uC778\uD558\uC138\uC694)");
                alert("\uC21C\uC704 \uACC4\uC0B0 \uC644\uB8CC!\n\uC131\uACF5: ".concat(successCount, "\uAC1C, \uC2E4\uD328: ").concat(failedPnus.length, "\uAC1C\n\n\uC2E4\uD328\uD55C \uD56D\uBAA9: \n").concat(failMessage, "\n\n(\uC2E4\uD328\uD55C \uD56D\uBAA9\uC740 \uD6C4\uC21C\uC704\uB85C \uC815\uB82C\uB429\uB2C8\uB2E4)"));
              } else {
                alert("\uC21C\uC704 \uACC4\uC0B0 \uC644\uB8CC!\n\uCD1D ".concat(successCount, "\uAC1C\uC758 PNU \uBD84\uC11D \uC644\uB8CC"));
              }
              _context3.next = 71;
              break;
            case 67:
              _context3.prev = 67;
              _context3.t3 = _context3["catch"](6);
              console.error('순위 계산 중 오류 발생:', _context3.t3);
              alert("\uC21C\uC704 \uACC4\uC0B0 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ".concat(_context3.t3.message));
            case 71:
              _context3.prev = 71;
              // 분석 완료 후 상태 변경
              this.isAnalyzing = false;

              // UI 업데이트
              this.render();
              this.eventsHandler.attachEventListeners();
              return _context3.finish(71);
            case 76:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[6, 67, 71, 76], [20, 50, 53, 56], [26, 42], [28, 35]]);
      }));
      function calculateRankings() {
        return _calculateRankings.apply(this, arguments);
      }
      return calculateRankings;
    }()
    /**
     * PNU 값 업데이트
     * @param {string} pnuCode PNU 코드
     * @param {number} value 분석 값
     * @param {boolean} isFailed 분석 실패 여부
     */
    )
  }, {
    key: "updatePnuValue",
    value: function updatePnuValue(pnuCode, value) {
      var isFailed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var pnuIndex = this.pnuList.findIndex(function (p) {
        if (_typeof(p) === 'object') {
          return p.code === pnuCode || p.pnu === pnuCode;
        } else {
          return p === pnuCode;
        }
      });
      if (pnuIndex !== -1) {
        var pnuItem = this.pnuList[pnuIndex];

        // 점수 정보 가져오기
        var score = '';
        var analysisData = this.analyzedPnus.get(pnuCode);
        if (analysisData && analysisData.statistics && analysisData.statistics.sum) {
          score = analysisData.statistics.sum;
        }
        if (_typeof(pnuItem) === 'object') {
          pnuItem.analyzed = true;
          pnuItem.value = value;
          pnuItem.score = score; // 점수 정보 추가
          if (isFailed) {
            pnuItem.failed = true;
          }
        } else {
          this.pnuList[pnuIndex] = {
            pnu: pnuCode,
            code: pnuCode,
            analyzed: true,
            value: value,
            score: score,
            // 점수 정보 추가
            failed: isFailed
          };
        }
      }
    }

    /**
     * PNU 목록을 점수 기준으로 내림차순 정렬
     */
  }, {
    key: "sortPnuListByScore",
    value: function sortPnuListByScore() {
      var _this4 = this;
      this.pnuList.sort(function (a, b) {
        // 점수 값 가져오기 (score 필드 우선, 없으면 분석 데이터에서 가져오기)
        var scoreA = 0;
        var scoreB = 0;
        if (_typeof(a) === 'object') {
          // 객체에 score 값이 있으면 사용
          if (a.score !== undefined && a.score !== '') {
            scoreA = Number(a.score);
          }
          // 객체에 score 값이 없고 pnu/code가 있으면 분석 데이터에서 가져오기
          else if ((a.pnu || a.code) && _this4.analyzedPnus.has(a.pnu || a.code)) {
            var analysisData = _this4.analyzedPnus.get(a.pnu || a.code);
            if (analysisData && analysisData.statistics && analysisData.statistics.sum) {
              scoreA = Number(analysisData.statistics.sum);
            }
          }
        } else if (typeof a === 'string' && _this4.analyzedPnus.has(a)) {
          // 문자열인 경우 PNU 코드로 분석 데이터에서 가져오기
          var _analysisData2 = _this4.analyzedPnus.get(a);
          if (_analysisData2 && _analysisData2.statistics && _analysisData2.statistics.sum) {
            scoreA = Number(_analysisData2.statistics.sum);
          }
        }
        if (_typeof(b) === 'object') {
          if (b.score !== undefined && b.score !== '') {
            scoreB = Number(b.score);
          } else if ((b.pnu || b.code) && _this4.analyzedPnus.has(b.pnu || b.code)) {
            var _analysisData3 = _this4.analyzedPnus.get(b.pnu || b.code);
            if (_analysisData3 && _analysisData3.statistics && _analysisData3.statistics.sum) {
              scoreB = Number(_analysisData3.statistics.sum);
            }
          }
        } else if (typeof b === 'string' && _this4.analyzedPnus.has(b)) {
          var _analysisData4 = _this4.analyzedPnus.get(b);
          if (_analysisData4 && _analysisData4.statistics && _analysisData4.statistics.sum) {
            scoreB = Number(_analysisData4.statistics.sum);
          }
        }

        // NaN 값 처리
        if (isNaN(scoreA)) scoreA = 0;
        if (isNaN(scoreB)) scoreB = 0;

        // 내림차순 정렬 (큰 값이 먼저 오도록)
        return scoreB - scoreA;
      });
    }

    /**
     * 분석 실패한 PNU를 목록 맨 뒤로 이동
     * @param {Array} failedPnus 분석 실패한 PNU 코드 목록
     */
  }, {
    key: "moveFailedPnusToEnd",
    value: function moveFailedPnusToEnd(failedPnus) {
      // 실패한 PNU가 없으면 처리하지 않음
      if (!failedPnus || failedPnus.length === 0) return;

      // 실패한 PNU를 맨 뒤로 이동
      this.pnuList.sort(function (a, b) {
        var codeA = _typeof(a) === 'object' ? a.code || a.pnu : a;
        var codeB = _typeof(b) === 'object' ? b.code || b.pnu : b;
        var isFailedA = failedPnus.includes(codeA);
        var isFailedB = failedPnus.includes(codeB);
        if (isFailedA && !isFailedB) return 1; // a가 실패한 경우 뒤로
        if (!isFailedA && isFailedB) return -1; // b가 실패한 경우 뒤로
        return 0; // 둘 다 실패했거나 둘 다 성공한 경우 현재 순서 유지
      });
    }
  }]);
}();


/***/ }),

/***/ "./src/components/grid/GridContainer.js":
/*!**********************************************!*\
  !*** ./src/components/grid/GridContainer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GridContainer)
/* harmony export */ });
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/eventBus.js */ "./src/utils/eventBus.js");
/* harmony import */ var _core_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/config.js */ "./src/core/config.js");
/* harmony import */ var _IndexSettingComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexSettingComponent.js */ "./src/components/grid/IndexSettingComponent.js");
/* harmony import */ var _AnalysisResultComponent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnalysisResultComponent.js */ "./src/components/grid/AnalysisResultComponent.js");
/* harmony import */ var _services_IsochroneApiService_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/IsochroneApiService.js */ "./src/services/IsochroneApiService.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 그리드 컨테이너 컴포넌트
 * 오른쪽 사이드바에 표시될 입지분석 도구를 관리합니다.
 */






var GridContainer = /*#__PURE__*/function () {
  /**
   * 그리드 컨테이너 컴포넌트 생성
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   */
  function GridContainer(container) {
    _classCallCheck(this, GridContainer);
    this.container = container;
    this.currentData = null;

    // 서브 컴포넌트 참조
    this.indexSettingComponent = null;
    this.analysisResultComponent = null;

    // API 서비스
    this.apiService = new _services_IsochroneApiService_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.init();
    this.setupEventSubscriptions();
  }

  /**
   * 컴포넌트 초기화
   */
  return _createClass(GridContainer, [{
    key: "init",
    value: function init() {
      console.log('그리드 컨테이너 초기화 시작');
      this.renderContainer();
      this.initSubComponents();
      this.attachHeaderButtons();
      console.log('그리드 컨테이너 초기화 완료');
    }

    /**
     * 컨테이너 UI 렌더링
     */
  }, {
    key: "renderContainer",
    value: function renderContainer() {
      this.container.innerHTML = "\n      <div class=\"grid-container\">\n        <div class=\"location-analysis-header\">\n          <div class=\"header-title\">\n            <h4>\uC785\uC9C0 \uBD84\uC11D</h4>\n          </div>\n          <div class=\"header-actions\">\n            <button class=\"btn btn-sm btn-outline-secondary\" id=\"exportResultsBtn\">\n              <i class=\"fas fa-download\"></i> \uB0B4\uBCF4\uB0B4\uAE30\n            </button>\n            <button class=\"btn btn-sm btn-outline-secondary\" id=\"refreshResultsBtn\">\n              <i class=\"fas fa-sync\"></i> \uC0C8\uB85C\uACE0\uCE68\n            </button>\n          </div>\n        </div>\n        \n        <div class=\"location-analysis-content\">\n          <!-- \uD3C9\uAC00 \uC9C0\uC218 \uC124\uC815 \uCEF4\uD3EC\uB10C\uD2B8 \uC601\uC5ED -->\n          <div id=\"indexSettingsContainer\"></div>\n          \n          <!-- \uBD84\uC11D \uACB0\uACFC \uCEF4\uD3EC\uB10C\uD2B8 \uC601\uC5ED -->\n          <div id=\"analysisResultsContainer\"></div>\n        </div>\n      </div>\n    ";
    }

    /**
     * 헤더 버튼 이벤트 연결
     */
  }, {
    key: "attachHeaderButtons",
    value: function attachHeaderButtons() {
      var _document$getElementB,
        _this = this,
        _document$getElementB2;
      // 내보내기 버튼
      (_document$getElementB = document.getElementById('exportResultsBtn')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', function () {
        console.log('분석 결과 내보내기');
        if (_this.analysisResultComponent) {
          _this.analysisResultComponent.exportResults();
        }
      });

      // 새로고침 버튼
      (_document$getElementB2 = document.getElementById('refreshResultsBtn')) === null || _document$getElementB2 === void 0 || _document$getElementB2.addEventListener('click', function () {
        console.log('분석 결과 새로고침');
        if (_this.analysisResultComponent) {
          _this.analysisResultComponent.resetResults();
        }

        // PNU 필터링 이벤트 다시 발행
        if (_this.currentData) {
          _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('pnuFilter.results', _this.currentData);
        }
      });
    }

    /**
     * 서브 컴포넌트 초기화
     */
  }, {
    key: "initSubComponents",
    value: function initSubComponents() {
      var _this2 = this;
      console.log('서브 컴포넌트 초기화 시작');
      console.log('API 서비스 객체:', this.apiService);

      // 평가 지수 설정 컴포넌트 초기화
      var indexSettingsContainer = document.getElementById('indexSettingsContainer');
      if (indexSettingsContainer) {
        console.log('indexSettingsContainer 찾음, 컴포넌트 초기화');
        this.indexSettingComponent = new _IndexSettingComponent_js__WEBPACK_IMPORTED_MODULE_2__["default"](indexSettingsContainer, this.apiService // API 서비스 전달
        );
        console.log('IndexSettingComponent 초기화 완료');
      } else {
        console.error('indexSettingsContainer를 찾을 수 없습니다');
      }

      // 분석 결과 컴포넌트 초기화
      var analysisResultsContainer = document.getElementById('analysisResultsContainer');
      if (analysisResultsContainer) {
        this.analysisResultComponent = new _AnalysisResultComponent_js__WEBPACK_IMPORTED_MODULE_3__["default"](analysisResultsContainer, function (pnuId, isChecked) {
          return _this2.handlePnuToggle(pnuId, isChecked);
        }, function (pnu) {
          return _this2.handlePnuSelect(pnu);
        }, this.apiService // API 서비스 전달
        );
      } else {
        console.error('analysisResultsContainer를 찾을 수 없습니다');
      }
      console.log('서브 컴포넌트 초기화 완료');
    }

    /**
     * 이벤트 구독 설정
     */
  }, {
    key: "setupEventSubscriptions",
    value: function setupEventSubscriptions() {
      var _this3 = this;
      // PNU 필터링 결과 구독
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('pnuFilter.results', function (data) {
        _this3.handleFilteredPnu(data);
      });

      // 분석 완료 이벤트 구독
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('analysis.complete', function (data) {
        _this3.handleAnalysisComplete(data);
      });

      // 분석 결과 이벤트 구독
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('analysis.results', function (data) {
        _this3.handleAnalysisResults(data);
      });

      // 샘플 PNU 요청 이벤트 구독 (테스트용)
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('pnu.getSample', function () {
        console.log('샘플 PNU 데이터 요청 수신');
        _this3.provideSamplePnuData();
      });
    }

    /**
     * 테스트용 샘플 PNU 데이터 제공
     */
  }, {
    key: "provideSamplePnuData",
    value: function provideSamplePnuData() {
      console.log('테스트용 샘플 PNU 데이터 생성 및 발행');

      // 샘플 PNU 데이터 생성
      var samplePnuList = [{
        pnu: '1111010100',
        value: 150,
        analyzed: false
      }, {
        pnu: '1111010200',
        value: 250,
        analyzed: false
      }, {
        pnu: '1111010300',
        value: 350,
        analyzed: false
      }, {
        pnu: '1111010400',
        value: 450,
        analyzed: false
      }, {
        pnu: '1111010500',
        value: 550,
        analyzed: false
      }];

      // PNU 필터링 결과 이벤트로 발행
      console.log('샘플 PNU 데이터 이벤트 발행');
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('pnuFilter.results', {
        pnuList: samplePnuList
      });
    }

    /**
     * PNU 토글 상태 변경 핸들러
     * @param {string} pnuId PNU ID
     * @param {boolean} isChecked 체크 상태
     */
  }, {
    key: "handlePnuToggle",
    value: function handlePnuToggle(pnuId, isChecked) {
      console.log("PNU ".concat(pnuId, " \uD1A0\uAE00 \uBCC0\uACBD: ").concat(isChecked));

      // PNU 토글 상태 변경에 따른 지도 업데이트 이벤트 발행
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('pnu.toggled', {
        pnu: pnuId,
        visible: isChecked
      });
    }

    /**
     * PNU 선택 핸들러
     * @param {string} pnu 선택된 PNU
     */
  }, {
    key: "handlePnuSelect",
    value: function handlePnuSelect(pnu) {
      console.log("PNU ".concat(pnu, " \uC120\uD0DD\uB428"));

      // PNU 선택 이벤트 발행
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('pnu.selected', {
        pnu: pnu
      });
    }

    /**
     * PNU 필터링 결과 처리
     * @param {Object} data PNU 데이터
     */
  }, {
    key: "handleFilteredPnu",
    value: function handleFilteredPnu(data) {
      console.log('PNU 필터링 결과 (GridContainer):', data);
      console.log('데이터 타입:', _typeof(data));

      // 데이터 구조 검증
      if (!data) {
        console.error('PNU 필터링 결과가 null 또는 undefined입니다.');
        return;
      }

      // 데이터 구조 파악
      if (Array.isArray(data)) {
        console.log('데이터가 배열 형식입니다. 길이:', data.length);
      } else if (_typeof(data) === 'object') {
        console.log('데이터가 객체 형식입니다.');
        if (data.pnuList) {
          console.log('pnuList 필드 존재, 길이:', data.pnuList.length);
        } else {
          console.log('pnuList 필드가 없습니다. 사용 가능한 필드:', Object.keys(data));
        }
      }
      this.currentData = data;

      // 분석 결과 컴포넌트에 PNU 목록 전달
      if (this.analysisResultComponent) {
        console.log('AnalysisResultComponent.setPnuList() 호출 전');
        this.analysisResultComponent.setPnuList(data);
        console.log('AnalysisResultComponent.setPnuList() 호출 후');
      } else {
        console.error('analysisResultComponent가 초기화되지 않았습니다.');
      }
    }

    /**
     * 분석 완료 이벤트 처리
     * @param {Object} data 분석 완료 데이터
     */
  }, {
    key: "handleAnalysisComplete",
    value: function handleAnalysisComplete(data) {
      console.log('분석 완료:', data);

      // 분석 완료 시 지도에 표시 이벤트 발행
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('isochrone.show', {
        pnu: data.pnu
      });
    }

    /**
     * 분석 결과 이벤트 처리
     * @param {Object} data 분석 결과 데이터
     */
  }, {
    key: "handleAnalysisResults",
    value: function handleAnalysisResults(data) {
      console.log('분석 결과 수신:', data);

      // 필요한 경우 추가 처리
      // 예: 차트 업데이트, 데이터 가공 등
    }
  }]);
}();


/***/ }),

/***/ "./src/components/grid/IndexSettingComponent.js":
/*!******************************************************!*\
  !*** ./src/components/grid/IndexSettingComponent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexSettingComponent)
/* harmony export */ });
/* harmony import */ var _services_IsochroneApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/IsochroneApiService.js */ "./src/services/IsochroneApiService.js");
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/eventBus.js */ "./src/utils/eventBus.js");
/* harmony import */ var _core_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/config.js */ "./src/core/config.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 평가 지수 설정 컴포넌트
 * 아이소크론맵 기반 평가 지수 설정을 관리합니다.
 */




var IndexSettingComponent = /*#__PURE__*/function () {
  /**
   * 평가 지수 설정 컴포넌트 생성
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   * @param {IsochroneApiService} apiService API 서비스 인스턴스
   */
  function IndexSettingComponent(container, apiService) {
    _classCallCheck(this, IndexSettingComponent);
    this.container = container;

    // API 서비스 확인 및 설정
    if (!apiService) {
      console.warn('API 서비스가 전달되지 않아 새로 생성합니다');
      this.apiService = new _services_IsochroneApiService_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    } else {
      this.apiService = apiService;
    }

    // API 메서드 디버깅 로그
    console.log('IndexSettingComponent - API 서비스 설정됨:', this.apiService);
    console.log('getGridTables 메서드 존재 여부:', !!this.apiService.getGridTables);
    console.log('getTableColumns 메서드 존재 여부:', !!this.apiService.getTableColumns);

    // IsochroneApiService에 필요한 메서드가 없는 경우 대체 메서드 구현
    if (typeof this.apiService.getGridTables !== 'function') {
      console.warn('getGridTables 메서드가 없어 대체 메서드를 사용합니다');
      this.apiService.getGridTables = this.fallbackGetGridTables.bind(this);
    }
    if (typeof this.apiService.getTableColumns !== 'function') {
      console.warn('getTableColumns 메서드가 없어 대체 메서드를 사용합니다');
      this.apiService.getTableColumns = this.fallbackGetTableColumns.bind(this);
    }
    this.settings = [];
    this.nextIndex = 1;
    this.tables = []; // 테이블 목록
    this.columns = []; // 현재 선택된 테이블의 컬럼 목록

    this.init();
  }

  /**
   * 대체 테이블 목록 조회 메서드
   * @returns {Promise<object>} 테이블 목록
   */
  return _createClass(IndexSettingComponent, [{
    key: "fallbackGetGridTables",
    value: (function () {
      var _fallbackGetGridTables = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var baseUrl, url, response, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log('대체 getGridTables 메서드 실행');
              _context.prev = 1;
              baseUrl = _core_config_js__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL;
              url = "".concat(baseUrl, "/isochrone/grid-tables");
              console.log("\uD14C\uC774\uBE14 \uBAA9\uB85D API \uC694\uCCAD: ".concat(url));
              _context.next = 7;
              return fetch(url);
            case 7:
              response = _context.sent;
              if (response.ok) {
                _context.next = 10;
                break;
              }
              throw new Error("API \uC624\uB958 (".concat(response.status, "): ").concat(response.statusText));
            case 10:
              _context.next = 12;
              return response.json();
            case 12:
              data = _context.sent;
              console.log('테이블 목록 API 응답:', data);
              return _context.abrupt("return", data);
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](1);
              console.error('대체 테이블 목록 API 요청 실패:', _context.t0);
              throw _context.t0;
            case 21:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 17]]);
      }));
      function fallbackGetGridTables() {
        return _fallbackGetGridTables.apply(this, arguments);
      }
      return fallbackGetGridTables;
    }()
    /**
     * 대체 테이블 컬럼 조회 메서드
     * @param {string} tableName 테이블 이름
     * @returns {Promise<object>} 컬럼 목록
     */
    )
  }, {
    key: "fallbackGetTableColumns",
    value: (function () {
      var _fallbackGetTableColumns = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(tableName) {
        var baseUrl, url, response, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              console.log("\uB300\uCCB4 getTableColumns \uBA54\uC11C\uB4DC \uC2E4\uD589: ".concat(tableName));
              _context2.prev = 1;
              baseUrl = _core_config_js__WEBPACK_IMPORTED_MODULE_2__.API_CONFIG.BASE_URL;
              url = "".concat(baseUrl, "/isochrone/columns/").concat(encodeURIComponent(tableName));
              console.log("\uCEEC\uB7FC \uBAA9\uB85D API \uC694\uCCAD: ".concat(url));
              _context2.next = 7;
              return fetch(url);
            case 7:
              response = _context2.sent;
              if (response.ok) {
                _context2.next = 10;
                break;
              }
              throw new Error("API \uC624\uB958 (".concat(response.status, "): ").concat(response.statusText));
            case 10:
              _context2.next = 12;
              return response.json();
            case 12:
              data = _context2.sent;
              console.log('컬럼 목록 API 응답:', data);
              return _context2.abrupt("return", data);
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](1);
              console.error("\uB300\uCCB4 \uCEEC\uB7FC \uBAA9\uB85D API \uC694\uCCAD \uC2E4\uD328 (".concat(tableName, "):"), _context2.t0);
              throw _context2.t0;
            case 21:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 17]]);
      }));
      function fallbackGetTableColumns(_x) {
        return _fallbackGetTableColumns.apply(this, arguments);
      }
      return fallbackGetTableColumns;
    }()
    /**
     * 컴포넌트 초기화
     */
    )
  }, {
    key: "init",
    value: (function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.render();
              this.attachEventListeners();
              _context3.next = 4;
              return this.loadGridTables();
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
    /**
     * 그리드 테이블 목록 로드
     */
    )
  }, {
    key: "loadGridTables",
    value: (function () {
      var _loadGridTables = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              console.log('테이블 목록 로드 시작');
              if (this.apiService) {
                _context4.next = 4;
                break;
              }
              throw new Error('API 서비스가 초기화되지 않았습니다');
            case 4:
              // API 객체 검사 및 디버깅
              console.log('API 객체 타입:', _typeof(this.apiService));
              console.log('API 객체 메서드 목록:', Object.getOwnPropertyNames(Object.getPrototypeOf(this.apiService)));

              // API 요청하여 테이블 목록 가져오기
              _context4.next = 8;
              return this.apiService.getGridTables();
            case 8:
              response = _context4.sent;
              console.log('API 응답 데이터:', response);

              // API 응답 구조 확인 및 처리
              if (response.data && Array.isArray(response.data)) {
                // 데이터가 문자열 배열인 경우 객체 배열로 변환
                if (typeof response.data[0] === 'string') {
                  this.tables = response.data.map(function (tableName) {
                    return {
                      id: tableName,
                      name: tableName
                    };
                  });
                } else {
                  this.tables = response.data;
                }
              } else if (Array.isArray(response)) {
                // 응답 자체가 배열인 경우
                if (typeof response[0] === 'string') {
                  this.tables = response.map(function (tableName) {
                    return {
                      id: tableName,
                      name: tableName
                    };
                  });
                } else {
                  this.tables = response;
                }
              } else if (response.success && response.data) {
                // success 필드가 있는 응답 형식
                if (Array.isArray(response.data)) {
                  if (typeof response.data[0] === 'string') {
                    this.tables = response.data.map(function (tableName) {
                      return {
                        id: tableName,
                        name: tableName
                      };
                    });
                  } else {
                    this.tables = response.data;
                  }
                } else {
                  this.tables = [];
                }
              } else {
                // 응답이 예상 형식이 아닌 경우 빈 배열로 초기화
                console.warn('API 응답이 예상 형식이 아닙니다:', response);
                this.tables = [];
              }
              console.log('처리된 테이블 목록:', this.tables);
              this.updateTableOptions();
              _context4.next = 21;
              break;
            case 15:
              _context4.prev = 15;
              _context4.t0 = _context4["catch"](0);
              console.error('테이블 목록 로드 실패:', _context4.t0);

              // 하드코딩된 예시 데이터 (API 오류 시 테스트용)
              this.tables = [{
                id: 'grid_population',
                name: '인구 그리드 (예시)'
              }, {
                id: 'grid_income',
                name: '소득 그리드 (예시)'
              }, {
                id: 'grid_schools',
                name: '학교 그리드 (예시)'
              }, {
                id: 'grid_gangnam_pop_100m_12',
                name: '강남 인구 그리드 (예시)'
              }];
              console.log('오류로 인해 예시 데이터 사용:', this.tables);
              this.updateTableOptions();
            case 21:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 15]]);
      }));
      function loadGridTables() {
        return _loadGridTables.apply(this, arguments);
      }
      return loadGridTables;
    }()
    /**
     * 테이블 선택 옵션 업데이트
     */
    )
  }, {
    key: "updateTableOptions",
    value: function updateTableOptions() {
      var tableSelect = this.container.querySelector('#gridTable');
      if (!tableSelect) return;

      // 배열 체크 추가
      if (!Array.isArray(this.tables) || this.tables.length === 0) {
        console.error('테이블 목록이 비어있거나 배열이 아닙니다:', this.tables);
        // 기본 옵션 유지 (실제 API가 동작할 때는 주석 처리)
        return;
      }

      // 기본 옵션은 유지
      var html = '<option value="">선택...</option>';

      // 테이블 목록 추가
      this.tables.forEach(function (table) {
        console.log('테이블 추가:', table);
        html += "<option value=\"".concat(table.id || table.name, "\">").concat(table.name || table.id, "</option>");
      });
      tableSelect.innerHTML = html;
    }

    /**
     * 선택된 테이블의 컬럼 목록 로드
     * @param {string} tableName 테이블 이름
     */
  }, {
    key: "loadTableColumns",
    value: (function () {
      var _loadTableColumns = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(tableName) {
        var response, isNumericType;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return this.apiService.getTableColumns(tableName);
            case 3:
              response = _context5.sent;
              console.log('컬럼 API 응답:', response);

              // 숫자형 데이터 타입인지 확인하는 함수
              isNumericType = function isNumericType(column) {
                if (column.type_category === "number") return true;
                var numericTypes = ["integer", "numeric", "decimal", "float", "double", "real", "bigint", "smallint"];
                return numericTypes.includes(column.data_type.toLowerCase());
              }; // API 응답 구조 확인 및 처리
              if (response.success && Array.isArray(response.data)) {
                // 숫자형 데이터 타입의 컬럼만 필터링
                this.columns = response.data.filter(isNumericType).map(function (column) {
                  return {
                    id: column.column_name,
                    name: column.column_name,
                    dataType: column.data_type,
                    typeCategory: column.type_category
                  };
                });
              } else if (Array.isArray(response)) {
                // 응답 자체가 배열인 경우 (필드 이름이 다를 수 있음)
                this.columns = response.filter(function (column) {
                  // column 객체의 구조를 확인하고 적절한 필드 사용
                  if (column.column_name && (column.data_type || column.type)) {
                    return isNumericType({
                      type_category: column.type_category || "",
                      data_type: column.data_type || column.type || ""
                    });
                  }
                  return false;
                }).map(function (column) {
                  return {
                    id: column.column_name || column.name,
                    name: column.column_name || column.name,
                    dataType: column.data_type || column.type,
                    typeCategory: column.type_category || ""
                  };
                });
              } else {
                console.warn('API 응답이 예상 형식이 아닙니다:', response);
                this.columns = [];
              }
              console.log('처리된 컬럼 목록 (숫자형만):', this.columns);
              if (this.columns.length === 0) {
                console.warn('선택 가능한 숫자형 컬럼이 없습니다.');
              }
              this.updateColumnOptions();
              _context5.next = 17;
              break;
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](0);
              console.error("".concat(tableName, " \uD14C\uC774\uBE14\uC758 \uCEEC\uB7FC \uB85C\uB4DC \uC2E4\uD328:"), _context5.t0);
              this.columns = [];
              this.updateColumnOptions();
            case 17:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 12]]);
      }));
      function loadTableColumns(_x2) {
        return _loadTableColumns.apply(this, arguments);
      }
      return loadTableColumns;
    }()
    /**
     * 컬럼 선택 옵션 업데이트
     */
    )
  }, {
    key: "updateColumnOptions",
    value: function updateColumnOptions() {
      var columnSelect = this.container.querySelector('#columnName');
      if (!columnSelect) return;

      // 기본 옵션은 유지
      var html = '<option value="">선택...</option>';

      // 컬럼 목록 추가
      this.columns.forEach(function (column) {
        html += "<option value=\"".concat(column.id || column.name, "\">").concat(column.name || column.id, "</option>");
      });
      columnSelect.innerHTML = html;
    }

    /**
     * 컴포넌트 렌더링
     */
  }, {
    key: "render",
    value: function render() {
      this.container.innerHTML = "\n      <div class=\"index-settings-container\">\n        <div class=\"index-settings-form\">\n          <div class=\"settings-row\">\n            <div class=\"setting-item time-range-group\">\n              <label>\uC774\uB3D9\uC2DC\uAC04</label>\n              <div class=\"time-range-selector\">\n                <button class=\"time-option\" data-value=\"5\">5</button>\n                <button class=\"time-option\" data-value=\"10\">10</button>\n                <button class=\"time-option active\" data-value=\"15\">15</button>\n                <button class=\"time-option\" data-value=\"30\">30</button>\n                <button class=\"time-option\" data-value=\"45\">45</button>\n                <button class=\"time-option\" data-value=\"60\">60</button>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"settings-row table-column-row\">\n            <div class=\"setting-item flex-grow\">\n              <label>\uD14C\uC774\uBE14</label>\n              <select id=\"gridTable\" class=\"form-control form-control-sm\">\n                <option value=\"\">\uC120\uD0DD...</option>\n              </select>\n            </div>\n            \n            <div class=\"setting-item flex-grow\">\n              <label>\uCEEC\uB7FC</label>\n              <select id=\"columnName\" class=\"form-control form-control-sm\">\n                <option value=\"\">\uC120\uD0DD...</option>\n              </select>\n            </div>\n            \n            <div class=\"setting-item add-index-btn-container\">\n              <button class=\"btn btn-sm btn-outline-secondary add-index-btn\" id=\"addIndexBtn\" title=\"\uD3C9\uAC00 \uC9C0\uC218 \uCD94\uAC00\">\n                <i class=\"fas fa-plus\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"index-settings-list\" id=\"indexSettingsList\">\n          <!-- \uB3D9\uC801\uC73C\uB85C \uC0DD\uC131\uB429\uB2C8\uB2E4 -->\n        </div>\n      </div>\n    ";
    }

    /**
     * 이벤트 리스너 연결
     */
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _this = this,
        _this$container$query;
      // 이동시간 선택 버튼 이벤트
      this.container.querySelectorAll('.time-option').forEach(function (button) {
        button.addEventListener('click', function (e) {
          // 모든 버튼에서 active 클래스 제거
          _this.container.querySelectorAll('.time-option').forEach(function (btn) {
            btn.classList.remove('active');
          });

          // 클릭된 버튼에 active 클래스 추가
          e.target.classList.add('active');
          console.log('이동시간 선택:', e.target.dataset.value);
        });
      });

      // 테이블 선택 이벤트 - 컬럼 로드
      var tableSelect = this.container.querySelector('#gridTable');
      if (tableSelect) {
        tableSelect.addEventListener('change', function (e) {
          var tableName = e.target.value;
          if (tableName) {
            _this.loadTableColumns(tableName);
          } else {
            // 테이블을 선택하지 않았을 때는 컬럼 목록 초기화
            _this.columns = [];
            _this.updateColumnOptions();
          }
        });
      }

      // 평가 지수 추가 버튼 이벤트
      (_this$container$query = this.container.querySelector('#addIndexBtn')) === null || _this$container$query === void 0 || _this$container$query.addEventListener('click', function () {
        _this.addNewIndex();
      });

      // 초기 데이터를 추가한 후 이벤트 리스너 등록
      this.updateIndexList();
    }

    /**
     * 신규 평가 지수 추가
     */
  }, {
    key: "addNewIndex",
    value: function addNewIndex() {
      var timeElement = this.container.querySelector('.time-option.active');
      var tableElement = this.container.querySelector('#gridTable');
      var columnElement = this.container.querySelector('#columnName');
      if (!timeElement || !tableElement.value || !columnElement.value) {
        alert('모든 값을 선택해주세요.');
        return;
      }
      var timeValue = timeElement.dataset.value;
      var tableValue = tableElement.value;
      var tableName = tableElement.options[tableElement.selectedIndex].text;
      var columnValue = columnElement.value;
      var columnName = columnElement.options[columnElement.selectedIndex].text;

      // 새 설정 추가
      this.settings.push({
        id: Date.now(),
        index: this.nextIndex,
        name: "\uC9C0\uC218 ".concat(this.nextIndex),
        time: timeValue,
        table: tableValue,
        tableName: tableName,
        column: columnValue,
        columnName: columnName
      });
      this.nextIndex++;

      // 인덱스 목록 업데이트
      this.updateIndexList();

      // 이벤트 발행: 평가 지수 변경
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('indexSettings.updated', this.getSettings());
      console.log('평가 지수 추가:', this.settings[this.settings.length - 1]);
    }

    /**
     * 평가 지수 목록 업데이트
     */
  }, {
    key: "updateIndexList",
    value: function updateIndexList() {
      var _this2 = this;
      var listContainer = this.container.querySelector('#indexSettingsList');

      // 목록이 비어있는 경우 처리
      if (this.settings.length === 0) {
        listContainer.innerHTML = "\n        <div class=\"empty-settings-message\">\n          \uC544\uC9C1 \uCD94\uAC00\uB41C \uD3C9\uAC00 \uC9C0\uC218\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.\n        </div>\n      ";
        return;
      }

      // 설정 목록 생성
      var html = '';
      this.settings.forEach(function (setting) {
        html += "\n        <div class=\"index-setting-item\" data-id=\"".concat(setting.id, "\">\n          <div class=\"setting-index-name\" data-index=\"").concat(setting.index, "\" title=\"\uB354\uBE14\uD074\uB9AD\uD558\uC5EC \uC774\uB984 \uBCC0\uACBD\">").concat(setting.name, "</div>\n          <div class=\"setting-badges\">\n            <span class=\"setting-badge\">").concat(setting.time, "\uBD84</span>\n            <span class=\"setting-badge\">").concat(setting.tableName, "</span>\n            <span class=\"setting-badge\">").concat(setting.columnName, "</span>\n          </div>\n          <button class=\"btn btn-sm btn-outline-danger remove-setting-btn\">\n            <i class=\"fas fa-times\"></i>\n          </button>\n        </div>\n      ");
      });
      listContainer.innerHTML = html;

      // 평가 지수 이름 더블클릭 이벤트 (이름 변경)
      this.container.querySelectorAll('.setting-index-name').forEach(function (element) {
        element.addEventListener('dblclick', function (e) {
          var currentName = e.target.textContent;
          var newName = prompt('평가 지수 이름을 입력하세요:', currentName);
          if (newName !== null && newName.trim() !== '') {
            // UI 업데이트
            e.target.textContent = newName;

            // 데이터 업데이트
            var id = e.target.closest('.index-setting-item').dataset.id;
            var setting = _this2.settings.find(function (s) {
              return s.id == id;
            });
            if (setting) {
              setting.name = newName;

              // 이벤트 발행: 평가 지수 변경
              _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('indexSettings.updated', _this2.getSettings());
            }
            console.log("\uD3C9\uAC00 \uC9C0\uC218 \uC774\uB984 \uBCC0\uACBD: ".concat(currentName, " -> ").concat(newName));
          }
        });
      });

      // 평가 지수 삭제 버튼 이벤트
      this.container.querySelectorAll('.remove-setting-btn').forEach(function (button) {
        button.addEventListener('click', function (e) {
          var itemElement = e.target.closest('.index-setting-item');
          var id = itemElement.dataset.id;
          var setting = _this2.settings.find(function (s) {
            return s.id == id;
          });
          if (confirm("\"".concat((setting === null || setting === void 0 ? void 0 : setting.name) || '이 평가 지수', "\"\uB97C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"))) {
            // UI에서 삭제
            itemElement.remove();

            // 데이터에서 삭제
            _this2.settings = _this2.settings.filter(function (s) {
              return s.id != id;
            });

            // 목록이 비어있는 경우 빈 메시지 표시
            if (_this2.settings.length === 0) {
              _this2.updateIndexList();
            }

            // 이벤트 발행: 평가 지수 변경
            _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('indexSettings.updated', _this2.getSettings());
            console.log("\uD3C9\uAC00 \uC9C0\uC218 \uC0AD\uC81C: ".concat(setting === null || setting === void 0 ? void 0 : setting.name));
          }
        });
      });
    }

    /**
     * 현재 설정 가져오기
     * @returns {Array} 현재 설정 목록
     */
  }, {
    key: "getSettings",
    value: function getSettings() {
      return _toConsumableArray(this.settings);
    }
  }]);
}();


/***/ }),

/***/ "./src/components/grid/analysis/AnalysisResultEventsHandler.js":
/*!*********************************************************************!*\
  !*** ./src/components/grid/analysis/AnalysisResultEventsHandler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnalysisResultEventsHandler)
/* harmony export */ });
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/eventBus.js */ "./src/utils/eventBus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 분석 결과 이벤트 핸들러 모듈
 * 아이소크론맵 분석 결과 컴포넌트의 이벤트 처리를 담당합니다.
 */

var AnalysisResultEventsHandler = /*#__PURE__*/function () {
  /**
   * 생성자
   * @param {Object} component 메인 컴포넌트 인스턴스
   */
  function AnalysisResultEventsHandler(component) {
    _classCallCheck(this, AnalysisResultEventsHandler);
    this.component = component;
  }

  /**
   * 토글 입력 이벤트 리스너 업데이트
   */
  return _createClass(AnalysisResultEventsHandler, [{
    key: "updatePnuToggles",
    value: function updatePnuToggles() {
      var _this = this;
      // PNU 목록이 비어있으면 스킵
      if (!this.component.pnuList || this.component.pnuList.length === 0) {
        return;
      }

      // 각 토글에 이벤트 리스너 추가
      this.component.container.querySelectorAll('.toggle-input').forEach(function (toggle) {
        toggle.addEventListener('change', /*#__PURE__*/function () {
          var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
            var pnuId, isChecked, pnuCode, pnuItem;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  pnuId = e.target.id;
                  isChecked = e.target.checked;
                  console.log('토글 변경:', pnuId, isChecked);

                  // 토글 ID에서 PNU 코드 추출 
                  // (toggle-{pnuCode} 또는 다른 형식일 수 있으므로 부모 요소의 data-pnu 속성도 확인)
                  pnuCode = null;
                  if (pnuId && pnuId.startsWith('toggle-')) {
                    // toggle-{pnuCode} 형식의 경우
                    pnuCode = pnuId.replace('toggle-', '');
                  } else {
                    // 부모 요소의 data-pnu 속성 확인
                    pnuItem = e.target.closest('[data-pnu]');
                    if (pnuItem) {
                      pnuCode = pnuItem.getAttribute('data-pnu');
                    }
                  }
                  console.log('추출된 PNU 코드:', pnuCode);
                  if (!pnuCode) {
                    _context.next = 20;
                    break;
                  }
                  _context.prev = 7;
                  console.log("PNU ".concat(pnuCode, " \uD1A0\uAE00 \uCC98\uB9AC \uC2DC\uC791 (").concat(isChecked ? '활성화' : '비활성화', ")"));
                  _context.next = 11;
                  return _this.component.togglePnu(pnuCode, isChecked);
                case 11:
                  console.log("PNU ".concat(pnuCode, " \uD1A0\uAE00 \uCC98\uB9AC \uC644\uB8CC"));
                  _context.next = 18;
                  break;
                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](7);
                  console.error("PNU ".concat(pnuCode, " \uD1A0\uAE00 \uCC98\uB9AC \uC2E4\uD328:"), _context.t0);
                  // 실패 시 토글 상태 원복
                  e.target.checked = !isChecked;
                case 18:
                  _context.next = 21;
                  break;
                case 20:
                  console.error('토글 이벤트에서 PNU 코드를 찾을 수 없습니다:', e.target);
                case 21:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[7, 14]]);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    }

    /**
     * 이벤트 리스너 연결
     */
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      this.updatePnuToggles();
      this.updateExportButton();
      this.updatePnuSelectListener();
      this.updateRankingButton();
      this.updateToggleStatsButton();
    }

    /**
     * 다운로드 버튼 이벤트 리스너 연결
     */
  }, {
    key: "updateExportButton",
    value: function updateExportButton() {
      var _this2 = this;
      var exportButton = this.component.container.querySelector('#exportResults');
      if (exportButton) {
        exportButton.addEventListener('click', function () {
          _this2.exportResults();
        });
      }
    }

    /**
     * PNU 선택 이벤트 리스너 연결
     */
  }, {
    key: "updatePnuSelectListener",
    value: function updatePnuSelectListener() {
      var _this3 = this;
      // PNU 선택 이벤트 리스너 추가
      this.component.container.querySelectorAll('.pnu-item').forEach(function (item) {
        item.addEventListener('click', function (e) {
          // 토글 스위치가 클릭된 경우 이벤트 중단
          if (e.target.closest('.toggle-switch')) {
            return;
          }
          var pnuId = item.getAttribute('data-pnu');
          if (pnuId) {
            // 선택된 PNU 저장
            _this3.component.selectedPnu = pnuId;

            // 모든 아이템에서 선택 클래스 제거
            _this3.component.container.querySelectorAll('.pnu-item').forEach(function (el) {
              el.classList.remove('selected');
            });

            // 현재 아이템에 선택 클래스 추가
            item.classList.add('selected');

            // 선택 콜백 호출
            if (typeof _this3.component.onPnuSelect === 'function') {
              var pnuIndex = _this3.component.pnuList.findIndex(function (p) {
                if (_typeof(p) === 'object') {
                  return p.pnu === pnuId || p.code === pnuId;
                } else {
                  return p === pnuId;
                }
              });
              if (pnuIndex !== -1) {
                _this3.component.onPnuSelect(_this3.component.pnuList[pnuIndex]);
              } else {
                _this3.component.onPnuSelect({
                  pnu: pnuId,
                  code: pnuId
                });
              }
            }
          }
        });
      });
    }

    /**
     * 분석 결과 내보내기
     */
  }, {
    key: "exportResults",
    value: function exportResults() {
      var _this4 = this;
      if (!this.component.pnuList || this.component.pnuList.length === 0) {
        alert('내보낼 데이터가 없습니다.');
        return;
      }

      // CSV 파일로 내보내기
      var csvContent = "data:text/csv;charset=utf-8,\uFEFF" + '순위,PNU,값,점수\n' + this.component.pnuList.map(function (pnu, index) {
        var pnuCode = _typeof(pnu) === 'object' ? pnu.code || pnu.pnu : pnu;
        var pnuValue = _typeof(pnu) === 'object' ? pnu.value !== undefined ? pnu.value : '' : '';

        // 점수 정보 가져오기
        var scoreValue = '';
        if (_typeof(pnu) === 'object' && pnu.score) {
          scoreValue = pnu.score;
        } else if (_this4.component.analyzedPnus.has(pnuCode)) {
          var analysisData = _this4.component.analyzedPnus.get(pnuCode);
          if (analysisData && analysisData.statistics && analysisData.statistics.sum) {
            scoreValue = analysisData.statistics.sum;
          }
        }
        return "".concat(index + 1, ",").concat(pnuCode, ",").concat(pnuValue, ",").concat(scoreValue);
      }).join('\n');
      var encodedUri = encodeURI(csvContent);
      var link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', "analysis_results_".concat(new Date().toISOString().slice(0, 10), ".csv"));
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    /**
     * 순위 계산 버튼 이벤트 리스너 연결
     */
  }, {
    key: "updateRankingButton",
    value: function updateRankingButton() {
      var _this5 = this;
      var rankingButton = this.component.container.querySelector('#calculateRankingBtn');
      if (rankingButton) {
        rankingButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this5.component.isAnalyzing) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                if (!confirm('모든 PNU에 대한 분석을 실행하고 순위를 계산합니다.\n이 작업은 PNU 수에 따라 다소 시간이 소요될 수 있습니다.\n계속하시겠습니까?')) {
                  _context2.next = 12;
                  break;
                }
                _context2.prev = 3;
                _context2.next = 6;
                return _this5.component.calculateRankings();
              case 6:
                _context2.next = 12;
                break;
              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](3);
                console.error('순위 계산 실행 중 오류 발생:', _context2.t0);
                alert("\uC21C\uC704 \uACC4\uC0B0 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ".concat(_context2.t0.message));
              case 12:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[3, 8]]);
        })));
      }
    }

    /**
     * 통계 토글 버튼 이벤트 리스너 연결
     */
  }, {
    key: "updateToggleStatsButton",
    value: function updateToggleStatsButton() {
      var _this6 = this;
      var toggleStatsButton = this.component.container.querySelector('#toggleStatsBtn');
      if (toggleStatsButton) {
        toggleStatsButton.addEventListener('click', function () {
          var statsSection = _this6.component.container.querySelector('.analysis-stats');
          if (statsSection) {
            var isVisible = statsSection.style.display !== 'none';
            statsSection.style.display = isVisible ? 'none' : 'block';

            // 버튼 아이콘과 텍스트 변경
            toggleStatsButton.innerHTML = isVisible ? '<i class="fas fa-chevron-down"></i> 통계 요약 보기' : '<i class="fas fa-chevron-up"></i> 통계 요약 숨기기';
          }
        });
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/components/grid/analysis/AnalysisResultRenderer.js":
/*!****************************************************************!*\
  !*** ./src/components/grid/analysis/AnalysisResultRenderer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnalysisResultRenderer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 분석 결과 렌더링 모듈
 * 아이소크론맵 분석 결과를 렌더링하는 기능을 담당합니다.
 */
var AnalysisResultRenderer = /*#__PURE__*/function () {
  /**
   * 생성자
   * @param {Object} component 메인 컴포넌트 인스턴스
   */
  function AnalysisResultRenderer(component) {
    _classCallCheck(this, AnalysisResultRenderer);
    this.component = component;
  }

  /**
   * 전체 HTML 생성
   * @returns {string} 분석 결과 컴포넌트 HTML
   */
  return _createClass(AnalysisResultRenderer, [{
    key: "generateHtml",
    value: function generateHtml() {
      return "\n      <div class=\"analysis-results-container\">\n        <div class=\"analysis-info\">\n          <h5>\uBD84\uC11D \uC815\uBCF4</h5>\n          <div id=\"analysisParamsInfo\" class=\"analysis-params-info\">\n            ".concat(this.getAnalysisParamsHtml(), "\n          </div>\n          \n          ").concat(this.component.pnuList.length > 0 && this.component.indexSettings.length > 0 ? "\n            <div class=\"analyze-actions\">\n              <button class=\"btn btn-sm btn-outline-secondary export-btn\" id=\"exportBtn\" title=\"\uACB0\uACFC \uB0B4\uBCF4\uB0B4\uAE30\">\n                <i class=\"fas fa-download\"></i> \uB0B4\uBCF4\uB0B4\uAE30\n              </button>\n            </div>\n          " : '', "\n        </div>\n\n        ").concat(this.component.pnuList.length > 0 && this.component.indexSettings.length > 0 ? "\n          <div class=\"ranking-actions\">\n            <button class=\"btn btn-primary calculate-ranking-btn\" id=\"calculateRankingBtn\" \n              ".concat(this.component.isAnalyzing ? 'disabled' : '', ">\n              ").concat(this.component.isAnalyzing ? '<i class="fas fa-spinner fa-spin"></i> 분석 중...' : '<i class="fas fa-sort-amount-down"></i> 순위 계산하기', "\n            </button>\n            ").concat(this.component.pnuRankingCalculated ? '<div class="ranking-status"><i class="fas fa-check-circle"></i> 순위 계산 완료</div>' : '', "\n          </div>\n        ") : '', "\n\n        <div class=\"pnu-toggle-list\">\n          <div class=\"pnu-toggle-header\">\n            <span class=\"pnu-header-title\">PNU \uBAA9\uB85D</span>\n            <span class=\"pnu-header-count\">(\uCD1D ").concat(this.component.pnuList.length, "\uAC1C)</span>\n          </div>\n          <div class=\"pnu-toggle-body\" id=\"pnuToggleList\">\n            ").concat(this.getPnuListHtml(), "\n          </div>\n        </div>\n        \n        <div class=\"result-comparison\">\n          <h5>\uBD84\uC11D \uACB0\uACFC \uCC28\uD2B8</h5>\n          <div class=\"comparison-chart\">\n            <div class=\"placeholder-chart\" id=\"resultChart\">\n              ").concat(this.component.pnuList.length > 0 ? '선택된 PNU의 분석 결과 차트가 여기에 표시됩니다.' : '분석을 실행하여 결과를 확인하세요.', "\n            </div>\n          </div>\n        </div>\n        \n        <div class=\"statistics-toggle\">\n          <button class=\"btn btn-sm btn-outline-secondary\" id=\"toggleStatsBtn\">\n            <i class=\"fas fa-chevron-down\"></i> \uD1B5\uACC4 \uC694\uC57D \uBCF4\uAE30\n          </button>\n        </div>\n        \n        <div class=\"analysis-stats\" style=\"display: none;\">\n          <h5>\uD1B5\uACC4 \uC694\uC57D (\uC120\uD0DD\uB41C PNU)</h5>\n          <div class=\"stats-grid\" id=\"statsGrid\">\n            ").concat(this.getStatisticsHtml(), "\n          </div>\n        </div>\n      </div>\n    ");
    }

    /**
     * 분석 정보 HTML 생성
     * @returns {string} 분석 정보 HTML
     */
  }, {
    key: "getAnalysisParamsHtml",
    value: function getAnalysisParamsHtml() {
      if (!this.component.analysisParams) {
        if (this.component.indexSettings.length === 0) {
          return "<div class=\"empty-analysis-message\">\uD3C9\uAC00 \uC9C0\uC218 \uC124\uC815\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.</div>";
        } else if (this.component.pnuList.length === 0) {
          return "<div class=\"empty-analysis-message\">PNU \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>";
        } else {
          return "<div class=\"empty-analysis-message\">PNU \uD1A0\uAE00\uC744 \uCF1C\uC11C \uBD84\uC11D\uC744 \uC2DC\uC791\uD558\uC138\uC694.</div>";
        }
      }
      return "\n      <div class=\"params-grid\">\n        <div class=\"param-item\">\n          <span class=\"param-label\">PNU</span>\n          <span class=\"param-value\">".concat(this.component.analysisParams.pnu, "</span>\n        </div>\n        <div class=\"param-item\">\n          <span class=\"param-label\">\uC774\uB3D9\uC2DC\uAC04</span>\n          <span class=\"param-value\">").concat(this.component.analysisParams.rangeMinutes, "\uBD84</span>\n        </div>\n        <div class=\"param-item\">\n          <span class=\"param-label\">\uD14C\uC774\uBE14</span>\n          <span class=\"param-value\">").concat(this.component.analysisParams.gridTable, "</span>\n        </div>\n        <div class=\"param-item\">\n          <span class=\"param-label\">\uCEEC\uB7FC</span>\n          <span class=\"param-value\">").concat(this.component.analysisParams.columnName, "</span>\n        </div>\n        <div class=\"param-item\">\n          <span class=\"param-label\">\uBD84\uC11D\uC2DC\uAC04</span>\n          <span class=\"param-value\">").concat(new Date().toLocaleString(), "</span>\n        </div>\n      </div>\n    ");
    }

    /**
     * PNU 목록 HTML 생성
     * @returns {string} PNU 목록 HTML
     */
  }, {
    key: "getPnuListHtml",
    value: function getPnuListHtml() {
      var _this = this;
      // 목록이 없거나 비어있는 경우
      if (!this.component.pnuList || !this.component.pnuList.length) {
        return "\n        <div class=\"empty-pnu-message\">\n          \uBD84\uC11D\uB41C PNU\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.\n        </div>\n      ";
      }

      // PNU 목록 생성
      var html = '';
      this.component.pnuList.forEach(function (pnu, index) {
        var rank = index + 1;
        var rankClass = rank <= 3 ? "rank-".concat(rank) : '';

        // PNU 객체의 구조에 따라 적절히 처리
        var pnuId, pnuCode, pnuValue, isAnalyzed, isActive, isFailed;
        if (_typeof(pnu) === 'object') {
          // 객체인 경우
          pnuCode = pnu.code || pnu.pnu || '';
          pnuValue = pnu.value !== undefined ? pnu.value : pnu.score !== undefined ? pnu.score : '';
          isAnalyzed = pnu.analyzed === true || _this.component.analyzedPnus.has(pnuCode);
          isActive = pnu.active === true || _this.component.activeToggles.has(pnuCode);
          isFailed = pnu.failed === true;
        } else {
          // 문자열인 경우
          pnuCode = pnu;
          pnuValue = '';
          isAnalyzed = _this.component.analyzedPnus.has(pnuCode);
          isActive = _this.component.activeToggles.has(pnuCode);
          isFailed = false;
        }

        // 토글 ID를 toggle-{pnuCode} 형식으로 생성
        var toggleId = "toggle-".concat(pnuCode);

        // API 응답에서 통계 정보 가져오기 (값이 있는 경우)
        var scoreValue = '';
        if (_typeof(pnu) === 'object' && pnu.score) {
          scoreValue = pnu.score;
        } else if (isAnalyzed && !isFailed && _this.component.analyzedPnus.has(pnuCode)) {
          var analysisData = _this.component.analyzedPnus.get(pnuCode);
          if (analysisData && analysisData.statistics && analysisData.statistics.sum) {
            scoreValue = analysisData.statistics.sum;
          }
        }
        html += "\n        <div class=\"pnu-toggle-item ".concat(isAnalyzed ? 'analyzed' : '', " ").concat(isActive ? 'active' : '', " ").concat(isFailed ? 'failed' : '', "\" data-pnu=\"").concat(pnuCode, "\">\n          <div class=\"toggle-switch\">\n            <input type=\"checkbox\" id=\"").concat(toggleId, "\" class=\"toggle-input\" ").concat(isActive ? 'checked' : '', ">\n            <label for=\"").concat(toggleId, "\" class=\"toggle-label\"></label>\n          </div>\n          <span class=\"pnu-code\">").concat(pnuCode, "</span>\n          ").concat(pnuValue !== '' ? "<span class=\"pnu-value\">".concat(pnuValue, "</span>") : '', "\n          ").concat(scoreValue !== '' ? "<span class=\"pnu-score\">\uC810\uC218: ".concat(scoreValue, "</span>") : '', "\n          <span class=\"pnu-rank ").concat(rankClass, "\">").concat(rank, "\uC704</span>\n          ").concat(isAnalyzed && !isFailed ? '<span class="pnu-analyzed-badge"><i class="fas fa-check"></i></span>' : '', "\n          ").concat(isFailed ? '<span class="pnu-failed-badge" title="분석 실패"><i class="fas fa-times-circle"></i></span>' : '', "\n        </div>\n      ");
      });
      return html;
    }

    /**
     * 통계 정보 HTML 생성
     * @returns {string} 통계 정보 HTML
     */
  }, {
    key: "getStatisticsHtml",
    value: function getStatisticsHtml() {
      if (!this.component.statistics) {
        return "<div class=\"empty-stats-message\">\uD1B5\uACC4 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.</div>";
      }

      // 숫자 포맷팅 함수
      var formatNumber = function formatNumber(num) {
        if (num === undefined || num === null) return '-';
        return new Intl.NumberFormat('ko-KR').format(num);
      };

      // 통계 항목 설정
      var stats = [{
        label: '합계',
        value: formatNumber(this.component.statistics.sum)
      }, {
        label: '평균',
        value: formatNumber(this.component.statistics.avg || this.component.statistics.average)
      }, {
        label: '최소',
        value: formatNumber(this.component.statistics.min)
      }, {
        label: '최대',
        value: formatNumber(this.component.statistics.max)
      }, {
        label: '데이터 수',
        value: formatNumber(this.component.statistics.count)
      }, {
        label: '면적(km²)',
        value: formatNumber(this.component.statistics.area)
      }];

      // HTML 생성
      var html = '';
      stats.forEach(function (stat) {
        html += "\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">".concat(stat.label, "</span>\n          <span class=\"stat-value\">").concat(stat.value, "</span>\n        </div>\n      ");
      });
      return html;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/grid/analysis/PnuAnalysisService.js":
/*!************************************************************!*\
  !*** ./src/components/grid/analysis/PnuAnalysisService.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PnuAnalysisService)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * PNU 분석 서비스 모듈
 * 아이소크론맵 분석 API 호출 및 결과 처리를 담당합니다.
 */
var PnuAnalysisService = /*#__PURE__*/function () {
  /**
   * 생성자
   * @param {Object} apiService API 서비스 인스턴스
   */
  function PnuAnalysisService(apiService) {
    _classCallCheck(this, PnuAnalysisService);
    this.apiService = apiService;
    this.cache = new Map(); // 분석 결과 캐시
    this.pendingRequests = new Map(); // 진행 중인 요청
    this.maxRetries = 0; // 최대 재시도 횟수 (0: 재시도 없음)
    this.retryDelay = 1000; // 재시도 간격 (ms)
  }

  /**
   * 캐시 키 생성
   * @param {string} pnu PNU 코드
   * @param {number} rangeMinutes 이동시간(분)
   * @param {string} gridTable 그리드 테이블명
   * @param {string} columnName 분석할 컬럼명
   * @returns {string} 캐시 키
   */
  return _createClass(PnuAnalysisService, [{
    key: "getCacheKey",
    value: function getCacheKey(pnu, rangeMinutes, gridTable, columnName) {
      return "".concat(pnu, ":").concat(rangeMinutes, ":").concat(gridTable, ":").concat(columnName);
    }

    /**
     * PNU 분석 요청
     * @param {string} pnu PNU 코드
     * @param {number} rangeMinutes 이동시간(분)
     * @param {string} gridTable 그리드 테이블명
     * @param {string} columnName 분석할 컬럼명
     * @param {boolean} useCache 캐시 사용 여부 (기본값: true)
     * @returns {Promise<Object>} 분석 결과
     */
  }, {
    key: "analyze",
    value: (function () {
      var _analyze = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(pnu, rangeMinutes, gridTable, columnName) {
        var useCache,
          cacheKey,
          requestPromise,
          result,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              useCache = _args.length > 4 && _args[4] !== undefined ? _args[4] : true;
              if (pnu) {
                _context.next = 3;
                break;
              }
              throw new Error('PNU 코드가 필요합니다.');
            case 3:
              if (rangeMinutes) {
                _context.next = 5;
                break;
              }
              throw new Error('이동시간(분)이 필요합니다.');
            case 5:
              if (gridTable) {
                _context.next = 7;
                break;
              }
              throw new Error('그리드 테이블명이 필요합니다.');
            case 7:
              if (columnName) {
                _context.next = 9;
                break;
              }
              throw new Error('분석할 컬럼명이 필요합니다.');
            case 9:
              // 캐시 키 생성
              cacheKey = this.getCacheKey(pnu, rangeMinutes, gridTable, columnName); // 캐시 확인 (캐시 사용이 활성화된 경우)
              if (!(useCache && this.cache.has(cacheKey))) {
                _context.next = 13;
                break;
              }
              console.log("[PnuAnalysisService] \uCE90\uC2DC\uC5D0\uC11C \uACB0\uACFC \uBC18\uD658: ".concat(cacheKey));
              return _context.abrupt("return", this.cache.get(cacheKey));
            case 13:
              if (!this.pendingRequests.has(cacheKey)) {
                _context.next = 16;
                break;
              }
              console.log("[PnuAnalysisService] \uB3D9\uC77C\uD55C \uC694\uCCAD \uB300\uAE30 \uC911: ".concat(cacheKey));
              return _context.abrupt("return", this.pendingRequests.get(cacheKey));
            case 16:
              // 새 요청 생성 및 등록
              requestPromise = this.executeAnalysisRequest(pnu, rangeMinutes, gridTable, columnName, cacheKey);
              this.pendingRequests.set(cacheKey, requestPromise);
              _context.prev = 18;
              _context.next = 21;
              return requestPromise;
            case 21:
              result = _context.sent;
              // 캐시 저장 (성공한 경우에만)
              if (result.success && useCache) {
                this.cache.set(cacheKey, result);
              }
              return _context.abrupt("return", result);
            case 24:
              _context.prev = 24;
              // 요청 완료되면 pendingRequests에서 제거
              this.pendingRequests["delete"](cacheKey);
              return _context.finish(24);
            case 27:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[18,, 24, 27]]);
      }));
      function analyze(_x, _x2, _x3, _x4) {
        return _analyze.apply(this, arguments);
      }
      return analyze;
    }()
    /**
     * 분석 요청 실행 (내부 함수)
     * @param {string} pnu PNU 코드
     * @param {number} rangeMinutes 이동시간(분)
     * @param {string} gridTable 그리드 테이블명
     * @param {string} columnName 분석할 컬럼명
     * @param {string} cacheKey 캐시 키
     * @param {number} retryCount 현재 재시도 횟수 (사용되지 않음)
     * @returns {Promise<Object>} 분석 결과
     */
    )
  }, {
    key: "executeAnalysisRequest",
    value: (function () {
      var _executeAnalysisRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pnu, rangeMinutes, gridTable, columnName, cacheKey) {
        var retryCount,
          numericRangeMinutes,
          response,
          processedData,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              retryCount = _args2.length > 5 && _args2[5] !== undefined ? _args2[5] : 0;
              _context2.prev = 1;
              console.log("[PnuAnalysisService] \uBD84\uC11D \uC694\uCCAD: PNU=".concat(pnu, ", \uC2DC\uAC04=").concat(rangeMinutes, "\uBD84, \uD14C\uC774\uBE14=").concat(gridTable, ", \uCEEC\uB7FC=").concat(columnName));

              // API 요청 파라미터 준비
              numericRangeMinutes = Number(rangeMinutes); // API 요청
              _context2.next = 6;
              return this.apiService.analyzeIsochrone(pnu, numericRangeMinutes, gridTable, columnName);
            case 6:
              response = _context2.sent;
              if (response) {
                _context2.next = 9;
                break;
              }
              throw new Error('API 응답이 없습니다.');
            case 9:
              if (!response.success) {
                _context2.next = 12;
                break;
              }
              // 결과 데이터 가공
              processedData = this.processAnalysisResult(response);
              return _context2.abrupt("return", processedData);
            case 12:
              throw new Error(response.message || '분석에 실패했습니다.');
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](1);
              // 오류 처리
              console.error("[PnuAnalysisService] \uBD84\uC11D API \uC694\uCCAD \uC624\uB958:", _context2.t0);

              // 재시도 없이 바로 오류 반환
              throw _context2.t0;
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[1, 15]]);
      }));
      function executeAnalysisRequest(_x5, _x6, _x7, _x8, _x9) {
        return _executeAnalysisRequest.apply(this, arguments);
      }
      return executeAnalysisRequest;
    }()
    /**
     * 분석 결과 검증
     * @param {Object} data 분석 결과 데이터
     * @returns {boolean} 검증 결과
     */
    )
  }, {
    key: "validateAnalysisResult",
    value: function validateAnalysisResult(data) {
      // 결과 데이터 유효성 검사
      if (!data) return false;

      // data 객체 자체 검증
      if (!data.success) return false;

      // 응답 데이터 검증
      if (!data.data) return false;

      // 필수 필드 확인
      if (!data.data.pnu) return false;

      // 통계 정보 확인
      if (data.data.statistics) {
        var stats = data.data.statistics;
        // 최소 필요 필드 확인
        return stats.hasOwnProperty('sum') && (stats.hasOwnProperty('avg') || stats.hasOwnProperty('average')) && stats.hasOwnProperty('min') && stats.hasOwnProperty('max');
      }
      return true;
    }

    /**
     * 분석 결과 가공
     * @param {Object} rawData 원본 분석 결과
     * @returns {Object} 가공된 분석 결과
     */
  }, {
    key: "processAnalysisResult",
    value: function processAnalysisResult(rawData) {
      // 원본 데이터가 없는 경우 빈 객체 반환
      if (!rawData) return {
        success: false,
        message: '응답 데이터가 없습니다.'
      };
      try {
        // 검증
        if (!this.validateAnalysisResult(rawData)) {
          return {
            success: false,
            message: '분석 결과 데이터 형식이 유효하지 않습니다.',
            originalData: rawData
          };
        }

        // 얕은 복사
        var processedData = _objectSpread({}, rawData);

        // 데이터 객체가 있는 경우에만 데이터 가공 수행
        if (processedData.data) {
          // data 객체 복사
          processedData.data = _objectSpread({}, processedData.data);

          // 통계 정보 표준화
          if (processedData.data.statistics) {
            // 통계 객체 복사
            processedData.data.statistics = _objectSpread({}, processedData.data.statistics);
            var stats = processedData.data.statistics;

            // avg 필드가 없고 average 필드가 있는 경우 avg 필드 추가
            if (!stats.avg && stats.average) {
              stats.avg = stats.average;
            }

            // average 필드가 없고 avg 필드가 있는 경우 average 필드 추가
            if (!stats.average && stats.avg) {
              stats.average = stats.avg;
            }

            // 면적 단위 변환 (필요한 경우)
            if (stats.area) {
              // 단위가 m²인 경우 km²로 변환
              if (stats.areaUnit === 'm²') {
                stats.area = stats.area / 1000000;
                stats.areaUnit = 'km²';
              }
            }

            // 값이 문자열이면 숫자로 변환
            ['sum', 'avg', 'average', 'min', 'max', 'count', 'area'].forEach(function (key) {
              if (typeof stats[key] === 'string' && !isNaN(stats[key])) {
                stats[key] = parseFloat(stats[key]);
              }
            });
          }

          // 값이 문자열이면 숫자로 변환
          if (typeof processedData.data.value === 'string' && !isNaN(processedData.data.value)) {
            processedData.data.value = parseFloat(processedData.data.value);
          }
        }
        return processedData;
      } catch (error) {
        console.error('[PnuAnalysisService] 결과 가공 중 오류:', error);
        return {
          success: false,
          message: '결과 가공 중 오류가 발생했습니다.',
          error: error.message,
          originalData: rawData
        };
      }
    }

    /**
     * 캐시 비우기
     * @param {string} pnu 특정 PNU에 대한 캐시만 비울 경우 PNU 코드 (선택사항)
     */
  }, {
    key: "clearCache",
    value: function clearCache() {
      var _this = this;
      var pnu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (pnu) {
        // 특정 PNU 관련 캐시만 비우기
        var keysToDelete = [];
        var _iterator = _createForOfIteratorHelper(this.cache.keys()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            if (key.startsWith("".concat(pnu, ":"))) {
              keysToDelete.push(key);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        keysToDelete.forEach(function (key) {
          return _this.cache["delete"](key);
        });
        console.log("[PnuAnalysisService] PNU(".concat(pnu, ") \uAD00\uB828 \uCE90\uC2DC \uC0AD\uC81C: ").concat(keysToDelete.length, "\uAC1C"));
      } else {
        // 전체 캐시 비우기
        var cacheSize = this.cache.size;
        this.cache.clear();
        console.log("[PnuAnalysisService] \uC804\uCCB4 \uCE90\uC2DC \uC0AD\uC81C: ".concat(cacheSize, "\uAC1C"));
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/components/map/MapContainer.js":
/*!********************************************!*\
  !*** ./src/components/map/MapContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapContainer)
/* harmony export */ });
/* harmony import */ var _PnuMapService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PnuMapService.js */ "./src/components/map/PnuMapService.js");
/* harmony import */ var _MapProviderManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapProviderManager.js */ "./src/components/map/MapProviderManager.js");
/* harmony import */ var _MapLayerManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapLayerManager.js */ "./src/components/map/MapLayerManager.js");
/* harmony import */ var _MapUIController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapUIController.js */ "./src/components/map/MapUIController.js");
/* harmony import */ var _MapEventHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapEventHandler.js */ "./src/components/map/MapEventHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 맵 컨테이너 컴포넌트
 * 중앙 영역에 표시될 지도를 관리합니다.
 */






var MapContainer = /*#__PURE__*/function () {
  /**
   * 맵 컨테이너 컴포넌트 생성
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   * @param {string} [providerType=null] 사용할 맵 프로바이더 타입
   */
  function MapContainer(container) {
    var providerType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, MapContainer);
    this.container = container;
    this.lastPnuData = null;

    // PNU 맵 서비스 초기화
    this.pnuMapService = new _PnuMapService_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    // 맵 프로바이더 매니저 초기화
    this.providerManager = new _MapProviderManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](providerType);

    // UI 컨트롤러 초기화
    this.uiController = new _MapUIController_js__WEBPACK_IMPORTED_MODULE_3__["default"](container, {
      onProviderChange: this.handleProviderChange.bind(this),
      onReset: this.resetMap.bind(this)
    });

    // 맵 레이어 매니저는 맵 프로바이더 초기화 후에 생성
    this.layerManager = null;

    // 이벤트 핸들러 초기화
    this.eventHandler = new _MapEventHandler_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      onPnuFiltered: this.updateMapWithPnuData.bind(this),
      onAnalysisMapData: this.handleAnalysisData.bind(this),
      onAnalysisToggleOff: this.handleAnalysisToggleOff.bind(this),
      onAnalysisToggle: this.handleAnalysisToggle.bind(this)
    });
    this.init();
  }

  /**
   * 컴포넌트 초기화
   */
  return _createClass(MapContainer, [{
    key: "init",
    value: function init() {
      console.log('맵 컨테이너 초기화 시작');

      // UI 초기 렌더링
      this.uiController.renderMapContainer();

      // 프로바이더 목록 UI 업데이트
      this.uiController.populateProviderList(this.providerManager.getAvailableProviders(), this.providerManager.getProviderType());

      // 맵 초기화
      this.initializeMap();
      console.log('맵 컨테이너 초기화 완료');
    }

    /**
     * 맵 초기화
     */
  }, {
    key: "initializeMap",
    value: (function () {
      var _initializeMap = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var mapElement, mapProvider;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              // 로딩 UI 표시
              this.uiController.showLoadingPlaceholder();

              // 맵 요소 생성
              mapElement = this.uiController.createMapElement();
              if (mapElement) {
                _context.next = 5;
                break;
              }
              throw new Error('맵 요소를 생성할 수 없습니다.');
            case 5:
              _context.next = 7;
              return this.providerManager.initializeProvider(mapElement);
            case 7:
              mapProvider = _context.sent;
              // 맵 레이어 매니저 초기화
              this.layerManager = new _MapLayerManager_js__WEBPACK_IMPORTED_MODULE_2__["default"](mapProvider, this.providerManager.getProviderType());

              // 프로바이더 이벤트 리스너 등록
              this.registerMapEventListeners();

              // 로딩 UI 숨기기
              this.uiController.hidePlaceholder();

              // 지도 스타일 컨트롤 추가
              this.addStyleControlToUI();

              // 마지막으로 받은 PNU 데이터가 있으면 맵에 표시
              if (this.lastPnuData) {
                this.updateMapWithPnuData(this.lastPnuData);
              }
              console.log('맵 초기화 성공');
              _context.next = 20;
              break;
            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](0);
              console.error('맵 초기화 실패:', _context.t0);
              this.uiController.showErrorPlaceholder('지도 라이브러리 로드 실패. 페이지를 새로고침 해보세요.');
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 16]]);
      }));
      function initializeMap() {
        return _initializeMap.apply(this, arguments);
      }
      return initializeMap;
    }()
    /**
     * 맵 프로바이더 변경 핸들러
     * @param {string} providerType 새 맵 프로바이더 타입
     */
    )
  }, {
    key: "handleProviderChange",
    value: (function () {
      var _handleProviderChange = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(providerType) {
        var currentAnalysisData, mapElement, mapProvider, _iterator, _step, _step$value, pnu, data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              // 로딩 UI 표시
              this.uiController.showLoadingPlaceholder("".concat(providerType === 'leaflet' ? 'Leaflet' : 'OpenLayers', " \uC9C0\uB3C4 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB85C \uBCC0\uACBD \uC911..."));

              // 현재 분석 데이터 백업
              currentAnalysisData = this.layerManager ? this.layerManager.getAllAnalysisData() : new Map(); // 맵 요소 생성
              mapElement = this.uiController.createMapElement();
              if (mapElement) {
                _context2.next = 6;
                break;
              }
              throw new Error('맵 요소를 생성할 수 없습니다.');
            case 6:
              _context2.next = 8;
              return this.providerManager.changeProvider(providerType, mapElement);
            case 8:
              mapProvider = _context2.sent;
              // 맵 레이어 매니저 업데이트
              if (this.layerManager) {
                this.layerManager.updateMapProvider(mapProvider, providerType);
              } else {
                this.layerManager = new _MapLayerManager_js__WEBPACK_IMPORTED_MODULE_2__["default"](mapProvider, providerType);
              }

              // 프로바이더 이벤트 리스너 등록
              this.registerMapEventListeners();

              // 프로바이더 선택기 UI 업데이트
              this.uiController.populateProviderList(this.providerManager.getAvailableProviders(), this.providerManager.getProviderType());

              // 로딩 UI 숨기기
              this.uiController.hidePlaceholder();

              // 지도 스타일 컨트롤 추가
              this.addStyleControlToUI();

              // 마지막으로 받은 PNU 데이터가 있으면 맵에 표시
              if (this.lastPnuData) {
                this.updateMapWithPnuData(this.lastPnuData);
              }

              // 분석 결과 복원
              if (currentAnalysisData.size > 0) {
                // 저장된 각 PNU 데이터를 다시 렌더링
                _iterator = _createForOfIteratorHelper(currentAnalysisData.entries());
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    _step$value = _slicedToArray(_step.value, 2), pnu = _step$value[0], data = _step$value[1];
                    if (data.isActive) {
                      this.layerManager.renderAnalysisResults({
                        pnu: pnu,
                        polygon: data.polygon,
                        gridPoints: data.gridPoints
                      });
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
              console.log('맵 프로바이더 변경 성공:', providerType);
              _context2.next = 24;
              break;
            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](0);
              console.error('맵 프로바이더 변경 실패:', _context2.t0);
              this.uiController.showErrorPlaceholder('지도 라이브러리 변경 실패. 다시 시도해주세요.');

              // 실패 시 기본값으로 되돌리기 위해 UI 업데이트
              this.uiController.populateProviderList(this.providerManager.getAvailableProviders(), this.providerManager.getProviderType());
            case 24:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 19]]);
      }));
      function handleProviderChange(_x) {
        return _handleProviderChange.apply(this, arguments);
      }
      return handleProviderChange;
    }()
    /**
     * 맵 이벤트 리스너 등록
     */
    )
  }, {
    key: "registerMapEventListeners",
    value: function registerMapEventListeners() {
      var mapProvider = this.providerManager.getProvider();
      if (!mapProvider) return;
      this.eventHandler.registerMapProviderListeners(mapProvider, {
        onClick: function onClick(event) {
          console.log('맵 클릭:', event);
          // 추가 클릭 처리 로직 구현
        },
        onZoomEnd: function onZoomEnd() {
          // 확대/축소 완료 시 처리 로직 구현
        }
      });
    }

    /**
     * 분석 데이터 처리 핸들러
     * @param {Object} data 분석 데이터
     */
  }, {
    key: "handleAnalysisData",
    value: function handleAnalysisData(data) {
      console.log('분석 데이터 처리:', data);
      if (this.layerManager) {
        // 데이터에 활성화 상태 추가 (기본값: true)
        data.isActive = true;

        // 분석 데이터 렌더링 (기존 데이터는 유지)
        this.layerManager.renderAnalysisResults(data);
        console.log('분석 데이터 렌더링 완료:', data.pnu);
      }
    }

    /**
     * 분석 토글 해제 핸들러
     * @param {string} pnu PNU 코드
     */
  }, {
    key: "handleAnalysisToggleOff",
    value: function handleAnalysisToggleOff(pnu) {
      console.log('분석 토글 해제:', pnu);
      if (this.layerManager) {
        // 데이터는 유지하고 활성화 상태만 변경
        this.layerManager.updateAnalysisDataActiveState(pnu, false);

        // 맵에서 시각적으로만 제거
        this.layerManager.hideAnalysisLayer(pnu);
      }
    }

    /**
     * 분석 토글 변경 핸들러
     * @param {Object} data 토글 데이터 {pnu, isActive, data}
     */
  }, {
    key: "handleAnalysisToggle",
    value: function handleAnalysisToggle(data) {
      console.log('분석 토글 변경:', data);
      if (!this.layerManager) return;
      var pnu = data.pnu,
        isActive = data.isActive,
        analysisData = data.data;
      if (isActive) {
        // 토글 활성화: 데이터가 있으면 표시
        if (analysisData) {
          console.log("PNU ".concat(pnu, " \uD1A0\uAE00 \uD65C\uC131\uD654 (\uB370\uC774\uD130 \uC788\uC74C)"));

          // 분석 데이터에 활성화 상태 추가
          analysisData.isActive = true;

          // 레이어 매니저에 데이터 저장 및 렌더링 (기존 데이터 유지하며 추가)
          this.layerManager.renderAnalysisResults({
            pnu: pnu,
            polygon: analysisData.polygon,
            gridPoints: analysisData.gridPoints,
            isActive: true
          });
        } else if (this.layerManager.hasAnalysisData(pnu)) {
          console.log("PNU ".concat(pnu, " \uD1A0\uAE00 \uD65C\uC131\uD654 (\uAE30\uC874 \uB370\uC774\uD130 \uC0AC\uC6A9)"));

          // 이미 저장된 데이터가 있는 경우 활성화 상태만 변경
          this.layerManager.updateAnalysisDataActiveState(pnu, true);

          // 모든 활성화된 레이어 다시 그리기 (단일 레이어만 그리지 않음)
          this.layerManager.redrawActiveAnalysisData();
        }
      } else {
        console.log("PNU ".concat(pnu, " \uD1A0\uAE00 \uBE44\uD65C\uC131\uD654"));

        // 토글 비활성화: 레이어 숨김 (데이터는 유지)
        this.layerManager.updateAnalysisDataActiveState(pnu, false);

        // 전체 레이어를 지우고 활성화된 레이어만 다시 그리기
        this.layerManager.redrawActiveAnalysisData();
      }
    }

    /**
     * PNU 데이터로 맵 업데이트
     * @param {Object} data PNU 데이터
     */
  }, {
    key: "updateMapWithPnuData",
    value: (function () {
      var _updateMapWithPnuData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
        var mapProvider, providerType, mapObjects, hasVisibleData;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              console.log('맵 업데이트:', data);

              // 데이터 저장 (맵 초기화 전에 요청이 온 경우를 대비)
              this.lastPnuData = data;

              // 맵 프로바이더가 초기화되지 않은 경우
              if (this.providerManager.isProviderInitialized()) {
                _context3.next = 5;
                break;
              }
              this.uiController.updatePlaceholderWithPnuData(data);
              return _context3.abrupt("return");
            case 5:
              _context3.prev = 5;
              if (this.pnuMapService.initialized) {
                _context3.next = 9;
                break;
              }
              _context3.next = 9;
              return this.pnuMapService.initialize('/data/pnu_coordinates.csv');
            case 9:
              // 맵 프로바이더 가져오기
              mapProvider = this.providerManager.getProvider();
              providerType = this.providerManager.getProviderType(); // 이전 PNU 데이터 마커와 폴리곤 제거 (분석 결과는 유지)
              if (this.layerManager) {
                this.layerManager.clearPnuLayers();
              }

              // PNU 맵 서비스를 사용하여 데이터 처리
              mapObjects = this.pnuMapService.processPnuDataSet(data, providerType); // 마커와 폴리곤 추가
              if (mapObjects.markers && mapObjects.markers.length > 0) {
                mapProvider.addMarkers(mapObjects.markers);
              }
              if (mapObjects.polygons && mapObjects.polygons.length > 0) {
                mapProvider.addPolygons(mapObjects.polygons);
              }

              // 데이터가 있는 경우 맵 뷰 조정
              hasVisibleData = mapObjects.markers && mapObjects.markers.length > 0 || mapObjects.polygons && mapObjects.polygons.length > 0;
              if (hasVisibleData) {
                // 모든 데이터가 화면에 보이도록 맵 조정
                if (typeof mapProvider.fitToData === 'function') {
                  mapProvider.fitToData();
                } else {
                  // fitToData 메서드가 없는 맵 프로바이더의 경우 기본 뷰로 리셋
                  mapProvider.resetView();
                }
              }

              // 활성화된 분석 결과만 다시 표시 (이 과정에서 분석 레이어를 보존)
              if (this.layerManager) {
                this.layerManager.redrawActiveAnalysisData();
              }
              _context3.next = 24;
              break;
            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3["catch"](5);
              console.error('PNU 데이터 맵 업데이트 실패:', _context3.t0);
              this.uiController.showErrorPlaceholder('지도 데이터 업데이트 실패. 다시 시도해주세요.');
            case 24:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[5, 20]]);
      }));
      function updateMapWithPnuData(_x2) {
        return _updateMapWithPnuData.apply(this, arguments);
      }
      return updateMapWithPnuData;
    }()
    /**
     * 지도 초기화 (원래 위치와 줌 레벨로 복귀)
     */
    )
  }, {
    key: "resetMap",
    value: function resetMap() {
      console.log('지도 초기화');
      var mapProvider = this.providerManager.getProvider();
      if (mapProvider) {
        mapProvider.resetView();
      }
    }

    /**
     * 지도 스타일 컨트롤을 UI에 추가
     */
  }, {
    key: "addStyleControlToUI",
    value: function addStyleControlToUI() {
      var mapProvider = this.providerManager.getProvider();
      var providerType = this.providerManager.getProviderType();
      if (!mapProvider) return;

      // 프로바이더 타입에 따라 해당하는 스타일 컨트롤 가져오기
      var styleControlElement = null;
      if (providerType === 'leaflet') {
        // Leaflet 프로바이더
        if (typeof mapProvider._addStyleControl === 'function') {
          styleControlElement = mapProvider._addStyleControl();
        }
      } else if (providerType === 'openlayers') {
        // OpenLayers 프로바이더
        if (typeof mapProvider._addLayerSwitchControl === 'function') {
          styleControlElement = mapProvider._addLayerSwitchControl();
        }
      }

      // 스타일 컨트롤 추가
      this.uiController.addStyleControl(styleControlElement);
    }
  }]);
}();


/***/ }),

/***/ "./src/components/map/MapEventHandler.js":
/*!***********************************************!*\
  !*** ./src/components/map/MapEventHandler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapEventHandler)
/* harmony export */ });
/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/eventBus.js */ "./src/utils/eventBus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * MapEventHandler.js
 * 맵 이벤트 처리 모듈
 * 이벤트 구독 및 처리를 담당합니다.
 */


var MapEventHandler = /*#__PURE__*/function () {
  /**
   * MapEventHandler 생성자
   * @param {Object} callbacks 콜백 함수 모음
   */
  function MapEventHandler() {
    var callbacks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, MapEventHandler);
    this.callbacks = {
      onPnuFiltered: callbacks.onPnuFiltered || function () {},
      onAnalysisMapData: callbacks.onAnalysisMapData || function () {},
      onAnalysisToggleOff: callbacks.onAnalysisToggleOff || function () {},
      onAnalysisToggle: callbacks.onAnalysisToggle || function () {}
    };
    this.subscribeToEvents();
  }

  /**
   * 이벤트 구독 설정
   */
  return _createClass(MapEventHandler, [{
    key: "subscribeToEvents",
    value: function subscribeToEvents() {
      var _this = this;
      // PNU 필터링 이벤트 구독
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('pnuFiltered', function (data) {
        _this.callbacks.onPnuFiltered(data);
      });

      // 분석 결과의 polygon과 gridPoints 데이터 구독
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('analysis.mapData', function (data) {
        _this.callbacks.onAnalysisMapData(data);
      });

      // PNU 토글이 꺼졌을 때 해당 PNU의 분석 결과 제거
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('analysis.toggleOff', function (data) {
        if (data && data.pnu) {
          _this.callbacks.onAnalysisToggleOff(data.pnu);
        }
      });

      // PNU 토글 상태 변경 구독
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('analysis.toggle', function (data) {
        if (data && data.pnu !== undefined) {
          _this.callbacks.onAnalysisToggle(data);
        }
      });
    }

    /**
     * 맵 프로바이더 이벤트 리스너 등록
     * @param {Object} mapProvider 맵 프로바이더 객체
     * @param {Object} listeners 이벤트 리스너 객체
     */
  }, {
    key: "registerMapProviderListeners",
    value: function registerMapProviderListeners(mapProvider) {
      var listeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!mapProvider) return;

      // 클릭 이벤트 처리
      if (listeners.onClick) {
        mapProvider.on('click', listeners.onClick);
      }

      // 추가 이벤트 리스너 등록 (필요시)
      if (listeners.onZoomEnd) {
        mapProvider.on('zoomend', listeners.onZoomEnd);
      }
      if (listeners.onMoveEnd) {
        mapProvider.on('moveend', listeners.onMoveEnd);
      }
    }

    /**
     * 맵 이벤트 발생시키기
     * @param {string} eventName 이벤트 이름
     * @param {Object} data 이벤트 데이터
     */
  }, {
    key: "emitEvent",
    value: function emitEvent(eventName, data) {
      _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish(eventName, data);
    }
  }]);
}();


/***/ }),

/***/ "./src/components/map/MapFactory.js":
/*!******************************************!*\
  !*** ./src/components/map/MapFactory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapFactory)
/* harmony export */ });
/* harmony import */ var _providers_LeafletProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/LeafletProvider.js */ "./src/components/map/providers/LeafletProvider.js");
/* harmony import */ var _providers_OpenLayersProvider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./providers/OpenLayersProvider.js */ "./src/components/map/providers/OpenLayersProvider.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 맵 프로바이더 팩토리
 * 요청된 타입에 따라 적절한 맵 라이브러리 구현체를 생성합니다.
 */



var MapFactory = /*#__PURE__*/function () {
  function MapFactory() {
    _classCallCheck(this, MapFactory);
  }
  return _createClass(MapFactory, null, [{
    key: "createProvider",
    value:
    /**
     * 맵 프로바이더 생성
     * @param {string} type 맵 프로바이더 타입 (PROVIDER_TYPES 참조)
     * @param {HTMLElement} container 맵을 표시할 컨테이너 요소
     * @param {Object} config 맵 설정
     * @returns {MapProvider} 생성된 맵 프로바이더 인스턴스
     */
    function createProvider(type, container, config) {
      switch (type.toLowerCase()) {
        case this.PROVIDER_TYPES.LEAFLET:
          return new _providers_LeafletProvider_js__WEBPACK_IMPORTED_MODULE_0__["default"](container, config);
        case this.PROVIDER_TYPES.OPENLAYERS:
          return new _providers_OpenLayersProvider_js__WEBPACK_IMPORTED_MODULE_1__["default"](container, config);

        // 추후 다른 맵 라이브러리 지원 추가
        // case this.PROVIDER_TYPES.GOOGLE:
        //   return new GoogleMapsProvider(container, config);

        // case this.PROVIDER_TYPES.NAVER:
        //   return new NaverMapsProvider(container, config);

        // case this.PROVIDER_TYPES.KAKAO:
        //   return new KakaoMapsProvider(container, config);

        default:
          throw new Error("\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uB9F5 \uD504\uB85C\uBC14\uC774\uB354 \uD0C0\uC785: ".concat(type));
      }
    }

    /**
     * 사용 가능한 모든 맵 프로바이더 목록 반환
     * @returns {Array<Object>} 맵 프로바이더 정보 배열
     */
  }, {
    key: "getAvailableProviders",
    value: function getAvailableProviders() {
      return [{
        id: this.PROVIDER_TYPES.LEAFLET,
        name: 'Leaflet',
        description: ''
      }, {
        id: this.PROVIDER_TYPES.OPENLAYERS,
        name: 'OpenLayers',
        description: ''
      }
      // 추후 다른 맵 라이브러리 추가 가능
      ];
    }
  }]);
}();
/**
 * 사용 가능한 맵 프로바이더 타입
 */
_defineProperty(MapFactory, "PROVIDER_TYPES", {
  LEAFLET: 'leaflet',
  OPENLAYERS: 'openlayers'
  // 추후 다른 맵 라이브러리 추가 가능
  // GOOGLE: 'google',
  // NAVER: 'naver',
  // KAKAO: 'kakao',
});


/***/ }),

/***/ "./src/components/map/MapFeatureAdapter.js":
/*!*************************************************!*\
  !*** ./src/components/map/MapFeatureAdapter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapFeatureAdapter)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 맵 피처 어댑터
 * 
 * 다양한 맵 공급자(Leaflet, OpenLayers 등)에 대한 맵 피처(마커, 폴리곤 등) 변환을 담당합니다.
 * 전략 패턴을 사용하여 새로운 맵 공급자 추가 시 기존 코드를 수정하지 않고 확장할 수 있도록 합니다.
 */
var MapFeatureAdapter = /*#__PURE__*/function () {
  function MapFeatureAdapter() {
    _classCallCheck(this, MapFeatureAdapter);
    this.strategies = new Map(); // 전략 목록 저장
  }

  /**
   * 피처 변환 전략 등록
   * @param {string} providerType 맵 공급자 유형 (예: 'leaflet', 'openlayers')
   * @param {Object} strategy 전략 객체 (변환 메서드 포함)
   */
  return _createClass(MapFeatureAdapter, [{
    key: "registerStrategy",
    value: function registerStrategy(providerType, strategy) {
      this.strategies.set(providerType.toLowerCase(), strategy);
    }

    /**
     * 데이터 객체를 특정 맵 공급자에 맞는 마커로 변환
     * @param {string} providerType 맵 공급자 유형
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @returns {Array<Object>} 맵 공급자에 맞는 마커 객체 배열
     */
  }, {
    key: "toMarkers",
    value: function toMarkers(providerType, dataObjects) {
      var strategy = this.getStrategy(providerType);
      if (!strategy || typeof strategy.toMarkers !== 'function') {
        throw new Error("".concat(providerType, "\uC5D0 \uB300\uD55C \uB9C8\uCEE4 \uBCC0\uD658 \uC804\uB7B5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));
      }
      return strategy.toMarkers(dataObjects);
    }

    /**
     * 데이터 객체를 특정 맵 공급자에 맞는 폴리곤으로 변환
     * @param {string} providerType 맵 공급자 유형
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @returns {Array<Object>} 맵 공급자에 맞는 폴리곤 객체 배열
     */
  }, {
    key: "toPolygons",
    value: function toPolygons(providerType, dataObjects) {
      var strategy = this.getStrategy(providerType);
      if (!strategy || typeof strategy.toPolygons !== 'function') {
        throw new Error("".concat(providerType, "\uC5D0 \uB300\uD55C \uD3F4\uB9AC\uACE4 \uBCC0\uD658 \uC804\uB7B5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));
      }
      return strategy.toPolygons(dataObjects);
    }

    /**
     * 데이터 객체를 특정 맵 공급자에 맞는 맵 레이어로 변환
     * @param {string} providerType 맵 공급자 유형
     * @param {string} layerType 레이어 유형 (예: 'heatmap', 'cluster', 'choropleth')
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @param {Object} options 레이어 옵션
     * @returns {Object} 맵 공급자에 맞는 레이어 객체
     */
  }, {
    key: "toLayer",
    value: function toLayer(providerType, layerType, dataObjects) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var strategy = this.getStrategy(providerType);
      if (!strategy || typeof strategy.toLayer !== 'function') {
        throw new Error("".concat(providerType, "\uC5D0 \uB300\uD55C \uB808\uC774\uC5B4 \uBCC0\uD658 \uC804\uB7B5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."));
      }
      return strategy.toLayer(layerType, dataObjects, options);
    }

    /**
     * 주어진 공급자 유형에 대한 전략 반환
     * @private
     * @param {string} providerType 맵 공급자 유형
     * @returns {Object|null} 전략 객체 또는 null
     */
  }, {
    key: "getStrategy",
    value: function getStrategy(providerType) {
      return this.strategies.get(providerType.toLowerCase()) || null;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/map/MapLayerManager.js":
/*!***********************************************!*\
  !*** ./src/components/map/MapLayerManager.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapLayerManager)
/* harmony export */ });
/* harmony import */ var _core_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/config.js */ "./src/core/config.js");
/* harmony import */ var _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapFactory.js */ "./src/components/map/MapFactory.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * MapLayerManager.js
 * 맵 레이어 관리 모듈
 * 지도 레이어(폴리곤, 마커, 그리드 등)를 관리하는 역할을 담당합니다.
 */




// Leaflet 객체 참조 가져오기 (전역 스코프에서 가져오거나 동적으로 가져오기)
var getLeaflet = function getLeaflet() {
  if (typeof window !== 'undefined' && window.L) {
    return window.L;
  }
  return null;
};
var MapLayerManager = /*#__PURE__*/function () {
  /**
   * MapLayerManager 생성자
   * @param {Object} mapProvider 맵 프로바이더 객체 (Leaflet 또는 OpenLayers 인스턴스)
   * @param {string} providerType 맵 프로바이더 타입 ('leaflet' 또는 'openlayers')
   */
  function MapLayerManager(mapProvider, providerType) {
    _classCallCheck(this, MapLayerManager);
    this.mapProvider = mapProvider;
    this.providerType = providerType;
    this.analysisData = new Map(); // PNU를 키로 하는 Map 객체
    this.colorPalette = ['#3388ff',
    // 파랑
    '#ff3333',
    // 빨강
    '#33cc33',
    // 녹색
    '#ff9900',
    // 주황
    '#9933ff',
    // 보라
    '#ff33cc',
    // 분홍
    '#00ccff',
    // 하늘색
    '#ffcc00',
    // 노랑
    '#cc6600',
    // 갈색
    '#00ff99',
    // 민트
    '#66ccff',
    // 연한 파랑
    '#ff6699',
    // 연한 분홍
    '#339933',
    // 어두운 녹색
    '#9966ff',
    // 연한 보라
    '#ff6600' // 주황빨강
    ];

    // Leaflet 레이어 그룹 초기화 (PNU별로 분석 레이어를 그룹화)
    this.analysisLayerGroups = new Map();

    // 모든 분석 레이어를 포함하는 그룹 초기화
    this.initLayerGroups();
  }

  /**
   * 레이어 그룹 초기화
   */
  return _createClass(MapLayerManager, [{
    key: "initLayerGroups",
    value: function initLayerGroups() {
      if (this.providerType === _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.LEAFLET) {
        var L = getLeaflet();
        if (L && this.mapProvider.leafletMap) {
          // 모든 분석 레이어를 포함할 메인 그룹
          this.mainLayerGroup = L.layerGroup().addTo(this.mapProvider.leafletMap);
          console.log('분석 레이어 그룹 초기화 완료');
        }
      }
    }

    /**
     * 특정 PNU의 레이어 그룹 가져오기 또는 생성하기
     * @param {string} pnu PNU 코드
     * @returns {Object} Leaflet 레이어 그룹
     */
  }, {
    key: "getOrCreateLayerGroup",
    value: function getOrCreateLayerGroup(pnu) {
      // Leaflet 사용 시에만 해당
      if (this.providerType !== _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.LEAFLET) {
        return null;
      }
      var L = getLeaflet();
      if (!L || !this.mapProvider.leafletMap || !this.mainLayerGroup) {
        console.warn('Leaflet 라이브러리 또는 맵이 초기화되지 않았습니다.');
        return null;
      }

      // 해당 PNU의 레이어 그룹이 없으면 생성
      if (!this.analysisLayerGroups.has(pnu)) {
        var layerGroup = L.layerGroup();
        this.analysisLayerGroups.set(pnu, layerGroup);
        // 메인 그룹에 추가
        this.mainLayerGroup.addLayer(layerGroup);
        console.log("PNU ".concat(pnu, "\uC758 \uB808\uC774\uC5B4 \uADF8\uB8F9 \uC0DD\uC131\uB428"));
      }
      return this.analysisLayerGroups.get(pnu);
    }

    /**
     * 분석 결과 렌더링
     * @param {Object} data 분석 결과 데이터
     */
  }, {
    key: "renderAnalysisResults",
    value: function renderAnalysisResults(data) {
      console.log('분석 결과 맵 렌더링:', data);
      if (!this.mapProvider || !this.mapProvider.initialize) {
        console.warn('맵이 초기화되지 않아 분석 결과를 렌더링할 수 없습니다.');
        return;
      }

      // 기존 분석 결과 저장
      if (data.pnu && (data.polygon || data.gridPoints)) {
        // 기존 데이터가 있는 경우 병합
        var existingData = this.analysisData.get(data.pnu) || {};
        this.analysisData.set(data.pnu, {
          polygon: data.polygon || existingData.polygon,
          gridPoints: data.gridPoints || existingData.gridPoints,
          timestamp: new Date(),
          isActive: data.isActive !== undefined ? data.isActive : true // 활성화 상태 저장 (기본값: true)
        });
        console.log("PNU ".concat(data.pnu, "\uC758 \uBD84\uC11D \uACB0\uACFC \uC800\uC7A5\uB428, \uCD1D ").concat(this.analysisData.size, "\uAC1C PNU \uB370\uC774\uD130 \uBCF4\uC720"));

        // 새로운 렌더링 방식: PNU별 레이어 그룹 관리
        if (this.providerType === _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.LEAFLET) {
          // 해당 PNU의 레이어 그룹 초기화
          this.hidePnuLayer(data.pnu);

          // 활성화된 상태인 경우에만 그리기
          if (this.analysisData.get(data.pnu).isActive) {
            this.drawSingleAnalysisResult(data.pnu, this.analysisData.get(data.pnu));
          }

          // 모든 활성화된 PNU가 보이게 맵 뷰 조정
          this.fitMapToActiveData();
        } else {
          // 다른 프로바이더의 경우 기존 방식 유지
          this.redrawActiveAnalysisData();
        }
      } else {
        // 활성화된 분석 결과만 다시 그리기
        this.redrawActiveAnalysisData();
      }
    }

    /**
     * 활성화된 PNU에 맞게 맵 뷰 조정
     */
  }, {
    key: "fitMapToActiveData",
    value: function fitMapToActiveData() {
      if (!this.mapProvider || typeof this.mapProvider.fitToData !== 'function') return;

      // 활성화된 PNU가 있는지 확인
      var activeCount = Array.from(this.analysisData.values()).filter(function (data) {
        return data.isActive;
      }).length;
      if (activeCount > 0) {
        this.mapProvider.fitToData();
      }
    }

    /**
     * 분석 결과 레이어만 삭제
     */
  }, {
    key: "clearAnalysisLayers",
    value: function clearAnalysisLayers() {
      if (!this.mapProvider) return;

      // 디버깅 로그 추가
      console.log('분석 레이어 초기화 시작');

      // 새로운 레이어 그룹 관리 방식 적용
      if (this.providerType === _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.LEAFLET && this.mainLayerGroup) {
        try {
          // 메인 레이어 그룹 초기화
          this.mainLayerGroup.clearLayers();

          // 개별 PNU 레이어 그룹 초기화
          this.analysisLayerGroups.clear();
          console.log('메인 레이어 그룹 초기화 완료');

          // 레이어 그룹 재설정
          this.initLayerGroups();
        } catch (error) {
          console.error('레이어 그룹 초기화 중 오류 발생:', error);
        }
      } else {
        // 기존 방식 (개별 레이어 제거)
        if (this.providerType === _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.LEAFLET && this.mapProvider.leafletMap) {
          var removedCount = 0;
          // 분석 폴리곤만 제거
          this.mapProvider.leafletMap.eachLayer(function (layer) {
            if (layer.options && layer.options.className && (layer.options.className.includes('analysis-polygon') || layer.options.className.includes('analysis-grid-point'))) {
              try {
                layer.remove();
                removedCount++;
              } catch (error) {
                console.error('레이어 제거 중 오류 발생:', error);
              }
            }
          });
          console.log("".concat(removedCount, "\uAC1C\uC758 \uBD84\uC11D \uB808\uC774\uC5B4 \uC81C\uAC70\uB428"));
        } else if (this.providerType === _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.OPENLAYERS) {
          // OpenLayers의 경우 비슷한 방식으로 처리
          if (this.mapProvider.map) {
            // OpenLayers 특화 코드 필요 시 구현
          }
        }
      }
      console.log('분석 레이어 초기화 완료');
    }

    /**
     * 모든 분석 결과 다시 그리기
     */
  }, {
    key: "redrawAllAnalysisData",
    value: function redrawAllAnalysisData() {
      console.log('모든 분석 결과 다시 그리기');

      // 모든 분석 레이어 지우기
      this.clearAnalysisLayers();

      // 각 PNU의 분석 결과 렌더링
      var _iterator = _createForOfIteratorHelper(this.analysisData.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            pnu = _step$value[0],
            analysisResult = _step$value[1];
          this.drawSingleAnalysisResult(pnu, analysisResult);
        }

        // 맵 뷰 조정
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.fitMapToActiveData();
    }

    /**
     * 활성화된 분석 결과만 다시 그리기
     */
  }, {
    key: "redrawActiveAnalysisData",
    value: function redrawActiveAnalysisData() {
      console.log('활성화된 분석 결과 다시 그리기');

      // 활성화된 PNU 목록 로깅
      var activePnus = Array.from(this.analysisData.entries()).filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          _ = _ref2[0],
          data = _ref2[1];
        return data.isActive;
      }).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          pnu = _ref4[0],
          _ = _ref4[1];
        return pnu;
      });
      console.log('활성화된 PNU 목록:', activePnus);
      if (activePnus.length === 0) {
        console.log('활성화된 PNU가 없음, 그리기 중단');
        return;
      }

      // 모든 분석 레이어 지우기
      this.clearAnalysisLayers();

      // 활성화된 PNU의 분석 결과만 렌더링
      var activeCount = 0;
      var _iterator2 = _createForOfIteratorHelper(this.analysisData.entries()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
            pnu = _step2$value[0],
            analysisResult = _step2$value[1];
          if (analysisResult.isActive) {
            console.log("PNU ".concat(pnu, " \uADF8\uB9AC\uAE30 \uC2DC\uC791"));

            // 데이터 로깅
            var hasPolygon = !!(analysisResult.polygon && analysisResult.polygon.coordinates && analysisResult.polygon.coordinates.length > 0);
            var gridPointsCount = analysisResult.gridPoints ? analysisResult.gridPoints.length : 0;
            console.log("PNU ".concat(pnu, " \uB370\uC774\uD130: polygon=").concat(hasPolygon, ", gridPoints=").concat(gridPointsCount, "\uAC1C"));

            // 그리기 실행
            this.drawSingleAnalysisResult(pnu, analysisResult);
            activeCount++;
            console.log("PNU ".concat(pnu, " \uADF8\uB9AC\uAE30 \uC644\uB8CC"));
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      console.log("".concat(activeCount, "\uAC1C\uC758 \uD65C\uC131\uD654\uB41C \uBD84\uC11D \uACB0\uACFC \uB80C\uB354\uB9C1 \uC644\uB8CC"));

      // 맵 뷰 조정
      this.fitMapToActiveData();
    }

    /**
     * 단일 PNU의 분석 결과 그리기
     * @param {string} pnu PNU 코드
     * @param {Object} analysisResult 분석 결과 객체
     */
  }, {
    key: "drawSingleAnalysisResult",
    value: function drawSingleAnalysisResult(pnu, analysisResult) {
      if (!analysisResult) {
        console.warn("PNU ".concat(pnu, "\uC5D0 \uB300\uD55C \uBD84\uC11D \uACB0\uACFC \uB370\uC774\uD130\uAC00 \uC5C6\uC74C"));
        return;
      }

      // 레이어 그룹 가져오기 또는 생성
      var layerGroup = this.getOrCreateLayerGroup(pnu);

      // 색상 할당 (PNU별로 일관된 색상 사용)
      var colorIndex = this.getPnuColorIndex(pnu);
      var color = this.colorPalette[colorIndex % this.colorPalette.length];

      // Leaflet 사용 시 레이어 그룹에 직접 추가
      if (layerGroup && this.providerType === _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.LEAFLET) {
        var L = getLeaflet();
        if (!L) {
          console.warn('Leaflet 라이브러리를 찾을 수 없습니다.');
          return;
        }

        // 1. 폴리곤 렌더링
        if (analysisResult.polygon && analysisResult.polygon.coordinates && analysisResult.polygon.coordinates.length > 0) {
          try {
            // 폴리곤 데이터 검증
            if (!Array.isArray(analysisResult.polygon.coordinates[0])) {
              console.error("PNU ".concat(pnu, "\uC758 \uD3F4\uB9AC\uACE4 \uB370\uC774\uD130 \uD615\uC2DD\uC774 \uC798\uBABB\uB428"), analysisResult.polygon.coordinates);
              return;
            }

            // Leaflet 폴리곤 생성 및 그룹에 추가
            var coordinates = analysisResult.polygon.coordinates[0].map(function (coord) {
              return [coord[1], coord[0]];
            });
            var polygon = L.polygon(coordinates, {
              color: color,
              weight: 3,
              opacity: 0.5,
              fillColor: color,
              fillOpacity: 0.2,
              className: "analysis-polygon analysis-pnu-".concat(pnu)
            }).bindPopup("<div><strong>PNU:</strong> ".concat(pnu, "</div><div><strong>\uC544\uC774\uC18C\uD06C\uB860\uB9F5</strong></div>"));

            // 레이어 그룹에 추가
            layerGroup.addLayer(polygon);
            console.log("PNU ".concat(pnu, "\uC758 \uD3F4\uB9AC\uACE4 \uCD94\uAC00 \uC644\uB8CC"));
          } catch (error) {
            console.error("PNU ".concat(pnu, "\uC758 \uD3F4\uB9AC\uACE4 \uB370\uC774\uD130 \uCC98\uB9AC \uC911 \uC624\uB958 \uBC1C\uC0DD:"), error);
          }
        } else {
          console.log("PNU ".concat(pnu, "\uC5D0 \uC720\uD6A8\uD55C \uD3F4\uB9AC\uACE4 \uB370\uC774\uD130 \uC5C6\uC74C"));
        }

        // 2. 그리드 포인트 렌더링
        if (analysisResult.gridPoints && analysisResult.gridPoints.length > 0) {
          try {
            this.renderGridPointsToGroup(pnu, analysisResult.gridPoints, color, layerGroup);
          } catch (error) {
            console.error("PNU ".concat(pnu, "\uC758 \uADF8\uB9AC\uB4DC \uD3EC\uC778\uD2B8 \uCC98\uB9AC \uC911 \uC624\uB958 \uBC1C\uC0DD:"), error);
          }
        }
      } else {
        // 다른 프로바이더의 경우 기존 방식으로 그리기
        try {
          // 1. 폴리곤 렌더링
          if (analysisResult.polygon && analysisResult.polygon.coordinates && analysisResult.polygon.coordinates.length > 0) {
            var polygonFeature = {
              positions: analysisResult.polygon.coordinates[0].map(function (coord) {
                return [coord[1], coord[0]];
              }),
              options: {
                color: color,
                weight: 3,
                opacity: 0.5,
                fillColor: color,
                fillOpacity: 0.2,
                className: "analysis-polygon analysis-pnu-".concat(pnu)
              },
              popup: "<div><strong>PNU:</strong> ".concat(pnu, "</div><div><strong>\uC544\uC774\uC18C\uD06C\uB860\uB9F5</strong></div>")
            };
            this.mapProvider.addPolygons([polygonFeature]);
          }

          // 2. 그리드 포인트 렌더링
          this.renderGridPoints(pnu, analysisResult.gridPoints, color);
        } catch (error) {
          console.error("PNU ".concat(pnu, " \uB370\uC774\uD130 \uADF8\uB9AC\uAE30 \uC911 \uC624\uB958 \uBC1C\uC0DD:"), error);
        }
      }
    }

    /**
     * 그리드 포인트를 레이어 그룹에 추가
     * @param {string} pnu PNU 코드
     * @param {Array} gridPoints 그리드 포인트 데이터 배열
     * @param {string} color 색상
     * @param {Object} layerGroup Leaflet 레이어 그룹
     */
  }, {
    key: "renderGridPointsToGroup",
    value: function renderGridPointsToGroup(pnu, gridPoints, color, layerGroup) {
      if (!gridPoints || gridPoints.length === 0 || !layerGroup) return;
      var L = getLeaflet();
      if (!L) return;

      // 그리드 포인트 값의 최대/최소값 계산 (스케일링용)
      var validPoints = gridPoints.filter(function (p) {
        return p.value !== null && p.value !== undefined;
      });
      var minValue = Infinity;
      var maxValue = -Infinity;
      validPoints.forEach(function (point) {
        var value = parseFloat(point.value);
        if (!isNaN(value)) {
          minValue = Math.min(minValue, value);
          maxValue = Math.max(maxValue, value);
        }
      });

      // 최소/최대값이 동일한 경우 처리
      if (minValue === maxValue) {
        minValue = maxValue - 1; // 나눗셈 오류 방지
      }

      // 그리드 포인트 마커 생성
      gridPoints.forEach(function (point) {
        // 값이 있는 포인트만 처리
        var hasValue = point.value !== null && point.value !== undefined;
        var radius = 8; // 기본 반지름
        var fillOpacity = 0.8; // 기본 투명도

        // 값에 따라 반지름과 투명도 계산
        if (hasValue) {
          var value = parseFloat(point.value);
          if (!isNaN(value)) {
            // 값의 범위에 따라 8~20px 크기로 스케일링
            var normalizedValue = (value - minValue) / (maxValue - minValue);
            radius = 8 + normalizedValue * 12; // 8~20px
            fillOpacity = 0.4 + normalizedValue * 0.6; // 0.4~1.0
          }
        }

        // 그리드 포인트 서클 마커 생성
        var circleMarker = L.circleMarker([point.lat, point.lon], {
          radius: radius,
          color: '#000',
          weight: 1,
          opacity: 1,
          fillColor: hasValue ? color : '#aaaaaa',
          fillOpacity: fillOpacity,
          className: "analysis-grid-point analysis-pnu-".concat(pnu)
        }).bindPopup("\n        <div>\n          <strong>PNU:</strong> ".concat(pnu, "<br>\n          <strong>\uC88C\uD45C:</strong> ").concat(point.lat, ", ").concat(point.lon, "<br>\n          <strong>\uAC12:</strong> ").concat(hasValue ? point.value : '없음', "\n        </div>\n      "));

        // 레이어 그룹에 추가
        layerGroup.addLayer(circleMarker);
      });
      console.log("PNU ".concat(pnu, "\uC758 \uADF8\uB9AC\uB4DC \uD3EC\uC778\uD2B8 ").concat(gridPoints.length, "\uAC1C \uCD94\uAC00 \uC644\uB8CC"));
    }

    /**
     * 그리드 포인트 렌더링 (기존 방식)
     * @param {string} pnu PNU 코드
     * @param {Array} gridPoints 그리드 포인트 데이터 배열
     * @param {string} color 색상
     */
  }, {
    key: "renderGridPoints",
    value: function renderGridPoints(pnu, gridPoints, color) {
      if (!gridPoints || gridPoints.length === 0) return;

      // 그리드 포인트 값의 최대/최소값 계산 (스케일링용)
      var validPoints = gridPoints.filter(function (p) {
        return p.value !== null && p.value !== undefined;
      });
      var minValue = Infinity;
      var maxValue = -Infinity;
      validPoints.forEach(function (point) {
        var value = parseFloat(point.value);
        if (!isNaN(value)) {
          minValue = Math.min(minValue, value);
          maxValue = Math.max(maxValue, value);
        }
      });

      // 최소/최대값이 동일한 경우 처리
      if (minValue === maxValue) {
        minValue = maxValue - 1; // 나눗셈 오류 방지
      }

      // 그리드 포인트 마커 생성
      var markers = gridPoints.map(function (point) {
        // 값이 있는 포인트만 처리
        var hasValue = point.value !== null && point.value !== undefined;
        var radius = 8; // 기본 반지름
        var fillOpacity = 0.8; // 기본 투명도

        // 값에 따라 반지름과 투명도 계산
        if (hasValue) {
          var value = parseFloat(point.value);
          if (!isNaN(value)) {
            // 값의 범위에 따라 8~20px 크기로 스케일링
            var normalizedValue = (value - minValue) / (maxValue - minValue);
            radius = 8 + normalizedValue * 12; // 8~20px
            fillOpacity = 0.4 + normalizedValue * 0.6; // 0.4~1.0
          }
        }
        return {
          position: [point.lat, point.lon],
          // [lat, lng] 형식
          options: {
            radius: radius,
            color: '#000',
            weight: 1,
            opacity: 1,
            fillColor: hasValue ? color : '#aaaaaa',
            fillOpacity: fillOpacity,
            className: "analysis-grid-point analysis-pnu-".concat(pnu) // CSS 클래스 추가
          },
          popup: "\n          <div>\n            <strong>PNU:</strong> ".concat(pnu, "<br>\n            <strong>\uC88C\uD45C:</strong> ").concat(point.lat, ", ").concat(point.lon, "<br>\n            <strong>\uAC12:</strong> ").concat(hasValue ? point.value : '없음', "\n          </div>\n        ")
        };
      });
      this.mapProvider.addMarkers(markers);
    }

    /**
     * 특정 PNU의 분석 결과 제거
     * @param {string} pnu 제거할 PNU 코드
     */
  }, {
    key: "removeAnalysisData",
    value: function removeAnalysisData(pnu) {
      if (!pnu || !this.analysisData.has(pnu)) return;

      // 데이터에서 제거
      this.analysisData["delete"](pnu);

      // 맵에서 해당 PNU 레이어만 제거
      this.hidePnuLayer(pnu);
      console.log("PNU ".concat(pnu, "\uC758 \uBD84\uC11D \uACB0\uACFC \uC0AD\uC81C\uB428, \uB0A8\uC740 \uB370\uC774\uD130: ").concat(this.analysisData.size, "\uAC1C"));

      // 맵 뷰 조정 (남은 레이어에 맞게)
      this.fitMapToActiveData();
    }

    /**
     * 특정 PNU의 분석 레이어 숨기기
     * @param {string} pnu 숨길 PNU 코드
     */
  }, {
    key: "hidePnuLayer",
    value: function hidePnuLayer(pnu) {
      // 레이어 그룹 방식으로 처리
      if (this.analysisLayerGroups && this.analysisLayerGroups.has(pnu)) {
        try {
          var layerGroup = this.analysisLayerGroups.get(pnu);

          // 메인 그룹에서 제거
          if (this.mainLayerGroup) {
            this.mainLayerGroup.removeLayer(layerGroup);
          }

          // 저장된 그룹 제거
          this.analysisLayerGroups["delete"](pnu);
          console.log("PNU ".concat(pnu, "\uC758 \uB808\uC774\uC5B4 \uADF8\uB8F9 \uC81C\uAC70\uB428"));
        } catch (error) {
          console.error("PNU ".concat(pnu, "\uC758 \uB808\uC774\uC5B4 \uADF8\uB8F9 \uC81C\uAC70 \uC911 \uC624\uB958 \uBC1C\uC0DD:"), error);
        }
      } else {
        // 기존 방식 (개별 레이어 제거)
        if (this.providerType === _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.LEAFLET && this.mapProvider.leafletMap) {
          var removedCount = 0;
          this.mapProvider.leafletMap.eachLayer(function (layer) {
            if (layer.options && layer.options.className && layer.options.className.includes("analysis-pnu-".concat(pnu))) {
              try {
                layer.remove();
                removedCount++;
              } catch (error) {
                console.error("PNU ".concat(pnu, " \uB808\uC774\uC5B4 \uC81C\uAC70 \uC911 \uC624\uB958:"), error);
              }
            }
          });
          console.log("PNU ".concat(pnu, "\uC758 \uB808\uC774\uC5B4 ").concat(removedCount, "\uAC1C \uC81C\uAC70\uB428"));
        }
      }
    }

    /**
     * 특정 PNU의 분석 레이어 숨기기 (인터페이스용 함수 이름)
     * @param {string} pnu 숨길 PNU 코드
     */
  }, {
    key: "hideAnalysisLayer",
    value: function hideAnalysisLayer(pnu) {
      this.hidePnuLayer(pnu);
    }

    /**
     * 특정 PNU의 분석 레이어 표시하기
     * @param {string} pnu 표시할 PNU 코드
     */
  }, {
    key: "showAnalysisLayer",
    value: function showAnalysisLayer(pnu) {
      if (!pnu || !this.analysisData.has(pnu)) return;

      // 데이터 가져오기
      var analysisResult = this.analysisData.get(pnu);

      // 레이어 그리기
      this.drawSingleAnalysisResult(pnu, analysisResult);
      console.log("PNU ".concat(pnu, "\uC758 \uB808\uC774\uC5B4 \uD45C\uC2DC\uB428"));
    }

    /**
     * PNU 활성화 상태 업데이트
     * @param {string} pnu PNU 코드
     * @param {boolean} isActive 활성화 상태
     */
  }, {
    key: "updateAnalysisDataActiveState",
    value: function updateAnalysisDataActiveState(pnu, isActive) {
      if (!pnu || !this.analysisData.has(pnu)) return;

      // 분석 데이터 가져오기
      var analysisData = this.analysisData.get(pnu);

      // 활성화 상태 업데이트
      analysisData.isActive = isActive;

      // 데이터 업데이트
      this.analysisData.set(pnu, analysisData);
      console.log("PNU ".concat(pnu, " \uD65C\uC131\uD654 \uC0C1\uD0DC \uBCC0\uACBD: ").concat(isActive));
    }

    /**
     * 특정 PNU에 대한 분석 데이터 존재 여부 확인
     * @param {string} pnu 확인할 PNU 코드
     * @returns {boolean} 데이터 존재 여부
     */
  }, {
    key: "hasAnalysisData",
    value: function hasAnalysisData(pnu) {
      return this.analysisData.has(pnu);
    }

    /**
     * 이전 PNU 데이터 마커와 폴리곤 제거 (분석 결과는 유지)
     */
  }, {
    key: "clearPnuLayers",
    value: function clearPnuLayers() {
      if (!this.mapProvider) return;
      console.log('기본 PNU 레이어 제거 (분석 레이어는 유지)');

      // 모든 마커와 폴리곤 제거 (분석 레이어 제외)
      if (this.providerType === _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.LEAFLET && this.mapProvider.leafletMap) {
        var L = getLeaflet();
        if (!L) {
          console.warn('Leaflet 라이브러리를 찾을 수 없습니다.');
          this.mapProvider.clearMarkers();
          this.mapProvider.clearPolygons();
          return;
        }
        this.mapProvider.leafletMap.eachLayer(function (layer) {
          // 분석 레이어가 아닌 경우만 제거
          if (!(layer.options && layer.options.className && (layer.options.className.includes('analysis-polygon') || layer.options.className.includes('analysis-grid-point')))) {
            // 기본 마커 또는 폴리곤인 경우만 제거
            if (layer instanceof L.Marker || layer instanceof L.Polygon) {
              try {
                layer.remove();
              } catch (error) {
                console.error('레이어 제거 중 오류 발생:', error);
              }
            }
          }
        });
      } else {
        // 다른 프로바이더의 경우 기존 메서드 사용
        this.mapProvider.clearMarkers();
        this.mapProvider.clearPolygons();
      }
    }

    /**
     * 맵 뷰 조정 (데이터가 모두 보이도록)
     */
  }, {
    key: "fitMapToData",
    value: function fitMapToData() {
      if (this.mapProvider && typeof this.mapProvider.fitToData === 'function') {
        this.mapProvider.fitToData();
      }
    }

    /**
     * 모든 분석 결과 데이터 가져오기
     * @returns {Map} PNU를 키로 하는 분석 결과 데이터 맵
     */
  }, {
    key: "getAllAnalysisData",
    value: function getAllAnalysisData() {
      return this.analysisData;
    }

    /**
     * 맵 프로바이더 변경 시 인스턴스 업데이트
     * @param {Object} mapProvider 새 맵 프로바이더 객체
     * @param {string} providerType 새 맵 프로바이더 타입
     */
  }, {
    key: "updateMapProvider",
    value: function updateMapProvider(mapProvider, providerType) {
      this.mapProvider = mapProvider;
      this.providerType = providerType;

      // 레이어 그룹 초기화
      this.initLayerGroups();
    }

    /**
     * PNU별로 일관된 색상 인덱스를 생성하는 헬퍼 메서드
     * @param {string} pnu PNU 코드
     * @returns {number} 색상 인덱스
     */
  }, {
    key: "getPnuColorIndex",
    value: function getPnuColorIndex(pnu) {
      // PNU 문자열을 숫자 해시로 변환
      var hash = 0;
      for (var i = 0; i < pnu.length; i++) {
        hash = (hash << 5) - hash + pnu.charCodeAt(i);
        hash |= 0; // 32비트 정수로 변환
      }

      // 음수가 나올 수 있으므로 항상 양수로 변환
      hash = Math.abs(hash);

      // 색상 팔레트 크기로 나눈 나머지 반환
      return hash % this.colorPalette.length;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/map/MapProvider.js":
/*!*******************************************!*\
  !*** ./src/components/map/MapProvider.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapProvider)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 맵 프로바이더 추상 클래스
 * 모든 맵 라이브러리 구현체는 이 추상 클래스를 상속해야 합니다.
 */
var MapProvider = /*#__PURE__*/function () {
  /**
   * 맵 프로바이더 생성
   * @param {HTMLElement} container 맵을 표시할 컨테이너 요소
   * @param {Object} config 맵 설정
   */
  function MapProvider(container, config) {
    _classCallCheck(this, MapProvider);
    this.container = container;
    this.config = config;
    if (this.constructor === MapProvider) {
      throw new Error('MapProvider는 추상 클래스이므로 직접 인스턴스화할 수 없습니다.');
    }
  }

  /**
   * 맵 초기화
   * @abstract
   */
  return _createClass(MapProvider, [{
    key: "initialize",
    value: function initialize() {
      throw new Error('initialize 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
    }

    /**
     * 맵 확대
     * @abstract
     */
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      throw new Error('zoomIn 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
    }

    /**
     * 맵 축소
     * @abstract
     */
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      throw new Error('zoomOut 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
    }

    /**
     * 맵 초기화 (원래 위치와 줌 레벨로 복귀)
     * @abstract
     */
  }, {
    key: "resetView",
    value: function resetView() {
      throw new Error('resetView 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
    }

    /**
     * 마커 추가
     * @abstract
     * @param {Array<Object>} markers 표시할 마커 정보 배열
     */
  }, {
    key: "addMarkers",
    value: function addMarkers(markers) {
      throw new Error('addMarkers 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
    }

    /**
     * 마커 제거
     * @abstract
     */
  }, {
    key: "clearMarkers",
    value: function clearMarkers() {
      throw new Error('clearMarkers 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
    }

    /**
     * 폴리곤 추가
     * @abstract
     * @param {Array<Object>} polygons 표시할 폴리곤 정보 배열
     */
  }, {
    key: "addPolygons",
    value: function addPolygons(polygons) {
      throw new Error('addPolygons 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
    }

    /**
     * 폴리곤 제거
     * @abstract
     */
  }, {
    key: "clearPolygons",
    value: function clearPolygons() {
      throw new Error('clearPolygons 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
    }

    /**
     * 맵 이벤트 리스너 등록
     * @abstract
     * @param {string} event 이벤트 이름
     * @param {Function} callback 콜백 함수
     */
  }, {
    key: "on",
    value: function on(event, callback) {
      throw new Error('on 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
    }

    /**
     * 맵 이벤트 리스너 제거
     * @abstract
     * @param {string} event 이벤트 이름
     * @param {Function} callback 콜백 함수
     */
  }, {
    key: "off",
    value: function off(event, callback) {
      throw new Error('off 메서드는 반드시 상속 클래스에서 구현해야 합니다.');
    }
  }]);
}();


/***/ }),

/***/ "./src/components/map/MapProviderManager.js":
/*!**************************************************!*\
  !*** ./src/components/map/MapProviderManager.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapProviderManager)
/* harmony export */ });
/* harmony import */ var _core_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/config.js */ "./src/core/config.js");
/* harmony import */ var _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MapFactory.js */ "./src/components/map/MapFactory.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * MapProviderManager.js
 * 맵 프로바이더 관리 모듈
 * 맵 프로바이더의 초기화, 변경, 저장 등을 관리합니다.
 */



var MapProviderManager = /*#__PURE__*/function () {
  /**
   * MapProviderManager 생성자
   * @param {string} [initialProviderType=null] 초기 맵 프로바이더 타입
   */
  function MapProviderManager() {
    var initialProviderType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, MapProviderManager);
    // 기본 맵 프로바이더 결정 (저장된 설정 또는 기본값)
    this.providerType = initialProviderType || this.getSavedProviderType() || _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.LEAFLET;
    this.mapProvider = null;
    this.isInitialized = false;
    this.isInitializing = false;

    // 사용 가능한 프로바이더 목록
    this.availableProviders = _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAvailableProviders();
  }

  /**
   * 저장된 맵 프로바이더 타입 가져오기
   * @returns {string|null} 저장된 맵 프로바이더 타입 또는 null
   */
  return _createClass(MapProviderManager, [{
    key: "getSavedProviderType",
    value: function getSavedProviderType() {
      try {
        return localStorage.getItem(_core_config_js__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.MAP_PROVIDER);
      } catch (e) {
        console.error('로컬 스토리지 접근 실패:', e);
        return null;
      }
    }

    /**
     * 맵 프로바이더 타입 저장
     * @param {string} providerType 맵 프로바이더 타입
     */
  }, {
    key: "saveProviderType",
    value: function saveProviderType(providerType) {
      try {
        localStorage.setItem(_core_config_js__WEBPACK_IMPORTED_MODULE_0__.STORAGE_KEYS.MAP_PROVIDER, providerType);
      } catch (e) {
        console.error('로컬 스토리지 저장 실패:', e);
      }
    }

    /**
     * 맵 프로바이더 초기화
     * @param {HTMLElement} containerElement 맵을 표시할 컨테이너 요소
     * @returns {Promise<Object>} 초기화된 맵 프로바이더
     */
  }, {
    key: "initializeProvider",
    value: (function () {
      var _initializeProvider = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(containerElement) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.isInitializing || this.isInitialized)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", this.mapProvider);
            case 2:
              this.isInitializing = true;
              _context.prev = 3;
              // 맵 프로바이더 생성
              this.mapProvider = _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].createProvider(this.providerType, containerElement, _core_config_js__WEBPACK_IMPORTED_MODULE_0__.MAP_CONFIG);

              // 맵 프로바이더 비동기 초기화
              _context.next = 7;
              return this.mapProvider.initialize();
            case 7:
              // 초기화 성공
              this.isInitialized = true;

              // 맵 프로바이더 타입 저장
              this.saveProviderType(this.providerType);
              console.log('맵 프로바이더 초기화 성공:', this.providerType);
              return _context.abrupt("return", this.mapProvider);
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](3);
              console.error('맵 프로바이더 초기화 실패:', _context.t0);
              throw _context.t0;
            case 17:
              _context.prev = 17;
              this.isInitializing = false;
              return _context.finish(17);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 13, 17, 20]]);
      }));
      function initializeProvider(_x) {
        return _initializeProvider.apply(this, arguments);
      }
      return initializeProvider;
    }()
    /**
     * 맵 프로바이더 변경
     * @param {string} providerType 새 맵 프로바이더 타입
     * @param {HTMLElement} containerElement 맵을 표시할 컨테이너 요소
     * @returns {Promise<Object>} 변경된 맵 프로바이더
     */
    )
  }, {
    key: "changeProvider",
    value: (function () {
      var _changeProvider = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(providerType, containerElement) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.isInitializing || providerType === this.providerType)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", this.mapProvider);
            case 2:
              console.log("\uB9F5 \uD504\uB85C\uBC14\uC774\uB354 \uBCC0\uACBD: ".concat(this.providerType, " -> ").concat(providerType));
              this.isInitializing = true;
              this.isInitialized = false;

              // 이전 맵 프로바이더 정리
              if (this.mapProvider) {
                try {
                  // 맵 요소 제거 (필요시 추가 정리 작업)
                  if (this.providerType === _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.LEAFLET) {
                    // Leaflet 맵 제거 작업
                    if (this.mapProvider.leafletMap) {
                      this.mapProvider.leafletMap.remove();
                    }
                  } else if (this.providerType === _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].PROVIDER_TYPES.OPENLAYERS) {
                    // OpenLayers 맵 제거 작업
                    if (this.mapProvider.map) {
                      this.mapProvider.map.setTarget(null);
                    }
                  }
                } catch (error) {
                  console.error('이전 맵 정리 중 오류 발생:', error);
                }
              }

              // 새 프로바이더 타입 설정
              this.providerType = providerType;
              _context2.prev = 7;
              // 맵 프로바이더 생성
              this.mapProvider = _MapFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"].createProvider(this.providerType, containerElement, _core_config_js__WEBPACK_IMPORTED_MODULE_0__.MAP_CONFIG);

              // 맵 프로바이더 비동기 초기화
              _context2.next = 11;
              return this.mapProvider.initialize();
            case 11:
              // 초기화 성공
              this.isInitialized = true;

              // 맵 프로바이더 타입 저장
              this.saveProviderType(this.providerType);
              console.log('맵 프로바이더 변경 성공:', this.providerType);
              return _context2.abrupt("return", this.mapProvider);
            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](7);
              console.error('맵 프로바이더 변경 실패:', _context2.t0);
              throw _context2.t0;
            case 21:
              _context2.prev = 21;
              this.isInitializing = false;
              return _context2.finish(21);
            case 24:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[7, 17, 21, 24]]);
      }));
      function changeProvider(_x2, _x3) {
        return _changeProvider.apply(this, arguments);
      }
      return changeProvider;
    }()
    /**
     * 현재 맵 프로바이더 가져오기
     * @returns {Object} 맵 프로바이더
     */
    )
  }, {
    key: "getProvider",
    value: function getProvider() {
      return this.mapProvider;
    }

    /**
     * 현재 맵 프로바이더 타입 가져오기
     * @returns {string} 맵 프로바이더 타입
     */
  }, {
    key: "getProviderType",
    value: function getProviderType() {
      return this.providerType;
    }

    /**
     * 맵 프로바이더 초기화 상태 확인
     * @returns {boolean} 초기화 여부
     */
  }, {
    key: "isProviderInitialized",
    value: function isProviderInitialized() {
      return this.isInitialized;
    }

    /**
     * 사용 가능한 프로바이더 목록 가져오기
     * @returns {Array} 사용 가능한 프로바이더 목록
     */
  }, {
    key: "getAvailableProviders",
    value: function getAvailableProviders() {
      return this.availableProviders;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/map/MapUIController.js":
/*!***********************************************!*\
  !*** ./src/components/map/MapUIController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MapUIController)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * MapUIController.js
 * 맵 UI 컨트롤러 모듈
 * 맵 관련 UI 요소 렌더링 및 이벤트 처리를 담당합니다.
 */
var MapUIController = /*#__PURE__*/function () {
  /**
   * MapUIController 생성자
   * @param {HTMLElement} container 컴포넌트를 추가할 컨테이너
   * @param {Object} callbacks 콜백 함수 모음
   */
  function MapUIController(container) {
    var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, MapUIController);
    this.container = container;
    this.mapView = null;
    this.callbacks = {
      onProviderChange: callbacks.onProviderChange || function () {},
      onReset: callbacks.onReset || function () {},
      onStyleChange: callbacks.onStyleChange || function () {}
    };
  }

  /**
   * 맵 컨테이너 UI 렌더링
   * @param {Object} initialData 초기 데이터
   */
  return _createClass(MapUIController, [{
    key: "renderMapContainer",
    value: function renderMapContainer() {
      var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _initialData$provider = initialData.providerName,
        providerName = _initialData$provider === void 0 ? '지도 로드 중...' : _initialData$provider;
      this.container.innerHTML = "\n      <div class=\"map-container\">\n        <div class=\"map-header\">\n          <div class=\"map-header-left\">\n            <h4>\uC9C0\uB3C4 \uBDF0</h4>\n          </div>\n          <div class=\"map-header-right\">\n            <div class=\"map-provider-selector\">\n              <button class=\"btn btn-sm btn-outline-secondary\" id=\"currentProvider\">\n                <span class=\"provider-name\">".concat(providerName, "</span>\n                <i class=\"fas fa-chevron-down\"></i>\n              </button>\n              <div class=\"map-provider-dropdown\" id=\"providerDropdown\">\n                <ul class=\"map-provider-list\" id=\"providerList\">\n                  <!-- \uB3D9\uC801\uC73C\uB85C \uCC44\uC6CC\uC9D0 -->\n                </ul>\n              </div>\n            </div>\n            <div id=\"mapStyleControlPlaceholder\" class=\"map-style-control-placeholder\"></div>\n            <button class=\"btn btn-sm btn-outline-secondary\" id=\"resetMapBtn\">\n              <i class=\"fas fa-redo\"></i>\n            </button>\n          </div>\n        </div>\n        <div id=\"mapView\" class=\"map-view\">\n          <div class=\"map-placeholder\">\n            <div class=\"placeholder-content\">\n              <p>\uC9C0\uB3C4\uAC00 \uC5EC\uAE30\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p>\n              <p class=\"text-muted\">PNU \uD544\uD130\uB97C \uC801\uC6A9\uD558\uBA74 \uACB0\uACFC\uAC00 \uC9C0\uB3C4\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    ");
      this.mapView = document.getElementById('mapView');

      // 이벤트 리스너 연결
      this.attachEventListeners();
    }

    /**
     * 이벤트 리스너 연결
     */
  }, {
    key: "attachEventListeners",
    value: function attachEventListeners() {
      var _document$getElementB,
        _this = this;
      // 리셋 버튼 이벤트
      (_document$getElementB = document.getElementById('resetMapBtn')) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', function () {
        _this.callbacks.onReset();
      });

      // 맵 프로바이더 선택기 이벤트 연결
      this.setupProviderSelector();
    }

    /**
     * 맵 프로바이더 선택기 설정
     */
  }, {
    key: "setupProviderSelector",
    value: function setupProviderSelector() {
      var currentProvider = document.getElementById('currentProvider');
      var providerDropdown = document.getElementById('providerDropdown');
      if (!currentProvider || !providerDropdown) return;

      // 드롭다운 토글
      currentProvider.addEventListener('click', function () {
        providerDropdown.classList.toggle('show');
      });

      // 드롭다운 외부 클릭 시 닫기
      document.addEventListener('click', function (event) {
        if (!currentProvider.contains(event.target) && !providerDropdown.contains(event.target)) {
          providerDropdown.classList.remove('show');
        }
      });
    }

    /**
     * 프로바이더 목록 채우기
     * @param {Array} providers 사용 가능한 프로바이더 목록
     * @param {string} activeProviderId 현재 활성화된 프로바이더 ID
     */
  }, {
    key: "populateProviderList",
    value: function populateProviderList(providers, activeProviderId) {
      var _this2 = this,
        _providers$find;
      var providerList = document.getElementById('providerList');
      if (!providerList) return;

      // 프로바이더 목록 생성
      providerList.innerHTML = providers.map(function (provider) {
        return "\n      <li class=\"map-provider-item ".concat(provider.id === activeProviderId ? 'active' : '', "\" data-provider=\"").concat(provider.id, "\">\n        <span class=\"provider-name\">").concat(provider.name, "</span>\n        <span class=\"provider-description\">").concat(provider.description, "</span>\n      </li>\n    ");
      }).join('');

      // 프로바이더 항목 클릭 이벤트
      providerList.querySelectorAll('.map-provider-item').forEach(function (item) {
        item.addEventListener('click', function () {
          var _document$getElementB2;
          var providerId = item.getAttribute('data-provider');

          // 현재 프로바이더와 다른 경우에만 콜백 호출
          if (providerId !== activeProviderId) {
            _this2.callbacks.onProviderChange(providerId);
          }

          // 드롭다운 닫기
          (_document$getElementB2 = document.getElementById('providerDropdown')) === null || _document$getElementB2 === void 0 || _document$getElementB2.classList.remove('show');
        });
      });

      // 현재 프로바이더 표시 업데이트
      this.updateProviderDisplay(((_providers$find = providers.find(function (p) {
        return p.id === activeProviderId;
      })) === null || _providers$find === void 0 ? void 0 : _providers$find.name) || '');
    }

    /**
     * 현재 프로바이더 표시 업데이트
     * @param {string} providerName 프로바이더 이름
     */
  }, {
    key: "updateProviderDisplay",
    value: function updateProviderDisplay(providerName) {
      var currentProvider = document.getElementById('currentProvider');
      if (currentProvider) {
        var nameElement = currentProvider.querySelector('.provider-name');
        if (nameElement) {
          nameElement.textContent = providerName;
        }
      }
    }

    /**
     * 로딩 플레이스홀더 표시
     * @param {string} message 로딩 메시지
     */
  }, {
    key: "showLoadingPlaceholder",
    value: function showLoadingPlaceholder() {
      var _this$mapView;
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '지도 라이브러리를 불러오는 중...';
      var placeholder = (_this$mapView = this.mapView) === null || _this$mapView === void 0 ? void 0 : _this$mapView.querySelector('.map-placeholder');
      if (placeholder) {
        placeholder.style.display = 'flex';
        placeholder.innerHTML = "\n        <div class=\"placeholder-content\">\n          <p>".concat(message, "</p>\n          <div class=\"loading-spinner\"></div>\n        </div>\n      ");
      }
    }

    /**
     * 플레이스홀더 숨기기
     */
  }, {
    key: "hidePlaceholder",
    value: function hidePlaceholder() {
      var _this$mapView2;
      var placeholder = (_this$mapView2 = this.mapView) === null || _this$mapView2 === void 0 ? void 0 : _this$mapView2.querySelector('.map-placeholder');
      if (placeholder) {
        placeholder.style.display = 'none';
      }
    }

    /**
     * 오류 메시지 표시
     * @param {string} errorMessage 오류 메시지
     */
  }, {
    key: "showErrorPlaceholder",
    value: function showErrorPlaceholder(errorMessage) {
      var _this$mapView3;
      var placeholder = (_this$mapView3 = this.mapView) === null || _this$mapView3 === void 0 ? void 0 : _this$mapView3.querySelector('.map-placeholder');
      if (placeholder) {
        placeholder.style.display = 'flex';
        placeholder.innerHTML = "\n        <div class=\"placeholder-content error\">\n          <p><i class=\"fas fa-exclamation-triangle\"></i> \uC624\uB958</p>\n          <p>".concat(errorMessage, "</p>\n        </div>\n      ");
      }
    }

    /**
     * PNU 데이터 정보 플레이스홀더 표시
     * @param {Object} data PNU 데이터
     */
  }, {
    key: "updatePlaceholderWithPnuData",
    value: function updatePlaceholderWithPnuData(data) {
      var _this$mapView4;
      var placeholder = (_this$mapView4 = this.mapView) === null || _this$mapView4 === void 0 ? void 0 : _this$mapView4.querySelector('.map-placeholder');
      if (placeholder) {
        placeholder.innerHTML = "\n        <div class=\"placeholder-content\">\n          <p>PNU \uB370\uC774\uD130 \uB85C\uB4DC\uB428</p>\n          <p>\uCD1D ".concat(data.count, "\uAC1C\uC758 PNU\uAC00 \uC9C0\uB3C4\uC5D0 \uD45C\uC2DC\uB429\uB2C8\uB2E4.</p>\n          <div class=\"pnu-sample\">\n            <p><strong>\uCCAB 5\uAC1C PNU:</strong></p>\n            <ul>\n              ").concat(data.pnuList.slice(0, 5).map(function (pnu) {
          return "<li>".concat(pnu.code || pnu.id || '알 수 없음', "</li>");
        }).join(''), "\n            </ul>\n          </div>\n        </div>\n      ");
      }
    }

    /**
     * 맵 컨테이너 요소 생성
     * @returns {HTMLElement} 맵 컨테이너 요소
     */
  }, {
    key: "createMapElement",
    value: function createMapElement() {
      var mapViewElement = document.getElementById('mapView');
      if (!mapViewElement) return null;

      // 맵 컨테이너 요소 생성
      var mapContainerDiv = document.createElement('div');
      mapContainerDiv.id = 'mapViewContent';
      mapContainerDiv.className = 'map-view-content';
      mapContainerDiv.style.width = '100%';
      mapContainerDiv.style.height = '100%';

      // 자식 요소 중 플레이스홀더를 제외한 모든 요소 제거
      Array.from(mapViewElement.children).forEach(function (child) {
        if (!child.classList.contains('map-placeholder')) {
          mapViewElement.removeChild(child);
        }
      });

      // 새 맵 컨테이너 요소 추가
      mapViewElement.appendChild(mapContainerDiv);
      return mapContainerDiv;
    }

    /**
     * 지도 스타일 컨트롤 추가
     * @param {HTMLElement} controlElement 스타일 컨트롤 요소
     */
  }, {
    key: "addStyleControl",
    value: function addStyleControl(controlElement) {
      var placeholder = document.getElementById('mapStyleControlPlaceholder');
      if (!placeholder) return;
      placeholder.innerHTML = ''; // 기존 내용 제거

      // 스타일 컨트롤 요소가 있으면 추가
      if (controlElement) {
        placeholder.appendChild(controlElement);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/components/map/PnuMapService.js":
/*!*********************************************!*\
  !*** ./src/components/map/PnuMapService.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PnuMapService)
/* harmony export */ });
/* harmony import */ var _strategies_StrategyRegistry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strategies/StrategyRegistry.js */ "./src/components/map/strategies/StrategyRegistry.js");
/* harmony import */ var _services_PnuCoordinateService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/PnuCoordinateService.js */ "./src/services/PnuCoordinateService.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * PNU 맵 서비스
 * PNU 데이터를 맵에 표시하기 위한 통합 서비스를 제공합니다.
 */



var PnuMapService = /*#__PURE__*/function () {
  function PnuMapService() {
    _classCallCheck(this, PnuMapService);
    this.coordinateService = new _services_PnuCoordinateService_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.initialized = false;
    this.isLoadingCoordinates = false;
  }

  /**
   * 서비스 초기화
   * @param {string} csvUrl PNU-좌표 CSV 파일 URL
   * @returns {Promise<void>}
   */
  return _createClass(PnuMapService, [{
    key: "initialize",
    value: (function () {
      var _initialize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var csvUrl,
          firstKey,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              csvUrl = _args.length > 0 && _args[0] !== undefined ? _args[0] : '/data/pnu_coordinates.csv';
              if (!(this.initialized || this.isLoadingCoordinates)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              this.isLoadingCoordinates = true;
              _context.prev = 4;
              console.log('PNU-좌표 데이터 로드 URL:', csvUrl);
              _context.next = 8;
              return this.coordinateService.loadFromCsv(csvUrl);
            case 8:
              this.initialized = true;
              console.log("PNU-\uC88C\uD45C \uB370\uC774\uD130 \uB85C\uB4DC \uC644\uB8CC: ".concat(this.coordinateService.pnuCoordinateMap.size, "\uAC1C \uD56D\uBAA9"));
              if (this.coordinateService.pnuCoordinateMap.size > 0) {
                firstKey = Array.from(this.coordinateService.pnuCoordinateMap.keys())[0];
                console.log('첫 번째 PNU 코드:', firstKey);
                console.log('해당 좌표:', this.coordinateService.pnuCoordinateMap.get(firstKey));
              } else {
                console.warn('PNU-좌표 매핑 데이터가 비어 있습니다!');
              }
              _context.next = 17;
              break;
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](4);
              console.error('PNU-좌표 데이터 로드 오류:', _context.t0);
              throw _context.t0;
            case 17:
              _context.prev = 17;
              this.isLoadingCoordinates = false;
              return _context.finish(17);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[4, 13, 17, 20]]);
      }));
      function initialize() {
        return _initialize.apply(this, arguments);
      }
      return initialize;
    }()
    /**
     * PNU 데이터와 좌표 정보 병합
     * @param {Array<Object>} pnuItems PNU 항목 배열
     * @returns {Array<Object>} 좌표 정보가 추가된 PNU 항목 배열
     */
    )
  }, {
    key: "enrichWithCoordinates",
    value: function enrichWithCoordinates(pnuItems) {
      var _this = this;
      if (!Array.isArray(pnuItems)) {
        return [];
      }
      var enriched = pnuItems.map(function (item) {
        // 이미 좌표 정보가 있는 경우 그대로 반환
        if (item.latitude && item.longitude) {
          return item;
        }

        // 직접 객체 자체가 PNU 코드인 경우 처리
        if (typeof item === 'string') {
          var _coordinates = _this.coordinateService.getCoordinatesByPnu(item);
          if (_coordinates) {
            return _objectSpread({
              pnu: item
            }, _coordinates);
          }
          return {
            pnu: item
          };
        }

        // 객체에서 PNU 코드 필드 찾기
        var pnuCode = item.pnu || item.code || item.id;
        if (!pnuCode) {
          console.warn('PNU 코드를 찾을 수 없는 항목:', item);
          return item;
        }

        // 먼저 정확히 일치하는 PNU 코드 검색
        var coordinates = _this.coordinateService.getCoordinatesByPnu(pnuCode);

        // 찾지 못한 경우 따옴표 추가/제거 버전 시도
        if (!coordinates) {
          var withQuotes = "\"".concat(pnuCode.replace(/"/g, ''), "\"");
          var withoutQuotes = pnuCode.replace(/"/g, '');
          coordinates = _this.coordinateService.getCoordinatesByPnu(withQuotes) || _this.coordinateService.getCoordinatesByPnu(withoutQuotes);
        }
        if (coordinates) {
          console.log('PNU 코드 매핑 성공:', pnuCode);
          return _objectSpread(_objectSpread({}, item), coordinates);
        }
        console.warn('좌표를 찾지 못한 PNU 코드:', pnuCode);
        return item;
      });
      console.log("\uC88C\uD45C \uBCF4\uAC15 \uACB0\uACFC: ".concat(enriched.filter(function (i) {
        return i.latitude && i.longitude;
      }).length, "/").concat(pnuItems.length, " \uD56D\uBAA9\uC5D0 \uC88C\uD45C \uCD94\uAC00"));
      return enriched;
    }

    /**
     * PNU 데이터를 마커로 변환
     * @param {string} providerType 맵 공급자 유형
     * @param {Array<Object>} pnuItems PNU 항목 배열
     * @returns {Array<Object>} 맵 공급자 형식의 마커 객체 배열
     */
  }, {
    key: "toMarkers",
    value: function toMarkers(providerType, pnuItems) {
      // 좌표 정보 병합
      var enrichedItems = this.enrichWithCoordinates(pnuItems);
      console.log("PNU \uB9C8\uCEE4 \uBCC0\uD658 \uC2DC\uC791 - \uC88C\uD45C \uC788\uB294 \uD56D\uBAA9: ".concat(enrichedItems.filter(function (i) {
        return i.latitude && i.longitude;
      }).length, "/").concat(enrichedItems.length));

      // 샘플 데이터 로깅
      if (enrichedItems.length > 0 && enrichedItems[0].latitude && enrichedItems[0].longitude) {
        console.log('좌표 샘플:', {
          pnu: enrichedItems[0].pnu,
          latitude: enrichedItems[0].latitude,
          longitude: enrichedItems[0].longitude
        });
      }

      // 전략 레지스트리를 통해 맵 공급자별 변환
      var markers = _strategies_StrategyRegistry_js__WEBPACK_IMPORTED_MODULE_0__["default"].toMarkers(providerType, enrichedItems);
      console.log("".concat(providerType, " \uB9C8\uCEE4 \uBCC0\uD658 \uACB0\uACFC: ").concat(markers.length, "\uAC1C \uC0DD\uC131\uB428"));
      return markers;
    }

    /**
     * PNU 데이터를 폴리곤으로 변환
     * @param {string} providerType 맵 공급자 유형
     * @param {Array<Object>} pnuItems PNU 항목 배열
     * @returns {Array<Object>} 맵 공급자 형식의 폴리곤 객체 배열
     */
  }, {
    key: "toPolygons",
    value: function toPolygons(providerType, pnuItems) {
      // 좌표 정보 병합
      var enrichedItems = this.enrichWithCoordinates(pnuItems);

      // 전략 레지스트리를 통해 맵 공급자별 변환
      return _strategies_StrategyRegistry_js__WEBPACK_IMPORTED_MODULE_0__["default"].toPolygons(providerType, enrichedItems);
    }

    /**
     * PNU 데이터를 레이어로 변환
     * @param {string} providerType 맵 공급자 유형
     * @param {string} layerType 레이어 유형
     * @param {Array<Object>} pnuItems PNU 항목 배열
     * @param {Object} options 레이어 옵션
     * @returns {Object} 맵 공급자 형식의 레이어 설정 객체
     */
  }, {
    key: "toLayer",
    value: function toLayer(providerType, layerType, pnuItems) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      // 좌표 정보 병합
      var enrichedItems = this.enrichWithCoordinates(pnuItems);

      // 전략 레지스트리를 통해 맵 공급자별 변환
      return _strategies_StrategyRegistry_js__WEBPACK_IMPORTED_MODULE_0__["default"].toLayer(providerType, layerType, enrichedItems, options);
    }

    /**
     * PNU 데이터 세트 처리
     * @param {object} pnuDataSet PNU 데이터 세트 (pnuList, count, hasPolygons 등 포함)
     * @param {string} providerType 맵 공급자 유형
     * @returns {object} 처리된 맵 객체 세트
     */
  }, {
    key: "processPnuDataSet",
    value: function processPnuDataSet(pnuDataSet, providerType) {
      if (!pnuDataSet || !Array.isArray(pnuDataSet.pnuList)) {
        console.warn('processPnuDataSet: 유효하지 않은 PNU 데이터 세트');
        return {
          markers: [],
          polygons: []
        };
      }
      console.log("processPnuDataSet: ".concat(pnuDataSet.pnuList.length, "\uAC1C \uD56D\uBAA9 \uCC98\uB9AC \uC2DC\uC791 (\uD3F4\uB9AC\uACE4: ").concat(pnuDataSet.hasPolygons ? '예' : '아니오', ")"));
      var result = {};

      // 데이터 유형에 따라 처리
      if (pnuDataSet.hasPolygons) {
        // 폴리곤 데이터가 있는 경우
        result.polygons = this.toPolygons(providerType, pnuDataSet.pnuList);
        result.markers = []; // 폴리곤과 마커 중복 방지
        console.log("\uD3F4\uB9AC\uACE4 \uB370\uC774\uD130 \uC0DD\uC131: ".concat(result.polygons.length, "\uAC1C"));
      } else {
        // 점 데이터로 표시
        result.markers = this.toMarkers(providerType, pnuDataSet.pnuList);
        result.polygons = []; // 마커만 사용
        console.log("\uB9C8\uCEE4 \uB370\uC774\uD130 \uC0DD\uC131: ".concat(result.markers.length, "\uAC1C"));
      }

      // 사용자 추가 데이터 (히트맵, 클러스터 등이 필요한 경우)
      if (pnuDataSet.useHeatmap) {
        result.heatmap = this.toLayer(providerType, 'heatmap', pnuDataSet.pnuList, pnuDataSet.heatmapOptions || {});
        console.log('히트맵 레이어 생성됨');
      }
      if (pnuDataSet.useCluster) {
        result.cluster = this.toLayer(providerType, 'cluster', pnuDataSet.pnuList, pnuDataSet.clusterOptions || {});
        console.log('클러스터 레이어 생성됨');
      }
      return result;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/map/providers/LeafletProvider.js":
/*!*********************************************************!*\
  !*** ./src/components/map/providers/LeafletProvider.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LeafletProvider)
/* harmony export */ });
/* harmony import */ var _MapProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MapProvider.js */ "./src/components/map/MapProvider.js");
/* harmony import */ var _services_LeafletLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/LeafletLoader.js */ "./src/components/map/services/LeafletLoader.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Leaflet 기반 맵 프로바이더 구현
 */



var LeafletProvider = /*#__PURE__*/function (_MapProvider) {
  /**
   * Leaflet 맵 프로바이더 생성
   * @param {HTMLElement} container 맵을 표시할 컨테이너 요소
   * @param {Object} config 맵 설정
   */
  function LeafletProvider(container, config) {
    var _this;
    _classCallCheck(this, LeafletProvider);
    _this = _callSuper(this, LeafletProvider, [container, config]);
    _this.leafletMap = null;
    _this.markerLayer = null;
    _this.polygonLayer = null;
    _this.baseLayers = {}; // 기본 타일 레이어 저장
    _this.currentStyle = 'standard'; // 현재 스타일
    return _this;
  }

  /**
   * Leaflet 맵 초기화
   * @returns {Promise<this>} 초기화 완료 시 해결되는 Promise
   */
  _inherits(LeafletProvider, _MapProvider);
  return _createClass(LeafletProvider, [{
    key: "initialize",
    value: (function () {
      var _initialize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var markerStyle;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services_LeafletLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].load();
            case 3:
              if (window.L) {
                _context.next = 5;
                break;
              }
              throw new Error('Leaflet 라이브러리가 로드되지 않았습니다.');
            case 5:
              console.log('Leaflet 맵 초기화 시작');

              // 커스텀 마커 스타일 추가
              markerStyle = document.createElement('style');
              markerStyle.textContent = "\n        .custom-marker-container {\n          background: transparent;\n          border: none;\n        }\n        .custom-marker {\n          width: 10px;\n          height: 10px;\n          border-radius: 50%;\n          box-shadow: 0 0 0 2px white;\n        }\n      ";
              document.head.appendChild(markerStyle);

              // Leaflet 맵 생성
              this.leafletMap = L.map(this.container, {
                center: this.config.defaultCenter,
                zoom: this.config.defaultZoom,
                zoomControl: false // 기본 줌 컨트롤 비활성화 (커스텀 컨트롤 사용)
              });

              // 타일 레이어 초기화
              this._initTileLayers();

              // 저장된 스타일 적용
              this._loadSavedStyle();

              // 스타일 컨트롤 추가
              this._addStyleControl();

              // 레이어 그룹 초기화
              this.markerLayer = L.layerGroup().addTo(this.leafletMap);
              this.polygonLayer = L.layerGroup().addTo(this.leafletMap);
              console.log('Leaflet 맵 초기화 완료');
              return _context.abrupt("return", this);
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](0);
              console.error('Leaflet 맵 초기화 실패:', _context.t0);
              throw _context.t0;
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 19]]);
      }));
      function initialize() {
        return _initialize.apply(this, arguments);
      }
      return initialize;
    }()
    /**
     * 타일 레이어 초기화
     * @private
     */
    )
  }, {
    key: "_initTileLayers",
    value: function _initTileLayers() {
      var _this$config$cartoDB, _this$config$cartoDB2, _this$config$cartoDB3, _this$config$cartoDB4, _this$config$cartoDB5;
      // 기본 OSM 타일
      this.baseLayers.standard = L.tileLayer(this.config.tileProvider, {
        attribution: this.config.attribution
      });

      // CartoDB Voyager (컬러)
      this.baseLayers.voyager = L.tileLayer(((_this$config$cartoDB = this.config.cartoDB) === null || _this$config$cartoDB === void 0 ? void 0 : _this$config$cartoDB.voyager) || 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: this.config.attribution,
        subdomains: 'abcd',
        maxZoom: 19
      });

      // CartoDB Positron (라이트 스타일)
      this.baseLayers.light = L.tileLayer(((_this$config$cartoDB2 = this.config.cartoDB) === null || _this$config$cartoDB2 === void 0 ? void 0 : _this$config$cartoDB2.positron) || 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: this.config.attribution,
        subdomains: 'abcd',
        maxZoom: 19
      });

      // CartoDB Dark Matter (다크 스타일)
      this.baseLayers.dark = L.tileLayer(((_this$config$cartoDB3 = this.config.cartoDB) === null || _this$config$cartoDB3 === void 0 ? void 0 : _this$config$cartoDB3.dark) || 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: this.config.attribution,
        subdomains: 'abcd',
        maxZoom: 19
      });

      // CartoDB Positron No Labels (라이트 스타일, 라벨 없음)
      this.baseLayers.lightNoLabels = L.tileLayer(((_this$config$cartoDB4 = this.config.cartoDB) === null || _this$config$cartoDB4 === void 0 ? void 0 : _this$config$cartoDB4.positronNoLabels) || 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
        attribution: this.config.attribution,
        subdomains: 'abcd',
        maxZoom: 19
      });

      // CartoDB Dark Matter No Labels (다크 스타일, 라벨 없음)
      this.baseLayers.darkNoLabels = L.tileLayer(((_this$config$cartoDB5 = this.config.cartoDB) === null || _this$config$cartoDB5 === void 0 ? void 0 : _this$config$cartoDB5.darkNoLabels) || 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
        attribution: this.config.attribution,
        subdomains: 'abcd',
        maxZoom: 19
      });

      // 그레이스케일 OSM
      this.baseLayers.grayscaleFilter = L.tileLayer(this.config.tileProvider, {
        attribution: this.config.attribution,
        className: 'leaflet-grayscale-filter'
      });

      // 그레이스케일 스타일 추가
      var styleEl = document.createElement('style');
      styleEl.textContent = "\n      .leaflet-grayscale-filter {\n        filter: grayscale(100%) !important;\n        -webkit-filter: grayscale(100%) !important;\n      }\n    ";
      document.head.appendChild(styleEl);

      // 기본 레이어 추가 (Voyager)
      this.baseLayers.voyager.addTo(this.leafletMap);
      this.currentStyle = 'voyager';
    }

    /**
     * 저장된 스타일 불러오기
     * @private
     */
  }, {
    key: "_loadSavedStyle",
    value: function _loadSavedStyle() {
      try {
        var _this$config$STORAGE_;
        if (window.localStorage && (_this$config$STORAGE_ = this.config.STORAGE_KEYS) !== null && _this$config$STORAGE_ !== void 0 && _this$config$STORAGE_.MAP_STYLE) {
          var savedStyle = localStorage.getItem(this.config.STORAGE_KEYS.MAP_STYLE);
          if (savedStyle && this.baseLayers[savedStyle]) {
            this.setMapStyle(savedStyle);
          }
        }
      } catch (e) {
        console.warn('로컬 스토리지에서 맵 스타일 불러오기 실패:', e);
      }
    }

    /**
     * 스타일 컨트롤 추가
     * @private
     */
  }, {
    key: "_addStyleControl",
    value: function _addStyleControl() {
      var _this2 = this;
      try {
        // 스타일 메뉴 컨테이너 생성
        var container = document.createElement('div');
        container.className = 'map-style-control-container';

        // 메인 버튼 생성
        var button = document.createElement('button');
        button.innerHTML = '지도 스타일';
        button.className = 'btn btn-sm btn-outline-secondary leaflet-style-toggle';
        button.title = '지도 스타일 변경';

        // 드롭다운 메뉴 생성
        var menu = document.createElement('div');
        menu.className = 'leaflet-style-menu';

        // 스타일 옵션들
        var options = [{
          id: 'voyager',
          name: 'Voyager 지도'
        }, {
          id: 'light',
          name: 'Positron 라이트'
        }, {
          id: 'dark',
          name: 'Dark Matter 테마'
        }, {
          id: 'lightNoLabels',
          name: '라이트 심플'
        }, {
          id: 'darkNoLabels',
          name: '다크 심플'
        }, {
          id: 'grayscaleFilter',
          name: '모노크롬'
        }];

        // 스타일 메뉴 옵션 생성
        options.forEach(function (option) {
          var item = document.createElement('a');
          item.className = 'leaflet-style-item';
          item.innerHTML = option.name;
          item.href = '#';
          item.setAttribute('data-style', option.id);

          // 현재 스타일이면 활성화
          if (option.id === _this2.currentStyle) {
            item.classList.add('active');
          }

          // 클릭 이벤트
          item.addEventListener('click', function (e) {
            e.preventDefault();

            // 이전 활성 항목 비활성화
            menu.querySelectorAll('.leaflet-style-item').forEach(function (el) {
              el.classList.remove('active');
            });

            // 현재 항목 활성화
            item.classList.add('active');

            // 스타일 전환
            _this2.setMapStyle(option.id);

            // 토글 메뉴 버튼 텍스트 업데이트
            button.innerHTML = '지도 스타일';

            // 메뉴 닫기
            menu.classList.remove('open');
          });
          menu.appendChild(item);
        });

        // 버튼 클릭 시 메뉴 토글
        button.addEventListener('click', function (e) {
          e.preventDefault();
          menu.classList.toggle('open');
        });

        // 메뉴 외부 클릭 시 닫기
        document.addEventListener('click', function (event) {
          if (!container.contains(event.target)) {
            menu.classList.remove('open');
          }
        });

        // 스타일 추가
        var style = document.createElement('style');
        style.textContent = "\n        .map-style-control-container {\n          position: relative;\n          display: inline-block;\n        }\n        .leaflet-style-toggle {\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          min-width: 85px;\n          white-space: nowrap;\n        }\n        .leaflet-style-menu {\n          display: none;\n          position: absolute;\n          top: 100%;\n          right: 0;\n          margin-top: 5px;\n          background-color: white;\n          border-radius: 4px;\n          box-shadow: 0 2px 6px rgba(0,0,0,0.3);\n          overflow: hidden;\n          min-width: max-content;\n          width: auto;\n          z-index: 1000;\n        }\n        .leaflet-style-menu.open {\n          display: block;\n        }\n        .leaflet-style-item {\n          display: block;\n          padding: 8px 12px;\n          color: #333;\n          text-decoration: none;\n          font-size: 12px;\n          transition: background-color 0.2s;\n          border-bottom: 1px solid #f0f0f0;\n          white-space: nowrap;\n        }\n        .leaflet-style-item:hover {\n          background-color: #f0f0f0;\n        }\n        .leaflet-style-item.active {\n          background-color: #e6e6e6;\n          font-weight: bold;\n        }\n      ";
        document.head.appendChild(style);

        // 구성 요소 조립
        container.appendChild(button);
        container.appendChild(menu);

        // 맵에 컨트롤 추가 (우측 상단)
        // const controlContainer = L.control({ position: 'topright' });
        // controlContainer.onAdd = () => {
        //   return container;
        // };
        // controlContainer.addTo(this.leafletMap);
        return container; // 생성된 컨트롤 컨테이너 반환
      } catch (error) {
        console.error('스타일 컨트롤 추가 실패:', error);
        return null; // 오류 발생 시 null 반환
      }
    }

    /**
     * 맵 스타일 설정
     * @param {string} styleId 스타일 ID
     */
  }, {
    key: "setMapStyle",
    value: function setMapStyle(styleId) {
      if (!this.baseLayers[styleId]) {
        console.warn("\uC54C \uC218 \uC5C6\uB294 \uC2A4\uD0C0\uC77C ID: ".concat(styleId));
        return;
      }

      // 현재 레이어 제거
      if (this.currentStyle && this.baseLayers[this.currentStyle]) {
        this.leafletMap.removeLayer(this.baseLayers[this.currentStyle]);
      }

      // 새 레이어 추가
      this.baseLayers[styleId].addTo(this.leafletMap);
      this.currentStyle = styleId;
      console.log("\uB9F5 \uC2A4\uD0C0\uC77C \uBCC0\uACBD: ".concat(styleId));

      // 로컬 스토리지에 스타일 저장
      try {
        var _this$config$STORAGE_2;
        if (window.localStorage && (_this$config$STORAGE_2 = this.config.STORAGE_KEYS) !== null && _this$config$STORAGE_2 !== void 0 && _this$config$STORAGE_2.MAP_STYLE) {
          localStorage.setItem(this.config.STORAGE_KEYS.MAP_STYLE, styleId);
        }
      } catch (e) {
        console.warn('로컬 스토리지에 맵 스타일 저장 실패:', e);
      }
    }

    /**
     * 맵 확대
     */
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      if (this.leafletMap) {
        this.leafletMap.zoomIn();
      }
    }

    /**
     * 맵 축소
     */
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      if (this.leafletMap) {
        this.leafletMap.zoomOut();
      }
    }

    /**
     * 맵 초기화 (원래 위치와 줌 레벨로 복귀)
     */
  }, {
    key: "resetView",
    value: function resetView() {
      if (this.leafletMap) {
        this.leafletMap.setView(this.config.defaultCenter, this.config.defaultZoom);
      }
    }

    /**
     * 마커 추가
     * @param {Array<Object>} markers 표시할 마커 정보 배열
     * @param {Array} markers[].position 위치 좌표 [위도, 경도]
     * @param {string} [markers[].title] 마커 제목
     * @param {Object} [markers[].options] 추가 마커 옵션
     */
  }, {
    key: "addMarkers",
    value: function addMarkers(markers) {
      var _this3 = this;
      if (!this.leafletMap || !this.markerLayer) return;
      this.clearMarkers();
      console.log("Leaflet \uB9C8\uCEE4 \uCD94\uAC00: ".concat(markers.length, "\uAC1C"));
      if (markers.length > 0) {
        console.log('첫 번째 마커 샘플:', markers[0]);
      }
      markers.forEach(function (markerData) {
        // 마커 옵션 처리
        var options = _objectSpread({}, markerData.options);

        // 아이콘 처리
        if (options.icon) {
          var iconConfig = options.icon;

          // div 아이콘인 경우
          if (iconConfig.type === 'div') {
            options.icon = L.divIcon({
              html: iconConfig.html,
              className: iconConfig.className || '',
              iconSize: iconConfig.iconSize || [20, 20],
              iconAnchor: iconConfig.iconAnchor || [10, 10]
            });
          }
          // 일반 아이콘인 경우
          else if (iconConfig.iconUrl) {
            options.icon = L.icon({
              iconUrl: iconConfig.iconUrl,
              iconSize: iconConfig.iconSize,
              iconAnchor: iconConfig.iconAnchor,
              popupAnchor: iconConfig.popupAnchor,
              shadowUrl: iconConfig.shadowUrl,
              shadowSize: iconConfig.shadowSize,
              shadowAnchor: iconConfig.shadowAnchor
            });
          }
          // 아이콘 설정이 없거나 잘못된 경우는 기본 마커 사용
          else if (!(options.icon instanceof L.Icon || options.icon instanceof L.DivIcon)) {
            delete options.icon;
          }
        }

        // 마커 생성
        var marker = L.marker(markerData.position, options);
        if (markerData.title) {
          marker.bindTooltip(markerData.title);
        }
        if (markerData.popup) {
          marker.bindPopup(markerData.popup);
        }
        _this3.markerLayer.addLayer(marker);
      });
    }

    /**
     * 마커 제거
     */
  }, {
    key: "clearMarkers",
    value: function clearMarkers() {
      if (this.markerLayer) {
        this.markerLayer.clearLayers();
      }
    }

    /**
     * 폴리곤 추가
     * @param {Array<Object>} polygons 표시할 폴리곤 정보 배열
     * @param {Array<Array>} polygons[].positions 폴리곤 꼭지점 좌표 배열 [[위도1, 경도1], [위도2, 경도2], ...]
     * @param {Object} [polygons[].options] 추가 폴리곤 옵션
     */
  }, {
    key: "addPolygons",
    value: function addPolygons(polygons) {
      var _this4 = this;
      if (!this.leafletMap || !this.polygonLayer) return;
      this.clearPolygons();
      polygons.forEach(function (polygonData) {
        var polygon = L.polygon(polygonData.positions, polygonData.options || {});
        if (polygonData.popup) {
          polygon.bindPopup(polygonData.popup);
        }
        _this4.polygonLayer.addLayer(polygon);
      });
    }

    /**
     * 폴리곤 제거
     */
  }, {
    key: "clearPolygons",
    value: function clearPolygons() {
      if (this.polygonLayer) {
        this.polygonLayer.clearLayers();
      }
    }

    /**
     * 맵 이벤트 리스너 등록
     * @param {string} event 이벤트 이름
     * @param {Function} callback 콜백 함수
     */
  }, {
    key: "on",
    value: function on(event, callback) {
      if (this.leafletMap) {
        this.leafletMap.on(event, callback);
      }
    }

    /**
     * 맵 이벤트 리스너 제거
     * @param {string} event 이벤트 이름
     * @param {Function} callback 콜백 함수
     */
  }, {
    key: "off",
    value: function off(event, callback) {
      if (this.leafletMap) {
        this.leafletMap.off(event, callback);
      }
    }

    /**
     * 맵 뷰를 모든 데이터가 보이도록 조정
     */
  }, {
    key: "fitToData",
    value: function fitToData() {
      // 마커와 폴리곤을 포함하는 임시 피처 그룹 생성
      var markerGroup = L.featureGroup();

      // 모든 마커를 피처 그룹에 추가
      this.markerLayer.eachLayer(function (layer) {
        markerGroup.addLayer(layer);
      });

      // 모든 폴리곤을 피처 그룹에 추가
      this.polygonLayer.eachLayer(function (layer) {
        markerGroup.addLayer(layer);
      });

      // 데이터가 없으면 종료
      if (markerGroup.getLayers().length === 0) {
        return;
      }

      // 모든 마커/폴리곤이 보이도록 뷰 경계 조정
      var bounds = markerGroup.getBounds();
      this.leafletMap.fitBounds(bounds, {
        padding: [50, 50],
        // 마커 주변에 여백 추가
        maxZoom: 18,
        // 최대 줌 레벨 제한
        animate: true // 부드러운 전환 애니메이션
      });
    }
  }]);
}(_MapProvider_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/map/providers/OpenLayersProvider.js":
/*!************************************************************!*\
  !*** ./src/components/map/providers/OpenLayersProvider.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenLayersProvider)
/* harmony export */ });
/* harmony import */ var _MapProvider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MapProvider.js */ "./src/components/map/MapProvider.js");
/* harmony import */ var _services_OpenLayersLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/OpenLayersLoader.js */ "./src/components/map/services/OpenLayersLoader.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * OpenLayers 기반 맵 프로바이더 구현
 */



var OpenLayersProvider = /*#__PURE__*/function (_MapProvider) {
  /**
   * OpenLayers 맵 프로바이더 생성
   * @param {HTMLElement} container 맵을 표시할 컨테이너 요소
   * @param {Object} config 맵 설정
   */
  function OpenLayersProvider(container, config) {
    var _this;
    _classCallCheck(this, OpenLayersProvider);
    _this = _callSuper(this, OpenLayersProvider, [container, config]);
    _this.map = null;
    _this.markerSource = null;
    _this.markerLayer = null;
    _this.polygonSource = null;
    _this.polygonLayer = null;
    _this.view = null;
    _this.useGrayscale = false; // 그레이스케일 모드 기본값
    _this.baseLayers = {}; // 기본 레이어 저장
    return _this;
  }

  /**
   * OpenLayers 맵 초기화
   * @returns {Promise<this>} 초기화 완료 시 해결되는 Promise
   */
  _inherits(OpenLayersProvider, _MapProvider);
  return _createClass(OpenLayersProvider, [{
    key: "initialize",
    value: (function () {
      var _initialize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this$config$cartoDBO, _this$config$cartoDBO2, _this$config$cartoDBO3, _this$config$cartoDBO4, _this$config$cartoDBO5, styleElement;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              console.log('OpenLayers 맵 초기화 시작');

              // OpenLayers 라이브러리 동적 로드
              _context.next = 4;
              return _services_OpenLayersLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"].load();
            case 4:
              if (window.ol) {
                _context.next = 6;
                break;
              }
              throw new Error('OpenLayers 라이브러리가 로드되지 않았습니다.');
            case 6:
              console.log('OpenLayers 객체 확인됨, 맵 생성 시작');

              // 맵 뷰 생성
              this.view = new ol.View({
                center: ol.proj.fromLonLat([this.config.defaultCenter[1], this.config.defaultCenter[0]]),
                // [경도, 위도] -> [x, y]로 변환
                zoom: this.config.defaultZoom
              });

              // 마커 레이어 생성
              this.markerSource = new ol.source.Vector();
              this.markerLayer = new ol.layer.Vector({
                source: this.markerSource,
                style: new ol.style.Style({
                  image: new ol.style.Circle({
                    radius: 7,
                    fill: new ol.style.Fill({
                      color: '#3388ff'
                    }),
                    stroke: new ol.style.Stroke({
                      color: '#fff',
                      width: 2
                    })
                  })
                })
              });

              // 폴리곤 레이어 생성
              this.polygonSource = new ol.source.Vector();
              this.polygonLayer = new ol.layer.Vector({
                source: this.polygonSource,
                style: new ol.style.Style({
                  stroke: new ol.style.Stroke({
                    color: '#3388ff',
                    width: 2
                  }),
                  fill: new ol.style.Fill({
                    color: 'rgba(51, 136, 255, 0.2)'
                  })
                })
              });

              // 기본 타일 레이어 생성 (CartoDB Voyager)
              this.baseLayers = {};

              // CartoDB 기본 컬러 레이어 (Voyager)
              this.baseLayers.standard = new ol.layer.Tile({
                source: new ol.source.XYZ({
                  url: ((_this$config$cartoDBO = this.config.cartoDBOL) === null || _this$config$cartoDBO === void 0 ? void 0 : _this$config$cartoDBO.voyager) || 'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
                  attributions: this.config.attribution
                })
              });

              // CartoDB 라이트 레이어 (Positron)
              this.baseLayers.light = new ol.layer.Tile({
                visible: false,
                source: new ol.source.XYZ({
                  url: ((_this$config$cartoDBO2 = this.config.cartoDBOL) === null || _this$config$cartoDBO2 === void 0 ? void 0 : _this$config$cartoDBO2.positron) || 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
                  attributions: this.config.attribution
                })
              });

              // CartoDB 다크 레이어
              this.baseLayers.dark = new ol.layer.Tile({
                visible: false,
                source: new ol.source.XYZ({
                  url: ((_this$config$cartoDBO3 = this.config.cartoDBOL) === null || _this$config$cartoDBO3 === void 0 ? void 0 : _this$config$cartoDBO3.dark) || 'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
                  attributions: this.config.attribution
                })
              });

              // CartoDB 라이트 (노 라벨)
              this.baseLayers.lightNoLabels = new ol.layer.Tile({
                visible: false,
                source: new ol.source.XYZ({
                  url: ((_this$config$cartoDBO4 = this.config.cartoDBOL) === null || _this$config$cartoDBO4 === void 0 ? void 0 : _this$config$cartoDBO4.positronNoLabels) || 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
                  attributions: this.config.attribution
                })
              });

              // CartoDB 다크 (노 라벨)
              this.baseLayers.darkNoLabels = new ol.layer.Tile({
                visible: false,
                source: new ol.source.XYZ({
                  url: ((_this$config$cartoDBO5 = this.config.cartoDBOL) === null || _this$config$cartoDBO5 === void 0 ? void 0 : _this$config$cartoDBO5.darkNoLabels) || 'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png',
                  attributions: this.config.attribution
                })
              });

              // 그레이스케일 필터용 CSS 스타일 추가
              styleElement = document.createElement('style');
              styleElement.textContent = "\n        .ol-grayscale-layer {\n          filter: grayscale(100%);\n          -webkit-filter: grayscale(100%);\n        }\n      ";
              document.head.appendChild(styleElement);

              // OSM 레이어 + 그레이스케일 필터
              this.baseLayers.grayscaleFilter = new ol.layer.Tile({
                visible: false,
                source: new ol.source.OSM({
                  url: this.config.openlayersTileProvider || undefined,
                  attributions: this.config.attribution
                }),
                className: 'ol-grayscale-layer'
              });

              // 맵 생성
              this.map = new ol.Map({
                target: this.container,
                layers: [this.baseLayers.standard, this.baseLayers.light, this.baseLayers.dark, this.baseLayers.lightNoLabels, this.baseLayers.darkNoLabels, this.baseLayers.grayscaleFilter, this.markerLayer, this.polygonLayer],
                view: this.view,
                controls: this._createControls()
              });

              // 이벤트 리스너 설정 (필요한 경우)
              this._setupEventListeners();
              console.log('OpenLayers 맵 초기화 완료');
              return _context.abrupt("return", this);
            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](0);
              console.error('OpenLayers 맵 초기화 실패:', _context.t0);
              throw _context.t0;
            case 32:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 28]]);
      }));
      function initialize() {
        return _initialize.apply(this, arguments);
      }
      return initialize;
    }()
    /**
     * 레이어 전환 컨트롤 추가
     * @private
     * @returns {HTMLElement|null} 생성된 컨트롤 컨테이너 요소 또는 오류 시 null
     */
    )
  }, {
    key: "_addLayerSwitchControl",
    value: function _addLayerSwitchControl() {
      var _this2 = this;
      try {
        // 스타일 메뉴 컨테이너 생성
        var container = document.createElement('div');
        container.className = 'map-style-control-container';

        // 메인 버튼 생성
        var button = document.createElement('button');
        button.innerHTML = '지도 스타일';
        button.className = 'btn btn-sm btn-outline-secondary ol-style-toggle';
        button.title = '지도 스타일 변경';

        // 드롭다운 메뉴 생성
        var menu = document.createElement('div');
        menu.className = 'ol-style-menu';

        // 스타일 옵션들
        var options = [{
          id: 'standard',
          name: '벡터 지도 (기본)'
        }, {
          id: 'light',
          name: '밝은 테마'
        }, {
          id: 'dark',
          name: '어두운 테마'
        }, {
          id: 'lightNoLabels',
          name: '밝은 배경 (라벨 없음)'
        }, {
          id: 'darkNoLabels',
          name: '어두운 배경 (라벨 없음)'
        }, {
          id: 'grayscaleFilter',
          name: '흑백 모드'
        }];

        // 스타일 메뉴 옵션 생성
        options.forEach(function (option) {
          var item = document.createElement('a');
          item.className = 'ol-style-item';
          item.innerHTML = option.name;
          item.href = '#';
          item.setAttribute('data-style', option.id);

          // 현재 스타일이면 활성화
          if (option.id === 'standard') {
            item.classList.add('active');
          }

          // 클릭 이벤트
          item.addEventListener('click', function (e) {
            e.preventDefault();

            // 이전 활성 항목 비활성화
            menu.querySelectorAll('.ol-style-item').forEach(function (el) {
              el.classList.remove('active');
            });

            // 현재 항목 활성화
            item.classList.add('active');

            // 스타일 전환
            _this2.setMapStyle(option.id);

            // 토글 메뉴 버튼 텍스트 업데이트 (변경하지 않음)
            // button.innerHTML = `스타일: ${option.name}`;

            // 메뉴 닫기
            menu.classList.remove('open');
          });
          menu.appendChild(item);
        });

        // 버튼 클릭 시 메뉴 토글
        button.addEventListener('click', function () {
          menu.classList.toggle('open');
        });

        // 메뉴 외부 클릭 시 닫기
        document.addEventListener('click', function (event) {
          if (!container.contains(event.target)) {
            menu.classList.remove('open');
          }
        });

        // 스타일 추가
        var style = document.createElement('style');
        style.textContent = "\n        .map-style-control-container {\n          position: relative;\n          display: inline-block;\n        }\n        .ol-style-toggle {\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          min-width: 85px;\n          white-space: nowrap;\n        }\n        .ol-style-menu {\n          display: none;\n          position: absolute;\n          top: 100%;\n          right: 0;\n          margin-top: 5px;\n          background-color: white;\n          border-radius: 4px;\n          box-shadow: 0 2px 6px rgba(0,0,0,0.3);\n          overflow: hidden;\n          min-width: max-content;\n          width: auto;\n          z-index: 1000;\n        }\n        .ol-style-menu.open {\n          display: block;\n        }\n        .ol-style-item {\n          display: block;\n          padding: 8px 12px;\n          cursor: pointer;\n          font-size: 12px;\n          text-decoration: none;\n          color: #333;\n          transition: background-color 0.2s;\n          border-bottom: 1px solid #f0f0f0;\n          white-space: nowrap;\n        }\n        .ol-style-item:hover {\n          background-color: #f0f0f0;\n        }\n        .ol-style-item.active {\n          background-color: #e6e6e6;\n          font-weight: bold;\n        }\n      ";
        document.head.appendChild(style);

        // 구성 요소 조립
        container.appendChild(button);
        container.appendChild(menu);

        // 맵 컨테이너에 직접 추가하지 않고 반환
        return container;
      } catch (error) {
        console.error('스타일 컨트롤 추가 실패:', error);
        return null;
      }
    }

    /**
     * OpenLayers 컨트롤 생성
     * @private
     * @returns {Array} 생성된 컨트롤 배열
     */
  }, {
    key: "_createControls",
    value: function _createControls() {
      // OpenLayers 6.x 버전 구조 확인
      try {
        if (ol.control.defaults && typeof ol.control.defaults === 'function') {
          // 기본 형식 (6.x 초기 버전)
          return ol.control.defaults({
            zoom: false
          });
        } else if (ol.control.defaults && ol.control.defaults.defaults && typeof ol.control.defaults.defaults === 'function') {
          // 수정된 형식 (6.9.0+)
          return ol.control.defaults.defaults({
            zoom: false
          });
        } else {
          // 폴백: 빈 컨트롤 배열
          console.warn('ol.control.defaults를 찾을 수 없습니다. 빈 컨트롤 배열 사용');
          return [];
        }
      } catch (error) {
        console.error('컨트롤 생성 오류:', error);
        return []; // 안전한 폴백
      }
    }

    /**
     * 맵 스타일 설정 및 로컬 스토리지에 저장
     * @param {string} styleId 스타일 ID
     */
  }, {
    key: "setMapStyle",
    value: function setMapStyle(styleId) {
      var _this3 = this;
      // 모든 기본 레이어 숨기기
      Object.keys(this.baseLayers).forEach(function (key) {
        _this3.baseLayers[key].setVisible(false);
      });

      // 선택된 스타일 표시
      if (this.baseLayers[styleId]) {
        this.baseLayers[styleId].setVisible(true);
        this.useGrayscale = styleId !== 'standard';
        console.log("\uB9F5 \uC2A4\uD0C0\uC77C \uBCC0\uACBD: ".concat(styleId));

        // 로컬 스토리지에 스타일 저장
        try {
          var _this$config$STORAGE_;
          if (window.localStorage && (_this$config$STORAGE_ = this.config.STORAGE_KEYS) !== null && _this$config$STORAGE_ !== void 0 && _this$config$STORAGE_.MAP_STYLE) {
            localStorage.setItem(this.config.STORAGE_KEYS.MAP_STYLE, styleId);
          }
        } catch (e) {
          console.warn('로컬 스토리지에 맵 스타일 저장 실패:', e);
        }
      } else {
        console.warn("\uC54C \uC218 \uC5C6\uB294 \uC2A4\uD0C0\uC77C ID: ".concat(styleId, ", \uAE30\uBCF8 \uC2A4\uD0C0\uC77C\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4."));
        this.baseLayers.standard.setVisible(true);
        this.useGrayscale = false;
      }
    }

    /**
     * 그레이스케일 모드 전환
     * @deprecated 대신 setMapStyle() 사용
     */
  }, {
    key: "toggleGrayscale",
    value: function toggleGrayscale() {
      if (this.useGrayscale) {
        this.setMapStyle('standard');
      } else {
        this.setMapStyle('grayscaleFilter');
      }
    }

    /**
     * 맵 확대
     */
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      if (this.view) {
        var currentZoom = this.view.getZoom();
        this.view.animate({
          zoom: currentZoom + 1,
          duration: 250
        });
      }
    }

    /**
     * 맵 축소
     */
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      if (this.view) {
        var currentZoom = this.view.getZoom();
        this.view.animate({
          zoom: currentZoom - 1,
          duration: 250
        });
      }
    }

    /**
     * 맵 초기화 (원래 위치와 줌 레벨로 복귀)
     */
  }, {
    key: "resetView",
    value: function resetView() {
      if (this.view) {
        this.view.animate({
          center: ol.proj.fromLonLat([this.config.defaultCenter[1], this.config.defaultCenter[0]]),
          zoom: this.config.defaultZoom,
          duration: 500
        });
      }
    }

    /**
     * 마커 추가
     * @param {Array<Object>} markers 표시할 마커 정보 배열
     */
  }, {
    key: "addMarkers",
    value: function addMarkers(markers) {
      var _this4 = this;
      if (!this.map || !this.markerSource) return;
      this.clearMarkers();
      console.log("OpenLayers \uB9C8\uCEE4 \uCD94\uAC00: ".concat(markers.length, "\uAC1C"));
      if (markers.length > 0) {
        console.log('첫 번째 마커 데이터:', markers[0]);
      }
      markers.forEach(function (markerData) {
        // 위도/경도 데이터 검증
        if (!markerData.position || markerData.position.length < 2) {
          console.warn('마커 위치 데이터 오류:', markerData);
          return;
        }

        // OpenLayers에서는 경도,위도 순서로 좌표 지정 (Leaflet과 반대)
        // fromLonLat 함수는 [경도, 위도] 순서로 입력해야 함
        var longitude = markerData.position[1];
        var latitude = markerData.position[0];
        if (isNaN(longitude) || isNaN(latitude)) {
          console.warn('마커 좌표가 숫자가 아님:', {
            longitude: longitude,
            latitude: latitude
          });
          return;
        }
        var coordinates = ol.proj.fromLonLat([longitude, latitude]);
        console.log('마커 좌표 변환:', [latitude, longitude], '->', coordinates);
        var feature = new ol.Feature({
          geometry: new ol.geom.Point(coordinates),
          name: markerData.title,
          data: markerData
        });

        // 개별 마커 스타일 지정 (옵션이 있는 경우)
        if (markerData.options && Object.keys(markerData.options).length > 0) {
          var style = _this4._createMarkerStyle(markerData.options);
          feature.setStyle(style);
        }
        _this4.markerSource.addFeature(feature);
      });

      // 팝업 기능 설정
      if (markers.length > 0 && markers.some(function (m) {
        return m.popup;
      })) {
        this._setupPopups();
      }
    }

    /**
     * 마커 스타일 생성
     * @private
     * @param {Object} options 마커 옵션
     * @returns {ol.style.Style} OpenLayers 스타일 객체
     */
  }, {
    key: "_createMarkerStyle",
    value: function _createMarkerStyle(options) {
      return new ol.style.Style({
        image: new ol.style.Circle({
          radius: options.radius || 7,
          fill: new ol.style.Fill({
            color: options.fillColor || '#3388ff'
          }),
          stroke: new ol.style.Stroke({
            color: options.strokeColor || '#fff',
            width: options.strokeWidth || 2
          })
        })
      });
    }

    /**
     * 팝업 기능 설정
     * @private
     */
  }, {
    key: "_setupPopups",
    value: function _setupPopups() {
      var _this5 = this;
      // 이미 팝업 설정이 되어있으면 중복 설정 방지
      if (this.popup) return;

      // 팝업 오버레이 생성
      this.popup = new ol.Overlay({
        element: document.createElement('div'),
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, -10]
      });
      this.popup.getElement().className = 'ol-popup';
      this.map.addOverlay(this.popup);

      // 클릭 이벤트 핸들러 등록
      this.map.on('click', function (evt) {
        var feature = _this5.map.forEachFeatureAtPixel(evt.pixel, function (feature) {
          return feature;
        });
        if (feature && feature.get('data') && feature.get('data').popup) {
          var coordinates = feature.getGeometry().getCoordinates();
          _this5.popup.getElement().innerHTML = feature.get('data').popup;
          _this5.popup.setPosition(coordinates);
        } else {
          _this5.popup.setPosition(undefined);
        }
      });
    }

    /**
     * 마커 제거
     */
  }, {
    key: "clearMarkers",
    value: function clearMarkers() {
      if (this.markerSource) {
        this.markerSource.clear();
      }
    }

    /**
     * 폴리곤 추가
     * @param {Array<Object>} polygons 표시할 폴리곤 정보 배열
     */
  }, {
    key: "addPolygons",
    value: function addPolygons(polygons) {
      var _this6 = this;
      if (!this.map || !this.polygonSource) return;
      this.clearPolygons();
      polygons.forEach(function (polygonData) {
        // OpenLayers에서는 경도,위도 순서로 좌표 지정 (Leaflet과 반대)
        var coordinates = polygonData.positions.map(function (pos) {
          return ol.proj.fromLonLat([pos[1], pos[0]]);
        });
        var feature = new ol.Feature({
          geometry: new ol.geom.Polygon([coordinates]),
          name: polygonData.title,
          data: polygonData
        });

        // 개별 폴리곤 스타일 지정
        if (polygonData.options) {
          var style = _this6._createPolygonStyle(polygonData.options);
          feature.setStyle(style);
        }
        _this6.polygonSource.addFeature(feature);
      });

      // 팝업 기능 설정
      if (polygons.length > 0 && polygons.some(function (p) {
        return p.popup;
      })) {
        this._setupPopups();
      }
    }

    /**
     * 폴리곤 스타일 생성
     * @private
     * @param {Object} options 폴리곤 옵션
     * @returns {ol.style.Style} OpenLayers 스타일 객체
     */
  }, {
    key: "_createPolygonStyle",
    value: function _createPolygonStyle(options) {
      return new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: options.color || '#3388ff',
          width: options.weight || 2
        }),
        fill: new ol.style.Fill({
          color: options.fillColor ? options.fillColor.replace(/rgb\(([^)]+)\)/, 'rgba($1,' + (options.fillOpacity || 0.2) + ')') : 'rgba(51, 136, 255, 0.2)'
        })
      });
    }

    /**
     * 폴리곤 제거
     */
  }, {
    key: "clearPolygons",
    value: function clearPolygons() {
      if (this.polygonSource) {
        this.polygonSource.clear();
      }
    }

    /**
     * 이벤트 리스너 설정
     * @private
     */
  }, {
    key: "_setupEventListeners",
    value: function _setupEventListeners() {
      // 이벤트 핸들러를 저장할 맵
      this.eventHandlers = new Map();
    }

    /**
     * 맵 이벤트 리스너 등록
     * @param {string} event 이벤트 이름
     * @param {Function} callback 콜백 함수
     */
  }, {
    key: "on",
    value: function on(event, callback) {
      if (!this.map) return;

      // OpenLayers에서 사용하는 이벤트 이름으로 변환
      var olEvent = this._mapEventName(event);

      // 이벤트 핸들러 등록 및 저장
      var handler = this.map.on(olEvent, callback);

      // 이벤트 핸들러 저장
      if (!this.eventHandlers.has(event)) {
        this.eventHandlers.set(event, []);
      }
      this.eventHandlers.get(event).push(handler);
    }

    /**
     * 이벤트 이름 매핑 (Leaflet -> OpenLayers)
     * @private
     * @param {string} event Leaflet 스타일 이벤트 이름
     * @returns {string} OpenLayers 이벤트 이름
     */
  }, {
    key: "_mapEventName",
    value: function _mapEventName(event) {
      var eventMap = {
        'click': 'click',
        'dblclick': 'dblclick',
        'mousedown': 'pointerdown',
        'mouseup': 'pointerup',
        'mousemove': 'pointermove',
        'moveend': 'moveend',
        'zoomend': 'moveend' // OpenLayers에서는 moveend로 통합
      };
      return eventMap[event] || event;
    }

    /**
     * 맵 이벤트 리스너 제거
     * @param {string} event 이벤트 이름
     * @param {Function} callback 콜백 함수 (생략 시 해당 이벤트의 모든 핸들러 제거)
     */
  }, {
    key: "off",
    value: function off(event, callback) {
      if (!this.map || !this.eventHandlers.has(event)) return;
      if (callback) {
        // 특정 콜백만 제거 (미구현 - OpenLayers에서는 복잡함)
        console.warn('OpenLayers에서 특정 콜백 제거는 아직 구현되지 않았습니다.');
      } else {
        // 해당 이벤트의 모든 핸들러 제거
        var handlers = this.eventHandlers.get(event);
        handlers.forEach(function (handler) {
          ol.Observable.unByKey(handler);
        });
        this.eventHandlers["delete"](event);
      }
    }

    /**
     * 맵 뷰를 모든 데이터가 보이도록 조정
     */
  }, {
    key: "fitToData",
    value: function fitToData() {
      // 마커/폴리곤 피처 수집
      var features = [].concat(_toConsumableArray(this.markerSource.getFeatures()), _toConsumableArray(this.polygonSource.getFeatures()));

      // 데이터가 없으면 종료
      if (features.length === 0) {
        return;
      }

      // 모든 피처의 범위 계산
      var extent = ol.extent.createEmpty();
      features.forEach(function (feature) {
        ol.extent.extend(extent, feature.getGeometry().getExtent());
      });

      // 범위가 유효하면 맵 뷰 조정
      if (!ol.extent.isEmpty(extent)) {
        // 여백 추가
        var padding = [50, 50, 50, 50]; // [top, right, bottom, left]
        var paddedExtent = ol.extent.buffer(extent, Math.max(ol.extent.getWidth(extent), ol.extent.getHeight(extent)) * 0.1);

        // 맵 뷰 조정 (애니메이션 적용)
        this.view.fit(paddedExtent, {
          duration: 1000,
          // 애니메이션 지속 시간 (ms)
          maxZoom: 18 // 최대 줌 레벨 제한
        });
      }
    }
  }]);
}(_MapProvider_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/map/services/LeafletLoader.js":
/*!******************************************************!*\
  !*** ./src/components/map/services/LeafletLoader.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LeafletLoader)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Leaflet 라이브러리 동적 로딩 서비스
 * 필요한 경우에만 Leaflet을 로드하여 초기 로드 성능을 개선합니다.
 */
var LeafletLoader = /*#__PURE__*/function () {
  function LeafletLoader() {
    _classCallCheck(this, LeafletLoader);
  }
  return _createClass(LeafletLoader, null, [{
    key: "isLoaded",
    value:
    /**
     * Leaflet 라이브러리가 이미 로드되었는지 확인
     * @returns {boolean} 로드 여부
     */
    function isLoaded() {
      return typeof window.L !== 'undefined';
    }

    /**
     * Leaflet CSS 로드
     * @returns {Promise<void>} CSS 로드 완료 시 해결되는 Promise
     */
  }, {
    key: "loadCSS",
    value: function loadCSS() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        // 이미 CSS가 로드되어 있는지 확인
        if (document.querySelector("link[href=\"".concat(_this.LEAFLET_CSS_URL, "\"]"))) {
          resolve();
          return;
        }

        // CSS 로드
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = _this.LEAFLET_CSS_URL;
        link.onload = function () {
          return resolve();
        };
        link.onerror = function () {
          return reject(new Error('Leaflet CSS 로드 실패'));
        };
        document.head.appendChild(link);
      });
    }

    /**
     * Leaflet JS 로드
     * @returns {Promise<void>} JS 로드 완료 시 해결되는 Promise
     */
  }, {
    key: "loadJS",
    value: function loadJS() {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        // 이미 JS가 로드되어 있는지 확인
        if (_this2.isLoaded() || document.querySelector("script[src=\"".concat(_this2.LEAFLET_JS_URL, "\"]"))) {
          resolve();
          return;
        }

        // JS 로드
        var script = document.createElement('script');
        script.src = _this2.LEAFLET_JS_URL;
        script.async = true;
        script.onload = function () {
          return resolve();
        };
        script.onerror = function () {
          return reject(new Error('Leaflet JS 로드 실패'));
        };
        document.body.appendChild(script);
      });
    }

    /**
     * Leaflet 라이브러리 전체 로드 (CSS + JS)
     * @returns {Promise<void>} 로드 완료 시 해결되는 Promise
     */
  }, {
    key: "load",
    value: (function () {
      var _load = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.isLoaded()) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _context.prev = 2;
              _context.next = 5;
              return Promise.all([this.loadCSS(), this.loadJS()]);
            case 5:
              console.log('Leaflet 라이브러리 로드 완료');
              _context.next = 12;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              console.error('Leaflet 라이브러리 로드 실패:', _context.t0);
              throw _context.t0;
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 8]]);
      }));
      function load() {
        return _load.apply(this, arguments);
      }
      return load;
    }())
  }]);
}();
/**
 * Leaflet 라이브러리 CDN URL
 */
_defineProperty(LeafletLoader, "LEAFLET_CSS_URL", 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
_defineProperty(LeafletLoader, "LEAFLET_JS_URL", 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js');


/***/ }),

/***/ "./src/components/map/services/OpenLayersLoader.js":
/*!*********************************************************!*\
  !*** ./src/components/map/services/OpenLayersLoader.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenLayersLoader)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * OpenLayers 라이브러리 동적 로딩 서비스
 * 모듈 번들링 환경에서 사용하기 위해 개선된 버전
 */
var OpenLayersLoader = /*#__PURE__*/function () {
  function OpenLayersLoader() {
    _classCallCheck(this, OpenLayersLoader);
  }
  return _createClass(OpenLayersLoader, null, [{
    key: "isLoaded",
    value:
    /**
     * OpenLayers 라이브러리가 이미 로드되었는지 확인
     * @returns {boolean} 로드 여부
     */
    function isLoaded() {
      return typeof window.ol !== 'undefined';
    }

    /**
     * OpenLayers CSS 로드
     * @param {number} retryCount 재시도 횟수
     * @returns {Promise<void>} CSS 로드 완료 시 해결되는 Promise
     */
  }, {
    key: "loadCSS",
    value: function loadCSS() {
      var _this = this;
      var retryCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return new Promise(function (resolve, reject) {
        // 이미 CSS가 로드되어 있는지 확인
        if (document.querySelector("link[href=\"".concat(_this.OL_CSS_URL, "\"]"))) {
          console.log('OpenLayers CSS가 이미 로드되어 있습니다');
          resolve();
          return;
        }
        console.log("OpenLayers CSS \uB85C\uB4DC \uC2DC\uC791 (\uC2DC\uB3C4 ".concat(retryCount + 1, "/").concat(_this.MAX_RETRIES + 1, "):"), _this.OL_CSS_URL);

        // CSS 로드
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = _this.OL_CSS_URL;
        link.onload = function () {
          console.log('OpenLayers CSS 로드 완료');
          resolve();
        };
        link.onerror = function (error) {
          console.error("OpenLayers CSS \uB85C\uB4DC \uC2E4\uD328 (\uC2DC\uB3C4 ".concat(retryCount + 1, "/").concat(_this.MAX_RETRIES + 1, "):"), error);

          // 최대 재시도 횟수 이내면 재시도
          if (retryCount < _this.MAX_RETRIES) {
            console.log("OpenLayers CSS \uB85C\uB4DC \uC7AC\uC2DC\uB3C4 (".concat(retryCount + 2, "/").concat(_this.MAX_RETRIES + 1, ")..."));
            setTimeout(function () {
              _this.loadCSS(retryCount + 1).then(resolve)["catch"](reject);
            }, 1000); // 1초 후 재시도
          } else {
            reject(new Error('OpenLayers CSS 로드 실패: 최대 재시도 횟수 초과'));
          }
        };
        document.head.appendChild(link);
      });
    }

    /**
     * OpenLayers JS 로드 - 스크립트 태그 방식
     * @returns {Promise<void>} JS 로드 완료 시 해결되는 Promise
     */
  }, {
    key: "loadJS",
    value: function loadJS() {
      var _this2 = this;
      var retryCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return new Promise(function (resolve, reject) {
        // 이미 로드되었는지 확인
        if (_this2.isLoaded()) {
          console.log('OpenLayers JS가 이미 로드되어 있습니다');
          resolve();
          return;
        }

        // 현재 시도할 URL 선택
        var currentUrl = _this2.CDN_URLS[retryCount % _this2.CDN_URLS.length];
        console.log("OpenLayers JS \uB85C\uB4DC \uC2DC\uB3C4 (".concat(retryCount + 1, "/").concat(_this2.MAX_RETRIES, "): ").concat(currentUrl));

        // 스크립트 생성
        var script = document.createElement('script');
        script.src = currentUrl;
        script.async = false; // 순차적 실행 보장
        script.crossOrigin = 'anonymous';
        script.onload = function () {
          console.log('OpenLayers 스크립트 로드 완료, window.ol 확인 중...');

          // ol 객체 확인
          setTimeout(function () {
            if (window.ol) {
              console.log('window.ol 확인됨!');
              resolve();
            } else {
              console.warn('스크립트는 로드되었으나 window.ol이 정의되지 않음');
              if (retryCount < _this2.MAX_RETRIES - 1) {
                // 스크립트 제거
                script.parentNode.removeChild(script);
                // 다음 URL로 재시도
                _this2.loadJS(retryCount + 1).then(resolve)["catch"](reject);
              } else {
                reject(new Error('OpenLayers 객체를 찾을 수 없습니다'));
              }
            }
          }, 500);
        };
        script.onerror = function (error) {
          console.error("\uC2A4\uD06C\uB9BD\uD2B8 \uB85C\uB4DC \uC2E4\uD328 (".concat(retryCount + 1, "/").concat(_this2.MAX_RETRIES, "):"), error);
          if (retryCount < _this2.MAX_RETRIES - 1) {
            // 스크립트 제거
            if (script.parentNode) {
              script.parentNode.removeChild(script);
            }
            // 다음 URL로 재시도
            _this2.loadJS(retryCount + 1).then(resolve)["catch"](reject);
          } else {
            reject(new Error('모든 CDN에서 OpenLayers 로드 실패'));
          }
        };
        document.body.appendChild(script);
      });
    }

    /**
     * OpenLayers 라이브러리 전체 로드 (CSS + JS)
     * @returns {Promise<void>} 로드 완료 시 해결되는 Promise
     */
  }, {
    key: "load",
    value: (function () {
      var _load = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this3 = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.isLoaded()) {
                _context2.next = 3;
                break;
              }
              console.log('OpenLayers 라이브러리가 이미 로드되어 있습니다');
              return _context2.abrupt("return", Promise.resolve());
            case 3:
              if (!(this.isLoading && this.loadPromise)) {
                _context2.next = 6;
                break;
              }
              console.log('OpenLayers 라이브러리가 이미 로드 중입니다');
              return _context2.abrupt("return", this.loadPromise);
            case 6:
              // 로드 상태 설정
              this.isLoading = true;

              // 로드 Promise 생성 및 저장
              this.loadPromise = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.prev = 0;
                      console.log('OpenLayers 라이브러리 로드 시작');

                      // CSS와 JS 순차적으로 로드
                      _context.next = 4;
                      return _this3.loadCSS();
                    case 4:
                      _context.next = 6;
                      return _this3.loadJS();
                    case 6:
                      if (window.ol) {
                        _context.next = 8;
                        break;
                      }
                      throw new Error('OpenLayers 객체를 찾을 수 없습니다');
                    case 8:
                      console.log('OpenLayers 라이브러리 로드 완료!');
                      return _context.abrupt("return", true);
                    case 12:
                      _context.prev = 12;
                      _context.t0 = _context["catch"](0);
                      console.error('OpenLayers 라이브러리 로드 실패:', _context.t0);
                      _this3.isLoading = false;
                      throw _context.t0;
                    case 17:
                      _context.prev = 17;
                      _this3.isLoading = false;
                      return _context.finish(17);
                    case 20:
                    case "end":
                      return _context.stop();
                  }
                }, _callee, null, [[0, 12, 17, 20]]);
              }))();
              return _context2.abrupt("return", this.loadPromise);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function load() {
        return _load.apply(this, arguments);
      }
      return load;
    }())
  }]);
}();
/**
 * OpenLayers 라이브러리 CDN URL
 * 더 안정적인 버전인 6.9.0 사용
 */
_defineProperty(OpenLayersLoader, "OL_CSS_URL", 'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/css/ol.css');
// CDN URL 목록 (순차적으로 시도)
_defineProperty(OpenLayersLoader, "CDN_URLS", ['https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/build/ol.js', 'https://cdn.jsdelivr.net/npm/ol@6.9.0/dist/ol.js', 'https://unpkg.com/ol@6.9.0/dist/ol.js', 'https://cdnjs.cloudflare.com/ajax/libs/ol3/6.9.0/ol.js']);
// 최대 재시도 횟수
_defineProperty(OpenLayersLoader, "MAX_RETRIES", 5);
// 로드 상태 추적
_defineProperty(OpenLayersLoader, "isLoading", false);
_defineProperty(OpenLayersLoader, "loadPromise", null);


/***/ }),

/***/ "./src/components/map/strategies/LeafletFeatureStrategy.js":
/*!*****************************************************************!*\
  !*** ./src/components/map/strategies/LeafletFeatureStrategy.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LeafletFeatureStrategy)
/* harmony export */ });
/* harmony import */ var _utils_PopupUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/PopupUtils.js */ "./src/components/map/utils/PopupUtils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Leaflet 맵 피처 변환 전략
 * Leaflet 맵에 사용할 수 있는 마커, 폴리곤 등의 피처로 데이터를 변환합니다.
 */


var LeafletFeatureStrategy = /*#__PURE__*/function () {
  function LeafletFeatureStrategy() {
    _classCallCheck(this, LeafletFeatureStrategy);
  }
  return _createClass(LeafletFeatureStrategy, [{
    key: "toMarkers",
    value:
    /**
     * Leaflet 마커로 변환
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @returns {Array<Object>} Leaflet 마커 형식 객체 배열
     */
    function toMarkers(dataObjects) {
      var _this = this;
      if (!Array.isArray(dataObjects)) {
        return [];
      }
      return dataObjects.filter(function (item) {
        return item.latitude && item.longitude;
      }) // 좌표가 있는 항목만 필터링
      .map(function (item) {
        return {
          position: [item.latitude, item.longitude],
          title: _this._getTitle(item),
          popup: _this._createPopupContent(item),
          options: _this._getMarkerOptions(item)
        };
      });
    }

    /**
     * Leaflet 폴리곤으로 변환
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @returns {Array<Object>} Leaflet 폴리곤 형식 객체 배열
     */
  }, {
    key: "toPolygons",
    value: function toPolygons(dataObjects) {
      var _this2 = this;
      if (!Array.isArray(dataObjects)) {
        return [];
      }
      return dataObjects.filter(function (item) {
        return item.boundaries && Array.isArray(item.boundaries) && item.boundaries.length >= 3;
      }).map(function (item) {
        return {
          positions: item.boundaries,
          popup: _this2._createPopupContent(item),
          options: _this2._getPolygonOptions(item)
        };
      });
    }

    /**
     * 다양한 Leaflet 레이어 유형으로 변환
     * @param {string} layerType 레이어 유형
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @param {Object} options 옵션
     * @returns {Object} Leaflet 레이어 설정 객체
     */
  }, {
    key: "toLayer",
    value: function toLayer(layerType, dataObjects) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      switch (layerType.toLowerCase()) {
        case 'heatmap':
          return this._createHeatmapLayerConfig(dataObjects, options);
        case 'cluster':
          return this._createClusterLayerConfig(dataObjects, options);
        case 'choropleth':
          return this._createChoroplethLayerConfig(dataObjects, options);
        default:
          throw new Error("\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 Leaflet \uB808\uC774\uC5B4 \uC720\uD615: ".concat(layerType));
      }
    }

    /**
     * 히트맵 레이어 설정 생성
     * @private
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @param {Object} options 옵션
     * @returns {Object} 히트맵 레이어 설정
     */
  }, {
    key: "_createHeatmapLayerConfig",
    value: function _createHeatmapLayerConfig(dataObjects, options) {
      var points = dataObjects.filter(function (item) {
        return item.latitude && item.longitude;
      }).map(function (item) {
        // 기본 형식: [lat, lng, intensity]
        var point = [item.latitude, item.longitude, item.intensity || options.defaultIntensity || 1];
        return point;
      });
      return {
        type: 'heatmap',
        data: points,
        options: {
          radius: options.radius || 25,
          blur: options.blur || 15,
          maxZoom: options.maxZoom || 18,
          max: options.max || 1.0,
          gradient: options.gradient || {
            0.4: 'blue',
            0.65: 'lime',
            1: 'red'
          }
        }
      };
    }

    /**
     * 클러스터 레이어 설정 생성
     * @private
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @param {Object} options 옵션
     * @returns {Object} 클러스터 레이어 설정
     */
  }, {
    key: "_createClusterLayerConfig",
    value: function _createClusterLayerConfig(dataObjects, options) {
      // 마커 데이터로 변환
      var markers = this.toMarkers(dataObjects);
      return {
        type: 'cluster',
        data: markers,
        options: {
          showCoverageOnHover: options.showCoverageOnHover !== undefined ? options.showCoverageOnHover : true,
          zoomToBoundsOnClick: options.zoomToBoundsOnClick !== undefined ? options.zoomToBoundsOnClick : true,
          maxClusterRadius: options.maxClusterRadius || 80,
          disableClusteringAtZoom: options.disableClusteringAtZoom || 16,
          spiderfyOnMaxZoom: options.spiderfyOnMaxZoom !== undefined ? options.spiderfyOnMaxZoom : true
        }
      };
    }

    /**
     * 단계구분도(Choropleth) 레이어 설정 생성
     * @private
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @param {Object} options 옵션
     * @returns {Object} 단계구분도 레이어 설정
     */
  }, {
    key: "_createChoroplethLayerConfig",
    value: function _createChoroplethLayerConfig(dataObjects, options) {
      // GeoJSON 형식 데이터가 필요함
      var geoJsonData = options.geoJson || this._createGeoJsonFromPolygons(dataObjects);
      return {
        type: 'choropleth',
        data: geoJsonData,
        options: {
          valueProperty: options.valueProperty || 'value',
          scale: options.scale || ['#FFEDA0', '#FEB24C', '#FC4E2A', '#E31A1C', '#BD0026'],
          steps: options.steps || 5,
          mode: options.mode || 'q',
          // 'q' for quantile, 'e' for equidistant
          style: options.style || {
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
          },
          onEachFeature: options.onEachFeature
        }
      };
    }

    /**
     * 폴리곤 데이터로부터 GeoJSON 생성
     * @private
     * @param {Array<Object>} polygonData 폴리곤 데이터 배열
     * @returns {Object} GeoJSON 객체
     */
  }, {
    key: "_createGeoJsonFromPolygons",
    value: function _createGeoJsonFromPolygons(polygonData) {
      var _this3 = this;
      return {
        type: 'FeatureCollection',
        features: polygonData.filter(function (item) {
          return item.boundaries && Array.isArray(item.boundaries) && item.boundaries.length >= 3;
        }).map(function (item) {
          return {
            type: 'Feature',
            properties: _objectSpread(_objectSpread({}, _this3._extractProperties(item)), {}, {
              value: item.value || 0
            }),
            geometry: {
              type: 'Polygon',
              coordinates: [item.boundaries.map(function (point) {
                return [point[1], point[0]];
              })] // Leaflet GeoJSON 좌표계 변환 [lng, lat]
            }
          };
        })
      };
    }

    /**
     * 항목의 속성 추출
     * @private
     * @param {Object} item 데이터 항목
     * @returns {Object} 추출된 속성 객체
     */
  }, {
    key: "_extractProperties",
    value: function _extractProperties(item) {
      var properties = _objectSpread({}, item);

      // 좌표 및 경계 데이터는 제외
      delete properties.latitude;
      delete properties.longitude;
      delete properties.boundaries;
      return properties;
    }

    /**
     * 항목 제목 생성
     * @private
     * @param {Object} item 데이터 항목
     * @returns {string} 제목
     */
  }, {
    key: "_getTitle",
    value: function _getTitle(item) {
      return item.title || item.name || "PNU: ".concat(item.code || item.id || '');
    }

    /**
     * 팝업 내용 생성
     * @private
     * @param {Object} item 데이터 항목
     * @returns {string} HTML 팝업 내용
     */
  }, {
    key: "_createPopupContent",
    value: function _createPopupContent(item) {
      return _utils_PopupUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].createPopupContent(item);
    }

    /**
     * 마커 옵션 생성
     * @private
     * @param {Object} item 데이터 항목
     * @returns {Object} 마커 옵션
     */
  }, {
    key: "_getMarkerOptions",
    value: function _getMarkerOptions(item) {
      // 중요도나 특성에 따라 다른 마커 스타일 적용 가능
      return {
        icon: this._getMarkerIcon(item),
        title: this._getTitle(item),
        riseOnHover: true
      };
    }

    /**
     * 마커 아이콘 생성
     * @private
     * @param {Object} item 데이터 항목
     * @returns {Object} 마커 아이콘 설정
     */
  }, {
    key: "_getMarkerIcon",
    value: function _getMarkerIcon(item) {
      // 사용자 정의 아이콘 또는 기본 아이콘
      var color = this._getMarkerColorByImportance(item.importance || 1);

      // Leaflet 적절한 아이콘 형식으로 반환
      // LeafletProvider에서 직접 L.divIcon을 생성할 수 있도록 설정 전달
      return {
        iconUrl: null,
        // 내장 아이콘을 사용하지 않으므로 null
        iconSize: [10, 10],
        iconAnchor: [5, 5],
        className: 'custom-marker-container',
        html: "<div class=\"custom-marker\" style=\"background-color: ".concat(color, ";\"></div>"),
        type: 'div' // divIcon 사용 표시
      };
    }

    /**
     * 중요도에 따른 마커 색상 결정
     * @private
     * @param {number} importance 중요도 (1-10)
     * @returns {string} 색상 코드
     */
  }, {
    key: "_getMarkerColorByImportance",
    value: function _getMarkerColorByImportance(importance) {
      // 낮은 중요도(1)는 초록색, 높은 중요도(10)는 빨간색으로 그라데이션
      var colors = ['#4CAF50',
      // 초록색 (낮은 중요도)
      '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#F44336', '#E91E63', '#D32F2F' // 빨간색 (높은 중요도)
      ];

      // 중요도 값을 0-9 범위로 맞춤
      var index = Math.max(0, Math.min(9, Math.floor(importance) - 1));
      return colors[index];
    }

    /**
     * 폴리곤 옵션 생성
     * @private
     * @param {Object} item 데이터 항목
     * @returns {Object} 폴리곤 옵션
     */
  }, {
    key: "_getPolygonOptions",
    value: function _getPolygonOptions(item) {
      var color = this._getPolygonColor(item);
      return {
        color: color,
        fillColor: color,
        fillOpacity: 0.5,
        weight: 2
      };
    }

    /**
     * 데이터 항목에 따른 폴리곤 색상 결정
     * @private
     * @param {Object} item 데이터 항목
     * @returns {string} 색상 코드
     */
  }, {
    key: "_getPolygonColor",
    value: function _getPolygonColor(item) {
      // 유형별로 다른 색상 지정 가능
      // 예: 지목에 따라 다른 색상 지정
      var typeColors = {
        '대지': '#FF5733',
        '전': '#33FF57',
        '답': '#3357FF',
        '임야': '#57FF33',
        '도로': '#AAAAAA'
        // 기타 지목에 따른 색상...
      };
      return typeColors[item.type] || '#3388ff'; // 기본 색상
    }
  }]);
}();


/***/ }),

/***/ "./src/components/map/strategies/OpenLayersFeatureStrategy.js":
/*!********************************************************************!*\
  !*** ./src/components/map/strategies/OpenLayersFeatureStrategy.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenLayersFeatureStrategy)
/* harmony export */ });
/* harmony import */ var _utils_PopupUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/PopupUtils.js */ "./src/components/map/utils/PopupUtils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * OpenLayers 맵 피처 변환 전략
 * OpenLayers 맵에 사용할 수 있는 마커, 폴리곤 등의 피처로 데이터를 변환합니다.
 */


var OpenLayersFeatureStrategy = /*#__PURE__*/function () {
  function OpenLayersFeatureStrategy() {
    _classCallCheck(this, OpenLayersFeatureStrategy);
  }
  return _createClass(OpenLayersFeatureStrategy, [{
    key: "toMarkers",
    value:
    /**
     * OpenLayers 마커로 변환
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @returns {Array<Object>} OpenLayers 마커 형식 객체 배열
     */
    function toMarkers(dataObjects) {
      var _this = this;
      if (!Array.isArray(dataObjects)) {
        return [];
      }
      var result = dataObjects.filter(function (item) {
        return item.latitude && item.longitude;
      }).map(function (item) {
        return {
          position: [item.latitude, item.longitude],
          // 위도, 경도 순서로 저장 (나중에 OpenLayersProvider에서 바로 사용할 수 있도록)
          projection: 'EPSG:4326',
          title: _this._getTitle(item),
          popup: _this._createPopupContent(item),
          options: _this._getMarkerOptions(item)
        };
      });

      // 디버깅을 위한 로그
      console.log("OpenLayers \uB9C8\uCEE4 \uBCC0\uD658: ".concat(dataObjects.length, "\uAC1C \uC911 ").concat(result.length, "\uAC1C \uC0DD\uC131\uB428"));
      if (result.length > 0) {
        console.log('첫 번째 마커 샘플:', result[0]);
      }
      return result;
    }

    /**
     * OpenLayers 폴리곤으로 변환
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @returns {Array<Object>} OpenLayers 폴리곤 형식 객체 배열
     */
  }, {
    key: "toPolygons",
    value: function toPolygons(dataObjects) {
      var _this2 = this;
      if (!Array.isArray(dataObjects)) {
        return [];
      }
      return dataObjects.filter(function (item) {
        return item.boundaries && Array.isArray(item.boundaries) && item.boundaries.length >= 3;
      }).map(function (item) {
        return {
          // OpenLayers에서는 경도, 위도 순서로 좌표 지정
          positions: item.boundaries.map(function (point) {
            return [point[1], point[0]];
          }),
          projection: 'EPSG:4326',
          popup: _this2._createPopupContent(item),
          options: _this2._getPolygonOptions(item)
        };
      });
    }

    /**
     * 다양한 OpenLayers 레이어 유형으로 변환
     * @param {string} layerType 레이어 유형
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @param {Object} options 옵션
     * @returns {Object} OpenLayers 레이어 설정 객체
     */
  }, {
    key: "toLayer",
    value: function toLayer(layerType, dataObjects) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      switch (layerType.toLowerCase()) {
        case 'heatmap':
          return this._createHeatmapLayerConfig(dataObjects, options);
        case 'cluster':
          return this._createClusterLayerConfig(dataObjects, options);
        case 'choropleth':
          return this._createChoroplethLayerConfig(dataObjects, options);
        default:
          throw new Error("\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 OpenLayers \uB808\uC774\uC5B4 \uC720\uD615: ".concat(layerType));
      }
    }

    /**
     * 히트맵 레이어 설정 생성
     * @private
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @param {Object} options 옵션
     * @returns {Object} 히트맵 레이어 설정
     */
  }, {
    key: "_createHeatmapLayerConfig",
    value: function _createHeatmapLayerConfig(dataObjects, options) {
      // OpenLayers 히트맵 레이어는 Vector 소스의 피처로 표현됨
      var features = dataObjects.filter(function (item) {
        return item.latitude && item.longitude;
      }).map(function (item) {
        return {
          type: 'Point',
          coordinates: [item.longitude, item.latitude],
          weight: item.intensity || options.defaultIntensity || 1
        };
      });
      return {
        type: 'heatmap',
        features: features,
        options: {
          blur: options.blur || 15,
          radius: options.radius || 10,
          gradient: options.gradient || ['rgba(0, 0, 255, 0)', 'rgba(0, 0, 255, 1)']
        }
      };
    }

    /**
     * 클러스터 레이어 설정 생성
     * @private
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @param {Object} options 옵션
     * @returns {Object} 클러스터 레이어 설정
     */
  }, {
    key: "_createClusterLayerConfig",
    value: function _createClusterLayerConfig(dataObjects, options) {
      // 마커 데이터로 변환
      var markers = this.toMarkers(dataObjects);
      return {
        type: 'cluster',
        data: markers,
        options: {
          distance: options.distance || 40,
          minDistance: options.minDistance || 20,
          // OpenLayers 클러스터 스타일링 옵션
          style: options.style || this._getDefaultClusterStyle()
        }
      };
    }

    /**
     * 기본 클러스터 스타일 구성
     * @private
     * @returns {Function} 스타일 함수
     */
  }, {
    key: "_getDefaultClusterStyle",
    value: function _getDefaultClusterStyle() {
      return function (feature) {
        var size = feature.get('features').length;

        // 크기에 따른 반경 설정
        var radius = 10;
        if (size > 10) radius = 15;
        if (size > 100) radius = 20;

        // 색상 설정
        var fillColor = 'rgba(51, 153, 204, 0.8)';
        if (size > 10) fillColor = 'rgba(255, 153, 0, 0.8)';
        if (size > 100) fillColor = 'rgba(204, 51, 0, 0.8)';
        return {
          image: {
            type: 'Circle',
            radius: radius,
            fill: {
              color: fillColor
            },
            stroke: {
              color: '#fff',
              width: 2
            }
          },
          text: {
            text: size.toString(),
            fill: {
              color: '#fff'
            },
            font: 'bold 12px Arial'
          }
        };
      };
    }

    /**
     * 단계구분도(Choropleth) 레이어 설정 생성
     * @private
     * @param {Array<Object>} dataObjects 데이터 객체 배열
     * @param {Object} options 옵션
     * @returns {Object} 단계구분도 레이어 설정
     */
  }, {
    key: "_createChoroplethLayerConfig",
    value: function _createChoroplethLayerConfig(dataObjects, options) {
      // GeoJSON 형식 데이터가 필요함
      var geoJsonData = options.geoJson || this._createGeoJsonFromPolygons(dataObjects);
      return {
        type: 'choropleth',
        data: geoJsonData,
        options: {
          valueProperty: options.valueProperty || 'value',
          valueFunction: options.valueFunction,
          colors: options.colors || ['#FFEDA0', '#FEB24C', '#FC4E2A', '#E31A1C', '#BD0026'],
          style: options.style || this._getDefaultChoroplethStyle(options)
        }
      };
    }

    /**
     * 기본 단계구분도 스타일 구성
     * @private
     * @param {Object} options 옵션
     * @returns {Function} 스타일 함수
     */
  }, {
    key: "_getDefaultChoroplethStyle",
    value: function _getDefaultChoroplethStyle(options) {
      var valueProperty = options.valueProperty || 'value';
      var colors = options.colors || ['#FFEDA0', '#FEB24C', '#FC4E2A', '#E31A1C', '#BD0026'];
      return function (feature) {
        // 값 범위에 따른 색상 결정
        var value = feature.get(valueProperty) || 0;

        // 범례 단계를 기준으로 색상 인덱스 계산
        // 이 부분은 데이터의 특성에 맞게 조정 필요
        var index = Math.min(colors.length - 1, Math.floor(value / 20));
        return {
          fill: {
            color: colors[index]
          },
          stroke: {
            color: '#fff',
            width: 1
          }
        };
      };
    }

    /**
     * 폴리곤 데이터로부터 GeoJSON 생성
     * @private
     * @param {Array<Object>} polygonData 폴리곤 데이터 배열
     * @returns {Object} GeoJSON 객체
     */
  }, {
    key: "_createGeoJsonFromPolygons",
    value: function _createGeoJsonFromPolygons(polygonData) {
      var _this3 = this;
      return {
        type: 'FeatureCollection',
        features: polygonData.filter(function (item) {
          return item.boundaries && Array.isArray(item.boundaries) && item.boundaries.length >= 3;
        }).map(function (item) {
          return {
            type: 'Feature',
            properties: _objectSpread(_objectSpread({}, _this3._extractProperties(item)), {}, {
              value: item.value || 0
            }),
            geometry: {
              type: 'Polygon',
              coordinates: [item.boundaries.map(function (point) {
                return [point[1], point[0]];
              })] // OpenLayers GeoJSON 좌표계 [lng, lat]
            }
          };
        })
      };
    }

    /**
     * 항목의 속성 추출
     * @private
     * @param {Object} item 데이터 항목
     * @returns {Object} 추출된 속성 객체
     */
  }, {
    key: "_extractProperties",
    value: function _extractProperties(item) {
      var properties = _objectSpread({}, item);

      // 좌표 및 경계 데이터는 제외
      delete properties.latitude;
      delete properties.longitude;
      delete properties.boundaries;
      return properties;
    }

    /**
     * 항목 제목 생성
     * @private
     * @param {Object} item 데이터 항목
     * @returns {string} 제목
     */
  }, {
    key: "_getTitle",
    value: function _getTitle(item) {
      return item.title || item.name || "PNU: ".concat(item.code || item.id || '');
    }

    /**
     * 팝업 내용 생성
     * @private
     * @param {Object} item 데이터 항목
     * @returns {string} HTML 팝업 내용
     */
  }, {
    key: "_createPopupContent",
    value: function _createPopupContent(item) {
      return _utils_PopupUtils_js__WEBPACK_IMPORTED_MODULE_0__["default"].createPopupContent(item);
    }

    /**
     * 마커 옵션 생성
     * @private
     * @param {Object} item 데이터 항목
     * @returns {Object} 마커 옵션
     */
  }, {
    key: "_getMarkerOptions",
    value: function _getMarkerOptions(item) {
      // OpenLayers 마커 스타일 옵션
      return {
        image: this._getMarkerStyle(item)
      };
    }

    /**
     * 마커 스타일 생성
     * @private
     * @param {Object} item 데이터 항목
     * @returns {Object} OpenLayers 마커 스타일
     */
  }, {
    key: "_getMarkerStyle",
    value: function _getMarkerStyle(item) {
      var color = this._getMarkerColorByImportance(item.importance || 1);
      return {
        type: 'Circle',
        radius: 7,
        fill: {
          color: color
        },
        stroke: {
          color: '#fff',
          width: 2
        }
      };
    }

    /**
     * 중요도에 따른 마커 색상 결정
     * @private
     * @param {number} importance 중요도 (1-10)
     * @returns {string} 색상 코드
     */
  }, {
    key: "_getMarkerColorByImportance",
    value: function _getMarkerColorByImportance(importance) {
      // 낮은 중요도(1)는 초록색, 높은 중요도(10)는 빨간색으로 그라데이션
      var colors = ['#4CAF50',
      // 초록색 (낮은 중요도)
      '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#F44336', '#E91E63', '#D32F2F' // 빨간색 (높은 중요도)
      ];

      // 중요도 값을 0-9 범위로 맞춤
      var index = Math.max(0, Math.min(9, Math.floor(importance) - 1));
      return colors[index];
    }

    /**
     * 폴리곤 옵션 생성
     * @private
     * @param {Object} item 데이터 항목
     * @returns {Object} OpenLayers 폴리곤 스타일 옵션
     */
  }, {
    key: "_getPolygonOptions",
    value: function _getPolygonOptions(item) {
      var color = this._getPolygonColor(item);
      return {
        stroke: {
          color: color,
          width: 2
        },
        fill: {
          color: this._hexToRgba(color, 0.5) // 투명도 50%
        }
      };
    }

    /**
     * 데이터 항목에 따른 폴리곤 색상 결정
     * @private
     * @param {Object} item 데이터 항목
     * @returns {string} 색상 코드
     */
  }, {
    key: "_getPolygonColor",
    value: function _getPolygonColor(item) {
      // 유형별로 다른 색상 지정 가능
      var typeColors = {
        '대지': '#FF5733',
        '전': '#33FF57',
        '답': '#3357FF',
        '임야': '#57FF33',
        '도로': '#AAAAAA'
        // 기타 지목에 따른 색상...
      };
      return typeColors[item.type] || '#3388ff'; // 기본 색상
    }

    /**
     * HEX 색상을 RGBA로 변환
     * @private
     * @param {string} hex HEX 색상 코드
     * @param {number} alpha 투명도 (0-1)
     * @returns {string} RGBA 색상 문자열
     */
  }, {
    key: "_hexToRgba",
    value: function _hexToRgba(hex, alpha) {
      var r = parseInt(hex.slice(1, 3), 16);
      var g = parseInt(hex.slice(3, 5), 16);
      var b = parseInt(hex.slice(5, 7), 16);
      return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
    }
  }]);
}();


/***/ }),

/***/ "./src/components/map/strategies/StrategyRegistry.js":
/*!***********************************************************!*\
  !*** ./src/components/map/strategies/StrategyRegistry.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MapFeatureAdapter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MapFeatureAdapter.js */ "./src/components/map/MapFeatureAdapter.js");
/* harmony import */ var _LeafletFeatureStrategy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeafletFeatureStrategy.js */ "./src/components/map/strategies/LeafletFeatureStrategy.js");
/* harmony import */ var _OpenLayersFeatureStrategy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenLayersFeatureStrategy.js */ "./src/components/map/strategies/OpenLayersFeatureStrategy.js");
/**
 * 전략 레지스트리
 * 맵 피처 전략을 등록하고 관리합니다.
 */





// 전역 인스턴스 생성
var mapFeatureAdapter = new _MapFeatureAdapter_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

// 기본 전략 등록
mapFeatureAdapter.registerStrategy('leaflet', new _LeafletFeatureStrategy_js__WEBPACK_IMPORTED_MODULE_1__["default"]());
mapFeatureAdapter.registerStrategy('openlayers', new _OpenLayersFeatureStrategy_js__WEBPACK_IMPORTED_MODULE_2__["default"]());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * 맵 피처 어댑터 인스턴스 반환
   * @returns {MapFeatureAdapter} 맵 피처 어댑터 인스턴스
   */
  getAdapter: function getAdapter() {
    return mapFeatureAdapter;
  },
  /**
   * 새 전략 등록
   * @param {string} providerType 맵 공급자 유형
   * @param {Object} strategy 전략 객체
   */
  registerStrategy: function registerStrategy(providerType, strategy) {
    mapFeatureAdapter.registerStrategy(providerType, strategy);
  },
  /**
   * 데이터 배열을 특정 맵 공급자의 마커로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @returns {Array<Object>} 변환된 마커 객체 배열
   */
  toMarkers: function toMarkers(providerType, dataObjects) {
    return mapFeatureAdapter.toMarkers(providerType, dataObjects);
  },
  /**
   * 데이터 배열을 특정 맵 공급자의 폴리곤으로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @returns {Array<Object>} 변환된 폴리곤 객체 배열
   */
  toPolygons: function toPolygons(providerType, dataObjects) {
    return mapFeatureAdapter.toPolygons(providerType, dataObjects);
  },
  /**
   * 데이터 배열을 특정 맵 공급자의 레이어로 변환
   * @param {string} providerType 맵 공급자 유형
   * @param {string} layerType 레이어 유형
   * @param {Array<Object>} dataObjects 데이터 객체 배열
   * @param {Object} options 레이어 옵션
   * @returns {Object} 레이어 설정 객체
   */
  toLayer: function toLayer(providerType, layerType, dataObjects) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return mapFeatureAdapter.toLayer(providerType, layerType, dataObjects, options);
  }
});

/***/ }),

/***/ "./src/components/map/utils/PopupUtils.js":
/*!************************************************!*\
  !*** ./src/components/map/utils/PopupUtils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPopupContent: () => (/* binding */ createPopupContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   initLocationImageUtils: () => (/* binding */ initLocationImageUtils)
/* harmony export */ });
/* harmony import */ var _services_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api.js */ "./src/services/api.js");
/* harmony import */ var _core_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config.js */ "./src/core/config.js");
/**
 * 팝업 관련 유틸리티 함수
 */




/**
 * API 키 설정
 * 실제 프로젝트에서는 환경 변수나 안전한 방법으로 관리해야 함
 */
var API_KEYS = {
  // Google Maps API 키 (정적 지도, 위성 이미지 등에 필요)
  GOOGLE_MAPS: 'AIzaSyAriZRiDztzGO_WMbFAlwn4kYuUvpZgyd8'
};

// 활성화된 팝업을 추적하기 위한 객체
var activePopups = {};

/**
 * 위치 이미지 로드 스크립트와 스타일을 초기화합니다.
 * 한 번만 실행되어야 합니다.
 */
function initLocationImageUtils() {
  if (window.locationImageUtilsInitialized) return;

  // PNU 코드 복사 함수
  window.copyPnuCode = function (pnuCode) {
    navigator.clipboard.writeText(pnuCode).then(function () {
      var copyMsg = document.getElementById('copy-msg-' + pnuCode);
      copyMsg.style.display = 'inline';
      setTimeout(function () {
        copyMsg.style.display = 'none';
      }, 1500);
    })["catch"](function (err) {
      console.error('클립보드 복사 실패:', err);
    });
  };

  // PNU 정보 로드 함수 - 전역 함수로 만들어 Leaflet에서 호출 가능하게 함
  window.loadPnuInfo = function (pnuCode, popupId) {
    console.log('PNU 정보 로드 요청:', pnuCode, popupId);
    var addressElement = document.getElementById("address-content-".concat(popupId));
    if (!addressElement) {
      console.error('주소 요소를 찾을 수 없음:', popupId);
      return;
    }

    // 로딩 메시지 표시
    addressElement.textContent = '주소 정보를 불러오는 중...';

    // config.js에서 BASE_URL 사용하여 API URL 구성
    // 설정 파일을 사용하므로 백엔드 URL이 변경되어도 자동 반영됨
    var apiUrl = "".concat(_core_config_js__WEBPACK_IMPORTED_MODULE_1__.API_CONFIG.BASE_URL, "/pnu/").concat(pnuCode);
    console.log('API 요청 URL:', apiUrl);
    fetch(apiUrl).then(function (response) {
      if (!response.ok) {
        throw new Error("API \uC624\uB958: ".concat(response.status));
      }

      // 응답이 JSON인지 확인
      var contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error("\uC751\uB2F5\uC774 JSON\uC774 \uC544\uB2D9\uB2C8\uB2E4: ".concat(contentType));
      }
      return response.json();
    }).then(function (result) {
      console.log('PNU API 응답:', result);
      if (result && result.success && result.data) {
        var data = result.data;
        // LXMAP_DEMO 데이터가 있는 경우
        var lxmapData = data.data && data.data.LXMAP_DEMO ? data.data.LXMAP_DEMO[0] : null;
        if (lxmapData && lxmapData.juso) {
          addressElement.textContent = lxmapData.juso;
        } else {
          addressElement.textContent = "PNU: ".concat(pnuCode);
        }
      } else {
        addressElement.textContent = "PNU: ".concat(pnuCode);
      }
    })["catch"](function (error) {
      console.error('주소 정보 로드 실패:', error);
      addressElement.textContent = "PNU: ".concat(pnuCode);

      // 개발 환경에서만 디버깅 정보 표시
      if (true) {
        console.warn('API 호출 디버깅 정보:', {
          url: apiUrl,
          pnuCode: pnuCode,
          error: error.message
        });
      }
    });
  };

  // Leaflet 팝업 열림 감지 및 처리
  // MutationObserver를 사용하여 DOM에 팝업이 추가되는 것을 감지
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) {
            // 요소 노드인 경우
            // pnu-popup-trigger 클래스를 가진 요소 찾기
            var popupTriggers = node.querySelectorAll('.pnu-popup-trigger');
            popupTriggers.forEach(function (trigger) {
              var pnuCode = trigger.getAttribute('data-pnu');
              var popupId = trigger.getAttribute('data-popup-id');

              // 이미 처리된 팝업인지 확인
              if (!activePopups[popupId]) {
                console.log('새 팝업 감지:', popupId, pnuCode);
                activePopups[popupId] = true;
                window.loadPnuInfo(pnuCode, popupId);
              }
            });
          }
        });
      }
    });
  });

  // 전체 문서에 대해 감시 시작
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // 스타일 추가
  var style = document.createElement('style');
  style.textContent = "\n    .pnu-popup {\n      min-width: 300px;\n    }\n    .pnu-link {\n      display: inline-block;\n      margin-right: 10px;\n      color: #0078A8;\n      text-decoration: none;\n    }\n    .pnu-link:hover {\n      text-decoration: underline;\n    }\n    .pnu-code {\n      cursor: pointer;\n      color: #0078A8;\n      text-decoration: underline;\n    }\n    .pnu-code:hover {\n      color: #00557A;\n    }\n    .copy-msg {\n      display: none;\n      color: green;\n      font-size: 12px;\n      margin-left: 5px;\n    }\n    .street-view {\n      width: 100%;\n      height: 200px;\n      border: none;\n      border-radius: 3px;\n      margin-top: 10px;\n    }\n    .loading-address {\n      padding: 5px 0;\n      color: #666;\n      font-size: 12px;\n    }\n  ";
  document.head.appendChild(style);
  window.locationImageUtilsInitialized = true;
}

/**
 * 스트리트 뷰 임베드 URL 생성
 * @param {string} lat 위도
 * @param {string} lng 경도
 * @returns {string} 스트리트 뷰 URL
 */
function createStreetViewUrl(lat, lng) {
  return "https://www.google.com/maps/embed/v1/streetview?key=".concat(API_KEYS.GOOGLE_MAPS, "&location=").concat(lat, ",").concat(lng, "&heading=210&pitch=10&fov=90");
}

/**
 * PNU 항목에 대한 팝업 HTML 콘텐츠 생성
 * @param {Object} item PNU 데이터 항목
 * @returns {string} HTML 팝업 콘텐츠
 */
function createPopupContent(item) {
  // 유틸리티 초기화
  initLocationImageUtils();
  var popupId = "popup-".concat(Date.now(), "-").concat(Math.floor(Math.random() * 1000));
  var pnuCode = item.code || item.id || item.pnu || '';

  // 좌표가 있는 경우 구글 맵 링크 생성
  var googleMapsLink = '';
  var streetViewHtml = '';
  if (item.latitude && item.longitude) {
    var coords = "".concat(item.latitude, ",").concat(item.longitude);
    googleMapsLink = "<a href=\"https://www.google.com/maps?q=".concat(coords, "\" target=\"_blank\" class=\"pnu-link\">\uAD6C\uAE00 \uC9C0\uB3C4\uC5D0\uC11C \uBCF4\uAE30</a>");

    // 스트리트 뷰만 생성
    var streetViewUrl = createStreetViewUrl(item.latitude, item.longitude);
    streetViewHtml = "<iframe id=\"street-view-".concat(pnuCode, "\" src=\"").concat(streetViewUrl, "\" class=\"street-view\" allowfullscreen></iframe>");
  }
  var popupContent = "\n    <div class=\"pnu-popup\">\n      <!-- \uD31D\uC5C5 \uD2B8\uB9AC\uAC70 \uC694\uC18C \uCD94\uAC00 -->\n      <div class=\"pnu-popup-trigger\" data-pnu=\"".concat(pnuCode, "\" data-popup-id=\"").concat(popupId, "\" style=\"display:none;\"></div>\n      \n      <h4 id=\"title-").concat(popupId, "\">\n        <span id=\"address-content-").concat(popupId, "\">PNU: ").concat(pnuCode, "</span>\n      </h4>\n      <p>\n        <strong>PNU \uCF54\uB4DC:</strong> \n        <span class=\"pnu-code\" onclick=\"copyPnuCode('").concat(pnuCode, "')\">").concat(pnuCode, "</span>\n        <span id=\"copy-msg-").concat(pnuCode, "\" class=\"copy-msg\">\uBCF5\uC0AC\uB428!</span>\n      </p>\n      ").concat(item.latitude && item.longitude ? "\n        <p><strong>\uC88C\uD45C:</strong> ".concat(item.latitude.toFixed(6), ", ").concat(item.longitude.toFixed(6), "</p>\n        <div class=\"pnu-links\">\n          ").concat(googleMapsLink, "\n        </div>\n        ").concat(streetViewHtml, "\n      ") : '', "\n    </div>\n  ");
  return popupContent;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  initLocationImageUtils: initLocationImageUtils,
  createPopupContent: createPopupContent
});

/***/ }),

/***/ "./src/core/config.js":
/*!****************************!*\
  !*** ./src/core/config.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_CONFIG: () => (/* binding */ API_CONFIG),
/* harmony export */   MAP_CONFIG: () => (/* binding */ MAP_CONFIG),
/* harmony export */   STORAGE_KEYS: () => (/* binding */ STORAGE_KEYS),
/* harmony export */   UI_CONFIG: () => (/* binding */ UI_CONFIG)
/* harmony export */ });
/**
 * 애플리케이션 전역 설정
 */

// API 설정
var API_CONFIG = {
  BASE_URL: 'http://localhost:5000/api',
  PNU_FILTER_URL: 'http://localhost:5000/api/pnu-filter',
  TIMEOUT: 30000 // 30초
};

// 맵 설정 (향후 Leaflet 등 맵 라이브러리 사용 시 필요)
var MAP_CONFIG = {
  defaultCenter: [37.5665, 126.9780],
  // 서울 좌표
  defaultZoom: 10,
  tileProvider: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  // Leaflet용 URL
  openlayersTileProvider: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  // OpenLayers용 URL
  // CartoDB 타일 제공자 (다양한 스타일)
  cartoDB: {
    voyager: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    // 컬러 스타일
    positron: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    // 라이트 스타일
    dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    // 다크 스타일
    voyagerNoLabels: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png',
    // 라벨 없는 컬러 스타일
    positronNoLabels: 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
    // 라벨 없는 라이트 스타일
    darkNoLabels: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png' // 라벨 없는 다크 스타일
  },
  // OpenLayers용 CartoDB 타일 URL (서브도메인 변수 없는 버전)
  cartoDBOL: {
    voyager: 'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
    positron: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
    dark: 'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png',
    voyagerNoLabels: 'https://basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png',
    positronNoLabels: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
    darkNoLabels: 'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png'
  },
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | &copy; <a href="https://carto.com/attributions">CARTO</a>'
};

// UI 설정
var UI_CONFIG = {
  MAX_DISPLAY_PNU: 100,
  // 결과 화면에 표시할 최대 PNU 개수
  SIDEBAR_WIDTH: 300,
  // 사이드바 너비 (px)
  ANIMATION_DURATION: 300 // 애니메이션 지속 시간 (ms)
};

// 로컬 스토리지 키
var STORAGE_KEYS = {
  RECENT_FILTERS: 'excel_relations.recent_filters',
  USER_PREFERENCES: 'excel_relations.preferences',
  MAP_PROVIDER: 'excel_relations.map_provider',
  MAP_STYLE: 'excel_relations.map_style'
};

/***/ }),

/***/ "./src/layouts/MainLayout.js":
/*!***********************************!*\
  !*** ./src/layouts/MainLayout.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var _components_filter_FilterList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/filter/FilterList.js */ "./src/components/filter/FilterList.js");
/* harmony import */ var _components_map_MapContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/map/MapContainer.js */ "./src/components/map/MapContainer.js");
/* harmony import */ var _components_grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/grid/GridContainer.js */ "./src/components/grid/GridContainer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 메인 레이아웃 컴포넌트
 * 애플리케이션의 전체 레이아웃을 관리합니다.
 */




var MainLayout = /*#__PURE__*/function () {
  /**
   * 메인 레이아웃 컴포넌트 생성
   * @param {HTMLElement} container 전체 앱 컨테이너
   */
  function MainLayout(container) {
    _classCallCheck(this, MainLayout);
    this.container = container || document.getElementById('app');
    if (!this.container) {
      console.error('앱 컨테이너를 찾을 수 없습니다.');
      return;
    }
    this.init();
  }

  /**
   * 컴포넌트 초기화
   */
  return _createClass(MainLayout, [{
    key: "init",
    value: function init() {
      console.log('메인 레이아웃 초기화 시작');
      this.renderLayout();
      this.initializeComponents();
      console.log('메인 레이아웃 초기화 완료');
    }

    /**
     * 메인 레이아웃 UI 렌더링
     */
  }, {
    key: "renderLayout",
    value: function renderLayout() {
      this.container.innerHTML = "\n      <div class=\"main-layout\">\n        <div class=\"left-sidebar\" id=\"leftSidebar\"></div>\n        <div class=\"main-content\" id=\"mainContent\"></div>\n        <div class=\"right-sidebar\" id=\"rightSidebar\"></div>\n      </div>\n    ";
      this.leftSidebar = document.getElementById('leftSidebar');
      this.mainContent = document.getElementById('mainContent');
      this.rightSidebar = document.getElementById('rightSidebar');
    }

    /**
     * 컴포넌트 초기화
     */
  }, {
    key: "initializeComponents",
    value: function initializeComponents() {
      console.log('컴포넌트 초기화 시작');

      // 필터 목록 컴포넌트 초기화
      this.filterList = new _components_filter_FilterList_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.leftSidebar);

      // 맵 컨테이너 컴포넌트 초기화
      this.mapContainer = new _components_map_MapContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.mainContent);

      // 그리드 컨테이너 컴포넌트 초기화
      this.gridContainer = new _components_grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.rightSidebar);
      console.log('컴포넌트 초기화 완료');
    }
  }]);
}();


/***/ }),

/***/ "./src/services/IsochroneApiService.js":
/*!*********************************************!*\
  !*** ./src/services/IsochroneApiService.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IsochroneApiService)
/* harmony export */ });
/* harmony import */ var _core_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/config.js */ "./src/core/config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 아이소크론 맵 관련 API 서비스
 */


var IsochroneApiService = /*#__PURE__*/function () {
  /**
   * 아이소크론 API 서비스 생성자
   */
  function IsochroneApiService() {
    _classCallCheck(this, IsochroneApiService);
    this.baseUrl = _core_config_js__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.BASE_URL;
    this.timeout = _core_config_js__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.TIMEOUT;
  }

  /**
   * API URL 생성
   * @param {string} endpoint API 엔드포인트
   * @returns {string} 완성된 API URL
   */
  return _createClass(IsochroneApiService, [{
    key: "getUrl",
    value: function getUrl(endpoint) {
      return "".concat(this.baseUrl).concat(endpoint);
    }

    /**
     * API 요청 실행
     * @param {string} endpoint API 엔드포인트
     * @param {object} options fetch 옵션
     * @returns {Promise<object>} API 응답
     */
  }, {
    key: "fetchApi",
    value: (function () {
      var _fetchApi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
        var options,
          url,
          defaultOptions,
          fetchOptions,
          controller,
          timeoutId,
          response,
          errorText,
          data,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              url = this.getUrl(endpoint);
              defaultOptions = {
                headers: {
                  'Content-Type': 'application/json'
                },
                timeout: this.timeout
              };
              fetchOptions = _objectSpread(_objectSpread({}, defaultOptions), options);
              _context.prev = 4;
              console.log("API \uC694\uCCAD: ".concat(url), JSON.stringify(fetchOptions.body ? JSON.parse(fetchOptions.body) : {}, null, 2));
              controller = new AbortController();
              timeoutId = setTimeout(function () {
                return controller.abort();
              }, this.timeout);
              _context.next = 10;
              return fetch(url, _objectSpread(_objectSpread({}, fetchOptions), {}, {
                signal: controller.signal
              }));
            case 10:
              response = _context.sent;
              clearTimeout(timeoutId);
              if (response.ok) {
                _context.next = 17;
                break;
              }
              _context.next = 15;
              return response.text();
            case 15:
              errorText = _context.sent;
              throw new Error("API \uC624\uB958 (".concat(response.status, "): ").concat(response.statusText, "\n").concat(errorText));
            case 17:
              _context.next = 19;
              return response.json();
            case 19:
              data = _context.sent;
              console.log("API \uC751\uB2F5: ".concat(url), data);
              return _context.abrupt("return", data);
            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](4);
              console.error("API \uC694\uCCAD \uC2E4\uD328 (".concat(url, "):"), _context.t0);
              if (!(_context.t0.name === 'AbortError')) {
                _context.next = 29;
                break;
              }
              throw new Error("API \uC694\uCCAD \uC2DC\uAC04 \uCD08\uACFC: ".concat(this.timeout, "ms\uB97C \uCD08\uACFC\uD588\uC2B5\uB2C8\uB2E4."));
            case 29:
              throw _context.t0;
            case 30:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[4, 24]]);
      }));
      function fetchApi(_x) {
        return _fetchApi.apply(this, arguments);
      }
      return fetchApi;
    }()
    /**
     * 그리드 테이블 목록 조회
     * @returns {Promise<object>} 테이블 목록
     */
    )
  }, {
    key: "getGridTables",
    value: (function () {
      var _getGridTables = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.fetchApi('/isochrone/grid-tables'));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getGridTables() {
        return _getGridTables.apply(this, arguments);
      }
      return getGridTables;
    }()
    /**
     * 테이블 컬럼 목록 조회
     * @param {string} tableName 테이블 이름
     * @returns {Promise<object>} 컬럼 목록
     */
    )
  }, {
    key: "getTableColumns",
    value: (function () {
      var _getTableColumns = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(tableName) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (tableName) {
                _context3.next = 2;
                break;
              }
              throw new Error('테이블 이름이 필요합니다.');
            case 2:
              return _context3.abrupt("return", this.fetchApi("/isochrone/columns/".concat(encodeURIComponent(tableName))));
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getTableColumns(_x2) {
        return _getTableColumns.apply(this, arguments);
      }
      return getTableColumns;
    }()
    /**
     * 아이소크론 생성 요청
     * @param {object} params 아이소크론 생성 매개변수
     * @returns {Promise<object>} 아이소크론 데이터
     */
    )
  }, {
    key: "generateIsochrone",
    value: (function () {
      var _generateIsochrone = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(params) {
        var requiredFields, _i, _requiredFields, field;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!params || _typeof(params) !== 'object')) {
                _context4.next = 2;
                break;
              }
              throw new Error('아이소크론 생성 매개변수가 필요합니다.');
            case 2:
              requiredFields = ['pnu', 'rangeMinutes'];
              _i = 0, _requiredFields = requiredFields;
            case 4:
              if (!(_i < _requiredFields.length)) {
                _context4.next = 11;
                break;
              }
              field = _requiredFields[_i];
              if (params[field]) {
                _context4.next = 8;
                break;
              }
              throw new Error("\uD544\uC218 \uB9E4\uAC1C\uBCC0\uC218\uAC00 \uB204\uB77D\uB418\uC5C8\uC2B5\uB2C8\uB2E4: ".concat(field));
            case 8:
              _i++;
              _context4.next = 4;
              break;
            case 11:
              return _context4.abrupt("return", this.fetchApi('/isochrone/generate', {
                method: 'POST',
                body: JSON.stringify(params)
              }));
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function generateIsochrone(_x3) {
        return _generateIsochrone.apply(this, arguments);
      }
      return generateIsochrone;
    }()
    /**
     * 아이소크론 분석 요청
     * @param {string} pnu PNU 코드
     * @param {number} rangeMinutes 이동시간(분)
     * @param {string} gridTable 그리드 테이블명
     * @param {string} columnName 분석할 컬럼명
     * @returns {Promise<object>} 분석 결과
     */
    )
  }, {
    key: "analyzeIsochrone",
    value: (function () {
      var _analyzeIsochrone = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(pnu, rangeMinutes, gridTable, columnName) {
        var numericRangeMinutes, params, endpoint, _response$data, response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (pnu) {
                _context5.next = 2;
                break;
              }
              throw new Error('PNU 코드가 필요합니다.');
            case 2:
              if (rangeMinutes) {
                _context5.next = 4;
                break;
              }
              throw new Error('이동시간(분)이 필요합니다.');
            case 4:
              if (gridTable) {
                _context5.next = 6;
                break;
              }
              throw new Error('그리드 테이블명이 필요합니다.');
            case 6:
              if (columnName) {
                _context5.next = 8;
                break;
              }
              throw new Error('분석할 컬럼명이 필요합니다.');
            case 8:
              // 숫자 타입 변환 (숫자로 전달하기 위해)
              numericRangeMinutes = Number(rangeMinutes); // 숫자 유효성 검사
              if (!isNaN(numericRangeMinutes)) {
                _context5.next = 11;
                break;
              }
              throw new Error('이동시간(분)은 숫자여야 합니다.');
            case 11:
              // 요청 데이터 구성
              params = {
                pnu: pnu,
                rangeMinutes: numericRangeMinutes,
                gridTable: gridTable,
                columnName: columnName
              }; // API 엔드포인트
              endpoint = '/isochrone/analyze';
              console.log("\uC544\uC774\uC18C\uD06C\uB860 \uBD84\uC11D \uC694\uCCAD: PNU=".concat(pnu, ", \uC2DC\uAC04=").concat(numericRangeMinutes, "\uBD84, \uD14C\uC774\uBE14=").concat(gridTable, ", \uCEEC\uB7FC=").concat(columnName));
              _context5.prev = 14;
              _context5.next = 17;
              return this.fetchApi(endpoint, {
                method: 'POST',
                body: JSON.stringify(params)
              });
            case 17:
              response = _context5.sent;
              if (response) {
                _context5.next = 20;
                break;
              }
              throw new Error('응답 데이터가 없습니다.');
            case 20:
              if (response.success) {
                _context5.next = 23;
                break;
              }
              console.error('아이소크론 분석 실패:', response.message || '알 수 없는 오류');
              return _context5.abrupt("return", {
                success: false,
                message: response.message || '아이소크론 분석에 실패했습니다.'
              });
            case 23:
              console.log('아이소크론 분석 완료:', (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.pnu);
              return _context5.abrupt("return", response);
            case 27:
              _context5.prev = 27;
              _context5.t0 = _context5["catch"](14);
              console.error('아이소크론 분석 API 요청 오류:', _context5.t0);
              return _context5.abrupt("return", {
                success: false,
                message: "API \uC624\uB958: ".concat(_context5.t0.message),
                error: _context5.t0
              });
            case 31:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[14, 27]]);
      }));
      function analyzeIsochrone(_x4, _x5, _x6, _x7) {
        return _analyzeIsochrone.apply(this, arguments);
      }
      return analyzeIsochrone;
    }())
  }]);
}();


/***/ }),

/***/ "./src/services/PnuCoordinateService.js":
/*!**********************************************!*\
  !*** ./src/services/PnuCoordinateService.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PnuCoordinateService)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * PNU 좌표 서비스
 * PNU 코드와 좌표 데이터를 관리합니다.
 */
var PnuCoordinateService = /*#__PURE__*/function () {
  function PnuCoordinateService() {
    _classCallCheck(this, PnuCoordinateService);
    this.pnuCoordinateMap = new Map();
    this.isLoaded = false;
    this.isLoading = false;

    // 메서드를 명시적으로 인스턴스에 바인딩
    this._parseCsvData = this._parseCsvData.bind(this);
  }

  /**
   * CSV 데이터에서 PNU-좌표 매핑 로드
   * @param {string} csvUrl PNU-좌표 CSV 파일 URL
   * @returns {Promise<void>}
   */
  return _createClass(PnuCoordinateService, [{
    key: "loadFromCsv",
    value: (function () {
      var _loadFromCsv = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(csvUrl) {
        var response, csvText;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(this.isLoaded || this.isLoading)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              this.isLoading = true;
              _context.prev = 3;
              console.log('PNU-좌표 데이터 로드 시작:', csvUrl);
              _context.next = 7;
              return fetch(csvUrl);
            case 7:
              response = _context.sent;
              if (response.ok) {
                _context.next = 10;
                break;
              }
              throw new Error("CSV \uB85C\uB4DC \uC2E4\uD328: ".concat(response.status, " ").concat(response.statusText));
            case 10:
              _context.next = 12;
              return response.text();
            case 12:
              csvText = _context.sent;
              this._parseCsvData(csvText);
              this.isLoaded = true;
              console.log("PNU-\uC88C\uD45C \uB370\uC774\uD130 \uB85C\uB4DC \uC644\uB8CC: ".concat(this.pnuCoordinateMap.size, "\uAC1C \uD56D\uBAA9"));
              _context.next = 22;
              break;
            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](3);
              console.error('PNU-좌표 데이터 로드 오류:', _context.t0);
              throw _context.t0;
            case 22:
              _context.prev = 22;
              this.isLoading = false;
              return _context.finish(22);
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 18, 22, 25]]);
      }));
      function loadFromCsv(_x) {
        return _loadFromCsv.apply(this, arguments);
      }
      return loadFromCsv;
    }()
    /**
     * CSV 데이터 파싱
     * @private
     * @param {string} csvText CSV 텍스트 데이터
     */
    )
  }, {
    key: "_parseCsvData",
    value: function _parseCsvData(csvText) {
      console.log('CSV 파싱 시작');
      // CSV 헤더 및 레코드 파싱
      var lines = csvText.split('\n');
      if (lines.length <= 1) {
        console.warn('CSV 데이터가 비어있거나 헤더만 있습니다.');
        return;
      }
      console.log('CSV 줄 수:', lines.length);
      console.log('첫 줄(헤더):', lines[0]);
      console.log('두 번째 줄(첫 데이터):', lines[1]);
      var headers = lines[0].split(',').map(function (h) {
        return h.trim().replace(/"/g, '');
      });
      console.log('파싱된 헤더:', headers);

      // PNU 코드, x, y 컬럼 인덱스 찾기
      var pnuIndex = headers.findIndex(function (h) {
        return h.toLowerCase().includes('pnu') || h.toLowerCase().includes('code');
      });
      var xIndex = headers.findIndex(function (h) {
        return h.toLowerCase() === 'x';
      });
      var yIndex = headers.findIndex(function (h) {
        return h.toLowerCase() === 'y';
      });
      console.log('컬럼 인덱스:', {
        pnuIndex: pnuIndex,
        xIndex: xIndex,
        yIndex: yIndex
      });
      if (pnuIndex === -1 || xIndex === -1 || yIndex === -1) {
        console.error('CSV 필수 컬럼 누락:', {
          pnuIndex: pnuIndex,
          xIndex: xIndex,
          yIndex: yIndex
        });
        throw new Error('CSV 데이터에서 필요한 열(PNU, x, y)을 찾을 수 없습니다.');
      }

      // 데이터 매핑
      for (var i = 1; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line) continue;

        // 따옴표가 포함된 CSV를 올바르게 파싱
        var values = this._parseCSVLine(line);
        var pnuCode = values[pnuIndex].replace(/"/g, '');
        var longitude = parseFloat(values[xIndex]); // x 좌표는 경도(longitude)
        var latitude = parseFloat(values[yIndex]); // y 좌표는 위도(latitude)

        if (pnuCode && !isNaN(longitude) && !isNaN(latitude)) {
          this.pnuCoordinateMap.set(pnuCode, {
            latitude: latitude,
            longitude: longitude
          });
        }
      }
    }

    /**
     * CSV 라인 파싱 (따옴표 처리)
     * @private
     * @param {string} line CSV 라인
     * @returns {Array<string>} 파싱된 값 배열
     */
  }, {
    key: "_parseCSVLine",
    value: function _parseCSVLine(line) {
      var result = [];
      var current = '';
      var inQuotes = false;
      for (var i = 0; i < line.length; i++) {
        var _char = line[i];
        if (_char === '"') {
          inQuotes = !inQuotes;
        } else if (_char === ',' && !inQuotes) {
          result.push(current);
          current = '';
        } else {
          current += _char;
        }
      }

      // 마지막 필드 추가
      result.push(current);
      return result;
    }

    /**
     * PNU 코드로 좌표 조회
     * @param {string} pnuCode PNU 코드
     * @returns {Object|null} 좌표 객체 또는 null
     */
  }, {
    key: "getCoordinatesByPnu",
    value: function getCoordinatesByPnu(pnuCode) {
      return this.pnuCoordinateMap.get(pnuCode) || null;
    }

    /**
     * 여러 PNU 코드에 대한 좌표 일괄 조회
     * @param {Array<string>} pnuCodes PNU 코드 배열
     * @returns {Map<string, Object>} PNU 코드를 키로 하는 좌표 맵
     */
  }, {
    key: "getCoordinatesForPnuList",
    value: function getCoordinatesForPnuList(pnuCodes) {
      var result = new Map();
      var _iterator = _createForOfIteratorHelper(pnuCodes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pnuCode = _step.value;
          var coords = this.getCoordinatesByPnu(pnuCode);
          if (coords) {
            result.set(pnuCode, coords);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }
  }]);
}();


/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyDateFilter: () => (/* binding */ applyDateFilter),
/* harmony export */   applyNumericFilter: () => (/* binding */ applyNumericFilter),
/* harmony export */   applyTextFilter: () => (/* binding */ applyTextFilter),
/* harmony export */   loadAllTablesData: () => (/* binding */ loadAllTablesData),
/* harmony export */   loadDateColumnInfo: () => (/* binding */ loadDateColumnInfo),
/* harmony export */   loadPnuDetails: () => (/* binding */ loadPnuDetails),
/* harmony export */   loadTextColumnValues: () => (/* binding */ loadTextColumnValues)
/* harmony export */ });
/* harmony import */ var _core_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/config.js */ "./src/core/config.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * API 서비스
 * 서버와의 통신을 담당하는 모듈
 */


var API_URL = _core_config_js__WEBPACK_IMPORTED_MODULE_0__.API_CONFIG.PNU_FILTER_URL;

/**
 * 기본 API 호출 함수
 * @param {string} endpoint 엔드포인트 경로
 * @param {Object} options fetch 옵션
 * @returns {Promise<any>} 응답 데이터
 */
function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}
/**
 * 모든 테이블과 컬럼 데이터를 로드합니다.
 * @returns {Promise<{numericData: Array, textData: Array, dateData: Array}>}
 */
function _fetchAPI() {
  _fetchAPI = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
    var options,
      url,
      response,
      data,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          _context.prev = 1;
          url = endpoint.startsWith('http') ? endpoint : "".concat(API_URL).concat(endpoint.startsWith('/') ? endpoint : '/' + endpoint);
          console.log('API 요청 URL:', url);
          _context.next = 6;
          return fetch(url, _objectSpread({
            headers: _objectSpread({
              'Content-Type': 'application/json'
            }, options.headers)
          }, options));
        case 6:
          response = _context.sent;
          if (response.ok) {
            _context.next = 9;
            break;
          }
          throw new Error("API \uC624\uB958: ".concat(response.status, " ").concat(response.statusText));
        case 9:
          _context.next = 11;
          return response.json();
        case 11:
          data = _context.sent;
          if (!(!data.success && !options.ignoreSuccess)) {
            _context.next = 14;
            break;
          }
          throw new Error(data.message || '데이터 로드에 실패했습니다.');
        case 14:
          return _context.abrupt("return", data);
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](1);
          console.error('API 호출 오류:', _context.t0);
          throw _context.t0;
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 17]]);
  }));
  return _fetchAPI.apply(this, arguments);
}
function loadAllTablesData() {
  return _loadAllTablesData.apply(this, arguments);
}

/**
 * 글자형 컬럼의 고유값을 로드합니다.
 * @param {string} tableName 테이블명
 * @param {string} columnName 컬럼명
 * @returns {Promise<Object>} 컬럼 정보와 고유값 목록
 */
function _loadAllTablesData() {
  _loadAllTablesData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var numericData, textData, dateData, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          console.log('API: 모든 테이블 데이터 로드 시작');

          // 숫자형 컬럼 로드
          console.log('API: 숫자형 컬럼 데이터 요청 URL:', "".concat(API_URL, "/numeric-columns"));
          _context2.next = 5;
          return fetchAPI('/numeric-columns');
        case 5:
          numericData = _context2.sent;
          console.log('API: 숫자형 컬럼 데이터 응답:', numericData);

          // 글자형 컬럼 로드
          console.log('API: 글자형 컬럼 데이터 요청 URL:', "".concat(API_URL, "/text-columns"));
          _context2.next = 10;
          return fetchAPI('/text-columns');
        case 10:
          textData = _context2.sent;
          console.log('API: 글자형 컬럼 데이터 응답:', textData);

          // 날짜형 컬럼 로드
          console.log('API: 날짜형 컬럼 데이터 요청 URL:', "".concat(API_URL, "/date-columns"));
          _context2.next = 15;
          return fetchAPI('/date-columns');
        case 15:
          dateData = _context2.sent;
          console.log('API: 날짜형 컬럼 데이터 응답:', dateData);
          result = {
            numericData: numericData.data || [],
            textData: textData.data || [],
            dateData: dateData.data || []
          };
          console.log('API: 데이터 로드 완료, 결과:', result);
          return _context2.abrupt("return", result);
        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](0);
          console.error('API: 테이블 데이터 로드 오류:', _context2.t0);
          throw new Error('테이블 데이터를 불러오는 데 실패했습니다.');
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 22]]);
  }));
  return _loadAllTablesData.apply(this, arguments);
}
function loadTextColumnValues(_x2, _x3) {
  return _loadTextColumnValues.apply(this, arguments);
}

/**
 * 날짜형 컬럼 정보를 로드합니다.
 * @param {string} tableName 테이블명
 * @param {string} columnName 컬럼명
 * @returns {Promise<Object>} 컬럼 정보
 */
function _loadTextColumnValues() {
  _loadTextColumnValues = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(tableName, columnName) {
    var data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetchAPI("/text-column-info/".concat(tableName, "/").concat(columnName));
        case 3:
          data = _context3.sent;
          return _context3.abrupt("return", data.data);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error('글자형 값 로드 오류:', _context3.t0);
          throw _context3.t0;
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _loadTextColumnValues.apply(this, arguments);
}
function loadDateColumnInfo(_x4, _x5) {
  return _loadDateColumnInfo.apply(this, arguments);
}

/**
 * 숫자형 필터를 적용합니다.
 * @param {string} tableName 테이블명
 * @param {string} columnName 컬럼명
 * @param {number} minValue 최소값
 * @param {number} maxValue 최대값
 * @returns {Promise<Object>} 필터링 결과
 */
function _loadDateColumnInfo() {
  _loadDateColumnInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(tableName, columnName) {
    var data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return fetchAPI("/date-column-info/".concat(tableName, "/").concat(columnName));
        case 3:
          data = _context4.sent;
          return _context4.abrupt("return", data.data);
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error('날짜형 컬럼 정보 로드 오류:', _context4.t0);
          throw _context4.t0;
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return _loadDateColumnInfo.apply(this, arguments);
}
function applyNumericFilter(_x6, _x7, _x8, _x9) {
  return _applyNumericFilter.apply(this, arguments);
}

/**
 * 글자형 필터를 적용합니다.
 * @param {string} tableName 테이블명
 * @param {string} columnName 컬럼명
 * @param {Array<string>} selectedValues 선택된 값들
 * @returns {Promise<Object>} 필터링 결과
 */
function _applyNumericFilter() {
  _applyNumericFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(tableName, columnName, minValue, maxValue) {
    var result;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return fetchAPI('/filter-by-range', {
            method: 'POST',
            body: JSON.stringify({
              tableName: tableName,
              columnName: columnName,
              minValue: Number(minValue),
              maxValue: Number(maxValue)
            })
          });
        case 3:
          result = _context5.sent;
          return _context5.abrupt("return", result.data);
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error('숫자형 필터 적용 오류:', _context5.t0);
          throw _context5.t0;
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _applyNumericFilter.apply(this, arguments);
}
function applyTextFilter(_x0, _x1, _x10) {
  return _applyTextFilter.apply(this, arguments);
}

/**
 * 날짜형 필터를 적용합니다.
 * @param {string} tableName 테이블명
 * @param {string} columnName 컬럼명
 * @param {string} startDate 시작 날짜 (YYYY-MM-DD)
 * @param {string} endDate 종료 날짜 (YYYY-MM-DD)
 * @returns {Promise<Object>} 필터링 결과
 */
function _applyTextFilter() {
  _applyTextFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(tableName, columnName, selectedValues) {
    var result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return fetchAPI('/filter-by-values', {
            method: 'POST',
            body: JSON.stringify({
              tableName: tableName,
              columnName: columnName,
              selectedValues: selectedValues
            })
          });
        case 3:
          result = _context6.sent;
          return _context6.abrupt("return", result.data);
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.error('글자형 필터 적용 오류:', _context6.t0);
          throw _context6.t0;
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return _applyTextFilter.apply(this, arguments);
}
function applyDateFilter(_x11, _x12, _x13, _x14) {
  return _applyDateFilter.apply(this, arguments);
}

/**
 * PNU 코드로 상세 정보를 조회합니다.
 * @param {string} pnuCode PNU 코드
 * @returns {Promise<Object>} PNU 상세 정보
 */
function _applyDateFilter() {
  _applyDateFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(tableName, columnName, startDate, endDate) {
    var result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return fetchAPI('/filter-by-date-range', {
            method: 'POST',
            body: JSON.stringify({
              tableName: tableName,
              columnName: columnName,
              startDate: startDate,
              endDate: endDate
            })
          });
        case 3:
          result = _context7.sent;
          return _context7.abrupt("return", result.data);
        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          console.error('날짜형 필터 적용 오류:', _context7.t0);
          throw _context7.t0;
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 7]]);
  }));
  return _applyDateFilter.apply(this, arguments);
}
function loadPnuDetails(_x15) {
  return _loadPnuDetails.apply(this, arguments);
}
function _loadPnuDetails() {
  _loadPnuDetails = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(pnuCode) {
    var result;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          console.log('PNU 상세 정보 요청:', pnuCode);
          // 정확한 API 경로 사용
          _context8.next = 4;
          return fetchAPI("/pnu/".concat(pnuCode));
        case 4:
          result = _context8.sent;
          console.log('PNU 상세 정보 응답:', result);
          return _context8.abrupt("return", result.data);
        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          console.error('PNU 상세 정보 로드 오류:', _context8.t0);
          throw _context8.t0;
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 9]]);
  }));
  return _loadPnuDetails.apply(this, arguments);
}

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/utils/eventBus.js":
/*!*******************************!*\
  !*** ./src/utils/eventBus.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 이벤트 버스 클래스
 * 컴포넌트 간 통신을 위한 이벤트 발행/구독 시스템
 */
var EventBus = /*#__PURE__*/function () {
  function EventBus() {
    _classCallCheck(this, EventBus);
    this.events = {};
  }

  /**
   * 이벤트 구독
   * @param {string} event 이벤트 이름
   * @param {Function} callback 콜백 함수
   * @returns {Function} 구독 취소 함수
   */
  return _createClass(EventBus, [{
    key: "subscribe",
    value: function subscribe(event, callback) {
      var _this = this;
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);

      // 구독 취소 함수 반환
      return function () {
        return _this.unsubscribe(event, callback);
      };
    }

    /**
     * 이벤트 발행
     * @param {string} event 이벤트 이름
     * @param {any} data 이벤트 데이터
     */
  }, {
    key: "publish",
    value: function publish(event, data) {
      console.log("\uC774\uBCA4\uD2B8 \uBC1C\uD589: ".concat(event), data);
      if (!this.events[event]) {
        console.warn("'".concat(event, "' \uC774\uBCA4\uD2B8\uC5D0 \uB300\uD55C \uAD6C\uB3C5\uC790\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."));
        return;
      }
      console.log("'".concat(event, "' \uC774\uBCA4\uD2B8 \uAD6C\uB3C5\uC790 \uC218: ").concat(this.events[event].length));
      this.events[event].forEach(function (callback, index) {
        try {
          console.log("'".concat(event, "' \uC774\uBCA4\uD2B8 \uAD6C\uB3C5\uC790[").concat(index, "] \uD638\uCD9C \uC2DC\uC791"));
          callback(data);
          console.log("'".concat(event, "' \uC774\uBCA4\uD2B8 \uAD6C\uB3C5\uC790[").concat(index, "] \uD638\uCD9C \uC644\uB8CC"));
        } catch (error) {
          console.error("\uC774\uBCA4\uD2B8 \uCC98\uB9AC \uC624\uB958 (".concat(event, ", \uAD6C\uB3C5\uC790[").concat(index, "]):"), error);
        }
      });
    }

    /**
     * 이벤트 구독 취소
     * @param {string} event 이벤트 이름
     * @param {Function} callback 취소할 콜백 함수
     */
  }, {
    key: "unsubscribe",
    value: function unsubscribe(event, callback) {
      if (!this.events[event]) return;
      this.events[event] = this.events[event].filter(function (cb) {
        return cb !== callback;
      });

      // 배열이 비었으면 객체에서 제거
      if (this.events[event].length === 0) {
        delete this.events[event];
      }
    }

    /**
     * 특정 이벤트의 모든 구독 취소
     * @param {string} event 이벤트 이름
     */
  }, {
    key: "clearEvent",
    value: function clearEvent(event) {
      if (this.events[event]) {
        delete this.events[event];
      }
    }

    /**
     * 모든 이벤트 구독 취소
     */
  }, {
    key: "clearAllEvents",
    value: function clearAllEvents() {
      this.events = {};
    }
  }]);
}(); // 싱글톤 인스턴스 생성 및 내보내기
var eventBus = new EventBus();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventBus);

/***/ }),

/***/ "./src/utils/filterManager.js":
/*!************************************!*\
  !*** ./src/utils/filterManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterManager: () => (/* binding */ FilterManager)
/* harmony export */ });
/* harmony import */ var _services_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api.js */ "./src/services/api.js");
/* harmony import */ var _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/uiUtils.js */ "./src/utils/uiUtils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * 필터 관리 유틸리티
 * 필터 객체 생성, 관리, 결과 계산 등을 담당
 */



var FilterManager = /*#__PURE__*/function () {
  function FilterManager() {
    _classCallCheck(this, FilterManager);
    this.filters = [];
    this.filterIdCounter = 0;
    this.allTables = new Set();
    this.allTablesData = {}; // 테이블별 컬럼 데이터를 저장 (numeric, text, date)
  }

  /**
   * 테이블 데이터 로드
   */
  return _createClass(FilterManager, [{
    key: "loadAllTablesData",
    value: (function () {
      var _loadAllTablesData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        var _yield$api$loadAllTab, numericData, textData, dateData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              console.log('테이블 데이터 로드 시작');

              // API 서비스를 통해 모든 종류의 컬럼 데이터 로드
              _context.next = 4;
              return _services_api_js__WEBPACK_IMPORTED_MODULE_0__.loadAllTablesData();
            case 4:
              _yield$api$loadAllTab = _context.sent;
              numericData = _yield$api$loadAllTab.numericData;
              textData = _yield$api$loadAllTab.textData;
              dateData = _yield$api$loadAllTab.dateData;
              console.log('API로부터 받은 데이터:', {
                numericData: numericData,
                textData: textData,
                dateData: dateData
              });

              // 데이터 초기화
              this.filters = [];
              this.filterIdCounter = 0;
              this.allTables = new Set();
              this.allTablesData = {};

              // 숫자형 데이터 정리
              if (numericData && Array.isArray(numericData)) {
                numericData.forEach(function (col) {
                  _this.allTables.add(col.table_name);
                  if (!_this.allTablesData[col.table_name]) {
                    _this.allTablesData[col.table_name] = {
                      numeric: [],
                      text: [],
                      date: []
                    };
                  }
                  _this.allTablesData[col.table_name].numeric.push(col);
                });
              }

              // 글자형 데이터 정리
              if (textData && Array.isArray(textData)) {
                textData.forEach(function (col) {
                  _this.allTables.add(col.table_name);
                  if (!_this.allTablesData[col.table_name]) {
                    _this.allTablesData[col.table_name] = {
                      numeric: [],
                      text: [],
                      date: []
                    };
                  }
                  _this.allTablesData[col.table_name].text.push(col);
                });
              }

              // 날짜형 데이터 정리
              if (dateData && Array.isArray(dateData)) {
                dateData.forEach(function (col) {
                  _this.allTables.add(col.table_name);
                  if (!_this.allTablesData[col.table_name]) {
                    _this.allTablesData[col.table_name] = {
                      numeric: [],
                      text: [],
                      date: []
                    };
                  }
                  _this.allTablesData[col.table_name].date.push(col);
                });
              }
              console.log('테이블 목록:', Array.from(this.allTables));
              console.log('최종 테이블 데이터:', this.allTablesData);
              console.log('테이블 데이터 처리 완료');
              return _context.abrupt("return", {
                numericData: numericData || [],
                textData: textData || [],
                dateData: dateData || []
              });
            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](0);
              console.error('테이블 데이터 로드 오류:', _context.t0);
              // UI에 오류 메시지 표시 로직 추가 가능
              throw _context.t0;
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 22]]);
      }));
      function loadAllTablesData() {
        return _loadAllTablesData.apply(this, arguments);
      }
      return loadAllTablesData;
    }()
    /**
     * 새 필터 추가
     */
    )
  }, {
    key: "addNewFilter",
    value: function addNewFilter() {
      var _this2 = this;
      try {
        // 필터 컨테이너 가져오기
        var filterContainer = document.getElementById('filtersContainer');
        if (!filterContainer) {
          console.error('필터 컨테이너를 찾을 수 없습니다.');
          return;
        }

        // 새 필터 객체 생성 (Filter.js에서 UI 생성하도록 변경 고려)
        var filter = this.createFilter();

        // Filter 컴포넌트 동적 생성 (이 부분은 Filter.js 클래스를 직접 사용하는 것이 좋음)
        // 아래 HTML은 Filter.js의 createFilterElement와 유사하게 구성
        var filterElement = document.createElement('div');
        filterElement.className = 'filter-card';
        filterElement.id = "filter-".concat(filter.id);
        filterElement.innerHTML = "\n        <div class=\"filter-header\">\n          <h6 class=\"filter-title\">\n            <span class=\"filter-name\">\uC0C8 \uD544\uD130</span>\n            <span class=\"badge bg-secondary filter-type\"></span>\n          </h6>\n          <div>\n            <button class=\"btn btn-sm btn-outline-primary apply-filter-btn\">\uC801\uC6A9</button>\n            <button class=\"btn btn-sm btn-outline-danger remove-filter-btn\">\uC0AD\uC81C</button>\n          </div>\n        </div>\n        <div class=\"filter-body\">\n          <!-- \uD14C\uC774\uBE14 \uBC0F \uCEEC\uB7FC \uC120\uD0DD -->\n          <div class=\"row mb-3\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"tableSelect-".concat(filter.id, "\">\uD14C\uC774\uBE14 \uC120\uD0DD</label>\n                <select id=\"tableSelect-").concat(filter.id, "\" class=\"form-control tableSelect\">\n                  <option value=\"\">\uD14C\uC774\uBE14 \uC120\uD0DD...</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"columnSelect-").concat(filter.id, "\">\uCEEC\uB7FC \uC120\uD0DD</label>\n                <select id=\"columnSelect-").concat(filter.id, "\" class=\"form-control columnSelect\">\n                  <option value=\"\">\uCEEC\uB7FC \uC120\uD0DD...</option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <!-- \uC22B\uC790\uD615 \uCEEC\uB7FC \uD544\uD130\uB9C1 \uC635\uC158 -->\n          <div id=\"numericFilterOptions-").concat(filter.id, "\" class=\"filter-options numeric-options\">\n            <div class=\"form-group\">\n              <label>\uAC12 \uBC94\uC704</label>\n              <div id=\"columnInfoDisplay-").concat(filter.id, "\" class=\"mb-2 small text-muted\">\uC815\uBCF4 \uB85C\uB529 \uC911...</div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <input type=\"number\" id=\"minValue-").concat(filter.id, "\" class=\"form-control\" placeholder=\"\uCD5C\uC18C\uAC12\">\n                </div>\n                <div class=\"col-md-6\">\n                  <input type=\"number\" id=\"maxValue-").concat(filter.id, "\" class=\"form-control\" placeholder=\"\uCD5C\uB300\uAC12\">\n                </div>\n              </div>\n            </div>\n          </div>\n            \n          <!-- \uAE00\uC790\uD615 \uCEEC\uB7FC \uD544\uD130\uB9C1 \uC635\uC158 -->\n          <div id=\"textFilterOptions-").concat(filter.id, "\" class=\"filter-options text-options\">\n            <div class=\"form-group\">\n              <label>\uACE0\uC720\uAC12 \uC120\uD0DD</label>\n              <div id=\"valueList-").concat(filter.id, "\" class=\"border p-2 mb-2 value-list\">\n                <p class=\"text-muted\">\uAC12 \uB85C\uB529 \uC911...</p>\n              </div>\n            </div>\n          </div>\n\n          <!-- \uB0A0\uC9DC\uD615 \uCEEC\uB7FC \uD544\uD130\uB9C1 \uC635\uC158 -->\n          <div id=\"dateFilterOptions-").concat(filter.id, "\" class=\"filter-options date-options\">\n            <div class=\"form-group\">\n              <label>\uB0A0\uC9DC \uBC94\uC704</label>\n              <div id=\"dateInfoDisplay-").concat(filter.id, "\" class=\"mb-2 small text-muted\">\uC815\uBCF4 \uB85C\uB529 \uC911...</div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label for=\"startDate-").concat(filter.id, "\" class=\"form-label\">\uC2DC\uC791\uC77C</label>\n                  <input type=\"date\" id=\"startDate-").concat(filter.id, "\" class=\"form-control\">\n                </div>\n                <div class=\"col-md-6\">\n                  <label for=\"endDate-").concat(filter.id, "\" class=\"form-label\">\uC885\uB8CC\uC77C</label>\n                  <input type=\"date\" id=\"endDate-").concat(filter.id, "\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      ");
        filterContainer.appendChild(filterElement);

        // 테이블 선택 드롭다운 채우기 (uiUtils 사용 권장)
        var tableSelect = filterElement.querySelector('.tableSelect');
        var tables = this.getAllTables();
        tables.forEach(function (table) {
          var option = document.createElement('option');
          option.value = table;
          option.textContent = table;
          tableSelect.appendChild(option);
        });

        // 이벤트 리스너 추가
        var columnSelect = filterElement.querySelector('.columnSelect');

        // 테이블 선택 이벤트
        tableSelect.addEventListener('change', function () {
          var tableName = tableSelect.value;
          filter.tableName = tableName;
          if (!tableName) {
            columnSelect.innerHTML = '<option value="">컬럼 선택...</option>';
            _this2.hideAllFilterOptions(filterElement, filter.id); // 모든 옵션 숨김
            return;
          }

          // 컬럼 옵션 초기화 및 채우기 (uiUtils.populateColumnSelect 사용 권장)
          columnSelect.innerHTML = '<option value="">컬럼 선택...</option>';
          var tableData = _this2.getTableColumns(tableName);

          // 숫자형, 글자형, 날짜형 컬럼 그룹 추가
          _this2.addColumnOptionGroup(columnSelect, tableData.numeric, '숫자형', 'numeric');
          _this2.addColumnOptionGroup(columnSelect, tableData.text, '글자형', 'text');
          _this2.addColumnOptionGroup(columnSelect, tableData.date, '날짜형', 'date');
          _this2.hideAllFilterOptions(filterElement, filter.id); // 모든 옵션 숨김
        });

        // 컬럼 선택 이벤트
        columnSelect.addEventListener('change', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var columnName, selectedOption, columnType, columnInfo, numericOptions, columnInfoDisplay, minValueInput, maxValueInput, textOptions, valueList, _columnInfo, dateOptions, dateInfoDisplay, startDateInput, endDateInput, _columnInfo2, minDate, maxDate;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                columnName = columnSelect.value;
                if (columnName) {
                  _context2.next = 4;
                  break;
                }
                _this2.hideAllFilterOptions(filterElement, filter.id);
                return _context2.abrupt("return");
              case 4:
                selectedOption = columnSelect.options[columnSelect.selectedIndex];
                columnType = selectedOption.dataset.type;
                filter.columnName = columnName;
                filter.columnType = columnType;
                _this2.hideAllFilterOptions(filterElement, filter.id);
                _context2.prev = 9;
                if (!(columnType === 'numeric')) {
                  _context2.next = 15;
                  break;
                }
                columnInfo = _this2.getColumnInfo(filter.tableName, columnName, 'numeric');
                if (columnInfo) {
                  numericOptions = filterElement.querySelector("#numericFilterOptions-".concat(filter.id));
                  columnInfoDisplay = filterElement.querySelector("#columnInfoDisplay-".concat(filter.id));
                  minValueInput = filterElement.querySelector("#minValue-".concat(filter.id));
                  maxValueInput = filterElement.querySelector("#maxValue-".concat(filter.id));
                  if (columnInfoDisplay) {
                    columnInfoDisplay.textContent = "\uBC94\uC704: ".concat(columnInfo.min_value || 'N/A', " ~ ").concat(columnInfo.max_value || 'N/A', ", \uD3C9\uADE0: ").concat(columnInfo.avg_value ? columnInfo.avg_value.toFixed(2) : 'N/A');
                  }
                  if (minValueInput) minValueInput.value = columnInfo.min_value || '';
                  if (maxValueInput) maxValueInput.value = columnInfo.max_value || '';
                  if (numericOptions) numericOptions.classList.add('active');
                }
                _context2.next = 37;
                break;
              case 15:
                if (!(columnType === 'text')) {
                  _context2.next = 26;
                  break;
                }
                textOptions = filterElement.querySelector("#textFilterOptions-".concat(filter.id));
                valueList = filterElement.querySelector("#valueList-".concat(filter.id));
                if (valueList) valueList.innerHTML = '<p class="text-muted">값 로딩 중...</p>';

                // api.js의 loadTextColumnValues 사용
                _context2.next = 21;
                return _services_api_js__WEBPACK_IMPORTED_MODULE_0__.loadTextColumnValues(filter.tableName, columnName);
              case 21:
                _columnInfo = _context2.sent;
                if (_columnInfo && _columnInfo.value_stats && valueList) {
                  valueList.innerHTML = ''; // 이전 내용 지우기
                  _columnInfo.value_stats.forEach(function (stat) {
                    var div = document.createElement('div');
                    div.className = 'form-check';
                    div.innerHTML = "\n                  <input type=\"checkbox\" class=\"form-check-input value-checkbox\" value=\"".concat(stat.value, "\" id=\"value-").concat(filter.id, "-").concat(stat.value, "\" data-value=\"").concat(stat.value, "\">\n                  <label class=\"form-check-label\" for=\"value-").concat(filter.id, "-").concat(stat.value, "\">").concat(stat.value, " (").concat(stat.frequency, ")</label>\n                ");
                    valueList.appendChild(div);
                  });
                }
                if (textOptions) textOptions.classList.add('active');
                _context2.next = 37;
                break;
              case 26:
                if (!(columnType === 'date')) {
                  _context2.next = 37;
                  break;
                }
                dateOptions = filterElement.querySelector("#dateFilterOptions-".concat(filter.id));
                dateInfoDisplay = filterElement.querySelector("#dateInfoDisplay-".concat(filter.id));
                startDateInput = filterElement.querySelector("#startDate-".concat(filter.id));
                endDateInput = filterElement.querySelector("#endDate-".concat(filter.id));
                if (dateInfoDisplay) dateInfoDisplay.textContent = '정보 로딩 중...';

                // api.js의 loadDateColumnInfo 사용
                _context2.next = 34;
                return _services_api_js__WEBPACK_IMPORTED_MODULE_0__.loadDateColumnInfo(filter.tableName, columnName);
              case 34:
                _columnInfo2 = _context2.sent;
                if (_columnInfo2 && dateInfoDisplay && startDateInput && endDateInput) {
                  minDate = _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.formatDate(_columnInfo2.min_date);
                  maxDate = _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.formatDate(_columnInfo2.max_date);
                  dateInfoDisplay.textContent = "\uAE30\uAC04: ".concat(minDate || 'N/A', " ~ ").concat(maxDate || 'N/A');
                  if (_columnInfo2.min_date) {
                    startDateInput.value = _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.formatDateForInput(_columnInfo2.min_date);
                    startDateInput.min = _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.formatDateForInput(_columnInfo2.min_date);
                    endDateInput.min = _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.formatDateForInput(_columnInfo2.min_date);
                  }
                  if (_columnInfo2.max_date) {
                    endDateInput.value = _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.formatDateForInput(_columnInfo2.max_date);
                    startDateInput.max = _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.formatDateForInput(_columnInfo2.max_date);
                    endDateInput.max = _utils_uiUtils_js__WEBPACK_IMPORTED_MODULE_1__.formatDateForInput(_columnInfo2.max_date);
                  }
                }
                if (dateOptions) dateOptions.classList.add('active');
              case 37:
                _context2.next = 42;
                break;
              case 39:
                _context2.prev = 39;
                _context2.t0 = _context2["catch"](9);
                console.error('컬럼 선택 처리 오류:', _context2.t0);
                // 오류 처리 UI 업데이트
              case 42:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[9, 39]]);
        })));

        // 필터 적용 버튼 이벤트
        var applyBtn = filterElement.querySelector('.apply-filter-btn');
        if (applyBtn) {
          applyBtn.addEventListener('click', function () {
            return _this2.applyFilter(filter.id);
          });
        }

        // 필터 삭제 버튼 이벤트
        var removeBtn = filterElement.querySelector('.remove-filter-btn');
        if (removeBtn) {
          removeBtn.addEventListener('click', function () {
            return _this2.removeFilter(filter.id);
          });
        }
        return filter;
      } catch (error) {
        console.error('필터 추가 오류:', error);
      }
    }

    /**
     * Helper function to add option group to select element
     */
  }, {
    key: "addColumnOptionGroup",
    value: function addColumnOptionGroup(selectElement, columns, groupLabel, groupType) {
      if (columns && columns.length > 0) {
        var optgroup = document.createElement('optgroup');
        optgroup.label = groupLabel;
        columns.forEach(function (col) {
          var option = document.createElement('option');
          option.value = col.column_name;
          option.textContent = "".concat(col.column_name, " (").concat(col.data_type, ")");
          option.dataset.type = groupType;
          optgroup.appendChild(option);
        });
        selectElement.appendChild(optgroup);
      }
    }

    /**
     * Helper function to hide all filter options
     */
  }, {
    key: "hideAllFilterOptions",
    value: function hideAllFilterOptions(filterElement, filterId) {
      var numericOptions = filterElement.querySelector("#numericFilterOptions-".concat(filterId));
      var textOptions = filterElement.querySelector("#textFilterOptions-".concat(filterId));
      var dateOptions = filterElement.querySelector("#dateFilterOptions-".concat(filterId));
      if (numericOptions) numericOptions.classList.remove('active');
      if (textOptions) textOptions.classList.remove('active');
      if (dateOptions) dateOptions.classList.remove('active');
    }

    /**
     * 모든 필터 적용
     */
  }, {
    key: "applyAllFilters",
    value: (function () {
      var _applyAllFilters = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var activeFilters, filterResults, intersection, resultArea, html, maxDisplay, i;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              activeFilters = this.getActiveFilters();
              if (!(activeFilters.length === 0)) {
                _context3.next = 4;
                break;
              }
              alert('적용할 필터가 없습니다.');
              return _context3.abrupt("return");
            case 4:
              filterResults = activeFilters.map(function (filter) {
                return filter.result;
              });
              intersection = this.calculateFilterIntersection(filterResults); // 결과 표시
              resultArea = document.getElementById('resultArea');
              if (resultArea) {
                // 결과 HTML 생성
                html = "\n        <div class=\"mb-3\">\n          <p><strong>\uD544\uD130\uB9C1 \uACB0\uACFC:</strong></p>\n          <ul>\n            <li>\uC801\uC6A9\uB41C \uD544\uD130 \uC218: ".concat(activeFilters.length, "</li>\n            <li>\uCD5C\uC885 PNU \uAC1C\uC218: ").concat(intersection.count, "</li>\n          </ul>\n        </div>\n        \n        <div class=\"table-responsive\">\n          <table class=\"result-table\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>PNU</th>\n              </tr>\n            </thead>\n            <tbody>\n      "); // 최대 100개까지만 표시
                maxDisplay = Math.min(intersection.pnuList.length, 100);
                for (i = 0; i < maxDisplay; i++) {
                  html += "\n          <tr>\n            <td>".concat(i + 1, "</td>\n            <td>").concat(intersection.pnuList[i], "</td>\n          </tr>\n        ");
                }
                html += "\n            </tbody>\n          </table>\n        </div>\n      ";
                if (intersection.pnuList.length > maxDisplay) {
                  html += "<p class=\"text-muted\">\uCD1D ".concat(intersection.pnuList.length, "\uAC1C \uC911 ").concat(maxDisplay, "\uAC1C\uB9CC \uD45C\uC2DC\uB428</p>");
                }
                resultArea.innerHTML = html;
              }
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function applyAllFilters() {
        return _applyAllFilters.apply(this, arguments);
      }
      return applyAllFilters;
    }()
    /**
     * 새 필터 생성
     * @returns {Object} 새로 생성된 필터 객체
     */
    )
  }, {
    key: "createFilter",
    value: function createFilter() {
      var filterId = this.filterIdCounter++;
      var filter = {
        id: filterId,
        type: null,
        tableName: '',
        columnName: '',
        columnType: '',
        filterParams: {},
        result: null
      };
      this.filters.push(filter);
      return filter;
    }

    /**
     * 필터 제거
     * @param {number} filterId 제거할 필터 ID
     * @returns {boolean} 제거 성공 여부
     */
  }, {
    key: "removeFilter",
    value: function removeFilter(filterId) {
      console.log('필터 제거 시작:', filterId);
      var filterIndex = this.filters.findIndex(function (f) {
        return f.id === filterId;
      });
      if (filterIndex === -1) {
        console.error('제거할 필터를 찾을 수 없음:', filterId);
        return false;
      }

      // 배열에서 필터 제거
      this.filters.splice(filterIndex, 1);
      console.log('필터 배열에서 제거됨, 남은 필터:', this.filters.length);

      // UI에서 필터 요소 제거
      var filterElement = document.getElementById("filter-".concat(filterId));
      if (filterElement) {
        filterElement.remove();
        console.log('UI에서 필터 요소 제거됨');
      } else {
        console.warn('UI에서 필터 요소를 찾을 수 없음:', filterId);
      }
      return true;
    }

    /**
     * ID로 필터 객체 가져오기
     * @param {number} filterId 필터 ID
     * @returns {Object|null} 필터 객체 또는 null
     */
  }, {
    key: "getFilterById",
    value: function getFilterById(filterId) {
      return this.filters.find(function (f) {
        return f.id === filterId;
      }) || null;
    }

    /**
     * 필터 객체 업데이트
     * @param {number} filterId 필터 ID
     * @param {Object} updates 업데이트할 필드
     * @returns {Object|null} 업데이트된 필터 객체 또는 null
     */
  }, {
    key: "updateFilter",
    value: function updateFilter(filterId, updates) {
      var filter = this.getFilterById(filterId);
      if (!filter) return null;
      Object.assign(filter, updates);
      return filter;
    }

    /**
     * 모든 테이블 목록 가져오기
     * @returns {Array<string>} 정렬된 테이블 목록
     */
  }, {
    key: "getAllTables",
    value: function getAllTables() {
      // 'src_'로 시작하는 테이블만 필터링
      return Array.from(this.allTables).filter(function (table) {
        return table.startsWith('src_');
      }).sort();
    }

    /**
     * 특정 테이블의 컬럼 목록 가져오기
     * @param {string} tableName 테이블명
     * @returns {Object} 숫자형, 글자형, 날짜형 컬럼 목록
     */
  }, {
    key: "getTableColumns",
    value: function getTableColumns(tableName) {
      return this.allTablesData[tableName] || {
        numeric: [],
        text: [],
        date: []
      };
    }

    /**
     * 특정 테이블의 특정 컬럼 정보 가져오기
     * @param {string} tableName 테이블명
     * @param {string} columnName 컬럼명
     * @param {string} columnType 컬럼 타입 ('numeric', 'text' 또는 'date')
     * @returns {Object|null} 컬럼 정보 또는 null
     */
  }, {
    key: "getColumnInfo",
    value: function getColumnInfo(tableName, columnName, columnType) {
      var tableData = this.allTablesData[tableName];
      if (!tableData) return null;

      // columnType에 따라 해당 배열에서 검색
      if (columnType === 'numeric' && tableData.numeric) {
        return tableData.numeric.find(function (col) {
          return col.column_name === columnName;
        }) || null;
      } else if (columnType === 'text' && tableData.text) {
        return tableData.text.find(function (col) {
          return col.column_name === columnName;
        }) || null;
      } else if (columnType === 'date' && tableData.date) {
        return tableData.date.find(function (col) {
          return col.column_name === columnName;
        }) || null;
      }
      return null;
    }

    /**
     * 모든 활성 필터 가져오기
     * @returns {Array} 결과가 있는 필터 목록
     */
  }, {
    key: "getActiveFilters",
    value: function getActiveFilters() {
      return this.filters.filter(function (f) {
        return f.result !== null;
      });
    }

    /**
     * 모든 필터 목록 가져오기
     * @returns {Array} 모든 필터 목록
     */
  }, {
    key: "getAllFilters",
    value: function getAllFilters() {
      return _toConsumableArray(this.filters);
    }

    /**
     * 여러 필터 결과의 교집합 계산
     * @param {Array} filterResults 필터 결과 목록
     * @returns {Object} 교집합 결과
     */
  }, {
    key: "calculateFilterIntersection",
    value: function calculateFilterIntersection(filterResults) {
      if (!filterResults || filterResults.length === 0) {
        return {
          pnuList: [],
          count: 0
        };
      }

      // 모든 필터 결과에서 PNU 수집 및 교집합 계산
      var commonPnus = null;
      filterResults.forEach(function (data) {
        if (!data || !data.pnu_list || data.pnu_list.length === 0) return;

        // 현재 필터의 PNU 집합
        var pnuSet = new Set(data.pnu_list.map(function (p) {
          return p.pnu;
        }));
        if (commonPnus === null) {
          // 첫 번째 필터 결과
          commonPnus = pnuSet;
        } else {
          // 교집합 계산
          commonPnus = new Set(_toConsumableArray(commonPnus).filter(function (pnu) {
            return pnuSet.has(pnu);
          }));
        }
      });
      if (!commonPnus) {
        return {
          pnuList: [],
          count: 0
        };
      }
      return {
        pnuList: Array.from(commonPnus),
        count: commonPnus.size
      };
    }

    /**
     * 필터 적용
     * @param {number} filterId 필터 ID
     */
  }, {
    key: "applyFilter",
    value: (function () {
      var _applyFilter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(filterId) {
        var filter, result, filterElement, minValueInput, maxValueInput, minValue, maxValue, valueList, checkboxes, selectedValues, startDateInput, endDateInput, startDate, endDate, badge, _badge;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              console.log('필터 적용 시작:', filterId);
              filter = this.getFilterById(filterId);
              if (filter) {
                _context4.next = 5;
                break;
              }
              console.error('필터를 찾을 수 없음:', filterId);
              return _context4.abrupt("return");
            case 5:
              console.log('적용할 필터:', filter);
              _context4.prev = 6;
              if (!(!filter.tableName || !filter.columnName)) {
                _context4.next = 10;
                break;
              }
              alert('테이블과 컬럼을 선택하세요.');
              return _context4.abrupt("return");
            case 10:
              // 필터 요소 가져오기 (DOM 직접 접근 최소화 필요 - Filter.js와 역할 분담 고려)
              filterElement = document.getElementById("filter-".concat(filterId));
              if (filterElement) {
                _context4.next = 14;
                break;
              }
              console.error('필터 요소를 찾을 수 없음:', filterId);
              return _context4.abrupt("return");
            case 14:
              if (!(filter.columnType === 'numeric')) {
                _context4.next = 31;
                break;
              }
              minValueInput = filterElement.querySelector("#minValue-".concat(filterId));
              maxValueInput = filterElement.querySelector("#maxValue-".concat(filterId));
              if (!(!minValueInput || !maxValueInput)) {
                _context4.next = 20;
                break;
              }
              console.error('최소/최대 입력 필드를 찾을 수 없음');
              return _context4.abrupt("return");
            case 20:
              minValue = minValueInput.value;
              maxValue = maxValueInput.value;
              if (!(!minValue || !maxValue)) {
                _context4.next = 25;
                break;
              }
              alert('최소값과 최대값을 입력하세요.');
              return _context4.abrupt("return");
            case 25:
              filter.filterParams = {
                minValue: Number(minValue),
                maxValue: Number(maxValue)
              };
              _context4.next = 28;
              return _services_api_js__WEBPACK_IMPORTED_MODULE_0__.applyNumericFilter(filter.tableName, filter.columnName, Number(minValue), Number(maxValue));
            case 28:
              result = _context4.sent;
              _context4.next = 66;
              break;
            case 31:
              if (!(filter.columnType === 'text')) {
                _context4.next = 47;
                break;
              }
              valueList = filterElement.querySelector("#valueList-".concat(filterId));
              if (valueList) {
                _context4.next = 36;
                break;
              }
              console.error('값 목록 요소를 찾을 수 없음');
              return _context4.abrupt("return");
            case 36:
              checkboxes = valueList.querySelectorAll('.value-checkbox:checked');
              selectedValues = Array.from(checkboxes).map(function (cb) {
                return cb.dataset.value;
              });
              if (!(selectedValues.length === 0)) {
                _context4.next = 41;
                break;
              }
              alert('하나 이상의 값을 선택하세요.');
              return _context4.abrupt("return");
            case 41:
              filter.filterParams = {
                selectedValues: selectedValues
              };
              _context4.next = 44;
              return _services_api_js__WEBPACK_IMPORTED_MODULE_0__.applyTextFilter(filter.tableName, filter.columnName, selectedValues);
            case 44:
              result = _context4.sent;
              _context4.next = 66;
              break;
            case 47:
              if (!(filter.columnType === 'date')) {
                _context4.next = 64;
                break;
              }
              startDateInput = filterElement.querySelector("#startDate-".concat(filterId));
              endDateInput = filterElement.querySelector("#endDate-".concat(filterId));
              if (!(!startDateInput || !endDateInput)) {
                _context4.next = 53;
                break;
              }
              console.error('시작일/종료일 입력 필드를 찾을 수 없음');
              return _context4.abrupt("return");
            case 53:
              startDate = startDateInput.value;
              endDate = endDateInput.value;
              if (!(!startDate || !endDate)) {
                _context4.next = 58;
                break;
              }
              alert('시작일과 종료일을 선택하세요.');
              return _context4.abrupt("return");
            case 58:
              filter.filterParams = {
                startDate: startDate,
                endDate: endDate
              };
              _context4.next = 61;
              return _services_api_js__WEBPACK_IMPORTED_MODULE_0__.applyDateFilter(filter.tableName, filter.columnName, startDate, endDate);
            case 61:
              result = _context4.sent;
              _context4.next = 66;
              break;
            case 64:
              alert('올바른 컬럼 타입을 선택하세요.');
              return _context4.abrupt("return");
            case 66:
              if (!result) {
                _context4.next = 72;
                break;
              }
              console.log('필터 결과:', result);
              filter.result = result;

              // 필터 상태 UI 업데이트 (Filter.js로 이동 고려)
              badge = filterElement.querySelector('.filter-type');
              if (badge) {
                badge.textContent = "".concat(result.pnu_count, "\uAC1C");
                badge.classList.remove('bg-secondary');
                // 성공/실패 여부에 따라 다른 클래스 적용 가능 (예: bg-success, bg-danger)
                badge.classList.add('bg-success');
              }

              // 전체 필터 적용 로직 호출 (옵셔널, 필요시)
              // await this.applyAllFilters(); 
              return _context4.abrupt("return", result);
            case 72:
              _context4.next = 80;
              break;
            case 74:
              _context4.prev = 74;
              _context4.t0 = _context4["catch"](6);
              console.error('필터 적용 오류:', filterId, _context4.t0);
              alert("\uD544\uD130 \uC801\uC6A9 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4: ".concat(_context4.t0.message));
              // UI에 오류 표시 업데이트
              _badge = document.querySelector("#filter-".concat(filterId, " .filter-type"));
              if (_badge) {
                _badge.textContent = '오류';
                _badge.classList.remove('bg-success', 'bg-secondary');
                _badge.classList.add('bg-danger');
              }
            case 80:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[6, 74]]);
      }));
      function applyFilter(_x) {
        return _applyFilter.apply(this, arguments);
      }
      return applyFilter;
    }())
  }]);
}();

/***/ }),

/***/ "./src/utils/uiUtils.js":
/*!******************************!*\
  !*** ./src/utils/uiUtils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayDateColumnInfo: () => (/* binding */ displayDateColumnInfo),
/* harmony export */   displayNumericColumnInfo: () => (/* binding */ displayNumericColumnInfo),
/* harmony export */   displayResults: () => (/* binding */ displayResults),
/* harmony export */   displayTextValues: () => (/* binding */ displayTextValues),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatDateForInput: () => (/* binding */ formatDateForInput),
/* harmony export */   populateColumnSelect: () => (/* binding */ populateColumnSelect),
/* harmony export */   populateTableSelect: () => (/* binding */ populateTableSelect),
/* harmony export */   updateFilterTitle: () => (/* binding */ updateFilterTitle)
/* harmony export */ });
/**
 * UI 관련 유틸리티 함수
 */

/**
 * 결과 영역에 필터링 결과를 표시합니다.
 * @param {Array} results 필터 결과 목록
 * @param {Array} pnuList 교집합 PNU 목록
 * @param {number} pnuCount 교집합 PNU 개수
 * @param {HTMLElement} resultArea 결과를 표시할 DOM 요소
 */
function displayResults(results, pnuList, pnuCount, resultArea) {
  if (!results || results.length === 0 || !pnuList || pnuList.length === 0) {
    resultArea.innerHTML = '<p class="alert alert-warning">필터링된 결과가 없습니다.</p>';
    return;
  }

  // 결과 정보 표시
  var html = "\n    <div class=\"mb-3\">\n      <p><strong>\uD544\uD130\uB9C1 \uACB0\uACFC:</strong></p>\n      <ul>\n        <li>\uC801\uC6A9\uB41C \uD544\uD130 \uC218: ".concat(results.length, "</li>\n        <li>\uCD5C\uC885 PNU \uAC1C\uC218: ").concat(pnuCount, "</li>\n      </ul>\n    </div>\n    \n    <div class=\"accordion mb-3\" id=\"filterAccordion\">\n  ");

  // 각 필터 정보 아코디언으로 표시
  results.forEach(function (data, index) {
    // 'src_' 접두사 제거하여 표시
    var displayTableName = data.table_name.startsWith('src_') ? data.table_name.substring(4) : data.table_name;
    html += "\n      <div class=\"accordion-item\">\n        <h2 class=\"accordion-header\" id=\"filter-heading-".concat(index, "\">\n          <button class=\"accordion-button ").concat(index > 0 ? 'collapsed' : '', "\" type=\"button\" data-bs-toggle=\"collapse\" \n                  data-bs-target=\"#filter-collapse-").concat(index, "\" aria-expanded=\"").concat(index === 0 ? 'true' : 'false', "\" \n                  aria-controls=\"filter-collapse-").concat(index, "\">\n            \uD544\uD130 ").concat(index + 1, ": ").concat(displayTableName, ".").concat(data.column_name, " (").concat(data.pnu_count, "\uAC1C)\n          </button>\n        </h2>\n        <div id=\"filter-collapse-").concat(index, "\" class=\"accordion-collapse collapse ").concat(index === 0 ? 'show' : '', "\" \n             aria-labelledby=\"filter-heading-").concat(index, "\" data-bs-parent=\"#filterAccordion\">\n          <div class=\"accordion-body\">\n            <ul>\n              <li>\uD14C\uC774\uBE14/\uCEEC\uB7FC: ").concat(displayTableName, ".").concat(data.column_name, "</li>\n    ");
    if (data.min_value !== undefined) {
      // 숫자형 필터링 결과
      html += "\n              <li>\uC804\uCCB4 \uBC94\uC704: ".concat(data.min_value, " ~ ").concat(data.max_value, "</li>\n              <li>\uD544\uD130 \uBC94\uC704: ").concat(data.filter_min, " ~ ").concat(data.filter_max, "</li>\n      ");
    } else if (data.selected_values) {
      // 글자형 필터링 결과
      html += "\n              <li>\uC120\uD0DD\uB41C \uAC12: ".concat(data.selected_values.join(', '), "</li>\n      ");
    } else if (data.start_date && data.end_date) {
      // 날짜형 필터링 결과
      html += "\n              <li>\uC804\uCCB4 \uAE30\uAC04: ".concat(formatDate(data.min_date), " ~ ").concat(formatDate(data.max_date), "</li>\n              <li>\uD544\uD130 \uAE30\uAC04: ").concat(formatDate(data.start_date), " ~ ").concat(formatDate(data.end_date), "</li>\n      ");
    }
    html += "\n              <li>\uD544\uD130\uB9C1\uB41C PNU \uAC1C\uC218: ".concat(data.pnu_count, "</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    ");
  });
  html += "\n    </div>\n    \n    <div class=\"table-responsive\">\n      <table class=\"result-table\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>PNU</th>\n          </tr>\n        </thead>\n        <tbody>\n  ";

  // 최대 100개까지만 표시
  var maxDisplay = Math.min(pnuList.length, 100);
  for (var i = 0; i < maxDisplay; i++) {
    html += "\n      <tr>\n        <td>".concat(i + 1, "</td>\n        <td>").concat(pnuList[i], "</td>\n      </tr>\n    ");
  }
  html += "\n        </tbody>\n      </table>\n    </div>\n  ";
  if (pnuList.length > maxDisplay) {
    html += "<p class=\"text-muted\">\uCD1D ".concat(pnuList.length, "\uAC1C \uC911 ").concat(maxDisplay, "\uAC1C\uB9CC \uD45C\uC2DC\uB428</p>");
  }
  resultArea.innerHTML = html;

  // Bootstrap의 아코디언 스크립트 추가 (필요한 경우)
  ensureBootstrapScriptLoaded();
}

/**
 * 테이블 선택 드롭다운을 채웁니다.
 * @param {Array<string>} tables 테이블 목록
 * @param {HTMLSelectElement} selectElement <select> 요소
 */
function populateTableSelect(tables, selectElement) {
  selectElement.innerHTML = '<option value="">테이블 선택...</option>';
  tables.forEach(function (table) {
    var option = document.createElement('option');
    option.value = table;
    option.textContent = table.startsWith('src_') ? table.substring(4) : table;
    selectElement.appendChild(option);
  });
}

/**
 * 컬럼 선택 드롭다운을 채웁니다.
 * @param {Object} tableData 테이블 컬럼 데이터 { numeric: [], text: [], date: [] }
 * @param {HTMLSelectElement} selectElement <select> 요소
 */
function populateColumnSelect(tableData, selectElement) {
  selectElement.innerHTML = '<option value="">컬럼 선택...</option>';

  // 숫자형 컬럼 추가
  if (tableData.numeric && tableData.numeric.length > 0) {
    var numericGroup = document.createElement('optgroup');
    numericGroup.label = '숫자형';
    tableData.numeric.forEach(function (col) {
      var option = document.createElement('option');
      option.value = col.column_name;
      option.textContent = "".concat(col.column_name, " (").concat(col.data_type, ")");
      option.dataset.type = 'numeric';
      numericGroup.appendChild(option);
    });
    selectElement.appendChild(numericGroup);
  }

  // 글자형 컬럼 추가
  if (tableData.text && tableData.text.length > 0) {
    var textGroup = document.createElement('optgroup');
    textGroup.label = '글자형';
    tableData.text.forEach(function (col) {
      var option = document.createElement('option');
      option.value = col.column_name;
      option.textContent = "".concat(col.column_name, " (").concat(col.data_type, ")");
      option.dataset.type = 'text';
      textGroup.appendChild(option);
    });
    selectElement.appendChild(textGroup);
  }

  // 날짜형 컬럼 추가
  if (tableData.date && tableData.date.length > 0) {
    var dateGroup = document.createElement('optgroup');
    dateGroup.label = '날짜형';
    tableData.date.forEach(function (col) {
      var option = document.createElement('option');
      option.value = col.column_name;
      option.textContent = "".concat(col.column_name, " (").concat(col.data_type, ")");
      option.dataset.type = 'date';
      dateGroup.appendChild(option);
    });
    selectElement.appendChild(dateGroup);
  }
}

/**
 * 고유값 목록을 표시합니다.
 * @param {Array} valueStats 고유값 통계 데이터
 * @param {HTMLElement} valueListElement 값 목록을 표시할 DOM 요소
 * @param {number} filterId 필터 ID
 */
function displayTextValues(valueStats, valueListElement, filterId) {
  valueListElement.innerHTML = '';
  if (!valueStats || valueStats.length === 0) {
    valueListElement.innerHTML = '<p class="text-muted">데이터가 없습니다.</p>';
    return;
  }
  valueStats.forEach(function (stat) {
    var div = document.createElement('div');
    div.className = 'form-check';
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'form-check-input value-checkbox';
    input.value = stat.value;
    input.id = "value-".concat(filterId, "-").concat(stat.value);
    input.dataset.value = stat.value;
    var label = document.createElement('label');
    label.className = 'form-check-label';
    label.htmlFor = "value-".concat(filterId, "-").concat(stat.value);
    label.textContent = "".concat(stat.value, " (").concat(stat.frequency, ")");
    div.appendChild(input);
    div.appendChild(label);
    valueListElement.appendChild(div);
  });
}

/**
 * 숫자형 컬럼 정보를 표시합니다.
 * @param {Object} columnInfo 컬럼 정보
 * @param {HTMLElement} infoElement 정보를 표시할 DOM 요소
 * @param {HTMLInputElement} minValueInput 최소값 입력 요소
 * @param {HTMLInputElement} maxValueInput 최대값 입력 요소
 */
function displayNumericColumnInfo(columnInfo, infoElement, minValueInput, maxValueInput) {
  if (!columnInfo) {
    infoElement.textContent = '';
    return;
  }
  infoElement.textContent = "\uBC94\uC704: ".concat(columnInfo.min_value || 'N/A', " ~ ").concat(columnInfo.max_value || 'N/A', ", \uD3C9\uADE0: ").concat(columnInfo.avg_value ? columnInfo.avg_value.toFixed(2) : 'N/A');

  // 기본값 설정
  minValueInput.value = columnInfo.min_value || '';
  maxValueInput.value = columnInfo.max_value || '';
}

/**
 * 날짜형 컬럼 정보를 표시합니다.
 * @param {Object} columnInfo 컬럼 정보
 * @param {HTMLElement} infoElement 정보를 표시할 DOM 요소
 * @param {HTMLInputElement} startDateInput 시작일 입력 요소
 * @param {HTMLInputElement} endDateInput 종료일 입력 요소
 */
function displayDateColumnInfo(columnInfo, infoElement, startDateInput, endDateInput) {
  if (!columnInfo) {
    infoElement.textContent = '';
    return;
  }

  // 날짜 형식 변환
  var minDate = formatDate(columnInfo.min_date);
  var maxDate = formatDate(columnInfo.max_date);
  infoElement.textContent = "\uAE30\uAC04: ".concat(minDate || 'N/A', " ~ ").concat(maxDate || 'N/A');

  // 기본값 설정
  if (columnInfo.min_date) {
    startDateInput.value = formatDateForInput(columnInfo.min_date);
  }
  if (columnInfo.max_date) {
    endDateInput.value = formatDateForInput(columnInfo.max_date);
  }

  // min/max 속성 설정
  if (columnInfo.min_date) {
    startDateInput.min = formatDateForInput(columnInfo.min_date);
    endDateInput.min = formatDateForInput(columnInfo.min_date);
  }
  if (columnInfo.max_date) {
    startDateInput.max = formatDateForInput(columnInfo.max_date);
    endDateInput.max = formatDateForInput(columnInfo.max_date);
  }
}

/**
 * 필터 제목을 업데이트합니다.
 * @param {Object} filter 필터 객체
 * @param {HTMLElement} nameElement 필터 이름 요소
 * @param {HTMLElement} typeElement 필터 타입 요소
 */
function updateFilterTitle(filter, nameElement, typeElement) {
  if (filter.tableName && filter.columnName) {
    // 'src_' 접두사 제거
    var displayTableName = filter.tableName.startsWith('src_') ? filter.tableName.substring(4) : filter.tableName;
    nameElement.textContent = "".concat(displayTableName, ".").concat(filter.columnName);
    if (filter.columnType === 'numeric') {
      typeElement.textContent = '숫자형';
      typeElement.className = 'badge bg-primary filter-type';
    } else if (filter.columnType === 'text') {
      typeElement.textContent = '글자형';
      typeElement.className = 'badge bg-success filter-type';
    } else if (filter.columnType === 'date') {
      typeElement.textContent = '날짜형';
      typeElement.className = 'badge bg-info filter-type';
    }
  } else if (filter.tableName) {
    // 'src_' 접두사 제거
    nameElement.textContent = filter.tableName.startsWith('src_') ? filter.tableName.substring(4) : filter.tableName;
    typeElement.textContent = '';
  } else {
    nameElement.textContent = '새 필터';
    typeElement.textContent = '';
  }
}

/**
 * 날짜를 YYYY-MM-DD 형식으로 포맷팅합니다.
 * @param {string|Date} date 날짜 문자열 또는 Date 객체
 * @returns {string} 포맷팅된 날짜 문자열
 */
function formatDate(date) {
  if (!date) return '';
  var dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) {
    return date; // 유효하지 않은 날짜는 원본 반환
  }
  var year = dateObj.getFullYear();
  var month = String(dateObj.getMonth() + 1).padStart(2, '0');
  var day = String(dateObj.getDate()).padStart(2, '0');
  return "".concat(year, "-").concat(month, "-").concat(day);
}

/**
 * 날짜를 input[type=date]에 사용할 수 있는 YYYY-MM-DD 형식으로 포맷팅합니다.
 * @param {string|Date} date 날짜 문자열 또는 Date 객체
 * @returns {string} 포맷팅된 날짜 문자열
 */
function formatDateForInput(date) {
  return formatDate(date);
}

/**
 * Bootstrap 스크립트가 로드되었는지 확인하고, 없으면 로드합니다.
 */
function ensureBootstrapScriptLoaded() {
  if (!document.querySelector('script[src*="bootstrap.bundle.min.js"]')) {
    var scriptTag = document.createElement('script');
    scriptTag.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(scriptTag);
  }
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_MainLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/MainLayout.js */ "./src/layouts/MainLayout.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");



// 애플리케이션 초기화
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM 로드 완료, 애플리케이션 초기화 시작');

  // 애플리케이션 컨테이너 생성
  var appContainer = document.getElementById('app') || createAppContainer();

  // 메인 레이아웃 초기화
  var mainLayout = new _layouts_MainLayout_js__WEBPACK_IMPORTED_MODULE_0__["default"](appContainer);
  console.log('애플리케이션 초기화 완료');
});

/**
 * 앱 컨테이너 생성 (없는 경우)
 * @returns {HTMLElement} 앱 컨테이너 요소
 */
function createAppContainer() {
  var appContainer = document.createElement('div');
  appContainer.id = 'app';
  document.body.appendChild(appContainer);
  console.log('앱 컨테이너 생성됨');
  return appContainer;
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map