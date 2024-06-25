import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{av as n,aw as c}from"./ClaimStakeCard-DNBgITOJ.js";import"./Avatar-BUaynhXT.js";import"./Badge-D3rIyhdF.js";import{B as i}from"./Button-ikGPOU5T.js";import"./Icon.types-DkS0gbR0.js";import"./PositionValueDisplay-dYFOcf5V.js";import"./Input-DFWTvv6T.js";import"./Label-ByAlek89.js";import"./PieChart-B_dtFskq.js";import"./PositionCardStaked-Dh9BrwNU.js";import"./ProfileCard-cV73C5p9.js";import"./Resizable-Dk6Cp6at.js";import"./SegmentedControl-DbX5wOQO.js";import"./Separator-Ct33SRfh.js";import"./Table-D9p853bW.js";import"./Text-CRp-iyLU.js";import"./Textarea-Ds9ZbOCk.js";import"./ValueDisplay-2lt2w_5b.js";const S={title:"Components/Toaster",component:n,argTypes:{position:{type:"string",description:"Position for toasts",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],control:"select"},expand:{description:"Show all toasts",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},closeButton:{description:"Show close button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},s={args:{position:"top-right"},render:o=>t.jsxs(t.Fragment,{children:[t.jsx(n,{...o}),t.jsx(i,{size:"lg",onClick:()=>c("I am a toast!"),children:"Launch toast"})]})},r={args:{position:"top-right"},render:o=>t.jsxs(t.Fragment,{children:[t.jsx(n,{...o}),t.jsx(i,{size:"lg",variant:"accent",onClick:()=>c.info("I am an info toast!"),children:"Launch toast"})]})},a={args:{position:"top-right"},render:o=>t.jsxs(t.Fragment,{children:[t.jsx(n,{...o}),t.jsx(i,{size:"lg",variant:"success",onClick:()=>c.success("I am a success toast!"),children:"Launch toast"})]})},e={args:{position:"top-right"},render:o=>t.jsxs(t.Fragment,{children:[t.jsx(n,{...o}),t.jsx(i,{size:"lg",variant:"destructive",children:"Launch toast"})]})};var p,m,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      <Button size="lg" variant="destructive">
        Launch toast
      </Button>
    </>
}`,...(b=(B=e.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};const v=["BasicUsage","Info","Success","Error"],A=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:s,Error:e,Info:r,Success:a,__namedExportsOrder:v,default:S},Symbol.toStringTag,{value:"Module"}));export{s as B,e as E,r as I,A as S,a};
