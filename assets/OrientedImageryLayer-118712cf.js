import{e as t,y as r,a as i}from"./jsonMap-ffa742d3.js";import{a as m}from"./Error-5cdd6e0a.js";import"./ArrayPool-b51874dd.js";import"./typedArrayUtil-bf9f210a.js";import e from"./FeatureLayer-e767d294.js";import"./string-53224faa.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-5940888c.js";import"./preload-helper-41c905a7.js";import"./PopupTemplate-81dc9b83.js";import"./Clonable-7fa7ad97.js";import"./Collection-74ae958a.js";import"./Evented-686173eb.js";import"./SimpleObservable-bd2c3ae8.js";import"./Extent-22afa84a.js";import"./Ellipsoid-89682c5e.js";import"./fieldUtils-d430f46c.js";import"./arcadeOnDemand-dd48afd7.js";import"./geometry-7d866d3f.js";import"./Polyline-82cb63bc.js";import"./typeUtils-1714017f.js";import"./enumeration-925aa0f6.js";import"./number-036ac4ef.js";import"./locale-fe7cc1d0.js";import"./Identifiable-e4f9b04c.js";import"./UniqueValueRenderer-80c8e628.js";import"./symbols-5f42cb0e.js";import"./CIMSymbol-8f55d4ab.js";import"./Color-7b46c33a.js";import"./colorUtils-639f4d25.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-d4a4b602.js";import"./symbolLayerUtils3D-5cf2dcce.js";import"./aaBoundingBox-fb003858.js";import"./aaBoundingRect-2fb32e32.js";import"./request-09e7d9b2.js";import"./persistableUrlUtils-3635dccc.js";import"./Symbol3DAnchorPosition2D-e9d8a8f4.js";import"./collectionUtils-423a192d.js";import"./Portal-8dfa7a94.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./ColorStop-29c89bbb.js";import"./reactiveUtils-53e5756b.js";import"./diffUtils-1bae97a1.js";import"./colorRamps-18bbdf60.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-61985981.js";import"./Graphic-5dcfa25e.js";import"./jsonUtils-36bf3d33.js";import"./compilerUtils-7bf6df9e.js";import"./lengthUtils-3c9047c4.js";import"./jsonUtils-27937179.js";import"./layerUtils-eef15b39.js";import"./styleUtils-689841ac.js";import"./jsonUtils-9b4d797d.js";import"./DictionaryLoader-1c3435ac.js";import"./LRUCache-86d9ad15.js";import"./MemCache-b4d68123.js";import"./deprecate-ba25fc78.js";import"./heatmapUtils-8ee685fd.js";import"./vec4f64-6d0e93be.js";import"./MultiOriginJSONSupport-06f8f24a.js";import"./serviceCapabilitiesUtils-22f436bd.js";import"./arcgisLayerUrl-1b8d6c52.js";import"./FeatureLayerBase-633118ca.js";import"./Field-945b2973.js";import"./fieldType-24ac97df.js";import"./HeightModelInfo-73f516f9.js";import"./OperationalLayer-db187f46.js";import"./TimeExtent-64e16588.js";import"./ElevationInfo-005ddd87.js";import"./TimeReference-adaa7961.js";import"./datetime-eed49b9b.js";import"./AttachmentQuery-f1085685.js";import"./Query-b0193ce7.js";import"./RelationshipQuery-765b2184.js";import"./Layer-524734fa.js";import"./HandleOwner-6217a02e.js";import"./workers-c8fc8d43.js";import"./Connection-3d9fb42e.js";import"./assets-94d592bf.js";import"./intl-87d72dbe.js";import"./messages-1516d146.js";import"./editsZScale-9d0832b8.js";import"./queryZScale-f6e44ca7.js";import"./zscale-baa108ea.js";import"./FeatureSet-b4fbf079.js";import"./APIKeyMixin-ef4ccb38.js";import"./ArcGISService-24587a68.js";import"./BlendLayer-793ff14a.js";import"./mat4f32-60a2394b.js";import"./mat4-f0dc8788.js";import"./CustomParametersMixin-2798ec18.js";import"./EditBusLayer-b1010019.js";import"./FeatureReductionLayer-5ef01ce2.js";import"./labelingInfo-e65ecbf4.js";import"./labelUtils-b68da70f.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-045186a6.js";import"./PortalLayer-d69e402d.js";import"./asyncUtils-24bd37b2.js";import"./PortalItem-4d7e1038.js";import"./portalItemUtils-0655aa33.js";import"./projection-4ac247db.js";import"./RefreshableLayer-12bc7ba2.js";import"./ScaleRangeLayer-d1b04b80.js";import"./TemporalLayer-f231f22a.js";import"./FeatureTemplate-5a472038.js";import"./FeatureType-017f886c.js";import"./fieldProperties-7a0757a8.js";import"./FieldsIndex-113320d3.js";import"./versionUtils-9a1e7983.js";import"./styleUtils-5c617777.js";import"./TopFeaturesQuery-d2b31d08.js";import"./popupUtils-b8625101.js";let o=class extends e{constructor(p){super(p),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new m("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};t([r()],o.prototype,"cameraProperties",void 0),t([r()],o.prototype,"coverage",void 0),t([r()],o.prototype,"coveragePercent",void 0),t([r()],o.prototype,"defaultSearchLocation",void 0),t([r()],o.prototype,"depthImage",void 0),t([r()],o.prototype,"digitalElevationModel",void 0),t([r()],o.prototype,"geometryType",void 0),t([r()],o.prototype,"imageProperties",void 0),t([r()],o.prototype,"maximumDistance",void 0),t([r({json:{read:!1},value:"oriented-imagery",readOnly:!0})],o.prototype,"type",void 0),t([r({type:["OrientedImageryLayer"]})],o.prototype,"operationalLayerType",void 0),o=t([i("esri.layers.OrientedImageryLayer")],o);const Tt=o;export{Tt as default};