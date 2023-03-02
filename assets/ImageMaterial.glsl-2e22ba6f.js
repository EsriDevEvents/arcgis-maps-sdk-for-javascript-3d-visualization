import{r as d}from"./typedArrayUtil-bf9f210a.js";import{i as p}from"./vec2f64-70cfd09e.js";import{h as n}from"./Matrix3PassUniform-df6e2166.js";import{u as c}from"./Slice.glsl-cd30f0ea.js";import{r as m}from"./Transform.glsl-052069d0.js";import{n as u}from"./MultipassTerrainTest.glsl-8b279fcd.js";import{o as s}from"./AlphaCutoff-96178e0d.js";import{e as v,o as g}from"./TransparencyPassType-c3841b0a.js";import{v as h}from"./View.glsl-879c1eaf.js";import{e as f,f as x}from"./Texture2DPassUniform-268e8d2d.js";import{o as C}from"./FloatPassUniform-0426669b.js";import{o as $,a as t}from"./ShaderBuilder-be7ca791.js";import{O as l}from"./VertexAttribute-15d1866a.js";function y(o){const r=new $,{vertex:i,fragment:a}=r;return h(i,o),r.include(m,o),r.attributes.add(l.POSITION,"vec3"),r.attributes.add(l.UV0,"vec2"),r.varyings.add("vpos","vec3"),o.hasMultipassTerrain&&r.varyings.add("depth","float"),i.uniforms.add(new f("textureCoordinateScaleFactor",e=>d(e.texture)&&d(e.texture.descriptor.textureCoordinateScaleFactor)?e.texture.descriptor.textureCoordinateScaleFactor:p)),i.code.add(t`
    void main(void) {
      vpos = position;
      ${o.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),r.include(c,o),r.include(u,o),a.uniforms.add([new x("tex",e=>e.texture),new C("opacity",e=>e.opacity)]),r.varyings.add("vTexCoord","vec2"),o.output===n.Alpha?a.code.add(t`
    void main() {
      discardBySlice(vpos);
      ${o.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${t.float(s)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(a.include(v),a.code.add(t`
    void main() {
      discardBySlice(vpos);
      ${o.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${t.float(s)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${o.transparencyPassType===g.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),r}const B=Object.freeze(Object.defineProperty({__proto__:null,build:y},Symbol.toStringTag,{value:"Module"}));export{y as f,B as w};
