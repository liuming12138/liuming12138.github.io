(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-new-huodongxq-toupiao-paihang-index"],{"10eb7":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},a("d9e2"),a("d401")},2416:function(e,t,a){"use strict";a("7a82");var i=a("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("99af");var n=i(a("f07e")),r=i(a("d0ff")),u=i(a("c964")),o={data:function(){return{page:1,pageSize:10,loadingText:"没有数据了",list:[],par:{}}},onLoad:function(e){this.par=e,this.loadActivitiesStepRank()},onReachBottom:function(){this.page++,this.loadActivitiesStepRank()},onPullDownRefresh:function(){var e=this;setTimeout((function(){e.page=1,e.list=[],e.loadActivitiesStepRank(),uni.stopPullDownRefresh()}),500)},methods:{imageError:function(e,t){this.list[t]["head_img"]="/static/img/login/18.png"},loadActivitiesStepRank:function(){var e=this;return(0,u.default)((0,n.default)().mark((function t(){var a,i,u;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={pageNum:e.page,pageSize:e.pageSize,activitesId:e.par.id},t.next=3,e.request({url:e.interfaces.getActivitiesVoteRank,method:"POST",data:a});case 3:i=t.sent,u=i.data,u.data.length>0?e.list=[].concat((0,r.default)(e.list),(0,r.default)(u.data)):e.loadingText="没有数据了......",console.log(i);case 7:case"end":return t.stop()}}),t)})))()}}};t.default=o},4053:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(Array.isArray(e))return(0,i.default)(e)};var i=function(e){return e&&e.__esModule?e:{default:e}}(a("b680"))},"4b34":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.app-0[data-v-3ae7efa2]{text-align:center;padding:%?60?% 0;background-color:#2b74fe}.app-0 > uni-text[data-v-3ae7efa2]{font-size:%?40?%;color:#fff}.app-0 > uni-view[data-v-3ae7efa2]{display:flex;padding-top:%?40?%}.app-0 > uni-view uni-view[data-v-3ae7efa2]{flex:1;text-align:center}.app-0 > uni-view uni-view uni-text[data-v-3ae7efa2]{color:#fff}.app-0 > uni-view uni-view uni-text[data-v-3ae7efa2]:nth-child(1){font-size:%?50?%;padding-right:%?10?%}.app-1[data-v-3ae7efa2]{padding:%?30?% %?40?% %?20?%}.app-1 > uni-view[data-v-3ae7efa2]{display:flex;align-items:center;padding:%?30?% 0;border-bottom:1px solid hsla(0,0%,93.3%,.8)}.app-1 > uni-view[data-v-3ae7efa2]:last-child{border-bottom:0}.app-1 > uni-view .headImg[data-v-3ae7efa2]{background-repeat:no-repeat;background-size:100% auto;width:%?31?%;height:%?43?%}.app-1 > uni-view > uni-view[data-v-3ae7efa2]{display:flex;align-items:center;flex:1}.app-1 > uni-view > uni-view uni-view[data-v-3ae7efa2]{display:flex;justify-content:center}.app-1 > uni-view > uni-view uni-view[data-v-3ae7efa2]:nth-child(1){width:%?50?%}.app-1 > uni-view > uni-view uni-view[data-v-3ae7efa2]:nth-child(2){align-items:center;width:%?85?%;height:%?85?%;border:1px solid red;border-radius:50%;margin:0 %?30?%}.app-1 > uni-view > uni-view uni-view:nth-child(2) uni-image[data-v-3ae7efa2]{width:%?80?%;height:%?80?%;border-radius:50%}.app-1 > uni-view > uni-view > uni-text[data-v-3ae7efa2]{font-size:%?32?%;font-family:PingFang SC;font-weight:500;color:#333}.app-1 > uni-view > uni-text[data-v-3ae7efa2]{font-size:%?24?%;font-family:Source Han Sans CN;font-weight:400;color:#666}.app-1 > uni-view > uni-text[data-v-3ae7efa2]:nth-of-type(1){margin-right:%?10?%;font-size:%?36?%;color:#1b61e5}',""]),e.exports=t},5679:function(e,t,a){var i=a("4b34");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("dc1282f0",i,!0,{sourceMap:!1,shadowMode:!1})},"70c9":function(e,t,a){"use strict";var i=a("5679"),n=a.n(i);n.a},"9e3c":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"app"},[a("v-uni-view",{staticClass:"app-1"},e._l(e.list,(function(t,i){return a("v-uni-view",{key:i},[a("v-uni-view",{},[a("v-uni-view",{},[a("v-uni-text",[e._v(e._s(i+1))])],1),a("v-uni-view",{},[a("v-uni-image",{attrs:{src:e._f("imgFiles")(t.images),mode:"aspectFill"}})],1),a("v-uni-text",[e._v(e._s(t.name))])],1),a("v-uni-text",[e._v(e._s(t.vote_count))]),a("v-uni-text",[e._v("票")])],1)})),1),a("loading-text",{attrs:{loadingText:e.loadingText}}),a("v-uni-view",{staticStyle:{height:"1px"}})],1)},n=[]},b9a0:function(e,t,a){"use strict";a.r(t);var i=a("9e3c"),n=a("cabe");for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("70c9");var u=a("f0c5"),o=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"3ae7efa2",null,!1,i["a"],void 0);t["default"]=o.exports},cabe:function(e,t,a){"use strict";a.r(t);var i=a("2416"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},d0ff:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,i.default)(e)||(0,n.default)(e)||(0,r.default)(e)||(0,u.default)()};var i=o(a("4053")),n=o(a("a9e0")),r=o(a("dde1")),u=o(a("10eb7"));function o(e){return e&&e.__esModule?e:{default:e}}}}]);