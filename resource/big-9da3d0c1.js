var r=1e6,t=1e6,e="[big.js] ",n=e+"Invalid ",i=n+"decimal places",o=n+"rounding mode",s=e+"Division by zero",c={},f=void 0,u=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function h(r,t,e,n){var i=r.c;if(e===f&&(e=r.constructor.RM),0!==e&&1!==e&&2!==e&&3!==e)throw Error(o);if(t<1)n=3===e&&(n||!!i[0])||0===t&&(1===e&&i[0]>=5||2===e&&(i[0]>5||5===i[0]&&(n||i[1]!==f))),i.length=1,n?(r.e=r.e-t+1,i[0]=1):i[0]=r.e=0;else if(t<i.length){if(n=1===e&&i[t]>=5||2===e&&(i[t]>5||5===i[t]&&(n||i[t+1]!==f||1&i[t-1]))||3===e&&(n||!!i[0]),i.length=t,n)for(;++i[--t]>9;)if(i[t]=0,0===t){++r.e,i.unshift(1);break}for(t=i.length;!i[--t];)i.pop()}return r}function l(r,t,e){var n=r.e,i=r.c.join(""),o=i.length;if(t)i=i.charAt(0)+(o>1?"."+i.slice(1):"")+(n<0?"e":"e+")+n;else if(n<0){for(;++n;)i="0"+i;i="0."+i}else if(n>0)if(++n>o)for(n-=o;n--;)i+="0";else n<o&&(i=i.slice(0,n)+"."+i.slice(n));else o>1&&(i=i.charAt(0)+"."+i.slice(1));return r.s<0&&e?"-"+i:i}c.abs=function(){var r=new this.constructor(this);return r.s=1,r},c.cmp=function(r){var t,e=this,n=e.c,i=(r=new e.constructor(r)).c,o=e.s,s=r.s,c=e.e,f=r.e;if(!n[0]||!i[0])return n[0]?o:i[0]?-s:0;if(o!=s)return o;if(t=o<0,c!=f)return c>f^t?1:-1;for(s=(c=n.length)<(f=i.length)?c:f,o=-1;++o<s;)if(n[o]!=i[o])return n[o]>i[o]^t?1:-1;return c==f?0:c>f^t?1:-1},c.div=function(t){var e=this,n=e.constructor,o=e.c,c=(t=new n(t)).c,u=e.s==t.s?1:-1,l=n.DP;if(l!==~~l||l<0||l>r)throw Error(i);if(!c[0])throw Error(s);if(!o[0])return t.s=u,t.c=[t.e=0],t;var a,p,w,v,g,d=c.slice(),E=a=c.length,m=o.length,b=o.slice(0,a),P=b.length,D=t,M=D.c=[],N=0,x=l+(D.e=e.e-t.e)+1;for(D.s=u,u=x<0?0:x,d.unshift(0);P++<a;)b.push(0);do{for(w=0;w<10;w++){if(a!=(P=b.length))v=a>P?1:-1;else for(g=-1,v=0;++g<a;)if(c[g]!=b[g]){v=c[g]>b[g]?1:-1;break}if(!(v<0))break;for(p=P==a?c:d;P;){if(b[--P]<p[P]){for(g=P;g&&!b[--g];)b[g]=9;--b[g],b[P]+=10}b[P]-=p[P]}for(;!b[0];)b.shift()}M[N++]=v?w:++w,b[0]&&v?b[P]=o[E]||0:b=[o[E]]}while((E++<m||b[0]!==f)&&u--);return M[0]||1==N||(M.shift(),D.e--,x--),N>x&&h(D,x,n.RM,b[0]!==f),D},c.eq=function(r){return 0===this.cmp(r)},c.gt=function(r){return this.cmp(r)>0},c.gte=function(r){return this.cmp(r)>-1},c.lt=function(r){return this.cmp(r)<0},c.lte=function(r){return this.cmp(r)<1},c.minus=c.sub=function(r){var t,e,n,i,o=this,s=o.constructor,c=o.s,f=(r=new s(r)).s;if(c!=f)return r.s=-f,o.plus(r);var u=o.c.slice(),h=o.e,l=r.c,a=r.e;if(!u[0]||!l[0])return l[0]?r.s=-f:u[0]?r=new s(o):r.s=1,r;if(c=h-a){for((i=c<0)?(c=-c,n=u):(a=h,n=l),n.reverse(),f=c;f--;)n.push(0);n.reverse()}else for(e=((i=u.length<l.length)?u:l).length,c=f=0;f<e;f++)if(u[f]!=l[f]){i=u[f]<l[f];break}if(i&&(n=u,u=l,l=n,r.s=-r.s),(f=(e=l.length)-(t=u.length))>0)for(;f--;)u[t++]=0;for(f=t;e>c;){if(u[--e]<l[e]){for(t=e;t&&!u[--t];)u[t]=9;--u[t],u[e]+=10}u[e]-=l[e]}for(;0===u[--f];)u.pop();for(;0===u[0];)u.shift(),--a;return u[0]||(r.s=1,u=[a=0]),r.c=u,r.e=a,r},c.mod=function(r){var t,e=this,n=e.constructor,i=e.s,o=(r=new n(r)).s;if(!r.c[0])throw Error(s);return e.s=r.s=1,t=1==r.cmp(e),e.s=i,r.s=o,t?new n(e):(i=n.DP,o=n.RM,n.DP=n.RM=0,e=e.div(r),n.DP=i,n.RM=o,this.minus(e.times(r)))},c.neg=function(){var r=new this.constructor(this);return r.s=-r.s,r},c.plus=c.add=function(r){var t,e,n,i=this,o=i.constructor;if(r=new o(r),i.s!=r.s)return r.s=-r.s,i.minus(r);var s=i.e,c=i.c,f=r.e,u=r.c;if(!c[0]||!u[0])return u[0]||(c[0]?r=new o(i):r.s=i.s),r;if(c=c.slice(),t=s-f){for(t>0?(f=s,n=u):(t=-t,n=c),n.reverse();t--;)n.push(0);n.reverse()}for(c.length-u.length<0&&(n=u,u=c,c=n),t=u.length,e=0;t;c[t]%=10)e=(c[--t]=c[t]+u[t]+e)/10|0;for(e&&(c.unshift(e),++f),t=c.length;0===c[--t];)c.pop();return r.c=c,r.e=f,r},c.pow=function(r){var e=this,i=new e.constructor("1"),o=i,s=r<0;if(r!==~~r||r<-1e6||r>t)throw Error(n+"exponent");for(s&&(r=-r);1&r&&(o=o.times(e)),r>>=1;)e=e.times(e);return s?i.div(o):o},c.prec=function(t,e){if(t!==~~t||t<1||t>r)throw Error(n+"precision");return h(new this.constructor(this),t,e)},c.round=function(t,e){if(t===f)t=0;else if(t!==~~t||t<-r||t>r)throw Error(i);return h(new this.constructor(this),t+this.e+1,e)},c.sqrt=function(){var r,t,n,i=this,o=i.constructor,s=i.s,c=i.e,f=new o("0.5");if(!i.c[0])return new o(i);if(s<0)throw Error(e+"No square root");0===(s=Math.sqrt(i+""))||s===1/0?((t=i.c.join("")).length+c&1||(t+="0"),c=((c+1)/2|0)-(c<0||1&c),r=new o(((s=Math.sqrt(t))==1/0?"5e":(s=s.toExponential()).slice(0,s.indexOf("e")+1))+c)):r=new o(s+""),c=r.e+(o.DP+=4);do{n=r,r=f.times(n.plus(i.div(n)))}while(n.c.slice(0,c).join("")!==r.c.slice(0,c).join(""));return h(r,(o.DP-=4)+r.e+1,o.RM)},c.times=c.mul=function(r){var t,e=this,n=e.constructor,i=e.c,o=(r=new n(r)).c,s=i.length,c=o.length,f=e.e,u=r.e;if(r.s=e.s==r.s?1:-1,!i[0]||!o[0])return r.c=[r.e=0],r;for(r.e=f+u,s<c&&(t=i,i=o,o=t,u=s,s=c,c=u),t=new Array(u=s+c);u--;)t[u]=0;for(f=c;f--;){for(c=0,u=s+f;u>f;)c=t[u]+o[f]*i[u-f-1]+c,t[u--]=c%10,c=c/10|0;t[u]=c}for(c?++r.e:t.shift(),f=t.length;!t[--f];)t.pop();return r.c=t,r},c.toExponential=function(t,e){var n=this,o=n.c[0];if(t!==f){if(t!==~~t||t<0||t>r)throw Error(i);for(n=h(new n.constructor(n),++t,e);n.c.length<t;)n.c.push(0)}return l(n,!0,!!o)},c.toFixed=function(t,e){var n=this,o=n.c[0];if(t!==f){if(t!==~~t||t<0||t>r)throw Error(i);for(t=t+(n=h(new n.constructor(n),t+n.e+1,e)).e+1;n.c.length<t;)n.c.push(0)}return l(n,!1,!!o)},c[Symbol.for("nodejs.util.inspect.custom")]=c.toJSON=c.toString=function(){var r=this,t=r.constructor;return l(r,r.e<=t.NE||r.e>=t.PE,!!r.c[0])},c.toNumber=function(){var r=Number(l(this,!0,!0));if(!0===this.constructor.strict&&!this.eq(r.toString()))throw Error(e+"Imprecise conversion");return r},c.toPrecision=function(t,e){var i=this,o=i.constructor,s=i.c[0];if(t!==f){if(t!==~~t||t<1||t>r)throw Error(n+"precision");for(i=h(new o(i),t,e);i.c.length<t;)i.c.push(0)}return l(i,t<=i.e||i.e<=o.NE||i.e>=o.PE,!!s)},c.valueOf=function(){var r=this,t=r.constructor;if(!0===t.strict)throw Error(e+"valueOf disallowed");return l(r,r.e<=t.NE||r.e>=t.PE,!0)};var a=function r(){function t(e){var i=this;if(!(i instanceof t))return e===f?r():new t(e);if(e instanceof t)i.s=e.s,i.e=e.e,i.c=e.c.slice();else{if("string"!=typeof e){if(!0===t.strict&&"bigint"!=typeof e)throw TypeError(n+"value");e=0===e&&1/e<0?"-0":String(e)}!function(r,t){var e,i,o;if(!u.test(t))throw Error(n+"number");r.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(e=t.indexOf("."))>-1&&(t=t.replace(".",""));(i=t.search(/e/i))>0?(e<0&&(e=i),e+=+t.slice(i+1),t=t.substring(0,i)):e<0&&(e=t.length);for(o=t.length,i=0;i<o&&"0"==t.charAt(i);)++i;if(i==o)r.c=[r.e=0];else{for(;o>0&&"0"==t.charAt(--o););for(r.e=e-i-1,r.c=[],e=0;i<=o;)r.c[e++]=+t.charAt(i++)}}(i,e)}i.constructor=t}return t.prototype=c,t.DP=20,t.RM=1,t.NE=-7,t.PE=21,t.strict=false,t.roundDown=0,t.roundHalfUp=1,t.roundHalfEven=2,t.roundUp=3,t}();export{a as B};