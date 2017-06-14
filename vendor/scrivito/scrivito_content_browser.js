/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1015);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(1001);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(49)(module)))

/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),

/***/ 1010:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

var AppContainer, DialogApp, Filter, Provider, configureStore;

__webpack_require__(516);

DialogApp = __webpack_require__(514);

Filter = __webpack_require__(510)["default"];

AppContainer = __webpack_require__(513).AppContainer;

Provider = __webpack_require__(78).Provider;

configureStore = __webpack_require__(515);

scrivito.content_browser = (function() {
  return {
    filters: {},
    base_preset: {},
    ESCAPE: 27,
    base_query: null,
    _center: function() {
      var domElement, domElements, _i, _len, _results;
      domElements = $(".scrivito-content-browser");
      _results = [];
      for (_i = 0, _len = domElements.length; _i < _len; _i++) {
        domElement = domElements[_i];
        domElement = $(domElement);
        _results.push(domElement.css({
          marginLeft: -domElement.innerWidth() / 2,
          marginTop: -domElement.innerHeight() / 2,
          left: '50%'
        }));
      }
      return _results;
    },
    _showConfirm: function(props) {
      props.mode = 'confirm';
      return this._showAlert(props);
    },
    _showAlert: function(props) {
      var alertContainer;
      alertContainer = document.createElement('DIV');
      document.body.appendChild(alertContainer);
      props.promise = $.Deferred();
      props.container = alertContainer;
      ReactDOM.render(React.createElement(DialogApp, {
        "mode": props.mode,
        "promise": props.promise,
        "container": props.container,
        "title": props.title,
        "subtitle": props.subtitle,
        "body": props.body
      }), alertContainer);
      return props.promise;
    },
    _loadModal: function() {
      $('<div></div>').addClass('scrivito_overlay scrivito_show').appendTo($('#scrivito_editing'));
      $('<div></div>').addClass('scrivito-content-browser show').appendTo($('#scrivito_editing'));
      $(document).off('keyup.scrivito_content_browser');
      $(document).on('keyup.scrivito_content_browser', (function(_this) {
        return function(e) {
          return _this.keyUpHandler(e);
        };
      })(this));
      return this._center();
    },
    _buildFilter: function(options) {
      var filterConfig, filterContext;
      filterConfig = options.filters || this.filters;
      filterContext = options.filter_context;
      return new Filter(filterConfig, filterContext);
    },
    _startReact: function(options, promise) {
      var baseQuery, filter, store;
      baseQuery = options.base_query || this.base_query;
      filter = this._buildFilter(options);
      store = configureStore();
      return this._reactApp = ReactDOM.render(React.createElement(Provider, {
        "store": store
      }, React.createElement(AppContainer, {
        "initialFilter": filter,
        "baseQuery": baseQuery,
        "promise": promise,
        "options": options
      })), this._getLastContentBrowserElement());
    },
    keyUpHandler: function(e) {
      if (e.keyCode === this.ESCAPE) {
        e.preventDefault();
        return this.close();
      }
    },
    _getLastElementByClassName: function(className) {
      var elements;
      elements = document.getElementsByClassName(className);
      return _.last(elements);
    },
    _getLastOverlayElement: function() {
      return this._getLastElementByClassName('scrivito_overlay scrivito_show');
    },
    _getLastContentBrowserElement: function() {
      return this._getLastElementByClassName('scrivito-content-browser show');
    },
    _remove: function(element) {
      return element.parentNode.removeChild(element);
    },
    close: function() {
      ReactDOM.unmountComponentAtNode(this._getLastContentBrowserElement());
      this._remove(this._getLastOverlayElement());
      this._remove(this._getLastContentBrowserElement());
      if (!this._getLastContentBrowserElement()) {
        return $(document).off('keyup.scrivito_content_browser');
      }
    },
    open: function(options) {
      var promise;
      if (options == null) {
        options = {};
      }
      if (!options.hasOwnProperty('base_preset')) {
        options.base_preset = this.base_preset;
      }
      options.editingView = scrivito.in_editable_view();
      promise = $.Deferred();
      this._loadModal();
      this._startReact(options, promise);
      $(window).resize((function(_this) {
        return function() {
          return _this._center();
        };
      })(this));
      promise.always((function(_this) {
        return function() {
          return _this.close();
        };
      })(this));
      return promise;
    }
  };
})();

scrivito.registerPublicApi("content_browser", function() {
  return scrivito.content_browser;
});

scrivito.registerBrowseContent(function(options) {
  var defaultOptions;
  if (options == null) {
    options = {};
  }
  defaultOptions = {
    selection_mode: 'single',
    standAlone: true
  };
  return scrivito.content_browser.open(_.extend(defaultOptions, options));
});


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(998);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(506);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = _;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortInAscOrder = sortInAscOrder;
exports.sortInDescOrder = sortInDescOrder;
var CHANGE_SORT_ORDER = exports.CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER';
var ASC_SORT_ORDER = exports.ASC_SORT_ORDER = 'asc';
var DESC_SORT_ORDER = exports.DESC_SORT_ORDER = 'desc';

function changeSortOrder(criteriaType, sortDirection) {
  return { type: CHANGE_SORT_ORDER, criteriaType: criteriaType, sortDirection: sortDirection };
}

function sortInAscOrder(criteriaType) {
  return changeSortOrder(criteriaType, ASC_SORT_ORDER);
}

function sortInDescOrder(criteriaType) {
  return changeSortOrder(criteriaType, DESC_SORT_ORDER);
}

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleExpandTagBar = toggleExpandTagBar;
exports.toggleTag = toggleTag;
var EXPAND_TOGGLE = exports.EXPAND_TOGGLE = 'EXPAND_TOGGLE';
var TOGGLE_TAG = exports.TOGGLE_TAG = 'TOGGLE_TAG';

function toggleExpandTagBar() {
  return { type: EXPAND_TOGGLE };
}

function toggleTag(tag) {
  return { type: TOGGLE_TAG, tag: tag };
}

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.failed = exports.isFailed = exports.isCompleted = exports.isActive = exports.status = undefined;

var _underscore = __webpack_require__(11);

var status = exports.status = function status(addition) {
  if (addition.progress === 0) {
    return 'failed';
  }

  if (addition.progress === 100) {
    return 'completed';
  }

  return 'active';
};

var isActive = exports.isActive = function isActive(addition) {
  return status(addition) === 'active';
};
var isCompleted = exports.isCompleted = function isCompleted(addition) {
  return status(addition) === 'completed';
};
var isFailed = exports.isFailed = function isFailed(addition) {
  return status(addition) === 'failed';
};
var failed = exports.failed = function failed(additions) {
  return (0, _underscore.filter)(additions, isFailed);
};

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

var TableView;

TableView = React.createClass({
  render: function() {
    return React.createElement("div", {
      "className": "scrivito-content-browser-list"
    }, React.createElement("div", {
      "className": "scrivito-content-browser-list-head"
    }, React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("th", null), React.createElement("th", null, scrivito.translate('content_browser.table_view.title')), React.createElement("th", null, scrivito.translate('content_browser.table_view.type')), React.createElement("th", null, scrivito.translate('content_browser.table_view.file_type')), React.createElement("th", null, scrivito.translate('content_browser.table_view.file_size')), React.createElement("th", null, scrivito.translate('content_browser.table_view.last_change')))))), this.props.children);
  }
});

module.exports = TableView;


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var LoadableColumn, TableViewItem, filesize, inspectComponentWrapper;

LoadableColumn = __webpack_require__(708);

inspectComponentWrapper = __webpack_require__(334);

filesize = __webpack_require__(227);

TableViewItem = scrivito.createReactClass({
  displayName: 'TableViewItem',
  propTypes: {
    objId: React.PropTypes.string.isRequired,
    handleSelectClick: React.PropTypes.func.isRequired,
    itemClasses: React.PropTypes.string.isRequired,
    selectClasses: React.PropTypes.string.isRequired,
    selectionMode: React.PropTypes.string.isRequired,
    selectedObjs: React.PropTypes.arrayOf(React.PropTypes.string)
  },
  _obj: function() {
    return scrivito.BasicObj.get(this.props.objId);
  },
  _title: function() {
    return scrivito.titleForObj(this._obj());
  },
  _contentType: function() {
    var blob;
    blob = this._obj().get('blob', 'binary');
    if (blob) {
      return blob.raw.contentType;
    }
  },
  _contentLength: function() {
    var blob;
    blob = this._obj().get('blob', 'binary');
    if (blob) {
      return filesize(blob.raw.contentLength);
    }
  },
  _getLastChangedFormatedDate: function() {
    var result;
    result = moment(this._obj().lastChanged).utc();
    return result.format("dddd, MMMM Do YYYY, h:mm A");
  },
  _getTime: function() {
    return React.createElement("span", null, React.createElement("time", {
      "dateTime": (this._obj().lastChanged),
      "title": this._getLastChangedFormatedDate()
    }, moment.utc(this._obj().lastChanged).fromNow()));
  },
  _getFileTypeTitleTag: function() {
    var mimeType;
    mimeType = this._contentType();
    if (mimeType != null) {
      return mimeType.match(/\w+$/)[0];
    }
  },
  render: function() {
    return React.createElement("tr", {
      "onClick": this.props.handleSelectClick,
      "className": this.props.itemClasses
    }, React.createElement("td", null, React.createElement("div", {
      "className": this.props.selectClasses
    })), React.createElement(LoadableColumn, {
      "getTitle": ((function(_this) {
        return function() {
          return _this._title();
        };
      })(this)),
      "get": ((function(_this) {
        return function() {
          return _this._title();
        };
      })(this))
    }), React.createElement(LoadableColumn, {
      "get": ((function(_this) {
        return function() {
          return _this._contentType();
        };
      })(this))
    }), React.createElement(LoadableColumn, {
      "getTitle": ((function(_this) {
        return function() {
          return _this._contentType();
        };
      })(this)),
      "get": ((function(_this) {
        return function() {
          return _this._getFileTypeTitleTag();
        };
      })(this))
    }), React.createElement(LoadableColumn, {
      "get": ((function(_this) {
        return function() {
          return _this._contentLength();
        };
      })(this))
    }), React.createElement(LoadableColumn, {
      "getTitle": ((function(_this) {
        return function() {
          return _this._getLastChangedFormatedDate();
        };
      })(this)),
      "get": ((function(_this) {
        return function() {
          return _this._getTime();
        };
      })(this))
    }));
  }
});

module.exports = inspectComponentWrapper(TableViewItem);


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var LoadableSpan, SINGLE_SELECTION_MODE, ThumbnailItem, getMimeTypeIconClassName, inspectComponentWrapper;

getMimeTypeIconClassName = __webpack_require__(525)["default"];

LoadableSpan = __webpack_require__(709);

inspectComponentWrapper = __webpack_require__(334);

SINGLE_SELECTION_MODE = __webpack_require__(80).SINGLE_SELECTION_MODE;

ThumbnailItem = scrivito.createReactClass({
  displayName: 'ThumbnailItem',
  propTypes: {
    objId: React.PropTypes.string.isRequired,
    handleSelectClick: React.PropTypes.func.isRequired,
    itemClasses: React.PropTypes.string.isRequired,
    selectClasses: React.PropTypes.string.isRequired,
    selectionMode: React.PropTypes.string.isRequired,
    selectedObjs: React.PropTypes.arrayOf(React.PropTypes.string)
  },
  _obj: function() {
    return scrivito.BasicObj.get(this.props.objId);
  },
  _title: function() {
    return scrivito.titleForObj(this._obj());
  },
  _subtitle: function() {
    return scrivito.UiConfig.get(this.props.objId).get('info_for_content_browser');
  },
  _itemToolTip: function() {
    var itemToolTip;
    itemToolTip = this._title();
    if (this._subtitle() != null) {
      itemToolTip += "\n" + (this._subtitle());
    }
    return itemToolTip;
  },
  _mimeTypeIconClassName: function(contentType) {
    var className;
    className = 'scrivito_icon ';
    className += getMimeTypeIconClassName(contentType);
    return className;
  },
  _isTransformable: function(contentType) {
    var types;
    types = ['image/jpeg', 'image/gif', 'image/png'];
    return _.contains(types, contentType);
  },
  _handleImageTransformation: function(blob) {
    var error, transformed;
    try {
      transformed = blob.transform({
        width: 260,
        height: 140
      });
      return React.createElement("img", {
        "src": transformed.url
      });
    } catch (_error) {
      error = _error;
      if (error instanceof scrivito.TransformationSourceTooLargeError) {
        return React.createElement("div", {
          "className": "scrivito-content-browser-preview image-too-large"
        });
      } else if (error instanceof scrivito.TransformationSourceInvalidError) {
        return React.createElement("div", {
          "className": "scrivito-content-browser-preview image-invalid"
        });
      } else {
        throw error;
      }
    }
  },
  _previewImage: function() {
    var blob, contentType;
    blob = this._obj().get('blob', 'binary');
    contentType = blob != null ? blob.raw.contentType : void 0;
    if (this._isTransformable(contentType)) {
      return this._handleImageTransformation(blob);
    } else if (contentType && contentType.indexOf('image/') === 0) {
      return React.createElement("img", {
        "src": blob.url
      });
    } else {
      return React.createElement("span", {
        "className": this._mimeTypeIconClassName(contentType)
      });
    }
  },
  render: function() {
    return React.createElement("li", {
      "className": this.props.itemClasses
    }, React.createElement("div", {
      "className": "scrivito-content-browser-item-wrapper",
      "onClick": this.props.handleSelectClick
    }, React.createElement("div", {
      "className": "scrivito-content-browser-preview"
    }, React.createElement(LoadableSpan, {
      "get": ((function(_this) {
        return function() {
          return _this._previewImage();
        };
      })(this))
    })), React.createElement("div", {
      "className": this.props.selectClasses
    }, React.createElement(LoadableSpan, {
      "className": "scrivito-content-browser-thumbnails-name",
      "getTitle": ((function(_this) {
        return function() {
          return _this._itemToolTip();
        };
      })(this)),
      "get": ((function(_this) {
        return function() {
          return _this._title();
        };
      })(this))
    }), React.createElement(LoadableSpan, {
      "className": "scrivito-content-browser-thumbnails-size",
      "get": ((function(_this) {
        return function() {
          return _this._subtitle();
        };
      })(this))
    }), (this.props.selectionMode !== SINGLE_SELECTION_MODE ? React.createElement("span", {
      "className": 'scrivito-content-browser-thumbnails-select select-item'
    }) : void 0))));
  }
});

module.exports = inspectComponentWrapper(ThumbnailItem);


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * filesize
 *
 * @copyright 2017 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 3.5.6
 */
(function (global) {
	var b = /^(b|B)$/,
	    symbol = {
		iec: {
			bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"],
			bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
		},
		jedec: {
			bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],
			bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
		}
	},
	    fullform = {
		iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
		jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]
	};

	/**
  * filesize
  *
  * @method filesize
  * @param  {Mixed}   arg        String, Int or Float to transform
  * @param  {Object}  descriptor [Optional] Flags
  * @return {String}             Readable file size String
  */
	function filesize(arg) {
		var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		var result = [],
		    val = 0,
		    e = void 0,
		    base = void 0,
		    bits = void 0,
		    ceil = void 0,
		    full = void 0,
		    fullforms = void 0,
		    neg = void 0,
		    num = void 0,
		    output = void 0,
		    round = void 0,
		    unix = void 0,
		    spacer = void 0,
		    standard = void 0,
		    symbols = void 0;

		if (isNaN(arg)) {
			throw new Error("Invalid arguments");
		}

		bits = descriptor.bits === true;
		unix = descriptor.unix === true;
		base = descriptor.base || 2;
		round = descriptor.round !== undefined ? descriptor.round : unix ? 1 : 2;
		spacer = descriptor.spacer !== undefined ? descriptor.spacer : unix ? "" : " ";
		symbols = descriptor.symbols || descriptor.suffixes || {};
		standard = base === 2 ? descriptor.standard || "jedec" : "jedec";
		output = descriptor.output || "string";
		full = descriptor.fullform === true;
		fullforms = descriptor.fullforms instanceof Array ? descriptor.fullforms : [];
		e = descriptor.exponent !== undefined ? descriptor.exponent : -1;
		num = Number(arg);
		neg = num < 0;
		ceil = base > 2 ? 1000 : 1024;

		// Flipping a negative number to determine the size
		if (neg) {
			num = -num;
		}

		// Determining the exponent
		if (e === -1 || isNaN(e)) {
			e = Math.floor(Math.log(num) / Math.log(ceil));

			if (e < 0) {
				e = 0;
			}
		}

		// Exceeding supported length, time to reduce & multiply
		if (e > 8) {
			e = 8;
		}

		// Zero is now a special case because bytes divide by 1
		if (num === 0) {
			result[0] = 0;
			result[1] = unix ? "" : symbol[standard][bits ? "bits" : "bytes"][e];
		} else {
			val = num / (base === 2 ? Math.pow(2, e * 10) : Math.pow(1000, e));

			if (bits) {
				val = val * 8;

				if (val >= ceil && e < 8) {
					val = val / ceil;
					e++;
				}
			}

			result[0] = Number(val.toFixed(e > 0 ? round : 0));
			result[1] = base === 10 && e === 1 ? bits ? "kb" : "kB" : symbol[standard][bits ? "bits" : "bytes"][e];

			if (unix) {
				result[1] = standard === "jedec" ? result[1].charAt(0) : e > 0 ? result[1].replace(/B$/, "") : result[1];

				if (b.test(result[1])) {
					result[0] = Math.floor(result[0]);
					result[1] = "";
				}
			}
		}

		// Decorating a 'diff'
		if (neg) {
			result[0] = -result[0];
		}

		// Applying custom symbol
		result[1] = symbols[result[1]] || result[1];

		// Returning Array, Object, or String (default)
		if (output === "array") {
			return result;
		}

		if (output === "exponent") {
			return e;
		}

		if (output === "object") {
			return { value: result[0], suffix: result[1], symbol: result[1] };
		}

		if (full) {
			result[1] = fullforms[e] ? fullforms[e] : fullform[standard][e] + (bits ? "bit" : "byte") + (result[0] === 1 ? "" : "s");
		}

		return result.join(spacer);
	}

	// Partial application for functional programming
	filesize.partial = function (opt) {
		return function (arg) {
			return filesize(arg, opt);
		};
	};

	// CommonJS, AMD, script tag
	if (true) {
		module.exports = filesize;
	} else if (typeof define === "function" && define.amd) {
		define(function () {
			return filesize;
		});
	} else {
		global.filesize = filesize;
	}
})(typeof window !== "undefined" ? window : global);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleInspectorMaximized = toggleInspectorMaximized;
var MAXIMIZE_TOGGLE = exports.MAXIMIZE_TOGGLE = 'MAXIMAZED_INSPECTOR_TOGGLE';

function toggleInspectorMaximized() {
  return { type: MAXIMIZE_TOGGLE };
}

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadMoreObjs = loadMoreObjs;
var LOAD_MORE_OBJS = exports.LOAD_MORE_OBJS = 'LOAD_MORE_OBJS';
var DEFAULT_NUMBER_TO_LOAD = exports.DEFAULT_NUMBER_TO_LOAD = 24;

function loadMoreObjs(numToLoad) {
  return { type: LOAD_MORE_OBJS, numToLoad: numToLoad };
}

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function Spinner() {
  return React.createElement(
    "div",
    { className: "scrivito-content-browser-loading" },
    React.createElement("i", { className: "scrivito_icon scrivito_icon_refresh" })
  );
}

exports.default = Spinner;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _underscore = __webpack_require__(11);

