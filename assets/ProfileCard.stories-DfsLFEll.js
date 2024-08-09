import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{am as o,I as d,B as m}from"./TransactionStatusIndicator-BfLH8jMA.js";const p={title:"Components/ProfileCard",component:o,argTypes:{variant:{description:"Variant of avatar",options:Object.values(d),table:{type:{summary:"string"},defaultValue:{summary:"user"}},control:"select"},avatarSrc:{description:"URL of the avatar image",table:{type:{summary:"string"}}},name:{description:"Name of the identity",table:{type:{summary:"string"}}},id:{description:"Wallet address of the identity",table:{type:{summary:"string"}}},vaultId:{description:"Vault ID of the identity",table:{type:{summary:"string"}}},stats:{description:"Statistics related to the identity",table:{type:{summary:"{ numberOfFollowers: number, numberOfFollowing?: number, points?: number }"}}},ipfsLink:{description:"Link related IPFS document",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},externalLink:{description:"Link related to the entity (optional)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},bio:{description:"Bio or description of the identity",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}}}},e={args:{variant:"user",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',name:"John Doe",id:"0x1234567890abcdef1234567890abcdef12345678",vaultId:"131",stats:{numberOfFollowers:123,numberOfFollowing:45,points:671234},bio:"John Doe is a blockchain enthusiast. He loves to learn new things and share his knowledge with others. He is also a contributor to various open-source projects."},render:n=>t.jsx("div",{className:"w-[500px]",children:t.jsx(o,{...n,children:t.jsx(m,{variant:"secondary",size:"lg",className:"w-full",onClick:()=>window.open("https://example.com","_blank"),children:"Follow"})})})},a={args:{variant:"non-user",avatarSrc:'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',name:"Blockchain Corp",id:"0x1234567890abcdef1234567890abcdef12345678",vaultId:"131",stats:{numberOfFollowers:300},ipfsLink:"https://ipfs.io/ipfs/QmYch4WMF5p7yxjEcuZJxNa7AFR1ZeQhCRsn9xG7P3koXo",externalLink:"https://blockchaincorp.com",bio:"Blockchain Corp is a leading company in blockchain technology. Visit our website for more information about how you can benefit from our services."},render:n=>t.jsx("div",{className:"w-[500px]",children:t.jsx(o,{...n})})};var r,s,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'user',
    avatarSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',
    name: 'John Doe',
    id: '0x1234567890abcdef1234567890abcdef12345678',
    vaultId: '131',
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,c,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'non-user',
    avatarSrc: 'https://avatars.githubusercontent.com/u/94311139?s=200&v=4"',
    name: 'Blockchain Corp',
    id: '0x1234567890abcdef1234567890abcdef12345678',
    vaultId: '131',
    stats: {
      numberOfFollowers: 300
    },
    ipfsLink: 'https://ipfs.io/ipfs/QmYch4WMF5p7yxjEcuZJxNa7AFR1ZeQhCRsn9xG7P3koXo',
    externalLink: 'https://blockchaincorp.com',
    bio: 'Blockchain Corp is a leading company in blockchain technology. Visit our website for more information about how you can benefit from our services.'
  },
  render: (args: ProfileCardProps) => <div className="w-[500px]">
      <ProfileCard {...args} />
    </div>
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const f=["BasicUsage","EntityProfile"],y=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:e,EntityProfile:a,__namedExportsOrder:f,default:p},Symbol.toStringTag,{value:"Module"}));export{e as B,a as E,y as S};
