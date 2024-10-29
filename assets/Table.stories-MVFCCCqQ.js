import{s as h,q as v,c as r,b as e,A as y,z as x,x as w,o as i}from"./vue.esm-bundler-8gVuwTo0.js";import{_ as S}from"./TableSortable-BrwTs0Le.js";const z={class:"table-wrapper"},C={key:0},f=h({__name:"Table",props:{variant:{type:String,validator:t=>["compact","default"].includes(t),default:()=>{}},caption:{type:String,default:()=>""},displayCaption:{type:Boolean,default:()=>!0},zebra:{type:Boolean,default:()=>!1}},setup(t){const s=t,g=v(()=>{let n="table ";return s.variant&&(n+=`table--${s.variant} `),s.displayCaption&&(n+="table--caption "),s.zebra&&(n+="table--zebra "),n});return(n,a)=>(i(),r("div",z,[e("table",{class:w(g.value)},[t.caption?(i(),r("caption",C,y(t.caption),1)):x("",!0),a[0]||(a[0]=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Name"),e("th",{scope:"col"},"Job"),e("th",{scope:"col"},"E-mail"),e("th",{scope:"col"},"Trend"),e("th",{scope:"col",class:"text-right"},"Points")])],-1)),a[1]||(a[1]=e("tbody",null,[e("tr",null,[e("th",{scope:"row"},"Jane Cooper"),e("td",null,"Regional Paradigm Technician"),e("td",null,"jane.cooper@example.com"),e("td",null,[e("svg",{viewBox:"0 0 24 24",class:"icon icon--lg"},[e("path",{d:"m20.2 14.3-2.1-7.9-7.9-2.1-.1.7 7 1.9-10.7 10.7.5.5 10.7-10.7 1.9 7z"})])]),e("td",{class:"text-right"},"70")]),e("tr",null,[e("th",{scope:"row"},"Cody Fisher"),e("td",null,"Product Directives Officer"),e("td",null,"cody.fisher@example.com"),e("td",null,[e("svg",{viewBox:"0 0 24 24",class:"icon icon--lg"},[e("path",{d:"m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z"})])]),e("td",{class:"text-right"},"60")]),e("tr",null,[e("th",{scope:"row"},"Esther Howard"),e("td",null,"Forward Response Developer"),e("td",null,"esther.howard@example.com"),e("td",null,[e("svg",{viewBox:"0 0 24 24",class:"icon icon--lg"},[e("path",{d:"m10.3 20 7.9-2.1 2.1-7.9-.7-.2-1.9 7-10.8-10.7-.5.6 10.7 10.7-7 1.9z"})])]),e("td",{class:"text-right"},"50")]),e("tr",null,[e("th",{scope:"row"},"Jenny Wilson"),e("td",null,"Central Security Manager"),e("td",null,"jenny.wilson@example.com"),e("td",null,[e("svg",{viewBox:"0 0 24 24",class:"icon icon--lg"},[e("path",{d:"m20.2 14.3-2.1-7.9-7.9-2.1-.1.7 7 1.9-10.7 10.7.5.5 10.7-10.7 1.9 7z"})])]),e("td",{class:"text-right"},"40")]),e("tr",null,[e("th",{scope:"row"},"Kristin Watson"),e("td",null,"Lead Implementation Liaison"),e("td",null,"kristin.watson@example.com"),e("td",null,[e("svg",{viewBox:"0 0 24 24",class:"icon icon--lg"},[e("path",{d:"m20.2 14.3-2.1-7.9-7.9-2.1-.1.7 7 1.9-10.7 10.7.5.5 10.7-10.7 1.9 7z"})])]),e("td",{class:"text-right"},"30")]),e("tr",null,[e("th",{scope:"row"},"Cameron Williamson"),e("td",null,"Internal Applications Engineer"),e("td",null,"cameron.williamson@example.com"),e("td",null,[e("svg",{viewBox:"0 0 24 24",class:"icon icon--lg"},[e("path",{d:"m20.2 14.3-2.1-7.9-7.9-2.1-.1.7 7 1.9-10.7 10.7.5.5 10.7-10.7 1.9 7z"})])]),e("td",{class:"text-right"},"20")])],-1)),a[2]||(a[2]=e("tfoot",null,[e("tr",null,[e("th",{scope:"row"},"Total"),e("td",{colspan:"4",class:"text-right"},"270")])],-1))],2)]))}});f.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!0,value:"() => undefined"},values:["compact","default"]},{name:"caption",type:{name:"string"},defaultValue:{func:!0,value:"() => ''"}},{name:"displayCaption",type:{name:"boolean"},defaultValue:{func:!0,value:"() => true"}},{name:"zebra",type:{name:"boolean"},defaultValue:{func:!0,value:"() => false"}}],sourceFiles:["/home/runner/work/nwgl-designsystem/nwgl-designsystem/app/components/ch/demo/Table.vue"]};const T={title:"Components/Table",component:f,argTypes:{variant:{table:{type:{summary:["string: default, compact"]}},options:["default","compact"],control:{type:"select"}}}},l={args:{variant:"default",caption:"Short description of the table content for better accessibility",displayCaption:!0,zebra:!1}},o={render:t=>({components:{TableSortable:S},setup:()=>({args:t}),template:'<TableSortable v-bind="args" />'}),args:{variant:"default",caption:"Short description of the table content for better accessibility",displayCaption:!1,zebra:!0,id:"1"}};var c,p,d;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    caption: 'Short description of the table content for better accessibility',
    displayCaption: true,
    zebra: false
  }
}`,...(d=(p=l.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TableSortable
    },
    setup: () => ({
      args
    }),
    template: \`<TableSortable v-bind="args" />\`
  }),
  args: {
    variant: 'default',
    caption: 'Short description of the table content for better accessibility',
    displayCaption: false,
    zebra: true,
    id: '1'
  }
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const _=["Example","ExampleSortable"],V=Object.freeze(Object.defineProperty({__proto__:null,Example:l,ExampleSortable:o,__namedExportsOrder:_,default:T},Symbol.toStringTag,{value:"Module"}));export{l as E,V as T,o as a};
