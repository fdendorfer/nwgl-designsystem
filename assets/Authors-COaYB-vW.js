import{q as f,p as i,c as a,F as l,C as c,y,z as _,B as u,A as n,v as m,o as s,s as d,u as g,x as k}from"./vue.esm-bundler-BiTVOWp5.js";import{_ as v}from"./SvgIcon-DJ1DxYZI.js";const x={key:0,class:"disc-images","aria-hidden":"true"},b=["src","title"],A={key:1},C={class:"authors__names"},B=f({__name:"Authors",props:{authors:{type:Array,required:!0},bare:{type:Boolean,default:()=>!1}},setup(t){const o=t,p=i(()=>o.authors.filter(r=>r.img)),h=i(()=>{let r="authors ";return o.bare&&(r+="authors--bare "),r});return(r,N)=>(s(),a("aside",{class:m(h.value)},[p.value.length?(s(),a("div",x,[(s(!0),a(l,null,c(t.authors,e=>(s(),a("div",{key:e.name,class:"disc-image"},[e.img?(s(),a("img",{key:0,src:e.img,title:e.name},null,8,b)):e.initials?(s(),a("div",A,n(e.initials),1)):(s(),d(v,{key:2,icon:"User",class:"btn__icon text-secondary-300"}))]))),128))])):y("",!0),_("address",C,[u(n(t.authors[0].prefix?t.authors[0].prefix:"von")+" ",1),(s(!0),a(l,null,c(t.authors,e=>(s(),d(k(e.url?"a":"span"),{key:e.name,class:m([e.url?"link":"","author__name"]),href:e.url},{default:g(()=>[u(n(e.name),1)]),_:2},1032,["class","href"]))),128))])],2))}});B.__docgenInfo={exportName:"default",displayName:"Authors",description:"",tags:{},props:[{name:"authors",type:{name:"Array<Author>"},required:!0},{name:"bare",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/Authors.vue"]};export{B as _};
