import{t as l}from"./typedArrayUtil-bf9f210a.js";class o{constructor(t=[],s=[],e=!1){this.lengths=t??[],this.coords=s??[],this.hasIndeterminateRingOrder=e}static fromRect(t){const[s,e,h,i]=t,c=h-s,g=i-e;return new o([5],[s,e,c,0,0,g,-c,0,0,-g])}get isPoint(){return this.lengths.length===0}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((t,s)=>t+s)}forEachVertex(t){let s=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let e=0;e<this.lengths.length;e++){const h=this.lengths[e];for(let i=0;i<h;i++)t(this.coords[2*(i+s)],this.coords[2*(i+s)+1]);s+=h}}clone(t){return t?(t.set(this.coords),new o(this.lengths.slice(),t,this.hasIndeterminateRingOrder)):new o(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)}}class n{constructor(t=null,s={},e,h){this.geometry=t,this.attributes=s,this.centroid=e,this.objectId=h,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const t=new n(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function d(r){return!(l(r.geometry)||!r.geometry.coords||!r.geometry.coords.length)}class u extends n{}export{d as e,u as o,n as s,o as t};
