(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/publish/publish"],{206:function(e,t,n){"use strict";(function(e,t){var o=n(4);n(26);o(n(25));var i=o(n(207));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n(1)["default"],n(2)["createPage"])},207:function(e,t,n){"use strict";n.r(t);var o=n(208),i=n(210);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);var r,s=n(37),l=Object(s["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],r);l.options.__file="pages/publish/publish.vue",t["default"]=l.exports},208:function(e,t,n){"use strict";n.r(t);var o=n(209);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},209:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return r})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return o}));try{o={uniFilePicker:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(n.bind(null,492))},"u-Form":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--form/u--form")]).then(n.bind(null,466))},uFormItem:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-form-item/u-form-item")]).then(n.bind(null,472))},"u-Input":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--input/u--input")]).then(n.bind(null,480))},uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,393))},uPicker:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(n.bind(null,336))},uButton:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-button/u-button")]).then(n.bind(null,326))},uOverlay:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-overlay/u-overlay")]).then(n.bind(null,510))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var e=this,t=e.$createElement,n=(e._self._c,{"font-weight":300,"font-size":"14px","line-height":"16px",color:"#808080"});e._isMounted||(e.e0=function(t){e.showCate=!0},e.e1=function(t){e.showCate=!1}),e.$mp.data=Object.assign({},{$root:{a0:n}})},u=!1,r=[];i._withStripped=!0},210:function(e,t,n){"use strict";n.r(t);var o=n(211),i=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=i.a},211:function(e,t,n){"use strict";(function(e){var o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(5)),u=n(168),r=(o(n(157)),{data:function(){return{overlayShow:!1,tempFiles:[],form:{title:"",tag:"",tagText:"",price:"",content:{}},imageStyles:{height:110,width:110,border:{color:"#E6E6E6",width:"1px",style:"solid",radius:"8px"}},showCate:!1,cateList:[[{text:"写真",value:0},{text:"情侣",value:1},{text:"婚纱",value:2},{text:"职场",value:3},{text:"孕妇",value:4},{text:"宝宝",value:5},{text:"家庭",value:6}]],rules:{title:{type:"string",required:!0,min:2,max:20,message:"长度为2-20个字符",trigger:["blur","change"]}}}},methods:{cateSelect:function(e){this.form.tag=e.value[0].value,this.form.tagText=e.value[0].text,this.showCate=!1},seleteImage:function(e){var t=this;e.tempFiles.map((function(e){t.tempFiles.push(e)}))},deleteImage:function(e){var t=this;this.tempFiles.map((function(n,o){n.path==e.tempFile.path&&t.tempFiles.splice(o,1)}))},publish:function(){this.tempFiles.forEach((function(e){(0,u.uploadImages)({filePath:e.path})})),(0,u.publishProduct)({userId:getApp().globalData.USER_ID,title:this.form.title,content:JSON.stringify(this.form.content),tags:this.form.tag.toString(),price:this.form.price,imageJson:JSON.stringify(this.tempFiles)}).then((function(t){var n=(0,i.default)(t,2),o=(n[0],n[1]);setTimeout((function(){1==o.data?(e.showToast({title:"发布成功"}),e.redirectTo({url:"/pages/publish/publishSuccess"})):(e.showToast({icon:"error",title:"发布失败"}),this.overlayShow=!1)}),2e3)}))},submit:function(){var t=this;if(0==this.tempFiles.length||0==this.form.title.length||0==this.form.title.tag)return e.showToast({icon:"error",title:"请选择照片"}),void(this.overlayShow=!1);this.$refs.Form.validate().then((function(n){e.showLoading({title:"发布中，请稍等"}),t.overlayShow=!0,t.publish()})).catch((function(t){e.showToast({icon:"error",title:"请检查所填内容是否正确"})}))}},onLoad:function(){this.$refs.Form.setRules(this.rules)}});t.default=r}).call(this,n(2)["default"])}},[[206,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/publish/publish.js.map