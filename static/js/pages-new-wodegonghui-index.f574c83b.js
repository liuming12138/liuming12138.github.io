(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-new-wodegonghui-index"],{"152f":function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.app[data-v-3b2e0479]{padding:%?20?% %?30?%}.app .item > uni-view[data-v-3b2e0479]{display:flex;align-items:center;padding:%?30?% %?10?%;border-bottom:1px solid #eee}.app .item > uni-view > uni-text[data-v-3b2e0479]{font-size:%?26?%;font-family:PingFang SC;font-weight:400}.app .item > uni-view > uni-text[data-v-3b2e0479]:nth-child(1){color:#000}.app .item > uni-view > uni-text[data-v-3b2e0479]:nth-child(2){flex:1;text-align:right;color:#999}.app .item > uni-view uni-view[data-v-3b2e0479]{flex:1;display:flex;justify-content:flex-end}.app .item > uni-view uni-view uni-image[data-v-3b2e0479]{width:%?170?%;height:%?170?%}.app .btn[data-v-3b2e0479]{padding:%?50?% 0}.app .btn uni-navigator[data-v-3b2e0479]{width:100%;height:%?92?%;text-align:center;line-height:%?92?%;text-align:center;font-size:%?32?%;font-family:PingFang SC;font-weight:700;margin-bottom:%?40?%}.app .btn uni-navigator[data-v-3b2e0479]:nth-child(1){background:linear-gradient(90deg,#014fff,#3a77ff);border-radius:%?46?%;color:#fff}.app .btn uni-navigator[data-v-3b2e0479]:nth-child(2){border:1px solid #014fff;border-radius:46px;color:#014fff}.pt > uni-text[data-v-3b2e0479]{display:block;padding:%?40?% 0 %?30?%;text-align:center;font-size:%?35?%}.pt > uni-image[data-v-3b2e0479]{display:block;margin:0 auto}',""]),e.exports=n},4104:function(e,n,t){"use strict";var i=t("985e"),a=t.n(i);a.a},"77ed":function(e,n,t){"use strict";t.r(n);var i=t("a97c"),a=t.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(r);n["default"]=a.a},"85e7":function(e,n,t){e.exports=t.p+"static/img/new/info/13.png"},"8e50":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var i=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",{staticClass:"app"},[9996==e.userInfo.role?i("v-uni-view",{},[i("v-uni-view",{staticClass:"pt"},[i("v-uni-image",{attrs:{src:t("85e7"),mode:"widthFix"}}),i("v-uni-text",[e._v("您还不是工会会员，请点击“我要入会”完成入会，如您是市直机关会员，请点击“我要认证”完成工会会员认证！")]),i("v-uni-view",{staticClass:"btn"},[i("v-uni-navigator",{attrs:{url:"/pages/new/woyaoruhui/index","hover-class":"none"}},[e._v("我要入会")]),i("v-uni-navigator",{attrs:{url:"/pages/new/woyaorenzheng/index","hover-class":"none"}},[e._v("我要认证")])],1)],1)],1):i("v-uni-view",{},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{},[i("v-uni-text",[e._v("姓名")]),i("v-uni-text",[e._v(e._s(e.userInfo.realName))])],1),e.memberInfo.sex?i("v-uni-view",{},[i("v-uni-text",[e._v("性别")]),i("v-uni-text",[e._v(e._s(e.memberInfo.sex))])],1):e._e(),i("v-uni-view",{},[i("v-uni-text",[e._v("手机号码")]),i("v-uni-text",[e._v(e._s(e.userInfo.mobile))])],1),i("v-uni-view",{},[i("v-uni-text",[e._v("身份证号码")]),i("v-uni-text",[e._v(e._s(e.userInfo.papersNumber))])],1),e.memberInfo.nationalName?i("v-uni-view",{},[i("v-uni-text",[e._v("民族")]),i("v-uni-text",[e._v(e._s(e.memberInfo.nationalName))])],1):e._e(),i("v-uni-view",{},[i("v-uni-text",[e._v("所在工会")]),i("v-uni-text",[e._v(e._s(e.memberInfo.unionName))])],1),i("v-uni-view",{},[i("v-uni-text",[e._v("所在单位")]),i("v-uni-text",[e._v(e._s(e.memberInfo.unitName))])],1)],1),i("v-uni-view",{staticClass:"btn",staticStyle:{padding:"50upx 0 0"}},[i("v-uni-navigator",{attrs:{url:"/pages/new/woyaozhuanhui/index","hover-class":"none"}},[e._v("我要转会")])],1)],1)],1)},a=[]},"985e":function(e,n,t){var i=t("152f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("a6d04820",i,!0,{sourceMap:!1,shadowMode:!1})},a97c:function(e,n,t){"use strict";t("7a82");var i=t("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("f07e")),r=i(t("c964")),u={data:function(){return{memberInfo:{}}},components:{},computed:{userInfo:function(){return this.$store.getters.userInfo}},onShow:function(){9996!=this.userInfo.role&&this.getMemberInfo()},methods:{getMemberInfo:function(){var e=this;return(0,r.default)((0,a.default)().mark((function n(){var t,i;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.request({url:e.interfaces.getMemberInfo,method:"POST"});case 2:if(t=n.sent,i=t.data,console.log(i),1e4==i.error_code){n.next=7;break}return n.abrupt("return");case 7:e.memberInfo=i.data;case 8:case"end":return n.stop()}}),n)})))()}}};n.default=u},e306:function(e,n,t){"use strict";t.r(n);var i=t("8e50"),a=t("77ed");for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("4104");var u=t("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"3b2e0479",null,!1,i["a"],void 0);n["default"]=o.exports}}]);