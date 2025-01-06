import{q as r,p as l,c,z as t,A as o,y as u,v as d,o as n}from"./vue.esm-bundler-BiTVOWp5.js";const m={class:"container container--grid gap--responsive"},g={class:"quote"},f={class:"quote__text"},h={class:"quote__title"},p={class:"quote__author"},_={key:0,class:"quote__image"},v=["srcset","media"],y=["src","alt"],k=r({__name:"QuoteSection",props:{background:{type:String,validator:e=>["white","accent-01","accent-02","accent-03","accent-04"].includes(e),default:()=>"accent-01"},quote:{type:String,default:()=>{}},author:{type:String,default:()=>{}},image:{type:Object,default:()=>{}}},setup(e){const s=e,i=l(()=>{let a="section ";return s.background&&(a+=`bg--${s.background} `),a});return(a,q)=>(n(),c("section",{class:d(i.value)},[t("div",m,[t("figure",g,[t("div",f,[t("blockquote",h,o(e.quote),1),t("figcaption",p,o(e.author),1)]),e.image?(n(),c("picture",_,[e.image.source?(n(),c("source",{key:0,srcset:e.image.source.srcset,media:e.image.source.media},null,8,v)):u("",!0),t("img",{src:e.image.src,alt:e.image.alt,class:"shadow-2xl"},null,8,y)])):u("",!0)])])],2))}});k.__docgenInfo={exportName:"default",displayName:"QuoteSection",description:"",tags:{},props:[{name:"background",type:{name:"string"},defaultValue:{func:!0,value:"() => 'accent-01'"},values:["white","accent-01","accent-02","accent-03","accent-04"]},{name:"quote",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"author",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"image",type:{name:"object"},defaultValue:{func:!0,value:"() => undefined"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/sections/QuoteSection.vue"]};export{k as _};
