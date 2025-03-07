import{s as A,b as m,k as n,D as a,q as e,G as B,u,z as o,B as N,l as P,p as i}from"./vue.esm-bundler-B8GkW3lv.js";import{_ as D}from"./AlterBodyClasses-CcUDapAo.js";import{_ as $}from"./TopBar-CpEPB6oK.js";import{u as V,_ as C}from"./TopHeader-Bn87GhNS.js";import{_ as T}from"./DesktopMenu-CKXB3V2_.js";import{_ as W}from"./MobileMenu-DOTckSP6.js";import{_ as z}from"./FooterInformation-CO0iFjI5.js";import{F as M}from"./FooterNavigation-BaFQyStT.js";import{_ as p}from"./SvgIcon-CvLaVXkC.js";import{_ as I}from"./Btn-ByR9kGXl.js";import{_ as h}from"./Radio-C3fBxXPo.js";import{_ as O}from"./SearchResultsList-rkeWEPgZ.js";import{_ as q}from"./Pagination-DwoW4rD7.js";import{_ as E}from"./Notification-BOMN1KTF.js";const F={id:"main-header"},j={id:"main-content"},G={class:"section section--default bg--secondary-50"},H={class:"container"},K={class:"search search--large search--page-result"},J={class:"search__group"},Q={key:0,class:"btn"},U={class:"section section--default"},X={class:"container gap--responsive"},Y=["aria-busy"],Z={class:"tabs search-results__tabs"},ee={id:"tab-1",tabindex:"0",role:"tabpanel","aria-labelledby":"tab-1",class:"tab__container"},te={key:0,class:"search-results__header"},se={class:"search-results__sort",role:"group","aria-labelledby":"radio-group-label-1"},ae={class:"form__group"},ie={key:2,class:"my-16"},oe={key:3,class:"search-results__no-results"},ne={id:"main-footer",class:"footer"},w=A({__name:"searchResults",props:{noResults:{type:Boolean,default:()=>!1},isLoading:{type:Boolean,default:()=>!1}},setup(s){const R=V(),d=m({currentPage:"1",totalPages:"von 13 Seiten",items:[{icon:"ChevronLeft",label:"Previous Page",link:"#prev"},{icon:"ChevronRight",label:"Next Page",link:"#next"}]}),x=m([{title:"Search result one",content:"Max 150 chars, then truncate .Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...",href:"#",type:"Article",date:"12. April 2022",specifications:"Specifications related to content type (Author, PDF specs etc)",topics:["Topic one","Topic two"],isVideo:"true",isEasyLanguage:"true",isSignLanguage:"true",image:{src:"https://picsum.photos/230/130/?image=29",width:"230",height:"130",alt:"image name",source:{srcset:"https://picsum.photos/460/260/?image=29",width:"460",height:"260",media:"(min-width: 1024px)"}}},{title:"Search result two",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma",href:"#",type:"Blogpost",date:"12. April 2022",specifications:"Specifications related to content type (Author, PDF specs etc)",topics:["Topic one","Topic two","Topic three"],image:{src:"https://picsum.photos/130/230/?image=29",width:"130",height:"230",alt:"image name",source:{srcset:"https://picsum.photos/260/400/?image=29",width:"260",height:"400",media:"(min-width: 1024px)"}}},{title:"Search result three",content:"Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",href:"http://admin.ch",type:"Blogpost",date:"12. April 2022"},{title:"Search result four. Display a minimum of ten items",content:"Cum sociis natoque penatibus et ma Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",href:"http://admin.ch",type:"Blogpost",date:"12. April 2022"}]);return(ce,t)=>(i(),n("div",null,[a(D,{isMobileMenuOpen:B(R).mobileMenuIsOpen},null,8,["isMobileMenuOpen"]),e("header",F,[t[0]||(t[0]=e("a",{href:"#main-content",class:"skip-to-content"},"Skip to main content",-1)),a($,{isOpen:!1}),a(C),a(T,{showActiveNavigation:!0}),a(W,{showActiveNavigation:!0})]),e("main",j,[e("section",G,[e("div",H,[t[2]||(t[2]=e("h1",{class:"h1"},"Search Results",-1)),e("div",K,[e("div",J,[t[1]||(t[1]=e("input",{id:"search-input",type:"search",label:"Ämter filtern",placeholder:"Search",value:"Search entry here",autocomplete:"off"},null,-1)),s.isLoading?(i(),n("div",Q,[a(p,{icon:"Spinner",size:"lg",class:"btn__icon icon--spin"})])):(i(),u(I,{key:1,label:"Ämter filtern",icon:"Search","icon-pos":"only",variant:"bare",size:"lg"}))])])])]),e("section",U,[e("div",X,[e("div",{class:"search-results","aria-live":"polite","aria-busy":s.isLoading},[e("div",Z,[t[7]||(t[7]=e("div",{class:"tab__controls-container"},[e("div",{class:"tab__controls",role:"tablist","aria-label":"Additional Content"},[e("button",{class:"tab__control tab__control--active",type:"button",role:"tab","aria-selected":"true","aria-controls":"tab-1"}," Webseiten "),e("button",{class:"tab__control",type:"button",role:"tab","aria-selected":"false","aria-controls":"tab-2",tabindex:"-1"}," Dokumente und Dateien ")])],-1)),e("div",ee,[!s.noResults&&!s.isLoading?(i(),n("div",te,[t[4]||(t[4]=e("div",null,[e("strong",null,"127"),N("Suchergebnisse")],-1)),e("div",se,[t[3]||(t[3]=e("div",{id:"radio-group-label-1"},"Sortierung nach",-1)),e("div",ae,[a(h,{id:"radio-s0",name:"radio-group-1",label:"Relevanz",value:"relevance",checked:""}),a(h,{id:"radio-s1",name:"radio-group-1",label:"Datum",value:"date"})])])])):o("",!0),!s.noResults&&!s.isLoading?(i(),u(O,{key:1,itemList:x},null,8,["itemList"])):o("",!0),s.isLoading?(i(),n("div",ie,[t[5]||(t[5]=e("h2",{class:"sr-only"},"Search is loading",-1)),a(p,{icon:"Spinner",size:"2xl",class:"icon--spin"})])):o("",!0),s.noResults&&!s.isLoading?(i(),n("div",oe,t[6]||(t[6]=[P('<h2 class="text--xl"> Die Suche nach <span class="text--bold">«My search keyword»</span> ergab keine Treffer auf der Behördenwebsite <span class="text--bold">«NameNextLogo»</span></h2><h3 class="h4">Tipps zur Suche</h3><ul class="list list--default"><li>Überprüfen Sie die Schreibweise Ihres Suchbegriffes</li><li> Verwenden Sie einen anderen bzw. allgemeineren Begriff </li><li>Verwenden Sie ggf. weniger Suchbegriffe</li><li>Wechseln Sie die Behördenwebsite</li></ul><h3 class="h4">Hinweis</h3><p> Die Suche ist momentan auf die Behördenwebsite &quot;[NameNextLogo]&quot; beschränkt. Eine behördenübergreifende Suche über die Domain *.admin.ch ist erst in Erarbeitung. </p>',5)]))):o("",!0),!s.noResults&&!s.isLoading?(i(),u(q,{key:4,class:"pagination--right",currentPage:d.currentPage,totalPages:d.totalPages,paginationItems:d.items},null,8,["currentPage","totalPages","paginationItems"])):o("",!0),s.isLoading?o("",!0):(i(),u(E,{key:5,type:"info",icon:"InfoCircle",closeBtn:!1,text:`<div class='text--bold'>Haben Sie nicht gefunden wonach Sie suchen?</div>
    <div>Gerne geben wir Ihnen auch persönlich Auskunft. Bitte melden Sie sich via Kontaktformular bei uns.</div><a href='#' class='link'>Kontaktformular</link>`}))]),t[8]||(t[8]=e("div",{id:"tab-1",tabindex:"0",role:"tabpanel","aria-labelledby":"tab-1",class:"tab__container"}," Suchergebnisse für Dokumente und Dateien ",-1))])],8,Y)])])]),e("footer",ne,[a(z),a(M)])]))}});w.__docgenInfo={exportName:"default",displayName:"searchResults",description:"",tags:{},props:[{name:"noResults",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/pages/searchResults.vue"]};const re={title:"Pages/Search Results",component:w},r={args:{noResults:!1,isLoading:!1}},l={args:{noResults:!0,isLoading:!1}},c={args:{noResults:!0,isLoading:!0}};var g,f,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    noResults: false,
    isLoading: false
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var _,v,S;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    noResults: true,
    isLoading: false
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var y,L,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    noResults: true,
    isLoading: true
  }
}`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const le=["WithResults","WithoutResults","WhenLoading"],we=Object.freeze(Object.defineProperty({__proto__:null,WhenLoading:c,WithResults:r,WithoutResults:l,__namedExportsOrder:le,default:re},Symbol.toStringTag,{value:"Module"}));export{we as S,r as W,l as a,c as b};
