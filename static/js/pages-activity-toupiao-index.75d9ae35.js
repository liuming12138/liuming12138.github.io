(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-toupiao-index"],{"1cf3":function(t,i,e){var n=e("a326");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("01dc16d9",n,!0,{sourceMap:!1,shadowMode:!1})},"70b7":function(t,i,e){"use strict";var n=e("1cf3"),a=e.n(n);a.a},"86a1":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var n={uLoadmore:e("20ed").default,uPopup:e("e699").default,uParse:e("7f99").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"app"},[e("v-uni-image",{attrs:{src:t.newsData.image,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"app-1"},[e("v-uni-view",{},[e("v-uni-text",[t._v(t._s(t.newsData.signupCount))]),e("v-uni-text",[t._v("投票人数")])],1),e("v-uni-view",{},[e("v-uni-text",[t._v(t._s(t.newsData.personCount))]),e("v-uni-text",[t._v("累计投票")])],1),e("v-uni-view",{},[e("v-uni-text",[t._v(t._s(t.newsData.seeCount))]),e("v-uni-text",[t._v("访问量")])],1),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onPaihang.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:"/static/img/paihang.png",mode:"widthFix"}}),e("v-uni-text",[t._v("排行榜")])],1)],1),e("v-uni-view",{staticClass:"app-2"},[e("v-uni-view",{},[e("v-uni-view",{},[e("v-uni-input",{attrs:{type:"text",placeholder:"搜索选手名或编号"},model:{value:t.seaName,callback:function(i){t.seaName=i},expression:"seaName"}}),e("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onSeach.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"iconfont icon-sousuo"})],1)],1)],1)],1),t.goodsList.length>0?e("v-uni-view",{},[e("v-uni-view",{staticClass:"app-3"},[e("v-uni-view",{},[e("v-uni-view",{staticClass:"goodsLeftList"},t._l(t.goodsList,(function(i){return e("v-uni-view",{staticClass:"goodsItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onZJHG(i)}}},[e("v-uni-image",{attrs:{src:t._f("imgFiles")(i.images),mode:"aspectFill"}}),e("v-uni-view",{staticClass:"goods-top"},[e("v-uni-text",[t._v(t._s(i.bianhao)+"号")]),e("v-uni-text",[t._v(t._s(i.name))]),e("v-uni-text",[t._v(t._s(i.vote_count)+"票")])],1),e("v-uni-view",{staticClass:"goods-mid",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onZJHGDz(i)}}},[e("v-uni-view",{},[e("v-uni-text",{class:{on:i.isSelect}}),e("v-uni-text",[t._v("投票")])],1)],1)],1)})),1)],1)],1),e("u-loadmore",{attrs:{status:t.status}})],1):e("v-uni-view",{staticClass:"app-title"},[t._v("暂无作品")]),e("v-uni-view",{staticStyle:{height:"100upx"}}),e("v-uni-view",{staticClass:"tou-btn"},[e("v-uni-view",{},[e("v-uni-text",[t._v("已选票数")]),e("v-uni-text",[t._v(t._s(t.isSelectList.length))])],1),t.timestamp<=0?e("v-uni-text",[t._v("活动已结束")]):t.isSelectList.length<=t.newsData.voteOptionCount&&t.isSelectList.length>=t.newsData.voteOptionMinCount?e("v-uni-text",{staticClass:"on",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onZJHGDzSum.apply(void 0,arguments)}}},[t._v("投票")]):e("v-uni-text",[t._v("投票")])],1),e("u-popup",{attrs:{mode:"center"},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[e("v-uni-view",{staticClass:"content"},[e("v-uni-scroll-view",{staticStyle:{height:"700upx"},attrs:{"scroll-y":"true"}},[e("v-uni-view",{staticClass:"img-box"},[e("v-uni-view",{},[e("v-uni-view",{staticClass:"box-1"},[e("v-uni-image",{attrs:{src:t.imgBox,mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"box-2"},[e("u-parse",{attrs:{content:t.contentBox}})],1)],1)],1)],1)],1)],1)],1)},o=[]},a326:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.app .place[data-v-19d77308]{background-color:#fff;height:%?88?%}.app .app-bar[data-v-19d77308]{display:flex;align-items:center;position:fixed;top:0;left:0;width:100%;height:%?88?%;background-color:#2b74fe;padding:0 %?30?%;justify-content:space-between;z-index:10}.app .app-bar uni-navigator[data-v-19d77308]{text-align:center}.app .app-bar uni-navigator uni-image[data-v-19d77308]{width:%?34?%;margin:%?5?% auto 0}.app .app-bar uni-navigator uni-text[data-v-19d77308]{font-size:%?34?%;font-family:SourceHanSansCN;font-weight:400;color:#fff}.app .app-bar > uni-view uni-text[data-v-19d77308]{font-size:%?34?%;font-family:SourceHanSansCN;font-weight:400;color:hsla(0,0%,100%,.6);display:inline-block;margin:0 %?30?%}.app .app-bar > uni-view uni-text.on[data-v-19d77308]{color:#fff}.app > uni-image[data-v-19d77308]{width:100%;height:%?320?%}.blank[data-v-19d77308]{height:%?20?%;background:#f2f2f2}.app-1[data-v-19d77308]{background-color:#2b74fe;display:flex;align-items:flex-end;padding:%?20?% 0}.app-1 uni-view[data-v-19d77308]{flex:1;text-align:center}.app-1 uni-view uni-text[data-v-19d77308]{display:block;color:#fff}.app-1 uni-view uni-text[data-v-19d77308]:nth-child(2){margin-top:%?10?%}.app-1 uni-image[data-v-19d77308]{width:%?50?%;margin:0 auto}.app-2[data-v-19d77308]{background-color:#2b74fe;padding:%?20?% %?30?%}.app-2 > uni-view[data-v-19d77308]{background-color:#fff;border-radius:3px}.app-2 > uni-view > uni-view[data-v-19d77308]:nth-child(1){display:flex;padding:%?10?% %?20?%;align-items:center}.app-2 > uni-view > uni-view:nth-child(1) uni-input[data-v-19d77308]{font-size:%?24?%;flex:1;height:%?60?%}.app-2 > uni-view > uni-view:nth-child(1) uni-view[data-v-19d77308]{width:%?60?%;height:%?60?%;display:flex;align-items:center;justify-content:center}.app-2 > uni-view > uni-view:nth-child(1) uni-view uni-text[data-v-19d77308]{font-size:%?50?%;color:#2b74fe}.app-2 > uni-view > uni-view[data-v-19d77308]:nth-child(2){display:flex;margin:%?30?% 0;background-color:hsla(0,0%,60%,.1)}.app-2 > uni-view > uni-view:nth-child(2) > uni-view uni-image[data-v-19d77308]{width:%?40?%}.app-2 > uni-view > uni-view:nth-child(2) > uni-view[data-v-19d77308]:nth-child(1){text-align:center;padding:%?40?% %?30?%;background-color:hsla(0,0%,60%,.1)}.app-2 > uni-view > uni-view:nth-child(2) > uni-view:nth-child(1) uni-image[data-v-19d77308]{margin:0 auto}.app-2 > uni-view > uni-view:nth-child(2) > uni-view:nth-child(1) uni-text[data-v-19d77308]{color:#2b74fe;display:inline-block;margin-top:%?15?%}.app-2 > uni-view > uni-view:nth-child(2) > uni-view[data-v-19d77308]:nth-child(2){flex:1;padding:%?40?% %?30?%}.app-2 > uni-view > uni-view:nth-child(2) > uni-view:nth-child(2) > uni-view[data-v-19d77308]:nth-child(1){display:flex;justify-content:center}.app-2 > uni-view > uni-view:nth-child(2) > uni-view:nth-child(2) > uni-view:nth-child(1) uni-text[data-v-19d77308]{padding-left:%?20?%}.app-2 > uni-view > uni-view:nth-child(2) > uni-view:nth-child(2) > uni-view[data-v-19d77308]:nth-child(2){display:flex;justify-content:center;margin-top:%?20?%}.app-2 > uni-view > uni-view[data-v-19d77308]:nth-child(3){display:flex;justify-content:center;padding:%?20?% 0 %?40?%}.app-2 > uni-view > uni-view:nth-child(3) uni-text[data-v-19d77308]{padding:%?20?% %?100?%;background-color:#2b74fe;border-radius:5px;color:#fff}.app-2 > uni-view > uni-view:nth-child(3) uni-text.on[data-v-19d77308]{background-color:hsla(0,0%,60%,.1);color:#999}.app-3[data-v-19d77308]{padding:%?60?% %?20?% 0;background-color:#f9f9f9}.app-3 .goodsContent[data-v-19d77308]{width:100%;display:flex;justify-content:center}.app-3 .goodsLeftList[data-v-19d77308]{display:flex;flex-wrap:wrap;justify-content:space-between}.app-3 .goodsItem[data-v-19d77308]{background:#fff;margin-bottom:%?30?%;width:48%}.app-3 .goodsItem uni-image[data-v-19d77308]{height:%?420?%;width:100%}.app-3 .goods-top[data-v-19d77308]{padding:%?15?% %?10?%;display:flex;align-items:center}.app-3 .goods-top uni-text[data-v-19d77308]:nth-child(1){display:inline-block;font-size:%?32?%;color:#2b74fe;margin-right:%?10?%}.app-3 .goods-top uni-text[data-v-19d77308]:nth-child(2){flex:1;text-align:left;font-size:%?28?%;color:#000;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.app-3 .goods-top uni-text[data-v-19d77308]:nth-child(3){font-size:%?28?%;color:#fc5c69}.app-3 .goods-mid[data-v-19d77308]{padding:%?20?% %?10?%;display:flex;justify-content:center}.app-3 .goods-mid > uni-view[data-v-19d77308]{border:1px solid #fc5c69;padding:%?10?% %?60?%;display:flex;align-items:center;border-radius:%?40?%}.app-3 .goods-mid > uni-view uni-text[data-v-19d77308]{display:block}.app-3 .goods-mid > uni-view uni-text[data-v-19d77308]:nth-child(1){width:%?30?%;height:%?30?%;border-radius:50%;border:1px solid #fc5c69;margin-right:%?20?%}.app-3 .goods-mid > uni-view uni-text:nth-child(1).on[data-v-19d77308]{background-color:#fc5c69}.app-3 .goods-mid > uni-view uni-text[data-v-19d77308]:nth-child(2){color:#fc5c69}.app-title[data-v-19d77308]{text-align:center;padding:%?40?%}.tou-btn[data-v-19d77308]{position:fixed;width:100%;display:flex;bottom:0;background-color:#fff}.tou-btn > uni-view[data-v-19d77308]{flex:1;height:%?100?%;display:flex;justify-content:center;align-items:center}.tou-btn > uni-view uni-text[data-v-19d77308]{display:block}.tou-btn > uni-view uni-text[data-v-19d77308]:nth-child(1){font-size:%?34?%}.tou-btn > uni-view uni-text[data-v-19d77308]:nth-child(2){width:%?60?%;height:%?60?%;text-align:center;line-height:%?60?%;color:#fc5c69;border:1px solid #fc5c69;border-radius:50%;margin-left:%?20?%}.tou-btn > uni-text[data-v-19d77308]{flex:1;height:%?100?%;background-color:#ddd;text-align:center;line-height:%?100?%;font-size:%?34?%;color:#fff}.tou-btn > uni-text.on[data-v-19d77308]{background-color:#014fff}[data-v-19d77308] .u-mode-center-box{width:80%!important;margin:0 auto}.img-box > uni-view[data-v-19d77308]{background-color:#fff;box-sizing:border-box;padding:%?40?%}.img-box > uni-view .box-1[data-v-19d77308]{display:flex;justify-content:center;align-items:center}.img-box > uni-view .box-1 uni-image[data-v-19d77308]{width:%?295?%;height:%?413?%}.img-box > uni-view .box-2[data-v-19d77308]{margin:%?20?% 0}',""]),t.exports=i},c89a:function(t,i,e){"use strict";e("7a82");var n=e("ee27").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("99af"),e("4de4"),e("d3b7"),e("14d9"),e("ac1f"),e("5319");var a=n(e("d0ff")),o=n(e("f07e")),d=n(e("c964")),s={data:function(){return{newsData:{},shareShow:!1,providerList:[],businessInfo:{},seaName:"",goodsList:[],page:1,pageSize:10,status:"loading",isSelectList:[],show:!1,imgBox:"",contentBox:""}},onLoad:function(t){this.initData(t)},onReachBottom:function(){this.page++,this.getGoodsList(),this.status="loading"},methods:{onBack:function(){uni.navigateBack()},shareClose:function(t){this.shareShow=t},onPublish:function(){this.shareShow=!0},onPaihang:function(){uni.navigateTo({url:"/pages/activity/toupiao/paihang/index?id="+this.newsData.id})},initData:function(t){var i=this;return(0,d.default)((0,o.default)().mark((function e(){var n;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.$api.useActivityApi().getActivitiesInfo(t);case 2:n=e.sent,i.signup=n.data.signup,i.newsData=n.data.activitiesInfo,i.businessInfo=n.data.businessInfo,i.getGoodsList(),uni.setNavigationBarTitle({title:i.newsData.title});case 8:case"end":return e.stop()}}),e)})))()},getGoodsList:function(){var t=this;return(0,d.default)((0,o.default)().mark((function i(){var e,n;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$api.useActivityApi().getActivitiesVoteList({activitesId:t.newsData.id,pageNum:t.page,pageSize:t.pageSize,searchVal:t.seaName});case 2:e=i.sent,n=e.data,t.goodsList=[].concat((0,a.default)(t.goodsList),(0,a.default)(n.data)),t.status="nomore";case 6:case"end":return i.stop()}}),i)})))()},onSeach:function(){this.page=1,this.goodsListCount=0,this.goodsLeftList=[],this.goodsLeftListHeight=0,this.goodsRightList=[],this.goodsRightListHeight=0,this.goodsList=[],this.getGoodsList()},onZJHG:function(t){this.show=!0,this.imgBox=t.images.substr(0,t.images.length-1),this.contentBox=t.remark},onZJHGDz:function(t){var i=this;return(0,d.default)((0,o.default)().mark((function e(){return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.isSelect?(i.$set(t,"isSelect",!1),i.isSelectList=i.isSelectList.filter((function(i,e){return i!=t.id}))):(i.$set(t,"isSelect",!0),i.isSelectList.push(t.id));case 1:case"end":return e.stop()}}),e)})))()},onZJHGDzSum:function(){var t=this;return(0,d.default)((0,o.default)().mark((function i(){var e,n,a;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e=t.isSelectList.join(",")+",",uni.showLoading({title:"提交中..."}),i.prev=2,i.next=5,t.$api.useActivityApi().submitVote({activitesId:t.newsData.id,selVoteId:e});case 5:n=i.sent,a=n.data,1e4!=a.error_code?t.$toast(a.message):t.$toast(a.message,"success"),uni.hideLoading(),i.next=14;break;case 11:i.prev=11,i.t0=i["catch"](2),uni.hideLoading();case 14:case"end":return i.stop()}}),i,null,[[2,11]])})))()}},computed:{timestamp:function(){if(this.newsData.endDate){var t=new Date(this.newsData.endDate.replace(/-/g,"/")).getTime()-(new Date).getTime();return t/1e3}return 0}}};i.default=s},d332:function(t,i,e){"use strict";e.r(i);var n=e("86a1"),a=e("e4f6");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("70b7");var d=e("f0c5"),s=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"19d77308",null,!1,n["a"],void 0);i["default"]=s.exports},e4f6:function(t,i,e){"use strict";e.r(i);var n=e("c89a"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a}}]);