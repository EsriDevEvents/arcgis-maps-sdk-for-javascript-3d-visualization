import{t as s,e as o,y as e,a as n}from"./jsonMap-ffa742d3.js";import"./geometry-7d866d3f.js";import{a as d}from"./typedArrayUtil-bf9f210a.js";import{h}from"./reactiveUtils-53e5756b.js";import"./ArrayPool-b51874dd.js";import{c as l}from"./HandleOwner-6217a02e.js";import{b as g}from"./TileTreeDebugger-66028ce4.js";import{v as c}from"./Polyline-82cb63bc.js";import"./string-53224faa.js";import"./Error-5cdd6e0a.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-5940888c.js";import"./Extent-22afa84a.js";import"./Ellipsoid-89682c5e.js";import"./typeUtils-1714017f.js";import"./Color-7b46c33a.js";import"./colorUtils-639f4d25.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./Graphic-5dcfa25e.js";import"./PopupTemplate-81dc9b83.js";import"./Clonable-7fa7ad97.js";import"./Collection-74ae958a.js";import"./Evented-686173eb.js";import"./SimpleObservable-bd2c3ae8.js";import"./fieldUtils-d430f46c.js";import"./preload-helper-41c905a7.js";import"./arcadeOnDemand-dd48afd7.js";import"./enumeration-925aa0f6.js";import"./number-036ac4ef.js";import"./locale-fe7cc1d0.js";import"./Identifiable-e4f9b04c.js";import"./symbols-5f42cb0e.js";import"./CIMSymbol-8f55d4ab.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-d4a4b602.js";import"./symbolLayerUtils3D-5cf2dcce.js";import"./aaBoundingBox-fb003858.js";import"./aaBoundingRect-2fb32e32.js";import"./request-09e7d9b2.js";import"./persistableUrlUtils-3635dccc.js";import"./Symbol3DAnchorPosition2D-e9d8a8f4.js";import"./collectionUtils-423a192d.js";import"./Portal-8dfa7a94.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./jsonUtils-36bf3d33.js";let r=class extends g{get updating(){var t;return((t=this._watchUpdatingTracking)==null?void 0:t.updating)??!1}constructor(t){super(t),this._watchUpdatingTracking=new l,this._handles=new s}initialize(){const{featureTiles:t}=this.view;this._handles.add(t.addClient()),this._watchUpdatingTracking.addOnCollectionChange(()=>t==null?void 0:t.tiles,()=>this.update(),h)}destroy(){this._handles=d(this._handles),this._watchUpdatingTracking.destroy()}getTiles(){const t=i=>{const[p,m,a]=i.lij;return c.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(p,m,a))};return this.view.featureTiles.tiles.toArray().sort((i,p)=>i.loadPriority-p.loadPriority).map(i=>({...i,geometry:t(i)}))}};o([e()],r.prototype,"_watchUpdatingTracking",void 0),o([e()],r.prototype,"updating",null),o([e()],r.prototype,"view",void 0),r=o([n("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],r);export{r as FeatureTileTree3DDebugger};