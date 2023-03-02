import{_ as n}from"./preload-helper-41c905a7.js";import{e as a,y as p,a as u}from"./jsonMap-ffa742d3.js";import{U as m,g as v}from"./request-09e7d9b2.js";import{a as f}from"./Error-5cdd6e0a.js";import{y as g,r as d}from"./typedArrayUtil-bf9f210a.js";import{O as w}from"./MultiOriginJSONSupport-06f8f24a.js";import{w as _,f as c}from"./promiseUtils-5940888c.js";import"./ArrayPool-b51874dd.js";import{o as T}from"./Extent-22afa84a.js";import{v as S}from"./HeightModelInfo-73f516f9.js";import{b as $}from"./Layer-524734fa.js";import{s as I}from"./ArcGISCachedService-863a5c01.js";import{p as O}from"./ArcGISService-24587a68.js";import{c as b,f as D}from"./OperationalLayer-db187f46.js";import{_ as E}from"./PortalLayer-d69e402d.js";import{n as A,e as L}from"./LercDecoder-f1486af7.js";import"./string-53224faa.js";import"./nextTick-3ee5a785.js";import"./Ellipsoid-89682c5e.js";import"./geometry-7d866d3f.js";import"./Polyline-82cb63bc.js";import"./typeUtils-1714017f.js";import"./Evented-686173eb.js";import"./Identifiable-e4f9b04c.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./TilemapCache-6dc9c0d9.js";import"./TileInfo-9973cd47.js";import"./aaBoundingRect-2fb32e32.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./byteSizeEstimations-f0cab514.js";import"./HandleOwner-6217a02e.js";import"./reactiveUtils-53e5756b.js";import"./LRUCache-86d9ad15.js";import"./MemCache-b4d68123.js";import"./arcgisLayerUrl-1b8d6c52.js";import"./persistableUrlUtils-3635dccc.js";import"./TimeExtent-64e16588.js";import"./ElevationInfo-005ddd87.js";import"./fieldUtils-d430f46c.js";import"./arcadeOnDemand-dd48afd7.js";import"./lengthUtils-3c9047c4.js";import"./opacityUtils-d4a4b602.js";import"./asyncUtils-24bd37b2.js";import"./layerUtils-eef15b39.js";import"./Portal-8dfa7a94.js";import"./locale-fe7cc1d0.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./PortalItem-4d7e1038.js";import"./assets-94d592bf.js";import"./portalItemUtils-0655aa33.js";import"./projection-4ac247db.js";import"./SimpleObservable-bd2c3ae8.js";import"./mat4-f0dc8788.js";import"./zscale-baa108ea.js";import"./workers-c8fc8d43.js";import"./Connection-3d9fb42e.js";import"./intl-87d72dbe.js";import"./number-036ac4ef.js";import"./messages-1516d146.js";let o=class extends I(O(b(E(w($))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=A()}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}destroy(){this._lercDecoder=g(this._lercDecoder)}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=d(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let i=0;i<t.typeKeywords.length;i++)if(t.typeKeywords[i].toLowerCase()==="elevation 3d layer")return!0;throw new f("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(_).then(()=>this._fetchImageService(r))),Promise.resolve(this)}fetchTile(e,r,t,i){const s=d((i=i||{signal:null}).signal)?i.signal:i.signal=new AbortController().signal,h={responseType:"array-buffer",signal:s},y={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,r,t,i)).then(()=>m(this.getTileUrl(e,r,t),h)).then(l=>this._lercDecoder.decode(l.data,y,s)).then(l=>new L(l))}getTileUrl(e,r,t){const i=!this.tilemapCache&&this.supportsBlankTile,s=v({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${s?"?"+s:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await n(()=>import("./ElevationQuery-b9e13d42.js"),["./ElevationQuery-b9e13d42.js","./asyncUtils-24bd37b2.js","./jsonMap-ffa742d3.js","./typedArrayUtil-bf9f210a.js","./string-53224faa.js","./Error-5cdd6e0a.js","./ArrayPool-b51874dd.js","./nextTick-3ee5a785.js","./promiseUtils-5940888c.js","./Extent-22afa84a.js","./Ellipsoid-89682c5e.js","./Polyline-82cb63bc.js","./projection-4ac247db.js","./preload-helper-41c905a7.js","./mathUtils-ae09f98b.js","./vec3-8818fe1c.js","./common-d0b63c2d.js","./vec4-c7a19f0d.js","./SimpleObservable-bd2c3ae8.js","./mat4-f0dc8788.js","./assets-94d592bf.js","./request-09e7d9b2.js","./aaBoundingRect-2fb32e32.js","./zscale-baa108ea.js","./ElevationSamplerData-3fc2a90f.js","./geometry-7d866d3f.js","./typeUtils-1714017f.js","./TileInfo-9973cd47.js"],import.meta.url);return c(r),new t().query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await n(()=>import("./ElevationQuery-b9e13d42.js"),["./ElevationQuery-b9e13d42.js","./asyncUtils-24bd37b2.js","./jsonMap-ffa742d3.js","./typedArrayUtil-bf9f210a.js","./string-53224faa.js","./Error-5cdd6e0a.js","./ArrayPool-b51874dd.js","./nextTick-3ee5a785.js","./promiseUtils-5940888c.js","./Extent-22afa84a.js","./Ellipsoid-89682c5e.js","./Polyline-82cb63bc.js","./projection-4ac247db.js","./preload-helper-41c905a7.js","./mathUtils-ae09f98b.js","./vec3-8818fe1c.js","./common-d0b63c2d.js","./vec4-c7a19f0d.js","./SimpleObservable-bd2c3ae8.js","./mat4-f0dc8788.js","./assets-94d592bf.js","./request-09e7d9b2.js","./aaBoundingRect-2fb32e32.js","./zscale-baa108ea.js","./ElevationSamplerData-3fc2a90f.js","./geometry-7d866d3f.js","./typeUtils-1714017f.js","./TileInfo-9973cd47.js"],import.meta.url);return c(r),new t().createSampler(this,e,r)}_fetchTileAvailability(e,r,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,i):Promise.resolve("unknown")}async _fetchImageService(e){var i;if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await m(this.parsedUrl.path,r);t.ssl&&(this.url=(i=this.url)==null?void 0:i.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};a([p({json:{read:{source:"copyrightText"}}})],o.prototype,"copyright",void 0),a([p({readOnly:!0,type:S})],o.prototype,"heightModelInfo",void 0),a([p({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),a([p({type:["show","hide"]})],o.prototype,"listMode",void 0),a([p({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],o.prototype,"minScale",void 0),a([p({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],o.prototype,"maxScale",void 0),a([p({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),a([p({type:["ArcGISTiledElevationServiceLayer"]})],o.prototype,"operationalLayerType",void 0),a([p()],o.prototype,"sourceJSON",void 0),a([p({json:{read:!1},value:"elevation",readOnly:!0})],o.prototype,"type",void 0),a([p(D)],o.prototype,"url",void 0),a([p()],o.prototype,"version",void 0),a([T("version",["currentVersion"])],o.prototype,"readVersion",null),o=a([u("esri.layers.ElevationLayer")],o),o.prototype.fetchTile.__isDefault__=!0;const Fe=o;export{Fe as default};