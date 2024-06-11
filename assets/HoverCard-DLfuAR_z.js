import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{M as i,T as n,d as s,C as m}from"./index-DoZAaXoK.js";import"./Avatar-BtHJmJsO.js";import"./Badge-DdnwakjS.js";import{B as p}from"./Identity-Ci4Ffj2_.js";import"./Input-BOF_Ax6K.js";import"./Separator-CDCDkwLb.js";import"./Text-Ut-2NFPv.js";import"./Resizable-D6r50leV.js";import"./Icon-B74lSK-X.js";import"./Textarea-BcMsqAZI.js";import"./Label-Cn83oreb.js";import"./Table-DhRwqTN4.js";import"./ValueDisplay-D0Lul068.js";import{S as v,B as d}from"./HoverCard.stories-BvV0-536.js";import"./index-CTjT7uj6.js";import"./iframe-DIRCjE3b.js";import"../sb-preview/runtime.js";import"./index-D62jTv_I.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-bugisSBR.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function a(e){const r={h4:"h4",...o(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:v}),`
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
`,t.jsx(m,{of:d,sourceState:"none"})]})}function U(e={}){const{wrapper:r}={...o(),...e.components};return r?t.jsx(r,{...e,children:t.jsx(a,{...e})}):a(e)}export{U as default};
