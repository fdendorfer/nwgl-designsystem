import{_ as S}from"./Radio-CdCM-kSp.js";const x={title:"Components/Form/Input Radio",component:S,argTypes:{theme:{table:{type:{summary:["string?: light, dark"]}},options:[null,"light","dark"],control:{type:"select"}},required:{control:{type:"boolean"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},message:{},messageType:{table:{type:{summary:["string: error, warning, success, info"]}},options:["error","warning","success","info"],control:{type:"select"}}}},e={render:q=>({components:{Radio:S},setup:()=>({args:q}),template:`
      <div>
        <Radio v-bind="args" />
      </div>
    `}),args:{theme:"light",size:"base",label:"Label",name:"radio-name",id:"radio-id"}},a={render:()=>({template:'<input type="radio" class="input--base" data-default-theme="dark" />'})},r={render:()=>({template:`
      <input type="radio" class="input--base" disabled />
      <input type="radio" class="input--base" disabled checked />
      <input type="radio" class="input--base" disabled data-default-theme="dark" />
      <input type="radio" class="input--base" disabled checked data-default-theme="dark" />
    `})},s={render:()=>({template:`
      <input type="radio" class="input--sm" value="input--sm" />
      <input type="radio" class="input--base" value="input--base" />
      <input type="radio" class="input--lg" value="input--lg" />
    `})},i={render:()=>({template:`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" class="input" value="value-0" />

          <label for="radio-0" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" class="input" value="value-1" />

          <label for="radio-1" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-2" name="radio-group-1" class="input" value="value-2" />

          <label for="radio-2" class="">
            Label for value three
          </label>
        </div>
      </fieldset>
    `})},o={render:()=>({template:`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-10" name="radio-group-2" class="input input--error" value="value-0" />

          <label for="radio-10" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-11" name="radio-group-2" class="input input--error" value="value-1" />

          <label for="radio-11" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-12" name="radio-group-2" class="input input--error" value="value-2" />

          <label for="radio-12" class="">
            Label for value three
          </label>
        </div>

        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </fieldset>
    `})};var n,l,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Radio
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        <Radio v-bind="args" />
      </div>
    \`
  }),
  args: {
    theme: 'light',
    size: 'base',
    label: 'Label',
    name: 'radio-name',
    id: 'radio-id'
  }
}`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var t,p,u;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    template: \`<input type="radio" class="input--base" data-default-theme="dark" />\`
  })
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,m,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="radio" class="input--base" disabled />
      <input type="radio" class="input--base" disabled checked />
      <input type="radio" class="input--base" disabled data-default-theme="dark" />
      <input type="radio" class="input--base" disabled checked data-default-theme="dark" />
    \`
  })
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,_,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <input type="radio" class="input--sm" value="input--sm" />
      <input type="radio" class="input--base" value="input--base" />
      <input type="radio" class="input--lg" value="input--lg" />
    \`
  })
}`,...(v=(_=s.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var f,y,R;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-0" name="radio-group-1" class="input" value="value-0" />

          <label for="radio-0" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-1" name="radio-group-1" class="input" value="value-1" />

          <label for="radio-1" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-2" name="radio-group-1" class="input" value="value-2" />

          <label for="radio-2" class="">
            Label for value three
          </label>
        </div>
      </fieldset>
    \`
  })
}`,...(R=(y=i.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var h,k,L;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <fieldset class="form__group">
        <legend class="form__group__legend text--asterisk">
          Radio group legend <span class="sr-only">required</span>
        </legend>

        <div class="form__group__radio">
          <input type="radio" id="radio-10" name="radio-group-2" class="input input--error" value="value-0" />

          <label for="radio-10" class="">
            Label for value one
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-11" name="radio-group-2" class="input input--error" value="value-1" />

          <label for="radio-11" class="">
            Label for value two
          </label>
        </div>

        <div class="form__group__radio">
          <input type="radio" id="radio-12" name="radio-group-2" class="input input--error" value="value-2" />

          <label for="radio-12" class="">
            Label for value three
          </label>
        </div>

        <div class="badge badge--sm badge--error">
          This field is required
        </div>
      </fieldset>
    \`
  })
}`,...(L=(k=o.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const w=["Example","NegativeRadio","DisabledRadio","SizesRadio","RequiredRadio","MessageRadio"],T=Object.freeze(Object.defineProperty({__proto__:null,DisabledRadio:r,Example:e,MessageRadio:o,NegativeRadio:a,RequiredRadio:i,SizesRadio:s,__namedExportsOrder:w,default:x},Symbol.toStringTag,{value:"Module"}));export{r as D,e as E,o as M,a as N,T as R,s as S,i as a};
