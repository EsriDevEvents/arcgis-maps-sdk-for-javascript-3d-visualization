import{t as a}from"./typedArrayUtil-bf9f210a.js";import{o as f}from"./zscale-baa108ea.js";function n(o,r,e){if(!e||!e.features||!e.hasZ)return;const t=f(e.geometryType,r,o.outSpatialReference);if(!a(t))for(const s of e.features)t(s.geometry)}export{n as r};