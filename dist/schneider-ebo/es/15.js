(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "1hRH":
/*!********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-list_3.entry.js ***!
  \********************************************************/
/*! exports provided: se_list, se_list_group, se_list_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_list", function() { return ListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_list_group", function() { return ListGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_list_item", function() { return ListItemComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _arrow2_up_7bd71b43_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow2_up-7bd71b43.js */ "7Xdj");
/* harmony import */ var _arrow2_right_506c18fe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow2_right-506c18fe.js */ "+ntD");
/* harmony import */ var _utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils-7cccd915.js */ "kXjD");





const listCss = ":host{width:100%;height:100%;position:relative;overflow:auto;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-ms-flexbox;display:-webkit-flex;display:flex;--se-list-group-height:47px;--se-list-group-background:inherit;--se-list-group-indentation:0;--se-list-group-font-weight:inherit;--se-list-item-height:47px;--se-list-item-border-bottom:1px solid;--se-list-item-selected-bar:var(--se-standard);--se-list-item-selected-background:var(--se-alternative-selected);--se-list-item-selected-color:inherit;--se-list-item-indentation-padding:24px}:host(.selected-primary){--se-list-item-selected-bar:var(--se-primary)}:host(.classic){--se-list-group-font-weight:500}:host(.dropdown){--se-list-item-height:32px;--se-list-group-height:32px;--se-list-item-border-bottom:none}:host(.treeview){--se-list-item-height:32px;--se-list-group-height:32px;--se-list-item-indentation-padding:26px;--se-list-item-border-bottom:none}:host(.headline){--se-list-group-height:48px;--se-list-group-background:var(--se-alternative-hover)}";

const ListComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    /**
     * Defines the style of the list.  The default setting is `classic`.
     */
    this.option = 'classic';
    /**
     * Defines if the list element should be selected or not.
     */
    this.selectedColor = 'standard';
    /**
     * Defines if list groups can be collapsed.  The default setting is `true`.
     */
    this.canCollapse = true;
  }
  optionDidChange() {
    Array.from(this.el.querySelectorAll('se-list-item, se-list-group')).forEach((item) => {
      const closeList = item.closest('se-list');
      // Make sure we only change the style of the current list. Handy if list has a dropdown with a different list style
      if (closeList === this.el) {
        item.setOption(this.option);
      }
    });
  }
  canCollapseDidChange() {
    Array.from(this.el.querySelectorAll('se-list-group')).forEach((item) => {
      item.canCollapse = this.canCollapse;
    });
  }
  handleKeyDown(ev) {
    switch (ev.key) {
      case 'ArrowUp': {
        this.focusElement(-1);
        break;
      }
      case 'ArrowDown': {
        this.focusElement(+1);
        break;
      }
      case 'ArrowLeft':
      case 'ArrowRight': {
        // ev.preventDefault();
        const elm = document.activeElement;
        if (elm.nodeName.toUpperCase() === 'SE-LIST-GROUP') {
          elm.toggleCollapseTreeview();
        }
        break;
      }
    }
  }
  focusElement(step) {
    // add all elements we want to include in our selection
    const elms = Array.from(this.el.querySelectorAll('se-list-group, se-list-item'));
    const visibles = elms.filter(item => Object(_utils_7cccd915_js__WEBPACK_IMPORTED_MODULE_3__["i"])(item, true, true));
    const index = visibles.findIndex(el => el === document.activeElement);
    const nextStep = Math.min(Math.max(0, index + step), visibles.length);
    visibles[nextStep].focusElement();
  }
  componentWillLoad() {
    this.optionDidChange();
    this.canCollapseDidChange();
  }
  render() {
    const selectedColor = this.option === 'nav' ? 'primary' : this.selectedColor;
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "list", class: {
        [this.option]: true,
        [`selected-${selectedColor}`]: true,
      } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "option": ["optionDidChange"],
    "canCollapse": ["canCollapseDidChange"]
  }; }
};
ListComponent.style = listCss;

