(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-link/u-link"],{698:function(n,t,e){"use strict";e.r(t);var i=e(699),u=e(701);for(var r in u)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(r);e(704);var o,c=e(37),a=Object(c["default"])(u["default"],i["render"],i["staticRenderFns"],!1,null,"15816aae",null,!1,i["components"],o);a.options.__file="uni_modules/uview-ui/components/u-link/u-link.vue",t["default"]=a.exports},699:function(n,t,e){"use strict";e.r(t);var i=e(700);e.d(t,"render",(function(){return i["render"]})),e.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(t,"components",(function(){return i["components"]}))},700:function(n,t,e){"use strict";var i;e.r(t),e.d(t,"render",(function(){return u})),e.d(t,"staticRenderFns",(function(){return o})),e.d(t,"recyclableRender",(function(){return r})),e.d(t,"components",(function(){return i}));var u=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__get_style([n.linkStyle,n.$u.addStyle(n.customStyle)]));n.$mp.data=Object.assign({},{$root:{s0:e}})},r=!1,o=[];u._withStripped=!0},701:function(n,t,e){"use strict";e.r(t);var i=e(702),u=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=u.a},702:function(n,t,e){"use strict";(function(n){var i=e(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(e(703)),r={name:"u-link",mixins:[n.$u.mpMixin,n.$u.mixin,u.default],computed:{linkStyle:function(){var t={color:this.color,fontSize:n.$u.addUnit(this.fontSize),lineHeight:n.$u.addUnit(n.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return t}},methods:{openLink:function(){var t=this;n.setClipboardData({data:this.href,success:function(){n.hideToast(),t.$nextTick((function(){n.$u.toast(t.mpTips)}))}}),this.$emit("click")}}};t.default=r}).call(this,e(2)["default"])},704:function(n,t,e){"use strict";e.r(t);var i=e(705),u=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=u.a},705:function(n,t,e){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-link/u-link.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-link/u-link-create-component',
    {
        'uni_modules/uview-ui/components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(698))
        })
    },
    [['uni_modules/uview-ui/components/u-link/u-link-create-component']]
]);
