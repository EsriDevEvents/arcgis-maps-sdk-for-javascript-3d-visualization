import{a}from"./Error-5cdd6e0a.js";import{A as h}from"./promiseUtils-5940888c.js";import{g as f,l as _}from"./locale-fe7cc1d0.js";const d=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,m={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function l(n){return m[n]??!1}const o=[],s=new Map;function c(n){for(const t of s.keys())u(n.pattern,t)&&s.delete(t)}function v(n){return o.includes(n)||(c(n),o.unshift(n)),{remove(){const t=o.indexOf(n);t>-1&&(o.splice(t,1),c(n))}}}async function z(n){const t=_();s.has(n)||s.set(n,p(n,t));const e=s.get(n);return e&&await g.add(e),e}function L(n){if(!d.test(n))return null;const t=d.exec(n);if(t===null)return null;const[,e,r]=t,i=e+(r?"-"+r.toUpperCase():"");return l(i)?i:l(e)?e:null}async function p(n,t){const e=[];for(const r of o)if(u(r.pattern,n))try{return await r.fetchMessageBundle(n,t)}catch(i){e.push(i)}throw e.length?new a("intl:message-bundle-error",`Errors occurred while loading "${n}"`,{errors:e}):new a("intl:no-message-bundle-loader",`No loader found for message bundle "${n}"`)}function u(n,t){return typeof n=="string"?t.startsWith(n):n.test(t)}f(()=>{s.clear()});const g=new class{constructor(){this._numLoading=0,this._dfd=null}async waitForAll(){this._dfd&&await this._dfd.promise}add(n){return this._increase(),n.then(()=>this._decrease(),()=>this._decrease()),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=h())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&this._numLoading===0&&(this._dfd.resolve(),this._dfd=null)}};export{L as h,v as l,z as u};
