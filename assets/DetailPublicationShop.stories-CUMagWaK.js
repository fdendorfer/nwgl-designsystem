import{s as A,r as s,K as I,n as N,c as C,D as i,x as M,o as S,f as $,q as O,b as e,A as _,v as n,F as W,C as j,u as K,S as R,G as Z,B as h}from"./vue.esm-bundler-8gVuwTo0.js";import{_ as q,a as U}from"./RelatedPublicationsSection-BtBmv4ev.js";import{_ as P}from"./Btn-fOJaYpuD.js";import{_ as y}from"./DownloadItem-CuKNcbfp.js";import{_ as u}from"./InfoBlock-CVrZT-Z6.js";import{_ as V}from"./Notification-CeewUx5r.js";import{_ as X}from"./RelatedTags-CXuMjha8.js";import{_ as J}from"./ShareBar-Q_65vwrf.js";import{_ as Q}from"./Hero-BLKE_sFH.js";import{_ as Y}from"./Input-OHQ8Yd2z.js";import{_ as ee}from"./Select-rmYmztcG.js";import{v as te}from"./v4-DvF23Exx.js";import{_ as ie}from"./AlterBodyClasses-DXjKgrvm.js";import{_ as ae}from"./Breadcrumb-ClsuPri_.js";import{_ as ne}from"./DesktopMenu-CR3Je3go.js";import{_ as se}from"./FooterInformation-cz2EUC_k.js";import{F as re}from"./FooterNavigation-BMxCvS8v.js";import{_ as oe}from"./MobileMenu-C0jOIdNX.js";import{_ as le}from"./TopBar-CTAEZ1fT.js";import{_ as ue}from"./TopHeader-BmlZ6mIZ.js";import{u as de}from"./layout-CDZeoBpf.js";const H=A({__name:"ToastMessage",props:{triggerName:{type:String,default:()=>"trigger-toast-message"}},setup(r){const f=s(!1),d=s(""),g=s("CheckmarkCircle"),m=s("success"),l=s(null),k=r;return I(async()=>{await N(),window.addEventListener("message",b=>{var v;if(((v=b.data)==null?void 0:v.trigger)!==k.triggerName)return;const p=b.data.data;d.value=p.text,g.value=p.icon,m.value=p.type,f.value=!0,l.value&&clearTimeout(l.value),l.value=setTimeout(()=>{f.value=!1},5e3)})}),(b,p)=>(S(),C("div",{class:M(["toast__message",f.value?"active":""])},[i(V,{class:"toast__message-notification",closeBtn:!1,isClosed:!1,icon:g.value,type:m.value,text:d.value},null,8,["icon","type","text"])],2))}});H.__docgenInfo={exportName:"default",displayName:"ToastMessage",description:"",tags:{},props:[{name:"triggerName",type:{name:"string"},defaultValue:{func:!0,value:"() => 'trigger-toast-message'"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/ToastMessage.vue"]};const ce={class:"box"},me={class:"h5 order__box-title"},pe={class:"order__box-input-container"},ge={class:"form__group__input order__box-input-amount-container"},fe=["value","selected"],be={class:"order__box-piece-price-container"},he={class:"order__box-piece-price-title"},ve={class:"order__box-piece-price"},_e={class:"order__box-total-price-container"},ye={class:"order__box-total-price-title"},ke={class:"order__box-total-price"},B=A({__name:"OrderBox",props:{defaultAmount:{type:Number,default:()=>1},amountInputLabel:{type:String,required:!0},title:{type:String,required:!0},totalPriceTitle:{type:String,required:!0},pricePieceTitle:{type:String,required:!0},options:{type:Array,required:!0},buttonLabel:{type:String,required:!0},addToCart:{type:Function,default:()=>({})},languageLabel:{type:String,required:!0},currencyPrefix:{type:String,required:!0}},setup(r){const f=te(),d=s(0),g=$({}),m=s(0),l=r;I(()=>{var o;d.value=l.defaultAmount,Object.assign(g,l.options.find(a=>a.selected)),m.value=((o=l.options.find(a=>a.selected))==null?void 0:o.pricePiece)||0});const k=O(()=>`${l.currencyPrefix} ${(m.value*d.value).toFixed(2)}`),b=function(o){if(/[0-9]/g.test(o.key))return!0;o.preventDefault()},p=function(o=""){return`${o}-${f}`},v=function(o){const a=l.options.find(c=>c.value===o);m.value=(a==null?void 0:a.pricePiece)||0,Object.assign(g,a)};return(o,a)=>(S(),C("div",ce,[e("h2",me,_(r.title),1),e("div",pe,[e("div",ge,[i(Y,{id:p("input"),label:r.amountInputLabel,type:"number",variant:"outline",size:"base",value:d.value.toString(),class:"order__box-amount-input",min:0,onKeypress:b,onInput:a[0]||(a[0]=c=>d.value=parseInt(c.target.value))},null,8,["id","label","value"])]),i(ee,{id:p("select"),class:"order__box-input-language-container",variant:"outline",bare:!1,size:"base",label:r.languageLabel,onSelect:v},{default:n(()=>[(S(!0),C(W,null,j(r.options,(c,w)=>(S(),C("option",{key:`option-${w}`,value:c.value,selected:c.selected},_(c.label),9,fe))),128))]),_:1},8,["id","label"])]),e("div",be,[e("p",he,_(r.pricePieceTitle),1),e("p",ve,_(`${r.currencyPrefix} ${m.value}`),1)]),e("div",_e,[e("p",ye,_(r.totalPriceTitle),1),e("p",ke,_(k.value),1)]),i(P,{class:"order__box-order-button",variant:"filled",fullWidth:!0,label:r.buttonLabel,onEmitClick:a[1]||(a[1]=c=>r.addToCart(g,d.value))},null,8,["label"])]))}});B.__docgenInfo={exportName:"default",displayName:"OrderBox",description:"",tags:{},props:[{name:"defaultAmount",type:{name:"number"},defaultValue:{func:!0,value:"() => 1"}},{name:"amountInputLabel",type:{name:"string"},required:!0},{name:"title",type:{name:"string"},required:!0},{name:"totalPriceTitle",type:{name:"string"},required:!0},{name:"pricePieceTitle",type:{name:"string"},required:!0},{name:"options",type:{name:"Array<OrderBoxOption>"},required:!0},{name:"buttonLabel",type:{name:"string"},required:!0},{name:"addToCart",type:{name:"(selectedValue: OrderBoxOption, amount: number) => void"},defaultValue:{func:!0,value:"() => ({})"}},{name:"languageLabel",type:{name:"string"},required:!0},{name:"currencyPrefix",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/OrderBox.vue"]};const xe=q,Pe={id:"main-header"},Le={class:"container"},Se={id:"main-content"},we={class:"section"},Ce={class:"container container--grid gap--responsive"},$e={class:"container__main vertical-spacing"},Te={class:"container__mobile"},Be={class:"box"},Ae={class:"download-items"},Ie={class:"box"},Fe={class:"hidden container__aside md:block"},De={class:"box"},ze={class:"download-items"},Ee={class:"box"},Ne={class:"section publication-back-button-section"},Me={class:"container"},Oe={id:"main-footer",class:"footer"},G=A({__name:"detailPublicationShop",setup(r){const f=de(),d=$([{label:"Datenmodell",url:"#"},{label:"Energie",url:"#"},{label:"INTERLIS",url:"#"},{label:"GKG/KOGIS",url:"#"},{label:"Energie",url:"#"},{label:"INTERLIS",url:"#"},{label:"GKG/KOGIS",url:"#"},{label:"Datenmodell",url:"#"}]),g=$([{name:"Maria Muster",img:"https://picsum.photos/120/120/?image=29",url:"#",prefix:" "},{name:"Katja Anna-Beerli",img:"https://picsum.photos/120/120/?image=30",url:"#"}]),m=s("Shopping cart: There are <amount> items in your shopping cart."),l=s(0),k=s("/shopping-cart"),b=s("_self"),p=s("Shopping cart"),v=$({de:"deutsch",fr:"französisch",it:"italienisch"}),o=s(0),a=s(0),c=O(()=>o.value>a.value?"sticky sticky--top":""),w=function(){o.value=document.body.clientHeight;const x=document.getElementById("aside-content");x&&(a.value=x.clientHeight)},F=function(x,t){l.value+=t;const T=v[x.value];window.postMessage({trigger:"trigger-toast-message",data:{text:`<p class="text--bold">Der Artikel wurde dem Warenkorb hinzugefügt:</p><p>${t}x ${T}e Ausgabe "Auswirkungen von Corona auf die Schweizer Gesellschaft"</p>`,icon:"CheckmarkCircle",type:"success"}})};return I(async()=>{await N(),w(),window.addEventListener("resize",w)}),(x,t)=>{const T=R("ClientOnly");return S(),K(T,null,{default:n(()=>[e("div",null,[i(ie,{isMobileMenuOpen:Z(f).mobileMenuIsOpen},null,8,["isMobileMenuOpen"]),e("header",Pe,[t[0]||(t[0]=e("a",{href:"#main-content",class:"skip-to-content"},"Skip to main content",-1)),i(le,{isOpen:!1}),i(ue,{shoppingCartAriaLabel:m.value,shoppingCartAmount:l.value,shoppingCartLink:k.value,shoppingCartTarget:b.value,shoppingCartLabel:p.value},null,8,["shoppingCartAriaLabel","shoppingCartAmount","shoppingCartLink","shoppingCartTarget","shoppingCartLabel"]),i(ne,{showActiveNavigation:!0}),i(oe,{showActiveNavigation:!0}),i(ae),e("div",Le,[i(P,{to:"/",variant:"outline",size:"sm",icon:"ArrowLeft",iconPos:"left",label:"Zurück",class:"btn--back"}),i(J)])]),e("main",Se,[i(Q,{type:"default","meta-infos":["Studie","publiziert am 03. März 2000"],authors:g},{title:n(()=>t[1]||(t[1]=[h(" Benachteiligungserfahrungen bei der Gesundheitsversorgung in der Schweiz ")])),subtitle:n(()=>t[2]||(t[2]=[h(" Erkenntnisse aus dem International Health Policy Survey 2020 ")])),_:1},8,["authors"]),e("section",we,[e("div",Ce,[e("div",$e,[i(V,{text:'<p>Aus dieser Reihe gibt es eine aktuellere Version: <a href="#" target="_blank">Ausgabe 2022</a>.</p>',type:"warning",icon:"InfoCircle",closeBtn:!1}),t[17]||(t[17]=e("figure",{class:"ratio ratio--1/1 bg--secondary-50"},[e("picture",{class:"p-8"},[e("source",{srcset:xe,media:"(min-width: 800px)"}),e("img",{src:q,alt:"publication cover",class:"h-full m-auto shadow-xl"})])],-1)),e("div",Te,[e("div",Be,[t[3]||(t[3]=e("h2",{class:"h5"},"Download",-1)),e("ul",Ae,[e("li",null,[i(y,{headingLevel:"h2",filename:"dummy.pdf",title:"Deutsch",url:"../../../public/documents/dummy.pdf",type:"PDF",date:"524 kB"})]),e("li",null,[i(y,{headingLevel:"h2",filename:"dummy.pdf",title:"Französisch",url:"../../../public/documents/dummy.pdf",type:"PDF",date:"524 kB"})]),e("li",null,[i(y,{headingLevel:"h2",filename:"dummy.pdf",title:"English",url:"../../../public/documents/dummy.pdf",type:"PDF",date:"524 kB",class:"pb-0 border-b-0"})])])]),i(B,{title:"Bestellung gedruckte Version in DE, IT, FR",totalPriceTitle:"Total (exklusiv MwSt.)",pricePieceTitle:"Pro Stück",currencyPrefix:"CHF",options:[{label:"Deutsch",value:"de",pricePiece:15.75,selected:!0},{label:"Französisch",value:"fr",pricePiece:17.75,selected:!1},{label:"Italienisch",value:"it",pricePiece:12.75,selected:!1}],defaultAmount:1,amountInputLabel:"Anzahl",buttonLabel:"In den Warenkorb",addToCart:F,languageLabel:"Sprache"}),e("div",Ie,[t[4]||(t[4]=e("h2",{class:"h5"},"Webviewer",-1)),i(P,{variant:"link",to:"https://www.google.ch",label:"Publikation im Browser betrachten",ariaLabel:"Publikation im Browser betrachten",iconPos:"left",icon:"Link"})])]),t[18]||(t[18]=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",-1)),t[19]||(t[19]=e("p",null," Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. ",-1)),t[20]||(t[20]=e("h2",{class:"h2"},"Details",-1)),e("div",null,[i(u,{title:"Sprache",headingLevel:"h3"},{default:n(()=>t[5]||(t[5]=[e("span",null,"Deutsch",-1),h(", "),e("a",{href:"#"},"Französisch",-1),h(", "),e("a",{href:"#"},"Englisch",-1)])),_:1}),i(u,{title:"Erscheinungsdatum",headingLevel:"h3"},{default:n(()=>t[6]||(t[6]=[e("div",null,"03. März 2000",-1)])),_:1}),i(u,{title:"Typ",headingLevel:"h3"},{default:n(()=>t[7]||(t[7]=[e("div",null,"Publikation/ Studien & Statistiken",-1)])),_:1}),i(u,{title:"Herausgeber",headingLevel:"h3"},{default:n(()=>t[8]||(t[8]=[e("div",null," Bundesamt für Statistik, Herausgeber 2, Herausgeber 3 ",-1)])),_:1}),i(u,{title:"Copyright",headingLevel:"h3"},{default:n(()=>t[9]||(t[9]=[e("a",{href:"#"},"Bundesamt für Statistik",-1)])),_:1}),i(u,{title:"Nutzungbedigungen",headingLevel:"h3"},{default:n(()=>t[10]||(t[10]=[e("div",null,"Nutzungsbestimmung VE",-1)])),_:1}),i(u,{title:"Format",headingLevel:"h3"},{default:n(()=>t[11]||(t[11]=[e("div",null,"PDF",-1)])),_:1}),i(u,{title:"BFS-Nummer",headingLevel:"h3"},{default:n(()=>t[12]||(t[12]=[e("div",null,"502-2100",-1)])),_:1}),i(u,{title:"Bibliographische Angaben",headingLevel:"h3"},{default:n(()=>t[13]||(t[13]=[e("a",{href:"#"},"BIBTeX",-1),h(", "),e("a",{href:"#"},"RIS",-1)])),_:1}),i(u,{title:"Erhebung, Statistik",headingLevel:"h3"},{default:n(()=>t[14]||(t[14]=[e("a",{href:"#"},"Reiseverhalten der Wohnbevölkerung (Modul der Haushaltsbudgeterhebung HABE)",-1)])),_:1}),i(u,{title:"Ausgaben dieser Publikationsreihe",headingLevel:"h3"},{default:n(()=>t[15]||(t[15]=[e("a",{href:"#"},"2020",-1),h(", "),e("span",null,"2021",-1),h(", "),e("a",{href:"#"},"2022",-1)])),_:1})]),e("div",null,[t[16]||(t[16]=e("h2",{class:"h2"},"Themen",-1)),i(X,{tags:d,bare:""},null,8,["tags"])])]),e("div",Fe,[e("div",{id:"aside-content",class:M(c.value)},[e("div",De,[t[21]||(t[21]=e("h2",{class:"h5"},"Download",-1)),e("ul",ze,[e("li",null,[i(y,{headingLevel:"h2",filename:"dummy.pdf",title:"Deutsch",url:"../../../public/documents/dummy.pdf",type:"PDF",date:"524 kB"})]),e("li",null,[i(y,{headingLevel:"h2",filename:"dummy.pdf",title:"Französisch",url:"../../../public/documents/dummy.pdf",type:"PDF",date:"524 kB"})]),e("li",null,[i(y,{headingLevel:"h2",filename:"dummy.pdf",title:"English",url:"../../../public/documents/dummy.pdf",type:"PDF",date:"524 kB",class:"pb-0 border-b-0"})])])]),i(B,{title:"Bestellung gedruckte Version in DE, IT, FR",totalPriceTitle:"Total (exklusiv MwSt.)",pricePieceTitle:"Pro Stück",currencyPrefix:"CHF",options:[{label:"Deutsch",value:"de",pricePiece:15.75,selected:!0},{label:"Französisch",value:"fr",pricePiece:17.75,selected:!1},{label:"Italienisch",value:"it",pricePiece:12.75,selected:!1}],defaultAmount:1,amountInputLabel:"Anzahl",buttonLabel:"In den Warenkorb",addToCart:F,languageLabel:"Sprache"}),e("div",Ee,[t[22]||(t[22]=e("h2",{class:"h5"},"Webviewer",-1)),i(P,{variant:"link",to:"https://www.google.ch",label:"Publikation im Browser betrachten",ariaLabel:"Publikation im Browser betrachten",iconPos:"left",icon:"Link"})])],2)])])]),e("section",Ne,[e("div",Me,[i(P,{to:"/",variant:"outline",size:"sm",icon:"ArrowLeft",iconPos:"left",label:"Zurück",class:"btn--back"})])]),i(U)]),i(H,{triggerName:"trigger-toast-message"}),e("footer",Oe,[i(se),i(re)])])]),_:1})}}});G.__docgenInfo={exportName:"default",displayName:"detailPublicationShop",description:"",tags:{},sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/pages/detailPublicationShop.vue"]};const qe={title:"Pages/Publication/Shop",component:G},L={};var D,z,E;L.parameters={...L.parameters,docs:{...(D=L.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(E=(z=L.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const Ve=["Example"],ut=Object.freeze(Object.defineProperty({__proto__:null,Example:L,__namedExportsOrder:Ve,default:qe},Symbol.toStringTag,{value:"Module"}));export{ut as D,L as E};
