import{e as t,Q as e,a0 as n,r as l,F as o,cD as a,cE as c,cF as r,ak as s,U as i,d as u,P as d,bE as v,ad as p,aK as y,aX as f,ah as b,aE as m,c as S,cG as x,aN as h,aB as C,bD as g}from"./index-c2ae2a0e.js";function w(t){return null!=t}const k=function(n){var l,o=n.itemPrefixCls,a=n.component,c=n.span,r=n.labelStyle,s=n.contentStyle,i=n.bordered,u=n.label,d=n.content,v=n.colon,p=a;return i?t(p,{class:[(l={},e(l,"".concat(o,"-item-label"),w(u)),e(l,"".concat(o,"-item-content"),w(d)),l)],colSpan:c},{default:function(){return[w(u)&&t("span",{style:r},[u]),w(d)&&t("span",{style:s},[d])]}}):t(p,{class:["".concat(o,"-item")],colSpan:c},{default:function(){return[t("div",{class:"".concat(o,"-item-container")},[u&&t("span",{class:["".concat(o,"-item-label"),e({},"".concat(o,"-item-no-colon"),!v)],style:r},[u]),d&&t("span",{class:"".concat(o,"-item-content"),style:s},[d])])]}})};const D=function(e){var i=function(e,n,l){var o=n.colon,i=n.prefixCls,u=n.bordered,d=l.component,v=l.type,p=l.showLabel,y=l.showContent,f=l.labelStyle,b=l.contentStyle;return e.map((function(e,n){var l,m,S=e.props||{},x=S.prefixCls,h=void 0===x?i:x,C=S.span,g=void 0===C?1:C,w=S.labelStyle,D=void 0===w?S["label-style"]:w,j=S.contentStyle,O=void 0===j?S["content-style"]:j,E=S.label,P=void 0===E?null===(l=e.children)||void 0===l||null===(m=l.label)||void 0===m?void 0:m.call(l):E,I=a(e),z=c(e),B=r(e),L=e.key;return"string"==typeof d?t(k,{key:"".concat(v,"-").concat(String(L)||n),class:z,style:B,labelStyle:s(s({},f),D),contentStyle:s(s({},b),O),span:g,colon:o,component:d,itemPrefixCls:h,bordered:u,label:p?P:null,content:y?I:null},null):[t(k,{key:"label-".concat(String(L)||n),class:z,style:s(s(s({},f),B),D),span:1,colon:o,component:d[0],itemPrefixCls:h,bordered:u,label:P},null),t(k,{key:"content-".concat(String(L)||n),class:z,style:s(s(s({},b),B),O),span:2*g-1,component:d[1],itemPrefixCls:h,bordered:u,content:I},null)]}))},u=e.prefixCls,d=e.vertical,v=e.row,p=e.index,y=e.bordered,f=n(P,{labelStyle:l({}),contentStyle:l({})}),b=f.labelStyle,m=f.contentStyle;return d?t(o,null,[t("tr",{key:"label-".concat(p),class:"".concat(u,"-row")},[i(v,e,{component:"th",type:"label",showLabel:!0,labelStyle:b.value,contentStyle:m.value})]),t("tr",{key:"content-".concat(p),class:"".concat(u,"-row")},[i(v,e,{component:"td",type:"content",showContent:!0,labelStyle:b.value,contentStyle:m.value})])]):t("tr",{key:p,class:"".concat(u,"-row")},[i(v,e,{component:y?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:b.value,contentStyle:m.value})])};i.any;var j=u({compatConfig:{MODE:3},name:"ADescriptionsItem",props:{prefixCls:String,label:i.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}},slots:["label"],setup:function(t,e){var n=e.slots;return function(){var t;return null===(t=n.default)||void 0===t?void 0:t.call(n)}}}),O={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function E(t,e,n){var l=t;return(void 0===e||e>n)&&(l=C(t,{span:n}),g(void 0===e,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),l}var P=Symbol("descriptionsContext"),I=u({compatConfig:{MODE:3},name:"ADescriptions",props:{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:i.any,extra:i.any,column:{type:[Number,Object],default:function(){return O}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}},slots:["title","extra"],Item:j,setup:function(n,o){var a,c=o.slots,r=d("descriptions",n),s=r.prefixCls,i=r.direction,u=l({});v((function(){a=p.subscribe((function(t){"object"===y(n.column)&&(u.value=t)}))})),f((function(){p.unsubscribe(a)})),b(P,{labelStyle:m(n,"labelStyle"),contentStyle:m(n,"contentStyle")});var C=S((function(){return function(t,e){if("number"==typeof t)return t;if("object"===y(t))for(var n=0;n<x.length;n++){var l=x[n];if(e[l]&&void 0!==t[l])return t[l]||O[l]}return 3}(n.column,u.value)}));return function(){var l,o,a,r,u=n.size,d=n.bordered,v=void 0!==d&&d,p=n.layout,y=void 0===p?"horizontal":p,f=n.colon,b=void 0===f||f,m=n.title,S=void 0===m?null===(l=c.title)||void 0===l?void 0:l.call(c):m,x=n.extra,g=void 0===x?null===(o=c.extra)||void 0===o?void 0:o.call(c):x,w=function(t,e){var n=h(t),l=[],o=[],a=e;return n.forEach((function(t,c){var r,s=null===(r=t.props)||void 0===r?void 0:r.span,i=s||1;if(c===n.length-1)return o.push(E(t,s,a)),void l.push(o);i<a?(a-=i,o.push(t)):(o.push(E(t,i,a)),l.push(o),a=e,o=[])})),l}(null===(a=c.default)||void 0===a?void 0:a.call(c),C.value);return t("div",{class:[s.value,(r={},e(r,"".concat(s.value,"-").concat(u),"default"!==u),e(r,"".concat(s.value,"-bordered"),!!v),e(r,"".concat(s.value,"-rtl"),"rtl"===i.value),r)]},[(S||g)&&t("div",{class:"".concat(s.value,"-header")},[S&&t("div",{class:"".concat(s.value,"-title")},[S]),g&&t("div",{class:"".concat(s.value,"-extra")},[g])]),t("div",{class:"".concat(s.value,"-view")},[t("table",null,[t("tbody",null,[w.map((function(e,n){return t(D,{key:n,index:n,colon:b,prefixCls:s.value,vertical:"vertical"===y,bordered:v,row:e},null)}))])])])])}}});I.install=function(t){return t.component(I.name,I),t.component(I.Item.name,I.Item),t};const z=I;export{j as D,z as _};