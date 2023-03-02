import{n as R,w as T,_ as x,e as d,y,a as M}from"./jsonMap-ffa742d3.js";import{t as m,r as n}from"./typedArrayUtil-bf9f210a.js";import{x as G,C as O}from"./promiseUtils-5940888c.js";import{a as f}from"./reactiveUtils-53e5756b.js";import"./ArrayPool-b51874dd.js";import{f as S}from"./aaBoundingRect-2fb32e32.js";import{u as z}from"./MediaElementView-05ce21e6.js";import{e as $,C as H,$ as l,a1 as I,an as C,am as s}from"./SceneView-7ac05f56.js";import{n as P}from"./LayerView3D-e2b7aff2.js";import{s as E}from"./Attribute-f72d3f37.js";import{D as A}from"./basicInterfaces-7449a8bf.js";import{v as L}from"./objectResourceUtils-3685cb27.js";import{G as V}from"./Texture-ae652f15.js";import{O as p}from"./VertexAttribute-15d1866a.js";import{c as b}from"./ImageMaterial-771bdfd8.js";import{u as N}from"./LayerView-92e98881.js";import{D}from"./enums-fc527c7c.js";import"./string-53224faa.js";import"./Error-5cdd6e0a.js";import"./nextTick-3ee5a785.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./Extent-22afa84a.js";import"./Ellipsoid-89682c5e.js";import"./Polyline-82cb63bc.js";import"./projection-4ac247db.js";import"./preload-helper-41c905a7.js";import"./SimpleObservable-bd2c3ae8.js";import"./mat4-f0dc8788.js";import"./assets-94d592bf.js";import"./request-09e7d9b2.js";import"./zscale-baa108ea.js";import"./normalizeUtilsSync-3bba9614.js";import"./jsonUtils-36bf3d33.js";import"./normalizeUtilsCommon-d8ea404e.js";import"./Clonable-7fa7ad97.js";import"./Cyclical-47bda305.js";import"./geometry-7d866d3f.js";import"./typeUtils-1714017f.js";import"./Graphic-5dcfa25e.js";import"./PopupTemplate-81dc9b83.js";import"./Collection-74ae958a.js";import"./Evented-686173eb.js";import"./fieldUtils-d430f46c.js";import"./arcadeOnDemand-dd48afd7.js";import"./enumeration-925aa0f6.js";import"./number-036ac4ef.js";import"./locale-fe7cc1d0.js";import"./Identifiable-e4f9b04c.js";import"./symbols-5f42cb0e.js";import"./CIMSymbol-8f55d4ab.js";import"./Color-7b46c33a.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-d4a4b602.js";import"./symbolLayerUtils3D-5cf2dcce.js";import"./aaBoundingBox-fb003858.js";import"./persistableUrlUtils-3635dccc.js";import"./Symbol3DAnchorPosition2D-e9d8a8f4.js";import"./collectionUtils-423a192d.js";import"./Portal-8dfa7a94.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./widget-01c21b51.js";import"./intl-87d72dbe.js";import"./messages-1516d146.js";import"./uuid-73213768.js";import"./workers-c8fc8d43.js";import"./Connection-3d9fb42e.js";import"./GraphicsLayer-cbd6e467.js";import"./HandleOwner-6217a02e.js";import"./Layer-524734fa.js";import"./BlendLayer-793ff14a.js";import"./mat4f32-60a2394b.js";import"./ScaleRangeLayer-d1b04b80.js";import"./ElevationInfo-005ddd87.js";import"./lengthUtils-3c9047c4.js";import"./HeightModelInfo-73f516f9.js";import"./sphere-a48b65b1.js";import"./vec4f64-6d0e93be.js";import"./byteSizeEstimations-f0cab514.js";import"./mat3f64-50f3b9f6.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./vec2f64-70cfd09e.js";import"./lineSegment-4eb8b6fa.js";import"./plane-01584357.js";import"./spatialReferenceEllipsoidUtils-88aa82c4.js";import"./scaleUtils-a3b834c2.js";import"./layerUtils-eef15b39.js";import"./AttachmentInfo-23249301.js";import"./AttachmentQuery-f1085685.js";import"./ColorStop-29c89bbb.js";import"./utils-6a5cc1bf.js";import"./asyncUtils-24bd37b2.js";import"./ItemCache-e927309e.js";import"./MemCache-b4d68123.js";import"./jsonUtils-9b4d797d.js";import"./UniqueValueRenderer-80c8e628.js";import"./diffUtils-1bae97a1.js";import"./colorRamps-18bbdf60.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-61985981.js";import"./compilerUtils-7bf6df9e.js";import"./jsonUtils-27937179.js";import"./styleUtils-689841ac.js";import"./DictionaryLoader-1c3435ac.js";import"./LRUCache-86d9ad15.js";import"./deprecate-ba25fc78.js";import"./heatmapUtils-8ee685fd.js";import"./Query-b0193ce7.js";import"./TimeExtent-64e16588.js";import"./Field-945b2973.js";import"./fieldType-24ac97df.js";import"./executeQueryJSON-044ac84b.js";import"./normalizeUtils-353ec0fc.js";import"./query-b4dff312.js";import"./pbfQueryUtils-481b10bc.js";import"./pbf-845dcafd.js";import"./OptimizedFeature-3e582950.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-f6e44ca7.js";import"./FeatureSet-b4fbf079.js";import"./featureConversionUtils-aead6959.js";import"./RelationshipQuery-765b2184.js";import"./TopFeaturesQuery-d2b31d08.js";import"./FeatureLayer-e767d294.js";import"./MultiOriginJSONSupport-06f8f24a.js";import"./serviceCapabilitiesUtils-22f436bd.js";import"./arcgisLayerUrl-1b8d6c52.js";import"./FeatureLayerBase-633118ca.js";import"./OperationalLayer-db187f46.js";import"./TimeReference-adaa7961.js";import"./datetime-eed49b9b.js";import"./editsZScale-9d0832b8.js";import"./APIKeyMixin-ef4ccb38.js";import"./ArcGISService-24587a68.js";import"./CustomParametersMixin-2798ec18.js";import"./EditBusLayer-b1010019.js";import"./FeatureReductionLayer-5ef01ce2.js";import"./labelingInfo-e65ecbf4.js";import"./labelUtils-b68da70f.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-045186a6.js";import"./PortalLayer-d69e402d.js";import"./PortalItem-4d7e1038.js";import"./portalItemUtils-0655aa33.js";import"./RefreshableLayer-12bc7ba2.js";import"./TemporalLayer-f231f22a.js";import"./FeatureTemplate-5a472038.js";import"./FeatureType-017f886c.js";import"./fieldProperties-7a0757a8.js";import"./FieldsIndex-113320d3.js";import"./versionUtils-9a1e7983.js";import"./styleUtils-5c617777.js";import"./popupUtils-b8625101.js";import"./callExpressionWithFeature-eb5719d8.js";import"./quantizationUtils-16db4e0b.js";import"./Scheduler-61737382.js";import"./ElevationSamplerData-3fc2a90f.js";import"./TileInfo-9973cd47.js";import"./Basemap-5a7c72ee.js";import"./loadAll-8ca49458.js";import"./writeUtils-b7104d82.js";import"./CollectionFlattener-80d223f1.js";import"./TablesMixin-8f62a14c.js";import"./ViewingMode-5d7d590b.js";import"./vec2-848c6cf0.js";import"./PhysicallyBasedRendering.glsl-edd81ba9.js";import"./View.glsl-879c1eaf.js";import"./ShaderBuilder-be7ca791.js";import"./FloatPassUniform-0426669b.js";import"./Float4PassUniform-9354414b.js";import"./RgbaFloatEncoding.glsl-67199794.js";import"./Texture2DPassUniform-268e8d2d.js";import"./vec3f32-01c06d8d.js";import"./Texture2DDrawUniform-e4341b84.js";import"./PiUtils.glsl-49462ceb.js";import"./ReadLinearDepth.glsl-0e6f5c47.js";import"./WaterSurface.glsl-e13d44e2.js";import"./ForwardLinearDepth.glsl-52bf5bdc.js";import"./Matrix3PassUniform-df6e2166.js";import"./Slice.glsl-cd30f0ea.js";import"./Transform.glsl-052069d0.js";import"./OutputHighlight.glsl-ca02d1ee.js";import"./MultipassTerrainTest.glsl-8b279fcd.js";import"./NormalUtils.glsl-84d184a7.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-c3841b0a.js";import"./EvaluateSceneLighting.glsl-14c608ff.js";import"./VisualVariablePassParameters-f892560d.js";import"./VertexElementDescriptor-2925c6af.js";import"./Texture-d2fa6cd8.js";import"./context-util-34d303b7.js";import"./Util-513876a8.js";import"./SSAOBlur.glsl-c56632c0.js";import"./ScreenSpacePass.glsl-44cc0c5e.js";import"./SSAO.glsl-2c6533cd.js";import"./ShaderTechniqueConfiguration-0fa0f78c.js";import"./mat3-4fd89d48.js";import"./HUD.glsl-73b068b4.js";import"./VerticalOffset.glsl-109e8746.js";import"./Octree-813f29c9.js";import"./DefaultTechniqueConfiguration-b54ae0b1.js";import"./edgeProcessing-ac701714.js";import"./deduplicate-a70aec6f.js";import"./Indices-f9b34f39.js";import"./InterleavedLayout-07cc6753.js";import"./BufferView-b402c7a7.js";import"./types-e1c0a5bf.js";import"./MeshComponent-777de3ff.js";import"./earcut-61f7b102.js";import"./projection-03824933.js";import"./quat-77a0169c.js";import"./vec33-ca555933.js";import"./HUDMaterial.glsl-82200888.js";import"./sdfPrimitives-3ceeab79.js";import"./floatRGBA-1f66d0a4.js";import"./ObjectAndLayerIdColor.glsl-66083f64.js";import"./VisualVariables.glsl-bb97d5ba.js";import"./dehydratedFeatures-efdbcd90.js";import"./labelFormatUtils-f90ee62f.js";import"./orientedBoundingBox-6188c4d9.js";import"./quatf32-51a323b8.js";import"./vec2f32-eaf29605.js";import"./LineCallout.glsl-76cd336e.js";import"./SnappingCandidate-970faec6.js";import"./TextureOnly.glsl-469cc321.js";import"./MarkerSizing.glsl-950a18f6.js";import"./RibbonLine.glsl-8fe4662b.js";import"./OutputDepth.glsl-17bf0574.js";import"./LineStipple.glsl-4eef2aea.js";import"./MixExternalColor.glsl-f5c601ed.js";import"./symbolColorUtils-1c63720c.js";import"./DiscardOrAdjustAlphaBlend.glsl-27f02ebd.js";import"./LineMarker.glsl-2c017de2.js";import"./resourceUtils-527631ac.js";import"./NativeLine.glsl-9893bc56.js";import"./VertexColor.glsl-2f905a78.js";import"./Normals.glsl-6a1bc6fb.js";import"./Path.glsl-2eb74a31.js";import"./ColorMaterial.glsl-1d45c81e.js";import"./Pattern.glsl-698f2083.js";import"./DefaultMaterial_COLOR_GAMMA-8ec4380b.js";import"./Version-621cc6b7.js";import"./LercDecoder-f1486af7.js";import"./DefaultMaterial.glsl-58ca0075.js";import"./enums-fb086c25.js";import"./config-f7904f35.js";import"./TileKey-4d1284e4.js";import"./workerHelper-2d7b0d57.js";import"./capabilities-caaa1278.js";import"./devEnvironmentUtils-5002a058.js";import"./RealisticTree.glsl-29f7cbd7.js";import"./ImageMaterial.glsl-2e22ba6f.js";let a=class extends P(N){constructor(){super(...arguments),this.type="media-3d",this.drapeSourceType=$.RasterImage,this.updatePolicy=H.ASYNC,this._uidToElement=new Map,this._renderedElements=new Map,this._lastDrapingExtent=null,this._update=G(async(t,r,i)=>{const e=await this._collectMediaElements(t,r,i);this._synchronizeRenderElements(e)},0)}initialize(){this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);const t=()=>this._updateWithLastDrapingExtent();this.handles.add([R(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)),f(()=>this.layer.effectiveSource,"change",t),f(()=>this.layer.effectiveSource,"refresh",t)]),this.updatingHandles.add(()=>this.suspended,t)}setDrapingExtent(t,r){this._lastDrapingExtent={overlays:t,spatialReference:r},this._updateWithLastDrapingExtent()}getHit(t){const r=this._uidToElement.get(t);return r?{type:"media",element:r,layer:this.layer}:null}_updateWithLastDrapingExtent(){if(m(this._lastDrapingExtent)||this.suspended)return void(this._renderer&&this._synchronizeRenderElements(new Set));const{overlays:t,spatialReference:r}=this._lastDrapingExtent;this.updatingHandles.addPromise(this._update(t,r).catch(()=>{}))}async _collectMediaElements(t,r,i){const e=this.layer.effectiveSource;return m(e)?new Set:new Set((await Promise.all(t.map(o=>e.queryElements(S(o.extent,r),{signal:i})))).flat())}_synchronizeRenderElements(t){this._synchronizeRenderElementsRemove(t),this._synchronizeRenderElementsAdd(t)}_synchronizeRenderElementsRemove(t){const r=new Set,i=[];this._renderedElements.forEach((e,o)=>{t.has(o)||(r.add(o),n(e.renderData)&&i.push(e.renderData.renderGeometry),this._removeElement(o,e))}),this._renderer.removeGeometries(i,l.REMOVE)}_synchronizeRenderElementsAdd(t){for(const r of t)this._renderedElements.has(r)||this._createRenderElement(r)}_removeElement(t,{renderData:r,handle:i}){this._destroyRenderData(r),this._renderedElements.delete(t),this._uidToElement.delete(t.uid),i.remove()}async _createRenderElement(t){const r=new z({spatialReference:this.view.spatialReference,element:t}),i={renderData:null,handle:T([this.updatingHandles.add(()=>t.opacity,e=>{n(i.renderData)&&i.renderData.material.setParameters({opacity:e})}),this.updatingHandles.add(()=>r.coords,e=>{n(i.renderData)?this._updateGeometry(i,i.renderData,e):this._initializeRenderData(r,i)}),this.updatingHandles.add(()=>t.content,()=>this._initializeRenderData(r,i)),x(r)])};this._renderedElements.set(t,i),this._uidToElement.set(t.uid,t),this.updatingHandles.addPromise(t.load().catch(()=>{})),this._initializeRenderData(r,i)}_initializeRenderData(t,r){const{coords:i,element:e}=t;if(m(i)||m(e.content))return void(r.renderData=this._destroyRenderData(r.renderData));if(n(r.renderData))return;const o=this._createTexture(e.content);this.view._stage.add(o);const h=this.view._stage.loadImmediate(o);O(h)&&this.updatingHandles.addPromise(h);const c=new b({initTextureTransparent:!0,textureId:o.id,opacity:e.opacity,transparent:!0}),g=this._positionVertexBufferFromCoordinates(i),v=[0,0,1,0,1,1,0,1],u=[0,1,2,0,2,3],w=new L(c,[[p.POSITION,new E(g,3,!0)],[p.UV0,new E(v,2,!0)]],[[p.POSITION,u],[p.UV0,u]]),_=new I(w,{layerUid:this.layer.uid,graphicUid:e.uid});this._renderer.addGeometries([_],l.ADD),r.renderData={renderGeometry:_,texture:o,material:c}}_updateGeometry(t,r,i){if(m(i))return void(t.renderData=this._destroyRenderData(t.renderData));const e=this._positionVertexBufferFromCoordinates(i);r.renderGeometry.vertexAttributes.get(p.POSITION).data=e,this._renderer.modifyGeometries([r.renderGeometry],C.GEOMETRY)}_positionVertexBufferFromCoordinates(t){const[r,i,e,o]=t.rings[0];return[r[0],r[1],s,o[0],o[1],s,e[0],e[1],s,i[0],i[1],s]}_destroyRenderData(t){return m(t)||(this.view._stage.remove(t.texture),this._renderer.removeGeometries([t.renderGeometry],l.REMOVE),t.material.dispose()),null}_createTexture(t){const r=t instanceof HTMLImageElement?t.naturalWidth:t.width,i=t instanceof HTMLImageElement?t.naturalHeight:t.height;return new V(t,{wrap:{s:D.CLAMP_TO_EDGE,t:D.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:r,height:i,mipmap:!0,powerOfTwoResizeMode:A.STRETCH,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})}get test(){const t=this;return{get numberOfElements(){return t._renderedElements.size}}}};d([y({readOnly:!0})],a.prototype,"type",void 0),d([y()],a.prototype,"layer",void 0),a=d([M("esri.views.3d.layers.MediaLayerView3D")],a);const $o=a;export{$o as default};
