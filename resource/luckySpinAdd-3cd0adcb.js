import{d as e,P as a,Q as l,R as t,e as d,U as s,c as o,u as n,h as i,r,m as u,l as _,o as p,$ as c,G as m,a as f,b as v,w as g,f as y,S as h,q as b,p as x,s as k,F as w,n as j,z,g as U,I as C,A as q,C as D,D as Y,V as S,W as E,B as M,X as H,Y as R,E as A,Z as B}from"./index-c2ae2a0e.js";import{_ as O}from"./index-f5618084.js";import{C as T}from"./index-1dfc023a.js";import{_ as F}from"./index-ef11d20c.js";import{u as G,_ as L}from"./useTableColumns-dd067b4d.js";import{R as I,_ as N}from"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as P}from"./index-00d344de.js";import{_ as J}from"./index-8036da2a.js";import{_ as Q}from"./Upload-053b6740.js";import{u as V}from"./useRequest-34a5e624.js";import{_ as W}from"./PrizeTable.vue_vue_type_script_setup_true_lang-533830dc.js";import{d as X}from"./dtool-b3945d0c.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";import"./index-b1df7cdb.js";import"./DeleteOutlined-1e1ff134.js";import"./luckSpinConstant-6ba453a8.js";import"./index-975d3375.js";import"./big-9da3d0c1.js";const Z=e({compatConfig:{MODE:3},name:"ACardMeta",props:{prefixCls:String,title:s.any,description:s.any,avatar:s.any},slots:["title","description","avatar"],setup:function(e,s){var o=s.slots,n=a("card",e).prefixCls;return function(){var a=l({},"".concat(n.value,"-meta"),!0),s=t(o,e,"avatar"),i=t(o,e,"title"),r=t(o,e,"description"),u=s?d("div",{class:"".concat(n.value,"-meta-avatar")},[s]):null,_=i?d("div",{class:"".concat(n.value,"-meta-title")},[i]):null,p=r?d("div",{class:"".concat(n.value,"-meta-description")},[r]):null,c=_||p?d("div",{class:"".concat(n.value,"-meta-detail")},[_,p]):null;return d("div",{class:a},[u,c])}}});const $=e({compatConfig:{MODE:3},name:"ACardGrid",__ANT_CARD_GRID:!0,props:{prefixCls:String,hoverable:{type:Boolean,default:!0}},setup:function(e,t){var s=t.slots,n=a("card",e).prefixCls,i=o((function(){var a;return l(a={},"".concat(n.value,"-grid"),!0),l(a,"".concat(n.value,"-grid-hoverable"),e.hoverable),a}));return function(){var e;return d("div",{class:i.value},[null===(e=s.default)||void 0===e?void 0:e.call(s)])}}});T.Meta=Z,T.Grid=$,T.install=function(e){return e.component(T.name,T),e.component(Z.name,Z),e.component($.name,$),e};const K=U("span",{class:"ant-required"}," 购买单件商品时，统一获得抽奖券张数: ",-1),ee={key:1},ae=U("span",null,"(同一用户在活动时间内，最多可通过购买商品的渠道获得的抽奖券数量)",-1),le=e({__name:"luckySpinAdd",setup(e){const a=n(),l=V({not_type:4},(e=>(e.forEach((e=>{e.goods_id=e.id,delete e.id})),e))),t=i(),s=(e,a)=>(a.label+a.value).includes(e),o=r(),U=r(),Z=u({goods_table_data:[],submitLoading:!1,prizes:[],loading:!1}),$=u({title:"",banner:"",ball_frame_img:"",goods_type:"0",goods_each_num:"",goods_ids:[],"start_at-end_at":[],max_num:"",draw_start_at:"",expired_at:"",prize_expired_at:"",is_everyday_clear:0,is_everyday_max:0,everyday_max_num:"",share_title:"",share_description:"",share_img:"",rule_content:""}),le=G([["编号","goods_id"],["商品名称","title"],["商品图片","thumb"],["赠送抽奖券数量","each_num"],["操作","operate",180,"right"]]);_([()=>$.goods_ids,l],(()=>{const e=l.value.filter((e=>$.goods_ids.includes(e.goods_id))),a=Z.goods_table_data.reduce(((e,a)=>(e[a.goods_id]=a,e)),{});e.forEach((e=>{const l=a[e.goods_id];l?(e.id=l.id,e.each_num=l.each_num):(e.id=0,e.each_num=1)})),Z.goods_table_data=e})),p((()=>{t.params.id&&(Z.loading=!0,c.act.spin.detail({id:t.params.id}).then((e=>{2==+e.data.goods_type&&(e.data.goods=e.data.disabled_goods),e.data.prizes.forEach((e=>{e.origin_type=e.type})),Z.prizes=e.data.prizes,Z.goods_table_data=e.data.goods,X(e.data).combinDayjs(["start_at","end_at"]).toString(["goods_type"]).strToDayjs(["draw_start_at","expired_at","prize_expired_at"]).insertForm($),$.goods_ids=e.data.goods.map((e=>e.goods_id)),Z.loading=!1})))}));const te=()=>{o.value.validate().then((async e=>{const{prizes:l}=U.value.submit();l.forEach((e=>{e.origin_type!==e.type&&(e.id=0)}));const d=X({prizes:l,...$,goods:Z.goods_table_data}).splitDayjs(["start_at","end_at"],"YYYY-MM-DD HH:mm:ss").dayjsToStr(["draw_start_at","expired_at","prize_expired_at"],"YYYY-MM-DD HH:mm:ss").end();if("luckySpinCopy"===t.name&&(d.goods.forEach((e=>{delete e.id})),d.prizes.forEach((e=>{delete e.id,delete e.activity_id}))),(e=>e.prizes.some((e=>""===e.num))?(B.error("请填写所有奖品"),!1):!e.prizes.some((e=>null===e.award_rate))||(B.error("请填写所有中奖率"),!1))(d)){X().toJSON(["goods","prizes"],d),t.params.id?"luckySpinCopy"===t.name?await c.act.spin.copy({...d,id:t.params.id}):await c.act.spin.update({...d,id:t.params.id}):await c.act.spin.add(d),Z.submitLoading=!0,a.back();try{Z.submitLoading=!1}catch(s){Z.submitLoading=!1}}}))};return(e,a)=>{const n=C,i=q,r=D,u=Y,_=Q,p=I,c=N,B=J,G=S,V=E,X=P,de=M,se=L,oe=H,ne=R,ie=F,re=T,ue=O,_e=D,pe=M,ce=m("FixBottomBar"),me=A,fe=h;return f(),v("div",null,[d(fe,{spinning:y(Z).loading},{default:g((()=>[d(me,{ref_key:"formRef",ref:o,model:y($),autocomplete:"off","label-col":{span:6},"wrapper-col":{span:18}},{default:g((()=>[d(re,{title:"基本设置"},{default:g((()=>[d(u,null,{default:g((()=>[d(r,{span:8},{default:g((()=>[d(i,{name:"title",label:"活动名称",required:""},{default:g((()=>[d(n,{value:y($).title,"onUpdate:value":a[0]||(a[0]=e=>y($).title=e),placeholder:"请输入",maxlength:12,"show-count":""},null,8,["value"])])),_:1})])),_:1})])),_:1}),d(u,null,{default:g((()=>[d(r,{span:8},{default:g((()=>[d(i,{name:"banner",label:"活动横幅图",required:""},{default:g((()=>[d(_,{filelist:y($).banner,"onUpdate:filelist":a[1]||(a[1]=e=>y($).banner=e)},null,8,["filelist"])])),_:1})])),_:1}),d(r,{span:14},{default:g((()=>[d(i,{name:"ball_frame_img",label:"赠送抽奖券弹窗图(首页)",required:""},{default:g((()=>[d(_,{filelist:y($).ball_frame_img,"onUpdate:filelist":a[2]||(a[2]=e=>y($).ball_frame_img=e)},null,8,["filelist"])])),_:1})])),_:1})])),_:1}),d(u,null,{default:g((()=>[d(r,{span:24},{default:g((()=>[d(i,{name:"goods_type",label:"活动商品",required:"","label-col":{span:2}},{default:g((()=>[d(c,{value:y($).goods_type,"onUpdate:value":a[3]||(a[3]=e=>y($).goods_type=e)},{default:g((()=>[d(p,{value:"0"},{default:g((()=>[b(" 全场通用 ")])),_:1}),d(p,{value:"1"},{default:g((()=>[b(" 指定商品 ")])),_:1}),d(p,{value:"2"},{default:g((()=>[b(" 不可用商品 ")])),_:1})])),_:1},8,["value"])])),_:1}),"0"===y($).goods_type||"2"===y($).goods_type?(f(),x(i,{key:0,name:"goods_each_num",required:""},{default:g((()=>[K,d(B,{value:y($).goods_each_num,"onUpdate:value":a[4]||(a[4]=e=>y($).goods_each_num=e),placeholder:"请输入",style:{width:"150px"},min:0,precision:0},null,8,["value"])])),_:1})):k("",!0)])),_:1})])),_:1}),"1"===y($).goods_type||"2"===y($).goods_type?(f(),x(u,{key:0},{default:g((()=>[d(r,{span:24},{default:g((()=>[d(i,{label:"关联商品",name:"goods_ids",rules:[{required:!0,message:"请选择"}],"label-col":{span:2},"wrapper-col":{span:22}},{default:g((()=>[d(V,{value:y($).goods_ids,"onUpdate:value":a[5]||(a[5]=e=>y($).goods_ids=e),placeholder:"请选择商品",mode:"multiple","show-search":"","max-tag-count":2,"allow-clear":"","filter-option":s},{default:g((()=>[(f(!0),v(w,null,j(y(l),(e=>(f(),x(G,{key:e.goods_id,value:e.goods_id,label:e.title},{default:g((()=>[b(z(e.title)+"-"+z(e.goods_id),1)])),_:2},1032,["value","label"])))),128))])),_:1},8,["value"])])),_:1}),d(se,{"row-key":"id","data-source":y(Z).goods_table_data,columns:y(le),scroll:{x:"max-content"},pagination:!1},{bodyCell:g((({column:e,record:a})=>["thumb"===e.key?(f(),x(X,{key:0,width:50,height:50,src:a.thumb},null,8,["src"])):k("",!0),"each_num"===e.key?(f(),v(w,{key:1},["1"===y($).goods_type?(f(),x(B,{key:0,value:a.each_num,"onUpdate:value":e=>a.each_num=e,min:0,precision:0},null,8,["value","onUpdate:value"])):(f(),v("span",ee,"--"))],64)):k("",!0),"operate"===e.key?(f(),x(de,{key:2,type:"link",danger:"",onClick:e=>{return l=a.goods_id,void($.goods_ids=$.goods_ids.filter((e=>e!==l)));var l}},{default:g((()=>[b(" 删除 ")])),_:2},1032,["onClick"])):k("",!0)])),_:1},8,["data-source","columns"])])),_:1})])),_:1})):k("",!0),d(u,{class:"mt8px"},{default:g((()=>[d(r,{span:12},{default:g((()=>[d(i,{name:"start_at-end_at",label:"购买商品发券时间",required:""},{default:g((()=>[d(oe,{value:y($)["start_at-end_at"],"onUpdate:value":a[6]||(a[6]=e=>y($)["start_at-end_at"]=e),format:"YYYY-MM-DD HH:mm:ss","show-time":{format:"HH:mm:ss"},placeholder:["开始时间","结束时间"]},null,8,["value"])])),_:1})])),_:1})])),_:1}),d(u,null,{default:g((()=>[d(r,{span:24},{default:g((()=>[d(i,{label:"单用户领券上限",name:"max_num",required:"","label-col":{span:3},"wrapper-col":{span:21}},{default:g((()=>[d(B,{value:y($).max_num,"onUpdate:value":a[7]||(a[7]=e=>y($).max_num=e),placeholder:"请输入",style:{width:"150px"},min:0,precision:0},null,8,["value"]),ae])),_:1})])),_:1})])),_:1}),d(u,null,{default:g((()=>[d(r,{span:12},{default:g((()=>[d(i,{label:"抽奖开始时间:",name:"draw_start_at",required:""},{default:g((()=>[d(ne,{value:y($).draw_start_at,"onUpdate:value":a[8]||(a[8]=e=>y($).draw_start_at=e),"show-time":"",placeholder:"请选择"},null,8,["value"])])),_:1})])),_:1})])),_:1}),d(u,null,{default:g((()=>[d(r,{span:12},{default:g((()=>[d(i,{label:"抽奖券过期时间:",name:"expired_at",required:""},{default:g((()=>[d(ne,{value:y($).expired_at,"onUpdate:value":a[9]||(a[9]=e=>y($).expired_at=e),"show-time":"",placeholder:"请选择"},null,8,["value"])])),_:1})])),_:1})])),_:1}),d(u,null,{default:g((()=>[d(r,{span:24},{default:g((()=>[d(i,{label:"完善收货信息时间:",name:"prize_expired_at",required:"","label-col":{span:3},"wrapper-col":{span:21}},{default:g((()=>[d(ne,{value:y($).prize_expired_at,"onUpdate:value":a[10]||(a[10]=e=>y($).prize_expired_at=e),"show-time":"",placeholder:"请选择"},null,8,["value"]),b(" (抽中商品的用户须在这个日期前填写收货信息，逾期则视为自动放弃奖品) ")])),_:1})])),_:1})])),_:1}),d(u,null,{default:g((()=>[d(r,{span:12},{default:g((()=>[d(i,{label:"是否每日24点归零抽奖券","label-col":{span:8},"wrapper-col":{span:16}},{default:g((()=>[d(ie,{checked:y($).is_everyday_clear,"onUpdate:checked":a[11]||(a[11]=e=>y($).is_everyday_clear=e),"un-checked-value":0,"checked-value":1},null,8,["checked"])])),_:1})])),_:1})])),_:1}),d(u,null,{default:g((()=>[d(r,{span:12},{default:g((()=>[d(i,{label:"是否设置单日抽奖券上限","label-col":{span:8},"wrapper-col":{span:16}},{default:g((()=>[d(ie,{checked:y($).is_everyday_max,"onUpdate:checked":a[12]||(a[12]=e=>y($).is_everyday_max=e),"un-checked-value":0,"checked-value":1},null,8,["checked"])])),_:1})])),_:1})])),_:1}),1===y($).is_everyday_max?(f(),x(u,{key:1},{default:g((()=>[d(r,{span:12},{default:g((()=>[d(i,{label:"抽奖券上限","label-col":{span:8},"wrapper-col":{span:16},required:""},{default:g((()=>[d(B,{value:y($).everyday_max_num,"onUpdate:value":a[13]||(a[13]=e=>y($).everyday_max_num=e),min:0,precision:0},null,8,["value"])])),_:1})])),_:1})])),_:1})):k("",!0)])),_:1}),d(re,{title:"奖品设置"},{default:g((()=>[d(W,{ref_key:"prizeTableRef",ref:U,prizes:y(Z).prizes},null,8,["prizes"])])),_:1}),d(re,{title:"活动图文配置"},{default:g((()=>[d(u,null,{default:g((()=>[d(r,{span:8},{default:g((()=>[d(i,{name:"share_title",label:"分享标题",required:""},{default:g((()=>[d(n,{value:y($).share_title,"onUpdate:value":a[14]||(a[14]=e=>y($).share_title=e),placeholder:"请输入"},null,8,["value"])])),_:1})])),_:1})])),_:1}),d(u,null,{default:g((()=>[d(r,{span:8},{default:g((()=>[d(i,{name:"share_description",label:"分享描述",required:""},{default:g((()=>[d(n,{value:y($).share_description,"onUpdate:value":a[15]||(a[15]=e=>y($).share_description=e),placeholder:"请输入"},null,8,["value"])])),_:1})])),_:1})])),_:1}),d(u,null,{default:g((()=>[d(r,{span:8},{default:g((()=>[d(i,{name:"share_img",label:"分享图",required:""},{default:g((()=>[d(_,{filelist:y($).share_img,"onUpdate:filelist":a[16]||(a[16]=e=>y($).share_img=e)},null,8,["filelist"])])),_:1})])),_:1})])),_:1}),d(u,null,{default:g((()=>[d(_e,{span:24},{default:g((()=>[d(i,{name:"rule_content",label:"活动规则说明","label-col":{span:2}},{default:g((()=>[d(ue,{value:y($).rule_content,"onUpdate:value":a[17]||(a[17]=e=>y($).rule_content=e)},null,8,["value"])])),_:1})])),_:1})])),_:1}),"luckySpinDetail"!==y(t).name?(f(),x(ce,{key:0},{default:g((()=>[d(pe,{type:"primary",loading:y(Z).submitLoading,onClick:te},{default:g((()=>[b(" 提交 ")])),_:1},8,["loading"])])),_:1})):k("",!0)])),_:1})])),_:1},8,["model"])])),_:1},8,["spinning"])])}}});export{le as default};