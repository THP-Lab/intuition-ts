var et=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var r=(e,t,s)=>(et(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},h=(e,t,s,a)=>(et(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);var d=(e,t,s)=>(et(e,t,"access private method"),s);import{j as $}from"./jsx-runtime-Cw0GR0a5.js";import{S as Vt,l as st,r as H,b as Nt,q as vt,t as Rt,u as Wt,g as _t,v as zt,w as St,n as Qt,x as Bt}from"./QueryClientProvider-PEfgEk5W.js";import{r as R}from"./index-CTjT7uj6.js";import{bs as q,I as Gt,e as Ht}from"./AlertDialog-rYGbkc7W.js";var p,i,U,m,I,j,b,k,w,x,O,T,C,D,M,F,V,rt,N,at,W,it,_,nt,z,ot,B,ct,G,ut,Y,Lt,It,Yt=(It=class extends Vt{constructor(t,s){super();c(this,M);c(this,V);c(this,N);c(this,W);c(this,_);c(this,z);c(this,B);c(this,G);c(this,Y);c(this,p,void 0);c(this,i,void 0);c(this,U,void 0);c(this,m,void 0);c(this,I,void 0);c(this,j,void 0);c(this,b,void 0);c(this,k,void 0);c(this,w,void 0);c(this,x,void 0);c(this,O,void 0);c(this,T,void 0);c(this,C,void 0);c(this,D,new Set);this.options=s,h(this,p,t),h(this,b,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(r(this,i).addObserver(this),Ct(r(this,i),this.options)?d(this,M,F).call(this):this.updateResult(),d(this,_,nt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ht(r(this,i),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ht(r(this,i),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,d(this,z,ot).call(this),d(this,B,ct).call(this),r(this,i).removeObserver(this)}setOptions(t,s){const a=this.options,o=r(this,i);if(this.options=r(this,p).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");d(this,G,ut).call(this),r(this,i).setOptions(this.options),a._defaulted&&!st(this.options,a)&&r(this,p).getQueryCache().notify({type:"observerOptionsUpdated",query:r(this,i),observer:this});const n=this.hasListeners();n&&At(r(this,i),o,this.options,a)&&d(this,M,F).call(this),this.updateResult(s),n&&(r(this,i)!==o||this.options.enabled!==a.enabled||H(this.options.staleTime,r(this,i))!==H(a.staleTime,r(this,i)))&&d(this,V,rt).call(this);const u=d(this,N,at).call(this);n&&(r(this,i)!==o||this.options.enabled!==a.enabled||u!==r(this,C))&&d(this,W,it).call(this,u)}getOptimisticResult(t){const s=r(this,p).getQueryCache().build(r(this,p),t),a=this.createResult(s,t);return qt(this,a)&&(h(this,m,a),h(this,j,this.options),h(this,I,r(this,i).state)),a}getCurrentResult(){return r(this,m)}trackResult(t,s){const a={};return Object.keys(t).forEach(o=>{Object.defineProperty(a,o,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(o),s==null||s(o),t[o])})}),a}trackProp(t){r(this,D).add(t)}getCurrentQuery(){return r(this,i)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const s=r(this,p).defaultQueryOptions(t),a=r(this,p).getQueryCache().build(r(this,p),s);return a.isFetchingOptimistic=!0,a.fetch().then(()=>this.createResult(a,s))}fetch(t){return d(this,M,F).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),r(this,m)))}createResult(t,s){var bt;const a=r(this,i),o=this.options,n=r(this,m),u=r(this,I),f=r(this,j),E=t!==a?t.state:r(this,U),{state:S}=t;let l={...S},ft=!1,g;if(s._optimisticResults){const y=this.hasListeners(),tt=!y&&Ct(t,s),kt=y&&At(t,a,s,o);(tt||kt)&&(l={...l,...zt(S.data,t.options)}),s._optimisticResults==="isRestoring"&&(l.fetchStatus="idle")}let{error:mt,errorUpdatedAt:pt,status:A}=l;if(s.select&&l.data!==void 0)if(n&&l.data===(u==null?void 0:u.data)&&s.select===r(this,k))g=r(this,w);else try{h(this,k,s.select),g=s.select(l.data),g=St(n==null?void 0:n.data,g,s),h(this,w,g),h(this,b,null)}catch(y){h(this,b,y)}else g=l.data;if(s.placeholderData!==void 0&&g===void 0&&A==="pending"){let y;if(n!=null&&n.isPlaceholderData&&s.placeholderData===(f==null?void 0:f.placeholderData))y=n.data;else if(y=typeof s.placeholderData=="function"?s.placeholderData((bt=r(this,x))==null?void 0:bt.state.data,r(this,x)):s.placeholderData,s.select&&y!==void 0)try{y=s.select(y),h(this,b,null)}catch(tt){h(this,b,tt)}y!==void 0&&(A="success",g=St(n==null?void 0:n.data,y,s),ft=!0)}r(this,b)&&(mt=r(this,b),g=r(this,w),pt=Date.now(),A="error");const K=l.fetchStatus==="fetching",Z=A==="pending",J=A==="error",yt=Z&&K,gt=g!==void 0;return{status:A,fetchStatus:l.fetchStatus,isPending:Z,isSuccess:A==="success",isError:J,isInitialLoading:yt,isLoading:yt,data:g,dataUpdatedAt:l.dataUpdatedAt,error:mt,errorUpdatedAt:pt,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>E.dataUpdateCount||l.errorUpdateCount>E.errorUpdateCount,isFetching:K,isRefetching:K&&!Z,isLoadingError:J&&!gt,isPaused:l.fetchStatus==="paused",isPlaceholderData:ft,isRefetchError:J&&gt,isStale:lt(t,s),refetch:this.refetch}}updateResult(t){const s=r(this,m),a=this.createResult(r(this,i),this.options);if(h(this,I,r(this,i).state),h(this,j,this.options),r(this,I).data!==void 0&&h(this,x,r(this,i)),st(a,s))return;h(this,m,a);const o={},n=()=>{if(!s)return!0;const{notifyOnChangeProps:u}=this.options,f=typeof u=="function"?u():u;if(f==="all"||!f&&!r(this,D).size)return!0;const v=new Set(f??r(this,D));return this.options.throwOnError&&v.add("error"),Object.keys(r(this,m)).some(E=>{const S=E;return r(this,m)[S]!==s[S]&&v.has(S)})};(t==null?void 0:t.listeners)!==!1&&n()&&(o.listeners=!0),d(this,Y,Lt).call(this,{...o,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&d(this,_,nt).call(this)}},p=new WeakMap,i=new WeakMap,U=new WeakMap,m=new WeakMap,I=new WeakMap,j=new WeakMap,b=new WeakMap,k=new WeakMap,w=new WeakMap,x=new WeakMap,O=new WeakMap,T=new WeakMap,C=new WeakMap,D=new WeakMap,M=new WeakSet,F=function(t){d(this,G,ut).call(this);let s=r(this,i).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(Nt)),s},V=new WeakSet,rt=function(){d(this,z,ot).call(this);const t=H(this.options.staleTime,r(this,i));if(vt||r(this,m).isStale||!Rt(t))return;const a=Wt(r(this,m).dataUpdatedAt,t)+1;h(this,O,setTimeout(()=>{r(this,m).isStale||this.updateResult()},a))},N=new WeakSet,at=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(r(this,i)):this.options.refetchInterval)??!1},W=new WeakSet,it=function(t){d(this,B,ct).call(this),h(this,C,t),!(vt||this.options.enabled===!1||!Rt(r(this,C))||r(this,C)===0)&&h(this,T,setInterval(()=>{(this.options.refetchIntervalInBackground||_t.isFocused())&&d(this,M,F).call(this)},r(this,C)))},_=new WeakSet,nt=function(){d(this,V,rt).call(this),d(this,W,it).call(this,d(this,N,at).call(this))},z=new WeakSet,ot=function(){r(this,O)&&(clearTimeout(r(this,O)),h(this,O,void 0))},B=new WeakSet,ct=function(){r(this,T)&&(clearInterval(r(this,T)),h(this,T,void 0))},G=new WeakSet,ut=function(){const t=r(this,p).getQueryCache().build(r(this,p),this.options);if(t===r(this,i))return;const s=r(this,i);h(this,i,t),h(this,U,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},Y=new WeakSet,Lt=function(t){Qt.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(r(this,m))}),r(this,p).getQueryCache().notify({query:r(this,i),type:"observerResultsUpdated"})})},It);function $t(e,t){return t.enabled!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Ct(e,t){return $t(e,t)||e.state.data!==void 0&&ht(e,t,t.refetchOnMount)}function ht(e,t,s){if(t.enabled!==!1){const a=typeof s=="function"?s(e):s;return a==="always"||a!==!1&&lt(e,t)}return!1}function At(e,t,s,a){return(e!==t||a.enabled===!1)&&(!s.suspense||e.state.status!=="error")&&lt(e,s)}function lt(e,t){return t.enabled!==!1&&e.isStaleByTime(H(t.staleTime,e))}function qt(e,t){return!st(e.getCurrentResult(),t)}var Pt=R.createContext(!1),Xt=()=>R.useContext(Pt);Pt.Provider;function Kt(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Zt=R.createContext(Kt()),Jt=()=>R.useContext(Zt);function te(e,t){return typeof e=="function"?e(...t):!!e}var ee=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},se=e=>{R.useEffect(()=>{e.clearReset()},[e])},re=({result:e,errorResetBoundary:t,throwOnError:s,query:a})=>e.isError&&!t.isReset()&&!e.isFetching&&a&&te(s,[e.error,a]),ae=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},ie=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,ne=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function oe(e,t,s){const a=Bt(),o=Xt(),n=Jt(),u=a.defaultQueryOptions(e);u._optimisticResults=o?"isRestoring":"optimistic",ae(u),ee(u,n),se(n);const[f]=R.useState(()=>new t(a,u)),v=f.getOptimisticResult(u);if(R.useSyncExternalStore(R.useCallback(E=>{const S=o?()=>{}:f.subscribe(Qt.batchCalls(E));return f.updateResult(),S},[f,o]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),R.useEffect(()=>{f.setOptions(u,{listeners:!1})},[u,f]),ie(u,v))throw ne(u,f,n);if(re({result:v,errorResetBoundary:n,throwOnError:u.throwOnError,query:a.getQueryCache().get(u.queryHash)}))throw v.error;return u.notifyOnChangeProps?v:f.trackResult(v)}function ce(e,t){return oe(e,Yt)}const ue=()=>({headers:{"Content-Type":"application/json; charset=utf-8"}});function Ut(e,t,s){return async()=>{const o=await(await fetch("https://api.i7n.dev/v1/graphql",{method:"POST",...ue(),...s,body:JSON.stringify({query:e,variables:t})})).json();if(o.errors&&(!o.data||Object.keys(o.data).length===0)){const{message:n}=o.errors[0];throw new Error(n)}return o.data}}const he=`
    fragment AtomMetadata on atoms {
  data
  id
  image
  label
  emoji
  type
}
    `,le=`
    fragment AtomTxn on atoms {
  blockNumber
  blockTimestamp
  transactionHash
  creatorId
}
    `,de=`
    fragment AtomVaultDetails on atoms {
  vaultId
  walletId
  vault {
    positionCount
    totalShares
    currentSharePrice
  }
}
    `,fe=`
    fragment AccountMetadata on accounts {
  label
  image
  id
  atomId
  type
}
    `,me=`
    fragment AtomTriple on atoms {
  asSubject {
    id
    label
    object {
      data
      id
      image
      label
      emoji
      type
      creator {
        ...AccountMetadata
      }
    }
    predicate {
      data
      id
      image
      label
      emoji
      type
      creator {
        ...AccountMetadata
      }
    }
  }
  asPredicate {
    id
    label
    subject {
      data
      id
      image
      label
      emoji
      type
      creator {
        ...AccountMetadata
      }
    }
    object {
      data
      id
      image
      label
      emoji
      type
      creator {
        ...AccountMetadata
      }
    }
  }
  asObject {
    id
    label
    subject {
      data
      id
      image
      label
      emoji
      type
      creator {
        ...AccountMetadata
      }
    }
    predicate {
      data
      id
      image
      label
      emoji
      type
      creator {
        ...AccountMetadata
      }
    }
  }
}
    `,dt=`
    query GetAtom($id: numeric!) {
  atom(id: $id) {
    ...AtomMetadata
    ...AtomTxn
    ...AtomVaultDetails
    creator {
      ...AccountMetadata
    }
    ...AtomTriple
  }
}
    ${he}
${le}
${de}
${fe}
${me}`,X=(e,t)=>ce({queryKey:["GetAtom",e],queryFn:Ut(dt,e),...t});X.document=dt;X.getKey=e=>["GetAtom",e];X.fetcher=(e,t)=>Ut(dt,e,t);const pe={title:"Components/Identity/IdentityCard",component:q,argTypes:{variant:{description:"Variant of avatar",options:Object.values(Gt),table:{type:{summary:"string"},defaultValue:{summary:"user"}},control:"select"},avatarSrc:{type:"string",description:"Avatar image source"},name:{type:"string",description:"Name of the identity"},value:{type:"number",description:"Value associated to identity"},currency:{description:"Currency of the value provided",options:Object.values(Ht),table:{type:{summary:"string"},defaultValue:{summary:"ETH"}},control:"select"},walletAddress:{type:"string",description:"Wallet address of identity"}}},Q={args:{variant:"user",avatarSrc:"https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg",name:"Super Dave",value:4.123,currency:"ETH",walletAddress:"0x1234567890abcdef1234567890abcdef12345678"},render:e=>$.jsx(q,{...e})},L={render:()=>$.jsx(q,{variant:"non-user",avatarSrc:"https://avatars.githubusercontent.com/u/94311139?s=200&v=4",name:"Intuition",value:7.892,currency:"ETH",walletAddress:"0x1234567890abcdef1234567890abcdef12345678"})},ye=()=>{var t,s,a,o,n;const{data:e}=X({id:2});return $.jsx(q,{variant:"non-user",avatarSrc:((t=e==null?void 0:e.atom)==null?void 0:t.image)??"",name:((s=e==null?void 0:e.atom)==null?void 0:s.label)??"",value:((o=(a=e==null?void 0:e.atom)==null?void 0:a.vault)==null?void 0:o.totalShares)??0,currency:"ETH",walletAddress:((n=e==null?void 0:e.atom)==null?void 0:n.walletId)??""})},P={render:()=>$.jsx(ye,{}),parameters:{docs:{description:{story:"This example shows the IdentityCard component with live data fetched from the Intuition GraphQL API.."}}}};var Ot,Tt,Mt;Q.parameters={...Q.parameters,docs:{...(Ot=Q.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  args: {
    variant: 'user',
    avatarSrc: 'https://m.media-amazon.com/images/M/MV5BNDhiMWYzMjgtNTRiYi00ZTA3LThlODctNDRkMDk0NzFkMWI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg0MTkzMzA@._V1_.jpg',
    name: 'Super Dave',
    value: 4.123,
    currency: 'ETH',
    walletAddress: '0x1234567890abcdef1234567890abcdef12345678'
  },
  render: args => <IdentityCard {...args} />
}`,...(Mt=(Tt=Q.parameters)==null?void 0:Tt.docs)==null?void 0:Mt.source}}};var Et,jt,wt;L.parameters={...L.parameters,docs:{...(Et=L.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  render: () => <IdentityCard variant="non-user" avatarSrc="https://avatars.githubusercontent.com/u/94311139?s=200&v=4" name="Intuition" value={7.892} currency="ETH" walletAddress="0x1234567890abcdef1234567890abcdef12345678" />
}`,...(wt=(jt=L.parameters)==null?void 0:jt.docs)==null?void 0:wt.source}}};var xt,Dt,Ft;P.parameters={...P.parameters,docs:{...(xt=P.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  render: () => <SmartIdentityCard />,
  parameters: {
    docs: {
      description: {
        story: 'This example shows the IdentityCard component with live data fetched from the Intuition GraphQL API..'
      }
    }
  }
}`,...(Ft=(Dt=P.parameters)==null?void 0:Dt.docs)==null?void 0:Ft.source}}};const ge=["BasicUsage","Entity","WithLiveData"],Ie=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:Q,Entity:L,WithLiveData:P,__namedExportsOrder:ge,default:pe},Symbol.toStringTag,{value:"Module"}));export{Q as B,L as E,Ie as S};
