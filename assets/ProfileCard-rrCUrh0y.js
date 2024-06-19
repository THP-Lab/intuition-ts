import{j as o}from"./jsx-runtime-Cw0GR0a5.js";import{useMDXComponents as a}from"./index-DSkyVWTJ.js";import{M as s,T as l,d as r,C as i,e as m}from"./index-hUeIvFgM.js";import{S as p,B as c,E as d}from"./ProfileCard.stories-B4xrdq4H.js";import"./index-CTjT7uj6.js";import"./iframe-7CsLR0mM.js";import"../sb-preview/runtime.js";import"./index-C1lphb2L.js";import"./index-Ch33dFXB.js";import"./index-BhgyLgKK.js";import"./index-BPrHwcGF.js";import"./index-DXimoRZY.js";import"./index-Bx4XDAbk.js";import"./index-DrFu-skq.js";import"./ProfileCard-DpnhLKbN.js";import"./index-Bb4qSo10.js";import"./index-CNBET2ao.js";import"./palette-saq09hvB.js";import"./createLucideIcon-BfM7wYCo.js";import"./Text-ANaTnboW.js";import"./Avatar-CPJSyWeX.js";function n(e){const t={h2:"h2",h3:"h3",h4:"h4",...a(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:p}),`
`,o.jsx(l,{}),`
`,o.jsx(t.h4,{id:"the-profilecard-component-displays-user-or-entity-profile-information-with-various-details-like-followers-bio-and-more",children:"The ProfileCard component displays user or entity profile information with various details like followers, bio, and more."}),`
`,o.jsx(r,{dark:!0,language:"tsx",code:`
import { ProfileCard } from '@0xintuition/1ui'

<ProfileCard
  type="user"
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
`,o.jsx(i,{of:c,sourceState:"none"}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(m,{}),`
`,o.jsx(t.h2,{id:"variants",children:"Variants"}),`
`,o.jsx(t.h3,{id:"entity-profile",children:"Entity Profile"}),`
`,o.jsx(r,{dark:!0,language:"tsx",code:`
<ProfileCard
  type="entity"
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
`,o.jsx(i,{of:d,sourceState:"none"})]})}function X(e={}){const{wrapper:t}={...a(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(n,{...e})}):n(e)}export{X as default};
