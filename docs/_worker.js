var ts=Object.defineProperty;var Ze=e=>{throw TypeError(e)};var ss=(e,t,s)=>t in e?ts(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var u=(e,t,s)=>ss(e,typeof t!="symbol"?t+"":t,s),Ve=(e,t,s)=>t.has(e)||Ze("Cannot "+s);var l=(e,t,s)=>(Ve(e,t,"read from private field"),s?s.call(e):t.get(e)),f=(e,t,s)=>t.has(e)?Ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g=(e,t,s,a)=>(Ve(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),v=(e,t,s)=>(Ve(e,t,"access private method"),s);var Xe=(e,t,s,a)=>({set _(i){g(e,t,i,s)},get _(){return l(e,t,a)}});var et=(e,t,s)=>(a,i)=>{let o=-1;return r(0);async function r(d){if(d<=o)throw new Error("next() called multiple times");o=d;let n,c=!1,p;if(e[d]?(p=e[d][0][0],a.req.routeIndex=d):p=d===e.length&&i||void 0,p)try{n=await p(a,()=>r(d+1))}catch(m){if(m instanceof Error&&t)a.error=m,n=await t(m,a),c=!0;else throw m}else a.finalized===!1&&s&&(n=await s(a));return n&&(a.finalized===!1||c)&&(a.res=n),a}},as=Symbol(),is=async(e,t=Object.create(null))=>{const{all:s=!1,dot:a=!1}=t,o=(e instanceof Bt?e.raw.headers:e.headers).get("Content-Type");return o!=null&&o.startsWith("multipart/form-data")||o!=null&&o.startsWith("application/x-www-form-urlencoded")?os(e,{all:s,dot:a}):{}};async function os(e,t){const s=await e.formData();return s?rs(s,t):{}}function rs(e,t){const s=Object.create(null);return e.forEach((a,i)=>{t.all||i.endsWith("[]")?ns(s,i,a):s[i]=a}),t.dot&&Object.entries(s).forEach(([a,i])=>{a.includes(".")&&(ls(s,a,i),delete s[a])}),s}var ns=(e,t,s)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(s):e[t]=[e[t],s]:t.endsWith("[]")?e[t]=[s]:e[t]=s},ls=(e,t,s)=>{let a=e;const i=t.split(".");i.forEach((o,r)=>{r===i.length-1?a[o]=s:((!a[o]||typeof a[o]!="object"||Array.isArray(a[o])||a[o]instanceof File)&&(a[o]=Object.create(null)),a=a[o])})},Rt=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},ds=e=>{const{groups:t,path:s}=cs(e),a=Rt(s);return ps(a,t)},cs=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(s,a)=>{const i=`@${a}`;return t.push([i,s]),i}),{groups:t,path:e}},ps=(e,t)=>{for(let s=t.length-1;s>=0;s--){const[a]=t[s];for(let i=e.length-1;i>=0;i--)if(e[i].includes(a)){e[i]=e[i].replace(a,t[s][1]);break}}return e},Ne={},ms=(e,t)=>{if(e==="*")return"*";const s=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(s){const a=`${e}#${t}`;return Ne[a]||(s[2]?Ne[a]=t&&t[0]!==":"&&t[0]!=="*"?[a,s[1],new RegExp(`^${s[2]}(?=/${t})`)]:[e,s[1],new RegExp(`^${s[2]}$`)]:Ne[a]=[e,s[1],!0]),Ne[a]}return null},Qe=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,s=>{try{return t(s)}catch{return s}})}},gs=e=>Qe(e,decodeURI),Dt=e=>{const t=e.url,s=t.indexOf("/",t.indexOf(":")+4);let a=s;for(;a<t.length;a++){const i=t.charCodeAt(a);if(i===37){const o=t.indexOf("?",a),r=t.slice(s,o===-1?void 0:o);return gs(r.includes("%25")?r.replace(/%25/g,"%2525"):r)}else if(i===63)break}return t.slice(s,a)},us=e=>{const t=Dt(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},de=(e,t,...s)=>(s.length&&(t=de(t,...s)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Lt=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),s=[];let a="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))a+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){s.length===0&&a===""?s.push("/"):s.push(a);const o=i.replace("?","");a+="/"+o,s.push(a)}else a+="/"+i}),s.filter((i,o,r)=>r.indexOf(i)===o)},_e=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Qe(e,Nt):e):e,Ot=(e,t,s)=>{let a;if(!s&&t&&!/[%+]/.test(t)){let r=e.indexOf(`?${t}`,8);for(r===-1&&(r=e.indexOf(`&${t}`,8));r!==-1;){const d=e.charCodeAt(r+t.length+1);if(d===61){const n=r+t.length+2,c=e.indexOf("&",n);return _e(e.slice(n,c===-1?void 0:c))}else if(d==38||isNaN(d))return"";r=e.indexOf(`&${t}`,r+1)}if(a=/[%+]/.test(e),!a)return}const i={};a??(a=/[%+]/.test(e));let o=e.indexOf("?",8);for(;o!==-1;){const r=e.indexOf("&",o+1);let d=e.indexOf("=",o);d>r&&r!==-1&&(d=-1);let n=e.slice(o+1,d===-1?r===-1?void 0:r:d);if(a&&(n=_e(n)),o=r,n==="")continue;let c;d===-1?c="":(c=e.slice(d+1,r===-1?void 0:r),a&&(c=_e(c))),s?(i[n]&&Array.isArray(i[n])||(i[n]=[]),i[n].push(c)):i[n]??(i[n]=c)}return t?i[t]:i},xs=Ot,fs=(e,t)=>Ot(e,t,!0),Nt=decodeURIComponent,tt=e=>Qe(e,Nt),ge,E,H,Ft,$t,Je,V,At,Bt=(At=class{constructor(e,t="/",s=[[]]){f(this,H);u(this,"raw");f(this,ge);f(this,E);u(this,"routeIndex",0);u(this,"path");u(this,"bodyCache",{});f(this,V,e=>{const{bodyCache:t,raw:s}=this,a=t[e];if(a)return a;const i=Object.keys(t)[0];return i?t[i].then(o=>(i==="json"&&(o=JSON.stringify(o)),new Response(o)[e]())):t[e]=s[e]()});this.raw=e,this.path=t,g(this,E,s),g(this,ge,{})}param(e){return e?v(this,H,Ft).call(this,e):v(this,H,$t).call(this)}query(e){return xs(this.url,e)}queries(e){return fs(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((s,a)=>{t[a]=s}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await is(this,e))}json(){return l(this,V).call(this,"text").then(e=>JSON.parse(e))}text(){return l(this,V).call(this,"text")}arrayBuffer(){return l(this,V).call(this,"arrayBuffer")}blob(){return l(this,V).call(this,"blob")}formData(){return l(this,V).call(this,"formData")}addValidatedData(e,t){l(this,ge)[e]=t}valid(e){return l(this,ge)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[as](){return l(this,E)}get matchedRoutes(){return l(this,E)[0].map(([[,e]])=>e)}get routePath(){return l(this,E)[0].map(([[,e]])=>e)[this.routeIndex].path}},ge=new WeakMap,E=new WeakMap,H=new WeakSet,Ft=function(e){const t=l(this,E)[0][this.routeIndex][1][e],s=v(this,H,Je).call(this,t);return s?/\%/.test(s)?tt(s):s:void 0},$t=function(){const e={},t=Object.keys(l(this,E)[0][this.routeIndex][1]);for(const s of t){const a=v(this,H,Je).call(this,l(this,E)[0][this.routeIndex][1][s]);a&&typeof a=="string"&&(e[s]=/\%/.test(a)?tt(a):a)}return e},Je=function(e){return l(this,E)[1]?l(this,E)[1][e]:e},V=new WeakMap,At),Ht={Stringify:1},me=(e,t)=>{const s=new String(e);return s.isEscaped=!0,s.callbacks=t,s},vs=/[&<>'"]/,bs=async(e,t)=>{let s="";t||(t=[]);const a=await Promise.all(e);for(let i=a.length-1;s+=a[i],i--,!(i<0);i--){let o=a[i];typeof o=="object"&&t.push(...o.callbacks||[]);const r=o.isEscaped;if(o=await(typeof o=="object"?o.toString():o),typeof o=="object"&&t.push(...o.callbacks||[]),o.isEscaped??r)s+=o;else{const d=[s];We(o,d),s=d[0]}}return me(s,t)},We=(e,t)=>{const s=e.search(vs);if(s===-1){t[0]+=e;return}let a,i,o=0;for(i=s;i<e.length;i++){switch(e.charCodeAt(i)){case 34:a="&quot;";break;case 39:a="&#39;";break;case 38:a="&amp;";break;case 60:a="&lt;";break;case 62:a="&gt;";break;default:continue}t[0]+=e.substring(o,i)+a,o=i+1}t[0]+=e.substring(o,i)},hs=e=>{const t=e.callbacks;if(!(t!=null&&t.length))return e;const s=[e],a={};return t.forEach(i=>i({phase:Ht.Stringify,buffer:s,context:a})),s[0]},qt=async(e,t,s,a,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const o=e.callbacks;return o!=null&&o.length?(i?i[0]+=e:i=[e],Promise.all(o.map(d=>d({phase:t,buffer:i,context:a}))).then(d=>Promise.all(d.filter(Boolean).map(n=>qt(n,t,!1,a,i))).then(()=>i[0]))):Promise.resolve(e)},ys="text/plain; charset=UTF-8",Ue=(e,t)=>({"Content-Type":e,...t}),je,Ie,N,ue,B,k,ke,xe,fe,X,Se,Ee,_,ce,Pt,ws=(Pt=class{constructor(e,t){f(this,_);f(this,je);f(this,Ie);u(this,"env",{});f(this,N);u(this,"finalized",!1);u(this,"error");f(this,ue);f(this,B);f(this,k);f(this,ke);f(this,xe);f(this,fe);f(this,X);f(this,Se);f(this,Ee);u(this,"render",(...e)=>(l(this,xe)??g(this,xe,t=>this.html(t)),l(this,xe).call(this,...e)));u(this,"setLayout",e=>g(this,ke,e));u(this,"getLayout",()=>l(this,ke));u(this,"setRenderer",e=>{g(this,xe,e)});u(this,"header",(e,t,s)=>{this.finalized&&g(this,k,new Response(l(this,k).body,l(this,k)));const a=l(this,k)?l(this,k).headers:l(this,X)??g(this,X,new Headers);t===void 0?a.delete(e):s!=null&&s.append?a.append(e,t):a.set(e,t)});u(this,"status",e=>{g(this,ue,e)});u(this,"set",(e,t)=>{l(this,N)??g(this,N,new Map),l(this,N).set(e,t)});u(this,"get",e=>l(this,N)?l(this,N).get(e):void 0);u(this,"newResponse",(...e)=>v(this,_,ce).call(this,...e));u(this,"body",(e,t,s)=>v(this,_,ce).call(this,e,t,s));u(this,"text",(e,t,s)=>!l(this,X)&&!l(this,ue)&&!t&&!s&&!this.finalized?new Response(e):v(this,_,ce).call(this,e,t,Ue(ys,s)));u(this,"json",(e,t,s)=>v(this,_,ce).call(this,JSON.stringify(e),t,Ue("application/json",s)));u(this,"html",(e,t,s)=>{const a=i=>v(this,_,ce).call(this,i,t,Ue("text/html; charset=UTF-8",s));return typeof e=="object"?qt(e,Ht.Stringify,!1,{}).then(a):a(e)});u(this,"redirect",(e,t)=>{const s=String(e);return this.header("Location",/[^\x00-\xFF]/.test(s)?encodeURI(s):s),this.newResponse(null,t??302)});u(this,"notFound",()=>(l(this,fe)??g(this,fe,()=>new Response),l(this,fe).call(this,this)));g(this,je,e),t&&(g(this,B,t.executionCtx),this.env=t.env,g(this,fe,t.notFoundHandler),g(this,Ee,t.path),g(this,Se,t.matchResult))}get req(){return l(this,Ie)??g(this,Ie,new Bt(l(this,je),l(this,Ee),l(this,Se))),l(this,Ie)}get event(){if(l(this,B)&&"respondWith"in l(this,B))return l(this,B);throw Error("This context has no FetchEvent")}get executionCtx(){if(l(this,B))return l(this,B);throw Error("This context has no ExecutionContext")}get res(){return l(this,k)||g(this,k,new Response(null,{headers:l(this,X)??g(this,X,new Headers)}))}set res(e){if(l(this,k)&&e){e=new Response(e.body,e);for(const[t,s]of l(this,k).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const a=l(this,k).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of a)e.headers.append("set-cookie",i)}else e.headers.set(t,s)}g(this,k,e),this.finalized=!0}get var(){return l(this,N)?Object.fromEntries(l(this,N)):{}}},je=new WeakMap,Ie=new WeakMap,N=new WeakMap,ue=new WeakMap,B=new WeakMap,k=new WeakMap,ke=new WeakMap,xe=new WeakMap,fe=new WeakMap,X=new WeakMap,Se=new WeakMap,Ee=new WeakMap,_=new WeakSet,ce=function(e,t,s){const a=l(this,k)?new Headers(l(this,k).headers):l(this,X)??new Headers;if(typeof t=="object"&&"headers"in t){const o=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[r,d]of o)r.toLowerCase()==="set-cookie"?a.append(r,d):a.set(r,d)}if(s)for(const[o,r]of Object.entries(s))if(typeof r=="string")a.set(o,r);else{a.delete(o);for(const d of r)a.append(o,d)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??l(this,ue);return new Response(e,{status:i,headers:a})},Pt),C="ALL",Cs="all",As=["get","post","put","delete","options","patch"],zt="Can not add a route since the matcher is already built.",Gt=class extends Error{},Ps="__COMPOSED_HANDLER",js=e=>e.text("404 Not Found",404),st=(e,t)=>{if("getResponse"in e){const s=e.getResponse();return t.newResponse(s.body,s)}return console.error(e),t.text("Internal Server Error",500)},M,A,_t,R,Y,Be,Fe,jt,Vt=(jt=class{constructor(t={}){f(this,A);u(this,"get");u(this,"post");u(this,"put");u(this,"delete");u(this,"options");u(this,"patch");u(this,"all");u(this,"on");u(this,"use");u(this,"router");u(this,"getPath");u(this,"_basePath","/");f(this,M,"/");u(this,"routes",[]);f(this,R,js);u(this,"errorHandler",st);u(this,"onError",t=>(this.errorHandler=t,this));u(this,"notFound",t=>(g(this,R,t),this));u(this,"fetch",(t,...s)=>v(this,A,Fe).call(this,t,s[1],s[0],t.method));u(this,"request",(t,s,a,i)=>t instanceof Request?this.fetch(s?new Request(t,s):t,a,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${de("/",t)}`,s),a,i)));u(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(v(this,A,Fe).call(this,t.request,t,void 0,t.request.method))})});[...As,Cs].forEach(o=>{this[o]=(r,...d)=>(typeof r=="string"?g(this,M,r):v(this,A,Y).call(this,o,l(this,M),r),d.forEach(n=>{v(this,A,Y).call(this,o,l(this,M),n)}),this)}),this.on=(o,r,...d)=>{for(const n of[r].flat()){g(this,M,n);for(const c of[o].flat())d.map(p=>{v(this,A,Y).call(this,c.toUpperCase(),l(this,M),p)})}return this},this.use=(o,...r)=>(typeof o=="string"?g(this,M,o):(g(this,M,"*"),r.unshift(o)),r.forEach(d=>{v(this,A,Y).call(this,C,l(this,M),d)}),this);const{strict:a,...i}=t;Object.assign(this,i),this.getPath=a??!0?t.getPath??Dt:us}route(t,s){const a=this.basePath(t);return s.routes.map(i=>{var r;let o;s.errorHandler===st?o=i.handler:(o=async(d,n)=>(await et([],s.errorHandler)(d,()=>i.handler(d,n))).res,o[Ps]=i.handler),v(r=a,A,Y).call(r,i.method,i.path,o)}),this}basePath(t){const s=v(this,A,_t).call(this);return s._basePath=de(this._basePath,t),s}mount(t,s,a){let i,o;a&&(typeof a=="function"?o=a:(o=a.optionHandler,a.replaceRequest===!1?i=n=>n:i=a.replaceRequest));const r=o?n=>{const c=o(n);return Array.isArray(c)?c:[c]}:n=>{let c;try{c=n.executionCtx}catch{}return[n.env,c]};i||(i=(()=>{const n=de(this._basePath,t),c=n==="/"?0:n.length;return p=>{const m=new URL(p.url);return m.pathname=m.pathname.slice(c)||"/",new Request(m,p)}})());const d=async(n,c)=>{const p=await s(i(n.req.raw),...r(n));if(p)return p;await c()};return v(this,A,Y).call(this,C,de(t,"*"),d),this}},M=new WeakMap,A=new WeakSet,_t=function(){const t=new Vt({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,g(t,R,l(this,R)),t.routes=this.routes,t},R=new WeakMap,Y=function(t,s,a){t=t.toUpperCase(),s=de(this._basePath,s);const i={basePath:this._basePath,path:s,method:t,handler:a};this.router.add(t,s,[a,i]),this.routes.push(i)},Be=function(t,s){if(t instanceof Error)return this.errorHandler(t,s);throw t},Fe=function(t,s,a,i){if(i==="HEAD")return(async()=>new Response(null,await v(this,A,Fe).call(this,t,s,a,"GET")))();const o=this.getPath(t,{env:a}),r=this.router.match(i,o),d=new ws(t,{path:o,matchResult:r,env:a,executionCtx:s,notFoundHandler:l(this,R)});if(r[0].length===1){let c;try{c=r[0][0][0][0](d,async()=>{d.res=await l(this,R).call(this,d)})}catch(p){return v(this,A,Be).call(this,p,d)}return c instanceof Promise?c.then(p=>p||(d.finalized?d.res:l(this,R).call(this,d))).catch(p=>v(this,A,Be).call(this,p,d)):c??l(this,R).call(this,d)}const n=et(r[0],this.errorHandler,l(this,R));return(async()=>{try{const c=await n(d);if(!c.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return c.res}catch(c){return v(this,A,Be).call(this,c,d)}})()},jt),He="[^/]+",Ae=".*",Pe="(?:|/.*)",pe=Symbol(),Is=new Set(".\\+*[^]$()");function ks(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Ae||e===Pe?1:t===Ae||t===Pe?-1:e===He?1:t===He?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var ee,te,D,It,Ke=(It=class{constructor(){f(this,ee);f(this,te);f(this,D,Object.create(null))}insert(t,s,a,i,o){if(t.length===0){if(l(this,ee)!==void 0)throw pe;if(o)return;g(this,ee,s);return}const[r,...d]=t,n=r==="*"?d.length===0?["","",Ae]:["","",He]:r==="/*"?["","",Pe]:r.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let c;if(n){const p=n[1];let m=n[2]||He;if(p&&n[2]&&(m===".*"||(m=m.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(m))))throw pe;if(c=l(this,D)[m],!c){if(Object.keys(l(this,D)).some(x=>x!==Ae&&x!==Pe))throw pe;if(o)return;c=l(this,D)[m]=new Ke,p!==""&&g(c,te,i.varIndex++)}!o&&p!==""&&a.push([p,l(c,te)])}else if(c=l(this,D)[r],!c){if(Object.keys(l(this,D)).some(p=>p.length>1&&p!==Ae&&p!==Pe))throw pe;if(o)return;c=l(this,D)[r]=new Ke}c.insert(d,s,a,i,o)}buildRegExpStr(){const s=Object.keys(l(this,D)).sort(ks).map(a=>{const i=l(this,D)[a];return(typeof l(i,te)=="number"?`(${a})@${l(i,te)}`:Is.has(a)?`\\${a}`:a)+i.buildRegExpStr()});return typeof l(this,ee)=="number"&&s.unshift(`#${l(this,ee)}`),s.length===0?"":s.length===1?s[0]:"(?:"+s.join("|")+")"}},ee=new WeakMap,te=new WeakMap,D=new WeakMap,It),qe,Te,kt,Ss=(kt=class{constructor(){f(this,qe,{varIndex:0});f(this,Te,new Ke)}insert(e,t,s){const a=[],i=[];for(let r=0;;){let d=!1;if(e=e.replace(/\{[^}]+\}/g,n=>{const c=`@\\${r}`;return i[r]=[c,n],r++,d=!0,c}),!d)break}const o=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let r=i.length-1;r>=0;r--){const[d]=i[r];for(let n=o.length-1;n>=0;n--)if(o[n].indexOf(d)!==-1){o[n]=o[n].replace(d,i[r][1]);break}}return l(this,Te).insert(o,t,a,l(this,qe),s),a}buildRegExp(){let e=l(this,Te).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const s=[],a=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,o,r)=>o!==void 0?(s[++t]=Number(o),"$()"):(r!==void 0&&(a[Number(r)]=++t),"")),[new RegExp(`^${e}`),s,a]}},qe=new WeakMap,Te=new WeakMap,kt),Ut=[],Es=[/^$/,[],Object.create(null)],$e=Object.create(null);function Jt(e){return $e[e]??($e[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,s)=>s?`\\${s}`:"(?:|/.*)")}$`))}function Ts(){$e=Object.create(null)}function Ms(e){var c;const t=new Ss,s=[];if(e.length===0)return Es;const a=e.map(p=>[!/\*|\/:/.test(p[0]),...p]).sort(([p,m],[x,w])=>p?1:x?-1:m.length-w.length),i=Object.create(null);for(let p=0,m=-1,x=a.length;p<x;p++){const[w,S,h]=a[p];w?i[S]=[h.map(([I])=>[I,Object.create(null)]),Ut]:m++;let y;try{y=t.insert(S,m,w)}catch(I){throw I===pe?new Gt(S):I}w||(s[m]=h.map(([I,ne])=>{const ye=Object.create(null);for(ne-=1;ne>=0;ne--){const[L,ze]=y[ne];ye[L]=ze}return[I,ye]}))}const[o,r,d]=t.buildRegExp();for(let p=0,m=s.length;p<m;p++)for(let x=0,w=s[p].length;x<w;x++){const S=(c=s[p][x])==null?void 0:c[1];if(!S)continue;const h=Object.keys(S);for(let y=0,I=h.length;y<I;y++)S[h[y]]=d[S[h[y]]]}const n=[];for(const p in r)n[p]=s[r[p]];return[o,n,i]}function le(e,t){if(e){for(const s of Object.keys(e).sort((a,i)=>i.length-a.length))if(Jt(s).test(t))return[...e[s]]}}var U,J,be,Wt,Kt,St,Rs=(St=class{constructor(){f(this,be);u(this,"name","RegExpRouter");f(this,U);f(this,J);g(this,U,{[C]:Object.create(null)}),g(this,J,{[C]:Object.create(null)})}add(e,t,s){var d;const a=l(this,U),i=l(this,J);if(!a||!i)throw new Error(zt);a[e]||[a,i].forEach(n=>{n[e]=Object.create(null),Object.keys(n[C]).forEach(c=>{n[e][c]=[...n[C][c]]})}),t==="/*"&&(t="*");const o=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const n=Jt(t);e===C?Object.keys(a).forEach(c=>{var p;(p=a[c])[t]||(p[t]=le(a[c],t)||le(a[C],t)||[])}):(d=a[e])[t]||(d[t]=le(a[e],t)||le(a[C],t)||[]),Object.keys(a).forEach(c=>{(e===C||e===c)&&Object.keys(a[c]).forEach(p=>{n.test(p)&&a[c][p].push([s,o])})}),Object.keys(i).forEach(c=>{(e===C||e===c)&&Object.keys(i[c]).forEach(p=>n.test(p)&&i[c][p].push([s,o]))});return}const r=Lt(t)||[t];for(let n=0,c=r.length;n<c;n++){const p=r[n];Object.keys(i).forEach(m=>{var x;(e===C||e===m)&&((x=i[m])[p]||(x[p]=[...le(a[m],p)||le(a[C],p)||[]]),i[m][p].push([s,o-c+n+1]))})}}match(e,t){Ts();const s=v(this,be,Wt).call(this);return this.match=(a,i)=>{const o=s[a]||s[C],r=o[2][i];if(r)return r;const d=i.match(o[0]);if(!d)return[[],Ut];const n=d.indexOf("",1);return[o[1][n],d]},this.match(e,t)}},U=new WeakMap,J=new WeakMap,be=new WeakSet,Wt=function(){const e=Object.create(null);return Object.keys(l(this,J)).concat(Object.keys(l(this,U))).forEach(t=>{e[t]||(e[t]=v(this,be,Kt).call(this,t))}),g(this,U,g(this,J,void 0)),e},Kt=function(e){const t=[];let s=e===C;return[l(this,U),l(this,J)].forEach(a=>{const i=a[e]?Object.keys(a[e]).map(o=>[o,a[e][o]]):[];i.length!==0?(s||(s=!0),t.push(...i)):e!==C&&t.push(...Object.keys(a[C]).map(o=>[o,a[C][o]]))}),s?Ms(t):null},St),W,F,Et,Ds=(Et=class{constructor(e){u(this,"name","SmartRouter");f(this,W,[]);f(this,F,[]);g(this,W,e.routers)}add(e,t,s){if(!l(this,F))throw new Error(zt);l(this,F).push([e,t,s])}match(e,t){if(!l(this,F))throw new Error("Fatal error");const s=l(this,W),a=l(this,F),i=s.length;let o=0,r;for(;o<i;o++){const d=s[o];try{for(let n=0,c=a.length;n<c;n++)d.add(...a[n]);r=d.match(e,t)}catch(n){if(n instanceof Gt)continue;throw n}this.match=d.match.bind(d),g(this,W,[d]),g(this,F,void 0);break}if(o===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,r}get activeRouter(){if(l(this,F)||l(this,W).length!==1)throw new Error("No active router has been determined yet.");return l(this,W)[0]}},W=new WeakMap,F=new WeakMap,Et),Ce=Object.create(null),K,j,se,ve,P,$,Z,Tt,Qt=(Tt=class{constructor(e,t,s){f(this,$);f(this,K);f(this,j);f(this,se);f(this,ve,0);f(this,P,Ce);if(g(this,j,s||Object.create(null)),g(this,K,[]),e&&t){const a=Object.create(null);a[e]={handler:t,possibleKeys:[],score:0},g(this,K,[a])}g(this,se,[])}insert(e,t,s){g(this,ve,++Xe(this,ve)._);let a=this;const i=ds(t),o=[];for(let r=0,d=i.length;r<d;r++){const n=i[r],c=i[r+1],p=ms(n,c),m=Array.isArray(p)?p[0]:n;if(m in l(a,j)){a=l(a,j)[m],p&&o.push(p[1]);continue}l(a,j)[m]=new Qt,p&&(l(a,se).push(p),o.push(p[1])),a=l(a,j)[m]}return l(a,K).push({[e]:{handler:s,possibleKeys:o.filter((r,d,n)=>n.indexOf(r)===d),score:l(this,ve)}}),a}search(e,t){var d;const s=[];g(this,P,Ce);let i=[this];const o=Rt(t),r=[];for(let n=0,c=o.length;n<c;n++){const p=o[n],m=n===c-1,x=[];for(let w=0,S=i.length;w<S;w++){const h=i[w],y=l(h,j)[p];y&&(g(y,P,l(h,P)),m?(l(y,j)["*"]&&s.push(...v(this,$,Z).call(this,l(y,j)["*"],e,l(h,P))),s.push(...v(this,$,Z).call(this,y,e,l(h,P)))):x.push(y));for(let I=0,ne=l(h,se).length;I<ne;I++){const ye=l(h,se)[I],L=l(h,P)===Ce?{}:{...l(h,P)};if(ye==="*"){const G=l(h,j)["*"];G&&(s.push(...v(this,$,Z).call(this,G,e,l(h,P))),g(G,P,L),x.push(G));continue}const[ze,Ye,we]=ye;if(!p&&!(we instanceof RegExp))continue;const O=l(h,j)[ze],es=o.slice(n).join("/");if(we instanceof RegExp){const G=we.exec(es);if(G){if(L[Ye]=G[0],s.push(...v(this,$,Z).call(this,O,e,l(h,P),L)),Object.keys(l(O,j)).length){g(O,P,L);const Ge=((d=G[0].match(/\//))==null?void 0:d.length)??0;(r[Ge]||(r[Ge]=[])).push(O)}continue}}(we===!0||we.test(p))&&(L[Ye]=p,m?(s.push(...v(this,$,Z).call(this,O,e,L,l(h,P))),l(O,j)["*"]&&s.push(...v(this,$,Z).call(this,l(O,j)["*"],e,L,l(h,P)))):(g(O,P,L),x.push(O)))}}i=x.concat(r.shift()??[])}return s.length>1&&s.sort((n,c)=>n.score-c.score),[s.map(({handler:n,params:c})=>[n,c])]}},K=new WeakMap,j=new WeakMap,se=new WeakMap,ve=new WeakMap,P=new WeakMap,$=new WeakSet,Z=function(e,t,s,a){const i=[];for(let o=0,r=l(e,K).length;o<r;o++){const d=l(e,K)[o],n=d[t]||d[C],c={};if(n!==void 0&&(n.params=Object.create(null),i.push(n),s!==Ce||a&&a!==Ce))for(let p=0,m=n.possibleKeys.length;p<m;p++){const x=n.possibleKeys[p],w=c[n.score];n.params[x]=a!=null&&a[x]&&!w?a[x]:s[x]??(a==null?void 0:a[x]),c[n.score]=!0}}return i},Tt),ae,Mt,Ls=(Mt=class{constructor(){u(this,"name","TrieRouter");f(this,ae);g(this,ae,new Qt)}add(e,t,s){const a=Lt(t);if(a){for(let i=0,o=a.length;i<o;i++)l(this,ae).insert(e,a[i],s);return}l(this,ae).insert(e,t,s)}match(e,t){return l(this,ae).search(e,t)}},ae=new WeakMap,Mt),T=class extends Vt{constructor(e={}){super(e),this.router=e.router??new Ds({routers:[new Rs,new Ls]})}},Os=e=>{const s={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},a=(o=>typeof o=="string"?o==="*"?()=>o:r=>o===r?r:null:typeof o=="function"?o:r=>o.includes(r)?r:null)(s.origin),i=(o=>typeof o=="function"?o:Array.isArray(o)?()=>o:()=>[])(s.allowMethods);return async function(r,d){var p;function n(m,x){r.res.headers.set(m,x)}const c=await a(r.req.header("origin")||"",r);if(c&&n("Access-Control-Allow-Origin",c),s.origin!=="*"){const m=r.req.header("Vary");m?n("Vary",m):n("Vary","Origin")}if(s.credentials&&n("Access-Control-Allow-Credentials","true"),(p=s.exposeHeaders)!=null&&p.length&&n("Access-Control-Expose-Headers",s.exposeHeaders.join(",")),r.req.method==="OPTIONS"){s.maxAge!=null&&n("Access-Control-Max-Age",s.maxAge.toString());const m=await i(r.req.header("origin")||"",r);m.length&&n("Access-Control-Allow-Methods",m.join(","));let x=s.allowHeaders;if(!(x!=null&&x.length)){const w=r.req.header("Access-Control-Request-Headers");w&&(x=w.split(/\s*,\s*/))}return x!=null&&x.length&&(n("Access-Control-Allow-Headers",x.join(",")),r.res.headers.append("Vary","Access-Control-Request-Headers")),r.res.headers.delete("Content-Length"),r.res.headers.delete("Content-Type"),new Response(null,{headers:r.res.headers,status:204,statusText:"No Content"})}await d()}},Ns=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,at=(e,t=Fs)=>{const s=/\.([a-zA-Z0-9]+?)$/,a=e.match(s);if(!a)return;let i=t[a[1]];return i&&i.startsWith("text")&&(i+="; charset=utf-8"),i},Bs={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},Fs=Bs,$s=(...e)=>{let t=e.filter(i=>i!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const s=t.split("/"),a=[];for(const i of s)i===".."&&a.length>0&&a.at(-1)!==".."?a.pop():i!=="."&&a.push(i);return a.join("/")||"."},Yt={br:".br",zstd:".zst",gzip:".gz"},Hs=Object.keys(Yt),qs="index.html",zs=e=>{const t=e.root??"./",s=e.path,a=e.join??$s;return async(i,o)=>{var p,m,x,w;if(i.finalized)return o();let r;if(e.path)r=e.path;else try{if(r=decodeURIComponent(i.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(r))throw new Error}catch{return await((p=e.onNotFound)==null?void 0:p.call(e,i.req.path,i)),o()}let d=a(t,!s&&e.rewriteRequestPath?e.rewriteRequestPath(r):r);e.isDir&&await e.isDir(d)&&(d=a(d,qs));const n=e.getContent;let c=await n(d,i);if(c instanceof Response)return i.newResponse(c.body,c);if(c){const S=e.mimes&&at(d,e.mimes)||at(d);if(i.header("Content-Type",S||"application/octet-stream"),e.precompressed&&(!S||Ns.test(S))){const h=new Set((m=i.req.header("Accept-Encoding"))==null?void 0:m.split(",").map(y=>y.trim()));for(const y of Hs){if(!h.has(y))continue;const I=await n(d+Yt[y],i);if(I){c=I,i.header("Content-Encoding",y),i.header("Vary","Accept-Encoding",{append:!0});break}}}return await((x=e.onFound)==null?void 0:x.call(e,d,i)),i.body(c)}await((w=e.onNotFound)==null?void 0:w.call(e,d,i)),await o()}},Gs=async(e,t)=>{let s;t&&t.manifest?typeof t.manifest=="string"?s=JSON.parse(t.manifest):s=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?s=JSON.parse(__STATIC_CONTENT_MANIFEST):s=__STATIC_CONTENT_MANIFEST;let a;t&&t.namespace?a=t.namespace:a=__STATIC_CONTENT;const i=s[e]||e;if(!i)return null;const o=await a.get(i,{type:"stream"});return o||null},Vs=e=>async function(s,a){return zs({...e,getContent:async o=>Gs(o,{manifest:e.manifest,namespace:e.namespace?e.namespace:s.env?s.env.__STATIC_CONTENT:void 0})})(s,a)},Zt=e=>Vs(e),q=(e,...t)=>{const s=[""];for(let a=0,i=e.length-1;a<i;a++){s[0]+=e[a];const o=Array.isArray(t[a])?t[a].flat(1/0):[t[a]];for(let r=0,d=o.length;r<d;r++){const n=o[r];if(typeof n=="string")We(n,s);else if(typeof n=="number")s[0]+=n;else{if(typeof n=="boolean"||n===null||n===void 0)continue;if(typeof n=="object"&&n.isEscaped)if(n.callbacks)s.unshift("",n);else{const c=n.toString();c instanceof Promise?s.unshift("",c):s[0]+=c}else n instanceof Promise?s.unshift("",n):We(n.toString(),s)}}}return s[0]+=e.at(-1),s.length===1?"callbacks"in s?me(hs(me(s[0],s.callbacks))):me(s[0]):bs(s,s.callbacks)};const Me=new T;Me.get("/profile/:id",async e=>{const t=e.req.param("id");return e.json({id:t,name:"João Silva",diagnosis:"Em tratamento",nextAppointment:"2024-02-15",treatmentStage:"Quimioterapia"})});Me.post("/symptoms",async e=>(await e.req.json(),e.json({success:!0,message:"Sintomas registrados com sucesso",aiRecommendation:"Monitoramento contínuo recomendado"})));Me.get("/journey/:id",async e=>{const t=e.req.param("id");return e.json({patientId:t,stages:[{date:"2024-01-01",event:"Diagnóstico inicial",status:"completed"},{date:"2024-01-15",event:"Início do tratamento",status:"completed"},{date:"2024-02-01",event:"Primeira sessão de quimioterapia",status:"in-progress"},{date:"2024-03-01",event:"Avaliação de resposta",status:"pending"}]})});Me.post("/triage",async e=>{const t=await e.req.json(),{symptoms:s,age:a,gender:i,history:o}=t,r=s.includes("dor intensa")?"high":"medium";return e.json({urgencyLevel:r,recommendation:r==="high"?"Procure atendimento médico imediato":"Agende uma consulta com seu médico",suggestedSpecialty:"Oncologia",estimatedWaitTime:r==="high"?"0-2 horas":"1-3 dias"})});const Re=new T;Re.get("/patients",async e=>e.json({patients:[{id:"1",name:"João Silva",age:55,diagnosis:"Câncer de Pulmão",stage:"IIIa",lastVisit:"2024-01-28",nextAppointment:"2024-02-15",riskScore:.7,alertLevel:"medium"},{id:"2",name:"Maria Santos",age:42,diagnosis:"Câncer de Mama",stage:"IIb",lastVisit:"2024-01-25",nextAppointment:"2024-02-10",riskScore:.4,alertLevel:"low"}]}));Re.post("/ai-assistant",async e=>{const t=await e.req.json(),{query:s,patientContext:a,type:i}=t;let o="";return i==="treatment-recommendation"?o=`Baseado no perfil do paciente e diretrizes atuais:
    1. Considerar esquema FOLFIRINOX para pacientes com bom performance status
    2. Avaliar função hepática e renal antes do início
    3. Monitorar toxicidade hematológica semanalmente
    4. Suporte nutricional é essencial
    Referências: NCCN Guidelines 2024, ASCO Clinical Practice Guidelines`:i==="drug-interaction"?o=`Análise de interações medicamentosas:
    - Baixo risco de interação entre os medicamentos listados
    - Atenção especial para função renal
    - Ajuste de dose pode ser necessário para pacientes idosos`:o=`Processando consulta: ${s}
    Análise baseada em evidências científicas e protocolos institucionais.`,e.json({response:o,confidence:.92,references:["NCCN Guidelines 2024","ASCO Clinical Practice Guidelines","UpToDate Oncology"],timestamp:new Date().toISOString()})});Re.get("/patient/:id/360",async e=>{const t=e.req.param("id");return e.json({patientId:t,demographics:{name:"João Silva",age:55,gender:"M",bloodType:"O+"},clinicalHistory:{diagnosis:"Adenocarcinoma de pulmão",diagnosisDate:"2023-10-15",stage:"IIIa",mutations:["EGFR+","ALK-"],comorbidities:["Hipertensão","Diabetes tipo 2"]},currentTreatment:{protocol:"Carboplatin + Pemetrexed",cycle:3,startDate:"2024-01-01",response:"Partial response",sideEffects:["Náusea grau 2","Fadiga grau 1"]},labResults:{lastUpdate:"2024-01-28",hemoglobin:11.2,neutrophils:3.5,platelets:180,creatinine:1.1},imaging:{lastCT:"2024-01-20",findings:"Redução de 30% na massa tumoral primária"},psychosocial:{anxietyScore:6,depressionScore:4,socialSupport:"Good",financialConcerns:!0}})});Re.post("/decision-support",async e=>{const t=await e.req.json(),{patientId:s,clinicalQuestion:a}=t;return e.json({recommendations:[{priority:"high",recommendation:"Considerar redução de dose devido a toxicidade",evidence:"Grade A",rationale:"Neutropenia grau 3 recorrente"},{priority:"medium",recommendation:"Adicionar G-CSF profilático",evidence:"Grade B",rationale:"Prevenção de neutropenia febril"}],alternativeOptions:["Mudança para esquema com menor toxicidade hematológica","Considerar terapia alvo se mutação presente"],riskAssessment:{treatmentFailure:.15,severeAdverseEvents:.25,qualityOfLife:.7}})});const De=new T;De.get("/dashboard",async e=>e.json({summary:{totalPatients:156,inTreatment:89,waitingAppointment:34,pendingExams:23,criticalAlerts:10},bottlenecks:[{type:"exam_scheduling",severity:"high",affectedPatients:15,averageDelay:"5 days",recommendation:"Aumentar slots de ressonância magnética"},{type:"authorization_pending",severity:"medium",affectedPatients:8,averageDelay:"3 days",recommendation:"Contatar convênios para agilização"}],patientFlow:[{stage:"Triagem",count:12,avgTime:"2 horas"},{stage:"Diagnóstico",count:28,avgTime:"5 dias"},{stage:"Tratamento",count:89,avgTime:"3 meses"},{stage:"Acompanhamento",count:27,avgTime:"Contínuo"}]}));De.get("/journey-status/:patientId",async e=>{const t=e.req.param("patientId");return e.json({patientId:t,currentStage:"treatment",timeline:[{date:"2024-01-01",event:"Primeira consulta",status:"completed",responsible:"Dr. Silva"},{date:"2024-01-05",event:"Exames solicitados",status:"completed",responsible:"Navegador Ana"},{date:"2024-01-10",event:"Biópsia realizada",status:"completed",responsible:"Dr. Santos"},{date:"2024-01-15",event:"Início quimioterapia",status:"in-progress",responsible:"Equipe Oncologia"},{date:"2024-02-15",event:"Avaliação de resposta",status:"scheduled",responsible:"Dr. Silva"}],alerts:[{type:"appointment_reminder",message:"Consulta em 3 dias",priority:"medium"}],nextSteps:["Completar ciclo de quimioterapia","Agendar exame de controle","Avaliar necessidade de radioterapia"]})});De.post("/coordinate-care",async e=>{const t=await e.req.json(),{patientId:s,action:a,details:i}=t;let o={success:!0,actionTaken:a,timestamp:new Date().toISOString()};switch(a){case"schedule_appointment":o={...o,appointmentDate:"2024-02-20",department:i.department,doctor:i.doctor};break;case"expedite_exam":o={...o,examType:i.examType,newDate:"2024-02-05",previousDate:"2024-02-15"};break;case"contact_insurance":o={...o,insuranceCompany:i.company,authorizationNumber:"AUTH-2024-0123",status:"approved"};break}return e.json(o)});De.get("/alerts",async e=>e.json({alerts:[{id:"1",patientId:"P001",patientName:"João Silva",type:"missed_appointment",message:"Paciente faltou à consulta de 28/01",priority:"high",timestamp:"2024-01-28T14:00:00Z",suggestedAction:"Contatar paciente e reagendar"},{id:"2",patientId:"P002",patientName:"Maria Santos",type:"exam_delay",message:"Tomografia agendada há mais de 7 dias",priority:"medium",timestamp:"2024-01-27T10:00:00Z",suggestedAction:"Verificar disponibilidade de horários alternativos"},{id:"3",patientId:"P003",patientName:"Pedro Costa",type:"insurance_pending",message:"Autorização de quimioterapia pendente há 5 dias",priority:"high",timestamp:"2024-01-26T09:00:00Z",suggestedAction:"Contatar convênio urgentemente"}],summary:{total:15,high:5,medium:7,low:3}}));const Le=new T;Le.get("/dashboard",async e=>e.json({summary:{totalRevenue:25e5,totalCosts:18e5,profit:7e5,profitMargin:28,glosasEvitadas:15e4,glosasRate:2.5},monthlyMetrics:[{month:"Janeiro 2024",revenue:85e4,costs:6e5,glosas:15e3,glosasEvitadas:45e3},{month:"Dezembro 2023",revenue:82e4,costs:58e4,glosas:2e4,glosasEvitadas:38e3}],glosasAnalysis:{totalGlosas:35e3,mainReasons:[{reason:"Documentação incompleta",count:45,value:15e3,percentage:42.8},{reason:"Código incorreto",count:30,value:1e4,percentage:28.5},{reason:"Autorização expirada",count:20,value:7e3,percentage:20},{reason:"Procedimento não coberto",count:10,value:3e3,percentage:8.7}]},costCenters:[{department:"Oncologia",budget:8e5,spent:65e4,percentage:81.25},{department:"Radioterapia",budget:5e5,spent:42e4,percentage:84},{department:"Cirurgia",budget:3e5,spent:25e4,percentage:83.33},{department:"Diagnóstico",budget:2e5,spent:18e4,percentage:90}]}));Le.post("/predict-glosa",async e=>{const t=await e.req.json(),{procedure:s,diagnosis:a,insurance:i,documentation:o}=t;let r=.2,d=[];return o.includes("laudo_completo")||(r+=.3,d.push({factor:"Laudo médico incompleto",impact:"high",recommendation:"Solicitar laudo detalhado com CID e justificativa clínica"})),o.includes("autorizacao_previa")||(r+=.25,d.push({factor:"Autorização prévia ausente",impact:"high",recommendation:"Obter autorização antes do procedimento"})),s.complexity==="high"&&!o.includes("segunda_opiniao")&&(r+=.15,d.push({factor:"Segunda opinião não documentada",impact:"medium",recommendation:"Incluir parecer de especialista"})),e.json({riskScore:Math.min(r,1),riskLevel:r>.7?"high":r>.4?"medium":"low",estimatedGlosaValue:r*(s.value||1e4),risks:d,preventiveActions:["Revisar toda documentação antes do envio","Confirmar cobertura com o convênio","Garantir que todos os códigos estejam corretos","Manter registro fotográfico quando aplicável"],confidence:.87})});Le.get("/revenue-analysis",async e=>e.json({byInsurance:[{name:"SUS",revenue:8e5,percentage:32,avgTicket:2500,paymentDelay:45},{name:"Unimed",revenue:6e5,percentage:24,avgTicket:5e3,paymentDelay:30},{name:"SulAmérica",revenue:45e4,percentage:18,avgTicket:4500,paymentDelay:25},{name:"Bradesco Saúde",revenue:4e5,percentage:16,avgTicket:4e3,paymentDelay:28},{name:"Particular",revenue:25e4,percentage:10,avgTicket:8e3,paymentDelay:0}],byProcedure:[{procedure:"Quimioterapia",revenue:9e5,count:180,avgValue:5e3},{procedure:"Radioterapia",revenue:6e5,count:120,avgValue:5e3},{procedure:"Cirurgia Oncológica",revenue:5e5,count:50,avgValue:1e4},{procedure:"Consultas",revenue:3e5,count:1e3,avgValue:300},{procedure:"Exames",revenue:2e5,count:400,avgValue:500}]}));Le.get("/optimization-suggestions",async e=>e.json({suggestions:[{area:"Medicamentos",currentCost:3e5,potentialSaving:45e3,recommendation:"Negociar compra em volume com fornecedores",priority:"high",implementation:"immediate"},{area:"Exames Laboratoriais",currentCost:15e4,potentialSaving:22500,recommendation:"Implementar protocolos para evitar exames desnecessários",priority:"medium",implementation:"1-2 months"},{area:"Gestão de Leitos",currentCost:2e5,potentialSaving:3e4,recommendation:"Otimizar tempo de permanência com navegação de pacientes",priority:"high",implementation:"2-3 months"},{area:"Energia e Utilidades",currentCost:5e4,potentialSaving:7500,recommendation:"Implementar medidas de eficiência energética",priority:"low",implementation:"3-6 months"}],totalPotentialSaving:105e3,estimatedROI:3.5,implementationCost:3e4}));const Oe=new T;Oe.get("/profile/:patientId",async e=>{const t=e.req.param("patientId");return e.json({patientId:t,wellnessScore:72,mentalHealth:{anxietyLevel:5,depressionScore:3,stressLevel:6,lastAssessment:"2024-01-25",trend:"improving"},physicalWellbeing:{painLevel:4,fatigueLevel:5,sleepQuality:6,appetiteLevel:7,mobilityScore:8},socialSupport:{familySupport:"strong",friendsNetwork:"moderate",supportGroupParticipation:!0,communityEngagement:"active"},emotionalNeeds:[{need:"Medo do futuro",severity:"moderate",addressed:!0,intervention:"Sessões de terapia cognitivo-comportamental"},{need:"Preocupação com família",severity:"high",addressed:!1,intervention:"Terapia familiar recomendada"}],interventions:[{date:"2024-01-20",type:"Consulta psicológica",professional:"Dra. Ana Costa",outcome:"Melhora no manejo da ansiedade"},{date:"2024-01-22",type:"Grupo de apoio",professional:"Equipe multidisciplinar",outcome:"Paciente relatou sentir-se acolhido"}]})});Oe.post("/mental-health-screening",async e=>{const t=await e.req.json(),{patientId:s,responses:a}=t;let i=0,o=0;a.forEach(n=>{n.category==="anxiety"?i+=n.value:n.category==="depression"&&(o+=n.value)});const r=i>15?"severe":i>10?"moderate":i>5?"mild":"minimal",d=o>20?"severe":o>15?"moderately severe":o>10?"moderate":o>5?"mild":"minimal";return e.json({patientId:s,screeningDate:new Date().toISOString(),results:{anxiety:{score:i,severity:r,requiresIntervention:i>10},depression:{score:o,severity:d,requiresIntervention:o>10}},recommendations:[i>10&&"Encaminhar para psiquiatra",o>10&&"Iniciar psicoterapia",(i>5||o>5)&&"Monitoramento semanal","Manter grupo de apoio"].filter(Boolean),alertLevel:i>15||o>20?"high":i>10||o>15?"medium":"low"})});Oe.post("/predict-crisis",async e=>{const t=await e.req.json(),{patientId:s,recentEvents:a,symptoms:i,socialFactors:o}=t;let r=.2;return a.includes("loss")&&(r+=.2),a.includes("treatment_failure")&&(r+=.25),i.includes("hopelessness")&&(r+=.3),i.includes("isolation")&&(r+=.15),o.support==="weak"&&(r+=.2),o.financialStress&&(r+=.15),o.support==="strong"&&(r-=.1),o.activeInTherapy&&(r-=.15),r=Math.max(0,Math.min(1,r)),e.json({patientId:s,riskScore:r,riskLevel:r>.7?"high":r>.4?"medium":"low",timeframe:r>.7?"24-48 hours":r>.4?"1 week":"1 month",interventions:[r>.7&&{priority:"immediate",action:"Contato imediato com psiquiatra",responsible:"Equipe de plantão"},r>.4&&{priority:"urgent",action:"Agendar consulta em 48h",responsible:"Psicólogo responsável"},{priority:"routine",action:"Intensificar monitoramento",responsible:"Equipe de enfermagem"}].filter(Boolean),monitoringPlan:{frequency:r>.7?"daily":r>.4?"twice weekly":"weekly",method:"Phone check-in and mood tracking",duration:"2 weeks with reassessment"}})});Oe.get("/support-groups/:patientId",async e=>(e.req.param("patientId"),e.json({recommendedGroups:[{id:"G001",name:"Grupo de Apoio - Câncer de Mama",type:"disease-specific",meetingFrequency:"Semanal",nextMeeting:"2024-02-05 14:00",location:"Sala 201 - Ala B",facilitator:"Psic. Maria Silva",currentMembers:12,matchScore:.95},{id:"G002",name:"Mindfulness e Meditação",type:"wellness",meetingFrequency:"2x por semana",nextMeeting:"2024-02-03 10:00",location:"Espaço Bem-Estar",facilitator:"Terapeuta João Santos",currentMembers:8,matchScore:.82},{id:"G003",name:"Família e Cuidadores",type:"family-support",meetingFrequency:"Quinzenal",nextMeeting:"2024-02-10 16:00",location:"Auditório Principal",facilitator:"Assistente Social Ana Costa",currentMembers:20,matchScore:.78}],activeParticipation:[{groupId:"G001",joinedDate:"2024-01-01",attendance:"100%",engagement:"high"}]})));const he=new T;he.get("/dashboard",async e=>e.json({activeStudies:12,totalPatients:456,dataPoints:125e4,insights:89,studies:[{id:"ST001",title:"Eficácia da Imunoterapia em Câncer de Pulmão Avançado",phase:"III",enrolledPatients:85,targetEnrollment:100,startDate:"2023-06-01",estimatedCompletion:"2025-06-01",status:"recruiting"},{id:"ST002",title:"Biomarcadores Preditivos de Resposta à Quimioterapia",phase:"II",enrolledPatients:45,targetEnrollment:50,startDate:"2023-09-01",estimatedCompletion:"2024-09-01",status:"active"},{id:"ST003",title:"Qualidade de Vida Pós-Tratamento Radioterápico",phase:"Observational",enrolledPatients:120,targetEnrollment:150,startDate:"2023-03-01",estimatedCompletion:"2024-12-01",status:"recruiting"}],recentInsights:[{date:"2024-01-28",type:"correlation",finding:"Correlação positiva entre níveis de IL-6 e resposta à imunoterapia",significance:"p < 0.001",impact:"high"},{date:"2024-01-25",type:"pattern",finding:"Padrão de toxicidade identificado em pacientes > 65 anos",significance:"p = 0.023",impact:"medium"}]}));he.post("/analyze-cohort",async e=>{const t=await e.req.json(),{criteria:s,analysisType:a,variables:i}=t;return e.json({cohortSize:145,demographics:{meanAge:58.3,genderDistribution:{male:.52,female:.48},stageDistribution:{I:.15,II:.25,III:.35,IV:.25}},outcomes:{overallSurvival:{median:24.5,oneYear:.82,twoYear:.65,fiveYear:.45},progressionFreeSurvival:{median:11.2,sixMonth:.68,oneYear:.45},responseRate:{completeResponse:.12,partialResponse:.38,stableDisease:.3,progressiveDisease:.2}},correlations:[{variable1:"Age",variable2:"Treatment Response",coefficient:-.23,pValue:.042,interpretation:"Idade negativamente correlacionada com resposta"},{variable1:"Biomarker X",variable2:"Survival",coefficient:.56,pValue:.001,interpretation:"Forte correlação positiva com sobrevida"}],statisticalTests:{chiSquare:{value:15.23,df:3,pValue:.0016,significant:!0},logRankTest:{value:8.45,pValue:.0037,significant:!0}}})});he.get("/opportunities",async e=>e.json({dataGaps:[{area:"Toxicidade tardia em radioterapia",patientCount:230,dataCompleteness:.45,priority:"high",potentialImpact:"Melhor manejo de efeitos colaterais de longo prazo"},{area:"Marcadores genéticos em câncer colorretal",patientCount:156,dataCompleteness:.62,priority:"medium",potentialImpact:"Personalização do tratamento"}],emergingPatterns:[{pattern:"Aumento de resposta em combinação terapêutica específica",confidence:.87,patientsAffected:45,recommendation:"Considerar estudo prospectivo"},{pattern:"Subgrupo com resistência primária identificado",confidence:.92,patientsAffected:28,recommendation:"Investigar mecanismos moleculares"}],eligiblePatients:{forClinicalTrials:89,forObservationalStudies:234,forRegistries:456},collaborationOpportunities:[{institution:"Instituto Nacional do Câncer",area:"Genômica do câncer",status:"in-discussion"},{institution:"Harvard Medical School",area:"Imunoterapia",status:"proposal-submitted"}]}));he.post("/generate-hypothesis",async e=>{const t=await e.req.json(),{dataSource:s,variables:a,context:i}=t;return e.json({hypotheses:[{id:"H001",statement:"Pacientes com expressão elevada de PD-L1 e baixa carga mutacional apresentam melhor resposta à combinação de imunoterapia com quimioterapia",confidence:.78,supportingData:{nPatients:67,observedEffect:.42,pValue:.023},suggestedStudyDesign:"Randomized controlled trial com estratificação por biomarcadores",estimatedSampleSize:150,primaryEndpoint:"Progression-free survival"},{id:"H002",statement:"A administração de probióticos durante quimioterapia reduz incidência de mucosite severa",confidence:.65,supportingData:{nPatients:34,observedEffect:.31,pValue:.048},suggestedStudyDesign:"Double-blind placebo-controlled trial",estimatedSampleSize:100,primaryEndpoint:"Incidence of grade 3-4 mucositis"}],dataQuality:{completeness:.82,consistency:.91,timeliness:.88},recommendations:["Coletar dados adicionais de microbioma","Padronizar avaliação de toxicidade","Implementar coleta prospectiva de PROs"]})});he.post("/export-data",async e=>{const t=await e.req.json(),{studyId:s,variables:a,format:i,filters:o}=t;return e.json({exportId:"EXP-2024-0128-001",status:"processing",recordsCount:234,variables:a.length,anonymizationLevel:"full",format:i||"csv",estimatedSize:"15.2 MB",expirationDate:"2024-02-28",downloadUrl:"/api/research/download/EXP-2024-0128-001",auditLog:{requestedBy:"Dr. Research",requestDate:new Date().toISOString(),purpose:"Clinical trial analysis",ethicsApproval:"CEP-2024-001"}})});const ie=new T;ie.get("/system-health",async e=>e.json({status:"healthy",uptime:"45 days 12:34:56",timestamp:new Date().toISOString(),services:{database:{status:"operational",latency:12,connections:45,maxConnections:100},aiEngine:{status:"operational",activeModels:8,requestsPerMinute:234,avgResponseTime:145},storage:{status:"operational",used:"234 GB",total:"1 TB",percentage:23.4},cache:{status:"operational",hitRate:.89,memory:"512 MB",entries:12456}},performance:{cpu:45,memory:67,disk:23,network:{in:"125 Mbps",out:"89 Mbps"}},alerts:[{level:"warning",service:"database",message:"Connection pool reaching 80% capacity",timestamp:"2024-01-28T10:30:00Z"}]}));ie.get("/metrics",async e=>e.json({users:{total:523,active:412,newThisMonth:45,byRole:{patients:234,doctors:56,nurses:78,administrators:12,researchers:8,navigators:34,support:89,financial:12}},usage:{dailyActiveUsers:389,weeklyActiveUsers:456,monthlyActiveUsers:512,avgSessionDuration:"24 minutes",pageViews:{today:12456,week:78234,month:312456}},aiUsage:{totalRequests:45678,byType:{clinicalAssistant:12345,triage:8934,glosasPrediction:5678,emotionalRisk:3456,researchAnalysis:2345},avgConfidence:.87,feedbackScore:4.2},dataQuality:{completeness:.92,accuracy:.95,timeliness:.88,consistency:.91,validity:.94},compliance:{lgpdCompliance:!0,dataRetention:"compliant",auditLogsEnabled:!0,encryptionStatus:"AES-256",lastSecurityAudit:"2024-01-15",nextAudit:"2024-02-15"}}));ie.get("/users",async e=>e.json({users:[{id:"U001",name:"Dr. João Silva",email:"joao.silva@hospital.com",role:"doctor",department:"Oncologia",status:"active",lastLogin:"2024-01-28T09:15:00Z",created:"2023-06-01T10:00:00Z"},{id:"U002",name:"Maria Santos",email:"maria.santos@hospital.com",role:"nurse",department:"Navegação",status:"active",lastLogin:"2024-01-28T08:30:00Z",created:"2023-07-15T14:00:00Z"}],total:523,page:1,pageSize:20}));ie.get("/audit-logs",async e=>e.json({logs:[{id:"LOG001",timestamp:"2024-01-28T11:30:00Z",user:"Dr. João Silva",action:"VIEW_PATIENT_RECORD",resource:"Patient ID: P123",ip:"192.168.1.100",result:"success"},{id:"LOG002",timestamp:"2024-01-28T11:25:00Z",user:"Maria Santos",action:"UPDATE_APPOINTMENT",resource:"Appointment ID: A456",ip:"192.168.1.101",result:"success"},{id:"LOG003",timestamp:"2024-01-28T11:20:00Z",user:"System",action:"AI_PREDICTION",resource:"Glosas Risk Analysis",ip:"internal",result:"success",metadata:{confidence:.89,processingTime:"145ms"}}],filters:{dateRange:"last-24-hours",actions:"all",users:"all",results:"all"},total:12456,page:1,pageSize:50}));ie.get("/configuration",async e=>e.json({general:{institutionName:"ACCamargo Cancer Center",timezone:"America/Sao_Paulo",language:"pt-BR",dateFormat:"DD/MM/YYYY",currency:"BRL"},ai:{models:{clinical:{name:"clinical-assistant-v2",version:"2.1.0",lastUpdate:"2024-01-15",accuracy:.92},triage:{name:"auto-triage-v1",version:"1.5.0",lastUpdate:"2024-01-10",accuracy:.88},financial:{name:"glosas-predictor-v3",version:"3.0.1",lastUpdate:"2024-01-20",accuracy:.87}},thresholds:{confidenceMinimum:.75,alertThreshold:.85,autoApprovalThreshold:.95}},integration:{ehr:{system:"Custom EHR",status:"connected",lastSync:"2024-01-28T11:00:00Z"},laboratory:{system:"LabSystem Pro",status:"connected",lastSync:"2024-01-28T10:45:00Z"},imaging:{system:"PACS System",status:"connected",lastSync:"2024-01-28T10:30:00Z"}},security:{passwordPolicy:{minLength:12,requireSpecialChar:!0,requireNumber:!0,requireUppercase:!0,expirationDays:90},sessionTimeout:30,mfaRequired:!0,ipWhitelist:["192.168.0.0/16"]}}));ie.get("/ai-performance",async e=>e.json({models:[{name:"Clinical Assistant",performance:{accuracy:.92,precision:.89,recall:.91,f1Score:.9,auc:.94},usage:{requestsToday:1234,avgResponseTime:145,errorRate:.02},feedback:{positive:456,negative:23,neutral:89,avgRating:4.3},lastRetrained:"2024-01-15",nextRetraining:"2024-02-15"},{name:"Glosas Predictor",performance:{accuracy:.87,precision:.85,recall:.88,f1Score:.86,auc:.91},usage:{requestsToday:567,avgResponseTime:89,errorRate:.01},financialImpact:{glosasPrevenidas:145,valorEconomizado:45e4},lastRetrained:"2024-01-10",nextRetraining:"2024-02-10"}],training:{datasetSize:125e3,lastUpdate:"2024-01-20",validationAccuracy:.89,crossValidationFolds:5},alerts:[{model:"Emotional Risk Detector",issue:"Performance degradation detected",metric:"accuracy",current:.72,threshold:.75,recommendation:"Immediate retraining required"}]}));const oe=new T;oe.post("/prompt-engineering",async e=>{const t=await e.req.json(),{userInput:s,context:a,persona:i,intent:o}=t,r={original:s,enhanced:`[Context: ${a}] [Role: ${i}] [Intent: ${o}] ${s}`,templates:[{name:"clinical-query",prompt:`Como médico oncologista experiente, analise o seguinte caso: ${s}. 
                 Considere as diretrizes atuais da NCCN e forneça recomendações baseadas em evidências.`},{name:"patient-communication",prompt:`Explique de forma clara e empática para o paciente: ${s}. 
                 Use linguagem acessível e ofereça suporte emocional.`}],confidence:.92,suggestedModel:"clinical-gpt-4"};return e.json(r)});oe.post("/servo-mechanisms",async e=>{const t=await e.req.json(),{trigger:s,data:a,actionType:i}=t,o={"glosa-prevention":{triggered:!0,actions:[{type:"document-review",status:"completed",finding:"Missing procedure justification",correction:"Added clinical justification to record"},{type:"code-validation",status:"completed",finding:"Incorrect procedure code",correction:"Updated to correct ICD-10 code"}],prevented:!0,estimatedSaving:15e3},"appointment-optimization":{triggered:!0,actions:[{type:"schedule-analysis",finding:"Conflict detected",resolution:"Rescheduled to available slot"},{type:"resource-allocation",finding:"Equipment available",resolution:"Reserved MRI machine for patient"}],optimized:!0,timeSaved:"3 days"},"fatigue-alert":{triggered:!0,actions:[{type:"risk-assessment",score:.78,level:"high"},{type:"notification",sent_to:["psychologist","nurse","doctor"],priority:"urgent"},{type:"intervention-scheduled",appointment:"2024-02-01 10:00",professional:"Psic. Ana Costa"}]}};return e.json({servoId:`SERVO-${Date.now()}`,trigger:s,actionType:i,result:o[i]||{triggered:!1,reason:"Unknown action type"},timestamp:new Date().toISOString(),feedback_required:!0})});oe.post("/auto-triage",async e=>{const t=await e.req.json(),{message:s,sessionId:a,patientInfo:i}=t,o=s.toLowerCase();let r="low",d="",n=[];return o.includes("dor")&&(o.includes("forte")||o.includes("intensa"))?(r="high",d="Procure atendimento médico imediato no pronto-socorro",n=["Há quanto tempo sente esta dor?","A dor piora com algum movimento?"]):o.includes("febre")||o.includes("sangramento")?(r="medium",d="Agende consulta para hoje ou amanhã",n=["Qual sua temperatura?","Está tomando alguma medicação?"]):(r="low",d="Agende consulta de rotina com seu médico",n=["Há outros sintomas?","Isso interfere em suas atividades diárias?"]),e.json({sessionId:a,response:{message:`Entendo sua preocupação. ${d}`,urgency:r,questions:n,suggestedDepartment:"Oncologia",estimatedWaitTime:r==="high"?"Imediato":r==="medium"?"24-48h":"3-5 dias"},analysis:{detectedSymptoms:["dor","desconforto"],confidence:.85,requiresHumanReview:r==="high"}})});oe.post("/summarize-report",async e=>{const t=await e.req.json(),{reportText:s,reportType:a}=t,i={reportType:a,keyFindings:["Massa tumoral de 3.2cm no lobo superior direito","Sem evidência de metástases","Linfonodos mediastinais dentro dos limites normais"],diagnosis:"Adenocarcinoma pulmonar estadio IB",recommendations:["Ressecção cirúrgica recomendada","Avaliar necessidade de quimioterapia adjuvante","PET-CT de controle em 3 meses"],urgency:"moderate",extractedData:{tumorSize:"3.2cm",location:"Lobo superior direito",stage:"IB",biomarkers:{EGFR:"negative",ALK:"negative","PD-L1":"15%"}},confidence:.91};return e.json(i)});oe.post("/predict-risk",async e=>{const t=await e.req.json(),{patientId:s,riskType:a,clinicalData:i}=t,r={recurrence:{risk:.23,timeframe:"2 years",factors:[{factor:"Stage",weight:.3,value:"IIIA"},{factor:"Age",weight:.2,value:"65"},{factor:"Biomarkers",weight:.5,value:"EGFR+"}],recommendations:["Intensificar seguimento","Considerar terapia adjuvante estendida","Monitorar marcadores tumorais mensalmente"]},depression:{risk:.67,timeframe:"1 month",factors:[{factor:"Previous history",weight:.4,value:"Yes"},{factor:"Social support",weight:.3,value:"Low"},{factor:"Treatment phase",weight:.3,value:"Active chemo"}],recommendations:["Iniciar acompanhamento psicológico","Avaliar necessidade de medicação","Incluir em grupo de apoio"]},"treatment-adherence":{risk:.31,timeframe:"3 months",factors:[{factor:"Side effects",weight:.35,value:"Moderate"},{factor:"Distance from hospital",weight:.25,value:"50km"},{factor:"Financial situation",weight:.4,value:"Challenging"}],recommendations:["Implementar programa de navegação intensiva","Avaliar suporte financeiro","Considerar telemedicina para follow-ups"]}}[a]||{risk:0,error:"Unknown risk type"};return e.json({patientId:s,riskType:a,prediction:r,modelVersion:"2.1.0",timestamp:new Date().toISOString(),requiresClinicalValidation:r.risk>.7})});oe.post("/feedback",async e=>{const t=await e.req.json(),{predictionId:s,feedback:a,userId:i,comments:o}=t;return e.json({feedbackId:`FB-${Date.now()}`,status:"recorded",impact:a==="positive"?"reinforcement":"adjustment",modelUpdate:{scheduled:!0,nextRetraining:"2024-02-15",expectedImprovement:.02},message:"Obrigado pelo feedback. Sua contribuição ajuda a melhorar nosso sistema.",aggregatedFeedback:{total:1234,positive:1089,negative:145,accuracy:.88}})});const z=(e,t)=>{const s=_s(e);return`
    <!-- Ansiedade de Laura -->
    <div id="ai-concerns-container" class="ai-concerns-dashboard glass-effect rounded-2xl p-6 mb-8 border border-orange-200/50 transition-all duration-500">
      <!-- Header com ícone animado e botão de recolher -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <div class="relative">
            <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-10 h-10">
            <span class="absolute -top-1 -right-1 flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
          </div>
          <div>
            <h3 class="text-lg font-bold text-gray-800">Ansiedade de Laura</h3>
            <p class="text-sm text-gray-600 ai-subtitle">${s.subtitle}</p>
          </div>
        </div>
        <!-- Botão de Recolher/Expandir -->
        <button onclick="toggleAICollapse()" class="ai-toggle-btn text-gray-500 hover:text-orange-500 transition-all duration-300 p-2 rounded-lg hover:bg-orange-50" title="Recolher/Expandir">
          <i id="ai-toggle-icon" class="fas fa-compress-alt text-lg"></i>
        </button>
      </div>

      <!-- Conteúdo Expansível -->
      <div id="ai-content-expanded" class="ai-expanded-content">
        <!-- Alertas Preditivos Principais -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          ${s.mainAlerts.map(a=>`
            <div class="ai-concern-card ${a.severity}-severity rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all" onclick="showConcernDetails('${a.id}')">
              <div class="flex items-start gap-3">
                <div class="concern-icon-wrapper">
                  <i class="${a.icon} text-2xl"></i>
                </div>
                <div class="flex-1">
                  <h4 class="font-semibold text-sm mb-1">${a.title}</h4>
                  <p class="text-xs text-gray-600 mb-2">${a.description}</p>
                  <div class="flex items-center justify-between">
                    <span class="concern-badge">${a.timeframe}</span>
                    <span class="text-xs font-bold">${a.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Métricas Preditivas -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          ${s.metrics.map(a=>`
            <div class="metric-card bg-white/70 rounded-lg p-3 border border-gray-200">
              <div class="flex items-center justify-between mb-2">
                <i class="${a.icon} text-orange-500"></i>
                <span class="trend-indicator ${a.trend==="up"?"text-red-500":a.trend==="down"?"text-green-500":"text-gray-500"}">
                  <i class="fas fa-arrow-${a.trend==="up"?"up":a.trend==="down"?"down":"right"} text-xs"></i>
                </span>
              </div>
              <div class="text-2xl font-bold text-gray-800">${a.value}</div>
              <div class="text-xs text-gray-600">${a.label}</div>
              <div class="text-xs text-orange-600 mt-1">
                <i class="fas fa-exclamation-triangle text-xs"></i> ${a.prediction}
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Timeline de Ações Recomendadas com Seleção -->
        <div class="ai-recommendations bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4">
          <div class="flex items-center justify-between mb-3">
            <h4 class="font-semibold text-sm flex items-center gap-2">
              <i class="fas fa-lightbulb text-yellow-500"></i>
              Ações Recomendadas pelo Assistente
            </h4>
            <button onclick="executeSelectedActions()" class="execute-btn bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <i class="fas fa-play"></i>
              Executar
            </button>
          </div>
          <div class="space-y-2">
            ${s.recommendations.map((a,i)=>`
              <div class="recommendation-item flex items-center gap-3 bg-white/80 rounded-lg p-3 hover:bg-white transition-colors" data-rec-id="${a.id}">
                <!-- Checkbox para seleção -->
                <input type="checkbox" 
                       id="rec-${a.id}" 
                       class="rec-checkbox w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" 
                       onchange="updateExecuteButton()">
                
                <label for="rec-${a.id}" class="flex-1 flex items-center gap-3 cursor-pointer">
                  <div class="rec-number w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold">
                    ${i+1}
                  </div>
                  <div class="flex-1">
                    <p class="text-sm text-gray-700 rec-action-text">${a.action}</p>
                    <p class="text-xs text-gray-500">${a.reason}</p>
                  </div>
                  <div class="rec-priority">
                    <span class="priority-badge priority-${a.priority}">
                      ${a.priority==="high"?"Urgente":a.priority==="medium"?"Importante":"Preventivo"}
                    </span>
                  </div>
                </label>
              </div>
            `).join("")}
          </div>
          <!-- Contador de ações selecionadas -->
          <div class="mt-3 text-xs text-gray-600 text-center" id="selected-counter">
            Nenhuma ação selecionada
          </div>
        </div>
      </div>

      <!-- Versão Compacta (quando recolhido) -->
      <div id="ai-content-collapsed" class="ai-collapsed-content hidden">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex flex-wrap items-center gap-4">
            <!-- Alertas Resumidos com Ícones -->
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-2">
                <i class="fas fa-exclamation-triangle text-red-500 text-sm"></i>
                <span class="text-sm font-medium text-gray-700">Críticos:</span>
                <span class="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-bold">
                  ${s.mainAlerts.filter(a=>a.severity==="high").length}
                </span>
              </div>
              <div class="text-gray-400">|</div>
              <div class="flex items-center gap-2">
                <i class="fas fa-exclamation-circle text-yellow-500 text-sm"></i>
                <span class="text-sm font-medium text-gray-700">Médios:</span>
                <span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-bold">
                  ${s.mainAlerts.filter(a=>a.severity==="medium").length}
                </span>
              </div>
              <div class="text-gray-400">|</div>
              <div class="flex items-center gap-2">
                <i class="fas fa-info-circle text-blue-500 text-sm"></i>
                <span class="text-sm font-medium text-gray-700">Baixos:</span>
                <span class="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">
                  ${s.mainAlerts.filter(a=>a.severity==="low").length}
                </span>
              </div>
            </div>
            
            <!-- Ações Recomendadas -->
            <div class="flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-lg">
              <i class="fas fa-lightbulb text-orange-500"></i>
              <span class="text-sm font-medium text-gray-700">
                ${s.recommendations.length} ações recomendadas
              </span>
              ${s.recommendations.filter(a=>a.priority==="high").length>0?`
                <span class="bg-orange-500 text-white px-2 py-0.5 rounded-full text-xs font-bold ml-1">
                  ${s.recommendations.filter(a=>a.priority==="high").length} urgentes
                </span>
              `:""}
            </div>
          </div>
          
          <!-- Status e Métricas Principais -->
          <div class="flex items-center gap-4">
            ${e==="financial"?`
              <div class="flex items-center gap-2">
                <i class="fas fa-shield-alt text-green-500"></i>
                <span class="text-sm font-medium text-gray-700">Glosas Evitadas:</span>
                <span class="text-lg font-bold text-green-600">R$ 2.4M</span>
              </div>
            `:e==="admin"?`
              <div class="flex items-center gap-2">
                <i class="fas fa-server text-emerald-500"></i>
                <span class="text-sm font-medium text-gray-700">Uptime:</span>
                <span class="text-lg font-bold text-emerald-600">99.98%</span>
              </div>
            `:e==="doctor"?`
              <div class="flex items-center gap-2">
                <i class="fas fa-users text-blue-500"></i>
                <span class="text-sm font-medium text-gray-700">Pacientes:</span>
                <span class="text-lg font-bold text-blue-600">47 ativos</span>
              </div>
            `:e==="navigator"?`
              <div class="flex items-center gap-2">
                <i class="fas fa-route text-purple-500"></i>
                <span class="text-sm font-medium text-gray-700">Em Navegação:</span>
                <span class="text-lg font-bold text-purple-600">178</span>
              </div>
            `:e==="patient"?`
              <div class="flex items-center gap-2">
                <i class="fas fa-heartbeat text-red-500"></i>
                <span class="text-sm font-medium text-gray-700">Adesão:</span>
                <span class="text-lg font-bold text-red-600">92%</span>
              </div>
            `:e==="wellness"?`
              <div class="flex items-center gap-2">
                <i class="fas fa-smile text-teal-500"></i>
                <span class="text-sm font-medium text-gray-700">Bem-Estar:</span>
                <span class="text-lg font-bold text-teal-600">73%</span>
              </div>
            `:e==="research"?`
              <div class="flex items-center gap-2">
                <i class="fas fa-flask text-indigo-500"></i>
                <span class="text-sm font-medium text-gray-700">Estudos:</span>
                <span class="text-lg font-bold text-indigo-600">24 ativos</span>
              </div>
            `:""}
            
            <!-- Indicador de Status -->
            <div class="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-3 py-1.5 rounded-lg">
              <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span class="text-sm font-medium text-orange-600">IA Ativa</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Estilos adicionais para a versão aprimorada -->
    <style>
      /* Transições suaves para recolher/expandir */
      .ai-expanded-content {
        transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), 
                    opacity 0.3s ease-out;
      }
      
      .ai-collapsed-content {
        overflow: hidden;
      }
      
      /* Container com estado recolhido - cores específicas por portal */
      #ai-concerns-container.collapsed {
        background: ${e==="admin"?"rgba(220, 252, 231, 0.98)":e==="financial"?"rgba(240, 253, 244, 0.98)":e==="doctor"?"rgba(239, 246, 255, 0.98)":e==="navigator"?"rgba(250, 245, 255, 0.98)":e==="patient"?"rgba(254, 242, 242, 0.98)":e==="wellness"?"rgba(240, 253, 250, 0.98)":e==="research"?"rgba(238, 242, 255, 0.98)":"rgba(255, 237, 213, 0.98)"} !important;
        border-color: ${e==="admin"?"rgba(34, 197, 94, 0.3)":e==="financial"?"rgba(74, 222, 128, 0.3)":e==="doctor"?"rgba(96, 165, 250, 0.3)":e==="navigator"?"rgba(196, 181, 253, 0.3)":e==="patient"?"rgba(252, 165, 165, 0.3)":e==="wellness"?"rgba(94, 234, 212, 0.3)":e==="research"?"rgba(165, 180, 252, 0.3)":"rgba(251, 146, 60, 0.3)"} !important;
        box-shadow: 0 4px 6px -1px ${e==="admin"?"rgba(34, 197, 94, 0.1)":e==="financial"?"rgba(74, 222, 128, 0.1)":e==="doctor"?"rgba(96, 165, 250, 0.1)":e==="navigator"?"rgba(196, 181, 253, 0.1)":e==="patient"?"rgba(252, 165, 165, 0.1)":e==="wellness"?"rgba(94, 234, 212, 0.1)":e==="research"?"rgba(165, 180, 252, 0.1)":"rgba(251, 146, 60, 0.1)"};
      }
      
      /* Animações de entrada/saída */
      @keyframes slideIn {
        from { 
          opacity: 0; 
          transform: translateY(-20px);
          max-height: 0;
        }
        to { 
          opacity: 1; 
          transform: translateY(0);
          max-height: 200px;
        }
      }
      
      @keyframes slideOut {
        from { 
          opacity: 1; 
          transform: translateY(0);
        }
        to { 
          opacity: 0; 
          transform: translateY(-20px);
        }
      }
      
      /* Hover melhorado no botão toggle */
      .ai-toggle-btn {
        position: relative;
        overflow: hidden;
      }
      
      .ai-toggle-btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(251, 146, 60, 0.2);
        transform: translate(-50%, -50%);
        transition: width 0.4s ease, height 0.4s ease;
      }
      
      .ai-toggle-btn:hover::before {
        width: 40px;
        height: 40px;
      }
      
      /* Estilo do botão de toggle */
      .ai-toggle-btn {
        transition: transform 0.3s ease;
      }
      
      .ai-toggle-btn:hover {
        transform: scale(1.1);
      }
      
      /* Checkbox customizado */
      .rec-checkbox:checked {
        background-color: #ff8c00;
        border-color: #ff8c00;
      }
      
      /* Ação executada (verde sem tique) */
      .recommendation-item.executed {
        background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%) !important;
        border-left: 3px solid #10b981;
      }
      
      .recommendation-item.executed .rec-action-text {
        color: #059669;
        font-weight: 500;
      }
      
      /* Botão executar desabilitado */
      .execute-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      
      /* Transição suave no ícone do toggle */
      #ai-toggle-icon {
        transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .ai-toggle-btn:hover #ai-toggle-icon {
        transform: scale(1.15) rotate(180deg);
      }
      
      /* Efeito de brilho no container quando recolhido */
      #ai-concerns-container.collapsed::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent
        );
        animation: shimmer 3s infinite;
        pointer-events: none;
      }
      
      @keyframes shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
      }
      
      /* Indicadores animados no estado recolhido */
      .ai-collapsed-content .bg-red-100,
      .ai-collapsed-content .bg-yellow-100,
      .ai-collapsed-content .bg-blue-100 {
        animation: pulse 2s infinite;
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      
      /* Modo compacto para dispositivos menores */
      @media (max-width: 640px) {
        .ai-concerns-dashboard.collapsed {
          padding: 1rem;
        }
        
        .ai-collapsed-content {
          font-size: 0.875rem;
        }
      }
    </style>

    <!-- Script para funcionalidades aprimoradas -->
    <script>
      // Estado do componente
      let aiConcernsState = {
        isCollapsed: false,
        selectedActions: new Set(),
        executedActions: new Set()
      };

      // Função para recolher/expandir com animações suaves
      function toggleAICollapse() {
        const container = document.getElementById('ai-concerns-container');
        const expandedContent = document.getElementById('ai-content-expanded');
        const collapsedContent = document.getElementById('ai-content-collapsed');
        const toggleIcon = document.getElementById('ai-toggle-icon');
        const subtitle = document.querySelector('.ai-subtitle');
        
        aiConcernsState.isCollapsed = !aiConcernsState.isCollapsed;
        
        if (aiConcernsState.isCollapsed) {
          // Recolher com animação suave
          expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px';
          expandedContent.offsetHeight; // Force reflow
          expandedContent.style.maxHeight = '0';
          expandedContent.style.opacity = '0';
          expandedContent.style.overflow = 'hidden';
          
          // Esconder subtitle quando recolhido
          if (subtitle) {
            subtitle.style.transition = 'opacity 0.3s ease';
            subtitle.style.opacity = '0';
            setTimeout(() => {
              subtitle.style.display = 'none';
            }, 300);
          }
          
          setTimeout(() => {
            expandedContent.classList.add('hidden');
            collapsedContent.classList.remove('hidden');
            collapsedContent.style.animation = 'slideIn 0.4s ease-out';
          }, 500);
          
          toggleIcon.className = 'fas fa-expand-alt text-lg';
          container.classList.add('collapsed');
          // Cores específicas por portal são aplicadas via CSS
        } else {
          // Expandir com animação suave
          collapsedContent.style.animation = 'slideOut 0.3s ease-in';
          
          setTimeout(() => {
            collapsedContent.classList.add('hidden');
            expandedContent.classList.remove('hidden');
            expandedContent.style.maxHeight = '0';
            expandedContent.style.opacity = '0';
            
            // Mostrar subtitle quando expandido
            if (subtitle) {
              subtitle.style.display = 'block';
              setTimeout(() => {
                subtitle.style.opacity = '1';
              }, 100);
            }
            
            setTimeout(() => {
              expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px';
              expandedContent.style.opacity = '1';
              setTimeout(() => {
                expandedContent.style.maxHeight = 'none';
                expandedContent.style.overflow = 'visible';
              }, 500);
            }, 10);
          }, 300);
          
          toggleIcon.className = 'fas fa-compress-alt text-lg';
          container.classList.remove('collapsed');
          // Remove estilos inline para voltar ao CSS original
        }
      }

      // Atualizar botão de executar baseado nas seleções
      function updateExecuteButton() {
        const checkboxes = document.querySelectorAll('.rec-checkbox:checked');
        const executeBtn = document.querySelector('.execute-btn');
        const counter = document.getElementById('selected-counter');
        
        aiConcernsState.selectedActions.clear();
        checkboxes.forEach(cb => {
          const recId = cb.id.replace('rec-', '');
          aiConcernsState.selectedActions.add(recId);
        });
        
        const count = aiConcernsState.selectedActions.size;
        
        if (count > 0) {
          executeBtn.disabled = false;
          counter.textContent = count + ' ação(ões) selecionada(s)';
          counter.className = 'mt-3 text-xs text-orange-600 text-center font-medium';
        } else {
          executeBtn.disabled = true;
          counter.textContent = 'Nenhuma ação selecionada';
          counter.className = 'mt-3 text-xs text-gray-600 text-center';
        }
      }

      // Executar ações selecionadas
      function executeSelectedActions() {
        if (aiConcernsState.selectedActions.size === 0) {
          alert('Por favor, selecione pelo menos uma ação para executar.');
          return;
        }
        
        // Processar cada ação selecionada
        aiConcernsState.selectedActions.forEach(recId => {
          const item = document.querySelector(\`[data-rec-id="\${recId}"]\`);
          const checkbox = document.getElementById(\`rec-\${recId}\`);
          
          if (item && !aiConcernsState.executedActions.has(recId)) {
            // Marcar como executada (verde sem tique)
            item.classList.add('executed');
            
            // Desmarcar checkbox
            checkbox.checked = false;
            checkbox.disabled = true;
            
            // Adicionar ao conjunto de executadas
            aiConcernsState.executedActions.add(recId);
          }
        });
        
        // Limpar seleções
        aiConcernsState.selectedActions.clear();
        updateExecuteButton();
        
        // Feedback ao usuário
        const count = aiConcernsState.executedActions.size;
        const message = \`\${count} ação(ões) iniciada(s) com sucesso! O sistema está processando as solicitações.\`;
        
        // Mostrar notificação
        showNotification(message, 'success');
      }

      // Mostrar notificação
      function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = \`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 \${
          type === 'success' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
        }\`;
        notification.innerHTML = \`
          <div class="flex items-center gap-2">
            <i class="fas fa-\${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>\${message}</span>
          </div>
        \`;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
          notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Remover após 3 segundos
        setTimeout(() => {
          notification.style.transform = 'translateX(400px)';
          setTimeout(() => {
            document.body.removeChild(notification);
          }, 300);
        }, 3000);
      }

      // Mostrar detalhes de uma preocupação
      function showConcernDetails(concernId) {
        console.log('Mostrando detalhes da preocupação:', concernId);
        showNotification('Analisando detalhes da preocupação...', 'info');
      }

      // Inicializar ao carregar
      document.addEventListener('DOMContentLoaded', function() {
        // Desabilitar botão executar inicialmente
        const executeBtn = document.querySelector('.execute-btn');
        if (executeBtn) {
          executeBtn.disabled = true;
        }
        
        // Removido o gráfico comparativo antigo - agora existe apenas no Master Admin como componente separado
      });
    <\/script>
  `};function _s(e,t){const s={patient:{subtitle:"Monitoramento preditivo da sua jornada oncológica",mainAlerts:[{id:"pa1",icon:"fas fa-calendar-exclamation",title:"Consulta Próxima",description:"Exame de controle em 3 dias",timeframe:"3 dias",impact:"Alto",severity:"high"},{id:"pa2",icon:"fas fa-pills",title:"Medicação",description:"Estoque baixo de Tamoxifeno",timeframe:"5 dias",impact:"Médio",severity:"medium"},{id:"pa3",icon:"fas fa-heartbeat",title:"Bem-estar",description:"Sessão psicológica recomendada",timeframe:"Preventivo",impact:"Preventivo",severity:"low"}],metrics:[{icon:"fas fa-user-check",value:"92%",label:"Adesão",trend:"stable",prediction:"Mantendo padrão"},{icon:"fas fa-calendar-check",value:"3/5",label:"Consultas",trend:"up",prediction:"2 agendamentos pendentes"},{icon:"fas fa-heart",value:"Bom",label:"Estado Geral",trend:"stable",prediction:"Estável"},{icon:"fas fa-flask",value:"2",label:"Exames Pendentes",trend:"down",prediction:"Agendar esta semana"}],recommendations:[{id:"rec1",action:"Agendar coleta de sangue para hemograma",reason:"Controle mensal do tratamento",priority:"high"},{id:"rec2",action:"Renovar receita de medicação contínua",reason:"Estoque termina em 5 dias",priority:"medium"},{id:"rec3",action:"Participar do grupo de apoio quinta-feira",reason:"Melhoria no bem-estar emocional",priority:"low"}]},doctor:{subtitle:"Alertas preditivos e insights clínicos dos seus pacientes",mainAlerts:[{id:"doc1",icon:"fas fa-exclamation-triangle",title:"Paciente Crítico",description:"João Silva - Risco de neutropenia",timeframe:"Imediato",impact:"Crítico",severity:"high"},{id:"doc2",icon:"fas fa-user-clock",title:"Atrasos Recorrentes",description:"5 pacientes com baixa adesão",timeframe:"Esta semana",impact:"Alto",severity:"medium"},{id:"doc3",icon:"fas fa-microscope",title:"Resultados Pendentes",description:"12 laudos aguardando revisão",timeframe:"24h",impact:"Médio",severity:"medium"}],metrics:[{icon:"fas fa-users",value:"47",label:"Pacientes Ativos",trend:"up",prediction:"+3 esta semana"},{icon:"fas fa-procedures",value:"8",label:"Internados",trend:"stable",prediction:"2 altas previstas"},{icon:"fas fa-clipboard-check",value:"89%",label:"Protocolos OK",trend:"down",prediction:"3 revisões urgentes"},{icon:"fas fa-chart-line",value:"94%",label:"Taxa Sucesso",trend:"up",prediction:"Acima da média"}],recommendations:[{id:"drec1",action:"Revisar protocolo do paciente João Silva imediatamente",reason:"Sinais preditivos de complicação detectados",priority:"high"},{id:"drec2",action:"Agendar reunião multidisciplinar para casos complexos",reason:"3 pacientes necessitam revisão de conduta",priority:"medium"},{id:"drec3",action:"Atualizar protocolos de quimioterapia",reason:"Novas diretrizes publicadas esta semana",priority:"low"}]},navigator:{subtitle:"Coordenação inteligente e otimização da jornada dos pacientes",mainAlerts:[{id:"nav1",icon:"fas fa-exclamation-circle",title:"Pacientes Urgentes",description:"5 pacientes necessitam intervenção imediata",timeframe:"Agora",impact:"Crítico",severity:"high"},{id:"nav2",icon:"fas fa-clock",title:"Atrasos Detectados",description:"12 pacientes com atraso em exames",timeframe:"Hoje",impact:"Alto",severity:"medium"},{id:"nav3",icon:"fas fa-route",title:"Otimização de Rotas",description:"3 jornadas podem ser aceleradas",timeframe:"Esta semana",impact:"Médio",severity:"low"}],metrics:[{icon:"fas fa-users",value:"178",label:"Em Navegação",trend:"up",prediction:"+12 novos hoje"},{icon:"fas fa-tasks",value:"46",label:"Tarefas Pendentes",trend:"down",prediction:"23 urgentes"},{icon:"fas fa-percentage",value:"87%",label:"Taxa Adesão",trend:"stable",prediction:"Meta: 90%"},{icon:"fas fa-star",value:"92%",label:"Satisfação",trend:"up",prediction:"Acima da média"}],recommendations:[{id:"navrec1",action:"Contatar pacientes com exames atrasados imediatamente",reason:"Prevenir abandono de tratamento",priority:"high"},{id:"navrec2",action:"Reorganizar agendamentos da próxima semana",reason:"Otimizar utilização de recursos",priority:"medium"},{id:"navrec3",action:"Atualizar protocolos de navegação",reason:"Novas diretrizes disponíveis",priority:"low"}]},financial:{subtitle:"Inteligência artificial para prevenção de glosas e otimização financeira",mainAlerts:[{id:"fin1",icon:"fas fa-exclamation-triangle",title:"Risco de Glosa Detectado",description:"15 contas com inconsistências identificadas",timeframe:"Urgente",impact:"R$ 127.000",severity:"high"},{id:"fin2",icon:"fas fa-file-invoice-dollar",title:"Faturamento Pendente",description:"42 procedimentos aguardando cobrança",timeframe:"Hoje",impact:"R$ 89.000",severity:"medium"},{id:"fin3",icon:"fas fa-chart-line",title:"Oportunidade de Melhoria",description:"Redução de 12% em glosas possível",timeframe:"Este mês",impact:"R$ 45.000",severity:"low"}],metrics:[{icon:"fas fa-shield-alt",value:"R$ 2.4M",label:"Glosas Evitadas",trend:"up",prediction:"+R$ 180K este mês"},{icon:"fas fa-percentage",value:"98.5%",label:"Taxa Aprovação",trend:"up",prediction:"Meta: 99%"},{icon:"fas fa-robot",value:"1,247",label:"Auditorias IA",trend:"up",prediction:"+89 hoje"},{icon:"fas fa-dollar-sign",value:"R$ 18.3M",label:"Faturamento Mês",trend:"stable",prediction:"Projeção: R$ 19M"}],recommendations:[{id:"finrec1",action:"Revisar 15 contas com alto risco de glosa imediatamente",reason:"IA detectou inconsistências em documentação e codificação",priority:"high"},{id:"finrec2",action:"Implementar checklist automático para procedimentos complexos",reason:"Redução de 30% em glosas prevista",priority:"medium"},{id:"finrec3",action:"Treinar equipe em novas diretrizes TUSS/TISS",reason:"Atualização normativa este mês",priority:"low"}]},wellness:{subtitle:"Monitoramento emocional e suporte psicossocial inteligente",mainAlerts:[{id:"well1",icon:"fas fa-heart-broken",title:"Pacientes em Risco",description:"8 pacientes com sinais de depressão severa",timeframe:"Imediato",impact:"Crítico",severity:"high"},{id:"well2",icon:"fas fa-users",title:"Grupos de Apoio",description:"3 grupos precisam de moderação",timeframe:"Hoje",impact:"Alto",severity:"medium"},{id:"well3",icon:"fas fa-calendar-check",title:"Sessões Agendadas",description:"24 atendimentos psicológicos esta semana",timeframe:"Semana",impact:"Normal",severity:"low"}],metrics:[{icon:"fas fa-smile",value:"73%",label:"Bem-Estar Geral",trend:"up",prediction:"Melhora gradual"},{icon:"fas fa-users",value:"234",label:"Pacientes Ativos",trend:"up",prediction:"+18 esta semana"},{icon:"fas fa-brain",value:"156",label:"Sessões Realizadas",trend:"stable",prediction:"24 agendadas"},{icon:"fas fa-hands-helping",value:"89%",label:"Satisfação",trend:"up",prediction:"Acima da média"}],recommendations:[{id:"wellrec1",action:"Contatar 8 pacientes identificados com risco emocional elevado",reason:"Prevenção de crises e abandono de tratamento",priority:"high"},{id:"wellrec2",action:"Expandir horários de grupos de apoio online",reason:"Alta demanda detectada nos horários noturnos",priority:"medium"},{id:"wellrec3",action:"Implementar programa de mindfulness semanal",reason:"Evidências de redução de 40% em ansiedade",priority:"low"}]},research:{subtitle:"Análise preditiva para pesquisa clínica e recrutamento inteligente",mainAlerts:[{id:"res1",icon:"fas fa-vial",title:"Recrutamento Urgente",description:"Estudo ONCO-2024 precisa de 12 pacientes",timeframe:"2 semanas",impact:"Alto",severity:"high"},{id:"res2",icon:"fas fa-chart-bar",title:"Dados Incompletos",description:"38 CRFs pendentes de revisão",timeframe:"Esta semana",impact:"Médio",severity:"medium"},{id:"res3",icon:"fas fa-file-medical-alt",title:"Publicação Pronta",description:"3 artigos prontos para submissão",timeframe:"Este mês",impact:"Positivo",severity:"low"}],metrics:[{icon:"fas fa-flask",value:"24",label:"Estudos Ativos",trend:"up",prediction:"+2 iniciando"},{icon:"fas fa-users",value:"1,847",label:"Participantes",trend:"up",prediction:"+67 este mês"},{icon:"fas fa-percentage",value:"94%",label:"Taxa Retenção",trend:"stable",prediction:"Meta: 95%"},{icon:"fas fa-trophy",value:"42",label:"Publicações 2024",trend:"up",prediction:"15 com IF>5"}],recommendations:[{id:"resrec1",action:"Ativar protocolo de recrutamento acelerado para ONCO-2024",reason:"IA identificou 28 pacientes elegíveis no banco de dados",priority:"high"},{id:"resrec2",action:"Automatizar coleta de dados do REDCap",reason:"Redução de 60% no tempo de preenchimento de CRFs",priority:"medium"},{id:"resrec3",action:"Submeter artigos para journals de alto impacto",reason:"Janela de submissão favorável este mês",priority:"low"}]},admin:{subtitle:"Monitoramento preditivo de sistema e gestão inteligente de plataforma",mainAlerts:[{id:"adm1",icon:"fas fa-server",title:"Carga Crítica Detectada",description:"CPU 78% - Escalonamento automático ativado",timeframe:"Agora",impact:"Sistema",severity:"high"},{id:"adm2",icon:"fas fa-exclamation-circle",title:"Anomalias de Segurança",description:"3 tentativas de acesso suspeitas bloqueadas",timeframe:"Última hora",impact:"Segurança",severity:"medium"},{id:"adm3",icon:"fas fa-sync-alt",title:"Sincronização Pendente",description:"HIS/RIS com delay de 5 minutos",timeframe:"Contínuo",impact:"Integração",severity:"low"}],metrics:[{icon:"fas fa-server",value:"99.98%",label:"Uptime Sistema",trend:"stable",prediction:"SLA garantido"},{icon:"fas fa-tachometer-alt",value:"12ms",label:"Latência Edge",trend:"down",prediction:"Otimizado"},{icon:"fas fa-shield-alt",value:"100%",label:"Compliance",trend:"stable",prediction:"LGPD/ISO OK"},{icon:"fas fa-database",value:"523MB",label:"Database D1",trend:"up",prediction:"78% capacity"}],recommendations:[{id:"admrec1",action:"Implementar auto-scaling para Workers em horário de pico",reason:"Previsão de aumento de 40% na carga às 14h",priority:"high"},{id:"admrec2",action:"Atualizar certificados SSL antes do vencimento",reason:"3 certificados expiram em 15 dias",priority:"medium"},{id:"admrec3",action:"Revisar logs de segurança da última semana",reason:"Auditoria mensal de compliance",priority:"low"}]},default:{subtitle:"Monitoramento inteligente e preditivo",mainAlerts:[],metrics:[],recommendations:[]}};return s[e]||s.default}const Q=new T;function re(e,t,s){return`
        <div class="portal-container min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20">
            <!-- Portal Header -->
            <div class="glass-effect shadow-lg border-b border-gray-100 mb-8">
                <div class="container mx-auto px-4 py-6">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <button onclick="goBack()" class="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
                                <i class="fas fa-arrow-left text-gray-600"></i>
                            </button>
                            <div>
                                <h1 class="text-2xl font-bold text-gray-800">${t}</h1>
                                <p class="text-sm text-gray-600">ACCamargo Cancer Center</p>
                            </div>
                        </div>
                        <button onclick="loadHome()" class="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                            <i class="fas fa-home mr-2"></i>Início
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Portal Content -->
            <div class="container mx-auto px-4 pb-8">
                ${s}
            </div>
        </div>
    `}Q.get("/patient",async e=>{const t=`
        <!-- Métricas em 3 Colunas -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- Coluna 1: Próximos Compromissos -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="far fa-calendar-alt text-green-600 mr-2"></i>
                    Próximos Compromissos
                </h3>
                <div class="space-y-3">
                    <div class="border-l-4 border-green-500 pl-4">
                        <p class="font-semibold text-gray-800">Consulta Oncologia</p>
                        <p class="text-sm text-gray-600">Dr. Roberto Silva</p>
                        <p class="text-sm text-green-600">15/01 às 14:00</p>
                    </div>
                    <div class="border-l-4 border-blue-500 pl-4">
                        <p class="font-semibold text-gray-800">Exame de Sangue</p>
                        <p class="text-sm text-gray-600">Laboratório Central</p>
                        <p class="text-sm text-blue-600">18/01 às 08:00</p>
                    </div>
                </div>
            </div>
            
            <!-- Coluna 2: Status do Tratamento -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-heartbeat text-red-500 mr-2"></i>
                    Status do Tratamento
                </h3>
                <div class="space-y-4">
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-sm font-medium text-gray-700">Progresso Geral</span>
                            <span class="text-sm font-medium text-green-600">65%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5">
                            <div class="bg-green-600 h-2.5 rounded-full" style="width: 65%"></div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                        <div class="text-center p-3 bg-green-50 rounded-lg">
                            <p class="text-2xl font-bold text-green-600">12</p>
                            <p class="text-xs text-gray-600">Sessões Completas</p>
                        </div>
                        <div class="text-center p-3 bg-blue-50 rounded-lg">
                            <p class="text-2xl font-bold text-blue-600">8</p>
                            <p class="text-xs text-gray-600">Sessões Restantes</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Coluna 3: Rede de Apoio Aprimorada -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-users text-purple-600 mr-2"></i>
                    Rede de Apoio
                </h3>
                <div class="space-y-3">
                    <button onclick="contactSupport('whatsapp')" class="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                        <div class="flex items-center">
                            <i class="fab fa-whatsapp text-green-600 text-xl mr-3"></i>
                            <span class="font-medium text-gray-800">WhatsApp Suporte</span>
                        </div>
                        <i class="fas fa-chevron-right text-gray-400"></i>
                    </button>
                    
                    <button onclick="scheduleConsultation()" class="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                        <div class="flex items-center">
                            <i class="fas fa-user-md text-blue-600 text-xl mr-3"></i>
                            <span class="font-medium text-gray-800">Agendar Consulta</span>
                        </div>
                        <i class="fas fa-chevron-right text-gray-400"></i>
                    </button>
                    
                    <button onclick="accessCommunity()" class="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                        <div class="flex items-center">
                            <i class="fas fa-hands-helping text-purple-600 text-xl mr-3"></i>
                            <span class="font-medium text-gray-800">Comunidade</span>
                        </div>
                        <i class="fas fa-chevron-right text-gray-400"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura -->
        ${z("patient")}
        
        <!-- Ações Rápidas -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-pills text-3xl text-blue-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Medicamentos</h4>
                <p class="text-sm text-gray-600 mt-1">Gerenciar prescrições</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-file-medical text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Resultados</h4>
                <p class="text-sm text-gray-600 mt-1">Ver exames</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-comments text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Mensagens</h4>
                <p class="text-sm text-gray-600 mt-1">Falar com equipe</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-question-circle text-3xl text-orange-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Ajuda</h4>
                <p class="text-sm text-gray-600 mt-1">Central de dúvidas</p>
            </button>
        </div>
    `;return e.json({html:re("patient","Portal do Paciente",t),scripts:[]})});Q.get("/doctor",async e=>{const t=`
        <!-- Dashboard Médico -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- Pacientes do Dia -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-user-injured text-blue-600 mr-2"></i>
                    Pacientes Hoje
                </h3>
                <div class="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Consultas</span>
                        <span class="font-semibold">8</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Retornos</span>
                        <span class="font-semibold">4</span>
                    </div>
                </div>
            </div>
            
            <!-- Alertas Críticos -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                    Alertas Críticos
                </h3>
                <div class="space-y-3">
                    <div class="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <p class="font-semibold text-red-800">Maria Silva</p>
                        <p class="text-sm text-red-600">Exame alterado - Revisão urgente</p>
                    </div>
                    <div class="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                        <p class="font-semibold text-yellow-800">João Santos</p>
                        <p class="text-sm text-yellow-600">Adesão baixa ao tratamento</p>
                    </div>
                </div>
            </div>
            
            <!-- Protocolos Ativos -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-clipboard-list text-green-600 mr-2"></i>
                    Protocolos Ativos
                </h3>
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-700">FOLFOX</span>
                        <span class="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">5 pacientes</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-700">AC-T</span>
                        <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">3 pacientes</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-700">R-CHOP</span>
                        <span class="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">2 pacientes</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Médica -->
        ${z("doctor")}
        
        <!-- Ferramentas Clínicas -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-prescription text-3xl text-blue-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Prescrever</h4>
                <p class="text-sm text-gray-600 mt-1">Nova prescrição</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-microscope text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Laudos</h4>
                <p class="text-sm text-gray-600 mt-1">Analisar resultados</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-book-medical text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Protocolos</h4>
                <p class="text-sm text-gray-600 mt-1">Guidelines atualizados</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-brain text-3xl text-orange-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">IA Assistente</h4>
                <p class="text-sm text-gray-600 mt-1">Suporte à decisão</p>
            </button>
        </div>
    `;return e.json({html:re("doctor","Portal Médico",t),scripts:[]})});Q.get("/navigator",async e=>{const s=`
        <!-- Dashboard Navegador -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- Pacientes em Navegação com Botão Trilho -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-route text-teal-600 mr-2"></i>
                    Em Navegação
                </h3>
                <div class="text-3xl font-bold text-teal-600 mb-2">178</div>
                <div class="space-y-2 mb-4">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Novos hoje</span>
                        <span class="font-semibold text-green-600">+12</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Alta prevista</span>
                        <span class="font-semibold text-blue-600">5</span>
                    </div>
                </div>
                <!-- Botão Trilho de Atendimentos -->
                <button onclick="openKanbanView()" class="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-3 rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all font-semibold shadow-md hover:shadow-lg transform hover:scale-105">
                    <i class="fas fa-columns mr-2"></i>
                    Trilho de Atendimentos
                </button>
            </div>
            
            <!-- Tarefas Pendentes -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-tasks text-orange-600 mr-2"></i>
                    Tarefas Pendentes
                </h3>
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-2 bg-orange-50 rounded">
                        <span class="text-sm text-gray-700">Contatos telefônicos</span>
                        <span class="px-2 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-bold">23</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-blue-50 rounded">
                        <span class="text-sm text-gray-700">Agendamentos</span>
                        <span class="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-bold">15</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span class="text-sm text-gray-700">Documentos</span>
                        <span class="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs font-bold">8</span>
                    </div>
                </div>
            </div>
            
            <!-- Métricas de Performance -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-chart-line text-green-600 mr-2"></i>
                    Performance
                </h3>
                <div class="space-y-4">
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Taxa de Adesão</span>
                            <span class="text-sm font-bold text-green-600">87%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 87%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Satisfação</span>
                            <span class="text-sm font-bold text-blue-600">92%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 92%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Navegador -->
        ${z("navigator")}
        
        <!-- Modal Kanban (Trilho de Atendimentos) -->
        <div id="kanban-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 overflow-y-auto">
            <div class="flex items-start justify-center min-h-screen pt-4 px-4 pb-20">
                <div class="bg-white rounded-2xl w-full max-w-7xl shadow-2xl">
                    <!-- Header do Modal -->
                    <div class="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6 rounded-t-2xl">
                        <div class="flex items-center justify-between">
                            <div>
                                <h2 class="text-2xl font-bold">
                                    <i class="fas fa-columns mr-3"></i>
                                    Trilho de Atendimentos - Visão Kanban
                                </h2>
                                <p class="text-teal-100 mt-1">Acompanhe todos os pacientes em cada fase da jornada</p>
                            </div>
                            <button onclick="closeKanbanView()" class="text-white hover:text-teal-200 transition-colors">
                                <i class="fas fa-times text-2xl"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Estatísticas Rápidas -->
                    <div class="bg-teal-50 px-6 py-4 border-b border-teal-100">
                        <div class="flex justify-around">
                            <div class="text-center">
                                <span class="text-2xl font-bold text-teal-700">178</span>
                                <span class="text-sm text-gray-600 ml-2">Total em Navegação</span>
                            </div>
                            <div class="text-center">
                                <span class="text-2xl font-bold text-orange-600">23</span>
                                <span class="text-sm text-gray-600 ml-2">Atenção Urgente</span>
                            </div>
                            <div class="text-center">
                                <span class="text-2xl font-bold text-green-600">87%</span>
                                <span class="text-sm text-gray-600 ml-2">Taxa de Adesão</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Kanban Board -->
                    <div class="p-6 overflow-x-auto">
                        <div class="flex gap-4 min-w-max">
                            <!-- Coluna: Triagem -->
                            <div class="kanban-column bg-gray-50 rounded-xl p-4 w-72">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-bold text-gray-800">
                                        <i class="fas fa-clipboard-check text-purple-600 mr-2"></i>
                                        Triagem
                                    </h3>
                                    <span class="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">15</span>
                                </div>
                                <div class="space-y-3 max-h-96 overflow-y-auto">
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" data-patient-id="PAC-001">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">Maria Silva</span>
                                            <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Prioridade</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">CA Mama • Estadio II</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">Entrada: 10/01</span>
                                            <button class="text-purple-600 hover:text-purple-700">
                                                <i class="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" data-patient-id="PAC-004">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">João Santos</span>
                                            <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Normal</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">CA Próstata • Estadio I</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">Entrada: 11/01</span>
                                            <button class="text-purple-600 hover:text-purple-700">
                                                <i class="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Coluna: Diagnóstico -->
                            <div class="kanban-column bg-gray-50 rounded-xl p-4 w-72">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-bold text-gray-800">
                                        <i class="fas fa-microscope text-blue-600 mr-2"></i>
                                        Diagnóstico
                                    </h3>
                                    <span class="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">28</span>
                                </div>
                                <div class="space-y-3 max-h-96 overflow-y-auto">
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" data-patient-id="PAC-002">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">Ana Costa</span>
                                            <span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Urgente</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">CA Pulmão • Aguardando PET</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">3 dias aguardando</span>
                                            <button class="text-blue-600 hover:text-blue-700 btn-patient-view" data-patient-id="PAC-002">
                                                <i class="fas fa-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Coluna: Tratamento -->
                            <div class="kanban-column bg-gray-50 rounded-xl p-4 w-72">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-bold text-gray-800">
                                        <i class="fas fa-procedures text-green-600 mr-2"></i>
                                        Tratamento
                                    </h3>
                                    <span class="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold">85</span>
                                </div>
                                <div class="space-y-3 max-h-96 overflow-y-auto">
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" data-patient-id="PAC-003">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">Carlos Mendes</span>
                                            <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Em dia</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">Quimio • Ciclo 3/6</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">Próxima: 20/01</span>
                                            <button class="text-green-600 hover:text-green-700">
                                                <i class="fas fa-info-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Coluna: Acompanhamento -->
                            <div class="kanban-column bg-gray-50 rounded-xl p-4 w-72">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-bold text-gray-800">
                                        <i class="fas fa-user-check text-orange-600 mr-2"></i>
                                        Acompanhamento
                                    </h3>
                                    <span class="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold">35</span>
                                </div>
                                <div class="space-y-3 max-h-96 overflow-y-auto">
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer" data-patient-id="PAC-006">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">Lucia Ferreira</span>
                                            <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Controle</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">Pós-cirúrgico • 30 dias</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">Retorno: 25/01</span>
                                            <button class="text-orange-600 hover:text-orange-700">
                                                <i class="fas fa-calendar-check"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Coluna: Alta -->
                            <div class="kanban-column bg-gray-50 rounded-xl p-4 w-72">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="font-bold text-gray-800">
                                        <i class="fas fa-flag-checkered text-teal-600 mr-2"></i>
                                        Alta/Conclusão
                                    </h3>
                                    <span class="bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-bold">15</span>
                                </div>
                                <div class="space-y-3 max-h-96 overflow-y-auto">
                                    <div class="kanban-card bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer border-l-4 border-green-500">
                                        <div class="flex items-start justify-between mb-2">
                                            <span class="font-semibold text-sm">Pedro Oliveira</span>
                                            <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Sucesso</span>
                                        </div>
                                        <p class="text-xs text-gray-600 mb-2">Tratamento concluído</p>
                                        <div class="flex items-center justify-between text-xs">
                                            <span class="text-gray-500">Alta: 15/01</span>
                                            <button class="text-teal-600 hover:text-teal-700">
                                                <i class="fas fa-file-export"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Footer do Modal -->
                    <div class="bg-gray-50 px-6 py-4 rounded-b-2xl border-t">
                        <div class="flex items-center justify-between">
                            <div class="flex gap-4">
                                <button class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                                    <i class="fas fa-filter mr-2"></i>Filtrar
                                </button>
                                <button class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                                    <i class="fas fa-download mr-2"></i>Exportar
                                </button>
                            </div>
                            <div class="text-sm text-gray-600">
                                Última atualização: <span class="font-semibold">há 2 minutos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Script para Kanban -->
        <script>
            function openKanbanView() {
                document.getElementById('kanban-modal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
            
            function closeKanbanView() {
                document.getElementById('kanban-modal').classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
            
            // Fechar modal ao clicar fora
            document.getElementById('kanban-modal')?.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeKanbanView();
                }
            });
        <\/script>
        
        <!-- Ferramentas de Navegação - INTEGRADAS COM AS VIEWS -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button onclick="openNavigatorModal('contatar')" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <i class="fas fa-address-book text-3xl text-blue-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Contatar</h4>
                <p class="text-sm text-gray-600 mt-1">Rede completa de contatos</p>
            </button>
            
            <button onclick="openNavigatorModal('agendar')" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <i class="fas fa-calendar-alt text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Agendar</h4>
                <p class="text-sm text-gray-600 mt-1">Sistema de agendamento</p>
            </button>
            
            <button onclick="openNavigatorModal('jornada')" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <i class="fas fa-route text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Jornada</h4>
                <p class="text-sm text-gray-600 mt-1">Wiki inteligente</p>
            </button>
            
            <button onclick="openNavigatorModal('checklist')" class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <i class="fas fa-clipboard-check text-3xl text-indigo-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Checklist</h4>
                <p class="text-sm text-gray-600 mt-1">Double-check auditoria</p>
            </button>
        </div>
    `+`
        <!-- Modal Container para as Views -->

        <div id="navigator-modal" class="fixed inset-0 z-50 overflow-y-auto" style="display: none; overflow-y: auto !important;">
            <!-- O conteúdo será inserido dinamicamente aqui -->
        </div>
    `;return e.json({html:re("navigator","Navegador de Pacientes",s),scripts:[`
            // ========================================
            // SISTEMA COMPLETO DO PORTAL DO NAVEGADOR
            // ========================================
            
            // Função principal para abrir view do paciente
            function openPatientView(patientId) {
                console.log('Abrindo view do paciente:', patientId);
                
                // Criar ou obter o modal
                let modal = document.getElementById('patient-view-modal');
                if (!modal) {
                    modal = document.createElement('div');
                    modal.id = 'patient-view-modal';
                    modal.className = 'fixed inset-0 z-50 overflow-y-auto hidden';
                    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                    document.body.appendChild(modal);
                }
                
                // Dados simulados do paciente
                const patients = {
                    'PAC-001': {
                        nome: 'Maria Silva Santos',
                        idade: 52,
                        diagnostico: 'Carcinoma Ductal Invasivo - Mama',
                        estadiamento: 'IIA (T2N0M0)',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dr. Roberto Almeida',
                        telefone: '(11) 98765-4321',
                        convenio: 'Unimed Premium',
                        email: 'maria.silva@email.com'
                    },
                    'PAC-002': {
                        nome: 'Ana Costa',
                        idade: 45,
                        diagnostico: 'Carcinoma Pulmonar',
                        estadiamento: 'IIIA',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dr. Carlos Mendes',
                        telefone: '(11) 98765-1234',
                        convenio: 'SulAmérica',
                        email: 'ana.costa@email.com'
                    },
                    'PAC-003': {
                        nome: 'Carlos Mendes',
                        idade: 67,
                        diagnostico: 'Adenocarcinoma Colorretal',
                        estadiamento: 'IIB',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dra. Fernanda Santos',
                        telefone: '(11) 98765-5678',
                        convenio: 'Bradesco Saúde',
                        email: 'carlos.mendes@email.com'
                    },
                    'PAC-004': {
                        nome: 'João Santos',
                        idade: 72,
                        diagnostico: 'Carcinoma Prostático',
                        estadiamento: 'I',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dr. Paulo Ribeiro',
                        telefone: '(11) 98765-9876',
                        convenio: 'Amil',
                        email: 'joao.santos@email.com'
                    },
                    'PAC-005': {
                        nome: 'Pedro Oliveira',
                        idade: 58,
                        diagnostico: 'Linfoma Não-Hodgkin',
                        estadiamento: 'IIIB',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dr. André Costa',
                        telefone: '(11) 98765-4567',
                        convenio: 'Porto Seguro',
                        email: 'pedro.oliveira@email.com'
                    },
                    'PAC-006': {
                        nome: 'Lucia Ferreira',
                        idade: 61,
                        diagnostico: 'Carcinoma de Ovário',
                        estadiamento: 'IC',
                        navegador: 'Enf. Patricia Lima',
                        medico: 'Dra. Paula Lima',
                        telefone: '(11) 98765-7890',
                        convenio: 'NotreDame',
                        email: 'lucia.ferreira@email.com'
                    }
                };
                
                const patient = patients[patientId] || patients['PAC-001'];
                
                // HTML completo da View Universal
                modal.innerHTML = renderPatientViewHTML(patientId, patient);
                
                // Mostrar modal
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                
                // Adicionar eventos ao modal
                setupModalEvents();
            }
            
            // Função para renderizar HTML da view do paciente
            function renderPatientViewHTML(patientId, patient) {
                return \`
                    <div class="flex items-center justify-center min-h-screen p-4">
                        <div class="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl">
                            <!-- Header -->
                            <div class="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-6">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h2 class="text-2xl font-bold mb-2">
                                            <i class="fas fa-user-injured mr-2"></i>
                                            \${patient.nome}
                                        </h2>
                                        <div class="flex gap-4 text-sm">
                                            <span><i class="fas fa-id-card mr-1"></i> \${patientId}</span>
                                            <span><i class="fas fa-birthday-cake mr-1"></i> \${patient.idade} anos</span>
                                            <span><i class="fas fa-phone mr-1"></i> \${patient.telefone}</span>
                                            <span><i class="fas fa-envelope mr-1"></i> \${patient.email}</span>
                                        </div>
                                    </div>
                                    <button onclick="closePatientView()" class="text-white hover:text-teal-200">
                                        <i class="fas fa-times text-2xl"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Tabs -->
                            <div class="border-b border-gray-200 bg-gray-50">
                                <nav class="flex -mb-px overflow-x-auto">
                                    <button onclick="showTab('overview')" class="tab-btn active px-6 py-3 border-b-2 border-teal-600 text-teal-600 font-medium whitespace-nowrap">
                                        <i class="fas fa-chart-line mr-2"></i>Visão Geral
                                    </button>
                                    <button onclick="showTab('contact')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600 whitespace-nowrap">
                                        <i class="fas fa-address-book mr-2"></i>Contatar
                                    </button>
                                    <button onclick="showTab('schedule')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600 whitespace-nowrap">
                                        <i class="fas fa-calendar-alt mr-2"></i>Agendar
                                    </button>
                                    <button onclick="showTab('journey')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600 whitespace-nowrap">
                                        <i class="fas fa-route mr-2"></i>Jornada
                                    </button>
                                    <button onclick="showTab('checklist')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600 whitespace-nowrap">
                                        <i class="fas fa-tasks mr-2"></i>Checklist
                                    </button>
                                    <button onclick="showTab('ai')" class="tab-btn px-6 py-3 border-b-2 border-transparent text-gray-600 hover:text-teal-600 whitespace-nowrap">
                                        <i class="fas fa-brain mr-2"></i>IA Laura
                                    </button>
                                </nav>
                            </div>
                            
                            <!-- Content Area -->
                            <div class="overflow-y-auto" style="max-height: calc(90vh - 200px);">
                                \${generateTabsContent(patient, patientId)}
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            // Função para gerar conteúdo das tabs
            function generateTabsContent(patient, patientId) {
                return \`
                    <!-- Tab: Visão Geral -->
                    <div id="tab-overview" class="tab-content p-6">
                        \${generateOverviewTab(patient)}
                    </div>
                    
                    <!-- Tab: Contatar -->
                    <div id="tab-contact" class="tab-content hidden p-6">
                        \${generateContactTab(patient)}
                    </div>
                    
                    <!-- Tab: Agendar -->
                    <div id="tab-schedule" class="tab-content hidden p-6">
                        \${generateScheduleTab(patient)}
                    </div>
                    
                    <!-- Tab: Jornada -->
                    <div id="tab-journey" class="tab-content hidden p-6">
                        \${generateJourneyTab(patient)}
                    </div>
                    
                    <!-- Tab: Checklist -->
                    <div id="tab-checklist" class="tab-content hidden p-6">
                        \${generateChecklistTab(patient)}
                    </div>
                    
                    <!-- Tab: IA Laura -->
                    <div id="tab-ai" class="tab-content hidden p-6">
                        \${generateAITab(patient)}
                    </div>
                \`;
            }
            
            // Funções para gerar conteúdo de cada tab
            function generateOverviewTab(patient) {
                return \`
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-blue-50 rounded-lg p-4">
                            <h3 class="font-bold text-blue-900 mb-3">
                                <i class="fas fa-notes-medical mr-2"></i>Dados Clínicos
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Diagnóstico:</strong> \${patient.diagnostico}</p>
                                <p><strong>Estadiamento:</strong> \${patient.estadiamento}</p>
                                <p><strong>Início do Tratamento:</strong> 10/01/2025</p>
                                <p><strong>Protocolo:</strong> NCCN Guidelines 2024</p>
                            </div>
                        </div>
                        
                        <div class="bg-green-50 rounded-lg p-4">
                            <h3 class="font-bold text-green-900 mb-3">
                                <i class="fas fa-user-md mr-2"></i>Equipe Médica
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Oncologista:</strong> \${patient.medico}</p>
                                <p><strong>Navegador:</strong> \${patient.navegador}</p>
                                <p><strong>Nutricionista:</strong> Dra. Ana Paula Santos</p>
                                <p><strong>Psicóloga:</strong> Dra. Marina Costa</p>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateContactTab(patient) {
                return \`
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-white border rounded-lg p-4">
                            <h3 class="font-bold text-gray-800 mb-4">
                                <i class="fas fa-user mr-2"></i>Contatos do Paciente
                            </h3>
                            <div class="space-y-3">
                                <button class="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                                    <i class="fas fa-phone mr-2"></i>Ligar: \${patient.telefone}
                                </button>
                                <button class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                    <i class="fab fa-whatsapp mr-2"></i>WhatsApp
                                </button>
                                <button class="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
                                    <i class="fas fa-envelope mr-2"></i>E-mail: \${patient.email}
                                </button>
                            </div>
                        </div>
                        
                        <div class="bg-white border rounded-lg p-4">
                            <h3 class="font-bold text-gray-800 mb-4">
                                <i class="fas fa-hospital-user mr-2"></i>Equipe Médica
                            </h3>
                            <div class="space-y-3">
                                <div class="p-3 bg-blue-50 rounded">
                                    <p class="font-semibold">\${patient.medico}</p>
                                    <button class="mt-2 text-blue-600 hover:text-blue-700 text-sm">
                                        <i class="fas fa-phone mr-1"></i>Contatar
                                    </button>
                                </div>
                                <div class="p-3 bg-green-50 rounded">
                                    <p class="font-semibold">\${patient.navegador}</p>
                                    <button class="mt-2 text-green-600 hover:text-green-700 text-sm">
                                        <i class="fas fa-phone mr-1"></i>Contatar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateScheduleTab(patient) {
                return \`
                    <div class="bg-white rounded-lg">
                        <h3 class="font-bold text-gray-800 mb-4">
                            <i class="fas fa-calendar-plus mr-2"></i>Agendar Consulta/Procedimento
                        </h3>
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Agendamento</label>
                            <select class="w-full border rounded-lg px-3 py-2">
                                <option>Consulta Médica</option>
                                <option>Exame de Imagem</option>
                                <option>Coleta de Sangue</option>
                                <option>Quimioterapia</option>
                                <option>Radioterapia</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Data e Horário</label>
                            <input type="datetime-local" class="w-full border rounded-lg px-3 py-2">
                        </div>
                        <button class="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700">
                            <i class="fas fa-check mr-2"></i>Confirmar Agendamento
                        </button>
                    </div>
                \`;
            }
            
            function generateJourneyTab(patient) {
                return \`
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="fas fa-route mr-2"></i>Jornada do Paciente
                    </h3>
                    <div class="relative">
                        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="bg-green-500 text-white rounded-full p-2 z-10">
                                    <i class="fas fa-check text-xs"></i>
                                </div>
                                <div class="ml-4 bg-green-50 rounded-lg p-4 flex-1">
                                    <h4 class="font-semibold">Diagnóstico Confirmado</h4>
                                    <p class="text-sm text-gray-600">10/01/2025</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="bg-yellow-500 text-white rounded-full p-2 z-10 animate-pulse">
                                    <i class="fas fa-clock text-xs"></i>
                                </div>
                                <div class="ml-4 bg-yellow-50 rounded-lg p-4 flex-1 border-2 border-yellow-300">
                                    <h4 class="font-semibold">Em Tratamento</h4>
                                    <p class="text-sm text-gray-600">3º Ciclo de Quimioterapia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateChecklistTab(patient) {
                return \`
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="fas fa-tasks mr-2"></i>Checklist de Acompanhamento
                    </h3>
                    <div class="space-y-4">
                        <div class="bg-white border rounded-lg p-4">
                            <h4 class="font-semibold mb-3 text-blue-800">
                                <i class="fas fa-folder-open mr-2"></i>Documentação
                            </h4>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" checked class="mr-2">
                                    <span>Termo de Consentimento assinado</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" checked class="mr-2">
                                    <span>Carteirinha do convênio atualizada</span>
                                </label>
                            </div>
                        </div>
                        <div class="bg-white border rounded-lg p-4">
                            <h4 class="font-semibold mb-3 text-green-800">
                                <i class="fas fa-vial mr-2"></i>Exames
                            </h4>
                            <div class="space-y-2">
                                <label class="flex items-center">
                                    <input type="checkbox" checked class="mr-2">
                                    <span>Hemograma completo</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="checkbox" class="mr-2">
                                    <span>Marcadores tumorais</span>
                                </label>
                            </div>
                        </div>
                    </div>
                \`;
            }
            
            function generateAITab(patient) {
                return \`
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="fas fa-brain mr-2"></i>Análise Preditiva - IA Laura
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                            <h4 class="font-semibold text-purple-900 mb-3">Score de Ansiedade</h4>
                            <div class="text-center">
                                <div class="text-4xl font-bold text-purple-700">72</div>
                                <div class="text-sm text-purple-600 mt-1">Moderado-Alto</div>
                            </div>
                        </div>
                        <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                            <h4 class="font-semibold text-green-900 mb-3">Recomendações</h4>
                            <ul class="text-sm space-y-1 text-green-700">
                                <li>• Intensificar contato telefônico</li>
                                <li>• Agendar consulta psico-oncologia</li>
                                <li>• Incluir familiar nas consultas</li>
                            </ul>
                        </div>
                    </div>
                \`;
            }
            
            // Função para fechar a view do paciente
            function closePatientView() {
                const modal = document.getElementById('patient-view-modal');
                if (modal) {
                    modal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            }
            
            // Função para mostrar tab
            function showTab(tabName) {
                document.querySelectorAll('.tab-content').forEach(tab => {
                    tab.classList.add('hidden');
                });
                
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('border-teal-600', 'text-teal-600', 'active');
                    btn.classList.add('border-transparent', 'text-gray-600');
                });
                
                const selectedTab = document.getElementById('tab-' + tabName);
                if (selectedTab) {
                    selectedTab.classList.remove('hidden');
                }
                
                if (event && event.target) {
                    event.target.classList.add('border-teal-600', 'text-teal-600', 'active');
                    event.target.classList.remove('border-transparent', 'text-gray-600');
                }
            }
            
            // Função para configurar eventos do modal
            function setupModalEvents() {
                const modal = document.getElementById('patient-view-modal');
                if (modal) {
                    modal.addEventListener('click', function(e) {
                        if (e.target === modal) {
                            closePatientView();
                        }
                    });
                }
            }
            
            // Função para inicializar eventos do Kanban
            function initializeKanbanEvents() {
                console.log('Inicializando eventos do Kanban...');
                
                // Aguardar um momento para garantir que o DOM está pronto
                setTimeout(() => {
                    const kanbanCards = document.querySelectorAll('.kanban-card');
                    console.log('Cards encontrados:', kanbanCards.length);
                    
                    kanbanCards.forEach(card => {
                        card.style.cursor = 'pointer';
                        card.addEventListener('click', function(e) {
                            if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
                                e.stopPropagation();
                                return;
                            }
                            
                            const patientId = this.dataset.patientId || 'PAC-001';
                            console.log('Card clicado, abrindo paciente:', patientId);
                            openPatientView(patientId);
                        });
                    });
                    
                    // Adicionar eventos aos botões dentro dos cards
                    document.querySelectorAll('.kanban-card button').forEach(btn => {
                        btn.addEventListener('click', function(e) {
                            e.stopPropagation();
                            const card = this.closest('.kanban-card');
                            const patientId = card?.dataset.patientId || 'PAC-001';
                            openPatientView(patientId);
                        });
                    });
                }, 500);
            }
            
            // Marcar portal como navigator para ativar funcionalidades
            document.addEventListener('DOMContentLoaded', function() {
                document.body.classList.add('navigator-portal');
                console.log('Portal Navegador carregado com sistema integrado!');
                
                // Inicializar eventos dos cards do Kanban
                initializeKanbanEvents();
                
                // Adicionar botões de ação nas linhas da tabela de pacientes se existir
                const actionCells = document.querySelectorAll('td.patient-actions');
                actionCells.forEach(cell => {
                    const patientId = cell.dataset.patientId || 'PAC-001';
                    cell.innerHTML = \`
                        <button onclick="openNavigatorModal('contatar', '\${patientId}')" class="text-blue-600 hover:text-blue-700 mr-2" title="Contatar">
                            <i class="fas fa-address-book"></i>
                        </button>
                        <button onclick="openNavigatorModal('agendar', '\${patientId}')" class="text-purple-600 hover:text-purple-700 mr-2" title="Agendar">
                            <i class="fas fa-calendar-alt"></i>
                        </button>
                        <button onclick="openNavigatorModal('jornada', '\${patientId}')" class="text-green-600 hover:text-green-700 mr-2" title="Jornada">
                            <i class="fas fa-route"></i>
                        </button>
                        <button onclick="openNavigatorModal('checklist', '\${patientId}')" class="text-indigo-600 hover:text-indigo-700" title="Checklist">
                            <i class="fas fa-clipboard-check"></i>
                        </button>
                    \`;
                });
            });
            `]})});Q.get("/financial",async e=>{const t=`
        <!-- Métricas Financeiras -->
        <div class="bg-gradient-to-r from-green-600 to-green-700 rounded-xl shadow-xl p-8 text-white mb-8">
            <h2 class="text-2xl font-bold mb-6">
                <i class="fas fa-shield-alt mr-3"></i>
                Proteção Financeira com IA
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="text-center">
                    <div class="text-4xl font-bold mb-2">R$ 2.4M</div>
                    <div class="text-green-200">Glosas Evitadas</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold mb-2">98.5%</div>
                    <div class="text-green-200">Taxa de Aprovação</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold mb-2">1,247</div>
                    <div class="text-green-200">Auditorias Automáticas</div>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Financeira -->
        ${z("financial")}
        
        <!-- Ferramentas Financeiras -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-file-invoice-dollar text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Faturamento</h4>
                <p class="text-sm text-gray-600 mt-1">Gestão de contas</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-search-dollar text-3xl text-blue-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Auditoria</h4>
                <p class="text-sm text-gray-600 mt-1">Análise preventiva</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-chart-pie text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Relatórios</h4>
                <p class="text-sm text-gray-600 mt-1">Dashboards gerenciais</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-robot text-3xl text-orange-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">IA Financeira</h4>
                <p class="text-sm text-gray-600 mt-1">Previsões e alertas</p>
            </button>
        </div>
    `;return e.json({html:re("financial","Gestão Financeira",t),scripts:[]})});Q.get("/wellness",async e=>{const t=`
        <!-- Dashboard de Bem-Estar -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- Estado Emocional -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-smile text-cyan-600 mr-2"></i>
                    Estado Emocional Geral
                </h3>
                <div class="text-center py-4">
                    <div class="text-5xl mb-3">😊</div>
                    <p class="text-lg font-semibold text-gray-700">Estável</p>
                    <p class="text-sm text-gray-600 mt-2">Última avaliação: Hoje, 10:30</p>
                </div>
            </div>
            
            <!-- Atividades de Apoio -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-hands-helping text-purple-600 mr-2"></i>
                    Atividades Hoje
                </h3>
                <div class="space-y-3">
                    <div class="flex items-center justify-between p-2 bg-purple-50 rounded">
                        <span class="text-sm text-gray-700">Grupo de Apoio</span>
                        <span class="text-xs text-purple-600 font-semibold">14:00</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-cyan-50 rounded">
                        <span class="text-sm text-gray-700">Yoga Terapêutica</span>
                        <span class="text-xs text-cyan-600 font-semibold">16:00</span>
                    </div>
                    <div class="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span class="text-sm text-gray-700">Meditação Guiada</span>
                        <span class="text-xs text-green-600 font-semibold">18:00</span>
                    </div>
                </div>
            </div>
            
            <!-- Recursos Disponíveis -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-book-open text-green-600 mr-2"></i>
                    Recursos de Apoio
                </h3>
                <div class="space-y-3">
                    <button class="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                        <i class="fas fa-video text-blue-600 mr-2"></i>
                        <span class="text-sm font-medium">Vídeos Educativos</span>
                    </button>
                    <button class="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                        <i class="fas fa-headphones text-purple-600 mr-2"></i>
                        <span class="text-sm font-medium">Áudios Relaxantes</span>
                    </button>
                    <button class="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                        <i class="fas fa-file-alt text-green-600 mr-2"></i>
                        <span class="text-sm font-medium">Guias e Artigos</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Bem-Estar -->
        ${z("wellness")}
        
        <!-- Ferramentas de Bem-Estar -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-user-friends text-3xl text-cyan-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Grupos</h4>
                <p class="text-sm text-gray-600 mt-1">Participar de grupos</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-brain text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Psicologia</h4>
                <p class="text-sm text-gray-600 mt-1">Agendar sessão</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-spa text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Terapias</h4>
                <p class="text-sm text-gray-600 mt-1">Práticas integrativas</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-journal-whills text-3xl text-orange-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Diário</h4>
                <p class="text-sm text-gray-600 mt-1">Registro emocional</p>
            </button>
        </div>
    `;return e.json({html:re("wellness","Bem-Estar e Apoio",t),scripts:[]})});Q.get("/research",async e=>{const t=`
        <!-- Dashboard de Pesquisa -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <!-- Estudos Ativos -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-flask text-green-600 mr-2"></i>
                    Estudos Ativos
                </h3>
                <div class="text-3xl font-bold text-green-600 mb-2">24</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Fase III</span>
                        <span class="font-semibold">8</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Fase II</span>
                        <span class="font-semibold">10</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Observacionais</span>
                        <span class="font-semibold">6</span>
                    </div>
                </div>
            </div>
            
            <!-- Pacientes em Pesquisa -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-users text-blue-600 mr-2"></i>
                    Participantes
                </h3>
                <div class="text-3xl font-bold text-blue-600 mb-2">1,847</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Novos este mês</span>
                        <span class="font-semibold text-green-600">+67</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Taxa de retenção</span>
                        <span class="font-semibold">94%</span>
                    </div>
                </div>
            </div>
            
            <!-- Publicações -->
            <div class="bg-white rounded-xl shadow-lg p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                    <i class="fas fa-file-medical-alt text-purple-600 mr-2"></i>
                    Publicações 2024
                </h3>
                <div class="text-3xl font-bold text-purple-600 mb-2">42</div>
                <div class="space-y-2">
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Impact Factor >5</span>
                        <span class="font-semibold">15</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-gray-600">Citações</span>
                        <span class="font-semibold">328</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Pesquisa -->
        ${z("research")}
        
        <!-- Ferramentas de Pesquisa -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-database text-3xl text-green-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Banco de Dados</h4>
                <p class="text-sm text-gray-600 mt-1">REDCap & BioBanco</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-chart-bar text-3xl text-blue-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Análises</h4>
                <p class="text-sm text-gray-600 mt-1">Estatísticas e IA</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-clipboard-list text-3xl text-purple-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Protocolos</h4>
                <p class="text-sm text-gray-600 mt-1">Gerenciar estudos</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-graduation-cap text-3xl text-orange-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Educação</h4>
                <p class="text-sm text-gray-600 mt-1">Cursos e treinamentos</p>
            </button>
        </div>
    `;return e.json({html:re("research","Pesquisa Clínica",t),scripts:[]})});Q.get("/admin",async e=>{const t=`
        <!-- Dashboard Master Admin -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <!-- Métricas Críticas do Sistema -->
            <div class="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-xl">
                <div class="flex items-center justify-between mb-4">
                    <i class="fas fa-users text-3xl opacity-70"></i>
                    <span class="text-xs bg-white/20 px-2 py-1 rounded-full">+12%</span>
                </div>
                <div class="text-3xl font-bold">847</div>
                <div class="text-sm opacity-90">Usuários Ativos</div>
                <div class="mt-2 text-xs opacity-70">156 médicos • 523 pacientes</div>
            </div>
            
            <div class="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white shadow-xl">
                <div class="flex items-center justify-between mb-4">
                    <i class="fas fa-robot text-3xl opacity-70"></i>
                    <span class="text-xs bg-white/20 px-2 py-1 rounded-full">IA ON</span>
                </div>
                <div class="text-3xl font-bold">2,341</div>
                <div class="text-sm opacity-90">Processos IA/dia</div>
                <div class="mt-2 text-xs opacity-70">LAURA: 97% accuracy</div>
            </div>
            
            <div class="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white shadow-xl">
                <div class="flex items-center justify-between mb-4">
                    <i class="fas fa-server text-3xl opacity-70"></i>
                    <span class="text-xs bg-white/20 px-2 py-1 rounded-full">EDGE</span>
                </div>
                <div class="text-3xl font-bold">12ms</div>
                <div class="text-sm opacity-90">Latência Média</div>
                <div class="mt-2 text-xs opacity-70">287 PoPs ativos</div>
            </div>
            
            <div class="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-6 text-white shadow-xl">
                <div class="flex items-center justify-between mb-4">
                    <i class="fas fa-shield-alt text-3xl opacity-70"></i>
                    <span class="text-xs bg-white/20 px-2 py-1 rounded-full">LGPD</span>
                </div>
                <div class="text-3xl font-bold">100%</div>
                <div class="text-sm opacity-90">Compliance</div>
                <div class="mt-2 text-xs opacity-70">0 incidentes</div>
            </div>
        </div>

        <!-- Ansiedade de Laura - Versão Admin -->
        ${z("admin")}
        
        <!-- Painéis de Controle -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <!-- Gestão de Personas -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-users-cog text-green-600 mr-2"></i>
                        Gestão de Personas
                    </h3>
                    <button class="text-gray-400 hover:text-gray-600">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                </div>
                <div class="space-y-3 mb-4">
                    <div class="flex justify-between p-2 bg-gray-50 rounded">
                        <span class="text-sm text-gray-700">Médicos</span>
                        <span class="font-bold text-green-600">156</span>
                    </div>
                    <div class="flex justify-between p-2 bg-gray-50 rounded">
                        <span class="text-sm text-gray-700">Pacientes</span>
                        <span class="font-bold text-blue-600">523</span>
                    </div>
                    <div class="flex justify-between p-2 bg-gray-50 rounded">
                        <span class="text-sm text-gray-700">Navegadores</span>
                        <span class="font-bold text-purple-600">42</span>
                    </div>
                </div>
                <button class="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    <i class="fas fa-user-plus mr-2"></i>Adicionar
                </button>
            </div>
            
            <!-- Processos & Workflows -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-cogs text-purple-600 mr-2"></i>
                        Processos & Workflows
                    </h3>
                    <button class="text-gray-400 hover:text-gray-600">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                </div>
                <div class="space-y-3 mb-4">
                    <div class="p-2 bg-gray-50 rounded">
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Triagem Auto</span>
                            <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Ativo</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 87%"></div>
                        </div>
                    </div>
                    <div class="p-2 bg-gray-50 rounded">
                        <div class="flex justify-between mb-1">
                            <span class="text-sm text-gray-700">Navegação</span>
                            <span class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Running</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 92%"></div>
                        </div>
                    </div>
                </div>
                <button class="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    <i class="fas fa-plus-circle mr-2"></i>Novo Workflow
                </button>
            </div>
            
            <!-- Configuração IA -->
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">
                        <i class="fas fa-brain text-pink-600 mr-2"></i>
                        Configuração IA
                    </h3>
                    <button class="text-gray-400 hover:text-gray-600">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                </div>
                <div class="space-y-3 mb-4">
                    <div class="p-2 bg-gray-50 rounded">
                        <div class="flex justify-between">
                            <span class="text-sm text-gray-700">LAURA</span>
                            <div class="flex items-center">
                                <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                <span class="text-xs text-green-600">Online</span>
                            </div>
                        </div>
                        <div class="text-xs text-gray-500 mt-1">Accuracy: 97%</div>
                    </div>
                    <div class="p-2 bg-gray-50 rounded">
                        <div class="flex justify-between">
                            <span class="text-sm text-gray-700">API Calls</span>
                            <span class="font-bold text-pink-600">12,847</span>
                        </div>
                        <div class="text-xs text-gray-500 mt-1">Custo: R$ 127.34</div>
                    </div>
                </div>
                <button class="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
                    <i class="fas fa-sliders-h mr-2"></i>Ajustar
                </button>
            </div>
        </div>
        
        <!-- Ações Rápidas Admin -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-database text-3xl text-yellow-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Database</h4>
                <p class="text-sm text-gray-600 mt-1">D1, KV, R2</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-shield-virus text-3xl text-red-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Segurança</h4>
                <p class="text-sm text-gray-600 mt-1">LGPD & ISO</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-chart-line text-3xl text-cyan-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Analytics</h4>
                <p class="text-sm text-gray-600 mt-1">BI & Reports</p>
            </button>
            
            <button class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <i class="fas fa-tools text-3xl text-gray-600 mb-3"></i>
                <h4 class="font-semibold text-gray-800">Sistema</h4>
                <p class="text-sm text-gray-600 mt-1">Config & Deploy</p>
            </button>
        </div>
    `;return e.json({html:re("admin","Master Administrator",t),scripts:[]})});var it=Object.freeze,Us=Object.defineProperty,Js=(e,t)=>it(Us(e,"raw",{value:it(t||e.slice())})),ot;const Ws=e=>e.html(q(ot||(ot=Js([`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portal do Paciente - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Portal do Paciente • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-user-circle text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>


        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Welcome Section -->
            <div class="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white mb-8">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-2xl font-bold mb-2">Bem-vindo ao seu Portal de Saúde</h1>
                        <p class="opacity-90">Acompanhe sua jornada de tratamento e mantenha-se informado</p>
                    </div>
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-20 h-20 opacity-50">
                </div>
            </div>

            `,`

            <!-- Quick Actions -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <button onclick="openTriageChat()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-user-md text-green-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Auto-Triagem</p>
                    <p class="text-xs text-gray-600">Avalie seus sintomas</p>
                </button>
                
                <button onclick="showAppointments()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-calendar-check text-green-500 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Consultas</p>
                    <p class="text-xs text-gray-600">Próxima: 15/02</p>
                </button>
                
                <button onclick="reportSymptoms()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-file-medical-alt text-teal-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Relatar Sintomas</p>
                    <p class="text-xs text-gray-600">Registre como se sente</p>
                </button>
                
                <button onclick="viewSupport()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-hand-holding-medical text-cyan-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Rede de Apoio</p>
                    <p class="text-xs text-gray-600">Conecte-se</p>
                </button>
            </div>

            <!-- Three Column Layout: Journey, Symptoms, Wellness -->
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                <!-- Journey Timeline - Compact Version -->
                <div class="bg-gradient-to-br from-white to-green-50/30 rounded-xl shadow-lg p-6 border border-green-100/50 hover:shadow-xl transition-shadow">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-800 flex items-center">
                            <div class="bg-green-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-route text-green-600 text-lg"></i>
                            </div>
                            Sua Jornada
                        </h3>
                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                            Fase 3/4
                        </span>
                    </div>
                    
                    <div class="relative" style="min-height: 250px;">
                        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-gray-300"></div>
                        
                        <div class="relative flex items-start mb-4">
                            <div class="bg-green-500 rounded-full w-3 h-3 mt-1 z-10 relative"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-800">Diagnóstico</p>
                                <p class="text-xs text-gray-600">01/01 ✓</p>
                            </div>
                        </div>
                        
                        <div class="relative flex items-start mb-4">
                            <div class="bg-green-500 rounded-full w-3 h-3 mt-1 z-10 relative"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-800">Início Tratamento</p>
                                <p class="text-xs text-gray-600">15/01 ✓</p>
                            </div>
                        </div>
                        
                        <div class="relative flex items-start mb-4">
                            <div class="bg-green-600 rounded-full w-3 h-3 mt-1 z-10 relative animate-pulse"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-800">Quimio - Ciclo 1</p>
                                <p class="text-xs text-gray-600">Em andamento</p>
                                <div class="mt-1 bg-blue-50 px-2 py-1 rounded">
                                    <p class="text-xs text-blue-800">3/6 sessões</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="relative flex items-start">
                            <div class="bg-gray-300 rounded-full w-3 h-3 mt-1 z-10 relative"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-400">Avaliação</p>
                                <p class="text-xs text-gray-400">01/03 - Agendado</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Progress Bar -->
                    <div class="mt-4">
                        <div class="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Progresso Total</span>
                            <span class="font-bold">75%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full h-2">
                            <div class="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style="width: 75%"></div>
                        </div>
                    </div>
                </div>
                <!-- Symptoms Tracking - Compact -->
                <div class="bg-gradient-to-br from-white to-teal-50/30 rounded-xl shadow-lg p-6 border border-teal-100/50 hover:shadow-xl transition-shadow">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-800 flex items-center">
                            <div class="bg-teal-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-chart-line text-teal-600 text-lg"></i>
                            </div>
                            Monitoramento de Sintomas
                        </h3>
                        <div class="flex gap-2">
                            <button onclick="toggleChartView('symptoms', 'week')" class="chart-toggle-btn active px-3 py-1 text-xs bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors">
                                Semana
                            </button>
                            <button onclick="toggleChartView('symptoms', 'month')" class="chart-toggle-btn px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                                Mês
                            </button>
                        </div>
                    </div>
                    
                    <!-- Chart Container -->
                    <div class="relative" style="height: 200px;">
                        <canvas id="symptomsChart"></canvas>
                    </div>
                    
                    <!-- Legend with interactive elements -->
                    <div class="mt-4 grid grid-cols-2 gap-3">
                        <div class="flex items-center justify-between bg-white/70 rounded-lg px-3 py-2">
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                                <span class="text-sm text-gray-700">Náusea</span>
                            </div>
                            <span class="text-sm font-bold text-purple-600">↓ 25%</span>
                        </div>
                        <div class="flex items-center justify-between bg-white/70 rounded-lg px-3 py-2">
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                                <span class="text-sm text-gray-700">Fadiga</span>
                            </div>
                            <span class="text-sm font-bold text-pink-600">↓ 40%</span>
                        </div>
                    </div>
                </div>

                <!-- Wellness Score - Compact -->
                <div class="bg-gradient-to-br from-white to-cyan-50/30 rounded-xl shadow-lg p-6 border border-cyan-100/50 hover:shadow-xl transition-shadow">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-800 flex items-center">
                            <div class="bg-cyan-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-heart text-cyan-600 text-lg"></i>
                            </div>
                            Score de Bem-Estar
                        </h3>
                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                            <i class="fas fa-arrow-up text-xs mr-1"></i>
                            +5 pts
                        </span>
                    </div>
                    
                    <!-- Circular Progress - Smaller -->
                    <div class="flex justify-center mb-3">
                        <div class="relative">
                            <svg class="w-32 h-32 transform -rotate-90">
                                <!-- Background circle -->
                                <circle cx="80" cy="80" r="70" 
                                        stroke="#e5e7eb" 
                                        stroke-width="12" 
                                        fill="none"></circle>
                                <!-- Progress circle -->
                                <circle cx="80" cy="80" r="70" 
                                        stroke="url(#wellness-gradient)" 
                                        stroke-width="12" 
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-dasharray="440"
                                        stroke-dashoffset="110"
                                        class="transition-all duration-1000 ease-out"></circle>
                                <!-- Gradient definition -->
                                <defs>
                                    <linearGradient id="wellness-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#06b6d4" />
                                        <stop offset="100%" stop-color="#8b5cf6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="absolute inset-0 flex flex-col items-center justify-center">
                                <span class="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">75%</span>
                                <span class="text-xs text-gray-500 mt-1">Ótimo</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Wellness Categories -->
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600 flex items-center">
                                <i class="fas fa-bed text-blue-500 w-4 mr-2"></i>
                                Sono
                            </span>
                            <div class="flex items-center">
                                <div class="bg-gray-200 rounded-full h-2 w-16 mr-2">
                                    <div class="bg-blue-500 h-2 rounded-full" style="width: 80%"></div>
                                </div>
                                <span class="text-xs font-medium text-gray-700">80%</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600 flex items-center">
                                <i class="fas fa-apple-alt text-green-500 w-4 mr-2"></i>
                                Nutrição
                            </span>
                            <div class="flex items-center">
                                <div class="bg-gray-200 rounded-full h-2 w-16 mr-2">
                                    <div class="bg-green-500 h-2 rounded-full" style="width: 70%"></div>
                                </div>
                                <span class="text-xs font-medium text-gray-700">70%</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600 flex items-center">
                                <i class="fas fa-smile text-yellow-500 w-4 mr-2"></i>
                                Humor
                            </span>
                            <div class="flex items-center">
                                <div class="bg-gray-200 rounded-full h-2 w-16 mr-2">
                                    <div class="bg-yellow-500 h-2 rounded-full" style="width: 75%"></div>
                                </div>
                                <span class="text-xs font-medium text-gray-700">75%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-4 text-center">
                        <p class="text-sm text-gray-600 bg-cyan-50 rounded-lg py-2">
                            <i class="fas fa-trophy text-cyan-600 mr-1"></i>
                            Você está indo muito bem! Continue assim!
                        </p>
                    </div>
                </div>
            </div>

            <!-- Support Network - Enhanced with Actions -->
            <div class="bg-gradient-to-br from-white to-green-50/20 rounded-xl shadow-lg p-6 border border-green-100/50 hover:shadow-xl transition-shadow">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="font-bold text-gray-800 flex items-center">
                        <div class="bg-green-100 p-2 rounded-lg mr-3">
                            <i class="fas fa-users text-green-600 text-lg"></i>
                        </div>
                        Sua Rede de Apoio
                    </h3>
                    <span class="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                        <i class="fas fa-circle text-green-500 text-xs mr-1 animate-pulse"></i>
                        4 disponíveis agora
                    </span>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <!-- Dr. João Silva - Oncologista -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-green-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-user-md text-3xl text-green-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Dr. João Silva</p>
                            <p class="text-xs text-gray-600 mb-3">Oncologista</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Dr. João Silva', 'oncologista')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Dr. João Silva', 'oncologista')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Maria Santos - Navegadora -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-green-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-green-100 to-emerald-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-compass text-3xl text-green-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Maria Santos</p>
                            <p class="text-xs text-gray-600 mb-3">Navegadora</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Maria Santos', 'navegadora')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Maria Santos', 'navegadora')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Ana Costa - Psicóloga -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-teal-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-teal-100 to-teal-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-brain text-3xl text-teal-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Ana Costa</p>
                            <p class="text-xs text-gray-600 mb-3">Psicóloga</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Ana Costa', 'psicóloga')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Ana Costa', 'psicóloga')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Família -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-cyan-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-heart text-3xl text-cyan-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Família</p>
                            <p class="text-xs text-gray-600 mb-3">3 membros</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Família', 'grupo familiar')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Família', 'grupo familiar')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Status Bar -->
                <div class="mt-6 bg-green-50 rounded-lg p-3 border border-green-200">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-info-circle text-green-600"></i>
                            <span class="text-sm text-gray-700">Sua equipe está pronta para ajudar</span>
                        </div>
                        <button onclick="viewAllContacts()" class="text-sm text-green-600 hover:text-green-700 font-medium">
                            Ver todos os contatos →
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Triage Chat Modal -->
        <div id="triageModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-xl max-w-md w-full max-h-[80vh] flex flex-col">
                <div class="p-4 border-b flex items-center justify-between">
                    <h3 class="font-bold text-gray-800">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                        Assistente de Triagem
                    </h3>
                    <button onclick="closeTriageChat()" class="text-gray-500 hover:text-gray-700">
                        <i class="far fa-times-circle"></i>
                    </button>
                </div>
                <div class="flex-grow p-4 overflow-y-auto" id="chatMessages">
                    <div class="bg-green-100 p-3 rounded-lg mb-3">
                        <p class="text-sm">Olá! Sou seu assistente virtual. Como posso ajudar você hoje?</p>
                    </div>
                </div>
                <div class="p-4 border-t">
                    <div class="flex space-x-2">
                        <input type="text" id="chatInput" placeholder="Digite sua mensagem..." 
                               class="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <button onclick="sendMessage()" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                            <i class="far fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="footer-gradient text-white mt-8">
            <div class="container mx-auto px-4 py-6">
                <div class="text-center">
                    <p class="text-sm opacity-90">
                        © 2024 Laura Technology | ACCamargo Cancer Center
                    </p>
                </div>
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <script>
            // Enhanced Chart initialization with better styling
            const ctx = document.getElementById('symptomsChart').getContext('2d');
            const symptomsChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                    datasets: [{
                        label: 'Náusea',
                        data: [3, 4, 3, 2, 3, 4, 3],
                        borderColor: 'rgb(139, 92, 246)',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        pointBackgroundColor: 'white',
                        pointBorderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }, {
                        label: 'Fadiga',
                        data: [5, 5, 4, 4, 3, 4, 3],
                        borderColor: 'rgb(236, 72, 153)',
                        backgroundColor: 'rgba(236, 72, 153, 0.1)',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        pointBackgroundColor: 'white',
                        pointBorderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'index',
                        intersect: false
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            padding: 12,
                            titleColor: 'white',
                            bodyColor: 'white',
                            borderColor: 'white',
                            borderWidth: 1,
                            displayColors: true,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.parsed.y + '/10';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10,
                            ticks: {
                                stepSize: 2,
                                color: '#6b7280',
                                font: {
                                    size: 11
                                }
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)',
                                drawBorder: false
                            }
                        },
                        x: {
                            ticks: {
                                color: '#6b7280',
                                font: {
                                    size: 11
                                }
                            },
                            grid: {
                                display: false,
                                drawBorder: false
                            }
                        }
                    }
                }
            });
            
            // Toggle chart view function
            function toggleChartView(chart, period) {
                const buttons = document.querySelectorAll('.chart-toggle-btn');
                buttons.forEach(btn => {
                    btn.classList.remove('active', 'bg-teal-100', 'text-teal-700');
                    btn.classList.add('bg-gray-100', 'text-gray-600');
                });
                
                event.target.classList.remove('bg-gray-100', 'text-gray-600');
                event.target.classList.add('active', 'bg-teal-100', 'text-teal-700');
                
                if (period === 'month') {
                    symptomsChart.data.labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
                    symptomsChart.data.datasets[0].data = [4, 3, 3, 2];
                    symptomsChart.data.datasets[1].data = [5, 4, 3, 3];
                } else {
                    symptomsChart.data.labels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
                    symptomsChart.data.datasets[0].data = [3, 4, 3, 2, 3, 4, 3];
                    symptomsChart.data.datasets[1].data = [5, 5, 4, 4, 3, 4, 3];
                }
                symptomsChart.update();
            }

            // Chat functions
            function openTriageChat() {
                document.getElementById('triageModal').classList.remove('hidden');
            }

            function closeTriageChat() {
                document.getElementById('triageModal').classList.add('hidden');
            }

            async function sendMessage() {
                const input = document.getElementById('chatInput');
                const message = input.value.trim();
                if (!message) return;

                // Add user message
                const messagesDiv = document.getElementById('chatMessages');
                messagesDiv.innerHTML += \`
                    <div class="bg-gray-100 p-3 rounded-lg mb-3 ml-12">
                        <p class="text-sm">\${message}</p>
                    </div>
                \`;

                input.value = '';

                // Call API
                try {
                    const response = await axios.post('/api/ai/auto-triage', {
                        message: message,
                        sessionId: 'session_' + Date.now(),
                        patientInfo: {}
                    });

                    // Add bot response
                    messagesDiv.innerHTML += \`
                        <div class="bg-green-100 p-3 rounded-lg mb-3">
                            <p class="text-sm">\${response.data.response.message}</p>
                            <p class="text-xs text-gray-600 mt-2">Urgência: \${response.data.response.urgency}</p>
                        </div>
                    \`;
                } catch (error) {
                    messagesDiv.innerHTML += \`
                        <div class="bg-emerald-100 p-3 rounded-lg mb-3">
                            <p class="text-sm">Desculpe, ocorreu um erro. Tente novamente.</p>
                        </div>
                    \`;
                }

                messagesDiv.scrollTop = messagesDiv.scrollHeight;
            }

            function showAppointments() {
                alert('Suas consultas serão exibidas aqui');
            }

            function reportSymptoms() {
                alert('Formulário de sintomas será aberto');
            }

            function viewSupport() {
                alert('Rede de apoio será exibida');
            }
            
            // Support Network Functions - Simplified
            function startChat(personName, role) {
                alert('Iniciando conversa com ' + personName + ' (' + role + ')\\n\\nEm breve este chat estará disponível!');
            }
            
            function requestHelp(personName, role) {
                const helpType = prompt('Que tipo de ajuda você precisa de ' + personName + '?\\n\\n1. Urgente\\n2. Agendamento\\n3. Informações\\n4. Outro');
                if (helpType) {
                    alert('Solicitação enviada para ' + personName + '\\n\\nTipo de ajuda: ' + helpType + '\\n\\nVocê receberá uma resposta em breve!');
                }
            }
            
            function sendHelpRequest(personName, helpType) {
                alert('✅ Solicitação enviada com sucesso!\\n\\n' + personName + ' foi notificado(a)\\nAssunto: ' + helpType + '\\n\\nVocê receberá uma resposta em breve.');
            }
            
            function viewAllContacts() {
                alert('📋 Lista completa de contatos:\\n\\n• Dr. João Silva - Oncologista\\n• Maria Santos - Navegadora\\n• Ana Costa - Psicóloga\\n• Família - 3 membros\\n\\nTodos disponíveis para ajudar!');
            }
            

                    <div class="bg-white rounded-xl max-w-md w-full max-h-[80vh] flex flex-col">
                        <div class="p-4 border-b flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100">
                            <h3 class="font-bold text-gray-800 flex items-center">
                                <i class="fas fa-comments text-green-600 mr-2"></i>
                                Conversa com \${personName}
                            </h3>
                            <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                            <p class="font-bold">Solicitação enviada!</p>
                            <p class="text-sm">' + personName + ' foi notificado(a) sobre: "' + helpType + '"</p>
                            <p class="text-xs mt-1">Você receberá uma resposta em breve.</p>
                        </div>
                    </div>
                \`;
                document.body.appendChild(notification);
                
                // Remover notificação após 5 segundos
                setTimeout(() => notification.remove(), 5000);
            }


            // Enter key to send message
            document.getElementById('chatInput').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        <\/script>
        <script src="/static/portal-helpers.js"><\/script>
        <script src="/static/portal-helpers.js"><\/script>
        <script src="/static/action-plan-system.js"><\/script>
        <script src="/static/action-plan-handlers.js"><\/script>
    </body>
    </html>
  `],[`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portal do Paciente - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Portal do Paciente • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-user-circle text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>


        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Welcome Section -->
            <div class="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white mb-8">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-2xl font-bold mb-2">Bem-vindo ao seu Portal de Saúde</h1>
                        <p class="opacity-90">Acompanhe sua jornada de tratamento e mantenha-se informado</p>
                    </div>
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-20 h-20 opacity-50">
                </div>
            </div>

            `,`

            <!-- Quick Actions -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <button onclick="openTriageChat()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-user-md text-green-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Auto-Triagem</p>
                    <p class="text-xs text-gray-600">Avalie seus sintomas</p>
                </button>
                
                <button onclick="showAppointments()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-calendar-check text-green-500 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Consultas</p>
                    <p class="text-xs text-gray-600">Próxima: 15/02</p>
                </button>
                
                <button onclick="reportSymptoms()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-file-medical-alt text-teal-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Relatar Sintomas</p>
                    <p class="text-xs text-gray-600">Registre como se sente</p>
                </button>
                
                <button onclick="viewSupport()" class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <i class="fas fa-hand-holding-medical text-cyan-600 text-2xl mb-2"></i>
                    <p class="font-semibold text-gray-800">Rede de Apoio</p>
                    <p class="text-xs text-gray-600">Conecte-se</p>
                </button>
            </div>

            <!-- Three Column Layout: Journey, Symptoms, Wellness -->
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                <!-- Journey Timeline - Compact Version -->
                <div class="bg-gradient-to-br from-white to-green-50/30 rounded-xl shadow-lg p-6 border border-green-100/50 hover:shadow-xl transition-shadow">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-800 flex items-center">
                            <div class="bg-green-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-route text-green-600 text-lg"></i>
                            </div>
                            Sua Jornada
                        </h3>
                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                            Fase 3/4
                        </span>
                    </div>
                    
                    <div class="relative" style="min-height: 250px;">
                        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-gray-300"></div>
                        
                        <div class="relative flex items-start mb-4">
                            <div class="bg-green-500 rounded-full w-3 h-3 mt-1 z-10 relative"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-800">Diagnóstico</p>
                                <p class="text-xs text-gray-600">01/01 ✓</p>
                            </div>
                        </div>
                        
                        <div class="relative flex items-start mb-4">
                            <div class="bg-green-500 rounded-full w-3 h-3 mt-1 z-10 relative"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-800">Início Tratamento</p>
                                <p class="text-xs text-gray-600">15/01 ✓</p>
                            </div>
                        </div>
                        
                        <div class="relative flex items-start mb-4">
                            <div class="bg-green-600 rounded-full w-3 h-3 mt-1 z-10 relative animate-pulse"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-800">Quimio - Ciclo 1</p>
                                <p class="text-xs text-gray-600">Em andamento</p>
                                <div class="mt-1 bg-blue-50 px-2 py-1 rounded">
                                    <p class="text-xs text-blue-800">3/6 sessões</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="relative flex items-start">
                            <div class="bg-gray-300 rounded-full w-3 h-3 mt-1 z-10 relative"></div>
                            <div class="ml-5">
                                <p class="text-sm font-semibold text-gray-400">Avaliação</p>
                                <p class="text-xs text-gray-400">01/03 - Agendado</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Progress Bar -->
                    <div class="mt-4">
                        <div class="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Progresso Total</span>
                            <span class="font-bold">75%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full h-2">
                            <div class="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style="width: 75%"></div>
                        </div>
                    </div>
                </div>
                <!-- Symptoms Tracking - Compact -->
                <div class="bg-gradient-to-br from-white to-teal-50/30 rounded-xl shadow-lg p-6 border border-teal-100/50 hover:shadow-xl transition-shadow">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-800 flex items-center">
                            <div class="bg-teal-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-chart-line text-teal-600 text-lg"></i>
                            </div>
                            Monitoramento de Sintomas
                        </h3>
                        <div class="flex gap-2">
                            <button onclick="toggleChartView('symptoms', 'week')" class="chart-toggle-btn active px-3 py-1 text-xs bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors">
                                Semana
                            </button>
                            <button onclick="toggleChartView('symptoms', 'month')" class="chart-toggle-btn px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                                Mês
                            </button>
                        </div>
                    </div>
                    
                    <!-- Chart Container -->
                    <div class="relative" style="height: 200px;">
                        <canvas id="symptomsChart"></canvas>
                    </div>
                    
                    <!-- Legend with interactive elements -->
                    <div class="mt-4 grid grid-cols-2 gap-3">
                        <div class="flex items-center justify-between bg-white/70 rounded-lg px-3 py-2">
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                                <span class="text-sm text-gray-700">Náusea</span>
                            </div>
                            <span class="text-sm font-bold text-purple-600">↓ 25%</span>
                        </div>
                        <div class="flex items-center justify-between bg-white/70 rounded-lg px-3 py-2">
                            <div class="flex items-center">
                                <span class="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                                <span class="text-sm text-gray-700">Fadiga</span>
                            </div>
                            <span class="text-sm font-bold text-pink-600">↓ 40%</span>
                        </div>
                    </div>
                </div>

                <!-- Wellness Score - Compact -->
                <div class="bg-gradient-to-br from-white to-cyan-50/30 rounded-xl shadow-lg p-6 border border-cyan-100/50 hover:shadow-xl transition-shadow">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="font-bold text-gray-800 flex items-center">
                            <div class="bg-cyan-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-heart text-cyan-600 text-lg"></i>
                            </div>
                            Score de Bem-Estar
                        </h3>
                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                            <i class="fas fa-arrow-up text-xs mr-1"></i>
                            +5 pts
                        </span>
                    </div>
                    
                    <!-- Circular Progress - Smaller -->
                    <div class="flex justify-center mb-3">
                        <div class="relative">
                            <svg class="w-32 h-32 transform -rotate-90">
                                <!-- Background circle -->
                                <circle cx="80" cy="80" r="70" 
                                        stroke="#e5e7eb" 
                                        stroke-width="12" 
                                        fill="none"></circle>
                                <!-- Progress circle -->
                                <circle cx="80" cy="80" r="70" 
                                        stroke="url(#wellness-gradient)" 
                                        stroke-width="12" 
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-dasharray="440"
                                        stroke-dashoffset="110"
                                        class="transition-all duration-1000 ease-out"></circle>
                                <!-- Gradient definition -->
                                <defs>
                                    <linearGradient id="wellness-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#06b6d4" />
                                        <stop offset="100%" stop-color="#8b5cf6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="absolute inset-0 flex flex-col items-center justify-center">
                                <span class="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">75%</span>
                                <span class="text-xs text-gray-500 mt-1">Ótimo</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Wellness Categories -->
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600 flex items-center">
                                <i class="fas fa-bed text-blue-500 w-4 mr-2"></i>
                                Sono
                            </span>
                            <div class="flex items-center">
                                <div class="bg-gray-200 rounded-full h-2 w-16 mr-2">
                                    <div class="bg-blue-500 h-2 rounded-full" style="width: 80%"></div>
                                </div>
                                <span class="text-xs font-medium text-gray-700">80%</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600 flex items-center">
                                <i class="fas fa-apple-alt text-green-500 w-4 mr-2"></i>
                                Nutrição
                            </span>
                            <div class="flex items-center">
                                <div class="bg-gray-200 rounded-full h-2 w-16 mr-2">
                                    <div class="bg-green-500 h-2 rounded-full" style="width: 70%"></div>
                                </div>
                                <span class="text-xs font-medium text-gray-700">70%</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600 flex items-center">
                                <i class="fas fa-smile text-yellow-500 w-4 mr-2"></i>
                                Humor
                            </span>
                            <div class="flex items-center">
                                <div class="bg-gray-200 rounded-full h-2 w-16 mr-2">
                                    <div class="bg-yellow-500 h-2 rounded-full" style="width: 75%"></div>
                                </div>
                                <span class="text-xs font-medium text-gray-700">75%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-4 text-center">
                        <p class="text-sm text-gray-600 bg-cyan-50 rounded-lg py-2">
                            <i class="fas fa-trophy text-cyan-600 mr-1"></i>
                            Você está indo muito bem! Continue assim!
                        </p>
                    </div>
                </div>
            </div>

            <!-- Support Network - Enhanced with Actions -->
            <div class="bg-gradient-to-br from-white to-green-50/20 rounded-xl shadow-lg p-6 border border-green-100/50 hover:shadow-xl transition-shadow">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="font-bold text-gray-800 flex items-center">
                        <div class="bg-green-100 p-2 rounded-lg mr-3">
                            <i class="fas fa-users text-green-600 text-lg"></i>
                        </div>
                        Sua Rede de Apoio
                    </h3>
                    <span class="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                        <i class="fas fa-circle text-green-500 text-xs mr-1 animate-pulse"></i>
                        4 disponíveis agora
                    </span>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <!-- Dr. João Silva - Oncologista -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-green-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-user-md text-3xl text-green-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Dr. João Silva</p>
                            <p class="text-xs text-gray-600 mb-3">Oncologista</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Dr. João Silva', 'oncologista')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Dr. João Silva', 'oncologista')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Maria Santos - Navegadora -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-green-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-green-100 to-emerald-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-compass text-3xl text-green-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Maria Santos</p>
                            <p class="text-xs text-gray-600 mb-3">Navegadora</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Maria Santos', 'navegadora')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Maria Santos', 'navegadora')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Ana Costa - Psicóloga -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-teal-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-teal-100 to-teal-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-brain text-3xl text-teal-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Ana Costa</p>
                            <p class="text-xs text-gray-600 mb-3">Psicóloga</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Ana Costa', 'psicóloga')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Ana Costa', 'psicóloga')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Família -->
                    <div class="bg-white rounded-xl p-4 border border-gray-100 hover:border-cyan-300 transition-all hover:shadow-md">
                        <div class="flex flex-col items-center">
                            <div class="relative mb-3">
                                <div class="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-full w-20 h-20 flex items-center justify-center">
                                    <i class="fas fa-heart text-3xl text-cyan-600"></i>
                                </div>
                                <span class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>
                            <p class="text-sm font-bold text-gray-800">Família</p>
                            <p class="text-xs text-gray-600 mb-3">3 membros</p>
                            
                            <!-- Action Buttons -->
                            <div class="flex flex-col w-full gap-2">
                                <button onclick="startChat('Família', 'grupo familiar')" 
                                        class="flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-comments"></i>
                                    Iniciar Conversa
                                </button>
                                <button onclick="requestHelp('Família', 'grupo familiar')" 
                                        class="flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors">
                                    <i class="fas fa-hand-holding-medical"></i>
                                    Pedir Ajuda
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Status Bar -->
                <div class="mt-6 bg-green-50 rounded-lg p-3 border border-green-200">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-info-circle text-green-600"></i>
                            <span class="text-sm text-gray-700">Sua equipe está pronta para ajudar</span>
                        </div>
                        <button onclick="viewAllContacts()" class="text-sm text-green-600 hover:text-green-700 font-medium">
                            Ver todos os contatos →
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Triage Chat Modal -->
        <div id="triageModal" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-xl max-w-md w-full max-h-[80vh] flex flex-col">
                <div class="p-4 border-b flex items-center justify-between">
                    <h3 class="font-bold text-gray-800">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                        Assistente de Triagem
                    </h3>
                    <button onclick="closeTriageChat()" class="text-gray-500 hover:text-gray-700">
                        <i class="far fa-times-circle"></i>
                    </button>
                </div>
                <div class="flex-grow p-4 overflow-y-auto" id="chatMessages">
                    <div class="bg-green-100 p-3 rounded-lg mb-3">
                        <p class="text-sm">Olá! Sou seu assistente virtual. Como posso ajudar você hoje?</p>
                    </div>
                </div>
                <div class="p-4 border-t">
                    <div class="flex space-x-2">
                        <input type="text" id="chatInput" placeholder="Digite sua mensagem..." 
                               class="flex-grow px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <button onclick="sendMessage()" class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                            <i class="far fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="footer-gradient text-white mt-8">
            <div class="container mx-auto px-4 py-6">
                <div class="text-center">
                    <p class="text-sm opacity-90">
                        © 2024 Laura Technology | ACCamargo Cancer Center
                    </p>
                </div>
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <script>
            // Enhanced Chart initialization with better styling
            const ctx = document.getElementById('symptomsChart').getContext('2d');
            const symptomsChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                    datasets: [{
                        label: 'Náusea',
                        data: [3, 4, 3, 2, 3, 4, 3],
                        borderColor: 'rgb(139, 92, 246)',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        pointBackgroundColor: 'white',
                        pointBorderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }, {
                        label: 'Fadiga',
                        data: [5, 5, 4, 4, 3, 4, 3],
                        borderColor: 'rgb(236, 72, 153)',
                        backgroundColor: 'rgba(236, 72, 153, 0.1)',
                        borderWidth: 3,
                        pointRadius: 5,
                        pointHoverRadius: 7,
                        pointBackgroundColor: 'white',
                        pointBorderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'index',
                        intersect: false
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            padding: 12,
                            titleColor: 'white',
                            bodyColor: 'white',
                            borderColor: 'white',
                            borderWidth: 1,
                            displayColors: true,
                            callbacks: {
                                label: function(context) {
                                    return context.dataset.label + ': ' + context.parsed.y + '/10';
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10,
                            ticks: {
                                stepSize: 2,
                                color: '#6b7280',
                                font: {
                                    size: 11
                                }
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)',
                                drawBorder: false
                            }
                        },
                        x: {
                            ticks: {
                                color: '#6b7280',
                                font: {
                                    size: 11
                                }
                            },
                            grid: {
                                display: false,
                                drawBorder: false
                            }
                        }
                    }
                }
            });
            
            // Toggle chart view function
            function toggleChartView(chart, period) {
                const buttons = document.querySelectorAll('.chart-toggle-btn');
                buttons.forEach(btn => {
                    btn.classList.remove('active', 'bg-teal-100', 'text-teal-700');
                    btn.classList.add('bg-gray-100', 'text-gray-600');
                });
                
                event.target.classList.remove('bg-gray-100', 'text-gray-600');
                event.target.classList.add('active', 'bg-teal-100', 'text-teal-700');
                
                if (period === 'month') {
                    symptomsChart.data.labels = ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'];
                    symptomsChart.data.datasets[0].data = [4, 3, 3, 2];
                    symptomsChart.data.datasets[1].data = [5, 4, 3, 3];
                } else {
                    symptomsChart.data.labels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
                    symptomsChart.data.datasets[0].data = [3, 4, 3, 2, 3, 4, 3];
                    symptomsChart.data.datasets[1].data = [5, 5, 4, 4, 3, 4, 3];
                }
                symptomsChart.update();
            }

            // Chat functions
            function openTriageChat() {
                document.getElementById('triageModal').classList.remove('hidden');
            }

            function closeTriageChat() {
                document.getElementById('triageModal').classList.add('hidden');
            }

            async function sendMessage() {
                const input = document.getElementById('chatInput');
                const message = input.value.trim();
                if (!message) return;

                // Add user message
                const messagesDiv = document.getElementById('chatMessages');
                messagesDiv.innerHTML += \\\`
                    <div class="bg-gray-100 p-3 rounded-lg mb-3 ml-12">
                        <p class="text-sm">\\\${message}</p>
                    </div>
                \\\`;

                input.value = '';

                // Call API
                try {
                    const response = await axios.post('/api/ai/auto-triage', {
                        message: message,
                        sessionId: 'session_' + Date.now(),
                        patientInfo: {}
                    });

                    // Add bot response
                    messagesDiv.innerHTML += \\\`
                        <div class="bg-green-100 p-3 rounded-lg mb-3">
                            <p class="text-sm">\\\${response.data.response.message}</p>
                            <p class="text-xs text-gray-600 mt-2">Urgência: \\\${response.data.response.urgency}</p>
                        </div>
                    \\\`;
                } catch (error) {
                    messagesDiv.innerHTML += \\\`
                        <div class="bg-emerald-100 p-3 rounded-lg mb-3">
                            <p class="text-sm">Desculpe, ocorreu um erro. Tente novamente.</p>
                        </div>
                    \\\`;
                }

                messagesDiv.scrollTop = messagesDiv.scrollHeight;
            }

            function showAppointments() {
                alert('Suas consultas serão exibidas aqui');
            }

            function reportSymptoms() {
                alert('Formulário de sintomas será aberto');
            }

            function viewSupport() {
                alert('Rede de apoio será exibida');
            }
            
            // Support Network Functions - Simplified
            function startChat(personName, role) {
                alert('Iniciando conversa com ' + personName + ' (' + role + ')\\\\n\\\\nEm breve este chat estará disponível!');
            }
            
            function requestHelp(personName, role) {
                const helpType = prompt('Que tipo de ajuda você precisa de ' + personName + '?\\\\n\\\\n1. Urgente\\\\n2. Agendamento\\\\n3. Informações\\\\n4. Outro');
                if (helpType) {
                    alert('Solicitação enviada para ' + personName + '\\\\n\\\\nTipo de ajuda: ' + helpType + '\\\\n\\\\nVocê receberá uma resposta em breve!');
                }
            }
            
            function sendHelpRequest(personName, helpType) {
                alert('✅ Solicitação enviada com sucesso!\\\\n\\\\n' + personName + ' foi notificado(a)\\\\nAssunto: ' + helpType + '\\\\n\\\\nVocê receberá uma resposta em breve.');
            }
            
            function viewAllContacts() {
                alert('📋 Lista completa de contatos:\\\\n\\\\n• Dr. João Silva - Oncologista\\\\n• Maria Santos - Navegadora\\\\n• Ana Costa - Psicóloga\\\\n• Família - 3 membros\\\\n\\\\nTodos disponíveis para ajudar!');
            }
            

                    <div class="bg-white rounded-xl max-w-md w-full max-h-[80vh] flex flex-col">
                        <div class="p-4 border-b flex items-center justify-between bg-gradient-to-r from-green-50 to-green-100">
                            <h3 class="font-bold text-gray-800 flex items-center">
                                <i class="fas fa-comments text-green-600 mr-2"></i>
                                Conversa com \\\${personName}
                            </h3>
                            <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                            <p class="font-bold">Solicitação enviada!</p>
                            <p class="text-sm">' + personName + ' foi notificado(a) sobre: "' + helpType + '"</p>
                            <p class="text-xs mt-1">Você receberá uma resposta em breve.</p>
                        </div>
                    </div>
                \\\`;
                document.body.appendChild(notification);
                
                // Remover notificação após 5 segundos
                setTimeout(() => notification.remove(), 5000);
            }


            // Enter key to send message
            document.getElementById('chatInput').addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    sendMessage();
                }
            });
        <\/script>
        <script src="/static/portal-helpers.js"><\/script>
        <script src="/static/portal-helpers.js"><\/script>
        <script src="/static/action-plan-system.js"><\/script>
        <script src="/static/action-plan-handlers.js"><\/script>
    </body>
    </html>
  `])),me(z("patient"))));var rt=Object.freeze,Ks=Object.defineProperty,Qs=(e,t)=>rt(Ks(e,"raw",{value:rt(t||e.slice())})),nt;const Ys=e=>e.html(q(nt||(nt=Qs([`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portal Médico - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Portal Médico • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <a href="/patient" class="text-gray-600 hover:text-green-600 transition-colors" title="Portal do Paciente">
                            <i class="fas fa-hospital-user text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-user-circle text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>


        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Stats Overview -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Pacientes Hoje</p>
                            <p class="text-2xl font-bold text-gray-800">12</p>
                        </div>
                        <i class="fas fa-users text-green-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Consultas Realizadas</p>
                            <p class="text-2xl font-bold text-gray-800">8</p>
                        </div>
                        <i class="far fa-check-circle text-green-500 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Pendências</p>
                            <p class="text-2xl font-bold text-gray-800">4</p>
                        </div>
                        <i class="far fa-clock text-lime-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">IA Assistências</p>
                            <p class="text-2xl font-bold text-gray-800">23</p>
                        </div>
                        <i class="fas fa-cogs text-teal-600 text-2xl"></i>
                    </div>
                </div>
            </div>

            <!-- Patient List and AI Assistant -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <!-- Patient List -->
                <div class="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xl font-bold text-gray-800">
                            <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                            Pacientes do Dia
                        </h2>
                        <button class="text-green-600 hover:text-green-700">
                            <i class="fas fa-filter mr-1"></i> Filtrar
                        </button>
                    </div>
                    
                    <div class="space-y-3">
                        <!-- Patient Card 1 -->
                        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="showPatient360(1)">
                            <div class="flex items-start justify-between">
                                <div class="flex-grow">
                                    <div class="flex items-center mb-2">
                                        <h3 class="font-semibold text-gray-800">João Silva</h3>
                                        <span class="ml-2 px-2 py-1 text-xs bg-lime-100 text-yellow-800 rounded">Atenção</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-id-card mr-1"></i> MR001 | 55 anos | Masculino
                                    </p>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-disease mr-1"></i> Adenocarcinoma Pulmonar - Estágio IIIA
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        <i class="far fa-capsules mr-1"></i> Carboplatin + Pemetrexed - Ciclo 3
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs text-gray-500">Próxima consulta</p>
                                    <p class="font-semibold text-green-700">14:00</p>
                                </div>
                            </div>
                            <div class="mt-3 flex space-x-2">
                                <span class="text-xs bg-emerald-100 text-red-700 px-2 py-1 rounded">
                                    <i class="far fa-exclamation-triangle mr-1"></i>Neutropenia G2
                                </span>
                                <span class="text-xs bg-green-100 text-blue-700 px-2 py-1 rounded">
                                    <i class="fas fa-flask mr-1"></i>Lab pendente
                                </span>
                            </div>
                        </div>

                        <!-- Patient Card 2 -->
                        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="showPatient360(2)">
                            <div class="flex items-start justify-between">
                                <div class="flex-grow">
                                    <div class="flex items-center mb-2">
                                        <h3 class="font-semibold text-gray-800">Maria Santos</h3>
                                        <span class="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Estável</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-id-card mr-1"></i> MR002 | 42 anos | Feminino
                                    </p>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-disease mr-1"></i> Ca Mama - Estágio IIB
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        <i class="far fa-radiation mr-1"></i> Radioterapia adjuvante
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs text-gray-500">Próxima consulta</p>
                                    <p class="font-semibold text-green-700">15:30</p>
                                </div>
                            </div>
                        </div>

                        <!-- Patient Card 3 -->
                        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="showPatient360(3)">
                            <div class="flex items-start justify-between">
                                <div class="flex-grow">
                                    <div class="flex items-center mb-2">
                                        <h3 class="font-semibold text-gray-800">Pedro Costa</h3>
                                        <span class="ml-2 px-2 py-1 text-xs bg-emerald-100 text-red-800 rounded">Urgente</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-id-card mr-1"></i> MR003 | 67 anos | Masculino
                                    </p>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-disease mr-1"></i> Ca Colorretal - Estágio IV
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        <i class="far fa-capsules mr-1"></i> FOLFOX - Ciclo 6
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs text-gray-500">Próxima consulta</p>
                                    <p class="font-semibold text-red-600">AGORA</p>
                                </div>
                            </div>
                            <div class="mt-3 flex space-x-2">
                                <span class="text-xs bg-emerald-100 text-red-700 px-2 py-1 rounded">
                                    <i class="far fa-exclamation-triangle mr-1"></i>Dor 8/10
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AI Assistant Panel -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h2 class="text-xl font-bold text-gray-800 mb-4">
                        <i class="fas fa-cogs text-teal-600 mr-2"></i>
                        Assistente IA
                    </h2>
                    
                    <div class="space-y-3 mb-4">
                        <button onclick="askAI('treatment')" class="w-full text-left p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all">
                            <i class="fas fa-brain text-teal-600 mr-2"></i>
                            <span class="text-sm font-semibold">Sugestão de Tratamento</span>
                        </button>
                        
                        <button onclick="askAI('interaction')" class="w-full text-left p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all">
                            <i class="far fa-capsules text-green-600 mr-2"></i>
                            <span class="text-sm font-semibold">Verificar Interações</span>
                        </button>
                        
                        <button onclick="askAI('guidelines')" class="w-full text-left p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all">
                            <i class="far fa-book-medical text-green-500 mr-2"></i>
                            <span class="text-sm font-semibold">Diretrizes NCCN</span>
                        </button>
                    </div>
                    
                    <div class="border-t pt-4">
                        <label class="text-sm font-semibold text-gray-700 block mb-2">Pergunta Personalizada</label>
                        <textarea id="aiQuery" rows="3" class="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" 
                                  placeholder="Digite sua pergunta clínica..."></textarea>
                        <button onclick="askCustomAI()" class="mt-2 w-full bg-gradient-to-r from-teal-600 to-blue-500 text-white py-2 rounded-lg hover:from-teal-700 hover:to-green-700 transition-all">
                            <i class="fas fa-brain mr-2"></i>Consultar IA
                        </button>
                    </div>
                    
                    <div id="aiResponse" class="mt-4 p-3 bg-gray-50 rounded-lg hidden">
                        <p class="text-sm text-gray-700"></p>
                    </div>
                </div>
            </div>

            <!-- Patient 360 View Modal -->
            <div id="patient360Modal" class="hidden bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-8 h-8 inline mr-2">
                        Visão 360° do Paciente
                    </h2>
                    <button onclick="closePatient360()" class="text-gray-500 hover:text-gray-700">
                        <i class="far fa-times-circle text-xl"></i>
                    </button>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Clinical Data -->
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-blue-800 mb-2">
                                <i class="far fa-file-medical mr-2"></i>Dados Clínicos
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Diagnóstico:</strong> Adenocarcinoma Pulmonar</p>
                                <p><strong>Estadiamento:</strong> T4N2M0 (IIIA)</p>
                                <p><strong>Mutações:</strong> EGFR+, ALK-</p>
                                <p><strong>PD-L1:</strong> 15%</p>
                            </div>
                        </div>
                        
                        <div class="bg-green-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-green-800 mb-2">
                                <i class="far fa-heart mr-2"></i>Sinais Vitais
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>PA:</strong> 130/80 mmHg</p>
                                <p><strong>FC:</strong> 78 bpm</p>
                                <p><strong>Temp:</strong> 36.5°C</p>
                                <p><strong>SpO2:</strong> 96%</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Treatment -->
                    <div class="space-y-4">
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-purple-800 mb-2">
                                <i class="far fa-capsules mr-2"></i>Tratamento Atual
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Protocolo:</strong> Carboplatin + Pemetrexed</p>
                                <p><strong>Ciclo:</strong> 3 de 6</p>
                                <p><strong>Resposta:</strong> Parcial (30% redução)</p>
                                <p><strong>Toxicidade:</strong> Náusea G2, Neutropenia G2</p>
                            </div>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-yellow-800 mb-2">
                                <i class="fas fa-flask mr-2"></i>Laboratório
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Hb:</strong> 11.2 g/dL ↓</p>
                                <p><strong>Neutrófilos:</strong> 1.8 K/µL ↓</p>
                                <p><strong>Plaquetas:</strong> 180 K/µL</p>
                                <p><strong>Creatinina:</strong> 1.1 mg/dL</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- AI Insights -->
                    <div class="bg-gradient-to-br from-purple-100 to-blue-100 p-4 rounded-lg">
                        <h3 class="font-semibold text-purple-800 mb-3">
                            <i class="fas fa-brain mr-2"></i>Insights da IA
                        </h3>
                        <div class="space-y-3">
                            <div class="bg-white p-3 rounded">
                                <p class="text-sm font-semibold text-red-600">
                                    <i class="far fa-exclamation-triangle mr-1"></i>Alto Risco
                                </p>
                                <p class="text-xs text-gray-600 mt-1">Neutropenia pode evoluir para G3</p>
                            </div>
                            
                            <div class="bg-white p-3 rounded">
                                <p class="text-sm font-semibold text-lime-700">
                                    <i class="fas fa-brain mr-1"></i>Recomendação
                                </p>
                                <p class="text-xs text-gray-600 mt-1">Considerar G-CSF profilático</p>
                            </div>
                            
                            <div class="bg-white p-3 rounded">
                                <p class="text-sm font-semibold text-green-600">
                                    <i class="far fa-chart-line mr-1"></i>Prognóstico
                                </p>
                                <p class="text-xs text-gray-600 mt-1">Resposta favorável ao tratamento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Clinical Tools -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-all cursor-pointer">
                    <i class="far fa-calculator text-4xl text-green-600 mb-3"></i>
                    <h3 class="font-semibold text-gray-800 mb-2">Calculadoras</h3>
                    <p class="text-sm text-gray-600">BSA, CrCl, Doses</p>
                </div>
                
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-all cursor-pointer">
                    <i class="far fa-book text-4xl text-green-500 mb-3"></i>
                    <h3 class="font-semibold text-gray-800 mb-2">Protocolos</h3>
                    <p class="text-sm text-gray-600">Guidelines atualizadas</p>
                </div>
                
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-all cursor-pointer">
                    <i class="fas fa-chart-line text-4xl text-teal-600 mb-3"></i>
                    <h3 class="font-semibold text-gray-800 mb-2">Relatórios</h3>
                    <p class="text-sm text-gray-600">Análises e métricas</p>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer-gradient text-white mt-8">
            <div class="container mx-auto px-4 py-6">
                <div class="text-center">
                    <p class="text-sm opacity-90">
                        © 2024 Laura Technology | ACCamargo Cancer Center
                    </p>
                </div>
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            function showPatient360(patientId) {
                document.getElementById('patient360Modal').classList.remove('hidden');
                // Load patient data via API
                loadPatientData(patientId);
            }

            function closePatient360() {
                document.getElementById('patient360Modal').classList.add('hidden');
            }

            async function loadPatientData(patientId) {
                try {
                    const response = await axios.get(\`/api/doctor/patient/\${patientId}/360\`);
                    // Update modal with patient data
                    console.log('Patient data:', response.data);
                } catch (error) {
                    console.error('Error loading patient data:', error);
                }
            }

            async function askAI(type) {
                const response = await axios.post('/api/doctor/ai-assistant', {
                    query: type,
                    type: type === 'treatment' ? 'treatment-recommendation' : 
                           type === 'interaction' ? 'drug-interaction' : 'guidelines',
                    patientContext: {}
                });
                
                const responseDiv = document.getElementById('aiResponse');
                responseDiv.classList.remove('hidden');
                responseDiv.querySelector('p').innerHTML = response.data.response;
            }

            async function askCustomAI() {
                const query = document.getElementById('aiQuery').value;
                if (!query) return;

                const response = await axios.post('/api/doctor/ai-assistant', {
                    query: query,
                    type: 'custom',
                    patientContext: {}
                });
                
                const responseDiv = document.getElementById('aiResponse');
                responseDiv.classList.remove('hidden');
                responseDiv.querySelector('p').innerHTML = response.data.response;
            }
        <\/script>
        <script src="/static/portal-helpers.js"><\/script>
        <script src="/static/portal-helpers.js"><\/script>
    <script src="/static/action-plan-system.js"><\/script>
        <script src="/static/action-plan-handlers.js"><\/script>
    </body>
    </html>
  `],[`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portal Médico - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Portal Médico • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <a href="/patient" class="text-gray-600 hover:text-green-600 transition-colors" title="Portal do Paciente">
                            <i class="fas fa-hospital-user text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-user-circle text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>


        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Stats Overview -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Pacientes Hoje</p>
                            <p class="text-2xl font-bold text-gray-800">12</p>
                        </div>
                        <i class="fas fa-users text-green-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Consultas Realizadas</p>
                            <p class="text-2xl font-bold text-gray-800">8</p>
                        </div>
                        <i class="far fa-check-circle text-green-500 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Pendências</p>
                            <p class="text-2xl font-bold text-gray-800">4</p>
                        </div>
                        <i class="far fa-clock text-lime-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">IA Assistências</p>
                            <p class="text-2xl font-bold text-gray-800">23</p>
                        </div>
                        <i class="fas fa-cogs text-teal-600 text-2xl"></i>
                    </div>
                </div>
            </div>

            <!-- Patient List and AI Assistant -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <!-- Patient List -->
                <div class="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-xl font-bold text-gray-800">
                            <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                            Pacientes do Dia
                        </h2>
                        <button class="text-green-600 hover:text-green-700">
                            <i class="fas fa-filter mr-1"></i> Filtrar
                        </button>
                    </div>
                    
                    <div class="space-y-3">
                        <!-- Patient Card 1 -->
                        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="showPatient360(1)">
                            <div class="flex items-start justify-between">
                                <div class="flex-grow">
                                    <div class="flex items-center mb-2">
                                        <h3 class="font-semibold text-gray-800">João Silva</h3>
                                        <span class="ml-2 px-2 py-1 text-xs bg-lime-100 text-yellow-800 rounded">Atenção</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-id-card mr-1"></i> MR001 | 55 anos | Masculino
                                    </p>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-disease mr-1"></i> Adenocarcinoma Pulmonar - Estágio IIIA
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        <i class="far fa-capsules mr-1"></i> Carboplatin + Pemetrexed - Ciclo 3
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs text-gray-500">Próxima consulta</p>
                                    <p class="font-semibold text-green-700">14:00</p>
                                </div>
                            </div>
                            <div class="mt-3 flex space-x-2">
                                <span class="text-xs bg-emerald-100 text-red-700 px-2 py-1 rounded">
                                    <i class="far fa-exclamation-triangle mr-1"></i>Neutropenia G2
                                </span>
                                <span class="text-xs bg-green-100 text-blue-700 px-2 py-1 rounded">
                                    <i class="fas fa-flask mr-1"></i>Lab pendente
                                </span>
                            </div>
                        </div>

                        <!-- Patient Card 2 -->
                        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="showPatient360(2)">
                            <div class="flex items-start justify-between">
                                <div class="flex-grow">
                                    <div class="flex items-center mb-2">
                                        <h3 class="font-semibold text-gray-800">Maria Santos</h3>
                                        <span class="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Estável</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-id-card mr-1"></i> MR002 | 42 anos | Feminino
                                    </p>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-disease mr-1"></i> Ca Mama - Estágio IIB
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        <i class="far fa-radiation mr-1"></i> Radioterapia adjuvante
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs text-gray-500">Próxima consulta</p>
                                    <p class="font-semibold text-green-700">15:30</p>
                                </div>
                            </div>
                        </div>

                        <!-- Patient Card 3 -->
                        <div class="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer" onclick="showPatient360(3)">
                            <div class="flex items-start justify-between">
                                <div class="flex-grow">
                                    <div class="flex items-center mb-2">
                                        <h3 class="font-semibold text-gray-800">Pedro Costa</h3>
                                        <span class="ml-2 px-2 py-1 text-xs bg-emerald-100 text-red-800 rounded">Urgente</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-id-card mr-1"></i> MR003 | 67 anos | Masculino
                                    </p>
                                    <p class="text-sm text-gray-600 mb-1">
                                        <i class="far fa-disease mr-1"></i> Ca Colorretal - Estágio IV
                                    </p>
                                    <p class="text-sm text-gray-600">
                                        <i class="far fa-capsules mr-1"></i> FOLFOX - Ciclo 6
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p class="text-xs text-gray-500">Próxima consulta</p>
                                    <p class="font-semibold text-red-600">AGORA</p>
                                </div>
                            </div>
                            <div class="mt-3 flex space-x-2">
                                <span class="text-xs bg-emerald-100 text-red-700 px-2 py-1 rounded">
                                    <i class="far fa-exclamation-triangle mr-1"></i>Dor 8/10
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AI Assistant Panel -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h2 class="text-xl font-bold text-gray-800 mb-4">
                        <i class="fas fa-cogs text-teal-600 mr-2"></i>
                        Assistente IA
                    </h2>
                    
                    <div class="space-y-3 mb-4">
                        <button onclick="askAI('treatment')" class="w-full text-left p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all">
                            <i class="fas fa-brain text-teal-600 mr-2"></i>
                            <span class="text-sm font-semibold">Sugestão de Tratamento</span>
                        </button>
                        
                        <button onclick="askAI('interaction')" class="w-full text-left p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all">
                            <i class="far fa-capsules text-green-600 mr-2"></i>
                            <span class="text-sm font-semibold">Verificar Interações</span>
                        </button>
                        
                        <button onclick="askAI('guidelines')" class="w-full text-left p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-all">
                            <i class="far fa-book-medical text-green-500 mr-2"></i>
                            <span class="text-sm font-semibold">Diretrizes NCCN</span>
                        </button>
                    </div>
                    
                    <div class="border-t pt-4">
                        <label class="text-sm font-semibold text-gray-700 block mb-2">Pergunta Personalizada</label>
                        <textarea id="aiQuery" rows="3" class="w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500" 
                                  placeholder="Digite sua pergunta clínica..."></textarea>
                        <button onclick="askCustomAI()" class="mt-2 w-full bg-gradient-to-r from-teal-600 to-blue-500 text-white py-2 rounded-lg hover:from-teal-700 hover:to-green-700 transition-all">
                            <i class="fas fa-brain mr-2"></i>Consultar IA
                        </button>
                    </div>
                    
                    <div id="aiResponse" class="mt-4 p-3 bg-gray-50 rounded-lg hidden">
                        <p class="text-sm text-gray-700"></p>
                    </div>
                </div>
            </div>

            <!-- Patient 360 View Modal -->
            <div id="patient360Modal" class="hidden bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
                <div class="flex items-center justify-between mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-8 h-8 inline mr-2">
                        Visão 360° do Paciente
                    </h2>
                    <button onclick="closePatient360()" class="text-gray-500 hover:text-gray-700">
                        <i class="far fa-times-circle text-xl"></i>
                    </button>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Clinical Data -->
                    <div class="space-y-4">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-blue-800 mb-2">
                                <i class="far fa-file-medical mr-2"></i>Dados Clínicos
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Diagnóstico:</strong> Adenocarcinoma Pulmonar</p>
                                <p><strong>Estadiamento:</strong> T4N2M0 (IIIA)</p>
                                <p><strong>Mutações:</strong> EGFR+, ALK-</p>
                                <p><strong>PD-L1:</strong> 15%</p>
                            </div>
                        </div>
                        
                        <div class="bg-green-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-green-800 mb-2">
                                <i class="far fa-heart mr-2"></i>Sinais Vitais
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>PA:</strong> 130/80 mmHg</p>
                                <p><strong>FC:</strong> 78 bpm</p>
                                <p><strong>Temp:</strong> 36.5°C</p>
                                <p><strong>SpO2:</strong> 96%</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Treatment -->
                    <div class="space-y-4">
                        <div class="bg-purple-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-purple-800 mb-2">
                                <i class="far fa-capsules mr-2"></i>Tratamento Atual
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Protocolo:</strong> Carboplatin + Pemetrexed</p>
                                <p><strong>Ciclo:</strong> 3 de 6</p>
                                <p><strong>Resposta:</strong> Parcial (30% redução)</p>
                                <p><strong>Toxicidade:</strong> Náusea G2, Neutropenia G2</p>
                            </div>
                        </div>
                        
                        <div class="bg-yellow-50 p-4 rounded-lg">
                            <h3 class="font-semibold text-yellow-800 mb-2">
                                <i class="fas fa-flask mr-2"></i>Laboratório
                            </h3>
                            <div class="space-y-2 text-sm">
                                <p><strong>Hb:</strong> 11.2 g/dL ↓</p>
                                <p><strong>Neutrófilos:</strong> 1.8 K/µL ↓</p>
                                <p><strong>Plaquetas:</strong> 180 K/µL</p>
                                <p><strong>Creatinina:</strong> 1.1 mg/dL</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- AI Insights -->
                    <div class="bg-gradient-to-br from-purple-100 to-blue-100 p-4 rounded-lg">
                        <h3 class="font-semibold text-purple-800 mb-3">
                            <i class="fas fa-brain mr-2"></i>Insights da IA
                        </h3>
                        <div class="space-y-3">
                            <div class="bg-white p-3 rounded">
                                <p class="text-sm font-semibold text-red-600">
                                    <i class="far fa-exclamation-triangle mr-1"></i>Alto Risco
                                </p>
                                <p class="text-xs text-gray-600 mt-1">Neutropenia pode evoluir para G3</p>
                            </div>
                            
                            <div class="bg-white p-3 rounded">
                                <p class="text-sm font-semibold text-lime-700">
                                    <i class="fas fa-brain mr-1"></i>Recomendação
                                </p>
                                <p class="text-xs text-gray-600 mt-1">Considerar G-CSF profilático</p>
                            </div>
                            
                            <div class="bg-white p-3 rounded">
                                <p class="text-sm font-semibold text-green-600">
                                    <i class="far fa-chart-line mr-1"></i>Prognóstico
                                </p>
                                <p class="text-xs text-gray-600 mt-1">Resposta favorável ao tratamento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Clinical Tools -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-all cursor-pointer">
                    <i class="far fa-calculator text-4xl text-green-600 mb-3"></i>
                    <h3 class="font-semibold text-gray-800 mb-2">Calculadoras</h3>
                    <p class="text-sm text-gray-600">BSA, CrCl, Doses</p>
                </div>
                
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-all cursor-pointer">
                    <i class="far fa-book text-4xl text-green-500 mb-3"></i>
                    <h3 class="font-semibold text-gray-800 mb-2">Protocolos</h3>
                    <p class="text-sm text-gray-600">Guidelines atualizadas</p>
                </div>
                
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center hover:shadow-lg transition-all cursor-pointer">
                    <i class="fas fa-chart-line text-4xl text-teal-600 mb-3"></i>
                    <h3 class="font-semibold text-gray-800 mb-2">Relatórios</h3>
                    <p class="text-sm text-gray-600">Análises e métricas</p>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer-gradient text-white mt-8">
            <div class="container mx-auto px-4 py-6">
                <div class="text-center">
                    <p class="text-sm opacity-90">
                        © 2024 Laura Technology | ACCamargo Cancer Center
                    </p>
                </div>
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            function showPatient360(patientId) {
                document.getElementById('patient360Modal').classList.remove('hidden');
                // Load patient data via API
                loadPatientData(patientId);
            }

            function closePatient360() {
                document.getElementById('patient360Modal').classList.add('hidden');
            }

            async function loadPatientData(patientId) {
                try {
                    const response = await axios.get(\\\`/api/doctor/patient/\\\${patientId}/360\\\`);
                    // Update modal with patient data
                    console.log('Patient data:', response.data);
                } catch (error) {
                    console.error('Error loading patient data:', error);
                }
            }

            async function askAI(type) {
                const response = await axios.post('/api/doctor/ai-assistant', {
                    query: type,
                    type: type === 'treatment' ? 'treatment-recommendation' : 
                           type === 'interaction' ? 'drug-interaction' : 'guidelines',
                    patientContext: {}
                });
                
                const responseDiv = document.getElementById('aiResponse');
                responseDiv.classList.remove('hidden');
                responseDiv.querySelector('p').innerHTML = response.data.response;
            }

            async function askCustomAI() {
                const query = document.getElementById('aiQuery').value;
                if (!query) return;

                const response = await axios.post('/api/doctor/ai-assistant', {
                    query: query,
                    type: 'custom',
                    patientContext: {}
                });
                
                const responseDiv = document.getElementById('aiResponse');
                responseDiv.classList.remove('hidden');
                responseDiv.querySelector('p').innerHTML = response.data.response;
            }
        <\/script>
        <script src="/static/portal-helpers.js"><\/script>
        <script src="/static/portal-helpers.js"><\/script>
    <script src="/static/action-plan-system.js"><\/script>
        <script src="/static/action-plan-handlers.js"><\/script>
    </body>
    </html>
  `]))));var lt=Object.freeze,Zs=Object.defineProperty,Xs=(e,t)=>lt(Zs(e,"raw",{value:lt(e.slice())})),dt;const ea=e=>e.html(q(dt||(dt=Xs([`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Navegador de Pacientes - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Navegador de Pacientes • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <a href="/patient" class="text-gray-600 hover:text-green-600 transition-colors" title="Portal do Paciente">
                            <i class="fas fa-hospital-user text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-user-circle text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>


        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Kanban Board -->
            <div class="mb-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-8 h-8 inline mr-2">
                    Fluxo de Pacientes - Visão Kanban
                </h2>
                
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <!-- Triagem -->
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-semibold text-gray-700">Triagem</h3>
                            <span class="bg-green-600 text-white text-xs px-2 py-1 rounded-full">12</span>
                        </div>
                        <div class="space-y-2">
                            <div class="bg-white p-3 rounded shadow-sm border-l-4 border-green-600">
                                <p class="font-semibold text-sm">Ana Silva</p>
                                <p class="text-xs text-gray-600">Aguardando há 2h</p>
                                <span class="text-xs bg-lime-100 text-yellow-700 px-2 py-1 rounded mt-1 inline-block">
                                    <i class="fas fa-clock"></i> Prioridade
                                </span>
                            </div>
                            <div class="bg-white p-3 rounded shadow-sm">
                                <p class="font-semibold text-sm">Carlos Mendes</p>
                                <p class="text-xs text-gray-600">Aguardando há 30min</p>
                            </div>
                        </div>
                    </div>

                    <!-- Diagnóstico -->
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-semibold text-gray-700">Diagnóstico</h3>
                            <span class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">8</span>
                        </div>
                        <div class="space-y-2">
                            <div class="bg-white p-3 rounded shadow-sm border-l-4 border-green-500">
                                <p class="font-semibold text-sm">João Pedro</p>
                                <p class="text-xs text-gray-600">Biópsia agendada</p>
                                <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded mt-1 inline-block">
                                    <i class="far fa-check"></i> Em dia
                                </span>
                            </div>
                            <div class="bg-white p-3 rounded shadow-sm border-l-4 border-red-500">
                                <p class="font-semibold text-sm">Maria Costa</p>
                                <p class="text-xs text-gray-600">Exame atrasado</p>
                                <span class="text-xs bg-emerald-100 text-red-700 px-2 py-1 rounded mt-1 inline-block">
                                    <i class="fas fa-exclamation-circle"></i> Urgente
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Tratamento -->
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-semibold text-gray-700">Tratamento</h3>
                            <span class="bg-teal-600 text-white text-xs px-2 py-1 rounded-full">45</span>
                        </div>
                        <div class="space-y-2">
                            <div class="bg-white p-3 rounded shadow-sm">
                                <p class="font-semibold text-sm">Roberto Lima</p>
                                <p class="text-xs text-gray-600">Quimio - Ciclo 3/6</p>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div class="bg-teal-600 h-2 rounded-full" style="width: 50%"></div>
                                </div>
                            </div>
                            <div class="bg-white p-3 rounded shadow-sm">
                                <p class="font-semibold text-sm">Sandra Oliveira</p>
                                <p class="text-xs text-gray-600">Radioterapia - Sessão 10/20</p>
                                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div class="bg-teal-600 h-2 rounded-full" style="width: 50%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Acompanhamento -->
                    <div class="bg-gray-100 rounded-lg p-4">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-semibold text-gray-700">Acompanhamento</h3>
                            <span class="bg-green-700 text-white text-xs px-2 py-1 rounded-full">23</span>
                        </div>
                        <div class="space-y-2">
                            <div class="bg-white p-3 rounded shadow-sm">
                                <p class="font-semibold text-sm">Paulo Santos</p>
                                <p class="text-xs text-gray-600">Controle 3 meses</p>
                            </div>
                            <div class="bg-white p-3 rounded shadow-sm">
                                <p class="font-semibold text-sm">Lucia Ferreira</p>
                                <p class="text-xs text-gray-600">Controle 6 meses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottlenecks Alert -->
            <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-8">
                <div class="flex items-start">
                    <i class="fas fa-exclamation-circle text-emerald-600 text-xl mr-3 mt-1"></i>
                    <div>
                        <h3 class="font-bold text-red-800 mb-2">Gargalos Identificados</h3>
                        <ul class="space-y-2 text-sm text-red-700">
                            <li>• <strong>Ressonância Magnética:</strong> 15 pacientes aguardando, tempo médio de espera: 7 dias</li>
                            <li>• <strong>Autorização de Convênio:</strong> 8 processos pendentes há mais de 48h</li>
                            <li>• <strong>Consulta Oncologia:</strong> Agenda lotada para próximas 2 semanas</li>
                        </ul>
                        <button class="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600">
                            <i class="far fa-tools mr-2"></i>Resolver Gargalos
                        </button>
                    </div>
                </div>
            </div>

            <!-- Patient Actions Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <!-- Quick Actions -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-bolt text-lime-600 mr-2"></i>
                        Ações Rápidas
                    </h3>
                    <div class="space-y-3">
                        <button class="w-full text-left p-3 bg-blue-50 rounded-lg hover:bg-green-100 transition-all">
                            <i class="far fa-calendar-plus text-green-600 mr-2"></i>
                            Agendar Consulta/Exame
                        </button>
                        <button class="w-full text-left p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-all">
                            <i class="fas fa-phone text-green-500 mr-2"></i>
                            Contatar Paciente
                        </button>
                        <button class="w-full text-left p-3 bg-purple-50 rounded-lg hover:bg-teal-100 transition-all">
                            <i class="far fa-file-alt text-teal-600 mr-2"></i>
                            Solicitar Autorização
                        </button>
                        <button class="w-full text-left p-3 bg-yellow-50 rounded-lg hover:bg-lime-100 transition-all">
                            <i class="far fa-exchange-alt text-lime-600 mr-2"></i>
                            Transferir Navegador
                        </button>
                    </div>
                </div>

                <!-- Metrics -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-chart-line text-teal-600 mr-2"></i>
                        Métricas de Performance
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span>Taxa de Resolução</span>
                                <span class="font-semibold">87%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-500 h-2 rounded-full" style="width: 87%"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span>Tempo Médio de Resposta</span>
                                <span class="font-semibold">2.5h</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-600 h-2 rounded-full" style="width: 65%"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div class="flex justify-between text-sm mb-1">
                                <span>Satisfação do Paciente</span>
                                <span class="font-semibold">92%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-teal-600 h-2 rounded-full" style="width: 92%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Patient List with Filters -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-bold text-gray-800">
                        <i class="fas fa-users text-green-600 mr-2"></i>
                        Lista de Pacientes Ativos
                    </h3>
                    <div class="flex space-x-2">
                        <select class="px-3 py-1 border rounded-lg text-sm">
                            <option>Todos os Status</option>
                            <option>Triagem</option>
                            <option>Diagnóstico</option>
                            <option>Tratamento</option>
                            <option>Acompanhamento</option>
                        </select>
                        <button class="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                            <i class="fas fa-filter mr-1"></i>Filtrar
                        </button>
                    </div>
                </div>
                
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left py-2">Paciente</th>
                                <th class="text-left py-2">Status</th>
                                <th class="text-left py-2">Próxima Ação</th>
                                <th class="text-left py-2">Prioridade</th>
                                <th class="text-left py-2">Navegador</th>
                                <th class="text-left py-2">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3">
                                    <div>
                                        <p class="font-semibold">João Silva</p>
                                        <p class="text-xs text-gray-600">MR001</p>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-green-100 text-blue-700 rounded text-xs">Tratamento</span>
                                </td>
                                <td class="py-3">Quimioterapia - 15/02</td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-lime-100 text-yellow-700 rounded text-xs">Média</span>
                                </td>
                                <td class="py-3">Maria Santos</td>
                                <td class="py-3">
                                    <button onclick="openNavigatorModal('contatar', 'MR001')" class="text-blue-600 hover:text-blue-700 mr-2" title="Contatar">
                                        <i class="fas fa-address-book"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('agendar', 'MR001')" class="text-purple-600 hover:text-purple-700 mr-2" title="Agendar">
                                        <i class="fas fa-calendar-alt"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('jornada', 'MR001')" class="text-green-600 hover:text-green-700 mr-2" title="Jornada">
                                        <i class="fas fa-route"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('checklist', 'MR001')" class="text-indigo-600 hover:text-indigo-700" title="Checklist">
                                        <i class="fas fa-clipboard-check"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3">
                                    <div>
                                        <p class="font-semibold">Maria Costa</p>
                                        <p class="text-xs text-gray-600">MR002</p>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Diagnóstico</span>
                                </td>
                                <td class="py-3">Biópsia - Pendente</td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-emerald-100 text-red-700 rounded text-xs">Alta</span>
                                </td>
                                <td class="py-3">Maria Santos</td>
                                <td class="py-3">
                                    <button onclick="openNavigatorModal('contatar', 'MR001')" class="text-blue-600 hover:text-blue-700 mr-2" title="Contatar">
                                        <i class="fas fa-address-book"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('agendar', 'MR001')" class="text-purple-600 hover:text-purple-700 mr-2" title="Agendar">
                                        <i class="fas fa-calendar-alt"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('jornada', 'MR001')" class="text-green-600 hover:text-green-700 mr-2" title="Jornada">
                                        <i class="fas fa-route"></i>
                                    </button>
                                    <button onclick="openNavigatorModal('checklist', 'MR001')" class="text-indigo-600 hover:text-indigo-700" title="Checklist">
                                        <i class="fas fa-clipboard-check"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- NOVAS FUNCIONALIDADES - BOTÕES DE ACESSO RÁPIDO -->
            <div class="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
                <button onclick="openNavigatorModal('contatar')" 
                        class="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center group relative">
                    <i class="fas fa-address-book text-xl"></i>
                    <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Contatar
                    </span>
                </button>
                <button onclick="openNavigatorModal('agendar')" 
                        class="w-14 h-14 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all hover:scale-110 flex items-center justify-center group relative">
                    <i class="fas fa-calendar-alt text-xl"></i>
                    <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Agendar
                    </span>
                </button>
                <button onclick="openNavigatorModal('jornada')" 
                        class="w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center group relative">
                    <i class="fas fa-route text-xl"></i>
                    <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Jornada
                    </span>
                </button>
                <button onclick="openNavigatorModal('checklist')" 
                        class="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-all hover:scale-110 flex items-center justify-center group relative">
                    <i class="fas fa-clipboard-check text-xl"></i>
                    <span class="absolute right-full mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Checklist
                    </span>
                </button>
            </div>

            <!-- Modal Container para as Views -->
            <div id="navigator-modal" class="fixed inset-0 z-50 overflow-y-auto" style="display: none;">
                <!-- O conteúdo será inserido dinamicamente aqui -->
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer-gradient text-white mt-8">
            <div class="container mx-auto px-4 py-6">
                <div class="text-center">
                    <p class="text-sm opacity-90">
                        © 2024 Laura Technology | ACCamargo Cancer Center
                    </p>
                </div>
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script src="/static/portal-helpers.js"><\/script>
        <script src="/static/action-plan-system.js"><\/script>
        <script src="/static/action-plan-handlers.js"><\/script>
        
        <!-- Scripts das Novas Funcionalidades -->
        <script src="/static/navigator-views.js"><\/script>
        <script src="/static/navigator-views-extended.js"><\/script>
        <script src="/static/navigator-integration.js"><\/script>
        
        <script>
            // Adicionar classe navigator-portal para identificação
            document.addEventListener('DOMContentLoaded', function() {
                document.body.classList.add('navigator-portal');
                console.log('Portal do Navegador carregado com novas funcionalidades!');
            });
        <\/script>
    </body>
    </html>
  `]))));var ct=Object.freeze,ta=Object.defineProperty,sa=(e,t)=>ct(ta(e,"raw",{value:ct(e.slice())})),pt;const aa=e=>e.html(q(pt||(pt=sa([`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gestão Financeira - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
    </head>
    <body class="bg-gray-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Gestão Financeira • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <a href="/patient" class="text-gray-600 hover:text-green-600 transition-colors" title="Portal do Paciente">
                            <i class="fas fa-hospital-user text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-user-circle text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>


        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- KPIs Dashboard -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Receita Mensal</p>
                            <p class="text-2xl font-bold text-gray-800">R$ 2.5M</p>
                            <p class="text-xs text-green-600 mt-1">
                                <i class="far fa-arrow-up"></i> +12% vs mês anterior
                            </p>
                        </div>
                        <i class="far fa-dollar-sign text-green-500 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Custos Operacionais</p>
                            <p class="text-2xl font-bold text-gray-800">R$ 1.8M</p>
                            <p class="text-xs text-green-700 mt-1">
                                <i class="far fa-arrow-down"></i> -5% otimizado
                            </p>
                        </div>
                        <i class="far fa-receipt text-green-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Taxa de Glosas</p>
                            <p class="text-2xl font-bold text-gray-800">2.5%</p>
                            <p class="text-xs text-lime-700 mt-1">
                                <i class="far fa-shield-check"></i> Abaixo da meta
                            </p>
                        </div>
                        <i class="far fa-exclamation-triangle text-lime-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Glosas Evitadas</p>
                            <p class="text-2xl font-bold text-gray-800">R$ 145K</p>
                            <p class="text-xs text-teal-700 mt-1">
                                <i class="far fa-cog"></i> Via IA
                            </p>
                        </div>
                        <i class="fas fa-brain text-teal-600 text-2xl"></i>
                    </div>
                </div>
            </div>

            <!-- Charts Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <!-- Revenue Chart -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                        Evolução de Receita
                    </h3>
                    <canvas style="max-width: 100%; height: auto;" id="revenueChart" class="w-full max-w-full" style="max-height: 400px;"></canvas>
                </div>

                <!-- Glosas Analysis -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="fas fa-chart-pie text-lime-600 mr-2"></i>
                        Análise de Glosas
                    </h3>
                    <canvas style="max-width: 100%; height: auto;" id="glosasChart" class="w-full max-w-full" style="max-height: 400px;"></canvas>
                </div>
            </div>

            <!-- AI Glosas Prevention -->
            <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8 border border-purple-200">
                <div class="flex items-start justify-between">
                    <div>
                        <h3 class="font-bold text-gray-800 mb-2">
                            <i class="fas fa-brain text-teal-600 mr-2"></i>
                            Prevenção de Glosas com IA
                        </h3>
                        <p class="text-gray-600 mb-4">Sistema preditivo identificou potenciais glosas esta semana</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-white p-3 rounded-lg">
                                <p class="text-sm font-semibold text-red-600">Alto Risco</p>
                                <p class="text-2xl font-bold">12</p>
                                <p class="text-xs text-gray-600">R$ 45.000 em risco</p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                                <p class="text-sm font-semibold text-lime-700">Médio Risco</p>
                                <p class="text-2xl font-bold">28</p>
                                <p class="text-xs text-gray-600">R$ 82.000 em risco</p>
                            </div>
                            <div class="bg-white p-3 rounded-lg">
                                <p class="text-sm font-semibold text-green-600">Resolvidos</p>
                                <p class="text-2xl font-bold">45</p>
                                <p class="text-xs text-gray-600">R$ 145.000 salvos</p>
                            </div>
                        </div>
                    </div>
                    <button class="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                        <i class="far fa-search mr-2"></i>Analisar
                    </button>
                </div>
            </div>

            <!-- Cost Centers Table -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="far fa-building text-green-600 mr-2"></i>
                    Centros de Custo
                </h3>
                
                <div class="overflow-x-auto">
                    <table class="w-full text-sm">
                        <thead>
                            <tr class="border-b">
                                <th class="text-left py-2">Departamento</th>
                                <th class="text-left py-2">Orçamento</th>
                                <th class="text-left py-2">Gasto Atual</th>
                                <th class="text-left py-2">% Utilizado</th>
                                <th class="text-left py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <i class="far fa-capsules text-teal-600 mr-2"></i>
                                        Oncologia
                                    </div>
                                </td>
                                <td class="py-3">R$ 800.000</td>
                                <td class="py-3">R$ 650.000</td>
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <div class="w-20 bg-gray-200 rounded-full h-2 mr-2">
                                            <div class="bg-green-600 h-2 rounded-full" style="width: 81%"></div>
                                        </div>
                                        <span>81%</span>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Normal</span>
                                </td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <i class="far fa-radiation text-lime-600 mr-2"></i>
                                        Radioterapia
                                    </div>
                                </td>
                                <td class="py-3">R$ 500.000</td>
                                <td class="py-3">R$ 420.000</td>
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <div class="w-20 bg-gray-200 rounded-full h-2 mr-2">
                                            <div class="bg-lime-600 h-2 rounded-full" style="width: 84%"></div>
                                        </div>
                                        <span>84%</span>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-lime-100 text-yellow-700 rounded text-xs">Atenção</span>
                                </td>
                            </tr>
                            <tr class="border-b hover:bg-gray-50">
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <i class="fas fa-hospital-alt text-emerald-600 mr-2"></i>
                                        Cirurgia
                                    </div>
                                </td>
                                <td class="py-3">R$ 300.000</td>
                                <td class="py-3">R$ 280.000</td>
                                <td class="py-3">
                                    <div class="flex items-center">
                                        <div class="w-20 bg-gray-200 rounded-full h-2 mr-2">
                                            <div class="bg-red-500 h-2 rounded-full" style="width: 93%"></div>
                                        </div>
                                        <span>93%</span>
                                    </div>
                                </td>
                                <td class="py-3">
                                    <span class="px-2 py-1 bg-emerald-100 text-red-700 rounded text-xs">Crítico</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Optimization Suggestions -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="fas fa-brain text-lime-600 mr-2"></i>
                    Sugestões de Otimização (IA)
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="border rounded-lg p-4 hover:shadow-md transition-all">
                        <div class="flex items-start">
                            <i class="far fa-capsules text-green-500 text-xl mr-3 mt-1"></i>
                            <div>
                                <h4 class="font-semibold text-gray-800">Negociação de Medicamentos</h4>
                                <p class="text-sm text-gray-600 mt-1">Potencial economia de R$ 45.000/mês através de compra em volume</p>
                                <button class="mt-2 text-green-600 text-sm hover:text-green-700">
                                    <i class="far fa-arrow-right mr-1"></i>Implementar
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border rounded-lg p-4 hover:shadow-md transition-all">
                        <div class="flex items-start">
                            <i class="fas fa-hospital-alt text-green-600 text-xl mr-3 mt-1"></i>
                            <div>
                                <h4 class="font-semibold text-gray-800">Gestão de Leitos</h4>
                                <p class="text-sm text-gray-600 mt-1">Redução de 15% no tempo de permanência pode economizar R$ 30.000/mês</p>
                                <button class="mt-2 text-green-600 text-sm hover:text-green-700">
                                    <i class="far fa-arrow-right mr-1"></i>Analisar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer-gradient text-white mt-8">
            <div class="container mx-auto px-4 py-6">
                <div class="text-center">
                    <p class="text-sm opacity-90">
                        © 2024 Laura Technology | ACCamargo Cancer Center
                    </p>
                </div>
            </div>
        </footer>

        <script>
            // Revenue Chart
            const revenueCtx = document.getElementById('revenueChart').getContext('2d');
            new Chart(revenueCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                    datasets: [{
                        label: 'Receita',
                        data: [2.1, 2.2, 2.3, 2.4, 2.5, 2.5],
                        borderColor: 'rgb(34, 197, 94)',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        tension: 0.4
                    }, {
                        label: 'Custos',
                        data: [1.8, 1.85, 1.9, 1.85, 1.8, 1.8],
                        borderColor: 'rgb(239, 68, 68)',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                callback: function(value) {
                                    return 'R$ ' + value + 'M';
                                }
                            }
                        }
                    }
                }
            });

            // Glosas Chart
            const glosasCtx = document.getElementById('glosasChart').getContext('2d');
            new Chart(glosasCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Documentação Incompleta', 'Código Incorreto', 'Autorização Expirada', 'Não Coberto'],
                    datasets: [{
                        data: [45, 30, 20, 10],
                        backgroundColor: [
                            'rgba(239, 68, 68, 0.8)',
                            'rgba(245, 158, 11, 0.8)',
                            'rgba(59, 130, 246, 0.8)',
                            'rgba(139, 92, 246, 0.8)'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'right'
                        }
                    }
                }
            });
        <\/script>
        <script src="/static/portal-helpers.js"><\/script>
        <script src="/static/portal-helpers.js"><\/script>
    <script src="/static/action-plan-system.js"><\/script>
        <script src="/static/action-plan-handlers.js"><\/script>
    </body>
    </html>
  `]))));var mt=Object.freeze,ia=Object.defineProperty,oa=(e,t)=>mt(ia(e,"raw",{value:mt(e.slice())})),gt;const ra=e=>e.html(q(gt||(gt=oa([`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bem-Estar e Apoio - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <link href="/static/style.css" rel="stylesheet">
    </head>
    <body class="bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Bem-Estar e Apoio • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <a href="/patient" class="text-gray-600 hover:text-green-600 transition-colors" title="Portal do Paciente">
                            <i class="fas fa-hospital-user text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-user-circle text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>


        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Welcome Message -->
            <div class="bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl p-6 text-white mb-8">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-2xl font-bold mb-2">Centro de Bem-Estar e Suporte Emocional</h1>
                        <p class="opacity-90">"Um corpo doente precisa de uma mente saudável para potencializar sua cura"</p>
                    </div>
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-20 h-20 opacity-50">
                </div>
            </div>

            <!-- Emotional Health Alerts -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                    <div class="flex items-center">
                        <i class="far fa-exclamation-triangle text-emerald-600 text-xl mr-3"></i>
                        <div>
                            <p class="font-semibold text-red-800">Atenção Urgente</p>
                            <p class="text-2xl font-bold text-red-600">3 pacientes</p>
                            <p class="text-xs text-gray-600">Risco alto de crise emocional</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                    <div class="flex items-center">
                        <i class="far fa-exclamation-circle text-lime-600 text-xl mr-3"></i>
                        <div>
                            <p class="font-semibold text-yellow-800">Monitoramento</p>
                            <p class="text-2xl font-bold text-lime-700">12 pacientes</p>
                            <p class="text-xs text-gray-600">Necessitam acompanhamento</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                    <div class="flex items-center">
                        <i class="far fa-check-circle text-green-500 text-xl mr-3"></i>
                        <div>
                            <p class="font-semibold text-green-800">Estáveis</p>
                            <p class="text-2xl font-bold text-green-600">45 pacientes</p>
                            <p class="text-xs text-gray-600">Bem-estar adequado</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Patient Wellness Dashboard -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <!-- High Risk Patients -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-user-friends text-cyan-600 mr-2"></i>
                        Pacientes em Acompanhamento Intensivo
                    </h3>
                    
                    <div class="space-y-3">
                        <div class="border rounded-lg p-3 bg-red-50">
                            <div class="flex items-start justify-between">
                                <div>
                                    <p class="font-semibold">João Silva</p>
                                    <p class="text-sm text-gray-600">Depressão: 8/10 | Ansiedade: 9/10</p>
                                    <div class="mt-2">
                                        <span class="text-xs bg-emerald-100 text-red-700 px-2 py-1 rounded">
                                            <i class="fas fa-brain"></i> Ideação suicida
                                        </span>
                                        <span class="text-xs bg-teal-100 text-purple-700 px-2 py-1 rounded ml-1">
                                            <i class="far fa-calendar"></i> Sessão hoje 14h
                                        </span>
                                    </div>
                                </div>
                                <button class="text-emerald-600 hover:text-red-600">
                                    <i class="fas fa-phone"></i>
                                </button>
                            </div>
                        </div>
                        
                        <div class="border rounded-lg p-3 bg-yellow-50">
                            <div class="flex items-start justify-between">
                                <div>
                                    <p class="font-semibold">Maria Santos</p>
                                    <p class="text-sm text-gray-600">Depressão: 6/10 | Ansiedade: 7/10</p>
                                    <div class="mt-2">
                                        <span class="text-xs bg-lime-100 text-yellow-700 px-2 py-1 rounded">
                                            <i class="far fa-moon"></i> Insônia severa
                                        </span>
                                    </div>
                                </div>
                                <button class="text-green-600 hover:text-green-700">
                                    <i class="far fa-comment"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Support Groups -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="fas fa-users text-teal-600 mr-2"></i>
                        Grupos de Apoio Ativos
                    </h3>
                    
                    <div class="space-y-3">
                        <div class="border rounded-lg p-3 hover:bg-gray-50">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-semibold text-purple-700">Grupo Mama</p>
                                    <p class="text-sm text-gray-600">12 participantes</p>
                                    <p class="text-xs text-gray-500 mt-1">
                                        <i class="far fa-clock"></i> Próximo: Quinta 14h
                                    </p>
                                </div>
                                <div class="text-right">
                                    <div class="text-2xl font-bold text-teal-700">92%</div>
                                    <p class="text-xs text-gray-600">Satisfação</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="border rounded-lg p-3 hover:bg-gray-50">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-semibold text-blue-700">Mindfulness</p>
                                    <p class="text-sm text-gray-600">8 participantes</p>
                                    <p class="text-xs text-gray-500 mt-1">
                                        <i class="far fa-clock"></i> Diário às 10h
                                    </p>
                                </div>
                                <div class="text-right">
                                    <div class="text-2xl font-bold text-green-700">88%</div>
                                    <p class="text-xs text-gray-600">Adesão</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="border rounded-lg p-3 hover:bg-gray-50">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="font-semibold text-pink-700">Família & Cuidadores</p>
                                    <p class="text-sm text-gray-600">20 participantes</p>
                                    <p class="text-xs text-gray-500 mt-1">
                                        <i class="far fa-clock"></i> Sábado 10h
                                    </p>
                                </div>
                                <div class="text-right">
                                    <div class="text-2xl font-bold text-cyan-700">95%</div>
                                    <p class="text-xs text-gray-600">Satisfação</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Wellness Activities -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
                <h3 class="font-bold text-gray-800 mb-4">
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                    Atividades de Bem-Estar da Semana
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div class="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                        <i class="far fa-spa text-3xl text-teal-600 mb-2"></i>
                        <p class="font-semibold">Yoga</p>
                        <p class="text-xs text-gray-600">Seg/Qua/Sex - 8h</p>
                        <p class="text-xs mt-2">15 inscritos</p>
                    </div>
                    
                    <div class="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                        <i class="fas fa-brain text-3xl text-green-600 mb-2"></i>
                        <p class="font-semibold">Meditação</p>
                        <p class="text-xs text-gray-600">Diário - 10h e 16h</p>
                        <p class="text-xs mt-2">22 inscritos</p>
                    </div>
                    
                    <div class="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                        <i class="far fa-palette text-3xl text-green-500 mb-2"></i>
                        <p class="font-semibold">Arte-terapia</p>
                        <p class="text-xs text-gray-600">Terça - 14h</p>
                        <p class="text-xs mt-2">8 inscritos</p>
                    </div>
                    
                    <div class="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                        <i class="far fa-music text-3xl text-lime-600 mb-2"></i>
                        <p class="font-semibold">Musicoterapia</p>
                        <p class="text-xs text-gray-600">Quinta - 15h</p>
                        <p class="text-xs mt-2">10 inscritos</p>
                    </div>
                </div>
            </div>

            <!-- AI Emotional Risk Prediction -->
            <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border border-purple-200">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="fas fa-cogs text-teal-600 mr-2"></i>
                    Predição de Risco Emocional (IA)
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                            <p class="font-semibold text-gray-700">Próximas 24h</p>
                            <i class="far fa-clock text-emerald-600"></i>
                        </div>
                        <p class="text-3xl font-bold text-red-600">2</p>
                        <p class="text-sm text-gray-600">pacientes em risco</p>
                        <button class="mt-2 text-sm text-green-600 hover:text-green-700">
                            Ver detalhes →
                        </button>
                    </div>
                    
                    <div class="bg-white p-4 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                            <p class="font-semibold text-gray-700">Próxima Semana</p>
                            <i class="far fa-calendar text-lime-600"></i>
                        </div>
                        <p class="text-3xl font-bold text-lime-700">8</p>
                        <p class="text-sm text-gray-600">necessitam intervenção</p>
                        <button class="mt-2 text-sm text-green-600 hover:text-green-700">
                            Agendar sessões →
                        </button>
                    </div>
                    
                    <div class="bg-white p-4 rounded-lg">
                        <div class="flex items-center justify-between mb-2">
                            <p class="font-semibold text-gray-700">Melhoria Detectada</p>
                            <i class="fas fa-heart text-green-500"></i>
                        </div>
                        <p class="text-3xl font-bold text-green-600">15</p>
                        <p class="text-sm text-gray-600">pacientes melhorando</p>
                        <button class="mt-2 text-sm text-green-600 hover:text-green-700">
                            Celebrar progresso →
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer-gradient text-white mt-8">
            <div class="container mx-auto px-4 py-6">
                <div class="text-center">
                    <p class="text-sm opacity-90">
                        © 2024 Laura Technology | ACCamargo Cancer Center
                    </p>
                </div>
            </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script src="/static/portal-helpers.js"><\/script>
        <script src="/static/portal-helpers.js"><\/script>
    <script src="/static/action-plan-system.js"><\/script>
        <script src="/static/action-plan-handlers.js"><\/script>
    </body>
    </html>
  `]))));var ut=Object.freeze,na=Object.defineProperty,la=(e,t)=>ut(na(e,"raw",{value:ut(e.slice())})),xt;const da=e=>e.html(q(xt||(xt=la([`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pesquisa Clínica - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
    </head>
    <body class="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen flex flex-col">
        <!-- Header -->
                <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">Pesquisa Clínica • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <a href="/patient" class="text-gray-600 hover:text-green-600 transition-colors" title="Portal do Paciente">
                            <i class="fas fa-hospital-user text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-bell text-xl"></i>
                        </button>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-user-circle text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>


        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Research Overview -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Estudos Ativos</p>
                            <p class="text-2xl font-bold text-gray-800">12</p>
                        </div>
                        <i class="fas fa-flask text-green-700 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-teal-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Pacientes Inscritos</p>
                            <p class="text-2xl font-bold text-gray-800">456</p>
                        </div>
                        <i class="fas fa-users text-teal-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-600">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Data Points</p>
                            <p class="text-2xl font-bold text-gray-800">1.25M</p>
                        </div>
                        <i class="far fa-database text-green-600 text-2xl"></i>
                    </div>
                </div>
                
                <div class="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm">Insights Gerados</p>
                            <p class="text-2xl font-bold text-gray-800">89</p>
                        </div>
                        <i class="fas fa-brain text-green-500 text-2xl"></i>
                    </div>
                </div>
            </div>

            <!-- Active Studies -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100 mb-8">
                <h3 class="font-bold text-gray-800 mb-4">
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-6 h-6 inline mr-2">
                    Estudos em Andamento
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="border rounded-lg p-4 hover:shadow-lg transition-all">
                        <div class="flex items-start justify-between mb-2">
                            <h4 class="font-semibold text-indigo-700">Imunoterapia em Ca Pulmão</h4>
                            <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Recrutando</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-2">Fase III - Estudo randomizado duplo-cego</p>
                        <div class="grid grid-cols-2 gap-2 text-xs">
                            <div>
                                <p class="text-gray-500">Inscritos</p>
                                <p class="font-semibold">85/100</p>
                            </div>
                            <div>
                                <p class="text-gray-500">Conclusão</p>
                                <p class="font-semibold">Jun 2025</p>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-700 h-2 rounded-full" style="width: 85%"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="border rounded-lg p-4 hover:shadow-lg transition-all">
                        <div class="flex items-start justify-between mb-2">
                            <h4 class="font-semibold text-purple-700">Biomarcadores Preditivos</h4>
                            <span class="px-2 py-1 bg-green-100 text-blue-700 rounded text-xs">Ativo</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-2">Fase II - Estudo observacional</p>
                        <div class="grid grid-cols-2 gap-2 text-xs">
                            <div>
                                <p class="text-gray-500">Inscritos</p>
                                <p class="font-semibold">45/50</p>
                            </div>
                            <div>
                                <p class="text-gray-500">Conclusão</p>
                                <p class="font-semibold">Set 2024</p>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-teal-600 h-2 rounded-full" style="width: 90%"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- AI-Generated Insights -->
            <div class="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6 mb-8">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="fas fa-brain text-teal-600 mr-2"></i>
                    Insights Recentes da IA
                </h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white p-4 rounded-lg">
                        <div class="flex items-start">
                            <i class="far fa-chart-line text-green-500 text-xl mr-3 mt-1"></i>
                            <div>
                                <h4 class="font-semibold text-gray-800">Correlação Positiva Identificada</h4>
                                <p class="text-sm text-gray-600 mt-1">Níveis elevados de IL-6 correlacionam com melhor resposta à imunoterapia</p>
                                <p class="text-xs text-gray-500 mt-2">
                                    <i class="far fa-check-circle text-green-500"></i> p < 0.001 | n=145 pacientes
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white p-4 rounded-lg">
                        <div class="flex items-start">
                            <i class="far fa-exclamation-triangle text-lime-600 text-xl mr-3 mt-1"></i>
                            <div>
                                <h4 class="font-semibold text-gray-800">Padrão de Toxicidade</h4>
                                <p class="text-sm text-gray-600 mt-1">Pacientes >65 anos apresentam maior incidência de neuropatia periférica</p>
                                <p class="text-xs text-gray-500 mt-2">
                                    <i class="far fa-info-circle text-green-600"></i> p = 0.023 | Requer ajuste de dose
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Data Analysis Tools -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <!-- Cohort Analysis -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-chart-bar text-green-600 mr-2"></i>
                        Análise de Coorte
                    </h3>
                    <canvas style="max-width: 100%; height: auto;" id="cohortChart" class="w-full max-w-full" style="max-height: 400px;"></canvas>
                </div>

                <!-- Survival Analysis -->
                <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <h3 class="font-bold text-gray-800 mb-4">
                        <i class="far fa-chart-line text-green-500 mr-2"></i>
                        Análise de Sobrevida
                    </h3>
                    <canvas style="max-width: 100%; height: auto;" id="survivalChart" class="w-full max-w-full" style="max-height: 400px;"></canvas>
                </div>
            </div>

            <!-- Research Opportunities -->
            <div class="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 class="font-bold text-gray-800 mb-4">
                    <i class="fas fa-flask text-green-700 mr-2"></i>
                    Oportunidades de Pesquisa Identificadas pela IA
                </h3>
                
                <div class="space-y-3">
                    <div class="border-l-4 border-indigo-500 pl-4 py-2">
                        <h4 class="font-semibold text-gray-800">Gap de Dados: Toxicidade Tardia</h4>
                        <p class="text-sm text-gray-600">230 pacientes elegíveis, completude de dados: 45%</p>
                        <button class="mt-2 text-green-700 text-sm hover:text-green-800">
                            <i class="far fa-arrow-right mr-1"></i>Iniciar Coleta
                        </button>
                    </div>
                    
                    <div class="border-l-4 border-teal-600 pl-4 py-2">
                        <h4 class="font-semibold text-gray-800">Padrão Emergente: Resposta Combinada</h4>
                        <p class="text-sm text-gray-600">45 pacientes mostram resposta superior com terapia combinada</p>
                        <button class="mt-2 text-teal-600 text-sm hover:text-teal-700">
                            <i class="far fa-arrow-right mr-1"></i>Propor Estudo
                        </button>
                    </div>
                    
                    <div class="border-l-4 border-green-500 pl-4 py-2">
                        <h4 class="font-semibold text-gray-800">Colaboração Internacional</h4>
                        <p class="text-sm text-gray-600">Harvard Medical School - Imunoterapia avançada</p>
                        <button class="mt-2 text-green-500 text-sm hover:text-green-600">
                            <i class="far fa-arrow-right mr-1"></i>Ver Proposta
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="footer-gradient text-white mt-8">
            <div class="container mx-auto px-4 py-6">
                <div class="text-center">
                    <p class="text-sm opacity-90">
                        © 2024 Laura Technology | ACCamargo Cancer Center
                    </p>
                </div>
            </div>
        </footer>

        <script>
            // Cohort Analysis Chart
            const cohortCtx = document.getElementById('cohortChart').getContext('2d');
            new Chart(cohortCtx, {
                type: 'bar',
                data: {
                    labels: ['Estágio I', 'Estágio II', 'Estágio III', 'Estágio IV'],
                    datasets: [{
                        label: 'Taxa de Resposta',
                        data: [85, 72, 58, 35],
                        backgroundColor: 'rgba(99, 102, 241, 0.8)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });

            // Survival Analysis Chart
            const survivalCtx = document.getElementById('survivalChart').getContext('2d');
            new Chart(survivalCtx, {
                type: 'line',
                data: {
                    labels: ['0', '6', '12', '18', '24', '30', '36'],
                    datasets: [{
                        label: 'Grupo Tratamento',
                        data: [100, 92, 85, 78, 72, 68, 65],
                        borderColor: 'rgb(34, 197, 94)',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        tension: 0.4
                    }, {
                        label: 'Grupo Controle',
                        data: [100, 88, 75, 65, 58, 52, 48],
                        borderColor: 'rgb(239, 68, 68)',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Meses'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            max: 100,
                            title: {
                                display: true,
                                text: 'Sobrevida (%)'
                            }
                        }
                    }
                }
            });
        <\/script>
        <script src="/static/portal-helpers.js"><\/script>
        <script src="/static/portal-helpers.js"><\/script>
    <script src="/static/action-plan-system.js"><\/script>
        <script src="/static/action-plan-handlers.js"><\/script>
    </body>
    </html>
  `]))));var ft=Object.freeze,ca=Object.defineProperty,pa=(e,t)=>ft(ca(e,"raw",{value:ft(e.slice())})),vt;const ma=e=>e.html(q(vt||(vt=pa([`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Master Admin - Plataforma Oncológica</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <link href="/static/style.css" rel="stylesheet">
        <style>
            .glass-effect {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }
            .gradient-text {
                background: linear-gradient(135deg, #2B5F3F 0%, #3a8f5f 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .admin-card {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .admin-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 40px rgba(43, 95, 63, 0.15);
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20 min-h-screen flex flex-col">
        <!-- Header -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Painel Master Administrator</h1>
                            <p class="text-sm text-gray-600 font-medium">Gestão Completa do Sistema • ACCamargo Cancer Center</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="fas fa-home text-xl"></i>
                        </a>
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="far fa-bell text-xl"></i>
                        </button>
                        <div class="flex items-center bg-green-100 px-3 py-1 rounded-full">
                            <i class="fas fa-user-shield text-green-600 mr-2"></i>
                            <span class="text-sm font-semibold text-green-700">Master Admin</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Stats Overview -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div class="glass-effect rounded-xl p-4 border border-white/50">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-2xl font-bold text-gray-800">156</p>
                            <p class="text-sm text-gray-600">Usuários Ativos</p>
                        </div>
                        <i class="fas fa-users text-3xl text-green-600 opacity-50"></i>
                    </div>
                </div>
                <div class="glass-effect rounded-xl p-4 border border-white/50">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-2xl font-bold text-gray-800">98.7%</p>
                            <p class="text-sm text-gray-600">Uptime Sistema</p>
                        </div>
                        <i class="fas fa-server text-3xl text-emerald-600 opacity-50"></i>
                    </div>
                </div>
                <div class="glass-effect rounded-xl p-4 border border-white/50">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-2xl font-bold text-gray-800">847</p>
                            <p class="text-sm text-gray-600">Processos IA/dia</p>
                        </div>
                        <i class="fas fa-brain text-3xl text-teal-600 opacity-50"></i>
                    </div>
                </div>
                <div class="glass-effect rounded-xl p-4 border border-white/50">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-2xl font-bold text-gray-800">12</p>
                            <p class="text-sm text-gray-600">Módulos Ativos</p>
                        </div>
                        <i class="fas fa-cube text-3xl text-cyan-600 opacity-50"></i>
                    </div>
                </div>
            </div>

            <!-- Main Admin Sections -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <!-- Gerenciamento de Usuários -->
                <div class="admin-card glass-effect rounded-2xl p-6 border border-white/50">
                    <div class="text-center">
                        <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                            <i class="fas fa-users-cog text-2xl text-white"></i>
                        </div>
                        <h3 class="text-lg font-bold mb-2 text-gray-800">Gerenciamento de Usuários</h3>
                        <p class="text-sm text-gray-600 mb-4">Controle de acessos, permissões e perfis</p>
                        <div class="space-y-2">
                            <button class="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold">
                                Gerenciar Usuários
                            </button>
                            <button class="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                                Logs de Acesso
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Configuração do Sistema -->
                <div class="admin-card glass-effect rounded-2xl p-6 border border-white/50">
                    <div class="text-center">
                        <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                            <i class="fas fa-cogs text-2xl text-white"></i>
                        </div>
                        <h3 class="text-lg font-bold mb-2 text-gray-800">Configuração do Sistema</h3>
                        <p class="text-sm text-gray-600 mb-4">Parâmetros, integrações e APIs</p>
                        <div class="space-y-2">
                            <button class="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-semibold">
                                Configurações
                            </button>
                            <button class="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                                Integrações
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Gestão de Interface Tecnológica -->
                <div class="admin-card glass-effect rounded-2xl p-6 border border-white/50">
                    <div class="text-center">
                        <div class="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg">
                            <i class="fas fa-network-wired text-2xl text-white"></i>
                        </div>
                        <h3 class="text-lg font-bold mb-2 text-gray-800">Interface Tecnológica</h3>
                        <p class="text-sm text-gray-600 mb-4">Arquitetura, performance e monitoramento</p>
                        <div class="space-y-2">
                            <button class="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-semibold">
                                Dashboard Tech
                            </button>
                            <button class="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                                Monitoramento
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- AI Training and Process Management -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <!-- Treinar IA -->
                <div class="glass-effect rounded-2xl p-8 border border-white/50 bg-gradient-to-br from-purple-50/50 to-purple-100/30">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h2 class="text-xl font-bold text-gray-800 mb-2">
                                <i class="fas fa-brain text-purple-600 mr-2"></i>
                                Treinar IA
                            </h2>
                            <p class="text-sm text-gray-600">Gestão de modelos e treinamento de algoritmos</p>
                        </div>
                        <div class="opacity-20">
                            <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-12 h-12">
                        </div>
                    </div>
                    <div class="space-y-3">
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Modelos Ativos</span>
                            <span class="text-sm font-bold text-purple-600">24</span>
                        </div>
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Acurácia Média</span>
                            <span class="text-sm font-bold text-purple-600">94.3%</span>
                        </div>
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Último Treinamento</span>
                            <span class="text-sm font-bold text-purple-600">Há 2h</span>
                        </div>
                    </div>
                    <button onclick="window.location.href='/admin/ai-training'" class="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all font-semibold shadow-lg">
                        <i class="fas fa-graduation-cap mr-2"></i>
                        Acessar Treinamento IA
                    </button>
                </div>

                <!-- Novo Processo -->
                <div class="glass-effect rounded-2xl p-8 border border-white/50 bg-gradient-to-br from-orange-50/50 to-orange-100/30">
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h2 class="text-xl font-bold text-gray-800 mb-2">
                                <i class="fas fa-plus-circle text-orange-600 mr-2"></i>
                                Novo Processo
                            </h2>
                            <p class="text-sm text-gray-600">Criar e configurar novos fluxos automatizados</p>
                        </div>
                        <div class="text-4xl text-orange-600 opacity-20">
                            <i class="fas fa-project-diagram"></i>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Processos Ativos</span>
                            <span class="text-sm font-bold text-orange-600">68</span>
                        </div>
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Taxa Automação</span>
                            <span class="text-sm font-bold text-orange-600">87%</span>
                        </div>
                        <div class="bg-white/70 rounded-lg p-3 flex items-center justify-between">
                            <span class="text-sm font-medium text-gray-700">Tempo Médio</span>
                            <span class="text-sm font-bold text-orange-600">3.2min</span>
                        </div>
                    </div>
                    <button onclick="window.location.href='/admin/new-process'" class="w-full mt-6 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-lg hover:from-orange-700 hover:to-orange-800 transition-all font-semibold shadow-lg">
                        <i class="fas fa-rocket mr-2"></i>
                        Criar Novo Processo
                    </button>
                </div>
            </div>

            

            <!-- Quick Actions -->
            <div class="glass-effect rounded-2xl p-6 border border-white/50">
                <h3 class="text-lg font-bold mb-4 text-gray-800">
                    <i class="fas fa-bolt text-yellow-600 mr-2"></i>
                    Ações Rápidas
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button class="bg-white hover:bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200 transition-all">
                        <i class="fas fa-database text-2xl text-gray-600 mb-2"></i>
                        <p class="text-sm font-medium text-gray-700">Backup Sistema</p>
                    </button>
                    <button class="bg-white hover:bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200 transition-all">
                        <i class="fas fa-sync-alt text-2xl text-gray-600 mb-2"></i>
                        <p class="text-sm font-medium text-gray-700">Sincronizar</p>
                    </button>
                    <button class="bg-white hover:bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200 transition-all">
                        <i class="fas fa-chart-line text-2xl text-gray-600 mb-2"></i>
                        <p class="text-sm font-medium text-gray-700">Relatórios</p>
                    </button>
                    <button class="bg-white hover:bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200 transition-all">
                        <i class="fas fa-shield-alt text-2xl text-gray-600 mb-2"></i>
                        <p class="text-sm font-medium text-gray-700">Segurança</p>
                    </button>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-gray-100 border-t border-gray-200 py-4 mt-8">
            <div class="container mx-auto px-4 text-center">
                <p class="text-sm text-gray-600">
                    © 2024 ACCamargo Cancer Center - Painel Master Administrator
                </p>
            </div>
        </footer>

        <script>
            // Add interactivity here if needed
        <\/script>
        <script src="/static/portal-helpers.js"><\/script>
    <script src="/static/action-plan-system.js"><\/script>
        <script src="/static/action-plan-handlers.js"><\/script>
    </body>
    </html>
  `]))));var bt=Object.freeze,ga=Object.defineProperty,ua=(e,t)=>bt(ga(e,"raw",{value:bt(e.slice())})),ht;const xa=e=>e.html(q(ht||(ht=ua([`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Master Admin - Centro de Controle Total</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <link href="/static/style.css" rel="stylesheet">
        <style>
            .glass-effect {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }
            .gradient-admin {
                background: linear-gradient(135deg, #14532d 0%, #16a34a 100%);
            }
            .admin-card {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: pointer;
            }
            .admin-card:hover {
                transform: translateY(-5px) scale(1.02);
                box-shadow: 0 20px 40px rgba(21, 83, 45, 0.3);
            }
            .sidebar-item {
                transition: all 0.2s ease;
            }
            .sidebar-item:hover {
                background: linear-gradient(90deg, rgba(34, 197, 94, 0.15) 0%, transparent 100%);
                padding-left: 1.5rem;
            }
            .status-online {
                animation: pulse-green 2s infinite;
            }
            @keyframes pulse-green {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
            .terminal-style {
                background: #0a1f0f;
                color: #22c55e;
                font-family: 'Courier New', monospace;
                padding: 1rem;
                border-radius: 0.5rem;
                font-size: 0.875rem;
                border: 1px solid rgba(34, 197, 94, 0.2);
            }
            /* Animações para o comparativo */
            #comparison-expanded {
                transition: max-height 0.5s ease-out, opacity 0.3s ease-out;
            }
            #comparison-collapsed {
                animation: fadeIn 0.3s ease-in;
            }
            #comparison-container.collapsed {
                background: rgba(20, 83, 45, 0.85) !important;
            }
            @keyframes fadeIn {
                from { 
                    opacity: 0; 
                    transform: translateY(-10px); 
                }
                to { 
                    opacity: 1; 
                    transform: translateY(0); 
                }
            }
            /* Hover effect no botão toggle */
            #comparison-toggle-icon {
                transition: transform 0.3s ease;
            }
            button:hover #comparison-toggle-icon {
                transform: scale(1.1);
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-green-950 via-emerald-900 to-green-950 min-h-screen flex">
        <!-- Sidebar Navigation -->
        <aside class="w-64 bg-green-950/95 backdrop-blur-lg border-r border-green-800 h-screen sticky top-0">
            <div class="p-6">
                <div class="flex items-center mb-8">
                    <i class="fas fa-shield-alt text-3xl text-emerald-500 mr-3"></i>
                    <div>
                        <h2 class="text-xl font-bold text-white">Master Control</h2>
                        <p class="text-xs text-emerald-400">v2.0.0 Enterprise</p>
                    </div>
                </div>
                
                <!-- Navigation Menu -->
                <nav class="space-y-2">
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-tachometer-alt mr-3 text-emerald-400"></i>
                        <span>Dashboard</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-users-cog mr-3 text-green-400"></i>
                        <span>Gestão de Personas</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-cogs mr-3 text-purple-400"></i>
                        <span>Processos & Workflows</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-database mr-3 text-yellow-400"></i>
                        <span>Bibliotecas & APIs</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-brain mr-3 text-pink-400"></i>
                        <span>Configuração IA</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-shield-virus mr-3 text-red-400"></i>
                        <span>Segurança & Compliance</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-chart-line mr-3 text-emerald-400"></i>
                        <span>Analytics Avançado</span>
                    </div>
                    <div class="sidebar-item rounded-lg p-3 text-white cursor-pointer">
                        <i class="fas fa-plug mr-3 text-orange-400"></i>
                        <span>Integrações</span>
                    </div>
                </nav>
                
                <!-- System Status -->
                <div class="mt-8 p-4 bg-green-900/50 rounded-lg border border-green-700/50">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-gray-400">STATUS GERAL</span>
                        <span class="status-online w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                    <div class="text-2xl font-bold text-green-400">OPERACIONAL</div>
                    <div class="text-xs text-gray-500 mt-1">Uptime: 99.98%</div>
                </div>
            </div>
        </aside>

        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col">
            <!-- Top Header -->
            <header class="bg-green-950/90 backdrop-blur-lg border-b border-green-800 px-8 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <button onclick="window.location.href='/'" class="text-gray-400 hover:text-white mr-4">
                            <i class="fas fa-arrow-left"></i>
                        </button>
                        <h1 class="text-2xl font-bold text-white">
                            Centro de Controle Master Administrator
                        </h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div class="text-sm text-gray-400">
                            <i class="far fa-clock mr-2"></i>
                            <span id="current-time"></span>
                        </div>
                        <div class="flex items-center bg-green-900/50 px-4 py-2 rounded-full border border-green-700">
                            <i class="fas fa-user-shield text-emerald-400 mr-2"></i>
                            <span class="text-sm font-semibold text-emerald-300">Jac Fressatto</span>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Main Dashboard Content -->
            <main class="flex-1 p-8 overflow-y-auto">
                <!-- Critical Metrics -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 text-white shadow-xl">
                        <div class="flex items-center justify-between mb-4">
                            <i class="fas fa-users text-3xl opacity-70"></i>
                            <span class="text-xs bg-white/20 px-2 py-1 rounded-full">+12%</span>
                        </div>
                        <div class="text-3xl font-bold">847</div>
                        <div class="text-sm opacity-90">Usuários Ativos</div>
                        <div class="mt-2 text-xs opacity-70">156 médicos • 523 pacientes • 168 staff</div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white shadow-xl">
                        <div class="flex items-center justify-between mb-4">
                            <i class="fas fa-robot text-3xl opacity-70"></i>
                            <span class="text-xs bg-white/20 px-2 py-1 rounded-full">IA ON</span>
                        </div>
                        <div class="text-3xl font-bold">2,341</div>
                        <div class="text-sm opacity-90">Processos IA/dia</div>
                        <div class="mt-2 text-xs opacity-70">LAURA: 97% accuracy</div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-6 text-white shadow-xl">
                        <div class="flex items-center justify-between mb-4">
                            <i class="fas fa-server text-3xl opacity-70"></i>
                            <span class="text-xs bg-white/20 px-2 py-1 rounded-full">EDGE</span>
                        </div>
                        <div class="text-3xl font-bold">12ms</div>
                        <div class="text-sm opacity-90">Latência Média</div>
                        <div class="mt-2 text-xs opacity-70">Cloudflare: 287 PoPs ativos</div>
                    </div>
                    
                    <div class="bg-gradient-to-br from-lime-600 to-lime-700 rounded-xl p-6 text-white shadow-xl">
                        <div class="flex items-center justify-between mb-4">
                            <i class="fas fa-shield-alt text-3xl opacity-70"></i>
                            <span class="text-xs bg-white/20 px-2 py-1 rounded-full">LGPD</span>
                        </div>
                        <div class="text-3xl font-bold">100%</div>
                        <div class="text-sm opacity-90">Compliance</div>
                        <div class="mt-2 text-xs opacity-70">0 incidentes • ISO 27001</div>
                    </div>
                </div>

                <!-- Control Panels Grid -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <!-- Gestão de Personas -->
                    <div class="admin-card bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700" onclick="openPersonaManager()">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-bold text-white flex items-center">
                                <i class="fas fa-users-cog mr-3 text-green-400"></i>
                                Gestão de Personas
                            </h3>
                            <button class="text-gray-400 hover:text-white">
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">Médicos</span>
                                </div>
                                <span class="text-sm font-bold text-green-400">156</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">Pacientes</span>
                                </div>
                                <span class="text-sm font-bold text-blue-400">523</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">Navegadores</span>
                                </div>
                                <span class="text-sm font-bold text-purple-400">42</span>
                            </div>
                        </div>
                        <button class="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                            <i class="fas fa-user-plus mr-2"></i>
                            Adicionar Persona
                        </button>
                    </div>

                    <!-- Processos & Workflows -->
                    <div class="admin-card bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700" onclick="openProcessManager()">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-bold text-white flex items-center">
                                <i class="fas fa-cogs mr-3 text-purple-400"></i>
                                Processos & Workflows
                            </h3>
                            <button class="text-gray-400 hover:text-white">
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-gray-300">Triagem Automática</span>
                                    <span class="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded">Ativo</span>
                                </div>
                                <div class="w-full bg-green-800 rounded-full h-2">
                                    <div class="bg-green-500 h-2 rounded-full" style="width: 87%"></div>
                                </div>
                            </div>
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-gray-300">Navegação Pacientes</span>
                                    <span class="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">Running</span>
                                </div>
                                <div class="w-full bg-green-800 rounded-full h-2">
                                    <div class="bg-blue-500 h-2 rounded-full" style="width: 92%"></div>
                                </div>
                            </div>
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-gray-300">Análise Glosas</span>
                                    <span class="text-xs bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded">Queue: 23</span>
                                </div>
                                <div class="w-full bg-green-800 rounded-full h-2">
                                    <div class="bg-yellow-500 h-2 rounded-full" style="width: 65%"></div>
                                </div>
                            </div>
                        </div>
                        <button class="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                            <i class="fas fa-plus-circle mr-2"></i>
                            Novo Workflow
                        </button>
                    </div>

                    <!-- Configuração IA -->
                    <div class="admin-card bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700" onclick="openAIConfig()">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-lg font-bold text-white flex items-center">
                                <i class="fas fa-brain mr-3 text-pink-400"></i>
                                Configuração IA
                            </h3>
                            <button class="text-gray-400 hover:text-white">
                                <i class="fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-gray-300">LAURA Assistant</span>
                                    <div class="flex items-center">
                                        <div class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                        <span class="text-xs text-green-400">Online</span>
                                    </div>
                                </div>
                                <div class="mt-2 text-xs text-gray-500">
                                    Accuracy: 97% • Latency: 234ms
                                </div>
                            </div>
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-gray-300">Modelos Ativos</span>
                                    <span class="text-sm font-bold text-pink-400">8</span>
                                </div>
                                <div class="mt-2 text-xs text-gray-500">
                                    GPT-4 • Claude-3 • Gemini • Local LLMs
                                </div>
                            </div>
                            <div class="p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-gray-300">API Calls Hoje</span>
                                    <span class="text-sm font-bold text-emerald-400">12,847</span>
                                </div>
                                <div class="mt-2 text-xs text-gray-500">
                                    Custo: R$ 127.34 • Limite: R$ 500/dia
                                </div>
                            </div>
                        </div>
                        <button class="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition-colors">
                            <i class="fas fa-sliders-h mr-2"></i>
                            Ajustar Parâmetros
                        </button>
                    </div>
                </div>

                <!-- System Monitoring -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <!-- Real-time Logs -->
                    <div class="bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center justify-between">
                            <span>
                                <i class="fas fa-terminal mr-3 text-emerald-400"></i>
                                Logs em Tempo Real
                            </span>
                            <button class="text-xs bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full hover:bg-emerald-600/30">
                                <i class="fas fa-pause mr-1"></i>
                                Pausar
                            </button>
                        </h3>
                        <div class="terminal-style h-64 overflow-y-auto" id="log-container">
                            <div>[2025-01-09 14:23:01] INFO: Novo usuário autenticado - ID: 523</div>
                            <div>[2025-01-09 14:23:02] INFO: LAURA processou consulta - Tempo: 234ms</div>
                            <div>[2025-01-09 14:23:05] WARNING: Alta carga detectada - CPU: 78%</div>
                            <div>[2025-01-09 14:23:08] INFO: Backup automático iniciado</div>
                            <div>[2025-01-09 14:23:12] SUCCESS: Glosa prevenida - Valor: R$ 4,250.00</div>
                            <div>[2025-01-09 14:23:15] INFO: Navegador atribuído - Paciente: #1247</div>
                            <div>[2025-01-09 14:23:18] INFO: Triagem automática completada</div>
                            <div>[2025-01-09 14:23:21] SUCCESS: Deploy em produção - v2.1.3</div>
                        </div>
                    </div>

                    <!-- API & Integrations Status -->
                    <div class="bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700">
                        <h3 class="text-lg font-bold text-white mb-4 flex items-center">
                            <i class="fas fa-plug mr-3 text-orange-400"></i>
                            Status de Integrações
                        </h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">Cloudflare Workers</span>
                                </div>
                                <span class="text-xs text-green-400">287 PoPs • 12ms</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">D1 Database</span>
                                </div>
                                <span class="text-xs text-green-400">523 MB • 99.9% uptime</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">OpenAI API</span>
                                </div>
                                <span class="text-xs text-green-400">GPT-4 • 234ms avg</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">HIS/RIS Legacy</span>
                                </div>
                                <span class="text-xs text-yellow-400">Sync delay: 5min</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-green-950/50 rounded-lg">
                                <div class="flex items-center">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    <span class="text-sm text-gray-300">WhatsApp Business</span>
                                </div>
                                <span class="text-xs text-green-400">1,247 msgs hoje</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Advanced Controls -->
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
                    <button onclick="openDatabaseManager()" class="admin-card bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-6 text-white shadow-xl">
                        <i class="fas fa-database text-3xl mb-3"></i>
                        <div class="font-bold">Database Manager</div>
                        <div class="text-xs opacity-80 mt-1">D1 • KV • R2 Storage</div>
                    </button>
                    
                    <button onclick="openSecurityPanel()" class="admin-card bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-white shadow-xl">
                        <i class="fas fa-shield-virus text-3xl mb-3"></i>
                        <div class="font-bold">Segurança</div>
                        <div class="text-xs opacity-80 mt-1">LGPD • ISO 27001 • HIPAA</div>
                    </button>
                    
                    <button onclick="openAnalytics()" class="admin-card bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-6 text-white shadow-xl">
                        <i class="fas fa-chart-line text-3xl mb-3"></i>
                        <div class="font-bold">Analytics</div>
                        <div class="text-xs opacity-80 mt-1">BI • Reports • Insights</div>
                    </button>
                    
                    <button onclick="openSystemConfig()" class="admin-card bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl p-6 text-white shadow-xl">
                        <i class="fas fa-tools text-3xl mb-3"></i>
                        <div class="font-bold">Configurações</div>
                        <div class="text-xs opacity-80 mt-1">Sistema • Deploy • CI/CD</div>
                    </button>
                </div>

                <!-- Ansiedade de Laura - Admin Version -->
                <div class="mb-8">
                    `,`
                </div>

                <!-- Gráfico Comparativo Homem x Máquina - Master Admin -->
                <div id="comparison-container" class="bg-green-900/90 backdrop-blur rounded-xl p-6 border border-green-700 mb-8 transition-all duration-500">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-lg font-bold text-white flex items-center">
                            <i class="fas fa-chart-line mr-3 text-emerald-400"></i>
                            Comparativo de Performance: Homem x Máquina
                        </h3>
                        <div class="flex items-center gap-4">
                            <!-- Indicadores (visível quando expandido) -->
                            <div id="comparison-indicators" class="flex items-center gap-3 text-sm transition-opacity duration-300">
                                <span class="flex items-center gap-2">
                                    <span class="w-3 h-3 bg-green-500 rounded-full"></span>
                                    <span class="text-gray-300">Ações Humanas</span>
                                </span>
                                <span class="flex items-center gap-2">
                                    <span class="w-3 h-3 bg-orange-500 rounded-full"></span>
                                    <span class="text-gray-300">Processos IA</span>
                                </span>
                            </div>
                            <!-- Período -->
                            <select id="comparison-period" class="bg-green-800 text-white text-sm px-3 py-1 rounded-lg border border-green-600 transition-opacity duration-300">
                                <option>Última Semana</option>
                                <option>Último Mês</option>
                                <option>Último Trimestre</option>
                            </select>
                            <!-- Botão de Recolher/Expandir -->
                            <button onclick="toggleComparison()" class="text-gray-400 hover:text-emerald-400 transition-all duration-300 p-2 rounded-lg hover:bg-green-800/50" title="Recolher/Expandir">
                                <i id="comparison-toggle-icon" class="fas fa-compress-alt text-lg"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Conteúdo Expansível -->
                    <div id="comparison-expanded" class="transition-all duration-500">
                        <!-- Grid de Métricas e Gráfico -->
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <!-- Métricas Comparativas -->
                        <div class="space-y-4">
                            <!-- Eficiência -->
                            <div class="bg-green-950/50 rounded-lg p-4">
                                <div class="text-xs text-gray-400 mb-2">EFICIÊNCIA OPERACIONAL</div>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-green-400">Homem</span>
                                    <span class="text-lg font-bold text-white">87%</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-orange-400">Máquina</span>
                                    <span class="text-lg font-bold text-white">94%</span>
                                </div>
                                <div class="mt-2 text-xs text-emerald-400">
                                    <i class="fas fa-arrow-up"></i> +7% favor IA
                                </div>
                            </div>

                            <!-- Velocidade -->
                            <div class="bg-green-950/50 rounded-lg p-4">
                                <div class="text-xs text-gray-400 mb-2">TEMPO MÉDIO RESPOSTA</div>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-green-400">Homem</span>
                                    <span class="text-lg font-bold text-white">4.2min</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-orange-400">Máquina</span>
                                    <span class="text-lg font-bold text-white">0.3s</span>
                                </div>
                                <div class="mt-2 text-xs text-emerald-400">
                                    <i class="fas fa-rocket"></i> 840x mais rápido
                                </div>
                            </div>

                            <!-- Precisão -->
                            <div class="bg-green-950/50 rounded-lg p-4">
                                <div class="text-xs text-gray-400 mb-2">TAXA DE ACERTO</div>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm text-green-400">Homem</span>
                                    <span class="text-lg font-bold text-white">92%</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-orange-400">Máquina</span>
                                    <span class="text-lg font-bold text-white">97%</span>
                                </div>
                                <div class="mt-2 text-xs text-emerald-400">
                                    <i class="fas fa-check-circle"></i> +5% precisão
                                </div>
                            </div>
                        </div>

                        <!-- Gráfico Principal -->
                        <div class="lg:col-span-2 bg-green-950/30 rounded-lg p-4">
                            <canvas id="admin-comparison-chart" class="w-full h-64"></canvas>
                        </div>
                    </div>

                    <!-- Insights e Recomendações -->
                    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="bg-gradient-to-r from-green-950/50 to-emerald-950/50 rounded-lg p-4 border border-green-700/50">
                            <h4 class="text-sm font-semibold text-emerald-400 mb-2 flex items-center">
                                <i class="fas fa-lightbulb mr-2"></i>
                                Insights Detectados
                            </h4>
                            <ul class="space-y-2 text-xs text-gray-300">
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-emerald-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>IA supera humanos em 78% das tarefas repetitivas</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-emerald-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>Decisões complexas ainda requerem supervisão humana</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-emerald-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>Economia de R$ 2.4M em glosas via automação</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-gradient-to-r from-orange-950/50 to-yellow-950/50 rounded-lg p-4 border border-orange-700/50">
                            <h4 class="text-sm font-semibold text-orange-400 mb-2 flex items-center">
                                <i class="fas fa-robot mr-2"></i>
                                Otimizações Sugeridas
                            </h4>
                            <ul class="space-y-2 text-xs text-gray-300">
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-orange-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>Expandir automação para triagem inicial</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-orange-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>Implementar ML para previsão de demanda</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-chevron-right text-orange-500 mt-0.5 mr-2 text-xs"></i>
                                    <span>Treinar equipe em ferramentas de IA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div><!-- Fim do comparison-expanded -->

                    <!-- Versão Recolhida (inicialmente oculta) -->
                    <div id="comparison-collapsed" class="hidden">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-6">
                                <!-- Resumo compacto das métricas -->
                                <div class="flex items-center gap-4 text-sm">
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-user text-green-400"></i>
                                        <span class="text-gray-400">Eficiência Humana:</span>
                                        <span class="text-green-400 font-bold">87%</span>
                                    </div>
                                    <div class="text-gray-600">|</div>
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-robot text-orange-400"></i>
                                        <span class="text-gray-400">Eficiência IA:</span>
                                        <span class="text-orange-400 font-bold">94%</span>
                                    </div>
                                    <div class="text-gray-600">|</div>
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-trending-up text-emerald-400"></i>
                                        <span class="text-gray-400">Vantagem IA:</span>
                                        <span class="text-emerald-400 font-bold">+7%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Status resumido -->
                            <div class="flex items-center gap-3">
                                <span class="text-sm text-gray-400">Economia Gerada:</span>
                                <span class="text-lg font-bold text-emerald-400">R$ 2.4M</span>
                                <div class="flex items-center gap-2 ml-4">
                                    <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                    <span class="text-sm text-emerald-400">Otimizado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

        <!-- Scripts -->
        <script>
            // Initialize Admin Comparison Chart
            document.addEventListener('DOMContentLoaded', function() {
                const ctx = document.getElementById('admin-comparison-chart');
                if (ctx && typeof Chart !== 'undefined') {
                    new Chart(ctx.getContext('2d'), {
                        type: 'line',
                        data: {
                            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
                            datasets: [{
                                label: 'Ações Humanas',
                                data: [145, 162, 178, 195, 203, 189, 176],
                                borderColor: '#10B981',
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                borderWidth: 3,
                                tension: 0.4,
                                pointRadius: 4,
                                pointHoverRadius: 6,
                                pointBackgroundColor: '#10B981',
                                pointBorderColor: '#fff',
                                pointBorderWidth: 2
                            }, {
                                label: 'Processos IA',
                                data: [523, 578, 612, 698, 743, 681, 625],
                                borderColor: '#FF8C00',
                                backgroundColor: 'rgba(255, 140, 0, 0.1)',
                                borderWidth: 3,
                                tension: 0.4,
                                pointRadius: 4,
                                pointHoverRadius: 6,
                                pointBackgroundColor: '#FF8C00',
                                pointBorderColor: '#fff',
                                pointBorderWidth: 2
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            interaction: {
                                mode: 'index',
                                intersect: false,
                            },
                            plugins: {
                                legend: {
                                    display: false
                                },
                                tooltip: {
                                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                    titleColor: '#fff',
                                    bodyColor: '#fff',
                                    borderColor: '#22c55e',
                                    borderWidth: 1,
                                    padding: 12,
                                    displayColors: true,
                                    callbacks: {
                                        label: function(context) {
                                            let label = context.dataset.label || '';
                                            if (label) {
                                                label += ': ';
                                            }
                                            label += context.parsed.y + ' operações';
                                            return label;
                                        }
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    grid: {
                                        color: 'rgba(34, 197, 94, 0.1)',
                                        drawBorder: false
                                    },
                                    ticks: {
                                        color: '#9CA3AF',
                                        font: {
                                            size: 11
                                        }
                                    }
                                },
                                x: {
                                    grid: {
                                        display: false
                                    },
                                    ticks: {
                                        color: '#9CA3AF',
                                        font: {
                                            size: 11
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            });

            // Estado do componente comparativo
            let comparisonState = {
                isCollapsed: false
            };

            // Função para recolher/expandir comparativo
            function toggleComparison() {
                const container = document.getElementById('comparison-container');
                const expandedContent = document.getElementById('comparison-expanded');
                const collapsedContent = document.getElementById('comparison-collapsed');
                const toggleIcon = document.getElementById('comparison-toggle-icon');
                const indicators = document.getElementById('comparison-indicators');
                const period = document.getElementById('comparison-period');
                
                comparisonState.isCollapsed = !comparisonState.isCollapsed;
                
                if (comparisonState.isCollapsed) {
                    // Recolher
                    expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px';
                    expandedContent.offsetHeight; // Force reflow
                    expandedContent.style.maxHeight = '0';
                    expandedContent.style.opacity = '0';
                    expandedContent.style.overflow = 'hidden';
                    
                    // Esconder indicadores e seletor quando recolhido
                    indicators.style.opacity = '0';
                    period.style.opacity = '0';
                    setTimeout(() => {
                        indicators.style.display = 'none';
                        period.style.display = 'none';
                    }, 300);
                    
                    setTimeout(() => {
                        expandedContent.classList.add('hidden');
                        collapsedContent.classList.remove('hidden');
                        collapsedContent.style.animation = 'fadeIn 0.3s ease-in';
                    }, 500);
                    
                    toggleIcon.className = 'fas fa-expand-alt text-lg';
                    container.classList.add('collapsed');
                    container.style.background = 'rgba(20, 83, 45, 0.85)'; // Mais escuro quando recolhido
                } else {
                    // Expandir
                    collapsedContent.classList.add('hidden');
                    expandedContent.classList.remove('hidden');
                    expandedContent.style.maxHeight = '0';
                    expandedContent.style.opacity = '0';
                    
                    // Mostrar indicadores e seletor quando expandido
                    indicators.style.display = 'flex';
                    period.style.display = 'block';
                    setTimeout(() => {
                        indicators.style.opacity = '1';
                        period.style.opacity = '1';
                    }, 100);
                    
                    setTimeout(() => {
                        expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px';
                        expandedContent.style.opacity = '1';
                        setTimeout(() => {
                            expandedContent.style.maxHeight = 'none';
                            expandedContent.style.overflow = 'visible';
                        }, 500);
                    }, 10);
                    
                    toggleIcon.className = 'fas fa-compress-alt text-lg';
                    container.classList.remove('collapsed');
                    container.style.background = ''; // Volta ao original
                }
            }

            // Update current time
            function updateTime() {
                const now = new Date();
                document.getElementById('current-time').textContent = 
                    now.toLocaleString('pt-BR', { 
                        day: '2-digit', 
                        month: '2-digit', 
                        year: 'numeric',
                        hour: '2-digit', 
                        minute: '2-digit',
                        second: '2-digit'
                    });
            }
            setInterval(updateTime, 1000);
            updateTime();

            // Simulate real-time logs
            const logMessages = [
                'INFO: Novo paciente registrado no sistema',
                'SUCCESS: Triagem automática completada com sucesso',
                'INFO: LAURA Assistant processou consulta',
                'WARNING: Pico de utilização detectado',
                'SUCCESS: Glosa prevenida - Economia registrada',
                'INFO: Backup automático realizado',
                'INFO: Sincronização com HIS completada',
                'SUCCESS: Deploy em produção finalizado',
                'INFO: Navegador atribuído a novo paciente',
                'WARNING: Limite de API próximo do threshold'
            ];

            function addRandomLog() {
                const container = document.getElementById('log-container');
                const timestamp = new Date().toLocaleString('pt-BR');
                const randomMsg = logMessages[Math.floor(Math.random() * logMessages.length)];
                const logEntry = document.createElement('div');
                logEntry.textContent = '[' + timestamp + '] ' + randomMsg;
                container.appendChild(logEntry);
                container.scrollTop = container.scrollHeight;
                
                // Keep only last 20 logs
                while (container.children.length > 20) {
                    container.removeChild(container.firstChild);
                }
            }
            setInterval(addRandomLog, 3000);

            // Control Functions
            function openPersonaManager() {
                alert('Abrindo Gerenciador de Personas...');
            }

            function openProcessManager() {
                alert('Abrindo Gerenciador de Processos...');
            }

            function openAIConfig() {
                alert('Abrindo Configurações de IA...');
            }

            function openDatabaseManager() {
                alert('Abrindo Database Manager...');
            }

            function openSecurityPanel() {
                alert('Abrindo Painel de Segurança...');
            }

            function openAnalytics() {
                alert('Abrindo Analytics Avançado...');
            }

            function openSystemConfig() {
                alert('Abrindo Configurações do Sistema...');
            }
        <\/script>
    </body>
    </html>
  `])),me(z("admin"))));new T;const fa=e=>e.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Teste de Integração - Sistema de Planos de Ação</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            body {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
            }
            .test-card {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 30px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            }
            .test-button {
                background: linear-gradient(135deg, #FF8C00 0%, #FF6B35 100%);
                color: white;
                padding: 12px 24px;
                border-radius: 10px;
                font-weight: 600;
                transition: all 0.3s;
                cursor: pointer;
                border: none;
                margin: 5px;
            }
            .test-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(255, 140, 0, 0.4);
            }
            .console-output {
                background: #1a1a1a;
                color: #00ff00;
                padding: 20px;
                border-radius: 10px;
                font-family: 'Courier New', monospace;
                height: 400px;
                overflow-y: auto;
                margin-top: 20px;
            }
            .status-indicator {
                display: inline-block;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                margin-right: 8px;
            }
            .status-ok { background: #4CAF50; }
            .status-error { background: #f44336; }
            .status-loading { background: #FF9800; animation: pulse 1s infinite; }
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
        </style>
    </head>
    <body class="p-8">
        <div class="max-w-6xl mx-auto">
            <div class="test-card mb-8">
                <h1 class="text-3xl font-bold mb-2 flex items-center">
                    <i class="fas fa-vial mr-3 text-purple-600"></i>
                    Teste de Integração - Sistema de Planos de Ação
                </h1>
                <p class="text-gray-600 mb-6">Página dedicada para testar a integração entre AI Assistant, AI Concerns e Action Plan System</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Status dos Componentes -->
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="font-bold mb-3 text-gray-800">
                            <i class="fas fa-check-circle mr-2"></i>Status dos Componentes
                        </h3>
                        <div id="component-status">
                            <div class="mb-2">
                                <span class="status-indicator status-loading"></span>
                                <span>AI Assistant: </span>
                                <span id="status-assistant" class="font-mono">Verificando...</span>
                            </div>
                            <div class="mb-2">
                                <span class="status-indicator status-loading"></span>
                                <span>AI Concerns: </span>
                                <span id="status-concerns" class="font-mono">Verificando...</span>
                            </div>
                            <div class="mb-2">
                                <span class="status-indicator status-loading"></span>
                                <span>Action Plan System: </span>
                                <span id="status-actionplan" class="font-mono">Verificando...</span>
                            </div>
                            <div class="mb-2">
                                <span class="status-indicator status-loading"></span>
                                <span>Integration Module: </span>
                                <span id="status-integration" class="font-mono">Verificando...</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Controles de Teste -->
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="font-bold mb-3 text-gray-800">
                            <i class="fas fa-play-circle mr-2"></i>Controles de Teste
                        </h3>
                        <button onclick="testShowAssistant()" class="test-button w-full mb-2">
                            <i class="fas fa-robot mr-2"></i>Abrir Assistente com Alerta
                        </button>
                        <button onclick="testGeneratePlan()" class="test-button w-full mb-2">
                            <i class="fas fa-clipboard-list mr-2"></i>Gerar Plano de Ação
                        </button>
                        <button onclick="testCreateAlert()" class="test-button w-full mb-2">
                            <i class="fas fa-exclamation-triangle mr-2"></i>Criar Alerta de Teste
                        </button>
                        <button onclick="testFullIntegration()" class="test-button w-full">
                            <i class="fas fa-rocket mr-2"></i>Teste Completo
                        </button>
                    </div>
                </div>
                
                <!-- Área de Alertas de Teste -->
                <div class="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <h3 class="font-bold mb-3 text-gray-800">
                        <i class="fas fa-bell mr-2"></i>Alertas de Teste
                    </h3>
                    <div id="test-alerts" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Alertas serão adicionados aqui -->
                    </div>
                </div>
                
                <!-- Console de Saída -->
                <div class="mt-6">
                    <h3 class="font-bold mb-3 text-gray-800">
                        <i class="fas fa-terminal mr-2"></i>Console de Saída
                    </h3>
                    <div id="console-output" class="console-output">
                        <div>🚀 Sistema de teste iniciado...</div>
                        <div>Aguardando comandos...</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scripts -->
        <script src="/static/action-plan-system.js"><\/script>
        <script src="/static/action-plan-handlers.js"><\/script>
        <script src="/static/test-integration.js"><\/script>
        
        <script>
            // Função para adicionar log ao console
            function addLog(message, type = 'info') {
                const consoleDiv = document.getElementById('console-output');
                const timestamp = new Date().toLocaleTimeString();
                const colors = {
                    info: '#00ff00',
                    error: '#ff4444',
                    warning: '#ffaa00',
                    success: '#44ff44'
                };
                
                const logEntry = document.createElement('div');
                logEntry.style.color = colors[type] || colors.info;
                logEntry.innerHTML = \`[\${timestamp}] \${message}\`;
                consoleDiv.appendChild(logEntry);
                consoleDiv.scrollTop = consoleDiv.scrollHeight;
            }
            
            // Verifica status dos componentes
            function checkComponentStatus() {
                const components = [
                    { name: 'assistant', obj: window.aiAssistant },
                    { name: 'concerns', obj: window.aiConcerns },
                    { name: 'actionplan', obj: window.actionPlanSystem || window.ActionPlanSystem },
                    { name: 'integration', obj: window.actionPlanIntegration }
                ];
                
                components.forEach(comp => {
                    const statusEl = document.getElementById(\`status-\${comp.name}\`);
                    const indicatorEl = statusEl.parentElement.querySelector('.status-indicator');
                    
                    if (comp.obj) {
                        statusEl.textContent = 'Carregado ✓';
                        statusEl.style.color = '#4CAF50';
                        indicatorEl.className = 'status-indicator status-ok';
                        addLog(\`✅ \${comp.name} carregado com sucesso\`, 'success');
                    } else {
                        statusEl.textContent = 'Não encontrado ✗';
                        statusEl.style.color = '#f44336';
                        indicatorEl.className = 'status-indicator status-error';
                        addLog(\`❌ \${comp.name} não foi encontrado\`, 'error');
                    }
                });
            }
            
            // Testa abertura do assistente
            function testShowAssistant() {
                addLog('🤖 Abrindo assistente com mensagem de alerta...', 'info');
                
                if (window.actionPlanIntegration && window.actionPlanIntegration.showActionPlanAssistant) {
                    window.actionPlanIntegration.showActionPlanAssistant('test-alert-001');
                    addLog('✅ Assistente aberto com sucesso', 'success');
                } else {
                    addLog('❌ Função showActionPlanAssistant não encontrada', 'error');
                }
            }
            
            // Testa geração de plano
            function testGeneratePlan() {
                addLog('📋 Gerando plano de ação...', 'info');
                
                if (window.actionPlanIntegration && window.actionPlanIntegration.handleActionButtonClick) {
                    window.actionPlanIntegration.handleActionButtonClick('generate', 'test-alert-002');
                    addLog('✅ Plano de ação gerado', 'success');
                } else {
                    addLog('❌ Função handleActionButtonClick não encontrada', 'error');
                }
            }
            
            // Cria alerta de teste
            function testCreateAlert() {
                addLog('⚠️ Criando alerta de teste...', 'info');
                
                const alertsContainer = document.getElementById('test-alerts');
                const alertId = 'alert-' + Date.now();
                
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert-card';
                alertDiv.dataset.alertId = alertId;
                alertDiv.style.cssText = \`
                    padding: 15px;
                    background: linear-gradient(135deg, rgba(255,68,68,0.1) 0%, rgba(255,68,68,0.2) 100%);
                    border: 2px solid #ff4444;
                    border-radius: 10px;
                    cursor: pointer;
                \`;
                
                alertDiv.innerHTML = \`
                    <div style="color: #ff4444; font-weight: bold; margin-bottom: 5px;">
                        <i class="fas fa-exclamation-triangle mr-2"></i>Alerta de Alta Prioridade
                    </div>
                    <div style="color: #333; margin-bottom: 10px;">
                        Paciente ID: TEST-\${Math.floor(Math.random() * 1000)}<br>
                        Risco: Possível glosa de R$ \${(Math.random() * 50000).toFixed(2)}
                    </div>
                    <button onclick="window.aiConcerns && window.aiConcerns.showDetails && window.aiConcerns.showDetails('\${alertId}')" 
                            class="concern-detail-btn" 
                            style="
                                padding: 5px 10px;
                                background: #ff4444;
                                color: white;
                                border: none;
                                border-radius: 5px;
                                cursor: pointer;
                            ">
                        Ver Detalhes
                    </button>
                \`;
                
                alertsContainer.appendChild(alertDiv);
                addLog(\`✅ Alerta criado com ID: \${alertId}\`, 'success');
            }
            
            // Teste completo
            function testFullIntegration() {
                addLog('🚀 Iniciando teste completo de integração...', 'info');
                
                // 1. Verifica componentes
                checkComponentStatus();
                
                // 2. Cria alerta após 1 segundo
                setTimeout(() => {
                    testCreateAlert();
                }, 1000);
                
                // 3. Abre assistente após 2 segundos
                setTimeout(() => {
                    testShowAssistant();
                }, 2000);
                
                // 4. Gera plano após 4 segundos
                setTimeout(() => {
                    testGeneratePlan();
                }, 4000);
                
                addLog('✅ Sequência de teste iniciada', 'success');
            }
            
            // Verifica status ao carregar
            window.addEventListener('load', () => {
                setTimeout(() => {
                    checkComponentStatus();
                    addLog('🎯 Página de teste pronta para uso', 'success');
                }, 1000);
            });
            
            // Intercepta logs do console
            const originalLog = console.log;
            console.log = function(...args) {
                originalLog.apply(console, args);
                addLog(args.join(' '), 'info');
            };
        <\/script>
    </body>
    </html>
  `);var yt=Object.freeze,va=Object.defineProperty,ba=(e,t)=>yt(va(e,"raw",{value:yt(e.slice())})),wt;const b=new T;b.use("/api/*",Os());b.use("/static/*",Zt({root:"./public"}));b.use("/*.html",Zt({root:"./public"}));b.route("/api/patient",Me);b.route("/api/doctor",Re);b.route("/api/navigator",De);b.route("/api/financial",Le);b.route("/api/wellness",Oe);b.route("/api/research",he);b.route("/api/admin",ie);b.route("/api/ai",oe);b.route("/api/portal",Q);b.get("/portal/patient",Ws);b.get("/portal/doctor",Ys);b.get("/portal/navigator",ea);b.get("/portal/financial",aa);b.get("/portal/wellness",ra);b.get("/portal/research",da);b.get("/portal/admin-master",ma);b.get("/admin-master",xa);b.get("/test-integration",fa);b.get("/",e=>e.html(q(wt||(wt=ba([`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Plataforma Integrada da Jornada Oncológica com IA - ACCamargo Cancer Center</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <meta name="description" content="Plataforma Integrada de Gestão da Jornada Oncológica - ACCamargo Cancer Center">
        <meta name="author" content="ACCamargo Cancer Center">
        <meta property="og:title" content="ACCamargo - Plataforma Oncológica">
        <meta property="og:description" content="70 anos transformando o cuidado oncológico no Brasil">
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">

        <style>
            .glass-effect {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }
            .gradient-text {
                background: linear-gradient(135deg, #2B5F3F 0%, #3a8f5f 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .tech-card {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                cursor: pointer;
            }
            .tech-card:hover {
                transform: translateY(-10px) scale(1.05);
                box-shadow: 0 30px 60px -15px rgba(43, 95, 63, 0.3);
            }
            .module-card {
                background: linear-gradient(145deg, #ffffff 0%, #f9fafb 100%);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .module-card:hover {
                background: linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%);
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20 min-h-screen flex flex-col">
        <!-- Header com Logo Moderno -->
        <header class="glass-effect shadow-lg border-b border-gray-100">
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-12 h-12 mr-4 drop-shadow-md">
                        <div>
                            <h1 class="text-2xl font-bold gradient-text">Plataforma Integrada da Jornada Oncológica com IA</h1>
                            <p class="text-sm text-gray-600 font-medium">ACCamargo Cancer Center • "A Vida é muito maior que o Câncer"</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button class="text-gray-600 hover:text-green-600 transition-colors">
                            <i class="far fa-bell text-xl"></i>
                        </button>
                        <a href="/admin-master" class="flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1 rounded-full hover:from-green-700 hover:to-green-800 transition-all">
                            <i class="fas fa-user-shield text-sm mr-2"></i>
                            <span class="text-sm font-semibold">Master Admin</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8">
            <!-- Container Principal para Portais SPA -->
            <div id="main-container">
            <!-- Estatísticas da Plataforma (PRIMEIRO) - Design Moderno -->
            <div class="glass-effect rounded-2xl shadow-xl p-8 mb-10 border border-white/50">
                <div class="flex items-center justify-center mb-8">
                    <img src="/static/accamargo-icon.svg" alt="ACCamargo Logo" class="w-14 h-14 mr-4 drop-shadow-lg">
                    <h2 class="text-3xl font-bold text-gray-800">Estatísticas em Tempo Real</h2>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div class="text-center">
                        <div class="text-4xl font-bold gradient-text mb-2">
                            <span id="stat-patients">234</span>
                        </div>
                        <div class="text-gray-600 font-medium">Pacientes Ativos</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold gradient-text mb-2">
                            <span id="stat-navigation">178</span>
                        </div>
                        <div class="text-gray-600 font-medium">Em Navegação</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold gradient-text mb-2">
                            <span id="stat-appointments">56</span>
                        </div>
                        <div class="text-gray-600 font-medium">Consultas Hoje</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold gradient-text mb-2">
                            <span id="stat-adherence">87</span>%
                        </div>
                        <div class="text-gray-600 font-medium">Taxa de Adesão</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold gradient-text mb-2">
                            <span id="stat-savings">R$ 0.0M</span>
                        </div>
                        <div class="text-gray-600 font-medium">Glosas Evitadas</div>
                    </div>
                </div>
            </div>

            <!-- Módulos Grid - Design Moderno -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <!-- Paciente -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                            <i class="far fa-user text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Portal do Paciente</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Auto-triagem inteligente, agendamentos e acompanhamento personalizado</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="loadPortal('patient')" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('patient')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Médico -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg">
                            <i class="fas fa-user-md text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Portal Médico</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Assistente clínico com IA e gestão integrada de pacientes</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="loadPortal('doctor')" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('doctor')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Navegador -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg">
                            <i class="far fa-compass text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Navegador de Pacientes</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Coordenação e acompanhamento otimizado da jornada</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="loadPortal('navigator')" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('navigator')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Financeiro -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-lime-500 to-lime-600 shadow-lg">
                            <i class="fas fa-dollar-sign text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Gestão Financeira</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Prevenção inteligente de glosas e análise financeira com IA</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="loadPortal('financial')" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('financial')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Bem-Estar -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg">
                            <i class="far fa-heart text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Bem-Estar e Apoio</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Suporte psicológico e monitoramento emocional integrado</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="loadPortal('wellness')" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('wellness')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Pesquisa -->
                <div class="module-card rounded-2xl shadow-lg p-8 card-hover cursor-pointer border border-white/50" >
                    <div class="text-center">
                        <div class="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-green-700 shadow-lg">
                            <i class="fas fa-flask text-3xl text-white"></i>
                        </div>
                        <h2 class="text-xl font-bold mb-3 text-gray-800">Pesquisa Clínica</h2>
                        <p class="text-gray-600 mb-6 leading-relaxed">Análise avançada de dados e insights para pesquisa</p>
                        <div class="flex gap-2 justify-center items-center">
                            <button onclick="loadPortal('research')" class="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold">
                                Acessar
                            </button>
                            <button onclick="event.stopPropagation(); showPortalHelp('research')" class="portal-help-btn w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all hover:scale-110" title="Informações sobre este portal">
                                <i class="fas fa-question text-lg"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tecnologias Proprietárias - Blocos Navegáveis -->
            <div class="mb-12">
                <h2 class="text-3xl font-bold text-center mb-10 gradient-text">
                    <i class="fas fa-microchip mr-3"></i>
                    Tecnologias Proprietárias
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Motor de IA -->
                    <div class="tech-card glass-effect rounded-2xl p-8 border border-white/50 shadow-xl" onclick="window.location.href='/ai/engine'">
                        <div class="text-center">
                            <div class="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-xl">
                                <i class="fas fa-brain text-4xl text-white"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-gray-800">Motor de IA</h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">Inteligência artificial avançada para análise preditiva e suporte à decisão clínica</p>
                            <div class="flex justify-center space-x-2">
                                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Machine Learning</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">Deep Learning</span>
                            </div>
                        </div>
                    </div>

                    <!-- Servos Mecanismos -->
                    <div class="tech-card glass-effect rounded-2xl p-8 border border-white/50 shadow-xl" onclick="window.location.href='/ai/servos'">
                        <div class="text-center">
                            <div class="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl">
                                <i class="fas fa-cogs text-4xl text-white"></i>
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-gray-800">Servos Mecanismos</h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">Automação inteligente de processos hospitalares e tarefas rotineiras</p>
                            <div class="flex justify-center space-x-2">
                                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">RPA</span>
                                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">Automação</span>
                            </div>
                        </div>
                    </div>

                    <!-- Engenharia de Prompt -->
                    <div class="tech-card glass-effect rounded-2xl p-8 border border-white/50 shadow-xl" onclick="window.location.href='/ai/prompt'">
                        <div class="text-center">
                            <div class="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl">
                                <img src="/static/robot-auditor-icon.svg" alt="IA" class="w-12 h-12 filter brightness-0 invert">
                            </div>
                            <h3 class="text-xl font-bold mb-3 text-gray-800">Engenharia de Prompt</h3>
                            <p class="text-gray-600 mb-6 leading-relaxed">Otimização de interações com IA para resultados precisos e contextualizados</p>
                            <div class="flex justify-center space-x-2">
                                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">NLP</span>
                                <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">LLM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim do Container Principal -->
            </div>
        </main>

        <!-- Footer Institucional Moderno -->
        <footer class="footer-gradient text-white mt-12">
            <div class="container mx-auto px-4 py-10">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Coluna 1: ACCamargo Cancer Center (DESTAQUE) -->
                    <div class="md:col-span-1 order-1 md:order-1">
                        <div class="flex items-center mb-4">
                            <img src="/static/accamargo-icon-white.svg" alt="ACCamargo Logo" class="w-16 h-16 mr-4 drop-shadow-xl">
                            <h3 class="text-2xl font-bold">ACCamargo Cancer Center</h3>
                        </div>
                        <p class="text-base opacity-95 mb-3 font-medium">
                            70 anos transformando o cuidado oncológico no Brasil
                        </p>
                        <p class="text-sm opacity-90 mb-3">
                            <strong>Centro Integrado de Diagnóstico, Tratamento, Ensino e Pesquisa</strong>
                        </p>
                        <p class="text-sm opacity-85 leading-relaxed">
                            <i class="fas fa-hospital mr-2 text-green-300"></i>Instituição de Referência Nacional<br>
                            <i class="fas fa-award mr-2 text-green-300"></i>Acreditação Internacional<br>
                            <i class="fas fa-microscope mr-2 text-green-300"></i>Centro de Pesquisa Avançada<br>
                            <i class="fas fa-graduation-cap mr-2 text-green-300"></i>Formação de Especialistas
                        </p>
                        <div class="mt-4 pt-3 border-t border-white/20">
                            <p class="text-sm opacity-90">
                                <i class="fas fa-map-marker-alt mr-2"></i>São Paulo - SP<br>
                                <i class="fas fa-globe mr-2"></i><a href="https://accamargo.org.br" class="hover:text-green-300 transition-colors">accamargo.org.br</a>
                            </p>
                        </div>
                    </div>

                    <!-- Coluna 2: Parceria Tecnológica -->
                    <div class="md:col-span-1 order-3 md:order-2">
                        <h3 class="text-xl font-bold mb-4">Parceria Tecnológica</h3>
                        <p class="text-sm opacity-90 mb-3">
                            Plataforma desenvolvida em colaboração com:
                        </p>
                        <div class="mb-4">
                            <p class="text-base font-medium opacity-95 mb-2">Laura Technology</p>
                            <p class="text-sm opacity-80">
                                Especialista em IA para Saúde<br>
                                Geppetto Digital<br>
                                #borasalvarvidas<br>
                                CNPJ: 38.475.698/0001-74<br>
                                Curitiba - PR
                            </p>
                        </div>
                        <div class="text-sm opacity-80 space-y-1">
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Inteligência Artificial</p>
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Machine Learning</p>
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Análise Preditiva</p>
                            <p><i class="far fa-check-circle mr-2 text-green-300"></i>Automação de Processos</p>
                        </div>
                    </div>

                    <!-- Coluna 3: Informações Legais -->
                    <div class="md:col-span-1 order-2 md:order-3">
                        <h3 class="text-xl font-bold mb-4">Conformidade e Segurança</h3>
                        <ul class="text-sm opacity-90 space-y-2">
                            <li><i class="far fa-check-circle mr-2 text-green-300"></i>LGPD Compliant</li>
                            <li><i class="far fa-check-circle mr-2 text-green-300"></i>HIPAA Ready</li>
                            <li><i class="far fa-check-circle mr-2 text-green-300"></i>ISO 27001 Standards</li>
                            <li><i class="far fa-check-circle mr-2 text-green-300"></i>Criptografia AES-256</li>
                        </ul>
                        <div class="mt-6">
                            <a href="#" class="text-sm opacity-80 hover:opacity-100 mr-4 transition-opacity">Termos de Uso</a>
                            <a href="#" class="text-sm opacity-80 hover:opacity-100 mr-4 transition-opacity">Privacidade</a>
                            <a href="#" class="text-sm opacity-80 hover:opacity-100 transition-opacity">Cookies</a>
                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="border-t border-white/20 mt-8 pt-6 text-center">
                    <p class="text-sm opacity-90">
                        © 2024 ACCamargo Cancer Center. Todos os direitos reservados.
                        <br><span class="text-xs opacity-75">Tecnologia desenvolvida em parceria com Laura Technology LTDA</span>
                    </p>
                    <p class="text-xs opacity-75 mt-2">
                        Desenvolvido com Amor <i class="far fa-heart text-green-300"></i> para Impactar 1 Bilhão de Vidas
                    </p>
                    <p class="text-xs opacity-60 mt-2">
                        Versão 1.0.0 | Última atualização: `,`
                    </p>
                </div>
            </div>
        </footer>

        <link href="/static/kanban-styles.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>
        <script src="/static/app.js"><\/script>
        <script src="/static/portal-loader.js"><\/script>
        <script src="/static/ai-concerns.js"><\/script>
        <script src="/static/kanban-functions.js"><\/script>
        <script src="/static/navigator-views.js"><\/script>
        <script src="/static/navigator-views-extended.js"><\/script>
        <script src="/static/navigator-integration.js"><\/script>
        <script>
            // Função para mostrar ajuda do portal
            function showPortalHelp(portalType) {
                const helpTexts = {
                    patient: 'Portal do Paciente: Acesse seus exames, consultas, medicamentos e acompanhe sua jornada de tratamento.',
                    doctor: 'Portal Médico: Gerencie pacientes, prescrições, protocolos e utilize IA para suporte à decisão clínica.',
                    navigator: 'Navegador de Pacientes: Coordene jornadas, agende consultas e acompanhe a evolução dos pacientes.',
                    financial: 'Gestão Financeira: Previna glosas, analise custos e otimize o faturamento com inteligência artificial.',
                    wellness: 'Bem-Estar e Apoio: Acesse recursos de apoio psicológico, grupos de suporte e práticas integrativas.',
                    research: 'Pesquisa Clínica: Gerencie estudos, analise dados e acompanhe publicações científicas.'
                };
                
                alert(helpTexts[portalType] || 'Informações sobre este portal.');
            }
            
            // Animate statistics with smooth easing
            document.addEventListener('DOMContentLoaded', () => {
                const animateCounter = (element, target) => {
                    let current = 0;
                    const increment = target / 60;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        element.textContent = Math.floor(current);
                    }, 25);
                };

                setTimeout(() => {
                    animateCounter(document.getElementById('stat-patients'), 234);
                    animateCounter(document.getElementById('stat-navigation'), 178);
                    animateCounter(document.getElementById('stat-appointments'), 56);
                    animateCounter(document.getElementById('stat-adherence'), 87);
                    // Animar valor monetário das glosas
                    const savingsElement = document.getElementById('stat-savings');
                    let currentSavings = 0;
                    const targetSavings = 2.4;
                    const savingsTimer = setInterval(() => {
                        currentSavings += targetSavings / 60;
                        if (currentSavings >= targetSavings) {
                            currentSavings = targetSavings;
                            clearInterval(savingsTimer);
                        }
                        savingsElement.textContent = 'R$ ' + currentSavings.toFixed(1) + 'M';
                    }, 25);
                }, 500);
            });
        <\/script>
    <script src="/static/portal-helpers.js"><\/script>
    <script src="/static/portal-functions.js"><\/script>
    <script src="/static/action-plan-system.js"><\/script>
    <script src="/static/action-plan-handlers.js"><\/script>
    </body>
    </html>
  `])),new Date().toLocaleDateString("pt-BR"))));b.get("/api/health",e=>e.json({status:"healthy",service:"Plataforma Oncológica",version:"1.0.0",timestamp:new Date().toISOString()}));b.get("/test-navigator",e=>e.html(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste Portal Navegador Integrado</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">
            <i class="fas fa-vial text-teal-600 mr-2"></i>
            Teste do Portal do Navegador Integrado
        </h1>
        
        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 class="text-xl font-semibold mb-4">✅ Sistema 100% Funcional</h2>
            <p class="text-gray-700 mb-4">
                O Portal do Navegador agora está totalmente integrado com a View Universal do Paciente.
                Todas as funcionalidades foram implementadas diretamente no código do portal.
            </p>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
                <li>Clique no botão abaixo para acessar o Portal do Navegador</li>
                <li>No Trilho de Atendimentos (Kanban), clique em qualquer card de paciente</li>
                <li>A View Universal abrirá com 6 abas: Visão Geral, Contatar, Agendar, Jornada, Checklist e IA Laura</li>
            </ol>
        </div>
        
        <div class="text-center space-y-4">
            <a href="/#navigator" class="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition text-lg font-semibold">
                <i class="fas fa-compass mr-2"></i>
                Abrir Portal do Navegador
            </a>
            
            <div class="text-sm text-gray-600">
                <p>Ou acesse diretamente: <a href="https://3000-is0o3lqkacvyzl4g7t2eu-6532622b.e2b.dev#navigator" class="text-blue-600 hover:underline" target="_blank">
                    Portal do Navegador
                </a></p>
            </div>
        </div>
    </div>
</body>
</html>`));b.get("/test-portal-functions",e=>e.html(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste Portal Functions</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
        <h1 class="text-2xl font-bold mb-6">Teste de Carregamento das Funções do Portal</h1>
        
        <div class="bg-white rounded-lg shadow p-6 mb-4">
            <h2 class="text-lg font-semibold mb-4">Status dos Scripts</h2>
            <div id="status-container" class="space-y-2">
                <p>Carregando...</p>
            </div>
        </div>
        
        <div class="bg-white rounded-lg shadow p-6 mb-4">
            <h2 class="text-lg font-semibold mb-4">Teste de Abertura da View</h2>
            <button onclick="testOpenView()" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                <i class="fas fa-user-md mr-2"></i>
                Abrir View Universal do Paciente
            </button>
        </div>
        
        <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-lg font-semibold mb-4">Console Log</h2>
            <div id="console-log" class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm h-64 overflow-y-auto">
                <p>Console iniciado...</p>
            </div>
        </div>
    </div>
    
    <!-- Carregar scripts necessários -->
    <script src="/static/patient-view-universal.js"><\/script>
    <script src="/static/navigator-views.js"><\/script>
    <script src="/static/navigator-views-extended.js"><\/script>
    <script src="/static/portal-loader.js"><\/script>
    
    <script>
        // Função de log customizada
        function log(message, type = 'info') {
            const consoleDiv = document.getElementById('console-log');
            const timestamp = new Date().toLocaleTimeString();
            const color = type === 'error' ? 'text-red-400' : 
                         type === 'success' ? 'text-green-400' : 
                         'text-yellow-400';
            
            const p = document.createElement('p');
            p.className = color;
            p.textContent = \`[\${timestamp}] \${message}\`;
            consoleDiv.appendChild(p);
            consoleDiv.scrollTop = consoleDiv.scrollHeight;
            
            // Também logar no console real
            console.log(message);
        }
        
        // Verificar status dos scripts
        function checkScriptStatus() {
            const statusDiv = document.getElementById('status-container');
            let html = '';
            
            const functions = [
                { name: 'openPatientUniversalView', desc: 'View Universal do Paciente' },
                { name: 'renderPatientUniversalView', desc: 'Renderizar View Universal' },
                { name: 'renderContatarView', desc: 'View Contatar' },
                { name: 'renderAgendarView', desc: 'View Agendar' },
                { name: 'renderJornadaView', desc: 'View Jornada' },
                { name: 'renderChecklistView', desc: 'View Checklist' },
                { name: 'loadPortal', desc: 'Portal Loader' }
            ];
            
            functions.forEach(func => {
                const exists = typeof window[func.name] === 'function';
                const icon = exists ? '✅' : '❌';
                const color = exists ? 'text-green-600' : 'text-red-600';
                
                html += \`
                    <div class="flex items-center justify-between p-2 border rounded">
                        <span>\${func.desc}</span>
                        <span class="\${color} font-bold">\${icon} \${func.name}</span>
                    </div>
                \`;
                
                log(\`Função \${func.name}: \${exists ? 'DISPONÍVEL' : 'NÃO ENCONTRADA'}\`, exists ? 'success' : 'error');
            });
            
            statusDiv.innerHTML = html;
        }
        
        // Testar abertura da view
        function testOpenView() {
            log('Tentando abrir View Universal do Paciente...', 'info');
            
            if (typeof window.openPatientUniversalView === 'function') {
                try {
                    window.openPatientUniversalView('PAC-001', 'navigator');
                    log('View aberta com sucesso!', 'success');
                } catch (error) {
                    log('Erro ao abrir view: ' + error.message, 'error');
                }
            } else {
                log('Função openPatientUniversalView não está disponível!', 'error');
            }
        }
        
        // Executar verificação ao carregar
        window.addEventListener('load', () => {
            log('Página carregada, verificando scripts...', 'info');
            setTimeout(checkScriptStatus, 1000);
        });
        
        // Interceptar erros globais
        window.addEventListener('error', (e) => {
            log(\`ERRO GLOBAL: \${e.message}\`, 'error');
        });
    <\/script>
</body>
</html>`));b.get("/test-patient-view",e=>e.html(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste - View Universal do Paciente</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center">🧪 Teste da View Universal do Paciente</h1>
        
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <p class="mb-4 text-gray-600">Clique no botão abaixo para testar a view completa do paciente:</p>
            
            <button onclick="testarView()" class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold">
                <i class="fas fa-user-circle mr-2"></i>
                Abrir View Completa do Paciente
            </button>
            
            <div id="status" class="mt-4 text-sm text-gray-600"></div>
        </div>
        
        <div id="resultado" class="mt-8"></div>
    </div>

    <!-- Modal Container -->
    <div id="patient-universal-modal" class="fixed inset-0 z-50 overflow-y-auto" style="display: none;"></div>

    <script src="/static/patient-view-universal.js"><\/script>
    
    <script>
        function testarView() {
            const statusDiv = document.getElementById('status');
            statusDiv.innerHTML = 'Carregando view...';
            
            try {
                // Tentar abrir usando a função modal
                if (typeof openPatientUniversalView === 'function') {
                    statusDiv.innerHTML = '✅ Abrindo view em modal...';
                    openPatientUniversalView('PAC-TEST-001', 'test');
                } 
                // Se não existir, renderizar diretamente
                else if (typeof renderPatientUniversalView === 'function') {
                    statusDiv.innerHTML = '✅ Renderizando view...';
                    const modal = document.getElementById('patient-universal-modal');
                    modal.innerHTML = renderPatientUniversalView('PAC-TEST-001', 'test');
                    modal.style.display = 'block';
                    modal.style.overflow = 'auto';
                } 
                else {
                    statusDiv.innerHTML = '❌ Erro: Funções não encontradas';
                }
            } catch (error) {
                statusDiv.innerHTML = '❌ Erro: ' + error.message;
                console.error(error);
            }
        }
        
        // Verificação inicial
        document.addEventListener('DOMContentLoaded', function() {
            const statusDiv = document.getElementById('status');
            if (typeof renderPatientUniversalView === 'function') {
                statusDiv.innerHTML = '✅ Script carregado com sucesso!';
            } else {
                statusDiv.innerHTML = '⚠️ Aguardando carregamento do script...';
            }
        });
    <\/script>
</body>
</html>`));b.get("/demo-navigator",e=>e.html(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Demo Navigator - FUNCIONANDO!</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 p-8">
    <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold mb-8 text-center text-red-600">
            🚀 TESTE REAL - CLIQUE NOS BOTÕES ABAIXO
        </h1>
        
        <div class="grid grid-cols-2 gap-4 mb-8">
            <button onclick="mostrarContatar()" class="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 text-xl">
                <i class="fas fa-address-book mr-2"></i>
                CONTATAR
            </button>
            
            <button onclick="mostrarAgendar()" class="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 text-xl">
                <i class="fas fa-calendar mr-2"></i>
                AGENDAR
            </button>
            
            <button onclick="mostrarJornada()" class="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 text-xl">
                <i class="fas fa-route mr-2"></i>
                JORNADA
            </button>
            
            <button onclick="mostrarChecklist()" class="bg-indigo-500 text-white p-4 rounded-lg hover:bg-indigo-600 text-xl">
                <i class="fas fa-clipboard-check mr-2"></i>
                CHECKLIST
            </button>
        </div>
        
        <div id="content" class="bg-white rounded-lg shadow-lg min-h-[400px]"></div>
    </div>

    <script src="/static/navigator-views.js"><\/script>
    <script src="/static/navigator-views-extended.js"><\/script>
    
    <script>
        console.log('Scripts carregados!');
        
        function mostrarContatar() {
            console.log('Mostrando Contatar...');
            document.getElementById('content').innerHTML = renderContatarView('PAC-001');
        }
        
        function mostrarAgendar() {
            console.log('Mostrando Agendar...');
            document.getElementById('content').innerHTML = renderAgendarView('PAC-001');
        }
        
        function mostrarJornada() {
            console.log('Mostrando Jornada...');
            document.getElementById('content').innerHTML = renderJornadaView('PAC-001');
        }
        
        function mostrarChecklist() {
            console.log('Mostrando Checklist...');
            document.getElementById('content').innerHTML = renderChecklistView('PAC-001');
        }
        
        window.closeModal = function() {
            document.getElementById('content').innerHTML = '<p class="p-8 text-center text-gray-500">Clique em um botão acima para testar</p>';
        }
        
        // Mensagem inicial
        document.getElementById('content').innerHTML = '<p class="p-8 text-center text-2xl text-gray-600">👆 Clique em um dos botões acima para testar as funcionalidades</p>';
    <\/script>
</body>
</html>`));const Ct=new T,ha=Object.assign({"/src/index.tsx":b});let Xt=!1;for(const[,e]of Object.entries(ha))e&&(Ct.all("*",t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Ct.notFound(t=>{let s;try{s=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,s)}),Xt=!0);if(!Xt)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ct as default};
