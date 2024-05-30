import{_ as a}from"./iframe-DEbsL6-B.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-D6xYaa-d.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-D6xYaa-d.js","./iframe-DEbsL6-B.js","./index-CDs2tPxN.js","./react-18-Bn-wYQhd.js","./index-B-yFm4aN.js","./index-CebPbu-g.js","./index-BQ87-lmA.js","./extends-CCbyfPlC.js","./index-CcyUcsxs.js","./index-rwdFSQ0g.js","./index-DXimoRZY.js","./index-BH_9z_ur.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
