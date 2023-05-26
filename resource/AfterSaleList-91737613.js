import{d as a,r as e,i as t,l,m as s,a as n,b as i,e as o,w as u,f as r,k as d,$ as p,M as c,q as _,g as y,z as m,B as v,I as b,A as f,C as g,D as h,E as k,S as w,a0 as x,c as S,o as B,G as j,H as I,p as q,s as C,T as R,F as D,n as T,x as A,v as U}from"./index-c2ae2a0e.js";import{c as E,_ as K}from"./useTableColumns-dd067b4d.js";import{R as M,_ as F}from"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{u as O,a as $}from"./useSearchItems-c7d75cf3.js";import{u as z}from"./usePagination-c05046ed.js";import{_ as G}from"./Transport.vue_vue_type_script_setup_true_lang-724b9997.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";import"./index-b1df7cdb.js";import"./index-923a8554.js";const H=["href"],J=a({__name:"BatchAfterSaleModal",props:{show:Boolean},emits:["fresh"],setup(a,{emit:x}){const S=a,B={1:{name:"确认收货",url:"/v1/excel/sale_receive.xlsx"},2:{name:"确认补发",url:"/v1/excel/sale_send.xlsx"},3:{name:"确认退款",url:"/v1/excel/sale_confirm.xlsx"}},j=e(),I=t(S,"show",x),q=()=>{var a;null==(a=document.getElementById("BatchAfterSaleModal-importInput"))||a.click()};l(I,(async a=>{a&&j.value&&j.value.resetFields()}));const C=s({loading:!1}),R=s({type:1,file:""}),D=()=>{j.value.validate().then((async a=>{var e;C.loading=!0;const t=null==(e=document.getElementById("BatchAfterSaleModal-importInput"))?void 0:e.files[0],l=new FormData;l.append("file",t),l.append("type",R.type);try{await p.afterSale.batch.submit(l),C.loading=!1,I.value=!1,x("fresh")}catch(s){C.loading=!1}}))};return(a,e)=>{const t=v,l=b,s=f,p=M,x=F,S=g,T=h,A=k,U=w,E=c;return n(),i("div",null,[o(E,{visible:r(I),"onUpdate:visible":e[3]||(e[3]=a=>d(I)?I.value=a:null),width:"650px",title:"批量操作",onOk:D},{default:u((()=>[o(U,{spinning:r(C).loading,"onUpdate:spinning":e[2]||(e[2]=a=>r(C).loading=a)},{default:u((()=>[o(A,{ref_key:"formRef",ref:j,model:r(R),"label-col":{span:6},"wrapper-col":{span:18}},{default:u((()=>[o(T,null,{default:u((()=>[o(S,{span:18},{default:u((()=>[o(s,{name:"file",label:"上传文件",required:""},{default:u((()=>[o(t,{type:"primary",onClick:q},{default:u((()=>[_(" 上传文件 ")])),_:1}),o(l,{id:"BatchAfterSaleModal-importInput",value:r(R).file,"onUpdate:value":e[0]||(e[0]=a=>r(R).file=a),accept:".xls, .xlsx",type:"file",style:{display:"none"}},null,8,["value"]),y("div",null,m(r(R).file),1)])),_:1}),o(s,{name:"type",label:"操作类型",required:""},{default:u((()=>[o(x,{value:r(R).type,"onUpdate:value":e[1]||(e[1]=a=>r(R).type=a)},{default:u((()=>[o(p,{value:1},{default:u((()=>[_(" 确认收货 ")])),_:1}),o(p,{value:2},{default:u((()=>[_(" 确认补发 ")])),_:1}),o(p,{value:3},{default:u((()=>[_(" 确认退款 ")])),_:1})])),_:1},8,["value"])])),_:1}),o(s,null,{default:u((()=>[y("a",{href:B[r(R).type].url,download:"",style:{"padding-left":"40px"}},"点击此处下载"+m(B[r(R).type].name)+"模板",9,H)])),_:1})])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["spinning"])])),_:1},8,["visible"])])}}}),L={key:0},P={key:0},N=["onClick"],Q=a({__name:"AfterSaleList",setup(a){const t=x("enums"),d=O([["input","sale_sn","售后单号"],["input","order_sn","订单号"],["select","type","售后类型",t.value.sale_type],["select","status","售后状态",t.value.sale_type],["input","uid","用户ID"],["input","goods_id","商品ID"],["input","goods_title","商品名称"],["input","goods_sn","商品编号"],["input","waybill_code","京东运单号"],["dateRange","created_at_start-created_at_end",["申请时间开始","申请时间结束"]],["select","return_type","寄回方式",t.value.sale_return_type],["input","logistics_sn","物流单号"],["select","trace_status","物流状态",[["未签收",2],["已签收",3],["问题件",4]]],["input","master_name","客服名称"],["dateRange","audit_at_start-audit_at_end",["处理时间开始","时间结束"]],["select","creator_type","申请来源",[["用户自主申请",1],["客服代申请",2]]]]),c=[["ID","id"],["售后类型","type_name"],["售后订单号","sale_sn"],["订单号","order_sn"],["订单实付金额","pay_fee"],{data:["寄回方式","return_type_name"],key:[10]},{data:["物流公司","logistics_name"],key:[10]},{data:["物流单号","logistics_sn"],key:[10]},{data:["京东运单号","waybill_code"],key:[10]},{data:["物流状态","logistics_trace_status_name"],key:[10]},{data:["售后退款","money"],key:[20,12]},{data:["商品退款","goods_fee"],key:[20,12]},{data:["运费补偿","freight_fee"],key:[20,12]},{data:["补偿金额","add_fee"],key:[20,12]},["商品ID","goods_id"],["商品名称","goods_title"],["商品名称","goods_sn"],["售后数量","nums"],["用户ID","uid"],["用户昵称","username"],["申请时间","created_at"],{data:["处理客服","master_name"],key:[10,20,12,3]},["售后状态","status_name"],["申请来源","creator_type_name"],["操作","operate",180,"right"]],b=e([]),f=()=>{b.value=E(c,g.tab_status)},g=s({tabs:[{key:"pending_num",label:"待处理",value:1,count:0},{key:"processing_num",label:"处理中",value:10,count:0},{key:"processed_num",label:"已处理",value:30,count:0},{key:"refunding_num",label:"退款中",value:20,count:0},{key:"finished_num",label:"已完成",value:12,count:0},{key:"closed_num",label:"已关闭",value:3,count:0}],tab_status:1,handlingId:0,handlingRow:{},showTransoprt:!1,showBatch:!1,dataSource:[],loading:!1,query:{},pagination:z(),selectedRowKeys:[],batchs:[{label:"批量操作",value:"bacth"}]}),h=S((()=>{let a=d.value;return 10!==g.tab_status&&(a=a.filter((a=>"waybill_code"!==a.key))),1===g.tab_status||10===g.tab_status?1===g.tab_status?$(d,"status",[{label:"待处理",value:"1"},{label:"待补充资料",value:"31"}]):10===g.tab_status?$(d,"status",[{label:"待用户寄回",value:"10"},{label:"待支付取件费用",value:"5"},{label:"寄回中",value:"13"},{label:"用户已寄回",value:"11"},{label:"待补发",value:"15"},{label:"待确认退款",value:"19"}]):$(d,"status",[{label:"待用户寄回",value:"10"},{label:"待支付取件费用",value:"5"},{label:"寄回中",value:"13"},{label:"用户已寄回",value:"11"},{label:"待补发",value:"15"},{label:"待用户确认收货",value:"30"},{label:"待确认退款",value:"19"}]):a=a.filter((a=>"status"!==a.key)),[1].includes(g.tab_status)&&(a=a.filter((a=>!["master_id","audit_at_start-audit_at_end"].includes(a.key)))),[1,20,12,3].includes(g.tab_status)&&(a=a.filter((a=>!["return_type","logistics_sn","trace_status"].includes(a.key)))),a})),k=a=>{"bacth"===a&&(g.showBatch=!0)};l((()=>g.tab_status),(()=>{f(),g.pagination={...g.pagination,current:1},w()})),B((()=>{f(),w()}));const w=()=>{g.loading=!0,p.afterSale.sale.list({page:g.pagination.current,page_size:g.pagination.pageSize,tab_status:g.tab_status,...g.query}).then((a=>{var e;g.loading=!1,g.dataSource=a.data.items,1===g.pagination.current&&(g.tabs.forEach((e=>{e.count=a.data.num_map[e.key]})),g.pagination.total=+(null==(e=a.data)?void 0:e.count))}))},M=a=>{g.pagination={...g.pagination,...a},w()},F=a=>{g.query=a,g.pagination={...g.pagination,current:1},w()};return(a,e)=>{const t=U,l=R,s=j("Export"),d=j("Search"),c=v,f=K,w=j("BatchTable"),x=I("permission");return n(),i("div",null,[o(l,{activeKey:r(g).tab_status,"onUpdate:activeKey":e[0]||(e[0]=a=>r(g).tab_status=a)},{default:u((()=>[(n(!0),i(D,null,T(r(g).tabs,(a=>(n(),q(t,{key:a.value,tab:`${a.label}(${a.count})`},null,8,["tab"])))),128))])),_:1},8,["activeKey"]),o(d,{"search-options":r(h),onOnSearch:F},{default:u((()=>[A(o(s,{api:r(p).afterSale.sale.export,query:{tab_status:r(g).tab_status,...r(g).query}},null,8,["api","query"]),[[x,[r(p).afterSale.sale.export]]])])),_:1},8,["search-options"]),o(f,{"row-key":"id","data-source":r(g).dataSource,columns:r(b),scroll:{x:"max-content"},loading:r(g).loading,pagination:r(g).pagination,onChange:M},{bodyCell:u((({column:e,record:t})=>["logistics_sn"===e.key?(n(),i("div",L,[y("div",null,m(t.logistics_sn),1),t.logistics_sn?(n(),i("div",P,[y("a",{href:"javascript:;",type:"link",onClick:a=>{r(g).showTransoprt=!0,r(g).handlingRow=t}}," 查看物流 ",8,N)])):C("",!0)])):C("",!0),"operate"===e.key?A((n(),q(c,{key:1,type:"link",onClick:e=>a.$router.push({name:"AfterSaleDetail",params:{id:t.id}})},{default:u((()=>[_(" 查看详情 ")])),_:2},1032,["onClick"])),[[x,[r(p).afterSale.sale.detail]]]):C("",!0)])),_:1},8,["data-source","columns","loading","pagination"]),r(g).dataSource.length&&10===r(g).tab_status?(n(),q(w,{key:0,batchs:r(g).batchs,onClick:k},null,8,["batchs"])):C("",!0),o(J,{show:r(g).showBatch,"onUpdate:show":e[1]||(e[1]=a=>r(g).showBatch=a)},null,8,["show"]),o(G,{show:r(g).showTransoprt,"onUpdate:show":e[2]||(e[2]=a=>r(g).showTransoprt=a),row:r(g).handlingRow},null,8,["show","row"])])}}});export{Q as default};
