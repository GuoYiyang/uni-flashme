(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/myProduct"],{212:function(t,e,n){"use strict";(function(t,e){var o=n(4);n(26);o(n(25));var a=o(n(213));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n(1)["default"],n(2)["createPage"])},213:function(t,e,n){"use strict";n.r(e);var o=n(214),a=n(216);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);var i,r=n(37),s=Object(r["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,"bf3a084c",null,!1,o["components"],i);s.options.__file="pages/product/myProduct.vue",e["default"]=s.exports},214:function(t,e,n){"use strict";n.r(e);var o=n(215);n.d(e,"render",(function(){return o["render"]})),n.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(e,"components",(function(){return o["components"]}))},215:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"render",(function(){return a})),n.d(e,"staticRenderFns",(function(){return i})),n.d(e,"recyclableRender",(function(){return u})),n.d(e,"components",(function(){return o}));try{o={uSticky:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-sticky/u-sticky")]).then(n.bind(null,402))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,410))},customWaterfallsFlow:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow")]).then(n.bind(null,354))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,518))},uActionSheet:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-action-sheet/u-action-sheet")]).then(n.bind(null,450))},uOverlay:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-overlay/u-overlay")]).then(n.bind(null,510))},uLoadmore:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loadmore/u-loadmore")]).then(n.bind(null,385))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(t){this.popShow=!1})},u=!1,i=[];a._withStripped=!0},216:function(t,e,n){"use strict";n.r(e);var o=n(217),a=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=a.a},217:function(t,e,n){"use strict";(function(t){var o=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n(5)),u=n(168),i=(n(169),{data:function(){return{overlayShow:!1,productStatus:"",selectedProductId:"",popShow:!1,popList:[{name:"删除"}],page:1,pageSize:10,product:{list:[]},tabsList:[{name:"已发布"},{name:"审核中"},{name:"已驳回"}],tabsCurrent:0,publishStatus:"SUCCESS",loadMoreStatus:"loading"}},methods:{waterfallsLoaded:function(){},tabsChange:function(e){var n=this;this.tabsCurrent=e.index,0==e.index&&(this.publishStatus="SUCCESS"),1==e.index&&(this.publishStatus="REVIEW"),2==e.index&&(this.publishStatus="REJECT"),(0,u.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,page:1,pageSize:this.pageSize}).then((function(e){var o=(0,a.default)(e,2),u=(o[0],o[1]);u.data.length,n.product.list=u.data,0==n.product.list.length&&t.hideNavigationBarLoading(),n.$refs.waterfallsFlowRef.refresh()}))},selectClick:function(t){"删除"==t.name&&this.delete()},delete:function(){(0,u.deleteProduct)({userId:getApp().globalData.USER_ID,productId:this.selectedProductId}).then((function(e){var n=(0,a.default)(e,2),o=(n[0],n[1]);o.data?t.showToast({title:"删除成功"}):t.showToast({title:"删除失败"})}))},wapperClick:function(t){this.selectedProductId=t.id,this.popShow=!0},imageClick:function(e){t.navigateTo({url:"../product/product?id="+e.id})},buttonClick:function(e){t.navigateTo({url:"../publish/publish"})}},onReady:function(){t.hideNavigationBarLoading()},onLoad:function(e){var n=this;t.showNavigationBarLoading(),this.page=1;var o=this;(0,u.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,page:1,pageSize:this.pageSize}).then((function(t){var e=(0,a.default)(t,2),u=(e[0],e[1]);o.product.list=u.data,u.data.length<=10&&(n.loadMoreStatus="nomore")}))},onReachBottom:function(){this.loadMoreStatus="loading",this.page=this.page+1;var t=this;(0,u.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,page:t.page,pageSize:t.pageSize}).then((function(e){var n=(0,a.default)(e,2),o=(n[0],n[1]);o.data.length<=10&&(t.loadMoreStatus="nomore"),t.product.list=t.product.list.concat(o.data)}))},onPullDownRefresh:function(){var e=this;this.page=1;var n=this;(0,u.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,page:this.page,pageSize:this.pageSize}).then((function(t){var o=(0,a.default)(t,2),u=(o[0],o[1]);u.data.length<=10&&(e.loadMoreStatus="nomore"),n.product.list=u.data,n.$refs.waterfallsFlowRef.refresh()})),setTimeout((function(){t.stopPullDownRefresh()}),500)}});e.default=i}).call(this,n(2)["default"])}},[[212,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/product/myProduct.js.map