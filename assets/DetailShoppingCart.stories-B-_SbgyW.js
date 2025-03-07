import{s as x,k as d,p as c,q as e,A as m,r as _,g as F,w as Q,K as A,z as C,u as de,O as pe,P as me,D as i,x as k,J as ve,H as ge,b as fe,F as he,v as z,n as _e,G as ye}from"./vue.esm-bundler-B8GkW3lv.js";import{_ as E}from"./Btn-ByR9kGXl.js";import{_ as w}from"./SvgIcon-CvLaVXkC.js";import{_ as X}from"./Checkbox-C2fMf5bP.js";import{_ as be}from"./Contact-Bg5x4VSG.js";import{_ as j}from"./Fieldset-CgYVkQ9n.js";import{_ as h}from"./Input-BAV_2tlg.js";import{_ as Se}from"./Notification-BOMN1KTF.js";import{_ as K}from"./Radio-C3fBxXPo.js";import{_ as G}from"./Select-B_H34kF_.js";import{_ as Te}from"./Textarea-BbT9mMPk.js";import{v as ke}from"./v4-C6aID195.js";import{_ as we}from"./AlterBodyClasses-CcUDapAo.js";import{_ as Ce}from"./DesktopMenu-CKXB3V2_.js";import{_ as xe}from"./FooterInformation-CO0iFjI5.js";import{F as Ie}from"./FooterNavigation-BaFQyStT.js";import{_ as Ne}from"./MobileMenu-DOTckSP6.js";import{_ as $e}from"./TopBar-CpEPB6oK.js";import{u as ze,_ as qe}from"./TopHeader-Bn87GhNS.js";const Le={class:"image__not-available"},Be={class:"image__not-available-text"},Y=x({__name:"ImageNotAvailable",props:{text:{type:String,default:()=>"Image not available"}},setup(a){return(p,o)=>(c(),d("div",Le,[o[0]||(o[0]=e("svg",{class:"icon icon--image",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"m8.20794 5.78467a2.292 2.292 0 1 0 2.29151 2.292 2.29476 2.29476 0 0 0 -2.29151-2.292zm0 3.834a1.542 1.542 0 1 1 1.54151-1.542 1.54362 1.54362 0 0 1 -1.54151 1.54198z"}),e("path",{d:"m4.83294 4.70166v15.19922h15.05078v-15.19922zm14.30078 14.44922h-13.55078v-4.08988l2.15576-2.15524 2.28809 2.28711 5.53857-5.53808 3.56836 3.56836zm-3.56836-10.55664-5.53857 5.53809-2.28809-2.28711-2.15576 2.15527v-8.54883h13.55078v6.71094z"})],-1)),e("p",Be,m(a.text),1)]))}});Y.__docgenInfo={exportName:"default",displayName:"ImageNotAvailable",description:"",tags:{},props:[{name:"text",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Image not available'"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/ImageNotAvailable.vue"]};const Fe={class:"shopping__card__image"},Ee=["src","alt"],Oe={class:"shopping__card-details-container"},Ve={class:"card__title"},Ae={class:"shopping__card-item-price"},Pe={key:0,class:"shopping__card-amount"},De={key:0,class:"shopping__card-amount-input"},He={class:"shopping__card-price-mobile"},Me={class:"shopping__card-action-container"},We={class:"shopping__card-price"},Re={class:"shopping__card-action"},je=["aria-label"],Ke={class:"btn__text"},Ge=["aria-label"],Je={class:"btn__text"},$=x({__name:"ShoppingCard",props:{type:{type:String,validator:a=>["view","edit"].includes(a),default:()=>"edit"},image:{type:Object,default:()=>{}},title:{type:String,required:!0},itemPrice:{type:String,required:!0},price:{type:String,required:!0},deleteTriggered:{type:Function,default:()=>({})},editTriggered:{type:Function,default:()=>({})},removeLabel:{type:String,default:()=>"Remove"},editLabel:{type:String,default:()=>"Edit"},amount:{type:Number,default:()=>1}},setup(a){const p=_(0),o=a,l=F(()=>{let f="";return f+=`shopping__card--${o.type} `,f});return Q(o,function(){p.value=o.amount}),A(()=>{p.value=o.amount}),(f,u)=>(c(),d("div",{class:k(["shopping__card",l.value])},[e("div",Fe,[u[3]||(u[3]=e("div",{class:"shopping__card-image-background"},null,-1)),a.image&&a.image.src&&a.image.alt?(c(),d("img",{key:0,src:a.image.src,alt:a.image.alt},null,8,Ee)):(c(),de(Y,{key:1,class:"shopping__card-image-not-available",text:"Kein Bild verfügbar"}))]),e("div",Oe,[e("div",Ve,[e("h3",null,m(a.title),1)]),e("div",Ae,[e("p",null,m(a.itemPrice),1)]),a.type==="view"?(c(),d("div",Pe,[e("p",null,"Anzahl: "+m(a.amount),1)])):C("",!0)]),a.type==="edit"?(c(),d("div",De,[pe(e("input",{"onUpdate:modelValue":u[0]||(u[0]=v=>p.value=v),type:"number",class:"input--outline text--base"},null,512),[[me,p.value]])])):C("",!0),e("div",He,[e("p",null,m(a.price),1)]),e("div",Me,[e("div",We,[e("p",null,m(a.price),1)]),e("div",Re,[a.type==="view"?(c(),d("button",{key:0,"aria-label":a.editLabel,class:"btn btn--bare btn--icon-left",onClick:u[1]||(u[1]=(...v)=>a.editTriggered&&a.editTriggered(...v))},[i(w,{icon:"Pen",class:"btn__icon"}),e("span",Ke,m(a.editLabel),1)],8,je)):C("",!0),a.type==="edit"?(c(),d("button",{key:1,"aria-label":a.editLabel,class:"btn btn--bare btn--icon-left",onClick:u[2]||(u[2]=(...v)=>a.deleteTriggered&&a.deleteTriggered(...v))},[i(w,{icon:"Trash",class:"btn__icon"}),e("span",Je,m(a.removeLabel),1)],8,Ge)):C("",!0)])])],2))}});$.__docgenInfo={exportName:"default",displayName:"ShoppingCard",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!0,value:"() => 'edit'"},values:["view","edit"]},{name:"image",type:{name:"{ src: string; alt: string }"},defaultValue:{func:!0,value:"() => undefined"}},{name:"title",type:{name:"string"},required:!0},{name:"itemPrice",type:{name:"string"},required:!0},{name:"price",type:{name:"string"},required:!0},{name:"deleteTriggered",type:{name:"() => void"},defaultValue:{func:!0,value:"() => ({})"}},{name:"editTriggered",type:{name:"() => void"},defaultValue:{func:!0,value:"() => ({})"}},{name:"removeLabel",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Remove'"}},{name:"editLabel",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Edit'"}},{name:"amount",type:{name:"number"},defaultValue:{func:!0,value:"() => 1"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/ShoppingCard.vue"]};const Ze=["action","target","method"],ee=x({__name:"Form",props:{submitFunction:{type:Function,default:()=>{}},action:{type:String,default:()=>{}},method:{type:String,validator:a=>["post","get"].includes(a),default:()=>"post"},target:{type:String,validator:a=>["_self","_blank"].includes(a),default:()=>"_blank"}},setup(a){const p=_(!1),o=ve("form"),l=a,f=function(u){var v,y;p.value=!1;for(const b of[o.value]){(v=b==null?void 0:b.classes)!=null&&v.includes("input--error")&&(p.value=!0);for(const T of b.children)(y=T.classes)!=null&&y.includes("input--error")&&(p.value=!0)}p.value?u.preventDefault():(l.submitFunction&&!l.action?(u.preventDefault(),l.submitFunction(u)):l.submitFunction&&l.submitFunction(u),window.postMessage({trigger:"emitSubmit"}))};return(u,v)=>(c(),d("form",{ref_key:"form",ref:o,action:a.action?a.action:"",target:a.target,method:a.method,onSubmit:f},[ge(u.$slots,"default")],40,Ze))}});ee.__docgenInfo={exportName:"default",displayName:"Form",description:"",tags:{},props:[{name:"submitFunction",type:{name:"(e: Event) => void"},defaultValue:{func:!0,value:"() => undefined"}},{name:"action",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"method",type:{name:"string"},defaultValue:{func:!0,value:"() => 'post'"},values:["post","get"]},{name:"target",type:{name:"string"},defaultValue:{func:!0,value:"() => '_blank'"},values:["_self","_blank"]}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/Form.vue"]};const Ue={class:"shopping__cart-total-container"},Qe={class:"shopping__cart-total"},Xe={class:"shopping__cart-total-description"},Ye={class:"shopping__cart__action-container"},te=x({__name:"ShoppingCartTotal",props:{title:{type:String,default:()=>"Total:"},total:{type:String,required:!0},description:{type:String,default:()=>{}},nextStepLabel:{type:String,default:()=>"Next step"},nextStepAriaLabel:{type:String,default:()=>"Go to next step"}},emits:["nextStep"],setup(a,{emit:p}){const o=_(0),l=p,f=function(){l("nextStep")},u=function(){o.value=document.body.clientWidth};return A(()=>{u(),window.addEventListener("resize",u)}),(v,y)=>(c(),d("div",null,[e("div",Ue,[e("h3",null,m(a.title),1),e("p",Qe,m(a.total),1)]),e("p",Xe,m(a.description),1),e("div",Ye,[i(E,{class:"shopping__cart-button",variant:"outline-negative",size:"base",label:a.nextStepLabel,ariaLabel:a.nextStepAriaLabel,fullWidth:o.value<1024,onEmitClick:f},null,8,["label","ariaLabel","fullWidth"])])]))}});te.__docgenInfo={exportName:"default",displayName:"ShoppingCartTotal",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Total:'"}},{name:"total",type:{name:"string"},required:!0},{name:"description",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"}},{name:"nextStepLabel",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Next step'"}},{name:"nextStepAriaLabel",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Go to next step'"}}],events:[{name:"nextStep"}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/ShoppingCartTotal.vue"]};const et={class:"box total__summary-container"},tt={class:"h3 total__sumary-title"},at={class:"container--flex"},it={class:"total__summary-total-title"},nt={class:"font--bold total__summary-inline-text"},rt={class:"container--flex"},st={class:"total__summary-total-title"},ot={class:"font--bold total__summary-inline-text"},lt={class:"total__summary-agb"},ae=x({__name:"ShoppingCartTotalSummary",props:{title:{type:String,default:()=>"Total"},subTotalTitle:{type:String,default:()=>"Subtotal"},subTotal:{type:String,required:!0},totalTitle:{type:String,default:()=>"Total"},total:{type:String,required:!0},orderButtonText:{type:String,default:()=>"Order"},orderButtonAriaLabel:{type:String,default:()=>"Order"},agreementText:{type:String,required:!0}},emits:["nextStep"],setup(a,{emit:p}){const o=_(!1),l=p,f=function(){o.value&&l("nextStep")};return(u,v)=>(c(),d("div",et,[e("h3",tt,m(a.title),1),e("div",null,[e("div",at,[e("p",it,m(a.subTotalTitle),1),e("p",nt,m(a.subTotal),1)]),v[0]||(v[0]=e("hr",{class:"separator separator--md"},null,-1)),e("div",rt,[e("p",st,m(a.totalTitle),1),e("p",ot,m(a.total),1)])]),e("div",lt,[i(X,{required:!0,size:"base",type:"outline",name:"checkbox-agb",value:"agb accepted",label:a.agreementText,onChange:y=>{o.value=y.target.checked}},null,8,["label","onChange"])]),i(E,{class:"shopping__cart-button",variant:"outline-negative",size:"base",label:a.orderButtonText,ariaLabel:a.orderButtonAriaLabel,fullWidth:!0,disabled:!o.value,onEmitClick:f},null,8,["label","ariaLabel","disabled"])]))}});ae.__docgenInfo={exportName:"default",displayName:"ShoppingCartTotalSummary",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Total'"}},{name:"subTotalTitle",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Subtotal'"}},{name:"subTotal",type:{name:"string"},required:!0},{name:"totalTitle",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Total'"}},{name:"total",type:{name:"string"},required:!0},{name:"orderButtonText",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Order'"}},{name:"orderButtonAriaLabel",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Order'"}},{name:"agreementText",type:{name:"string"},required:!0}],events:[{name:"nextStep"}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/ShoppingCartTotalSummary.vue"]};const ut={class:"step__indicator"},ct={key:0},dt={key:1},B=x({__name:"StepIndicator",props:{step:{type:Number,required:!0},isConfirmed:{type:Boolean,default:()=>!1},isActive:{type:Boolean,default:()=>!1}},setup(a){const p=a,o=F(()=>{let l="step__indicator-step--";return p.isConfirmed?l+="confirmed":p.isActive&&(l+="active"),l});return(l,f)=>(c(),d("div",ut,[e("div",{class:k(["step__indicator-step",o.value])},[a.isConfirmed?(c(),d("span",ct,[i(w,{icon:"CheckmarkBold",size:"lg"})])):(c(),d("span",dt,m(a.step),1))],2)]))}});B.__docgenInfo={exportName:"default",displayName:"StepIndicator",description:"",tags:{},props:[{name:"step",type:{name:"number"},required:!0},{name:"isConfirmed",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}},{name:"isActive",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/StepIndicator.vue"]};const pt={class:"container container--grid"},mt={key:0,class:"my-16 container__center--md"},vt={class:"h1 shopping__cart-title"},gt={class:"accordion"},ft={class:"accordion__item"},ht=["id"],_t={class:"accordion__title"},yt=["id"],bt={class:"shopping__cart-accordion-content"},St={class:"shopping__cart-card-list"},Tt={key:0},kt={key:1},wt={key:2},Ct={key:1,class:"shopping__cart-empty-text"},xt={class:"accordion__item"},It=["id"],Nt={class:"accordion__title"},$t=["id"],zt={class:"shopping__cart-accordion-content"},qt={class:"shopping__cart-order-form-container"},Lt={class:"shopping__cart-order-form-input-group"},Bt={class:"shopping__cart-order-form-input-group"},Ft={class:"shopping__cart-order-form-input-group"},Et={class:"shopping__cart-order-form-input-group"},Ot={class:"shopping__cart-order-form-input-group"},Vt={class:"shopping__cart-order-form-fieldset-spacing"},At={key:0},Pt={class:"shopping__cart-order-form-container"},Dt={class:"shopping__cart-order-form-input-group"},Ht={class:"shopping__cart-order-form-input-group"},Mt={class:"shopping__cart-order-form-input-group"},Wt={class:"shopping__cart-order-form-input-group"},Rt={class:"shopping__cart__action-container"},jt={class:"accordion__item"},Kt=["id"],Gt={class:"accordion__title"},Jt=["id"],Zt={class:"shopping__cart-accordion-content"},Ut={class:"shopping__cart-order-overview-container"},Qt={class:"shopping__cart-card-list"},Xt={class:"shopping__cart-delivery-summary"},Yt={class:"box"},ea={key:1,class:"container__center--sm shopping__cart-confirmation-container"},ta={class:"shopping__cart-confirmation"},ie=x({__name:"ShoppingCart",props:{cartTitle:{type:String,default:()=>"Shopping cart"},cartOverviewTitle:{type:String,default:()=>"Shopping cart"},cartAddressTitle:{type:String,default:()=>"Billing address & delivery address"},cartCheckoutTitle:{type:String,default:()=>"Submit order"}},setup(a){const p={1:"shopping-cart-drawer-overview-button",2:"shopping-cart-drawer-address-button",3:"shopping-cart-drawer-checkout-button"},o=_(1),l=_(1),f=_(!1),u=_(!1),v=_(!0),y=_(!0),b=_(!0),T=_(null),re=_(ke()),I=_(!1),P=_(!1),D=_(0),t=fe({invoice:{gender:{touched:!1,valid:!1,mandatory:!0},firstName:{value:"",touched:!1,valid:!1,mandatory:!0},lastName:{value:"",touched:!1,valid:!1,mandatory:!0},org:{value:"",touched:!1,valid:!0,mandatory:!1},street:{value:"",touched:!1,valid:!1,mandatory:!0},zip:{value:"",touched:!1,valid:!1,mandatory:!0},postOffice:{value:"",touched:!1,valid:!0,mandatory:!1},city:{value:"",touched:!1,valid:!1,mandatory:!0},country:{value:"",touched:!1,valid:!1,mandatory:!0},email:{value:"",touched:!1,valid:!1,mandatory:!0},phone:{value:"",touched:!1,valid:!0,mandatory:!1}},delivery:{firstName:{value:"",touched:!1,valid:!1,mandatory:!0},lastName:{value:"",touched:!1,valid:!1,mandatory:!0},org:{value:"",touched:!1,valid:!0,mandatory:!1},street:{value:"",touched:!1,valid:!1,mandatory:!0},zip:{value:"",touched:!1,valid:!1,mandatory:!0},postOffice:{value:"",touched:!1,valid:!0,mandatory:!1},city:{value:"",touched:!1,valid:!1,mandatory:!0},country:{value:"",touched:!1,valid:!1,mandatory:!0}}}),H=F(()=>D.value<1024),M=F(()=>{const s=["invoice"];return I.value&&s.push("delivery"),s.every(r=>Object.keys(t[r]).every(L=>t[r][L].valid))}),O=function(s){!v.value&&!y.value&&!b.value||(o.value===s?o.value=null:s===1||s===2||s===3&&M?(o.value=s,l.value=s,s===2&&(f.value=!0),s===3&&(u.value=!0)):s===3&&!M.value&&(u.value=!1))},se=function(){o.value=2,l.value=2,f.value=!0},oe=async function(){P.value=!0,await _e();const s=document.getElementById("main-header");s&&(T.value&&clearTimeout(T.value),T.value=setTimeout(()=>{s.scrollIntoView({behavior:"smooth"})},200))},W=function(s){g("invoice","gender",s.target.value)},V=function(){o.value=1,l.value=1},N=function(s=""){return`${s}-${re.value}`},R=function(){D.value=document.body.clientWidth},le=function(s){const r=document.getElementById(N(p[s]));r&&(T.value&&clearTimeout(T.value),T.value=setTimeout(()=>{r.scrollIntoView({behavior:"smooth"})},200))},g=function(s,r,n){t[s][r].value=n,t[s][r].touched=!0,t[s][r].mandatory===!1||t[s][r].value&&t[s][r].value.trim()!==""?t[s][r].valid=!0:t[s][r].valid=!1},ue=function(){const s=Object.keys(t),r=["invoice"];I.value&&r.push("delivery"),s.forEach(n=>{const L=Object.keys(t[n]);r.includes(n)&&L.forEach(S=>{t[n][S].mandatory===!1||t[n][S].value&&t[n][S].value.trim()!==""?t[n][S].valid=!0:t[n][S].valid=!1,t[n][S].touched=!0})})},ce=function(){ue();const s=["invoice"];I.value&&s.push("delivery"),s.every(n=>Object.keys(t[n]).every(S=>t[n][S].valid))&&(o.value=3,l.value=3,u.value=!0)};return Q(o,function(){le(o.value||1)}),A(()=>{R(),window.addEventListener("resize",R)}),(s,r)=>(c(),d("div",pt,[P.value?(c(),d("div",ea,[e("div",ta,[i(w,{class:"shopping__cart-confirmation-badge",icon:"ConfirmationBadge",size:"2xl"}),i(w,{class:"shopping__cart-confirmation-checkmark",icon:"CheckmarkBold",size:"xl"})]),r[10]||(r[10]=e("h1",{class:"h1 shopping__cart-confirmation-title"}," Ihre Bestellung ist bei uns eingetroffen ",-1)),r[11]||(r[11]=e("div",{class:"font--bold shopping__cart-confirmation-text"},[e("p",null,"Die Bestellung wurde erfolgreich aufgegeben."),e("p",null," Wir werden dir eine E-Mail mit der Bestellbestätigung zukommen lassen. ")],-1)),i(E,{class:"shopping__cart-confirmation-action",variant:"outline-negative",size:"base",label:"Zurück",ariaLabel:"Zurück",fullWidth:H.value},null,8,["fullWidth"])])):(c(),d("div",mt,[e("h1",vt,m(a.cartTitle),1),e("ul",gt,[e("li",ft,[e("button",{id:N("shopping-cart-drawer-overview-button"),class:k(["accordion__button",{active:o.value===1}]),onClick:r[0]||(r[0]=n=>O(1))},[i(B,{step:1,isConfirmed:f.value,isActive:l.value===1},null,8,["isConfirmed","isActive"]),e("h2",_t,m(a.cartOverviewTitle),1),i(w,{icon:"ChevronDown",size:"xl",class:"accordion__arrow"})],10,ht),e("div",{id:N("shopping-cart-drawer-overview"),class:k(["accordion__drawer",{active:o.value===1}])},[e("div",bt,[v.value||y.value||b.value?(c(),d(he,{key:0},[e("div",null,[e("ul",St,[v.value?(c(),d("li",Tt,[i($,{type:"edit",image:{src:"images/publication-cover.png",alt:"publication-cover"},context:"mobile",title:"Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)",itemPrice:"Preis pro Stück: CHF 12.00",price:"CHF 12.00",removeLabel:"Entfernen",editLabel:"Editieren",deleteTriggered:()=>{v.value=!1,!y.value&&!b.value&&(f.value=!1,u.value=!1)}},null,8,["deleteTriggered"])])):C("",!0),y.value?(c(),d("li",kt,[i($,{type:"edit",title:"Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)",itemPrice:"Preis pro Stück: CHF 12.00",price:"CHF 12.00",removeLabel:"Entfernen",editLabel:"Editieren",deleteTriggered:()=>{y.value=!1,!v.value&&!b.value&&(f.value=!1,u.value=!1)}},null,8,["deleteTriggered"])])):C("",!0),b.value?(c(),d("li",wt,[i($,{type:"edit",image:{src:"images/publication-cover.png",alt:"publication-cover"},title:"Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)",itemPrice:"Preis pro Stück: CHF 12.00",price:"CHF 12.00",removeLabel:"Entfernen",editLabel:"Editieren",deleteTriggered:()=>{b.value=!1,!v.value&&!y.value&&(f.value=!1,u.value=!1)}},null,8,["deleteTriggered"])])):C("",!0)])]),i(te,{title:"Provisorischer Bestellwert exkl. MwSt:",total:"CHF 36.00",description:"Ermässigungen werden gemäss Gebührenverordnung für statistische Dienstleistungen (Art. 19 und 22) gewährt. Ansprüche können im nächsten Schritt unter „Nachricht“ angebracht werden.",nextStepLabel:"Nächster Schritt",nextStepAriaLabel:"Nächster Schritt",onNextStep:se})],64)):(c(),d("p",Ct," Es befinden sich keine Produkte im Warenkorb "))])],10,yt)]),e("li",xt,[e("button",{id:N("shopping-cart-drawer-address-button"),class:k(["accordion__button",{active:o.value===2}]),onClick:r[1]||(r[1]=n=>O(2))},[i(B,{step:2,isConfirmed:u.value,isActive:l.value===2},null,8,["isConfirmed","isActive"]),e("h2",Nt,m(a.cartAddressTitle),1),i(w,{icon:"ChevronDown",size:"xl",class:"accordion__arrow"})],10,It),e("div",{id:N("shopping-cart-drawer-address"),class:k(["accordion__drawer",{active:o.value===2}])},[e("div",zt,[i(Se,{class:"shopping__cart-order-form-notification",type:"hint",closeBtn:!1,text:"Bitte füllen Sie alle Pflichtfelder aus. Diese sind mit mit einem “*” markiert."}),i(ee,{class:"shopping__cart-order-form"},{default:z(()=>[r[7]||(r[7]=e("h3",{class:"shopping__cart-order-form-invoice-title"}," Rechnungsaddresse ",-1)),i(j,{variant:"outline",size:"base",required:t.invoice.gender.mandatory,legend:"Anrede",messageType:"error",message:t.invoice.gender.touched&&!t.invoice.gender.valid?"Bitte wählen Sie eine Anrede aus.":""},{default:z(()=>[i(K,{required:!0,size:"base",type:"outline",name:"radio-gender",value:"Frau",label:"Frau",onChange:W}),i(K,{required:!0,size:"base",type:"outline",name:"radio-gender",value:"Herr",label:"Herr",onChange:W})]),_:1},8,["required","message"]),e("div",qt,[e("div",Lt,[i(h,{required:t.invoice.lastName.mandatory,label:"Name",placeholder:"Name",messageType:"error",value:t.invoice.lastName.value,onInput:n=>g("invoice","lastName",n.target.value),message:t.invoice.lastName.touched&&!t.invoice.lastName.valid?"Bitte geben Sie einen Namen an.":""},null,8,["required","value","onInput","message"]),i(h,{required:t.invoice.firstName.mandatory,label:"Vorname",placeholder:"Vorname",messageType:"error",value:t.invoice.firstName.value,onInput:n=>g("invoice","firstName",n.target.value),message:t.invoice.firstName.touched&&!t.invoice.firstName.valid?"Bitte geben Sie einen Vornamen an.":""},null,8,["required","value","onInput","message"])]),e("div",Bt,[i(h,{class:"shopping__cart-order-form-input-spacing",required:t.invoice.org.mandatory,label:"Organisation",placeholder:"Organisation",messageType:"error",value:t.invoice.org.value,onInput:n=>g("invoice","org",n.target.value),message:t.invoice.org.touched&&!t.invoice.org.valid?"Die Eingabe ist ungültig. Bitte überprüfen Sie Ihre Eingabe.":""},null,8,["required","value","onInput","message"]),i(h,{class:"shopping__cart-order-form-input-spacing",required:t.invoice.street.mandatory,label:"Strasse / Nr.",placeholder:"Strasse & Hausnummer",messageType:"error",value:t.invoice.street.value,onInput:n=>g("invoice","street",n.target.value),message:t.invoice.street.touched&&!t.invoice.street.valid?"Bitte geben Sie eine Strasse und Hausnummer an.":""},null,8,["required","value","onInput","message"])]),e("div",Ft,[i(h,{class:"shopping__cart-order-form-input-spacing",required:t.invoice.postOffice.mandatory,label:"Postfach",placeholder:"Postfach",messageType:"error",value:t.invoice.postOffice.value,onInput:n=>g("invoice","postOffice",n.target.value),message:t.invoice.postOffice.touched&&!t.invoice.postOffice.valid?"Die Eingabe ist ungültig. Bitte überprüfen Sie Ihre Eingabe.":""},null,8,["required","value","onInput","message"]),i(h,{class:"shopping__cart-order-form-input-spacing",required:t.invoice.zip.mandatory,label:"Postleitzahl",placeholder:"Postleitzahl",messageType:"error",value:t.invoice.zip.value,onInput:n=>g("invoice","zip",n.target.value),message:t.invoice.zip.touched&&!t.invoice.zip.valid?"Bitte geben Sie eine Postleitzahl an.":""},null,8,["required","value","onInput","message"])]),e("div",Et,[i(h,{class:"shopping__cart-order-form-input-spacing",required:t.invoice.city.mandatory,label:"Ort",placeholder:"Ort",messageType:"error",value:t.invoice.city.value,onInput:n=>g("invoice","city",n.target.value),message:t.invoice.city.touched&&!t.invoice.city.valid?"Bitte geben Sie eine Ortschaft an.":""},null,8,["required","value","onInput","message"]),i(G,{class:"shopping__cart-order-form-input-spacing",required:t.invoice.country.mandatory,variant:"outline",size:"base",label:"Land",messageType:"error",message:t.invoice.country.touched&&!t.invoice.country.valid?"Bitte geben Sie ein Land an.":"",onSelect:n=>g("invoice","country",n)},{default:z(()=>r[4]||(r[4]=[e("option",{selected:"",disabled:""},"Land auswählen",-1),e("option",{value:"CH"},"Schweiz",-1),e("option",{value:"DE"},"Deutschland",-1),e("option",{value:"AT"},"Österreich",-1),e("option",{value:"FR"},"Frankreich",-1),e("option",{value:"IT"},"Italien",-1)])),_:1},8,["required","message","onSelect"])]),e("div",Ot,[i(h,{class:"shopping__cart-order-form-input-spacing",required:t.invoice.phone.mandatory,label:"Telefon",placeholder:"+41 (0)58 555 55 44",messageType:"error",value:t.invoice.phone.value,onInput:n=>g("invoice","phone",n.target.value),message:t.invoice.phone.touched&&!t.invoice.phone.valid?"Bitte geben Sie eine gültige Telefonnummer an.":""},null,8,["required","value","onInput","message"]),i(h,{class:"shopping__cart-order-form-input-spacing",required:t.invoice.email.mandatory,label:"E-Mail",placeholder:"E-Mail Addresse",messageType:"error",value:t.invoice.email.value,onInput:n=>g("invoice","email",n.target.value),message:t.invoice.email.touched&&!t.invoice.email.valid?"Bitte geben Sie eine gültige E-Mail Adresse an.":""},null,8,["required","value","onInput","message"])])]),i(Te,{class:"shopping__cart-order-form-input-spacing",label:"Nachricht (Bitte Ermässigungsansprüche hier anbringen)",name:"order-message",placeholder:"Erweiterte Details hier angeben"}),e("div",Vt,[i(j,{variant:"outline",size:"base",required:!1},{default:z(()=>[i(X,{required:!1,size:"base",type:"outline",name:"radio-delivery-address",value:"matching delivery address",label:"Lieferadresse ist mit Rechnungsadresse identisch.",checked:!I.value,onChange:n=>{n.target.checked?I.value=!1:I.value=!0}},null,8,["checked","onChange"])]),_:1})]),I.value?(c(),d("div",At,[r[6]||(r[6]=e("h3",{class:"shopping__cart-order-form-delivery-address-title"}," Lieferadresse ",-1)),e("div",Pt,[e("div",Dt,[i(h,{required:t.delivery.lastName.mandatory,label:"Name",placeholder:"Name",messageType:"error",value:t.delivery.lastName.value,onInput:n=>g("delivery","lastName",n.target.value),message:t.delivery.lastName.touched&&!t.delivery.lastName.valid?"Bitte geben Sie einen Namen an.":""},null,8,["required","value","onInput","message"]),i(h,{required:t.delivery.firstName.mandatory,label:"Vorname",placeholder:"Vorname",messageType:"error",value:t.delivery.firstName.value,onInput:n=>g("delivery","firstName",n.target.value),message:t.delivery.firstName.touched&&!t.delivery.firstName.valid?"Bitte geben Sie einen Vornamen an.":""},null,8,["required","value","onInput","message"])]),e("div",Ht,[i(h,{class:"shopping__cart-order-form-input-spacing",required:t.delivery.org.mandatory,label:"Organisation",placeholder:"Organisation",messageType:"error",value:t.delivery.org.value,onInput:n=>g("delivery","org",n.target.value),message:t.delivery.org.touched&&!t.delivery.org.valid?"Die Eingabe ist ungültig. Bitte überprüfen Sie Ihre Eingabe.":""},null,8,["required","value","onInput","message"]),i(h,{class:"shopping__cart-order-form-input-spacing",required:t.delivery.street.mandatory,label:"Strasse / Nr.",placeholder:"Strasse  & Hausnummer",messageType:"error",value:t.delivery.street.value,onInput:n=>g("delivery","street",n.target.value),message:t.delivery.street.touched&&!t.delivery.street.valid?"Bitte geben Sie eine Strasse und Hausnummer an.":""},null,8,["required","value","onInput","message"])]),e("div",Mt,[i(h,{class:"shopping__cart-order-form-input-spacing",required:t.delivery.postOffice.mandatory,label:"Postfach",placeholder:"Postfach",messageType:"error",value:t.delivery.postOffice.value,onInput:n=>g("delivery","postOffice",n.target.value),message:t.delivery.postOffice.touched&&!t.delivery.postOffice.valid?"Die Eingabe ist ungültig. Bitte überprüfen Sie Ihre Eingabe.":""},null,8,["required","value","onInput","message"]),i(h,{class:"shopping__cart-order-form-input-spacing",required:t.delivery.zip.mandatory,label:"Postleitzahl",placeholder:"Postleitzahl",messageType:"error",value:t.delivery.zip.value,onInput:n=>g("delivery","zip",n.target.value),message:t.delivery.zip.touched&&!t.delivery.zip.valid?"Bitte geben Sie eine Postleitzahl an.":""},null,8,["required","value","onInput","message"])]),e("div",Wt,[i(h,{class:"shopping__cart-order-form-input-spacing",required:t.delivery.city.mandatory,label:"Ort",placeholder:"Ort",messageType:"error",value:t.delivery.city.value,onInput:n=>g("delivery","city",n.target.value),message:t.delivery.city.touched&&!t.delivery.city.valid?"Bitte geben Sie eine Ortschaft an.":""},null,8,["required","value","onInput","message"]),i(G,{class:"shopping__cart-order-form-input-spacing",required:t.delivery.country.mandatory,variant:"outline",size:"base",label:"Land",messageType:"error",message:t.delivery.country.touched&&!t.delivery.country.valid?"Bitte geben Sie ein Land an.":"",onSelect:n=>g("delivery","country",n)},{default:z(()=>r[5]||(r[5]=[e("option",{selected:"",disabled:""},"Land auswählen",-1),e("option",{value:"CH"},"Schweiz",-1),e("option",{value:"DE"},"Deutschland",-1),e("option",{value:"AT"},"Österreich",-1),e("option",{value:"FR"},"Frankreich",-1),e("option",{value:"IT"},"Italien",-1)])),_:1},8,["required","message","onSelect"])])])])):C("",!0),e("div",Rt,[i(E,{class:"shopping__cart-button",variant:"outline-negative",size:"base",label:"Nächster Schritt",ariaLabel:"Nächster Schritt",fullWidth:H.value,onEmitClick:ce},null,8,["fullWidth"])])]),_:1})])],10,$t)]),e("li",jt,[e("button",{id:N("shopping-cart-drawer-checkout-button"),class:k(["accordion__button",{active:o.value===3}]),onClick:r[2]||(r[2]=n=>O(3))},[i(B,{step:3,isActive:l.value===3},null,8,["isActive"]),e("h2",Gt,m(a.cartCheckoutTitle),1),i(w,{icon:"ChevronDown",size:"xl",class:"accordion__arrow"})],10,Kt),e("div",{id:N("shopping-cart-drawer-checkout"),class:k(["accordion__drawer",{active:o.value===3}])},[e("div",Zt,[e("div",Ut,[e("ul",Qt,[e("li",null,[i($,{type:"view",image:{src:"images/publication-cover.png",alt:"publication-cover"},title:"Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)",itemPrice:"Preis pro Stück: CHF 12.00",price:"CHF 12.00",removeLabel:"Entfernen",editLabel:"Editieren",editTriggered:V})]),e("li",null,[i($,{type:"view",title:"Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)",itemPrice:"Preis pro Stück: CHF 12.00",price:"CHF 12.00",removeLabel:"Entfernen",editLabel:"Editieren",editTriggered:V})]),e("li",null,[i($,{type:"view",image:{src:"images/publication-cover.png",alt:"publication-cover"},title:"Pensionskassenstatistik - Kennzahlen 2018-2022 (554-2200)",itemPrice:"Preis pro Stück: CHF 12.00",price:"CHF 12.00",removeLabel:"Entfernen",editLabel:"Editieren",editTriggered:V})])]),e("div",Xt,[e("div",Yt,[r[8]||(r[8]=e("h3",{class:"h3 shopping__cart-summary-box-title"}," Rechnungsadresse ",-1)),i(be,{address1:"Max Mustermann",street:"Enikonstrasse 3",zip:"6331",city:"Hünenberg",country:"Schweiz"})]),r[9]||(r[9]=e("div",{class:"box shopping__cart-delivery-address-container"},[e("h3",{class:"h3 shopping__cart-summary-box-title"}," Lieferadresse "),e("p",null,"Entspricht der Rechnungsaddresse")],-1)),i(ae,{title:"Gesamtsumme",subTotalTitle:"Zwischensumme",subTotal:"CHF 36.00",totalTitle:"Gesamtsumme (exkl. MwSt.)",total:"CHF 36.00",orderButtonText:"Jetzt bestellen",orderButtonAriaLabel:"Jetzt bestellen",agreementText:" Mit Ihrer Bestellung erklären Sie sich mit unseren <a class='link' href='https://www.google.ch'>Datenschutzbestimmungen und AGB </a> einverstanden",onNextStep:r[3]||(r[3]=n=>oe())})])])])],10,Jt)])])]))]))}});ie.__docgenInfo={exportName:"default",displayName:"ShoppingCart",description:"",tags:{},props:[{name:"cartTitle",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Shopping cart'"}},{name:"cartOverviewTitle",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Shopping cart'"}},{name:"cartAddressTitle",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Billing address & delivery address'"}},{name:"cartCheckoutTitle",type:{name:"string"},defaultValue:{func:!0,value:"() => 'Submit order'"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/components/ShoppingCart.vue"]};const aa={id:"main-header"},ia={id:"main-content"},na={id:"main-footer",class:"footer"},ne=x({__name:"detailPageShoppingCart",setup(a){const p=ze();return(o,l)=>(c(),d("div",null,[i(we,{isMobileMenuOpen:ye(p).mobileMenuIsOpen},null,8,["isMobileMenuOpen"]),e("header",aa,[l[0]||(l[0]=e("a",{href:"#main-content",class:"skip-to-content"},"Skip to main content",-1)),i($e,{isOpen:!1}),i(qe,{shoppingCartAriaLabel:"Warenkorb: Es hat <amount> Artikel in Ihrem Warenkorb.",shoppingCartAmount:3,shoppingCartLink:"/?path=/docs/pages-detail-shopping-cart--example",shoppingCartTarget:"_blank",shoppingCartLabel:"Warenkorb"}),i(Ce,{showActiveNavigation:!1}),i(Ne,{showActiveNavigation:!1})]),e("main",ia,[i(ie,{cartOverviewTitle:"Ihr Warenkorb",cartAddressTitle:"Rechnungsadresse & Lieferadresse",cartCheckoutTitle:"Bestellung übermitteln",cartTitle:"Ihre Bestellübersicht"})]),e("footer",na,[i(xe),i(Ie)])]))}});ne.__docgenInfo={exportName:"default",displayName:"detailPageShoppingCart",description:"",tags:{},sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/pages/detailPageShoppingCart.vue"]};const ra={title:"Pages/Detail Shopping Cart",component:ne,argTypes:{isOpen:{name:"Is open",control:{type:"boolean"}}}},q={args:{isOpen:!1}};var J,Z,U;q.parameters={...q.parameters,docs:{...(J=q.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    isOpen: false
  }
}`,...(U=(Z=q.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};const sa=["Example"],xa=Object.freeze(Object.defineProperty({__proto__:null,Example:q,__namedExportsOrder:sa,default:ra},Symbol.toStringTag,{value:"Module"}));export{xa as D,q as E};
