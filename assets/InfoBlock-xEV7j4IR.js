import{q as s,p as o,c as u,s as d,u as i,x as c,z as p,H as m,v as f,o as n,B as v,A as g}from"./vue.esm-bundler-BiTVOWp5.js";const h=s({__name:"InfoBlock",props:{title:{type:String,required:!0},icon:{type:String,default:()=>{}},borderTop:{type:Boolean,default:()=>!0},borderBottom:{type:Boolean,default:()=>!1},headingLevel:{type:String,default:()=>"h3",validator:t=>["h2","h3","h4","h5","div"].includes(t)}},setup(t){const a=t,l=o(()=>a.headingLevel),r=o(()=>{let e="info-block ";return a.borderTop&&(e+="border-t "),a.borderBottom&&(e+="border-b "),e});return(e,y)=>(n(),u("div",{class:f(r.value)},[(n(),d(c(l.value),{class:"info-block__title"},{default:i(()=>[v(g(t.title),1)]),_:1})),p("div",null,[m(e.$slots,"default")])],2))}});h.__docgenInfo={exportName:"default",displayName:"InfoBlock",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"icon",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"borderTop",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"borderBottom",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"headingLevel",type:{name:"string"},defaultValue:{func:!0,value:"() => 'h3'"},values:["h2","h3","h4","h5","div"]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/InfoBlock.vue"]};export{h as _};
