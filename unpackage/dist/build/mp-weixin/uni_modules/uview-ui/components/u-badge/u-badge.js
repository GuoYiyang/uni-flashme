(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-badge/u-badge"],{"14af":function(t,e,u){"use strict";u.r(e);var i=u("a2cf"),a=u.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){u.d(e,t,(function(){return i[t]}))}(n);e["default"]=a.a},2660:function(t,e,u){"use strict";var i=u("5016"),a=u.n(i);a.a},5016:function(t,e,u){},a2cf:function(t,e,u){"use strict";(function(t){var i=u("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(u("3ff8")),n={name:"u-badge",mixins:[t.$u.mpMixin,a.default,t.$u.mixin],computed:{boxStyle:function(){return{}},badgeStyle:function(){var e={};if(this.color&&(e.color=this.color),this.bgColor&&!this.inverted&&(e.backgroundColor=this.bgColor),this.absolute&&(e.position="absolute",this.offset.length)){var u=this.offset[0],i=this.offset[1]||u;e.top=t.$u.addUnit(u),e.right=t.$u.addUnit(i)}return e},showValue:function(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}}}};e.default=n}).call(this,u("543d")["default"])},ded3:function(t,e,u){"use strict";u.r(e);var i=u("ee5b"),a=u("14af");for(var n in a)["default"].indexOf(n)<0&&function(t){u.d(e,t,(function(){return a[t]}))}(n);u("2660");var o=u("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"361197e0",null,!1,i["a"],void 0);e["default"]=r.exports},ee5b:function(t,e,u){"use strict";u.d(e,"b",(function(){return i})),u.d(e,"c",(function(){return a})),u.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,u=(t._self._c,t.show&&(0!==Number(t.value)||t.showZero||t.isDot)),i=u?t.__get_style([t.$u.addStyle(t.customStyle),t.badgeStyle]):null;t.$mp.data=Object.assign({},{$root:{m0:u,s0:i}})},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-badge/u-badge-create-component',
    {
        'uni_modules/uview-ui/components/u-badge/u-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ded3"))
        })
    },
    [['uni_modules/uview-ui/components/u-badge/u-badge-create-component']]
]);