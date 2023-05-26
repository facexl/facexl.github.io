import{d as a,i as e,l as t,m as n,o,G as i,H as r,a as s,p as l,w as u,f as m,k as p,e as d,x as c,$ as _,s as g,b as y,y as h,T as v,D as x,q as f,v as k,C as w,B as b}from"./index-c2ae2a0e.js";import{u as S,_ as q}from"./useTableColumns-dd067b4d.js";import"./index-c8577ae4.js";import"./index-3f0a4d2e.js";import{C as K}from"./index-1dfc023a.js";import{S as j}from"./index-80217aac.js";import{u as D,a as C}from"./useSearchItems-c7d75cf3.js";import{u as E}from"./usePagination-c05046ed.js";import{_ as I}from"./index-975d3375.js";import{_ as O}from"./index-00d344de.js";import"./FolderOpenOutlined-fa174baf.js";import"./tool-d986b095.js";import"./RadioButton-bc4165ed.js";const T=a({__name:"TeamStaDetail",props:{show:Boolean,params:Object},emits:[],setup(a,{emit:y}){const h=a,v=e(h,"show",y),x=D([]);t(v,(a=>{a&&(k.pagination={...k.pagination,current:1},w())}));const f=S([["订单编号","order_sn",120],["下单人ID","uid",110],["下单人头像","useravatar",120],["下单人昵称","nickname",180],["商品图片","goods_thumb",120],["商品标题","goods_title"],["商品数量","goods_nums",120],["订单金额","actual_fee",120],["奖励","reward",140]]),k=n({dataSource:[],loading:!1,pagination:E()});o((()=>{}));const w=()=>{k.loading=!0,_.sta.team.rankingDetail({page:k.pagination.current,page_size:k.pagination.pageSize,...h.params}).then((a=>{var e;k.loading=!1,k.dataSource=a.data.items,1===k.pagination.current&&(k.pagination.total=+(null==(e=a.data)?void 0:e.count))}))},b=a=>{k.pagination={...k.pagination,...a},w()};return(a,e)=>{const t=i("Export"),n=i("Search"),o=O,y=q,w=I,S=r("permission");return s(),l(w,{visible:m(v),"onUpdate:visible":e[0]||(e[0]=a=>p(v)?v.value=a:null),title:"查看的列表",placement:"right",width:"80%"},{default:u((()=>[d(n,{"search-options":m(x)},{default:u((()=>[c(d(t,{api:m(_).sta.team.rankingDetailExport,query:{...h.params}},null,8,["api","query"]),[[S,[m(_).sta.team.rankingDetailExport]]])])),_:1},8,["search-options"]),d(y,{"row-key":"id","data-source":m(k).dataSource,columns:m(f),scroll:{x:"max-content"},loading:m(k).loading,pagination:m(k).pagination,onChange:b},{bodyCell:u((({column:a,record:e})=>["useravatar"===a.key?(s(),l(o,{key:0,width:50,src:e.useravatar},null,8,["src"])):g("",!0),"goods_thumb"===a.key?(s(),l(o,{key:1,width:50,src:e.goods_thumb},null,8,["src"])):g("",!0)])),_:1},8,["data-source","columns","loading","pagination"])])),_:1},8,["visible"])}}}),z=a({__name:"TeamSta",setup(a){const e=D([["dateTimeRange","start_at-end_at",["开始时间","结束时间"]]]),p=D([["input","uid","用户ID"],["input","nickname","用户昵称"],["select","user_type","用户类型"],["month","year_month","请选择年月"]]),I=S([["日期","date"],["桔掌柜团队","team_num_3"],["桔掌柜团队（下单）","team_order_num_3"],["桔掌柜团队（下单率）","team_order_rate_3"],["优秀桔掌柜团队","team_num_5"],["优秀桔掌柜团队（下单）","team_order_num_5"],["优秀桔掌柜团队（下率）","team_order_rate_5"]]),O=S([["用户ID","uid"],["用户昵称","nickname"],["用户类型","user_type_name"],["年","year"],["月","month"],["团队总人数","total_member_num"],["团队下单人数","total_ordered_member_num"],["团队奖励","total_reward"],["团队下单总额","total_ordered_money"],["团队下单笔数","total_ordered_num"],["团队下单商品数","total_goods_num"],["操作","operate"]]),z=n({handlingId:0,dataSource:[],loading:!1,query:{},pagination:E(),selectedRowKeys:[],total:{},type:1,activeKey:"team",params:{},showDetail:!1});t((()=>z.activeKey),(()=>{R()})),o((()=>{z.query={},z.pagination={...z.pagination,current:1},R(),B()}));const B=async()=>{const a=await _.sta.team.total({type:z.type});z.total=a.data},R=()=>{z.loading=!0,_.sta.team[`${z.activeKey}List`]({page:z.pagination.current,page_size:z.pagination.pageSize,..."team"===z.activeKey?z.query1:z.query2}).then((a=>{var e;z.loading=!1,z.dataSource=a.data.items,1===z.pagination.current&&(z.pagination.total=+(null==(e=a.data)?void 0:e.count)),"team"!==z.activeKey&&C(p,"user_type",a.data.member_type_map)}))},U=a=>{z.pagination={...z.pagination,...a},R()},$=a=>{"team"===z.activeKey?z.query1=a:z.query2=a,z.pagination={...z.pagination,current:1},R()};return(a,t)=>{const n=k,o=v,S=j,D=K,C=w,E=x,B=i("Export"),R=i("Search"),A=q,F=b,G=r("permission");return s(),y("div",null,[d(o,{activeKey:m(z).activeKey,"onUpdate:activeKey":t[0]||(t[0]=a=>m(z).activeKey=a)},{default:u((()=>[d(n,{key:"team",tab:"团队统计"}),d(n,{key:"ranking",tab:"团队排行"})])),_:1},8,["activeKey"]),d(E,{class:"mb16px"},{default:u((()=>[d(C,{span:5,class:"mr8px"},{default:u((()=>[d(D,null,{default:u((()=>[d(S,{title:"桔掌柜团队",value:m(z).total.type_3_team_num},null,8,["value"])])),_:1})])),_:1}),d(C,{span:5,class:"mr8px"},{default:u((()=>[d(D,null,{default:u((()=>[d(S,{title:"桔掌柜团队（下单）",value:m(z).total.type_3_team_order_num},null,8,["value"])])),_:1})])),_:1}),d(C,{span:5,class:"mr8px"},{default:u((()=>[d(D,null,{default:u((()=>[d(S,{title:"\n        优秀桔掌柜团队",value:m(z).total.type_5_team_num},null,8,["value"])])),_:1})])),_:1}),d(C,{span:5},{default:u((()=>[d(D,null,{default:u((()=>[d(S,{title:"优秀桔掌柜团队（下单）",value:m(z).total.type_5_team_order_num},null,8,["value"])])),_:1})])),_:1})])),_:1}),c(d(R,{"search-options":m(e),onOnSearch:$},{default:u((()=>[c(d(B,{api:m(_).sta.team.teamExport,query:m(z).query1},null,8,["api","query"]),[[G,[m(_).sta.team.teamExport]]])])),_:1},8,["search-options"]),[[h,"team"===m(z).activeKey]]),c(d(A,{"row-key":"id","data-source":m(z).dataSource,columns:m(I),scroll:{x:"max-content"},loading:m(z).loading,pagination:m(z).pagination,onChange:U},{bodyCell:u((({column:a,record:e})=>[])),_:1},8,["data-source","columns","loading","pagination"]),[[h,"team"===m(z).activeKey]]),c(d(R,{"search-options":m(p),onOnSearch:$},{default:u((()=>[c(d(B,{api:m(_).sta.team.rankingExport,query:m(z).query2},null,8,["api","query"]),[[G,[m(_).sta.user.export]]])])),_:1},8,["search-options"]),[[h,"ranking"===m(z).activeKey]]),c(d(A,{"row-key":"id","data-source":m(z).dataSource,columns:m(O),scroll:{x:"max-content"},loading:m(z).loading,pagination:m(z).pagination,onChange:U},{bodyCell:u((({column:a,record:e})=>["operate"===a.key?(s(),l(F,{key:0,type:"link",onClick:a=>(a=>{z.params={team_uid:a.uid,year:a.year,month:a.month},z.showDetail=!0})(e)},{default:u((()=>[f(" 查看 ")])),_:2},1032,["onClick"])):g("",!0)])),_:1},8,["data-source","columns","loading","pagination"]),[[h,"ranking"===m(z).activeKey]]),d(T,{show:m(z).showDetail,"onUpdate:show":t[1]||(t[1]=a=>m(z).showDetail=a),params:m(z).params},null,8,["show","params"])])}}});export{z as default};