var AddItemMixin = {
  itemClassName: function itemClassName() {
    var className = 'scrivito-content-browser-add';
    if (!this.props.objCreation.isActive()) {
      className += ' disabled';
    }
    return className;
  },
  iconClassName: function iconClassName() {
    if (this.props.objCreation.isActive()) {
      return 'scrivito_icon scrivito_icon_plus';
    }

    return 'scrivito_icon scrivito_icon_disabled';
  },
  creationNotPossibleBody: function creationNotPossibleBody(error) {
    return React.createElement(
      'ul',
      null,
      error.nodeTitles.map(function (title) {
        return React.createElement(
          'li',
          { key: title },
          title
        );
      })
    );
  },
  presetConflictBody: function presetConflictBody(error) {
    return React.createElement(
      'div',
      null,
      scrivito.translate('content_browser.add_item.preset_conflict'),
      (0, _underscore.map)(error.fields, function (values, field) {
        return React.createElement(
          'div',
          { key: field },
          React.createElement(
            'h4',
            null,
            field
          ),
          React.createElement(
            'ul',
            null,
            values.map(function (value) {
              return React.createElement(
                'li',
                { key: value },
                value
              );
            })
          )
        );
      })
    );
  },
  showErrorAlert: function showErrorAlert(error) {
    var alertProps = void 0;
    if (error.type === 'creation_not_possible') {
      alertProps = {
        subtitle: scrivito.translate('content_browser.add_item.disabled_filters'),
        body: this.creationNotPossibleBody(error)
      };
    }

    if (error.type === 'obj_class_not_provided') {
      alertProps = {
        subtitle: scrivito.translate('content_browser.add_item.error_no_obj_class')
      };
    }

    if (error.type === 'preset_conflict') {
      alertProps = { body: this.presetConflictBody(error) };
    }

    alertProps.title = scrivito.translate('content_browser.add_item.create_imposible');
    scrivito.content_browser._showAlert(alertProps);
  },
  buildErrorMessage: function buildErrorMessage(error) {
    if (error.type === 'creation_not_possible') {
      var nodesString = error.nodeTitles.join(', ');
      return scrivito.translate('content_browser.add_item.prevent_creation', nodesString);
    }

    if (error.type === 'obj_class_not_provided') {
      return scrivito.translate('content_browser.add_item.error_no_obj_class');
    }

    if (error.type === 'preset_conflict') {
      var message = scrivito.translate('content_browser.add_item.failed');

      (0, _underscore.each)(error.fields, function (value, field) {
        message += field + ': ' + value.join(', ') + '\n';
      });

      return message;
    }
  },
  iconTitle: function iconTitle() {
    if (!this.props.objCreation.isActive()) {
      return this.buildErrorMessage(this.props.objCreation.error());
    }
  },
  textMessage: function textMessage() {
    if (this.props.objCreation.isActive()) {
      return scrivito.translate('content_browser.add_item.create_item');
    }

    return scrivito.translate('content_browser.add_item.create_imposible');
  },
  createClick: function createClick() {
    var _props = this.props,
        objCreation = _props.objCreation,
        createObj = _props.createObj,
        basePreset = _props.basePreset,
        activeTags = _props.activeTags;

    if (objCreation.isActive()) {
      createObj({}, basePreset, objCreation.preset(), activeTags);
      objCreation.filter.deselectHierarchicalFilters();
    } else {
      this.showErrorAlert(objCreation.error());
    }
  }
};

exports.default = AddItemMixin;

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _filter_node = __webpack_require__(82);

var _filter_node2 = _interopRequireDefault(_filter_node);

var _underscore = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterCollectionNode = function (_FilterNode) {
  _inherits(FilterCollectionNode, _FilterNode);

  function FilterCollectionNode(filter, name, filterDefinition) {
    _classCallCheck(this, FilterCollectionNode);

    var _this = _possibleConstructorReturn(this, (FilterCollectionNode.__proto__ || Object.getPrototypeOf(FilterCollectionNode)).call(this, filter, name, filterDefinition));

    _this.field = filterDefinition.field;
    _this.operator = filterDefinition.operator;

    _this.expanded = filterDefinition.expanded !== false;
    _this.children = [];
    return _this;
  }

  _createClass(FilterCollectionNode, [{
    key: 'deselect',
    value: function deselect() {
      return (0, _underscore.each)(this.children, function (child) {
        child.active = false;
      });
    }
  }, {
    key: 'isExpanded',
    value: function isExpanded() {
      return !!this.expanded;
    }
  }, {
    key: 'hasActiveChildren',
    value: function hasActiveChildren() {
      return (0, _underscore.some)(this.children, function (child) {
        return child.isActive();
      });
    }
  }]);

  return FilterCollectionNode;
}(_filter_node2.default);

exports.default = FilterCollectionNode;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _active_node_config_collector = __webpack_require__(81);

var _active_node_config_collector2 = _interopRequireDefault(_active_node_config_collector);

var _preset_builder = __webpack_require__(274);

var _preset_builder2 = _interopRequireDefault(_preset_builder);

var _underscore = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjCreation = function () {
  function ObjCreation(filter) {
    _classCallCheck(this, ObjCreation);

    this.filter = filter;

    var collector = new _active_node_config_collector2.default(filter);
    this.activeConfigs = collector.findActiveFilterItems();

    var presetBuilder = new _preset_builder2.default(filter);
    this.presetValues = presetBuilder.generatePreset();
  }

  _createClass(ObjCreation, [{
    key: 'preset',
    value: function preset() {
      return this.presetValues.values();
    }
  }, {
    key: 'showCreationItem',
    value: function showCreationItem() {
      return (0, _underscore.some)(this.activeConfigs, function (nodeConfig) {
        return nodeConfig.enablesCreation();
      });
    }
  }, {
    key: 'isActive',
    value: function isActive() {
      return !!(!this.preventCreation() && this.presetIsValid());
    }
  }, {
    key: 'error',
    value: function error() {
      if (this.preventCreation()) {
        return { type: 'creation_not_possible', nodeTitles: this.nodeTitlesPreventingCreation() };
      } else if (this.presetValues.isValid()) {
        return { type: 'obj_class_not_provided' };
      }

      return { type: 'preset_conflict', fields: this.buildPresetConflictError() };
    }
  }, {
    key: 'preventCreation',
    value: function preventCreation() {
      return (0, _underscore.some)(this.activeConfigs, function (nodeConfig) {
        return nodeConfig.preventsCreation();
      });
    }
  }, {
    key: 'presetIsValid',
    value: function presetIsValid() {
      return this.presetValues.isValid() && this.preset()._obj_class;
    }
  }, {
    key: 'nodeTitlesPreventingCreation',
    value: function nodeTitlesPreventingCreation() {
      var nodes = (0, _underscore.flatten)((0, _underscore.map)(this.activeConfigs, function (node) {
        return node.nodesPreventingCreation();
      }));
      return (0, _underscore.map)(nodes, function (node) {
        return node.title;
      });
    }
  }, {
    key: 'buildPresetConflictError',
    value: function buildPresetConflictError() {
      var presetConflicts = {};
      (0, _underscore.each)(this.presetValues.errors(), function (values, field) {
        presetConflicts[field] = values;
        return presetConflicts[field];
      });

      return presetConflicts;
    }
  }]);

  return ObjCreation;
}();

exports.default = ObjCreation;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _active_node_config_collector = __webpack_require__(81);

var _active_node_config_collector2 = _interopRequireDefault(_active_node_config_collector);

var _underscore = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Preset = function () {
  function Preset() {
    _classCallCheck(this, Preset);

    this.presetErrors = {};
    this.presetValues = {};
    this.titles = {};
  }

  _createClass(Preset, [{
    key: 'isValid',
    value: function isValid() {
      return (0, _underscore.keys)(this.errors()).length === 0;
    }
  }, {
    key: 'values',
    value: function values() {
      if (this.isValid()) {
        return this.presetValues;
      }
      throw new Error(scrivito.translate('content_browser.last_added.preset_error'));
    }
  }, {
    key: 'errors',
    value: function errors() {
      return this.presetErrors;
    }
  }, {
    key: 'addValue',
    value: function addValue(key, value, title) {
      if (Object.prototype.hasOwnProperty.call(this.presetValues, key)) {
        return this.addError(key, this.titles[key], title);
      }
      this.presetValues[key] = value;
      this.titles[key] = title;
    }
  }, {
    key: 'addError',
    value: function addError(key, previouslySetValue, newValue) {
      if (this.presetErrors[key]) {
        return this.presetErrors[key].push(newValue);
      }
      this.presetErrors[key] = [previouslySetValue, newValue];
    }
  }]);

  return Preset;
}();

var PresetBuilder = function () {
  function PresetBuilder(filter) {
    _classCallCheck(this, PresetBuilder);

    this.collector = new _active_node_config_collector2.default(filter);
  }

  _createClass(PresetBuilder, [{
    key: 'generatePreset',
    value: function generatePreset() {
      var presetCollection = new Preset();
      var activeNodeConfigs = this.collector.findActiveFilterItems();

      (0, _underscore.each)(activeNodeConfigs, function (activeNodeConfig) {
        var nodesWithPreset = PresetBuilder.nodesWithPreset(activeNodeConfig);
        (0, _underscore.each)(nodesWithPreset, function (filterNode) {
          PresetBuilder.addPresetsForFilterNode(filterNode, presetCollection);
        });
      });

      return presetCollection;
    }
  }], [{
    key: 'nodesWithPreset',
    value: function nodesWithPreset(config) {
      return (0, _underscore.select)(config.activeNodes(), function (node) {
        return node.preset;
      });
    }
  }, {
    key: 'addPresetsForFilterNode',
    value: function addPresetsForFilterNode(node, presetCollection) {
      (0, _underscore.each)(node.preset, function (value, key) {
        if (value !== undefined) {
          presetCollection.addValue(key, value, node.title);
        }
      });
    }
  }]);

  return PresetBuilder;
}();

exports.default = PresetBuilder;

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

var InfiniteScrollLoader, MoreItemsSpinner, SCREEN_BOTTOM_TOLERANCE;

MoreItemsSpinner = __webpack_require__(711);

SCREEN_BOTTOM_TOLERANCE = 20;

InfiniteScrollLoader = React.createClass({
  displayName: 'InfiniteScrollLoader',
  propTypes: {
    isLoading: React.PropTypes.bool.isRequired,
    hasMore: React.PropTypes.bool.isRequired,
    fetch: React.PropTypes.func.isRequired,
    tag: React.PropTypes.string.isRequired,
    className: React.PropTypes.string.isRequired,
    style: React.PropTypes.object
  },
  componentDidUpdate: function() {
    this._fullyFillContainer();
    return this._ensureFullPageIsPreloaded();
  },
  componentDidMount: function() {
    return this._fullyFillContainer();
  },
  render: function() {
    var props;
    props = {
      className: this.props.className,
      ref: (function(_this) {
        return function(domNode) {
          return _this.container = domNode;
        };
      })(this),
      style: this.props.style,
      onScroll: (function(_this) {
        return function() {
          return _this._ensureFullPageIsPreloaded();
        };
      })(this)
    };
    return React.createElement(this.props.tag, props, this._childrenAndLoader());
  },
  _ensureFullPageIsPreloaded: function() {
    if (this._isViewportAtBottom() && this.props.hasMore && !this.props.isLoading) {
      return this.props.fetch();
    }
  },
  _fullyFillContainer: function() {
    if (this.props.hasMore && !this.props.isLoading && !this._isFullViewPort()) {
      return this.props.fetch();
    }
  },
  _isFullViewPort: function() {
    return this.container.scrollHeight > this.container.offsetHeight;
  },
  _isViewportAtBottom: function() {
    return this.container.scrollTop >= this.container.scrollHeight - (2 * this.container.offsetHeight);
  },
  _childrenAndLoader: function() {
    var result;
    result = [this.props.children];
    if (this.props.isLoading) {
      result.push(React.createElement(MoreItemsSpinner, {
        "key": 'spinner'
      }));
    }
    return result;
  }
});

module.exports = InfiniteScrollLoader;


/***/ }),

/***/ 334:
/***/ (function(module, exports) {

var inspectComponentWrapper;

inspectComponentWrapper = function(Component) {
  return React.createClass({
    displayName: 'InspectedItem',
    isSelectedItem: function(objId) {
      return _.contains(this.props.selectedObjs, objId);
    },
    getItemClasses: function() {
      var className;
      className = 'content-browser-item ';
      if (this.isSelectedItem(this.props.objId)) {
        className += 'active';
      }
      return className;
    },
    selectClass: function() {
      var className;
      className = this.props.baseSelectClass;
      if (this.isSelectedItem(this.props.objId)) {
        className += ' active';
      }
      return className;
    },
    handleSelectClick: function() {
      return this.props.toggleObjSelection(this.props.objId);
    },
    render: function() {
      return React.createElement(Component, {
        "itemClasses": this.getItemClasses(),
        "handleSelectClick": this.handleSelectClick,
        "selectClasses": this.selectClass(),
        "selectedObjs": this.props.selectedObjs,
        "objId": this.props.objId,
        "selectionMode": this.props.selectionMode
      });
    }
  });
};

module.exports = inspectComponentWrapper;


/***/ }),

/***/ 335:
/***/ (function(module, exports) {

var ExpandableFilterNodeMixin;

ExpandableFilterNodeMixin = {
  defaultExpansionState: function() {
    return {
      open: this.props.filter.isExpanded()
    };
  },
  arrowHandleClick: function() {
    return this.setState({
      open: !this.state.open
    });
  },
  renderArrowTag: function() {
    return React.createElement("div", {
      "className": "scrivito-content-browser-hierarchy-arrow",
      "onClick": this.arrowHandleClick
    });
  },
  openClassSetOptions: function() {
    if (this.state.open) {
      return "open";
    } else {
      return "closed";
    }
  }
};

module.exports = ExpandableFilterNodeMixin;


/***/ }),

/***/ 336:
/***/ (function(module, exports) {

var LastAddedErrorItemMixin;

LastAddedErrorItemMixin = {
  failureMessage: function() {
    var defaultError, message;
    defaultError = scrivito.translate('content_browser.last_added.failed_upload');
    message = React.createElement("ul", null, _.map(this.props.failedAdditions, function(obj) {
      return React.createElement("div", {
        "className": "content-browser-alert"
      }, React.createElement("h4", null, obj.filename), React.createElement("li", null, obj.failureMessage || defaultError));
    }));
    return message;
  },
  showAlert: function() {
    return scrivito.content_browser._showAlert({
      title: scrivito.translate('content_browser.last_added.upload_error'),
      body: React.createElement("div", null, this.failureMessage())
    });
  },
  getErrorsCount: function() {
    return scrivito.translate('content_browser.last_added.failed_upload_counts', this.props.failedAdditions.length);
  },
  _titleInfo: function() {
    return scrivito.translate('content_browser.last_added.title_info');
  }
};

module.exports = LastAddedErrorItemMixin;


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

var LastAddedItemMixin, isActive;

isActive = __webpack_require__(112).isActive;

LastAddedItemMixin = {
  uploadInProgress: function() {
    return isActive(this.props.addedItem);
  },
  renderUploadStateProgress: function() {
    if (this.uploadInProgress()) {
      return React.createElement("div", {
        "className": "upload_state",
        "style": {
          width: "" + this.props.addedItem.progress + "%"
        }
      });
    }
  }
};

module.exports = LastAddedItemMixin;


/***/ }),

/***/ 338:
/***/ (function(module, exports) {

var OptionFilterLabelRenderMixin;

OptionFilterLabelRenderMixin = {
  renderHierarchyLabelTitle: function(title) {
    return React.createElement("div", {
      "className": "scrivito-content-browser-hierarchy-label"
    }, React.createElement("span", null, title));
  }
};

module.exports = OptionFilterLabelRenderMixin;


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var OptionFilterLabelRenderMixin, OptionFilterMixin;

OptionFilterLabelRenderMixin = __webpack_require__(338);

OptionFilterMixin = {
  mixins: [OptionFilterLabelRenderMixin],
  optionLabelToggleClick: function() {
    return this.props.filter.toggleActive();
  },
  activeClassName: function() {
    if (this.props.filter.isActive()) {
      return "active";
    } else {
      return "";
    }
  },
  renderOptionFilterTitle: function() {
    return this.renderHierarchyLabelTitle(this.props.filter.title);
  }
};

module.exports = OptionFilterMixin;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(799);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = Symbol;


/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(800);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = isPlainObject;


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_OBJ_FINISH = exports.CREATE_OBJ_FAILED = exports.CREATE_OBJ_FINISH = exports.CREATE_OBJ_START = undefined;
exports.createObjStart = createObjStart;
exports.createObjFinish = createObjFinish;
exports.createObjFailed = createObjFailed;
exports.objDeleted = objDeleted;
exports.createObj = createObj;

var _obj_source = __webpack_require__(38);

var _underscore = __webpack_require__(11);

var CREATE_OBJ_START = exports.CREATE_OBJ_START = 'CREATE_OBJ_START';
var CREATE_OBJ_FINISH = exports.CREATE_OBJ_FINISH = 'CREATE_OBJ_FINISH';
var CREATE_OBJ_FAILED = exports.CREATE_OBJ_FAILED = 'CREATE_OBJ_FAILED';
var DELETE_OBJ_FINISH = exports.DELETE_OBJ_FINISH = 'DELETE_OBJ_FINISH';

function createObjStart(additionId, filename) {
  return { type: CREATE_OBJ_START, additionId: additionId, filename: filename, progress: 10 };
}

function createObjFinish(additionId, objId, isLastAddedVisible) {
  return { type: CREATE_OBJ_FINISH, additionId: additionId, objId: objId, isLastAddedVisible: isLastAddedVisible };
}

function createObjFailed(additionId, message) {
  return { type: CREATE_OBJ_FAILED, additionId: additionId, message: message };
}

function getTagsAttributes(objClassName, activeTags) {
  if (activeTags.length > 0 && scrivito.hasTagsAttribute(objClassName)) {
    return { tags: activeTags };
  }
}

function objDeleted(objId) {
  scrivito.delete_obj(objId);
  return { type: DELETE_OBJ_FINISH, objId: objId };
}

function createObj() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var basePreset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var preset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var activeTags = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  return function (dispatch, getState) {
    var additionId = (0, _underscore.uniqueId)('addition');

    var objClassName = attributes._obj_class || preset._obj_class || basePreset._obj_class;
    var tags = getTagsAttributes(objClassName, activeTags) || {};

    var extendedAtrributes = (0, _underscore.extend)({}, basePreset, tags, preset, attributes);

    var filename = void 0;
    if (extendedAtrributes.blob) {
      filename = extendedAtrributes.blob.name;
    }
    dispatch(createObjStart(additionId, filename));

    return scrivito.create_obj(extendedAtrributes).then(function (obj) {
      var isLastAddedVisible = getState().objSource.activeSource === _obj_source.LAST_ADDED;
      dispatch(createObjFinish(additionId, obj.id, isLastAddedVisible));
    }).fail(function (error) {
      var message = void 0;
      if (error) {
        message = error.message;
      }
      dispatch(createObjFailed(additionId, message));
    });
  };
}

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setObjSource = setObjSource;
var SET_OBJ_SOURCE = exports.SET_OBJ_SOURCE = 'SET_OBJ_SOURCE';
var FILTER = exports.FILTER = 'FILTER';
var LAST_ADDED = exports.LAST_ADDED = 'LAST_ADDED';
var SELECTED = exports.SELECTED = 'SELECTED';

function setObjSource(activeSource) {
  return { type: SET_OBJ_SOURCE, activeSource: activeSource };
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = createStoreShape;

function createStoreShape(PropTypes) {
  return PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  });
}

module.exports = exports["default"];

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setViewMode = setViewMode;
var THUMBNAIL_VIEW = exports.THUMBNAIL_VIEW = 'THUMBNAIL_VIEW';
var TABLE_VIEW = exports.TABLE_VIEW = 'TABLE_VIEW';
var SET_VIEW_MODE = exports.SET_VIEW_MODE = 'SET_VIEW_MODE';

function setViewMode(viewMode) {
  return { type: SET_VIEW_MODE, viewMode: viewMode };
}

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(999);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createStore;



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _listenable = __webpack_require__(524);

var _listenable2 = _interopRequireDefault(_listenable);

var _radio_filter = __webpack_require__(527);

var _radio_filter2 = _interopRequireDefault(_radio_filter);

var _tree_filter = __webpack_require__(529);

var _tree_filter2 = _interopRequireDefault(_tree_filter);

var _checkbox_filter = __webpack_require__(521);

var _checkbox_filter2 = _interopRequireDefault(_checkbox_filter);

var _default_filter_definition = __webpack_require__(523);

var _default_filter_definition2 = _interopRequireDefault(_default_filter_definition);

var _underscore = __webpack_require__(11);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var resolveFunction = function resolveFunction(objectOrFunction, context) {
  if (typeof objectOrFunction === 'function') {
    return objectOrFunction(context || {});
  }

  return objectOrFunction;
};

