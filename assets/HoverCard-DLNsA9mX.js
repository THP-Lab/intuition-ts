import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{M as i,T as n,d as s,C as m}from"./index-JNSOf_yg.js";import"./Avatar-UxDhLsv0.js";import"./Badge-DdnwakjS.js";import{B as p}from"./HoverCard-DZGUrJgR.js";import"./Input-BOF_Ax6K.js";import"./Separator-DYgGFWWP.js";import"./Text-Ut-2NFPv.js";import"./Resizable-D6r50leV.js";import"./Icon-Cl8ckYc1.js";import"./Textarea-BcMsqAZI.js";import"./Label-BD0qxwcT.js";import"./Table-DhRwqTN4.js";import{S as v,B as d}from"./HoverCard.stories-DssXcMgC.js";import"./index-CTjT7uj6.js";import"./iframe-B6eFN1Rm.js";import"../sb-preview/runtime.js";import"./index-D5E_9go9.js";import"./index-DCLEVAFB.js";import"./index-DdAkmXN0.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-bugisSBR.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function a(e){const r={h4:"h4",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:v}),`
`,t.jsx(n,{}),`
`,t.jsx(r.h4,{id:"for-sighted-users-to-preview-content-available-behind-a-link",children:"For sighted users to preview content available behind a link."}),`
`,t.jsx(p,{variant:"accent",onClick:()=>window.open("https://www.radix-ui.com/primitives/docs/components/hover-card#api-reference","_blank"),children:"API Reference"}),`
`,t.jsx(s,{dark:!0,language:"tsx",code:`
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@0xintuition/1ui'

<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="text">@super_dave</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-60">
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="image.jpg" />
        <AvatarFallback>SD</AvatarFallback>
      </Avatar>
      <div>
        <Text variant="body">Super Dave</Text>
        <Text variant="caption" className="text-primary/50">
          @super_dave
        </Text>
      </div>
    </div>
    <Text variant="caption">
      I am Super Dave, the most super Dave you&apos;ll ever meet.
    </Text>
    <div className="flex gap-10">
      <div>
        <Text variant="body">9122</Text>
        <Text variant="caption" className="text-primary/50">
          followers
        </Text>
      </div>
      <div>
        <Text variant="body">1239</Text>
        <Text variant="caption" className="text-primary/50">
          following
        </Text>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
`}),`
`,t.jsx(m,{of:d,sourceState:"none"})]})}function P(e={}){const{wrapper:r}={...o(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(a,{...e})}):a(e)}export{P as default};
