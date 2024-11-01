import{ae as e,af as s,ag as a,ah as p}from"./index--BUz4xMG.js";import{u as i}from"./index-BflwrFKl.js";import{P as c,E as r}from"./Popover.stories-DvxeknTj.js";import"./iframe-B_SHhmIp.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";import"./Popover-YDh9vlLV.js";import"./vue.esm-bundler-8gVuwTo0.js";import"./SvgIcon-DQlQeqh7.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c}),`
`,e.jsx(n.h1,{id:"popover",children:"Popover"}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsxs(n.p,{children:["Popovers are used to attach an extra information to a text, a label, a button, etc. If you need to display a lot of additional information, consider using the ",e.jsx(n.a,{href:"?path=/docs/components-modal--example",children:"Modal component"})," instead."]}),`
`,e.jsx(n.p,{children:"To ensure a seamless user experience, it is important to avoid hiding essential information required to complete a task, such as filling out a form, within a popover. If such information is necessary, it should be displayed prominently on the page rather than within a popover, as this design pattern is generally not recommended for primary information. Popovers should be reserved for supplementary information only."}),`
`,e.jsx(a,{of:r}),`
`,e.jsx(p,{of:r}),`
`,e.jsx(n.h2,{id:"button",children:"Button"}),`
`,e.jsxs(n.p,{children:["The popover button can be a text, the question mark ",e.jsx(n.code,{children:"?"})," icon, or a combination of both (default). Once clicked, the popover is displayed, like a modal."]}),`
`,e.jsx(n.h2,{id:"colors",children:"Colors"}),`
`,e.jsx(n.p,{children:"The popover window has color variations. The following css classes are built:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--info"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--error"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--warning"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--success"})}),`
`]}),`
`,e.jsx(n.p,{children:"and"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--gray"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--red"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--yellow"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--orange"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--green"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--blue"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--indigo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--purple"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--pink"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"popover--white"})}),`
`]}),`
`,e.jsx(n.h1,{id:"interactions-and-accessibility",children:"Interactions and accessibility"}),`
`,e.jsxs(n.p,{children:["Each popover item is wrapped into a ",e.jsx(n.code,{children:"popover-wrapper"}),". This regroup a button ",e.jsx(n.code,{children:".popover-button"})," and a related ",e.jsx(n.code,{children:".popover"})," element."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<span id="popover-wrapper-1" class="popover-wrapper">
  <button
    id="popover-button-1"
    aria-controls="popover-1"
    aria-haspopup="dialog"
    aria-expanded="false"
    class="popover-button"
  >
    <span class="popover-button__label"> Popover button </span>
    <svg
      viewBox="0 0 24 24"
      class="popover-button__icon icon icon--lg icon--HelpCircle"
    >
      <!-- svg markup here -->
    </svg>
  </button>
  <span aria-hidden="true" class="popover-backdrop"></span>
  <span
    id="popover-1"
    aria-hidden="true"
    role="tooltip"
    class="popover popover--blue"
  >
    <span aria-hidden="true" class="popover__close">
      <svg viewBox="0 0 24 24" class="icon icon--lg icon--Cancel">
        <!-- svg markup here -->
      </svg>
    </span>
    <p>Popover content</p>
    <a href="#" tabindex="-1">Link</a>
  </span>
</span>
`})}),`
`,e.jsx(n.p,{children:"During interactions, some ARIA attributes have to be modified for a correct behaviour on assitive technologies."}),`
`,e.jsxs(n.p,{children:["Each button have an ",e.jsx(n.code,{children:"aria-controls"})," attribute pointing the id of the drawer. When the button is clicked, the popover is displayed with a ",e.jsx(n.code,{children:".popover--active"})," class and the transparent backdrop is displayed with ",e.jsx(n.code,{children:".popover-backdrop--active"}),"."]}),`
`,e.jsx(n.p,{children:"Below an example of a simple script resolving 3 accessibility topics:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Toggle ",e.jsx(n.code,{children:"aria-expanded"})," attribute on popover button."]}),`
`,e.jsxs(n.li,{children:["Toggle ",e.jsx(n.code,{children:"aria-hidden"})," attribute on popover drawer."]}),`
`,e.jsx(n.li,{children:"Hide the eventual focusable elements inside a closed popover"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function getFocusableElements(element = document) {
  return [
    ...element.querySelectorAll(
      'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])',
    ),
  ].filter(
    (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'),
  )
}

const Popover = {
  init(target) {
    const wrapper = document.querySelector(target)
    const button = wrapper.querySelector('.popover-button')
    const backdrop = wrapper.querySelector('.popover-backdrop')
    const popover = wrapper.querySelector('.popover')
    const popoverClose = wrapper.querySelector('.popover__close')
    let focusableElements = getFocusableElements(popover)

    focusableElements.forEach((item) => {
      item.tabIndex = -1
    })

    function handleClickOutside(event) {
      const target = event.target
      if (target !== button && !wrapper.contains(target)) {
        closePopover()
      }
    }

    function closePopover() {
      button.setAttribute('aria-expanded', false)
      popover.classList.remove('popover--active')
      popover.setAttribute('aria-hidden', true)
      backdrop.classList.remove('popover-backdrop--active')
      // make focusable popover unfocusable
      focusableElements.forEach((item) => {
        item.tabIndex = -1
      })
      document.removeEventListener('click', handleClickOutside)
    }

    function openPopover() {
      button.setAttribute('aria-expanded', true)
      popover.classList.add('popover--active')
      popover.setAttribute('aria-hidden', false)
      backdrop.classList.add('popover-backdrop--active')
      // make focusable popover focusable again
      focusableElements.forEach((item) => {
        item.tabIndex = undefined
      })
      document.addEventListener('click', handleClickOutside)
    }

    button.addEventListener('click', (event) => {
      popover.classList.contains('popover--active')
        ? closePopover()
        : openPopover()
    })

    backdrop.addEventListener('click', (event) => {
      popover.classList.contains('popover--active')
        ? closePopover()
        : openPopover()
    })

    if (popoverClose) {
      popoverClose.addEventListener('click', (event) => {
        closePopover()
      })
    }
  },
}
export default Popover
`})})]})}function w(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{w as default};