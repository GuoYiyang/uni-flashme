(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/editUserInfo/editUserInfo"],{"3b7d":function(n,e,t){"use strict";(function(n){var u=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(t("278c")),i=t("5a07"),a={data:function(){return{cityList:[{text:"深圳",value:"0"},{text:"北京",value:"1"},{value:"2",text:"上海"},{value:"3",text:"广州"}],userId:"",showSex:!1,userInfo:{id:"",name:"",avatar:"",desc:"",phone:"",sex:"",city:"0"},sexs:[{text:"男",value:1},{text:"女",value:2}],rules:{name:{type:"string",required:!0,message:"请填写姓名",trigger:["blur","change"]},city:{type:"string",required:!0,message:"请选择城市",trigger:["blur","change"]},sex:{type:"number",required:!0,message:"请选择男或女",trigger:["blur","change"]}}}},methods:{cityChange:function(n){this.userInfo.city=n.detail.value[0].value},sexSelect:function(n){this.userInfo.sex=n.name},changeAvatar:function(n){this.userInfo.avatar=n.detail.avatarUrl},submit:function(){var e=this;this.$refs.baseForm.validate().then((function(t){console.log(e.userInfo),(0,i.updateUserInfo)(e.userInfo).then((function(e){console.log(e),1==e[1].data?(n.showToast({title:"修改成功"}),setTimeout((function(){n.navigateBack()}),500)):n.showToast({title:"修改失败，请检查必填项"})}))})).catch((function(e){n.showToast({title:"请检查参数"})}))}},onShow:function(){this.userInfo.id=getApp().globalData.USER_ID},onLoad:function(){var n=this;(0,i.getUserInfo)({userId:getApp().globalData.USER_ID}).then((function(e){var t=(0,o.default)(e,2),u=(t[0],t[1]);n.userInfo.name=u.data.nickname,n.userInfo.city=u.data.city,n.userInfo.sex=u.data.gender,n.userInfo.avatar=u.data.avatar,n.userInfo.desc=u.data.desc,n.userInfo.phone=u.data.phone,console.log(n.userInfo)}))},onReady:function(){this.$refs.baseForm.setRules(this.rules)}};e.default=a}).call(this,t("543d")["default"])},"62f3":function(n,e,t){"use strict";(function(n,e){var u=t("4ea4");t("dfdd");u(t("66fd"));var o=u(t("92da"));n.__webpack_require_UNI_MP_PLUGIN__=t,e(o.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"802b":function(n,e,t){"use strict";var u=t("8675"),o=t.n(u);o.a},"82c9":function(n,e,t){"use strict";t.r(e);var u=t("3b7d"),o=t.n(u);for(var i in u)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(i);e["default"]=o.a},8675:function(n,e,t){},"92da":function(n,e,t){"use strict";t.r(e);var u=t("e8c7"),o=t("82c9");for(var i in o)["default"].indexOf(i)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(i);t("802b");var a=t("f0c5"),r=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);e["default"]=r.exports},e8c7:function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return u}));var u={uniSection:function(){return t.e("uni_modules/uni-section/components/uni-section/uni-section").then(t.bind(null,"eb609"))},uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"0bd9"))},uniFormsItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item")]).then(t.bind(null,"4b20"))},uAvatar:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(t.bind(null,"535d"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"1658"))},uniDataPicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker")]).then(t.bind(null,"1af9"))},uniDataCheckbox:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox")]).then(t.bind(null,"826d"))},uButton:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-button/u-button")]).then(t.bind(null,"22c9"))}},o=function(){var n=this.$createElement;this._self._c},i=[]}},[["62f3","common/runtime","common/vendor"]]]);