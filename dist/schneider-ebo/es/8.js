(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "qzTh":
/*!************************************************************!*\
  !*** ./node_modules/@se/web-ui/esm/se-checkbox_7.entry.js ***!
  \************************************************************/
/*! exports provided: se_checkbox, se_chip, se_dropdown, se_form_field, se_radio, se_radio_group, se_slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_checkbox", function() { return CheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_chip", function() { return ChipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_dropdown", function() { return DropdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_form_field", function() { return FormFieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_radio", function() { return RadioComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_radio_group", function() { return RadioGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "se_slider", function() { return SliderComponent; });
/* harmony import */ var _index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3d6c5e6f.js */ "0Adb");
/* harmony import */ var _action_delete_cross_95261586_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action_delete_cross-95261586.js */ "l3Vg");
/* harmony import */ var _ResizeObserver_es_02979d4e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResizeObserver.es-02979d4e.js */ "dlWk");




const checkboxCss = ":host{display:-ms-inline-flexbox;display:inline-flex}.p-small{padding:4px}.p-medium{padding:8px}.p-large{padding:16px}.required{color:#dc0a0a;color:var(--se-error, #dc0a0a);padding-left:3px}.label-wrap{margin-right:8px;margin-left:8px}input{height:0;width:0;opacity:0;margin:0;position:absolute;clip:rect(1px, 1px, 1px, 1px)}.label-right{-ms-flex-flow:row-reverse;flex-flow:row-reverse}.wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.wrapper.disabled,.wrapper[disabled]{cursor:default}button{cursor:pointer}button:focus{outline-width:2px;outline-color:#007acd;outline-color:var(--se-button-focus, #007acd);outline-style:solid}button[disabled]{cursor:default;color:#cbcbcb;opacity:0.5}button[disabled].active.selected,button[disabled].inactive.selected{color:#ffffff;color:var(--se-alternative, #ffffff)}.opt-checkbox{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}.opt-checkbox .container{position:relative;padding-left:16px;margin-left:8px}.opt-checkbox .container.label-left{padding-left:0;margin:0}.opt-checkbox .container.label-left .checkmark{left:auto;margin-left:8px}.opt-checkbox .checkmark{position:absolute;margin:0;margin-top:-8px;padding:0;left:-4px;height:14px;width:14px;background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);border:1px solid;border-color:#9fa0a4;border-color:var(--se-border, #9fa0a4);border-radius:2px;-webkit-transition:0.2s;transition:0.2s}.opt-checkbox .checkmark.checked.primary,.opt-checkbox .checkmark.indeterminate.primary{background-color:#3dcd58;background-color:var(--se-primary, #3dcd58);border:1px solid;border-color:#3dcd58;border-color:var(--se-primary, #3dcd58)}.opt-checkbox .checkmark.checked.secondary,.opt-checkbox .checkmark.indeterminate.secondary{background-color:#42b4e6;background-color:var(--se-secondary, #42b4e6);border:1px solid;border-color:#42b4e6;border-color:var(--se-secondary, #42b4e6)}.opt-checkbox .checkmark.checked.success,.opt-checkbox .checkmark.indeterminate.success{background-color:#3dcd58;background-color:var(--se-success, #3dcd58);border:1px solid;border-color:#3dcd58;border-color:var(--se-success, #3dcd58)}.opt-checkbox .checkmark.checked:after,.opt-checkbox .checkmark.indeterminate:after{display:block}.opt-checkbox .checkmark:after{content:\"\";position:absolute;display:none}.opt-checkbox .checkmark.checked:after{bottom:3px;left:5px;width:3px;height:9px;border:solid;border-color:#ffffff;border-width:0 1px 1px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.opt-checkbox .checkmark.indeterminate:after{bottom:1px;left:6px;height:10px;border-style:solid;-o-border-image:initial;border-image:initial;border-color:white;border-width:0px 1px 0px 0px;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.opt-checkbox .checkmark[disabled]{opacity:0.5}.opt-checkbox .checkmark:focus{outline-offset:1px}.opt-switch .container{width:44px;height:26px;display:inline-block;position:relative}.opt-switch .checkmark{display:block;margin:0;padding:0;width:100%;height:100%;border-radius:100%}.opt-switch .checkmark:before,.opt-switch .checkmark:after{top:0;left:0;content:\"\";position:absolute}.opt-switch .checkmark:before{width:100%;height:100%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;border:1px solid;border-color:#9fa0a4;border-color:var(--se-border, #9fa0a4);background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);border-radius:13px;-webkit-transition:all 0.2s ease-out 0.1s;transition:all 0.2s ease-out 0.1s;-webkit-transform:scale(1);transform:scale(1)}.opt-switch .checkmark:after{top:50%;left:1px;z-index:3;-webkit-transition:-webkit-transform 0.1s linear;transition:-webkit-transform 0.1s linear;transition:transform 0.1s linear;transition:transform 0.1s linear, -webkit-transform 0.1s linear;width:24px;height:24px;-webkit-transform:translate3d(0, -50%, 0);transform:translate3d(0, -50%, 0);background-color:#fff;border-radius:100%;-webkit-box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.3);box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.3)}.opt-switch .checkmark.checked:before{border:1px solid;background-color:#3dcd58;background-color:var(--se-success, #3dcd58);border-color:#3dcd58;border-color:var(--se-success, #3dcd58)}.opt-switch .checkmark.checked:after{-webkit-transform:translate3d(75%, -50%, 0);transform:translate3d(75%, -50%, 0)}.opt-switch .checkmark[disabled]:before{opacity:0.5}.opt-switch .checkmark:focus{outline-offset:-1px}.opt-onoff .on-off-wrapper{display:-ms-inline-flexbox;display:inline-flex;border:1px solid;border-color:#9fa0a4;border-color:var(--se-border, #9fa0a4);border-radius:3px}.opt-onoff button{color:#0f0f0f;color:var(--se-background-alternative-contrast, #0f0f0f);background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);padding:6px 8px;border:none;height:32px;font-size:14px;font-family:inherit;line-height:13px;font-weight:300;-webkit-transition:0.2s;transition:0.2s}.opt-onoff button.active{border-top-left-radius:2px;border-bottom-left-radius:2px;margin-right:0}.opt-onoff button.active.selected{color:#ffffff;color:var(--se-success-contrast, #ffffff);background-color:#3dcd58;background-color:var(--se-success, #3dcd58)}.opt-onoff button.inactive{border-top-right-radius:2px;border-bottom-right-radius:2px;margin-left:0}.opt-onoff button.inactive.selected{color:#ffffff;color:var(--se-error-contrast, #ffffff);background-color:#dc0a0a;background-color:var(--se-error, #dc0a0a)}.opt-onoff button:focus{outline-offset:-1px}.header button{height:24px;font-size:12px}";

const CheckboxComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didChange = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didChange", 7);
    /**
     * Determines the visual appearance of the component.
     * `checkbox` is the default option, which will render the component like a standard HTML checkbox.
     * `switch` renders the component like a toggle switch.
     * `onoff` renders the component like an "on/off" switch, with a red "off" button and a green "on" button.
     */
    this.option = 'checkbox';
    /**
     * Adds a red asterisk if the checkbox is required when used in a form field.  Default is `false`.
     */
    this.required = false;
    /**
     * Defines the color of the checkbox for when the option is set to `checkbox` or `switch`.
     * The default value is `success`, rendering a green color.
     * The `secondary` setting renders a blue color.
     */
    this.color = 'success';
    /**
     * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
     */
    this.disabled = false;
    /**
     * Optional property that defines if the checkbox is in indeterminate state (only work with option="checkbox").  Set to `false` by default.
     */
    this.indeterminate = false;
    /**
     * Defines the text the user will see for the "on" or "active" part of the checkbox when option is set to `onoff`.  Set to `ON` by default.
     */
    this.textOn = 'ON';
    /**
     * Defines the text the user will see for the "off" or "inactive" part of the checkbox when option is set to `onoff`.  Set to `OFF` by default.
     */
    this.textOff = 'OFF';
    /**
     * Reduces the visual height of the checkbox when the option is set to `onoff`.
     * Useful if the on/off checkbox is within a header element.
     */
    this.header = false;
    /**
     * optional property. define the padding around the button
     * `none` no padding.
     * `small` 4px padding: default
     * `medium` 8px padding.
     * `large` 16px padding.
     */
    this.padding = 'none';
  }
  /**
   * Sets the required property on the checkbox element.  Used when the checkbox is within a form field.
   */
  async setRequired() {
    this.required = true;
  }
  handleClick(state, event = null) {
    if (event !== null) {
      event.stopPropagation();
      event.preventDefault();
    }
    if (!this.disabled) {
      this.selected = state;
      const checkboxObject = { value: this.value, selected: this.selected };
      this.didChange.emit(checkboxObject);
    }
  }
  toggleSelect() {
    this.handleClick(!this.selected);
  }
  componentWillLoad() {
    // to take care of angular bundling issue:
    this.selected =
      this.selected === undefined ? !!this.el['checked'] : this.selected;
    if (!this.labelPos) {
      this.labelPos = this.option === 'checkbox' ? 'right' : 'left';
    }
  }
  render() {
    let markup;
    const id = this.el.getAttribute('id');
    switch (this.option) {
      case 'onoff':
        markup = (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "on-off-wrapper" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { disabled: this.disabled, class: { active: true, selected: this.selected }, onClick: e => this.handleClick(true, e), id: id ? `wc-${id}-active` : '' }, this.textOn), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { disabled: this.disabled, class: { inactive: true, selected: !this.selected }, onClick: e => this.handleClick(false, e), id: id ? `wc-${id}-inactive` : '' }, this.textOff)));
        break;
      default:
        markup = (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "container", onClick: () => this.toggleSelect() }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "checkbox", tabindex: "-1", checked: this.selected, disabled: this.disabled, indeterminate: this.indeterminate, value: this.value, id: id ? `wc-${id}` : '' }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: {
            checkmark: true,
            [this.color]: !!this.color,
            checked: this.selected && !this.indeterminate,
            indeterminate: this.indeterminate,
          }, disabled: this.disabled })));
        break;
    }
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: {
        [`label-${this.labelPos}`]: !!this.labelPos,
        disabled: this.disabled,
        wrapper: true,
        [`opt-${this.option}`]: true,
        [`p-${this.padding}`]: !!this.padding,
        header: !!this.header,
        'no-label': !this.label,
      } }, this.label ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "label-wrap" }, this.label, this.required && Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "required" }, "*"))) : (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "\u00A0")), markup));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
