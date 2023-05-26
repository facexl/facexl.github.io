import{d as e,a0 as a,r as l,i as t,m as n,l as d,c as u,a as o,b as r,e as i,w as s,f as p,k as _,Z as v,$ as c,M as m,F as y,n as f,p as b,q as k,z as h,s as g,g as w,a6 as U,I as q,A as j,a7 as A,V as Y,W as x,B as D,Y as B,X as H,C,D as M,E as T,S as I,o as S,G as O}from"./index-c2ae2a0e.js";import{u as F,_ as R}from"./useTableColumns-dd067b4d.js";import{R as L,_ as z}from"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as N}from"./index-ef11d20c.js";import{_ as E}from"./index-00d344de.js";import{u as G,a as $}from"./useSearchItems-c7d75cf3.js";import{u as K}from"./usePagination-c05046ed.js";import{_ as P}from"./index-8036da2a.js";import{_ as V}from"./Upload-053b6740.js";import{d as W}from"./dtool-b3945d0c.js";import{u as X,a as Z}from"./useRequest-34a5e624.js";import{_ as J}from"./tool-d986b095.js";import{d as Q}from"./index-a09a23de.js";import"./FolderOpenOutlined-fa174baf.js";import"./RadioButton-bc4165ed.js";import"./index-b1df7cdb.js";import"./DeleteOutlined-1e1ff134.js";const ee=w("p",null,"建议尺寸100x100",-1),ae=w("p",{class:"title"}," 任务规则 ",-1),le={key:0},te=w("span",null,"单",-1),ne=w("span",null,"张",-1),de=w("span",null,"累计奖励",-1),ue=w("span",null,"元",-1),oe=w("span",null,"元",-1),re=w("span",null,"每",-1),ie=w("span",null,"天重置",-1),se=w("span",null,"每",-1),pe=w("span",null,"个月重置",-1),_e=w("span",null,"任务重置第",-1),ve=w("span",null,"天",-1),ce={key:1},me=w("span",null,"单",-1),ye=w("span",null,"%",-1),fe=w("span",null,"累计奖励",-1),be=w("span",null,"元",-1),ke=w("span",null,"按单奖励，每单",-1),he=w("span",null,"元",-1),ge=w("span",null,"每",-1),we=w("span",null,"个月重置",-1),Ue=w("span",null,"任务重置第",-1),qe=w("span",null,"天",-1),je={key:2},Ae=w("span",null,"分享商品ID",-1),Ye=w("span",null,"分享活动页ID",-1),xe=w("span",null,"单",-1),De=w("span",null,"累计奖励",-1),Be=w("span",null,"元",-1),He=w("span",null,"按单奖励，每单",-1),Ce=w("span",null,"元",-1),Me=w("span",null,"天内",-1),Te=e({__name:"TaskAdd",props:{show:Boolean,id:String,type_map:Array},emits:["fresh"],setup(e,{emit:S}){const O=e,F=X({not_type:4}),R=a("enums"),N=Z(),E=(e,a)=>(a.label+a.value).includes(e),G=l(),$=t(O,"show",S,!0),K=n({loading:!1,confirmLoading:!1}),Q=n({title:"",thumb:"",desc:"",type:1,invitation_type:"",invitation_count:"",finish_type:1,json:[{coupon_id:void 0,coupon_count:""}],reward_type:1,reward_value:"",rate_type:1,rate_value:"",order_count:"",receive_at:"",clear_at:"",take_type:[],start_at:"",end_at:"",enabled:1,sort:"","start_at-end_at":[],goods_ids:[],link_type:1,link_value:""});d($,(async e=>{if(e&&(G.value&&G.value.resetFields(),O.id)){K.loading=!0;const e=await c.user.task.detail({id:O.id});K.loading=!1,W(e.data).combinDayjs(["start_at","end_at"]).split(["take_type","goods_ids"]).stringArrToNumber(["take_type","goods_ids"]).toNumber(["invitation_type"]).insertForm(Q),4===Q.type&&(Q.receive_at=U(Q.receive_at),Q.clear_at=U(Q.clear_at))}}),{immediate:!0});const Te=u((()=>!(!O.id||4==+Q.type))),Ie=e=>{2!=+e&&3!=+e||(Q.rate_type=2),2!=+e&&3!=+e&&4!=+e||(Q.finish_type=1),Q.clear_at="",Q.receive_at=""},Se=()=>{G.value.validate().then((async e=>{const a=W(Q).join(["take_type","goods_ids"]).splitDayjs(["start_at","end_at"],"YYYY-MM-DD HH:mm:ss").toNumber(["sort"]).custom((e=>{if(2==+e.finish_type){if(e.reward_value=void 0,0===e.json.length)throw v.error("请添加优惠券"),"";const a={};for(let l=0;l<e.json.length;l++){const t=e.json[l].coupon_id;if(!t||!e.json[l].coupon_count)throw v.error("请把优惠券填写完整"),"";if(a[t])throw v.error("请不要选择相同优惠券"),"";a[t]=!0}}else e.json=void 0;if(e.receive_at&&e.receive_at.format&&(e.receive_at=e.receive_at.format("YYYY-MM-DD HH:mm:ss")),e.clear_at&&e.clear_at.format&&(e.clear_at=e.clear_at.format("YYYY-MM-DD HH:mm:ss")),4===e.type&&1==+e.link_type&&!e.goods_ids.includes(String(e.link_value)))throw v.error("分享商品必须属于销售商品"),""})).del(["start_at-end_at"]).end();try{K.confirmLoading=!0,O.id?await c.user.task.edit({...a,id:O.id}):await c.user.task.add({...a}),K.confirmLoading=!1,$.value=!1,S("fresh")}catch(l){console.log(l),K.confirmLoading=!1}}))};return(a,l)=>{const t=q,n=j,d=V,u=A,v=Y,c=x,U=L,S=z,O=P,W=D,X=B,Z=J,Oe=H,Fe=C,Re=M,Le=T,ze=I,Ne=m;return o(),r("div",null,[i(Ne,{visible:p($),"onUpdate:visible":l[38]||(l[38]=e=>_($)?$.value=e:null),width:"850px",title:e.id?"编辑任务":"添加任务","confirm-loading":p(K).confirmLoading,onOk:Se},{default:s((()=>[i(ze,{spinning:p(K).loading,"onUpdate:spinning":l[37]||(l[37]=e=>p(K).loading=e)},{default:s((()=>[i(Le,{ref_key:"formRef",ref:G,model:p(Q),"label-col":{span:6},"wrapper-col":{span:18}},{default:s((()=>[i(Re,null,{default:s((()=>[i(Fe,{span:18},{default:s((()=>[i(n,{name:"title",label:"任务名称",required:""},{default:s((()=>[i(t,{value:p(Q).title,"onUpdate:value":l[0]||(l[0]=e=>p(Q).title=e),maxlength:10,"show-count":""},null,8,["value"])])),_:1}),i(n,{name:"thumb",label:"任务图片",required:""},{default:s((()=>[i(d,{filelist:p(Q).thumb,"onUpdate:filelist":l[1]||(l[1]=e=>p(Q).thumb=e)},null,8,["filelist"]),ee])),_:1}),i(n,{name:"desc",label:"任务描述",required:""},{default:s((()=>[i(u,{value:p(Q).desc,"onUpdate:value":l[2]||(l[2]=e=>p(Q).desc=e),placeholder:"请输入",maxlength:40,"show-count":""},null,8,["value"])])),_:1}),ae,i(n,{name:"type",label:"任务类型",required:""},{default:s((()=>[i(c,{value:p(Q).type,"onUpdate:value":l[3]||(l[3]=e=>p(Q).type=e),placeholder:"请选择","show-search":"",disabled:!!e.id,onChange:Ie},{default:s((()=>[(o(!0),r(y,null,f(e.type_map,(e=>(o(),b(v,{key:e.value,value:e.value},{default:s((()=>[k(h(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value","disabled"])])),_:1}),1==+p(Q).type||5==+p(Q).type?(o(),r("div",le,[1==+p(Q).type?(o(),b(n,{key:0,name:"invitation_type",label:"邀请对象",required:""},{default:s((()=>[i(S,{value:p(Q).invitation_type,"onUpdate:value":l[4]||(l[4]=e=>p(Q).invitation_type=e)},{default:s((()=>[(o(!0),r(y,null,f(p(R).member_type,(e=>(o(),b(U,{key:e.value,value:e.value},{default:s((()=>[k(h(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])),_:1})):g("",!0),1==+p(Q).type?(o(),b(n,{key:1,label:"邀请人数",name:"invitation_count",required:""},{default:s((()=>[i(O,{value:p(Q).invitation_count,"onUpdate:value":l[5]||(l[5]=e=>p(Q).invitation_count=e),min:0,precision:0},null,8,["value"])])),_:1})):g("",!0),5==+p(Q).type?(o(),b(n,{key:2,label:"下单笔数",name:"order_count",required:""},{default:s((()=>[i(O,{value:p(Q).order_count,"onUpdate:value":l[6]||(l[6]=e=>p(Q).order_count=e),min:0,precision:0},{addonAfter:s((()=>[te])),_:1},8,["value"])])),_:1})):g("",!0),i(n,{name:"finish_type",label:"完成奖励",required:""},{default:s((()=>[i(S,{value:p(Q).finish_type,"onUpdate:value":l[7]||(l[7]=e=>p(Q).finish_type=e)},{default:s((()=>[(o(),r(y,null,f([{label:"优惠券",value:2},{label:"现金",value:1}],(e=>i(U,{key:e.value,value:e.value},{default:s((()=>[k(h(e.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["value"])])),_:1}),2==+p(Q).finish_type?(o(),b(n,{key:3,label:" ",colon:!1},{default:s((()=>[(o(!0),r(y,null,f(p(Q).json,((e,a)=>(o(),r("div",{key:a,class:"flex mb8px"},[i(c,{value:e.coupon_id,"onUpdate:value":a=>e.coupon_id=a,placeholder:"请选择优惠券",style:{width:"200px"},"filter-option":E,"show-search":""},{default:s((()=>[(o(!0),r(y,null,f(p(N),(e=>(o(),b(v,{key:e.id,value:e.id,label:e.name},{default:s((()=>[k(h(e.name)+"--id:"+h(e.id),1)])),_:2},1032,["value","label"])))),128))])),_:2},1032,["value","onUpdate:value"]),i(O,{value:e.coupon_count,"onUpdate:value":a=>e.coupon_count=a,placeholder:"优惠券张数",min:1,precision:0},{addonAfter:s((()=>[ne])),_:2},1032,["value","onUpdate:value"]),i(W,{type:"danger",class:"ml8px",onClick:e=>p(Q).json.splice(a,1)},{default:s((()=>[k(" 删除 ")])),_:2},1032,["onClick"])])))),128)),i(W,{onClick:l[8]||(l[8]=e=>p(Q).json.push({coupon_id:void 0,coupon_count:""}))},{default:s((()=>[k(" 添加 ")])),_:1})])),_:1})):g("",!0),1==+p(Q).finish_type?(o(),b(n,{key:4,name:"reward_type",label:"现金奖励方式",required:""},{default:s((()=>[i(S,{value:p(Q).reward_type,"onUpdate:value":l[9]||(l[9]=e=>p(Q).reward_type=e)},{default:s((()=>[(o(!0),r(y,null,f([{label:"累计奖励",value:1},{label:`按${1==+p(Q).type?"人":"单"}奖励`,value:2}],(e=>(o(),b(U,{key:e.value,value:e.value},{default:s((()=>[k(h(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])),_:1})):g("",!0),1==+p(Q).finish_type?(o(),b(n,{key:5,label:" ",colon:!1,name:"reward_value",required:""},{default:s((()=>[1==+p(Q).reward_type?(o(),b(O,{key:0,value:p(Q).reward_value,"onUpdate:value":l[10]||(l[10]=e=>p(Q).reward_value=e),min:0,precision:2},{addonBefore:s((()=>[de])),addonAfter:s((()=>[ue])),_:1},8,["value"])):g("",!0),2==+p(Q).reward_type?(o(),b(O,{key:1,value:p(Q).reward_value,"onUpdate:value":l[11]||(l[11]=e=>p(Q).reward_value=e),min:0,precision:2},{addonBefore:s((()=>[w("span",null,"按"+h(1==+p(Q).type?"人":"单")+"奖励，每"+h(1==+p(Q).type?"人":"单"),1)])),addonAfter:s((()=>[oe])),_:1},8,["value"])):g("",!0)])),_:1})):g("",!0),i(n,{name:"rate_type",label:"任务重置频率",required:""},{default:s((()=>[i(S,{value:p(Q).rate_type,"onUpdate:value":l[12]||(l[12]=e=>p(Q).rate_type=e),disabled:p(Te)},{default:s((()=>[(o(),r(y,null,f([{label:"日",value:1},{label:"月",value:2}],(e=>i(U,{key:e.value,value:e.value},{default:s((()=>[k(h(e.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["value","disabled"])])),_:1}),i(n,{label:" ",colon:!1,name:"rate_value",required:""},{default:s((()=>[1==+p(Q).rate_type?(o(),b(O,{key:0,value:p(Q).rate_value,"onUpdate:value":l[13]||(l[13]=e=>p(Q).rate_value=e),min:0,precision:0,disabled:p(Te)},{addonBefore:s((()=>[re])),addonAfter:s((()=>[ie])),_:1},8,["value","disabled"])):g("",!0),2==+p(Q).rate_type?(o(),b(O,{key:1,value:p(Q).rate_value,"onUpdate:value":l[14]||(l[14]=e=>p(Q).rate_value=e),min:0,precision:0,disabled:p(Te)},{addonBefore:s((()=>[se])),addonAfter:s((()=>[pe])),_:1},8,["value","disabled"])):g("",!0)])),_:1}),5==+p(Q).type?(o(),b(n,{key:6,label:"任务清算时间",name:"clear_at",required:""},{default:s((()=>[i(O,{value:p(Q).clear_at,"onUpdate:value":l[15]||(l[15]=e=>p(Q).clear_at=e),min:0,precision:0,disabled:p(Te)},{addonBefore:s((()=>[_e])),addonAfter:s((()=>[ve])),_:1},8,["value","disabled"])])),_:1})):g("",!0)])):g("",!0),2==+p(Q).type||3==+p(Q).type?(o(),r("div",ce,[2==+p(Q).type?(o(),b(n,{key:0,label:"达标订单量",name:"order_count",required:""},{default:s((()=>[i(O,{value:p(Q).order_count,"onUpdate:value":l[16]||(l[16]=e=>p(Q).order_count=e),min:0,precision:0},{addonAfter:s((()=>[me])),_:1},8,["value"])])),_:1})):g("",!0),3==+p(Q).type?(o(),b(n,{key:1,label:"增长订单量",name:"order_count",required:""},{default:s((()=>[i(O,{value:p(Q).order_count,"onUpdate:value":l[17]||(l[17]=e=>p(Q).order_count=e),min:0,precision:2},{addonAfter:s((()=>[ye])),_:1},8,["value"])])),_:1})):g("",!0),i(n,{name:"reward_type",label:"完成奖励",required:""},{default:s((()=>[i(S,{value:p(Q).reward_type,"onUpdate:value":l[18]||(l[18]=e=>p(Q).reward_type=e)},{default:s((()=>[(o(),r(y,null,f([{label:"累计奖励",value:1},{label:"按单奖励",value:2}],(e=>i(U,{key:e.value,value:e.value},{default:s((()=>[k(h(e.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["value"])])),_:1}),i(n,{label:" ",colon:!1,name:"reward_value",required:""},{default:s((()=>[1==+p(Q).reward_type?(o(),b(O,{key:0,value:p(Q).reward_value,"onUpdate:value":l[19]||(l[19]=e=>p(Q).reward_value=e),min:0,precision:2},{addonBefore:s((()=>[fe])),addonAfter:s((()=>[be])),_:1},8,["value"])):g("",!0),2==+p(Q).reward_type?(o(),b(O,{key:1,value:p(Q).reward_value,"onUpdate:value":l[20]||(l[20]=e=>p(Q).reward_value=e),min:0,precision:2},{addonBefore:s((()=>[ke])),addonAfter:s((()=>[he])),_:1},8,["value"])):g("",!0)])),_:1}),i(n,{name:"rate_value",label:"任务重置频率",required:""},{default:s((()=>[2==+p(Q).rate_type?(o(),b(O,{key:0,value:p(Q).rate_value,"onUpdate:value":l[21]||(l[21]=e=>p(Q).rate_value=e),min:0,precision:0,disabled:!!e.id},{addonBefore:s((()=>[ge])),addonAfter:s((()=>[we])),_:1},8,["value","disabled"])):g("",!0)])),_:1}),i(n,{label:"任务清算时间",name:"clear_at",required:""},{default:s((()=>[i(O,{value:p(Q).clear_at,"onUpdate:value":l[22]||(l[22]=e=>p(Q).clear_at=e),min:0,precision:0,disabled:p(Te)},{addonBefore:s((()=>[Ue])),addonAfter:s((()=>[qe])),_:1},8,["value","disabled"])])),_:1})])):g("",!0),4==+p(Q).type?(o(),r("div",je,[i(n,{label:"销售商品",name:"goods_ids",required:""},{default:s((()=>[i(c,{value:p(Q).goods_ids,"onUpdate:value":l[23]||(l[23]=e=>p(Q).goods_ids=e),placeholder:"请选择",mode:"multiple","show-search":"","filter-option":E},{default:s((()=>[(o(!0),r(y,null,f(p(F),(e=>(o(),b(v,{key:e.id,value:e.id,label:e.title},{default:s((()=>[k(h(e.id)+"-"+h(e.title),1)])),_:2},1032,["value","label"])))),128))])),_:1},8,["value"])])),_:1}),i(n,{name:"link_type",label:"分享链接",required:""},{default:s((()=>[i(S,{value:p(Q).link_type,"onUpdate:value":l[24]||(l[24]=e=>p(Q).link_type=e)},{default:s((()=>[(o(),r(y,null,f([{label:"商品",value:1},{label:"活动页",value:2}],(e=>i(U,{key:e.value,value:e.value},{default:s((()=>[k(h(e.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["value"])])),_:1}),i(n,{label:" ",colon:!1,name:"link_value",required:""},{default:s((()=>[1==+p(Q).link_type?(o(),b(O,{key:0,value:p(Q).link_value,"onUpdate:value":l[25]||(l[25]=e=>p(Q).link_value=e),min:0,precision:0},{addonBefore:s((()=>[Ae])),_:1},8,["value"])):g("",!0),2==+p(Q).link_type?(o(),b(O,{key:1,value:p(Q).link_value,"onUpdate:value":l[26]||(l[26]=e=>p(Q).link_value=e),min:0,precision:0},{addonBefore:s((()=>[Ye])),_:1},8,["value"])):g("",!0)])),_:1}),i(n,{label:"团队订单量",name:"order_count",required:""},{default:s((()=>[i(O,{value:p(Q).order_count,"onUpdate:value":l[27]||(l[27]=e=>p(Q).order_count=e),min:0,precision:0},{addonAfter:s((()=>[xe])),_:1},8,["value"])])),_:1}),i(n,{name:"reward_type",label:"完成奖励",required:""},{default:s((()=>[i(S,{value:p(Q).reward_type,"onUpdate:value":l[28]||(l[28]=e=>p(Q).reward_type=e)},{default:s((()=>[(o(),r(y,null,f([{label:"累计奖励",value:1},{label:"按单奖励",value:2}],(e=>i(U,{key:e.value,value:e.value},{default:s((()=>[k(h(e.label),1)])),_:2},1032,["value"]))),64))])),_:1},8,["value"])])),_:1}),i(n,{label:" ",colon:!1,name:"reward_value",required:""},{default:s((()=>[1==+p(Q).reward_type?(o(),b(O,{key:0,value:p(Q).reward_value,"onUpdate:value":l[29]||(l[29]=e=>p(Q).reward_value=e),min:0,precision:2},{addonBefore:s((()=>[De])),addonAfter:s((()=>[Be])),_:1},8,["value"])):g("",!0),2==+p(Q).reward_type?(o(),b(O,{key:1,value:p(Q).reward_value,"onUpdate:value":l[30]||(l[30]=e=>p(Q).reward_value=e),min:0,precision:2},{addonBefore:s((()=>[He])),addonAfter:s((()=>[Ce])),_:1},8,["value"])):g("",!0)])),_:1}),i(n,{label:"任务清算时间",name:"clear_at",required:""},{default:s((()=>[i(X,{value:p(Q).clear_at,"onUpdate:value":l[31]||(l[31]=e=>p(Q).clear_at=e),disabled:p(Te),"show-time":{format:"HH:mm:ss"},format:"YYYY-MM-DD HH:mm:ss",placeholder:"选择时间"},null,8,["value","disabled"])])),_:1})])):g("",!0),4!=+p(Q).type?(o(),b(n,{key:3,label:"奖励领取时间",name:"receive_at",required:""},{default:s((()=>[i(O,{value:p(Q).receive_at,"onUpdate:value":l[32]||(l[32]=e=>p(Q).receive_at=e),min:0,precision:0,disabled:p(Te)},{addonBefore:s((()=>[w("span",null,"任务"+h(1==+p(Q).type?"重置":"清算"),1)])),addonAfter:s((()=>[Me])),_:1},8,["value","disabled"])])),_:1})):g("",!0),4==+p(Q).type?(o(),b(n,{key:4,label:"奖励领取时间",name:"receive_at",required:""},{default:s((()=>[i(X,{value:p(Q).receive_at,"onUpdate:value":l[33]||(l[33]=e=>p(Q).receive_at=e),disabled:p(Te),"show-time":{format:"HH:mm:ss"},format:"YYYY-MM-DD HH:mm:ss",placeholder:"选择时间"},null,8,["value","disabled"]),k(" 前 ")])),_:1})):g("",!0),i(n,{name:"take_type",label:"参与用户",required:""},{default:s((()=>[i(Z,{value:p(Q).take_type,"onUpdate:value":l[34]||(l[34]=e=>p(Q).take_type=e),options:p(R).high_member_type},null,8,["value","options"])])),_:1}),i(n,{name:"start_at-end_at",label:"任务时间",required:""},{default:s((()=>[i(Oe,{value:p(Q)["start_at-end_at"],"onUpdate:value":l[35]||(l[35]=e=>p(Q)["start_at-end_at"]=e),disabled:p(Te),"show-time":{format:"HH:mm:ss"},format:"YYYY-MM-DD HH:mm:ss",placeholder:["选择开始时间","选择结束时间"]},null,8,["value","disabled"])])),_:1}),i(n,{name:"sort",label:"排序"},{default:s((()=>[i(O,{value:p(Q).sort,"onUpdate:value":l[36]||(l[36]=e=>p(Q).sort=e),min:0,precision:0},null,8,["value"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["spinning"])])),_:1},8,["visible","title","confirm-loading"])])}}}),Ie=e({__name:"TaskManager",setup(e){const l=a("enums"),t=G([["input","id","任务ID"],["input","title","任务名称"],["select","type","类型"],["select","take_type","参与用户类型",l.value.member_type],["dateRange","created_at_start-created_at_end",["创建时间","创建时间"]],["select","enabled","状态",l.value.enabled]]),d=F([["任务ID","id"],["任务图片","thumb"],["任务名称","title"],["任务类型","type"],["任务描述","desc"],["参与用户类型","take_type"],["参与人数","join_person"],["参与次数","join_count"],["完成人数","finish_person"],["完成次数","finish_count"],["创建时间","created_at"],["状态","enabled"],["操作","operate",180,"right"]]),u=n({handlingId:0,dataSource:[],loading:!1,query:{},pagination:K(),selectedRowKeys:[],showTaskAdd:!1,type_map:[]});S((()=>{_()}));const _=()=>{u.loading=!0,c.user.task.list({page:u.pagination.current,page_size:u.pagination.pageSize,...u.query}).then((e=>{var a;u.loading=!1,u.dataSource=e.data.items,1===u.pagination.current&&(u.pagination.total=+(null==(a=e.data)?void 0:a.count),$(t,"type",e.data.type_map),u.type_map=Object.keys(e.data.type_map).map((a=>({label:e.data.type_map[a],value:+a}))))}))},v=e=>{u.pagination={...u.pagination,...e},_()},m=e=>{u.query=e,u.pagination={...u.pagination,current:1},_()};return(e,a)=>{const l=O("Export"),n=D,f=O("Search"),h=E,w=N,U=R;return o(),r("div",null,[i(f,{"search-options":p(t),onOnSearch:m},{default:s((()=>[i(l,{api:p(c).user.task.export,query:p(u).query},null,8,["api","query"]),i(n,{type:"primary",onClick:a[0]||(a[0]=e=>{p(u).showTaskAdd=!0,p(u).handlingId=0})},{default:s((()=>[k(" 添加任务 ")])),_:1})])),_:1},8,["search-options"]),i(U,{"row-key":"id","data-source":p(u).dataSource,columns:p(d),scroll:{x:"max-content"},loading:p(u).loading,pagination:p(u).pagination,onChange:v},{bodyCell:s((({column:e,record:a})=>["thumb"===e.key?(o(),b(h,{key:0,width:50,height:50,src:a.thumb},null,8,["src"])):g("",!0),"enabled"===e.key?(o(),b(w,{key:1,checked:a.enabled,"onUpdate:checked":e=>a.enabled=e,"un-checked-value":0,"checked-value":1,onChange:e=>(async e=>{await c.user.task.status({id:e.id,enabled:e.enabled}).catch((a=>{e.enabled=0===e.enabled?1:0}))})(a)},null,8,["checked","onUpdate:checked","onChange"])):g("",!0),"operate"===e.key?(o(),r(y,{key:2},[i(n,{type:"link",onClick:e=>{p(u).showTaskAdd=!0,p(u).handlingId=a.id}},{default:s((()=>[k(" 编辑 ")])),_:2},1032,["onClick"]),i(n,{type:"link",danger:"",onClick:e=>(async e=>{Q.confirm({title:"提示",content:"确认删除所选任务?",okText:"确认",cancelText:"取消",async onOk(){await c.user.task.del({id:e}),_()},onCancel(){}})})(a.id)},{default:s((()=>[k(" 删除 ")])),_:2},1032,["onClick"])],64)):g("",!0)])),_:1},8,["data-source","columns","loading","pagination"]),p(u).showTaskAdd?(o(),b(Te,{key:0,id:p(u).handlingId,show:p(u).showTaskAdd,"onUpdate:show":a[1]||(a[1]=e=>p(u).showTaskAdd=e),type_map:p(u).type_map,onFresh:_},null,8,["id","show","type_map"])):g("",!0)])}}});export{Ie as default};