const listGroupCss = ":host{-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-ms-flexbox;display:-webkit-flex;display:flex}se-list-item{background-color:var(--se-list-group-background);font-weight:var(--se-list-group-font-weight);--se-list-item-height:var(--se-list-group-height)}.group-item{--se-list-group-indentation:0;overflow:unset;list-style-type:none;margin:0;-ms-flex:1;flex:1}.selectedChild{--se-list-item-selected-background:transparent}.collapsed{display:none}.treeview-icon{margin-left:-8px;margin-right:-8px}";

const ListGroupComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didGroupClick = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didGroupClick", 7);
    this.didGroupCollapse = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didGroupCollapse", 7);
    /**
     * Defines if the item group is collapsed/closed. The default setting is `false`.
     */
    this.collapsed = false;
    /**
     * Defines the group indentation to add paddings to the list item (used with multiple list groups).
     */
    this.indentation = 1;
    /**
     * Defines if list groups can be collapsed, true by default.
     */
    this.canCollapse = true;
  }
  collapsedChanged() {
    this.checkSelected();
  }
  ChildUpdated() {
    this.checkSelected();
  }
  async toggleCollapseTreeview() {
    this.toggleItems();
  }
  async focusElement() {
    this.listItem.focusElement();
  }
  async setOption(option) {
    this.isTreeview = option === 'treeview';
  }
  checkSelected() {
    if (!this.collapsed) {
      this.selectedChild = false;
    }
    else {
      // TODO: make sure it work if we have a list inside a list...
      Array.from(this.el.querySelectorAll('se-list-item, se-list-group')).forEach((item) => {
        if (item.selected || item.selectedChild) {
          this.selectedChild = true;
          return;
        }
      });
    }
  }
  toggleGroupButton() {
    if (!this.isTreeview) {
      this.toggleItems();
    }
    else if (this.listItem) {
      this.listItem.blurElement();
    }
    this.didGroupClick.emit(true);
  }
  toggleItems() {
    this.collapsed = !this.collapsed;
    this.didGroupCollapse.emit({ collapsed: this.collapsed });
  }
  getClosestParent(selector) {
    return this.el.parentElement && this.el.parentElement.closest(selector);
  }
  getParentConfig() {
    const closestList = this.getClosestParent('se-list');
    if (closestList === null || closestList === void 0 ? void 0 : closestList.option) {
      this.isTreeview = closestList.option === 'treeview';
    }
    const closestGroup = this.getClosestParent('se-list, se-list-group');
    if (closestGroup === null || closestGroup === void 0 ? void 0 : closestGroup.indentation) {
      this.indentation = closestGroup.indentation + 1;
    }
  }
  componentWillLoad() {
    this.getParentConfig();
    this.checkSelected();
  }
  componentDidLoad() {
    this.groupItem.style.setProperty('--se-list-group-indentation', `${this.indentation}`);
  }
  render() {
    let title = this.item;
    if (!!this.description) {
      title = `${title}, ${this.description}`;
    }
    const id = this.el.getAttribute('id');
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "listitem", style: { flex: `${!this.collapsed && this.flex ? this.flex : 0}` } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-list-item", { id: id ? `group-${id}` : null, ref: el => (this.listItem = el), "aria-expanded": this.collapsed, onClick: () => this.toggleGroupButton(), class: {
        selectedChild: !this.selected && this.selectedChild,
      }, selected: this.selectedChild || this.selected, disabled: this.disabled, icon: this.icon, title: title, description: this.description, item: this.item }, this.isTreeview ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { slot: "start", class: "treeview-icon", size: "medium", color: "standard", onClick: e => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleCollapseTreeview();
      }, rotate: this.collapsed ? 90 : 180 }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: _arrow2_up_7bd71b43_js__WEBPACK_IMPORTED_MODULE_1__["a"] }))) : (''), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start", slot: "start" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon", slot: "icon" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "item", slot: "item" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "description", slot: "description" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end", slot: "end" }), !this.isTreeview && this.canCollapse ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { slot: "end", size: "medium", color: "standard", rotate: this.collapsed ? 180 : 0 }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: _arrow2_up_7bd71b43_js__WEBPACK_IMPORTED_MODULE_1__["a"] }))) : ('')), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { ref: el => (this.groupItem = el), role: "list", class: { 'group-item': true, collapsed: this.collapsed } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "collapsed": ["collapsedChanged"]
  }; }
};
ListGroupComponent.style = listGroupCss;

