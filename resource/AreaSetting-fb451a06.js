import{e,as as a,d as t,i,r as n,m as c,o as l,l as o,a as s,b as d,w as r,f as v,k as u,$ as p,M as g,I as m,A as f,E as h,_ as w,H as y,g as A,q as b,z as k,x as _,p as I,B as C,S as D,F as L,n as O,cb as j,K as x,ca as N,a3 as F,a4 as S}from"./index-c2ae2a0e.js";import{d as z}from"./index-a09a23de.js";import{_ as E}from"./index-8036da2a.js";const P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};function U(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?Object(arguments[a]):{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(a){q(e,a,t[a])}))}return e}function q(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var B=function(t,i){var n=U({},t,i.attrs);return e(a,U({},n,{icon:P}),null)};B.displayName="EditOutlined",B.inheritAttrs=!1;const M=B,T=w(t({__name:"NewArea",props:{show:Boolean,id:Number,handlingInfo:{type:Object,default:()=>{}}},emits:["fresh"],setup(a,{emit:t}){const w=a,y=i(w,"show",t),A=n(),b={required:!0,message:"请输入"},k=c({loading:!1}),_=c({name:"",code:""});l((()=>{})),o(y,(e=>{e&&(A.value&&A.value.resetFields(),w.id&&(k.loading=!0,setTimeout((e=>{console.log(w.handlingInfo);for(let a in _)void 0!==w.handlingInfo[a]&&(_[a]=w.handlingInfo[a])}),200)))}));const I=()=>{A.value.validate().then((async e=>{await p.set.area[w.id?"edit":"add"]({code:e.code+"",name:e.name,id:w.id||void 0,parent_code:w.handlingInfo.parent_code?w.handlingInfo.parent_code+"":void 0,level:w.handlingInfo.level}),y.value=!1,t("fresh")})).catch((e=>{console.log(e)}))};return(t,i)=>{const n=m,c=f,l=E,o=h,p=g;return s(),d("div",null,[e(p,{visible:v(y),"onUpdate:visible":i[2]||(i[2]=e=>u(y)?y.value=e:null),width:"500px",title:a.id?"编辑地址":"添加地址","mask-closable":!1,onOk:I},{default:r((()=>[e(o,{ref_key:"formRef",ref:A,model:v(_),autocomplete:"off","label-col":{span:5},"wrapper-col":{span:18}},{default:r((()=>[e(c,{name:"name",label:"名称",rules:[b]},{default:r((()=>[e(n,{value:v(_).name,"onUpdate:value":i[0]||(i[0]=e=>v(_).name=e),placeholder:"请输入名称"},null,8,["value"])])),_:1},8,["rules"]),e(c,{name:"code",label:"地区代码",rules:[b]},{default:r((()=>[e(l,{value:v(_).code,"onUpdate:value":i[1]||(i[1]=e=>v(_).code=e),min:1,placeholder:"请输入地区代码"},null,8,["value"])])),_:1},8,["rules"])])),_:1},8,["model"])])),_:1},8,["visible","title"])])}}}),[["__scopeId","data-v-860db4ac"]]),H=e=>(F("data-v-0b33b058"),e=e(),S(),e),R={class:"regionalSetting"},$={class:"title"},K=H((()=>A("span",null,"区域设置",-1))),G={class:"active-area"},J={class:"aera"},Q={class:"fler-row"},V={class:"row-title"},W=H((()=>A("span",null,"省/自治区/直辖市",-1))),X={class:"content province"},Y=["onClick"],Z={class:"icons"},ee={class:"fler-row"},ae={class:"row-title"},te=H((()=>A("span",null,"地级市",-1))),ie={class:"content city"},ne=["onClick"],ce={class:"icons"},le={class:"fler-row"},oe={class:"row-title"},se=H((()=>A("span",null,"市辖区/县/县级市",-1))),de={class:"content district"},re=["onClick"],ve={class:"icons"},ue=w(t({__name:"AreaSetting",emits:["fresh"],setup(a,{emit:t}){const i={provinceActive:{code:51e4,name:"四川省"},cityActive:{code:510100,name:"成都市"},districtActive:{code:510104,name:"锦江区"},townActive:{code:40818,name:"中和街道"}};n();const o={1:"province",2:"city",3:"district",4:"town"},{provinceActive:u,cityActive:g,districtActive:m,townActive:f}=i,h=c({simpleRule:{required:!0,message:"必填项",trigger:"change"},provinceData:[],cityData:[],districtData:[],townData:[],provinceActive:u,cityActive:g,districtActive:m,townActive:f,showNewDialog:!1,handleListFlag:"",proviceLoading:!1,cityLoading:!1,districtLoading:!1,handlingId:0,handlingInfo:{}});c({content:""}),l((()=>{w(void 0,1),q()}));const w=(e,a)=>{let t=o[a];1===a&&(h.cityData=[],h.districtData=[],h.townData=[]),2===a&&(h.districtData=[],h.townData=[]),3===a&&(h.townData=[]),h[t+"Loading"]=!0,p.common.getAreaList({level:a,code:e}).then((e=>{h[t+"Data"]=e.data})).finally((()=>{h[t+"Loading"]=!1}))},F=(e,a)=>{let t=o[a];z.confirm({title:"提示",content:"确认删除？",okText:"确认",cancelText:"取消",async onOk(){p.set.area.delete({code:e.code+""}).then((e=>{P(t)}))},onCancel(){}})},S=e=>{h.handlingId=0,h.handlingInfo={},h.handlingInfo.parent_code=h[o[e-1]+"Active"]?h[o[e-1]+"Active"].code:void 0,h.handleListFlag=o[e],h.handlingInfo.level=e,h.showNewDialog=!0},E=(e,a)=>{h.handlingInfo={},h.handlingId=e.id;let t=o[a];h.handlingInfo.name=e.name,h.handlingInfo.parent_code=h[o[a-1]+"Active"]?h[o[a-1]+"Active"].code:void 0,h.handlingInfo.code=e.code,h.handlingInfo.level=a,h.handleListFlag=t,h.showNewDialog=!0},P=e=>{switch(e||h.handleListFlag){case"province":w(0,1);break;case"city":w(h.provinceActive.code,2);break;case"district":w(h.cityActive.code,3)}},U=(e,a)=>{let t="province";1===a&&(h.cityActive.code="",h.cityActive.name="",h.districtActive.code="",h.districtActive.name="",h.townActive.code="",h.townActive.name=""),2===a&&(t="city",h.districtActive.code="",h.districtActive.name="",h.townActive.code="",h.townActive.name=""),3===a&&(t="district",h.townActive.code="",h.townActive.name=""),4===a&&(t="town"),h[`${t}Active`]={code:e.code,level:a,name:e.name},a+1<4&&w(e.code,a+1)},q=()=>{Object.keys(i).forEach(((e,a)=>{h[e]=i[e],a+2<4&&w(i[e].code,a+2)}))};return(a,t)=>{const i=C,n=D,c=y("permission");return s(),d("div",R,[A("div",$,[K,A("div",G,[b(" 地址： "),A("b",null,k(v(h).provinceActive.name),1),A("b",null,k(v(h).cityActive.name),1),A("b",null,k(v(h).districtActive.name),1)])]),A("div",J,[A("div",Q,[A("div",V,[W,_((s(),I(i,{type:"primary",plain:"",onClick:t[0]||(t[0]=e=>S(1))},{default:r((()=>[b(" 新增 ")])),_:1})),[[c,[v(p).set.area.add]]])]),e(n,{spinning:v(h).proviceLoading},{default:r((()=>[A("div",X,[(s(!0),d(L,null,O(v(h).provinceData,((a,t)=>(s(),d("div",{key:t,class:j(["list",{activeList:a.code===v(h).provinceActive.code}]),onClick:e=>U(a,1)},[b(k(a.name)+" ",1),A("div",Z,[_(e(v(M),{onClick:x((e=>E(a,1)),["stop"])},null,8,["onClick"]),[[c,[v(p).set.area.edit]]]),_(e(v(N),{class:"danger-color",onClick:x((e=>F(a,1)),["stop"])},null,8,["onClick"]),[[c,[v(p).set.area.delete]]])])],10,Y)))),128))])])),_:1},8,["spinning"])]),A("div",ee,[A("div",ae,[te,_((s(),I(i,{type:"primary",plain:"",onClick:t[1]||(t[1]=e=>S(2))},{default:r((()=>[b(" 新增 ")])),_:1})),[[c,[v(p).set.area.add]]])]),e(n,{spinning:v(h).cityLoading},{default:r((()=>[A("div",ie,[(s(!0),d(L,null,O(v(h).cityData,((a,t)=>(s(),d("div",{key:t,class:j(["list city",{activeList:a.code===v(h).cityActive.code}]),onClick:e=>U(a,2)},[b(k(a.name)+" ",1),A("div",ce,[_(e(v(M),{onClick:x((e=>E(a,2)),["stop"])},null,8,["onClick"]),[[c,[v(p).set.area.edit]]]),_(e(v(N),{class:"danger-color",onClick:x((e=>F(a,2)),["stop"])},null,8,["onClick"]),[[c,[v(p).set.area.delete]]])])],10,ne)))),128))])])),_:1},8,["spinning"])]),A("div",le,[A("div",oe,[se,_((s(),I(i,{type:"primary",plain:"",onClick:t[2]||(t[2]=e=>S(3))},{default:r((()=>[b(" 新增 ")])),_:1})),[[c,[v(p).set.area.add]]])]),e(n,{spinning:v(h).districtLoading},{default:r((()=>[A("div",de,[(s(!0),d(L,null,O(v(h).districtData,((a,t)=>(s(),d("div",{key:t,class:j(["list",{activeList:a.code===v(h).districtActive.code}]),onClick:e=>U(a,3)},[b(k(a.name)+" ",1),A("div",ve,[_(e(v(M),{onClick:x((e=>E(a,3)),["stop"])},null,8,["onClick"]),[[c,[v(p).set.area.edit]]]),_(e(v(N),{class:"danger-color",onClick:x((e=>F(a,3)),["stop"])},null,8,["onClick"]),[[c,[v(p).set.area.delete]]])])],10,re)))),128))])])),_:1},8,["spinning"])])]),e(T,{id:v(h).handlingId,show:v(h).showNewDialog,"onUpdate:show":t[3]||(t[3]=e=>v(h).showNewDialog=e),"handling-info":v(h).handlingInfo,onFresh:P},null,8,["id","show","handling-info"])])}}}),[["__scopeId","data-v-0b33b058"]]);export{ue as default};
