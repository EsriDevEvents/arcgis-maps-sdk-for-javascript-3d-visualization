import"./geometry-7d866d3f.js";import"./Error-5cdd6e0a.js";import{e as C}from"./typedArrayUtil-bf9f210a.js";import{u as S}from"./screenUtils-410d12c0.js";import{a8 as R,i as j,w as A,f as B}from"./Extent-22afa84a.js";import{O}from"./quantizationUtils-16db4e0b.js";import"./fieldUtils-d430f46c.js";import{y as q,m as G}from"./heatmapUtils-8ee685fd.js";import{c as M,D as Y,m as _,f as k,d as U,T as Z,y as H,x as J,z as K,S as L,M as Q}from"./utils-95e81b90.js";import{i as W}from"./arcadeOnDemand-dd48afd7.js";import"./ArrayPool-b51874dd.js";import"./string-53224faa.js";import"./Polyline-82cb63bc.js";import"./jsonMap-ffa742d3.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-5940888c.js";import"./typeUtils-1714017f.js";import"./Ellipsoid-89682c5e.js";import"./preload-helper-41c905a7.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./vec4f64-6d0e93be.js";import"./generateRendererUtils-e34cc2cf.js";import"./enumeration-925aa0f6.js";let I=null;function X(a,i,r){return a.x<0?a.x+=i:a.x>r&&(a.x-=i),a}function ii(a,i,r,o){const n=R(r)?j(r):null,l=n?Math.round((n.valid[1]-n.valid[0])/i.scale[0]):null;return a.map(t=>{const e=new A(C(t.geometry));return O(i,e,e,e.hasZ,e.hasM),t.geometry=n?X(e,l,o[0]):e,t})}function ai(a,i=18,r,o,n,l){const t=new Float64Array(n*l);i=Math.round(S(i));let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,m=0,u=0,d=0,c=0;const y=q(o,r);for(const{geometry:T,attributes:v}of a){const{x:p,y:f}=T,x=Math.max(0,p-i),F=Math.max(0,f-i),D=Math.min(l,f+i),g=Math.min(n,p+i),P=+y(v);for(let $=F;$<D;$++)for(let w=x;w<g;w++){const E=$*n+w,b=G(w-p,$-f,i),N=t[E];m=t[E]+=b*P;const V=m-N;u+=V,d+=V*V,m<e&&(e=m),m>s&&(s=m),c++}}if(!c)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const z=(s-e)/2;return{mean:u/c,stdDev:Math.sqrt((d-u*u/c)/c),min:e,max:s,mid:z,count:c}}async function h(a,i){if(!i)return[];const{field:r,field2:o,field3:n,fieldDelimiter:l}=a,t=a.valueExpression,e=a.normalizationType,s=a.normalizationField,m=a.normalizationTotal,u=[],d=a.viewInfoParams;let c=null,y=null;if(t){if(!I){const{arcadeUtils:v}=await W();I=v}c=I.createFunction(t),y=d&&I.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new B(d.spatialReference)})}const z=a.fieldInfos,T=!(i[0]&&"declaredClass"in i[0]&&i[0].declaredClass==="esri.Graphic")&&z?{fields:z}:null;return i.forEach(v=>{const p=v.attributes;let f;if(t){const x=T?{...v,layer:T}:v,F=I.createExecContext(x,y);f=I.executeFunction(c,F)}else p&&(f=p[r],o&&(f=`${M(f)}${l}${M(p[o])}`,n&&(f=`${f}${l}${M(p[n])}`)));if(e&&typeof f=="number"&&isFinite(f)){const x=p&&parseFloat(p[s]);f=Y(f,e,x,m)}u.push(f)}),u}async function Di(a){const{attribute:i,features:r}=a,{normalizationType:o,normalizationField:n,minValue:l,maxValue:t,fieldType:e}=i,s=await h({field:i.field,valueExpression:i.valueExpression,normalizationType:o,normalizationField:n,normalizationTotal:i.normalizationTotal,viewInfoParams:i.viewInfoParams,fieldInfos:i.fieldInfos},r),m=_({normalizationType:o,normalizationField:n,minValue:l,maxValue:t}),u={value:.5,fieldType:e},d=e==="esriFieldTypeString"?k({values:s,supportsNullCount:m,percentileParams:u}):U({values:s,minValue:l,maxValue:t,useSampleStdDev:!o,supportsNullCount:m,percentileParams:u});return Z(d,e==="esriFieldTypeDate")}async function gi(a){const{attribute:i,features:r}=a,o=await h({field:i.field,field2:i.field2,field3:i.field3,fieldDelimiter:i.fieldDelimiter,valueExpression:i.valueExpression,viewInfoParams:i.viewInfoParams,fieldInfos:i.fieldInfos},r),n=H(o);return J(n,i.domains,i.returnAllCodedValues,i.fieldDelimiter)}async function Pi(a){const{attribute:i,features:r}=a,{field:o,normalizationType:n,normalizationField:l,normalizationTotal:t,classificationMethod:e}=i,s=await h({field:o,valueExpression:i.valueExpression,normalizationType:n,normalizationField:l,normalizationTotal:t,viewInfoParams:i.viewInfoParams,fieldInfos:i.fieldInfos},r),m=K(s,{field:o,normalizationType:n,normalizationField:l,normalizationTotal:t,classificationMethod:e,standardDeviationInterval:i.standardDeviationInterval,numClasses:i.numClasses,minValue:i.minValue,maxValue:i.maxValue});return L(m,e)}async function bi(a){const{attribute:i,features:r}=a,{field:o,normalizationType:n,normalizationField:l,normalizationTotal:t,classificationMethod:e}=i,s=await h({field:o,valueExpression:i.valueExpression,normalizationType:n,normalizationField:l,normalizationTotal:t,viewInfoParams:i.viewInfoParams,fieldInfos:i.fieldInfos},r);return Q(s,{field:o,normalizationType:n,normalizationField:l,normalizationTotal:t,classificationMethod:e,standardDeviationInterval:i.standardDeviationInterval,numBins:i.numBins,minValue:i.minValue,maxValue:i.maxValue})}async function Ni(a){const{attribute:i,features:r}=a,{field:o,radius:n,fieldOffset:l,transform:t,spatialReference:e,size:s}=i,m=ii(r,t,e,s),{count:u,min:d,max:c,mean:y,stdDev:z}=ai(m,n,l,o,s[0],s[1]);return{count:u,min:d,max:c,avg:y,stddev:z}}export{Pi as classBreaks,Ni as heatmapStatistics,bi as histogram,Di as summaryStatistics,gi as uniqueValues};