import{s as h,r as y,J as E,E as x,q as S,K as C,L,c as s,b as n,x as g,A as V,z as r,D as B,G as p,H as b,o as i}from"./vue.esm-bundler-8gVuwTo0.js";import{_ as N}from"./SvgIcon-DQlQeqh7.js";const q=["open","aria-modal"],w=["aria-labelledby","aria-describedby"],A=["id"],D=["id"],F={key:1,class:"modal__footer"},M=h({__name:"Modal",props:{uuid:{type:String,default:()=>""},title:{type:String,default:()=>""},layout:{type:String,validator:t=>["auto","xs","sm","md","lg","xl","xs"].includes(t),default:()=>{}},triggerElements:{type:String,default:()=>""}},setup(t){const a=y(!1),o=y(void 0),c=E("close"),m=x(),l=t,_=S(()=>{let e="modal ";return l.layout&&(e+=`modal--${l.layout} `),e}),f=function(e){a.value=!0,document.addEventListener("keyup",v),e&&(o.value=e.currentTarget,e.preventDefault()),requestAnimationFrame(()=>{var d;(d=c.value)==null||d.focus()})},u=function(e){a.value=!1,document.removeEventListener("keyup",v),o.value&&(o.value.focus(),o.value=void 0),e&&e.preventDefault()},v=function(e){e.key==="Escape"&&u(e)},k=function(){var e;(e=c.value)==null||e.focus()};return C(()=>{document.querySelectorAll(l.triggerElements).forEach(e=>{e.addEventListener("click",f)})}),L(()=>{document.querySelectorAll(l.triggerElements).forEach(e=>{e.removeEventListener("click",f)})}),(e,d)=>(i(),s("div",{open:a.value,class:g(_.value),"aria-modal":a.value},[n("div",{class:"modal__content",role:"dialog","aria-labelledby":"modal-title-"+t.uuid,"aria-describedby":"modal-desc-"+t.uuid},[n("header",{class:g([{"modal__header--with-title":t.title},"modal__header"])},[t.title?(i(),s("h4",{key:0,id:"modal-title-"+t.uuid,class:"h4"},V(t.title),9,A)):r("",!0),n("button",{ref:"close",tabindex:"0",class:"modal__close","aria-label":"close",onClick:u},[B(N,{icon:"Cancel",size:"2xl"})],512)],2),p(m).body?(i(),s("div",{key:0,id:"modal-desc-"+t.uuid,class:"modal__body"},[b(e.$slots,"body")],8,D)):r("",!0),p(m).footer?(i(),s("footer",F,[b(e.$slots,"footer")])):r("",!0)],8,w),n("div",{ref:"backdrop",tabindex:"0",class:"modal__backdrop","aria-label":"close",onClick:u,onFocus:k},null,544)],10,q))}});M.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"uuid",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"title",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"layout",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["auto","xs","sm","md","lg","xl","xs"]},{name:"triggerElements",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}}],slots:[{name:"body"},{name:"footer"}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/Modal.vue"]};export{M as _};