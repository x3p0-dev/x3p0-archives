/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/index.js":
/*!****************************!*\
  !*** ./resources/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./resources/scss/style.scss");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./resources/block.json");
/* harmony import */ var _js_block_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/block-icon */ "./resources/js/block-icon.js");
/* harmony import */ var _js_block_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/block-edit */ "./resources/js/block-edit.js");
/**
 * Registers the block type.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-archives
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

// Import stylesheets.

//import './css/index.scss';

// Import dependencies.




//import save                  from './js/block-save';

// Register block type.
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: _js_block_icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _js_block_edit__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./resources/js/archives/element-archives.js":
/*!***************************************************!*\
  !*** ./resources/js/archives/element-archives.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-icon */ "./resources/js/block-icon.js");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/utils-common */ "./resources/js/common/utils-common.js");

/**
 * Returns the archives element.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-archives
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */








/* harmony default export */ __webpack_exports__["default"] = (_ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    postType,
    month,
    year,
    order,
    headingTag
  } = attributes;
  const {
    latestPosts
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    let queryArgs = {
      per_page: -1,
      order: order,
      orderby: 'date'
    };
    if (year) {
      let afterDate = new Date(year, month ? month - 1 : 0, 1);
      let beforeDate = new Date(year, month ? month : 11, month ? 0 : 31, 23, 59, 59);
      queryArgs.after = afterDate.toISOString();
      queryArgs.before = beforeDate.toISOString();
    }
    const posts = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getEntityRecords('postType', postType, queryArgs);
    return {
      latestPosts: !Array.isArray(posts) ? posts : posts.map(post => {
        return {
          ...post
        };
      })
    };
  }, [
  // Attributes to update the query.
  order, year, month, postType]);
  const hasPosts = !!(latestPosts !== null && latestPosts !== void 0 && latestPosts.length);
  if (!hasPosts) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Placeholder, {
      icon: _block_icon__WEBPACK_IMPORTED_MODULE_1__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Site Archives', 'x3p0-archives')
    }, !Array.isArray(latestPosts) ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('No posts found.', 'x3p0-archives'));
  }
  let currentYear = '';
  let currentMonth = '';
  const archives = [];
  latestPosts.forEach((post, i) => {
    let year = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.date)('Y', post.date_gmt);
    let month = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.date)('m', post.date_gmt);
    if (currentYear !== year || currentMonth !== month) {
      let newMonth = {
        year: year,
        month: month,
        date: (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.dateI18n)('F Y', post.date_gmt),
        posts: []
      };
      archives[year + month] = newMonth;
      currentYear = year;
      currentMonth = month;
    }
    archives[year + month].posts.push(post);
  });

  // Reverses the months. Posts are already reversed.
  if ('desc' === order) {
    archives.reverse();
  }
  const HeadingTag = headingTag !== null && headingTag !== void 0 ? headingTag : 'h2';
  const archivesHtml = archives.map((month, i) => {
    let currentDay = '';
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeadingTag, {
      className: "wp-block-x3p0-archives__heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: x3p0Archives.monthLink.replace('%year%', month.year).replace('%monthnum%', month.month),
      className: "wp-block-x3p0-archives__heading-link",
      onClick: _common_utils_common__WEBPACK_IMPORTED_MODULE_7__.preventDefault
    }, month.date)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "wp-block-x3p0-archives__list"
    }, month.posts.map((post, i) => {
      let daynum = (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.date)('d', post.date_gmt);
      let postClass = daynum === currentDay ? 'wp-block-x3p0-archives__post has-duplicate-day' : 'wp-block-x3p0-archives__post';
      currentDay = daynum;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        className: postClass,
        key: i
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("time", {
        dateTime: (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.format)('c', post.date_gmt),
        className: "wp-block-x3p0-archives__post-day"
      }, (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_2__.dateI18n)('d:', post.date_gmt)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: post.link,
        className: "wp-block-x3p0-archives__post-link",
        onClick: _common_utils_common__WEBPACK_IMPORTED_MODULE_7__.preventDefault,
        rel: "noreferrer noopener"
      }, post.title.rendered || post.id));
    })))];
  });
  return archivesHtml;
});

