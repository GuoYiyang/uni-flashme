(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/myProduct"],{213:function(t,e,n){"use strict";(function(t,e){var o=n(4);n(26);o(n(25));var a=o(n(214));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n(1)["default"],n(2)["createPage"])},214:function(t,e,n){"use strict";n.r(e);var o=n(215),a=n(217);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s,u=n(37),r=Object(u["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,"bf3a084c",null,!1,o["components"],s);r.options.__file="pages/product/myProduct.vue",e["default"]=r.exports},215:function(t,e,n){"use strict";n.r(e);var o=n(216);n.d(e,"render",(function(){return o["render"]})),n.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(e,"components",(function(){return o["components"]}))},216:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"render",(function(){return a})),n.d(e,"staticRenderFns",(function(){return s})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return o}));try{o={uSticky:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-sticky/u-sticky")]).then(n.bind(null,423))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,431))},customWaterfallsFlow:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow")]).then(n.bind(null,375))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,531))},uActionSheet:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-action-sheet/u-action-sheet")]).then(n.bind(null,463))},uOverlay:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-overlay/u-overlay")]).then(n.bind(null,523))},uLoadmore:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-loadmore/u-loadmore")]).then(n.bind(null,406))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(t){this.popShow=!1})},i=!1,s=[];a._withStripped=!0},217:function(t,e,n){"use strict";n.r(e);var o=n(218),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},218:function(t,e,n){"use strict";(function(t){var o=n(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n(5)),i=n(168),s=(n(169),n(212)),u={data:function(){return{overlayShow:!1,productStatus:"",selectedProductId:"",popShow:!1,showSet:!1,popList:[{name:"编辑"},{name:"删除"}],page:1,pageSize:10,product:{list:[]},tabsList:[{name:"已发布"},{name:"审核中"},{name:"已驳回"}],tabsCurrent:0,publishStatus:"SUCCESS",loadMoreStatus:"loading",fabStyle:{buttonColor:"#191919",icon:"more-filled"},setCurrent:0,setId:"",setList:[{id:"",name:"全部"}]}},methods:{setChange:function(t){this.setCurrent=t.index,this.setId=t.id;var e=this;(0,i.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,setId:t.id,page:1,pageSize:this.pageSize}).then((function(t){var n=(0,a.default)(t,2),o=(n[0],n[1]);o.data.length,e.product.list=o.data,e.$refs.waterfallsFlowRef.refresh()}))},tabsChange:function(e){var n=this;this.tabsCurrent=e.index,0==e.index&&(this.publishStatus="SUCCESS",1==this.popList.length&&this.popList.splice(0,0,{name:"编辑"})),1==e.index&&(this.publishStatus="REVIEW",1==this.popList.length&&this.popList.splice(0,0,{name:"编辑"})),2==e.index&&(this.publishStatus="REJECT",this.popList.shift()),(0,i.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,setId:this.setId,page:1,pageSize:this.pageSize}).then((function(e){var o=(0,a.default)(e,2),i=(o[0],o[1]);i.data.length,n.product.list=i.data,0==n.product.list.length&&t.hideNavigationBarLoading(),n.$refs.waterfallsFlowRef.refresh()}))},selectClick:function(e){"删除"==e.name&&this.delete(),"编辑"==e.name&&t.navigateTo({url:"/pages/product/editProduct?id="+this.selectedProductId})},delete:function(){var e=this;(0,i.deleteProduct)({userId:getApp().globalData.USER_ID,productId:this.selectedProductId}).then((function(e){var n=(0,a.default)(e,2),o=(n[0],n[1]);o.data?t.showToast({title:"删除成功"}):t.showToast({title:"删除失败"})})),this.product.list.map((function(t,n){t.id==e.selectedProductId&&e.product.list.splice(n,1)})),this.$refs.waterfallsFlowRef.refresh()},wapperClick:function(t){this.selectedProductId=t.id,this.popShow=!0},imageClick:function(e){t.navigateTo({url:"../product/product?id="+e.id})},buttonClick:function(e){t.navigateTo({url:"../publish/publish"})}},onReady:function(){t.hideNavigationBarLoading()},onLoad:function(e){var n=this;t.showNavigationBarLoading(),(0,s.getSetList)({userId:getApp().globalData.USER_ID}).then((function(t){var e=(0,a.default)(t,2),o=(e[0],e[1]);n.setList=n.setList.concat(o.data)})),this.page=1;var o=this;(0,i.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,page:1,pageSize:this.pageSize}).then((function(t){var e=(0,a.default)(t,2),i=(e[0],e[1]);o.product.list=i.data,i.data.length<=10&&(n.loadMoreStatus="nomore")}))},onReachBottom:function(){this.loadMoreStatus="loading",this.page=this.page+1;var t=this;(0,i.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,page:t.page,pageSize:t.pageSize}).then((function(e){var n=(0,a.default)(e,2),o=(n[0],n[1]);o.data.length<=10&&(t.loadMoreStatus="nomore"),t.product.list=t.product.list.concat(o.data)}))},onPullDownRefresh:function(){var e=this;this.page=1,this.setCurrent=0;var n=this;(0,i.getProductPage)({userId:getApp().globalData.USER_ID,status:this.publishStatus,page:this.page,pageSize:this.pageSize}).then((function(t){var o=(0,a.default)(t,2),i=(o[0],o[1]);i.data.length<=10&&(e.loadMoreStatus="nomore"),n.product.list=i.data,n.$refs.waterfallsFlowRef.refresh()})),setTimeout((function(){t.stopPullDownRefresh()}),500)}};e.default=u}).call(this,n(2)["default"])}},[[213,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/product/myProduct.js.map