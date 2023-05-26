import{d as e,i as a,r as n,m as o,o as i,l,a as t,b as d,e as s,w as r,f as c,k as u,$ as p,M as m,q as g,I as h,A as f,a7 as v,E as _,_ as b,G as k,H as w,x,p as y,s as C,B as j}from"./index-c2ae2a0e.js";import{u as I,_ as S}from"./useTableColumns-dd067b4d.js";import{R as U,_ as N}from"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as O}from"./index-ef11d20c.js";import{u as q,a as D}from"./useSearchItems-c7d75cf3.js";import{u as B}from"./usePagination-c05046ed.js";import{_ as T}from"./Upload-053b6740.js";import{d as F}from"./index-a09a23de.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";import"./index-b1df7cdb.js";import"./index-00d344de.js";import"./DeleteOutlined-1e1ff134.js";const R=b(e({__name:"NewService",props:{show:Boolean,id:Number},emits:["fresh"],setup(e,{emit:b}){const k=e,w=a(k,"show",b),x=n(),y={required:!0,message:"请输入"},C=o({loading:!1}),j=o({name:"",icon:"",sort:"",description:"",enabled:0});i((()=>{})),l(w,(e=>{e&&(x.value&&x.value.resetFields(),k.id&&(C.loading=!0,p.productConfig.service.detail({id:k.id}).then((e=>{for(let a in j)void 0!==e.data[a]&&(j[a]=e.data[a]);setTimeout((e=>{C.loading=!1}),50)}))))}));const I=()=>{x.value.validate().then((async e=>{await p.productConfig.service[k.id?"edit":"add"]({...e,id:k.id||void 0}),w.value=!1,b("fresh")})).catch((e=>{console.log(e)}))};return(a,n)=>{const o=h,i=f,l=T,p=v,b=U,k=N,C=_,S=m;return t(),d("div",null,[s(S,{visible:c(w),"onUpdate:visible":n[5]||(n[5]=e=>u(w)?w.value=e:null),width:"600px",title:e.id?"编辑服务":"添加服务","mask-closable":!1,onOk:I},{default:r((()=>[s(C,{ref_key:"formRef",ref:x,model:c(j),autocomplete:"off","label-col":{span:5},"wrapper-col":{span:18}},{default:r((()=>[s(i,{name:"name",label:"服务名称",rules:[y]},{default:r((()=>[s(o,{value:c(j).name,"onUpdate:value":n[0]||(n[0]=e=>c(j).name=e),placeholder:"请输入服务名称",maxlength:10},null,8,["value"])])),_:1},8,["rules"]),s(i,{name:"icon",label:"服务icon"},{default:r((()=>[s(l,{filelist:c(j).icon,"max-count":1,onOnChange:n[1]||(n[1]=e=>{return a=e,void(j["icon"]=a);var a})},null,8,["filelist"])])),_:1}),s(i,{name:"description",label:"服务描述",rules:[y]},{default:r((()=>[s(p,{value:c(j).description,"onUpdate:value":n[2]||(n[2]=e=>c(j).description=e),placeholder:"请输入服务描述",style:{height:"100px"},maxlength:300},null,8,["value"])])),_:1},8,["rules"]),s(i,{name:"sort",label:"排序值",rules:[y]},{default:r((()=>[s(o,{value:c(j).sort,"onUpdate:value":n[3]||(n[3]=e=>c(j).sort=e),placeholder:"请输入排序值"},null,8,["value"])])),_:1},8,["rules"]),s(i,{name:"enabled",label:"是否启用"},{default:r((()=>[s(k,{value:c(j).enabled,"onUpdate:value":n[4]||(n[4]=e=>c(j).enabled=e)},{default:r((()=>[s(b,{value:1},{default:r((()=>[g(" 是 ")])),_:1}),s(b,{value:0},{default:r((()=>[g(" 否 ")])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])])}}}),[["__scopeId","data-v-1ee6c796"]]),z=["src"],G={key:2},M=e({__name:"ServiceManage",setup(e){const a=q([]),n=I([["编号","id"],["服务icon","icon"],["服务名称","name"],["排序值","sort"],["服务描述","description"],["状态","enabled"],["操作","operate",130,"right"]]),l=o({handlingId:0,dataSource:[],loading:!1,query:{},pagination:B(),showNewDialog:!1,handlingInfo:{}});i((()=>{u()}));const u=()=>{l.loading=!0,p.productConfig.service.list({page:l.pagination.current,page_size:l.pagination.pageSize,...l.query}).then((e=>{var n;l.loading=!1,l.dataSource=e.data.items,1===l.pagination.current&&(l.pagination.total=+(null==(n=e.data)?void 0:n.count)),D(a,"enabled",e.data.enabled_map)}))},m=e=>{l.pagination={...l.pagination,...e},u()},h=e=>{l.query=e,l.pagination={...l.pagination,current:1},u()};return(e,o)=>{const i=j,f=k("Search"),v=O,_=S,b=w("permission");return t(),d("div",null,[s(f,{"search-options":c(a),onOnSearch:h},{default:r((()=>[x((t(),y(i,{type:"primary",onClick:o[0]||(o[0]=e=>{c(l).handlingId=0,c(l).handlingInfo={},c(l).showNewDialog=!0})},{default:r((()=>[g(" 添加 ")])),_:1})),[[b,[c(p).productConfig.service.add]]])])),_:1},8,["search-options"]),s(_,{"data-source":c(l).dataSource,columns:c(n),scroll:{x:"max-content"},loading:c(l).loading,pagination:c(l).pagination,onChange:m},{bodyCell:r((({column:e,record:a})=>["icon"===e.key?(t(),d("img",{key:0,style:{width:"70px"},src:a.icon},null,8,z)):C("",!0),"enabled"===e.key?(t(),y(v,{key:1,checked:a.enabled,"onUpdate:checked":e=>a.enabled=e,"un-checked-value":0,"checked-value":1,onChange:e=>(async e=>{await p.productConfig.service.status({id:e.id,enabled:e.enabled}).catch((a=>{e.enabled=1===e.enabled?0:1}))})(a)},null,8,["checked","onUpdate:checked","onChange"])):C("",!0),"operate"===e.key?(t(),d("div",G,[x((t(),y(i,{type:"link",onClick:e=>{c(l).handlingId=a.id,c(l).handlingInfo=a,c(l).showNewDialog=!0}},{default:r((()=>[g(" 编辑 ")])),_:2},1032,["onClick"])),[[b,[c(p).productConfig.service.edit]]]),x((t(),y(i,{type:"link",class:"danger-color",onClick:e=>{return n=a.id,void F.confirm({title:"提示",content:"确认删除该服务？",okText:"确认",cancelText:"取消",onOk:()=>{p.productConfig.service.delete({ids:n+""}).then((e=>{u()}))}});var n}},{default:r((()=>[g(" 删除 ")])),_:2},1032,["onClick"])),[[b,[c(p).productConfig.service.delete]]])])):C("",!0)])),_:1},8,["data-source","columns","loading","pagination"]),s(R,{id:c(l).handlingId,show:c(l).showNewDialog,"onUpdate:show":o[1]||(o[1]=e=>c(l).showNewDialog=e),"handling-info":c(l).handlingInfo,onFresh:u},null,8,["id","show","handling-info"])])}}});export{M as default};