/***/ }),

/***/ "./resources/js/archives/panel-archives.js":
/*!*************************************************!*\
  !*** ./resources/js/archives/panel-archives.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_hooks_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/hooks-common */ "./resources/js/common/hooks-common.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Archives settings block inspector panel.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-archives
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */





const {
  years
} = x3p0Archives;
const ArchivesPanel = _ref => {
  let {
    attributes: {
      postType,
      order,
      month,
      year
    },
    setAttributes
  } = _ref;
  const panelId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useInstanceId)(ArchivesPanel);
  const postTypeOptions = (0,_common_hooks_common__WEBPACK_IMPORTED_MODULE_3__.usePostTypes)();
  const allYears = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Year', 'x3p0-archives'),
    value: ''
  }];
  if (years.length) {
    years.forEach(year => {
      allYears.push({
        label: year,
        value: year
      });
    });
  }
  const resetPostTypeItem = () => setAttributes({
    postType: 'post'
  });
  const resetOrderItem = () => setAttributes({
    order: 'desc'
  });
  const resetYearItem = () => setAttributes({
    year: undefined
  });
  const resetMonthItem = () => setAttributes({
    month: undefined
  });
  const resetPanel = () => {
    resetPostTypeItem();
    resetOrderItem();
    resetYearItem();
    resetMonthItem();
  };
  const postTypeControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Type', 'x3p0-archives'),
    value: postType,
    onChange: value => setAttributes({
      postType: value
    }),
    options: postTypeOptions
  });
  const orderControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order', 'x3p0-archives'),
    value: order,
    onChange: value => setAttributes({
      order: value
    }),
    options: [{
      value: 'desc',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Descending', 'x3p0-archives')
    }, {
      value: 'asc',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ascending', 'x3p0-archives')
    }]
  });
  const yearControl = allYears && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Year', 'x3p0-archives'),
    value: year,
    onChange: value => setAttributes({
      year: value,
      // Disable month if no year.
      month: !value ? '' : month
    }),
    options: allYears
  });
  const monthControl = year && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Month', 'x3p0-archives'),
    value: month,
    onChange: value => setAttributes({
      month: value
    }),
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Month', 'x3p0-archives')
    }, {
      value: '01',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('January', 'x3p0-archives')
    }, {
      value: '02',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('February', 'x3p0-archives')
    }, {
      value: '03',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('March', 'x3p0-archives')
    }, {
      value: '04',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('April', 'x3p0-archives')
    }, {
      value: '05',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('May', 'x3p0-archives')
    }, {
      value: '06',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('June', 'x3p0-archives')
    }, {
      value: '07',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('July', 'x3p0-archives')
    }, {
      value: '08',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('August', 'x3p0-archives')
    }, {
      value: '09',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('September', 'x3p0-archives')
    }, {
      value: '10',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('October', 'x3p0-archives')
    }, {
      value: '11',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('November', 'x3p0-archives')
    }, {
      value: '12',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('December', 'x3p0-archives')
    }]
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanel, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Archives', 'x3p0-archives'),
    panelId: panelId,
    className: "wp-block-x3p0-archives-panel__progress",
    resetAll: resetPanel
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Type', 'x3p0-archives'),
    hasValue: () => !!postType,
    onDeselect: resetPostTypeItem,
    panelId: panelId
  }, postTypeControl), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order', 'x3p0-archives'),
    hasValue: () => !!order,
    onDeselect: resetOrderItem,
    panelId: panelId
  }, orderControl), yearControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Year', 'x3p0-archives'),
    hasValue: () => !!year,
    onDeselect: resetYearItem,
    panelId: panelId
  }, yearControl), monthControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalToolsPanelItem, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Month', 'x3p0-archives'),
    hasValue: () => !!month,
    onDeselect: resetMonthItem,
    panelId: panelId
  }, monthControl));
};
/* harmony default export */ __webpack_exports__["default"] = (ArchivesPanel);