CheckboxComponent.style = checkboxCss;

const chipCss = ".se-chip{display:-ms-inline-flexbox;display:inline-flex;margin:4px;min-height:30px;padding-left:8px;padding-right:8px;font-size:16px;line-height:25px;text-align:left;background:transparent;outline:none;border-radius:16px;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;-webkit-transition:0.2s;transition:0.2s}.clickable.can-close,.can-close{cursor:default}.clickable{cursor:pointer}.clickable:focus{outline-offset:1px;outline-width:2px;outline-color:#007acd;outline-color:var(--se-button-focus, #007acd);outline-style:solid}.nano{min-height:22px;font-size:14px;line-height:17px}.nano se-icon{font-size:22px;margin-right:-6px}.value{padding:0 4px 0 4px}se-icon{margin-top:-1px;cursor:pointer;font-size:24px;margin-right:-4px}se-icon[data-hide]{display:none}@supports (-ms-ime-align: auto){.se-icon{top:0}}.standard{border:1px solid;border-color:#626469;border-color:var(--se-standard, #626469);color:#626469;color:var(--se-standard, #626469)}.standard.clickable:hover,.standard.clickable:focus{color:#ffffff;color:var(--se-standard-contrast, #ffffff);background-color:#494b50;background-color:var(--se-standard-hover, #494b50)}.standard:active,.standard.selected{color:#ffffff;color:var(--se-standard-contrast, #ffffff);background-color:#2f3136;background-color:var(--se-standard-selected, #2f3136);border-color:#333333;border-color:var(--se-border-focus, #333333)}.alternative{border:1px solid;border-color:#ffffff;border-color:var(--se-alternative, #ffffff);color:#ffffff;color:var(--se-alternative, #ffffff)}.alternative.clickable:hover,.alternative.clickable:focus{color:#0f0f0f;color:var(--se-alternative-contrast, #0f0f0f);background-color:#e6e6e6;background-color:var(--se-alternative-hover, #e6e6e6)}.alternative:active,.alternative.selected{color:#0f0f0f;color:var(--se-alternative-contrast, #0f0f0f);background-color:#cccccc;background-color:var(--se-alternative-selected, #cccccc);border-color:#333333;border-color:var(--se-border-focus, #333333)}.disabled,[disabled],[disabled].value,[disabled]:hover,[disabled]:focus{opacity:0.5;cursor:default}.disabled se-icon,[disabled] se-icon,[disabled].value se-icon,[disabled]:hover se-icon,[disabled]:focus se-icon{cursor:default}.display-block{width:100%;margin-top:8px;margin-left:0;margin-right:0;padding:0;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1 1 auto;-moz-box-flex:1;-moz-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-pack:justify;-moz-box-pack:justify;-ms-flex-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.display-block .value{width:100%}.display-block se-icon{margin-right:-3px;padding-right:4px}";

const ChipComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didClose = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didClose", 7);
    /**
     * Defines the size of the chip.
     * `nano` sets the font to 14px and the height to 24px.
     * `small` is the default option, with a 16px font and a 32px height.
     */
    this.size = 'small';
    /**
     * Defines the background color of the chip.  The default setting is `standard`, which is a light gray color.
     */
    this.color = 'standard';
    /**
     * Indicates whether or not the chip has a close button.  Set to `false` by default.
     */
    this.canClose = false;
    /**
     * Indicates whether or not the chip is selected.  Set to `false` by default.
     */
    this.selected = false;
    /**
     * Indicates whether or not the chip is disabled.  Set to `false` by default.
     */
    this.disabled = false;
    /**
     * Indicates whether or not the chip can changed state when hover or clicked on.  Set to `false` by default.
     */
    this.readonly = false;
  }
  closeChip() {
    if (!this.disabled) {
      this.didClose.emit(this.value);
    }
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: () => this.el.blur(), disabled: this.disabled, class: {
        'se-chip': true,
        [this.size]: !!this.size,
        [this.color]: !!this.color,
        'can-close': this.canClose,
        clickable: !(this.readonly || this.disabled),
        selected: this.selected,
        'display-block': this.block,
      } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "start" }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "value" }, this.value), this.canClose ? (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("se-icon", { class: "close", option: "button", disabled: this.disabled, onClick: () => this.closeChip() }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { innerHTML: _action_delete_cross_95261586_js__WEBPACK_IMPORTED_MODULE_1__["a"] }))) : ('')));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
ChipComponent.style = chipCss;

