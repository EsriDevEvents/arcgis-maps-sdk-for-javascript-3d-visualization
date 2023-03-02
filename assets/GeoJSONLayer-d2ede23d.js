import{_ as $}from"./preload-helper-41c905a7.js";import{e as r,y as i,a as b}from"./jsonMap-ffa742d3.js";import"./geometry-7d866d3f.js";import{k as J}from"./PopupTemplate-81dc9b83.js";import"./UniqueValueRenderer-80c8e628.js";import{b as N,n as j}from"./jsonUtils-9b4d797d.js";import{r as O,t as R}from"./typedArrayUtil-bf9f210a.js";import{O as P}from"./MultiOriginJSONSupport-06f8f24a.js";import{x as q,w as T}from"./promiseUtils-5940888c.js";import{L as y}from"./request-09e7d9b2.js";import"./ArrayPool-b51874dd.js";import{o as I}from"./typeUtils-1714017f.js";import{b as k}from"./Layer-524734fa.js";import{s as D,a as f}from"./Error-5cdd6e0a.js";import{h as L}from"./string-53224faa.js";import{m as G}from"./Loadable-40ecd3b9.js";import{u as C}from"./workers-c8fc8d43.js";import{l as Q}from"./clientSideDefaults-07bb3352.js";import{x as Z}from"./FeatureSet-b4fbf079.js";import{e as x,f as F}from"./Extent-22afa84a.js";import{v as z}from"./Polyline-82cb63bc.js";import{n as V}from"./BlendLayer-793ff14a.js";import{o as A}from"./CustomParametersMixin-2798ec18.js";import{n as U,p as W}from"./FeatureReductionLayer-5ef01ce2.js";import{c as B,d as M,v as H,m as K,a as X,u as Y,p as tt,l as et,f as rt}from"./OperationalLayer-db187f46.js";import{c as ot}from"./OrderedLayer-045186a6.js";import{_ as it}from"./PortalLayer-d69e402d.js";import{p as st}from"./RefreshableLayer-12bc7ba2.js";import{t as nt}from"./ScaleRangeLayer-d1b04b80.js";import{a as at}from"./TemporalLayer-f231f22a.js";import{p as pt}from"./FeatureTemplate-5a472038.js";import{n as lt}from"./FeatureType-017f886c.js";import{y as ut}from"./Field-945b2973.js";import{s as dt}from"./fieldProperties-7a0757a8.js";import{F as g,a as mt}from"./fieldUtils-d430f46c.js";import{C as ht,i as ct}from"./labelingInfo-e65ecbf4.js";import{x as h}from"./Query-b0193ce7.js";import{p as yt}from"./popupUtils-b8625101.js";import"./nextTick-3ee5a785.js";import"./Clonable-7fa7ad97.js";import"./Collection-74ae958a.js";import"./Evented-686173eb.js";import"./SimpleObservable-bd2c3ae8.js";import"./enumeration-925aa0f6.js";import"./number-036ac4ef.js";import"./locale-fe7cc1d0.js";import"./Identifiable-e4f9b04c.js";import"./symbols-5f42cb0e.js";import"./CIMSymbol-8f55d4ab.js";import"./Color-7b46c33a.js";import"./colorUtils-639f4d25.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-d4a4b602.js";import"./symbolLayerUtils3D-5cf2dcce.js";import"./aaBoundingBox-fb003858.js";import"./aaBoundingRect-2fb32e32.js";import"./persistableUrlUtils-3635dccc.js";import"./Symbol3DAnchorPosition2D-e9d8a8f4.js";import"./collectionUtils-423a192d.js";import"./Portal-8dfa7a94.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./Ellipsoid-89682c5e.js";import"./ColorStop-29c89bbb.js";import"./arcadeOnDemand-dd48afd7.js";import"./reactiveUtils-53e5756b.js";import"./diffUtils-1bae97a1.js";import"./colorRamps-18bbdf60.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-61985981.js";import"./Graphic-5dcfa25e.js";import"./jsonUtils-36bf3d33.js";import"./compilerUtils-7bf6df9e.js";import"./lengthUtils-3c9047c4.js";import"./Promise-755e47e5.js";import"./jsonUtils-27937179.js";import"./layerUtils-eef15b39.js";import"./styleUtils-689841ac.js";import"./DictionaryLoader-1c3435ac.js";import"./LRUCache-86d9ad15.js";import"./MemCache-b4d68123.js";import"./deprecate-ba25fc78.js";import"./heatmapUtils-8ee685fd.js";import"./vec4f64-6d0e93be.js";import"./Connection-3d9fb42e.js";import"./assets-94d592bf.js";import"./intl-87d72dbe.js";import"./messages-1516d146.js";import"./QueryEngineCapabilities-42e44ded.js";import"./defaultsJSON-59981e75.js";import"./mat4f32-60a2394b.js";import"./mat4-f0dc8788.js";import"./TimeExtent-64e16588.js";import"./ElevationInfo-005ddd87.js";import"./asyncUtils-24bd37b2.js";import"./PortalItem-4d7e1038.js";import"./portalItemUtils-0655aa33.js";import"./projection-4ac247db.js";import"./zscale-baa108ea.js";import"./TimeReference-adaa7961.js";import"./datetime-eed49b9b.js";import"./fieldType-24ac97df.js";import"./FieldsIndex-113320d3.js";import"./labelUtils-b68da70f.js";const E="esri.layers.graphics.sources.GeoJSONSource",v=D.getLogger(E);let d=class extends G{constructor(){super(...arguments),this.type="geojson",this.refresh=q(async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=O(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;(t=this._connection)==null||t.close(),this._connection=null}applyEdits(t){return this.load().then(()=>this._applyEdits(t))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e)).then(o=>Z.fromJSON(o))}queryFeaturesJSON(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatures",t?t.toJSON():null,e))}queryFeatureCount(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e))}queryObjectIds(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryObjectIds",t?t.toJSON():null,e))}queryExtent(t,e={}){return this.load(e).then(()=>this._connection.invoke("queryExtent",t?t.toJSON():null,e)).then(o=>({count:o.count,extent:x.fromJSON(o.extent)}))}querySnapping(t,e={}){return this.load(e).then(()=>this._connection.invoke("querySnapping",t,e))}_applyEdits(t){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const e=this.layer.objectIdField,o=[],n=[],u=[];if(t.addFeatures)for(const a of t.addFeatures)o.push(this._serializeFeature(a));if(t.deleteFeatures)for(const a of t.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[e]!=null&&n.push(a.attributes[e]);if(t.updateFeatures)for(const a of t.updateFeatures)u.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:o,updates:u,deletes:n}).then(({extent:a,timeExtent:p,featureEditResults:l})=>(this.sourceJSON.extent=a,p&&(this.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),this._createEditsResult(l)))}_createEditsResult(t){return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(t){const e=t.success===!0?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:e?new f("geojson-layer-source:edit-failure",e.description,{code:e.code}):null}}_serializeFeature(t){const{attributes:e}=t,o=this._geometryForSerialization(t);return o?{geometry:o.toJSON(),attributes:e}:{attributes:e}}_geometryForSerialization(t){const{geometry:e}=t;return R(e)?null:e.type==="mesh"||e.type==="extent"?z.fromExtent(e.extent):e}async _startWorker(t){this._connection=await C("GeoJSONSourceWorker",{strategy:L("feature-layers-workers")?"dedicated":"local",signal:t});const{fields:e,spatialReference:o,hasZ:n,geometryType:u,objectIdField:a,url:p,timeInfo:l,customParameters:_}=this.layer,S=this.layer.originOf("spatialReference")==="defaults",w={url:p,customParameters:_,fields:e&&e.map(c=>c.toJSON()),geometryType:I.toJSON(u),hasZ:n,objectIdField:a,timeInfo:l?l.toJSON():null,spatialReference:S?null:o&&o.toJSON()},m=await this._connection.invoke("load",w,{signal:t});for(const c of m.warnings)v.warn(c.message,{layer:this.layer,warning:c});m.featureErrors.length&&v.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=Q(this.sourceJSON.hasZ,!0)}};r([i()],d.prototype,"capabilities",void 0),r([i()],d.prototype,"type",void 0),r([i({constructOnly:!0})],d.prototype,"layer",void 0),r([i()],d.prototype,"sourceJSON",void 0),d=r([b(E)],d);const ft=dt();let s=class extends ot(A(U(W(V(at(nt(st(B(it(P(k))))))))))){constructor(t){super(t),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=F.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var t;(t=this.source)==null||t.destroy()}load(t){const e=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},t).catch(T).then(()=>this.source.load(t)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),mt(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(e),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?y(this.url):null}set renderer(t){g(t,this.fieldsIndex),this._set("renderer",t)}set url(t){if(!t)return void this._set("url",t);const e=y(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async applyEdits(t,e){const o=await $(()=>import("./editingSupport-99129368.js"),["./editingSupport-99129368.js","./Graphic-5dcfa25e.js","./jsonMap-ffa742d3.js","./typedArrayUtil-bf9f210a.js","./string-53224faa.js","./Error-5cdd6e0a.js","./ArrayPool-b51874dd.js","./nextTick-3ee5a785.js","./promiseUtils-5940888c.js","./geometry-7d866d3f.js","./Extent-22afa84a.js","./Ellipsoid-89682c5e.js","./Polyline-82cb63bc.js","./typeUtils-1714017f.js","./PopupTemplate-81dc9b83.js","./Clonable-7fa7ad97.js","./Collection-74ae958a.js","./Evented-686173eb.js","./SimpleObservable-bd2c3ae8.js","./fieldUtils-d430f46c.js","./preload-helper-41c905a7.js","./arcadeOnDemand-dd48afd7.js","./enumeration-925aa0f6.js","./number-036ac4ef.js","./locale-fe7cc1d0.js","./Identifiable-e4f9b04c.js","./symbols-5f42cb0e.js","./CIMSymbol-8f55d4ab.js","./Color-7b46c33a.js","./colorUtils-639f4d25.js","./mathUtils-ae09f98b.js","./vec3-8818fe1c.js","./common-d0b63c2d.js","./vec4-c7a19f0d.js","./screenUtils-410d12c0.js","./opacityUtils-d4a4b602.js","./symbolLayerUtils3D-5cf2dcce.js","./aaBoundingBox-fb003858.js","./aaBoundingRect-2fb32e32.js","./request-09e7d9b2.js","./persistableUrlUtils-3635dccc.js","./Symbol3DAnchorPosition2D-e9d8a8f4.js","./collectionUtils-423a192d.js","./Portal-8dfa7a94.js","./Loadable-40ecd3b9.js","./Promise-755e47e5.js","./PortalGroup-00fb77a4.js","./PortalUser-9579f611.js","./jsonUtils-36bf3d33.js","./uuid-73213768.js","./normalizeUtils-353ec0fc.js","./normalizeUtilsCommon-d8ea404e.js","./assetEditingSupport-2cebf928.js","./EditBusLayer-b1010019.js","./layerUtils-eef15b39.js"],import.meta.url);await this.load();const n=await o.applyEdits(this,this.source,t,e);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(t,e){return super.on(t,e)}createPopupTemplate(t){return yt(this,t)}createQuery(){const t=new h,e=this.get("capabilities.data");t.returnGeometry=!0,e&&e.supportsZ&&(t.returnZ=!0),t.outFields=["*"],t.where=this.definitionExpression||"1=1";const{timeOffset:o,timeExtent:n}=this;return t.timeExtent=o!=null&&n!=null?n.offset(-o.value,o.unit):n||null,t}getFieldDomain(t,e){let o,n=!1;const u=e&&e.feature,a=u&&u.attributes,p=this.typeIdField&&a&&a[this.typeIdField];return p!=null&&this.types&&(n=this.types.some(l=>l.id==p&&(o=l.domains&&l.domains[t],o&&o.type==="inherited"&&(o=this._getLayerDomain(t)),!0))),n||o||(o=this._getLayerDomain(t)),o}getField(t){return this.fieldsIndex.get(t)}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(h.from(t)||this.createQuery(),e)).then(o=>{if(o!=null&&o.features)for(const n of o.features)n.layer=n.sourceLayer=this;return o})}queryObjectIds(t,e){return this.load().then(()=>this.source.queryObjectIds(h.from(t)||this.createQuery(),e))}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(h.from(t)||this.createQuery(),e))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(h.from(t)||this.createQuery(),e))}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return O(e)&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_getLayerDomain(t){if(!this.fields)return null;let e=null;return this.fields.some(o=>(o.name===t&&(e=o.domain),!!e)),e}};r([i({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",null),r([i({type:String})],s.prototype,"copyright",void 0),r([i({readOnly:!0})],s.prototype,"createQueryVersion",null),r([i({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),r([i({type:String})],s.prototype,"displayField",void 0),r([i({type:Boolean})],s.prototype,"editingEnabled",void 0),r([i(M)],s.prototype,"elevationInfo",void 0),r([i({type:[ut],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),r([i(ft.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([i({type:x,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],s.prototype,"geometryType",void 0),r([i({type:Boolean})],s.prototype,"hasZ",void 0),r([i(H)],s.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),r([i(K)],s.prototype,"labelsVisible",void 0),r([i({type:[ht],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ct},write:!0}})],s.prototype,"labelingInfo",void 0),r([i(X)],s.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],s.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],s.prototype,"objectIdField",void 0),r([i(Y)],s.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],s.prototype,"operationalLayerType",void 0),r([i({readOnly:!0})],s.prototype,"parsedUrl",null),r([i(tt)],s.prototype,"popupEnabled",void 0),r([i({type:J,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),r([i({types:N,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:j}}}})],s.prototype,"renderer",null),r([i(et)],s.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],s.prototype,"source",void 0),r([i({type:F})],s.prototype,"spatialReference",void 0),r([i({type:[pt]})],s.prototype,"templates",void 0),r([i()],s.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),r([i({type:String,readOnly:!0})],s.prototype,"typeIdField",void 0),r([i({type:[lt]})],s.prototype,"types",void 0),r([i(rt)],s.prototype,"url",null),s=r([b("esri.layers.GeoJSONLayer")],s);const gr=s;export{gr as default};