var Filter = function (_Listenable) {
  _inherits(Filter, _Listenable);

  function Filter(filterDefinitionOrFunction, filterContext) {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    var filterDefinition = resolveFunction(filterDefinitionOrFunction, filterContext);

    if (_underscore2.default.isEmpty(filterDefinition)) {
      filterDefinition = resolveFunction(_default_filter_definition2.default, filterContext);
    }
    _this.initFilters(filterDefinition);
    return _this;
  }

  _createClass(Filter, [{
    key: 'deselectHierarchicalFilters',
    value: function deselectHierarchicalFilters() {
      return _underscore2.default.each(this.getHierarchicalFilters(), function (filter) {
        return filter.deselect();
      });
    }
  }, {
    key: 'setSearchTerm',
    value: function setSearchTerm(newTerm) {
      this.searchTerm = newTerm;
      this.changed();
    }
  }, {
    key: 'getAllFilters',
    value: function getAllFilters() {
      return _underscore2.default.union(this.getHierarchicalFilters(), this.additionalFilters);
    }
  }, {
    key: 'hasActiveChildren',
    value: function hasActiveChildren() {
      return _underscore2.default.some(this.getAllFilters(), function (subFilter) {
        return subFilter.hasActiveChildren();
      });
    }
  }, {
    key: 'getHierarchicalFilters',
    value: function getHierarchicalFilters() {
      return _underscore2.default.flatten(_underscore2.default.map(this.getTreeFilters(), function (filter) {
        return filter.subFilters;
      }));
    }
  }, {
    key: 'getTreeFilters',
    value: function getTreeFilters() {
      return this.treeFilters;
    }
  }, {
    key: 'hasHierarchicalFilters',
    value: function hasHierarchicalFilters() {
      return this.treeFilters.length > 0;
    }
  }, {
    key: 'hasAdditionalFilters',
    value: function hasAdditionalFilters() {
      return this.additionalFilters.length > 0;
    }
  }, {
    key: 'initFilters',
    value: function initFilters(filterDefinition) {
      var _this2 = this;

      this.treeFilters = [];
      this.additionalFilters = [];

      return function () {
        var result = [];
        _underscore2.default.each(Object.keys(filterDefinition || {}), function (name) {
          var definition = filterDefinition[name];

          if (definition) {
            var item = void 0;
            if (!definition.type || definition.type === 'tree') {
              var subFilters = [];

              _underscore2.default.each(definition.options, function (optionDefinition, title) {
                return subFilters.push(new _tree_filter2.default(_this2, title, optionDefinition));
              });

              _this2.treeFilters.push({
                config: definition,
                subFilters: subFilters
              });
            }
            if (definition.type === 'radio_button') {
              _this2.additionalFilters.push(new _radio_filter2.default(_this2, name, definition));
            }
            if (definition.type === 'check_box') {
              item = _this2.additionalFilters.push(new _checkbox_filter2.default(_this2, name, definition));
            }
            result.push(item);
          }
        });

        return result;
      }();
    }
  }]);

  return Filter;
}(_listenable2.default);

exports.default = Filter;

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

var App, AppContainer, Filter, Footer, InspectorComponent, Items, LAST_ADDED, ReactRedux, TopBar, changeSelectionMode, createObj, deselectObjs, disableTags, fetchTags, objDeleted, redux, setObjSource, toggleSelect, _ref, _ref1, _ref2, _ref3;

TopBar = __webpack_require__(721);

Filter = __webpack_require__(690);

Items = __webpack_require__(700);

InspectorComponent = __webpack_require__(518)["default"];

Footer = __webpack_require__(698);

ReactRedux = __webpack_require__(78);

redux = __webpack_require__(108);

_ref = __webpack_require__(38), setObjSource = _ref.setObjSource, LAST_ADDED = _ref.LAST_ADDED;

_ref1 = __webpack_require__(37), createObj = _ref1.createObj, objDeleted = _ref1.objDeleted;

_ref2 = __webpack_require__(111), fetchTags = _ref2.fetchTags, disableTags = _ref2.disableTags;

_ref3 = __webpack_require__(80), toggleSelect = _ref3.toggleSelect, changeSelectionMode = _ref3.changeSelectionMode, deselectObjs = _ref3.deselectObjs;

App = React.createClass({
  displayName: 'App',
  updateFilter: function(filter) {
    return this.setState({
      filter: filter
    });
  },
  createObj: function(attributes, basePreset, preset, activeTags) {
    return this.props.dispatch(createObj(attributes, basePreset, preset, activeTags));
  },
  destroyObj: function(objId) {
    return this.props.dispatch(objDeleted(objId));
  },
  toggleObjSelection: function(objId) {
    return this.props.dispatch(toggleSelect(objId));
  },
  deselectObjs: function() {
    return this.props.dispatch(deselectObjs());
  },
  setObjSource: function(activeSource) {
    return this.props.dispatch(setObjSource(activeSource));
  },
  activateInitialFilter: function() {
    if (this.refs.filterView.activateInitialFilter) {
      if (this.props.options.selection) {
        _.map(this.props.options.selection, (function(_this) {
          return function(objId) {
            return _this.toggleObjSelection(objId);
          };
        })(this));
      }
      return this.refs.filterView.activateInitialFilter();
    }
  },
  componentDidMount: function() {
    this.props.dispatch(changeSelectionMode(this.props.options.selection_mode));
    this.state.filter.onChange(this.updateFilter);
    return this.activateInitialFilter();
  },
  getInitialState: function() {
    return {
      filter: this.props.initialFilter
    };
  },
  _getBodyClassName: function() {
    if (this.props.inspector.isMaximized) {
      return "scrivito-content-browser-body scrivito-content-browser-inspector-max";
    } else {
      return "scrivito-content-browser-body";
    }
  },
  render: function() {
    return React.createElement("div", {
      "className": "scrivito-app-root"
    }, React.createElement("div", {
      "className": this._getBodyClassName()
    }, React.createElement("div", {
      "className": "scrivito-content-browser-wrapper"
    }, React.createElement(TopBar, {
      "filter": this.state.filter,
      "standAlone": this.props.options.standAlone
    }), React.createElement(Filter, {
      "ref": "filterView",
      "filter": this.state.filter,
      "standAlone": this.props.options.standAlone,
      "additionCount": this.props.lastAdded.additions.length,
      "deselectObjs": this.deselectObjs,
      "initialSelection": this.props.options.selection || [],
      "selectedObjs": this.props.selection.selectedObjs,
      "setObjSource": this.setObjSource,
      "activeSource": this.props.objSource.activeSource
    }), React.createElement(Items, {
      "ref": "itemView",
      "createObj": this.createObj,
      "tags": this.props.tags,
      "dispatch": this.props.dispatch,
      "basePreset": this.props.options.base_preset,
      "viewMode": this.props.objDisplay.viewMode,
      "lastAdded": this.props.lastAdded,
      "toggleObjSelection": this.toggleObjSelection,
      "selectedObjs": this.props.selection.selectedObjs,
      "selectionMode": this.props.selection.selectionMode,
      "setObjSource": this.setObjSource,
      "activeSource": this.props.objSource.activeSource,
      "baseQuery": this.props.baseQuery,
      "numToLoad": this.props.objLoad.numToLoad,
      "sortCriteria": this.props.sortCriteria,
      "currentlyAndPreviouslySelectedObjIds": this.props.selection.currentlyAndPreviouslySelectedObjIds,
      "filter": this.state.filter,
      "editingView": this.props.options.editingView
    })), React.createElement(InspectorComponent, {
      "dispatch": this.props.dispatch,
      "editingView": this.props.options.editingView,
      "disableDelete": !!this.props.options.disableDelete,
      "selectedObjs": this.props.selection.selectedObjs
    })), React.createElement(Footer, {
      "promise": this.props.promise,
      "dispatch": this.props.dispatch,
      "editingView": this.props.options.editingView,
      "disableDelete": this.props.options.disableDelete,
      "selectedObjs": this.props.selection.selectedObjs,
      "standAlone": this.props.options.standAlone
    }));
  }
});

AppContainer = ReactRedux.connect((function(_this) {
  return function(state) {
    return state;
  };
})(this))(App);

module.exports = {
  App: App,
  AppContainer: AppContainer
};


/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

var DialogApp, DialogBody, DialogHeader;

DialogHeader = __webpack_require__(689);

DialogBody = __webpack_require__(688);

DialogApp = React.createClass({
  displayName: 'DialogApp',
  dialogClassName: function() {
    return "scrivito_prompt_dialog scrivito_center_dialog scrivito_modal_prompt scrivito_show scrivito_red";
  },
  showConfirmButton: function() {
    return this.props.mode === "confirm";
  },
  closeButtonText: function() {
    if (this.showConfirmButton()) {
      return "Cancel";
    } else {
      return "Close";
    }
  },
  resolveAndClose: function(event) {
    this.props.promise.resolve();
    return this.closeDialog(event);
  },
  rejectAndClose: function(event) {
    this.props.promise.reject();
    return this.closeDialog(event);
  },
  closeDialog: function(event) {
    event.preventDefault();
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.props.container));
    return this.props.container.parentNode.removeChild(this.props.container);
  },
  render: function() {
    return React.createElement("div", null, React.createElement("div", {
      "className": "scrivito_overlay two scrivito_show",
      "style": {
        zIndex: 4444444
      }
    }), React.createElement("div", {
      "className": this.dialogClassName(),
      "style": {
        zIndex: 4444444
      }
    }, React.createElement(DialogHeader, {
      "title": this.props.title,
      "subtitle": this.props.subtitle
    }), React.createElement(DialogBody, {
      "body": this.props.body
    }), React.createElement("div", {
      "className": "scrivito_modal_footer"
    }, React.createElement("a", {
      "className": "scrivito_button scrivito_cancel",
      "onClick": this.rejectAndClose
    }, this.closeButtonText()), (this.showConfirmButton() ? React.createElement("a", {
      "className": "scrivito_button scrivito_red scrivito_confirm",
      "onClick": this.resolveAndClose
    }, "Confirm") : void 0))));
  }
});

module.exports = DialogApp;


/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

var applyMiddleware, combinedReducer, configureStore, createStore, thunkMiddleware, _ref;

thunkMiddleware = __webpack_require__(995);

_ref = __webpack_require__(108), createStore = _ref.createStore, applyMiddleware = _ref.applyMiddleware;

combinedReducer = __webpack_require__(727);

configureStore = function(initialState) {
  var createStoreWithMiddleware;
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
  return createStoreWithMiddleware(combinedReducer, initialState);
};

module.exports = configureStore;


/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(726);

__webpack_require__(725);


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inspector_header = __webpack_require__(699);

var _inspector_header2 = _interopRequireDefault(_inspector_header);

var _spinner = __webpack_require__(270);

var _spinner2 = _interopRequireDefault(_spinner);

var _obj = __webpack_require__(37);

var _underscore = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Inspector = React.createClass({
  displayName: 'Inspector',
  propTypes: {
    editingView: React.PropTypes.bool.isRequired,
    disableDelete: React.PropTypes.bool.isRequired,
    selectedObjs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    dispatch: React.PropTypes.func.isRequired
  },

  getInitialState: function getInitialState() {
    return { isLoaded: false };
  },
  componentWillUpdate: function componentWillUpdate(nextProps) {
    if (this.state.isLoaded && !(0, _underscore.isEqual)(this.props.selectedObjs, nextProps.selectedObjs)) {
      this.setState({ isLoaded: false });
    }
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'scrivito-content-browser-inspector' },
      this._renderContent()
    );
  },
  _renderContent: function _renderContent() {
    var _props = this.props,
        selectedObjs = _props.selectedObjs,
        editingView = _props.editingView,
        disableDelete = _props.disableDelete,
        dispatch = _props.dispatch;


    if (!selectedObjs.length) {
      return null;
    }

    if (selectedObjs.length === 1) {
      return React.createElement(
        'div',
        null,
        React.createElement(_inspector_header2.default, {
          editingView: editingView,
          disableDelete: disableDelete,
          dispatch: dispatch,
          selectedObjs: selectedObjs,
          deleteInspectedObjs: this._deleteInspectedObjs
        }),
        React.createElement(
          'div',
          { className: 'inspector-content' },
          this._renderLoader(),
          React.createElement('iframe', {
            name: 'scrivito_inspector',
            className: this.state.isLoaded ? undefined : 'scrivito_hidden',
            src: this._detailsViewUrl(),
            onLoad: this._onLoad
          })
        )
      );
    }

    return React.createElement(_inspector_header2.default, {
      editingView: editingView,
      disableDelete: disableDelete,
      dispatch: dispatch,
      selectedObjs: selectedObjs,
      deleteInspectedObjs: this._deleteInspectedObjs
    });
  },
  _renderLoader: function _renderLoader() {
    if (!this.state.isLoaded) {
      return React.createElement(_spinner2.default, null);
    }
  },
  _detailsViewUrl: function _detailsViewUrl() {
    return scrivito.details_url_for_obj_id(this.props.selectedObjs[0]);
  },
  _onLoad: function _onLoad() {
    this.setState({ isLoaded: true });
  },
  _deleteInspectedObjs: function _deleteInspectedObjs() {
    var _props2 = this.props,
        selectedObjs = _props2.selectedObjs,
        dispatch = _props2.dispatch;

    if (selectedObjs.length) {
      var _scrivito$ConfirmDele;

      (_scrivito$ConfirmDele = scrivito.ConfirmDeleteDialog).open.apply(_scrivito$ConfirmDele, _toConsumableArray(selectedObjs)).then(function (isConfirmed) {
        if (isConfirmed) {
          (0, _underscore.each)(selectedObjs, function (objId) {
            return dispatch((0, _obj.objDeleted)(objId));
          });
        }
      });
    }
  }
});

exports.default = Inspector;

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _thumbnail_item = __webpack_require__(223);

var _thumbnail_item2 = _interopRequireDefault(_thumbnail_item);

var _thumbnail_add_item = __webpack_require__(720);

var _thumbnail_add_item2 = _interopRequireDefault(_thumbnail_add_item);

var _infinite_scroll_loader = __webpack_require__(333);

var _infinite_scroll_loader2 = _interopRequireDefault(_infinite_scroll_loader);

var _obj_creation = __webpack_require__(273);

var _obj_creation2 = _interopRequireDefault(_obj_creation);

var _underscore = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThumbnailItems = scrivito.createReactClass({
  render: function render() {
    var _props = this.props,
        isLoading = _props.isLoading,
        fetch = _props.fetch,
        hasMore = _props.hasMore;


    return React.createElement(
      _infinite_scroll_loader2.default,
      {
        tag: 'ul',
        className: 'items scrivito-content-browser-thumbnails small',
        isLoading: isLoading,
        hasMore: hasMore,
        fetch: fetch
      },
      this._renderCreationItem(),
      this._renderItems()
    );
  },
  _renderCreationItem: function _renderCreationItem() {
    var _props2 = this.props,
        activeTags = _props2.activeTags,
        basePreset = _props2.basePreset,
        createObj = _props2.createObj,
        editingView = _props2.editingView,
        filter = _props2.filter;

    var objCreation = new _obj_creation2.default(filter);

    if (objCreation.showCreationItem() && editingView) {
      return React.createElement(_thumbnail_add_item2.default, {
        activeTags: activeTags,
        objCreation: objCreation,
        basePreset: basePreset,
        createObj: createObj
      });
    }
  },
  _renderItems: function _renderItems() {
    var _props3 = this.props,
        objs = _props3.objs,
        selectedObjs = _props3.selectedObjs,
        selectionMode = _props3.selectionMode,
        toggleObjSelection = _props3.toggleObjSelection;


    var withoutDeleted = (0, _underscore.reject)(objs, function (obj) {
      return obj.isDeleted();
    });
    return (0, _underscore.map)(withoutDeleted, function (obj) {
      return React.createElement(_thumbnail_item2.default, { key: obj.id,
        selectedObjs: selectedObjs,
        objId: obj.id,
        baseSelectClass: 'scrivito-content-browser-meta',
        toggleObjSelection: toggleObjSelection,
        selectionMode: selectionMode
      });
    });
  }
});

exports.default = ThumbnailItems;

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = __webpack_require__(11);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var valueForNode = function valueForNode(node) {
  if (node.value === undefined) {
    return node.name;
  }
  return node.value;
};

var findConfig = function findConfig(attrName, activeNodes, parents) {
  var activeNode = activeNodes[0];
  if (_underscore2.default.last(parents).type !== 'checkbox' && activeNode[attrName]) {
    return activeNode[attrName];
  }

  var parentWithAttribute = _underscore2.default.find(parents, function (node) {
    return node[attrName];
  });
  return parentWithAttribute && parentWithAttribute[attrName];
};

// This class is tested in the QueryBuilder specs for now

var ActiveNodeConfig = function () {
  function ActiveNodeConfig(parentNodes, nodes) {
    _classCallCheck(this, ActiveNodeConfig);

    this.parents = parentNodes;
    this.nodes = nodes;
  }

  _createClass(ActiveNodeConfig, [{
    key: 'activeNodes',
    value: function activeNodes() {
      return this.nodes;
    }
  }, {
    key: 'values',
    value: function values() {
      return _underscore2.default.flatten(_underscore2.default.map(this.activeNodes(), valueForNode));
    }
  }, {
    key: 'query',
    value: function query() {
      return _underscore2.default.last(this.parents).type !== 'checkbox' && this.activeNodes()[0].query;
    }
  }, {
    key: 'hasQuery',
    value: function hasQuery() {
      return !!this.query();
    }
  }, {
    key: 'field',
    value: function field() {
      return findConfig('field', this.activeNodes(), this.parents);
    }
  }, {
    key: 'hasField',
    value: function hasField() {
      return !!this.field();
    }
  }, {
    key: 'preventsCreation',
    value: function preventsCreation() {
      return this.nodesPreventingCreation().length > 0;
    }
  }, {
    key: 'nodesPreventingCreation',
    value: function nodesPreventingCreation() {
      return _underscore2.default.select(this.activeNodes(), function (node) {
        return node.enable_create === false;
      });
    }
  }, {
    key: 'enablesCreation',
    value: function enablesCreation() {
      return _underscore2.default.some(this.activeNodes(), function (node) {
        return node.enable_create === true;
      });
    }
  }, {
    key: 'operator',
    value: function operator() {
      return findConfig('operator', this.activeNodes(), this.parents) || 'equals';
    }
  }]);

  return ActiveNodeConfig;
}();

exports.default = ActiveNodeConfig;

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox_option = __webpack_require__(522);

var _checkbox_option2 = _interopRequireDefault(_checkbox_option);

var _filter_collection_node = __webpack_require__(272);

var _filter_collection_node2 = _interopRequireDefault(_filter_collection_node);

var _underscore = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxFilter = function (_FilterCollectionNode) {
  _inherits(CheckboxFilter, _FilterCollectionNode);

  function CheckboxFilter(filter, name, filterDefinition) {
    _classCallCheck(this, CheckboxFilter);

    var _this = _possibleConstructorReturn(this, (CheckboxFilter.__proto__ || Object.getPrototypeOf(CheckboxFilter)).call(this, filter, name, filterDefinition));

    _this.type = 'checkbox';
    _this.children = (0, _underscore.map)(filterDefinition.options, function (definition, title) {
      return new _checkbox_option2.default(filter, title, definition);
    });
    return _this;
  }

  return CheckboxFilter;
}(_filter_collection_node2.default);

exports.default = CheckboxFilter;

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _filter_node = __webpack_require__(82);

