(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yundonghui-index"],{"01dc":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uIcon:n("1f9a").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"u-empty",style:[t.emptyStyle]},[t.isSrc?n("v-uni-image",{style:{width:t.$u.addUnit(t.width),height:t.$u.addUnit(t.height)},attrs:{src:t.icon,mode:"widthFix"}}):n("u-icon",{attrs:{name:"message"===t.mode?"chat":"empty-"+t.mode,size:t.iconSize,color:t.iconColor,"margin-top":"14"}}),n("v-uni-text",{staticClass:"u-empty__text",style:[t.textStyle]},[t._v(t._s(t.text?t.text:t.icons[t.mode]))]),t.$slots.default||t.$slots.$default?n("v-uni-view",{staticClass:"u-empty__wrap"},[t._t("default")],2):t._e()],1):t._e()},o=[]},"07c0":function(t,e,n){"use strict";n.r(e);var i=n("4ee3"),a=n("cb5a");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d7844");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"c60050f4",null,!1,i["a"],void 0);e["default"]=r.exports},"2b60":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-6fa087a0], uni-scroll-view[data-v-6fa087a0], uni-swiper-item[data-v-6fa087a0]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-empty[data-v-6fa087a0]{display:flex;flex-direction:row;flex-direction:column;justify-content:center;align-items:center}.u-empty__text[data-v-6fa087a0]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}.u-slot-wrap[data-v-6fa087a0]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:%?20?%}',""]),t.exports=e},"32cf":function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c975");var a=i(n("6e00")),o={name:"u-empty",mixins:[uni.$u.mpMixin,uni.$u.mixin,a.default],data:function(){return{icons:{car:"购物车为空",page:"页面不存在",search:"没有搜索结果",address:"没有收货地址",wifi:"没有WiFi",order:"订单为空",coupon:"没有优惠券",favor:"暂无收藏",permission:"无权限",history:"无历史记录",news:"无新闻列表",message:"消息列表为空",list:"列表为空",data:"数据为空",comment:"暂无评论"}}},computed:{emptyStyle:function(){var t={};return t.marginTop=uni.$u.addUnit(this.marginTop),uni.$u.deepMerge(uni.$u.addStyle(this.customStyle),t)},textStyle:function(){var t={};return t.color=this.textColor,t.fontSize=uni.$u.addUnit(this.textSize),t},isSrc:function(){return this.icon.indexOf("/")>=0}}};e.default=o},"4ee3":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uLoadmore:n("20ed").default,uEmpty:n("d7a6").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"app"},[n("v-uni-view",{staticClass:"app-1"},[n("v-uni-view",{},[n("v-uni-view",{},[n("v-uni-view",{},[n("v-uni-image",{attrs:{src:t._f("txImageFiles")(t.userInfo.headImg),mode:"aspectFill"}})],1),n("v-uni-text",[t._v(t._s(t.userInfo.name))])],1),n("v-uni-view",{},[n("v-uni-view",{staticClass:"pro-content"},[n("v-uni-text",[t._v("今日步数")]),n("v-uni-text",[t._v(t._s(t.stepsNumber>0?t.stepsNumber:t.todayStep))])],1)],1),n("v-uni-view",{},[n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onUpdateData.apply(void 0,arguments)}}},[t._v("刷新数据")]),n("v-uni-text",{staticClass:"on",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onReceive.apply(void 0,arguments)}}},[t._v("积分规则")])],1)],1)],1),n("v-uni-view",{staticClass:"app-2"},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPage("/pages/yundonghui/list/index")}}},[n("v-uni-view",{},[n("v-uni-image",{attrs:{src:"/static/img/new/yundong/1.png",mode:"widthFix"}})],1),n("v-uni-text",[t._v("运动常识")])],1),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPage("/pages/yundonghui/huodong/index")}}},[n("v-uni-view",{},[n("v-uni-image",{attrs:{src:"/static/img/new/yundong/2.png",mode:"widthFix"}})],1),n("v-uni-text",[t._v("活动")])],1),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPage("/pages/yundonghui/paihang/index")}}},[n("v-uni-view",{},[n("v-uni-image",{attrs:{src:"/static/img/new/yundong/3.png",mode:"widthFix"}})],1),n("v-uni-text",[t._v("运动排行")])],1),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPage("/pages/yundonghui/wode/index")}}},[n("v-uni-view",{},[n("v-uni-image",{attrs:{src:"/static/img/new/yundong/4.png",mode:"widthFix"}})],1),n("v-uni-text",[t._v("我的")])],1)],1),n("v-uni-view",{staticClass:"bank"}),n("v-uni-view",{staticClass:"app-3"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{},[n("v-uni-text",[t._v("运动常识")]),n("v-uni-image",{attrs:{src:"/static/img/new/yundong/5.png",mode:"aspectFill"}})],1)],1),t.list.length>0?n("v-uni-view",{},[n("v-uni-view",{staticClass:"list"},t._l(t.list,(function(e,i){return n("v-uni-view",{key:i,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onSee(e)}}},[n("v-uni-image",{attrs:{src:t._f("newsImageFiles")(e.image),mode:"aspectFill"}}),n("v-uni-view",{},[n("v-uni-text",[t._v(t._s(e.title))]),n("v-uni-text",[t._v(t._s(t._f("dateFiles")(e.pubdate)))])],1)],1)})),1),n("u-loadmore",{attrs:{status:t.status}})],1):n("v-uni-view",{},[n("u-empty",{attrs:{mode:"data",icon:"/static/empty/data.png",text:"暂无数据"}})],1)],1)],1)},o=[]},"555b":function(t,e,n){var i=n("8d9f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0509dda8",i,!0,{sourceMap:!1,shadowMode:!1})},"6e00":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={props:{icon:{type:String,default:uni.$u.props.empty.icon},text:{type:String,default:uni.$u.props.empty.text},textColor:{type:String,default:uni.$u.props.empty.textColor},textSize:{type:[String,Number],default:uni.$u.props.empty.textSize},iconColor:{type:String,default:uni.$u.props.empty.iconColor},iconSize:{type:[String,Number],default:uni.$u.props.empty.iconSize},mode:{type:String,default:uni.$u.props.empty.mode},width:{type:[String,Number],default:uni.$u.props.empty.width},height:{type:[String,Number],default:uni.$u.props.empty.height},show:{type:Boolean,default:uni.$u.props.empty.show},marginTop:{type:[String,Number],default:uni.$u.props.empty.marginTop}}};e.default=i},"8ab8":function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af");var a=i(n("d0ff")),o=i(n("f07e")),u=i(n("c964")),r=n("6ed1"),s=(n("0a10"),{data:function(){return{page:1,pageSize:10,status:"loading",list:[],todayStep:0,stepsNumber:0}},onShow:function(){this.hasLogin||uni.showModal({title:"提示",content:"未登录或登录超时，请重新登录！",success:function(t){t.confirm?uni.navigateTo({url:"/pages/login/login"}):uni.switchTab({url:"/pages/tabBar/home/index"})}})},mounted:function(){this.page=1,this.list=[],this.getMyMovemntInfo(),this.getNoticeInfoList()},onReachBottom:function(){this.page++,this.status="loading",this.getNoticeInfoList()},onPullDownRefresh:function(){var t=this;setTimeout((function(){t.onUpdateData(),t.page=1,t.list=[],t.getNoticeInfoList(),uni.stopPullDownRefresh()}),500)},methods:{onPage:function(t){uni.navigateTo({url:t})},onUpdateData:function(){this.getMyMovemntInfo(),uni.showToast({icon:"none",title:"更新步数成功"})},upBuShu:function(){var t=this;return(0,u.default)((0,o.default)().mark((function e(){var n,i;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("android"!=uni.getSystemInfoSync().platform){e.next=12;break}if(1==r.Local.get("permission-motion")){e.next=5;break}uni.showModal({title:"提示",content:"连工惠将访问您的运动健康、媒体和文件权限，便于获取您的运动步数",success:function(){var e=(0,u.default)((0,o.default)().mark((function e(n){var i;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.Local.set("permission-motion",1),e.next=3,t.$store.dispatch("setSteps");case 3:i=e.sent,t.stepsNumber=i.numberOfSteps||0,t.updateStepnum();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),e.next=10;break;case 5:return e.next=7,t.$store.dispatch("setSteps");case 7:n=e.sent,t.stepsNumber=n.numberOfSteps||0,t.updateStepnum();case 10:e.next=17;break;case 12:return e.next=14,t.$store.dispatch("setSteps");case 14:i=e.sent,t.stepsNumber=i.numberOfSteps||0,t.updateStepnum();case 17:case"end":return e.stop()}}),e)})))()},imageError:function(t){return"/static/img/login/18.png"},getMyMovemntInfo:function(){var t=this;return(0,u.default)((0,o.default)().mark((function e(){var n;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.useCommApi().getMyMovemntInfo();case 2:n=e.sent,t.todayStep=n.data.stepNum,t.upBuShu();case 5:case"end":return e.stop()}}),e)})))()},updateStepnum:function(){var t=this;return(0,u.default)((0,o.default)().mark((function e(){var n,i;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.stepsNumber>0?t.stepsNumber:t.todayStep,!(n>0)){e.next=6;break}return e.next=4,t.$api.useCommApi().updateStepnum({stepsNum:n});case 4:i=e.sent,i.data;case 6:case"end":return e.stop()}}),e)})))()},onReceive:function(){uni.navigateTo({url:"/pages/news/des/yangban?id=1548&title=积分规则"})},onSee:function(t){uni.navigateTo({url:"/pages/news/des/index?id="+t.id})},getNoticeInfoList:function(){var t=this;return(0,u.default)((0,o.default)().mark((function e(){var n,i;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.useNewsApi().getNoticeInfoList({pageNum:t.page,pageSize:t.pageSize,type:18});case 2:n=e.sent,i=n.data.data,t.list=[].concat((0,a.default)(t.list),(0,a.default)(i)),t.status="nomore";case 6:case"end":return e.stop()}}),e)})))()}},computed:{userInfo:function(){return this.$store.state.userInfo},hasLogin:function(){return this.$store.state.hasLogin}}});e.default=s},"8d9f":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.app[data-v-c60050f4]{background-image:url(/static/img/new/yundong/7.png);background-repeat:no-repeat;background-size:100% auto}.pro-content[data-v-c60050f4]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:%?300?%;height:%?300?%;border-radius:50%;border:4px solid #fff}.pro-content uni-text[data-v-c60050f4]{display:block;text-align:center}.pro-content uni-text[data-v-c60050f4]:nth-child(1){font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#fff}.pro-content uni-text[data-v-c60050f4]:nth-child(2){margin:5px 0;font-size:%?56?%;font-family:PingFang SC;font-weight:800;color:#fff}.pro-content uni-text[data-v-c60050f4]:nth-child(3){font-size:%?24?%;font-family:Source Han Sans CN;font-weight:400;color:hsla(0,0%,100%,.8);padding:%?8?% %?25?%;background:#1b61e5;border-radius:%?40?%}.app-1[data-v-c60050f4]{padding:%?80?% %?40?% %?30?%}.app-1 > uni-view[data-v-c60050f4]:nth-child(1){display:flex;align-items:center;justify-content:space-between;margin-bottom:%?30?%}.app-1 > uni-view:nth-child(1) > uni-view:nth-child(1) uni-view[data-v-c60050f4]{width:%?140?%;height:%?140?%;border:2px solid #fff;border-radius:50%;overflow:hidden;margin:0 auto}.app-1 > uni-view:nth-child(1) > uni-view:nth-child(1) uni-view uni-image[data-v-c60050f4]{width:100%;height:100%}.app-1 > uni-view:nth-child(1) > uni-view:nth-child(1) uni-text[data-v-c60050f4]{display:block;text-align:center;font-size:%?32?%;font-family:Source Han Sans CN;font-weight:400;color:#fefefe;margin-top:%?20?%}.app-1 > uni-view:nth-child(1) > uni-view[data-v-c60050f4]:nth-child(2){width:%?300?%;height:%?300?%}.app-1 > uni-view:nth-child(1) > uni-view:nth-child(3) uni-text[data-v-c60050f4]{display:block;font-size:%?26?%;font-family:Source Han Sans CN;font-weight:400;color:hsla(0,0%,100%,.9);padding:%?8?% %?25?%;background:rgba(27,97,229,.7);margin:15px 0;border-radius:%?40?%}.app-1 > uni-view:nth-child(1) > uni-view:nth-child(3) uni-text.on[data-v-c60050f4]{color:#fff}.app-1 > uni-view:nth-child(2) > uni-text[data-v-c60050f4]{text-align:center;display:block;font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#fff}.app-1 > uni-view:nth-child(2) > uni-view[data-v-c60050f4]{flex:1;text-align:center}.app-1 > uni-view:nth-child(2) > uni-view > uni-text[data-v-c60050f4]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#d1e1ff}.app-1 > uni-view:nth-child(2) > uni-view uni-view uni-text[data-v-c60050f4]:nth-child(1){font-size:%?36?%;font-family:PingFang SC;font-weight:500;color:#fff}.app-1 > uni-view:nth-child(2) > uni-view uni-view uni-text[data-v-c60050f4]:nth-child(2){font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#fff}.bank[data-v-c60050f4]{background:#f1f7ff;height:%?20?%}.app-2[data-v-c60050f4]{padding:%?100?% %?40?% %?60?%;display:flex;justify-content:space-between}.app-2 > uni-view[data-v-c60050f4]{width:%?150?%;height:%?150?%;background:#fff;box-shadow:0 %?4?% %?21?% 0 rgba(152,184,250,.35);border-radius:%?10?%;text-align:center}.app-2 > uni-view > uni-view[data-v-c60050f4]{display:flex;align-items:center;justify-content:center;width:%?60?%;margin:%?25?% auto %?10?%;height:%?60?%}.app-2 > uni-view > uni-view uni-image[data-v-c60050f4]{width:%?43?%}.app-2 > uni-view > uni-text[data-v-c60050f4]{font-size:%?30?%;font-family:Source Han Sans CN;font-weight:400;color:#131212}.app-3[data-v-c60050f4]{padding:%?40?%}.app-3 .title[data-v-c60050f4]{display:flex;justify-content:space-between;align-items:center}.app-3 .title uni-view[data-v-c60050f4]{position:relative}.app-3 .title uni-view uni-text[data-v-c60050f4]{width:%?150?%;text-align:center;display:inline-block;font-size:%?31?%;font-family:Source Han Sans CN;font-weight:400;color:#000}.app-3 .title uni-view uni-image[data-v-c60050f4]{width:%?150?%;height:%?25?%;position:absolute;bottom:0;left:0}.app-3 .title > uni-text[data-v-c60050f4]{font-size:%?28?%;font-family:Source Han Sans CN;font-weight:400;color:#000}.app-3 .list[data-v-c60050f4]{padding:%?20?% 0 0}.app-3 .list > uni-view[data-v-c60050f4]{display:flex;padding:%?30?% 0;border-bottom:1px solid #eee}.app-3 .list > uni-view[data-v-c60050f4]:last-child{border-bottom:0}.app-3 .list > uni-view uni-image[data-v-c60050f4]{width:%?200?%;height:%?150?%;border-radius:5px}.app-3 .list > uni-view uni-view[data-v-c60050f4]{flex:1;margin-left:%?30?%;display:flex;flex-direction:column;justify-content:space-between}.app-3 .list > uni-view uni-view uni-text[data-v-c60050f4]{display:block}.app-3 .list > uni-view uni-view uni-text[data-v-c60050f4]:nth-child(1){overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:%?30?%;font-family:Source Han Sans CN;font-weight:400;color:#333;line-height:%?40?%}.app-3 .list > uni-view uni-view uni-text[data-v-c60050f4]:nth-child(2){font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#bbb}',""]),t.exports=e},cb5a:function(t,e,n){"use strict";n.r(e);var i=n("8ab8"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d722:function(t,e,n){var i=n("2b60");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("5d302b01",i,!0,{sourceMap:!1,shadowMode:!1})},d7844:function(t,e,n){"use strict";var i=n("555b"),a=n.n(i);a.a},d7a6:function(t,e,n){"use strict";n.r(e);var i=n("01dc"),a=n("eb95");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("eb8c");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6fa087a0",null,!1,i["a"],void 0);e["default"]=r.exports},eb8c:function(t,e,n){"use strict";var i=n("d722"),a=n.n(i);a.a},eb95:function(t,e,n){"use strict";n.r(e);var i=n("32cf"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);