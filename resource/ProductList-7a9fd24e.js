import{e,as as a,d as t,i as l,r as s,l as n,m as o,a as i,b as r,w as d,f as u,k as p,a6 as c,$ as _,M as m,X as f,A as h,E as g,c as b,g as y,F as v,n as w,z as k,p as x,q as D,s as C,B as j,_ as U,c8 as S,C as Y,D as A,S as I,a0 as H,aY as O,G as R,H as M,x as K,T,J as q,K as B,v as F,a7 as N,L as P,N as $,O as z}from"./index-c2ae2a0e.js";import{u as L,_ as E}from"./useTableColumns-dd067b4d.js";import"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as J}from"./index-8036da2a.js";import{_ as V}from"./index-00d344de.js";import{u as G,a as X}from"./useSearchItems-c7d75cf3.js";import{u as Q}from"./usePagination-c05046ed.js";import{d as W,e as Z}from"./useRequest-34a5e624.js";import{d as ee}from"./index-a09a23de.js";import{_ as ae}from"./index-975d3375.js";import{C as te}from"./index-1dfc023a.js";import{D as le,_ as se}from"./index-923a8554.js";import{g as ne}from"./skuUtils-7dd5177b.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";import"./dtool-b3945d0c.js";const oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"}}]},name:"form",theme:"outlined"};function ie(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?Object(arguments[a]):{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),l.forEach((function(a){re(e,a,t[a])}))}return e}function re(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var de=function(t,l){var s=ie({},t,l.attrs);return e(a,ie({},s,{icon:oe}),null)};de.displayName="FormOutlined",de.inheritAttrs=!1;const ue=de,pe=t({__name:"UpDownModal",props:{show:Boolean,id:Number,batchUpStatus:Number},emits:["fresh"],setup(a,{emit:t}){const b=a,y={0:"批量下架",1:"批量预上架",10:"批量上架","-1":"上下架控制"},v=l(b,"show",t),w=s();n(v,(e=>{e&&w.value&&w.value.resetFields()}));const k=o({date:[]}),x=()=>{w.value.validate().then((async e=>{const a={start_at:c(e.date[0]).format("YYYY-MM-DD HH:mm:ss"),end_at:c(e.date[1]).format("YYYY-MM-DD HH:mm:ss")};Array.isArray(b.id)?await _.product.goods.batchStatus({...a,ids:b.id.join(","),goal_status:b.batchUpStatus}):await _.product.goods.status({...a,id:b.id}),v.value=!1,t("fresh")})).catch((e=>{console.log(e)}))};return(t,l)=>{const s=f,n=h,o=g,c=m;return i(),r("div",null,[e(c,{visible:u(v),"onUpdate:visible":l[1]||(l[1]=e=>p(v)?v.value=e:null),width:"600px",title:y[a.batchUpStatus],onOk:x},{default:d((()=>[e(o,{ref_key:"formRef",ref:w,model:u(k),autocomplete:"off","label-col":{span:4},"wrapper-col":{span:20}},{default:d((()=>[e(n,{name:"date",label:"上下架时间"},{default:d((()=>[e(s,{value:u(k).date,"onUpdate:value":l[0]||(l[0]=e=>u(k).date=e),"show-time":{format:"HH:mm:ss"},format:"YYYY-MM-DD HH:mm:ss",placeholder:["选择开始时间","选择结束时间"]},null,8,["value"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible","title"])])}}}),ce=t({__name:"ResetAddress",props:{show:Boolean,id:Number},emits:["fresh"],setup(a,{emit:t}){const b=a,y=l(b,"show",t),v=s();n(y,(e=>{e&&v.value&&v.value.resetFields()}));const w=o({date:[]}),k=()=>{v.value.validate().then((async e=>{await _.product.goods.resetAddress({start_at:c(e.date[0]).format("YYYY-MM-DD HH:mm:ss"),end_at:c(e.date[1]).format("YYYY-MM-DD HH:mm:ss"),goods_id:b.id}),y.value=!1,t("fresh")})).catch((e=>{console.log(e)}))};return(a,t)=>{const l=f,s=h,n=g,o=m;return i(),r("div",null,[e(o,{visible:u(y),"onUpdate:visible":t[1]||(t[1]=e=>p(y)?y.value=e:null),width:"600px",title:"同步退货地址",onOk:k},{default:d((()=>[e(n,{ref_key:"formRef",ref:v,model:u(w),autocomplete:"off","label-col":{span:4},"wrapper-col":{span:20}},{default:d((()=>[e(s,{name:"date",label:"订单时间"},{default:d((()=>[e(l,{value:u(w).date,"onUpdate:value":t[0]||(t[0]=e=>u(w).date=e),"show-time":{format:"HH:mm:ss"},format:"YYYY-MM-DD HH:mm:ss",placeholder:["选择开始时间","选择结束时间"]},null,8,["value"])])),_:1})])),_:1},8,["model"])])),_:1},8,["visible"])])}}}),_e={class:"item-container"},me=U(t({__name:"SkuTableShow",props:{data:Array},setup(e){const a=e,t=[{name:"成本价",key:"cost_price"},{name:"会员价",key:"shop_price"},{name:"桔掌柜价",key:"store_price"},{name:"优秀桔掌柜价",key:"partner_price"},{name:"库存",key:"stock_num"},{name:"销量",key:"sale_num"}],l=o({limit:15,tableData:[],showTableData:[],columns:[],isAll:!1}),s=b((()=>l.isAll?l.tableData:l.tableData.slice(0,l.limit)));return n((()=>a.data),(e=>{l.columns=e[0].properties_name.split(/,|:/).filter(((e,a)=>a%2==0)).map((e=>({name:e,key:e}))).concat(t),l.tableData=null==e?void 0:e.map((e=>({...e,...e.properties_name.split(",").reduce(((e,a)=>{const t=a.split(":");return e[t[0]]=t[1],e}),{})})))})),(e,a)=>{const t=j;return i(),r("div",null,[y("div",_e,[(i(!0),r(v,null,w(u(l).columns,(e=>(i(),r("div",{key:e.key,class:"item title"},k(e.name),1)))),128))]),(i(!0),r(v,null,w(u(s),(e=>(i(),r("div",{key:e.id,class:"item-container"},[(i(!0),r(v,null,w(u(l).columns,(a=>(i(),r("div",{key:a.key,class:"item"},[y("span",null,k(e[a.key]),1)])))),128))])))),128)),u(l).tableData.length>u(l).limit?(i(),x(t,{key:0,type:"link",onClick:a[0]||(a[0]=e=>u(l).isAll=!u(l).isAll)},{default:d((()=>[D(k(u(l).isAll?"收起":"展开全部"),1)])),_:1})):C("",!0)])}}}),[["__scopeId","data-v-840d5446"]]),fe={class:"flex flex-wrap"},he={class:"mb8px"},ge={key:0},be={class:"flex app-flex-img flex-wrap"},ye={style:{"text-align":"center"},class:"mt8px"},ve={class:"flex app-flex-img flex-wrap"},we={class:"flex app-flex-img flex-wrap"},ke=["src"],xe={class:"flex app-flex-img flex-wrap"},De={class:"flex app-flex-img flex-wrap"},Ce={class:"flex app-flex-img flex-wrap"},je=["src"],Ue=["innerHTML"],Se=U(t({__name:"ProductDetail",props:{show:Boolean,id:Number},emits:[],setup(a,{emit:t}){const c=a,m=l(c,"show",t),f=s({}),g=s({}),j=s([]),U=s(!1),H=o({loading:!1}),O=b((()=>[["商品名称","title"],["副标题","subtitle"],["列表描述","list_subtitle"],["商品分类","cats"],["商品关键词","key_phrase"],["商品排序","sort"],["商品编码","goods_sn"],["供应商","supplier_name"],["运费模板","freight_name"],["七天无理由退换","is_no_reason_name",()=>4!==f.value.type],["运费险","insurance_name",()=>4!==f.value.type],["退货地址","receiver_full_address",()=>4!==f.value.type],["上架平台","platform_str"],["可购买对象","member_type_str"],["库存显示","stock_type_name"],["商品类型","type_name"],["兑换优惠券","convert_coupon_ids"]].filter((e=>!e[2]||e[2]())))),R=b((()=>[["上下架时间","updowntime"],["单次最多购买","single_max"],["单次最少购买","single_min"],["24小时最多购买","day_max",()=>4!==f.value.type],["总最多购买","limit_max"],["组合购","zu_num",()=>4!==f.value.type],["商品标签","label_str"],["团购商品","is_group_name",()=>4!==f.value.type],["团购时间","grouptime",()=>1===f.value.is_group]].filter((e=>!e[2]||e[2]())))),M=e=>{const a=ne(e.attr);return Object.keys(e.sku_imgs).map((t=>({name:a[t].value,url:e.sku_imgs[t]})))};return n(m,(e=>{e&&(H.loading=!0,_.product.goods.detail({id:c.id}).then((e=>{H.loading=!1;const a=e.data.goods;a.cats=[a.cat1_name,a.cat2_name,a.cat3_name].filter((e=>e)).join("/"),a.updowntime=a.start_at+" / "+a.end_at,a.grouptime=a.group_start_at+" / "+a.group_end_at,a.is_group_name=1===a.is_group?"是":"否",j.value=M(a),f.value=a,U.value=4===e.data.goods.type,U.value&&e.data.sku_data.forEach((e=>{e.cost_price="--",e.shop_price="--",e.store_price="--",e.partner_price="--"})),g.value=e.data.sku_data})))})),(a,t)=>{const l=le,s=se,n=te,o=V,c=S,_=Y,b=A,M=h,K=I,T=ae;return i(),r("div",null,[e(T,{visible:u(m),"onUpdate:visible":t[0]||(t[0]=e=>p(m)?m.value=e:null),title:"商品详情",placement:"right",width:"80%"},{default:d((()=>[e(K,{spinning:u(H).loading},{default:d((()=>[e(n,{title:"基本信息"},{default:d((()=>[e(s,null,{default:d((()=>[(i(!0),r(v,null,w(u(O),((e,a)=>(i(),x(l,{key:a,label:e[0]},{default:d((()=>[D(k(u(f)[e[1]]),1)])),_:2},1032,["label"])))),128)),u(U)?(i(),x(l,{key:0,label:"积分价格"},{default:d((()=>[D(k(u(f).shop_price),1)])),_:1})):C("",!0)])),_:1})])),_:1}),e(n,{title:"商品参数",style:{"margin-top":"8px"}},{default:d((()=>[e(s,null,{default:d((()=>[(i(!0),r(v,null,w(u(f).param,((e,a)=>(i(),x(l,{key:a,label:e.key},{default:d((()=>[D(k(e.value),1)])),_:2},1032,["label"])))),128))])),_:1})])),_:1}),u(U)?C("",!0):(i(),x(n,{key:0,title:"服务权益",style:{"margin-top":"8px"}},{default:d((()=>[y("div",fe,[(i(!0),r(v,null,w(u(f).service_items,(a=>(i(),r("div",{key:a.id,class:"box mr16px mb8px"},[y("div",he,[e(o,{width:100,src:a.icon},null,8,["src"])]),D(" "+k(a.name),1)])))),128))])])),_:1})),e(n,{title:"销售属性",style:{"margin-top":"8px"}},{default:d((()=>[u(U)?C("",!0):(i(),r("div",ge,[e(b,null,{default:d((()=>[e(_,{span:8,class:"mb16px",style:{"text-align":"center"}},{default:d((()=>[e(c,{color:"blue"},{default:d((()=>[D(" 价格 ")])),_:1})])),_:1}),e(_,{span:8,class:"mb16px",style:{"text-align":"center"}},{default:d((()=>[e(c,{color:"blue"},{default:d((()=>[D(" 返利 ")])),_:1})])),_:1}),e(_,{span:8,class:"mb16px",style:{"text-align":"center"}},{default:d((()=>[e(c,{color:"blue"},{default:d((()=>[D(" 积分 ")])),_:1})])),_:1})])),_:1}),e(b,null,{default:d((()=>[e(_,{span:8},{default:d((()=>[e(M,{name:"market_price",label:"市场价"},{default:d((()=>[D(k(u(f).market_price),1)])),_:1})])),_:1}),e(_,{span:8},{default:d((()=>[e(M,{name:"store_first_fee",label:"桔掌柜返利","label-col":{span:8},"wrapper-col":{span:16}},{default:d((()=>[D(k(u(f).store_first_fee),1)])),_:1})])),_:1}),e(_,{span:8},{default:d((()=>[e(M,{name:"order_integral",label:"下单积分奖励","label-col":{span:8},"wrapper-col":{span:16}},{default:d((()=>[D(k(u(f).order_integral),1)])),_:1})])),_:1})])),_:1}),e(b,null,{default:d((()=>[e(_,{span:8},{default:d((()=>[e(M,{name:"shop_price",label:"会员价"},{default:d((()=>[D(k(u(f).shop_price),1)])),_:1})])),_:1}),e(_,{span:8},{default:d((()=>[e(M,{name:"store_second_fee",label:"桔掌柜二级返利","label-col":{span:8},"wrapper-col":{span:16}},{default:d((()=>[D(k(u(f).store_second_fee),1)])),_:1})])),_:1}),e(_,{span:8},{default:d((()=>[e(M,{name:"first_integral",label:"一级积分奖励","label-col":{span:8},"wrapper-col":{span:16}},{default:d((()=>[D(k(u(f).first_integral),1)])),_:1})])),_:1})])),_:1}),e(b,null,{default:d((()=>[e(_,{span:8},{default:d((()=>[e(M,{name:"store_price",label:"桔掌柜价"},{default:d((()=>[D(k(u(f).store_price),1)])),_:1})])),_:1}),e(_,{span:8},{default:d((()=>[e(M,{name:"partner_first_fee",label:"优秀桔掌柜返利","label-col":{span:8},"wrapper-col":{span:16}},{default:d((()=>[D(k(u(f).partner_first_fee),1)])),_:1})])),_:1}),e(_,{span:8},{default:d((()=>[e(M,{name:"second_integral",label:"二级积分奖励","label-col":{span:8},"wrapper-col":{span:16}},{default:d((()=>[D(k(u(f).second_integral),1)])),_:1})])),_:1})])),_:1}),e(b,null,{default:d((()=>[e(_,{span:8},{default:d((()=>[e(M,{name:"partner_price",label:"优秀桔掌柜价"},{default:d((()=>[D(k(u(f).partner_price),1)])),_:1})])),_:1})])),_:1})])),e(b,null,{default:d((()=>[e(_,{span:8,class:"mb16px",style:{"text-align":"center"}},{default:d((()=>[e(c,{color:"blue"},{default:d((()=>[D(" 库存 ")])),_:1})])),_:1})])),_:1}),e(b,null,{default:d((()=>[e(_,{span:8},{default:d((()=>[e(M,{label:"商品总库存"},{default:d((()=>[D(k(u(f).stock_num),1)])),_:1})])),_:1}),e(_,{span:8},{default:d((()=>[e(M,{label:"商品销量"},{default:d((()=>[D(k(u(f).sale_num),1)])),_:1})])),_:1}),e(_,{span:8},{default:d((()=>[e(M,{name:"sell_out_num",label:"即将售罄","label-col":{span:8},"wrapper-col":{span:16}},{default:d((()=>[D(k(u(f).sell_out_num),1)])),_:1})])),_:1})])),_:1}),e(me,{data:u(g)},null,8,["data"]),y("div",be,[(i(!0),r(v,null,w(u(j),(a=>(i(),r("div",{key:a.url,class:"mr8px mt8px"},[e(o,{class:"flex",width:80,height:80,src:a.url},null,8,["src"]),y("div",ye,k(a.name),1)])))),128))])])),_:1}),e(n,{title:"商品描述",style:{"margin-top":"8px"}},{default:d((()=>[e(M,{label:"商品相册"},{default:d((()=>[y("div",ve,[(i(!0),r(v,null,w(u(f).imgs,(a=>(i(),r("div",{key:a,class:"mr8px mt8px"},[e(o,{class:"flex",width:80,height:80,src:a},null,8,["src"])])))),128))])])),_:1}),e(M,{label:"商品视频"},{default:d((()=>[y("div",we,[u(f).video?(i(),r("video",{key:0,width:"200",src:u(f).video,controls:""},null,8,ke)):C("",!0)])])),_:1}),e(b,null,{default:d((()=>[e(_,{span:8},{default:d((()=>[e(M,{label:"商品长图"},{default:d((()=>[y("div",xe,[u(f).long_thumb?(i(),x(o,{key:0,width:150,src:u(f).long_thumb},null,8,["src"])):C("",!0)])])),_:1})])),_:1}),e(_,{span:8},{default:d((()=>[e(M,{label:"小程序分享图"},{default:d((()=>[y("div",De,[u(f).share_thumb?(i(),x(o,{key:0,width:150,src:u(f).share_thumb},null,8,["src"])):C("",!0)])])),_:1})])),_:1})])),_:1}),e(M,{label:"小程序分享标题"},{default:d((()=>[y("span",null,k(u(f).share_title),1)])),_:1}),e(M,{label:"视频集"},{default:d((()=>[y("div",Ce,[(i(!0),r(v,null,w(u(f).detail_video,(e=>(i(),r("video",{key:e.url,width:"200",src:e.url,class:"mr8px",controls:""},null,8,je)))),128))])])),_:1}),e(M,{label:"图文详情"},{default:d((()=>[y("div",{class:"rich-text",innerHTML:u(f).content},null,8,Ue)])),_:1})])),_:1}),e(n,{title:"功能设置"},{default:d((()=>[e(s,null,{default:d((()=>[(i(!0),r(v,null,w(u(R),((e,a)=>(i(),x(l,{key:a,label:e[0]},{default:d((()=>[D(k(u(f)[e[1]]),1)])),_:2},1032,["label"])))),128))])),_:1})])),_:1})])),_:1},8,["spinning"])])),_:1},8,["visible"])])}}}),[["__scopeId","data-v-7d0391ed"]]),Ye={class:"flex-between"},Ae={class:"flex1"},Ie=["onClick"],He={class:"mr16px"},Oe={key:1,class:"flex-center"},Re=["onClick"],Me={class:"mr16px"},Ke={key:1,class:"flex-center"},Te={key:3},qe=["onClick"],Be=["onClick"],Fe=["onClick"],Ne=["onClick"],Pe=["onClick"],$e=t({__name:"ProductList",setup(a){const t=H("enums"),l=G([["input","keywords","商品ID/商品名称"],["cascader","cate_id","商品分类"],["dateTimeRange","start_at_start-start_at_end",["上架时间开始","上架时间结束"]],["select","type","商品类型",t.value.goods_type],["dateTimeRange","end_at_start-end_at_end",["下架时间开始","下架时间结束"]],["input","goods_sn","商品编码"],["select","supplier_id","供应商名称/手机号"],["input","supplier_code","供应商编码"]]),s=W(),p=Z(!0);n(s,(e=>{X(l,"cate_id",e)})),n(p,(e=>{X(l,"supplier_id",e)}));const c=L([["商品ID","id"],["排序","sort"],["商品图片","thumb"],["商品名称","title",200],["商品类型","type_name"],["价格","shop_price"],["商品编码","goods_sn"],["供应商名称","supplier_name"],["供应商编码","supplier_full_code"],["供应商手机号","supplier_phone"],["销量","sale_num"],["订单量","order_num"],["库存","stock_num"],["状态","status_name"],["上架时间","start_at"],["下架时间","end_at"],["商品副标题","subtitle",200],["商品分类","cat_name"],["创建人","admin_name"],["操作","operate",180,"right"]]),m=o({type:"",handlingId:0,dataSource:[],loading:!1,showDetail:!1,query:{},pagination:Q(),tab_status:-1,tabs:[],selectedRowKeys:[],showUpDown:!1,batchUpStatus:-1,batchs:[{label:"批量上架",value:"up"},{label:"批量预上架",value:"pre"},{label:"批量下架",value:"down"},{label:"批量删除",value:"del"}],editingId:0,showResetAddress:!1}),f=e=>{"del"===e&&Y(m.selectedRowKeys),"up"===e&&(m.showUpDown=!0,m.handlingId=m.selectedRowKeys,m.batchUpStatus=10),"pre"===e&&(m.showUpDown=!0,m.handlingId=m.selectedRowKeys,m.batchUpStatus=1),"down"===e&&(m.showUpDown=!0,m.handlingId=m.selectedRowKeys,m.batchUpStatus=0)};n((()=>m.tab_status),(()=>{m.pagination={...m.pagination,current:1},g()})),O((()=>{m.tabs.length||b(),g()}));const h=async(e,{id:a,sort:t,title:l})=>{"sort"===e&&await _.product.goods.sort({sort:t,items:JSON.stringify([{id:a,sort:t}])}),"title"===e&&await _.product.goods.changeTitle({sort:t,items:JSON.stringify([{id:a,title:l}])}),m.editingId=0,g()},g=()=>{m.loading=!0,_.product.goods.list({page:m.pagination.current,page_size:m.pagination.pageSize,tab_status:m.tab_status,...m.query}).then((e=>{var a;m.loading=!1,e.data.items.forEach((e=>{e.cat_name=[e.cat1_name,e.cat2_name,e.cat3_name].filter((e=>e)).join("/")})),m.dataSource=e.data.items,1===m.pagination.current&&(m.pagination.total=+(null==(a=e.data)?void 0:a.count))}))},b=async()=>{const e=await _.product.goods.listSta();m.tabs=e.data},U=e=>{m.query=e,m.pagination={...m.pagination,current:1},g()},S=e=>{m.pagination={...m.pagination,...e},g()},Y=async e=>{ee.confirm({title:"提示",content:"确认删除所选商品?",okText:"确认",cancelText:"取消",async onOk(){Array.isArray(e)?await _.product.goods.batchDel({ids:e.join(",")}):await _.product.goods.del({id:e}),g()},onCancel(){}})};return(a,t)=>{const s=F,n=T,o=j,p=R("Export"),b=R("Search"),A=V,I=J,H=N,O=P,L=$,G=z,X=E,Q=R("BatchTable"),W=M("permission");return i(),r("div",null,[y("div",Ye,[y("div",Ae,[e(n,{activeKey:u(m).tab_status,"onUpdate:activeKey":t[0]||(t[0]=e=>u(m).tab_status=e)},{default:d((()=>[(i(!0),r(v,null,w(u(m).tabs,(e=>(i(),x(s,{key:e.value,tab:`${e.label}(${e.count})`},null,8,["tab"])))),128))])),_:1},8,["activeKey"])]),K((i(),x(o,{class:"mb16px mr16px",type:"primary",onClick:t[1]||(t[1]=e=>a.$router.push({name:"productAdd"}))},{default:d((()=>[D(" 新建商品 ")])),_:1})),[[W,[u(_).product.goods.add]]]),K((i(),x(o,{class:"mb16px",type:"default",onClick:t[2]||(t[2]=e=>a.$router.push({name:"productAdd",query:{isIntegral:1}}))},{default:d((()=>[D(" 新建积分商品 ")])),_:1})),[[W,[u(_).product.goods.add]]])]),e(b,{"search-options":u(l),onOnSearch:U},{default:d((()=>[K(e(p,{api:u(_).product.goods.export,query:{...u(m).query,tab_status:u(m).tab_status}},null,8,["api","query"]),[[W,[u(_).product.goods.export]]])])),_:1},8,["search-options"]),e(X,{"row-key":"id","data-source":u(m).dataSource,columns:u(c),scroll:{x:"max-content"},loading:u(m).loading,"row-selection":{selectedRowKeys:u(m).selectedRowKeys,onChange(e){u(m).selectedRowKeys=e}},pagination:u(m).pagination,onChange:S},{bodyCell:d((({column:l,record:s})=>["thumb"===l.key?(i(),x(A,{key:0,width:50,height:50,src:s.thumb},null,8,["src"])):C("",!0),"sort"===l.key?(i(),r(v,{key:1},[s.id!==u(m).editingId?(i(),r("div",{key:0,class:"flex-center pointer",onClick:e=>u(m).editingId=s.id},[y("div",He,k(s.sort),1),K(e(u(ue),{style:{color:"#1890ff"}},null,512),[[W,[u(_).product.goods.sort]]])],8,Ie)):(i(),r("div",Oe,[e(I,{value:s.sort,"onUpdate:value":e=>s.sort=e},null,8,["value","onUpdate:value"]),K((i(),x(o,{type:"link",onClick:e=>h("sort",s)},{default:d((()=>[D(" 保存 ")])),_:2},1032,["onClick"])),[[W,[u(_).product.goods.sort]]])]))],64)):C("",!0),"title"===l.key?(i(),r(v,{key:2},[s.id!==u(m).editingId?(i(),r("div",{key:0,class:"flex-center pointer",onClick:e=>u(m).editingId=s.id},[y("div",Me,k(s.title),1),K(e(u(ue),{style:{color:"#1890ff"}},null,512),[[W,[u(_).product.goods.changeTitle]]])],8,Re)):(i(),r("div",Ke,[e(H,{value:s.title,"onUpdate:value":e=>s.title=e},null,8,["value","onUpdate:value"]),K((i(),x(o,{type:"link",onClick:e=>h("title",s)},{default:d((()=>[D(" 保存 ")])),_:2},1032,["onClick"])),[[W,[u(_).product.goods.changeTitle]]])]))],64)):C("",!0),"operate"===l.key?(i(),r("div",Te,[K((i(),x(o,{type:"link",onClick:e=>{u(m).showDetail=!0,u(m).handlingId=s.id}},{default:d((()=>[D(" 查看 ")])),_:2},1032,["onClick"])),[[W,[u(_).product.goods.detail]]]),K((i(),x(o,{type:"link",onClick:e=>a.$router.push({name:"productEdit",params:{id:s.id}})},{default:d((()=>[D(" 编辑 ")])),_:2},1032,["onClick"])),[[W,[u(_).product.goods.edit]]]),e(G,null,{overlay:d((()=>[e(L,null,{default:d((()=>[e(O,null,{default:d((()=>[K((i(),r("a",{href:"javascript:;",onClick:e=>a.$router.push({name:"productCopy",params:{id:s.id}})},[D("复制")],8,qe)),[[W,[u(_).product.goods.add]]])])),_:2},1024),e(O,null,{default:d((()=>[K((i(),r("a",{class:"danger-color",href:"javascript:;",onClick:e=>Y(s.id)},[D("删除")],8,Be)),[[W,[u(_).product.goods.del]]])])),_:2},1024),e(O,null,{default:d((()=>[K((i(),r("a",{href:"javascript:;",onClick:e=>{u(m).showUpDown=!0,u(m).handlingId=s.id,u(m).batchUpStatus=-1}},[D("上下架控制")],8,Fe)),[[W,[u(_).product.goods.status]]])])),_:2},1024),e(O,null,{default:d((()=>[K((i(),r("a",{href:"javascript:;",onClick:e=>a.$router.push({name:"Material",query:{id:s.id}})},[D("素材管理")],8,Ne)),[[W,[u(_).product.material.list]]])])),_:2},1024),e(O,null,{default:d((()=>[K((i(),r("a",{href:"javascript:;",onClick:e=>{u(m).showResetAddress=!0,u(m).handlingId=s.id}},[D("同步退货地址")],8,Pe)),[[W,[u(_).product.goods.resetAddress]]])])),_:2},1024)])),_:2},1024)])),default:d((()=>[y("a",{class:"ant-dropdown-link",onClick:t[3]||(t[3]=B((()=>{}),["prevent"]))},[D(" 更多 "),e(u(q))])])),_:2},1024)])):C("",!0)])),_:1},8,["data-source","columns","loading","row-selection","pagination"]),u(m).dataSource.length?(i(),x(Q,{key:0,batchs:u(m).batchs,"selected-row-keys":u(m).selectedRowKeys,onClick:f},null,8,["batchs","selected-row-keys"])):C("",!0),e(pe,{id:u(m).handlingId,show:u(m).showUpDown,"onUpdate:show":t[4]||(t[4]=e=>u(m).showUpDown=e),"batch-up-status":u(m).batchUpStatus,onFresh:g},null,8,["id","show","batch-up-status"]),e(Se,{id:u(m).handlingId,show:u(m).showDetail,"onUpdate:show":t[5]||(t[5]=e=>u(m).showDetail=e)},null,8,["id","show"]),e(ce,{id:u(m).handlingId,show:u(m).showResetAddress,"onUpdate:show":t[6]||(t[6]=e=>u(m).showResetAddress=e),onFresh:g},null,8,["id","show"])])}}});export{$e as default};
