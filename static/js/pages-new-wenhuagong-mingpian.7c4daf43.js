(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-new-wenhuagong-mingpian"],{"34fc":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.app[data-v-a2934eea]{padding:%?40?% %?30?%}.app uni-navigator[data-v-a2934eea]{margin-bottom:%?30?%}.app uni-navigator uni-image[data-v-a2934eea]{width:100%}',""]),n.exports=t},"35e1":function(n,t,e){"use strict";e("7a82");var a=e("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("f07e")),r=a(e("c964")),o={data:function(){return{page:1,pageSize:10,list:[]}},onLoad:function(n){this.getNoticeInfoList()},methods:{getNoticeInfoList:function(){var n=this;return(0,r.default)((0,i.default)().mark((function t(){var e,a,r;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={pageNum:n.page,pageSize:n.pageSize,type:"28",noticeType:105139},t.next=3,n.request({url:n.interfaces.getNoticeInfoList,method:"POST",data:e});case 3:a=t.sent,r=a.data,console.log(r.data),n.list=r.data;case 7:case"end":return t.stop()}}),t)})))()},onPage:function(n){console.log(n),uni.navigateTo({url:"/pages/new/wenhuagong/des?id=".concat(n)})}}};t.default=o},"41ff":function(n,t,e){"use strict";e.r(t);var a=e("4e98"),i=e("933c");for(var r in i)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("d683");var o=e("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"a2934eea",null,!1,a["a"],void 0);t["default"]=u.exports},"4e98":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.list.length>0?e("v-uni-view",{staticClass:"app"},[e("v-uni-navigator",{attrs:{url:"#"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onPage(n.list[0].id)}}},[e("v-uni-image",{attrs:{src:"/static/img/wenhua/7.png",mode:"widthFix"}})],1),e("v-uni-navigator",{attrs:{url:"#"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onPage(n.list[1].id)}}},[e("v-uni-image",{attrs:{src:"/static/img/wenhua/8.png",mode:"widthFix"}})],1),e("v-uni-navigator",{attrs:{url:"#"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onPage(n.list[2].id)}}},[e("v-uni-image",{attrs:{src:"/static/img/wenhua/9.png",mode:"widthFix"}})],1)],1):n._e()},i=[]},"933c":function(n,t,e){"use strict";e.r(t);var a=e("35e1"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=i.a},d683:function(n,t,e){"use strict";var a=e("e0b9"),i=e.n(a);i.a},e0b9:function(n,t,e){var a=e("34fc");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("15db735f",a,!0,{sourceMap:!1,shadowMode:!1})}}]);