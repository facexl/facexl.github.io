import{r as e,$ as t}from"./index-c2ae2a0e.js";function s(e){console.log(e)}const a=()=>{const a=e([]);return t.productConfig.category.tree({is_enabled:1}).then((e=>{a.value=e.data.categories})).catch((e=>{console.log(e),s("获取分类树出错")})),a},o=(a=!1)=>{const o=e([]);return t.productConfig.supplier.list({is_select:1}).then((e=>{o.value=a?e.data.items.map((e=>({value:e.id,label:e.name+"-"+e.phone}))):e.data.items})).catch((e=>{console.log(e),s("获取供应商下拉列表出错")})),o},c=()=>{const a=e([]);return t.productConfig.label.list({is_select:1}).then((e=>{a.value=e.data.items})).catch((e=>{console.log(e),s("获取商品标签下拉列表出错")})),a},l=()=>{const a=e([]);return t.set.freightInsurance.list({is_select:1}).then((e=>{a.value=e.data.items})).catch((e=>{console.log(e),s("获取运费险下拉列表出错")})),a},n=(a={},o)=>{const c=e([]);return t.product.goods.list({is_select:1,...a}).then((e=>{c.value=o?o(e.data.items):e.data.items})).catch((e=>{console.log(e),s("获取商品下拉列表出错")})),c},i=()=>{const a=e([]);return t.afterSale.reason.list({is_select:1,type:2,enabled:1}).then((e=>{a.value=e.data.items})).catch((e=>{console.log(e),s("获取售后原因下拉列表出错")})),a},r=()=>{const a=e([]);return t.set.logisticsCompany.list({is_select:1}).then((e=>{a.value=e.data.items})).catch((e=>{console.log(e),s("获取物流公司下拉列表出错")})),a},u=a=>{const o=e([]);return t.act.coupon.list({is_select:1}).then((e=>{o.value=e.data.items,a&&a(o)})).catch((e=>{console.log(e),s("获取优惠券下拉列表出错")})),o},d=(e,...t)=>new Promise((s=>{e(s,...t)}));export{u as a,r as b,i as c,a as d,o as e,c as f,l as g,d as p,n as u};
