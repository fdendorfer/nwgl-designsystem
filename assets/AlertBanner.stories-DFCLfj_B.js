import{s as b,M as k,N as C,q as w,c as s,b as n,u as v,z as a,A as t,D as m,x as B,o as i}from"./vue.esm-bundler-8gVuwTo0.js";import{_ as p}from"./SvgIcon-DQlQeqh7.js";import{_}from"./Btn-9qvBBGqu.js";const x={class:"alert-banner__wrapper"},S={class:"alert-banner__grid"},A={class:"alert-banner__header"},W={class:"font--bold"},q={class:"alert-banner__content"},E={key:0,class:"alert-banner__list"},z={class:"alert-banner__list-item"},V={class:"alert-banner__link"},o=b({__name:"AlertBanner",props:k({title:{type:String,required:!0},topic:{type:String,required:!0},type:{type:String,default:()=>{},validator:e=>["info","alert","warning","error","success"].includes(e)},lastUpdated:{type:String,required:!0},text:{type:String,required:!0},introLink:{type:String,required:!1,default:()=>{}},link:{type:Object,required:!1,default:()=>{}},icon:{type:String,default:()=>"WarningCircle"},closeBtn:{type:Boolean,default:()=>!0}},{isClosed:{type:Boolean,default:()=>!1},isClosedModifiers:{}}),emits:["update:isClosed"],setup(e){const c=C(e,"isClosed"),u=e,y=w(()=>{let l="alert-banner ";return u.type&&(l+=`alert-banner--${u.type} `),l});return(l,d)=>c.value?a("",!0):(i(),s("div",{key:0,class:B(y.value)},[n("div",x,[e.icon?(i(),v(p,{key:0,icon:e.icon,class:"notification__icon"},null,8,["icon"])):a("",!0),n("div",S,[n("div",A,[n("h4",W,t(e.title),1),n("p",null,t(e.topic),1),n("p",null,t(e.lastUpdated),1)]),n("div",q,[n("p",null,t(e.text),1)]),e.link?(i(),s("ul",E,[n("li",z,[n("p",null,t(e.introLink),1),n("div",V,[m(_,{href:e.link.href,label:e.link.label,icon:e.link.icon?e.link.icon:"ArrowRight","icon-pos":"right",size:"sm",variant:"link-negative"},null,8,["href","label","icon"])])])])):a("",!0)]),e.closeBtn?(i(),s("button",{key:1,class:"alert-banner__close","aria-label":"Close alert banner",onClick:d[0]||(d[0]=U=>c.value=!0)},[m(p,{icon:"Cancel"})])):a("",!0)])],2))}});o.__docgenInfo={exportName:"default",displayName:"AlertBanner",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"topic",type:{name:"string"},required:!0},{name:"type",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["info","alert","warning","error","success"]},{name:"lastUpdated",type:{name:"string"},required:!0},{name:"text",type:{name:"string"},required:!0},{name:"introLink",type:{name:"string"},required:!1,defaultValue:{func:!0,value:"() => undefined"}},{name:"link",type:{name:"object"},required:!1,defaultValue:{func:!0,value:"() => undefined"}},{name:"icon",type:{name:"string"},defaultValue:{func:!0,value:"() => 'WarningCircle'"}},{name:"closeBtn",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/AlertBanner.vue"]};const D={title:"Components/AlertBanner",component:o,argTypes:{isClosed:{table:{category:"props"}},type:{table:{type:{summary:["string: info, warning, alert, error, success"]}},options:["info","warning","alert","error","success"],control:{type:"select"}},icon:{table:{type:{summary:["string: InfoCircle, WarningCircle, CancelCircle, HelpCircle"]}},options:["InfoCircle","WarningCircle","CancelCircle","HelpCircle",null],control:{type:"select"}}}},r={components:{AlertBanner:o},template:'<AlertBanner v-bind="args" />',args:{title:"Warnungen des Bundes",topic:"Hochwasser",type:"alert",lastUpdated:"Aktualisiert am: 11.09.2016, 11:13",icon:"WarningCircle",text:"Die Hochwassergefahr im Kanton Tessin geht ab Mittwoch 12 Uhr wieder zurück. Der Wasserstand sinkt allmählich und mit weiteren Überschwemmungen ist nicht zu rechnen. Beachten Sie jedoch weiterhin die Weisungen der Behörden und Einsatzkräfte vor Ort.",introLink:"Weitere Informationen finden Sie unter:",link:{href:"https://www.naturgefahren.ch/home.html?tab=actualdanger",label:"naturgefahren.ch",icon:"External"},closeBtn:!0,isClosed:!1}};var f,g,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  components: {
    AlertBanner
  },
  template: '<AlertBanner v-bind="args" />',
  args: {
    title: 'Warnungen des Bundes',
    topic: 'Hochwasser',
    type: 'alert',
    lastUpdated: 'Aktualisiert am: 11.09.2016, 11:13',
    icon: 'WarningCircle',
    text: 'Die Hochwassergefahr im Kanton Tessin geht ab Mittwoch 12 Uhr wieder zurück. Der Wasserstand sinkt allmählich und mit weiteren Überschwemmungen ist nicht zu rechnen. Beachten Sie jedoch weiterhin die Weisungen der Behörden und Einsatzkräfte vor Ort.',
    introLink: 'Weitere Informationen finden Sie unter:',
    link: {
      href: 'https://www.naturgefahren.ch/home.html?tab=actualdanger',
      label: 'naturgefahren.ch',
      icon: 'External'
    },
    closeBtn: true,
    isClosed: false
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const M=["Example"],O=Object.freeze(Object.defineProperty({__proto__:null,Example:r,__namedExportsOrder:M,default:D},Symbol.toStringTag,{value:"Module"}));export{O as A,r as E};