var _filter_node2 = _interopRequireDefault(_filter_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxOption = function (_FilterNode) {
  _inherits(CheckboxOption, _FilterNode);

  function CheckboxOption(filter, name, filterDefinition) {
    _classCallCheck(this, CheckboxOption);

    var _this = _possibleConstructorReturn(this, (CheckboxOption.__proto__ || Object.getPrototypeOf(CheckboxOption)).call(this, filter, name, filterDefinition));

    _this.value = filterDefinition.value;
    _this.preset = filterDefinition.preset;
    _this.enable_create = filterDefinition.enable_create;


    _this.active = filterDefinition.selected;
    return _this;
  }

  _createClass(CheckboxOption, [{
    key: 'toggleActive',
    value: function toggleActive() {
      this.active = !this.active;
      return this.filter.changed();
    }
  }, {
    key: 'isActive',
    value: function isActive() {
      return !!this.active;
    }
  }]);

  return CheckboxOption;
}(_filter_node2.default);

exports.default = CheckboxOption;

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultFilterDefinition;
function defaultFilterDefinition(context) {
  var options = void 0;
  if (context._image) {
    options = {
      Images: {
        icon: 'image',
        selected: true,
        query: scrivito.obj_where('_obj_class', 'equals', 'Image'),
        preset: {
          _obj_class: 'Image'
        }
      }
    };
  } else {
    options = {
      All: {
        icon: 'generic',
        selected: true,
        query: scrivito.obj_where('_last_changed', 'is_greater_than', new Date(0))
      },
      Images: {
        icon: 'image',
        query: scrivito.obj_where('_obj_class', 'equals', 'Image'),
        preset: {
          _obj_class: 'Image'
        }
      },
      Downloads: {
        query: scrivito.obj_where('_obj_class', 'equals', 'Download'),
        icon: 'zip',
        preset: {
          _obj_class: 'Download'
        }
      }
    };
  }
  return {
    _obj_class: {
      options: options
    },
    _last_changed: {
      title: 'Changed',
      type: 'check_box',
      expanded: true,
      field: '_modification',
      operator: 'equals',
      options: {
        New: {
          value: ['new']
        },
        Edited: {
          value: ['edited']
        }
      }
    }
  };
}

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = __webpack_require__(11);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Listenable = function () {
  function Listenable() {
    _classCallCheck(this, Listenable);

    this.callbacks = {};
  }

  _createClass(Listenable, [{
    key: 'on',
    value: function on(eventName, callback) {
      if (!this.callbacks[eventName]) {
        this.callbacks[eventName] = [];
      }
      this.callbacks[eventName].push(callback);
    }
  }, {
    key: 'trigger',
    value: function trigger(eventName, listOfParams) {
      var _this = this;

      var callbacks = this.callbacks[eventName];
      var params = [listOfParams];
      if (callbacks) {
        (0, _underscore.each)(callbacks, function (callback) {
          callback.apply(_this, params);
        });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(callback) {
      this.on('change', callback);
    }
  }, {
    key: 'changed',
    value: function changed() {
      this.trigger('change', this);
    }
  }]);

  return Listenable;
}();

exports.default = Listenable;

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMimeTypeIconClassName;

var _underscore = __webpack_require__(11);

var MIME_TYPES_HASH = {
  video: 'scrivito_icon_movie',
  audio: 'scrivito_icon_music',
  msword: 'scrivito_icon_doc',
  zip: 'scrivito_icon_zip',
  pdf: 'scrivito_icon_pdf',
  'ms-excel': 'scrivito_icon_xls',
  'ms-powerpoint': 'scrivito_icon_ppt',
  'openxmlformats-officedocument.spreadsheetml': 'scrivito_icon_xls',
  wordprocessingml: 'scrivito_icon_doc',
  presentationml: 'scrivito_icon_ppt'
};

var getMatchedIconType = function getMatchedIconType(mimeType) {
  return (0, _underscore.find)(Object.keys(MIME_TYPES_HASH), function (keyName) {
    return mimeType.match(new RegExp('\\b' + keyName + '\\b'));
  });
};

function getMimeTypeIconClassName(mimeType) {
  var icon = void 0;
  if (mimeType) {
    var matchedType = getMatchedIconType(mimeType);
    icon = MIME_TYPES_HASH[matchedType];
  }

  if (!icon) {
    icon = 'scrivito_icon_generic';
  }

  return icon;
}

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _active_node_config_collector = __webpack_require__(81);

var _active_node_config_collector2 = _interopRequireDefault(_active_node_config_collector);

var _sort_criteria = __webpack_require__(110);

var _underscore = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QueryBuilder = function () {
  function QueryBuilder(filter, baseQuery, tags, sortCriteria) {
    _classCallCheck(this, QueryBuilder);

    this.filter = filter;
    this.tags = tags;
    this.sortCriteria = sortCriteria;
    this.collector = new _active_node_config_collector2.default(this.filter);

    if (!this.sortCriteria) {
      throw new Error('sortCriteria is not initialized. Please explicit initialize the sort criteria param');
    }

    if (baseQuery) {
      this.baseQuery = baseQuery.to_basic_obj_search_iterable();
    }
  }

  _createClass(QueryBuilder, [{
    key: 'searchRequest',
    value: function searchRequest() {
      var query = this.baseQuery;
      query = this.addFilterQueries(query);
      query = this.addSearchTermQuery(query);
      query = this.sortQuery(query);
      query = this.tagsQuery(query);
      query = QueryBuilder.ignoreMigrationStore(query);
      return query;
    }
  }, {
    key: 'tagsQuery',
    value: function tagsQuery(query) {
      if (this.tags && this.tags.length > 0) {
        (0, _underscore.each)(this.tags, function (tag) {
          if (query) {
            query.and('tags', 'equals', tag);
          }
        });
      }
      return query;
    }
  }, {
    key: 'addFilterQueries',
    value: function addFilterQueries(baseQuery) {
      var combinedQuery = baseQuery;
      var activeItems = this.collector.findActiveFilterItems();
      (0, _underscore.each)(activeItems, function (activeConfig) {
        var searchQuery = QueryBuilder.buildActiveChildrenSearchQuery(activeConfig);
        if (searchQuery) {
          combinedQuery = QueryBuilder.addOrCreateQuery(combinedQuery, searchQuery);
        }
      });

      return combinedQuery;
    }
  }, {
    key: 'sortQuery',
    value: function sortQuery(query) {
      if (query) {
        if (this.sortCriteria.sortField === 'relevance') {
          if (!this.hasSearchTerm()) {
            query.order('_lastChanged', _sort_criteria.DESC_SORT_ORDER);
          }
        } else {
          query.order(this.sortCriteria.sortField, this.sortCriteria.sortDirection);
        }
      }
      return query;
    }
  }, {
    key: 'addSearchTermQuery',
    value: function addSearchTermQuery(query) {
      if (this.hasSearchTerm()) {
        var searchQuery = scrivito.BasicObj.where('*', 'containsPrefix', this.filter.searchTerm);
        return QueryBuilder.addOrCreateQuery(query, searchQuery);
      }
      return query;
    }
  }, {
    key: 'hasSearchTerm',
    value: function hasSearchTerm() {
      return this.filter.searchTerm && this.filter.searchTerm.length > 0;
    }
  }], [{
    key: 'ignoreMigrationStore',
    value: function ignoreMigrationStore(query) {
      if (query) {
        query.andNot('_objClass', 'equals', 'MigrationStore');
      }
      return query;
    }
  }, {
    key: 'buildActiveChildrenSearchQuery',
    value: function buildActiveChildrenSearchQuery(activeConfig) {
      if (activeConfig.hasQuery()) {
        return activeConfig.query().to_basic_obj_search_iterable();
      }
      return QueryBuilder.buildFOVQuery(activeConfig);
    }
  }, {
    key: 'buildFOVQuery',
    value: function buildFOVQuery(activeConfig) {
      if (activeConfig.hasField()) {
        return scrivito.BasicObj.where(scrivito.attributeInflection.camelCase(activeConfig.field()), scrivito.attributeInflection.camelCase(activeConfig.operator()), activeConfig.values());
      }
    }
  }, {
    key: 'addOrCreateQuery',
    value: function addOrCreateQuery(oldQuery, newQuery) {
      if (oldQuery) {
        return oldQuery.and(newQuery);
      }
      return newQuery;
    }
  }]);

  return QueryBuilder;
}();

exports.default = QueryBuilder;

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _filter_collection_node = __webpack_require__(272);

var _filter_collection_node2 = _interopRequireDefault(_filter_collection_node);

var _radio_option = __webpack_require__(528);

var _radio_option2 = _interopRequireDefault(_radio_option);

var _underscore = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioFilter = function (_FilterCollectionNode) {
  _inherits(RadioFilter, _FilterCollectionNode);

  function RadioFilter(filter, name, filterDefinition) {
    _classCallCheck(this, RadioFilter);

    var _this = _possibleConstructorReturn(this, (RadioFilter.__proto__ || Object.getPrototypeOf(RadioFilter)).call(this, filter, name, filterDefinition));

    _this.type = 'radio';
    _this.children = (0, _underscore.map)(filterDefinition.options, function (definition, title) {
      return new _radio_option2.default(_this, title, definition);
    });
    return _this;
  }

  _createClass(RadioFilter, [{
    key: 'activate',
    value: function activate(radioOption) {
      (0, _underscore.each)(this.children, function (child) {
        child.active = child === radioOption;
      });

      this.filter.changed();
    }
  }, {
    key: 'deactivateAll',
    value: function deactivateAll() {
      this.deselect();
      this.filter.changed();
    }
  }]);

  return RadioFilter;
}(_filter_collection_node2.default);

exports.default = RadioFilter;

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _filter_node = __webpack_require__(82);

var _filter_node2 = _interopRequireDefault(_filter_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioOption = function (_FilterNode) {
  _inherits(RadioOption, _FilterNode);

  function RadioOption(group, name, filterDefinition) {
    _classCallCheck(this, RadioOption);

    var _this = _possibleConstructorReturn(this, (RadioOption.__proto__ || Object.getPrototypeOf(RadioOption)).call(this, group.filter, name, filterDefinition));

    _this.value = filterDefinition.value;
    _this.query = filterDefinition.query;
    _this.preset = filterDefinition.preset;
    _this.enable_create = filterDefinition.enable_create;


    _this.group = group;
    _this.active = filterDefinition.selected;
    return _this;
  }

  _createClass(RadioOption, [{
    key: 'setActive',
    value: function setActive() {
      return this.group.activate(this);
    }
  }, {
    key: 'isActive',
    value: function isActive() {
      return !!this.active;
    }
  }]);

  return RadioOption;
}(_filter_node2.default);

exports.default = RadioOption;

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _filter_node = __webpack_require__(82);

var _filter_node2 = _interopRequireDefault(_filter_node);

var _underscore = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeFilter = function (_FilterNode) {
  _inherits(TreeFilter, _FilterNode);

  function TreeFilter(filter, name, filterDefinition) {
    _classCallCheck(this, TreeFilter);

    var _this = _possibleConstructorReturn(this, (TreeFilter.__proto__ || Object.getPrototypeOf(TreeFilter)).call(this, filter, name, filterDefinition));

    _this.type = 'tree';
    _this.icon = filterDefinition.icon;
    _this.query = filterDefinition.query;
    _this.expanded = filterDefinition.expanded;
    _this.value = filterDefinition.value;
    _this.field = filterDefinition.field;
    _this.operator = filterDefinition.operator;
    _this.preset = filterDefinition.preset;
    _this.enable_create = filterDefinition.enable_create;


    _this.active = filterDefinition.selected;

    var childrenDefinition = filterDefinition.options || [];
    _this.children = (0, _underscore.map)(childrenDefinition, function (definition, title) {
      return new TreeFilter(filter, title, definition);
    });
    return _this;
  }

  _createClass(TreeFilter, [{
    key: 'isLeaf',
    value: function isLeaf() {
      return this.children.length === 0;
    }
  }, {
    key: 'isExpanded',
    value: function isExpanded() {
      return !!this.expanded;
    }
  }, {
    key: 'isActive',
    value: function isActive() {
      return !!this.active;
    }
  }, {
    key: 'toggleActive',
    value: function toggleActive() {
      if (this.isActive()) {
        this.active = false;
      } else {
        this.filter.deselectHierarchicalFilters();
        this.active = true;
      }

      this.filter.changed();
    }
  }, {
    key: 'hasActiveChildren',
    value: function hasActiveChildren() {
      return this.isActive() || (0, _underscore.some)(this.children, function (child) {
        return child.isActive();
      });
    }
  }, {
    key: 'deselect',
    value: function deselect() {
      this.active = false;

      (0, _underscore.each)(this.children, function (filter) {
        return filter.deselect();
      });
    }
  }]);

  return TreeFilter;
}(_filter_node2.default);

exports.default = TreeFilter;

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = objDisplayReducer;

var _obj_display = __webpack_require__(50);

function objDisplayReducer(state, action) {
  switch (action.type) {
    case _obj_display.SET_VIEW_MODE:
      return { viewMode: action.viewMode };
    default:
      return state || { viewMode: _obj_display.THUMBNAIL_VIEW };
  }
}

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

var DialogBody;

DialogBody = React.createClass({
  displayName: 'DialogBody',
  render: function() {
    return React.createElement("div", {
      "className": "scrivito_modal_body"
    }, this.props.body);
  }
});

module.exports = DialogBody;


/***/ }),

/***/ 689:
/***/ (function(module, exports) {

var DialogHeader;

DialogHeader = React.createClass({
  displayName: 'DialogHeader',
  render: function() {
    return React.createElement("div", {
      "className": "scrivito_modal_header"
    }, React.createElement("i", {
      "className": "scrivito_icon scrivito_icon_error"
    }), React.createElement("h3", {
      "className": "scrivito_title"
    }, this.props.title), (this.props.subtitle ? React.createElement("p", {
      "className": "scrivito_description"
    }, this.props.subtitle) : void 0));
  }
});

module.exports = DialogHeader;


/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

var AdditionalOptionFilter, FILTER, Filter, FilterMixin, LAST_ADDED, LastAddedFilter, SELECTED, SelectedFilter, TreeFilter, _ref;

FilterMixin = __webpack_require__(724);

AdditionalOptionFilter = __webpack_require__(691);

TreeFilter = __webpack_require__(697);

SelectedFilter = __webpack_require__(696);

_ref = __webpack_require__(38), SELECTED = _ref.SELECTED, LAST_ADDED = _ref.LAST_ADDED, FILTER = _ref.FILTER;

LastAddedFilter = __webpack_require__(694);

Filter = React.createClass({
  displayName: 'Filter',
  mixins: [FilterMixin],
  renderAdditionalFilters: function() {
    var subFilters;
    subFilters = _.map(this.props.filter.additionalFilters, function(additionalFilter) {
      return React.createElement(AdditionalOptionFilter, {
        "key": additionalFilter.field,
        "filter": additionalFilter
      });
    });
    return this.renderSubFiltersList(subFilters, 'compact');
  },
  setFilterObjSource: function() {
    this.props.setObjSource(FILTER);
    return this.props.deselectObjs();
  },
  getFilterClassName: function() {
    var filterBrowserClass;
    filterBrowserClass = 'scrivito-content-browser-filter';
    if (this.props.additionCount > 0 && this.props.standAlone) {
      return filterBrowserClass;
    }
    if (this.props.additionCount > 0) {
      filterBrowserClass += ' last_added';
    }
    if (this.props.standAlone) {
      filterBrowserClass += ' stand-alone';
    }
    return filterBrowserClass;
  },
  componentDidMount: function() {
    return this.props.filter.onChange(this.setFilterObjSource);
  },
  activateInitialFilter: function() {
    if (this.props.initialSelection.length > 0) {
      return this.activateSelectedFilter(this.props.initialSelection);
    } else if (this.props.filter.hasActiveChildren()) {
      return this.setFilterObjSource();
    }
  },
  activateLastAddedFilter: function() {
    this.props.setObjSource(LAST_ADDED);
    this.props.deselectObjs();
    return this.props.filter.deselectHierarchicalFilters();
  },
  activateSelectedFilter: function(selectedObjsIds) {
    this.props.filter.deselectHierarchicalFilters();
    return this.props.setObjSource(SELECTED);
  },
  renderFilterSeparator: function() {
    if (this.props.filter.hasAdditionalFilters() && this.props.filter.hasHierarchicalFilters()) {
      return React.createElement("div", {
        "className": 'scrivito_separator'
      }, scrivito.translate('content_browser.filter.more_filters'));
    }
  },
  render: function() {
    var treeSubFilters;
    treeSubFilters = _.map(this.props.filter.getHierarchicalFilters(), (function(_this) {
      return function(treeFilter) {
        return React.createElement(TreeFilter, {
          "key": treeFilter.name,
          "filter": treeFilter
        });
      };
    })(this));
    return React.createElement("div", {
      "className": this.getFilterClassName()
    }, React.createElement("div", {
      "className": 'scrivito-content-browser-filter-fixed'
    }, (!this.props.standAlone ? React.createElement(SelectedFilter, {
      "selectedObjs": this.props.selectedObjs,
      "active": this.props.activeSource === SELECTED,
      "activateSelectedFilter": this.activateSelectedFilter
    }) : void 0), (this.props.additionCount > 0 ? React.createElement(LastAddedFilter, {
      "addedCount": this.props.additionCount,
      "active": this.props.activeSource === LAST_ADDED,
      "activateLastAddedFilter": this.activateLastAddedFilter
    }) : void 0)), React.createElement("div", {
      "className": 'scrivito-content-browser-filter-scroll'
    }, this.renderSubFiltersList(treeSubFilters), this.renderFilterSeparator(), this.renderAdditionalFilters()));
  }
});

module.exports = Filter;


/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

var AdditionalOptionFilter, CheckBoxOptionFilter, DeselectAllRadioOptionFilter, ExpandableFilterNodeMixin, RadioOptionFilter;

ExpandableFilterNodeMixin = __webpack_require__(335);

DeselectAllRadioOptionFilter = __webpack_require__(693);

RadioOptionFilter = __webpack_require__(695);

CheckBoxOptionFilter = __webpack_require__(692);

AdditionalOptionFilter = React.createClass({
  displayName: 'AdditionalOptionFilter',
  mixins: [ExpandableFilterNodeMixin],
  getInitialState: function() {
    return this.defaultExpansionState();
  },
  getAdditionalLableClasses: function() {
    return this.openClassSetOptions();
  },
  createDeselctAllRadioOption: function() {
    return React.createElement(DeselectAllRadioOptionFilter, {
      "filter": this.props.filter
    });
  },
  renderSubRadioOptionFilters: function() {
    var childKey, element, i, _i, _len, _ref, _results;
    _ref = this.props.filter.children;
    _results = [];
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      element = _ref[i];
      childKey = "" + element.title + "-" + i;
      if (this.props.filter.type === "radio") {
        _results.push(React.createElement(RadioOptionFilter, {
          "key": childKey,
          "filter": element
        }));
      } else if (this.props.filter.type === "checkbox") {
        _results.push(React.createElement(CheckBoxOptionFilter, {
          "key": childKey,
          "filter": element
        }));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  },
  render: function() {
    var labelClasses;
    labelClasses = this.getAdditionalLableClasses();
    return React.createElement("li", {
      "className": labelClasses
    }, this.renderArrowTag(), React.createElement("div", {
      "className": "scrivito-content-browser-hierarchy-label",
      "onClick": this.arrowHandleClick
    }, React.createElement("span", null, this.props.filter.title)), React.createElement("ul", null, (this.props.filter.type === "radio" ? this.createDeselctAllRadioOption() : void 0), this.renderSubRadioOptionFilters()));
  }
});

module.exports = AdditionalOptionFilter;


/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

var CheckBoxOptionFilter, OptionFilterMixin;

OptionFilterMixin = __webpack_require__(339);

CheckBoxOptionFilter = React.createClass({
  displayName: 'CheckBoxOptionFilter',
  mixins: [OptionFilterMixin],
  render: function() {
    return React.createElement("li", {
      "className": this.activeClassName(),
      "onClick": this.optionLabelToggleClick
    }, React.createElement("div", {
      "className": "scrivito-content-browser-hierarchy-checkbox"
    }), this.renderOptionFilterTitle());
  }
});

module.exports = CheckBoxOptionFilter;


/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

var DeselectAllRadioOptionFilter, OptionFilterLabelRenderMixin;

OptionFilterLabelRenderMixin = __webpack_require__(338);

DeselectAllRadioOptionFilter = React.createClass({
  displayName: 'DeselectAllRadioOptionFilter',
  mixins: [OptionFilterLabelRenderMixin],
  getActiveClass: function() {
    if (this.props.filter.hasActiveChildren()) {
      return '';
    } else {
      return "active";
    }
  },
  deselectAllRadioOption: function() {
    return this.props.filter.deactivateAll();
  },
  render: function() {
    return React.createElement("li", {
      "className": this.getActiveClass(),
      "onClick": this.deselectAllRadioOption
    }, React.createElement("div", {
      "className": "scrivito-content-browser-hierarchy-radio"
    }), this.renderHierarchyLabelTitle('All'));
  }
});

module.exports = DeselectAllRadioOptionFilter;


/***/ }),

/***/ 694:
/***/ (function(module, exports) {

var LastAddedFilter;

LastAddedFilter = React.createClass({
  displayName: 'LastAddedFilter',
  filterClass: function() {
    var filterClass;
    filterClass = 'scrivito-content-browser-filter-item';
    if (this.props.active) {
      filterClass += ' active';
    }
    return filterClass;
  },
  render: function() {
    return React.createElement("div", {
      "className": this.filterClass(),
      "onClick": this.props.activateLastAddedFilter
    }, React.createElement("i", {
      "className": "scrivito-content-browser-icon scrivito-content-browser-icon-ok-box"
    }), React.createElement("span", {
      "className": "scrivito-content-browser-filter-label"
    }, scrivito.translate('content_browser.last_added.filter_name'), React.createElement("span", {
      "className": "scrivito-content-browser-counter selected-total"
    }, this.props.addedCount)));
  }
});

module.exports = LastAddedFilter;


/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

var OptionFilterMixin, RadioOptionFilter;

OptionFilterMixin = __webpack_require__(339);

RadioOptionFilter = React.createClass({
  displayName: 'RadioOptionFilter',
  mixins: [OptionFilterMixin],
  labelToggleClick: function() {
    if (!this.props.filter.isActive()) {
      return this.props.filter.setActive();
    }
  },
  render: function() {
    return React.createElement("li", {
      "className": this.activeClassName(),
      "onClick": this.labelToggleClick
    }, React.createElement("div", {
      "className": "scrivito-content-browser-hierarchy-radio"
    }), this.renderOptionFilterTitle());
  }
});

module.exports = RadioOptionFilter;


/***/ }),

/***/ 696:
/***/ (function(module, exports) {

var SelectedFilter;

SelectedFilter = React.createClass({
  displayName: 'SelectedFilter',
  filterClass: function() {
    var classNames;
    classNames = 'scrivito-content-browser-filter-item selected-filter ';
    if (this.props.active) {
      classNames += 'active';
    }
    return classNames;
  },
  activateSelectedFilter: function() {
    return this.props.activateSelectedFilter(this.props.selectedObjs);
  },
  render: function() {
    return React.createElement("div", {
      "className": this.filterClass(),
      "onClick": this.activateSelectedFilter
    }, React.createElement("i", {
      "className": "scrivito-content-browser-icon scrivito-content-browser-icon-ok-box"
    }), React.createElement("span", {
      "className": "scrivito-content-browser-filter-label"
    }, scrivito.translate('content_browser.filter.selected_filter'), React.createElement("span", {
      "className": "scrivito-content-browser-counter selected-total"
    }, this.props.selectedObjs.length)));
  }
});

module.exports = SelectedFilter;


/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

var ExpandableFilterNodeMixin, TreeFilter;

ExpandableFilterNodeMixin = __webpack_require__(335);

TreeFilter = React.createClass({
  displayName: 'TreeFilter',
  mixins: [ExpandableFilterNodeMixin],
  getInitialState: function() {
    return this.defaultExpansionState();
  },
  _convertLegacyIconName: function(iconName) {
    if (iconName === "generic") {
      return "sheet";
    } else {
      return iconName;
    }
  },
  renderIconTag: function() {
    var iconClass, iconName;
    if (this.props.filter.icon != null) {
      iconName = this._convertLegacyIconName(this.props.filter.icon);
      iconClass = "scrivito_customer_icon sci_" + iconName;
      return React.createElement("i", {
        "className": iconClass
      });
    }
  },
  getLabelClasses: function() {
    var classes;
    classes = "";
    if (this.props.filter.isActive()) {
      classes = "active ";
    }
    return classes += this.openClassSetOptions();
  },
  renderSubTrees: function() {
    var childKey, element, i, _i, _len, _ref, _results;
    _ref = this.props.filter.children;
    _results = [];
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      element = _ref[i];
      childKey = "" + element.title + "-" + i;
      _results.push(React.createElement(TreeFilter, {
        "key": childKey,
        "filter": element
      }));
    }
    return _results;
  },
  labelToggleClick: function() {
    return this.props.filter.toggleActive();
  },
  render: function() {
    var labelClasses;
    labelClasses = this.getLabelClasses();
    return React.createElement("li", {
      "className": labelClasses
    }, (!this.props.filter.isLeaf() ? this.renderArrowTag() : void 0), React.createElement("div", {
      "className": "scrivito-content-browser-hierarchy-label",
      "onClick": this.labelToggleClick
    }, this.renderIconTag(), React.createElement("span", null, this.props.filter.title)), (!this.props.filter.isLeaf() ? React.createElement("ul", null, this.renderSubTrees()) : void 0));
  }
});

module.exports = TreeFilter;


/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

var Footer, objDeleted;

objDeleted = __webpack_require__(37).objDeleted;

Footer = React.createClass({
  displayName: 'Footer',
  currentSelectedCount: function() {
    return this.props.selectedObjs.length;
  },
  deleteButtonClass: function() {
    var className;
    className = ' scrivito_button scrivito_lightgrey content-browser-delete scrivito_left';
    if (this.currentSelectedCount() === 0) {
      className += ' scrivito_disabled';
    }
    return className;
  },
  closeClick: function() {
    if (this.props.standAlone) {
      return this.props.promise.resolve();
    } else {
      return this.props.promise.reject();
    }
  },
  doneClick: function() {
    return this.props.promise.resolve(this.props.selectedObjs);
  },
  deleteClick: function() {
    var _ref;
    if (this.props.selectedObjs.length) {
      return (_ref = scrivito.ConfirmDeleteDialog).open.apply(_ref, this.props.selectedObjs).then((function(_this) {
        return function(isConfirmed) {
          if (isConfirmed) {
            return _.each(scrivito.BasicObj.get(_this.props.selectedObjs), function(obj) {
              return _this.props.dispatch(objDeleted(obj.id));
            });
          }
        };
      })(this));
    }
  },
  _getClassNameCloseButton: function() {
    var className;
    className = "scrivito_button content-browser-close";
    if (this.props.standAlone) {
      className += " scrivito_green";
    }
    return className;
  },
  render: function() {
    return React.createElement("div", {
      "className": "scrivito-content-browser-footer"
    }, (this.props.editingView && !this.props.disableDelete ? React.createElement("a", {
      "className": this.deleteButtonClass(),
      "onClick": this.deleteClick
    }, scrivito.translate("content_browser.footer.delete"), React.createElement("span", {
      "className": "scrivito-content-browser-counter selected-total"
    }, this.currentSelectedCount())) : void 0), (!this.props.standAlone ? React.createElement("a", {
      "className": "scrivito_button scrivito_green content-browser-save",
      "onClick": this.doneClick
    }, scrivito.translate("content_browser.footer.select"), React.createElement("span", {
      "className": "scrivito-content-browser-counter selected-total"
    }, this.currentSelectedCount())) : void 0), React.createElement("a", {
      "className": this._getClassNameCloseButton(),
      "onClick": this.closeClick
    }, scrivito.translate("content_browser.footer.close")));
  }
});

module.exports = Footer;


/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

var InspectorHeader, MaximizeInspectorToggle, toggleInspectorMaximized;

MaximizeInspectorToggle = __webpack_require__(710);

toggleInspectorMaximized = __webpack_require__(268).toggleInspectorMaximized;

InspectorHeader = scrivito.createReactClass({
  displayName: 'Inspector',
  propTypes: {
    editingView: React.PropTypes.bool.isRequired,
    disableDelete: React.PropTypes.bool.isRequired,
    selectedObjs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    dispatch: React.PropTypes.func.isRequired,
    deleteInspectedObjs: React.PropTypes.func.isRequired
  },
  _getMultiSelectedTitle: function() {
    return "Selected: " + this.props.selectedObjs.length + " items";
  },
  getDetailsClassName: function() {
    return "scrivito_icon scrivito_icon_eye";
  },
  _title: function() {
    if (this.props.selectedObjs.length === 1) {
      if (this._getInspectedObj() != null) {
        return scrivito.titleForObj(this._getInspectedObj());
      }
    } else {
      return this._getMultiSelectedTitle();
    }
  },
  _getInspectedObj: function() {
    var id;
    id = this.props.selectedObjs[0];
    return scrivito.BasicObj.get(id);
  },
  toggleInspectorMaximized: function() {
    return this.props.dispatch(toggleInspectorMaximized());
  },
  render: function() {
    return React.createElement("h3", {
      "title": this._title()
    }, React.createElement(MaximizeInspectorToggle, {
      "toggleInspectorMaximized": this.toggleInspectorMaximized
    }), React.createElement("span", {
      "title": "Details",
      "className": this.getDetailsClassName()
    }), React.createElement("span", {
      "className": "title"
    }, this._title()), (this.props.editingView && !this.props.disableDelete ? React.createElement("span", {
      "className": "scrivito_icon scrivito_icon_trash scrivito_delete",
      "onClick": this.props.deleteInspectedObjs
    }) : void 0));
  }
});

module.exports = InspectorHeader;


/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

var DEFAULT_NUMBER_TO_LOAD, FILTER, Items, LAST_ADDED, LastAddedItems, PresetBuilder, QueryBuilder, SELECTED, SelectedItems, Spinner, TableView, TableViewContent, TagBar, ThumbnailItems, loadMoreObjs, objDisplayAction, toggleExpandTagBar, toggleTag, _ref, _ref1, _ref2;

TableView = __webpack_require__(221);

ThumbnailItems = __webpack_require__(519)["default"];

SelectedItems = __webpack_require__(713);

PresetBuilder = __webpack_require__(274)["default"];

LastAddedItems = __webpack_require__(701);

TableViewContent = __webpack_require__(718);

TagBar = __webpack_require__(719);

Spinner = __webpack_require__(270)["default"];

objDisplayAction = __webpack_require__(50);

_ref = __webpack_require__(38), SELECTED = _ref.SELECTED, LAST_ADDED = _ref.LAST_ADDED, FILTER = _ref.FILTER;

_ref1 = __webpack_require__(111), toggleExpandTagBar = _ref1.toggleExpandTagBar, toggleTag = _ref1.toggleTag;

_ref2 = __webpack_require__(269), loadMoreObjs = _ref2.loadMoreObjs, DEFAULT_NUMBER_TO_LOAD = _ref2.DEFAULT_NUMBER_TO_LOAD;

QueryBuilder = __webpack_require__(526)["default"];

Items = scrivito.createReactClass({
  displayName: 'Items',
  getInitialState: function() {
    return {
      dragInProgress: false
    };
  },
  baseItemsClass: function(tags) {
    var baseItemClass;
    baseItemClass = "scrivito-content-browser-items";
    if (tags.length > 0) {
      baseItemClass += " tags-row";
      if (this.props.tags.isExpanded) {
        baseItemClass += " expanded";
      }
    }
    return baseItemClass;
  },
  toggleExpandTagBar: function() {
    return this.props.dispatch(toggleExpandTagBar());
  },
  toggleTagAction: function(tag) {
    return this.props.dispatch(toggleTag(tag, this.props.filter));
  },
  dropZoneClass: function(tags) {
    var className;
    className = this.baseItemsClass(tags);
    if (this.state.dragInProgress) {
      if (this.props.editingView) {
        className += " uploader-drag-over";
      } else {
        className += " uploader-drag-over-forbiden";
      }
    }
    return className;
  },
  _buildErrorList: function(values) {
    return React.createElement("ul", null, _.map(values, function(value) {
      return React.createElement("li", null, value);
    }));
  },
  _showConflictingPresetsAlert: function(errors) {
    var fieldsWithError, firstField, message;
    fieldsWithError = _.keys(errors);
    firstField = _.first(fieldsWithError);
    message = React.createElement("div", null, React.createElement("p", null, "The selected properties could not be assigned to the uploaded files."), React.createElement("p", null, "Choose only one of these ", this._errorMessageForField(firstField), ":"), this._buildErrorList(errors[firstField]), _.map(_.rest(fieldsWithError), (function(_this) {
      return function(field) {
        return React.createElement("div", null, React.createElement("p", null, "Also, choose just one of these ", _this._errorMessageForField(field), ":"), _this._buildErrorList(errors[field]));
      };
    })(this)), "Please try again.");
    return scrivito.content_browser._showAlert({
      title: 'Upload cancelled',
      body: React.createElement("div", null, message)
    });
  },
  _errorMessageForField: function(field_name) {
    if (field_name === '_obj_class') {
      return "types";
    } else {
      return "\"" + field_name + "\" options";
    }
  },
  _fileAttributes: function(file) {
    var objClass;
    objClass = scrivito.default_obj_class_for_content_type(file.type);
    return {
      blob: file,
      _obj_class: objClass
    };
  },
  _handleFileDrop: function(event) {
    var files, _ref3;
    this._changeDragState(false)(event);
    files = (_ref3 = event.dataTransfer) != null ? _ref3.files : void 0;
    if (this.props.editingView && (files != null ? files.length : void 0)) {
      return this._uploadFiles(files);
    }
  },
  _uploadFiles: function(files) {
    var preset;
    preset = this._buildPreset();
    if (preset.isValid()) {
      _.each(files, (function(_this) {
        return function(file) {
          return _this._uploadFile(file, preset);
        };
      })(this));
      return this.props.filter.deselectHierarchicalFilters();
    } else {
      return this._showConflictingPresetsAlert(preset.errors());
    }
  },
  _uploadFile: function(file, preset) {
    var attributes;
    attributes = this._fileAttributes(file);
    return this.props.createObj(attributes, this.props.basePreset, preset.values(), this.props.tags.activeTags);
  },
  _buildPreset: function() {
    var presetBuilder;
    presetBuilder = new PresetBuilder(this.props.filter);
    return presetBuilder.generatePreset();
  },
  _changeDragState: function(isDragging) {
    return (function(_this) {
      return function(event) {
        event.preventDefault();
        event.stopPropagation();
        return _this.setState({
          dragInProgress: isDragging
        });
      };
    })(this);
  },
  _getQueryRequest: function() {
    var queryBuilder, queryRequest;
    queryBuilder = new QueryBuilder(this.props.filter, this.props.baseQuery, this.props.tags.activeTags, this.props.sortCriteria);
    return queryRequest = queryBuilder.searchRequest();
  },
  _getTags: function() {
    var queryRequest, tags;
    tags = [];
    queryRequest = this._getQueryRequest();
    if (queryRequest && this.props.activeSource === FILTER) {
      tags = scrivito.loadWithDefault(tags, function() {
        return queryRequest.facet('tags', {
          limit: 100
        });
      });
    }
    return tags;
  },
  _loadNextObjs: function() {
    return this.props.dispatch(loadMoreObjs(this.props.numToLoad + 10));
  },
  _loadObjs: function() {
    var queryRequest;
    queryRequest = this._getQueryRequest();
    if (queryRequest !== void 0) {
      return scrivito.loadAllUntil(queryRequest.iterator(), this.props.numToLoad);
    } else {
      return {
        objs: [],
        done: true
      };
    }
  },
  render: function() {
    var done, isLoading, objs, _ref3;
    return React.createElement("div", {
      "className": this.dropZoneClass(this._getTags()),
      "onDragOver": this._changeDragState(true),
      "onDrop": this._handleFileDrop,
      "onDragLeave": this._changeDragState(false)
    }, React.createElement(TagBar, {
      "tags": this._getTags(),
      "toggleTag": this.toggleTagAction,
      "activeTags": this.props.tags.activeTags,
      "toggleExpandTagBar": this.toggleExpandTagBar
    }), ((_ref3 = this._loadObjs(), objs = _ref3.objs, done = _ref3.done, _ref3), isLoading = !done && objs.length < this.props.numToLoad, isLoading && this.props.numToLoad === DEFAULT_NUMBER_TO_LOAD ? React.createElement(Spinner, null) : this.props.activeSource === SELECTED ? React.createElement(SelectedItems, {
      "selectionMode": this.props.selectionMode,
      "currentlyAndPreviouslySelectedObjIds": this.props.currentlyAndPreviouslySelectedObjIds,
      "toggleObjSelection": this.props.toggleObjSelection,
      "selectedObjs": this.props.selectedObjs,
      "viewMode": this.props.viewMode
    }) : this.props.activeSource === LAST_ADDED ? React.createElement(LastAddedItems, {
      "activeTags": this.props.tags.activeTags,
      "selectionMode": this.props.selectionMode,
      "filter": this.props.filter,
      "toggleObjSelection": this.props.toggleObjSelection,
      "selectedObjs": this.props.selectedObjs,
      "createObj": this.props.createObj,
      "basePreset": this.props.basePreset,
      "viewMode": this.props.viewMode,
      "dragInProgress": this.state.dragInProgress,
      "additions": this.props.lastAdded.additions
    }) : this.props.viewMode === objDisplayAction.TABLE_VIEW ? React.createElement(TableView, {
      "activeTags": this.props.tags.activeTags,
      "filter": this.props.filter,
      "createObj": this.props.createObj,
      "basePreset": this.props.basePreset
    }, React.createElement(TableViewContent, {
      "activeTags": this.props.tags.activeTags,
      "basePreset": true,
      "props": true,
      "ps": true,
      "basePreset": true,
      "t": true,
      "toggleObjSelection": this.props.toggleObjSelection,
      "isLoading": isLoading,
      "fetch": this._loadNextObjs,
      "objs": objs,
      "hasMore": !done,
      "createObj": this.props.createObj,
      "selectedObjs": this.props.selectedObjs,
      "editingView": this.props.editingView,
      "selectionMode": this.props.selectionMode,
      "filter": this.props.filter
    })) : React.createElement(ThumbnailItems, {
      "objs": objs,
      "viewMode": this.props.viewMode,
      "toggleObjSelection": this.props.toggleObjSelection,
      "selectionMode": this.props.selectionMode,
      "activeTags": this.props.tags.activeTags,
      "basePreset": this.props.basePreset,
      "filter": this.props.filter,
      "editingView": this.props.editingView,
      "createObj": this.props.createObj,
      "selectedObjs": this.props.selectedObjs,
      "isLoading": isLoading,
      "fetch": this._loadNextObjs,
      "hasMore": !done
    })));
  }
});

module.exports = Items;


/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

var LastAddedItems, LastAddedTableViewContent, LastAddedThumbnailItems, TableView, objDisplayAction;

LastAddedTableViewContent = __webpack_require__(702);

LastAddedThumbnailItems = __webpack_require__(707);

TableView = __webpack_require__(221);

objDisplayAction = __webpack_require__(50);

LastAddedItems = React.createClass({
  displayName: 'LastAddedItems',
  render: function() {
    return React.createElement("div", null, (this.props.viewMode === objDisplayAction.TABLE_VIEW ? React.createElement(TableView, {
      "activeTags": this.props.activeTags,
      "filter": this.props.filter,
      "createObj": this.props.createObj,
      "basePreset": this.props.basePreset
    }, React.createElement(LastAddedTableViewContent, {
      "activeTags": this.props.activeTags,
      "basePreset": this.props.basePreset,
      "selectionMode": this.props.selectionMode,
      "filter": this.props.filter,
      "selectedObjs": this.props.selectedObjs,
      "toggleObjSelection": this.props.toggleObjSelection,
      "createObj": this.props.createObj,
      "additions": this.props.additions
    })) : React.createElement(LastAddedThumbnailItems, {
      "activeTags": this.props.activeTags,
      "selectionMode": this.props.selectionMode,
      "filter": this.props.filter,
      "toggleObjSelection": this.props.toggleObjSelection,
      "selectedObjs": this.props.selectedObjs,
      "createObj": this.props.createObj,
      "additions": this.props.additions,
      "basePreset": this.props.basePreset
    })));
  }
});

module.exports = LastAddedItems;


/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

var LastAddedTableViewContent, LastAddedTableViewErrorItem, LastAddedTableViewItem, TableViewItem, failed, isActive, isCompleted, _ref;

LastAddedTableViewErrorItem = __webpack_require__(703);

LastAddedTableViewItem = __webpack_require__(704);

TableViewItem = __webpack_require__(222);

_ref = __webpack_require__(112), isCompleted = _ref.isCompleted, isActive = _ref.isActive, failed = _ref.failed;

LastAddedTableViewContent = scrivito.createReactClass({
  displayName: 'LastAddedTableViewContent',
  renderedLastAddedErrorThumbComponent: function() {
    var failedAdditions;
    failedAdditions = failed(this.props.additions);
    if (failedAdditions.length) {
      return React.createElement(LastAddedTableViewErrorItem, {
        "failedAdditions": failedAdditions
      });
    }
  },
  getLastAddedTableViewItems: function() {
    var items;
    return items = _.map(this.props.additions, (function(_this) {
      return function(addition) {
        if (isActive(addition)) {
          return React.createElement(LastAddedTableViewItem, {
            "key": addition.additionId,
            "addedItem": addition
          });
        } else if (isCompleted(addition)) {
          return React.createElement(TableViewItem, {
            "toggleObjSelection": _this.props.toggleObjSelection,
            "objId": addition.objId,
            "baseSelectClass": 'scrivito-content-browser-list-select ',
            "key": addition.objId,
            "selectionMode": _this.props.selectionMode,
            "selectedObjs": _this.props.selectedObjs
          });
        }
      };
    })(this));
  },
  render: function() {
    return React.createElement("div", {
      "className": "scrivito-content-browser-list-content"
    }, React.createElement("table", null, React.createElement("tbody", null, this.renderedLastAddedErrorThumbComponent(), this.getLastAddedTableViewItems())));
  }
});

module.exports = LastAddedTableViewContent;


/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

var LastAddedErrorItemMixin, LastAddedTableViewErrorItem;

LastAddedErrorItemMixin = __webpack_require__(336);

LastAddedTableViewErrorItem = React.createClass({
  displayName: 'LastAddedTableViewError',
  mixins: [LastAddedErrorItemMixin],
  render: function() {
    return React.createElement("tr", null, React.createElement("td", {
      "colSpan": "6"
    }, React.createElement("div", {
      "className": "scrivito-content-browser-add error",
      "onClick": this.showAlert,
      "title": this._titleInfo()
    }, React.createElement("span", {
      "className": "scrivito_icon scrivito_icon_error"
    }), React.createElement("span", null, this.getErrorsCount(), React.createElement("span", null, " during upload")))));
  }
});

module.exports = LastAddedTableViewErrorItem;


/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

var LastAddedItemMixin, LastAddedTableViewItem;

LastAddedItemMixin = __webpack_require__(337);

LastAddedTableViewItem = React.createClass({
  displayName: 'LastAddedTableViewItem',
  mixins: [LastAddedItemMixin],
  getUploadTitle: function() {
    return "uploading file " + this.props.addedItem.filename + " ...";
  },
  render: function() {
    return React.createElement("tr", null, React.createElement("td", {
      "colSpan": "6"
    }, this.renderUploadStateProgress(), React.createElement("div", {
      "className": "scrivito-content-browser-add upload",
      "title": this.getUploadTitle()
    }, React.createElement("span", {
      "className": "scrivito_icon scrivito_icon_generic"
    }, this.getUploadTitle()))));
  }
});

module.exports = LastAddedTableViewItem;


/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

var LastAddedErrorItemMixin, LastAddedThumbnailErrorItem;

LastAddedErrorItemMixin = __webpack_require__(336);

LastAddedThumbnailErrorItem = React.createClass({
  displayName: 'LastAddedThumbnailErrorItem',
  mixins: [LastAddedErrorItemMixin],
  render: function() {
    return React.createElement("li", {
      "className": "content-browser-item",
      "onClick": this.showAlert,
      "title": this._titleInfo()
    }, React.createElement("div", {
      "className": "scrivito-content-browser-add error"
    }, React.createElement("div", {
      "className": "scrivito-content-browser-text"
    }, React.createElement("span", {
      "className": "scrivito_icon scrivito_icon_error"
    }), React.createElement("span", null, this.getErrorsCount(), React.createElement("span", null, React.createElement("br", null), "during upload")))));
  }
});

module.exports = LastAddedThumbnailErrorItem;


/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

var LastAddedItemMixin, LastAddedThumbnailItem;

LastAddedItemMixin = __webpack_require__(337);

LastAddedThumbnailItem = React.createClass({
  displayName: 'LastAddedThumbnailItem',
  mixins: [LastAddedItemMixin],
  addedItemClassName: function() {
    var addedItemClassName;
    addedItemClassName = "content-browser-item";
    if (this.uploadInProgress()) {
      addedItemClassName += " upload";
    }
    return addedItemClassName;
  },
  render: function() {
    return React.createElement("li", {
      "className": this.addedItemClassName()
    }, this.renderUploadStateProgress(), React.createElement("div", {
      "className": "scrivito-content-browser-item-wrapper"
    }, React.createElement("div", {
      "className": "scrivito-content-browser-preview"
    }), React.createElement("span", {
      "className": "scrivito-content-browser-thumbnails-name"
    }, this.props.addedItem.filename)));
  }
});

module.exports = LastAddedThumbnailItem;


/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

var LastAddedThumbnailErrorItem, LastAddedThumbnailItem, LastAddedThumbnailItems, ThumbnailItem, failed, isActive, isCompleted, _ref;

LastAddedThumbnailErrorItem = __webpack_require__(705);

LastAddedThumbnailItem = __webpack_require__(706);

ThumbnailItem = __webpack_require__(223);

_ref = __webpack_require__(112), isCompleted = _ref.isCompleted, isActive = _ref.isActive, failed = _ref.failed;

LastAddedThumbnailItems = React.createClass({
  displayName: "LastAddedThumbnailItems",
  renderedLastAddedErrorThumbComponent: function() {
    var failedAdditions;
    failedAdditions = failed(this.props.additions);
    if (failedAdditions.length) {
      return React.createElement(LastAddedThumbnailErrorItem, {
        "failedAdditions": failedAdditions
      });
    }
  },
  getSizeClassName: function() {
    return "items scrivito-content-browser-thumbnails small";
  },
  baseSelectClass: function() {
    return 'scrivito-content-browser-meta ';
  },
  buildItems: function() {
    return _.map(this.props.additions, (function(_this) {
      return function(addition) {
        if (isActive(addition)) {
          return React.createElement(LastAddedThumbnailItem, {
            "key": addition.additionId,
            "addedItem": addition
          });
        } else if (isCompleted(addition)) {
          return React.createElement(ThumbnailItem, {
            "key": addition.objId,
            "selectedObjs": _this.props.selectedObjs,
            "baseSelectClass": _this.baseSelectClass(),
            "toggleObjSelection": _this.props.toggleObjSelection,
            "selectionMode": _this.props.selectionMode,
            "objId": addition.objId
          });
        }
      };
    })(this));
  },
  render: function() {
    return React.createElement("div", null, React.createElement("ul", {
      "className": this.getSizeClassName()
    }, this.renderedLastAddedErrorThumbComponent(), this.buildItems()));
  }
});

module.exports = LastAddedThumbnailItems;


/***/ }),

/***/ 708:
/***/ (function(module, exports) {

var LoadableColumn;

LoadableColumn = scrivito.createReactClass({
  displayName: 'LoadableSpan',
  propTypes: {
    get: React.PropTypes.func.isRequired
  },
  _getTitle: function() {
    if (this.props.getTitle) {
      return this.props.getTitle();
    } else {
      return "";
    }
  },
  render: function() {
    return React.createElement("td", {
      "title": this._getTitle()
    }, this.props.get());
  },
  renderWhileLoading: function() {
    return React.createElement("td", null, React.createElement("span", {
      "className": "scrivito_loader"
    }));
  }
});

module.exports = LoadableColumn;


/***/ }),

/***/ 709:
/***/ (function(module, exports) {

var LoadableSpan;

LoadableSpan = scrivito.createReactClass({
  displayName: 'LoadableSpan',
  propTypes: {
    get: React.PropTypes.func.isRequired
  },
  _getTitle: function() {
    if (this.props.getTitle !== void 0) {
      return this.props.getTitle();
    } else {
      return "";
    }
  },
  render: function() {
    return React.createElement("span", {
      "title": this._getTitle(),
      "className": this.props.className
    }, this.props.get());
  },
  renderWhileLoading: function() {
    return React.createElement("span", {
      "className": "scrivito_loader"
    });
  }
});

module.exports = LoadableSpan;


/***/ }),

/***/ 710:
/***/ (function(module, exports) {

var MaximizeInspectorToggle;

MaximizeInspectorToggle = React.createClass({
  displayName: 'MaximizeInspectorToggle',
  _toggleMaximized: function() {
    return this.props.toggleInspectorMaximized();
  },
  render: function() {
    return React.createElement("span", {
      "className": "scrivito_move_left",
      "title": "Maximize details view",
      "onClick": this._toggleMaximized
    }, React.createElement("span", {
      "className": "scrivito_icon scrivito_icon_chevron_left"
    }));
  }
});

module.exports = MaximizeInspectorToggle;


/***/ }),

/***/ 711:
/***/ (function(module, exports) {

var MoreItemsSpinner;

MoreItemsSpinner = React.createClass({
  displayName: 'MoreItemsSpinner',
  render: function() {
    return React.createElement("div", {
      "className": "scrivito-content-browser-endless-loader"
    }, React.createElement("i", {
      "className": "scrivito_icon scrivito_icon_refresh"
    }));
  }
});

module.exports = MoreItemsSpinner;


/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

var ActiveNodeConfigCollector, SearchBar;

ActiveNodeConfigCollector = __webpack_require__(81)["default"];

SearchBar = React.createClass({
  displayName: 'SearchBar',
  propTypes: {
    filter: React.PropTypes.object.isRequired
  },
  updateSearchFilter: function(searchTerm) {
    return this.props.filter.setSearchTerm(searchTerm);
  },
  getInitialState: function() {
    return {
      searchTerm: this.props.filter.searchTerm || ''
    };
  },
  triggerSearchWithEnter: function(event) {
    if (event.keyCode === 13) {
      return this.updateSearchFilter(this.state.searchTerm);
    }
  },
  clearButtonClassName: function() {
    var showClear;
    showClear = 'scrivito_customer_icon sci_inv_cross ';
    if (this.state.searchTerm.length > 0) {
      showClear += 'show-clear';
    }
    return showClear;
  },
  clearSearchTerm: function() {
    var searchTerm;
    searchTerm = '';
    this.setState({
      searchTerm: searchTerm
    });
    return this.updateSearchFilter(searchTerm);
  },
  _getSearchPlaceholder: function() {
    var activeCriteriaTitle, activeFilters, actvieFilterNodeConfigs, collector, searchPlaceHolder;
    collector = new ActiveNodeConfigCollector(this.props.filter);
    searchPlaceHolder = scrivito.translate('content_browser.search_bar.search_everywhere');
    actvieFilterNodeConfigs = collector.findActiveFilterItems();
    activeFilters = _.flatten(_.map(actvieFilterNodeConfigs, function(config) {
      return config.activeNodes();
    }));
    if (activeFilters.length > 1) {
      searchPlaceHolder = scrivito.translate('content_browser.search_bar.search_filtered');
    } else if (activeFilters.length === 1) {
      activeCriteriaTitle = activeFilters[0].title;
      searchPlaceHolder = scrivito.translate('content_browser.search_bar.search_in', activeCriteriaTitle);
    }
    return searchPlaceHolder;
  },
  _updateSearchTerm: function(event) {
    return this.setState({
      searchTerm: event.target.value
    });
  },
  render: function() {
    return React.createElement("div", {
      "className": 'scrivito-content-browser-search'
    }, React.createElement("span", {
      "className": 'text-input-wrapper'
    }, React.createElement("input", {
      "type": 'text',
      "placeholder": this._getSearchPlaceholder(),
      "className": 'search-field',
      "value": this.state.searchTerm,
      "onChange": this._updateSearchTerm,
      "onKeyUp": this.triggerSearchWithEnter
    }), React.createElement("span", {
      "onClick": this.clearSearchTerm,
      "className": this.clearButtonClassName(),
      "title": scrivito.translate('content_browser.search_bar.clear_button')
    })), React.createElement("button", {
      "className": 'search-field-button',
      "onClick": this.updateSearchFilter.bind(this, this.state.searchTerm),
      "title": scrivito.translate('content_browser.search_bar.search_button')
    }, React.createElement("i", {
      "className": "scrivito_icon scrivito_icon_search"
    })));
  }
});

module.exports = SearchBar;


/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

var SelectedItems, TABLE_VIEW, TableView, TableViewItem, ThumbnailItem;

ThumbnailItem = __webpack_require__(223);

TableViewItem = __webpack_require__(222);

TableView = __webpack_require__(221);

TABLE_VIEW = __webpack_require__(50).TABLE_VIEW;

SelectedItems = React.createClass({
  displayName: 'SelectedItems',
  propTypes: {
    toggleObjSelection: React.PropTypes.func.isRequired,
    viewMode: React.PropTypes.string.isRequired,
    selectionMode: React.PropTypes.string.isRequired,
    selectedObjs: React.PropTypes.arrayOf(React.PropTypes.string),
    currentlyAndPreviouslySelectedObjIds: React.PropTypes.arrayOf(React.PropTypes.string)
  },
  getThumbsSizeClassName: function() {
    return 'items scrivito-content-browser-thumbnails small';
  },
  buildItems: function() {
    return _.map(this.props.currentlyAndPreviouslySelectedObjIds, (function(_this) {
      return function(objId) {
        if (_this.props.viewMode === TABLE_VIEW) {
          return React.createElement(TableViewItem, {
            "toggleObjSelection": _this.props.toggleObjSelection,
            "objId": objId,
            "baseSelectClass": 'scrivito-content-browser-list-select ',
            "key": objId,
            "selectionMode": _this.props.selectionMode,
            "selectedObjs": _this.props.selectedObjs
          });
        } else {
          return React.createElement(ThumbnailItem, {
            "key": objId,
            "selectedObjs": _this.props.selectedObjs,
            "objId": objId,
            "baseSelectClass": 'scrivito-content-browser-meta ',
            "selectionMode": _this.props.selectionMode,
            "toggleObjSelection": _this.props.toggleObjSelection
          });
        }
      };
    })(this));
  },
  render: function() {
    return React.createElement("div", null, (this.props.viewMode === TABLE_VIEW ? React.createElement(TableView, null, React.createElement("div", {
      "className": "scrivito-content-browser-list-content"
    }, React.createElement("table", null, React.createElement("tbody", null, this.buildItems())))) : React.createElement("ul", {
      "className": this.getThumbsSizeClassName()
    }, this.buildItems())));
  }
});

module.exports = SelectedItems;


/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

var MULTI_SELECTION_MODE, SINGLE_SELECTION_MODE, SelectionModeToggle, changeSelectionMode, _ref;

_ref = __webpack_require__(80), changeSelectionMode = _ref.changeSelectionMode, MULTI_SELECTION_MODE = _ref.MULTI_SELECTION_MODE, SINGLE_SELECTION_MODE = _ref.SINGLE_SELECTION_MODE;

SelectionModeToggle = React.createClass({
  displayName: 'SelectionModeToggle',
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
    selectionMode: React.PropTypes.string.isRequired
  },
  multiToggleModeChange: function(e) {
    if (e.target.checked) {
      return this.props.dispatch(changeSelectionMode(MULTI_SELECTION_MODE));
    } else {
      return this.props.dispatch(changeSelectionMode(SINGLE_SELECTION_MODE));
    }
  },
  render: function() {
    return React.createElement("div", {
      "className": "cb_toggle"
    }, React.createElement("input", {
      "type": "checkbox",
      "checked": this.props.selectionMode === MULTI_SELECTION_MODE,
      "id": "toggly",
      "onChange": this.multiToggleModeChange
    }), React.createElement("label", {
      "htmlFor": "toggly"
    }, React.createElement("i", null)), React.createElement("span", null, scrivito.translate('content_browser.search_bar.multi_selection_toggle')));
  }
});

module.exports = SelectionModeToggle;


/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

var ASC_SORT_ORDER, DESC_SORT_ORDER, ReactRedux, SortMenu, SortMenuItem, sortInAscOrder, sortInDescOrder, _ref;

SortMenuItem = __webpack_require__(716);

ReactRedux = __webpack_require__(78);

_ref = __webpack_require__(110), sortInAscOrder = _ref.sortInAscOrder, sortInDescOrder = _ref.sortInDescOrder, DESC_SORT_ORDER = _ref.DESC_SORT_ORDER, ASC_SORT_ORDER = _ref.ASC_SORT_ORDER;

SortMenu = React.createClass({
  displayName: 'SortMenu',
  sortItemsData: function() {
    return {
      'relevance': {
        itemTitle: scrivito.translate('content_browser.sort.relevance.title'),
        descCriteriaTitle: scrivito.translate('content_browser.sort.relevance.desc_criteria_title'),
        sortItemType: 'relevance'
      },
      'filename': {
        itemTitle: scrivito.translate('content_browser.sort.file_name.title'),
        descCriteriaTitle: scrivito.translate('content_browser.sort.file_name.desc_criteria_title'),
        ascCriteriaTitle: scrivito.translate('content_browser.sort.file_name.asc_criteria_title'),
        sortItemType: 'blob:filename'
      },
      'date': {
        itemTitle: scrivito.translate('content_browser.sort.date.title'),
        descCriteriaTitle: scrivito.translate('content_browser.sort.date.desc_criteria_title'),
        ascCriteriaTitle: scrivito.translate('content_browser.sort.date.asc_criteria_title'),
        sortItemType: '_lastChanged'
      }
    };
  },
  toggleSortMenu: function() {
    return $('.scrivito-content-browser-sort-menu .scrivito_menu_box').fadeToggle();
  },
  getSortActiveCriteriaTitle: function() {
    var activeSortCriteriaItem;
    activeSortCriteriaItem = _.findWhere(_.values(this.sortItemsData()), {
      sortItemType: this.props.sortCriteria.sortField
    });
    if (activeSortCriteriaItem === void 0) {
      return;
    }
    switch (this.props.sortCriteria.sortDirection) {
      case DESC_SORT_ORDER:
        return activeSortCriteriaItem.descCriteriaTitle;
      default:
        return activeSortCriteriaItem.ascCriteriaTitle;
    }
  },
  getSortIconClassName: function() {
    var sortIcon;
    sortIcon = 'scrivito_icon ';
    if (this.props.sortCriteria.sortDirection === DESC_SORT_ORDER) {
      sortIcon += 'scrivito_icon_sort_up';
    } else {
      sortIcon += 'scrivito_icon_sort_down';
    }
    return sortIcon;
  },
  setDescSortCriteria: function(type) {
    return this.props.dispatch(sortInDescOrder(type));
  },
  setAscSortCriteria: function(type) {
    return this.props.dispatch(sortInAscOrder(type));
  },
  render: function() {
    var sortItem;
    return React.createElement("span", {
      "className": 'scrivito-content-browser-sort-menu scrivito_button scrivito_lightgrey scrivito_right',
      "onClick": this.toggleSortMenu
    }, React.createElement("i", {
      "className": this.getSortIconClassName()
    }), React.createElement("span", {
      "className": 'scrivito-content-browser-sort-menu-title'
    }, this.getSortActiveCriteriaTitle()), React.createElement("i", {
      "className": 'scrivito_icon scrivito-content-browser-menu-icon scrivito_icon_chevron_down'
    }), React.createElement("ul", {
      "className": 'scrivito_menu_box scrivito_left'
    }, (function() {
      var _i, _len, _ref1, _results;
      _ref1 = Object.keys(this.sortItemsData());
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        sortItem = _ref1[_i];
        _results.push(React.createElement(SortMenuItem, {
          "sortCriteria": this.props.sortCriteria,
          "key": sortItem,
          "sortItem": (this.sortItemsData()[sortItem]),
          "activeTitle": this.getSortActiveCriteriaTitle(),
          "setAscSortCriteria": this.setAscSortCriteria,
          "setDescSortCriteria": this.setDescSortCriteria
        }));
      }
      return _results;
    }).call(this), React.createElement("li", {
      "className": 'scrivito_menu_box_overlay'
    })));
  }
});

module.exports = SortMenu;


/***/ }),

