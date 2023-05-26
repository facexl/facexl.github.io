import{d as e,m as a,o as n,$ as t,G as o,a as d,b as i,e as r,f as s,w as l,p as c,s as u,F as g,q as p,B as _,g as m,T as h,v as y}from"./index-c2ae2a0e.js";import{u as k,_ as b}from"./useTableColumns-dd067b4d.js";import"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as f}from"./index-ef11d20c.js";import{u as v}from"./useSearchItems-c7d75cf3.js";import{u as S}from"./usePagination-c05046ed.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";const C=e({__name:"AfterSaleDay",setup(e){const m=v([["dateRange","start_at-end_at",["开始日期","结束日期"]]]),h=k([["日期","date"],["售后订单数","order_sale_num"],["售后商品数","order_sale_goods_num"],["仅退款商品数","refund_goods_num"],["退货商品数","back_goods_num"],["换货商品数","change_goods_num"],["补发商品数","add_goods_num"],["补偿商品数","repair_goods_num"],["兑换/实付运费险","pay_exchange_freight"],["省用户运费","save_freight"],["实际退款金额","actual_refund"],["实际补偿金额","actual_repair"],["回收返利金额","actual_repair"]]),y=a({handlingId:0,dataSource:[],loading:!1,query:{},pagination:S(),selectedRowKeys:[],batchs:[{label:"批量",value:""}]}),C=e=>{""===e&&(y.handlingId=y.selectedRowKeys)};n((()=>{w()}));const w=()=>{y.loading=!0,t.sta.afterSale.day({page:y.pagination.current,page_size:y.pagination.pageSize,...y.query}).then((e=>{var a;y.loading=!1,y.dataSource=e.data.items,1===y.pagination.current&&(y.pagination.total=+(null==(a=e.data)?void 0:a.count))}))},K=e=>{y.pagination={...y.pagination,...e},w()},x=e=>{y.query=e,y.pagination={...y.pagination,current:1},w()};return(e,a)=>{const n=o("Search"),k=f,v=_,S=b,w=o("BatchTable");return d(),i("div",null,[r(n,{"search-options":s(m),onOnSearch:x},null,8,["search-options"]),r(S,{"row-key":"id","data-source":s(y).dataSource,columns:s(h),scroll:{x:"max-content"},loading:s(y).loading,"row-selection":{selectedRowKeys:s(y).selectedRowKeys,onChange(e){s(y).selectedRowKeys=e}},pagination:s(y).pagination,onChange:K},{bodyCell:l((({column:a,record:n})=>["enabled"===a.key?(d(),c(k,{key:0,checked:n.enabled,"onUpdate:checked":e=>n.enabled=e,"un-checked-value":0,"checked-value":1,onChange:e=>(async e=>{await t.product.material.status({id:e.id,enabled:e.enabled}).catch((a=>{e.enabled=0===e.enabled?1:0}))})(n)},null,8,["checked","onUpdate:checked","onChange"])):u("",!0),"operate"===a.key?(d(),i(g,{key:1},[r(v,{type:"link",onClick:e=>{s(y).handlingId=n.id}},{default:l((()=>[p(" 编辑 ")])),_:2},1032,["onClick"]),r(v,{type:"link",danger:"",onClick:a=>e.del(n.id)},{default:l((()=>[p(" 删除 ")])),_:2},1032,["onClick"])],64)):u("",!0)])),_:1},8,["data-source","columns","loading","row-selection","pagination"]),s(y).dataSource.length?(d(),c(w,{key:0,batchs:s(y).batchs,"selected-row-keys":s(y).selectedRowKeys,onClick:C},null,8,["batchs","selected-row-keys"])):u("",!0)])}}}),w=e({__name:"AfterSaleGoods",setup(e){const m=v([["input","goods_id","商品ID"],["input","goods_name","商品名称"],["input","rate_start","售后率(上限)"],["input","rate_end","售后率(下限)"],["input","supplier_name","供应商名"]]),h=k([["ID","goods_id"],["商品名称","goods_name"],["所属供应商","supplier_name"],["订单数量","order_num"],["商品销量","total_sale_num"],["商品销售额","total_sale_fee"],["售后单数","order_sale_num",120,!1,!0],["售后商品数","order_sale_goods_num",120,!1,!0],["商品售后率","service_rate",120,!1,!0],["退款/退货商品数","return_goods_num",150,!1,!0],["退款/退货率","return_rate",130,!1,!0],["换货/补发商品数","huan_bu_goods_num",150,!1,!0],["补偿商品数","repair_goods_num"],["实际退款金额","refund_fee"],["实际补偿金额","repair_fee"]]),y=a({handlingId:0,dataSource:[],loading:!1,query:{},pagination:S(),selectedRowKeys:[],listOtherParams:{}});n((()=>{C()}));const C=()=>{y.loading=!0,t.sta.afterSale.goods({page:y.pagination.current,page_size:y.pagination.pageSize,...y.query,...y.listOtherParams}).then((e=>{var a;y.loading=!1,y.dataSource=e.data.data,1===y.pagination.current&&(y.pagination.total=+(null==(a=e.data)?void 0:a.count))}))},w=(e,a,n)=>{n.order?y.listOtherParams={order_by:`${n.field} ${"descend"===n.order?"desc":"asc"}`}:y.listOtherParams={},y.pagination={...y.pagination,...e},C()},K=e=>{y.query=e,y.pagination={...y.pagination,current:1},C()};return(e,a)=>{const n=o("Search"),k=f,v=_,S=b;return d(),i("div",null,[r(n,{"search-options":s(m),onOnSearch:K},null,8,["search-options"]),r(S,{"row-key":"id","data-source":s(y).dataSource,columns:s(h),scroll:{x:"max-content"},loading:s(y).loading,pagination:s(y).pagination,onChange:w},{bodyCell:l((({column:a,record:n})=>["enabled"===a.key?(d(),c(k,{key:0,checked:n.enabled,"onUpdate:checked":e=>n.enabled=e,"un-checked-value":0,"checked-value":1,onChange:e=>(async e=>{await t.product.material.status({id:e.id,enabled:e.enabled}).catch((a=>{e.enabled=0===e.enabled?1:0}))})(n)},null,8,["checked","onUpdate:checked","onChange"])):u("",!0),"operate"===a.key?(d(),i(g,{key:1},[r(v,{type:"link",onClick:e=>{s(y).handlingId=n.id}},{default:l((()=>[p(" 编辑 ")])),_:2},1032,["onClick"]),r(v,{type:"link",danger:"",onClick:a=>e.del(n.id)},{default:l((()=>[p(" 删除 ")])),_:2},1032,["onClick"])],64)):u("",!0)])),_:1},8,["data-source","columns","loading","pagination"])])}}}),K=e({__name:"AfterSaleSta",setup(e){const n=a({activeKey:"1"});return(e,a)=>{const t=y,o=h;return d(),i("div",null,[m("div",null,[r(o,{activeKey:s(n).activeKey,"onUpdate:activeKey":a[0]||(a[0]=e=>s(n).activeKey=e)},{default:l((()=>[r(t,{key:"1",tab:"每日售后情况"},{default:l((()=>[r(C)])),_:1}),r(t,{key:"2",tab:"商品购买、售后情况"},{default:l((()=>[r(w)])),_:1})])),_:1},8,["activeKey"])])])}}});export{K as default};