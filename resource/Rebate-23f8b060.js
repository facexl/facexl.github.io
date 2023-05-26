import{d as e,m as a,o as n,$ as t,G as o,a as i,b as d,e as r,w as s,f as l,p,s as c,F as u,q as m,B as _}from"./index-c2ae2a0e.js";import{u as g,_ as y}from"./useTableColumns-dd067b4d.js";import"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as h}from"./index-ef11d20c.js";import{u as b,a as k}from"./useSearchItems-c7d75cf3.js";import{u as f}from"./usePagination-c05046ed.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";const j=e({__name:"Rebate",setup(e){const j=b([["input","order_id","订单ID"],["input","order_sn","订单编号"],["input","goods_id","商品ID"],["input","goods_name","商品"],["input","uid","用户ID"],["input","user_name","用户名"],["select","type","返利类型"],["select","is_pay","返利状态"],["dateRange","created_at_start-created_at_end",["创建时间开始","结束时间"]],["dateRange","rebate_time_start-rebate_time_end",["返利时间开始","结束时间"]]]),x=g([["订单ID","order_id"],["订单编号","order_sn"],["商品ID","goods_id"],["商品","goods_name",200],["用户ID","uid"],["用户名","user_name"],["返利类型","type"],["来源","source"],["资金(元)","real_money"],["返利状态","is_pay"],["创建时间","created_at"],["返利时间","rebate_time"],["备注","remark"]]),C=a({handlingId:0,dataSource:[],loading:!1,query:{},pagination:f(),selectedRowKeys:[],batchs:[{label:"批量",value:""}]});n((()=>{I()}));const I=()=>{C.loading=!0,t.finance.rebate.list({page:C.pagination.current,page_size:C.pagination.pageSize,...C.query}).then((e=>{var a;C.loading=!1,C.dataSource=e.data.items,1===C.pagination.current&&(C.pagination.total=+(null==(a=e.data)?void 0:a.count),k(j,"type",e.data.clearing_type_map),k(j,"is_pay",e.data.pay_type_map))}))},q=e=>{C.pagination={...C.pagination,...e},I()},v=e=>{C.query=e,C.pagination={...C.pagination,current:1},I()};return(e,a)=>{const n=o("Export"),g=o("Search"),b=h,k=_,f=y;return i(),d("div",null,[r(g,{"search-options":l(j),onOnSearch:v},{default:s((()=>[r(n,{api:l(t).finance.rebate.export,query:l(C).query},null,8,["api","query"])])),_:1},8,["search-options"]),r(f,{"row-key":"id","data-source":l(C).dataSource,columns:l(x),scroll:{x:"max-content"},loading:l(C).loading,pagination:l(C).pagination,onChange:q},{bodyCell:s((({column:a,record:n})=>["enabled"===a.key?(i(),p(b,{key:0,checked:n.enabled,"onUpdate:checked":e=>n.enabled=e,"un-checked-value":0,"checked-value":1,onChange:e=>(async e=>{await t.product.material.status({id:e.id,enabled:e.enabled}).catch((a=>{e.enabled=0===e.enabled?1:0}))})(n)},null,8,["checked","onUpdate:checked","onChange"])):c("",!0),"operate"===a.key?(i(),d(u,{key:1},[r(k,{type:"link",onClick:e=>{l(C).handlingId=n.id}},{default:s((()=>[m(" 编辑 ")])),_:2},1032,["onClick"]),r(k,{type:"link",danger:"",onClick:a=>e.del(n.id)},{default:s((()=>[m(" 删除 ")])),_:2},1032,["onClick"])],64)):c("",!0)])),_:1},8,["data-source","columns","loading","pagination"])])}}});export{j as default};