import{_ as q}from"./Checkbox-GroUF7uh.js";const z={title:"Components/Form/Input Checkbox",component:q,argTypes:{theme:{table:{table:{type:{summary:["string?: light, dark"]}},options:[null,"light","dark"],control:{type:"select"}},options:["light","dark"],control:{type:"select"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},message:{},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:S=>({components:{Checkbox:q},setup:()=>({args:S}),template:`
      <div>
        <Checkbox v-bind="args" />
      </div>
    `}),args:{theme:"light",size:"base",label:"Label",name:"checkbox-name",id:"checkbox-id"}},s={render:()=>({template:`
      <input type="checkbox" class="input--base" data-default-theme="dark" />
    `})},a={render:()=>({template:`
      <input type="checkbox" class="input--base" disabled />
      <input type="checkbox" class="input--base" disabled checked />
      <input type="checkbox" class="input--base" disabled data-default-theme="dark" />
      <input type="checkbox" class="input--base" disabled checked data-default-theme="dark" />
    `})},t={render:()=>({template:`
      <input type="checkbox" class="input--sm" value="input--sm" />
      <input type="checkbox" class="input--base" value="input--base" />
      <input type="checkbox" class="input--lg" value="input--lg" />
    `})},r={render:()=>({template:`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id1" name="checkbox-name" required="required" class="input input--base" value="" />
        <label for="checkbox-id1" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
      </div>
    `})},n={render:()=>({template:`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id2" name="checkbox-name" required="required" class="input input--base input--error" value="" />
        <label for="checkbox-id2" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
        <div class="badge badge--sm badge--error">Error message</div>
      </div>
    `})};var c,o,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Checkbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        <Checkbox v-bind="args" />
      </div>
    \`
  }),
  args: {
    theme: 'light',
    size: 'base',
    label: 'Label',
    name: 'checkbox-name',
    id: 'checkbox-id'
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,l,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="checkbox" class="input--base" data-default-theme="dark" />
    \`
  })
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var b,u,m;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="checkbox" class="input--base" disabled />
      <input type="checkbox" class="input--base" disabled checked />
      <input type="checkbox" class="input--base" disabled data-default-theme="dark" />
      <input type="checkbox" class="input--base" disabled checked data-default-theme="dark" />
    \`
  })
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,k,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="checkbox" class="input--sm" value="input--sm" />
      <input type="checkbox" class="input--base" value="input--base" />
      <input type="checkbox" class="input--lg" value="input--lg" />
    \`
  })
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var g,y,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id1" name="checkbox-name" required="required" class="input input--base" value="" />
        <label for="checkbox-id1" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
      </div>
    \`
  })
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var _,f,C;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div class="form__group__checkbox">
        <input type="checkbox" id="checkbox-id2" name="checkbox-name" required="required" class="input input--base input--error" value="" />
        <label for="checkbox-id2" class="text--base text--asterisk">
          Label <span class="sr-only">required</span>
        </label>
        <div class="badge badge--sm badge--error">Error message</div>
      </div>
    \`
  })
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const E=["Example","NegativeCheckbox","DisabledInput","SizesCheckbox","RequiredCheckbox","MessagesCheckbox"],M=Object.freeze(Object.defineProperty({__proto__:null,DisabledInput:a,Example:e,MessagesCheckbox:n,NegativeCheckbox:s,RequiredCheckbox:r,SizesCheckbox:t,__namedExportsOrder:E,default:z},Symbol.toStringTag,{value:"Module"}));export{M as C,a as D,e as E,n as M,s as N,r as R,t as S};
