import{j as l}from"./asyncUtils-24bd37b2.js";import{a as n,s as g}from"./Error-5cdd6e0a.js";import{r as _,e as f}from"./typedArrayUtil-bf9f210a.js";import{f as m,j as d}from"./promiseUtils-5940888c.js";import{E as w,_ as p}from"./Extent-22afa84a.js";import{c as E,u as q}from"./featureConversionUtils-aead6959.js";import{g as F}from"./FeatureStore-4cc4d41d.js";import{g as x,f as S}from"./QueryEngineResult-0c6179e0.js";import{e as T}from"./QueryEngine-b5607f4f.js";import{T as j,I}from"./geojson-2fb0c3b0.js";import{m as b}from"./sourceUtils-b562bcf7.js";import{K as C}from"./wfsUtils-a9d0db38.js";import{r as P}from"./FieldsIndex-113320d3.js";import"./jsonMap-ffa742d3.js";import"./string-53224faa.js";import"./ArrayPool-b51874dd.js";import"./nextTick-3ee5a785.js";import"./Ellipsoid-89682c5e.js";import"./aaBoundingBox-fb003858.js";import"./aaBoundingRect-2fb32e32.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./jsonUtils-36bf3d33.js";import"./Polyline-82cb63bc.js";import"./OptimizedFeature-3e582950.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./Evented-686173eb.js";import"./BoundsStore-d90f19c6.js";import"./PooledRBush-2aadabe0.js";import"./quickselect-56c5966e.js";import"./optimizedFeatureQueryEngineAdapter-9ce8e144.js";import"./centroid-0766e68a.js";import"./preload-helper-41c905a7.js";import"./quantizationUtils-16db4e0b.js";import"./ItemCache-e927309e.js";import"./MemCache-b4d68123.js";import"./WhereClause-0699a2ca.js";import"./executionError-fb3f283a.js";import"./datetime-eed49b9b.js";import"./utils-95e81b90.js";import"./generateRendererUtils-e34cc2cf.js";import"./enumeration-925aa0f6.js";import"./projection-4ac247db.js";import"./SimpleObservable-bd2c3ae8.js";import"./mat4-f0dc8788.js";import"./assets-94d592bf.js";import"./request-09e7d9b2.js";import"./zscale-baa108ea.js";import"./json-48e3ea08.js";import"./SnappingCandidate-970faec6.js";import"./normalizeUtils-353ec0fc.js";import"./normalizeUtilsCommon-d8ea404e.js";import"./geometry-7d866d3f.js";import"./typeUtils-1714017f.js";import"./fieldUtils-d430f46c.js";import"./arcadeOnDemand-dd48afd7.js";import"./QueryEngineCapabilities-42e44ded.js";import"./Scheduler-61737382.js";import"./reactiveUtils-53e5756b.js";import"./xmlUtils-444cb4c0.js";import"./Field-945b2973.js";import"./fieldType-24ac97df.js";class Gt{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async t=>{const{objectIdField:e}=this._queryEngine,i=await C(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:t});await j(i),m(t);const s=I(i,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e});if(!w(this._queryEngine.spatialReference,p))for(const r of s)_(r.geometry)&&(r.geometry=E(x(q(r.geometry,this._queryEngine.geometryType,!1,!1),p,this._queryEngine.spatialReference)));let a=1;for(const r of s){const o={};b(this._fieldsIndex,o,r.attributes,!0),r.attributes=o,r.attributes[e]==null&&(r.objectId=r.attributes[e]=a++)}return s}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:i,getFeatureOutputFormat:s,spatialReference:a,fields:r,geometryType:o,featureType:u,objectIdField:h,customParameters:y}=t;this._featureType=u,this._customParameters=y,this._getFeatureUrl=i,this._getFeatureOutputFormat=s,this._fieldsIndex=new P(r),await this._checkProjection(a),m(e),this._queryEngine=new T({fields:r,geometryType:o,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:a,timeInfo:null,featureStore:new F({geometryType:o,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(f(e.signal));return this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new n("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var e;return this._customParameters=t,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=l(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),i&&this._queryEngine.featureStore.addMany(i)},i=>{this._queryEngine.featureStore.clear(),d(i)||g.getLogger("esri.layers.WFSLayer").error(new n("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:i}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await S(p,t)}catch{throw new n("unsupported-projection","Projection not supported",{spatialReference:t})}}}export{Gt as default};