const dropdownCss = ":host{position:relative;display:inline-block}[hidden]{display:none}.left{left:0}.right{right:0}.top{bottom:calc(100% + $spacing-small)}.bottom{top:calc(100% + $spacing-small)}.dropdown-toggle ::slotted(*){cursor:pointer}.content{color:#0f0f0f;color:var(--se-background-alternative-contrast, #0f0f0f);background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);min-width:100px;-webkit-box-shadow:0px 8px 16px 0px var(--se-shadow);box-shadow:0px 8px 16px 0px var(--se-shadow);visibility:hidden;opacity:0;position:absolute;overflow:auto;border-radius:2px;z-index:-1}.content.show{visibility:visible;opacity:1;z-index:5}";

const DropdownComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didOpen = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didOpen", 7);
    this.didClose = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didClose", 7);
    this.cancelAllDropdown = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelAllDropdown", 5);
    /**
     * Defines how to align the dropdown container.
     * `right`: Position the container with respect to the right side of the trigger element.
     * `left`: Position the container with respect to the left side of the trigger element.
     */
    this.alignment = 'left';
    /**
     * Defines how to vertically align the dropdown container.
     * `top`: Position the container with respect to the top side of the trigger element.
     * `bottom`: Position the container with respect to the bottom side of the trigger element.
     */
    this.verticalAlignment = 'bottom';
    /**
     * Sets the maximum width of the dropdown.  Default setting is "200px".
     */
    this.maxWidth = '200px';
    /**
     * Sets the maximum height of the dropdown.  Default setting is "400px".
     */
    this.maxHeight = '400px';
    this.opened = false;
  }
  /**
   * Method to open the dropdown from outside its parent element.
   */
  async open() {
    this.opened = true;
    this.didOpen.emit();
  }
  /**
   * Method to close the dropdown from outside its parent element.
   */
  async close() {
    this.opened = false;
    this.didClose.emit();
  }
  handleClick() {
    if (this.opened) {
      this.close();
    }
  }
  handleCancelAllDropdown() {
    if (!this.isActive && this.opened) {
      this.close();
    }
  }
  _toggle(ev) {
    ev.stopPropagation();
    this.isActive = true;
    if (this.opened) {
      this.close();
    }
    else {
      // close others only when trying to open one
      this.cancelAllDropdown.emit();
      this.open();
    }
    this.isActive = false;
    // console.log(ev)
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { "aria-haspopup": "true", "aria-expanded": this.opened, onClick: ev => this._toggle(ev) }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "trigger" })), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
        [this.alignment]: true,
        [this.verticalAlignment]: true,
        show: this.opened,
        content: true,
      }, style: { maxWidth: this.maxWidth, maxHeight: this.maxHeight } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
DropdownComponent.style = dropdownCss;

const formFieldCss = "se-form-field .form-field-wrapper{display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}se-form-field .ff-padding-small{padding:4px 1px}se-form-field .ff-padding-medium{padding:8px 1px}se-form-field .ff-padding-none{padding:1px}se-form-field .with-label{font-weight:550;width:35%;display:-ms-flexbox;display:flex;margin-left:8px;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:flex-start;-moz-align-items:flex-start;align-items:flex-start;font-weight:300;line-height:1.2;font-size:14px;font-weight:bold}se-form-field .with-label>span{display:-ms-flexbox;display:flex;min-height:40px;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}se-form-field label{width:100%;text-align:center;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}se-form-field label>span{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;min-width:140px}se-form-field label .required{color:#dc0a0a;color:var(--se-error, #dc0a0a);padding-left:3px}se-form-field .align-left{text-align:left !important;-ms-flex-flow:row;flex-flow:row}se-form-field .align-right{text-align:right;-ms-flex-flow:row-reverse;flex-flow:row-reverse}se-form-field .ff-wrapper{padding-left:16px;font-size:16px;width:100%;min-height:38px;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center}se-form-field [data-disabled] .ff-wrapper{opacity:0.5}se-form-field .ff-wrapper-input{max-width:320px;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-box-align:left;-ms-flex-align:left;-webkit-align-items:left;-moz-align-items:left;align-items:left;text-align:left;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;margin-right:16px}se-form-field input,se-form-field select,se-form-field textarea{font-family:inherit;width:100%;font-size:16px;height:30px;line-height:20px;border:1px solid;border-color:#9fa0a4;border-color:var(--se-border, #9fa0a4);background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);color:#0f0f0f;color:var(--se-background-alternative-contrast, #0f0f0f);-webkit-transition:0.2s;transition:0.2s;padding:4px 4px 4px 8px;font-size:inherit}se-form-field input:focus,se-form-field select:focus,se-form-field textarea:focus{outline-width:2px;outline-color:#007acd;outline-color:var(--se-button-focus, #007acd);outline-style:solid}se-form-field textarea{resize:vertical;height:auto;cursor:auto}se-form-field select{border-radius:0;padding:10px 32px 10px 8px;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;border-color:#9fa0a4;border-color:var(--se-border, #9fa0a4);border-radius:0;background-image:linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);background-position:calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px);background-size:5px 5px, 5px 5px;background-repeat:no-repeat}se-form-field input[type=search],se-form-field select{height:40px;width:calc(100% + 14px)}se-form-field .with-icon{display:block;position:relative}se-form-field .with-icon input{padding-right:36px}se-form-field .with-icon input:not([type=search]){width:calc(100% - 32px)}se-form-field .with-icon se-icon{position:absolute;top:50%;right:0px;margin-right:-4px;-ms-transform:translateY(-50%);-webkit-transform:translateY(-50%);transform:translateY(-50%)}se-form-field .textOnly{padding-top:8px;min-height:auto;-webkit-box-align:baseline;-ms-flex-align:baseline;-webkit-align-items:baseline;-moz-align-items:baseline;align-items:baseline}se-form-field .ff-block label>span{text-align:right}se-form-field .ff-block label.ff-stacked>span{text-align:left}se-form-field .ff-block .ff-wrapper{max-width:100%}se-form-field .ff-block .ff-wrapper-input{max-width:100%}se-form-field .ff-block select,se-form-field .ff-block input[type=search]{width:calc(100% + 4px)}se-form-field .ff-block input:not([type=search]),se-form-field .ff-block textarea{width:calc(100% - 10px)}se-form-field .ff-block .with-icon input:not([type=search]){width:calc(100% - 32px - 10px)}se-form-field .ff-block .with-icon se-icon{margin-right:4px}se-form-field .ff-stacked .form-field-wrapper{-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;-webkit-align-items:start;-moz-align-items:start;align-items:start}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){se-form-field .ff-stacked .form-field-wrapper{display:block}}se-form-field .ff-stacked label{text-align:left;width:100%;display:block}se-form-field .ff-stacked label .with-label{display:block;max-width:none;text-align:left;line-height:1.5;margin:4px 0}se-form-field .ff-stacked .ff-wrapper{max-width:100%;margin-left:0;padding-left:0}se-form-field .ff-stacked .with-label>span{min-height:auto}se-form-field .ff-error input,se-form-field .ff-error select,se-form-field .ff-error textarea{border-color:#dc0a0a;border-color:var(--se-error, #dc0a0a)}se-form-field .ff-warning input,se-form-field .ff-warning select,se-form-field .ff-warning textarea{border-color:#e47f00;border-color:var(--se-warning, #e47f00)}se-form-field .ff-information input,se-form-field .ff-information select,se-form-field .ff-information textarea{border-color:#0087cd;border-color:var(--se-information, #0087cd)}se-form-field .ff-success input,se-form-field .ff-success select,se-form-field .ff-success textarea{border-color:#3dcd58;border-color:var(--se-success, #3dcd58)}";

const FormFieldComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didSubmit = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didSubmit", 7);
    /**
     * Defines the layout of your form field.
     * `inline` is the default option, and is always applied if the type is set to `checkbox`.  This sets the input or select field adjacent to the label.
     * `stacked` option will render the input or select field below the label.
     * @deprecated use `stacked` property instead
     */
    this.option = 'inline';
    /**
     * Defines the layout of your form field. If `true`, the input field will render bellow the label.
     */
    this.stacked = false;
    /**
     * Defines the spacing around the inside edge of a container.
     * `none` is 0px.
     * `small` is 4px.
     * `medium` is 8px.
     */
    this.padding = 'small';
    /**
     * Optional property to define the proportion of the label width. The content (input) will take the rest of if. Defaulted to 40%
     */
    this.labelWidth = '35%';
    /**
     * Optional property to define how to align the label
     */
    this.labelAlign = 'right';
    /**
     * Defines whether the form field's input is a text field (`input`), a checkbox (`checkbox`), a radio button (`radio`), or a dropdown menu (`select`).
     * `input` is the default type.
     */
    this.type = 'input';
    /**
     * Determines if the input is required by the application.
     * Set to `false` by default.
     * Setting this value to `true` will render a red asterisk next to your label.
     */
    this.required = false;
    /**
     * Optional property that defines if the form field is disabled.  Set to `false` by default.
     */
    this.disabled = false;
    /**
     * Optional property that defines if the form-filed should not stack even if the container is small (it won't be responsive).
     */
    this.noStacking = false;
    /**
     * Optional property that defines the minumum width after witch the form field will move to stacked mode.
     */
    this.minWidth = 321;
  }
  inputSelectListenerHandler(event) {
    this.handleEvent(event);
  }
  checkboxListenerHandler(event) {
    this.handleEvent(event);
  }
  radioListenerHandler(event) {
    this.handleEvent(event);
  }
  disabledDidChange() {
    this.initLabel();
  }
  typeDidChange() {
    this.initLabel();
  }
  initLabel() {
    Array.from(this.el.querySelectorAll('input, select, textarea, se-checkbox, se-radio')).forEach((item) => {
      item.disabled = this.disabled;
    });
  }
  componentDidLoad() {
    this.ro = new _ResizeObserver_es_02979d4e_js__WEBPACK_IMPORTED_MODULE_2__["i"](_ => {
      this.isSmall = this.inputWrapper.clientWidth < this.minWidth;
      // this.isMedium = this.inputWrapper.clientWidth < this.sizeMedium;
    });
    if (this.ro) {
      this.ro.observe(this.inputWrapper);
    }
  }
  componentWillLoad() {
    this.initLabel();
  }
  disconnectedCallback() {
    if (this.ro) {
      this.ro.disconnect();
    }
  }
  handleEvent(event) {
    if (!this.disabled) {
      this.value = event.detail ? event.detail.selected : event.target.value;
      this.didSubmit.emit(this.value);
    }
  }
  render() {
    const shouldStack = this.option === 'stacked' ||
      this.stacked ||
      (this.isSmall && !this.noStacking);
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
        [`ff-${this.status}`]: true,
        'ff-stacked': shouldStack,
        'ff-block': this.block,
        [`ff-padding-${this.padding}`]: true,
        'form-field-wrapper': true,
      } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { "data-disabled": this.disabled, ref: el => (this.inputWrapper = el) }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { style: {
        width: !shouldStack ? this.labelWidth : 'auto',
        minWidth: !shouldStack ? this.labelWidth : '140px',
      }, class: {
        'with-label': !!this.label,
        [`align-${this.labelAlign}`]: true,
      } }, ' ', Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.label, this.required && (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "required", title: "required" }, "*")))), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { 'ff-wrapper': true, textOnly: this.textOnly } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "ff-wrapper-input" }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "disabled": ["disabledDidChange"],
    "type": ["typeDidChange"]
  }; }
};
FormFieldComponent.style = formFieldCss;

