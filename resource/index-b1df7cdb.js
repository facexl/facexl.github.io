import{bC as t,U as e,aS as r,d as n,c as o,ak as a,e as s,F as c,al as i,cx as l,r as u,aj as p,bk as f,cy as v,aG as d,Q as g,P as k,cz as h,ca as C,cA as y,cB as b,aJ as m}from"./index-c2ae2a0e.js";var x=t("normal","exception","active","success"),S=t("line","circle","dashboard"),D=t("default","small"),O=function(){return{prefixCls:String,type:e.oneOf(S),percent:Number,format:{type:Function},status:e.oneOf(x),showInfo:{type:Boolean,default:void 0},strokeWidth:Number,strokeLinecap:String,strokeColor:{type:[String,Object],default:void 0},trailColor:String,width:Number,success:{type:Object,default:function(){return{}}},gapDegree:Number,gapPosition:String,size:e.oneOf(D),steps:Number,successPercent:Number,title:String}};function P(t){return!t||t<0?0:t>100?100:t}function j(t){var e=t.success,n=t.successPercent;return e&&"progress"in e&&(r(!1,"Progress","`success.progress` is deprecated. Please use `success.percent` instead."),n=e.progress),e&&"percent"in e&&(n=e.percent),n}var w=["from","to","direction"],W=function(t,e){var r,n,o=t.from,a=void 0===o?l.blue:o,s=t.to,c=void 0===s?l.blue:s,u=t.direction,p=void 0===u?"rtl"===e?"to left":"to right":u,f=i(t,w);if(0!==Object.keys(f).length){var v=(r=f,n=[],Object.keys(r).forEach((function(t){var e=parseFloat(t.replace(/%/g,""));isNaN(e)||n.push({key:e,value:r[t]})})),(n=n.sort((function(t,e){return t.key-e.key}))).map((function(t){var e=t.key,r=t.value;return"".concat(r," ").concat(e,"%")})).join(", "));return{backgroundImage:"linear-gradient(".concat(p,", ").concat(v,")")}}return{backgroundImage:"linear-gradient(".concat(p,", ").concat(a,", ").concat(c,")")}};const N=n({compatConfig:{MODE:3},name:"Line",props:a(a({},O()),{},{prefixCls:String,direction:{type:String}}),setup:function(t,e){var r=e.slots,n=o((function(){var e=t.strokeColor,r=t.direction;return e&&"string"!=typeof e?W(e,r):{background:e}})),i=o((function(){return t.trailColor?{backgroundColor:t.trailColor}:void 0})),l=o((function(){var e=t.percent,r=t.strokeWidth,o=t.strokeLinecap,s=t.size;return a({width:"".concat(P(e),"%"),height:"".concat(r||("small"===s?6:8),"px"),borderRadius:"square"===o?0:""},n.value)})),u=o((function(){return j(t)})),p=o((function(){var e=t.strokeWidth,r=t.size,n=t.strokeLinecap,o=t.success;return{width:"".concat(P(u.value),"%"),height:"".concat(e||("small"===r?6:8),"px"),borderRadius:"square"===n?0:"",backgroundColor:null==o?void 0:o.strokeColor}}));return function(){var e;return s(c,null,[s("div",{class:"".concat(t.prefixCls,"-outer")},[s("div",{class:"".concat(t.prefixCls,"-inner"),style:i.value},[s("div",{class:"".concat(t.prefixCls,"-bg"),style:l.value},null),void 0!==u.value?s("div",{class:"".concat(t.prefixCls,"-success-bg"),style:p.value},null):null])]),null===(e=r.default)||void 0===e?void 0:e.call(r)])}}});var L=["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","strokeColor"],z=0;function I(t){return+t.replace("%","")}function M(t){return Array.isArray(t)?t:[t]}function A(t,e,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=50-n/2,s=0,c=-a,i=0,l=-2*a;switch(arguments.length>5?arguments[5]:void 0){case"left":s=-a,c=0,i=2*a,l=0;break;case"right":s=a,c=0,i=-2*a,l=0;break;case"bottom":c=a,l=2*a}var u="M 50,50 m ".concat(s,",").concat(c,"\n   a ").concat(a,",").concat(a," 0 1 1 ").concat(i,",").concat(-l,"\n   a ").concat(a,",").concat(a," 0 1 1 ").concat(-i,",").concat(l),p=2*Math.PI*a;return{pathString:u,pathStyle:{stroke:r,strokeDasharray:"".concat(e/100*(p-o),"px ").concat(p,"px"),strokeDashoffset:"-".concat(o/2+t/100*(p-o),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"}}}const E=n({compatConfig:{MODE:3},name:"VCCircle",props:f({gapDegree:Number,gapPosition:{type:String},percent:{type:[Array,Number]},prefixCls:String,strokeColor:{type:[Object,String,Array]},strokeLinecap:{type:String},strokeWidth:Number,trailColor:String,trailWidth:Number,transition:String},{percent:0,prefixCls:"vc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1}),setup:function(t){var e=u(z+=1),r=o((function(){return M(t.percent)})),n=o((function(){return M(t.strokeColor)})),c=v(),l=d(c,2),f=l[0];!function(t){var e=u(null);p((function(){var r=Date.now(),n=!1;t.value.forEach((function(t){var o=(null==t?void 0:t.$el)||t;if(o){n=!0;var a=o.style;a.transitionDuration=".3s, .3s, .3s, .06s",e.value&&r-e.value<100&&(a.transitionDuration="0s, 0s")}})),n&&(e.value=Date.now())}))}(l[1]);var g=function(){var o=t.prefixCls,c=t.strokeWidth,i=t.strokeLinecap,l=t.gapDegree,u=t.gapPosition,p=0;return r.value.map((function(t,r){var v=n.value[r]||n.value[n.value.length-1],d="[object Object]"===Object.prototype.toString.call(v)?"url(#".concat(o,"-gradient-").concat(e.value,")"):"",g=A(p,t,v,c,l,u),k=g.pathString,h=g.pathStyle;p+=t;var C={key:r,d:k,stroke:d,"stroke-linecap":i,"stroke-width":c,opacity:0===t?0:1,"fill-opacity":"0",class:"".concat(o,"-circle-path"),style:h};return s("path",a({ref:f(r)},C),null)}))};return function(){var r=t.prefixCls,o=t.strokeWidth,c=t.trailWidth,l=t.gapDegree,u=t.gapPosition,p=t.trailColor,f=t.strokeLinecap;t.strokeColor;var v=i(t,L),d=A(0,100,p,o,l,u),k=d.pathString,h=d.pathStyle;delete v.percent;var C=n.value.find((function(t){return"[object Object]"===Object.prototype.toString.call(t)})),y={d:k,stroke:p,"stroke-linecap":f,"stroke-width":c||o,"fill-opacity":"0",class:"".concat(r,"-circle-trail"),style:h};return s("svg",a({class:"".concat(r,"-circle"),viewBox:"0 0 100 100"},v),[C&&s("defs",null,[s("linearGradient",{id:"".concat(r,"-gradient-").concat(e.value),x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[Object.keys(C).sort((function(t,e){return I(t)-I(e)})).map((function(t,e){return s("stop",{key:e,offset:t,"stop-color":C[t]},null)}))])]),s("path",y,null),g().reverse()])}}});const B=n({compatConfig:{MODE:3},name:"Circle",inheritAttrs:!1,props:O(),setup:function(t,e){var r=e.slots,n=o((function(){return t.gapDegree||0===t.gapDegree?t.gapDegree:"dashboard"===t.type?75:void 0})),a=o((function(){var e=t.width||120;return{width:"number"==typeof e?"".concat(e,"px"):e,height:"number"==typeof e?"".concat(e,"px"):e,fontSize:"".concat(.15*e+6,"px")}})),c=o((function(){return t.strokeWidth||6})),i=o((function(){return t.gapPosition||"dashboard"===t.type&&"bottom"||"top"})),u=o((function(){return function(t){var e=t.percent,r=P(j({success:t.success,successPercent:t.successPercent}));return[r,P(P(e)-r)]}(t)})),p=o((function(){return"[object Object]"===Object.prototype.toString.call(t.strokeColor)})),f=o((function(){return function(t){var e=t.success,r=void 0===e?{}:e,n=t.strokeColor;return[r.strokeColor||l.green,n||null]}({success:t.success,strokeColor:t.strokeColor})})),v=o((function(){var e;return g(e={},"".concat(t.prefixCls,"-inner"),!0),g(e,"".concat(t.prefixCls,"-circle-gradient"),p.value),e}));return function(){var e;return s("div",{class:v.value,style:a.value},[s(E,{percent:u.value,strokeWidth:c.value,trailWidth:c.value,strokeColor:f.value,strokeLinecap:t.strokeLinecap,trailColor:t.trailColor,prefixCls:t.prefixCls,gapDegree:n.value,gapPosition:i.value},null),null===(e=r.default)||void 0===e?void 0:e.call(r)])}}});const F=n({compatConfig:{MODE:3},name:"Steps",props:a(a({},O()),{},{steps:Number,size:{type:String},strokeColor:String,trailColor:String}),setup:function(t,e){var r=e.slots,n=o((function(){return Math.round(t.steps*((t.percent||0)/100))})),a=o((function(){return"small"===t.size?2:14})),c=o((function(){for(var e=t.steps,r=t.strokeWidth,o=void 0===r?8:r,c=t.strokeColor,i=t.trailColor,l=t.prefixCls,u=[],p=0;p<e;p+=1){var f,v=(g(f={},"".concat(l,"-steps-item"),!0),g(f,"".concat(l,"-steps-item-active"),p<=n.value-1),f);u.push(s("div",{key:p,class:v,style:{backgroundColor:p<=n.value-1?c:i,width:"".concat(a.value,"px"),height:"".concat(o,"px")}},null))}return u}));return function(){var e;return s("div",{class:"".concat(t.prefixCls,"-steps-outer")},[c.value,null===(e=r.default)||void 0===e?void 0:e.call(r)])}}}),q=m(n({compatConfig:{MODE:3},name:"AProgress",props:f(O(),{type:"line",percent:0,showInfo:!0,trailColor:null,size:"default",strokeLinecap:"round"}),slots:["format"],setup:function(t,e){var n=e.slots,c=k("progress",t),i=c.prefixCls,l=c.direction;r(null==t.successPercent,"Progress","`successPercent` is deprecated. Please use `success.percent` instead.");var u=o((function(){var e,r=t.type,n=t.showInfo,o=t.size,a=i.value;return g(e={},a,!0),g(e,"".concat(a,"-").concat("dashboard"===r?"circle":r),!0),g(e,"".concat(a,"-show-info"),n),g(e,"".concat(a,"-").concat(o),o),g(e,"".concat(a,"-rtl"),"rtl"===l.value),e})),p=o((function(){var e=t.percent,r=void 0===e?0:e,n=j(t);return parseInt(void 0!==n?n.toString():r.toString(),10)})),f=o((function(){var e=t.status;return x.indexOf(e)<0&&p.value>=100?"success":e||"normal"}));return function(){var e,r=t.type,o=t.steps,c=t.strokeColor,l=t.title,p=function(){var e,r=t.showInfo,o=t.format,a=t.type,c=t.percent,l=t.title,u=j(t);if(!r)return null;var p=o||(null==n?void 0:n.format)||function(t){return"".concat(t,"%")},v="line"===a;return o||null!=n&&n.format||"exception"!==f.value&&"success"!==f.value?e=p(P(c),P(u)):"exception"===f.value?e=s(v?h:C,null,null):"success"===f.value&&(e=s(v?y:b,null,null)),s("span",{class:"".concat(i.value,"-text"),title:void 0===l&&"string"==typeof e?e:void 0},[e])}();"line"===r?e=o?s(F,a(a({},t),{},{strokeColor:"string"==typeof c?c:void 0,prefixCls:i.value,steps:o}),{default:function(){return[p]}}):s(N,a(a({},t),{},{prefixCls:i.value}),{default:function(){return[p]}}):"circle"!==r&&"dashboard"!==r||(e=s(B,a(a({},t),{},{prefixCls:i.value}),{default:function(){return[p]}}));var v=a(a({},u.value),{},g({},"".concat(i.value,"-status-").concat(f.value),!0));return s("div",{class:v,title:l},[e])}}}));export{q as P};
