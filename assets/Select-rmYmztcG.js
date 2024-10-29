import{s as y,q as r,c as l,x as u,B as b,A as o,z as d,b as s,H as h,o as i}from"./vue.esm-bundler-8gVuwTo0.js";const S={class:"form__group__select"},V=["for"],q={key:0,class:"form__group__required"},z=["id","name","required"],x=y({__name:"Select",props:{variant:{type:String,validator:e=>["outline","negative"].includes(e),default:()=>"outline"},bare:{type:Boolean,default:()=>!1},size:{type:String,validator:e=>["sm","base","lg"].includes(e),default:()=>{}},label:{type:String,default:()=>{}},hideLabel:{type:Boolean,default:()=>!1},id:{type:String,default:()=>{}},name:{type:String,default:()=>{}},message:{type:String,default:()=>{}},messageType:{type:String,validator:e=>["error","warning","success","info"].includes(e),default:()=>{}},required:{type:Boolean,default:()=>!1},onSelect:{type:Function,default:()=>({})}},emits:["change"],setup(e,{emit:c}){const t=e,f=c,m=r(()=>{let a="select ";return t.bare&&(a+="select--bare "),a}),g=r(()=>{let a="";return t.variant&&(a+=`input--${t.variant} `),t.size&&(a+=`input--${t.size} `),t.message&&(a+=`input--${t.messageType} `),a}),v=r(()=>{let a="";return t.variant==="negative"&&(a+="text--negative "),t.size&&(a+=`text--${t.size} `),t.hideLabel&&(a+="sr-only "),t.required&&(a+="text--asterisk "),a}),p=function(a){const n=a.target;t.onSelect(n.value),f("change",n.value)};return(a,n)=>(i(),l("div",S,[e.label?(i(),l("label",{key:0,for:e.id,class:u(v.value)},[b(o(e.label),1),e.required?(i(),l("span",q)):d("",!0)],10,V)):d("",!0),s("div",{class:u(m.value)},[s("select",{id:e.id,class:u(g.value),name:e.name,required:e.required,onChange:p},[h(a.$slots,"default")],42,z),n[0]||(n[0]=s("div",{class:"select__icon"},[s("svg",{role:"presentation","aria-hidden":"true",viewBox:"0 0 24 24"},[s("path",{d:"m5.706 10.015 6.669 3.85 6.669-3.85.375.649-7.044 4.067-7.044-4.067z"})])],-1))],2),e.message?(i(),l("div",{key:1,class:u(["badge badge--sm",`badge--${e.messageType}`])},o(e.message),3)):d("",!0)]))}});x.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!0,value:"() => 'outline'"},values:["outline","negative"]},{name:"bare",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"size",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["sm","base","lg"]},{name:"label",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"hideLabel",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"name",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"message",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"messageType",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["error","warning","success","info"]},{name:"required",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"onSelect",type:{name:"(value: string) => void"},defaultValue:{func:!0,value:"() => ({})"}}],events:[{name:"change"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/Select.vue"]};export{x as _};