const radioCss = ":host{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;display:block;padding:4px}:host(.p-medium){padding:8px}:host(.p-large){padding:16px}button{margin:0;padding:0;outline:none;cursor:pointer;position:absolute;top:0;left:-8px;height:14px;width:14px;background-color:#ffffff;background-color:var(--se-background-alternative, #ffffff);border:1px solid;border-color:#9fa0a4;border-color:var(--se-border, #9fa0a4);border-radius:50%}button:focus{outline-width:2px;outline-color:#007acd;outline-color:var(--se-button-focus, #007acd);outline-style:solid}button.checked{border:4px solid;border-color:#3dcd58;border-color:var(--se-primary, #3dcd58)}button.checked.secondary{border-color:#42b4e6;border-color:var(--se-secondary, #42b4e6)}button[disabled]{cursor:default;opacity:0.5}.required{color:#dc0a0a;color:var(--se-error, #dc0a0a);padding-left:3px}.radio-label{font-weight:300;line-height:1.2;font-size:14px;padding-left:6px;position:relative;padding-left:16px;font-weight:300;line-height:1.2;font-size:14px;margin:0;margin-left:8px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio-label input{height:0;width:0;opacity:0;margin:0;position:absolute;clip:rect(1px, 1px, 1px, 1px)}.radio-label.label-left{padding-left:0;margin:0}.radio-label.label-left .checkdot{left:auto}.radio-label[data-disabled] .checkdot{opacity:0.5}";

const RadioComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didCheck = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didCheck", 7);
    /**
     * Adds a red asterisk if the radio button is required when used in a form field.  Default setting is `false`.
     */
    this.required = false;
    /**
     * Defines the color of the checkbox.
     * The default setting is `primary`, rendering a green color.
     * The `secondary` setting renders a blue color.
     */
    this.color = 'primary';
    /**
     * optional property. define the padding around the button
     * `none` no padding.
     * `small` 4px padding: default
     * `medium` 8px padding.
     * `large` 16px padding.
     */
    this.padding = 'small';
    /**
     * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
     */
    this.disabled = false;
    /**
     * Determines whether or not the checkbox is checked when you initialize it.
     * The default setting is `false`.
     * Checked if set to `true`.
     */
    this.selected = false;
    /**
     * Sets the position of the label for your checkbox component.
     * The default setting is `right`.
     */
    this.labelPos = 'right';
  }
  /**
   * Sets the required property on the radio button element.
   */
  async setRequired() {
    this.required = true;
  }
  handleClick() {
    // console.log('radio handleClick');
    this.selected = !this.selected;
    const checkboxObject = { value: this.value, selected: this.selected };
    this.didCheck.emit(checkboxObject);
  }
  render() {
    const id = this.el.getAttribute('id');
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { [`p-${this.padding}`]: !!this.padding } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { role: "radio", "aria-disabled": this.disabled ? 'true' : null, "aria-checked": `${this.selected}`, "aria-label": this.label, "aria-required": this.required, class: {
        [`label-${this.labelPos}`]: !!this.labelPos,
        'radio-label': true,
      }, "data-disabled": this.disabled ? true : null, onClick: () => this.handleClick() }, this.label, this.required ? Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "required" }, "*") : '', Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "radio", tabindex: "-1", name: this.name, checked: this.selected, disabled: this.disabled ? true : null, id: id ? `wc-${id}` : '' }), Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: { [this.color]: !!this.color, checked: this.selected }, disabled: this.disabled ? true : null }))));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
RadioComponent.style = radioCss;

const radioGroupCss = ":host{display:-ms-flexbox;display:flex}:host(.flex-column){-ms-flex-direction:column;flex-direction:column}:host(.flex-row){-ms-flex-direction:row;flex-direction:row}";

const RadioGroupComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didChange = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didChange", 7);
    /**
     * Defines the background color of each button in the group.  The default setting is `standard`, rendering a light gray background.
     */
    this.color = 'standard';
    /**
     * Defines the height of each button in the group.
     * `small` is the default setting, rendering a 32px height and a 14px font size.
     * `nano` sets the height to 24px and the font size to 12px.
     */
    this.size = 'small';
    /**
     * Optional property that defines if the button is disabled.  Set to `false` by default.
     */
    this.disabled = false;
  }
  disabledDidChange() {
    this.updateItemMode();
  }
  valueDidChange() {
    this.selectChild();
  }
  buttonClickedHandler(event) {
    this.handleChildClicked(event);
    this.didChange.emit(this.value);
  }
  radioButtonCheckedHandler(event) {
    this.handleChildClicked(event);
    this.didChange.emit(this.value);
  }
  updateItemMode() {
    this.children.forEach((child) => {
      if (child.localName === 'se-button') {
        child.setGrouped();
        if (child.icon) {
          child.iconOnly = true;
        }
      }
      child.disabled = this.disabled;
      child.size = this.size;
      child.color = this.color;
    });
  }
  handleChildClicked(event) {
    const buttonInfo = event.detail;
    this.value = buttonInfo.value;
  }
  selectChild() {
    this.children &&
      this.children.forEach((child) => {
        child.selected = child.value === this.value;
      });
  }
  componentWillLoad() {
    this.children = this.el.querySelectorAll('se-button, se-radio');
    if (!this.direction && this.children && this.children.length) {
      switch (this.children[0].nodeName) {
        case 'SE-BUTTON': {
          this.direction = 'row';
          break;
        }
        case 'SE-RADIO': {
          this.direction = 'column';
        }
      }
    }
    this.updateItemMode();
    this.selectChild();
  }
  render() {
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: { [`flex-${this.direction}`]: !!this.direction } }, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
  static get watchers() { return {
    "disabled": ["disabledDidChange"],
    "value": ["valueDidChange"]
  }; }
};
RadioGroupComponent.style = radioGroupCss;