/***/ 716:
/***/ (function(module, exports) {

var SortMenuItem;

SortMenuItem = React.createClass({
  displayName: 'SortMenuItem',
  basicIcon: "scrivito_icon  ",
  _ascIconSortClass: function() {
    return this.basicIcon + "scrivito_icon_sort_down";
  },
  _descIconSortClass: function() {
    return this.basicIcon + "scrivito_icon_sort_up";
  },
  getSortLiClassName: function(activeElement) {
    var itemIcon;
    itemIcon = "scrivito_menu_item";
    if (this.props.activeTitle === activeElement) {
      itemIcon += " active";
    }
    return itemIcon;
  },
  _getAscSortLiClassName: function() {
    return this.getSortLiClassName(this.currentSortItem().ascCriteriaTitle);
  },
  _getDescSortLiClassName: function() {
    return this.getSortLiClassName(this.currentSortItem().descCriteriaTitle);
  },
  currentSortItem: function() {
    return this.props.sortItem;
  },
  _sortInAscOrder: function() {
    return this.props.setAscSortCriteria(this.currentSortItem().sortItemType);
  },
  _sortInDescOrder: function() {
    return this.props.setDescSortCriteria(this.currentSortItem().sortItemType);
  },
  render: function() {
    return React.createElement("div", null, React.createElement("li", {
      "className": "scrivito_menu_separator"
    }, React.createElement("span", null, (this.currentSortItem().itemTitle))), ((this.currentSortItem().descCriteriaTitle) ? React.createElement("li", {
      "className": this._getDescSortLiClassName(),
      "onClick": this._sortInDescOrder
    }, React.createElement("span", null, React.createElement("i", {
      "className": this._descIconSortClass()
    }, " "), (this.currentSortItem().descCriteriaTitle))) : void 0), ((this.currentSortItem().ascCriteriaTitle) ? React.createElement("li", {
      "className": this._getAscSortLiClassName(),
      "onClick": this._sortInAscOrder
    }, React.createElement("span", null, React.createElement("i", {
      "className": this._ascIconSortClass()
    }, " "), (this.currentSortItem().ascCriteriaTitle))) : void 0));
  }
});

module.exports = SortMenuItem;


/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

var AddItemMixin, TableViewAddItem;

AddItemMixin = __webpack_require__(271)["default"];

TableViewAddItem = React.createClass({
  mixins: [AddItemMixin],
  render: function() {
    return React.createElement("tr", {
      "onClick": this.createClick
    }, React.createElement("td", {
      "colSpan": "6"
    }, React.createElement("div", {
      "className": this.itemClassName()
    }, React.createElement("div", {
      "className": "scrivito-content-browser-text"
    }, React.createElement("span", {
      "className": this.iconClassName(),
      "title": this.iconTitle()
    }), React.createElement("span", null, this.textMessage())))));
  }
});

module.exports = TableViewAddItem;


/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

var InfiniteScrollLoader, ObjCreation, TableViewAddItem, TableViewContent, TableViewItem;

TableViewItem = __webpack_require__(222);

TableViewAddItem = __webpack_require__(717);

ObjCreation = __webpack_require__(273)["default"];

InfiniteScrollLoader = __webpack_require__(333);

TableViewContent = scrivito.createReactClass({
  baseSelectClass: function() {
    return 'scrivito-content-browser-list-select ';
  },
  getTableViewItems: function(objs) {
    var withoutDeleted;
    withoutDeleted = _.reject(objs, function(obj) {
      return obj.isDeleted();
    });
    return _.map(withoutDeleted, (function(_this) {
      return function(obj) {
        return React.createElement(TableViewItem, {
          "key": obj.id,
          "objId": obj.id,
          "selectionMode": _this.props.selectionMode,
          "baseSelectClass": _this.baseSelectClass(),
          "selectedObjs": _this.props.selectedObjs,
          "toggleObjSelection": _this.props.toggleObjSelection
        });
      };
    })(this));
  },
  objCreation: function() {
    return new ObjCreation(this.props.filter);
  },
  render: function() {
    return React.createElement(InfiniteScrollLoader, {
      "isLoading": this.props.isLoading,
      "hasMore": this.props.hasMore,
      "fetch": this.props.fetch,
      "tag": 'div',
      "className": 'scrivito-content-browser-list-content'
    }, React.createElement("table", null, React.createElement("tbody", null, (this.objCreation().showCreationItem() && this.props.editingView ? React.createElement(TableViewAddItem, {
      "activeTags": this.props.activeTags,
      "objCreation": this.objCreation(),
      "basePreset": true,
      "props": true,
      "ps": true,
      "basePreset": true,
      "t": true,
      "createObj": this.props.createObj
    }) : void 0), this.getTableViewItems(this.props.objs))));
  }
});

module.exports = TableViewContent;


/***/ }),