const listItemCss = ".button{border:none;margin:0;overflow:none;position:relative;width:-webkit-fill-available;max-width:100%;min-width:100%;background-color:inherit;color:var(--se-background-alternative-contrast);font:inherit;padding-left:calc( var(--se-list-group-indentation) * var(--se-list-item-indentation-padding) );min-height:var(--se-list-item-height);border-bottom:var(--se-list-item-border-bottom);-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;text-align:left;text-align:start;border-bottom-color:#e6e6e6;border-bottom-color:var(--se-divider);text-decoration:none;cursor:default}.button.selected{background-color:var(--se-list-item-selected-background);color:var(--se-list-item-selected-color)}.button:not([disabled]),.button:not(.disabled){cursor:pointer}.button:not([disabled]):hover,.button:not(.disabled):hover{background-color:#e6e6e6;background-color:var(--se-alternative-hover, #e6e6e6);color:#0f0f0f;color:var(--se-alternative-contrast, #0f0f0f)}.button:focus{outline-width:2px;outline-offset:-1px;outline-color:#007acd;outline-color:var(--se-button-focus, #007acd);outline-style:solid}.selectedBar{position:absolute;top:0;bottom:0;left:0;width:5px;background-color:var(--se-list-item-selected-bar)}.start{margin:0;margin-left:8px;display:-ms-flexbox;display:-webkit-flex;display:flex}.content{min-width:0;padding:0 4px;margin:0;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start center;-ms-flex-align:start center;-webkit-align-items:start center;-moz-align-items:start center;align-items:start center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.content div,.content small{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.content .list-item-label{line-height:24px}.content small{font-size:14px;line-height:14px}";

const ListItemComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didSelectedChange = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didSelectedChange", 7);
  }
  SelectedDidChange() {
    this.didSelectedChange.emit();
  }
  // paddingIndentation = 24;
  async focusElement() {
    this.buttonElm.focus();
  }
  async blurElement() {
    this.buttonElm.blur();
  }
  async setOption(option) {
    this.showNavIcon = option === 'nav';
  }
  getClosestParent() {
    // get the closest between se-list or se-list-group
    return this.el.parentElement && this.el.parentElement.closest('se-list');
  }
  getParentConfig() {
    const closest = this.getClosestParent() || {};
    if (closest.option && closest.option === 'nav') {
      this.showNavIcon = true;
    }
  }
  componentWillLoad() {
    this.getParentConfig();
  }
  render() {
    let myDescription = null;
    let title = this.item;
    if (!!this.description) {
      myDescription = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("small", null, this.description);
      title = `${title}, ${this.description}`;
    }
    const id = this.el.getAttribute('id');
    const TagType = this.href === undefined ? 'button' : 'a';
    const attrs = {};
    if (TagType === 'a') {
      attrs.href = this.href;
    }
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({ role: "listitem", onClick: () => this.buttonElm.blur() }, attrs, { ref: el => (this.buttonElm = el), title: title, class: {
        selected: this.selected,
        button: true,
        disabled: this.disabled,
      }, id: id ? `wc-${id}` : '' }), this.selected ? Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "selectedBar" }) : '', Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "start" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), !!this.icon ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { color: this.iconColor }, this.icon)) : (''), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "icon" })), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-item-label" }, this.item, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "item" })), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("small", null, myDescription), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "description" })), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "end" }), this.showNavIcon ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { size: "medium", color: "standard" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: _arrow2_right_506c18fe_js__WEBPACK_IMPORTED_MODULE_2__["a"] }))) : ('')));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "selected": ["SelectedDidChange"]
  }; }
};
ListItemComponent.style = listItemCss;




/***/ })

}]);
//# sourceMappingURL=15.js.map