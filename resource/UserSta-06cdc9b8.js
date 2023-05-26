import{cU as a,cV as e,aG as n,d as t,bk as o,r as u,o as r,aj as i,aX as l,e as s,ak as c,bi as d,m,$ as p,G as f,H as v,a as _,b as g,w as h,f as x,D as y,x as w,p as k,s as C,F as b,q as j,C as S,B as D}from"./index-c2ae2a0e.js";import{u as q,_ as F}from"./useTableColumns-dd067b4d.js";import"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{_ as O}from"./index-ef11d20c.js";import{C as I}from"./index-1dfc023a.js";import{s as R,c as U,S as H,a as M}from"./index-80217aac.js";import{u as T}from"./useSearchItems-c7d75cf3.js";import{u as E}from"./usePagination-c05046ed.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";var z=[["Y",31536e6],["M",2592e6],["D",864e5],["H",36e5],["m",6e4],["s",1e3],["S",1]];function A(t,o){var u=t,r=/\[[^\]]*]/g,i=(o.match(r)||[]).map((function(a){return a.slice(1,-1)})),l=o.replace(r,"[]"),s=z.reduce((function(t,o){var r=n(o,2),i=r[0],l=r[1];if(-1!==t.indexOf(i)){var s=Math.floor(u/l);return u-=s*l,t.replace(new RegExp("".concat(i,"+"),"g"),(function(n){var t=n.length;return function(n,t,o){n=a(n);var u=(t=e(t))?R(n):0;return t&&u<t?U(t-u,o)+n:n}(s.toString(),t,"0")}))}return t}),l),c=0;return s.replace(r,(function(){var a=i[c];return c+=1,a}))}function B(a){return new Date(a).getTime()}const G=t({compatConfig:{MODE:3},name:"AStatisticCountdown",props:o(c(c({},M()),{},{value:[Number,String,Object],format:String,onFinish:Function,onChange:Function}),{format:"HH:mm:ss"}),setup:function(a,e){var n=e.emit,t=e.slots,o=u(),m=u(),p=function(){B(a.value)>=Date.now()?f():v()},f=function(){if(!o.value){var e=B(a.value);o.value=setInterval((function(){m.value.$forceUpdate(),e>Date.now()&&n("change",e-Date.now()),p()}),33.333333333333336)}},v=function(){var e=a.value;o.value&&(clearInterval(o.value),o.value=void 0,B(e)<Date.now()&&n("finish"))},_=function(e){var n=e.value,t=e.config,o=a.format;return function(a,e){var n=e.format,t=void 0===n?"":n,o=new Date(a).getTime(),u=Date.now();return A(Math.max(o-u,0),t)}(n,c(c({},t),{},{format:o}))},g=function(a){return a};return r((function(){p()})),i((function(){p()})),l((function(){v()})),function(){var e=a.value;return s(H,c({ref:m},c(c({},d(a,["onFinish","onChange"])),{},{value:e,valueRender:g,formatter:_})),t)}}});H.Countdown=G,H.install=function(a){return a.component(H.name,H),a.component(H.Countdown.name,H.Countdown),a},H.Countdown;const $=t({__name:"UserSta",setup(a){const e=T([["dateTimeRange","time_start-time_end",["开始时间","结束时间"]]]),n=q([["日期","date_day"],["新增用户","normal_status_num"],["新增会员","new_member_num"],["新增桔掌柜","new_store_num"],["新增优秀桔掌柜","new_exce_store_num"],["活跃用户","active_total_num"],["活跃会员","active_member_num"],["活跃桔掌柜","active_store_num"],["活跃优秀桔掌柜","active_exce_store_num"]]),t=m({handlingId:0,dataSource:[],loading:!1,query:{},pagination:E(),selectedRowKeys:[],total:{}});r((()=>{u(),o()}));const o=async()=>{const a=await p.sta.user.total();t.total=a.data},u=()=>{t.loading=!0,p.sta.user.list({page:t.pagination.current,page_size:t.pagination.pageSize,...t.query}).then((a=>{var e;t.loading=!1,t.dataSource=a.data.items,1===t.pagination.current&&(t.pagination.total=+(null==(e=a.data)?void 0:e.count))}))},i=a=>{t.pagination={...t.pagination,...a},u()},l=a=>{t.query=a,t.pagination={...t.pagination,current:1},u()};return(a,o)=>{const u=H,r=I,c=S,d=y,m=f("Export"),q=f("Search"),R=O,U=D,M=F,T=v("permission");return _(),g("div",null,[s(d,{class:"mb16px"},{default:h((()=>[s(c,{span:5,class:"mr8px"},{default:h((()=>[s(r,null,{default:h((()=>[s(u,{title:"用户总数",value:x(t).total.num_total},null,8,["value"])])),_:1})])),_:1}),s(c,{span:5,class:"mr8px"},{default:h((()=>[s(r,null,{default:h((()=>[s(u,{title:"\n        会员总数",value:x(t).total.num_type_1},null,8,["value"])])),_:1})])),_:1}),s(c,{span:5,class:"mr8px"},{default:h((()=>[s(r,null,{default:h((()=>[s(u,{title:"\n        桔掌柜总数",value:x(t).total.num_type_3},null,8,["value"])])),_:1})])),_:1}),s(c,{span:5},{default:h((()=>[s(r,null,{default:h((()=>[s(u,{title:"优秀桔掌柜总数",value:x(t).total.num_type_5},null,8,["value"])])),_:1})])),_:1})])),_:1}),s(q,{"search-options":x(e),onOnSearch:l},{default:h((()=>[w(s(m,{api:x(p).sta.user.export,query:x(t).query},null,8,["api","query"]),[[T,[x(p).sta.user.export]]])])),_:1},8,["search-options"]),s(M,{"row-key":"id","data-source":x(t).dataSource,columns:x(n),scroll:{x:"max-content"},loading:x(t).loading,pagination:x(t).pagination,onChange:i},{bodyCell:h((({column:e,record:n})=>["enabled"===e.key?(_(),k(R,{key:0,checked:n.enabled,"onUpdate:checked":a=>n.enabled=a,"un-checked-value":0,"checked-value":1,onChange:a=>(async a=>{await p.product.material.status({id:a.id,enabled:a.enabled}).catch((e=>{a.enabled=0===a.enabled?1:0}))})(n)},null,8,["checked","onUpdate:checked","onChange"])):C("",!0),"operate"===e.key?(_(),g(b,{key:1},[s(U,{type:"link",onClick:a=>{x(t).handlingId=n.id}},{default:h((()=>[j(" 编辑 ")])),_:2},1032,["onClick"]),s(U,{type:"link",danger:"",onClick:e=>a.del(n.id)},{default:h((()=>[j(" 删除 ")])),_:2},1032,["onClick"])],64)):C("",!0)])),_:1},8,["data-source","columns","loading","pagination"])])}}});export{$ as default};