/***/ 719:
/***/ (function(module, exports) {

var TagBar;

TagBar = React.createClass({
  displayName: 'TagBar',
  _expandTagBar: function() {
    return this.props.toggleExpandTagBar();
  },
  _tagClasName: function(tag) {
    if (_.include(this.props.activeTags, tag)) {
      return "active";
    }
  },
  _renderTags: function() {
    return _.map(this.props.tags, (function(_this) {
      return function(tag) {
        return React.createElement("li", {
          "key": tag.name,
          "onClick": (function() {
            return _this.props.toggleTag(tag.name);
          }),
          "className": _this._tagClasName(tag.name)
        }, tag.name, React.createElement("span", {
          "className": "amount"
        }, tag.count));
      };
    })(this));
  },
  render: function() {
    return React.createElement("div", {
      "className": "scrivito-content-browser-items-tag-wrapper"
    }, React.createElement("ul", {
      "className": "scrivito-content-browser-items-tag-list"
    }, this._renderTags()), React.createElement("i", {
      "onClick": this._expandTagBar,
      "className": "scrivito_icon scrivito_icon_slidedown"
    }));
  }
});

module.exports = TagBar;


/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

var AddItemMixin, ThumbnailAddItem;

AddItemMixin = __webpack_require__(271)["default"];

ThumbnailAddItem = React.createClass({
  displayName: 'ThumbnailAddItem',
  mixins: [AddItemMixin],
  render: function() {
    return React.createElement("li", {
      "className": "content-browser-item",
      "onClick": this.createClick
    }, React.createElement("div", {
      "className": this.itemClassName()
    }, React.createElement("div", {
      "className": "scrivito-content-browser-text"
    }, React.createElement("span", {
      "className": this.iconClassName(),
      "title": this.iconTitle()
    }), React.createElement("span", null, this.textMessage()))));
  }
});

module.exports = ThumbnailAddItem;


/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

var SearchBar, SelectionModeToggle, SortMenu, TopBar, ViewModeBar, connect, mapStateToProps;

ViewModeBar = __webpack_require__(722);

SortMenu = __webpack_require__(715);

SearchBar = __webpack_require__(712);

SelectionModeToggle = __webpack_require__(714);

connect = __webpack_require__(78).connect;

TopBar = React.createClass({
  displayName: 'TopBar',
  render: function() {
    return React.createElement("div", {
      "className": 'scrivito-content-browser-topbar'
    }, React.createElement(SearchBar, {
      "filter": this.props.filter
    }), (this.props.standAlone ? React.createElement(SelectionModeToggle, {
      "selectionMode": this.props.selectionMode,
      "dispatch": this.props.dispatch
    }) : void 0), React.createElement(ViewModeBar, {
      "viewMode": this.props.viewMode,
      "dispatch": this.props.dispatch
    }), React.createElement(SortMenu, {
      "dispatch": this.props.dispatch,
      "sortCriteria": this.props.sortCriteria
    }));
  }
});

mapStateToProps = function(state) {
  return {
    selectionMode: state.selection.selectionMode,
    sortCriteria: state.sortCriteria,
    viewMode: state.objDisplay.viewMode
  };
};

module.exports = connect(mapStateToProps)(TopBar);


/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

var TABLE_VIEW, THUMBNAIL_VIEW, ViewModeBar, ViewModeBarItem, setViewMode, _ref;

ViewModeBarItem = __webpack_require__(723);

_ref = __webpack_require__(50), THUMBNAIL_VIEW = _ref.THUMBNAIL_VIEW, TABLE_VIEW = _ref.TABLE_VIEW, setViewMode = _ref.setViewMode;

ViewModeBar = React.createClass({
  displayName: 'ViewModeBar',
  viewModeButtonsData: [TABLE_VIEW, THUMBNAIL_VIEW],
  setViewMode: function(viewMode) {
    return this.props.dispatch(setViewMode(viewMode));
  },
  render: function() {
    var mode;
    return React.createElement("div", null, (function() {
      var _i, _len, _ref1, _results;
      _ref1 = this.viewModeButtonsData;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        mode = _ref1[_i];
        _results.push(React.createElement(ViewModeBarItem, {
          "setViewMode": this.setViewMode,
          "viewMode": this.props.viewMode,
          "key": mode,
          "mode": mode
        }));
      }
      return _results;
    }).call(this));
  }
});

module.exports = ViewModeBar;


/***/ }),

