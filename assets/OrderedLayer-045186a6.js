import{C as y,e as i,y as o,l as f,a as c}from"./jsonMap-ffa742d3.js";import{o as w}from"./string-53224faa.js";import"./ArrayPool-b51874dd.js";import"./typedArrayUtil-bf9f210a.js";var p;const a=new y({asc:"ascending",desc:"descending"});let t=p=class extends f{constructor(e){super(e),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new p({field:this.field,valueExpression:this.valueExpression,order:this.order})}};i([o({type:String,json:{write:!0}})],t.prototype,"field",void 0),i([o({type:String,json:{write:!0}})],t.prototype,"valueExpression",void 0),i([o({type:a.apiValues,json:{read:a.read,write:a.write}})],t.prototype,"order",void 0),t=p=i([c("esri.layers.support.OrderByInfo")],t);const u=t;function v(e,r,s){if(!e)return null;const d=e.find(l=>!!l.field);if(!d)return null;const n=new u;return n.read(d,s),[n]}function g(e,r,s,d){const n=e.find(l=>!!l.field);n&&w(s,[n.toJSON()],r)}const j=e=>{let r=class extends e{constructor(){super(...arguments),this.orderBy=null}};return i([o({type:[u],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:v},write:{target:"layerDefinition.orderBy",writer:g}}})],r.prototype,"orderBy",void 0),r=i([c("esri.layers.mixins.OrderedLayer")],r),r};export{j as c};
