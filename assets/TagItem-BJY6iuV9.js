import{s as d,q as n,u as i,v as f,x as p,y as g,o as r,b as l,A as v,z as y}from"./vue.esm-bundler-8gVuwTo0.js";import{_}from"./SvgIcon-Cb4aIpDE.js";const b={class:"tag-item__inner"},h={class:"tag-item__text"},x=d({__name:"TagItem",props:{to:{type:String,required:!1,default:()=>{}},variant:{type:String,validator:a=>["default","primary","active"].includes(a),default:()=>{}},label:{type:String,required:!0},size:{type:String,default:()=>"base",validator:a=>["base","sm"].includes(a)},icon:{type:String,default:()=>{}}},setup(a){const e=a,o=n(()=>e.to?"a":"button"),s=n(()=>e.to?!1:"button"),u=n(()=>e.to?e.to:!1),c=n(()=>s.value==="button"?e.label:!1),m=n(()=>{let t="tag-item ";return e.variant&&(t+=`tag-item--${e.variant} `),e.size&&(t+=`tag-item--${e.size} `),e.icon&&(t+="tag-item--icon "),t});return(t,z)=>(r(),i(g(o.value),{href:u.value,type:s.value,class:p(m.value),"aria-label":c.value},{default:f(()=>[l("span",b,[l("span",h,v(a.label),1),a.icon?(r(),i(_,{key:0,icon:a.icon,class:"tag-item__icon"},null,8,["icon"])):y("",!0)])]),_:1},8,["href","type","class","aria-label"]))}});x.__docgenInfo={exportName:"default",displayName:"TagItem",description:"",tags:{},props:[{name:"to",type:{name:"string"},required:!1,defaultValue:{func:!0,value:"() => undefined"}},{name:"variant",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["default","primary","active"]},{name:"label",type:{name:"string"},required:!0},{name:"size",type:{name:"string"},defaultValue:{func:!0,value:"() => 'base'"},values:["base","sm"]},{name:"icon",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/TagItem.vue"]};export{x as _};
