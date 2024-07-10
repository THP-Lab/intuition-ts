import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as l,d as i,C as e,e as m}from"./index-CEhUMP7a.js";import{S as p,B as c,E as d}from"./ProfileCard.stories-DJpVsxDS.js";import"./index-CTjT7uj6.js";import"./iframe-CkDXea9L.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./Trunctacular-CInRYgri.js";import"./index-Bb4qSo10.js";import"./index-DeHqaMYO.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./Resizable-B4D6NlOM.js";import"./Icon.types-bVvTOTyL.js";import"./Text-DRgAEttF.js";import"./Label-Ca4F4AkB.js";import"./PieChart-B_dtFskq.js";import"./SegmentedControl-CpGzRY7X.js";import"./Separator-BPzIOX_U.js";import"./Table-DoQDVlQC.js";import"./Textarea-w5FyYqF_.js";import"./ValueDisplay-BGyvBqcS.js";function n(r){const t={h2:"h2",h3:"h3",h4:"h4",...a(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:p}),`
`,o.jsx(l,{}),`
`,o.jsx(t.h4,{id:"the-profilecard-component-displays-an-identity-profile-information-with-various-details-like-followers-bio-and-more",children:"The ProfileCard component displays an identity profile information with various details like followers, bio, and more."}),`
`,o.jsx(i,{dark:!0,language:"tsx",code:`
import { ProfileCard } from '@0xintuition/1ui'

<ProfileCard
  variant="user"
  avatarSrc="path/to/avatar.jpg"
  name="John Doe"
  walletAddress="0x1234567890abcdef1234567890abcdef12345678"
  stats={{
    numberOfFollowers: 123,
    numberOfFollowing: 45,
    points: 671234,
  }}
  link="https://example.com"
  bio="John Doe is a blockchain enthusiast. He loves to learn new things and share his knowledge with others. He is also a contributor to various open-source projects."
>
  <Button
    variant="accent"
    onClick={() => window.open('https://example.com', '_blank')}
  >
    Follow
  </Button>
</ProfileCard>
`}),`
`,o.jsx(e,{of:c,sourceState:"none"}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{}),`
`,o.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,o.jsx(t.h3,{id:"entity-profile",children:"Entity Profile"}),`
`,o.jsx(i,{dark:!0,language:"tsx",code:`
<ProfileCard
  variant="non-user"
  avatarSrc="https://example.com/avatar.jpg"
  name="Blockchain Corp"
  walletAddress="0x1234567890abcdef1234567890abcdef12345678"
  stats={{
    numberOfFollowers: 300,
  }}
  link="https://blockchaincorp.com"
  bio='Blockchain Corp is a leading company in blockchain technology. Visit our website for more information about how you can benefit from our services.'
/>
`}),`
`,o.jsx(e,{of:d,sourceState:"none"})]})}function R(r={}){const{wrapper:t}={...a(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(n,{...r})}):n(r)}export{R as default};
