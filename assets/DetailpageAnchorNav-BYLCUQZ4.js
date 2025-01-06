import{ae as e,af as r,ag as s}from"./index-D13lCLwa.js";import{u as i}from"./index-BR5dc24o.js";import{D as a,E as c}from"./DetailpageAnchorNav.stories-Nq3uJNba.js";import"./iframe-vGZFE3UK.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-pVbLjA8_.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-8gVuwTo0.js";import"./AccordionItem-9Nwu18u1.js";import"./Accordion-3JELBM4F.js";import"./SvgIcon-YW-tbzRN.js";import"./Card-C-sGDILy.js";import"./ShareBar-elDEJU24.js";import"./Print-G-mGVIAw.js";import"./Hero-C9LjBg8M.js";import"./MetaInfo-3mcCqzZ_.js";import"./Authors-BbQRcm9X.js";import"./AlterBodyClasses-BShIwxIy.js";import"./TopHeader-C_QvcQR8.js";import"./pinia-C9w1FlR-.js";import"./LanguageSwitcher-tDfIDR9t.js";import"./Select-rmYmztcG.js";import"./Logo-adldwgE6.js";import"./Input-OHQ8Yd2z.js";import"./Breadcrumb-NX7gwKm0.js";import"./DesktopMenu-rzgRRAlp.js";import"./MainNavigation-AGXlckA-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-IuI2eLfh.js";import"./Btn-C3wUxN7I.js";import"./FooterNavigation-BMxCvS8v.js";import"./MobileMenu-CGzq4AjJ.js";import"./swiper-vue-CK8r6Ueo.js";import"./TopBarNavigation-CRMryryw.js";import"./v4-Ch9TGLTe.js";import"./TopBar-CAmLLHWq.js";import"./Badge-B5E7aSsw.js";function o(n){const t={code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(t.h1,{id:"anchor-navigation-example",children:"Anchor navigation example"}),`
`,e.jsx("a",{href:"?path=/story/pages-detail-page-anchor-nav--example",children:"Go to the Canvas Tab"}),`
`,e.jsx(t.hr,{}),`
`,e.jsx("a",{href:"?id=pages-detail-page-anchor-nav--example&args=&viewMode=story",target:"_blank",children:"Open in full width in a new tab"}),`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"Remarks:"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["the “sticky” functionality works only ",e.jsx("a",{href:"?id=pages-detail-page-anchor-nav--example&args=&viewMode=story",target:"_blank",children:"in full width view"})]}),`
`,e.jsxs(t.li,{children:["A short Javascript example is displayed at the ",e.jsx("a",{href:"#javascript-example",children:"bottom of the page"}),", showing how to set a class on the current menu item, depending on the scroll position."]}),`
`]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h1,{id:"javascript-example",children:"Javascript example"}),`
`,e.jsxs(t.p,{children:["This is an example how to listen to the scroll and set an ",e.jsx(t.code,{children:".menu__item--active"})," class to the current menu item when a anchored section pops into the viewport."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`const AnchorNav = {
  setCurrentMenuItem() {
    // select all titles with an id in the main element.
    // this selection could be narrowed depending on the way the anchoring is implemented:
    const sections = document.querySelectorAll('main h2[id]')
    const scrollOffset = 100
    // Listen to the scroll
    window.onscroll = () => {
      const scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop
      for (let s in sections) {
        // if a section pops in the viewport, the current active class is removed
        // and applied to this new appearing section:
        if (
          sections.hasOwnProperty(s) &&
          sections[s].offsetTop <= scrollPos - scrollOffset
        ) {
          const id = sections[s].id
          let currentItem = document.querySelector('.menu__item--active')
          if (currentItem) currentItem.classList.remove('menu__item--active')
          document
            .querySelector(\`a[href*=\${id}]\`)
            .classList.add('menu__item--active')
        }
      }
    }
  },
}
export default AnchorNav
`})}),`
`,e.jsx(t.p,{children:"Import the function above and init the script with"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-javascript",children:`AnchorNav.setCurrentMenuItem()
`})})]})}function Q(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{Q as default};