/***/ 723:
/***/ (function(module, exports) {

var ViewModeBarItem;

ViewModeBarItem = React.createClass({
  displayName: 'ViewModeBarItem',
  viewModeButtonsData: {
    "THUMBNAIL_VIEW": {
      iconTitle: "Thumbnails",
      iconClassName: "scrivito_icon_th_small"
    },
    "TABLE_VIEW": {
      iconTitle: "List",
      iconClassName: "scrivito_icon_list_medium"
    }
  },
  getIconClassName: function() {
    return "scrivito_icon " + this.viewModeButtonsData[this.props.mode].iconClassName;
  },
  getIconTitle: function() {
    return this.viewModeButtonsData[this.props.mode].iconTitle;
  },
  getLabelClasses: function() {
    var className;
    className = "";
    if (this.props.viewMode === this.props.mode) {
      className += "active ";
    }
    return className += "editing-button-view";
  },
  changeViewMode: function() {
    return this.props.setViewMode(this.props.mode);
  },
  render: function() {
    return React.createElement("span", {
      "data-size": this.props.mode,
      "className": this.getLabelClasses(),
      "onClick": this.changeViewMode
    }, React.createElement("i", {
      "title": this.getIconTitle(),
      "className": this.getIconClassName()
    }));
  }
});

module.exports = ViewModeBarItem;


/***/ }),

/***/ 724:
/***/ (function(module, exports) {

var FilterMixin;

FilterMixin = {
  renderSubFiltersList: function(subFilters, additionalClasses) {
    var ulClassName;
    ulClassName = "scrivito-content-browser-hierarchy-filter";
    if (additionalClasses && additionalClasses.length > 0) {
      ulClassName = ulClassName + " " + additionalClasses;
    }
    return React.createElement("ul", {
      "className": ulClassName
    }, subFilters);
  }
};

module.exports = FilterMixin;


/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = scrivito.registerTranslations('de', {
  'content_browser.footer.close': 'Schließen',
  'content_browser.footer.select': 'Auswählen',
  'content_browser.footer.delete': 'Löschen',
  'content_browser.table_view.title': 'Titel',
  'content_browser.table_view.type': 'Typ',
  'content_browser.table_view.file_type': 'Dateityp',
  'content_browser.table_view.file_size': 'Dateigröße',
  'content_browser.table_view.last_change': 'Letzte Änderung',
  'content_browser.sort.relevance.title': 'Nach Relevanz sortieren',
  'content_browser.sort.relevance.desc_criteria_title': 'Relevanz',
  'content_browser.sort.file_name.title': 'Nach Dateiname sortieren',
  'content_browser.sort.file_name.asc_criteria_title': 'Dateiname: Von A bis Z',
  'content_browser.sort.file_name.desc_criteria_title': 'Dateiname: Von Z bis A',
  'content_browser.sort.date.title': 'Nach Datum sortieren',
  'content_browser.sort.date.asc_criteria_title': 'Letzte Änderung: Älteste zuerst',
  'content_browser.sort.date.desc_criteria_title': 'Letzte Änderung: Neueste zuerst',
  'content_browser.search_bar.clear_button': 'Löschen',
  'content_browser.search_bar.search_button': 'Suchen',
  'content_browser.search_bar.search_everywhere': 'Alles durchsuchen',
  'content_browser.search_bar.search_filtered': 'Gefilterte Inhalte durchsuchen',
  'content_browser.search_bar.search_in': '"$1" durchsuchen',
  'content_browser.search_bar.multi_selection_toggle': 'Mehrfachauswahl',
  'content_browser.last_added.filter_name': 'Zuletzt hinzugefügt',
  'content_browser.last_added.failed_upload': 'Fehler beim Hochladen. Bitte prüfen Sie Ihre Netzwerkverbindung',
  'content_browser.last_added.failed_upload_counts': '$1 Fehler',
  'content_browser.last_added.title_info': 'Vollständige Fehlermeldung anzeigen',
  'content_browser.last_added.upload_error': 'Die ausgewählten Filteroptionen können nicht auf die Datei(en) angewendet werden, die Sie hochladen wollten.',
  'content_browser.last_added.preset_error': "#values kann nicht auf einer ungültigen Vorbelegung aufgerufen werden.",
  'content_browser.filter.more_filters': 'Weitere Filter',
  'content_browser.filter.selected_filter': 'Ausgewählt',
  'content_browser.add_item.failed': 'Die ausgewählten Filteroptionen können nicht auf die Datei(en) angewendet werden, die Sie hochladen wollten. Bitte versuchen Sie es mit nur einer der folgenden Optionen erneut:',
  'content_browser.add_item.preset_conflict': 'Die ausgewählten Filteroptionen können nicht auf die Datei(en) angewendet werden, die Sie hochladen wollten. Bitte versuchen Sie es mit nur einer der folgenden Optionen erneut',
  'content_browser.add_item.create_item': 'Element anlegen',
  'content_browser.add_item.create_imposible': 'Es kann kein Element angelegt werden',
  'content_browser.add_item.disabled_filters': 'Es ist nicht möglich, zu den Filtern passende Elemente anzulegen.',
  'content_browser.add_item.error_no_obj_class': "Konfigurationsfehler: '_obj_class' wurde nicht angegeben.",
  'content_browser.add_item.prevent_creation': "Elemente können aufgrund der ausgewählten Filteroptionen $1 nicht angelegt werden."
});


/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = scrivito.registerTranslations('en', {
  'content_browser.footer.close': 'Close',
  'content_browser.footer.select': 'Select',
  'content_browser.footer.delete': 'Delete',
  'content_browser.table_view.title': 'Title',
  'content_browser.table_view.type': 'Type',
  'content_browser.table_view.file_type': 'File type',
  'content_browser.table_view.file_size': 'File size',
  'content_browser.table_view.last_change': 'Last change',
  'content_browser.sort.relevance.title': 'Sort by relevance',
  'content_browser.sort.relevance.desc_criteria_title': 'Relevance',
  'content_browser.sort.file_name.title': 'Sort by filename',
  'content_browser.sort.file_name.asc_criteria_title': 'Filename: From A to Z',
  'content_browser.sort.file_name.desc_criteria_title': 'Filename: From Z to A',
  'content_browser.sort.date.title': 'Sort by date',
  'content_browser.sort.date.asc_criteria_title': 'Last change: oldest first',
  'content_browser.sort.date.desc_criteria_title': 'Last change: latest first',
  'content_browser.search_bar.clear_button': 'Clear',
  'content_browser.search_bar.search_button': 'Search',
  'content_browser.search_bar.search_everywhere': 'Search everywhere',
  'content_browser.search_bar.search_filtered': 'Search filtered content',
  'content_browser.search_bar.search_in': 'Search "$1"',
  'content_browser.search_bar.multi_selection_toggle': 'multi-select',
  'content_browser.last_added.filter_name': 'Last added',
  'content_browser.last_added.failed_upload': 'Upload failed. Please check your network connection.',
  'content_browser.last_added.failed_upload_counts': '$1 Error(s)',
  'content_browser.last_added.title_info': 'Display full upload error message',
  'content_browser.last_added.upload_error': 'The selected filter options cannot be applied to the file(s) you wanted to upload',
  'content_browser.last_added.preset_error': "#values can not be called on an invalid Preset",
  'content_browser.filter.more_filters': 'more filters',
  'content_browser.filter.selected_filter': 'Selected',
  'content_browser.add_item.failed': 'The selected filter options cannot be applied to the file(s) you wanted to upload. Please select only one of the following options, then try again:',
  'content_browser.add_item.preset_conflict': 'The selected filter options cannot be applied to the file(s) you wanted to upload. Please select only one of the following options, then try again:',
  'content_browser.add_item.create_item': 'Create item',
  'content_browser.add_item.create_imposible': 'Item creation not possible',
  'content_browser.add_item.disabled_filters': 'Creation of items matching the selected filters has been disabled.',
  'content_browser.add_item.error_no_obj_class': "Configuration error: No '_obj_class' provided.",
  'content_browser.add_item.prevent_creation': "The selected filter options $1 prevent item creation"
});


/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

var Redux, TagsReducer, combinedReducer, inspectorReducer, lastAddedReducer, objDisplayReducer, objLoadReducer, objSource, selectionReducer, sortCriteria;

Redux = __webpack_require__(108);

inspectorReducer = __webpack_require__(728);

lastAddedReducer = __webpack_require__(729);

objDisplayReducer = __webpack_require__(530)["default"];

objLoadReducer = __webpack_require__(730);

sortCriteria = __webpack_require__(733);

TagsReducer = __webpack_require__(734);

selectionReducer = __webpack_require__(732);

objSource = __webpack_require__(731);

combinedReducer = Redux.combineReducers({
  objDisplay: objDisplayReducer,
  objLoad: objLoadReducer,
  inspector: inspectorReducer,
  lastAdded: lastAddedReducer,
  sortCriteria: sortCriteria,
  tags: TagsReducer,
  selection: selectionReducer,
  objSource: objSource
});

module.exports = combinedReducer;


/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

var DELETE_OBJ_FINISH, MAXIMIZE_TOGGLE, inspectorReducer;

MAXIMIZE_TOGGLE = __webpack_require__(268).MAXIMIZE_TOGGLE;

DELETE_OBJ_FINISH = __webpack_require__(37).DELETE_OBJ_FINISH;

inspectorReducer = function(state, action) {
  if (state == null) {
    state = {
      isMaximized: false
    };
  }
  switch (action.type) {
    case MAXIMIZE_TOGGLE:
      return _.extend({}, state, {
        isMaximized: !state.isMaximized
      });
    case DELETE_OBJ_FINISH:
      return _.extend({}, state, {
        isMaximized: false
      });
    default:
      return state;
  }
};

module.exports = inspectorReducer;


/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

var CREATE_OBJ_FAILED, CREATE_OBJ_FINISH, CREATE_OBJ_START, DELETE_OBJ_FINISH, LastAddedReducer, deleteAdition, update, updateAddition, _ref;

_ref = __webpack_require__(37), CREATE_OBJ_START = _ref.CREATE_OBJ_START, CREATE_OBJ_FINISH = _ref.CREATE_OBJ_FINISH, CREATE_OBJ_FAILED = _ref.CREATE_OBJ_FAILED, DELETE_OBJ_FINISH = _ref.DELETE_OBJ_FINISH;

update = __webpack_require__(787);

deleteAdition = function(state, objId) {
  var addedObjIndex;
  addedObjIndex = _.findIndex(state.additions, function(addedObj) {
    return addedObj.progress === 100 && addedObj.objId === objId;
  });
  if (addedObjIndex > -1) {
    return update(state, {
      additions: {
        $splice: [[addedObjIndex, 1]]
      }
    });
  } else {
    return state;
  }
};

updateAddition = function(state, id, newProps) {
  var addition, index;
  index = _.findIndex(state.additions, {
    additionId: id
  });
  addition = state.additions[index];
  addition = update(addition, {
    $merge: newProps
  });
  return update(state, {
    additions: {
      $splice: [[index, 1, addition]]
    }
  });
};

LastAddedReducer = function(state, action) {
  var addition;
  if (state == null) {
    state = {
      additions: []
    };
  }
  switch (action.type) {
    case CREATE_OBJ_START:
      addition = _.omit(action, 'type');
      return update(state, {
        additions: {
          $unshift: [addition]
        }
      });
    case CREATE_OBJ_FINISH:
      return updateAddition(state, action.additionId, {
        objId: action.objId,
        progress: 100
      });
    case CREATE_OBJ_FAILED:
      return updateAddition(state, action.additionId, {
        failureMessage: action.message,
        progress: 0
      });
    case DELETE_OBJ_FINISH:
      return deleteAdition(state, action.objId);
    default:
      return state;
  }
};

module.exports = LastAddedReducer;


/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

var DEFAULT_NUMBER_TO_LOAD, FILTER, LOAD_MORE_OBJS, SET_OBJ_SOURCE, objLoadReducer, _ref, _ref1;

_ref = __webpack_require__(269), LOAD_MORE_OBJS = _ref.LOAD_MORE_OBJS, DEFAULT_NUMBER_TO_LOAD = _ref.DEFAULT_NUMBER_TO_LOAD;

_ref1 = __webpack_require__(38), FILTER = _ref1.FILTER, SET_OBJ_SOURCE = _ref1.SET_OBJ_SOURCE;

objLoadReducer = function(state, action) {
  if (state == null) {
    state = {
      numToLoad: DEFAULT_NUMBER_TO_LOAD
    };
  }
  switch (action.type) {
    case LOAD_MORE_OBJS:
      return _.extend({}, state, {
        numToLoad: action.numToLoad
      });
    case SET_OBJ_SOURCE:
      if (action.activeSource === FILTER) {
        return _.extend({}, state, {
          numToLoad: DEFAULT_NUMBER_TO_LOAD
        });
      } else {
        return state;
      }
      break;
    default:
      return state;
  }
};

module.exports = objLoadReducer;


/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

var CREATE_OBJ_START, FILTER, LAST_ADDED, SET_OBJ_SOURCE, objSource, _ref;

_ref = __webpack_require__(38), SET_OBJ_SOURCE = _ref.SET_OBJ_SOURCE, FILTER = _ref.FILTER, LAST_ADDED = _ref.LAST_ADDED;

CREATE_OBJ_START = __webpack_require__(37).CREATE_OBJ_START;

objSource = function(state, action) {
  if (state == null) {
    state = {
      activeSource: FILTER
    };
  }
  switch (action.type) {
    case CREATE_OBJ_START:
      if (action.activeSource !== LAST_ADDED) {
        return _.extend({}, state, {
          activeSource: LAST_ADDED
        });
      } else {
        return state;
      }
      break;
    case SET_OBJ_SOURCE:
      return {
        activeSource: action.activeSource
      };
    default:
      return state;
  }
};

module.exports = objSource;


/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

var CHANGE_SELECTION_MODE, CREATE_OBJ_FINISH, DELETE_OBJ_FINISH, DESELECT_OBJS, MULTI_SELECTION_MODE, SELECTED, SET_OBJ_SOURCE, TOGGLE_SELECT, getSelectedObjIds, selectionReducer, _ref, _ref1, _ref2;

_ref = __webpack_require__(80), TOGGLE_SELECT = _ref.TOGGLE_SELECT, DESELECT_OBJS = _ref.DESELECT_OBJS, CHANGE_SELECTION_MODE = _ref.CHANGE_SELECTION_MODE, MULTI_SELECTION_MODE = _ref.MULTI_SELECTION_MODE;

_ref1 = __webpack_require__(37), DELETE_OBJ_FINISH = _ref1.DELETE_OBJ_FINISH, CREATE_OBJ_FINISH = _ref1.CREATE_OBJ_FINISH;

_ref2 = __webpack_require__(38), SELECTED = _ref2.SELECTED, SET_OBJ_SOURCE = _ref2.SET_OBJ_SOURCE;

getSelectedObjIds = function(ids, toggledObjId, mode) {
  if (_.contains(ids, toggledObjId)) {
    return _.without(ids, toggledObjId);
  } else if (mode === "multi") {
    return ids.concat([toggledObjId]);
  } else {
    return [toggledObjId];
  }
};

selectionReducer = function(state, action) {
  if (state == null) {
    state = {
      selectedObjs: [],
      selectionMode: MULTI_SELECTION_MODE,
      currentlyAndPreviouslySelectedObjIds: []
    };
  }
  switch (action.type) {
    case CHANGE_SELECTION_MODE:
      return _.extend({}, state, {
        selectedObjs: [],
        selectionMode: action.mode || state.selectionMode
      });
    case TOGGLE_SELECT:
      return _.extend({}, state, {
        selectedObjs: getSelectedObjIds(state.selectedObjs, action.objId, state.selectionMode)
      });
    case DELETE_OBJ_FINISH:
      return _.extend({}, state, {
        selectedObjs: _.without(state.selectedObjs, action.objId),
        currentlyAndPreviouslySelectedObjIds: _.without(state.currentlyAndPreviouslySelectedObjIds, action.objId)
      });
    case CREATE_OBJ_FINISH:
      if (action.isLastAddedVisible) {
        return _.extend({}, state, {
          selectedObjs: getSelectedObjIds(state.selectedObjs, action.objId, state.selectionMode)
        });
      } else {
        return state;
      }
      break;
    case SET_OBJ_SOURCE:
      if (action.activeSource === SELECTED) {
        return _.extend({}, state, {
          currentlyAndPreviouslySelectedObjIds: state.selectedObjs.slice()
        });
      } else {
        return state;
      }
      break;
    case DESELECT_OBJS:
      return _.extend({}, state, {
        selectedObjs: []
      });
    default:
      return state;
  }
};

module.exports = selectionReducer;


/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

var CHANGE_SORT_ORDER, DESC_SORT_ORDER, sortCriteriaReducer, _ref;

_ref = __webpack_require__(110), CHANGE_SORT_ORDER = _ref.CHANGE_SORT_ORDER, DESC_SORT_ORDER = _ref.DESC_SORT_ORDER;

sortCriteriaReducer = function(state, action) {
  if (state == null) {
    state = {
      sortField: 'relevance',
      sortDirection: DESC_SORT_ORDER
    };
  }
  switch (action.type) {
    case CHANGE_SORT_ORDER:
      return {
        sortField: action.criteriaType,
        sortDirection: action.sortDirection
      };
    default:
      return state;
  }
};

module.exports = sortCriteriaReducer;


/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

var EXPAND_TOGGLE, TOGGLE_TAG, TagsReducer, defaultState, getActiveTags, _ref;

_ref = __webpack_require__(111), EXPAND_TOGGLE = _ref.EXPAND_TOGGLE, TOGGLE_TAG = _ref.TOGGLE_TAG;

getActiveTags = function(currentActiveTags, actionTag) {
  var activeTags;
  if (_.include(currentActiveTags, actionTag)) {
    return activeTags = _.without(currentActiveTags, actionTag);
  } else {
    return currentActiveTags.concat([actionTag]);
  }
};

defaultState = function() {
  return {
    isExpanded: false,
    activeTags: []
  };
};

TagsReducer = function(state, action) {
  if (state == null) {
    state = defaultState();
  }
  switch (action.type) {
    case TOGGLE_TAG:
      return _.extend({}, state, {
        activeTags: getActiveTags(state.activeTags, action.tag)
      });
    case EXPAND_TOGGLE:
      return _.extend({}, state, {
        isExpanded: !state.isExpanded
      });
    default:
      return state;
  }
};

module.exports = TagsReducer;


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = __webpack_require__(1010);

var _react2 = _interopRequireDefault(_react);

var _componentsCreateAll = __webpack_require__(919);

var _componentsCreateAll2 = _interopRequireDefault(_componentsCreateAll);

var _createAll = _componentsCreateAll2['default'](_react2['default']);

var Provider = _createAll.Provider;
var connect = _createAll.connect;
exports.Provider = Provider;
exports.connect = connect;

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

var invariant = __webpack_require__(45);

var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;

var assign = Object.assign || /* istanbul ignore next */ function assign(target, source) {
  getAllKeys(source).forEach(function(key) {
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  });
  return target;
};

var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
  /* istanbul ignore next */ function(obj) { return Object.keys(obj) };

function copy(object) {
  if (object instanceof Array) {
    return object.slice();
  } else if (object && typeof object === 'object') {
    return assign(new object.constructor(), object);
  } else {
    return object;
  }
}

function newContext() {
  var commands = assign({}, defaultCommands);
  update.extend = function(directive, fn) {
    commands[directive] = fn;
  };

  return update;

  function update(object, spec) {
    if (!(Array.isArray(object) && Array.isArray(spec))) {
      invariant(
        !Array.isArray(spec),
        'update(): You provided an invalid spec to update(). The spec may ' +
        'not contain an array except as the value of $set, $push, $unshift, ' +
        '$splice or any custom command allowing an array value.'
      );
    }

    invariant(
      typeof spec === 'object' && spec !== null,
      'update(): You provided an invalid spec to update(). The spec and ' +
      'every included key path must be plain objects containing one of the ' +
      'following commands: %s.',
      Object.keys(commands).join(', ')
    );

    var nextObject = object;
    var specKeys = getAllKeys(spec);
    var index, key;
    getAllKeys(spec).forEach(function(key) {
      if (hasOwnProperty.call(commands, key)) {
        nextObject = commands[key](spec[key], nextObject, spec, object);
      } else {
        var nextValueForKey = update(object[key], spec[key]);
        if (nextValueForKey !== nextObject[key]) {
          if (nextObject === object) {
            nextObject = copy(object);
          }
          nextObject[key] = nextValueForKey;
        }
      }
    })
    return nextObject;
  }

}

var defaultCommands = {
  $push: function(value, original, spec) {
    invariantPushAndUnshift(original, spec, '$push');
    return original.concat(value);
  },
  $unshift: function(value, original, spec) {
    invariantPushAndUnshift(original, spec, '$unshift');
    return value.concat(original);
  },
  $splice: function(value, nextObject, spec, object) {
    var originalValue = nextObject === object ? copy(object) : nextObject;
    invariantSplices(originalValue, spec);
    value.forEach(function(args) {
      invariantSplice(args);
      splice.apply(originalValue, args);
    });
    return originalValue;
  },
  $set: function(value, original, spec) {
    invariantSet(spec);
    return value;
  },
  $unset: function(value, nextObject, spec, object) {
    invariant(
      Array.isArray(value),
      'update(): expected spec of $unset to be an array; got %s. ' +
      'Did you forget to wrap the key(s) in an array?',
      value
    );
    var originalValue = nextObject;
    value.forEach(function(key) {
      if (Object.hasOwnProperty.call(originalValue, key)) {
        if (nextObject === object) nextObject = copy(object);
        delete nextObject[key];
      }
    });
    return nextObject;
  },
  $merge: function(value, nextObject, spec, object) {
    var nextObject = nextObject;
    invariantMerge(nextObject, value);
    getAllKeys(value).forEach(function(key) {
      if (value[key] !== nextObject[key]) {
        if (nextObject === object) nextObject = copy(object);
        nextObject[key] = value[key];
      }
    });
    return nextObject;
  },
  $apply: function(value, original) {
    invariantApply(value);
    return value(original);
  }
};

module.exports = newContext();
module.exports.newContext = newContext;

// invariants

function invariantPushAndUnshift(value, spec, command) {
  invariant(
    Array.isArray(value),
    'update(): expected target of %s to be an array; got %s.',
    command,
    value
  );
  var specValue = spec[command];
  invariant(
    Array.isArray(specValue),
    'update(): expected spec of %s to be an array; got %s. ' +
    'Did you forget to wrap your parameter in an array?',
    command,
    specValue
  );
}

function invariantSplices(value, spec) {
  invariant(
    Array.isArray(value),
    'Expected $splice target to be an array; got %s',
    value
  );
  invariantSplice(spec['$splice']);
}

function invariantSplice(value) {
  invariant(
    Array.isArray(value),
    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
    'Did you forget to wrap your parameters in an array?',
    value
  );
}

function invariantApply(fn) {
  invariant(
    typeof fn === 'function',
    'update(): expected spec of $apply to be a function; got %s.',
    fn
  );
}

function invariantSet(spec) {
  invariant(
    Object.keys(spec).length === 1,
    'Cannot have more than one key in an object with $set'
  );
}

function invariantMerge(target, specValue) {
  invariant(
    specValue && typeof specValue === 'object',
    'update(): $merge expects a spec of type \'object\'; got %s',
    specValue
  );
  invariant(
    target && typeof target === 'object',
    'update(): $merge expects a target of type \'object\'; got %s',
    target
  );
}


/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(797);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = baseGetTag;


/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(14)))

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(798);


