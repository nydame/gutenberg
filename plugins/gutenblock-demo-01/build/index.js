!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e,n){"use strict";n.r(e);var o=n(0),r=wp.i18n.__,c={backgroundColor:"#944",color:"#fff",padding:"20px"};(0,wp.blocks.registerBlockType)("gutenblock-demo/demo-01-static-esnext",{title:r("Example: Static (esnext)"),icon:"universal-access-alt",category:"layout",edit:function(){return Object(o.createElement)("div",{style:c},"Just some static content thanks to JSX (EDITOR) :)")},save:function(){return Object(o.createElement)("div",{style:c},"Just some static content thanks to JSX (FRONT) :)")}})}]);