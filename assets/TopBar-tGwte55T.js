import{s as k,M as L,r as v,N as S,q as g,K as A,c as _,b as e,D as i,u as p,z as m,x as E,O as D,P as z,n as j,o as l}from"./vue.esm-bundler-8gVuwTo0.js";import{_ as V}from"./Badge-CMSvSj-V.js";import{_ as C}from"./Btn-9qvBBGqu.js";import{_ as K}from"./LanguageSwitcher-tDfIDR9t.js";import{_ as n}from"./SvgIcon-DQlQeqh7.js";import{_ as R}from"./TopBarNavigation-j32k2ceA.js";const T={class:"container container--flex"},I={key:1},$={class:"top-bar__right"},F={key:0,id:"stickyTopBarPlaceholder"},M={key:1,class:"top-bar__drawer"},O={class:"container"},P={class:"flex justify-end"},N={"aria-label":"breadcrumb","aria-current":"location",class:"localization"},W={class:"top-bar__grid"},U={class:"top-bar__grid__box-1"},G={class:"menu"},J={class:"menu__item menu__item--negative menu__item--brim"},q={href:"javascript:void(0)",class:"menu__item__flex"},H={class:"menu__item menu__item--negative menu__item--brim"},Y={href:"javascript:void(0)",class:"menu__item__flex"},Q={class:"top-bar__grid__box-3"},X={class:"menu"},Z={class:"menu__item menu__item--negative menu__item--brim"},ee={href:"javascript:void(0)",class:"menu__item__flex"},se={class:"menu__item menu__item--negative menu__item--brim"},ie={href:"javascript:void(0)",class:"menu__item__flex"},ne={class:"menu__item menu__item--negative menu__item--brim"},te={href:"javascript:void(0)",class:"menu__item__flex"},le={class:"menu__item menu__item--negative menu__item--brim"},oe={href:"javascript:void(0)",class:"menu__item__flex"},ae={class:"menu__item menu__item--negative menu__item--brim"},re={href:"javascript:void(0)",class:"menu__item__flex"},_e={class:"menu__item menu__item--negative menu__item--brim"},ue={href:"javascript:void(0)",class:"menu__item__flex"},me={class:"menu__item menu__item--negative menu__item--brim"},de={href:"javascript:void(0)",class:"menu__item__flex"},ce={class:"top-bar__grid__box-4"},ve={class:"search search--negative search--large"},ge={class:"search__group"},pe={key:1,class:"btn btn--negative btn--lg btn--icon-only"},fe={class:"search__results search__results--negative"},be={class:"menu"},he={class:"menu__item menu__item--negative menu__item--icon-on-hover"},Ee={href:"javascript:void(0)",class:"menu__item__flex"},Be={class:"overtitle"},ye={class:"menu__item menu__item--negative menu__item--icon-on-hover"},xe={href:"javascript:void(0)",class:"menu__item__flex"},we={class:"overtitle"},ke={class:"menu__item menu__item--negative menu__item--icon-on-hover"},Le={href:"javascript:void(0)",class:"menu__item__flex"},Se={class:"overtitle"},Ae={class:"menu__item menu__item--negative menu__item--icon-on-hover"},De={href:"javascript:void(0)",class:"menu__item__flex"},ze={class:"overtitle"},je={class:"menu__item menu__item--negative menu__item--icon-on-hover"},Ve={href:"javascript:void(0)",class:"menu__item__flex"},Ce={class:"overtitle"},Ke={class:"menu__item menu__item--negative menu__item--icon-on-hover"},Re={href:"javascript:void(0)",class:"menu__item__flex"},Te={class:"overtitle"},Ie={class:"menu__item menu__item--negative menu__item--icon-on-hover"},$e={href:"javascript:void(0)",class:"menu__item__flex"},Fe={class:"overtitle"},Me={class:"menu__item menu__item--negative menu__item--icon-on-hover"},Oe={href:"javascript:void(0)",class:"menu__item__flex"},Pe={class:"overtitle"},Ne=k({__name:"TopBar",props:L({isEasyLanguage:{type:Boolean,default:()=>!1},isSignLanguage:{type:Boolean,default:()=>!1},isSticky:{type:Boolean,default:()=>!1}},{isOpen:{type:Boolean,default:()=>!1},isOpenModifiers:{}}),emits:["update:isOpen"],setup(o){const u=v(""),d=v(!1),f=v(0),r=S(o,"isOpen"),a=o,B=g(()=>{let t="top-bar__bar";return a.isEasyLanguage&&(t+="--easy-language "),a.isSignLanguage&&(t+="--sign-language "),t}),y=g(()=>a.isEasyLanguage?"EasyLanguage":a.isSignLanguage?"SignLanguage":""),x=g(()=>a.isEasyLanguage?"Leichte Sprache schliessen":a.isSignLanguage?"Gebärdensprache schliessen":""),b=function(){const t=document.getElementById("top-bar-container");f.value=t.offsetTop,h()},h=async function(){const t=document.getElementById("top-bar");if(window.scrollY>f.value){d.value=!0,await j();const s=document.getElementById("stickyTopBarPlaceholder");s.style.height=`${t.clientHeight}px`,t.classList.add("sticky-top-bar")}else d.value=!1,t.classList.remove("sticky-top-bar")},w=function(){r.value=!r.value,window.postMessage({trigger:"top-bar-drawer-change"})};return A(()=>{a.isSticky&&(window.addEventListener("scroll",h),b(),window.addEventListener("resize",b))}),(t,s)=>(l(),_("div",{id:"top-bar-container",class:E(["top-bar",r.value?"top-bar--is-open":""])},[e("div",{id:"top-bar",class:E(B.value)},[e("div",T,[!o.isEasyLanguage&&!o.isSignLanguage?(l(),_("button",{key:0,class:"top-bar__btn",onClick:s[0]||(s[0]=c=>w())},[s[4]||(s[4]=e("span",null,"Alle Schweizer Bundesbehörden",-1)),i(n,{icon:"ChevronDown",size:"lg",class:"top-bar__btn__icon"})])):(l(),_("div",I)),e("div",$,[o.isEasyLanguage||o.isSignLanguage?(l(),p(V,{key:0,icon:"Cancel",iconLeft:y.value,label:x.value,size:"base",highlightCancel:!0},null,8,["iconLeft","label"])):m("",!0),!o.isEasyLanguage&&!o.isSignLanguage?(l(),p(R,{key:1})):m("",!0),i(K,{type:"negative"})])])],2),d.value?(l(),_("div",F)):m("",!0),r.value?(l(),_("div",M,[e("div",O,[e("div",P,[e("button",{class:"top-bar__drawer__close__btn",onClick:s[1]||(s[1]=c=>r.value=!r.value)},[s[5]||(s[5]=e("span",null,"Schliessen",-1)),i(n,{icon:"Cancel",size:"lg"})])]),e("div",null,[s[9]||(s[9]=e("h3",{class:"top-bar__main-title"},"Wo befinde ich mich?",-1)),e("nav",N,[e("ul",null,[e("li",null,[s[6]||(s[6]=e("a",{href:"javascript:void(0)"},"UVEK",-1)),i(n,{icon:"ArrowRight",class:"localization__icon"})]),e("li",null,[s[7]||(s[7]=e("a",{href:"javascript:void(0)"},"Swisstopo",-1)),i(n,{icon:"ArrowRight",class:"localization__icon"})]),s[8]||(s[8]=e("li",null,[e("a",{href:"javascript:void(0)",class:"active","aria-current":"page"}," Das Geoportal des Bundes ")],-1))])])]),s[48]||(s[48]=e("div",{class:"separator separator--negative separator--xl"},null,-1)),e("div",null,[s[47]||(s[47]=e("h3",{class:"top-bar__main-title"}," Eine andere Bundesbehörde besuchen ",-1)),e("div",W,[e("div",U,[s[12]||(s[12]=e("h4",{class:"top-bar__title"},"Regierung",-1)),e("ul",G,[e("li",J,[e("a",q,[s[10]||(s[10]=e("div",null,[e("div",{class:"overtitle"},"BR"),e("div",null,"Der Schweizerische Bundesrat")],-1)),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",H,[e("a",Y,[s[11]||(s[11]=e("div",null,[e("div",{class:"overtitle"},"BK"),e("div",null," Die Schweizerische Bundeskanzlei – die Stabsstelle des Bundesrats ")],-1)),i(n,{icon:"External",class:"menu__item__icon"})])])])]),s[46]||(s[46]=e("div",{class:"top-bar__grid__box-2"},null,-1)),e("div",Q,[s[20]||(s[20]=e("h4",{class:"top-bar__title"},"Departemente",-1)),e("ul",X,[e("li",Z,[e("a",ee,[s[13]||(s[13]=e("div",null,[e("div",{class:"overtitle"},"EDA"),e("div",null," Eidgenössisches Departement für auswärtige Angelegenheiten ")],-1)),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",se,[e("a",ie,[s[14]||(s[14]=e("div",null,[e("div",{class:"overtitle"},"EDI"),e("div",null,"Eidgenössisches Departement des Innern")],-1)),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",ne,[e("a",te,[s[15]||(s[15]=e("div",null,[e("div",{class:"overtitle"},"EJPD"),e("div",null,"Eidgenössisches Justiz- und Polizeidepartement")],-1)),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",le,[e("a",oe,[s[16]||(s[16]=e("div",null,[e("div",{class:"overtitle"},"VBS"),e("div",null," Eidgenössisches Departement für Verteidigung, Bevölkerungsschutz und Sport ")],-1)),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",ae,[e("a",re,[s[17]||(s[17]=e("div",null,[e("div",{class:"overtitle"},"EFD"),e("div",null,"Eidgenössisches Finanzdepartement")],-1)),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",_e,[e("a",ue,[s[18]||(s[18]=e("div",null,[e("div",{class:"overtitle"},"WBF"),e("div",null," Eidgenössisches Departement für Wirtschaft, Bildung und Forschung ")],-1)),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",me,[e("a",de,[s[19]||(s[19]=e("div",null,[e("div",{class:"overtitle"},"UVEK"),e("div",null," Eidgenössisches Departement für Umwelt, Verkehr, Energie und Kommunikation ")],-1)),i(n,{icon:"External",class:"menu__item__icon"})])])])]),e("div",ce,[s[45]||(s[45]=e("h4",{class:"top-bar__title"},"Weitere Bundes-Websites",-1)),e("div",ve,[e("div",ge,[D(e("input",{id:"search-input",ref:"searchInput","onUpdate:modelValue":s[2]||(s[2]=c=>u.value=c),type:"search",label:"Ämter filtern",placeholder:"Filtern",autocomplete:"off"},null,512),[[z,u.value]]),u.value!==""?(l(),p(C,{key:0,label:"Clear search input",icon:"CancelCircle","icon-pos":"only",variant:"bare-negative",size:"lg",onClick:s[3]||(s[3]=()=>{u.value="",t.$refs.searchInput.focus()})})):(l(),_("div",pe,[i(n,{icon:"Filter",class:"icon--lg"})]))]),e("div",fe,[e("ul",be,[e("li",he,[e("a",Ee,[e("div",null,[e("div",Be,[s[21]||(s[21]=e("span",null,"EDA",-1)),i(n,{icon:"ArrowRight",class:"icon--sm"}),s[22]||(s[22]=e("span",null,"BK",-1))]),s[23]||(s[23]=e("div",null,"Bundesamt für Kultur",-1))]),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",ye,[e("a",xe,[e("div",null,[e("div",we,[s[24]||(s[24]=e("span",null,"EDA",-1)),i(n,{icon:"ArrowRight",class:"icon--sm"}),s[25]||(s[25]=e("span",null,"BLV",-1))]),s[26]||(s[26]=e("div",null," Bundesamt für Lebensmittelsicherheit und Veterinärwesen ",-1))]),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",ke,[e("a",Le,[e("div",null,[e("div",Se,[s[27]||(s[27]=e("span",null,"UVEK",-1)),i(n,{icon:"ArrowRight",class:"icon--sm"}),s[28]||(s[28]=e("span",null,"BS",-1))]),s[29]||(s[29]=e("div",null,"Bundesamt für Sozialversicherungen",-1))]),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",Ae,[e("a",De,[e("div",null,[e("div",ze,[s[30]||(s[30]=e("span",null,"EDA",-1)),i(n,{icon:"ArrowRight",class:"icon--sm"}),s[31]||(s[31]=e("span",null,"BAR",-1))]),s[32]||(s[32]=e("div",null,"Schweizerisches Bundesarchiv",-1))]),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",je,[e("a",Ve,[e("div",null,[e("div",Ce,[s[33]||(s[33]=e("span",null,"EDA",-1)),i(n,{icon:"ArrowRight",class:"icon--sm"}),s[34]||(s[34]=e("span",null,"BK",-1))]),s[35]||(s[35]=e("div",null,"Bundesamt für Kultur",-1))]),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",Ke,[e("a",Re,[e("div",null,[e("div",Te,[s[36]||(s[36]=e("span",null,"EDA",-1)),i(n,{icon:"ArrowRight",class:"icon--sm"}),s[37]||(s[37]=e("span",null,"BAR",-1))]),s[38]||(s[38]=e("div",null,"Schweizerisches Bundesarchiv",-1))]),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",Ie,[e("a",$e,[e("div",null,[e("div",Fe,[s[39]||(s[39]=e("span",null,"EDA",-1)),i(n,{icon:"ArrowRight",class:"icon--sm"}),s[40]||(s[40]=e("span",null,"BK",-1))]),s[41]||(s[41]=e("div",null,"Bundesamt für Kultur",-1))]),i(n,{icon:"External",class:"menu__item__icon"})])]),e("li",Me,[e("a",Oe,[e("div",null,[e("div",Pe,[s[42]||(s[42]=e("span",null,"EDA",-1)),i(n,{icon:"ArrowRight",class:"icon--sm"}),s[43]||(s[43]=e("span",null,"BK",-1))]),s[44]||(s[44]=e("div",null,"Bundesamt für Kultur",-1))]),i(n,{icon:"External",class:"menu__item__icon"})])])])])])])])])])])):m("",!0)],2))}});Ne.__docgenInfo={exportName:"default",displayName:"TopBar",description:"",tags:{},props:[{name:"isEasyLanguage",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"isSignLanguage",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"isSticky",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/sections/TopBar.vue"]};export{Ne as _};