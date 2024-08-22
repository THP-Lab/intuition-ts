import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as i,C as e,e as p}from"./index-D20SQN9d.js";import{S as l,B as c,E as d}from"./ProfileCard.stories-BHVE1tr_.js";import"./index-CTjT7uj6.js";import"./iframe-CrC6i-gH.js";import"../sb-preview/runtime.js";import"./index-BqnMPuz1.js";import"./index-DVBfyTD9.js";import"./index-9r8iugjR.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./AlertDialog-D-DUZV-F.js";import"./Checkbox-BVEY8e8G.js";import"./Icon.types-ByzLpCU-.js";import"./index-sXcn2mTS.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./Text-19x_d4-A.js";import"./Label-BP8-Mx5Z.js";import"./PieChart-9tI5Soxs.js";import"./ProgressBar-B07pz6pZ.js";import"./ProgressCard-e5tcEEn0.js";import"./SegmentedControl-CoVeRGEn.js";import"./Separator-r-Tg2QWT.js";import"./Skeleton-k6WNkHQZ.js";import"./Table-4UgCNE7H.js";import"./Textarea-DtV2ds88.js";import"./ValueDisplay-ClYOGsr-.js";function n(r){const t={h2:"h2",h3:"h3",h4:"h4",...a(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:l}),`
`,o.jsx(m,{}),`
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
`,o.jsx(p,{}),`
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
`,o.jsx(e,{of:d,sourceState:"none"})]})}function z(r={}){const{wrapper:t}={...a(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(n,{...r})}):n(r)}export{z as default};
