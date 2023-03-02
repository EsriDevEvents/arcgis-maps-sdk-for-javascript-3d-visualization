import{a as o}from"./ReadLinearDepth.glsl-0e6f5c47.js";import{f as i,e as n}from"./Texture2DPassUniform-268e8d2d.js";import{a as f}from"./ShaderBuilder-be7ca791.js";function p(e,t){t.hasMultipassTerrain&&(e.fragment.include(o),e.fragment.uniforms.add(new i("terrainDepthTexture",(a,r)=>r.multipassTerrain.linearDepthTexture)),e.fragment.uniforms.add(new n("nearFar",(a,r)=>r.camera.nearFar)),e.fragment.uniforms.add(new n("inverseViewport",(a,r)=>r.inverseViewport)),e.fragment.code.add(f`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}let u=class{constructor(){this.enabled=!1,this.cullAboveGround=!1}};export{p as n,u as o};
