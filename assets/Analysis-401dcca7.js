import{u as n,e,y as r,a,v as l}from"./jsonMap-ffa742d3.js";import{i as p}from"./Clonable-7fa7ad97.js";import{s as y}from"./Identifiable-e4f9b04c.js";import{r as o}from"./typedArrayUtil-bf9f210a.js";import"./ArrayPool-b51874dd.js";let d=0,t=class extends n(p(y(l))){constructor(s){super(s),this.id=`${Date.now().toString(16)}-analysis-${d++}`,this.title=null}get parent(){return this._get("parent")}set parent(s){const i=this.parent;if(o(i))switch(i.type){case"line-of-sight":case"dimension":i.releaseAnalysis(this);break;case"2d":case"3d":i.analyses.includes(this)&&i.analyses.remove(this)}this._set("parent",s)}get isEditable(){return this.requiredPropertiesForEditing.every(o)}};e([r({type:String,constructOnly:!0,clonable:!1})],t.prototype,"id",void 0),e([r({type:String})],t.prototype,"title",void 0),e([r({constructOnly:!0})],t.prototype,"type",void 0),e([r({clonable:!1,value:null})],t.prototype,"parent",null),e([r({readOnly:!0})],t.prototype,"isEditable",null),e([r({readOnly:!0})],t.prototype,"requiredPropertiesForEditing",void 0),t=e([a("esri.analysis.Analysis")],t);const v=t;export{v as c};