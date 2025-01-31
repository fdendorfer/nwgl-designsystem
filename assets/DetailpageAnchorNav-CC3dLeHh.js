import{j as e,M as r,C as s}from"./index-BAT2XqTE.js";import{useMDXComponents as i}from"./index-TgZHEbKw.js";import{D as a,E as c}from"./DetailpageAnchorNav.stories-DZpVeU4U.js";import"./iframe-rWjVHHfO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D-8MO0q_.js";import"./index-DkDiOc0H.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-BZzwJzoP.js";import"./AccordionItem-f1dUHkJB.js";import"./Accordion-3JELBM4F.js";import"./SvgIcon-B6CYqq9b.js";import"./Card-QutU4dgw.js";import"./ShareBar-6buMQXJi.js";import"./Print-DbQsaYnW.js";import"./Hero-D8qgmBH3.js";import"./MetaInfo-CsOlS1ff.js";import"./Authors-DoKDTAsY.js";import"./AlterBodyClasses-ZWH8fJhj.js";import"./TopHeader-D7gQ9SRF.js";import"./pinia-BK9Cg3ba.js";import"./LanguageSwitcher-BT2Zu2pQ.js";import"./Select-BSO-awED.js";import"./Logo-IVlhw2uD.js";import"./Input-DGMAseUu.js";import"./Breadcrumb-DhW6VVHV.js";import"./DesktopMenu-D64HXdjb.js";import"./MainNavigation-B2S72og8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-Bc0THlbv.js";import"./Btn-CEulRMyz.js";import"./FooterNavigation-B_9BCz4E.js";import"./MobileMenu-Bwz-mfkB.js";import"./swiper-vue-D5eljOSs.js";import"./TopBarNavigation-BOE4we8l.js";import"./v4-CmTdKEVZ.js";import"./TopBar-RCctK4kd.js";import"./Badge-0ijc34-4.js";function o(n){const t={code:"code",h1:"h1",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
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
`})})]})}function K(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{K as default};
