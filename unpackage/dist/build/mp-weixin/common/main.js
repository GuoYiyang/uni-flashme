(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0383":function(e,t,n){"use strict";(function(e,t){var o=n("4ea4"),r=o(n("9523"));n("dfdd");var a=o(n("66fd")),u=o(n("0806")),c=o(n("1ab1")),i=o(n("031d"));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}e.__webpack_require_UNI_MP_PLUGIN__=n,a.default.prototype.$store=i.default,a.default.use(c.default),a.default.config.productionTip=!1,a.default.prototype.$onLaunched=new Promise((function(e){a.default.prototype.$isResolve=e})),u.default.mpType="app";var f=new a.default(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u.default));t(f).$mount()}).call(this,n("bc2e")["default"],n("543d")["createApp"])},"0806":function(e,t,n){"use strict";n.r(t);var o=n("4592");for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("0ddb");var a=n("f0c5"),u=Object(a["a"])(o["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);t["default"]=u.exports},"0ddb":function(e,t,n){"use strict";var o=n("66ee"),r=n.n(o);r.a},4592:function(e,t,n){"use strict";n.r(t);var o=n("59df"),r=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},"59df":function(e,t,n){"use strict";(function(e){var o=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("2eee")),a=o(n("278c")),u=o(n("c973")),c=n("5a07"),i={globalData:{USER_ID:"",USER_NAME:"",AVATAR:""},methods:{loginUser:function(){var t=this;return(0,u.default)(r.default.mark((function n(){var o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t,n.next=3,e.login({provider:"weixin",onlyAuthorize:!0,success:function(e){(0,c.login)(e.code).then((function(e){var t=(0,a.default)(e,2),n=(t[0],t[1]);console.log("login success",n),o.globalData.USER_ID=n.data.id,o.globalData.USER_NAME=n.data.nickname,o.globalData.AVATAR=n.data.avatar}))}});case 3:case"end":return n.stop()}}),n)})))()}},onLaunch:function(){console.log("App Launch"),this.loginUser()},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},onLoad:function(){var e=this;return(0,u.default)(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$onLaunched;case 2:case"end":return t.stop()}}),t)})))()}};t.default=i}).call(this,n("543d")["default"])},"66ee":function(e,t,n){}},[["0383","common/runtime","common/vendor"]]]);