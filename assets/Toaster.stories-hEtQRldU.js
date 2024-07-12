import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{aV as n,aW as i}from"./QuestStatusCard-CJAcnthM.js";import{B as c}from"./QuestSetProgressCard-BNr9QVR-.js";import"./Icon.types-D4lfunSt.js";import"./Label-4gKwHNvc.js";import"./PieChart-B_dtFskq.js";import"./Resizable-B7XdxUdz.js";import"./SegmentedControl-C43o2uqF.js";import"./Separator-EZUw1-4L.js";import"./Table-C0qIXiUM.js";import"./Text-DsVeH9qI.js";import"./Textarea-CUiVvNKI.js";import"./ValueDisplay-D2U_pdiu.js";import"./QuestSetCard-BHXW0rRZ.js";import"./ProgressBar-D75vLLzs.js";import"./QuestStatusIndicator-DHmvCJek.js";const S={title:"Components/Toaster",component:n,argTypes:{position:{type:"string",description:"Position for toasts",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],control:"select"},expand:{description:"Show all toasts",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},closeButton:{description:"Show close button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},s={args:{position:"top-right"},render:o=>t.jsxs(t.Fragment,{children:[t.jsx(n,{...o}),t.jsx(c,{size:"lg",onClick:()=>i("I am a toast!"),children:"Launch toast"})]})},r={args:{position:"top-right"},render:o=>t.jsxs(t.Fragment,{children:[t.jsx(n,{...o}),t.jsx(c,{size:"lg",variant:"accent",onClick:()=>i.info("I am an info toast!"),children:"Launch toast"})]})},a={args:{position:"top-right"},render:o=>t.jsxs(t.Fragment,{children:[t.jsx(n,{...o}),t.jsx(c,{size:"lg",variant:"success",onClick:()=>i.success("I am a success toast!"),children:"Launch toast"})]})},e={args:{position:"top-right"},render:o=>t.jsxs(t.Fragment,{children:[t.jsx(n,{...o}),t.jsx(c,{size:"lg",variant:"destructive",onClick:()=>i.success("I am an error toast!"),children:"Launch toast"})]})};var p,m,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: args => <>
      <Toaster {...args} />
      <Button size="lg" onClick={() => toast('I am a toast!')}>
        Launch toast
      </Button>
    </>
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,g,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: args => <>
      <Toaster {...args} />
      <Button size="lg" variant="accent" onClick={() => toast.info('I am an info toast!')}>
        Launch toast
      </Button>
    </>
}`,...(d=(g=r.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var h,f,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: args => <>
      <Toaster {...args} />
      <Button size="lg" variant="success" onClick={() => toast.success('I am a success toast!')}>
        Launch toast
      </Button>
    </>
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var j,B,b;e.parameters={...e.parameters,docs:{...(j=e.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    position: 'top-right'
  },
  render: args => <>
      <Toaster {...args} />
      <Button size="lg" variant="destructive" onClick={() => toast.success('I am an error toast!')}>
        Launch toast
      </Button>
    </>
}`,...(b=(B=e.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const I=["BasicUsage","Info","Success","Error"],M=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:s,Error:e,Info:r,Success:a,__namedExportsOrder:I,default:S},Symbol.toStringTag,{value:"Module"}));export{s as B,e as E,r as I,M as S,a};