const sliderCss = ".slider-container{display:block}input[type=range]{--sx:0;margin:0;padding:0;width:100%;height:16px;background:transparent}input[type=range],input[type=range]::-webkit-slider-thumb{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{-webkit-box-sizing:border-box;box-sizing:border-box;border:none;width:100%;height:5px;background-color:var(--se-background, )}.slider-container input[type=range]::-webkit-slider-runnable-track{width:100%;background:-webkit-gradient(linear, left top, left bottom, from(#626469), to(#626469)) 0/var(--sx) 100% no-repeat #f7f7f7;background:linear-gradient(#626469, #626469) 0/var(--sx) 100% no-repeat #f7f7f7}input[type=range]::-moz-range-track{box-sizing:border-box;border:none;width:100%;height:5px;background-color:var(--se-background, )}input[type=range]::-ms-track{box-sizing:border-box;border:none;width:100%;height:5px;background-color:var(--se-background, )}input[type=range]::-moz-range-progress{height:5px;background-color:var(--se-selected, )}input[type=range]::-ms-fill-lower{height:5px;background-color:var(--se-selected, )}input[type=range]::-webkit-slider-thumb{margin-top:-5.5px;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;width:16px;height:16px;border-radius:50%;background:#fff;-webkit-box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.7);box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.7);-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%}input[type=range]::-webkit-slider-thumb:hover{background-color:#494b50;background-color:var(--se-standard-hover, #494b50);border:4px solid transparent}input[type=range]::-webkit-slider-thumb:active{background-color:var(--se-selected, )}input[type=range]::-webkit-slider-thumb:hover,input[type=range]::-webkit-slider-thumb:active{width:24px;height:24px;position:relative;bottom:80%}input[type=range]::-moz-range-thumb{box-sizing:border-box;border:none;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.7);-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%}input[type=range]::-moz-range-thumb:hover{background-color:#494b50;background-color:var(--se-standard-hover, #494b50);border:4px solid transparent}input[type=range]::-moz-range-thumb:active{background-color:var(--se-selected, )}input[type=range]::-moz-range-thumb:hover,input[type=range]::-moz-range-thumb:active{width:24px;height:24px;position:relative;bottom:80%}input[type=range]::-ms-thumb{box-sizing:border-box;border:none;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.7);-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%}input[type=range]::-ms-thumb:hover{background-color:#494b50;background-color:var(--se-standard-hover, #494b50);border:4px solid transparent}input[type=range]::-ms-thumb:active{background-color:var(--se-selected, )}input[type=range]::-ms-thumb:hover,input[type=range]::-ms-thumb:active{width:24px;height:24px;position:relative;bottom:80%}input[type=range]::-ms-tooltip{display:none}input[type=range] ::-ms-ticks-after{display:none}input[type=range] ::-ms-ticks-before{display:none}input[type=range][disabled]::-webkit-slider-runnable-track{-webkit-box-sizing:border-box;box-sizing:border-box;border:none;width:100%;height:5px;background-color:var(--se-background, )}.slider-container input[type=range][disabled]::-webkit-slider-runnable-track{width:100%;background:-webkit-gradient(linear, left top, left bottom, from(#cbcbcb), to(#cbcbcb)) 0/var(--sx) 100% no-repeat #f7f7f7;background:linear-gradient(#cbcbcb, #cbcbcb) 0/var(--sx) 100% no-repeat #f7f7f7}input[type=range][disabled]::-moz-range-progress{height:5px;background-color:var(--se-selected, );background:#cbcbcb}input[type=range][disabled]::-ms-fill-lower{height:5px;background-color:var(--se-selected, );background:#cbcbcb}input[type=range][disabled]::-webkit-slider-thumb{-webkit-box-sizing:border-box;box-sizing:border-box;border:none;width:16px;height:16px;border-radius:50%;background:#fff;-webkit-box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.7);box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.7);-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%}input[type=range][disabled]::-webkit-slider-thumb:hover{background-color:#494b50;background-color:var(--se-standard-hover, #494b50);border:4px solid transparent}input[type=range][disabled]::-webkit-slider-thumb:active{background-color:var(--se-selected, )}input[type=range][disabled]::-webkit-slider-thumb:hover,input[type=range][disabled]::-webkit-slider-thumb:active{width:24px;height:24px;position:relative;bottom:80%}input[type=range][disabled]::-webkit-slider-thumb:hover,input[type=range][disabled]::-webkit-slider-thumb:active{background-color:#ffffff;width:16px;height:16px;position:static}input[type=range][disabled]::-moz-range-thumb{box-sizing:border-box;border:none;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.7);-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%}input[type=range][disabled]::-moz-range-thumb:hover{background-color:#494b50;background-color:var(--se-standard-hover, #494b50);border:4px solid transparent}input[type=range][disabled]::-moz-range-thumb:active{background-color:var(--se-selected, )}input[type=range][disabled]::-moz-range-thumb:hover,input[type=range][disabled]::-moz-range-thumb:active{width:24px;height:24px;position:relative;bottom:80%}input[type=range][disabled]::-moz-range-thumb:hover,input[type=range][disabled]::-moz-range-thumb:active{background-color:#ffffff;width:16px;height:16px;position:static}input[type=range][disabled]::-ms-thumb{box-sizing:border-box;border:none;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.7);-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%}input[type=range][disabled]::-ms-thumb:hover{background-color:#494b50;background-color:var(--se-standard-hover, #494b50);border:4px solid transparent}input[type=range][disabled]::-ms-thumb:active{background-color:var(--se-selected, )}input[type=range][disabled]::-ms-thumb:hover,input[type=range][disabled]::-ms-thumb:active{width:24px;height:24px;position:relative;bottom:80%}input[type=range][disabled]::-ms-thumb:hover,input[type=range][disabled]::-ms-thumb:active{background-color:#ffffff;width:16px;height:16px;position:static}input[type=range]:focus{outline-offset:1px;outline-width:2px;outline-color:#007acd;outline-color:var(--se-button-focus, #007acd);outline-style:solid}@supports (-ms-ime-align: auto){input[type=range]{height:20px}input[type=range]::-ms-thumb:hover{width:16px;height:16px;position:static}input[type=range]::-ms-thumb:active{width:16px;height:16px;position:static}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){input[type=range]{height:20px}input[type=range]::-ms-thumb:hover{width:16px;height:16px;position:static}input[type=range]::-ms-thumb:active{width:16px;height:16px;position:static}}";

const SliderComponent = class {
  constructor(hostRef) {
    Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.didChange = Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "didChange", 7);
    /**
     * Indicates the initial value of your slider component when it loads.
     * The default value is `0`.
     */
    this.value = 0;
    /**
     * Indicates the minimum value of your slider.
     * The default value is `0`.
     */
    this.min = 0;
    /**
     * Indicates the maximum value of your slider.
     * The default value is `100`.
     */
    this.max = 100;
    /**
     * Indicates if your slider is disabled.
     * The default setting is `false`.
     */
    this.disabled = false;
  }
  /**
   * Sets the disabled property for slider component.
   * @param val: boolean, `true` or `false`.
   */
  async setDisabled(disabled) {
    this.disabled = disabled;
  }
  setSliderPosition() {
    const rangeInterval = Number(this.max) - Number(this.min);
    const rangePercent = ((Number(this.sliderElement.value) - Number(this.min)) / rangeInterval) *
      100;
    this.sliderElement.style.setProperty('--sx', rangePercent + '%');
  }
  handleEvent() {
    this.sliderElement.addEventListener('input', () => {
      this.setSliderPosition();
    });
    this.didChange.emit(this.sliderElement);
  }
  componentDidLoad() {
    this.setSliderPosition();
    this.handleEvent();
  }
  render() {
    const id = this.el.getAttribute('id');
    const val = Math.min(Math.max(this.value, this.min), this.max);
    return (Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: "slider-container" }, this.label, Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "range", min: this.min || '0', max: this.max, value: val || '0', disabled: this.disabled, ref: el => (this.sliderElement = el), id: id ? `wc-${id}` : '', onChange: () => this.handleEvent() })));
  }
  get el() { return Object(_index_3d6c5e6f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
SliderComponent.style = sliderCss;




/***/ })

}]);
//# sourceMappingURL=8.js.map