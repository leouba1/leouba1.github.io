(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2UII":function(e,t,s){"use strict";s.r(t),s.d(t,"se_breadcrumb",function(){return a}),s.d(t,"se_breadcrumb_item",function(){return c});var i=s("0Adb"),r=s("+ntD");const a=class{constructor(e){Object(i.i)(this,e),this.items=[],this.canSelectLast=!1}canSelectLastChanged(){this.updateLastItem()}updateLastItem(){this.items=Array.from(this.el.querySelectorAll("se-breadcrumb-item")),this.items.forEach(e=>{e.isLast=e===this.items[this.items.length-1],e.canSelect=!e.isLast||this.canSelectLast})}watchItemList(){this.observer=new MutationObserver(e=>{e.forEach(e=>{(e.addedNodes.length||e.removedNodes.length)&&this.updateLastItem()})}),this.observer.observe(this.el,{childList:!0})}componentWillLoad(){this.updateLastItem(),this.watchItemList()}componentWillUnload(){this.observer.disconnect()}render(){return Object(i.g)("nav",{"aria-label":"breadcrumb"},Object(i.g)("ol",null,Object(i.g)("slot",null)))}get el(){return Object(i.f)(this)}static get watchers(){return{canSelectLast:["canSelectLastChanged"]}}};a.style=":host{display:-ms-flexbox;display:flex;cursor:pointer}:host ol{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0}";const c=class{constructor(e){Object(i.i)(this,e),this.isLast=!1,this.canSelect=!0}render(){return Object(i.g)(i.b,{role:"listitem"},Object(i.g)("div",{class:{disabled:!this.canSelect}},this.canSelect?Object(i.g)("span",{class:"breadcrumb-item"},Object(i.g)("a",{href:this.href},Object(i.g)("slot",null))):Object(i.g)("span",{"aria-current":"page",class:"breadcrumb-item"},Object(i.g)("slot",null)),!this.isLast&&Object(i.g)("se-icon",{size:"small"},Object(i.g)("span",{innerHTML:r.a}))))}};c.style=":host div{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.breadcrumb-item{display:inline;font-size:14px;line-height:14px;padding-right:4px;vertical-align:super}.breadcrumb-item:hover{text-decoration:underline}a{color:inherit;text-decoration:inherit;cursor:inherit}se-icon{cursor:default}se-icon:active,se-icon:focus{color:inherit;background-color:inherit}.disabled .breadcrumb-item{cursor:default;text-decoration:none;opacity:0.5}"}}]);