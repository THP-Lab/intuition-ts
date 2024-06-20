import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{B as m}from"./Button-CzEHE8a5.js";import{P as a,a as u}from"./ProfileCard-CY9m7nXW.js";const p={title:"Components/ProfileCard",component:a,argTypes:{type:{description:"Type of the profile card (user or entity)",options:Object.keys(u),control:{type:"radio"},table:{type:{summary:"user | entity"}}},avatarSrc:{description:"URL of the avatar image",table:{type:{summary:"string"}}},name:{description:"Name of the user or entity",table:{type:{summary:"string"}}},walletAddress:{description:"Wallet address of the user or entity",table:{type:{summary:"string"}}},stats:{description:"Statistics related to the user or entity",table:{type:{summary:"{ numberOfFollowers: number, numberOfFollowing?: number, points?: number }"}}},link:{description:"Link related to the entity (optional)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},bio:{description:"Bio or description of the user or entity",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}}}},e={args:{type:"user",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',name:"John Doe",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",stats:{numberOfFollowers:123,numberOfFollowing:45,points:671234},bio:"John Doe is a blockchain enthusiast. He loves to learn new things and share his knowledge with others. He is also a contributor to various open-source projects."},render:r=>t.jsx("div",{className:"w-[500px]",children:t.jsx(a,{...r,children:t.jsx(m,{variant:"secondary",size:"lg",className:"w-full",onClick:()=>window.open("https://example.com","_blank"),children:"Follow"})})})},o={args:{type:"entity",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',name:"Blockchain Corp",walletAddress:"0x1234567890abcdef1234567890abcdef12345678",stats:{numberOfFollowers:300},link:"https://blockchaincorp.com",bio:"Blockchain Corp is a leading company in blockchain technology. Visit our website for more information about how you can benefit from our services."},render:r=>t.jsx("div",{className:"w-[500px]",children:t.jsx(a,{...r})})};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'user',
    avatarSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',
    name: 'John Doe',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    stats: {
      numberOfFollowers: 123,
      numberOfFollowing: 45,
      points: 671234
    },
    bio: 'John Doe is a blockchain enthusiast. He loves to learn new things and share his knowledge with others. He is also a contributor to various open-source projects.'
  },
  render: (args: ProfileCardProps) => <div className="w-[500px]">
      <ProfileCard {...args}>
        <Button variant="secondary" size="lg" className="w-full" onClick={() => window.open('https://example.com', '_blank')}>
          Follow
        </Button>
      </ProfileCard>
    </div>
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'entity',
    avatarSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',
    name: 'Blockchain Corp',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
    stats: {
      numberOfFollowers: 300
    },
    link: 'https://blockchaincorp.com',
    bio: 'Blockchain Corp is a leading company in blockchain technology. Visit our website for more information about how you can benefit from our services.'
  },
  render: (args: ProfileCardProps) => <div className="w-[500px]">
      <ProfileCard {...args} />
    </div>
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["BasicUsage","EntityProfile"],g=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,EntityProfile:o,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{e as B,o as E,g as S};
