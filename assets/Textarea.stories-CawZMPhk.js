import{_ as k}from"./Textarea-D7S8Vp4b.js";const q={title:"Components/Form/Textarea",component:k,argTypes:{theme:{table:{type:{summary:["string?: light, dark"]}},options:[null,"light","dark"],control:{type:"select"}},required:{control:{type:"boolean"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:w=>({components:{Textarea:k},setup:()=>({args:w}),template:'<Textarea v-bind="args" />'}),args:{theme:"light",size:"base",label:"Label",name:"textarea-name",id:"textarea-id",placeholder:"Placeholder"}},a={render:()=>({template:'<textarea class="input--base" data-default-theme="dark" />'})},t={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 50%">
        <textarea class="input--base" disabled>Disabled</textarea>
        <textarea class="input--base" disabled data-default-theme="dark">Disabled and negative</textarea>
      </div>
    `})},r={render:()=>({template:`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 90%">
        <textarea class="input--sm">Small</textarea>
        <textarea class="input--base">Default</textarea>
        <textarea class="input--lg">Large</textarea>
      </div>
    `})},s={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--base" required />
      </div>
    `})},n={render:()=>({template:`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--base input--error" required />
        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </div>
    `})};var l,i,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Textarea
    },
    setup: () => ({
      args
    }),
    template: \`<Textarea v-bind="args" />\`
  }),
  args: {
    theme: 'light',
    size: 'base',
    label: 'Label',
    name: 'textarea-name',
    id: 'textarea-id',
    placeholder: 'Placeholder'
  }
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var o,p,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    template: \`<textarea class="input--base" data-default-theme="dark" />\`
  })
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 50%">
        <textarea class="input--base" disabled>Disabled</textarea>
        <textarea class="input--base" disabled data-default-theme="dark">Disabled and negative</textarea>
      </div>
    \`
  })
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,g,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display: flex; flex-direction: row; gap: 5pt; width: 90%">
        <textarea class="input--sm">Small</textarea>
        <textarea class="input--base">Default</textarea>
        <textarea class="input--lg">Large</textarea>
      </div>
    \`
  })
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,_;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--base" required />
      </div>
    \`
  })
}`,...(_=(y=s.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var T,h,S;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__input">
        <label for="my-id" class="text--base text--asterisk">
          Your message
        </label>
        <textarea class="input--base input--error" required />
        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </div>
    \`
  })
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const D=["Example","NegativeTextarea","DisabledTextarea","SizesTextarea","RequiredTextarea","MessagesTextarea"],E=Object.freeze(Object.defineProperty({__proto__:null,DisabledTextarea:t,Example:e,MessagesTextarea:n,NegativeTextarea:a,RequiredTextarea:s,SizesTextarea:r,__namedExportsOrder:D,default:q},Symbol.toStringTag,{value:"Module"}));export{t as D,e as E,n as M,a as N,s as R,r as S,E as T};
