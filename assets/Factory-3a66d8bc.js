import{r as g,t as z,l as G}from"./typedArrayUtil-bf9f210a.js";import{d as u,l,i as L}from"./screenUtils-410d12c0.js";import{n as p}from"./vec3-8818fe1c.js";import"./projection-4ac247db.js";import{x as Q}from"./plane-01584357.js";import{d as y,t as d}from"./sphere-a48b65b1.js";import"./mathUtils-ae09f98b.js";import"./ElevationInfo-005ddd87.js";import{b4 as w,x as b,h as E,K as I}from"./SceneView-7ac05f56.js";import{j as h}from"./objectResourceUtils-3685cb27.js";import"./geometry-7d866d3f.js";import"./string-53224faa.js";import"./Graphic-5dcfa25e.js";import"./Extent-22afa84a.js";import"./Polyline-82cb63bc.js";import"./byteSizeEstimations-f0cab514.js";import"./aaBoundingBox-fb003858.js";import"./typeUtils-1714017f.js";import"./Field-945b2973.js";import"./ViewingMode-5d7d590b.js";import{G as H}from"./Texture-ae652f15.js";function eD(D,A){return R(D,()=>A)}function R(D,A){const e=p(),c=p();let o=!1;return n=>{const i=A(n);if(n.action==="start"){const t=u(n.screenStart,l(d.get())),r=w(D.state.camera,t,C);g(r)&&(o=Q(i,r,e))}if(!o)return null;const m=u(n.screenEnd,l(d.get())),f=w(D.state.camera,m,C);return z(f)?null:Q(i,f,c)?{...n,renderStart:e,renderEnd:c,plane:i,ray:f}:null}}var a;function AD(D){let A=null;return e=>{switch(e.action){case"start":A=D.disableDisplay();break;case"end":case"cancel":g(A)&&(A.remove(),A=null)}return e}}function rD(D,A=null){const e=b(D.state.viewingMode);e.options.selectionMode=!0,e.options.store=E.MIN,e.options.hud=!1;const c=L(),o={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},n=p(),i=G(A,D.spatialReference),m=t=>{D.map.ground&&D.map.ground.opacity<1?o.exclude.add(h):o.exclude.delete(h),D.sceneIntersectionHelper.intersectIntersectorScreen(u(t,c),e,o);const r=e.results.min;let s;if(r.getIntersectionPoint(n))s=r.intersector===I.TERRAIN?a.GROUND:a.OTHER;else{if(!e.results.ground.getIntersectionPoint(n))return null;s=a.GROUND}return{location:D.renderCoordsHelper.fromRenderCoords(n,i),surfaceType:s}};let f;return t=>{if(t.action==="start"){const s=m(t.screenStart);f=g(s)?s.location:null}if(z(f))return null;const r=m(t.screenEnd);return g(r)&&g(r.location)?{...t,mapStart:f,mapEnd:r.location,surfaceType:r.surfaceType}:null}}(function(D){D[D.GROUND=0]="GROUND",D[D.OTHER=1]="OTHER"})(a||(a={}));const C=y(),v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAnFBMVEUAAAD/gAD/gAD/cAD/gAD/eAD/gAD/eQD/gAD/egD/gAD/ewD/gAD/fAD/gAD/fAD/gAD/fAD/fQD/fQD/fQD/fQD/fQD/fgD/jR7/mjn/mjf/p1H/plH/smf/sWb/vHr/u3n/xYz/xIv/zZz/zJv/zJr/1Kv/1Kr/06r/06n/27n/27f/4cX/4cT/59D/7dr/8uX/9u7/+/f////u2EN0AAAAM3RSTlMACBAQICAoKDAwODhAQEhIUFBYYGhweICIkJCXmJ+gp6ivsLe4uL+/wMDHx8/P19/n7/cWvjXwAAACeUlEQVR42tWX3XqiMBCGY2pbtbrUnzhhdak/lHWliJD7v7fdJ+KG5AMhh30P8zCTmS+TycDaeBoHi5Wgf4jVYvbKmRfPgSAHMX9mPRnM1tSIGHM/c2QddLp4c8wxCvYIvqROBPfbHlm/sRYC6smMNTKn3sxZAyvyYNW1v38MM/IkcPQnZHPMLtciz9P9hhqwzoLD+cnfpTIUaYinyZlBkE2YKZcMXCyN/YhsPkuFlMfWJLiwo89VMxfpJDForMCwuG+Zx7ttGO2S/w4LJ42ZURDty5M0a4dqsZAQAihQfXqWdlhnpcmdEPAI0tv2EbnsbsKmdgi6/1GN7T1XJLx5sF0P9SWABMC+co5JBE4Ge/1NTM3EGIJgjFONXCdAbeQYwhN7pRrRV20LJNIhWOczdu+xPFzIBiQ62iIsyIOTvlZUY+HXySLQaMUEeSC1CPYxENIlwk+q8e0clFAIfiKG+qpaIvod4wfU8sqvkDLda+xCCqgDaAk7uyeNqD+feFlfGCcg3Hzsk+xS7Nz1Aq4CcauhhMc0uxaqIgcFsF0J+1WQyoCN7Y9ezeCVH5LhSxmyRvsihKbK1m7LafpSpkpj6yJgtsiVBh6AX5UyCVmMbrNpcwj5/h6DPN79JjAiQAhXVeN6SZI0q5bQnn4wBiHEqpUybp1ZJzWxStVCHhKhAhVLp/Emh6trHpGLaB6yZHk7wu3Z+ChOxhwUNEmYYjpUvqJDksSHraQmJm2DdqQK6sGUObybYtpSN+8Phm3pN2xjDH33R6b0CKxAZNLvl8foD3BBnSw5e8RI+G2P8GD9wHw6YN3wkfA0R4Zz8CGCIfOCv8zM738walXuLw6nXBvPr8wvAAAAAElFTkSuQmCC",k="data:image/png;base64,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",M={mipmap:!0,preMultiplyAlpha:!0,width:64,height:64};function nD(D){return D.fromData(v,()=>new H(v,M))}function tD(D){return D.fromData(k,()=>new H(k,M))}export{rD as B,eD as C,tD as i,nD as o,AD as z};
