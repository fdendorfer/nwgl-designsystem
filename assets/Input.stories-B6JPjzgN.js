import{_ as q}from"./Input-CDaIcUOV.js";const S={title:"Components/Form/Input",component:q,argTypes:{type:{table:{type:{summary:["string: color, date, datetime-local, email, file, month, number, password, range, search, tel, text, time, url, week, submit"]}},options:["color","date","datetime-local","email","file","month","number","password","range","search","tel","text","time","url","week","submit"],control:{type:"select"}},required:{control:{type:"boolean"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},theme:{table:{type:{summary:["string?: light, dark"]}},options:[null,"light","dark"],control:{type:"select"}},label:{},hideLabel:{control:{type:"boolean"}},message:{},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:k=>({components:{Input:q},setup:()=>({args:k}),template:'<Input v-bind="args" />'}),args:{type:"outline",size:"base",label:"Label",hideLabel:!1,placeholder:"Placeholder",value:void 0,id:"my-id",min:void 0,max:void 0,step:void 0,message:void 0,messageType:"error",theme:null}},a={render:()=>({template:'<input class="input--base" value="Input text" data-default-theme="dark" />'})},t={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--base" disabled value="Input text" />
        <input class="input--base" data-default-theme="dark" disabled value="Input text" />
      </div>
    `})},s={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--sm" value="input--sm" />
        <input class="input--base" value="input--base" />
        <input class="input--lg" value="input--lg" />
      </div>
    `})},n={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--base" required />
      </div>
    `})},r={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--base input--error" required />
        <div class="badge badge--sm badge--error">This field is required</div>
      </div>
    `})};var l,i,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Input
    },
    setup: () => ({
      args
    }),
    template: '<Input v-bind="args" />'
  }),
  args: {
    type: 'outline',
    size: 'base',
    label: 'Label',
    hideLabel: false,
    placeholder: 'Placeholder',
    value: undefined,
    id: 'my-id',
    min: undefined,
    max: undefined,
    step: undefined,
    message: undefined,
    messageType: 'error',
    theme: null
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,o,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    template: '<input class="input--base" value="Input text" data-default-theme="dark" />'
  })
}`,...(u=(o=a.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var m,c,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--base" disabled value="Input text" />
        <input class="input--base" data-default-theme="dark" disabled value="Input text" />
      </div>
    \`
  })
}`,...(b=(c=t.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 10pt; width: 90%" >
        <input class="input--sm" value="input--sm" />
        <input class="input--base" value="input--base" />
        <input class="input--lg" value="input--lg" />
      </div>
    \`
  })
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,h,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--base" required />
      </div>
    \`
  })
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var _,I,w;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Name <span class="sr-only">required</span>
        </label>
        <input type="text" id="my-id" name="my-id" placeholder="Placeholder" class="input--base input--error" required />
        <div class="badge badge--sm badge--error">This field is required</div>
      </div>
    \`
  })
}`,...(w=(I=r.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};const N=["Example","NegativeInput","DisabledInput","SizesInput","RequiredInput","MessagesInput"],T=Object.freeze(Object.defineProperty({__proto__:null,DisabledInput:t,Example:e,MessagesInput:r,NegativeInput:a,RequiredInput:n,SizesInput:s,__namedExportsOrder:N,default:S},Symbol.toStringTag,{value:"Module"}));export{t as D,e as E,T as I,r as M,a as N,n as R,s as S};
