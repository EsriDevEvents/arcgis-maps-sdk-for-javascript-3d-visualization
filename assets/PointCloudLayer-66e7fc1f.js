import{e as r,y as o,a as m,l as q}from"./jsonMap-ffa742d3.js";import{i as S,k as B}from"./PopupTemplate-81dc9b83.js";import{V as _,U as E}from"./request-09e7d9b2.js";import{a,s as C}from"./Error-5cdd6e0a.js";import{p as u,o as N}from"./string-53224faa.js";import{r as L}from"./typedArrayUtil-bf9f210a.js";import{O as V}from"./MultiOriginJSONSupport-06f8f24a.js";import{w as O}from"./promiseUtils-5940888c.js";import{T}from"./ArrayPool-b51874dd.js";import{o as A,r as k}from"./Extent-22afa84a.js";import{b as D}from"./Layer-524734fa.js";import{i as K}from"./APIKeyMixin-ef4ccb38.js";import{p as G}from"./ArcGISService-24587a68.js";import{c as M,p as U,d as z,a as H}from"./OperationalLayer-db187f46.js";import{_ as J}from"./PortalLayer-d69e402d.js";import{t as Q}from"./ScaleRangeLayer-d1b04b80.js";import{E as W,L as F}from"./SceneService-fdd3dddd.js";import{o as v}from"./enumeration-925aa0f6.js";import{y as w}from"./Field-945b2973.js";import{s as X}from"./fieldProperties-7a0757a8.js";import{c as j,d as Y,b as Z,a as ee}from"./PointCloudUniqueValueRenderer-797177d9.js";import{p as te}from"./popupUtils-b8625101.js";import"./nextTick-3ee5a785.js";import"./Clonable-7fa7ad97.js";import"./Collection-74ae958a.js";import"./Evented-686173eb.js";import"./SimpleObservable-bd2c3ae8.js";import"./fieldUtils-d430f46c.js";import"./preload-helper-41c905a7.js";import"./arcadeOnDemand-dd48afd7.js";import"./geometry-7d866d3f.js";import"./Polyline-82cb63bc.js";import"./typeUtils-1714017f.js";import"./number-036ac4ef.js";import"./locale-fe7cc1d0.js";import"./Identifiable-e4f9b04c.js";import"./Ellipsoid-89682c5e.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./arcgisLayerUrl-1b8d6c52.js";import"./persistableUrlUtils-3635dccc.js";import"./TimeExtent-64e16588.js";import"./ElevationInfo-005ddd87.js";import"./lengthUtils-3c9047c4.js";import"./opacityUtils-d4a4b602.js";import"./asyncUtils-24bd37b2.js";import"./layerUtils-eef15b39.js";import"./Portal-8dfa7a94.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./PortalItem-4d7e1038.js";import"./assets-94d592bf.js";import"./portalItemUtils-0655aa33.js";import"./projection-4ac247db.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./mat4-f0dc8788.js";import"./aaBoundingRect-2fb32e32.js";import"./zscale-baa108ea.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./HeightModelInfo-73f516f9.js";import"./I3SIndexInfo-1765b03c.js";import"./uuid-73213768.js";import"./resourceUtils-44dc8ca3.js";import"./fieldType-24ac97df.js";import"./FieldsIndex-113320d3.js";import"./ColorStop-29c89bbb.js";import"./Color-7b46c33a.js";import"./colorUtils-639f4d25.js";let c=class extends q{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([o({type:String,json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"field",void 0),r([o({readOnly:!0,nonNullable:!0,json:{read:!1}})],c.prototype,"type",void 0),c=r([m("esri.layers.pointCloudFilters.PointCloudFilter")],c);const g=c;var b;let l=b=class extends g{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new b({field:this.field,requiredClearBits:u(this.requiredClearBits),requiredSetBits:u(this.requiredSetBits)})}};r([o({type:[T],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],l.prototype,"requiredClearBits",void 0),r([o({type:[T],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],l.prototype,"requiredSetBits",void 0),r([v({pointCloudBitfieldFilter:"bitfield"})],l.prototype,"type",void 0),l=b=r([m("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],l);const re=l;var I;let f=I=class extends g{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new I({field:this.field,includedReturns:u(this.includedReturns)})}};r([o({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],f.prototype,"includedReturns",void 0),r([v({pointCloudReturnFilter:"return"})],f.prototype,"type",void 0),f=I=r([m("esri.layers.pointCloudFilters.PointCloudReturnFilter")],f);const oe=f;var $;let d=$=class extends g{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new $({field:this.field,mode:this.mode,values:u(this.values)})}};r([o({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"mode",void 0),r([v({pointCloudValueFilter:"value"})],d.prototype,"type",void 0),r([o({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"values",void 0),d=$=r([m("esri.layers.pointCloudFilters.PointCloudValueFilter")],d);const ie=d,se={key:"type",base:g,typeMap:{value:ie,bitfield:re,return:oe}};var x;let h=x=class extends j{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new x({...this.cloneProperties(),field:u(this.field)})}};r([v({pointCloudRGBRenderer:"point-cloud-rgb"})],h.prototype,"type",void 0),r([o({type:String,json:{write:!0}})],h.prototype,"field",void 0),h=x=r([m("esri.renderers.PointCloudRGBRenderer")],h);const ne=h,P={key:"type",base:j,typeMap:{"point-cloud-class-breaks":Y,"point-cloud-rgb":ne,"point-cloud-stretch":Z,"point-cloud-unique-value":ee},errorContext:"renderer"},R=X();let i=class extends W(G(M(J(Q(V(K(D))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const p=new w;return s.type==="FieldTypeInteger"&&((s=u(s)).type="esriFieldTypeInteger"),p.read(s,n),p}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new w({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){N("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=L(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(O).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=te(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){var p;const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=(p=e.fieldInfos)==null?void 0:p.find(y=>y.fieldName===t.name);if(!n)return;const s=new S({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){var p;const t=this.fieldsIndex.get("RGB");if(!t)return;const n=(p=e.fieldInfos)==null?void 0:p.find(y=>y.fieldName===t.name);if(!n)return;const s=new S({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new a("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new a("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.attributeStorageInfo)if(s.name===n.name){const p=_(this.parsedUrl.path,`./statistics/${s.key}`);return E(p,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(y=>y.data)}throw new a("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(F.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(F.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new a("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&(e.mode!=="absolute-height"&&C.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&C.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};r([o({type:["PointCloudLayer"]})],i.prototype,"operationalLayerType",void 0),r([o(U)],i.prototype,"popupEnabled",void 0),r([o({type:B,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),r([o({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),r([o({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],i.prototype,"opacity",void 0),r([o({type:["show","hide"]})],i.prototype,"listMode",void 0),r([o({types:[se],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],i.prototype,"filters",void 0),r([o({type:[w]})],i.prototype,"fields",void 0),r([o(R.fieldsIndex)],i.prototype,"fieldsIndex",void 0),r([A("service","fields",["fields","attributeStorageInfo"])],i.prototype,"readServiceFields",null),r([o(R.outFields)],i.prototype,"outFields",void 0),r([o({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),r([o(z)],i.prototype,"elevationInfo",null),r([o({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),r([o(H)],i.prototype,"legendEnabled",void 0),r([o({types:P,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:P},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],i.prototype,"renderer",void 0),r([k("renderer")],i.prototype,"writeRenderer",null),r([o({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),i=r([m("esri.layers.PointCloudLayer")],i);const Ct=i;export{Ct as default};