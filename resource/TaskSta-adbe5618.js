import{d as a,a0 as e,m as t,o as n,$ as i,G as s,a as o,b as r,e as d,w as l,f as u,p as c,s as p,F as _,q as g,B as m}from"./index-c2ae2a0e.js";import{u as h,_ as k}from"./useTableColumns-dd067b4d.js";import"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as y}from"./index-ef11d20c.js";import{_ as f}from"./index-00d344de.js";import{u as b,a as v}from"./useSearchItems-c7d75cf3.js";import{u as j}from"./usePagination-c05046ed.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";const x=a({__name:"TaskSta",setup(a){const x=e("enums"),C=b([["input","id","参与ID"],["input","uid","用户ID"],["input","username","用户昵称"],["select","user_type","用户身份",x.value.member_type],["input","task_id","任务ID"],["input","title","任务名称"],["dateRange","start_at_begin-start_at_finish",["任务开始时间","结束时间"]],["dateRange","end_at_begin-end_at_finish",["任务结束时间","结束时间"]],["dateRange","clear_at_begin-clear_at_finish",["任务清算时间","结束时间"]],["dateRange","receive_at_begin-receive_at_finish",["奖励领取时间","结束时间"]],["select","status","状态"]]),I=h([["参与ID","id"],["用户ID","uid"],["用户头像","avatar"],["用户昵称","username"],["用户身份","user_type_name"],["任务ID","task_id"],["任务名称","title"],["任务开始时间","start_at"],["任务结束时间","end_at"],["任务目标","target_value"],["任务完成情况","finish_value"],["完成奖励","finish_receive_info"],["清算时间","clear_at"],["奖励领取时间","receive_at"],["状态","status"]]),q=t({handlingId:0,dataSource:[],loading:!1,query:{},pagination:j(),selectedRowKeys:[],batchs:[{label:"批量",value:""}]});n((()=>{S()}));const S=()=>{q.loading=!0,i.user.task.sta({page:q.pagination.current,page_size:q.pagination.pageSize,...q.query}).then((a=>{var e;q.loading=!1,q.dataSource=a.data.items,1===q.pagination.current&&(q.pagination.total=+(null==(e=a.data)?void 0:e.count),v(C,"status",a.data.status_map))}))},D=a=>{q.pagination={...q.pagination,...a},S()},R=a=>{q.query=a,q.pagination={...q.pagination,current:1},S()};return(a,e)=>{const t=s("Export"),n=s("Search"),h=f,b=y,v=m,j=k;return o(),r("div",null,[d(n,{"search-options":u(C),onOnSearch:R},{default:l((()=>[d(t,{api:u(i).user.task.staExport,query:u(q).query},null,8,["api","query"])])),_:1},8,["search-options"]),d(j,{"row-key":"id","data-source":u(q).dataSource,columns:u(I),scroll:{x:"max-content"},loading:u(q).loading,pagination:u(q).pagination,onChange:D},{bodyCell:l((({column:e,record:t})=>["avatar"===e.key?(o(),c(h,{key:0,width:50,height:50,src:t.avatar},null,8,["src"])):p("",!0),"enabled"===e.key?(o(),c(b,{key:1,checked:t.enabled,"onUpdate:checked":a=>t.enabled=a,"un-checked-value":0,"checked-value":1,onChange:a=>(async a=>{await i.product.material.status({id:a.id,enabled:a.enabled}).catch((e=>{a.enabled=0===a.enabled?1:0}))})(t)},null,8,["checked","onUpdate:checked","onChange"])):p("",!0),"operate"===e.key?(o(),r(_,{key:2},[d(v,{type:"link",onClick:a=>{u(q).handlingId=t.id}},{default:l((()=>[g(" 编辑 ")])),_:2},1032,["onClick"]),d(v,{type:"link",danger:"",onClick:e=>a.del(t.id)},{default:l((()=>[g(" 删除 ")])),_:2},1032,["onClick"])],64)):p("",!0)])),_:1},8,["data-source","columns","loading","pagination"])])}}});export{x as default};