/** Built-in value references. */
var getPrototype = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = getPrototype;


/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(349);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = getRawTag;


/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = objectToString;


/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = overArg;


/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(794);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = root;


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSelect = toggleSelect;
exports.changeSelectionMode = changeSelectionMode;
exports.deselectObjs = deselectObjs;
var TOGGLE_SELECT = exports.TOGGLE_SELECT = 'TOGGLE_SELECT';
var DESELECT_OBJS = exports.DESELECT_OBJS = 'DESELECT_OBJS';
var CHANGE_SELECTION_MODE = exports.CHANGE_SELECTION_MODE = 'CHANGE_SELECTION_MODE';
var SINGLE_SELECTION_MODE = exports.SINGLE_SELECTION_MODE = 'single';
var MULTI_SELECTION_MODE = exports.MULTI_SELECTION_MODE = 'multi';

function toggleSelect(objId) {
  return { type: TOGGLE_SELECT, objId: objId };
}

function changeSelectionMode(mode) {
  return { type: CHANGE_SELECTION_MODE, mode: mode };
}

function deselectObjs() {
  return { type: DESELECT_OBJS };
}

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = isObjectLike;


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _active_node_config = __webpack_require__(520);

var _active_node_config2 = _interopRequireDefault(_active_node_config);

var _underscore = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActiveNodeConfigCollector = function () {
  function ActiveNodeConfigCollector(filterConfig) {
    _classCallCheck(this, ActiveNodeConfigCollector);

    this.filter = filterConfig;
  }

  _createClass(ActiveNodeConfigCollector, [{
    key: 'findActiveFilterItems',
    value: function findActiveFilterItems() {
      var filterItems = this.findActiveAdditionalFilters();
      var treeFilterItem = this.findActiveTreeFilterItem();

      if (treeFilterItem) {
        filterItems.unshift(treeFilterItem);
      }
      return filterItems;
    }
  }, {
    key: 'findActiveTreeFilterItem',
    value: function findActiveTreeFilterItem() {
      var _this = this;

      var activeTreeFilterItem = null;
      (0, _underscore.each)(this.filter.getTreeFilters(), function (treeFilter) {
        (0, _underscore.each)(treeFilter.subFilters, function (subFilter) {
          var activeConfig = _this.findActiveSubFilterItem(subFilter);

          if (activeConfig) {
            activeConfig.parents.push(treeFilter.config);
            activeTreeFilterItem = new _active_node_config2.default(activeConfig.parents, [activeConfig.node]);
          }
        });
      });

      return activeTreeFilterItem;
    }
  }, {
    key: 'findActiveAdditionalFilters',
    value: function findActiveAdditionalFilters() {
      var activeFilters = [];
      (0, _underscore.each)(this.filter.additionalFilters, function (additionalFilter) {
        var activeChildren = (0, _underscore.filter)(additionalFilter.children, function (child) {
          return child.isActive();
        });

        if (activeChildren.length > 0) {
          activeFilters.push(new _active_node_config2.default([additionalFilter], activeChildren));
        }
      });

      return activeFilters;
    }
  }, {
    key: 'findActiveSubFilterItem',
    value: function findActiveSubFilterItem(filterNode) {
      var _this2 = this;

      if (filterNode.isActive()) {
        return { node: filterNode, parents: [] };
      }

      var activeConfig = void 0;

      (0, _underscore.some)(filterNode.children, function (childNode) {
        activeConfig = _this2.findActiveSubFilterItem(childNode);
        if (activeConfig) {
          activeConfig.parents.push(filterNode);
          return activeConfig;
        }
      });
      return activeConfig;
    }
  }]);

  return ActiveNodeConfigCollector;
}();

exports.default = ActiveNodeConfigCollector;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var FilterNode = function () {
  function FilterNode(filter, name, filterDefinition) {
    _classCallCheck(this, FilterNode);

    this.filter = filter;
    this.name = name;
    this.title = filterDefinition.title;
    if (!this.title) {
      this.title = this.fallbackTitle();
    }
  }

  _createClass(FilterNode, [{
    key: 'fallbackTitle',
    value: function fallbackTitle() {
      return capitalize(this.name.replace(/_/g, ' ').trim());
    }
  }]);

  return FilterNode;
}();

exports.default = FilterNode;

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = createAll;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _createProvider = __webpack_require__(921);

var _createProvider2 = _interopRequireDefault(_createProvider);

var _createConnect = __webpack_require__(920);

var _createConnect2 = _interopRequireDefault(_createConnect);

function createAll(React) {
  var Provider = _createProvider2['default'](React);
  var connect = _createConnect2['default'](React);

  return { Provider: Provider, connect: connect };
}

module.exports = exports['default'];

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = createConnect;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilsCreateStoreShape = __webpack_require__(473);

var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

var _utilsShallowEqual = __webpack_require__(923);

var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

var _utilsIsPlainObject = __webpack_require__(922);

var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

var _utilsWrapActionCreators = __webpack_require__(924);

var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);

var _invariant = __webpack_require__(45);

var _invariant2 = _interopRequireDefault(_invariant);

var defaultMapStateToProps = function defaultMapStateToProps() {
  return {};
};
var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};
var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
  return _extends({}, parentProps, stateProps, dispatchProps);
};

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

// Helps track hot reloading.
var nextVersion = 0;

function createConnect(React) {
  var Component = React.Component;
  var PropTypes = React.PropTypes;

  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

    var shouldSubscribe = Boolean(mapStateToProps);
    var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
    var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
    var finalMergeProps = mergeProps || defaultMergeProps;
    var shouldUpdateStateProps = finalMapStateToProps.length > 1;
    var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
    var _options$pure = options.pure;
    var pure = _options$pure === undefined ? true : _options$pure;

    // Helps track hot reloading.
    var version = nextVersion++;

    function computeStateProps(store, props) {
      var state = store.getState();
      var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);

      _invariant2['default'](_utilsIsPlainObject2['default'](stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
      return stateProps;
    }

    function computeDispatchProps(store, props) {
      var dispatch = store.dispatch;

      var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);

      _invariant2['default'](_utilsIsPlainObject2['default'](dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
      return dispatchProps;
    }

    function _computeNextState(stateProps, dispatchProps, parentProps) {
      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
      _invariant2['default'](_utilsIsPlainObject2['default'](mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
      return mergedProps;
    }

    return function wrapWithConnect(WrappedComponent) {
      var Connect = (function (_Component) {
        _inherits(Connect, _Component);

        Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
          return !pure || !_utilsShallowEqual2['default'](this.state.props, nextState.props);
        };

        _createClass(Connect, null, [{
          key: 'displayName',
          value: 'Connect(' + getDisplayName(WrappedComponent) + ')',
          enumerable: true
        }, {
          key: 'WrappedComponent',
          value: WrappedComponent,
          enumerable: true
        }, {
          key: 'contextTypes',
          value: {
            store: storeShape
          },
          enumerable: true
        }, {
          key: 'propTypes',
          value: {
            store: storeShape
          },
          enumerable: true
        }]);

        function Connect(props, context) {
          _classCallCheck(this, Connect);

          _Component.call(this, props, context);
          this.version = version;
          this.store = props.store || context.store;

          _invariant2['default'](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".'));

          this.stateProps = computeStateProps(this.store, props);
          this.dispatchProps = computeDispatchProps(this.store, props);
          this.state = {
            props: this.computeNextState()
          };
        }

        Connect.prototype.computeNextState = function computeNextState() {
          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

          return _computeNextState(this.stateProps, this.dispatchProps, props);
        };

        Connect.prototype.updateStateProps = function updateStateProps() {
          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

          var nextStateProps = computeStateProps(this.store, props);
          if (_utilsShallowEqual2['default'](nextStateProps, this.stateProps)) {
            return false;
          }

          this.stateProps = nextStateProps;
          return true;
        };

        Connect.prototype.updateDispatchProps = function updateDispatchProps() {
          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

          var nextDispatchProps = computeDispatchProps(this.store, props);
          if (_utilsShallowEqual2['default'](nextDispatchProps, this.dispatchProps)) {
            return false;
          }

          this.dispatchProps = nextDispatchProps;
          return true;
        };

        Connect.prototype.updateState = function updateState() {
          var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

          var nextState = this.computeNextState(props);
          if (!_utilsShallowEqual2['default'](nextState, this.state.props)) {
            this.setState({
              props: nextState
            });
          }
        };

        Connect.prototype.isSubscribed = function isSubscribed() {
          return typeof this.unsubscribe === 'function';
        };

        Connect.prototype.trySubscribe = function trySubscribe() {
          if (shouldSubscribe && !this.unsubscribe) {
            this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
            this.handleChange();
          }
        };

        Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
          if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
          }
        };

        Connect.prototype.componentDidMount = function componentDidMount() {
          this.trySubscribe();
        };

        Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          if (!_utilsShallowEqual2['default'](nextProps, this.props)) {
            if (shouldUpdateStateProps) {
              this.updateStateProps(nextProps);
            }

            if (shouldUpdateDispatchProps) {
              this.updateDispatchProps(nextProps);
            }

            this.updateState(nextProps);
          }
        };

        Connect.prototype.componentWillUnmount = function componentWillUnmount() {
          this.tryUnsubscribe();
        };

        Connect.prototype.handleChange = function handleChange() {
          if (!this.unsubscribe) {
            return;
          }

          if (this.updateStateProps()) {
            this.updateState();
          }
        };

        Connect.prototype.getWrappedInstance = function getWrappedInstance() {
          return this.refs.wrappedInstance;
        };

        Connect.prototype.render = function render() {
          return React.createElement(WrappedComponent, _extends({ ref: 'wrappedInstance'
          }, this.state.props));
        };

        return Connect;
      })(Component);

      if (false) {
        Connect.prototype.componentWillUpdate = function componentWillUpdate() {
          if (this.version === version) {
            return;
          }

          // We are hot reloading!
          this.version = version;

          // Update the state and bindings.
          this.trySubscribe();
          this.updateStateProps();
          this.updateDispatchProps();
          this.updateState();
        };
      }

      return Connect;
    };
  };
}

module.exports = exports['default'];

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = createProvider;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilsCreateStoreShape = __webpack_require__(473);

var _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);

function isUsingOwnerContext(React) {
  var version = React.version;

  if (typeof version !== 'string') {
    return true;
  }

  var sections = version.split('.');
  var major = parseInt(sections[0], 10);
  var minor = parseInt(sections[1], 10);

  return major === 0 && minor === 13;
}

function createProvider(React) {
  var Component = React.Component;
  var PropTypes = React.PropTypes;
  var Children = React.Children;

  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);
  var requireFunctionChild = isUsingOwnerContext(React);

  var didWarnAboutChild = false;
  function warnAboutFunctionChild() {
    if (didWarnAboutChild || requireFunctionChild) {
      return;
    }

    didWarnAboutChild = true;
    console.error( // eslint-disable-line no-console
    'With React 0.14 and later versions, you no longer need to ' + 'wrap <Provider> child into a function.');
  }
  function warnAboutElementChild() {
    if (didWarnAboutChild || !requireFunctionChild) {
      return;
    }

    didWarnAboutChild = true;
    console.error( // eslint-disable-line no-console
    'With React 0.13, you need to ' + 'wrap <Provider> child into a function. ' + 'This restriction will be removed with React 0.14.');
  }

  var didWarnAboutReceivingStore = false;
  function warnAboutReceivingStore() {
    if (didWarnAboutReceivingStore) {
      return;
    }

    didWarnAboutReceivingStore = true;
    console.error( // eslint-disable-line no-console
    '<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
  }

  return (function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      return { store: this.store };
    };

    _createClass(Provider, null, [{
      key: 'childContextTypes',
      value: {
        store: storeShape.isRequired
      },
      enumerable: true
    }, {
      key: 'propTypes',
      value: {
        store: storeShape.isRequired,
        children: (requireFunctionChild ? PropTypes.func : PropTypes.element).isRequired
      },
      enumerable: true
    }]);

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      _Component.call(this, props, context);
      this.store = props.store;
    }

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var store = this.store;
      var nextStore = nextProps.store;

      if (store !== nextStore) {
        warnAboutReceivingStore();
      }
    };

    Provider.prototype.render = function render() {
      var children = this.props.children;

      if (typeof children === 'function') {
        warnAboutFunctionChild();
        children = children();
      } else {
        warnAboutElementChild();
      }

      return Children.only(children);
    };

    return Provider;
  })(Component);
}

module.exports = exports['default'];

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = isPlainObject;
var fnToString = function fnToString(fn) {
  return Function.prototype.toString.call(fn);
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

function isPlainObject(obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

  if (proto === null) {
    return true;
  }

  var constructor = proto.constructor;

  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
}

module.exports = exports['default'];

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = shallowEqual;

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var hasOwn = Object.prototype.hasOwnProperty;
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

module.exports = exports["default"];

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = wrapActionCreators;

var _redux = __webpack_require__(108);

function wrapActionCreators(actionCreators) {
  return function (dispatch) {
    return _redux.bindActionCreators(actionCreators, dispatch);
  };
}

module.exports = exports['default'];

/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function thunkMiddleware(_ref) {
  var dispatch = _ref.dispatch;
  var getState = _ref.getState;

  return function (next) {
    return function (action) {
      return typeof action === 'function' ? action(dispatch, getState) : next(action);
    };
  };
}

module.exports = thunkMiddleware;

/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(504);
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),

/***/ 998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(506);
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["b" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (false) {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1000);


/***/ })

/******/ });