import{s as G,E as R,q as S,c as s,x as M,b as e,G as h,H as c,z as m,o,r as P,f as k,D as i,u as I,v as t,B as l,a as v}from"./vue.esm-bundler-8gVuwTo0.js";import{_ as x}from"./AudioPlayer-DLez_XqW.js";import{_ as w}from"./DownloadItem-Bf1ZZgCX.js";import{_ as L}from"./Newsletter-BUS8_2W7.js";import{_ as K}from"./RelatedTags-Cebyw0ND.js";import{_ as E}from"./SlideshowExample-Dpvbsp9H.js";import{_ as F}from"./TableSortable-BrwTs0Le.js";import{_ as $}from"./ContactSection-BWEVrKX2.js";import{_ as N}from"./Hero-BW9l_bR6.js";import{_ as A}from"./MoreInfosAccordionSection-UFl4i-UT.js";import{_ as T}from"./QuoteSection-Bx5RLYI5.js";import{_ as O}from"./Badge-CMSvSj-V.js";import{_ as g}from"./Btn-9qvBBGqu.js";import{_ as p}from"./Card-DPsTzast.js";import{_ as V}from"./Input-OHQ8Yd2z.js";import{_ as B}from"./Modal-iAlHVkYh.js";import{_ as y}from"./Popover-YDh9vlLV.js";import{_ as f}from"./SvgIcon-DQlQeqh7.js";import{_ as Z}from"./ShareBar-Dvbukv9X.js";import{_ as j}from"./AlterBodyClasses-rw-_RvwB.js";import{_ as C}from"./Breadcrumb-D9Ouvvw8.js";import{_ as H}from"./DesktopMenu-BobLXtH_.js";import{_ as W}from"./FooterInformation-COqWYq9u.js";import{F as J}from"./FooterNavigation-BMxCvS8v.js";import{_ as q}from"./MobileMenu-BkmZx7En.js";import{_ as U}from"./TopBar-tGwte55T.js";import{u as X,_ as Q}from"./TopHeader-PWG-QnSf.js";const Y={class:"text-image__text"},ee={key:0,class:"h2"},ne={key:1},ie={key:0,class:"text-image__image"},te={key:1,class:"grid gap--responsive"},le={key:0,class:"text-image__image"},ae={class:"text-image__text"},oe={key:0,class:"h2"},re={key:1},z=G({__name:"TextImage",props:{imagePos:{type:String,default:()=>"right",validator:r=>["left","right"].includes(r)},imageWidth:{type:String,default:()=>{},validator:r=>["half","fourth"].includes(r)},isInlineImage:{type:Boolean,default:()=>!0},textProportion:{type:String,default:()=>"3/4-1/4 "}},setup(r){const d=R(),u=r,b=S(()=>"text-image "),D=S(()=>{let a="grid gap--responsive ";return u.imagePos==="left"?a+=`grid--responsive-cols-${u.textProportion} grid--reverse`:a+=`grid--responsive-cols-${u.textProportion} `,a});return(a,_)=>(o(),s("div",{class:M(b.value)},[r.isInlineImage?(o(),s("div",{key:0,class:M(D.value)},[e("div",Y,[h(d).title?(o(),s("h2",ee,[c(a.$slots,"title")])):m("",!0),h(d).description?(o(),s("div",ne,[c(a.$slots,"description")])):m("",!0)]),h(d).image?(o(),s("div",ie,[c(a.$slots,"image")])):m("",!0)],2)):(o(),s("div",te,[h(d).image?(o(),s("div",le,[c(a.$slots,"image")])):m("",!0),e("div",ae,[h(d).title?(o(),s("h2",oe,[c(a.$slots,"title")])):m("",!0),h(d).description?(o(),s("div",re,[c(a.$slots,"description")])):m("",!0)])]))],2))}});z.__docgenInfo={exportName:"default",displayName:"TextImage",description:"",tags:{},props:[{name:"imagePos",type:{name:"string"},defaultValue:{func:!0,value:"() => 'right'"},values:["left","right"]},{name:"imageWidth",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["half","fourth"]},{name:"isInlineImage",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"textProportion",type:{name:"string"},defaultValue:{func:!0,value:"() => '3/4-1/4 '"}}],slots:[{name:"title"},{name:"description"},{name:"image"}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/TextImage.vue"]};const se={id:"main-header"},de={class:"container"},me={id:"main-content"},ue={class:"section section--default"},ge={class:"container container--grid gap--responsive"},pe={class:"container__center--xs vertical-spacing"},he={class:"download-items"},ce={class:"section section--default"},fe={class:"container container--grid gap--responsive"},be={class:"container__center--xs vertical-spacing"},ke={class:"list"},ve={class:"section section--default"},we={class:"container container--grid gap--responsive"},De={class:"container__center--xs vertical-spacing"},ze={class:"list"},_e={class:"section section--default"},Se={class:"container container--grid gap--responsive"},Me={class:"container__center--xs vertical-spacing"},Ie={class:"section section--default"},Ee={class:"container container--grid gap--responsive"},ye={class:"container__center--xs vertical-spacing"},Ge={class:"flex flex-wrap justify-center gap-6"},Re={href:"#",class:"link",title:"Share on Facebook"},Pe={href:"#",class:"link",title:"Share on Twitter"},xe={href:"#",class:"link",title:"Share on LinkedIn"},Le={href:"#",class:"link",title:"Share on Xing"},Ke={href:"#",class:"link",title:"Share on Whatsapp"},Fe={class:"pt-3"},$e={class:"share-url"},Ne={"aria-live":"polite"},Ae={id:"main-footer",class:"footer"},Te=G({__name:"detailPageSimple",props:{isIntranet:{type:Boolean,default:()=>!1},isFreebrand:{type:Boolean,default:()=>!1}},setup(r){const d=X(),u=P(!1),b=k([{image:{src:"https://picsum.photos/1024/768/?image=29",width:"1024",height:"768",alt:"image name"},source:{srcset:"https://picsum.photos/2048/1152/?image=29",width:"2048",height:"1152",media:"(min-width: 1024px)"},caption:{title:"Image one title",description:"Image one description",copyright:"Photograph name"}},{image:{src:"https://picsum.photos/1024/768/?image=28",width:"1024",height:"768",alt:"image name"},source:{srcset:"https://picsum.photos/2048/1152/?image=28",width:"2048",height:"1152",media:"(min-width: 1024px)"},caption:{title:"Image two, title without description",copyright:"Photograph name"}},{image:{src:"https://picsum.photos/1024/768/?image=1045",width:"1024",height:"768",alt:"image name"},source:{srcset:"https://picsum.photos/2048/1152/?image=1045",width:"2048",height:"1152",media:"(min-width: 1024px)"},caption:{description:"Image three, description only",copyright:"Photograph name"}}]),D=k(["Webartikel","23. Februar 2022"]),a=k([{name:"Maria Muster",img:"https://picsum.photos/120/120/?image=29"},{name:"Jean-Jaques Langerename",img:"https://picsum.photos/120/120/?image=30",url:"#"},{name:"Hans Höllman",img:"https://picsum.photos/120/120/?image=31"},{name:"Katja Anna-Beerli",img:"https://picsum.photos/120/120/?image=32"}]),_=k([{label:"Datenmodell",url:"#"},{label:"Energie",url:"#"},{label:"INTERLIS",url:"#"},{label:"GKG/KOGIS",url:"#"},{label:"Energie",url:"#"},{label:"INTERLIS",url:"#"},{label:"GKG/KOGIS",url:"#"},{label:"Datenmodell",url:"#"}]);return(Oe,n)=>(o(),s("div",null,[i(j,{isMobileMenuOpen:h(d).mobileMenuIsOpen,isIntranet:r.isIntranet,isFreebrand:r.isFreebrand},null,8,["isMobileMenuOpen","isIntranet","isFreebrand"]),e("header",se,[n[1]||(n[1]=e("a",{href:"#main-content",class:"skip-to-content"},"Skip to main content",-1)),r.isFreebrand?m("",!0):(o(),I(U,{key:0,isOpen:!1})),i(Q,{isFreebrand:r.isFreebrand},null,8,["isFreebrand"]),i(H,{showActiveNavigation:!0}),i(q,{showActiveNavigation:!0}),i(C),e("div",de,[i(Z)])]),e("main",me,[i(N,{type:"default","meta-infos":D,authors:a},{title:t(()=>n[2]||(n[2]=[l(" Web Mapping Services WMS: Verfügbare Dienste und Daten ")])),description:t(()=>n[3]||(n[3]=[l(" Das Konzept des INTERLIS Model Repository sieht vor, Datenmodelle als http-Ressource nutzbar zu machen. Dabei werden die INTERLIS-Modelldateien auf einem Webserver abgelegt, und können beispielsweise vom FME-Plugin «ili2fme» direkt benutzt werden. Der Vorteil für einen Benutzer liegt darin, dass die Modelldateien und evtl. weitere importierte Datenmodelle nicht lokal vorhanden sein müssen. "),e("a",{id:"share-link",href:"#",class:"link"},"Diese Seite teilen",-1)])),image:t(()=>n[4]||(n[4]=[e("figure",null,[e("picture",null,[e("source",{srcset:"https://picsum.photos/1282/721/?image=29",media:"(min-width: 1800px)"}),e("source",{srcset:"https://picsum.photos/1192/670/?image=28",media:"(min-width: 1024px)"}),e("source",{srcset:"https://picsum.photos/800/450/?image=29",media:"(min-width: 768px)"}),e("source",{srcset:"https://picsum.photos/680/382/?image=28",media:"(min-width: 480px)"}),e("img",{src:"https://picsum.photos/480/270/?image=29",alt:"ratio is 16/9"})]),e("figcaption",null," Datenmodelle als http-Ressource nutzbar zu machen. Der Vorteil für einen Benutzer liegt darin, dass die Modelldateien und evtl. weitere importierte Datenmodelle nicht lokal vorhanden sein müssen — © Photograph Name ")],-1)])),_:1},8,["meta-infos","authors"]),e("section",ue,[e("div",ge,[e("div",pe,[n[16]||(n[16]=e("h2",{class:"h2"},"Carousel with few images",-1)),n[17]||(n[17]=e("p",null," To display a few images as a carousel, set the pagination type to «bullets». Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. ",-1)),i(E,{id:1,paginationType:"bullets",loop:"",slides:b},null,8,["slides"]),n[18]||(n[18]=e("h2",{class:"h2"},"Carousel with more than 5 images",-1)),e("p",null,[n[7]||(n[7]=l(" To display a more images in a carousel, set the pagination type to «fraction». Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. ")),i(y,{id:"1",label:"Extra infos in a popover "},{default:t(()=>n[5]||(n[5]=[e("p",null,"Popover content",-1),e("a",{href:"#"},"Link",-1)])),_:1}),n[8]||(n[8]=l(" Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation ")),i(y,{id:"2",color:"blue",icon:!0},{default:t(()=>n[6]||(n[6]=[e("p",null,"Popover content, icon only, blue color",-1),e("a",{href:"#"},"Link",-1)])),_:1}),n[9]||(n[9]=l(" zur Publikation eingereicht werden. "))]),i(E,{id:2,paginationType:"fraction",loop:"",slides:b},null,8,["slides"]),n[19]||(n[19]=e("p",null," To display a single image, use the recommended markup with figure, picture and img elements. ",-1)),n[20]||(n[20]=e("figure",null,[e("picture",null,[e("source",{srcset:"https://picsum.photos/1600/900",media:"(min-width: 800px)"}),e("img",{src:"https://picsum.photos/1600/900",alt:"cat"})]),e("figcaption",null," Image label here — © Photograph Name ")],-1)),n[21]||(n[21]=e("h2",{class:"h2"},"Audio player",-1)),n[22]||(n[22]=e("p",null," Use a default audio element wrapped into an audio player class. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch Modellierung vorgenommen. ",-1)),i(x,{title:"First of August speech",description:"Hier kommt ein Kurzbeschriebund so weiter Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.",copyright:"Reuters",url:"https://www.admin.ch/dam/gov/de/Dokumentation/Reden/1-August/DE.MP3",type:"audio/mp3"}),n[23]||(n[23]=e("h2",{class:"h2"},"Datenmodellablage ansehen",-1)),n[24]||(n[24]=e("p",null,[l(" Der Modellkatalog kann unter "),e("a",{href:"#"},"models.geo.admin.ch"),l(" angesehen werden. Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt. ")],-1)),n[25]||(n[25]=e("figure",null,[e("div",{class:"ratio ratio--16/9"},[e("iframe",{width:"560",height:"315",src:"//www.youtube-nocookie.com/embed/vIG4cKz7ukM",title:"Geoinformation - Alles findet irgendwo statt — © Swiss Geoportal",frameborder:"0"})]),e("figcaption",null," Geoinformation - Alles findet irgendwo statt — © Swiss Geoportal ")],-1)),n[26]||(n[26]=e("p",null,[l(" Der Modellkatalog kann unter "),e("a",{href:"#"},"models.geo.admin.ch"),l(" angesehen werden. Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt. ")],-1)),i(z,{type:"default"},{title:t(()=>n[10]||(n[10]=[l(" Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren ")])),description:t(()=>n[11]||(n[11]=[l(" Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. ")])),image:t(()=>n[12]||(n[12]=[e("figure",null,[e("picture",null,[e("source",{srcset:"https://picsum.photos/1600/1200",media:"(min-width: 1024px)"}),e("img",{src:"https://picsum.photos/800/600",alt:"cat"})])],-1)])),_:1}),n[27]||(n[27]=v('<h2 class="h2"> Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren </h2><p> Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. </p><p> Der Modellkatalog kann unter <a href="#">models.geo.admin.ch</a> angesehen werden. Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt. </p><h2 class="h2"> Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren </h2><p> Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. </p><blockquote> Der Modellkatalog kann unter angesehen werden. Simple quote in a text flow. </blockquote><p> Der Modellkatalog kann unter angesehen werden. Datenmodellablage <a href="#" target="_blank">external link</a> publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt. </p>',7)),i(L,{type:"inline",state:"default",title:"Abonnieren Sie unseren Newsletter",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo","input-label":"E-Mail","button-label":"Newsletter abonnieren","success-text":"Danke für Ihre Anmeldung. Sie sollten gerade eine Email bekommen haben.  <strong>Bitte klicken sie den enthaltenen Link um die Anmeldung zu abschliessen.</strong>"}),n[28]||(n[28]=e("p",null,[l(" Der "),e("strong",null,"strong"),l(" Modellkatalog kann unter "),e("mark",null,"mark"),l(" angesehen werden "),e("del",null,"Strike through"),l(" and "),e("u",null,"underline"),l(". Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt. ")],-1)),e("ul",he,[e("li",null,[i(w,{filename:"dummy.pdf",title:"Information on the usage of websites",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat augue eu purus luctus rhoncus. Donec ultricies venenatis nibh, vel placerat est accumsan quis. Maecenas urna nibh, pretium pretium odio id, rhoncus rhoncus lorem. Nulla eu neque sagittis, cursus purus eget, sodales est. Duis at ultrices odio, ac egestas dolor.",url:"../../../public/documents/dummy.pdf",type:"PDF",date:"22.01.2022"})]),e("li",null,[i(w,{filename:"image.png",title:"Information on the usage of websites",description:"",url:"../../../public/images/html-structure.png",type:"PNG",date:"22.01.2022"})])]),n[29]||(n[29]=v('<ul><li> Ein neues minimales Geodatenmodell in der Datenmodellablage publizieren </li><li> List item neues <a href="#" target="_blank">external link in list</a> publizieren </li><li> Ein neues minimales Geodatenmodell in der Datenmodellablage publizieren </li><li> List item neues Modell in der Datenmodellablage publizieren </li></ul><ol><li> Ein neues minimales Geodatenmodell in der Datenmodellablage publizieren </li><li> List item neues Modell in der Datenmodellablage publizieren </li><li> Ein neues minimales Geodatenmodell in der Datenmodellablage publizieren </li><li> List item neues Modell in der Datenmodellablage publizieren </li></ol><h2 class="h2">Datenmodellablage ansehen</h2><p> Der Modellkatalog kann unter <a href="#">models.geo.admin.ch</a> angesehen werden. Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt. </p>',4)),i(z,null,{title:t(()=>n[13]||(n[13]=[l(" Modelldokumentation ")])),description:t(()=>n[14]||(n[14]=[l(" Über den Kontakt models@geo.admin.ch können die Modelldokumentation zur Publikation eingereicht werden. Über den Kontakt models@geo.admin.ch können die zur Publikation eingereicht werden. ")])),image:t(()=>n[15]||(n[15]=[e("figure",null,[e("picture",null,[e("source",{srcset:"https://picsum.photos/1600/1200",media:"(min-width: 1024px)"}),e("img",{src:"https://picsum.photos/800/600",alt:"cat"})])],-1)])),_:1}),n[30]||(n[30]=e("h2",{class:"h2"},"Modellkatalog ansehen",-1)),n[31]||(n[31]=e("p",null," Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt. ",-1))])])]),n[51]||(n[51]=v('<section class="section section--default"><div class="container container--grid gap--responsive"><div class="container__center--xs vertical-spacing"><h2 class="h2">Bare Link Liste mit Beschreibung</h2><ul class="list list--bare list--loose"><li><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-231-01.html">(Haager-) Übereinkommen vom 5. Oktober 1961 über die Zuständigkeit der Behörden und das anzuwendende Recht auf dem Gebiet des Schutzes von Minderjährigen</a><p>(SR 0.211.231.01)</p></li><li><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-231-011.html">(Haager) Übereinkommen vom 19. Oktober 1996 über die Zuständigkeit, das anzuwendende Recht, die Anerkennung, Vollstreckung und Zusammenarbeit auf dem Gebiet der elterlichen Verantwortung und der Massnahmen zum Schutz von Kindern</a><p>(SR 0.211.231.011)</p></li><li class=""><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-230-01.html">Europäisches Übereinkommen vom 20. Mai 1980 über die Anerkennung und Vollstreckung von Entscheidungen über das Sorgerecht für Kinder und die Wiederherstellung des Sorgerechts</a><p>(SR 0.211.230.01)</p></li><li><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-230-02.html">(Haager-) Übereinkommen vom 25. Oktober 1980 über die zivilrechtlichen Aspekte internationaler Kindesentführung</a><p>(SR 0.211.230.02)</p></li><li><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-221-311.html">(Haager-) Übereinkommen vom 29. Mai 1993 über den Schutz von Kindern und die Zusammenarbeit auf dem Gebiet der internationalen Adoption</a><p>(SR 0.211.221.311)</p></li><li><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-232-1.html">(Haager) Übereinkommen vom 13. Januar 2000 über den internationalen Schutz von Erwachsenen</a><p>(SR 0.211.232.1)</p></li></ul></div></div></section><section class="section section--default"><div class="container container--grid gap--responsive"><div class="container__center--xs vertical-spacing"><h2 class="h2">Doted Link Liste mit Beschreibung</h2><ul class="list list--default list--loose list--indented"><li><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-231-01.html">(Haager-) Übereinkommen vom 5. Oktober 1961 über die Zuständigkeit der Behörden und das anzuwendende Recht auf dem Gebiet des Schutzes von Minderjährigen</a><p>(SR 0.211.231.01)</p></li><li><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-231-011.html">(Haager) Übereinkommen vom 19. Oktober 1996 über die Zuständigkeit, das anzuwendende Recht, die Anerkennung, Vollstreckung und Zusammenarbeit auf dem Gebiet der elterlichen Verantwortung und der Massnahmen zum Schutz von Kindern</a><p>(SR 0.211.231.011)</p></li><li class=""><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-230-01.html">Europäisches Übereinkommen vom 20. Mai 1980 über die Anerkennung und Vollstreckung von Entscheidungen über das Sorgerecht für Kinder und die Wiederherstellung des Sorgerechts</a><p>(SR 0.211.230.01)</p></li><li><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-230-02.html">(Haager-) Übereinkommen vom 25. Oktober 1980 über die zivilrechtlichen Aspekte internationaler Kindesentführung</a><p>(SR 0.211.230.02)</p></li><li><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-221-311.html">(Haager-) Übereinkommen vom 29. Mai 1993 über den Schutz von Kindern und die Zusammenarbeit auf dem Gebiet der internationalen Adoption</a><p>(SR 0.211.221.311)</p></li><li><a class="link" href="/rhf/de/home/zivilrecht/rechtsgrundlagen/sr-0-211-232-1.html">(Haager) Übereinkommen vom 13. Januar 2000 über den internationalen Schutz von Erwachsenen</a><p>(SR 0.211.232.1)</p></li></ul></div></div></section>',2)),e("section",ce,[e("div",fe,[e("div",be,[n[32]||(n[32]=e("h2",{class:"h2"},"Studien",-1)),e("ul",ke,[e("li",null,[i(w,{filename:"dummy.pdf",title:"Schlussbericht: Langzeitbeziehende in der Nothilfe",url:"../public/documents/dummy.pdf",type:"PDF",date:"13.01.2022",headingLevel:"h3",size:"684 kB"})]),e("li",null,[i(w,{filename:"dummy.pdf",title:"Schlussbericht: Langzeitbezug von Nothilfe durch weggewiesene Asylsuchende",url:"../public/documents/dummy.pdf",type:"PDF",date:"13.01.2022",headingLevel:"h3",size:"529kB"})])])])])]),e("section",ve,[e("div",we,[e("div",De,[n[45]||(n[45]=e("h2",{class:"h2"},"Card link list",-1)),e("ul",ze,[e("li",null,[i(p,{type:"flat"},{title:t(()=>n[33]||(n[33]=[e("h3",null," (Haager-) Übereinkommen vom 5. Oktober 1961 über die Zuständigkeit der Behörden und das anzuwendende Recht auf dem Gebiet des Schutzes von Minderjährigen ",-1)])),footerInfo:t(()=>n[34]||(n[34]=[l(" (SR 0.211.231.01) ")])),footerAction:t(()=>[i(g,{to:"#",variant:"outline","icon-pos":"only",icon:"ArrowRight",label:"Mehr anschauen"})]),_:1})]),e("li",null,[i(p,{type:"flat"},{title:t(()=>n[35]||(n[35]=[e("h3",null," (Haager) Übereinkommen vom 19. Oktober 1996 über die Zuständigkeit, das anzuwendende Recht, die Anerkennung, Vollstreckung und Zusammenarbeit auf dem Gebiet der elterlichen Verantwortung und der Massnahmen zum Schutz von Kindern ",-1)])),footerInfo:t(()=>n[36]||(n[36]=[l(" (SR 0.211.231.011) ")])),footerAction:t(()=>[i(g,{to:"#",variant:"outline","icon-pos":"only",icon:"ArrowRight",label:"Mehr anschauen"})]),_:1})]),e("li",null,[i(p,{type:"flat"},{title:t(()=>n[37]||(n[37]=[e("h3",null," Europäisches Übereinkommen vom 20. Mai 1980 über die Anerkennung und Vollstreckung von Entscheidungen über das Sorgerecht für Kinder und die Wiederherstellung des Sorgerechts ",-1)])),footerInfo:t(()=>n[38]||(n[38]=[l(" (SR 0.211.230.01) ")])),footerAction:t(()=>[i(g,{to:"#",variant:"outline","icon-pos":"only",icon:"ArrowRight",label:"Mehr anschauen"})]),_:1})]),e("li",null,[i(p,{type:"flat"},{title:t(()=>n[39]||(n[39]=[e("h3",null," (Haager-) Übereinkommen vom 25. Oktober 1980 über die zivilrechtlichen Aspekte internationaler Kindesentführung ",-1)])),footerInfo:t(()=>n[40]||(n[40]=[l(" (SR 0.211.230.02) ")])),footerAction:t(()=>[i(g,{to:"#",variant:"outline","icon-pos":"only",icon:"ArrowRight",label:"Mehr anschauen"})]),_:1})]),e("li",null,[i(p,{type:"flat"},{title:t(()=>n[41]||(n[41]=[e("h3",null," (Haager-) Übereinkommen vom 29. Mai 1993 über den Schutz von Kindern und die Zusammenarbeit auf dem Gebiet der internationalen Adoption ",-1)])),footerInfo:t(()=>n[42]||(n[42]=[l(" (SR 0.211.221.311) ")])),footerAction:t(()=>[i(g,{to:"#",variant:"outline","icon-pos":"only",icon:"ArrowRight",label:"Mehr anschauen"})]),_:1})]),e("li",null,[i(p,{type:"flat"},{title:t(()=>n[43]||(n[43]=[e("h3",null," (Haager) Übereinkommen vom 13. Januar 2000 über den internationalen Schutz von Erwachsenen ",-1)])),footerInfo:t(()=>n[44]||(n[44]=[l(" (SR 0.211.232.1) ")])),footerAction:t(()=>[i(g,{to:"#",variant:"outline","icon-pos":"only",icon:"ArrowRight",label:"Mehr anschauen"})]),_:1})])])])])]),e("section",_e,[e("div",Se,[e("div",Me,[n[46]||(n[46]=e("h2",{class:"h2"},"Large table example",-1)),i(F,{caption:"This table could be even larger with a .container__full class on the parent.",displayCaption:!0})])])]),n[52]||(n[52]=v('<section class="section section--default"><div class="container container--grid gap--responsive"><div class="container__center--xs vertical-spacing"><h2 class="h2">Carousel with few images</h2><p> To display a few images as a carousel, set the pagination type to «bullets». Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. </p><p> Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. </p><p> Der Modellkatalog kann unter <a href="#">models.geo.admin.ch</a> angesehen werden. Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt. </p></div></div></section>',1)),i(T,{quote:"Begin anywhere.",author:"John Cage",image:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/John_Cage_%281988%29.jpg/576px-John_Cage_%281988%29.jpg",width:"400",height:"400",alt:"image name",source:{srcset:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/John_Cage_%281988%29.jpg/768px-John_Cage_%281988%29.jpg",width:"800",height:"800",media:"(min-width: 1024px)"}}}),e("section",Ie,[e("div",Ee,[e("div",ye,[n[48]||(n[48]=e("h2",{class:"h2"}," Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren ",-1)),n[49]||(n[49]=e("p",null," Über den Kontakt models@geo.admin.ch können die INTERLIS-Modelldatei und die Modelldokumentation (als PDF Dokument) zur Publikation eingereicht werden. ",-1)),n[50]||(n[50]=e("p",null,[l(" Der Modellkatalog kann unter "),e("a",{href:"#"},"models.geo.admin.ch"),l(" angesehen werden. Ein neues «minimales Geodatenmodell» in der Datenmodellablage publizieren. Für die Publikation der «minimalen Geodatenmodelle» besteht kein direkter Online-Zugang. Die Datenmodellablage ist moderiert und die Erfassung neuer Datenmodelle wird durch GKG/KOGIS vorgenommen. Entsprechend der Empfehlungen zur Modellierung wird die Modelldokumentation veröffentlicht oder verlinkt. Die INTERLIS-Modelldatei wird in jedem Fall in die Datenmodellablage eingepflegt. ")],-1)),e("div",null,[n[47]||(n[47]=e("h2",{class:"h2"},"Themen",-1)),i(K,{tags:_,bare:""},null,8,["tags"])])])])]),i(A),i($)]),i(B,{title:"Inhalt teilen",triggerElements:".share-bar__share-button, #share-link",layout:"xs"},{body:t(()=>[i(p,{type:"default"},{description:t(()=>[e("div",Ge,[e("a",Re,[i(f,{size:"2xl",icon:"Facebook",label:"Facebook"})]),e("a",Pe,[i(f,{size:"2xl",icon:"Twitter",label:"Twitter"})]),e("a",xe,[i(f,{size:"2xl",icon:"LinkedIn",label:"LinkedIn"})]),e("a",Le,[i(f,{size:"2xl",icon:"Xing",label:"Xing"})]),e("a",Ke,[i(f,{size:"2xl",icon:"Phone",label:"Whatsapp"})])]),n[53]||(n[53]=e("hr",{class:"separator"},null,-1)),e("div",Fe,[i(V,{id:"my-id",type:"outline",size:"base",label:"Shareable URL",value:"https://www.admin.ch/gov/de/start/departemente/departement-des-innern-edi.html",hideLabel:!0,readonly:!0}),e("div",$e,[i(g,{variant:"outline",size:"base",label:"URL Kopieren",class:"mt-3",onClick:n[0]||(n[0]=Ve=>u.value=!u.value)}),e("div",Ne,[u.value?(o(),I(O,{key:0,label:"URL wurde kopiert",color:"green",size:"sm",icon:"Checkmark",class:"mt-3"})):m("",!0)])])])]),_:1})]),_:1}),e("footer",Ae,[i(W),i(J)])]))}});Te.__docgenInfo={exportName:"default",displayName:"detailPageSimple",description:"",tags:{},props:[{name:"isIntranet",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"isFreebrand",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/pages/detailPageSimple.vue"]};export{Te as _,z as a};