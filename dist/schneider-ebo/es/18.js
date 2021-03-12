(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "amZ7":
/*!***********************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-stepper_2.entry.js ***!
  \***********************************************************/
/*! exports provided: se_stepper, se_stepper_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_stepper", function() { return StepperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_stepper_item", function() { return StepperItemComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");


const stepperCss = "nav{color:#3dcd58;color:var(--se-primary, #3dcd58)}ol{display:-ms-flexbox;display:flex;padding:16px;margin-bottom:0;height:24px}.stepper-item-wrapper{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.stepper-item-wrapper.block:not(:last-child){-ms-flex:1;flex:1}.indicator{text-align:center;font-size:14px;line-height:24px;font-weight:700;width:24px;height:24px;border-radius:100%;color:#ffffff;color:var(--se-alternative, #ffffff);background-color:#494b50;background-color:var(--se-standard-hover, #494b50)}.indicator.se-icon{font-family:\"se-icon\";font-size:24px;font-weight:400}.indicator.se-icon:after{content:\"notification_ok\";font-size:32px;position:relative;right:28px}@supports (-ms-ime-align: auto){.indicator.se-icon:after{top:1px}}@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){.indicator.se-icon:after{top:1px}}.stepper-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;white-space:nowrap;cursor:pointer}.stepper-item.readonly{cursor:default}.stepper-item.disabled{pointer-events:none}.stepper-item:not(.readonly) .stepper-item-label:hover{font-weight:400}.stepper-item-label{display:inline;color:#494b50;color:var(--se-standard-hover, #494b50);font-size:16px;font-weight:700;line-height:19px;margin:0 8px}se-divider{width:25px;margin-right:8px}se-divider.block{width:100%}.primary .selected .indicator{background-color:#3dcd58;background-color:var(--se-primary, #3dcd58)}.primary .selected .stepper-item-label{color:var(--se-focus, )}.alternative .selected .indicator{background-color:#ffffff;background-color:var(--se-alternative, #ffffff);color:#3dcd58;color:var(--se-primary, #3dcd58)}.alternative .selected .stepper-item-label{color:#ffffff;color:var(--se-alternative, #ffffff)}";

const StepperComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.stepperItems = [];
    /**
     * Sets the background color of your stepper.
     * The default setting is `primary`, implementing a green background for the stepper visual items.
     * The `alternative` setting implements a white background for the stepper visual items. This setting is best used against a gray background.
     */
    this.color = 'primary';
    /**
     * Defines if the stepper items must be completed sequentially.
     * The default setting is `true`, each stepper item must be validated before advancing to the next step.
     * `false` allows each step to be selected in any order.
     */
    this.linear = true;
    /**
     * Defines if the stepper takes the whole space.
     */
    this.block = false;
    /**
     * Defines if the stepper items is interactive or not.
     * The default setting is `true`, each stepper item can be interacted with. `linear` keeps its same interaction limitation.
     * `false` disabled the interactivness. It overrides the individual stepper item `interactive` property.
     */
    this.interactive = true;
  }
  /**
   * Call the `reset` method to reset the stepper to the indicated step.  This also invalidates any validated steps.
   * It no step parameter is provided, it will reset to the first stepper item.
   */
  async reset(step = 1) {
    if (step >= this.getItemStep(this.selectedItem)) {
      return; // don't advance the stepper when clicking the reset button
    }
    this.stepperItems.forEach((item) => {
      if (this.getItemStep(item) >= step) {
        item.validated = false;
      }
    });
    this.selectStep(this.stepperItems[step - 1]);
  }
  /**
   * Call the `previous` method to navigate to the previous step from the step that is currently selected.
   */
  async previous() {
    // do not trigger this method when the first stepper item is the active item
    if (this.getItemStep(this.selectedItem) > 1) {
      const index = this.stepperItems.indexOf(this.selectedItem);
      this.selectStep(this.stepperItems[index - 1]);
    }
  }
  /**
   * Call the `next` method to navigate to the next step from the step that is currently selected.
   * This will not work in linear mode if the next step is not validated.
   */
  async next(validate) {
    if (validate) {
      this.selectedItem.validated = true;
    }
    if (!this.linear || this.selectedItem.validated) {
      const index = this.stepperItems.indexOf(this.selectedItem);
      this.selectStep(this.stepperItems[index + 1]);
    }
  }
  onItemClicked(item) {
    if (!this.canItemBeSelected(item)) {
      return;
    }
    this.selectStep(item);
  }
  selectStep(item) {
    if (this.selectedItem) {
      this.selectedItem.active = false;
    }
    this.selectedItem = item;
    this.selectedItem.active = true;
  }
  itemValidated(value) {
    this.validatedChanged = value;
  }
  getItemStep(item) {
    return this.stepperItems.indexOf(item) + 1;
  }
  checkIfPreviousItemValidated(item) {
    if (this.getItemStep(item) > 1 && this.linear) {
      return this.stepperItems[this.stepperItems.indexOf(item) - 1].validated;
    }
    return true;
  }
  canItemBeSelected(item) {
    if (!this.linear || item.validated || this.getItemStep(item) === 1) {
      return true;
    }
    const itemIndex = this.stepperItems.indexOf(item);
    const previousItems = this.stepperItems.slice(0, itemIndex);
    return previousItems.every((_item) => _item.validated);
  }
  renderList() {
    return this.stepperItems.map((item) => {
      const itemStep = this.getItemStep(item);
      const isReadOnly = !(this.interactive && item.interactive);
      return [
        Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { class: {
            'stepper-item-wrapper': true,
            block: this.block,
            selected: this.getItemStep(this.selectedItem) === itemStep ||
              item.validated,
          } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
            'stepper-item': true,
            disabled: !this.checkIfPreviousItemValidated(item),
            readonly: isReadOnly,
          }, onClick: event => {
            if (isReadOnly) {
              event.preventDefault();
              return;
            }
            this.selectStep(item);
          } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: {
            indicator: true,
            'se-icon': item.validated && !item.active,
          } }, itemStep), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "stepper-item-label" }, item.label)), itemStep !== this.stepperItems.length ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-divider", { class: { block: this.block } })) : ('')),
      ];
    });
  }
  watchItemList() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          this.setItemsArray();
        }
        if (mutation.removedNodes.length) {
          this.setItemsArray();
        }
      });
    });
    this.observer.observe(this.el, { childList: true });
  }
  setItemsArray() {
    this.stepperItems = Array.from(this.el.querySelectorAll('se-stepper-item'));
    let previousItemValidated = true;
    this.stepperItems.forEach((item) => {
      item.interactive =
        item.interactive === undefined ? true : !!item.interactive;
      if (this.linear) {
        item.validated = !!item.validated && previousItemValidated;
      }
      previousItemValidated = item.validated;
    });
    const selectionnableItems = this.stepperItems.filter(this.canItemBeSelected.bind(this));
    const selectedItem = selectionnableItems.reverse().find((item) => item.active) ||
      selectionnableItems.find((item) => !item.validated) ||
      this.stepperItems[0];
    this.stepperItems.forEach((item) => {
      item.active = selectedItem === item;
    });
    this.selectStep(selectedItem);
  }
  componentDidLoad() {
    this.setItemsArray();
    this.watchItemList();
  }
  disconnectedCallback() {
    this.stepperItems.length = 0;
    this.selectedItem = undefined;
    this.observer.disconnect();
  }
  render() {
    return [
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { class: this.color }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ol", null, this.renderList())),
      Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null),
    ];
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
StepperComponent.style = stepperCss;

const stepperItemCss = ":host(.navitem-hidden){display:none !important}";

const StepperItemComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didValidate = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didValidate", 7);
    /**
     * Indicates if the stepper item is interactive or not.
     * The default setting is `true`, the stepper item can be interacted with.
     * `false` disabled the interactivness.
     */
    this.interactive = true;
  }
  validatedDidChange() {
    this.didValidate.emit(this.validated);
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: [this.active ? 'active' : 'navitem-hidden'].join(' ') }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
  static get watchers() { return {
    "validated": ["validatedDidChange"]
  }; }
};
StepperItemComponent.style = stepperItemCss;




/***/ })

}]);
//# sourceMappingURL=18.js.map