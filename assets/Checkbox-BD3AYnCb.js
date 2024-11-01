import{s as m,q as d,c as t,b as r,x as l,z as i,A as g,o as u}from"./vue.esm-bundler-8gVuwTo0.js";const v={class:"form__group__checkbox"},y=["id","name","value","required","checked"],p=["for"],b=["innerHTML"],h={key:0,class:"sr-only"},k=m({__name:"Checkbox",props:{variant:{type:String,validator:e=>["outline","negative"].includes(e),default:()=>"outline"},size:{type:String,validator:e=>["sm","base","lg"].includes(e),default:()=>{}},label:{type:String,default:()=>{}},value:{type:String,default:()=>{}},id:{type:String,default:()=>{}},name:{type:String,default:()=>{}},message:{type:String,default:()=>{}},messageType:{type:String,validator:e=>["error","warning","success","info"].includes(e),default:()=>{}},required:{type:Boolean,default:()=>!1},onChange:{type:Function,default:()=>({})},checked:{type:Boolean,default:()=>!1}},setup(e){const a=e,o=d(()=>{let n="input ";return a.variant&&(n+=`input--${a.variant} `),a.size&&(n+=`input--${a.size} `),a.messageType&&(n+=`input--${a.messageType} `),n}),c=d(()=>{let n="";return a.variant==="negative"&&(n+="text--negative "),a.size&&(n+=`text--${a.size} `),a.required&&(n+="text--asterisk "),n});return(n,s)=>(u(),t("div",v,[r("input",{id:e.id,type:"checkbox",class:l(o.value),name:e.name,value:e.value,required:e.required,checked:e.checked,onChange:s[0]||(s[0]=(...f)=>e.onChange&&e.onChange(...f))},null,42,y),e.label?(u(),t("label",{key:0,for:e.id,class:l(c.value)},[r("span",{innerHTML:e.label},null,8,b),e.required?(u(),t("span",h,"required")):i("",!0)],10,p)):i("",!0),e.message?(u(),t("div",{key:1,class:l(["badge badge--sm",`badge--${e.messageType}`])},g(e.message),3)):i("",!0)]))}});k.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!0,value:"() => 'outline'"},values:["outline","negative"]},{name:"size",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["sm","base","lg"]},{name:"label",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"value",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"name",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"message",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"messageType",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["error","warning","success","info"]},{name:"required",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"onChange",type:{name:"(e: Event) => void"},defaultValue:{func:!0,value:"() => ({})"}},{name:"checked",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/Checkbox.vue"]};export{k as _};