/***/ }),

/***/ "./resources/js/block-edit.js":
/*!************************************!*\
  !*** ./resources/js/block-edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _archives_panel_archives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./archives/panel-archives */ "./resources/js/archives/panel-archives.js");
/* harmony import */ var _archives_element_archives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./archives/element-archives */ "./resources/js/archives/element-archives.js");





// Exports the archives block type edit function.
function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_archives_panel_archives__WEBPACK_IMPORTED_MODULE_2__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_archives_element_archives__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  })));
}

/***/ }),

/***/ "./resources/js/block-icon.js":
/*!************************************!*\
  !*** ./resources/js/block-icon.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Block icon.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-archives
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M19 6.2h-5.9l-.6-1.1c-.3-.7-1-1.1-1.8-1.1H5c-1.1 0-2 .9-2 2v11.8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8.2c0-1.1-.9-2-2-2zm.5 11.6c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h5.8c.2 0 .4.1.4.3l1 2H19c.3 0 .5.2.5.5v9.5zM8 12.8h8v-1.5H8v1.5zm0 3h8v-1.5H8v1.5z"
})));

/***/ }),

/***/ "./resources/js/common/hooks-common.js":
/*!*********************************************!*\
  !*** ./resources/js/common/hooks-common.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePostTypes": function() { return /* binding */ usePostTypes; }
/* harmony export */ });
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Custom hooks.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-archives
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */




const usePostTypes = () => {
  const {
    postTypes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    var _getPostTypes;
    const {
      getPostTypes
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store);
    const excludedPostTypes = ['attachment'];
    const filteredPostTypes = (_getPostTypes = getPostTypes({
      per_page: -1
    })) === null || _getPostTypes === void 0 ? void 0 : _getPostTypes.filter(_ref => {
      let {
        viewable,
        slug
      } = _ref;
      return viewable && !excludedPostTypes.includes(slug);
    });
    return {
      postTypes: filteredPostTypes
    };
  }, []);
  const postTypeOptions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (postTypes || []).map(_ref2 => {
    let {
      labels,
      slug
    } = _ref2;
    return {
      label: labels.singular_name,
      value: slug
    };
  }), [postTypes]);
  return postTypeOptions;
};

/***/ }),

/***/ "./resources/js/common/utils-common.js":
/*!*********************************************!*\
  !*** ./resources/js/common/utils-common.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preventDefault": function() { return /* binding */ preventDefault; }
/* harmony export */ });
/**
 * Common utility functions.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2023, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-archives
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

const preventDefault = event => event.preventDefault();

/***/ }),

/***/ "./resources/scss/style.scss":
/*!***********************************!*\
  !*** ./resources/scss/style.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./resources/block.json":
/*!******************************!*\
  !*** ./resources/block.json ***!
  \******************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"x3p0/archives","title":"X3P0 Archives","category":"widgets","description":"Displays a site archives list, broken down by month.","keywords":["archives"],"textdomain":"x3p0-archives","editorScript":"file:./index.js","style":"file:./style-index.css","editorStyle":"file:./index.css","render":"file:./render.php","icon":"","attributes":{"postType":{"type":"string","default":"post"},"order":{"type":"string","default":"desc"},"year":{"type":"string","default":""},"month":{"type":"string","default":""},"headingTag":{"type":"string","default":"h2"}},"supports":{"anchor":true,"align":true,"html":false,"__experimentalBorder":true,"color":{"gradients":true,"link":true},"spacing":{"margin":true,"padding":true},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalFontFamily":true,"__experimentalTextTransform":true}}}');

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkx3p0_archives"] = self["webpackChunkx3p0_archives"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], function() { return __webpack_require__("./resources/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map