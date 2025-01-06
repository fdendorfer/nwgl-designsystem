import{q as f,p as s,c as n,v as l,A as d,y as r,z as o,o as u}from"./vue.esm-bundler-BiTVOWp5.js";const c=["data-default-theme"],g=["for"],y=["id","name","rows","cols","maxlength","minlength","placeholder","required"],p=f({__name:"Textarea",props:{theme:{type:String,validator:e=>["light","dark"].includes(e),default:()=>null},size:{type:String,validator:e=>["sm","base","lg"].includes(e),default:()=>{}},id:{type:String,default:()=>{}},name:{type:String,default:()=>{}},label:{type:String,default:()=>{}},placeholder:{type:String,default:()=>{}},rows:{type:Number,default:()=>4},cols:{type:Number,default:()=>50},message:{type:String,default:()=>{}},messageType:{type:String,validator:e=>["error","warning","success","info"].includes(e),default:()=>{}},required:{type:Boolean,default:()=>!1},resizable:{type:Boolean,default:()=>!0},maxlength:{type:Number,default:()=>{}},minlength:{type:Number,default:()=>{}}},setup(e){const a=e,i=s(()=>{let t="";return a.size&&(t+=`input--${a.size} `),a.messageType&&(t+=`input--${a.messageType} `),a.resizable||(t+="textarea--public"),t}),m=s(()=>{let t="";return a.size&&(t+=`text--${a.size} `),a.required&&(t+="text--asterisk "),t});return(t,v)=>(u(),n("div",{class:"form__group__input","data-default-theme":a.theme},[e.label?(u(),n("label",{key:0,for:e.id,class:l(m.value)},d(e.label),11,g)):r("",!0),o("textarea",{id:e.id,class:l(i.value),name:e.id,rows:e.rows,cols:e.cols,maxlength:e.maxlength,minlength:e.minlength,placeholder:e.placeholder,required:e.required},null,10,y),e.message?(u(),n("div",{key:1,class:l(["badge badge--sm",`badge--${e.messageType}`])},d(e.message),3)):r("",!0)],8,c))}});p.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"theme",type:{name:"string"},defaultValue:{func:!0,value:"() => null"},values:["light","dark"]},{name:"size",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["sm","base","lg"]},{name:"id",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"name",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"label",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"rows",type:{name:"number"},defaultValue:{func:!0,value:"() => 4"}},{name:"cols",type:{name:"number"},defaultValue:{func:!0,value:"() => 50"}},{name:"message",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"messageType",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["error","warning","success","info"]},{name:"required",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"resizable",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"maxlength",type:{name:"number"},defaultValue:{func:!0,value:"() => undefined"}},{name:"minlength",type:{name:"number"},defaultValue:{func:!0,value:"() => undefined"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/Textarea.vue"]};export{p as _};
