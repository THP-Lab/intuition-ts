import{j as r}from"./jsx-runtime-Cw0GR0a5.js";import{I as l,a as e}from"./Icon.types-DvvrcWKg.js";import{T as m}from"./Text-DsVeH9qI.js";import{c as a}from"./index-DgtlF2hQ.js";import{a as s}from"./quest-DnP0Hcox.js";const u=t=>{switch(t){case s.notStarted:return{iconName:e.circle,iconClass:"text-muted-foreground",criteriaClass:"text-foreground/70"};case s.partiallyFulfilled:return{iconName:e.circle,iconClass:"text-warning",criteriaClass:"text-warning"};case s.fulfilled:return{iconName:e.circleCheckFilled,iconClass:"text-success",criteriaClass:"text-success"};default:return{iconName:e.circle,iconClass:"text-muted-foreground",criteriaClass:"text-muted-foreground"}}},d=({criteria:t,status:i})=>{const{iconName:c,iconClass:o,criteriaClass:n}=u(i);return r.jsxs(m,{variant:"body",weight:"medium",className:a(n,"flex items-center gap-2"),children:[r.jsx(l,{name:c,className:a("w-4 h-4",o)}),t]})};d.__docgenInfo={description:"",methods:[],displayName:"QuestCriteriaDisplay",composes:["QuestCriteriaType"]};export{d as Q};
