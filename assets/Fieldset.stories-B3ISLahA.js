import{_ as i}from"./Fieldset-B8exPgiI.js";import{_ as f}from"./Checkbox-GroUF7uh.js";import{_ as h}from"./Radio-CdCM-kSp.js";const y={title:"Components/Form/Fieldset",component:i,argTypes:{theme:{table:{table:{type:{summary:["string?: light, dark"]}},options:[null,"light","dark"],control:{type:"select"}},options:["light","dark"],control:{type:"select"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},legend:{table:{category:"props"}},message:{},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}},required:{control:{type:"boolean"}}}},e={render:o=>({components:{Fieldset:i,Radio:h},setup:()=>({args:o}),template:`
      <Fieldset v-bind="args">
          <Radio id="radio-0" name="radio-group-1" label="Label for value one" value="value-1" :theme="args.theme" :size="args.size" :required="args.required" :messageType="args.messageType" />
          <Radio id="radio-1" name="radio-group-1" label="Label for value two" value="value-2" :theme="args.theme" :size="args.size" :required="args.required" :messageType="args.messageType" />
      </Fieldset>
    `}),args:{required:!1,legend:"Radio button group legend"}},r={render:o=>({components:{Fieldset:i,Checkbox:f},setup:()=>({args:o}),template:`
      <Fieldset v-bind="args" >
        <Checkbox id="checkbox-0" name="checkbox-group-1" label="Label for value one" value="value-1" :theme="args.theme" :size="args.size" :required="args.required" :messageType="args.messageType" />
        <Checkbox id="checkbox-1" name="checkbox-group-1" label="Label for value two" value="value-2" :theme="args.theme" :size="args.size" :required="args.required" :messageType="args.messageType" />
      </Fieldset>
    `}),args:{required:!1,legend:"Checkbox group legend"}},a={render:()=>({template:`
      <fieldset class="form__group" data-default-theme="light">
        <legend class="form__group__legend text--asterisk">
          Radio button group legend <span class="sr-only">required</span>
        </legend>
        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" required="required" class="input" value="value-0" />
          <label for="radio-0">Label for value one</label>
        </div>
        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" required="required" class="input" value="value-1" />
          <label for="radio-1">Label for value two</label>
        </div>
      </fieldset>
    `})},s={render:()=>({template:`
      <fieldset class="form__group" data-default-theme="light">
        <legend class="form__group__legend text--asterisk">
          Radio button group legend <span class="sr-only">required</span>
        </legend>
        <div class="form__group__radio">
          <input type="radio" id="radio-3" name="radio-group-2" required="required" class="input input--error" value="value-0" />
          <label for="radio-3">Label for value one</label>
        </div>
        <div class="form__group__radio">
          <input type="radio" id="radio-4" name="radio-group-2" required="required" class="input input--error" value="value-1" />
          <label for="radio-4">Label for value two</label>
        </div>
        <div class="badge badge--sm badge--error">Error message, after last radio item</div>
      </fieldset>
    `})};var l,d,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Fieldset,
      Radio
    },
    setup: () => ({
      args
    }),
    template: \`
      <Fieldset v-bind="args">
          <Radio id="radio-0" name="radio-group-1" label="Label for value one" value="value-1" :theme="args.theme" :size="args.size" :required="args.required" :messageType="args.messageType" />
          <Radio id="radio-1" name="radio-group-1" label="Label for value two" value="value-2" :theme="args.theme" :size="args.size" :required="args.required" :messageType="args.messageType" />
      </Fieldset>
    \`
  }),
  args: {
    required: false,
    legend: 'Radio button group legend'
  }
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var n,u,g;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Fieldset,
      Checkbox
    },
    setup: () => ({
      args
    }),
    template: \`
      <Fieldset v-bind="args" >
        <Checkbox id="checkbox-0" name="checkbox-group-1" label="Label for value one" value="value-1" :theme="args.theme" :size="args.size" :required="args.required" :messageType="args.messageType" />
        <Checkbox id="checkbox-1" name="checkbox-group-1" label="Label for value two" value="value-2" :theme="args.theme" :size="args.size" :required="args.required" :messageType="args.messageType" />
      </Fieldset>
    \`
  }),
  args: {
    required: false,
    legend: 'Checkbox group legend'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <fieldset class="form__group" data-default-theme="light">
        <legend class="form__group__legend text--asterisk">
          Radio button group legend <span class="sr-only">required</span>
        </legend>
        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" required="required" class="input" value="value-0" />
          <label for="radio-0">Label for value one</label>
        </div>
        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" required="required" class="input" value="value-1" />
          <label for="radio-1">Label for value two</label>
        </div>
      </fieldset>
    \`
  })
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var b,v,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <fieldset class="form__group" data-default-theme="light">
        <legend class="form__group__legend text--asterisk">
          Radio button group legend <span class="sr-only">required</span>
        </legend>
        <div class="form__group__radio">
          <input type="radio" id="radio-3" name="radio-group-2" required="required" class="input input--error" value="value-0" />
          <label for="radio-3">Label for value one</label>
        </div>
        <div class="form__group__radio">
          <input type="radio" id="radio-4" name="radio-group-2" required="required" class="input input--error" value="value-1" />
          <label for="radio-4">Label for value two</label>
        </div>
        <div class="badge badge--sm badge--error">Error message, after last radio item</div>
      </fieldset>
    \`
  })
}`,...(_=(v=s.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const q=["WithRadio","WithCheckboxes","RequiredFieldset","MessagesFieldset"],T=Object.freeze(Object.defineProperty({__proto__:null,MessagesFieldset:s,RequiredFieldset:a,WithCheckboxes:r,WithRadio:e,__namedExportsOrder:q,default:y},Symbol.toStringTag,{value:"Module"}));export{T as F,s as M,a as R,e as W,r as a};
