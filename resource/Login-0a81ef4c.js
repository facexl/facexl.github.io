import{d as e,u as a,h as s,m as o,a as n,b as l,g as d,x as i,y as r,f as t,z as p,e as u,w as m,$ as w,Z as c,E as g,j as _,s as h,p as y,q as f,cQ as v,I as T,A as b,cI as k,B as q,_ as x}from"./index-c2ae2a0e.js";const I={class:"container login-container"},U={class:"login-box"},j={class:"logo"},F={class:"app-name animate__animated animate__fadeInRight"},z={class:"app-name animate__animated animate__jello"},A={key:0},B=x(e({__name:"Login",setup(e){const x=a(),B=s(),C=o({showType:"login",loading:!1}),E=o({username:"",password:"",newpwd:"",confirm_password:""}),L=async()=>{if("login"!==C.showType)return C.loading=!0,void w.user.changePassword({username:E.username,old_password:E.password,password:E.newpwd,confirm_password:E.confirm_password,request_from:C.showType}).then((e=>{C.loading=!1}));if("login"===C.showType)try{C.loading=!0;const a=await w.user.login({account:E.username,password:E.password},{handleSelf:!0,noauth:!0});if(C.loading=!1,30200===a.code)return void(C.showType="first");if(2e4!==a.code)return void c.error(a.message);e=a.data,v.set(_.token_key,e.token_info.access_token),x.push({path:B.query.redirect||"/"})}catch(a){C.loading=!1,console.log(a)}var e},P=()=>{console.log("数据检查失败")};return(e,a)=>{const s=T,o=b,w=k,c=q,v=g;return n(),l("div",I,[d("div",U,[d("div",j,[i(d("span",{class:"app-name"},p(t(_).app_name),513),[[r,"login"===t(C).showType]]),i(d("span",F,"修改密码",512),[[r,"old_pwd"===t(C).showType]]),i(d("span",z,"首次登录，请修改密码",512),[[r,"first"===t(C).showType]])]),u(v,{model:t(E),name:"basic",onFinish:L,onFinishFailed:P},{default:m((()=>[u(o,{name:"username",rules:[{required:!0,message:"请输入账号"}]},{default:m((()=>[u(s,{value:t(E).username,"onUpdate:value":a[0]||(a[0]=e=>t(E).username=e),disabled:"first"===t(C).showType,placeholder:"账号"},null,8,["value","disabled"])])),_:1}),u(o,{name:"password",rules:[{required:!0,message:"请输入密码"}]},{default:m((()=>[u(w,{value:t(E).password,"onUpdate:value":a[1]||(a[1]=e=>t(E).password=e),disabled:"first"===t(C).showType,placeholder:"密码"},null,8,["value","disabled"])])),_:1}),"login"!==t(C).showType?(n(),l("div",A,[u(o,{name:"newpwd",rules:[{required:!0,message:"请输入新密码"}]},{default:m((()=>[u(w,{value:t(E).newpwd,"onUpdate:value":a[2]||(a[2]=e=>t(E).newpwd=e),placeholder:"新密码"},null,8,["value"])])),_:1}),u(o,{name:"confirm_password",rules:[{required:!0,message:"请输入新密码"}]},{default:m((()=>[u(w,{value:t(E).confirm_password,"onUpdate:value":a[3]||(a[3]=e=>t(E).confirm_password=e),placeholder:"确认新密码"},null,8,["value"])])),_:1})])):h("",!0),"login"===t(C).showType?(n(),y(o,{key:1},{default:m((()=>[u(c,{loading:t(C).loading,style:{width:"100%"},type:"primary","html-type":"submit"},{default:m((()=>[f(" 登录 ")])),_:1},8,["loading"])])),_:1})):h("",!0),"login"!==t(C).showType?(n(),y(o,{key:2,style:{"text-align":"center"}},{default:m((()=>[u(c,{loading:t(C).loading,style:{width:"100%"},type:"primary","html-type":"submit"},{default:m((()=>[f(" 确认修改 ")])),_:1},8,["loading"]),u(c,{class:"mt8px",size:"small",type:"link",style:{width:"100%"},onClick:a[4]||(a[4]=e=>t(C).showType="login")},{default:m((()=>[f(" 返回 ")])),_:1})])),_:1})):h("",!0)])),_:1},8,["model"])])])}}}),[["__scopeId","data-v-a81a67fd"]]);export{B as default};