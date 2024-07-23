import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as m,d as i,C as e,e as p}from"./index-Ccu2PWYV.js";import{S as l,B as c,E as d}from"./ProfileCard.stories-CgcQP5A4.js";import"./index-CTjT7uj6.js";import"./iframe-By5qRJrg.js";import"../sb-preview/runtime.js";import"./index-DP8FJ8Qs.js";import"./index-BI02G6dj.js";import"./index-BhgyLgKK.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./TransactionStatusIndicator-DYmLWzfI.js";import"./index-jZxEZZ9l.js";import"./themes-JyTiufSz.js";import"./palette-saq09hvB.js";import"./index-Bb4qSo10.js";import"./Icon.types-Csn6eVsj.js";import"./Text-CIyuOUAi.js";import"./Label-l7hlfg-Q.js";import"./PieChart-B_dtFskq.js";import"./ProgressBar-CZqSfr2M.js";import"./ProgressCard-HIGHqO49.js";import"./progress-DxZziHAc.js";import"./QuestCriteriaCard-DU_nEwuR.js";import"./QuestCriteriaDisplay-BOc2v1Da.js";import"./quest-BMAtC6cg.js";import"./QuestPointsDisplay-DOFHvDSK.js";import"./QuestSetCard-CAqByP9R.js";import"./QuestStatusIndicator-DjnhoyJG.js";import"./SegmentedControl-Dt9e-2dS.js";import"./Separator-DqkY-AaL.js";import"./Skeleton-CGZOk8OX.js";import"./Table-Cj9ooZRp.js";import"./Textarea-BN2eJ_eZ.js";import"./ValueDisplay-OcmgwD6b.js";function n(r){const t={h2:"h2",h3:"h3",h4:"h4",...a(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:l}),`
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
`,o.jsx(e,{of:d,sourceState:"none"})]})}function W(r={}){const{wrapper:t}={...a(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(n,{...r})}):n(r)}export{W as default};
