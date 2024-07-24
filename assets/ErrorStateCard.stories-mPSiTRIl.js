import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{B as l}from"./TransactionStatusIndicator-CHAjp0Bb.js";import{I as u,a as g}from"./Icon.types-cQmbtfph.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-8XoeDUlW.js";import"./QuestCriteriaCard-DKN7bypV.js";import"./QuestCriteriaDisplay-13wHbsZ-.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestStatusIndicator-DRoc4dCN.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import{T as x}from"./Text-CIyuOUAi.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";const t=({message:m="No error occured.",children:p})=>r.jsxs("div",{className:"flex flex-col justify-center items-center p-6 theme-border border-destructive/50 rounded-lg min-h-52",children:[r.jsx(u,{name:g.triangleExclamation,className:"w-12 h-12 mb-4 text-destructive"}),r.jsx(x,{variant:"caption",className:"text-muted-foreground mb-5",children:m}),p]});t.__docgenInfo={description:"",methods:[],displayName:"ErrorStateCard",props:{message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No error occured.'",computed:!1}}}};const v={title:"Components/ErrorStateCard",component:t},e={args:{},render:()=>r.jsx("div",{className:"w-[600px]",children:r.jsx(t,{message:"An error occured"})})},o={args:{},render:()=>r.jsx("div",{className:"w-[600px]",children:r.jsx(t,{message:"An error occured",children:r.jsx(l,{size:"md",onClick:()=>console.log("Clicked"),variant:"destructive",children:"Retry"})})})};var s,a,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="w-[600px]">
      <ErrorStateCard message="An error occured" />
    </div>
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var i,c,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="w-[600px]">
      <ErrorStateCard message="An error occured">
        <Button size="md" onClick={() => console.log('Clicked')} variant="destructive">
          Retry
        </Button>
      </ErrorStateCard>
    </div>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const f=["BasicUsage","WithChildren"],W=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,WithChildren:o,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{e as B,W as S,o as W};
