import{d as a,h as e,m as n,o as t,$ as i,G as o,a as d,b as s,e as r,w as l,f as c,p as u,s as p,F as g,q as m,B as y}from"./index-c2ae2a0e.js";import{u as _,_ as h}from"./useTableColumns-dd067b4d.js";import"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as k}from"./index-ef11d20c.js";import{u as b}from"./useSearchItems-c7d75cf3.js";import{u as f}from"./usePagination-c05046ed.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";const j=a({__name:"SignActSta",setup(a){const j=e(),q=b([["input","uid","用户ID"],["input","username","昵称"],["input","phone","手机号"],["dateRange","sign_start_at-sign_end_at"]]),x=_([["用户ID","uid"],["昵称","username"],["手机号","phone"],["签到位次","very_day_number"],["积分","integral"],["优惠券(元)","coupon_money"],["连续签到(天)","continue_days"],["累计签到(天)","accumulated_days"],["签到时间","created_at"]]),C=n({handlingId:0,dataSource:[],loading:!1,query:{},pagination:f(),selectedRowKeys:[],batchs:[{label:"批量",value:""}]});t((()=>{S()}));const S=()=>{C.loading=!0,i.act.sign.sta({page:C.pagination.current,page_size:C.pagination.pageSize,...C.query,clock_in_id:j.query.id}).then((a=>{var e;C.loading=!1,C.dataSource=a.data.items,1===C.pagination.current&&(C.pagination.total=+(null==(e=a.data)?void 0:e.count))}))},v=a=>{C.pagination={...C.pagination,...a},S()},I=a=>{C.query=a,C.pagination={...C.pagination,current:1},S()};return(a,e)=>{const n=o("Export"),t=o("Search"),_=k,b=y,f=h;return d(),s("div",null,[r(t,{"search-options":c(q),onOnSearch:I},{default:l((()=>[r(n,{api:c(i).act.sign.export,query:{...c(C).query,clock_in_id:c(j).query.id}},null,8,["api","query"])])),_:1},8,["search-options"]),r(f,{"row-key":"id","data-source":c(C).dataSource,columns:c(x),scroll:{x:"max-content"},loading:c(C).loading,pagination:c(C).pagination,onChange:v},{bodyCell:l((({column:e,record:n})=>["enabled"===e.key?(d(),u(_,{key:0,checked:n.enabled,"onUpdate:checked":a=>n.enabled=a,"un-checked-value":0,"checked-value":1,onChange:a=>(async a=>{await i.product.material.status({id:a.id,enabled:a.enabled}).catch((e=>{a.enabled=0===a.enabled?1:0}))})(n)},null,8,["checked","onUpdate:checked","onChange"])):p("",!0),"operate"===e.key?(d(),s(g,{key:1},[r(b,{type:"link",onClick:a=>{c(C).handlingId=n.id}},{default:l((()=>[m(" 编辑 ")])),_:2},1032,["onClick"]),r(b,{type:"link",danger:"",onClick:e=>a.del(n.id)},{default:l((()=>[m(" 删除 ")])),_:2},1032,["onClick"])],64)):p("",!0)])),_:1},8,["data-source","columns","loading","pagination"])])}}});export{j as default};
