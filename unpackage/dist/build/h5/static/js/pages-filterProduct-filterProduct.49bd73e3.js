(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-filterProduct-filterProduct"],{"06d9":function(t,e,a){"use strict";a.r(e);var i=a("2a3b"),n=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);e["default"]=n.a},"19d9":function(t,e,a){"use strict";a.r(e);var i=a("ce66"),n=a("4f89");for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);a("ca3e");var r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"2f0e5305",null,!1,i["a"],void 0);e["default"]=l.exports},"1c61":function(t,e,a){var i=a("82ed");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6917bf86",i,!0,{sourceMap:!1,shadowMode:!1})},"1dcb":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("ddfc")),u={name:"u-line",mixins:[uni.$u.mpMixin,uni.$u.mixin,n.default],computed:{lineStyle:function(){var t={};return t.margin=this.margin,"row"===this.direction?(t.borderBottomWidth="1px",t.borderBottomStyle=this.dashed?"dashed":"solid",t.width=uni.$u.addUnit(this.length),this.hairline&&(t.transform="scaleY(0.5)")):(t.borderLeftWidth="1px",t.borderLeftStyle=this.dashed?"dashed":"solid",t.height=uni.$u.addUnit(this.length),this.hairline&&(t.transform="scaleX(0.5)")),t.borderColor=this.color,uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}}};e.default=u},2839:function(t,e,a){"use strict";a.r(e);var i=a("986a5"),n=a("2eec");for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);a("84e8");var r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"91d5fe04",null,!1,i["a"],void 0);e["default"]=l.exports},"2a3b":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),u=i(a("1da1")),r=i(a("5530"));a("a9e3"),a("4de4"),a("d3b7"),a("ac1f"),a("14d9"),a("e9c4"),a("a434");var l={props:{value:Array,column:{type:[String,Number],default:2},maxColumn:{type:[String,Number],default:5},columnSpace:{type:[String,Number],default:2},imageKey:{type:[String],default:"image"},hideImageKey:{type:[String],default:"hide"},seat:{type:[String,Number],default:2},listStyle:{type:Object}},data:function(){return{data:{list:this.value?this.value:[],column:this.column<2?2:this.column,columnSpace:this.columnSpace<=5?this.columnSpace:5,imageKey:this.imageKey,seat:this.seat},msg:0,listInitStyle:{"border-radius":"12rpx","margin-bottom":"20rpx","background-color":"#fff"},adds:[],isLoaded:!0,curIndex:0,isRefresh:!0,flag:!1,refreshDatas:[]}},computed:{w:function(){var t="".concat(100/this.data.column-+this.data.columnSpace,"%");return t},m:function(){var t="".concat((100-(100/this.data.column-+this.data.columnSpace).toFixed(5)*this.data.column)/(this.data.column-1),"%");return t},s1:function(){return(0,r.default)((0,r.default)({},this.listInitStyle),this.listStyle)}},created:function(){this.refresh()},methods:{loadImages:function(){for(var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=0,i=this.data.list.filter((function(t,a){return a>=e})),n=0;n<i.length;n++)uni.getImageInfo({src:"".concat(i[n][this.imageKey],".jpg"),complete:function(n){a++,a==i.length&&t.initValue(e)}})},refresh:function(){var t=this;if(!this.isLoaded)return this.refreshDatas=this.value,!1;setTimeout((function(){t.refreshDatas=[],t.isRefresh=!0,t.adds=[],t.data.list=t.value?t.value:[],t.data.column=t.column<2?2:t.column>=t.maxColumn?t.maxColumn:t.column,t.data.columnSpace=t.columnSpace<=5?t.columnSpace:5,t.data.imageKey=t.imageKey,t.data.seat=t.seat,t.curIndex=0;for(var e=1;e<=t.data.column;e++)t.data["column_".concat(e,"_values")]=[],t.msg++;t.$nextTick((function(){t.initValue(t.curIndex,"refresh==>")}))}),1)},columnValue:function(t){return this.data["column_".concat(t+1,"_values")]},change:function(t){for(var e=0;e<this.data.list.length;e++)for(var a=this.data["column_".concat(this.data.list[e].column,"_values")],i=0;i<a.length;i++)if(t[e]&&e===a[i].index){this.data["column_".concat(this.data.list[e].column,"_values")][i]=Object.assign(a[i],t[e]),this.msg++;break}},getMin:function(t,e){for(var a=t[0][e],i=t[0],n=t.length-1;n>=0;n--)t[n][e]<a&&(a=t[n][e]);return i=t.filter((function(t){return t[e]==a})),i[0]},getMinColumnHeight:function(){var t=this;return new Promise((function(e){for(var a=[],i=function(i){var n=uni.createSelectorQuery().in(t);n.select("#waterfalls_flow_column_".concat(i)).boundingClientRect((function(t){a.push({column:i,height:t.height})})).exec((function(){t.data.column<=a.length&&e(t.getMin(a,"height"))}))},n=1;n<=t.data.column;n++)i(n)}))},initValue:function(t,e){var a=this;return(0,u.default)((0,n.default)().mark((function e(){var i,u;return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.isLoaded=!1,!(t>=a.data.list.length||a.refreshDatas.length)){e.next=5;break}return a.msg++,a.loaded(),e.abrupt("return",!1);case 5:return e.next=7,a.getMinColumnHeight();case 7:i=e.sent,u=a.data["column_".concat(i.column,"_values")],a.data.list[t].column=i.column,u.push((0,r.default)((0,r.default)({},a.data.list[t]),{},{cIndex:u.length,index:t,o:0})),a.msg++;case 12:case"end":return e.stop()}}),e)})))()},imgLoad:function(t,e){var a=t.index;t.o=1,this.$set(this.data["column_".concat(e,"_values")],t.cIndex,JSON.parse(JSON.stringify(t))),this.initValue(a+1)},imgError:function(t,e){var a=t.index;t.o=1,t[this.data.imageKey]=null,this.$set(this.data["column_".concat(e,"_values")],t.cIndex,JSON.parse(JSON.stringify(t))),this.initValue(a+1)},loaded:function(){if(this.refreshDatas.length)return this.isLoaded=!0,this.refresh(),!1;this.curIndex=this.data.list.length,this.adds.length?(this.data.list=this.adds[0],this.adds.splice(0,1),this.initValue(this.curIndex)):(this.data.list.length&&this.$emit("loaded"),this.isLoaded=!0,this.isRefresh=!1)},wapperClick:function(t){this.$emit("wapperClick",t)},imageClick:function(t){this.$emit("imageClick",t)}},watch:{value:{deep:!0,handler:function(t,e){var a=this;setTimeout((function(){a.$nextTick((function(){if(a.isRefresh)return!1;if(a.isLoaded){if(t.length<=a.curIndex)return a.change(t);a.data.list=t,a.$nextTick((function(){a.initValue(a.curIndex,"watch==>")}))}else a.adds.push(t)}))}),10)}},column:function(t){this.refresh()}}};e.default=l},"2b19":function(t,e,a){var i=a("99ec");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("4fb14c80",i,!0,{sourceMap:!1,shadowMode:!1})},"2b1d":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.getProductCollect=function(t){return uni.request({url:i.baseUrl+"/product/collect",method:"GET",header:{"X-USER-ID":getApp().globalData.USER_ID},data:{userId:t.userId}})},e.getProductCollectStatus=function(t){return uni.request({url:i.baseUrl+"/product/collect/status",method:"GET",header:{"X-USER-ID":getApp().globalData.USER_ID},data:{userId:t.userId,productId:t.productId}})},e.getProductPage=function(t){var e=null==t.userId?"":t.userId,a=null==t.city?"":t.city,n=null==t.tag?"":t.tag,u=null==t.query?"":t.query;return uni.request({url:i.baseUrl+"/product/page",method:"GET",header:{"X-USER-ID":getApp().globalData.USER_ID},data:{userId:e,city:a,tag:n,query:u,page:t.page,pageSize:t.pageSize}})},e.productCollect=function(t){return uni.request({url:i.baseUrl+"/product/collect",method:"POST",header:{"X-USER-ID":getApp().globalData.USER_ID},data:{userId:t.userId,productId:t.productId,isDelete:t.isDelete}})},e.productDetail=function(t){return uni.request({url:i.baseUrl+"/product/detail",method:"GET",header:{"X-USER-ID":getApp().globalData.USER_ID},data:{id:t.id}})},e.productRandom=function(t){return uni.request({url:i.baseUrl+"/product/random",method:"GET",header:{"X-USER-ID":getApp().globalData.USER_ID},data:{city:t.city,tag:t.tag,query:t.query}})},e.publishProduct=function(t){return uni.request({url:i.baseUrl+"/product/publish",method:"POST",header:{"X-USER-ID":getApp().globalData.USER_ID},data:{userId:t.userId,title:t.title,content:t.content,tags:t.tags,price:t.price,imgUrl:t.imgUrl,imgUrlList:t.imgUrlList}})},e.uploadImages=function(t){return uni.uploadFile({url:i.baseUrl+"/product/image/upload",filePath:t.filePath,name:"file"})};var i=a("0468")},"2eec":function(t,e,a){"use strict";a.r(e);var i=a("7106"),n=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);e["default"]=n.a},"30c1":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return i}));var i={uRow:a("9ff0").default,uCol:a("2839").default,uniDataPicker:a("1af9").default,uLine:a("19d9").default,customWaterfallsFlow:a("a310").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("u-row",{attrs:{justify:"center",gutter:"10"}},[a("u-col",{attrs:{span:"4"}},[a("uni-data-picker",{attrs:{"popup-title":"城市",localdata:t.cityList,"clear-icon":!1,placeholder:"城市"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cityChange.apply(void 0,arguments)}},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),a("u-col",{attrs:{span:"4"}},[a("uni-data-picker",{attrs:{"popup-title":"主题",localdata:t.tagList,"clear-icon":!1,placeholder:"主题"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cityChange.apply(void 0,arguments)}},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}})],1)],1),a("u-line"),a("v-uni-view",{staticStyle:{padding:"10rpx"}},[a("custom-waterfalls-flow",{ref:"waterfallsFlowRef",attrs:{value:t.product.list,column:2,columnSpace:1.5},on:{imageClick:function(e){arguments[0]=e=t.$handleEvent(e),t.imageClick.apply(void 0,arguments)},wapperClick:function(e){arguments[0]=e=t.$handleEvent(e),t.wapperClick.apply(void 0,arguments)}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("v-uni-view",{staticClass:"item"},[a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"title"},[t._v(t._s(e.price))])],1)]}}])})],1)],1)},u=[]},4613:function(t,e,a){"use strict";var i=a("2b19"),n=a.n(i);n.a},"4a71":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),u=i(a("1da1"));a("a9e3"),a("d3b7");var r=i(a("608a")),l={name:"u-row",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{}},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},rowStyle:function(){var t={alignItems:this.uAlignItem,justifyContent:this.uJustify};return this.gutter&&(t.marginLeft=uni.$u.addUnit(-Number(this.gutter)/2),t.marginRight=uni.$u.addUnit(-Number(this.gutter)/2)),uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},methods:{clickHandler:function(t){this.$emit("click")},getComponentWidth:function(){var t=this;return(0,u.default)((0,n.default)().mark((function e(){return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.$u.sleep();case 2:return e.abrupt("return",new Promise((function(e){t.$uGetRect(".u-row").then((function(t){e(t.width)}))})));case 3:case"end":return e.stop()}}),e)})))()}}};e.default=l},"4d11":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{ref:"u-row",staticClass:"u-row",style:[t.rowStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("default")],2)},n=[]},"4d7c":function(t,e,a){var i=a("ea1c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("503d7309",i,!0,{sourceMap:!1,shadowMode:!1})},"4f89":function(t,e,a){"use strict";a.r(e);var i=a("1dcb"),n=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);e["default"]=n.a},"5db0":function(t,e,a){var i=a("9ec7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("c8b5bfe6",i,!0,{sourceMap:!1,shadowMode:!1})},"608a":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i={props:{gutter:{type:[String,Number],default:uni.$u.props.row.gutter},justify:{type:String,default:uni.$u.props.row.justify},align:{type:String,default:uni.$u.props.row.align}}};e.default=i},7106:function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c7eb")),u=i(a("1da1")),r=i(a("c35b")),l={name:"u-col",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{width:0,parentData:{gutter:0},gridNum:12}},computed:{uJustify:function(){return"end"==this.justify||"start"==this.justify?"flex-"+this.justify:"around"==this.justify||"between"==this.justify?"space-"+this.justify:this.justify},uAlignItem:function(){return"top"==this.align?"flex-start":"bottom"==this.align?"flex-end":this.align},colStyle:function(){var t={paddingLeft:uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter)/2),paddingRight:uni.$u.addUnit(uni.$u.getPx(this.parentData.gutter)/2),alignItems:this.uAlignItem,justifyContent:this.uJustify,textAlign:this.textAlign,flex:"0 0 ".concat(100/this.gridNum*this.span,"%"),marginLeft:100/12*this.offset+"%"};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))}},mounted:function(){this.init()},methods:{init:function(){var t=this;return(0,u.default)((0,n.default)().mark((function e(){return(0,n.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.updateParentData(),e.next=3,t.parent.getComponentWidth();case 3:t.width=e.sent;case 4:case"end":return e.stop()}}),e)})))()},updateParentData:function(){this.getParentData("u-row")},clickHandler:function(t){this.$emit("click")}}};e.default=l},"77a4":function(t,e,a){"use strict";var i=a("4d7c"),n=a.n(i);n.a},8155:function(t,e,a){"use strict";a.r(e);var i=a("4a71"),n=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);e["default"]=n.a},"82ed":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/* uni.scss */uni-view[data-v-91d5fe04], uni-scroll-view[data-v-91d5fe04], uni-swiper-item[data-v-91d5fe04]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-col[data-v-91d5fe04]{padding:0;box-sizing:border-box}.u-col-0[data-v-91d5fe04]{width:0}.u-col-1[data-v-91d5fe04]{width:calc(100%/12)}.u-col-2[data-v-91d5fe04]{width:calc(100%/12 * 2)}.u-col-3[data-v-91d5fe04]{width:calc(100%/12 * 3)}.u-col-4[data-v-91d5fe04]{width:calc(100%/12 * 4)}.u-col-5[data-v-91d5fe04]{width:calc(100%/12 * 5)}.u-col-6[data-v-91d5fe04]{width:calc(100%/12 * 6)}.u-col-7[data-v-91d5fe04]{width:calc(100%/12 * 7)}.u-col-8[data-v-91d5fe04]{width:calc(100%/12 * 8)}.u-col-9[data-v-91d5fe04]{width:calc(100%/12 * 9)}.u-col-10[data-v-91d5fe04]{width:calc(100%/12 * 10)}.u-col-11[data-v-91d5fe04]{width:calc(100%/12 * 11)}.u-col-12[data-v-91d5fe04]{width:calc(100%/12 * 12)}',""]),t.exports=e},"84e8":function(t,e,a){"use strict";var i=a("1c61"),n=a.n(i);n.a},"87cd":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"waterfalls-flow"},t._l(t.data.column,(function(e,i){return a("v-uni-view",{key:i,staticClass:"waterfalls-flow-column",style:{width:t.w,"margin-left":0==i?0:t.m},attrs:{id:"waterfalls_flow_column_"+(i+1),msg:t.msg}},t._l(t.columnValue(i),(function(e,n){return a("v-uni-view",{key:n,class:["column-value",{"column-value-show":e.o}],style:[t.s1],on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.wapperClick(e)}}},[1==t.data.seat?a("v-uni-view",{staticClass:"inner"},[t._t("default",null,null,e)],2):t._e(),a("v-uni-image",{class:["img",{"img-hide":1==e[t.hideImageKey]||1==e[t.hideImageKey]},{"img-error":!e[t.data.imageKey]}],attrs:{src:e[t.data.imageKey],mode:"widthFix"},on:{load:function(a){arguments[0]=a=t.$handleEvent(a),t.imgLoad(e,i+1)},error:function(a){arguments[0]=a=t.$handleEvent(a),t.imgError(e,i+1)},click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.imageClick(e)}}}),2==t.data.seat?a("v-uni-view",{staticClass:"inner"},[t._t("default",null,null,e)],2):t._e()],1)})),1)})),1)},n=[]},"986a5":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{ref:"u-col",staticClass:"u-col",class:["u-col-"+t.span],style:[t.colStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[t._t("default")],2)},n=[]},"99ec":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/* uni.scss */uni-view[data-v-3fa5722e], uni-scroll-view[data-v-3fa5722e], uni-swiper-item[data-v-3fa5722e]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-row[data-v-3fa5722e]{display:flex;flex-direction:row}',""]),t.exports=e},"9d16":function(t,e,a){"use strict";a.r(e);var i=a("30c1"),n=a("f6d6");for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);a("77a4");var r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"4054895e",null,!1,i["a"],void 0);e["default"]=l.exports},"9ec7":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/* uni.scss */uni-view[data-v-2f0e5305], uni-scroll-view[data-v-2f0e5305], uni-swiper-item[data-v-2f0e5305]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-line[data-v-2f0e5305]{vertical-align:middle}',""]),t.exports=e},"9ff0":function(t,e,a){"use strict";a.r(e);var i=a("4d11"),n=a("8155");for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);a("4613");var r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"3fa5722e",null,!1,i["a"],void 0);e["default"]=l.exports},a310:function(t,e,a){"use strict";a.r(e);var i=a("87cd"),n=a("06d9");for(var u in n)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(u);a("fde9");var r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"b273d76e",null,!1,i["a"],void 0);e["default"]=l.exports},bd68:function(t,e,a){var i=a("f81f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("af1fa474",i,!0,{sourceMap:!1,shadowMode:!1})},c35b:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i={props:{span:{type:[String,Number],default:uni.$u.props.col.span},offset:{type:[String,Number],default:uni.$u.props.col.offset},justify:{type:String,default:uni.$u.props.col.justify},align:{type:String,default:uni.$u.props.col.align},textAlign:{type:String,default:uni.$u.props.col.textAlign}}};e.default=i},ca3e:function(t,e,a){"use strict";var i=a("5db0"),n=a.n(i);n.a},ce66:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-line",style:[this.lineStyle]})},n=[]},ddfc:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var i={props:{color:{type:String,default:uni.$u.props.line.color},length:{type:[String,Number],default:uni.$u.props.line.length},direction:{type:String,default:uni.$u.props.line.direction},hairline:{type:Boolean,default:uni.$u.props.line.hairline},margin:{type:[String,Number],default:uni.$u.props.line.margin},dashed:{type:Boolean,default:uni.$u.props.line.dashed}}};e.default=i},e4e1:function(t,e,a){"use strict";(function(t){a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af");var n=i(a("3835")),u=a("2b1d"),r={data:function(){return{page:1,pageSize:10,city:"",tag:"",query:"",product:{list:[]},cityList:[{value:"0",text:"深圳"},{value:"1",text:"北京"},{value:"2",text:"上海"},{value:"3",text:"广州"}]}},methods:{wapperClick:function(t){uni.navigateTo({url:"../product/product?id="+t.id})},imageClick:function(t){uni.navigateTo({url:"../product/product?id="+t.id})}},onLoad:function(e){var a=this,i=this;this.city=e.city,null!=e.tag&&(this.tag=e.tag),null!=e.query&&(this.query=e.query),(0,u.getProductPage)({city:this.city,tag:this.tag,query:this.query,page:this.page,pageSize:this.pageSize}).then((function(e){var u=(0,n.default)(e,2),r=(u[0],u[1]);i.product.list=r.data,t("log",a.product.list," at pages/filterProduct/filterProduct.vue:107")}))},onReachBottom:function(){var t=this;this.page=this.page+1,(0,u.getProductPage)({city:this.city,tag:this.tag,query:this.query,page:this.page,pageSize:this.pageSize}).then((function(e){var a=(0,n.default)(e,2),i=(a[0],a[1]);i.data.length,t.product.list=t.product.list.concat(i.data)}))}};e.default=r}).call(this,a("0de9")["log"])},ea1c:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/* uni.scss */.item[data-v-4054895e]{padding:%?10?% %?10?% %?20?%}.item .title[data-v-4054895e]{line-height:%?48?%;font-size:%?30?%;color:#222}.item .desc[data-v-4054895e]{font-size:%?24?%;color:#666}.item .grid-text[data-v-4054895e]{font-size:14px;color:#909399;padding:%?10?% 0 %?20?% %?0?%;box-sizing:border-box}',""]),t.exports=e},f6d6:function(t,e,a){"use strict";a.r(e);var i=a("e4e1"),n=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(u);e["default"]=n.a},f81f:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 水平间距 */\n/* 水平间距 */\n/* uni.scss */.waterfalls-flow[data-v-b273d76e]{overflow:hidden}.waterfalls-flow-column[data-v-b273d76e]{float:left}.column-value[data-v-b273d76e]{width:100%;font-size:0;overflow:hidden;transition:opacity .4s;opacity:0}.column-value-show[data-v-b273d76e]{opacity:1}.column-value .inner[data-v-b273d76e]{font-size:%?30?%}.column-value .img[data-v-b273d76e]{width:100%}.column-value .img-hide[data-v-b273d76e]{display:none}.column-value .img-error[data-v-b273d76e]{background:#f2f2f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAiAQMAAAAatXkPAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAAIZJREFUCNdlzjEKwkAUBNAfEGyCuYBkLyLuxRYW2SKlV1JSeA2tUiZg4YrLjv9PGsHqNTPMSAQuyAJgRDHSyvBPwtZoSJXakeJI9iuRLGDygdl6V0yKDtyMAeMPZySj8yfD+UapvRPj2JOwkyAooSV5IwdDjPdCPspe8LyTl9IKJvDETKKRv6vnlUasgg0fAAAAAElFTkSuQmCC) no-repeat 50%}',""]),t.exports=e},fde9:function(t,e,a){"use strict";var i=a("bd68"),n=a.n(i);n.a}}]);