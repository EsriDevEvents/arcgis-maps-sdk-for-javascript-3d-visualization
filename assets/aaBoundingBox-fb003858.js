import{t as l}from"./typedArrayUtil-bf9f210a.js";import{e as p}from"./Extent-22afa84a.js";import{u as E}from"./aaBoundingRect-2fb32e32.js";function N(i=Y){return[i[0],i[1],i[2],i[3],i[4],i[5]]}function g(i,u,e,a,t,r,o=N()){return o[0]=i,o[1]=u,o[2]=e,o[3]=a,o[4]=t,o[5]=r,o}function w(i,u){const e=isFinite(i[2])||isFinite(i[5]);return new p(e?{xmin:i[0],xmax:i[3],ymin:i[1],ymax:i[4],zmin:i[2],zmax:i[5],spatialReference:u}:{xmin:i[0],xmax:i[3],ymin:i[1],ymax:i[4],spatialReference:u})}function z(i,u){i[0]=Math.min(i[0],u[0]),i[1]=Math.min(i[1],u[1]),i[2]=Math.min(i[2],u[2]),i[3]=Math.max(i[3],u[3]),i[4]=Math.max(i[4],u[4]),i[5]=Math.max(i[5],u[5])}function G(i,u){i[0]=Math.min(i[0],u[0]),i[1]=Math.min(i[1],u[1]),i[3]=Math.max(i[3],u[2]),i[4]=Math.max(i[4],u[3])}function O(i,u){i[0]=Math.min(i[0],u[0]),i[1]=Math.min(i[1],u[1]),i[2]=Math.min(i[2],u[2]),i[3]=Math.max(i[3],u[0]),i[4]=Math.max(i[4],u[1]),i[5]=Math.max(i[5],u[2])}function P(i,u,e=0,a=u.length/3){let t=i[0],r=i[1],o=i[2],h=i[3],c=i[4],M=i[5];for(let m=0;m<a;m++)t=Math.min(t,u[e+3*m]),r=Math.min(r,u[e+3*m+1]),o=Math.min(o,u[e+3*m+2]),h=Math.max(h,u[e+3*m]),c=Math.max(c,u[e+3*m+1]),M=Math.max(M,u[e+3*m+2]);i[0]=t,i[1]=r,i[2]=o,i[3]=h,i[4]=c,i[5]=M}function q(i,u,e){const a=u.length;let t=i[0],r=i[1],o=i[2],h=i[3],c=i[4],M=i[5];if(e)for(let m=0;m<a;m++){const f=u[m];t=Math.min(t,f[0]),r=Math.min(r,f[1]),o=Math.min(o,f[2]),h=Math.max(h,f[0]),c=Math.max(c,f[1]),M=Math.max(M,f[2])}else for(let m=0;m<a;m++){const f=u[m];t=Math.min(t,f[0]),r=Math.min(r,f[1]),h=Math.max(h,f[0]),c=Math.max(c,f[1])}i[0]=t,i[1]=r,i[2]=o,i[3]=h,i[4]=c,i[5]=M}function A(i){for(let u=0;u<6;u++)if(!isFinite(i[u]))return!1;return!0}function x(i){return i[0]>=i[3]?0:i[3]-i[0]}function s(i){return i[1]>=i[4]?0:i[4]-i[1]}function I(i){return i[2]>=i[5]?0:i[5]-i[2]}function R(i){const u=x(i),e=I(i),a=s(i);return Math.sqrt(u*u+e*e+a*a)}function d(i,u=[0,0,0]){return u[0]=i[0]+x(i)/2,u[1]=i[1]+s(i)/2,u[2]=i[2]+I(i)/2,u}function j(i,u=[0,0,0]){return u[0]=x(i),u[1]=s(i),u[2]=I(i),u}function k(i,u){return u[0]>=i[0]&&u[1]>=i[1]&&u[2]>=i[2]&&u[0]<=i[3]&&u[1]<=i[4]&&u[2]<=i[5]}function v(i,u){return u[0]>=i[0]&&u[1]>=i[1]&&u[2]>=i[2]&&u[3]<=i[3]&&u[4]<=i[4]&&u[5]<=i[5]}function y(i,u){return Math.max(u[0],i[0])<=Math.min(u[3],i[3])&&Math.max(u[1],i[1])<=Math.min(u[4],i[4])&&Math.max(u[2],i[2])<=Math.min(u[5],i[5])}function B(i,u){return!!l(u)||y(i,u)}function C(i,u,e,a,t=i){return t[0]=i[0]+u,t[1]=i[1]+e,t[2]=i[2]+a,t[3]=i[3]+u,t[4]=i[4]+e,t[5]=i[5]+a,t}function D(i,u,e=i){const a=i[0]+x(i)/2,t=i[1]+s(i)/2,r=i[2]+I(i)/2;return e[0]=a+(i[0]-a)*u,e[1]=t+(i[1]-t)*u,e[2]=r+(i[2]-r)*u,e[3]=a+(i[3]-a)*u,e[4]=t+(i[4]-t)*u,e[5]=r+(i[5]-r)*u,e}function H(i,u,e=i){return e[0]=u[0],e[1]=u[1],e[2]=u[2],e!==i&&(e[3]=i[3],e[4]=i[4],e[5]=i[5]),e}function J(i,u,e=i){return e[3]=u[0],e[4]=u[1],e[5]=u[2],e!==i&&(e[0]=i[0],e[1]=i[1],e[2]=i[2]),i}function V(i,u){return i[0]=u[0],i[1]=u[1],i[2]=u[2],i[3]=u[3],i[4]=u[4],i[5]=u[5],i}function Z(i){return i?V(i,F):N(F)}function K(i,u){return u||(u=E()),u[0]=i[0],u[1]=i[1],u[2]=i[3],u[3]=i[4],u}function L(i,u){return i[0]=u[0],i[1]=u[1],i[2]=Number.NEGATIVE_INFINITY,i[3]=u[2],i[4]=u[3],i[5]=Number.POSITIVE_INFINITY,i}function Q(i,u,e,a,t){return i[0]=u,i[1]=e,i[2]=Number.NEGATIVE_INFINITY,i[3]=a,i[4]=t,i[5]=Number.POSITIVE_INFINITY,i}function T(i){return i.length===6}function U(i){return x(i)===0&&s(i)===0&&I(i)===0}function W(i,u,e){if(l(i)||l(u))return i===u;if(!T(i)||!T(u))return!1;if(e){for(let a=0;a<i.length;a++)if(!e(i[a],u[a]))return!1}else for(let a=0;a<i.length;a++)if(i[a]!==u[a])return!1;return!0}function X(i,u,e,a,t,r){return g(i,u,e,a,t,r,_)}const n=[-1/0,-1/0,-1/0,1/0,1/0,1/0],F=[1/0,1/0,1/0,-1/0,-1/0,-1/0],Y=[0,0,0,0,0,0],_=N();export{U as B,n as C,F as D,d as E,j as F,H as G,Y as H,A as I,P as M,s as N,J as O,V as P,Z as S,I as T,y as V,B as Y,K as Z,C as _,N as a,O as c,L as d,z as f,G as h,D as j,W as k,x as l,w as m,k as p,Q as q,q as s,g as u,X as v,T as w,R as y,v as z};