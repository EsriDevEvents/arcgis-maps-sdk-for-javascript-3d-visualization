import{a as v,n as y}from"./common-d0b63c2d.js";function _(r,o){return r[0]=o[0],r[1]=o[1],r[2]=o[2],r[3]=o[3],r}function j(r,o,u,e,s){return r[0]=o,r[1]=u,r[2]=e,r[3]=s,r}function w(r,o,u){return r[0]=o[0]+u[0],r[1]=o[1]+u[1],r[2]=o[2]+u[2],r[3]=o[3]+u[3],r}function d(r,o,u){return r[0]=o[0]-u[0],r[1]=o[1]-u[1],r[2]=o[2]-u[2],r[3]=o[3]-u[3],r}function m(r,o,u){return r[0]=o[0]*u[0],r[1]=o[1]*u[1],r[2]=o[2]*u[2],r[3]=o[3]*u[3],r}function b(r,o,u){return r[0]=o[0]/u[0],r[1]=o[1]/u[1],r[2]=o[2]/u[2],r[3]=o[3]/u[3],r}function z(r,o){return r[0]=Math.ceil(o[0]),r[1]=Math.ceil(o[1]),r[2]=Math.ceil(o[2]),r[3]=Math.ceil(o[3]),r}function A(r,o){return r[0]=Math.floor(o[0]),r[1]=Math.floor(o[1]),r[2]=Math.floor(o[2]),r[3]=Math.floor(o[3]),r}function D(r,o,u){return r[0]=Math.min(o[0],u[0]),r[1]=Math.min(o[1],u[1]),r[2]=Math.min(o[2],u[2]),r[3]=Math.min(o[3],u[3]),r}function L(r,o,u){return r[0]=Math.max(o[0],u[0]),r[1]=Math.max(o[1],u[1]),r[2]=Math.max(o[2],u[2]),r[3]=Math.max(o[3],u[3]),r}function O(r,o){return r[0]=Math.round(o[0]),r[1]=Math.round(o[1]),r[2]=Math.round(o[2]),r[3]=Math.round(o[3]),r}function S(r,o,u){return r[0]=o[0]*u,r[1]=o[1]*u,r[2]=o[2]*u,r[3]=o[3]*u,r}function E(r,o,u,e){return r[0]=o[0]+u[0]*e,r[1]=o[1]+u[1]*e,r[2]=o[2]+u[2]*e,r[3]=o[3]+u[3]*e,r}function x(r,o){const u=o[0]-r[0],e=o[1]-r[1],s=o[2]-r[2],c=o[3]-r[3];return Math.sqrt(u*u+e*e+s*s+c*c)}function q(r,o){const u=o[0]-r[0],e=o[1]-r[1],s=o[2]-r[2],c=o[3]-r[3];return u*u+e*e+s*s+c*c}function p(r){const o=r[0],u=r[1],e=r[2],s=r[3];return Math.sqrt(o*o+u*u+e*e+s*s)}function g(r){const o=r[0],u=r[1],e=r[2],s=r[3];return o*o+u*u+e*e+s*s}function $(r,o){return r[0]=-o[0],r[1]=-o[1],r[2]=-o[2],r[3]=-o[3],r}function k(r,o){return r[0]=1/o[0],r[1]=1/o[1],r[2]=1/o[2],r[3]=1/o[3],r}function B(r,o){const u=o[0],e=o[1],s=o[2],c=o[3];let i=u*u+e*e+s*s+c*c;return i>0&&(i=1/Math.sqrt(i),r[0]=u*i,r[1]=e*i,r[2]=s*i,r[3]=c*i),r}function C(r,o){return r[0]*o[0]+r[1]*o[1]+r[2]*o[2]+r[3]*o[3]}function F(r,o,u,e){const s=o[0],c=o[1],i=o[2],n=o[3];return r[0]=s+e*(u[0]-s),r[1]=c+e*(u[1]-c),r[2]=i+e*(u[2]-i),r[3]=n+e*(u[3]-n),r}function G(r,o){const u=y;let e,s,c,i,n,h;o=o||1;do e=2*u()-1,s=2*u()-1,n=e*e+s*s;while(n>=1);do c=2*u()-1,i=2*u()-1,h=c*c+i*i;while(h>=1);const M=Math.sqrt((1-n)/h);return r[0]=o*e,r[1]=o*s,r[2]=o*c*M,r[3]=o*i*M,r}function P(r,o,u){const e=o[0],s=o[1],c=o[2],i=o[3];return r[0]=u[0]*e+u[4]*s+u[8]*c+u[12]*i,r[1]=u[1]*e+u[5]*s+u[9]*c+u[13]*i,r[2]=u[2]*e+u[6]*s+u[10]*c+u[14]*i,r[3]=u[3]*e+u[7]*s+u[11]*c+u[15]*i,r}function Q(r,o,u){const e=o[0],s=o[1],c=o[2],i=u[0],n=u[1],h=u[2],M=u[3],f=M*e+n*c-h*s,t=M*s+h*e-i*c,a=M*c+i*s-n*e,l=-i*e-n*s-h*c;return r[0]=f*M+l*-i+t*-h-a*-n,r[1]=t*M+l*-n+a*-i-f*-h,r[2]=a*M+l*-h+f*-n-t*-i,r[3]=o[3],r}function T(r){return"vec4("+r[0]+", "+r[1]+", "+r[2]+", "+r[3]+")"}function H(r,o){return r[0]===o[0]&&r[1]===o[1]&&r[2]===o[2]&&r[3]===o[3]}function I(r,o){const u=r[0],e=r[1],s=r[2],c=r[3],i=o[0],n=o[1],h=o[2],M=o[3],f=v();return Math.abs(u-i)<=f*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(e-n)<=f*Math.max(1,Math.abs(e),Math.abs(n))&&Math.abs(s-h)<=f*Math.max(1,Math.abs(s),Math.abs(h))&&Math.abs(c-M)<=f*Math.max(1,Math.abs(c),Math.abs(M))}const J=d,K=m,N=b,R=x,U=q,V=p,W=g,Y=Object.freeze(Object.defineProperty({__proto__:null,add:w,ceil:z,copy:_,dist:R,distance:x,div:N,divide:b,dot:C,equals:I,exactEquals:H,floor:A,inverse:k,len:V,length:p,lerp:F,max:L,min:D,mul:K,multiply:m,negate:$,normalize:B,random:G,round:O,scale:S,scaleAndAdd:E,set:j,sqrDist:U,sqrLen:W,squaredDistance:q,squaredLength:g,str:T,sub:J,subtract:d,transformMat4:P,transformQuat:Q},Symbol.toStringTag,{value:"Module"}));export{H as D,I as E,Y as G,_ as a,q as b,F as j,S as l,g as q,j as r,w as s,B as v,P as w,p as x,C as y};
