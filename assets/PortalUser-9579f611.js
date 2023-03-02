import{_ as v}from"./preload-helper-41c905a7.js";import{e as r,y as o,a as c,l as f}from"./jsonMap-ffa742d3.js";import{a as d}from"./Error-5cdd6e0a.js";import"./ArrayPool-b51874dd.js";import"./typedArrayUtil-bf9f210a.js";import{p as y}from"./PortalGroup-00fb77a4.js";import"./string-53224faa.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-5940888c.js";import"./Extent-22afa84a.js";import"./Ellipsoid-89682c5e.js";let p=class extends f{constructor(e){super(e),this.created=null,this.id=null,this.portal=null,this.title=null,this.username=null}get url(){const e=this.get("portal.restUrl");return e?`${e}/content/users/${this.username}/${this.id}`:null}toJSON(){throw new d("internal:not-yet-implemented","PortalFolder.toJSON is not yet implemented")}};r([o({type:Date})],p.prototype,"created",void 0),r([o()],p.prototype,"id",void 0),r([o()],p.prototype,"portal",void 0),r([o()],p.prototype,"title",void 0),r([o({readOnly:!0})],p.prototype,"url",null),r([o()],p.prototype,"username",void 0),p=r([c("esri.portal.PortalFolder")],p);const g=p;var h;let l=h=class extends f{constructor(...t){super(...t),this.access=null,this.created=null,this.culture=null,this.description=null,this.email=null,this.fullName=null,this.modified=null,this.orgId=null,this.portal=null,this.preferredView=null,this.privileges=null,this.region=null,this.role=null,this.roleId=null,this.sourceJSON=null,this.units=null,this.username=null,this.userType=null}get thumbnailUrl(){const t=this.url,e=this.thumbnail;return t&&e?this.portal.normalizeUrl(`${t}/info/${e}?f=json`):null}get userContentUrl(){const t=this.get("portal.restUrl");return t?`${t}/content/users/${this.username}`:null}get url(){const t=this.get("portal.restUrl");return t?`${t}/community/users/${this.username}`:null}addItem(t){const e=t&&t.item,n=t&&t.data,i=t&&t.folder,s={method:"post"};e&&(s.query=e.createPostQuery(),n!=null&&(typeof n=="string"?s.query.text=n:typeof n=="object"&&(s.query.text=JSON.stringify(n))));let u=this.userContentUrl;return i&&(u+="/"+(typeof i=="string"?i:i.id)),this.portal.request(u+"/addItem",s).then(a=>(e.id=a.id,e.portal=this.portal,e.loaded?e.reload():e.load()))}deleteItem(t){let e=this.userContentUrl;return t.ownerFolder&&(e+="/"+t.ownerFolder),this.portal.request(e+`/items/${t.id}/delete`,{method:"post"}).then(()=>{t.id=null,t.portal=null})}deleteItems(t){const e=this.userContentUrl+"/deleteItems",n=t.map(i=>i.id);if(n.length){const i={method:"post",query:{items:n.join(",")}};return this.portal.request(e,i).then(()=>{t.forEach(s=>{s.id=null,s.portal=null})})}return Promise.resolve(void 0)}fetchFolders(){const t={query:{num:1}};return this.portal.request(this.userContentUrl??"",t).then(e=>{let n;return n=e&&e.folders?e.folders.map(i=>{const s=g.fromJSON(i);return s.portal=this.portal,s}):[],n})}fetchGroups(){return this.portal.request(this.url??"").then(t=>{let e;return e=t&&t.groups?t.groups.map(n=>{const i=y.fromJSON(n);return i.portal=this.portal,i}):[],e})}fetchItems(t){const e=t??{};let n,i=this.userContentUrl??"";return e.folder&&(i+="/"+e.folder.id),v(()=>import("./PortalItem-4d7e1038.js"),["./PortalItem-4d7e1038.js","./preload-helper-41c905a7.js","./jsonMap-ffa742d3.js","./typedArrayUtil-bf9f210a.js","./string-53224faa.js","./Error-5cdd6e0a.js","./ArrayPool-b51874dd.js","./nextTick-3ee5a785.js","./promiseUtils-5940888c.js","./assets-94d592bf.js","./request-09e7d9b2.js","./Loadable-40ecd3b9.js","./Promise-755e47e5.js","./Extent-22afa84a.js","./Ellipsoid-89682c5e.js","./Portal-8dfa7a94.js","./locale-fe7cc1d0.js","./PortalGroup-00fb77a4.js"],import.meta.url).then(({default:s})=>{n=s;const u={folders:!1,num:e.num||10,start:e.start||1,sortField:e.sortField||"created",sortOrder:e.sortOrder||"asc"};return this.portal.request(i,{query:u})}).then(s=>{let u;return s&&s.items?(u=s.items.map(a=>{const m=n.fromJSON(a);return m.portal=this.portal,m}),Promise.all(u.map(a=>a.load())).catch(a=>a).then(()=>({items:u,nextStart:s.nextStart,total:s.total}))):{items:[],nextStart:-1,total:0}})}fetchTags(){return this.portal.request(this.url+"/tags").then(t=>t.tags)}getThumbnailUrl(t){let e=this.thumbnailUrl;return e&&t&&(e+=`&w=${t}`),e}queryFavorites(t){return this.favGroupId?(this._favGroup||(this._favGroup=new y({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(t)):Promise.reject(new d("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))}toJSON(){throw new d("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");const e=new h;return e.sourceJSON=t,e.read(t),e}};r([o()],l.prototype,"access",void 0),r([o({type:Date})],l.prototype,"created",void 0),r([o()],l.prototype,"culture",void 0),r([o()],l.prototype,"description",void 0),r([o()],l.prototype,"email",void 0),r([o()],l.prototype,"favGroupId",void 0),r([o()],l.prototype,"fullName",void 0),r([o({type:Date})],l.prototype,"modified",void 0),r([o()],l.prototype,"orgId",void 0),r([o()],l.prototype,"portal",void 0),r([o()],l.prototype,"preferredView",void 0),r([o()],l.prototype,"privileges",void 0),r([o()],l.prototype,"region",void 0),r([o()],l.prototype,"role",void 0),r([o()],l.prototype,"roleId",void 0),r([o()],l.prototype,"sourceJSON",void 0),r([o()],l.prototype,"thumbnail",void 0),r([o({readOnly:!0})],l.prototype,"thumbnailUrl",null),r([o()],l.prototype,"units",void 0),r([o({readOnly:!0})],l.prototype,"userContentUrl",null),r([o({readOnly:!0})],l.prototype,"url",null),r([o()],l.prototype,"username",void 0),r([o()],l.prototype,"userType",void 0),l=h=r([c("esri.portal.PortalUser")],l);const b=l;export{b as default};
