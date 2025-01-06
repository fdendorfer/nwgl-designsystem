import{q as P,p as _,c as l,z as t,y as c,D as r,v as ie,o as a,F as ae,C as re,s as T,X as ye,A as D,r as g,d as be,w as _e,K as we,O as Le,P as ke,u as I,B as $,n as H}from"./vue.esm-bundler-BiTVOWp5.js";import{_ as Ie,a as Se}from"./CarouselBadgeFilter-Cq6ntZRi.js";import{_ as x}from"./Btn-B1NleKrw.js";import{_ as G}from"./MetaInfo-DU4lcIFw.js";import{_ as S}from"./Select-BPQXZez3.js";import{_ as K}from"./SvgIcon-DJ1DxYZI.js";import{_ as Ae}from"./AlterBodyClasses-DwV3sxeL.js";import{_ as xe}from"./DesktopMenu-K6QRKoGe.js";import{_ as Be}from"./FooterInformation-DmlFs-Vr.js";import{_ as Fe}from"./FooterNavigation-BtVJocTB.js";import{_ as Me}from"./MobileMenu-CqV7MDz2.js";import{_ as Pe}from"./TopBar-0EQiqDOT.js";import{u as Te,_ as Ne}from"./TopHeader-Cpq9B669.js";import{v as ze}from"./v4-Ch9TGLTe.js";const $e={key:0,class:"index-page__card-image"},De=["src"],Re={class:"index-page__card-details-continer"},qe={key:0,class:"index-page__header"},Ce=["innerHTML"],Ee={key:1,class:"index-page__description"},je=["innerHTML"],Oe={key:2,class:"index-page__footer"},Ve={key:3,class:"index-page__card-footer__action"},ne=P({__name:"IndexPageResultListItem",props:{title:{type:String,required:!0},description:{type:String,default:()=>{}},searchTerm:{type:String,default:()=>{}},metaInfos:{type:Array,default:()=>[]},footerInfos:{type:Array,default:()=>[]},image:{type:String,default:()=>{}},footerAction:{type:String,default:()=>{}}},setup(o){const m=o,w=_(()=>L(m.title,m.searchTerm)),y=_(()=>L(m.description,m.searchTerm)),f=function(d,b){var h;if(d.nodeType===Node.TEXT_NODE){const u=new RegExp(b,"gi"),v=document.createElement("span");v.innerHTML=((h=d.textContent)==null?void 0:h.replace(u,N=>`<span class='highlight-blue'>${N}</span>`))||"",d.replaceWith(...v.childNodes)}else d.nodeType===Node.ELEMENT_NODE&&d.childNodes.forEach(u=>f(u,b))},L=function(d,b){if(!b)return d;const u=new DOMParser().parseFromString(d||"","text/html");return u.body.childNodes.forEach(v=>f(v,b)),u.body.innerHTML};return(d,b)=>(a(),l("div",{class:ie(["index-page__card",o.footerAction?"index-page__card-clickable":""])},[o.image?(a(),l("div",$e,[t("img",{src:o.image},null,8,De)])):c("",!0),t("div",Re,[o.metaInfos.length>0?(a(),l("div",qe,[r(G,{metainfos:o.metaInfos},null,8,["metainfos"])])):c("",!0),t("h3",{class:"index-page__card-title",innerHTML:w.value},null,8,Ce),o.description?(a(),l("div",Ee,[t("p",{innerHTML:y.value},null,8,je)])):c("",!0),o.footerInfos.length>0?(a(),l("div",Oe,[r(G,{metainfos:o.footerInfos},null,8,["metainfos"])])):c("",!0),o.footerAction?(a(),l("div",Ve,[r(x,{to:o.footerAction,variant:"outline","icon-pos":"only",icon:"ArrowRight",label:"Weiterlesen"},null,8,["to"])])):c("",!0)])],2))}});ne.__docgenInfo={exportName:"default",displayName:"IndexPageResultListItem",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"searchTerm",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"metaInfos",type:{name:"string[]"},defaultValue:{func:!0,value:"() => []"}},{name:"footerInfos",type:{name:"string[]"},defaultValue:{func:!0,value:"() => []"}},{name:"image",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"footerAction",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/IndexPageResultListItem.vue"]};const We=["id"],le=P({__name:"IndexPageResultListItemList",props:{item:{type:Object,required:!0},id:{type:String,required:!0},searchTerm:{type:String,default:()=>{}}},setup(o){return(m,w)=>(a(),l("ul",{id:`index-page-item-list-${o.id}`,class:"index-page-list"},[(a(!0),l(ae,null,re(o.item.results,(y,f)=>(a(),T(ne,ye({key:`listItem-${f}`,ref_for:!0},y,{searchTerm:o.searchTerm}),null,16,["searchTerm"]))),128))],8,We))}});le.__docgenInfo={exportName:"default",displayName:"IndexPageResultListItemList",description:"",tags:{},props:[{name:"item",type:{name:"GlossaryResult"},required:!0},{name:"id",type:{name:"string"},required:!0},{name:"searchTerm",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/IndexPageResultListItemList.vue"]};const Je={class:"index-page-result__title"},ue=P({__name:"IndexPageResultTitle",props:{title:{type:String,required:!0}},setup(o){return(m,w)=>(a(),l("h2",Je,D(o.title),1))}});ue.__docgenInfo={exportName:"default",displayName:"IndexPageResultTitle",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/IndexPageResultTitle.vue"]};const He={class:"index-page-result__list"},de=P({__name:"IndexPageResultList",props:{resultItems:{type:Array,default:()=>[]},searchTerm:{type:String,default:()=>{}}},setup(o){return(m,w)=>(a(),l("div",He,[(a(!0),l(ae,null,re(o.resultItems,(y,f)=>(a(),l("div",{key:`item-${f}`},[r(ue,{title:y.filter.toUpperCase()},null,8,["title"]),r(le,{id:String(f),item:y,searchTerm:o.searchTerm},null,8,["id","item","searchTerm"])]))),128))]))}});de.__docgenInfo={exportName:"default",displayName:"IndexPageResultList",description:"",tags:{},props:[{name:"resultItems",type:{name:"GlossaryResult[]"},defaultValue:{func:!0,value:"() => []"}},{name:"searchTerm",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/IndexPageResultList.vue"]};const Ge={id:"main-header"},Ke={id:"main-content"},Ue={class:"section section--default bg--accent-01"},Xe={class:"container"},Ze={id:"outer-search-container"},Ye={id:"search-container"},Qe={id:"inner-search-container"},et={class:"search search--large search--page-result"},tt={class:"search__group"},st={key:0,class:"btn"},ot={class:"index-page__filters"},it={key:0,class:"index-page__filters__drawer-section"},at={key:0,class:"index-page__filters__drawer"},rt={key:0,id:"sticky-search-container-placeholder"},nt={class:"section section--default"},lt={class:"container gap--responsive"},ut={class:"index-page-results"},dt={key:0,class:"index-page-results__header"},mt={class:"index-page-results__header__left"},ct={class:"index-page-results__header__right"},pt={key:2,class:"my-16"},gt={key:3,class:"search-results__no-results"},ft={class:"text--xl"},ht={class:"text--bold"},vt={key:0,class:"load-more-container"},yt={id:"main-footer",class:"footer"},R=P({__name:"indexPage",props:{isLoading:{type:Boolean,default:!1},useStickySearch:{type:Boolean,default:!1},showFilterSection:{type:Boolean,default:!1}},setup(o){const m=g(!1),w=g(0),y=g(0),f=g("a-z"),L=g(0),d=g(15),b=g(ze()),h=g("all"),u=g(""),v=g(!1),N=g(["numeric","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]),q=be([{title:"Afganistan",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","10. August 2021"],footerInfos:["PDF","5.4 MB","16. Oktober 2021"],image:"https://picsum.photos/600/900",footerAction:"https://www.google.ch"},{title:"Australien",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","23. januar 2022"],footerInfos:["PDF","4.1 MB","10. Oktober 2023"],image:"https://picsum.photos/300/400",footerAction:"https://www.google.ch"},{title:"Brasilien",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","05. März 2020"],footerInfos:["PDF","3.9 MB","08. April 2020"],footerAction:"https://www.google.ch"},{title:"Irland",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","30. Dezember 2019"],footerInfos:["PDF","1.8 MB","30. Dezember 2019"],image:"https://picsum.photos/600/900",footerAction:"https://www.google.ch"},{title:"Kanada",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","15. Februar 2021"],footerInfos:["PDF","2.3 MB","20. Februar 2021"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Deutschland",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","12. März 2022"],footerInfos:["PDF","3.2 MB","18. März 2022"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Japan",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","22. April 2020"],footerInfos:["PDF","4.5 MB","28. April 2020"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Indien",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","05. Mai 2021"],footerInfos:["PDF","3.7 MB","10. Mai 2021"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"China",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","18. Juni 2022"],footerInfos:["PDF","4.0 MB","25. Juni 2022"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Russland",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","10. Juli 2021"],footerInfos:["PDF","5.1 MB","15. Juli 2021"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Südafrika",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","25. August 2020"],footerInfos:["PDF","2.8 MB","30. August 2020"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Neuseeland",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","12. September 2021"],footerInfos:["PDF","3.4 MB","18. September 2021"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Spanien",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","05. Oktober 2022"],footerInfos:["PDF","4.7 MB","10. Oktober 2022"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Italien",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","15. November 2021"],footerInfos:["PDF","3.6 MB","20. November 2021"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Frankreich",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","20. Dezember 2021"],footerInfos:["PDF","4.2 MB","25. Dezember 2021"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Schweiz",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","10. Januar 2022"],footerInfos:["PDF","3.9 MB","15. Januar 2022"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Norwegen",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","05. Februar 2022"],footerInfos:["PDF","4.3 MB","10. Februar 2022"],image:"https://picsum.photos/600/900",footerAction:"https://www.google.ch"},{title:"Schweden",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","15. März 2022"],footerInfos:["PDF","4.1 MB","20. März 2022"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Mexiko",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","10. April 2022"],footerInfos:["PDF","3.8 MB","15. April 2022"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Argentinien",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","20. Mai 2022"],footerInfos:["PDF","4.0 MB","25. Mai 2022"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"},{title:"Griechenland",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","10. Juli 2022"],footerInfos:["PDF","4.5 MB","15. Juli 2022"],image:"https://picsum.photos/600/900",footerAction:"https://www.google.ch"},{title:"Thailand",description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",metaInfos:["Blogpost","20. August 2022"],footerInfos:["PDF","4.6 MB","25. August 2022"],image:"https://picsum.photos/400/200",footerAction:"https://www.google.ch"}]),C=o,E=_(()=>{const i=[];return q.forEach(e=>{const s=e.title.charAt(0);i.includes(s)||(isNaN(Number(s))?i.push(s.toLowerCase()):i.push("numeric"))}),N.value.filter(e=>!i.includes(e))}),me=_(()=>{var i;return((i=k.value)==null?void 0:i.reduce((e,s)=>e+s.results.length,0))!=A.value}),A=_(()=>{var i;return(i=j.value)==null?void 0:i.reduce((e,s)=>e+s.results.length,0)}),k=_(()=>{const i=[];let e=0;const s=ce.value;for(let n=0;n<s.length;n++)if(e+s[n].results.length<=d.value)i.push(s[n]),e+=s[n].results.length;else{let p=s[n].results.slice(0,d.value-e);p.length>0&&i.push({filter:s[n].filter,results:p});break}return i}),ce=_(()=>[...j.value.sort((e,s)=>{const n=e.filter,p=s.filter;if(f.value==="a-z"){if(n<p)return-1;if(n>p)return 1}else{if(n>p)return-1;if(n<p)return 1}return 0})]),j=_(()=>{let i=q.filter(s=>{const n=s.title.charAt(0);return h.value==="all"?s:h.value==="numeric"?!isNaN(Number(n)):h.value===n.toLowerCase()}),e=[];return i.forEach(s=>{const n=s.title.charAt(0);if(e.filter(p=>p.filter===n.toLowerCase()).length>0){const p=e.findIndex(ve=>ve.filter===n.toLowerCase());e[p].results.push(s)}else isNaN(Number(n))?e.push({filter:n.toLowerCase(),results:[s]}):e.push({filter:"0-9",results:[s]})}),u.value&&e.forEach(s=>{s.results=s.results.filter(n=>n.description.toLowerCase().includes(u.value.toLowerCase())||n.title.toLowerCase().includes(u.value.toLowerCase()))}),e.filter(s=>s.results.length>0)});async function pe(){v.value=!v.value,await H(),z()}function O(){if(m.value){const i=document.getElementById("index-page-title");i&&i.scrollIntoView({behavior:"smooth"})}}function z(){L.value=document.body.clientWidth;const i=document.getElementById("inner-search-container"),e=document.getElementById("outer-search-container"),s=document.getElementById("main-header");w.value=e.offsetTop+(s==null?void 0:s.clientHeight)-16,y.value=i.clientHeight,W()}function V(){L.value=document.body.clientWidth}async function W(){const i=document.getElementById("search-container"),e=document.getElementById("inner-search-container");if(w.value<window.scrollY){m.value=!0,await H();const s=document.getElementById("sticky-search-container-placeholder");s.style.height=`${y.value}px`,i.classList.add("sticky-search-container"),e.classList.add("container")}else m.value=!1,i.classList.remove("sticky-search-container"),e.classList.remove("container")}function ge(){return Te().mobileMenuIsOpen}function J(i){h.value=i,C.useStickySearch&&O()}function fe(i){f.value=i}function he(){d.value>=A.value||(d.value+15<A.value?d.value+=15:d.value=A.value)}return _e(()=>u,()=>{O()}),we(()=>{C.useStickySearch?(window.addEventListener("scroll",W),z(),window.addEventListener("resize",z)):(V(),window.addEventListener("resize",V))}),(i,e)=>(a(),l("div",null,[r(Ae,{isMobileMenuOpen:ge()},null,8,["isMobileMenuOpen"]),t("header",Ge,[e[4]||(e[4]=t("a",{href:"#main-content",class:"skip-to-content"},"Skip to main content",-1)),r(Pe,{isOpen:!1}),r(Ne),r(xe,{showActiveNavigation:!0}),r(Me,{showActiveNavigation:!0})]),t("main",Ke,[t("section",Ue,[t("div",Xe,[e[10]||(e[10]=t("h1",{id:"index-page-title",class:"h1"},"Reisen ins Ausland",-1)),t("div",Ze,[t("div",Ye,[t("div",Qe,[t("div",et,[t("div",tt,[Le(t("input",{id:"search-input","onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s),type:"search",label:"Reiseländer filtern",placeholder:"Suchbegriff eingeben",autocomplete:"off"},null,512),[[ke,u.value]]),o.isLoading?(a(),l("div",st,[r(K,{icon:"Spinner",size:"lg",class:"btn__icon icon--spin"})])):u.value?u.value?(a(),T(x,{key:2,label:"Eingabe löschen",icon:"CancelCircle","icon-pos":"only",variant:"bare",size:"lg",onEmitClick:e[1]||(e[1]=s=>u.value="")})):c("",!0):(a(),T(x,{key:1,label:"Reiseländer filtern",icon:"Filter","icon-pos":"only",variant:"bare",size:"lg"}))])]),t("div",ot,[r(Ie,{id:b.value,badgeClicked:J,activeFilter:h.value,disabledFilters:E.value},null,8,["id","activeFilter","disabledFilters"]),r(Se,{badgeClicked:J,activeFilter:h.value,disabledFilters:E.value},null,8,["activeFilter","disabledFilters"]),o.showFilterSection?(a(),l("div",it,[r(x,{label:v.value?"Filter ausblenden":"Filter anzeigen",variant:"bare",size:"sm","icon-pos":"left",icon:"ChevronDown",class:ie(v.value?" btn--icon-180":""),onClick:e[2]||(e[2]=s=>pe())},null,8,["label","class"]),v.value?(a(),l("div",at,[r(S,{id:"select-1",variant:"outline",size:"sm",name:"select-name",label:"Filter name"},{default:I(()=>e[5]||(e[5]=[t("option",{selected:""},"Option",-1),t("option",null,"...",-1)])),_:1}),r(S,{id:"select-2",variant:"outline",size:"sm",name:"select-name",label:"Filter name"},{default:I(()=>e[6]||(e[6]=[t("option",{selected:""},"Option",-1),t("option",null,"...",-1)])),_:1}),r(S,{id:"select-3",variant:"outline",size:"sm",name:"select-name",label:"Filter name"},{default:I(()=>e[7]||(e[7]=[t("option",{selected:""},"Option",-1),t("option",null,"...",-1)])),_:1}),r(S,{id:"select-4",variant:"outline",size:"sm",name:"select-name",label:"Filter name"},{default:I(()=>e[8]||(e[8]=[t("option",{selected:""},"Option",-1),t("option",null,"...",-1)])),_:1}),r(S,{id:"select-5",variant:"outline",size:"sm",name:"select-name",label:"Filter name"},{default:I(()=>e[9]||(e[9]=[t("option",{selected:""},"Option",-1),t("option",null,"...",-1)])),_:1})])):c("",!0)])):c("",!0)])])])]),m.value?(a(),l("div",rt)):c("",!0)])]),t("section",nt,[t("div",lt,[t("div",ut,[k.value.length!==0&&!o.isLoading?(a(),l("div",dt,[t("div",mt,[t("strong",null,D(A.value),1),e[11]||(e[11]=$("Länder "))]),t("div",ct,[r(S,{id:"select-6",variant:"outline",bare:"",size:"sm",name:"select-name",onSelect:fe},{default:I(()=>e[12]||(e[12]=[t("option",{disabled:"",selected:""},"Sortieren",-1),t("option",{selected:"",value:"a-z"},"Alphabetisch (A-Z)",-1),t("option",{value:"z-a"},"Alphabetisch (Z-A)",-1)])),_:1})])])):c("",!0),!o.isLoading&&k.value.length>0?(a(),T(de,{key:1,resultItems:k.value,searchTerm:u.value},null,8,["resultItems","searchTerm"])):c("",!0),o.isLoading?(a(),l("div",pt,[e[13]||(e[13]=t("h2",{class:"sr-only"},"Resultate werden geladen",-1)),r(K,{icon:"Spinner",size:"2xl",class:"icon--spin"})])):c("",!0),k.value.length===0&&!o.isLoading?(a(),l("div",gt,[t("h2",ft,[e[14]||(e[14]=$(" Die Suche nach ")),t("span",ht,D(u.value),1),e[15]||(e[15]=$(" ergab keine Treffer. "))]),e[16]||(e[16]=t("h3",{class:"h4"},"Tipps zur Suche",-1)),e[17]||(e[17]=t("ul",{class:"list list--default"},[t("li",null,"Überprüfen Sie die Schreibweise Ihres Suchbegriffes"),t("li",null,"Verwenden Sie einen anderen bzw. allgemeineren Begriff"),t("li",null,"Verwenden Sie ggf. weniger Suchbegriffe")],-1))])):c("",!0)]),k.value.length!==0&&!o.isLoading?(a(),l("div",vt,[r(x,{variant:"outline",size:"sm",label:"Mehr laden",disabled:!me.value,fullWidth:L.value<1024,onEmitClick:e[3]||(e[3]=s=>he())},null,8,["disabled","fullWidth"])])):c("",!0)])])]),t("footer",yt,[r(Be),r(Fe)])]))}});R.__docgenInfo={exportName:"default",displayName:"indexPage",description:"",tags:{},props:[{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"useStickySearch",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"showFilterSection",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/pages/indexPage.vue"]};const bt={title:"Pages/Index Page",component:R,render:(o,{viewMode:m})=>({setup:()=>({args:o,viewMode:m}),components:{IndexPage:R},template:`
      <IndexPage
        v-bind="args"
        :useStickyNavigation="viewMode === 'docs' ? false : args.useStickyNavigation"
      />`})},B={args:{isLoading:!1}},F={args:{isLoading:!1,useStickySearch:!0}},M={args:{isLoading:!1,useStickySearch:!0,useStickyFilters:!0}};var U,X,Z;B.parameters={...B.parameters,docs:{...(U=B.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isLoading: false
  }
}`,...(Z=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Y,Q,ee;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    useStickySearch: true
  }
}`,...(ee=(Q=F.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,se,oe;M.parameters={...M.parameters,docs:{...(te=M.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    useStickySearch: true,
    useStickyFilters: true
  }
}`,...(oe=(se=M.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const _t=["WithResults","WithStickyResults","WithResultsStickyAndFilters"],$t=Object.freeze(Object.defineProperty({__proto__:null,WithResults:B,WithResultsStickyAndFilters:M,WithStickyResults:F,__namedExportsOrder:_t,default:bt},Symbol.toStringTag,{value:"Module"}));export{$t as I,B as W,F as a,M as b};
