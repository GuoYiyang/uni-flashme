(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/becomePher/step2"],{289:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26);o(t(25));var u=o(t(290));e.__webpack_require_UNI_MP_PLUGIN__=t,n(u.default)}).call(this,t(1)["default"],t(2)["createPage"])},290:function(e,n,t){"use strict";t.r(n);var o=t(291),u=t(293);for(var r in u)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(r);var i,a=t(37),s=Object(a["default"])(u["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],i);s.options.__file="pages/becomePher/step2.vue",n["default"]=s.exports},291:function(e,n,t){"use strict";t.r(n);var o=t(292);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},292:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return u})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return r})),t.d(n,"components",(function(){return o}));try{o={uSteps:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-steps/u-steps")]).then(t.bind(null,586))},uStepsItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-steps-item/u-steps-item")]).then(t.bind(null,594))},uRow:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-row/u-row")]).then(t.bind(null,382))},uCol:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-col/u-col")]).then(t.bind(null,390))},uAvatar:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(t.bind(null,398))},"u-Form":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--form/u--form")]).then(t.bind(null,479))},uFormItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,485))},"u-Input":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--input/u--input")]).then(t.bind(null,493))},uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,414))},"u-Textarea":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--textarea/u--textarea")]).then(t.bind(null,499))},uPicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(t.bind(null,357))},uButton:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-button/u-button")]).then(t.bind(null,347))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var e=this,n=e.$createElement,t=(e._self._c,{"font-weight":300,"font-size":"14px","line-height":"16px",color:"#808080"});e._isMounted||(e.e0=function(n){e.showSex=!0},e.e1=function(n){e.showCity=!0},e.e2=function(n){e.showSex=!1},e.e3=function(n){e.showCity=!1}),e.$mp.data=Object.assign({},{$root:{a0:t}})},r=!1,i=[];u._withStripped=!0},293:function(e,n,t){"use strict";t.r(n);var o=t(294),u=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=u.a},294:function(e,n,t){"use strict";(function(e){var o=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=o(t(5)),r=t(33),i=t(168),a=t(169),s={data:function(){var e=this;return{userId:"",avatar:"",selectedAvatarPath:"",userInfo:{id:"",name:"",avatar:"",xiaohongshu:"",douyin:"",whatsup:"",intro:"",desc:{},phone:"",sex:"",sexText:"请选择性别",city:"",cityText:"请选择城市"},isAdmin:!1,isUser:!1,isPher:!1,showSex:!1,showCity:!1,cityList:[[{name:"深圳",value:0},{name:"北京",value:1},{value:2,name:"上海"},{value:3,name:"广州"}]],sexList:[[{name:"男",value:1},{name:"女",value:2}]],rules:{name:{type:"string",required:!0,min:2,max:10,message:"姓名长度为2-10个字符",trigger:["blur","change"]},phone:{required:!0,validator:function(n,t,o){return!t||e.$u.test.mobile(t)},message:"手机号格式不正确",trigger:["change","blur"]},xiaohongshu:{type:"string",required:!1,min:6,max:15,message:"小红书号长度为6-15个字符",trigger:["blur","change"]},douyin:{type:"string",required:!1,min:6,max:9,message:"抖音号长度为6-9个字符",trigger:["blur","change"]},whatsup:{type:"string",required:!1,max:20,message:"个性签名最长20个字符",trigger:["blur","change"]},intro:{type:"string",required:!1,max:200,message:"个性简介最长200个字符",trigger:["blur","change"]}}}},methods:{chooseAvatar:function(){var n=this;e.chooseImage({count:1,sizeType:["compressed"],success:function(e){n.selectedAvatarPath=e.tempFilePaths[0],n.avatar=n.selectedAvatarPath}})},sexSelect:function(e){this.userInfo.sex=e.value[0].value,this.userInfo.sexText=e.value[0].name,this.showSex=!1},citySelect:function(e){this.userInfo.city=e.value[0].value,this.userInfo.cityText=e.value[0].name,this.showCity=!1},submit:function(){var n=this;""!=this.userInfo.phone?this.$refs.Form.validate().then((function(t){n.userInfo.desc=JSON.stringify({xiaohongshu:n.userInfo.xiaohongshu,douyin:n.userInfo.douyin,whatsup:n.userInfo.whatsup,intro:n.userInfo.intro}),""!=n.selectedAvatarPath?(0,i.uploadImages)({filePath:n.selectedAvatarPath}).then((function(t){var o=(0,u.default)(t,2),i=(o[0],o[1]);n.userInfo.avatar=i.data,(0,r.updateUserInfo)(n.userInfo).then((function(n){1==n[1].data?e.showToast({title:"修改成功"}):e.showToast({title:"修改失败，请检查必填项"})}))})):(n.userInfo.avatar=null,(0,r.updateUserInfo)(n.userInfo).then((function(n){1==n[1].data?(e.showToast({title:"修改成功"}),e.navigateTo({url:"/pages/becomePher/step3"})):e.showToast({title:"修改失败，请检查必填项"})})))})).catch((function(n){e.showToast({icon:"error",title:"请检查所填内容是否正确"})})):e.showToast({icon:"error",title:"请补充手机号"})}},onLoad:function(){this.userInfo.id=getApp().globalData.USER_ID;var e=this;(0,r.getUserInfo)({userId:getApp().globalData.USER_ID}).then((function(n){var t=(0,u.default)(n,2),o=(t[0],t[1]);if(e.userInfo.name=o.data.nickname,e.userInfo.city=o.data.city,e.userInfo.sex=o.data.gender,e.userInfo.avatar=o.data.avatar,e.avatar=o.data.avatar,e.userInfo.phone=o.data.phone,1==o.data.gender?e.userInfo.sexText="男":2==o.data.gender&&(e.userInfo.sexText="女"),e.userInfo.cityText=(0,a.changeCity)(o.data.city),null!=o.data.desc){e.userInfo.desc=o.data.desc;var r=JSON.parse(o.data.desc);e.userInfo.wxid=r.wxid,e.userInfo.xiaohongshu=r.xiaohongshu,e.userInfo.douyin=r.douyin,e.userInfo.whatsup=r.whatsup,e.userInfo.intro=r.intro}0==o.data.role?(e.isAdmin=!0,e.isPher=!0,e.isUser=!0):1==o.data.role?e.isUser=!0:2==o.data.role&&(e.isUser=!0,e.isPher=!0)}))},onReady:function(){this.$refs.Form.setRules(this.rules)}};n.default=s}).call(this,t(2)["default"])}},[[289,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/becomePher/step2.js.map