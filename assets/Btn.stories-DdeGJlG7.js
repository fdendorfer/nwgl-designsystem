import{_ as E}from"./Btn-CYIZucZM.js";const P={title:"Components/Button",component:E,argTypes:{variant:{table:{type:{summary:["string: outline, bare, filled, outline-negative, bare-negative, link, link-negative"]}},options:["outline","bare","filled","outline-negative","bare-negative","link","link-negative"],control:{type:"select"}},theme:{table:{type:{summary:["string?: light, dark"]}},options:[null,"light","dark"],control:{type:"select"}},size:{table:{type:{summary:["string: sm, base, lg"]}},options:["sm","base","lg"],control:{type:"select"}},icon:{table:{type:{summary:["string: ArrowRight, ArrowLeft, Checkmark"]}},options:["ArrowRight","ArrowLeft","Checkmark"],control:{type:"select"}},iconPos:{table:{type:{summary:["string: none, only, left, right"]}},options:["none","only","left","right"],control:{type:"select"}}}},t={args:{variant:"outline",size:"base",icon:"ArrowRight",iconPos:"none",label:"Button text"}},n={render:()=>({template:`
      <button type="button" class="btn btn--base btn--outline">
        <span class="btn__text">
          I am a button
        </span>
      </button>

      <a href="#" class="btn btn--base btn--outline">
        <span class="btn__text">
          I am a link
        </span>
      </a>`})},e={render:()=>({template:`
      <div style="display:flex; gap:1rem; padding:1rem;">
        <button type="button" class="btn btn--base btn--outline">
          <span class="btn__text">btn--outline</span>
        </button>

        <button type="button" class="btn btn--base btn--filled">
          <span class="btn__text">btn--filled</span>
        </button>

        <button type="button" class="btn btn--base btn--bare">
          <span class="btn__text">btn--bare</span>
        </button>

        <button type="button" class="btn btn--base btn--link">
          <span class="btn__text">btn--link</span>
        </button>
      </div>`})},s={render:()=>({template:`
      <button type="button" class="btn btn--base btn--outline-negative">
        <span class="btn__text">
          btn--outline-negative
        </span>
      </button>

      <button type="button" class="btn btn--base btn--bare-negative">
        <span class="btn__text">
          btn--bare-negative
        </span>
      </button>`})},a={render:()=>({template:`
      <button type="button" class="btn btn--outline btn--sm">
        <span class="btn__text">
          btn--sm
        </span>
      </button>

    <button type="button" class="btn btn--outline btn--base">
      <span class="btn__text">btn--base</span>
    </button>

      <button type="button" class="btn btn--outline btn--lg">
        <span class="btn__text">
          btn--lg
        </span>
      </button>`})},o={render:()=>({template:`
      <button type="button" class="btn btn--outline btn--base btn--icon-only">
        <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
          <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
        </svg>

        <span class="btn__text">Button text</span>
      </button>

      <button type="button" class="btn btn--outline btn--base btn--icon-left">
        <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
          <path d="m8.306 5.116-4.066 7.044 4.066 7.044.65-.375-3.633-6.294h15.187v-.75h-15.187l3.633-6.294z" />
        </svg>

        <span class="btn__text">icon-left</span>
      </button>`})},b={render:()=>({template:`
      <div>
        <button type="button" class="btn btn--link">
          <span class="btn__text">Button link</span>
        </button>

        <hr />

        <button type="button" class="btn btn--link btn--icon-right">
          <svg viewBox="0 0 24 24" class="btn__icon">
            <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
          </svg>

          <span class="btn__text">Button link with right icon</span>
        </button>

      </div>`})},l={parameters:{backgrounds:{default:"Dark"}},render:()=>({template:`
      <div>
        <button type="button" class="btn btn--link-negative">
          <svg viewBox="0 0 24 24" class="btn__icon">
            <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
          </svg>

          <span class="btn__text">Negative button link with icon</span>
        </button>

      </div>`})};var r,i,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'base',
    icon: 'ArrowRight',
    iconPos: 'none',
    label: 'Button text'
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button type="button" class="btn btn--base btn--outline">
        <span class="btn__text">
          I am a button
        </span>
      </button>

      <a href="#" class="btn btn--base btn--outline">
        <span class="btn__text">
          I am a link
        </span>
      </a>\`
  })
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var _,d,g;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div style="display:flex; gap:1rem; padding:1rem;">
        <button type="button" class="btn btn--base btn--outline">
          <span class="btn__text">btn--outline</span>
        </button>

        <button type="button" class="btn btn--base btn--filled">
          <span class="btn__text">btn--filled</span>
        </button>

        <button type="button" class="btn btn--base btn--bare">
          <span class="btn__text">btn--bare</span>
        </button>

        <button type="button" class="btn btn--base btn--link">
          <span class="btn__text">btn--link</span>
        </button>
      </div>\`
  })
}`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var v,y,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button type="button" class="btn btn--base btn--outline-negative">
        <span class="btn__text">
          btn--outline-negative
        </span>
      </button>

      <button type="button" class="btn btn--base btn--bare-negative">
        <span class="btn__text">
          btn--bare-negative
        </span>
      </button>\`
  })
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,k,B;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button type="button" class="btn btn--outline btn--sm">
        <span class="btn__text">
          btn--sm
        </span>
      </button>

    <button type="button" class="btn btn--outline btn--base">
      <span class="btn__text">btn--base</span>
    </button>

      <button type="button" class="btn btn--outline btn--lg">
        <span class="btn__text">
          btn--lg
        </span>
      </button>\`
  })
}`,...(B=(k=a.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var z,f,w;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <button type="button" class="btn btn--outline btn--base btn--icon-only">
        <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
          <path d="m16.444 19.204 4.066-7.044-4.066-7.044-.65.375 3.633 6.294h-15.187v.75h15.187l-3.633 6.294z" />
        </svg>

        <span class="btn__text">Button text</span>
      </button>

      <button type="button" class="btn btn--outline btn--base btn--icon-left">
        <svg viewBox="0 0 24 24" class="btn__icon icon icon--base">
          <path d="m8.306 5.116-4.066 7.044 4.066 7.044.65-.375-3.633-6.294h15.187v-.75h-15.187l3.633-6.294z" />
        </svg>

        <span class="btn__text">icon-left</span>
      </button>\`
  })
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var S,L,I;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    template: \`
      <div>
        <button type="button" class="btn btn--link">
          <span class="btn__text">Button link</span>
        </button>

        <hr />

        <button type="button" class="btn btn--link btn--icon-right">
          <svg viewBox="0 0 24 24" class="btn__icon">
            <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
          </svg>

          <span class="btn__text">Button link with right icon</span>
        </button>

      </div>\`
  })
}`,...(I=(L=b.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var N,A,O;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'Dark'
    }
  },
  render: () => ({
    template: \`
      <div>
        <button type="button" class="btn btn--link-negative">
          <svg viewBox="0 0 24 24" class="btn__icon">
            <path d="m12.3916 20.99951-5.25976-8.42578a5.87365 5.87365 0 1 1 10.53857-.0332zm0-16.167a5.1305 5.1305 0 0 0 -5.125 5.125 5.07366 5.07366 0 0 0 .52 2.25293l4.605 7.373 4.624-7.40625a5.07217 5.07217 0 0 0 .501-2.21972 5.1305 5.1305 0 0 0 -5.125-5.12495zm0 7.418a2.292 2.292 0 1 1 2.292-2.292 2.29476 2.29476 0 0 1 -2.292 2.29198zm0-3.834a1.542 1.542 0 1 0 1.542 1.542 1.54363 1.54363 0 0 0 -1.542-1.54201z" />
          </svg>

          <span class="btn__text">Negative button link with icon</span>
        </button>

      </div>\`
  })
}`,...(O=(A=l.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const R=["Example","ButtonOrLink","ButtonVariations","NegativeTypes","Sizes","Icons","ButtonLinks","NegativeButtonLinks"],C=Object.freeze(Object.defineProperty({__proto__:null,ButtonLinks:b,ButtonOrLink:n,ButtonVariations:e,Example:t,Icons:o,NegativeButtonLinks:l,NegativeTypes:s,Sizes:a,__namedExportsOrder:R,default:P},Symbol.toStringTag,{value:"Module"}));export{C as B,t as E,o as I,s as N,a as S,n as a,e as b,b as c,l as d};
