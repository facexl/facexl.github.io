import{d as e,$ as a,r as t,i as n,l as s,m as i,a as o,b as r,e as l,w as d,f as u,k as c,M as p,p as _,q as f,g as m,z as g,D as y,a7 as h,A as k,C as v,E as b,a0 as w,o as S,G as R,H as j,T as C,F as x,n as q,x as M,s as K,v as I,B as F}from"./index-c2ae2a0e.js";import{u as O,_ as U}from"./useTableColumns-dd067b4d.js";import"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{u as $}from"./useSearchItems-c7d75cf3.js";import{u as z}from"./usePagination-c05046ed.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";const B={class:"danger-color"},A=e({__name:"RefundModal",props:{show:Boolean,id:String,action:String},emits:["fresh"],setup(e,{emit:w}){const S=e,R={refuse:{name:"拒绝退款",api:a.afterSale.refund.refuse},reject:{name:"驳回退款",api:a.afterSale.refund.reject,tip:"驳回后售后状态将会变为“待处理”"},agree:{name:"同意退款",api:a.afterSale.refund.agree}},j=t(),C=n(S,"show",w);s(C,(async e=>{e&&j.value&&j.value.resetFields()}));const x=i({loading:!1}),q=i({remark:""}),M=()=>{j.value.validate().then((async e=>{x.loading=!0;try{await R[S.action].api({...q,id:S.id}),x.loading=!1,C.value=!1,w("fresh")}catch(a){x.loading=!1}}))};return(a,t)=>{const n=y,s=h,i=k,w=v,S=b,x=p;return o(),r("div",null,[l(x,{visible:u(C),"onUpdate:visible":t[1]||(t[1]=e=>c(C)?C.value=e:null),width:"650px",title:R[e.action].name,onOk:M},{default:d((()=>[l(S,{ref_key:"formRef",ref:j,model:u(q),"label-col":{span:6},"wrapper-col":{span:18}},{default:d((()=>["agree"===e.action?(o(),_(n,{key:0},{default:d((()=>[f(" 确定同意退款？ ")])),_:1})):(o(),_(n,{key:1},{default:d((()=>[l(w,{span:18},{default:d((()=>[m("p",B,g(R[e.action].tip),1),l(i,{name:"remark",label:"备注",required:""},{default:d((()=>[l(s,{value:u(q).remark,"onUpdate:value":t[0]||(t[0]=e=>u(q).remark=e),placeholder:"请输入拒绝原因",style:{width:"68%"}},null,8,["value"])])),_:1})])),_:1})])),_:1}))])),_:1},8,["model"])])),_:1},8,["visible","title"])])}}}),D={key:0},E=e({__name:"RefundList",setup(e){const t=w("enums"),n=$([["input","sale_sn","售后单号"],["input","receiver_phone","联系电话"],["input","order_sn","订单号"],["input","username","用户账号"],["dateRange","created_at_start-created_at_end",["申请时间","结束时间"]],["dateRange","finance_receive_at_start-finance_receive_at_end",["转财务时间","结束时间"]],["dateRange","refund_at_start-refund_at_end",["退款时间","结束时间"]],["select","type","售后类型",t.value.sale_type],["select","return_type","寄回方式",[["全部",-1],["无",0],["自主寄回",1],["预约寄回",2]]]]),c=O([["售后单号","sale_sn"],["订单号","order_sn"],["申请时间","created_at"],["转财务时间","finance_receive_at"],["退款时间","refund_at"],["处理客服","master_name"],["售后退款","money"],["商品退款","goods_fee"],["运费补偿","freight_fee"],["补偿金额","add_fee"],["退款/退货原因","reason"],["是否属于质量问题","is_quality_name"],["寄回方式","return_type_name"],["备注","remark"],["用户账号","username"],["用户id","uid"],["联系电话","receiver_phone"],["操作","operate",180,"right"]]),p=i({tabs:[{value:20,label:"待处理",count:0,key:"pending_num"},{value:12,label:"已完成",count:0,key:"finished_num"},{value:3,label:"已拒绝",count:0,key:"refused_num"}],tab_status:20,handlingId:0,showRefundModal:!1,action:"agree",dataSource:[],loading:!1,query:{},pagination:z(),selectedRowKeys:[]});s((()=>p.tab_status),(()=>{p.pagination={...p.pagination,current:1},m()})),S((()=>{m()}));const m=()=>{p.loading=!0,a.afterSale.refund.list({page:p.pagination.current,page_size:p.pagination.pageSize,tab_status:p.tab_status,...p.query}).then((e=>{var a;p.loading=!1,p.dataSource=e.data.items,p.tabs=p.tabs.map((a=>({...a,count:e.data.num_map[a.key]}))),1===p.pagination.current&&(p.pagination.total=+(null==(a=e.data)?void 0:a.count))}))},g=e=>{p.pagination={...p.pagination,...e},m()},y=e=>{p.query=e,p.pagination={...p.pagination,current:1},m()};return(e,t)=>{const s=I,i=C,h=R("Export"),k=R("Search"),v=F,b=U,w=j("permission");return o(),r("div",null,[l(i,{activeKey:u(p).tab_status,"onUpdate:activeKey":t[0]||(t[0]=e=>u(p).tab_status=e)},{default:d((()=>[(o(!0),r(x,null,q(u(p).tabs,(e=>(o(),_(s,{key:e.value,tab:`${e.label}(${e.count})`},null,8,["tab"])))),128))])),_:1},8,["activeKey"]),l(k,{"search-options":u(n),onOnSearch:y},{default:d((()=>[l(h,{api:u(a).afterSale.refund.export,query:{...u(p).query,tab_status:u(p).tab_status}},null,8,["api","query"])])),_:1},8,["search-options"]),l(b,{"row-key":"id","data-source":u(p).dataSource,columns:u(c),scroll:{x:"max-content"},loading:u(p).loading,"row-selection":{selectedRowKeys:u(p).selectedRowKeys,onChange(e){u(p).selectedRowKeys=e}},pagination:u(p).pagination,onChange:g},{bodyCell:d((({column:t,record:n})=>["operate"===t.key?(o(),r(x,{key:0},[20===u(p).tab_status?(o(),r("span",D,[M((o(),_(v,{type:"link",onClick:e=>{u(p).handlingId=n.id,u(p).showRefundModal=!0,u(p).action="agree"}},{default:d((()=>[f(" 同意退款 ")])),_:2},1032,["onClick"])),[[w,[u(a).afterSale.refund.agree]]]),M((o(),_(v,{type:"link",onClick:e=>{u(p).handlingId=n.id,u(p).showRefundModal=!0,u(p).action="refuse"}},{default:d((()=>[f(" 拒绝退款 ")])),_:2},1032,["onClick"])),[[w,[u(a).afterSale.refund.refuse]]]),M((o(),_(v,{type:"link",onClick:e=>{u(p).handlingId=n.id,u(p).showRefundModal=!0,u(p).action="reject"}},{default:d((()=>[f(" 驳回退款 ")])),_:2},1032,["onClick"])),[[w,[u(a).afterSale.refund.reject]]])])):K("",!0),M((o(),_(v,{type:"link",onClick:a=>e.$router.push({name:"AfterSaleDetail",params:{id:n.id}})},{default:d((()=>[f(" 查看详情 ")])),_:2},1032,["onClick"])),[[w,[u(a).afterSale.sale.detail]]])],64)):K("",!0)])),_:1},8,["data-source","columns","loading","row-selection","pagination"]),l(A,{id:u(p).handlingId,show:u(p).showRefundModal,"onUpdate:show":t[1]||(t[1]=e=>u(p).showRefundModal=e),action:u(p).action,onFresh:m},null,8,["id","show","action"])])}}});export{E as default};