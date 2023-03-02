import{j as T}from"./Collection-74ae958a.js";import"./string-53224faa.js";import{E as f}from"./promiseUtils-5940888c.js";import{a as n}from"./lazyLayerLoader-bd5ce8c6.js";import g from"./PortalItem-4d7e1038.js";import{selectLayerClassPath as G}from"./portalLayers-c0cd6234.js";import{t as M}from"./styleUtils-5c617777.js";import"./jsonMap-ffa742d3.js";import"./typedArrayUtil-bf9f210a.js";import"./Error-5cdd6e0a.js";import"./ArrayPool-b51874dd.js";import"./nextTick-3ee5a785.js";import"./Evented-686173eb.js";import"./SimpleObservable-bd2c3ae8.js";import"./preload-helper-41c905a7.js";import"./assets-94d592bf.js";import"./request-09e7d9b2.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./Extent-22afa84a.js";import"./Ellipsoid-89682c5e.js";import"./Portal-8dfa7a94.js";import"./locale-fe7cc1d0.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./layerUtils-eef15b39.js";import"./layersLoader-df6c68a4.js";import"./Layer-524734fa.js";import"./geometry-7d866d3f.js";import"./Polyline-82cb63bc.js";import"./typeUtils-1714017f.js";import"./Identifiable-e4f9b04c.js";import"./arcgisLayerUrl-1b8d6c52.js";import"./persistableUrlUtils-3635dccc.js";import"./fetchService-bf3bf196.js";import"./jsonContext-b61ab593.js";import"./portalItemUtils-0655aa33.js";import"./projection-4ac247db.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./mat4-f0dc8788.js";import"./aaBoundingRect-2fb32e32.js";import"./zscale-baa108ea.js";import"./asyncUtils-24bd37b2.js";function A(e){return S(e,"notes")}function v(e){return S(e,"markup")}function w(e){return S(e,"route")}function S(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function b(e,r,t){if(!r)return;const i=[];for(const a of r){const y=h(a,t);a.layerType==="GroupLayer"?i.push(k(y,a,t)):i.push(y)}const o=await f(i);for(const a of o)a.value&&e.add(a.value)}const W={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},F={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},C={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},O={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},V={ArcGISFeatureLayer:"FeatureLayer"},B={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function h(e,r){return D(await U(e,r),e,r)}async function D(e,r,t){const i=new e;return i.read(r,t.context),i.type==="group"&&I(r)&&await E(i,r,t.context),await M(i,t.context),i}async function U(e,r){var L;const t=r.context,i=x(t);let o=e.layerType||e.type;!o&&r&&r.defaultLayerType&&(o=r.defaultLayerType);const a=i[o];let y=a?n[a]:n.UnknownLayer;if(d(e)){const p=t==null?void 0:t.portal;if(e.itemId){const c=new g({id:e.itemId,portal:p});await c.load();const l=(await G(c)).className||"UnknownLayer";y=n[l]}}else o==="ArcGISFeatureLayer"?A(e)||v(e)?y=n.MapNotesLayer:w(e)?y=n.RouteLayer:I(e)&&(y=n.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?y=n.WMTSLayer:o==="WFS"&&((L=e.wfsInfo)==null?void 0:L.version)!=="2.0.0"&&(y=n.UnsupportedLayer);return y()}function I(e){var r,t;return e.layerType!=="ArcGISFeatureLayer"||d(e)?!1:(((t=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:t.length)??0)>1}function d(e){return e.type==="Feature Collection"}function x(e){let r;if(e.origin==="web-scene")switch(e.layerContainerType){case"basemap":r=C;break;case"ground":r=F;break;default:r=W}else switch(e.layerContainerType){case"basemap":r=B;break;case"tables":r=V;break;default:r=O}return r}async function k(e,r,t){const i=new T,o=b(i,Array.isArray(r.layers)?r.layers:[],t),a=await e;if(await o,a.type==="group")return a.layers.addMany(i),a}async function E(e,r,t){var p;const i=n.FeatureLayer,o=await i(),a=r.featureCollection,y=a==null?void 0:a.showLegend,L=(p=a==null?void 0:a.layers)==null?void 0:p.map((c,l)=>{var u;const s=new o;s.read(c,t);const m={...t,ignoreDefaults:!0};return s.read({id:`${e.id}-sublayer-${l}`,visibility:((u=r.visibleLayers)==null?void 0:u.includes(l))??!0},m),y!=null&&s.read({showLegend:y},m),s});e.layers.addMany(L??[])}export{b as populateOperationalLayers};