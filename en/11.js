(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "0sR9":
/*!************************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-filtration.entry.js ***!
  \************************************************************/
/*! exports provided: se_filtration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_filtration", function() { return FiltrationComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _arrow2_up_7bd71b43_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow2_up-7bd71b43.js */ "7Xdj");



// Copyright Joyent, Inc. and other Node contributors.

var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };

var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}
var events = EventEmitter;
var once_1 = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    }    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}
events.once = once_1;

const arrow2Down = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M657 432c8 8 8 22 0 30L527 592c-5 4-10 6-15 6-6 0-11-2-16-6L366 462c-8-8-8-22 0-30 9-8 22-8 30 0l116 115 115-115c8-8 21-8 30 0z"/></svg>`;

const actionSearchStroke = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M831 801c8 8 8 22 0 30-4 4-10 6-15 6-6 0-11-2-15-6L645 675c-49 42-112 67-181 67-153 0-277-125-277-278s124-277 277-277 278 124 278 277c0 69-25 132-67 181zM230 464c0 130 105 235 234 235 64 0 121-25 164-66 0-1 1-2 2-3s2-2 3-2c41-43 66-100 66-164 0-129-105-234-235-234-129 0-234 105-234 234zm234-192c12 0 22 10 22 22 0 11-10 21-22 21-82 0-149 67-149 149 0 12-10 22-21 22-12 0-22-10-22-22 0-106 86-192 192-192z"/></svg>`;

const filtrationCss = ":host(.isMobile){margin-top:-1px}.panel{display:none}.panel.active{display:block}.content{overflow:hidden}.content.scroll{overflow-y:auto}.view-more{display:-ms-flexbox;display:flex;margin-left:10px;color:#42b4e6;color:var(--se-secondary, #42b4e6);cursor:pointer}.select-all{margin-right:16px;color:#42b4e6;color:var(--se-secondary, #42b4e6);cursor:pointer}.search-box{display:none}.search-box.active{display:active}.selected-values{color:#626469;color:var(--se-standard, #626469);font-weight:300;line-height:1.2;font-size:14px;overflow:hidden;text-overflow:ellipsis;max-height:calc($spacing-large * 2)}.link{cursor:pointer;padding-right:16px}.icon-collapse{margin-left:4px}h5{padding:4px 4px 4px 12px;font-weight:300;line-height:25px;font-size:16px;font-weight:bold}.background-standard{background-color:#f7f7f7;background-color:var(--se-background-standard, #f7f7f7)}";

const FiltrationComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didSearch = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didSearch", 7);
    this.didSelectAll = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didSelectAll", 7);
    this.nbItemOffset = 2;
    /**
     * Text for the placeholder. the default is `enter text`
     */
    this.labelHint = 'enter text';
    /**
     * Boolean property to indicate if the content will be visible or hidden
     * collapsed = `true` => content is shown
     * collapsed = `false` => content is hidden
     */
    this.collapsed = true;
    /**
     * Boolean property to indicate if there should be a shadow around the box
     * valid values are `true` or `false`
     */
    this.shadow = false;
    /**
     * Default value to display for viewing more content
     */
    this.labelViewMore = 'View More';
    /**
     * Default text to display for viewing less content
     */
    this.labelViewLess = 'View Less';
    /**
     * Variable to show 'Select all'
     */
    this.labelSelectAll = 'Select All';
    /**
     * Minimum number of items to be displayed when collapsed. Default is `5`
     */
    this.minItems = 5;
    /**
     * Maximum number of items to be displayed when expanded. Default is `10`
     */
    this.maxItems = 10;
    /**
     * Optional property to indicate if multiple selections will be made
     * `true` = multiple selection | `false` = single selection
     */
    this.showSelectAll = false;
    /**
     * Optional property to show a search box inside the form
     */
    this.searchable = false;
    this.canViewMore = false;
    this.isViewMore = false;
    this.items = [];
    this.setSearch = e => {
      this.search = e.target.value;
      this.didSearch.emit(this.search);
    };
  }
  /**
   * Function to set the dropdown expanded
   */
  setExpanded() {
    this.collapsed = !this.collapsed;
    this.isViewMore = false;
  }
  /**
   * Function to set flag when user clicked `View More` or `Veiw Less`
   */
  setViewMore() {
    this.isViewMore = !this.isViewMore;
  }
  watchItemList() {
    // If we add a list of item after the component is loaded, we need
    // to update the node and re-calculate the show more/less feature
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length || mutation.removedNodes.length) {
          this.setItemsArray();
        }
      });
    });
    this.observer.observe(this.el, { childList: true });
  }
  setItemsArray() {
    this.items = Array.from(this.el.querySelectorAll('se-list-item')).filter((item) => {
      // const closeList = item.closest('se-list');
      // Make sure we only change the style of the current list.
      // If there is a another list like a dropdown, we should ignore it.
      return (item.closest('se-filtration, se-list, se-list-group') === this.el);
    });
    // console.log('this.items.length', this.items.length);
    this.canViewMore = this.items.length > this.minItems + this.nbItemOffset;
  }
  componentDidLoad() {
    this.setItemsArray();
  }
  componentWillLoad() {
    this.mobileMedia = window.matchMedia('only screen and (max-width: 601px)');
    // Initialize isMobile variable
    this.isMobile = this.mobileMedia.matches;
    // Add listener for future change
    this.mobileMedia.addListener(mediaQuery => (this.isMobile = mediaQuery.matches));
    this.watchItemList();
  }
  componentWillUnload() {
    if (this.mobileMedia) {
      this.mobileMedia.removeListener();
    }
    this.observer.disconnect();
  }
  /**
   * Function to emit event to select all items
   */
  selectAllItems() {
    this.didSelectAll.emit('all');
  }
  render() {
    var _a, _b;
    const nbItems = (_a = this.items) === null || _a === void 0 ? void 0 : _a.length;
    let listboxHeight = 'auto';
    if (nbItems) {
      // calculate height of an element
      const firstItemHeight = window
        .getComputedStyle(this.items[0])
        .getPropertyValue('--se-list-item-height');
      const height = parseInt(firstItemHeight, 10);
      if (this.isViewMore) {
        // if we have a bit more item, than max item, we still show all item
        listboxHeight = `${height * this.maxItems}px`;
      }
      else if (nbItems > this.minItems + this.nbItemOffset) {
        listboxHeight = `${height * this.minItems}px`;
      }
    }
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { isMobile: this.isMobile } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-block", { class: { shadow: this.shadow, isMobile: this.isMobile }, corner: this.isMobile ? 'none' : 'small', margin: this.isMobile ? 'none' : this.shadow ? 'medium' : 'small', option: this.shadow && !this.isMobile ? 'card-old' : 'card' }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-block-header", { option: "fill", divider: true }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h5", null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("bold", null, this.item), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "selected-values" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "selectedItem" }))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { slot: "end" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { color: "standard", "icon-only": true, size: "medium", onClick: () => this.setExpanded() }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "link", innerHTML: this.collapsed ? _arrow2_up_7bd71b43_js__WEBPACK_IMPORTED_MODULE_1__["a"] : arrow2Down })))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
        panel: true,
        active: this.collapsed,
        'background-standard': this.isMobile,
      } }, this.searchable && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-form-field", { type: "input", option: "stacked", block: true }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "with-icon" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "search", placeholder: this.labelHint, onInput: this.setSearch }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { class: "icon-collapse" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: actionSearchStroke })))))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { style: { height: listboxHeight }, class: { content: true, scroll: this.isViewMore } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-list", { option: "dropdown", "selected-color": "primary" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), (this.canViewMore || this.showSelectAll) && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-block-footer", null, this.canViewMore ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { 'view-more': true, active: this.collapsed }, slot: "start", onClick: () => this.setViewMore() }, this.isViewMore
      ? this.labelViewLess
      : `${this.labelViewMore} (${nbItems - this.minItems})`, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: this.isViewMore ? _arrow2_up_7bd71b43_js__WEBPACK_IMPORTED_MODULE_1__["a"] : arrow2Down })))) : (''), this.showSelectAll ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "select-all", onClick: () => this.selectAllItems() }, this.labelSelectAll, ((_b = this.search) === null || _b === void 0 ? void 0 : _b.length) ? `(${nbItems})` : '')) : ('')))))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
FiltrationComponent.style = filtrationCss;




/***/ })

}]);
//# sourceMappingURL=11.js.map