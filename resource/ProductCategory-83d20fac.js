import{d as e,i as a,r as t,m as n,o as l,l as o,a as i,b as d,e as s,w as r,f as u,k as c,$ as p,M as g,F as m,n as h,p as f,q as v,z as y,V as b,W as _,A as k,I as w,E as C,a3 as I,a4 as x,g as j,_ as D,G as U,H as K,s as N,x as S,B as O}from"./index-c2ae2a0e.js";import{u as q,b as A,_ as B}from"./useTableColumns-dd067b4d.js";import{R as F,_ as T}from"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as z}from"./index-ef11d20c.js";import{u as R,a as G}from"./useSearchItems-c7d75cf3.js";import{u as P}from"./usePagination-c05046ed.js";import{_ as E}from"./Upload-053b6740.js";import{d as H}from"./index-a09a23de.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";import"./index-b1df7cdb.js";import"./index-00d344de.js";import"./DeleteOutlined-1e1ff134.js";const M=(e=>(I("data-v-7dab6918"),e=e(),x(),e))((()=>j("div",{class:"tips"}," 不选择分类默认为顶级分类 ",-1))),V=D(e({__name:"NewCategory",props:{show:Boolean,id:Number,handlingInfo:{type:Object,default:()=>{}},treeData:Array},emits:["fresh"],setup(e,{emit:I}){const x=e,j=a(x,"show",I),D=t(),U={required:!0,message:"请输入"};n({});const K=n({pid:"",name:"",sort:"",thumb:"",display:1});l((()=>{})),o(j,(e=>{e&&(D.value&&D.value.resetFields(),setTimeout((e=>{for(let a in K)void 0!==x.handlingInfo[a]&&(K[a]=x.handlingInfo[a])}),200))}));const N=()=>{D.value.validate().then((async e=>{let a="add";x.id&&(a="edit"),e.pid||(e.pid=0),await p.productConfig.category[a]({...e,id:x.id||void 0}),j.value=!1,I("fresh")})).catch((e=>{console.log(e)}))};return(a,t)=>{const n=b,l=_,o=k,p=w,I=E,S=F,O=T,q=C,A=g;return i(),d("div",null,[s(A,{visible:u(j),"onUpdate:visible":t[6]||(t[6]=e=>c(j)?j.value=e:null),width:"550px",title:e.id?"编辑下级":"添加下级","mask-closable":!1,onOk:N},{default:r((()=>[s(q,{ref_key:"formRef",ref:D,model:u(K),autocomplete:"off","label-col":{span:6},"wrapper-col":{span:14}},{default:r((()=>[s(o,{name:"pid",label:"上级分类"},{default:r((()=>[s(l,{value:u(K).pid,"onUpdate:value":t[0]||(t[0]=e=>u(K).pid=e)},{default:r((()=>[(i(!0),d(m,null,h(x.treeData||[],(e=>(i(),f(n,{key:e.id},{default:r((()=>[v(y(e.name),1)])),_:2},1024)))),128))])),_:1},8,["value"]),M])),_:1}),s(o,{name:"name",label:"分类名称",rules:[U]},{default:r((()=>[s(p,{value:u(K).name,"onUpdate:value":t[1]||(t[1]=e=>u(K).name=e)},null,8,["value"])])),_:1},8,["rules"]),s(o,{label:"商品数量"},{default:r((()=>[s(p,{value:e.handlingInfo.num,"onUpdate:value":t[2]||(t[2]=a=>e.handlingInfo.num=a),disabled:!0},null,8,["value"])])),_:1}),s(o,{name:"sort",label:"排序",rules:[U]},{default:r((()=>[s(p,{value:u(K).sort,"onUpdate:value":t[3]||(t[3]=e=>u(K).sort=e)},null,8,["value"])])),_:1},8,["rules"]),s(o,{name:"thumb",label:"分类图片"},{default:r((()=>[s(I,{filelist:u(K).thumb,"onUpdate:filelist":t[4]||(t[4]=e=>u(K).thumb=e)},null,8,["filelist"])])),_:1}),s(o,{name:"display",label:"是否显示"},{default:r((()=>[s(O,{value:u(K).display,"onUpdate:value":t[5]||(t[5]=e=>u(K).display=e)},{default:r((()=>[s(S,{value:1},{default:r((()=>[v(" 是 ")])),_:1}),s(S,{value:0},{default:r((()=>[v(" 否 ")])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])])}}}),[["__scopeId","data-v-7dab6918"]]),W={class:"content-row"},$={class:"left"},J={class:"right"},L=["src"],Q={key:2},X=D(e({__name:"ProductCategory",setup(e){const a=t(!0),o=t(!1),c=R([["input","cate_name","分类名称"],["select","enabled","状态"]]),g=q([["编号","id"],["分类名称","name"],["分类图片","thumb"],["商品数量","num"],["是否启用","enabled"],["排序","sort"],["操作","operate",200,"right"]]);const m=n({handlingId:0,dataSource:[],loading:!1,query:{},pagination:P(),treeData:[],treeDataAll:[],selectedKeys:[],showNewDialog:!1,handlingInfo:{}});l((()=>{h(!0)}));const h=(e=!1)=>{m.loading=!0,p.productConfig.category.list({page:m.pagination.current,page_size:m.pagination.pageSize,...m.query,cate_id:m.selectedKeys.length?m.selectedKeys[0]:void 0}).then((e=>{var a;m.dataSource=e.data.items,1===m.pagination.current&&(m.pagination.total=+(null==(a=e.data)?void 0:a.count)),G(c,"enabled",e.data.enabled_map)})),p.productConfig.category.tree({}).then((e=>{m.loading=!1,m.treeDataAll=[{id:"",level:1,name:"全部",pid:0},...e.data.categories],m.treeData=e.data.categories}))},y=e=>{m.pagination={...m.pagination,...e},h()},b=()=>{m.pagination={...m.pagination,current:1},h()},_=e=>{m.query=e,m.pagination={...m.pagination,current:1},h()};return(e,t)=>{const n=O,l=U("Search"),k=A,w=z,C=B,I=K("permission");return i(),d("div",null,[s(l,{"search-options":u(c),onOnSearch:_},{default:r((()=>[S((i(),f(n,{type:"primary",onClick:t[0]||(t[0]=e=>{u(m).handlingId=0,u(m).handlingInfo={},u(m).showNewDialog=!0})},{default:r((()=>[v(" 添加 ")])),_:1})),[[I,[u(p).productConfig.category.add]]])])),_:1},8,["search-options"]),j("div",W,[j("div",$,[u(m).treeDataAll.length?(i(),f(k,{key:0,selectedKeys:u(m).selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=e=>u(m).selectedKeys=e),"show-line":u(a),"show-icon":u(o),"tree-data":u(m).treeDataAll,"default-expand-all":!0,"field-names":{children:"children",title:"name",key:"id"},onSelect:b},null,8,["selectedKeys","show-line","show-icon","tree-data"])):N("",!0)]),j("div",J,[s(C,{"data-source":u(m).dataSource,columns:u(g),scroll:{x:"max-content"},loading:u(m).loading,pagination:u(m).pagination,onChange:y},{bodyCell:r((({column:e,record:a})=>["thumb"===e.key?(i(),d("img",{key:0,style:{width:"60px"},src:a.thumb},null,8,L)):N("",!0),"enabled"===e.key?(i(),f(w,{key:1,checked:a.enabled,"onUpdate:checked":e=>a.enabled=e,"un-checked-value":0,"checked-value":1,onChange:e=>(async e=>{await p.productConfig.category.status({cate_id:e.id,enabled:e.enabled}).catch((a=>{e.enabled=1===e.enabled?0:1}))})(a)},null,8,["checked","onUpdate:checked","onChange"])):N("",!0),"operate"===e.key?(i(),d("div",Q,[2!==a.level?S((i(),f(n,{key:0,type:"link",onClick:e=>{return t=a.id,m.handlingId=0,m.handlingInfo={pid:t},void(m.showNewDialog=!0);var t}},{default:r((()=>[v(" 新增下级 ")])),_:2},1032,["onClick"])),[[I,[u(p).productConfig.category.add]]]):N("",!0),S((i(),f(n,{type:"link",onClick:e=>(e=>{m.handlingId=e.id,m.handlingInfo={...e,pid:0===e.pid?"":e.pid},m.showNewDialog=!0})(a)},{default:r((()=>[v(" 编辑 ")])),_:2},1032,["onClick"])),[[I,[u(p).productConfig.category.edit]]]),S((i(),f(n,{type:"link",class:"danger-color",onClick:e=>{return t=a.id,void H.confirm({title:"提示",content:"确认删除该分类？",okText:"确认",cancelText:"取消",onOk:()=>{p.productConfig.category.delete({id:t}).then((e=>{h()}))}});var t}},{default:r((()=>[v(" 删除 ")])),_:2},1032,["onClick"])),[[I,[u(p).productConfig.category.delete]]])])):N("",!0)])),_:1},8,["data-source","columns","loading","pagination"])])]),s(V,{id:u(m).handlingId,show:u(m).showNewDialog,"onUpdate:show":t[2]||(t[2]=e=>u(m).showNewDialog=e),"handling-info":u(m).handlingInfo,"tree-data":u(m).treeData,onFresh:h},null,8,["id","show","handling-info","tree-data"])])}}}),[["__scopeId","data-v-6f2e8bdc"]]);export{X as default};
