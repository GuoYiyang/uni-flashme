(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{162:function(n,t,e){"use strict";(function(n,t){var o=e(4);e(26);o(e(25));var i=o(e(163));n.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e(1)["default"],e(2)["createPage"])},163:function(n,t,e){"use strict";e.r(t);var o=e(164),i=e(166);for(var c in i)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(c);e(170),e(172);var a,u=e(37),r=Object(u["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,"57280228",null,!1,o["components"],a);r.options.__file="pages/index/index.vue",t["default"]=r.exports},164:function(n,t,e){"use strict";e.r(t);var o=e(165);e.d(t,"render",(function(){return o["render"]})),e.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),e.d(t,"components",(function(){return o["components"]}))},165:function(n,t,e){"use strict";var o;e.r(t),e.d(t,"render",(function(){return i})),e.d(t,"staticRenderFns",(function(){return a})),e.d(t,"recyclableRender",(function(){return c})),e.d(t,"components",(function(){return o}));try{o={uButton:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-button/u-button")]).then(e.bind(null,326))},uPicker:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(e.bind(null,336))},uScrollList:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-scroll-list/u-scroll-list")]).then(e.bind(null,344))},customWaterfallsFlow:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow")]).then(e.bind(null,354))},uRow:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-row/u-row")]).then(e.bind(null,361))},uCol:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-col/u-col")]).then(e.bind(null,369))},uAvatar:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(e.bind(null,377))},uLoadmore:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-loadmore/u-loadmore")]).then(e.bind(null,385))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.cityPickerShow=!0},n.e1=function(t){n.cityPickerShow=!1})},c=!1,a=[];i._withStripped=!0},166:function(n,t,e){"use strict";e.r(t);var o=e(167),i=e.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=i.a},167:function(n,t,e){"use strict";(function(n){var o=e(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(e(30)),c=o(e(32)),a=o(e(5)),u=e(168),r=(e(33),e(169)),l={data:function(){return{loadMoreStatus:"loading",cityPickerShow:!1,tagList:[{image:"https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/5d98d52b4d04febe9a110003be5d56d.png"},{image:"https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/29480bf599738a5f778127ce53d46ac.png"},{image:"https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/5868bad3e95549438bc4abd4bb7ee9e.png"},{image:"https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/7b755d2a1cda553cdda2faf4f4578e1.png"},{image:"https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/9a19f4373d495f7fa50697fefbb1152.png"},{image:"https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/c67df47ba65a30aa5027166b5ae9585.png"},{image:"https://pic-common-1258999491.cos.ap-nanjing.myqcloud.com/24fa061b3cb4cd0f45edb9bde7fc26f.png"}],cityPickerList:[[{value:"0",text:"深圳"},{value:"1",text:"北京"},{value:"2",text:"上海"},{value:"3",text:"广州"}]],city:"0",cityName:"深圳",product:{list:[]},tabClickCnt:0}},methods:{confirmCityPicker:function(n){var t=this;this.city=n.value[0].value,getApp().globalData.CITY=this.city,this.cityName=(0,r.changeCity)(this.city),this.cityPickerShow=!1,(0,u.productRandom)({city:this.city}).then((function(n){var e=(0,a.default)(n,2),o=(e[0],e[1]);t.product.list=o.data,o.data.length<10&&(t.loadMoreStatus="nomore"),t.$refs.waterfallsFlowRef.refresh()}))},wapperClick:function(t){n.navigateTo({url:"../product/product?id="+t.id})},imageClick:function(t){n.navigateTo({url:"../product/product?id="+t.id})},clickFastEnter:function(t){n.navigateTo({url:"/pages/product/filterProduct?tag="+t})},searchClick:function(){n.navigateTo({url:"/pages/search/search"})}},onTabItemTap:function(){var t=this;this.tabClickCnt++,setTimeout((function(){t.tabClickCnt>=2&&n.pageScrollTo({scrollTop:0,duration:200}),t.tabClickCnt=0}),250)},onReady:function(){n.hideNavigationBarLoading()},onLoad:function(){var t=this;return(0,c.default)(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.showNavigationBarLoading(),e.next=3,t.$onLaunched;case 3:t.city=getApp().globalData.CITY,t.cityName=(0,r.changeCity)(t.city),(0,u.productRandom)({city:t.city}).then((function(n){var e=(0,a.default)(n,2),o=(e[0],e[1]);t.product.list=o.data,o.data.length<10&&(t.loadMoreStatus="nomore")})),n.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]});case 7:case"end":return e.stop()}}),e)})))()},onPullDownRefresh:function(){var t=this;(0,u.productRandom)({city:this.city}).then((function(n){var e=(0,a.default)(n,2),o=(e[0],e[1]);t.product.list=o.data,t.$refs.waterfallsFlowRef.refresh()})),setTimeout((function(){n.stopPullDownRefresh()}),500)},onReachBottom:function(){var n=this;this.loadMoreStatus="loading",(0,u.productRandom)({city:this.city}).then((function(t){var e=(0,a.default)(t,2),o=(e[0],e[1]);n.product.list=n.product.list.concat(o.data)}))}};t.default=l}).call(this,e(2)["default"])},170:function(n,t,e){"use strict";e.r(t);var o=e(171),i=e.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=i.a},171:function(n,t,e){},172:function(n,t,e){"use strict";e.r(t);var o=e(173),i=e.n(o);for(var c in o)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=i.a},173:function(n,t,e){}},[[162,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map