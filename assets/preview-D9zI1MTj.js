import{_ as a}from"./iframe-43aqDtGs.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-BOwSeydl.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-BOwSeydl.js","./iframe-43aqDtGs.js","./index-CTjT7uj6.js","./react-18-Du3ZvwgA.js","./index-DdAkmXN0.js","./index-DjgCgwbp.js","./index-DJaOuc6h.js","./extends-CCbyfPlC.js","./index-CcyUcsxs.js","./index-BaW8Z0I_.js","./index-DXimoRZY.js","./index-Bx4XDAbk.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
