(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-new-huodongxq-wenjuan-dati"],{"2d78":function(t,n,e){"use strict";e("7a82");var i=e("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("d3b7"),e("159b"),e("14d9"),e("e9c4");var a=i(e("f07e")),s=i(e("c964")),r={data:function(){return{page:1,pageSize:20,curIndex:0,list:[],styleList:[],ansList:[],temList:[],optType:["A","B","C","D","E","F","G","H","I"],ansData:{},questionId:[],inpData:""}},components:{},onLoad:function(t){this.ansData=t,this.getExamQuestionList(t)},methods:{getExamQuestionList:function(t){var n=this;return(0,s.default)((0,a.default)().mark((function e(){var i,s,r,u;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={paperId:t.paperId},e.next=3,n.request({url:n.interfaces.getExamQuestionList,method:"POST",data:i});case 3:s=e.sent,r=s.data,n.list=r,n.list.forEach((function(t,e){n.questionId.push(t.id)})),u=[!1,!1,!1,!1,!1,!1,!1,!1,!1],n.list.forEach((function(t,e){n.styleList.push(JSON.parse(JSON.stringify(u)))}));case 9:case"end":return e.stop()}}),e)})))()},onOpt:function(t,n,e){var i=!this.styleList[t][n];if(1==e)for(var a=0;a<9;a++)this.$set(this.styleList[t],a,!1);this.$set(this.styleList[t],n,i)},onPrev:function(){this.curIndex--},endExam:function(){var t=this;return(0,s.default)((0,a.default)().mark((function n(){var e,i,s;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e={id:t.ansData.paperId,questionId:t.questionId,chooseAnswer:t.ansList,beginTime:new Date},n.next=3,t.request({url:t.interfaces.endExam,method:"POST",data:e});case 3:i=n.sent,s=i.data,uni.redirectTo({url:"/pages/new/huodongxq/result/index?message="+s.message+"&integral="+s.integral+"&score="+s.score+"&type="+t.ansData.type+"&id="+t.ansData.id});case 6:case"end":return n.stop()}}),n)})))()},onNext:function(){var t=this;return(0,s.default)((0,a.default)().mark((function n(){var e;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.temList=[],t.styleList[t.curIndex].forEach((function(n,e){return n&&t.temList.push(e),n})),3!=t.list[t.curIndex].type){n.next=8;break}if(!t.validate.isEmptyVal(t.ansList[t.curIndex])){n.next=6;break}return uni.showToast({title:"您还没有回答问题",icon:"none"}),n.abrupt("return");case 6:n.next=14;break;case 8:if(e="",t.temList.forEach((function(n,i){e=e+t.optType[n]+"|"})),!t.validate.isEmptyVal(e)){n.next=13;break}return uni.showToast({title:"您还没有回答问题",icon:"none"}),n.abrupt("return");case 13:t.ansList[t.curIndex]=e;case 14:if(!(t.curIndex>=t.list.length-1)){n.next=17;break}return uni.showModal({cancelText:"取消",confirmText:"确定",title:"提示",content:"确认提交答题",success:function(n){n.confirm&&t.endExam(),n.cancel}}),n.abrupt("return");case 17:t.curIndex++;case 18:case"end":return n.stop()}}),n)})))()}}};n.default=r},"405f":function(t,n,e){"use strict";e.r(n);var i=e("2d78"),a=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},"40e9":function(t,n,e){"use strict";var i=e("fd81"),a=e.n(i);a.a},6306:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.app-3[data-v-5f2f4c84]{position:fixed;bottom:0;width:100%;left:0;display:flex}.app-3 uni-view[data-v-5f2f4c84]{background:#fff;width:1px;height:%?100?%}.app-3 uni-text[data-v-5f2f4c84]{flex:1;height:%?100?%;text-align:center;line-height:%?100?%;color:#fff}.app-3 uni-text[data-v-5f2f4c84]:nth-child(1){background-color:#2b74fe}.app-3 uni-text[data-v-5f2f4c84]:nth-child(3){background-color:#2b74fe}.app-1[data-v-5f2f4c84]{padding:%?40?% %?40?% %?140?%}.app-1 .top uni-text[data-v-5f2f4c84]{font-size:%?30?%;color:#000;line-height:%?46?%}.app-1 .mid[data-v-5f2f4c84]{padding-top:20px}.app-1 .mid .dan uni-view[data-v-5f2f4c84]{margin-bottom:20px;display:flex;justify-content:center;align-items:center;text-align:center;border-radius:5px;width:100%;background-color:#2b74fe;padding:%?30?% %?20?%;color:#fff;font-size:%?32?%;line-height:%?44?%}.app-1 .mid .dan uni-view.on[data-v-5f2f4c84]{background-color:#1655cc}.app-1 .mid .tian[data-v-5f2f4c84]{display:flex;align-items:center}.app-1 .mid .tian uni-text[data-v-5f2f4c84]{font-size:%?28?%;margin-right:%?15?%;padding-bottom:%?20?%}.app-1 .mid .tian uni-view[data-v-5f2f4c84]{flex:1;border-bottom:1px solid #eee;padding:0 10px %?20?%}.app-1 .mid .tian uni-input[data-v-5f2f4c84]{font-size:%?28?%}',""]),t.exports=n},"8f85":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"app"},[e("v-uni-view",{staticClass:"app-1"},t._l(t.list,(function(n,i){return e("v-uni-view",{key:i},[t.curIndex==i?e("v-uni-view",{},[e("v-uni-view",{staticClass:"top"},[e("v-uni-text",[t._v(t._s(t._f("datiFiles")(n.question,n.type,i)))])],1),e("v-uni-view",{staticClass:"mid"},[3!=n.type?e("v-uni-view",{staticClass:"dan"},t._l(9,(function(a,s){return n["option"+a]?e("v-uni-view",{key:s,class:{on:t.styleList[i][s]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOpt(i,s,n.type)}}},[e("v-uni-text",[t._v(t._s(n["option"+a]))])],1):t._e()})),1):e("v-uni-view",{staticClass:"tian"},[e("v-uni-text",[t._v("答案 :")]),e("v-uni-view",{},[e("v-uni-input",{attrs:{type:"text",placeholder:"请输入答案"},model:{value:t.ansList[i],callback:function(n){t.$set(t.ansList,i,n)},expression:"ansList[index]"}})],1)],1)],1)],1):t._e()],1)})),1),e("v-uni-view",{staticClass:"bank"}),e("v-uni-view",{staticClass:"app-3"},[e("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onPrev.apply(void 0,arguments)}}},[t._v("上一题")]),e("v-uni-view",{}),e("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onNext.apply(void 0,arguments)}}},[t._v("下一题")])],1)],1)},a=[]},"97cf":function(t,n,e){"use strict";e.r(n);var i=e("8f85"),a=e("405f");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("40e9");var r=e("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"5f2f4c84",null,!1,i["a"],void 0);n["default"]=u.exports},fd81:function(t,n,e){var i=e("6306");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("f4aad5e6",i,!0,{sourceMap:!1,shadowMode:!1})}}]);