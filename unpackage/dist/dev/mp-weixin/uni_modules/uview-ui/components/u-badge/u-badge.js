(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-badge/u-badge"],{606:function(e,t,n){"use strict";n.r(t);var u=n(607),r=n(609);for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(612);var o,a=n(37),s=Object(a["default"])(r["default"],u["render"],u["staticRenderFns"],!1,null,"13728ffe",null,!1,u["components"],o);s.options.__file="uni_modules/uview-ui/components/u-badge/u-badge.vue",t["default"]=s.exports},607:function(e,t,n){"use strict";n.r(t);var u=n(608);n.d(t,"render",(function(){return u["render"]})),n.d(t,"staticRenderFns",(function(){return u["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return u["recyclableRender"]})),n.d(t,"components",(function(){return u["components"]}))},608:function(e,t,n){"use strict";var u;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return o})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return u}));var r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.show&&(0!==Number(e.value)||e.showZero||e.isDot)),u=n?e.__get_style([e.$u.addStyle(e.customStyle),e.badgeStyle]):null;e.$mp.data=Object.assign({},{$root:{m0:n,s0:u}})},i=!1,o=[];r._withStripped=!0},609:function(e,t,n){"use strict";n.r(t);var u=n(610),r=n.n(u);for(var i in u)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(i);t["default"]=r.a},610:function(e,t,n){"use strict";(function(e){var u=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(611)),i={name:"u-badge",mixins:[e.$u.mpMixin,r.default,e.$u.mixin],computed:{boxStyle:function(){var e={};return e},badgeStyle:function(){var t={};if(this.color&&(t.color=this.color),this.bgColor&&!this.inverted&&(t.backgroundColor=this.bgColor),this.absolute&&(t.position="absolute",this.offset.length)){var n=this.offset[0],u=this.offset[1]||n;t.top=e.$u.addUnit(n),t.right=e.$u.addUnit(u)}return t},showValue:function(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}}}};t.default=i}).call(this,n(2)["default"])},612:function(e,t,n){"use strict";n.r(t);var u=n(613),r=n.n(u);for(var i in u)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(i);t["default"]=r.a},613:function(e,t,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-badge/u-badge.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-badge/u-badge-create-component',
    {
        'uni_modules/uview-ui/components/u-badge/u-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(606))
        })
    },
    [['uni_modules/uview-ui/components/u-badge/u-badge-create-component']]
]);
