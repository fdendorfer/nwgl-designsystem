import{s as c,g as d,k as t,q as r,z as i,x as s,A as g,p as u}from"./vue.esm-bundler-B8GkW3lv.js";const v={class:"form__group__radio"},y=["id","name","value","checked","required"],p=["for"],h=["innerHTML"],b={key:0,class:"sr-only"},k=c({__name:"Radio",props:{variant:{type:String,validator:e=>["outline","negative"].includes(e),default:()=>"outline"},size:{type:String,validator:e=>["sm","base","lg"].includes(e),default:()=>{}},label:{type:String,default:()=>{}},value:{type:String,default:()=>{}},id:{type:String,default:()=>{}},name:{type:String,default:()=>{}},message:{type:String,default:()=>{}},checked:{type:Boolean},messageType:{type:String,validator:e=>["error","warning","success","info"].includes(e),default:()=>{}},required:{type:Boolean,default:()=>!1},onChange:{type:Function,default:()=>({})}},setup(e){const a=e,o=d(()=>{let n="input ";return a.variant&&(n+=`input--${a.variant} `),a.size&&(n+=`input--${a.size} `),a.messageType&&(n+=`input--${a.messageType} `),n}),f=d(()=>{let n="";return a.variant==="negative"&&(n+="text--negative "),a.size&&(n+=`text--${a.size} `),a.required&&(n+="text--asterisk "),n});return(n,l)=>(u(),t("div",v,[r("input",{id:e.id,type:"radio",class:s(o.value),name:e.name,value:e.value,checked:e.checked,required:e.required,onChange:l[0]||(l[0]=(...m)=>e.onChange&&e.onChange(...m))},null,42,y),e.label?(u(),t("label",{key:0,for:e.id,class:s(f.value)},[r("span",{innerHTML:e.label},null,8,h),e.required?(u(),t("span",b,"required")):i("",!0)],10,p)):i("",!0),e.message?(u(),t("div",{key:1,class:s(["badge badge--sm",`badge--${e.messageType}`])},g(e.message),3)):i("",!0)]))}});k.__docgenInfo={exportName:"default",displayName:"Radio",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!0,value:"() => 'outline'"},values:["outline","negative"]},{name:"size",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["sm","base","lg"]},{name:"label",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"value",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"name",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"message",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"checked",type:{name:"boolean"}},{name:"messageType",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["error","warning","success","info"]},{name:"required",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"onChange",type:{name:"(e: Event) => void"},defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/Radio.vue"]};export{k as _};
