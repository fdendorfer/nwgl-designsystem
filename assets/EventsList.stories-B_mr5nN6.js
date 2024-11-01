import{s as P,M as E,f as S,N as L,c as l,D as t,G as M,b as e,x as v,v as r,z as n,B as V,u as y,a as I,o as i}from"./vue.esm-bundler-8gVuwTo0.js";import{_ as W}from"./AlterBodyClasses-rw-_RvwB.js";import{_ as K}from"./TopBar-tGwte55T.js";import{u as D,_ as F}from"./TopHeader-PWG-QnSf.js";import{_ as q}from"./DesktopMenu-BobLXtH_.js";import{_ as j}from"./MobileMenu-BkmZx7En.js";import{_ as G}from"./FooterInformation-COqWYq9u.js";import{F as H}from"./FooterNavigation-BMxCvS8v.js";import{_ as Z}from"./SvgIcon-DQlQeqh7.js";import{_ as f}from"./Btn-9qvBBGqu.js";import{_ as J}from"./SearchResultsList-Br2DjWVt.js";import{_ as Q}from"./Pagination-DCI3zzWr.js";import{_ as U}from"./Notification-DTO3tNQZ.js";import{_ as u}from"./Select-rmYmztcG.js";import{_ as b}from"./Input-OHQ8Yd2z.js";import{_ as g}from"./TagItem-DWTGIYjG.js";import{_ as X}from"./Breadcrumb-D9Ouvvw8.js";const Y={id:"main-header"},ee={id:"main-content"},se={class:"section section--default bg--secondary-50"},te={class:"container"},ae={class:"search__filters__actions"},ie={key:0,class:"search__filters__drawer"},ne={class:"search__filters__tags"},oe={class:"section section--default"},le={class:"container gap--responsive"},re=["aria-busy"],ue={key:0,class:"search-results__header"},ce={class:"search-results__header__left"},de={class:"search-results__header__right"},me={key:2,class:"my-16"},pe={key:3,class:"search-results__no-results"},fe={id:"main-footer",class:"footer"},C=P({__name:"eventsList",props:E({noResults:{type:Boolean,default:()=>!1},isLoading:{type:Boolean,default:()=>!1}},{filtersAreOpen:{type:Boolean,default:()=>!1},filtersAreOpenModifiers:{},displayType:{type:String,default:()=>"grid"},displayTypeModifiers:{}}),emits:["update:filtersAreOpen","update:displayType"],setup(a){const N=D(),h=S({currentPage:"1",totalPages:"von 13 Seiten",items:[{icon:"ChevronLeft",label:"Previous Page",link:"#prev"},{icon:"ChevronRight",label:"Next Page",link:"#next"}]}),B=S([{title:"Search result one",content:"Max 150 chars, then truncate. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...",href:"#",type:"Konferenz",isEvent:!0,hasIcons:!1,image:{src:"https://picsum.photos/230/130/?image=29",width:"230",height:"130",alt:"image name",source:{srcset:"https://picsum.photos/460/260/?image=29",width:"460",height:"260",media:"(min-width: 1024px)"}}},{title:"Search result two",content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma",href:"#",type:"Konferenz",isEvent:!0,hasIcons:!1,image:{src:"https://picsum.photos/130/230/?image=29",width:"130",height:"230",alt:"image name",source:{srcset:"https://picsum.photos/260/400/?image=29",width:"260",height:"400",media:"(min-width: 1024px)"}}},{title:"Search result three",content:"Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma Lorem ipsum dolor sit amet, consectetuer adipiscing elit. ",href:"http://admin.ch",type:"Konferenz",isEvent:!0,hasIcons:!1},{title:"Search result four. Display a minimum of ten items",content:"Cum sociis natoque penatibus et ma Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",href:"http://admin.ch",type:"Konferenz",isEvent:!0,hasIcons:!1}]),o=L(a,"filtersAreOpen"),p=L(a,"displayType");return(ve,s)=>(i(),l("div",null,[t(W,{isMobileMenuOpen:M(N).mobileMenuIsOpen},null,8,["isMobileMenuOpen"]),e("header",Y,[s[3]||(s[3]=e("a",{href:"#main-content",class:"skip-to-content"},"Skip to main content",-1)),t(K,{isOpen:!1}),t(F),t(q,{showActiveNavigation:!0}),t(j,{showActiveNavigation:!0}),t(X)]),e("main",ee,[e("section",se,[e("div",te,[s[8]||(s[8]=e("h1",{class:"h1"},"Veranstaltungen",-1)),e("div",{class:v(["search__filters",o.value?"filters--are-open":""])},[e("div",ae,[t(f,{label:o.value?"Filter ausblenden":"Filter anzeigen",variant:"bare",size:"sm",icon:"ChevronDown",iconPos:"left",class:v(o.value?" btn--icon-180":""),onClick:s[0]||(s[0]=_=>o.value=!o.value)},null,8,["label","class"])]),o.value?(i(),l("div",ie,[t(b,{id:"select-1",type:"text",variant:"outline",size:"sm",name:"select-name",label:"Stichwortfilter"}),t(u,{id:"select-2",variant:"outline",size:"sm",name:"select-name",label:"Organisation"},{default:r(()=>s[4]||(s[4]=[e("option",{selected:""},"VBS - Alle",-1),e("option",{disabled:""},"(Future tree selector here)",-1)])),_:1}),t(u,{id:"select-3",variant:"outline",size:"sm",name:"select-name",label:"Themen"},{default:r(()=>s[5]||(s[5]=[e("option",{selected:""},"- Alle -",-1),e("option",null,"...",-1)])),_:1}),t(b,{id:"date-start",type:"date",variant:"outline",size:"sm",name:"select-name",value:"2022-05-01",label:"Zeitraum | Startdatum"}),t(b,{id:"date-start",type:"date",variant:"outline",size:"sm",name:"select-name",value:"2022-06-01",label:"Zeitraum | Enddatum"}),t(u,{id:"select-5",variant:"outline",size:"sm",name:"select-name",label:"Veranstaltungs-Typ"},{default:r(()=>s[6]||(s[6]=[e("option",{selected:""},"- Alle -",-1),e("option",null,"Ausstellung",-1),e("option",null,"Kongress",-1),e("option",{selected:""},"Konferenz",-1),e("option",null,"Teamevent",-1),e("option",null,"Webinar",-1),e("option",null,"Workshop",-1)])),_:1}),t(u,{id:"select-6",variant:"outline",size:"sm",name:"select-name",label:"Austragungsort"},{default:r(()=>s[7]||(s[7]=[e("option",{selected:""},"- Alle -",-1),e("option",null,"...",-1)])),_:1})])):n("",!0),e("div",ne,[t(g,{label:"VBS - Alle",variant:"primary",size:"sm",icon:"Cancel"}),t(g,{label:"Konferenz",variant:"primary",size:"sm",icon:"Cancel"}),t(g,{label:"01.05.2022 - 01.06.2022",variant:"primary",size:"sm",icon:"Cancel"}),t(g,{label:"Filter zurücksetzen",variant:"default",size:"sm",icon:"Repeat"})])],2)])]),e("section",oe,[e("div",le,[e("div",{class:v(["search-results",p.value==="grid"?"search-results--grid":"search-results--list"]),"aria-live":"polite","aria-busy":a.isLoading},[!a.noResults&&!a.isLoading?(i(),l("div",ue,[e("div",ce,[s[9]||(s[9]=e("div",{class:"search-results__occurences"},[e("strong",null,"4"),V(" Suchergebnisse ")],-1)),s[10]||(s[10]=e("div",{class:"separator separator--vertical"},null,-1)),t(f,{label:"Abo erstellen",variant:"bare",size:"sm","icon-pos":"right",icon:"RSS"})]),e("div",de,[t(u,{id:"select-7",variant:"outline",bare:"",size:"sm",name:"select-name",label:"Sortierung",hideLabel:!0},{default:r(()=>s[11]||(s[11]=[e("option",{disabled:"",selected:""},"Sortieren",-1),e("option",null,"nach Relevanz",-1),e("option",null,"by date (increasing)",-1),e("option",null,"by date (decreasing)",-1),e("option",null,"...",-1)])),_:1}),s[12]||(s[12]=e("div",{class:"separator separator--vertical"},null,-1)),t(f,{variant:"bare","icon-pos":"only",icon:"List",size:"sm",label:"Display as list",onClick:s[1]||(s[1]=_=>p.value="list")}),t(f,{variant:"bare","icon-pos":"only",icon:"Apps",size:"sm",label:"Display as grid",onClick:s[2]||(s[2]=_=>p.value="grid")})])])):n("",!0),s[15]||(s[15]=e("h2",{class:"sr-only"},"News list",-1)),!a.noResults&&!a.isLoading?(i(),y(J,{key:1,itemList:B,displayType:p.value},null,8,["itemList","displayType"])):n("",!0),a.isLoading?(i(),l("div",me,[s[13]||(s[13]=e("h2",{class:"sr-only"},"Search is loading",-1)),t(Z,{icon:"Spinner",size:"2xl",class:"icon--spin"})])):n("",!0),a.noResults&&!a.isLoading?(i(),l("div",pe,s[14]||(s[14]=[I('<h2 class="text--xl"> Die Suche nach <span class="text--bold">«My search keyword»</span> ergab keine Treffer auf der Behördenwebsite <span class="text--bold">«NameNextLogo»</span></h2><h3 class="h4">Tipps zur Suche</h3><ul class="list list--default"><li>Überprüfen Sie die Schreibweise Ihres Suchbegriffes</li><li>Verwenden Sie einen anderen bzw. allgemeineren Begriff</li><li>Verwenden Sie ggf. weniger Suchbegriffe</li><li>Wechseln Sie die Behördenwebsite</li></ul><h3 class="h4">Hinweis</h3><p> Die Suche ist momentan auf die Behördenwebsite &quot;[NameNextLogo]&quot; beschränkt. Eine behördenübergreifende Suche über die Domain *.admin.ch ist erst in Erarbeitung. </p>',5)]))):n("",!0),!a.noResults&&!a.isLoading?(i(),y(Q,{key:4,class:"pagination--right",currentPage:h.currentPage,totalPages:h.totalPages,paginationItems:h.items},null,8,["currentPage","totalPages","paginationItems"])):n("",!0),a.isLoading?n("",!0):(i(),y(U,{key:5,type:"info",icon:"InfoCircle",closeBtn:!1,text:`<div class='text--bold'>Haben Sie nicht gefunden wonach Sie suchen?</div>
  <div>Gerne geben wir Ihnen auch persönlich Auskunft. Bitte melden Sie sich via Kontaktformular bei uns.</div><a href='#' class='link'>Kontaktformular</link>`}))],10,re)])])]),e("footer",fe,[t(G),t(H)])]))}});C.__docgenInfo={exportName:"default",displayName:"eventsList",description:"",tags:{},props:[{name:"noResults",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"isLoading",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/pages/eventsList.vue"]};const ge={title:"Pages/Events List",component:C,argTypes:{noResults:{control:{type:"boolean"}},filtersAreOpen:{table:{category:"props"},control:{type:"boolean"}},displayType:{table:{category:"props",type:{summary:["string: list, grid"]}},options:["list","grid"],control:{type:"select"}},isLoading:{control:{type:"boolean"}}}},c={args:{displayType:"grid",noResults:!1,isLoading:!1,filtersAreOpen:!1}},d={args:{displayType:"grid",noResults:!1,isLoading:!1,filtersAreOpen:!0}},m={args:{displayType:"grid",noResults:!0,isLoading:!0,filtersAreOpen:!1}};var z,A,w;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    displayType: 'grid',
    noResults: false,
    isLoading: false,
    filtersAreOpen: false
  }
}`,...(w=(A=c.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var k,x,R;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    displayType: 'grid',
    noResults: false,
    isLoading: false,
    filtersAreOpen: true
  }
}`,...(R=(x=d.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var T,O,$;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    displayType: 'grid',
    noResults: true,
    isLoading: true,
    filtersAreOpen: false
  }
}`,...($=(O=m.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const he=["WithResults","WithoutResults","WhenLoading"],Pe=Object.freeze(Object.defineProperty({__proto__:null,WhenLoading:m,WithResults:c,WithoutResults:d,__namedExportsOrder:he,default:ge},Symbol.toStringTag,{value:"Module"}));export{Pe as E,c as W,d as a,m as b};