(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-fab/components/uni-fab/uni-fab"],{512:function(t,n,o){"use strict";o.r(n);var e=o(513),i=o(515);for(var r in i)["default"].indexOf(r)<0&&function(t){o.d(n,t,(function(){return i[t]}))}(r);o(517);var s,u=o(37),c=Object(u["default"])(i["default"],e["render"],e["staticRenderFns"],!1,null,null,null,!1,e["components"],s);c.options.__file="uni_modules/uni-fab/components/uni-fab/uni-fab.vue",n["default"]=c.exports},513:function(t,n,o){"use strict";o.r(n);var e=o(514);o.d(n,"render",(function(){return e["render"]})),o.d(n,"staticRenderFns",(function(){return e["staticRenderFns"]})),o.d(n,"recyclableRender",(function(){return e["recyclableRender"]})),o.d(n,"components",(function(){return e["components"]}))},514:function(t,n,o){"use strict";var e;o.r(n),o.d(n,"render",(function(){return i})),o.d(n,"staticRenderFns",(function(){return s})),o.d(n,"recyclableRender",(function(){return r})),o.d(n,"components",(function(){return e}));try{e={uniIcons:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(o.bind(null,504))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,n=t.$createElement,o=(t._self._c,t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)&&t.content.length>0),e=t.isShow&&t.content.length>0;t.$mp.data=Object.assign({},{$root:{g0:o,g1:e}})},r=!1,s=[];i._withStripped=!0},515:function(t,n,o){"use strict";o.r(n);var e=o(516),i=o.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},516:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o="other",e={name:"UniFab",emits:["fabClick","trigger"],props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:"android"===o,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF",iconColor:"#fff"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+15+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")},nvueBottom:function(){t.getSystemInfoSync().windowBottom;return 30}},watch:{pattern:{handler:function(t,n){this.styles=Object.assign({},this.styles,t)},deep:!0}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,n){this.isShow&&this.$emit("trigger",{index:t,item:n})},getPosition:function(t,n,o){return 0===t?this.horizontal===n&&this.vertical===o:1===t?this.direction===n&&this.vertical===o:2===t?this.direction===n&&this.horizontal===o:this.isShow&&this.direction===n?this.contentWidth:this.contentWidthMin}}};n.default=e}).call(this,o(2)["default"])},517:function(t,n,o){"use strict";o.r(n);var e=o(518),i=o.n(e);for(var r in e)["default"].indexOf(r)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(r);n["default"]=i.a},518:function(t,n,o){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-fab/components/uni-fab/uni-fab.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-fab/components/uni-fab/uni-fab-create-component',
    {
        'uni_modules/uni-fab/components/uni-fab/uni-fab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(512))
        })
    },
    [['uni_modules/uni-fab/components/uni-fab/uni-fab-create-component']]
]);
