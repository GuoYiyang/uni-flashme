(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/homePage/homePage"],{231:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26);o(t(25));var a=o(t(232));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t(1)["default"],t(2)["createPage"])},232:function(e,n,t){"use strict";t.r(n);var o=t(233),a=t(235);for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);var i,u=t(37),s=Object(u["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,"4e60a646",null,!1,o["components"],i);s.options.__file="pages/homePage/homePage.vue",n["default"]=s.exports},233:function(e,n,t){"use strict";t.r(n);var o=t(234);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},234:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return a})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return o}));try{o={uRow:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-row/u-row")]).then(t.bind(null,382))},uCol:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-col/u-col")]).then(t.bind(null,390))},uAvatar:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(t.bind(null,398))},uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,531))},uGrid:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-grid/u-grid")]).then(t.bind(null,539))},uGridItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-grid-item/u-grid-item")]).then(t.bind(null,547))},uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,414))},uButton:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-button/u-button")]).then(t.bind(null,347))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,n=e.$createElement,t=(e._self._c,""!=e.userInfo.role&&e.isPher?e.pherList.length:null),o=""!=e.userInfo.role&&e.isUser?e.userList.length:null;e.$mp.data=Object.assign({},{$root:{g0:t,g1:o}})},r=!1,i=[];a._withStripped=!0},235:function(e,n,t){"use strict";t.r(n);var o=t(236),a=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=a.a},236:function(e,n,t){"use strict";(function(e){var o=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(30)),r=o(t(5)),i=o(t(32)),u=(t(168),t(33)),s={data:function(){return{pherList:[{name:"/static/publish.png",title:"发布作品"},{name:"/static/myproduct.png",title:"我的作品"},{name:"/static/plan.png",title:"拍摄方案"},{name:"/static/usershow.png",title:"作品集"}],userList:[{name:"/static/book.png",title:"我的预约"},{name:"/static/becomePher.png",title:"成为摄影师"},{name:"/static/photocall.png",title:"关于FlashMe"},{name:"/static/feedback.png",title:"使用反馈"}],userInfo:{username:"",avatar:"",desc:"",role:""},isAdmin:!1,isUser:!1,isPher:!1}},methods:{clickAvatar:function(){this.isPher&&e.navigateTo({url:"/pages/userShow/userShow?userId="+this.userId})},toAudit:function(){e.navigateTo({url:"/pages/audit/audit"})},clickPherList:function(n){0==n&&e.navigateTo({url:"/pages/publish/publish"}),1==n&&e.navigateTo({url:"/pages/product/myProduct"}),2==n&&e.navigateTo({url:"/pages/plan/plan"}),3==n&&e.navigateTo({url:"/pages/product/set"})},clickUserList:function(n){0==n&&e.navigateTo({url:"/pages/publish/publishSuccess"}),1==n&&(1==this.userInfo.role?e.navigateTo({url:"/pages/becomePher/step1"}):e.showToast({title:"您已经入驻"})),3==n&&e.navigateTo({url:"/pages/homePage/feedback"})},editClick:function(){e.navigateTo({url:"/pages/homePage/editUserInfo"})},toUserShow:function(){e.navigateTo({url:"/pages/userShow/userShow?userId="+this.userId})}},onLoad:function(){var n=this;return(0,i.default)(a.default.mark((function t(){var o;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$onLaunched;case 2:e.showNavigationBarLoading(),n.userId=getApp().globalData.USER_ID,n.username=getApp().globalData.USER_NAME,n.avatar=getApp().globalData.AVATAR,o=n,(0,u.getUserInfo)({userId:getApp().globalData.USER_ID}).then((function(e){var n=(0,r.default)(e,2),t=(n[0],n[1]);o.userInfo.username=t.data.nickname,o.userInfo.city=t.data.city,o.userInfo.avatar=t.data.avatar,o.userInfo.role=t.data.role,0==t.data.role?(o.isAdmin=!0,o.isPher=!0,o.isUser=!0):1==t.data.role?o.isUser=!0:2==t.data.role&&(o.isUser=!0,o.isPher=!0)})),"1628712434095104002"==getApp().globalData.USER_ID&&(o.isAdmin=!0);case 9:case"end":return t.stop()}}),t)})))()},onReady:function(){e.hideNavigationBarLoading()},onShow:function(){var e=this;(0,u.getUserInfo)({userId:getApp().globalData.USER_ID}).then((function(n){var t=(0,r.default)(n,2),o=(t[0],t[1]);e.userInfo.username=o.data.nickname,e.userInfo.city=o.data.city,e.userInfo.avatar=o.data.avatar,e.userInfo.role=o.data.role,0==o.data.role?(e.isAdmin=!0,e.isPher=!0,e.isUser=!0):1==o.data.role?e.isUser=!0:2==o.data.role&&(e.isUser=!0,e.isPher=!0)}))}};n.default=s}).call(this,t(2)["default"])}},[[231,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/homePage/homePage.js.map