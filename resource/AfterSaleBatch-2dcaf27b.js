import{d as e,m as a,o as t,$ as n,G as o,a as s,b as i,e as l,f as d,w as r,p as c,s as u,F as p,g}from"./index-c2ae2a0e.js";import{u as h,_ as m}from"./useTableColumns-dd067b4d.js";import"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as y}from"./index-ef11d20c.js";import{u as b}from"./useSearchItems-c7d75cf3.js";import{u as f}from"./usePagination-c05046ed.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";const k=["href"],w=["href"],_=e({__name:"AfterSaleBatch",setup(e){const _=b([["select","type","请选择文件类型",[["全部",0],["确认补发",1],["确认收货",2],["确认退款",3]]],["dateRange","created_at_start-created_at_end",["生成时间段","结束日期"]]]),j=h([["ID","id"],["结果文件地址","result_file"],["类型","type_name"],["生成时间","created_at"],["操作","operate",180,"right"]]),S=a({handlingId:0,dataSource:[],loading:!1,query:{},pagination:f(),selectedRowKeys:[],batchs:[{label:"批量",value:""}]}),x=e=>{""===e&&(S.handlingId=S.selectedRowKeys)};t((()=>{R()}));const R=()=>{S.loading=!0,n.afterSale.batch.list({page:S.pagination.current,page_size:S.pagination.pageSize,...S.query}).then((e=>{var a;S.loading=!1,S.dataSource=e.data.items,1===S.pagination.current&&(S.pagination.total=+(null==(a=e.data)?void 0:a.count))}))},v=e=>{S.pagination={...S.pagination,...e},R()},C=e=>{S.query=e,S.pagination={...S.pagination,current:1},R()};return(e,a)=>{const t=o("Search"),h=y,b=m,f=o("BatchTable");return s(),i("div",null,[l(t,{"search-options":d(_),onOnSearch:C},null,8,["search-options"]),l(b,{"row-key":"id","data-source":d(S).dataSource,columns:d(j),scroll:{x:"max-content"},loading:d(S).loading,"row-selection":{selectedRowKeys:d(S).selectedRowKeys,onChange(e){d(S).selectedRowKeys=e}},pagination:d(S).pagination,onChange:v},{bodyCell:r((({column:e,record:a})=>["enabled"===e.key?(s(),c(h,{key:0,checked:a.enabled,"onUpdate:checked":e=>a.enabled=e,"un-checked-value":0,"checked-value":1,onChange:e=>(async e=>{await n.product.material.status({id:e.id,enabled:e.enabled}).catch((a=>{e.enabled=0===e.enabled?1:0}))})(a)},null,8,["checked","onUpdate:checked","onChange"])):u("",!0),"operate"===e.key?(s(),i(p,{key:1},[g("a",{download:"",href:a.submit_file}," 下载提交文件 ",8,k),g("a",{download:"",href:a.result_file}," 下载结果文件 ",8,w)],64)):u("",!0)])),_:1},8,["data-source","columns","loading","row-selection","pagination"]),d(S).dataSource.length?(s(),c(f,{key:0,batchs:d(S).batchs,"selected-row-keys":d(S).selectedRowKeys,onClick:x},null,8,["batchs","selected-row-keys"])):u("",!0)])}}});export{_ as default};
