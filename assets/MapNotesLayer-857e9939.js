import{e as i,y as p,a as M,D as x}from"./jsonMap-ffa742d3.js";import"./geometry-7d866d3f.js";import{g as B}from"./Graphic-5dcfa25e.js";import{S as A,o as z,y as C,q as k}from"./symbols-5f42cb0e.js";import{j as J}from"./Collection-74ae958a.js";import{a as K}from"./Error-5cdd6e0a.js";import{p as v,o as W}from"./string-53224faa.js";import{r as f,t as g}from"./typedArrayUtil-bf9f210a.js";import{O as q}from"./MultiOriginJSONSupport-06f8f24a.js";import"./ArrayPool-b51874dd.js";import{f as O,E as H,o as b,r as Q,e as U}from"./Extent-22afa84a.js";import{u as w,A as V,e as X,t as Y,r as Z}from"./projection-4ac247db.js";import{D as $,h as L,I as E,K as D,f as R}from"./aaBoundingRect-2fb32e32.js";import{v as ee}from"./normalizeUtils-353ec0fc.js";import te from"./FeatureLayer-e767d294.js";import{h as re}from"./GraphicsLayer-cbd6e467.js";import{b as oe}from"./Layer-524734fa.js";import{n as ie}from"./objectIdUtils-789e911a.js";import{n as ae}from"./BlendLayer-793ff14a.js";import{c as le}from"./OperationalLayer-db187f46.js";import{_ as ne}from"./PortalLayer-d69e402d.js";import{t as pe}from"./ScaleRangeLayer-d1b04b80.js";import{y as _}from"./Field-945b2973.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-5940888c.js";import"./Polyline-82cb63bc.js";import"./typeUtils-1714017f.js";import"./PopupTemplate-81dc9b83.js";import"./Clonable-7fa7ad97.js";import"./fieldUtils-d430f46c.js";import"./preload-helper-41c905a7.js";import"./arcadeOnDemand-dd48afd7.js";import"./enumeration-925aa0f6.js";import"./number-036ac4ef.js";import"./locale-fe7cc1d0.js";import"./Identifiable-e4f9b04c.js";import"./jsonUtils-36bf3d33.js";import"./CIMSymbol-8f55d4ab.js";import"./Color-7b46c33a.js";import"./colorUtils-639f4d25.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-d4a4b602.js";import"./symbolLayerUtils3D-5cf2dcce.js";import"./aaBoundingBox-fb003858.js";import"./request-09e7d9b2.js";import"./persistableUrlUtils-3635dccc.js";import"./Symbol3DAnchorPosition2D-e9d8a8f4.js";import"./collectionUtils-423a192d.js";import"./Portal-8dfa7a94.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./Ellipsoid-89682c5e.js";import"./Evented-686173eb.js";import"./SimpleObservable-bd2c3ae8.js";import"./mat4-f0dc8788.js";import"./assets-94d592bf.js";import"./zscale-baa108ea.js";import"./normalizeUtilsCommon-d8ea404e.js";import"./UniqueValueRenderer-80c8e628.js";import"./ColorStop-29c89bbb.js";import"./reactiveUtils-53e5756b.js";import"./diffUtils-1bae97a1.js";import"./colorRamps-18bbdf60.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-61985981.js";import"./compilerUtils-7bf6df9e.js";import"./lengthUtils-3c9047c4.js";import"./jsonUtils-27937179.js";import"./layerUtils-eef15b39.js";import"./styleUtils-689841ac.js";import"./jsonUtils-9b4d797d.js";import"./DictionaryLoader-1c3435ac.js";import"./LRUCache-86d9ad15.js";import"./MemCache-b4d68123.js";import"./deprecate-ba25fc78.js";import"./heatmapUtils-8ee685fd.js";import"./vec4f64-6d0e93be.js";import"./serviceCapabilitiesUtils-22f436bd.js";import"./arcgisLayerUrl-1b8d6c52.js";import"./FeatureLayerBase-633118ca.js";import"./HeightModelInfo-73f516f9.js";import"./TimeReference-adaa7961.js";import"./datetime-eed49b9b.js";import"./AttachmentQuery-f1085685.js";import"./Query-b0193ce7.js";import"./TimeExtent-64e16588.js";import"./RelationshipQuery-765b2184.js";import"./fieldType-24ac97df.js";import"./HandleOwner-6217a02e.js";import"./workers-c8fc8d43.js";import"./Connection-3d9fb42e.js";import"./intl-87d72dbe.js";import"./messages-1516d146.js";import"./editsZScale-9d0832b8.js";import"./queryZScale-f6e44ca7.js";import"./FeatureSet-b4fbf079.js";import"./APIKeyMixin-ef4ccb38.js";import"./ArcGISService-24587a68.js";import"./CustomParametersMixin-2798ec18.js";import"./EditBusLayer-b1010019.js";import"./FeatureReductionLayer-5ef01ce2.js";import"./labelingInfo-e65ecbf4.js";import"./labelUtils-b68da70f.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-045186a6.js";import"./RefreshableLayer-12bc7ba2.js";import"./TemporalLayer-f231f22a.js";import"./FeatureTemplate-5a472038.js";import"./FeatureType-017f886c.js";import"./fieldProperties-7a0757a8.js";import"./FieldsIndex-113320d3.js";import"./versionUtils-9a1e7983.js";import"./styleUtils-5c617777.js";import"./asyncUtils-24bd37b2.js";import"./TopFeaturesQuery-d2b31d08.js";import"./popupUtils-b8625101.js";import"./mat4f32-60a2394b.js";import"./ElevationInfo-005ddd87.js";import"./PortalItem-4d7e1038.js";import"./portalItemUtils-0655aa33.js";function S(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!j(e))}function j({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return T.find(o=>{var a,n,s;return r===o.geometryTypeJSON&&((s=(n=(a=t.drawingInfo)==null?void 0:a.renderer)==null?void 0:n.symbol)==null?void 0:s.type)===o.identifyingSymbol.type})}function P(){return new U({xmin:-180,ymin:-90,xmax:180,ymax:90})}const I=new _({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),se=new _({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let m=class extends re{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?g(e)?w(P(),t).geometry:R(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=$();return this.graphics.forEach(o=>{const a=f(o.geometry)?w(o.geometry,t).geometry:null;f(a)&&L(e,a.type==="point"?a:a.extent,e)}),E(e,D)?null:e}get sublayers(){return this.graphics}};i([p({readOnly:!0})],m.prototype,"fullExtent",null),i([p({readOnly:!0})],m.prototype,"fullBounds",null),i([p({readOnly:!0})],m.prototype,"sublayers",null),i([p()],m.prototype,"layer",void 0),i([p()],m.prototype,"layerId",void 0),i([p({readOnly:!0})],m.prototype,"visibilityMode",void 0),m=i([M("esri.layers.MapNotesLayer.MapNotesSublayer")],m);const T=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new A().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new z().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new C().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new C().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new k().toJSON()}];let l=class extends ae(pe(le(ne(q(oe))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=O.WGS84,this.sublayers=new J(T.map(e=>new m({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!S(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!S(e))return null;const o=e.layers.map(a=>{const n=new te;return n.read(a,r),n});return new J({items:o})}readLegacyfeatureCollectionJSON(t,e){return S(e)?v(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=$();return f(this.sublayers)?this.sublayers.forEach(({fullBounds:o})=>f(o)?L(e,o,e):e,e):(r=this.featureCollectionJSON)!=null&&r.layers.some(o=>o.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(o=>{const a=w(o.layerDefinition.extent,t).geometry;f(a)&&L(e,a,e)}),E(e,D)?w(P(),t).geometry:R(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?O.fromJSON(e.layers[0].layerDefinition.spatialReference):O.WGS84}readSublayers(t,e,r){if(S(e))return null;const o=[];let a=e.layers.reduce((n,s)=>Math.max(n,s.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:s,featureSet:y}=n,u=s.id??a++,d=j(n);if(f(d)){const c=new m({id:d.id,title:s.name,layerId:u,layer:this,graphics:y.features.map(({geometry:h,symbol:N,attributes:G,popupInfo:F})=>B.fromJSON({attributes:G,geometry:h,symbol:N,popupTemplate:F}))});o.push(c)}}return new J(o)}writeSublayers(t,e,r,o){var d;const{minScale:a,maxScale:n}=this;if(g(t))return;const s=t.some(c=>c.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(s&&((d=o==null?void 0:o.messages)==null?void 0:d.push(new K("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const y=[];let u=this.spatialReference.toJSON();e:for(const c of t)for(const h of c.graphics)if(f(h.geometry)){u=h.geometry.spatialReference.toJSON();break e}for(const c of T){const h=t.find(N=>c.id===N.id);this._writeMapNoteSublayer(y,h,c,a,n,u,o)}W("featureCollection.layers",y,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=v(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(g(this.sublayers))return;let t=null;const e=[];for(const o of this.sublayers)for(const a of o.graphics)if(f(a.geometry)){const n=a.geometry;t?H(n.spatialReference,t)||(V(n.spatialReference,t)||X()||await Y(),a.geometry=Z(n,t)):t=n.spatialReference,e.push(a)}const r=await ee(e.map(o=>o.geometry));e.forEach((o,a)=>o.geometry=r[a])}_findSublayer(t){var e;return g(this.sublayers)?null:((e=this.sublayers)==null?void 0:e.find(r=>r.id===t))??null}_writeMapNoteSublayer(t,e,r,o,a,n,s){const y=[];if(!g(e)){for(const u of e.graphics)this._writeMapNote(y,u,r.geometryType,s);this._normalizeObjectIds(y,I),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:v(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:a,objectIdField:"OBJECTID",fields:[I.toJSON(),se.toJSON()],spatialReference:n},featureSet:{features:y,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,o){var u,d;if(g(e))return;const{geometry:a,symbol:n,popupTemplate:s}=e;if(g(a))return;if(a.type!==r)return void((u=o==null?void 0:o.messages)==null?void 0:u.push(new x("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(g(n))return void((d=o==null?void 0:o.messages)==null?void 0:d.push(new x("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const y={attributes:{...e.attributes},geometry:a.toJSON(),symbol:n.toJSON()};f(s)&&(y.popupInfo=s.toJSON()),t.push(y)}_normalizeObjectIds(t,e){const r=e.name;let o=ie(r,t)+1;const a=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:s}=n;(s[r]==null||a.has(s[r]))&&(s[r]=o++),a.add(s[r])}}};i([p({readOnly:!0})],l.prototype,"capabilities",void 0),i([b(["portal-item","web-map"],"capabilities",["layers"])],l.prototype,"readCapabilities",null),i([p({readOnly:!0})],l.prototype,"featureCollections",void 0),i([b(["web-map","portal-item"],"featureCollections",["layers"])],l.prototype,"readFeatureCollections",null),i([p({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],l.prototype,"featureCollectionJSON",void 0),i([b(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],l.prototype,"readLegacyfeatureCollectionJSON",null),i([p({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],l.prototype,"featureCollectionType",void 0),i([p({readOnly:!0})],l.prototype,"fullExtent",null),i([p({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],l.prototype,"legendEnabled",void 0),i([p({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),i([p({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"minScale",void 0),i([b(["web-map","portal-item"],"minScale",["layers"])],l.prototype,"readMinScale",null),i([p({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"maxScale",void 0),i([b(["web-map","portal-item"],"maxScale",["layers"])],l.prototype,"readMaxScale",null),i([p({readOnly:!0})],l.prototype,"multipointLayer",null),i([p({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],l.prototype,"operationalLayerType",void 0),i([p({readOnly:!0})],l.prototype,"pointLayer",null),i([p({readOnly:!0})],l.prototype,"polygonLayer",null),i([p({readOnly:!0})],l.prototype,"polylineLayer",null),i([p({type:O})],l.prototype,"spatialReference",void 0),i([b(["web-map","portal-item"],"spatialReference",["layers"])],l.prototype,"readSpatialReference",null),i([p({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],l.prototype,"sublayers",void 0),i([b("web-map","sublayers",["layers"])],l.prototype,"readSublayers",null),i([Q("web-map","sublayers")],l.prototype,"writeSublayers",null),i([p({readOnly:!0})],l.prototype,"textLayer",null),i([p()],l.prototype,"title",void 0),i([p({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=i([M("esri.layers.MapNotesLayer")],l);const Cr=l;export{Cr as default};
