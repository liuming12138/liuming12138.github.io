(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-new-huodongxq-zhengji-jieshao"],{2591:function(t,e,i){"use strict";i("7a82");var n=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("54f8"));i("c975"),i("caad6"),i("2532"),i("ac1f"),i("466d"),i("5319"),i("e25e"),i("14d9"),i("99af"),i("acd8");var a=uni.getSystemInfoSync().windowWidth,o=i("fa39"),s={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,n=e.split("://")[0],r=n.length;i=e[r];r++){if("/"==i&&"/"!=e[r-1]&&"/"!=e[r+1])break;n+=Math.random()>.5?i.toUpperCase():i}return n+=e.substr(r),this[t]=n}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}}},mounted:function(){this.document=document.getElementById("rtf"+this._uid),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var i=this;if(t){var n=document.createElement("div");e?this.rtf?this.rtf.appendChild(n):this.rtf=n:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=n),n.innerHTML=this._handleHtml(t,e);for(var s,l=this.rtf.getElementsByTagName("style"),c=0;s=l[c++];)s.innerHTML=s.innerHTML.replace(/body/g,"#rtf"+this._uid),s.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,n=0;e=t[n++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var u=this,f=this.rtf.getElementsByTagName("title");f.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:f[0].innerText}),this.imgList.length=0;for(var d,h=this.rtf.getElementsByTagName("img"),m=0,p=0;d=h[m];m++){parseInt(d.style.width||d.getAttribute("width"))>a&&(d.style.height="auto");var v=d.getAttribute("src");this.domain&&v&&("/"==v[0]?"/"==v[1]?d.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+v:d.src=this.domain+v:v.includes("://")||(d.src=this.domain+"/"+v)),d.hasAttribute("ignore")||"A"==d.parentElement.nodeName||(d.i=p++,u.imgList.push(d.src||d.getAttribute("data-src")),d.onclick=function(){var t=!0;this.ignore=function(){return t=!1},u.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:u.imgList})}),d.onerror=function(){o.errorImg&&(u.imgList[this.i]=this.src=o.errorImg),u.$emit("error",{source:"img",target:this})},u.lazyLoad&&this._observer&&d.src&&0!=d.i&&(d.setAttribute("data-src",d.src),d.removeAttribute("src"),this._observer.observe(d))}var g,b=this.rtf.getElementsByTagName("a"),y=(0,r.default)(b);try{for(y.s();!(g=y.n()).done;){var _=g.value;_.onclick=function(){var t=!0,e=this.getAttribute("href");if(u.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])u.useAnchor&&u.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(M){y.e(M)}finally{y.f()}var w=this.rtf.getElementsByTagName("video");u.videoContexts=w;for(var x,T=0;x=w[T++];)x.style.maxWidth="100%",x.onerror=function(){u.$emit("error",{source:"video",target:this})},x.onplay=function(){if(u.autopause)for(var t,e=0;t=u.videoContexts[e++];)t!=this&&t.pause()};var A,k,C=this.rtf.getElementsByTagName("audio"),I=(0,r.default)(C);try{for(I.s();!(A=I.n()).done;){var O=A.value;O.onerror=function(){u.$emit("error",{source:"audio",target:this})}}}catch(M){I.e(M)}finally{I.f()}if(this.autoscroll){var B,S=this.rtf.getElementsByTagName("table"),L=(0,r.default)(S);try{for(L.s();!(B=L.n()).done;){var E=B.value,N=document.createElement("div");N.style.overflow="scroll",E.parentNode.replaceChild(N,E),N.appendChild(E)}}catch(M){L.e(M)}finally{L.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){i.rect=i.rtf.getBoundingClientRect(),i.rect.height==k&&(i.$emit("ready",i.rect),clearInterval(i._timer)),k=i.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var i=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(" ","#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(" ",".").concat(t.id):"")).boundingClientRect();this._in?i.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():i.selectViewport().scrollOffset(),i.exec((function(i){if(!i[0])return t.fail&&t.fail("Label not found");var n=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=n:uni.pageScrollTo({scrollTop:n,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var n in o.userAgentStyles)i+="".concat(n,"{").concat(o.userAgentStyles[n],"}");for(n in this.tagStyle)i+="".concat(n,"{").concat(this.tagStyle[n],"}");i+="</style>",t=i+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*a/750+"px"}))),t}}};e.default=s},"54f8":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=(0,n.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(l)throw o}}}},i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("d9e2"),i("d401");var n=function(t){return t&&t.__esModule?t:{default:t}}(i("dde1"))},"83d5":function(t,e,i){var n=i("b81f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("7e1bff54",n,!0,{sourceMap:!1,shadowMode:!1})},"870f":function(t,e,i){"use strict";var n=i("83d5"),r=i.n(n);r.a},"894f":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[this.nodes.length?this._e():this._t("default"),e("v-uni-view",{style:this.showAm+(this.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[e("div",{attrs:{id:"rtf"+this.uid}})])],2)},r=[]},"8bbc":function(t,e,i){"use strict";i.r(e);var n=i("2591"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},9148:function(t,e,i){"use strict";i.r(e);var n=i("894f"),r=i("8bbc");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("870f");var o=i("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"816a8c9c",null,!1,n["a"],void 0);e["default"]=s.exports},a394:function(t,e,i){"use strict";i("7a82");var n=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("f07e")),a=n(i("c964")),o={data:function(){return{newsData:{}}},onLoad:function(t){this.initData(t)},methods:{initData:function(t){var e=this;return(0,a.default)((0,r.default)().mark((function i(){var n;return(0,r.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.request({url:e.interfaces.getActivitiesInfo,data:t,method:"POST"});case 2:n=i.sent,e.newsData=n.data.activitiesInfo,uni.setNavigationBarTitle({title:e.newsData.title}),console.log(e.newsData);case 6:case"end":return i.stop()}}),i)})))()}}};e.default=o},ae53:function(t,e,i){"use strict";i.r(e);var n=i("a394"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},b81f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-816a8c9c{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-816a8c9c{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},ce6b:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uParse:i("9148").default},r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"app"},[e("u-parse",{attrs:{html:this.newsData.remark}})],1)},a=[]},fa39:function(t,e){var i={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:n(" , ,\t,\r,\n,\f"),boolAttrs:n("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:n("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:n("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:n("a,colgroup,fieldset,legend,table"),selfClosingTags:n("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:n("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function n(t){for(var e=Object.create(null),i=t.split(","),n=i.length;n--;)e[i[n]]=!0;return e}t.exports=i},ffda:function(t,e,i){"use strict";i.r(e);var n=i("ce6b"),r=i("ae53");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o=i("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"3b5bdbc0",null,!1,n["a"],void 0);e["default"]=s.exports}}]);