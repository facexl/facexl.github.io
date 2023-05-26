import{d as e,i as a,r as i,m as l,o as n,l as o,$ as t,a as d,b as s,e as r,w as c,f as u,k as p,Z as _,M as g,F as m,n as v,p as h,q as f,z as y,s as k,I as b,A as w,V as x,W as C,E as I,_ as U,a0 as S,G as j,g as q,B as L,H as D,x as O}from"./index-c2ae2a0e.js";import{u as z,_ as N}from"./useTableColumns-dd067b4d.js";import"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as V}from"./index-ef11d20c.js";import{u as F,a as T}from"./useSearchItems-c7d75cf3.js";import{u as B}from"./usePagination-c05046ed.js";import{_ as A}from"./index-f5618084.js";import{_ as R}from"./index-975d3375.js";import{_ as E}from"./Upload-053b6740.js";import{d as M}from"./index-a09a23de.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";import"./index-b1df7cdb.js";import"./index-00d344de.js";import"./DeleteOutlined-1e1ff134.js";const $=U(e({__name:"NewSupplier",props:{show:Boolean,id:Number},emits:["fresh"],setup(e,{emit:U}){const S=e,j=a(S,"show",U),q=i(),L={required:!0,message:"请输入"},D=l({proviceList:[{name:"",code:""}],cityList:[{name:"",code:""}],districtList:[{name:"",code:""}],loading:!1}),O=l({name:"",phone:"",password:void 0,en_code:void 0,num_code:void 0,receiver_name:void 0,receiver_phone:void 0,receiver_province_code:void 0,receiver_city_code:void 0,receiver_district_code:void 0,receiver_address:void 0,qualification:void 0});n((()=>{D.proviceList=[],D.cityList=[],D.districtList=[],z(1,void 0)})),o(j,(e=>{e&&(q.value&&q.value.resetFields(),S.id&&(D.loading=!0,t.productConfig.supplier.detail({id:S.id}).then((e=>{for(let a in O)void 0!==e.data[a]&&(O[a]=e.data[a]);setTimeout((e=>{D.loading=!1}),50)}))))})),o((()=>O.receiver_province_code),(e=>{e&&z(2,e),D.loading||(O.receiver_city_code=void 0,O.receiver_district_code=void 0)})),o((()=>O.receiver_city_code),(e=>{e&&z(3,e),D.loading||(O.receiver_district_code=void 0)}));const z=(e,a)=>{let i=(e=>{let a="provice";return 2===e&&(a="city"),3===e&&(a="district"),a})(e);t.common.getAreaList({level:e,code:a,is_select:1}).then((e=>{D[i+"List"]=e.data}))},N=()=>{q.value.validate().then((async e=>/^[A-Za-z]+$/.test(e.en_code)?/^\d+$/.test(e.num_code)?(await t.productConfig.supplier[S.id?"edit":"add"]({...e,id:S.id||void 0}),j.value=!1,void U("fresh")):_.error("请输入正确的数字！"):_.error("请输入正确的字母！"))).catch((e=>{console.log(e)}))};return(a,i)=>{const l=b,n=w,o=x,t=C,_=A,U=I,S=g;return d(),s("div",null,[r(S,{visible:u(j),"onUpdate:visible":i[12]||(i[12]=e=>p(j)?j.value=e:null),width:"1000px",title:e.id?"编辑供应商":"添加供应商","mask-closable":!1,onOk:N},{default:c((()=>[r(U,{ref_key:"formRef",ref:q,model:u(O),autocomplete:"off"},{default:c((()=>[r(n,{name:"name",label:"供应商名称",rules:[L]},{default:c((()=>[r(l,{value:u(O).name,"onUpdate:value":i[0]||(i[0]=e=>u(O).name=e),style:{width:"418px"},placeholder:"请输入供应商名称"},null,8,["value"])])),_:1},8,["rules"]),r(n,{name:"phone",label:"手机号",rules:[L]},{default:c((()=>[r(l,{value:u(O).phone,"onUpdate:value":i[1]||(i[1]=e=>u(O).phone=e),style:{width:"418px"},placeholder:"请输入手机号"},null,8,["value"])])),_:1},8,["rules"]),r(n,{name:"password",label:"密码设置"},{default:c((()=>[r(l,{value:u(O).password,"onUpdate:value":i[2]||(i[2]=e=>u(O).password=e),style:{width:"200px"},maxlength:25,placeholder:"请输入密码"},null,8,["value"])])),_:1}),r(n,{name:"en_code",label:"供应商编码",class:"float-item",rules:[L]},{default:c((()=>[r(l,{value:u(O).en_code,"onUpdate:value":i[3]||(i[3]=e=>u(O).en_code=e),style:{width:"200px"},maxlength:20,placeholder:"字母"},null,8,["value"])])),_:1},8,["rules"]),r(n,{name:"num_code",label:" ",class:"no-label-colon","label-col":{span:1},rules:[L]},{default:c((()=>[r(l,{value:u(O).num_code,"onUpdate:value":i[4]||(i[4]=e=>u(O).num_code=e),maxlength:20,style:{width:"200px"},placeholder:"数字"},null,8,["value"])])),_:1},8,["rules"]),r(n,{name:"receiver_name",label:"退换货地址",class:"float-item"},{default:c((()=>[r(l,{value:u(O).receiver_name,"onUpdate:value":i[5]||(i[5]=e=>u(O).receiver_name=e),style:{width:"200px"},placeholder:"请输入联系人姓名"},null,8,["value"])])),_:1}),r(n,{name:"receiver_phone",label:" ",class:"no-label-colon","label-col":{span:1}},{default:c((()=>[r(l,{value:u(O).receiver_phone,"onUpdate:value":i[6]||(i[6]=e=>u(O).receiver_phone=e),style:{width:"200px"},placeholder:"请输入联系人手机号"},null,8,["value"])])),_:1}),r(n,{name:"receiver_province_code",label:" ",class:"no-label-colon float-item"},{default:c((()=>[r(t,{value:u(O).receiver_province_code,"onUpdate:value":i[7]||(i[7]=e=>u(O).receiver_province_code=e),style:{width:"140px"},placeholder:"省","allow-clear":""},{default:c((()=>[(d(!0),s(m,null,v(u(D).proviceList,(e=>(d(),h(o,{key:e.code},{default:c((()=>[f(y(e.name),1)])),_:2},1024)))),128))])),_:1},8,["value"])])),_:1}),r(n,{name:"receiver_city_code",label:" ",class:"no-label-colon float-item","label-col":{span:1}},{default:c((()=>[r(t,{value:u(O).receiver_city_code,"onUpdate:value":i[8]||(i[8]=e=>u(O).receiver_city_code=e),style:{width:"140px"},placeholder:"市","allow-clear":""},{default:c((()=>[(d(!0),s(m,null,v(u(D).cityList,(e=>(d(),h(o,{key:e.code},{default:c((()=>[f(y(e.name),1)])),_:2},1024)))),128))])),_:1},8,["value"])])),_:1}),r(n,{name:"receiver_district_code",label:" ",class:"no-label-colon","label-col":{span:1}},{default:c((()=>[r(t,{value:u(O).receiver_district_code,"onUpdate:value":i[9]||(i[9]=e=>u(O).receiver_district_code=e),style:{width:"140px","margin-left":"-109px"},placeholder:"区","allow-clear":""},{default:c((()=>[(d(!0),s(m,null,v(u(D).districtList,(e=>(d(),h(o,{key:e.code},{default:c((()=>[f(y(e.name),1)])),_:2},1024)))),128))])),_:1},8,["value"])])),_:1}),r(n,{name:"receiver_address",label:" ",class:"no-label-colon"},{default:c((()=>[r(l,{value:u(O).receiver_address,"onUpdate:value":i[10]||(i[10]=e=>u(O).receiver_address=e),style:{width:"418px"},placeholder:"请输入详细地址"},null,8,["value"])])),_:1}),r(n,{name:"qualification",label:"店铺资质"},{default:c((()=>[u(j)?(d(),h(_,{key:0,value:u(O).qualification,"onUpdate:value":i[11]||(i[11]=e=>u(O).qualification=e),"show-upload-video":!1},null,8,["value"])):k("",!0)])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])])}}}),[["__scopeId","data-v-952048cf"]]),G=["href"],Z={key:1},H=q("div",{class:"tips"}," 图片：jpg、png、jpeg，压缩文件：rar、zip ",-1),P=e({__name:"SignManageDialog",props:{show:Boolean,id:Number},emits:[],setup(e,{emit:_}){const v=e;S("enums");const x=a(v,"show",_),C=i(),U={required:!0,message:"请输入"},q=F([]),D=l({dataSource:[],loading:!1,pagination:B(),query:{},editVisible:!1,confirmLoading:!1,form:{license_name:"",off_line_res:void 0}});o(x,(e=>{e&&T()})),o((()=>D.editVisible),(e=>{e&&(C.value&&C.value.resetFields(),A())}));const O=z([["协议ID","id"],["商家名称","supplier_name"],["签约主体/个人","license_name"],["是否签约","e_sign_status"],["签约下载","sign_url"],["协议开关","status"],["签约时间","sign_time"],["操作","operate",130]]);n((()=>{}));const T=()=>{D.loading=!0,t.productConfig.supplier.signList({page:D.pagination.current,page_size:D.pagination.pageSize,...D.query,supplier_id:v.id}).then((e=>{var a;D.loading=!1,D.dataSource=e.data.items,1===D.pagination.current&&(D.pagination.total=+(null==(a=e.data)?void 0:a.count))}))},A=()=>{D.handlingId&&t.productConfig.supplier.signDetail({...D.query,id:D.handlingId}).then((e=>{for(let a in D.form)D.form[a]=e.data[a]}))},$=e=>{D.pagination={...D.pagination,...e},T()},P=e=>{D.query=e,D.pagination={...D.pagination,current:1},T()},W=async e=>{C.value.validate().then((async e=>{D.confirmLoading=!0,await t.productConfig.supplier[D.handlingId?"signEdit":"signAdd"]({...e,id:D.handlingId||void 0,supplier_id:D.handlingId?void 0:v.id}),D.confirmLoading=!1,D.editVisible=!1,T()})).catch((e=>{console.log(e)}))};return(e,a)=>{const i=L,l=j("Search"),n=V,o=N,_=b,v=w,S=E,z=I,F=g,B=R;return d(),h(B,{visible:u(x),"onUpdate:visible":a[4]||(a[4]=e=>p(x)?x.value=e:null),title:"弹窗统计",placement:"right",width:"80%"},{default:c((()=>[r(l,{"search-options":u(q),onOnSearch:P},{default:c((()=>[r(i,{type:"primary",plain:"",onClick:a[0]||(a[0]=e=>{u(D).handlingId=0,u(D).editVisible=!0})},{default:c((()=>[f(" 添加线下签约 ")])),_:1})])),_:1},8,["search-options"]),r(o,{"row-key":"id","data-source":u(D).dataSource,columns:u(O),scroll:{x:"max-content"},loading:u(D).loading,pagination:u(D).pagination,onChange:$},{bodyCell:c((({column:e,record:a})=>["e_sign_status"===e.key?(d(),s(m,{key:0},[f(y(1==+a.e_sign_status?"未签约":3==+a.e_sign_status?"线下签约":"线上签约"),1)],64)):k("",!0),"sign_url"===e.key?(d(),s(m,{key:1},[a.sign_url?(d(),s("a",{key:0,href:a.sign_url,target:"_blank"},"下载",8,G)):(d(),s("span",Z,"无"))],64)):k("",!0),"status"===e.key?(d(),h(n,{key:2,checked:a.status,"onUpdate:checked":e=>a.status=e,"un-checked-value":0,"checked-value":1,onChange:e=>(async e=>{await t.productConfig.supplier.signStatus({id:e.id,status:e.status}).catch((a=>{e.status=0===e.status?1:0}))})(a)},null,8,["checked","onUpdate:checked","onChange"])):k("",!0),"operate"===e.key?(d(),s(m,{key:3},[1!==a.status?(d(),h(i,{key:0,type:"link",onClick:e=>{u(D).handlingId=a.id,u(D).editVisible=!0}},{default:c((()=>[f(" 编辑 ")])),_:2},1032,["onClick"])):k("",!0),r(i,{type:"link",class:"danger-color",onClick:e=>{return i=a.id,void M.confirm({title:"提示",content:"确认删除？",okText:"确认",cancelText:"取消",onOk:async()=>{await t.productConfig.supplier.signDel({id:i}),T()}});var i}},{default:c((()=>[f(" 删除 ")])),_:2},1032,["onClick"])],64)):k("",!0)])),_:1},8,["data-source","columns","loading","pagination"]),r(F,{visible:u(D).editVisible,"onUpdate:visible":a[3]||(a[3]=e=>u(D).editVisible=e),title:u(D).handlingId?"编辑线下签约":"新增线下签约","mask-closable":!1,width:"500px","confirm-loading":u(D).confirmLoading,onOk:W},{default:c((()=>[r(z,{ref_key:"formRef",ref:C,model:u(D).form,"label-width":"100px"},{default:c((()=>[r(v,{label:"主体名称",name:"license_name",rules:U},{default:c((()=>[r(_,{value:u(D).form.license_name,"onUpdate:value":a[1]||(a[1]=e=>u(D).form.license_name=e)},null,8,["value"])])),_:1}),r(v,{label:"协议上传",name:"off_line_res",rules:U},{default:c((()=>[r(S,{filelist:u(D).form.off_line_res,"onUpdate:filelist":a[2]||(a[2]=e=>u(D).form.off_line_res=e),accept:""},null,8,["filelist"]),H])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title","confirm-loading"])])),_:1},8,["visible"])}}}),W={key:1},J=e({__name:"SupplierManage",setup(e){const a=F([["input","name","供应商名称"],["input","full_code","供应商编码"],["select","enabled","状态"],["dateRange","start_at-end_at",["注册时间开始","注册时间结束"]]]),i=z([["供应商ID","id"],["供应商名称","name"],["供应商编码","full_code"],["手机号","phone"],["上架商品数","goods_num"],["销量","sale_num"],["订单量","order_num"],["订单金额","order_amount"],["入驻协议签署","sign_name"],["状态","enabled"],["注册时间","created_at"],["操作","operate",220,"right"]]),o=l({handlingId:0,dataSource:[],loading:!1,query:{},pagination:B(),showNewDialog:!1,showSignDialog:!1,handlingInfo:{}});n((()=>{p()}));const p=()=>{o.loading=!0,t.productConfig.supplier.list({page:o.pagination.current,page_size:o.pagination.pageSize,...o.query}).then((e=>{var i,l,n;o.loading=!1,o.dataSource=e.data.items,o.pagination.total=+(null==(i=e.data)?void 0:i.count)>0?+(null==(l=e.data)?void 0:l.count):+(null==(n=null==o?void 0:o.pagination)?void 0:n.total),T(a,"enabled",e.data.enabled_map)}))},_=e=>{o.pagination={...o.pagination,...e},p()},g=e=>{o.query=e,o.pagination={...o.pagination,current:1},p()};return(e,l)=>{const n=L,m=j("Export"),v=j("Search"),y=V,b=N,w=D("permission");return d(),s("div",null,[r(v,{"search-options":u(a),onOnSearch:g},{default:c((()=>[O((d(),h(n,{type:"primary",onClick:l[0]||(l[0]=e=>{u(o).handlingId=0,u(o).handlingInfo={},u(o).showNewDialog=!0})},{default:c((()=>[f(" 添加 ")])),_:1})),[[w,[u(t).productConfig.supplier.add]]]),O(r(m,{api:u(t).productConfig.supplier.export,query:{...u(o).query}},null,8,["api","query"]),[[w,[u(t).productConfig.supplier.export]]])])),_:1},8,["search-options"]),r(b,{"data-source":u(o).dataSource,columns:u(i),scroll:{x:"max-content"},loading:u(o).loading,pagination:u(o).pagination,onChange:_},{bodyCell:c((({column:e,record:a})=>["enabled"===e.key?(d(),h(y,{key:0,checked:a.enabled,"onUpdate:checked":e=>a.enabled=e,"un-checked-value":0,"checked-value":1,onChange:e=>(async e=>{await t.productConfig.supplier.status({id:e.id}).catch((a=>{e.enabled=1===e.enabled?0:1}))})(a)},null,8,["checked","onUpdate:checked","onChange"])):k("",!0),"operate"===e.key?(d(),s("div",W,[O((d(),h(n,{type:"link",onClick:e=>{u(o).handlingId=a.id,u(o).handlingInfo=a,u(o).showSignDialog=!0}},{default:c((()=>[f(" 协议管理 ")])),_:2},1032,["onClick"])),[[w,[u(t).productConfig.supplier.edit]]]),O((d(),h(n,{type:"link",onClick:e=>{u(o).handlingId=a.id,u(o).handlingInfo=a,u(o).showNewDialog=!0}},{default:c((()=>[f(" 编辑 ")])),_:2},1032,["onClick"])),[[w,[u(t).productConfig.supplier.edit]]]),O((d(),h(n,{type:"link",class:"danger-color",onClick:e=>{return i=a.id,void M.confirm({title:"提示",content:"确认删除该供应商？",okText:"确认",cancelText:"取消",onOk:()=>{t.productConfig.supplier.delete({id:i}).then((e=>{p()}))}});var i}},{default:c((()=>[f(" 删除 ")])),_:2},1032,["onClick"])),[[w,[u(t).productConfig.supplier.delete]]])])):k("",!0)])),_:1},8,["data-source","columns","loading","pagination"]),r($,{id:u(o).handlingId,show:u(o).showNewDialog,"onUpdate:show":l[1]||(l[1]=e=>u(o).showNewDialog=e),"handling-info":u(o).handlingInfo,onFresh:p},null,8,["id","show","handling-info"]),r(P,{id:u(o).handlingId,show:u(o).showSignDialog,"onUpdate:show":l[2]||(l[2]=e=>u(o).showSignDialog=e),onFresh:p},null,8,["id","show"])])}}});export{J as default};
