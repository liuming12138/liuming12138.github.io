(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shezhi-index"],{"0b14":function(t,e,n){"use strict";n.r(e);var i=n("fc16"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"2e2c":function(t,e,n){"use strict";n.r(e);var i=n("ca7a"),r=n("0b14");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("42c9");var o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"3fa99dd0",null,!1,i["a"],void 0);e["default"]=s.exports},3783:function(t,e,n){var i=n("7c41");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("dfbb19c8",i,!0,{sourceMap:!1,shadowMode:!1})},"3bd9":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uSwitch:n("864e").default,uOverlay:n("74a7").default,uLineProgress:n("2e2c").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"app"},[n("v-uni-view",{staticClass:"app-1"},[n("v-uni-navigator",{attrs:{"hover-class":"none",url:"/pages/commDes/index?id=1728&title=用户协议"}},[n("v-uni-text",[t._v("用户协议")]),n("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1),n("v-uni-navigator",{attrs:{"hover-class":"none",url:"/pages/commDes/index?id=1727&title=隐私政策"}},[n("v-uni-text",[t._v("隐私政策")]),n("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1),n("v-uni-navigator",{attrs:{"hover-class":"none",url:"#"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-text",[t._v("定向推送")]),n("v-uni-view",{},[n("u-switch",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1),n("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1),n("v-uni-navigator",{attrs:{"hover-class":"none",url:"/pages/shezhi/log-off/index"}},[n("v-uni-text",[t._v("账号注销")]),n("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.outAccount.apply(void 0,arguments)}}},[t._v("退出登录")])],1),n("u-overlay",{attrs:{show:t.isProgress},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-view",{staticClass:"load-box"},[n("v-uni-view",{},[n("v-uni-text",[t._v("新版本来袭")]),n("v-uni-text",[t._v("正在下载,请耐心等待...")]),n("v-uni-view",{},[n("u-line-progress",{attrs:{percentage:t.progress,activeColor:"#2979ff"}})],1)],1)],1)],1)],1)},a=[]},"42c9":function(t,e,n){"use strict";var i=n("7fdb"),r=n.n(i);r.a},4489:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={props:{activeColor:{type:String,default:uni.$u.props.lineProgress.activeColor},inactiveColor:{type:String,default:uni.$u.props.lineProgress.color},percentage:{type:[String,Number],default:uni.$u.props.lineProgress.inactiveColor},showText:{type:Boolean,default:uni.$u.props.lineProgress.showText},height:{type:[String,Number],default:uni.$u.props.lineProgress.height}}};e.default=i},"4e90":function(t,e,n){"use strict";n.r(e);var i=n("3bd9"),r=n("f3c4");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("a5cf");var o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"6d9956fb",null,!1,i["a"],void 0);e["default"]=s.exports},"5e92":function(t,e,n){"use strict";var i=n("9c9f"),r=n.n(i);r.a},"6ba5":function(t,e,n){"use strict";n.r(e);var i=n("c700"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"6de2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-3fa99dd0], uni-scroll-view[data-v-3fa99dd0], uni-swiper-item[data-v-3fa99dd0]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-line-progress[data-v-3fa99dd0]{align-items:stretch;position:relative;display:flex;flex-direction:row;flex:1;overflow:hidden;border-radius:100px}.u-line-progress__background[data-v-3fa99dd0]{background-color:#ececec;border-radius:100px;flex:1}.u-line-progress__line[data-v-3fa99dd0]{position:absolute;top:0;left:0;bottom:0;align-items:center;display:flex;flex-direction:row;color:#fff;border-radius:100px;transition:width .5s ease;justify-content:flex-end}.u-line-progress__text[data-v-3fa99dd0]{font-size:10px;align-items:center;text-align:right;color:#fff;margin-right:5px;-webkit-transform:scale(.9);transform:scale(.9)}',""]),t.exports=e},"7ad8":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uLoadingIcon:n("6d3c").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-switch",class:[t.disabled&&"u-switch--disabled"],style:[t.switchStyle,t.$u.addStyle(t.customStyle)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-switch__bg",style:[t.bgStyle]}),n("v-uni-view",{ref:"u-switch__node",staticClass:"u-switch__node",class:[t.value&&"u-switch__node--on"],style:[t.nodeStyle]},[n("u-loading-icon",{attrs:{show:t.loading,mode:"circle",timingFunction:"linear",color:t.value?t.activeColor:"#AAABAD",size:.6*t.size}})],1)],1)},a=[]},"7c41":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-6d9956fb]{background-color:#f9f9f9}body.?%PAGE?%[data-v-6d9956fb]{background-color:#f9f9f9}.version[data-v-6d9956fb]{text-align:center;font-size:%?24?%;font-family:PingFang SC;font-weight:400;color:#999;padding:%?30?% 0 0}.app-1[data-v-6d9956fb]{background-color:#fff;padding:0 %?40?%}.app-1 uni-navigator[data-v-6d9956fb]{display:flex;align-items:center;justify-content:space-between;padding:%?35?% 0;border-bottom:1px solid #eee}.app-1 uni-navigator[data-v-6d9956fb]:last-child{border:0}.app-1 uni-navigator > uni-view[data-v-6d9956fb]{color:#666;display:flex;align-items:center;justify-content:flex-end;margin-right:%?20?%}.app-1 uni-navigator uni-text[data-v-6d9956fb]{font-size:%?24?%;font-family:PingFang SC;font-weight:400;color:#000}.app-1 uni-navigator uni-text[data-v-6d9956fb]:nth-of-type(1){flex:1}.app-1 uni-navigator uni-text[data-v-6d9956fb]:nth-of-type(2){font-size:%?36?%}.btn[data-v-6d9956fb]{padding:%?70?% %?40?%}.load-box[data-v-6d9956fb]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.load-box > uni-view[data-v-6d9956fb]{background-color:#fff;width:%?500?%;height:%?400?%;border-radius:5px}.load-box > uni-view > uni-view[data-v-6d9956fb]{padding:%?60?% %?40?% 0}.load-box > uni-view > uni-text[data-v-6d9956fb]{display:block;text-align:center}.load-box > uni-view > uni-text[data-v-6d9956fb]:nth-child(1){margin:%?60?% 0 %?40?%;font-size:%?50?%}.load-box > uni-view > uni-text[data-v-6d9956fb]:nth-child(2){font-size:%?24?%;color:#666}',""]),t.exports=e},"7fdb":function(t,e,n){var i=n("6de2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("3f947052",i,!0,{sourceMap:!1,shadowMode:!1})},8249:function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("f07e")),a=i(n("c964")),o=n("6ed1"),s=n("0a10"),u={data:function(){return{appVersion:"",totalSizeMB:0,checked:o.Local.get("push-code")||!1}},onShow:function(){this.formatFileSize()},onLoad:function(){var t=uni.getSystemInfoSync();this.appVersion=t.appVersion},computed:{sizeMB:function(){return this.totalSizeMB},isProgress:function(){return this.$store.state.isProgress},progress:function(){return this.$store.state.progress}},methods:{clearStorage:function(){uni.showLoading({title:"正在清除缓存"})},formatFileSize:function(){},outAccount:function(){var t=this;return(0,a.default)((0,r.default)().mark((function e(){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$api.useUserApi().appLogout();case 3:e.sent,t.$store.commit("loginOut"),setTimeout((function(){uni.switchTab({url:"/pages/tabBar/home/index"})}),300),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},change:function(t){o.Local.set("push-code",t)},getAppVersion:function(){(0,s.getAppVersion)()}}};e.default=u},"864e":function(t,e,n){"use strict";n.r(e);var i=n("7ad8"),r=n("6ba5");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("5e92");var o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"12709030",null,!1,i["a"],void 0);e["default"]=s.exports},9845:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={props:{loading:{type:Boolean,default:uni.$u.props.switch.loading},disabled:{type:Boolean,default:uni.$u.props.switch.disabled},size:{type:[String,Number],default:uni.$u.props.switch.size},activeColor:{type:String,default:uni.$u.props.switch.activeColor},inactiveColor:{type:String,default:uni.$u.props.switch.inactiveColor},value:{type:[Boolean,String,Number],default:uni.$u.props.switch.value},activeValue:{type:[String,Number,Boolean],default:uni.$u.props.switch.activeValue},inactiveValue:{type:[String,Number,Boolean],default:uni.$u.props.switch.inactiveValue},asyncChange:{type:Boolean,default:uni.$u.props.switch.asyncChange},space:{type:[String,Number],default:uni.$u.props.switch.space}}};e.default=i},"9c9f":function(t,e,n){var i=n("d9be");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("7159b0d1",i,!0,{sourceMap:!1,shadowMode:!1})},a5cf:function(t,e,n){"use strict";var i=n("3783"),r=n.n(i);r.a},c700:function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var r=i(n("9845")),a={name:"u-switch",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],watch:{value:{immediate:!0,handler:function(t){t!==this.inactiveValue&&t!==this.activeValue&&uni.$u.error("v-model绑定的值必须为inactiveValue、activeValue二者之一")}}},data:function(){return{bgColor:"#ffffff"}},computed:{isActive:function(){return this.value===this.activeValue},switchStyle:function(){var t={};return t.width=uni.$u.addUnit(2*this.size+2),t.height=uni.$u.addUnit(Number(this.size)+2),this.customInactiveColor&&(t.borderColor="rgba(0, 0, 0, 0)"),t.backgroundColor=this.isActive?this.activeColor:this.inactiveColor,t},nodeStyle:function(){var t={};t.width=uni.$u.addUnit(this.size-this.space),t.height=uni.$u.addUnit(this.size-this.space);var e=this.isActive?uni.$u.addUnit(this.space):uni.$u.addUnit(this.size);return t.transform="translateX(-".concat(e,")"),t},bgStyle:function(){var t={};return t.width=uni.$u.addUnit(2*Number(this.size)-this.size/2),t.height=uni.$u.addUnit(this.size),t.backgroundColor=this.inactiveColor,t.transform="scale(".concat(this.isActive?0:1,")"),t},customInactiveColor:function(){return"#fff"!==this.inactiveColor&&"#ffffff"!==this.inactiveColor}},methods:{clickHandler:function(){var t=this;if(!this.disabled&&!this.loading){var e=this.isActive?this.inactiveValue:this.activeValue;this.asyncChange||this.$emit("input",e),this.$nextTick((function(){t.$emit("change",e)}))}}}};e.default=a},ca7a:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-line-progress",style:[t.$u.addStyle(t.customStyle)]},[n("v-uni-view",{ref:"u-line-progress__background",staticClass:"u-line-progress__background",style:[{backgroundColor:t.inactiveColor,height:t.$u.addUnit(t.height)}]}),n("v-uni-view",{staticClass:"u-line-progress__line",style:[t.progressStyle]},[t._t("default",[t.showText&&t.percentage>=10?n("v-uni-text",{staticClass:"u-line-progress__text"},[t._v(t._s(t.innserPercentage+"%"))]):t._e()])],2)],1)},r=[]},d9be:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-12709030], uni-scroll-view[data-v-12709030], uni-swiper-item[data-v-12709030]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-switch[data-v-12709030]{display:flex;flex-direction:row;box-sizing:border-box;position:relative;background-color:#fff;border-width:1px;border-radius:100px;transition:background-color .4s;border-color:rgba(0,0,0,.12);border-style:solid;justify-content:flex-end;align-items:center;overflow:hidden}.u-switch__node[data-v-12709030]{display:flex;flex-direction:row;align-items:center;justify-content:center;border-radius:100px;background-color:#fff;border-radius:100px;box-shadow:1px 1px 1px 0 rgba(0,0,0,.25);transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;transition-timing-function:cubic-bezier(.3,1.05,.4,1.05)}.u-switch__bg[data-v-12709030]{position:absolute;border-radius:100px;background-color:#fff;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.4s;border-top-left-radius:0;border-bottom-left-radius:0;transition-timing-function:ease}.u-switch--disabled[data-v-12709030]{opacity:.6}',""]),t.exports=e},f3c4:function(t,e,n){"use strict";n.r(e);var i=n("8249"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},fc16:function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("4489")),a={name:"u-line-progress",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{lineWidth:0}},watch:{percentage:function(t){this.resizeProgressWidth()}},computed:{progressStyle:function(){var t={};return t.width=this.lineWidth,t.backgroundColor=this.activeColor,t.height=uni.$u.addUnit(this.height),t},innserPercentage:function(){return uni.$u.range(0,100,this.percentage)}},mounted:function(){this.init()},methods:{init:function(){var t=this;uni.$u.sleep(20).then((function(){t.resizeProgressWidth()}))},getProgressWidth:function(){return this.$uGetRect(".u-line-progress__background")},resizeProgressWidth:function(){var t=this;this.getProgressWidth().then((function(e){var n=e.width;t.lineWidth=n*t.innserPercentage/100+"px"}))}}};e.default=a}}]);