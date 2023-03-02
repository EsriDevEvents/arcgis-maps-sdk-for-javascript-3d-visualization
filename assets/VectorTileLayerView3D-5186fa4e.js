import{e as oe,y as ae,a as We}from"./jsonMap-ffa742d3.js";import{a as Ge}from"./Error-5cdd6e0a.js";import{r as C,t as N,h as Le,w as Be,a as me}from"./typedArrayUtil-bf9f210a.js";import{b as Je,j as je,E as he,f as Ke,p as Ye}from"./promiseUtils-5940888c.js";import{j as Xe}from"./reactiveUtils-53e5756b.js";import"./ArrayPool-b51874dd.js";import{s as Qe}from"./MemCache-b4d68123.js";import{r as Ze,t as et,e as tt}from"./DefaultMaterial.glsl-58ca0075.js";import{u as it}from"./aaBoundingRect-2fb32e32.js";import{U as rt,E as pe}from"./request-09e7d9b2.js";import{u as ot}from"./workers-c8fc8d43.js";import{t as $}from"./Rect-98da58d6.js";import{P as Ae,G as ze,D as nt,L as J,I as W,E as V,F as at,C as q,R as ne}from"./enums-fc527c7c.js";import{E as ke}from"./Texture-d2fa6cd8.js";import{n as st}from"./pbf-845dcafd.js";import{e as lt}from"./rasterizingUtils-2f530e4d.js";import{e as Q}from"./TileKey-4d1284e4.js";import{av as Oe,aw as fe,ax as ct,ay as dt,az as ut,aA as mt,aB as ht,aC as pt}from"./SceneView-7ac05f56.js";import{t as ft,e as ce}from"./config-f7904f35.js";import{n as de,l as A,r as j,i as $e,a as ee,b as _e}from"./StyleRepository-ba91c1e4.js";import{j as _t}from"./TileInfo-9973cd47.js";import{h as gt,T as H}from"./TileInfoView-629d0576.js";import{f as ge}from"./mathUtils-ae09f98b.js";import{Z as O,_ as Ne,$ as ye}from"./enums-c655c737.js";import{M as ie}from"./number-b10bd8f5.js";import{a as yt,t as vt}from"./VisualVariablePassParameters-f892560d.js";import{n as xt,t as wt}from"./vec2f32-eaf29605.js";import{c as ve}from"./GeometryUtils-0258f920.js";import{L as z}from"./enums-fb086c25.js";import{n as bt}from"./LayerView3D-e2b7aff2.js";import{c as St}from"./TiledLayerView3D-f92aa007.js";import{u as Tt}from"./LayerView-92e98881.js";import"./string-53224faa.js";import"./nextTick-3ee5a785.js";import"./mat4f64-abdda1bb.js";import"./ForwardLinearDepth.glsl-52bf5bdc.js";import"./Matrix3PassUniform-df6e2166.js";import"./ShaderBuilder-be7ca791.js";import"./mat3f64-50f3b9f6.js";import"./vec3f32-01c06d8d.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./VertexAttribute-15d1866a.js";import"./View.glsl-879c1eaf.js";import"./mat4-f0dc8788.js";import"./mat4f32-60a2394b.js";import"./Texture2DPassUniform-268e8d2d.js";import"./vec2-848c6cf0.js";import"./vec2f64-70cfd09e.js";import"./MixExternalColor.glsl-f5c601ed.js";import"./ShaderTechniqueConfiguration-0fa0f78c.js";import"./symbolColorUtils-1c63720c.js";import"./PhysicallyBasedRendering.glsl-edd81ba9.js";import"./FloatPassUniform-0426669b.js";import"./vec4-c7a19f0d.js";import"./vec4f64-6d0e93be.js";import"./Float4PassUniform-9354414b.js";import"./RgbaFloatEncoding.glsl-67199794.js";import"./compilerUtils-7bf6df9e.js";import"./Texture2DDrawUniform-e4341b84.js";import"./basicInterfaces-7449a8bf.js";import"./PiUtils.glsl-49462ceb.js";import"./Slice.glsl-cd30f0ea.js";import"./Transform.glsl-052069d0.js";import"./ObjectAndLayerIdColor.glsl-66083f64.js";import"./OutputDepth.glsl-17bf0574.js";import"./OutputHighlight.glsl-ca02d1ee.js";import"./VisualVariables.glsl-bb97d5ba.js";import"./DiscardOrAdjustAlphaBlend.glsl-27f02ebd.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-c3841b0a.js";import"./VertexColor.glsl-2f905a78.js";import"./VerticalOffset.glsl-109e8746.js";import"./Normals.glsl-6a1bc6fb.js";import"./EvaluateSceneLighting.glsl-14c608ff.js";import"./preload-helper-41c905a7.js";import"./SSAOBlur.glsl-c56632c0.js";import"./ScreenSpacePass.glsl-44cc0c5e.js";import"./ReadLinearDepth.glsl-0e6f5c47.js";import"./SSAO.glsl-2c6533cd.js";import"./MultipassTerrainTest.glsl-8b279fcd.js";import"./Extent-22afa84a.js";import"./Ellipsoid-89682c5e.js";import"./Connection-3d9fb42e.js";import"./assets-94d592bf.js";import"./intl-87d72dbe.js";import"./number-036ac4ef.js";import"./locale-fe7cc1d0.js";import"./messages-1516d146.js";import"./context-util-34d303b7.js";import"./floatRGBA-1f66d0a4.js";import"./Clonable-7fa7ad97.js";import"./Cyclical-47bda305.js";import"./geometry-7d866d3f.js";import"./Polyline-82cb63bc.js";import"./typeUtils-1714017f.js";import"./Graphic-5dcfa25e.js";import"./PopupTemplate-81dc9b83.js";import"./Collection-74ae958a.js";import"./Evented-686173eb.js";import"./SimpleObservable-bd2c3ae8.js";import"./fieldUtils-d430f46c.js";import"./arcadeOnDemand-dd48afd7.js";import"./enumeration-925aa0f6.js";import"./Identifiable-e4f9b04c.js";import"./symbols-5f42cb0e.js";import"./CIMSymbol-8f55d4ab.js";import"./Color-7b46c33a.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-d4a4b602.js";import"./symbolLayerUtils3D-5cf2dcce.js";import"./aaBoundingBox-fb003858.js";import"./persistableUrlUtils-3635dccc.js";import"./Symbol3DAnchorPosition2D-e9d8a8f4.js";import"./collectionUtils-423a192d.js";import"./Portal-8dfa7a94.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./jsonUtils-36bf3d33.js";import"./widget-01c21b51.js";import"./uuid-73213768.js";import"./GraphicsLayer-cbd6e467.js";import"./HandleOwner-6217a02e.js";import"./Layer-524734fa.js";import"./BlendLayer-793ff14a.js";import"./ScaleRangeLayer-d1b04b80.js";import"./ElevationInfo-005ddd87.js";import"./lengthUtils-3c9047c4.js";import"./HeightModelInfo-73f516f9.js";import"./projection-4ac247db.js";import"./zscale-baa108ea.js";import"./sphere-a48b65b1.js";import"./byteSizeEstimations-f0cab514.js";import"./quatf64-f8f1c132.js";import"./lineSegment-4eb8b6fa.js";import"./plane-01584357.js";import"./spatialReferenceEllipsoidUtils-88aa82c4.js";import"./scaleUtils-a3b834c2.js";import"./layerUtils-eef15b39.js";import"./AttachmentInfo-23249301.js";import"./AttachmentQuery-f1085685.js";import"./ColorStop-29c89bbb.js";import"./utils-6a5cc1bf.js";import"./asyncUtils-24bd37b2.js";import"./ItemCache-e927309e.js";import"./jsonUtils-9b4d797d.js";import"./UniqueValueRenderer-80c8e628.js";import"./diffUtils-1bae97a1.js";import"./colorRamps-18bbdf60.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-61985981.js";import"./jsonUtils-27937179.js";import"./styleUtils-689841ac.js";import"./DictionaryLoader-1c3435ac.js";import"./LRUCache-86d9ad15.js";import"./deprecate-ba25fc78.js";import"./heatmapUtils-8ee685fd.js";import"./Query-b0193ce7.js";import"./TimeExtent-64e16588.js";import"./Field-945b2973.js";import"./fieldType-24ac97df.js";import"./executeQueryJSON-044ac84b.js";import"./normalizeUtils-353ec0fc.js";import"./normalizeUtilsCommon-d8ea404e.js";import"./query-b4dff312.js";import"./pbfQueryUtils-481b10bc.js";import"./OptimizedFeature-3e582950.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-f6e44ca7.js";import"./FeatureSet-b4fbf079.js";import"./featureConversionUtils-aead6959.js";import"./RelationshipQuery-765b2184.js";import"./TopFeaturesQuery-d2b31d08.js";import"./FeatureLayer-e767d294.js";import"./MultiOriginJSONSupport-06f8f24a.js";import"./serviceCapabilitiesUtils-22f436bd.js";import"./arcgisLayerUrl-1b8d6c52.js";import"./FeatureLayerBase-633118ca.js";import"./OperationalLayer-db187f46.js";import"./TimeReference-adaa7961.js";import"./datetime-eed49b9b.js";import"./editsZScale-9d0832b8.js";import"./APIKeyMixin-ef4ccb38.js";import"./ArcGISService-24587a68.js";import"./CustomParametersMixin-2798ec18.js";import"./EditBusLayer-b1010019.js";import"./FeatureReductionLayer-5ef01ce2.js";import"./labelingInfo-e65ecbf4.js";import"./labelUtils-b68da70f.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-045186a6.js";import"./PortalLayer-d69e402d.js";import"./PortalItem-4d7e1038.js";import"./portalItemUtils-0655aa33.js";import"./RefreshableLayer-12bc7ba2.js";import"./TemporalLayer-f231f22a.js";import"./FeatureTemplate-5a472038.js";import"./FeatureType-017f886c.js";import"./fieldProperties-7a0757a8.js";import"./FieldsIndex-113320d3.js";import"./versionUtils-9a1e7983.js";import"./styleUtils-5c617777.js";import"./popupUtils-b8625101.js";import"./callExpressionWithFeature-eb5719d8.js";import"./quantizationUtils-16db4e0b.js";import"./Scheduler-61737382.js";import"./ElevationSamplerData-3fc2a90f.js";import"./Basemap-5a7c72ee.js";import"./loadAll-8ca49458.js";import"./writeUtils-b7104d82.js";import"./CollectionFlattener-80d223f1.js";import"./TablesMixin-8f62a14c.js";import"./ViewingMode-5d7d590b.js";import"./WaterSurface.glsl-e13d44e2.js";import"./NormalUtils.glsl-84d184a7.js";import"./mat3-4fd89d48.js";import"./HUD.glsl-73b068b4.js";import"./Octree-813f29c9.js";import"./Util-513876a8.js";import"./objectResourceUtils-3685cb27.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-b402c7a7.js";import"./vec33-ca555933.js";import"./DefaultMaterial_COLOR_GAMMA-8ec4380b.js";import"./types-e1c0a5bf.js";import"./Version-621cc6b7.js";import"./quat-77a0169c.js";import"./resourceUtils-527631ac.js";import"./Indices-f9b34f39.js";import"./Texture-ae652f15.js";import"./TextureOnly.glsl-469cc321.js";import"./Attribute-f72d3f37.js";import"./InterleavedLayout-07cc6753.js";import"./DefaultTechniqueConfiguration-b54ae0b1.js";import"./RealisticTree.glsl-29f7cbd7.js";import"./edgeProcessing-ac701714.js";import"./deduplicate-a70aec6f.js";import"./VertexElementDescriptor-2925c6af.js";import"./MeshComponent-777de3ff.js";import"./earcut-61f7b102.js";import"./projection-03824933.js";import"./HUDMaterial.glsl-82200888.js";import"./sdfPrimitives-3ceeab79.js";import"./dehydratedFeatures-efdbcd90.js";import"./labelFormatUtils-f90ee62f.js";import"./orientedBoundingBox-6188c4d9.js";import"./quatf32-51a323b8.js";import"./LineCallout.glsl-76cd336e.js";import"./SnappingCandidate-970faec6.js";import"./MarkerSizing.glsl-950a18f6.js";import"./RibbonLine.glsl-8fe4662b.js";import"./LineStipple.glsl-4eef2aea.js";import"./LineMarker.glsl-2c017de2.js";import"./NativeLine.glsl-9893bc56.js";import"./Path.glsl-2eb74a31.js";import"./ColorMaterial.glsl-1d45c81e.js";import"./Pattern.glsl-698f2083.js";import"./LercDecoder-f1486af7.js";import"./workerHelper-2d7b0d57.js";import"./capabilities-caaa1278.js";import"./colorUtils-c0f43caf.js";import"./TileClipper-ae6eca9e.js";let Pt=class{constructor(e,i){this._lockedSchemaPixelSize=e,this._isGCS=i}getLevelRowColumn(e){return this._isGCS?[e[0],e[1]>>1,e[2]>>1]:this._lockedSchemaPixelSize===256&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this._isGCS?e:this._lockedSchemaPixelSize===256?e>0?e-1:0:e}getShift(e,i){let t=0,r=0;return(this._lockedSchemaPixelSize===256||this._isGCS)&&(e[2]%2&&(t=i),e[1]%2&&(r=i)),[t,r]}getScale(e){if(this._isGCS){if(this._lockedSchemaPixelSize===512)return 4}else if(this._lockedSchemaPixelSize===256&&e===0)return 1;return 2}},te=class{constructor(e,i){this._width=0,this._height=0,this._free=[],this._width=e,this._height=i,this._free.push(new $(0,0,e,i))}get width(){return this._width}get height(){return this._height}allocate(e,i){if(e>this._width||i>this._height)return new $;let t=null,r=-1;for(let o=0;o<this._free.length;++o){const n=this._free[o];e<=n.width&&i<=n.height&&(t===null||n.y<=t.y&&n.x<=t.x)&&(t=n,r=o)}return t===null?new $:(this._free.splice(r,1),t.width<t.height?(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,i)),t.height>i&&this._free.push(new $(t.x,t.y+i,t.width,t.height-i))):(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,t.height)),t.height>i&&this._free.push(new $(t.x,t.y+i,e,t.height-i))),new $(t.x,t.y,e,i))}release(e){for(let i=0;i<this._free.length;++i){const t=this._free[i];if(t.y===e.y&&t.height===e.height&&t.x+t.width===e.x)t.width+=e.width;else if(t.x===e.x&&t.width===e.width&&t.y+t.height===e.y)t.height+=e.height;else if(e.y===t.y&&e.height===t.height&&e.x+e.width===t.x)t.x=e.x,t.width+=e.width;else{if(e.x!==t.x||e.width!==t.width||e.y+e.height!==t.y)continue;t.y=e.y,t.height+=e.height}this._free.splice(i,1),this.release(e)}this._free.push(e)}},xe=class{constructor(e,i,t){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=i,this._glyphSource=t,this._binPack=new te(e-4,i-4),this._glyphData.push(new Uint8Array(e*i)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(e,i){const t=[],r=this._glyphSource,o=new Set,n=1/256;for(const s of i){const l=Math.floor(s*n);o.add(l)}const a=[];return o.forEach(s=>{if(s<=256){const l=e+s;if(this._rangePromises.has(l))a.push(this._rangePromises.get(l));else{const u=r.getRange(e,s).then(()=>{this._rangePromises.delete(l)},()=>{this._rangePromises.delete(l)});this._rangePromises.set(l,u),a.push(u)}}}),Promise.all(a).then(()=>{let s=this._glyphIndex[e];s||(s={},this._glyphIndex[e]=s);for(const l of i){const u=s[l];if(u){t[l]={sdf:!0,rect:u.rect,metrics:u.metrics,page:u.page,code:l};continue}const m=r.getGlyph(e,l);if(!m||!m.metrics)continue;const h=m.metrics;let c;if(h.width===0)c=new $(0,0,0,0);else{const f=h.width+6,y=h.height+2*3;let p=f%4?4-f%4:4,_=y%4?4-y%4:4;p===1&&(p=5),_===1&&(_=5),c=this._binPack.allocate(f+p,y+_),c.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new te(this.width-4,this.height-4),c=this._binPack.allocate(f+p,y+_));const I=this._glyphData[this._currentPage],P=m.bitmap;let v,w;if(P)for(let b=0;b<y;b++){v=f*b,w=this.width*(c.y+b+1)+c.x;for(let x=0;x<f;x++)I[w+x+1]=P[v+x]}}s[l]={rect:c,metrics:h,tileIDs:null,page:this._currentPage},t[l]={sdf:!0,rect:c,metrics:h,page:this._currentPage,code:l},this._dirties[this._currentPage]=!0}return t})}removeGlyphs(e){for(const i in this._glyphIndex){const t=this._glyphIndex[i];if(!t)continue;let r;for(const o in t)if(r=t[o],r.tileIDs.delete(e),r.tileIDs.size===0){const n=this._glyphData[r.page],a=r.rect;let s,l;for(let u=0;u<a.height;u++)for(s=this.width*(a.y+u)+a.x,l=0;l<a.width;l++)n[s+l]=0;delete t[o],this._dirties[r.page]=!0}}}bind(e,i,t,r=0){this._textures[t]||(this._textures[t]=new ke(e,{pixelFormat:Ae.ALPHA,dataType:ze.UNSIGNED_BYTE,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));const o=this._textures[t];o.setSamplingMode(i),this._dirties[t]&&o.setData(this._glyphData[t]),e.bindTexture(o,r),this._dirties[t]=!1}dispose(){this._binPack=null;for(const e of this._textures)e&&e.dispose();this._textures.length=0}},se=class{constructor(e){if(this._metrics=[],this._bitmaps=[],e)for(;e.next();)switch(e.tag()){case 1:{const i=e.getMessage();for(;i.next();)switch(i.tag()){case 3:{const t=i.getMessage();let r,o,n,a,s,l,u;for(;t.next();)switch(t.tag()){case 1:r=t.getUInt32();break;case 2:o=t.getBytes();break;case 3:n=t.getUInt32();break;case 4:a=t.getUInt32();break;case 5:s=t.getSInt32();break;case 6:l=t.getSInt32();break;case 7:u=t.getUInt32();break;default:t.skip()}t.release(),r&&(this._metrics[r]={width:n,height:a,left:s,top:l,advance:u},this._bitmaps[r]=o);break}default:i.skip()}i.release();break}default:e.skip()}}getMetrics(e){return this._metrics[e]}getBitmap(e){return this._bitmaps[e]}},It=class{constructor(){this._ranges=[]}getRange(e){return this._ranges[e]}addRange(e,i){this._ranges[e]=i}},we=class{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,i){const t=this._getFontStack(e);if(t.getRange(i))return Promise.resolve();const r=256*i,o=r+255;if(this._baseURL){const n=this._baseURL.replace("{fontstack}",e).replace("{range}",r+"-"+o);return rt(n,{responseType:"array-buffer"}).then(a=>{t.addRange(i,new se(new st(new Uint8Array(a.data),new DataView(a.data))))}).catch(()=>{t.addRange(i,new se)})}return t.addRange(i,new se),Promise.resolve()}getGlyph(e,i){const t=this._getFontStack(e);if(!t)return;const r=Math.floor(i/256);if(r>256)return;const o=t.getRange(r);return o?{metrics:o.getMetrics(i),bitmap:o.getBitmap(i)}:void 0}_getFontStack(e){let i=this._glyphInfo[e];return i||(i=this._glyphInfo[e]=new It),i}};const Mt="dasharray-";let le=class Ve{constructor(e,i,t=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(e<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,t>0&&(this._maxItemSize=t),this._binPack=new te(e-4,i-4)}dispose(){this._binPack=null,this._mosaicRects={};for(const e of this._textures)e&&e.dispose();this._textures.length=0}getWidth(e){return e>=this._size.length?-1:this._size[e][0]}getHeight(e){return e>=this._size.length?-1:this._size[e][1]}getPageSize(e){return e>=this._size.length?null:this._size[e]}setSpriteSource(e){if(this.dispose(),this.pixelRatio=e.devicePixelRatio,this._mosaicsData.length===0){this._binPack=new te(this._pageWidth-4,this._pageHeight-4);const i=Math.floor(this._pageWidth),t=Math.floor(this._pageHeight),r=new Uint32Array(i*t);this._mosaicsData[0]=r,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=e}getSpriteItem(e,i=!1){let t,r,o=this._mosaicRects[e];if(o)return o;if(!this._sprites||this._sprites.loadStatus!=="loaded"||(e&&e.startsWith(Mt)?([t,r]=this._rasterizeDash(e),i=!0):t=this._sprites.getSpriteInfo(e),!t||!t.width||!t.height||t.width<0||t.height<0))return null;const n=t.width,a=t.height,[s,l,u]=this._allocateImage(n,a);return s.width<=0?null:(this._copy(s,t,l,u,i,r),o={rect:s,width:n,height:a,sdf:t.sdf,simplePattern:!1,pixelRatio:t.pixelRatio,page:l},this._mosaicRects[e]=o,o)}getSpriteItems(e){const i={};for(const t of e)i[t.name]=this.getSpriteItem(t.name,t.repeat);return i}getMosaicItemPosition(e,i){const t=this.getSpriteItem(e,i),r=t&&t.rect;if(!r)return null;r.width=t.width,r.height=t.height;const o=t.width,n=t.height,a=2;return{tl:[r.x+a,r.y+a],br:[r.x+a+o,r.y+a+n],page:t.page}}bind(e,i,t=0,r=0){if(t>=this._size.length||t>=this._mosaicsData.length)return;this._textures[t]||(this._textures[t]=new ke(e,{pixelFormat:Ae.RGBA,dataType:ze.UNSIGNED_BYTE,wrapMode:nt.CLAMP_TO_EDGE,width:this._size[t][0],height:this._size[t][1]},new Uint8Array(this._mosaicsData[t].buffer)));const o=this._textures[t];o.setSamplingMode(i),this._dirties[t]&&o.setData(new Uint8Array(this._mosaicsData[t].buffer)),e.bindTexture(o,r),this._dirties[t]=!1}static _copyBits(e,i,t,r,o,n,a,s,l,u,m){let h=r*i+t,c=s*n+a;if(m){c-=n;for(let g=-1;g<=u;g++,h=((g+u)%u+r)*i+t,c+=n)for(let f=-1;f<=l;f++)o[c+f]=e[h+(f+l)%l]}else for(let g=0;g<u;g++){for(let f=0;f<l;f++)o[c+f]=e[h+f];h+=i,c+=n}}_copy(e,i,t,r,o,n){if(!this._sprites||this._sprites.loadStatus!=="loaded"||t>=this._mosaicsData.length)return;const a=new Uint32Array(n?n.buffer:this._sprites.image.buffer),s=this._mosaicsData[t];s&&a||console.error("Source or target images are uninitialized!");const l=2,u=n?i.width:this._sprites.width;Ve._copyBits(a,u,i.x,i.y,s,r[0],e.x+l,e.y+l,i.width,i.height,o),this._dirties[t]=!0}_allocateImage(e,i){e+=2,i+=2;const t=Math.max(e,i);if(this._maxItemSize&&this._maxItemSize<t){const a=new $(0,0,e,i);return this._mosaicsData.push(new Uint32Array(e*i)),this._dirties.push(!0),this._size.push([e,i]),this._textures.push(void 0),[a,this._mosaicsData.length-1,[e,i]]}let r=e%4?4-e%4:4,o=i%4?4-i%4:4;r===1&&(r=5),o===1&&(o=5);const n=this._binPack.allocate(e+r,i+o);return n.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new te(this._pageWidth-4,this._pageHeight-4),this._allocateImage(e,i)):[n,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(e){const i=/\[(.*?)\]/,t=e.match(i);if(!t)return null;const r=t[1].split(",").map(Number),o=e.slice(e.lastIndexOf("-")+1),[n,a,s]=lt(r,o);return[{x:0,y:0,width:a,height:s,sdf:!0,pixelRatio:1},new Uint8Array(n.buffer)]}},Rt=class{constructor(e,i,t){this._layer=e,this._styleRepository=i,this.devicePixelRatio=t,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null,this._styleRepository=null,this._layer=null,this._spriteMosaic=null,this._glyphMosaic=null}get spriteMosaic(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}async start(e){this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,e),this._spriteSourcePromise.then(r=>{this._spriteMosaic=new le(1024,1024,250),this._spriteMosaic.setSpriteSource(r)});const i=this._layer.currentStyleInfo.glyphsUrl,t=new we(i?pe(i,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new xe(1024,1024,t),this._broadcastPromise=ot("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then(r=>{if(this._connection=r,this._layer&&!this._connection.closed){const o=r.broadcast("setStyle",this._layer.currentStyleInfo.style,e);Promise.all(o).catch(n=>Je(n))}})}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",e)),this._broadcastPromise}setSpriteSource(e){const i=new le(1024,1024,250);return i.setSpriteSource(e),this._spriteMosaic=i,this._spriteSourcePromise=Promise.resolve(e),i}async setStyle(e,i){await this._broadcastPromise,this._styleRepository=e,this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,null),this._spriteSourcePromise.then(r=>{this._spriteMosaic=new le(1024,1024,250),this._spriteMosaic.setSpriteSource(r)});const t=new we(this._layer.currentStyleInfo.glyphsUrl?pe(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new xe(1024,1024,t),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",i)),this._broadcastPromise}fetchTileData(e,i){return this._getRefKeys(e,i).then(t=>{const r=this._layer.sourceNameToSource,o=[];for(const n in r)o.push(n);return this._getSourcesData(o,t,i)})}parseTileData(e,i){const t=e&&e.data;if(!t)return Promise.resolve(null);const{sourceName2DataAndRefKey:r,transferList:o}=t;return Object.keys(r).length===0?Promise.resolve(null):this._broadcastPromise.then(()=>this._connection.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:r,styleLayerUIDs:e.styleLayerUIDs},{...i,transferList:o}))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}async _getTilePayload(e,i,t){const r=Q.pool.acquire(e.id),o=this._layer.sourceNameToSource[i],{level:n,row:a,col:s}=r;Q.pool.release(r);try{return{protobuff:await o.requestTile(n,a,s,t),sourceName:i}}catch(l){if(je(l))throw l;return{protobuff:null,sourceName:i}}}_getRefKeys(e,i){const t=this._layer.sourceNameToSource,r=new Array;for(const o in t){const n=t[o].getRefKey(e,i);r.push(n)}return he(r)}_getSourcesData(e,i,t){const r=[];for(let o=0;o<i.length;o++)if(i[o].value==null||e[o]==null)r.push(null);else{const n=this._getTilePayload(i[o].value,e[o],t);r.push(n)}return he(r).then(o=>{const n={},a=[];for(let s=0;s<o.length;s++){const l=o[s].value;if(l&&l.protobuff&&l.protobuff.byteLength>0){const u=i[s].value.id;n[l.sourceName]={refKey:u,protobuff:l.protobuff},a.push(l.protobuff)}}return{sourceName2DataAndRefKey:n,transferList:a}})}};function Dt(d,e,i,t,r,o){const{iconRotationAlignment:n,textRotationAlignment:a,iconTranslate:s,iconTranslateAnchor:l,textTranslate:u,textTranslateAnchor:m}=t;let h=0;for(const c of d.colliders){const[g,f]=c.partIndex===0?s:u,y=c.partIndex===0?l:m,p=c.minLod<=o&&o<=c.maxLod;h+=p?0:1,c.enabled=p,c.xScreen=c.xTile*r[0]+c.yTile*r[3]+r[6],c.yScreen=c.xTile*r[1]+c.yTile*r[4]+r[7],y===j.MAP?(c.xScreen+=i*g-e*f,c.yScreen+=e*g+i*f):(c.xScreen+=g,c.yScreen+=f),A.VIEWPORT===(c.partIndex===0?n:a)?(c.dxScreen=c.dxPixels,c.dyScreen=c.dyPixels):(c.dxScreen=i*(c.dxPixels+c.width/2)-e*(c.dyPixels+c.height/2)-c.width/2,c.dyScreen=e*(c.dxPixels+c.width/2)+i*(c.dyPixels+c.height/2)-c.height/2)}d.colliders.length>0&&h===d.colliders.length&&(d.unique.show=!1)}let Ct=class{constructor(e,i,t,r,o,n){this._symbols=e,this._styleRepository=r,this._zoom=o,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new Oe(i,t,ft),this._si=Math.sin(Math.PI*n/180),this._co=Math.cos(Math.PI*n/180);for(const a of e)for(const s of a.symbols)this._allNeededMatrices.has(s.tile)||this._allNeededMatrices.set(s.tile,Ze(s.tile.transforms.tileUnitsToPixels))}work(e){const i=this._gridIndex;function t(o){const n=o.xScreen+o.dxScreen,a=o.yScreen+o.dyScreen,s=n+o.width,l=a+o.height,[u,m,h,c]=i.getCellSpan(n,a,s,l);for(let g=m;g<=c;g++)for(let f=u;f<=h;f++){const y=i.cells[g][f];for(const p of y){const _=p.xScreen+p.dxScreen,I=p.yScreen+p.dyScreen,P=_+p.width,v=I+p.height;if(!(s<_||n>P||l<I||a>v))return!0}}return!1}const r=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const o=this._symbols[this._currentLayerCursor],n=this._getProperties(o.styleLayerUID);for(;this._currentSymbolCursor<o.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-r>e)return!1;const a=o.symbols[this._currentSymbolCursor];if(!a.unique.show)continue;Dt(a,this._si,this._co,n,this._allNeededMatrices.get(a.tile),this._zoom);const s=a.unique;if(!s.show)continue;const{iconAllowOverlap:l,iconIgnorePlacement:u,textAllowOverlap:m,textIgnorePlacement:h}=n;for(const c of a.colliders){if(!c.enabled)continue;const g=s.parts[c.partIndex];g.show&&!(c.partIndex?m:l)&&t(c)&&(c.hard?s.show=!1:g.show=!1)}if(s.show)for(const c of a.colliders){if(!c.enabled||(c.partIndex?h:u)||!s.parts[c.partIndex].show)continue;const g=c.xScreen+c.dxScreen,f=c.yScreen+c.dyScreen,y=g+c.width,p=f+c.height,[_,I,P,v]=this._gridIndex.getCellSpan(g,f,y,p);for(let w=I;w<=v;w++)for(let b=_;b<=P;b++)this._gridIndex.cells[w][b].push(c)}}}return!0}_getProperties(e){const i=this._styleProps.get(e);if(i)return i;const t=this._zoom,r=this._styleRepository.getStyleLayerByUID(e),o=r.getLayoutValue("symbol-placement",t)!==de.POINT;let n=r.getLayoutValue("icon-rotation-alignment",t);n===A.AUTO&&(n=o?A.MAP:A.VIEWPORT);let a=r.getLayoutValue("text-rotation-alignment",t);a===A.AUTO&&(a=o?A.MAP:A.VIEWPORT);const s=r.getPaintValue("icon-translate",t),l=r.getPaintValue("icon-translate-anchor",t),u=r.getPaintValue("text-translate",t),m=r.getPaintValue("text-translate-anchor",t),h={iconAllowOverlap:r.getLayoutValue("icon-allow-overlap",t),iconIgnorePlacement:r.getLayoutValue("icon-ignore-placement",t),textAllowOverlap:r.getLayoutValue("text-allow-overlap",t),textIgnorePlacement:r.getLayoutValue("text-ignore-placement",t),iconRotationAlignment:n,textRotationAlignment:a,iconTranslateAnchor:l,iconTranslate:s,textTranslateAnchor:m,textTranslate:u};return this._styleProps.set(e,h),h}};function Et(d,e){if(d.priority-e.priority)return d.priority-e.priority;const i=d.tile.key,t=e.tile.key;return i.world-t.world?i.world-t.world:i.level-t.level?i.level-t.level:i.row-t.row?i.row-t.row:i.col-t.col?i.col-t.col:d.xTile-e.xTile?d.xTile-e.xTile:d.yTile-e.yTile}let Ut=class{get running(){return this._running}constructor(e,i,t,r,o,n){this._visibleTiles=e,this._symbolRepository=i,this._createCollisionJob=t,this._assignTileSymbolsOpacity=r,this._symbolLayerSorter=o,this._isLayerVisible=n,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}setScreenSize(e,i){this._screenWidth===e&&this._screenHeight===i||this.restart(),this._screenWidth=e,this._screenHeight=i}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(e){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const i=performance.now();if(!this._selectionJob.work(e)||(this._selectionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const i=performance.now();if(!this._collisionJob.work(e)||(this._collisionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const i=performance.now();if(!this._opacityJob.work(e)||(this._opacityJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}return this._running=!1,!0}_createSelectionJob(){const e=this._symbolRepository.uniqueSymbols;for(let s=0;s<e.length;s++){const l=e[s];for(let u=0;u<l.uniqueSymbols.length;u++){const m=l.uniqueSymbols[u];for(const h of m.tileSymbols)h.selectedForRendering=!1}}const i=[];let t=0,r=0;const o=this._isLayerVisible;function n(s){let l;const u=performance.now();for(;r<e.length;r++,t=0){const m=e[r],h=m.styleLayerUID;if(!o(h)){i[r]||(i[r]={styleLayerUID:h,symbols:[]});continue}i[r]=i[r]||{styleLayerUID:h,symbols:[]};const c=i[r];for(;t<m.uniqueSymbols.length;t++){if(l=m.uniqueSymbols[t],t%100==99&&performance.now()-u>s)return!1;let g=null,f=!1,y=!1;for(const p of l.tileSymbols)if(!y||!f){const _=p.tile;(!g||_.isCoverage||_.neededForCoverage&&!f)&&(g=p,(_.neededForCoverage||_.isCoverage)&&(y=!0),_.isCoverage&&(f=!0))}if(g.selectedForRendering=!0,y){c.symbols.push(g),l.show=!0;for(const p of l.parts)p.show=!0}else l.show=!1}}for(const m of i)m.symbols.sort(Et);return!0}const a=this._symbolLayerSorter;return{work:n,get sortedSymbols(){return i.sort(a)}}}_createOpacityJob(){const e=this._assignTileSymbolsOpacity,i=this._visibleTiles;let t=0;function r(o,n){const a=o.symbols;for(const[s,l]of a)Lt(l,n);e(o,n);for(const s of o.childrenTiles)r(s,n)}return{work(o){const n=performance.now();for(;t<i.length;t++){if(performance.now()-n>o)return!1;const a=i[t];C(a.parentTile)||r(a,performance.now())}return!0}}}};function Lt(d,e){for(const i of d){const t=i.unique;for(const r of t.parts){const o=r.targetOpacity>.5?1:-1;r.startOpacity+=o*((e-r.startTime)/ce),r.startOpacity=Math.min(Math.max(r.startOpacity,0),1),r.startTime=e,r.targetOpacity=t.show&&r.show?1:0}}}const At=32,zt=8,kt=64;class Ot{constructor(e,i,t){this.tileCoordRange=e,this._visibleTiles=i,this._createUnique=t,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return N(this._uniqueSymbolLayerArray)&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}add(e,i){this._uniqueSymbolLayerArray=null;let t=this._tiles.get(e.id);t||(t={symbols:new Map},this._tiles.set(e.id,t));const r=new Map;if(i)for(const a of i)t.symbols.has(a)&&(r.set(a,t.symbols.get(a)),t.symbols.delete(a));else for(const[a,s]of e.layerData)t.symbols.has(a)&&(r.set(a,t.symbols.get(a)),t.symbols.delete(a));this._removeSymbols(r);const o=e.symbols,n=new Map;for(const[a,s]of o){let l=s.length;if(l>=At){let u=this.tileCoordRange;do u/=2,l/=4;while(l>zt&&u>kt);const m=new Oe(this.tileCoordRange,this.tileCoordRange,u);n.set(a,{flat:s,index:m}),t.symbols.set(a,{flat:s,index:m});for(const h of s)m.getCell(h.xTile,h.yTile).push(h)}else n.set(a,{flat:s}),t.symbols.set(a,{flat:s})}this._addSymbols(e.key,o)}deleteStyleLayers(e){this._uniqueSymbolLayerArray=null;for(const[i,t]of this._tiles){const r=new Map;for(const o of e)t.symbols.has(o)&&(r.set(o,t.symbols.get(o)),t.symbols.delete(o));this._removeSymbols(r),t.symbols.size===0&&this._tiles.delete(i)}}removeTile(e){this._uniqueSymbolLayerArray=null;const i=this._tiles.get(e.id);if(!i)return;const t=new Map;for(const[r,o]of e.symbols)i.symbols.has(r)&&(t.set(r,i.symbols.get(r)),i.symbols.delete(r));this._removeSymbols(t),i.symbols.size===0&&this._tiles.delete(e.id)}_removeSymbols(e){for(const[i,{flat:t}]of e)for(const r of t){const o=r.unique,n=o.tileSymbols,a=n.length-1;for(let s=0;s<a;s++)if(n[s]===r){n[s]=n[a];break}if(n.length=a,a===0){const s=this._uniqueSymbolsReferences.get(i);s.delete(o),s.size===0&&this._uniqueSymbolsReferences.delete(i)}r.unique=null}}_addSymbols(e,i){if(i.size===0)return;const t=this._visibleTiles;for(const r of t)r.parentTile||r.key.world!==e.world||r.key.level===e.level&&!r.key.equals(e)||this._matchSymbols(r,e,i);for(const[r,o]of i)for(const n of o)if(N(n.unique)){const a=this._createUnique();n.unique=a,a.tileSymbols.push(n);let s=this._uniqueSymbolsReferences.get(r);s||(s=new Set,this._uniqueSymbolsReferences.set(r,s)),s.add(a)}}_matchSymbols(e,i,t){if(e.key.level>i.level){const o=e.key.level-i.level;if(e.key.row>>o!==i.row||e.key.col>>o!==i.col)return}if(i.level>e.key.level){const o=i.level-e.key.level;if(i.row>>o!==e.key.row||i.col>>o!==e.key.col)return}if(i.equals(e.key)){for(const o of e.childrenTiles)this._matchSymbols(o,i,t);return}const r=new Map;for(const[o,n]of t){const a=[];for(const m of n){const h=fe(this.tileCoordRange,m.xTile,i.level,i.col,e.key.level,e.key.col),c=fe(this.tileCoordRange,m.yTile,i.level,i.row,e.key.level,e.key.row);h>=0&&h<this.tileCoordRange&&c>=0&&c<this.tileCoordRange&&a.push({symbol:m,xTransformed:h,yTransformed:c})}const s=[],l=e.key.level<i.level?1:1<<e.key.level-i.level,u=this._tiles.get(e.id).symbols.get(o);if(u){const m=u.flat;for(const h of a){let c,g=!1;const f=h.xTransformed,y=h.yTransformed;c=C(u.index)?u.index.getCell(f,y):m;const p=h.symbol,_=p.hash;for(const I of c)if(_===I.hash&&Math.abs(f-I.xTile)<=l&&Math.abs(y-I.yTile)<=l){const P=I.unique;p.unique=P,P.tileSymbols.push(p),g=!0;break}g||s.push(p)}}s.length>0&&r.set(o,s)}for(const o of e.childrenTiles)this._matchSymbols(o,i,r)}_createUniqueSymbolLayerArray(){const e=this._uniqueSymbolsReferences,i=new Array(e.size);let t,r=0;for(const[o,n]of e){const a=new Array(n.size);t=0;for(const s of n)a[t++]=s;i[r]={styleLayerUID:o,uniqueSymbols:a},r++}return i}}function $t(d,e){const i=[],t=new Ot(4096,i,()=>{const o=new dt;return o.show=!1,o.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),o.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),o}),r=new Ut(i,t,(o,n,a)=>new Ct(o,n,a,d.styleRepository,d.key.level,0),(o,n)=>{ct(o,n,!1)},()=>0,o=>{const n=e.getStyleLayerByUID(o).getLayoutProperty("visibility");return!n||n.getValue()!==$e.NONE});i.push(d),t.add(d),r.setScreenSize(512,512),r.continue(1/0)}let Nt=class extends gt{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){const i=Q.pool.acquire(e),t=i.level===0?null:Q.getId(i.level-1,i.row>>1,i.col>>1,i.world);return Q.pool.release(i),t}getTileCoverage(e,i,t){const r=super.getTileCoverage(e,i,t);if(!r)return r;const o=1<<r.lodInfo.level;return r.spans=r.spans.filter(n=>n.row>=0&&n.row<o),r}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const i=this._fullCacheLodInfos;if(e>i[0].scale)return i[0].level;let t,r;for(let o=0;o<i.length-1;o++)if(r=i[o+1],e>r.scale)return t=i[o],t.level+(t.scale-e)/(t.scale-r.scale);return i[i.length-1].level}}_initializeFullCacheLODs(e){let i;if(e[0].level===0)i=e.map(t=>({level:t.level,resolution:t.resolution,scale:t.scale}));else{const t=this.tileInfo.size[0],r=this.tileInfo.spatialReference;i=_t.create({size:t,spatialReference:r}).lods.map(o=>({level:o.level,resolution:o.resolution,scale:o.scale}))}for(let t=0;t<i.length;t++)this._levelByScale[i[t].scale]=i[t].level;this._fullCacheLodInfos=i}},be=class extends Rt{constructor(e,i,t,r,o){super(e,i,t),this._memCache=r,this._loader=o,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new Nt(e.tileInfo,e.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach(e=>e.abort()),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(e,i,t,r){const o=new Q(e,i,t,0);let n=this._memCache.get(o.id);if(C(n))return n.retain(),n;const a=await this._getVectorTileData(o);if(Ke(r),!this._layer)return null;if(n=this._memCache.get(o.id),C(n))return n.retain(),n;const s=this._layer.tileInfo.getTileBounds(it(),o),l=this._tileInfoView.getTileResolution(e);return n=new ut(o,l,s[0],s[3],512,512,this._styleRepository,this._memCache),C(a)?(n.setData(a),n.retain(),this._memCache.put(o.id,n,n.memoryUsage*n.referenced,Qe)):n.setData(null),n.neededForCoverage=!0,n.transforms.tileUnitsToPixels=et(1/8,0,0,0,1/8,0,0,0,1),$t(n,this._styleRepository),n}_getVectorTileData(e){const i=e.id;if(this._ongoingTileRequests.has(i))return this._ongoingTileRequests.get(i);const t=new AbortController,r={signal:t.signal},o=this._getParsedVectorTileData(e,r).then(n=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),n)).catch(()=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),null));return this._ongoingTileRequests.set(i,o),this._ongoingRequestToController.set(i,t),o}_getParsedVectorTileData(e,i){return this.fetchTileData(e,i).then(t=>this.parseTileData({key:e,data:t},i))}request(e,i){return this._loader.request(e,"binary",i)}},re=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,i){}draw(e,i,t){}drawMany(e,i,t){for(const r of i)r.visible&&this.draw(e,r,t)}},Vt=class extends re{constructor(){super(...arguments),this._color=mt(1,0,0,1),this._patternMatrix=tt(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,i){const{context:t,painter:r,styleLayerUID:o,requestRender:n,allowDelayedRender:a}=e;this._loadWGLResources(e);const s=e.displayLevel,l=e.styleLayer,u=l.backgroundMaterial,m=r.vectorTilesMaterialManager,h=l.getPaintValue("background-color",s),c=l.getPaintValue("background-opacity",s),g=l.getPaintValue("background-pattern",s),f=g!==void 0,y=h[3]*c,p=1|window.devicePixelRatio,_=e.spriteMosaic;let I,P;const v=p>Ne?2:1,w=e.drawPhase===H.HITTEST,b=this._programOptions;b.id=w,b.pattern=f;const x=m.getMaterialProgram(t,u,b);if(a&&C(n)&&!x.compiled)n();else{if(t.bindVAO(this._vao),t.useProgram(x),f){const S=_.getMosaicItemPosition(g,!0);if(C(S)){const{tl:M,br:T,page:D}=S;I=T[0]-M[0],P=T[1]-M[1];const R=_.getPageSize(D);C(R)&&(_.bind(t,J.LINEAR,D,O),x.setUniform4f("u_tlbr",M[0],M[1],T[0],T[1]),x.setUniform2fv("u_mosaicSize",R),x.setUniform1i("u_texture",O))}x.setUniform1f("u_opacity",c)}else this._color[0]=y*h[0],this._color[1]=y*h[1],this._color[2]=y*h[2],this._color[3]=y,x.setUniform4fv("u_color",this._color);if(x.setUniform1f("u_depth",l.z||0),w){const S=ie(o+1);x.setUniform4fv("u_id",S)}for(const S of i){if(x.setUniform1f("u_coord_range",S.rangeX),x.setUniformMatrix3fv("u_dvsMat3",S.transforms.dvs),f){const M=Math.max(2**(Math.round(s)-S.key.level),1),T=v*S.width*M,D=T/ge(I),R=T/ge(P);this._patternMatrix[0]=D,this._patternMatrix[4]=R,x.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(W.EQUAL,0,255),t.drawArrays(V.TRIANGLE_STRIP,0,4)}}}_loadWGLResources(e){if(this._vao)return;const{context:i,styleLayer:t}=e,r=t.backgroundMaterial,o=new Int8Array([0,0,1,0,0,1,1,1]),n=yt.createVertex(i,at.STATIC_DRAW,o),a=new vt(i,r.getAttributeLocations(),r.getLayoutInfo(),{geometry:n});this._vao=a}},Ft=class extends re{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:r,requiredLevel:o,state:n,drawPhase:a,painter:s,spriteMosaic:l,styleLayerUID:u,requestRender:m,allowDelayedRender:h}=e;if(!i.some(b=>{var x;return((x=b.layerData.get(u))==null?void 0:x.circleIndexCount)??!1}))return;const c=e.styleLayer,g=c.circleMaterial,f=s.vectorTilesMaterialManager,y=1.2,p=c.getPaintValue("circle-translate",r),_=c.getPaintValue("circle-translate-anchor",r),I=a===H.HITTEST,P=this._programOptions;P.id=I;const v=f.getMaterialProgram(t,g,P);if(h&&C(m)&&!v.compiled)return void m();t.useProgram(v),v.setUniformMatrix3fv("u_displayMat3",_===j.VIEWPORT?n.displayMat3:n.displayViewMat3),v.setUniform2fv("u_circleTranslation",p),v.setUniform1f("u_depth",c.z),v.setUniform1f("u_antialiasingWidth",y);let w=-1;if(I){const b=ie(u+1);v.setUniform4fv("u_id",b)}for(const b of i){if(!b.layerData.has(u))continue;b.key.level!==w&&(w=b.key.level,g.setDataUniforms(v,r,c,w,l));const x=b.layerData.get(u);if(!x.circleIndexCount)continue;x.prepareForRendering(t);const S=x.circleVertexArrayObject;N(S)||(t.bindVAO(S),v.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs),o!==b.key.level?t.setStencilFunction(W.EQUAL,b.stencilRef,255):t.setStencilFunction(W.GREATER,255,255),t.drawElements(V.TRIANGLES,x.circleIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*x.circleIndexStart),b.triangleCount+=x.circleIndexCount/3)}}};const Se=1/65536;class qt extends re{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,i){const{displayLevel:t,drawPhase:r,renderPass:o,spriteMosaic:n,styleLayerUID:a}=e;let s=!1;for(const v of i)if(v.layerData.has(a)){const w=v.layerData.get(a);if(w.fillIndexCount>0||w.outlineIndexCount>0){s=!0;break}}if(!s)return;const l=e.styleLayer,u=l.getPaintProperty("fill-pattern"),m=u!==void 0,h=m&&u.isDataDriven;let c;if(m&&!h){const v=u.getValue(t);c=n.getMosaicItemPosition(v,!0)}const g=!m&&l.getPaintValue("fill-antialias",t);let f=!0,y=1;if(!m){const v=l.getPaintProperty("fill-color"),w=l.getPaintProperty("fill-opacity");if(!(v!=null&&v.isDataDriven)&&!(w!=null&&w.isDataDriven)){const b=l.getPaintValue("fill-color",t);y=l.getPaintValue("fill-opacity",t)*b[3],y>=1&&(f=!1)}}if(f&&o==="opaque")return;let p;r===H.HITTEST&&(p=ie(a+1));const _=l.getPaintValue("fill-translate",t),I=l.getPaintValue("fill-translate-anchor",t);(f||o!=="translucent")&&this._drawFill(e,a,l,i,_,I,m,c,h,p);const P=!l.hasDataDrivenOutlineColor&&l.outlineUsesFillColor&&y<1;g&&o!=="opaque"&&!P&&this._drawOutline(e,a,l,i,_,I,p)}_drawFill(e,i,t,r,o,n,a,s,l,u){if(a&&!l&&N(s))return;const{context:m,displayLevel:h,state:c,drawPhase:g,painter:f,pixelRatio:y,spriteMosaic:p,requestRender:_,allowDelayedRender:I}=e,P=t.fillMaterial,v=f.vectorTilesMaterialManager,w=y>Ne?2:1,b=g===H.HITTEST,x=this._fillProgramOptions;x.id=b,x.pattern=a;const S=v.getMaterialProgram(m,P,x);if(I&&C(_)&&!S.compiled)return void _();if(m.useProgram(S),C(s)){const{page:T}=s,D=p.getPageSize(T);C(D)&&(p.bind(m,J.LINEAR,T,O),S.setUniform2fv("u_mosaicSize",D),S.setUniform1i("u_texture",O))}S.setUniformMatrix3fv("u_displayMat3",n===j.VIEWPORT?c.displayMat3:c.displayViewMat3),S.setUniform2fv("u_fillTranslation",o),S.setUniform1f("u_depth",t.z+Se),b&&S.setUniform4fv("u_id",u);let M=-1;for(const T of r){if(!T.layerData.has(i))continue;T.key.level!==M&&(M=T.key.level,P.setDataUniforms(S,h,t,M,p));const D=T.layerData.get(i);if(!D.fillIndexCount)continue;D.prepareForRendering(m);const R=D.fillVertexArrayObject;if(!N(R)){if(m.bindVAO(R),S.setUniformMatrix3fv("u_dvsMat3",T.transforms.dvs),m.setStencilFunction(W.EQUAL,T.stencilRef,255),a){const U=Math.max(2**(Math.round(h)-T.key.level),1),L=T.rangeX/(w*T.width*U);S.setUniform1f("u_patternFactor",L)}if(l){const U=D.patternMap;if(!U)continue;for(const[L,G]of U){const B=p.getPageSize(L);C(B)&&(p.bind(m,J.LINEAR,L,O),S.setUniform2fv("u_mosaicSize",B),S.setUniform1i("u_texture",O),m.drawElements(V.TRIANGLES,G[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*G[0]))}}else m.drawElements(V.TRIANGLES,D.fillIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*D.fillIndexStart);T.triangleCount+=D.fillIndexCount/3}}}_drawOutline(e,i,t,r,o,n,a){const{context:s,displayLevel:l,state:u,drawPhase:m,painter:h,pixelRatio:c,spriteMosaic:g,requestRender:f,allowDelayedRender:y}=e,p=t.outlineMaterial,_=h.vectorTilesMaterialManager,I=.75/c,P=m===H.HITTEST,v=this._outlineProgramOptions;v.id=P;const w=_.getMaterialProgram(s,p,v);if(y&&C(f)&&!w.compiled)return void f();s.useProgram(w),w.setUniformMatrix3fv("u_displayMat3",n===j.VIEWPORT?u.displayMat3:u.displayViewMat3),w.setUniform2fv("u_fillTranslation",o),w.setUniform1f("u_depth",t.z+Se),w.setUniform1f("u_outline_width",I),P&&w.setUniform4fv("u_id",a);let b=-1;for(const x of r){if(!x.layerData.has(i))continue;x.key.level!==b&&(b=x.key.level,p.setDataUniforms(w,l,t,b,g));const S=x.layerData.get(i);if(S.prepareForRendering(s),!S.outlineIndexCount)continue;const M=S.outlineVertexArrayObject;N(M)||(s.bindVAO(M),w.setUniformMatrix3fv("u_dvsMat3",x.transforms.dvs),s.setStencilFunction(W.EQUAL,x.stencilRef,255),s.drawElements(V.TRIANGLES,S.outlineIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*S.outlineIndexStart),x.triangleCount+=S.outlineIndexCount/3)}}}let Ht=class extends re{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:r,state:o,drawPhase:n,painter:a,pixelRatio:s,spriteMosaic:l,styleLayerUID:u,requestRender:m,allowDelayedRender:h}=e;if(!i.some(R=>{var U;return((U=R.layerData.get(u))==null?void 0:U.lineIndexCount)??!1}))return;const c=e.styleLayer,g=c.lineMaterial,f=a.vectorTilesMaterialManager,y=c.getPaintValue("line-translate",r),p=c.getPaintValue("line-translate-anchor",r),_=c.getPaintProperty("line-pattern"),I=_!==void 0,P=I&&_.isDataDriven;let v,w;if(I&&!P){const R=_.getValue(r);v=l.getMosaicItemPosition(R)}let b=!1;if(!I){const R=c.getPaintProperty("line-dasharray");if(w=R!==void 0,b=w&&R.isDataDriven,w&&!b){const U=R.getValue(r),L=c.getDashKey(U,c.getLayoutValue("line-cap",r));v=l.getMosaicItemPosition(L)}}const x=1/s,S=n===H.HITTEST,M=this._programOptions;M.id=S,M.pattern=I,M.sdf=w;const T=f.getMaterialProgram(t,g,M);if(h&&C(m)&&!T.compiled)return void m();if(t.useProgram(T),T.setUniformMatrix3fv("u_displayViewMat3",o.displayViewMat3),T.setUniformMatrix3fv("u_displayMat3",p===j.VIEWPORT?o.displayMat3:o.displayViewMat3),T.setUniform2fv("u_lineTranslation",y),T.setUniform1f("u_depth",c.z),T.setUniform1f("u_antialiasing",x),S){const R=ie(u+1);T.setUniform4fv("u_id",R)}if(v&&C(v)){const{page:R}=v,U=l.getPageSize(R);C(U)&&(l.bind(t,J.LINEAR,R,O),T.setUniform2fv("u_mosaicSize",U),T.setUniform1i("u_texture",O))}let D=-1;for(const R of i){if(!R.layerData.has(u))continue;R.key.level!==D&&(D=R.key.level,g.setDataUniforms(T,r,c,D,l));const U=2**(r-D)/s;T.setUniform1f("u_zoomFactor",U);const L=R.layerData.get(u);if(!L.lineIndexCount)continue;L.prepareForRendering(t);const G=L.lineVertexArrayObject;if(!N(G)){if(t.bindVAO(G),T.setUniformMatrix3fv("u_dvsMat3",R.transforms.dvs),t.setStencilFunction(W.EQUAL,R.stencilRef,255),P||b){const B=L.patternMap;if(!B)continue;for(const[Z,E]of B){const Y=l.getPageSize(Z);C(Y)&&(l.bind(t,J.LINEAR,Z,O),T.setUniform2fv("u_mosaicSize",Y),T.setUniform1i("u_texture",O),t.drawElements(V.TRIANGLES,E[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*E[0]))}}else t.drawElements(V.TRIANGLES,L.lineIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*L.lineIndexStart);R.triangleCount+=L.lineIndexCount/3}}}};const Wt=1/65536;class Gt extends re{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=xt()}dispose(){}drawMany(e,i){const{drawPhase:t,styleLayerUID:r}=e,o=e.styleLayer;let n;t===H.HITTEST&&(n=ie(r+1)),this._drawIcons(e,o,i,n),this._drawText(e,o,i,n)}_drawIcons(e,i,t,r){const{context:o,displayLevel:n,drawPhase:a,painter:s,spriteMosaic:l,state:u,styleLayerUID:m,requestRender:h,allowDelayedRender:c}=e,g=i.iconMaterial,f=s.vectorTilesMaterialManager;let y,p=!1;for(const D of t)if(D.layerData.has(m)&&(y=D.layerData.get(m),y.iconPerPageElementsMap.size>0)){p=!0;break}if(!p)return;const _=i.getPaintValue("icon-translate",n),I=i.getPaintValue("icon-translate-anchor",n);let P=i.getLayoutValue("icon-rotation-alignment",n);P===A.AUTO&&(P=i.getLayoutValue("symbol-placement",n)===de.POINT?A.VIEWPORT:A.MAP);const v=P===A.MAP,w=i.getLayoutValue("icon-keep-upright",n)&&v,b=y.isIconSDF,x=a===H.HITTEST,S=this._iconProgramOptions;S.id=x,S.sdf=b;const M=f.getMaterialProgram(o,g,S);if(c&&C(h)&&!M.compiled)return void h();o.useProgram(M),M.setUniformMatrix3fv("u_displayViewMat3",P===A.MAP?u.displayViewMat3:u.displayMat3),M.setUniformMatrix3fv("u_displayMat3",I===j.VIEWPORT?u.displayMat3:u.displayViewMat3),M.setUniform2fv("u_iconTranslation",_),M.setUniform1f("u_depth",i.z),M.setUniform1f("u_mapRotation",ve(u.rotation)),M.setUniform1f("u_keepUpright",w?1:0),M.setUniform1f("u_level",10*n),M.setUniform1i("u_texture",O),M.setUniform1f("u_fadeDuration",ce/1e3),x&&M.setUniform4fv("u_id",r);let T=-1;for(const D of t){if(!D.layerData.has(m)||(D.key.level!==T&&(T=D.key.level,g.setDataUniforms(M,n,i,T,l)),y=D.layerData.get(m),y.iconPerPageElementsMap.size===0))continue;y.prepareForRendering(o),y.updateOpacityInfo();const R=y.iconVertexArrayObject;if(!N(R)){o.bindVAO(R),M.setUniformMatrix3fv("u_dvsMat3",D.transforms.dvs),M.setUniform1f("u_time",(performance.now()-y.lastOpacityUpdate)/1e3);for(const[U,L]of y.iconPerPageElementsMap)this._renderIconRange(e,M,L,U,D)}}}_renderIconRange(e,i,t,r,o){const{context:n,spriteMosaic:a}=e;this._spritesTextureSize[0]=a.getWidth(r)/4,this._spritesTextureSize[1]=a.getHeight(r)/4,i.setUniform2fv("u_mosaicSize",this._spritesTextureSize),a.bind(n,J.LINEAR,r,O),n.setStencilTestEnabled(!0),n.setStencilFunction(W.GREATER,255,255),n.setStencilWriteMask(0),n.drawElements(V.TRIANGLES,t[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),o.triangleCount+=t[1]/3}_drawText(e,i,t,r){const{context:o,displayLevel:n,drawPhase:a,glyphMosaic:s,painter:l,pixelRatio:u,spriteMosaic:m,state:h,styleLayerUID:c,requestRender:g,allowDelayedRender:f}=e,y=i.textMaterial,p=l.vectorTilesMaterialManager;let _,I=!1;for(const F of t)if(F.layerData.has(c)&&(_=F.layerData.get(c),_.glyphPerPageElementsMap.size>0)){I=!0;break}if(!I)return;const P=i.getPaintProperty("text-opacity");if(P&&!P.isDataDriven&&P.getValue(n)===0)return;const v=i.getPaintProperty("text-color"),w=!v||v.isDataDriven||v.getValue(n)[3]>0,b=i.getPaintProperty("text-halo-width"),x=i.getPaintProperty("text-halo-color"),S=(!b||b.isDataDriven||b.getValue(n)>0)&&(!x||x.isDataDriven||x.getValue(n)[3]>0);if(!w&&!S)return;const M=24/8;let T=i.getLayoutValue("text-rotation-alignment",n);T===A.AUTO&&(T=i.getLayoutValue("symbol-placement",n)===de.POINT?A.VIEWPORT:A.MAP);const D=T===A.MAP,R=i.getLayoutValue("text-keep-upright",n)&&D,U=a===H.HITTEST,L=.8*M/u;this._glyphTextureSize||(this._glyphTextureSize=wt(s.width/4,s.height/4));const G=i.getPaintValue("text-translate",n),B=i.getPaintValue("text-translate-anchor",n),Z=this._sdfProgramOptions;Z.id=U;const E=p.getMaterialProgram(o,y,Z);if(f&&C(g)&&!E.compiled)return void g();o.useProgram(E),E.setUniformMatrix3fv("u_displayViewMat3",T===A.MAP?h.displayViewMat3:h.displayMat3),E.setUniformMatrix3fv("u_displayMat3",B===j.VIEWPORT?h.displayMat3:h.displayViewMat3),E.setUniform2fv("u_textTranslation",G),E.setUniform1f("u_depth",i.z+Wt),E.setUniform2fv("u_mosaicSize",this._glyphTextureSize),E.setUniform1f("u_mapRotation",ve(h.rotation)),E.setUniform1f("u_keepUpright",R?1:0),E.setUniform1f("u_level",10*n),E.setUniform1i("u_texture",ye),E.setUniform1f("u_antialiasingWidth",L),E.setUniform1f("u_fadeDuration",ce/1e3),U&&E.setUniform4fv("u_id",r);let Y=-1;for(const F of t){if(!F.layerData.has(c)||(F.key.level!==Y&&(Y=F.key.level,y.setDataUniforms(E,n,i,Y,m)),_=F.layerData.get(c),_.glyphPerPageElementsMap.size===0))continue;_.prepareForRendering(o),_.updateOpacityInfo();const ue=_.textVertexArrayObject;if(N(ue))continue;o.bindVAO(ue),E.setUniformMatrix3fv("u_dvsMat3",F.transforms.dvs),o.setStencilTestEnabled(!0),o.setStencilFunction(W.GREATER,255,255),o.setStencilWriteMask(0);const Fe=(performance.now()-_.lastOpacityUpdate)/1e3;E.setUniform1f("u_time",Fe),_.glyphPerPageElementsMap.forEach((qe,He)=>{this._renderGlyphRange(o,qe,He,s,E,S,w,F)})}}_renderGlyphRange(e,i,t,r,o,n,a,s){r.bind(e,J.LINEAR,t,ye),n&&(o.setUniform1f("u_halo",1),e.drawElements(V.TRIANGLES,i[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),s.triangleCount+=i[1]/3),a&&(o.setUniform1f("u_halo",0),e.drawElements(V.TRIANGLES,i[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),s.triangleCount+=i[1]/3)}}const Bt={vtlBackground:Vt,vtlFill:qt,vtlLine:Ht,vtlCircle:Ft,vtlSymbol:Gt},Jt={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};let jt=class{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,i=new Map){if(i.has(e))return i.get(e);const t=this._read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const r=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let o=r.exec(t);const n=[];for(;o!=null;)n.push({path:o[1],start:o.index,length:o[0].length}),o=r.exec(t);let a=0,s="";return n.forEach(l=>{s+=t.slice(a,l.start),s+=i.has(l.path)?"":this._resolve(l.path,i),a=l.start+l.length}),s+=t.slice(a),i.set(e,s),s}_read(e){return this._readFile(e)}};function Kt(d){let e=Jt;return d.split("/").forEach(i=>{e&&(e=e[i])}),e}const Yt=new jt(Kt);function k(d){return Yt.resolveIncludes(d)}function Xt(d){const{options:e,value:i}=d;return typeof e[i]=="number"}function K(d){let e="";for(const i in d){const t=d[i];if(typeof t=="boolean")t&&(e+=`#define ${i}
`);else if(typeof t=="number")e+=`#define ${i} ${t.toFixed()}
`;else if(typeof t=="object")if(Xt(t)){const{value:r,options:o,namespace:n}=t,a=n?`${n}_`:"";for(const s in o)e+=`#define ${a}${s} ${o[s].toFixed()}
`;e+=`#define ${i} ${a}${r}
`}else{const r=t.options;let o=0;for(const n in r)e+=`#define ${r[n]} ${(o++).toFixed()}
`;e+=`#define ${i} ${r[t.value]}
`}}return e}const Te=d=>K({ID:d.id,PATTERN:d.pattern}),Qt={shaders:d=>({vertexShader:Te(d)+k("background/background.vert"),fragmentShader:Te(d)+k("background/background.frag")})},Pe=d=>K({ID:d.id}),Zt={shaders:d=>({vertexShader:Pe(d)+k("circle/circle.vert"),fragmentShader:Pe(d)+k("circle/circle.frag")})},Ie=d=>K({ID:d.id,PATTERN:d.pattern}),ei={shaders:d=>({vertexShader:Ie(d)+k("fill/fill.vert"),fragmentShader:Ie(d)+k("fill/fill.frag")})},Me=d=>K({ID:d.id}),ti={shaders:d=>({vertexShader:Me(d)+k("outline/outline.vert"),fragmentShader:Me(d)+k("outline/outline.frag")})},Re=d=>K({ID:d.id,SDF:d.sdf}),ii={shaders:d=>({vertexShader:Re(d)+k("icon/icon.vert"),fragmentShader:Re(d)+k("icon/icon.frag")})},De=d=>K({ID:d.id,PATTERN:d.pattern,SDF:d.sdf}),ri={shaders:d=>({vertexShader:De(d)+k("line/line.vert"),fragmentShader:De(d)+k("line/line.frag")})},Ce=d=>K({ID:d.id}),oi={shaders:d=>({vertexShader:Ce(d)+k("text/text.vert"),fragmentShader:Ce(d)+k("text/text.frag")})};let ni=class{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,i,t){const r=i.key<<3|this._getMaterialOptionsValue(i.type,t);if(this._programByKey.has(r))return this._programByKey.get(r);const o=this._getProgramTemplate(i.type),{shaders:n}=o,{vertexShader:a,fragmentShader:s}=n(t),l=i.getShaderHeader(),u=i.getShaderMain(),m=a.replace("#pragma header",l).replace("#pragma main",u),h=e.programCache.acquire(m,s,i.getAttributeLocations());return this._programByKey.set(r,h),h}_getMaterialOptionsValue(e,i){switch(e){case z.BACKGROUND:{const t=i;return(t.pattern?1:0)<<1|(t.id?1:0)}case z.FILL:{const t=i;return(t.pattern?1:0)<<1|(t.id?1:0)}case z.OUTLINE:return i.id?1:0;case z.LINE:{const t=i;return(t.sdf?1:0)<<2|(t.pattern?1:0)<<1|(t.id?1:0)}case z.ICON:{const t=i;return(t.sdf?1:0)<<1|(t.id?1:0)}case z.CIRCLE:return i.id?1:0;case z.TEXT:return i.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case z.BACKGROUND:return Qt;case z.CIRCLE:return Zt;case z.FILL:return ei;case z.ICON:return ii;case z.LINE:return ri;case z.OUTLINE:return ti;case z.TEXT:return oi;default:return null}}};const Ee=1e-6;class Ue{constructor(e,i){this.spriteMosaic=e,this.glyphMosaic=i,this._brushCache=new Map,this._vtlMaterialManager=new ni}dispose(){this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache=null),this._vtlMaterialManager=Le(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawTile(e,i,t){const{context:r}=e,o=t.layers;t.backgroundBucketIds.length>0&&(e.renderPass="background",t.backgroundBucketIds.forEach(n=>this._renderStyleLayer(t.getLayerById(n),e,i,!0))),r.setBlendingEnabled(!1),r.setDepthTestEnabled(!0),r.setDepthWriteEnabled(!0),r.setDepthFunction(W.LEQUAL),e.renderPass="opaque";for(let n=o.length-1;n>=0;n--)this._renderStyleLayer(o[n],e,i,!1);r.setDepthWriteEnabled(!1),r.setBlendingEnabled(!0),r.setBlendFunctionSeparate(ne.ONE,ne.ONE_MINUS_SRC_ALPHA,ne.ONE,ne.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(let n=0;n<o.length;n++)this._renderStyleLayer(o[n],e,i,!1);r.setDepthTestEnabled(!1),r.bindVAO()}_renderStyleLayer(e,i,t,r=!1){if(!(r||e&&t.layerData.has(e.uid)))return;const o=e.getLayoutProperty("visibility");if(o&&o.getValue()===$e.NONE)return;const{renderPass:n}=i;let a;switch(e.type){case ee.BACKGROUND:if(n!=="background")return;a="vtlBackground";break;case ee.FILL:if(n!=="opaque"&&i.renderPass!=="translucent")return;a="vtlFill";break;case ee.LINE:if(n!=="translucent")return;a="vtlLine";break;case ee.CIRCLE:if(n!=="translucent")return;a="vtlCircle";break;case ee.SYMBOL:if(n!=="translucent")return;a="vtlSymbol"}const s=i.displayLevel;e.minzoom!==void 0&&e.minzoom>s+Ee||e.maxzoom!==void 0&&e.maxzoom<=s-Ee||(i.styleLayerUID=e.uid,i.styleLayer=e,this._drawWithBrush(i,t,a))}_drawWithBrush(e,i,t){if(!this._brushCache.has(t)){const r=Bt[t];this._brushCache.set(t,new r)}this._brushCache.get(t).drawMany(e,[i])}}let X=class extends St(bt(Tt)){constructor(){super(...arguments),this._tileHandlerController=null,this.type="vector-tile-3d"}initialize(){if(N(this.layer.fullExtent))return void this.addResolvingPromise(Promise.reject(new Ge("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:d,spatialReference:e,state:i,viewingMode:t}=this.view,r=t==="local"&&!ht(e)||pt.force512VTL,o=this.layer.tileInfo.spatialReference.isGeographic,n=r?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,o?1:2),a=this._getTileInfoSupportError(n,this.layer.fullExtent);if(C(a))return this.addResolvingPromise(Promise.reject(a));const s=Xe(()=>{var p,_;return(_=(p=this.view)==null?void 0:p.basemapTerrain)==null?void 0:_.tilingSchemeLocked}).then(()=>{var v;const p=d.tilingScheme,_=p.pixelSize;let I;if(this.schemaHelper=new Pt(_,C(d.spatialReference)&&d.spatialReference.isGeographic),_===256){const w=this.layer.tileInfo.spatialReference.isGeographic;I=this.layer.tileInfo.getOrCreateCompatible(256,w?1:2)}else I=(v=this.view.spatialReference)!=null&&v.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const P=this._getTileInfoCompatibilityError(I,p);if(P)throw P;this.tileInfo=I});this._tileHandlerController=new AbortController;const l=this.view.resourceController;this._memCache=l.memoryController.newCache(this.layer.uid,p=>{p.release()});const u=new _e(this.layer.currentStyleInfo.style),m=d.mapTileRequester;this._tileHandler=new be(this.layer,u,i.contentPixelRatio,this._memCache,m);const h=this._tileHandlerController.signal,c=p=>l.immediate.schedule(p),g=this._tileHandler.start({signal:h,schedule:c}),f=this._tileHandler.spriteMosaic;f.then(p=>{!Ye(h)&&this._tileHandler&&(this.painter=new Ue(p,this._tileHandler.glyphMosaic))}),g.then(()=>this._tileHandlerController=null),this.updatingHandles.add(()=>{var p;return{style:this.layer.currentStyleInfo.style,pixelRatio:(p=this.view.state)==null?void 0:p.contentPixelRatio}},({style:p,pixelRatio:_})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const I=new _e(p),P=new be(this.layer,I,_,this._memCache,m),v=P.start({signal:this._tileHandlerController.signal,schedule:c}),w=P.spriteMosaic;v.then(()=>this._tileHandlerController=null),this.updatingHandles.addPromise(Promise.all([v,w]).then(([,b])=>{const x=this._tileHandler,S=this.painter;this.painter=new Ue(b,P.glyphMosaic),this._tileHandler=P,this.emit("data-changed"),x.destroy(),S&&S.dispose()}))});const y=Promise.all([s,g,f]);this.addResolvingPromise(y)}destroy(){this.painter=Le(this.painter),this._tileHandlerController=Be(this._tileHandlerController),me(this._tileHandler),this._memCache=me(this._memCache),this._tileHandler=null}get dataLevelRange(){const d=this.tileInfo.lods,e=d[0].scale,i=d[d.length-1].scale,t=this.levelRangeFromScaleRange(e,i);return t.minLevel===1&&this.tileInfo.size[0]===256&&(t.minLevel=0),t}async fetchTile(d,e,i,t){return this._tileHandler.getVectorTile(d,e,i,t)}};oe([ae()],X.prototype,"layer",void 0),oe([ae()],X.prototype,"dataLevelRange",null),oe([ae()],X.prototype,"updatingProgressValue",void 0),X=oe([We("esri.views.3d.layers.VectorTileLayerView3D")],X);const xs=X;export{xs as default};
