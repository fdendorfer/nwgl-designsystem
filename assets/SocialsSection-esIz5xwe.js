import{s as u,q as m,K as h,c as o,b as e,x,A as d,F as y,C as w,o as s,u as _,v as l,D as c,z as b}from"./vue.esm-bundler-8gVuwTo0.js";import{_ as v}from"./Card-D2iaOmVk.js";import{_ as k}from"./Btn-fOJaYpuD.js";import{_ as L}from"./SvgIcon-Cb4aIpDE.js";const S={class:"section bg--secondary-50"},A={class:"container"},F={class:"grid socials__grid gap--responsive"},T={class:"socials__info"},U={class:"section__title"},Y=["innerHTML"],q=["innerHTML"],z={key:1,class:"socials__youtube ratio ratio--16/9"},C=["src"],R={key:2,class:"socials__instagram"},B=["data-instgrm-permalink"],V={style:{padding:"16px"}},D=["href"],M={style:{color:"#c9c8cd","font-family":"Arial, sans-serif","font-size":"14px","line-height":"17px","margin-bottom":"0","margin-top":"8px",overflow:"hidden",padding:"8px 0 7px","text-align":"center","text-overflow":"ellipsis","white-space":"nowrap"}},N=["href"],X={key:3,class:"socials__facebook"},H={key:4,class:"socials__linkedin"},I=u({__name:"SocialsSection",props:{sectionTitle:{type:String,require:!0,default:()=>""},sectionDesc:{type:String,required:!0,default:()=>""},feeds:{type:Array,required:!0,default:()=>[]}},setup(a){const r=a,p=m(()=>{let i="socials ";return r.feeds.length===1?i+="socials--items-1":r.feeds.length===2?i+="socials--items-2 ":r.feeds.length===3?i+="socials--items-3 ":r.feeds.length===4?i+="socials--items-4 ":r.feeds.length===5?i+="socials--items-5 ":r.feeds.length===6&&(i+="socials--items-6 "),i}),f=function(i){return typeof i!="string"?"":i.charAt(0).toUpperCase()+i.slice(1)};return h(()=>{window.twttr&&window.twttr.widgets.load()}),(i,n)=>(s(),o("section",S,[e("div",A,[e("div",{class:x(p.value)},[e("div",F,[e("div",T,[e("h2",U,d(a.sectionTitle),1),e("p",{innerHTML:a.sectionDesc},null,8,Y)]),(s(!0),o(y,null,w(a.feeds,(t,g)=>(s(),_(v,{key:t.title+g,type:t.type=="twitter"?"twitter":"default"},{header:l(()=>[c(L,{icon:f(t.type),size:"xl",class:"mr-2"},null,8,["icon"]),e("div",null,d(t.title),1)]),description:l(()=>[t.type=="twitter"?(s(),o("div",{key:0,class:"socials__twitter",innerHTML:t.feedURL},null,8,q)):t.type=="youtube"?(s(),o("div",z,[e("iframe",{width:"560",height:"315",src:t.feedURL,title:"YouTube video player",allowfullscreen:""},null,8,C)])):t.type=="instagram"?(s(),o("div",R,[e("blockquote",{class:"instagram-media","data-instgrm-permalink":t.feedURL+"?utm_source=ig_embed&utm_campaign=loading","data-instgrm-version":"14",style:{background:"#fff",border:"0","border-radius":"3px","box-shadow":`0 0 1px 0 rgba(0, 0, 0, 0.5),
                      0 1px 10px 0 rgba(0, 0, 0, 0.15)`,margin:"1px",padding:"0",width:"calc(100% - 2px)"}},[e("div",V,[e("a",{href:t.feedURL+"?utm_source=ig_embed&utm_campaign=loading",style:{background:"#ffffff","line-height":"0",padding:"0 0","text-align":"center","text-decoration":"none",width:"100%"},target:"_blank"},n[0]||(n[0]=[e("div",{style:{display:"flex","flex-direction":"row","align-items":"center"}},[e("div",{style:{display:"flex","flex-direction":"column","flex-grow":"1","justify-content":"center"}},[e("div",{style:{"background-color":"#f4f4f4","border-radius":"4px","flex-grow":"0",height:"14px","margin-bottom":"6px",width:"100px"}}),e("div",{style:{"background-color":"#f4f4f4","border-radius":"4px","flex-grow":"0",height:"14px",width:"60px"}})])],-1),e("div",{style:{padding:"19% 0"}},null,-1),e("div",{style:{display:"block",height:"50px",margin:"0 auto 12px",width:"50px"}},null,-1),e("div",{style:{"padding-top":"8px"}},[e("div",{style:{color:"#3897f0","font-family":"Arial, sans-serif","font-size":"14px","font-style":"normal","font-weight":"550","line-height":"18px"}}," Sieh dir diesen Beitrag auf Instagram an ")],-1),e("div",{style:{padding:"12.5% 0"}},null,-1),e("div",{style:{display:"flex","flex-direction":"row","margin-bottom":"14px","align-items":"center"}},[e("div",null,[e("div",{style:{"background-color":"#f4f4f4","border-radius":"50%",height:"12.5px",width:"12.5px",transform:"translateX(0px) translateY(7px)"}}),e("div",{style:{"background-color":"#f4f4f4",height:"12.5px",transform:`rotate(-45deg) translateX(3px)
                                translateY(1px)`,width:"12.5px","flex-grow":"0","margin-right":"14px","margin-left":"2px"}}),e("div",{style:{"background-color":"#f4f4f4","border-radius":"50%",height:"12.5px",width:"12.5px",transform:"translateX(9px) translateY(-18px)"}})]),e("div",{style:{"margin-left":"8px"}},[e("div",{style:{"background-color":"#f4f4f4","border-radius":"50%","flex-grow":"0",height:"20px",width:"20px"}}),e("div",{style:{width:"0",height:"0","border-top":"2px solid transparent","border-left":"6px solid #f4f4f4","border-bottom":"2px solid transparent",transform:`translateX(16px) translateY(-4px)
                                rotate(30deg)`}})]),e("div",{style:{"margin-left":"auto"}},[e("div",{style:{width:"0px","border-top":"8px solid #f4f4f4","border-right":"8px solid transparent",transform:"translateY(16px)"}}),e("div",{style:{"background-color":"#f4f4f4","flex-grow":"0",height:"12px",width:"16px",transform:"translateY(-4px)"}}),e("div",{style:{width:"0",height:"0","border-top":"8px solid #f4f4f4","border-left":"8px solid transparent",transform:"translateY(-4px) translateX(8px)"}})])],-1),e("div",{style:{display:"flex","flex-direction":"column","flex-grow":"1","justify-content":"center","margin-bottom":"24px"}},[e("div",{style:{"background-color":"#f4f4f4","border-radius":"4px","flex-grow":"0",height:"14px","margin-bottom":"6px",width:"224px"}}),e("div",{style:{"background-color":"#f4f4f4","border-radius":"4px","flex-grow":"0",height:"14px",width:"144px"}})],-1)]),8,D),e("p",M,[e("a",{href:t.feedURL+"?utm_source=ig_embed&utm_campaign=loading",style:{color:"#c9c8cd","font-family":"Arial, sans-serif","font-size":"14px","font-style":"normal","font-weight":"normal","line-height":"17px","text-decoration":"none"},target:"_blank"},null,8,N)])])],8,B)])):t.type=="facebook"?(s(),o("div",X,n[1]||(n[1]=[e("iframe",{src:"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fswisstopo%2Fvideos%2F5455503121148000%2F&show_text=false&width=560&t=0",height:"314",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"},null,-1)]))):t.type=="linkedIn"?(s(),o("div",H,n[2]||(n[2]=[e("iframe",{src:"https://www.linkedin.com/embed/feed/update/urn:li:share:7080107855969705984",height:"632",frameborder:"0",allowfullscreen:"",title:"Eingebetteter Beitrag"},null,-1)]))):b("",!0)]),footerAction:l(()=>[c(k,{to:t.profileURL,variant:"outline","icon-pos":"only",icon:"ArrowUpRight",label:"Weiterlesen"},null,8,["to"])]),_:2},1032,["type"]))),128))])],2)])]))}});I.__docgenInfo={exportName:"default",displayName:"SocialsSection",description:"",tags:{},props:[{name:"sectionTitle",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"sectionDesc",type:{name:"string"},required:!0,defaultValue:{func:!0,value:"() => ''"}},{name:"feeds",type:{name:"Array<SocialsFeed>"},required:!0,defaultValue:{func:!0,value:"() => []"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/sections/SocialsSection.vue"]};export{I as _};
