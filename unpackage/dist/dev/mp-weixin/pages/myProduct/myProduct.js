(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myProduct/myProduct"],{212:function(e,t,n){"use strict";(function(e,t){var o=n(4);n(26);o(n(25));var a=o(n(213));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n(1)["default"],n(2)["createPage"])},213:function(e,t,n){"use strict";n.r(t);var o=n(214),a=n(216);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);var i,r=n(37),s=Object(r["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,"53242dce",null,!1,o["components"],i);s.options.__file="pages/myProduct/myProduct.vue",t["default"]=s.exports},214:function(e,t,n){"use strict";n.r(t);var o=n(215);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},215:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return o}));try{o={uSticky:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-sticky/u-sticky")]).then(n.bind(null,402))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,410))},customWaterfallsFlow:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow")]).then(n.bind(null,354))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,518))},uActionSheet:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-action-sheet/u-action-sheet")]).then(n.bind(null,450))},uniFab:function(){return n.e("uni_modules/uni-fab/components/uni-fab/uni-fab").then(n.bind(null,526))},uOverlay:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-overlay/u-overlay")]).then(n.bind(null,510))},uLoadmore:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loadmore/u-loadmore")]).then(n.bind(null,385))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(e){this.popShow=!1})},u=!1,i=[];a._withStripped=!0},216:function(e,t,n){"use strict";n.r(t);var o=n(217),a=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=a.a},217:function(e,t,n){"use strict";(function(e){var o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(5)),u=n(168),i=(n(169),{data:function(){return{overlayShow:!1,productStatus:"",selectedProductId:"",popShow:!1,popList:[{name:"删除"}],page:1,pageSize:10,product:{list:[]},tabsList:[{name:"已发布"},{name:"审核中"},{name:"已驳回"}],tabsCurrent:0,publishStatus:"SUCCESS",loadMoreStatus:"loading"}},methods:{waterfallsLoaded:function(){},tabsChange:function(t){var n=this;this.tabsCurrent=t.index,0==t.index&&(this.publishStatus="SUCCESS"),1==t.index&&(this.publishStatus="REVIEW"),2==t.index&&(this.publishStatus="REJECT"),(0,u.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,page:1,pageSize:this.pageSize}).then((function(t){var o=(0,a.default)(t,2),u=(o[0],o[1]);u.data.length,n.product.list=u.data,0==n.product.list.length&&e.hideNavigationBarLoading(),n.$refs.waterfallsFlowRef.refresh()}))},selectClick:function(e){"删除"==e.name&&this.delete()},delete:function(){(0,u.deleteProduct)({userId:getApp().globalData.USER_ID,productId:this.selectedProductId}).then((function(t){var n=(0,a.default)(t,2),o=(n[0],n[1]);o.data?e.showToast({title:"删除成功"}):e.showToast({title:"删除失败"})}))},wapperClick:function(e){this.selectedProductId=e.id,this.popShow=!0},imageClick:function(t){e.navigateTo({url:"../product/product?id="+t.id})},buttonClick:function(t){e.navigateTo({url:"../publish/publish"})}},onReady:function(){e.hideNavigationBarLoading()},onLoad:function(t){var n=this;e.showNavigationBarLoading(),this.page=1;var o=this;(0,u.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,page:1,pageSize:this.pageSize}).then((function(e){var t=(0,a.default)(e,2),u=(t[0],t[1]);o.product.list=u.data,u.data.length<=10&&(n.loadMoreStatus="nomore")}))},onReachBottom:function(){this.loadMoreStatus="loading",this.page=this.page+1;var e=this;(0,u.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,page:e.page,pageSize:e.pageSize}).then((function(t){var n=(0,a.default)(t,2),o=(n[0],n[1]);o.data.length<=10&&(e.loadMoreStatus="nomore"),e.product.list=e.product.list.concat(o.data)}))},onPullDownRefresh:function(){var t=this;this.page=1;var n=this;(0,u.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,page:this.page,pageSize:this.pageSize}).then((function(e){var o=(0,a.default)(e,2),u=(o[0],o[1]);u.data.length<=10&&(t.loadMoreStatus="nomore"),n.product.list=u.data,n.$refs.waterfallsFlowRef.refresh()})),setTimeout((function(){e.stopPullDownRefresh()}),500)}});t.default=i}).call(this,n(2)["default"])}},[[212,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/myProduct/myProduct.js.map