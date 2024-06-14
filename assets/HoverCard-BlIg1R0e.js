import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as o}from"./index-DSkyVWTJ.js";import{M as i,T as n,d as s,C as m}from"./index-CwzE_U0-.js";import"./Avatar-BqFJ6ENc.js";import"./Badge-BlZKMVE_.js";import{B as p}from"./Identity-BmlzQzyN.js";import"./Input-CFrL2YAq.js";import"./Separator-ho1Nl6GX.js";import"./Text-BJFUDWxl.js";import"./Resizable-DNd95Y6K.js";import"./Icon-Ba3_jQfB.js";import"./Textarea-DpSkS59a.js";import"./Label-FZHk6kRz.js";import"./Table-Cj0PeqN2.js";import"./ValueDisplay-CeuIe0pc.js";import"./SegmentedControl-DewWK8dB.js";import{S as v,B as d}from"./HoverCard.stories-BbIbNbg1.js";import"./index-CTjT7uj6.js";import"./iframe-B3kDBMWy.js";import"../sb-preview/runtime.js";import"./index-D62jTv_I.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./index-B7U7eni1.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";function a(r){const e={h4:"h4",...o(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{of:v}),`
`,t.jsx(n,{}),`
`,t.jsx(e.h4,{id:"for-sighted-users-to-preview-content-available-behind-a-link",children:"For sighted users to preview content available behind a link."}),`
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
`,t.jsx(m,{of:d,sourceState:"none"})]})}function q(r={}){const{wrapper:e}={...o(),...r.components};return e?t.jsx(e,{...r,children:t.jsx(a,{...r})}):a(r)}export{q as default};
