import{r as T,t as f}from"./typedArrayUtil-bf9f210a.js";import{w as G,$ as S,L as Y,N as k}from"./Extent-22afa84a.js";import{e as C}from"./mat3f64-50f3b9f6.js";import{P as V,h as z,c as Z,C as D,B as H,f as J}from"./mat4-f0dc8788.js";import{e as y,o as U}from"./mat4f64-abdda1bb.js";import{g as P}from"./mat3-4fd89d48.js";import{Z as B,x as W}from"./projection-4ac247db.js";import{c as O}from"./spatialReferenceEllipsoidUtils-88aa82c4.js";import{e as u,y as g,a as K,l as Q}from"./jsonMap-ffa742d3.js";import"./ArrayPool-b51874dd.js";import{v as X}from"./quat-77a0169c.js";import{e as tt}from"./quatf64-f8f1c132.js";import{n as R,r as rt,O as E,F as nt,t as w}from"./vec3-8818fe1c.js";import{a as N,x as ot,g as et,R as at,h as it,L as lt,M as st,j as ct,k as pt,O as ut,v as gt,V as ft}from"./projection-03824933.js";import{T as h,i as m}from"./BufferView-b402c7a7.js";import{t as A,e as ht,r as $}from"./vec33-ca555933.js";var v;let p=v=class extends Q{constructor(t){super(t),this.origin=R(),this.translation=R(),this.rotation=N(),this.scale=rt(1,1,1),this.geographic=!0}get localMatrix(){const t=y();return X(b,et(this.rotation),ot(this.rotation)),V(t,b,this.translation,this.scale),t}get localMatrixInverse(){return z(y(),this.localMatrix)}applyLocal(t,r){return E(r,t,this.localMatrix)}applyLocalInverse(t,r){return E(r,t,this.localMatrixInverse)}project(t,r){const n=new Float64Array(t.length),o=h.fromTypedArray(n),e=h.fromTypedArray(t);if(this.geographic){const l=O(r),c=y();return B(r,this.origin,c,l),Z(c,c,this.localMatrix),A(o,e,c),W(n,l,0,n,r,0,n.length/3),n}const{localMatrix:a,origin:i}=this;D(a,U)?ht(o,e):A(o,e,a);for(let l=0;l<n.length;l+=3)n[l+0]+=i[0],n[l+1]+=i[1],n[l+2]+=i[2];return n}getOriginPoint(t){const[r,n,o]=this.origin;return new G({x:r,y:n,z:o,spatialReference:t})}equals(t){return T(t)&&this.geographic===t.geographic&&nt(this.origin,t.origin)&&H(this.localMatrix,t.localMatrix)}clone(){const t={origin:w(this.origin),translation:w(this.translation),rotation:N(this.rotation),scale:w(this.scale),geographic:this.geographic};return new v(t)}};u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"origin",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"translation",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),u([g({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),u([g({type:Boolean,nonNullable:!0,json:{write:!0}})],p.prototype,"geographic",void 0),u([g()],p.prototype,"localMatrix",null),u([g()],p.prototype,"localMatrixInverse",null),p=v=u([K("esri.geometry.support.MeshTransform")],p);const b=tt(),mt=p;function d(t,r){return t.isGeographic||t.isWebMercator&&((r==null?void 0:r.geographic)??!0)}function j(t,r,n){return d(r.spatialReference,n)?$t(t,r,n):At(t,r,n)}function yt(t,r,n){const{position:o,normal:e,tangent:a}=t;if(f(r))return{position:o,normal:e,tangent:a};const i=r.localMatrix;return j({position:ut(o,new Float64Array(o.length),i),normal:T(e)?gt(e,new Float32Array(e.length),i):null,tangent:T(a)?ft(a,new Float32Array(a.length),i):null},r.getOriginPoint(n),{geographic:r.geographic})}function Vt(t,r,n){if(n!=null&&n.useTransform){const{position:o,normal:e,tangent:a}=t;return{vertexAttributes:{position:o,normal:e,tangent:a},transform:new mt({origin:[r.x,r.y,r.z??0],geographic:d(r.spatialReference,n)})}}return{vertexAttributes:j(t,r,n),transform:null}}function L(t,r,n){return d(r.spatialReference,n)?vt(t,r,n):_(t,r,n)}function Zt(t,r,n,o){if(f(r))return L(t,n,o);const e=yt(t,r,n.spatialReference);return n.equals(r.getOriginPoint(n.spatialReference))?_(e,n,o):L(e,n,o)}function At(t,r,n){const o=new Float64Array(t.position.length),e=t.position,a=r.x,i=r.y,l=r.z||0,{horizontal:c,vertical:x}=F(n?n.unit:null,r.spatialReference);for(let s=0;s<e.length;s+=3)o[s+0]=e[s+0]*c+a,o[s+1]=e[s+1]*c+i,o[s+2]=e[s+2]*x+l;return{position:o,normal:t.normal,tangent:t.tangent}}function $t(t,r,n){const o=r.spatialReference,e=I(r,n,M),a=new Float64Array(t.position.length),i=xt(t.position,e,o,a),l=P(q,e);return{position:i,normal:wt(i,a,t.normal,l,o),tangent:Tt(i,a,t.tangent,l,o)}}function xt(t,r,n,o){A(h.fromTypedArray(o),h.fromTypedArray(t),r);const e=new Float64Array(t.length);return at(o,e,n)}function wt(t,r,n,o,e){if(f(n))return null;const a=new Float32Array(n.length);return $(m.fromTypedArray(a),m.fromTypedArray(n),o),it(a,t,r,e,a),a}function Tt(t,r,n,o,e){if(f(n))return null;const a=new Float32Array(n.length);$(m.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),m.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),o);for(let i=3;i<a.length;i+=4)a[i]=n[i];return lt(a,t,r,e,a),a}function _(t,r,n){const o=new Float64Array(t.position.length),e=t.position,a=r.x,i=r.y,l=r.z||0,{horizontal:c,vertical:x}=F(n?n.unit:null,r.spatialReference);for(let s=0;s<e.length;s+=3)o[s+0]=(e[s+0]-a)/c,o[s+1]=(e[s+1]-i)/c,o[s+2]=(e[s+2]-l)/x;return{position:o,normal:t.normal,tangent:t.tangent}}function vt(t,r,n){const o=r.spatialReference;I(r,n,M);const e=z(Rt,M),a=new Float64Array(t.position.length),i=Mt(t.position,o,e,a),l=P(q,e);return{position:i,normal:dt(t.normal,t.position,a,o,l),tangent:Ft(t.tangent,t.position,a,o,l)}}function I(t,r,n){B(t.spatialReference,[t.x,t.y,t.z||0],n,O(t.spatialReference));const{horizontal:o,vertical:e}=F(r?r.unit:null,t.spatialReference);return J(n,n,[o,o,e]),n}function Mt(t,r,n,o){const e=st(t,r,o),a=h.fromTypedArray(e),i=new Float64Array(e.length),l=h.fromTypedArray(i);return A(l,a,n),i}function dt(t,r,n,o,e){if(f(t))return null;const a=ct(t,r,n,o,new Float32Array(t.length)),i=m.fromTypedArray(a);return $(i,i,e),a}function Ft(t,r,n,o,e){if(f(t))return null;const a=pt(t,r,n,o,new Float32Array(t.length)),i=m.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return $(i,i,e),a}function F(t,r){if(f(t))return Et;const n=r.isGeographic?1:S(r),o=r.isGeographic?1:Y(r),e=k(1,t,"meters");return{horizontal:e*n,vertical:e*o}}const M=y(),Rt=y(),q=C(),Et={horizontal:1,vertical:1};export{mt as L,Zt as M,Vt as _,L as b,yt as k,d as r,j as x};
