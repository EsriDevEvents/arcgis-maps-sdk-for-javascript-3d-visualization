import{S as p,e as o,y as h,a as u}from"./jsonMap-ffa742d3.js";import{s as c}from"./Error-5cdd6e0a.js";import{x as d,g}from"./promiseUtils-5940888c.js";import"./ArrayPool-b51874dd.js";import"./typedArrayUtil-bf9f210a.js";import{j as v}from"./Collection-74ae958a.js";import"./string-53224faa.js";const a=new v,n=new WeakMap;function y(e){l(e)&&a.push(e)}function I(e){l(e)&&a.includes(e)&&a.remove(e)}function l(e){return e!=null&&typeof e=="object"&&"refreshInterval"in e&&"refresh"in e}function m(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:m(r,e%r):0}let f=0,i=0;function b(){const e=Date.now();for(const r of a)r.refreshInterval&&e-(n.get(r)??0)+5>=6e4*r.refreshInterval&&(n.set(r,e),r.refresh(e))}p(()=>{const e=Date.now();let r=0;for(const t of a)r=m(Math.round(6e4*t.refreshInterval),r),t.refreshInterval?n.get(t)||n.set(t,e):n.delete(t);if(r!==i){if(i=r,clearInterval(f),i===0)return void(f=0);f=setInterval(b,i)}});function _(e){return e!=null&&typeof e=="object"&&"refreshTimestamp"in e&&"refresh"in e}const N=e=>{let r=class extends e{constructor(...t){super(...t),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=d(()=>this.hasDataChanged()),this.when().then(()=>{y(this)},()=>{})}destroy(){I(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(t=Date.now()){g(this._debounceHasDataChanged()).then(s=>{s&&this._set("refreshTimestamp",t),this.emit("refresh",{dataChanged:s})},s=>{c.getLogger(this.declaredClass).error(s),this.emit("refresh",{dataChanged:!1,error:s})})}async hasDataChanged(){return!0}};return o([h({type:Number,cast:t=>t>=.1?t:t<=0?0:.1,json:{write:!0}})],r.prototype,"refreshInterval",void 0),o([h({readOnly:!0})],r.prototype,"refreshTimestamp",void 0),o([h()],r.prototype,"refreshParameters",null),r=o([u("esri.layers.mixins.RefreshableLayer")],r),r};export{_ as n,N as p};
