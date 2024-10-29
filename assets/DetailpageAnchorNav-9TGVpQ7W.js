import{ae as e,af as r,ag as s}from"./index-BZaX9365.js";import{u as i}from"./index-B_eSlS-H.js";import{D as a,E as c}from"./DetailpageAnchorNav.stories-BqPZQepF.js";import"./iframe-7qbarU-q.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-8gVuwTo0.js";import"./AccordionItem-CL_7WhHx.js";import"./Accordion-3JELBM4F.js";import"./SvgIcon-oCs0WQGZ.js";import"./Card-D2iaOmVk.js";import"./ShareBar-DhuhUCdJ.js";import"./Print-vas2FVAt.js";import"./Hero-BIzZeYlG.js";import"./MetaInfo-3mcCqzZ_.js";import"./Authors-CdBa0B-4.js";import"./AlterBodyClasses-DT65EMt1.js";import"./TopHeader-C35PPVpq.js";import"./Logo-adldwgE6.js";import"./Input-OHQ8Yd2z.js";import"./LanguageSwitcher-tDfIDR9t.js";import"./Select-rmYmztcG.js";import"./pinia-D7GAMojH.js";import"./Breadcrumb-qWlcLNF8.js";import"./DesktopMenu-BJ1xaxTk.js";import"./MainNavigation-DfqWZiTr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-g0KsClF4.js";import"./Btn-B4Pu59KB.js";import"./FooterNavigation-BMxCvS8v.js";import"./MobileMenu-C6jalGoD.js";import"./swiper-vue-CK8r6Ueo.js";import"./TopBarNavigation-Cqu_7Tcd.js";import"./v4-DvF23Exx.js";import"./TopBar-Cric9iyc.js";import"./Badge-D1ThOYFH.js";function o(n){const t={code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
