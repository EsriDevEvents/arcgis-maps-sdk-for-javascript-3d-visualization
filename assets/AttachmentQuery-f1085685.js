import{e,y as r,l as a,a as p}from"./jsonMap-ffa742d3.js";import{p as h}from"./string-53224faa.js";import{b as l}from"./ArrayPool-b51874dd.js";import{r as n}from"./Extent-22afa84a.js";var s;let t=s=class extends a{constructor(o){super(o),this.attachmentTypes=null,this.attachmentsWhere=null,this.cacheHint=void 0,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(o,i){i.resultOffset=this.start,i.resultRecordCount=this.num||10}clone(){return new s(h({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,cacheHint:this.cacheHint,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};e([r({type:[String],json:{write:!0}})],t.prototype,"attachmentTypes",void 0),e([r({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],t.prototype,"attachmentsWhere",void 0),e([r({type:Boolean,json:{write:!0}})],t.prototype,"cacheHint",void 0),e([r({type:[String],json:{write:!0}})],t.prototype,"keywords",void 0),e([r({type:[Number],json:{write:!0}})],t.prototype,"globalIds",void 0),e([r({json:{write:!0}})],t.prototype,"name",void 0),e([r({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),e([r({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),e([r({type:Boolean,json:{default:!1,write:!0}})],t.prototype,"returnMetadata",void 0),e([r({type:[Number],json:{write:!0}})],t.prototype,"size",void 0),e([r({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),e([n("start"),n("num")],t.prototype,"writeStart",null),e([r({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],t.prototype,"where",void 0),t=s=e([p("esri.rest.support.AttachmentQuery")],t),t.from=l(t);const y=t;export{y as c};
