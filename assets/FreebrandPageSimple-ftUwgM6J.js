import{j as o,M as a,C as i}from"./index-BAT2XqTE.js";import{useMDXComponents as t}from"./index-TgZHEbKw.js";import"./detailPageSimple-fr1NASlR.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-BMKEbM6C.js";import"./iframe-rWjVHHfO.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D-8MO0q_.js";import"./index-DkDiOc0H.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-BZzwJzoP.js";import"./AudioPlayer-CbRSxpYt.js";import"./DownloadItem-B_nwM3mO.js";import"./SvgIcon-B6CYqq9b.js";import"./MetaInfo-CsOlS1ff.js";import"./Newsletter-DzA2dQUv.js";import"./Input-DGMAseUu.js";import"./Btn-CEulRMyz.js";import"./Notification-LPccDfR8.js";import"./RelatedTags-C9iobFm2.js";import"./TagItem-BNnfINmU.js";import"./SlideshowExample-CQnb8aad.js";import"./swiper-vue-D5eljOSs.js";import"./TableSortable-BlgXBbgZ.js";import"./ContactSection-BokFxR5A.js";import"./Contact-CZAxDNZ0.js";import"./AccordionItem-f1dUHkJB.js";import"./Accordion-3JELBM4F.js";import"./Hero-D8qgmBH3.js";import"./Authors-DoKDTAsY.js";import"./MoreInfosAccordionSection-BhhsoHQs.js";import"./Card-QutU4dgw.js";import"./QuoteSection-BRhklC_9.js";import"./Badge-0ijc34-4.js";import"./Modal-DejlwTmd.js";import"./Popover-LTQrFlFZ.js";import"./ShareBar-6buMQXJi.js";import"./Print-DbQsaYnW.js";import"./AlterBodyClasses-ZWH8fJhj.js";import"./TopHeader-D7gQ9SRF.js";import"./pinia-BK9Cg3ba.js";import"./LanguageSwitcher-BT2Zu2pQ.js";import"./Select-BSO-awED.js";import"./Logo-IVlhw2uD.js";import"./Breadcrumb-DhW6VVHV.js";import"./DesktopMenu-D64HXdjb.js";import"./MainNavigation-B2S72og8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-Bc0THlbv.js";import"./FooterNavigation-B_9BCz4E.js";import"./MobileMenu-Bwz-mfkB.js";import"./TopBarNavigation-BOE4we8l.js";import"./v4-CmTdKEVZ.js";import"./TopBar-RCctK4kd.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
`,o.jsx(e.h1,{id:"freebrand-simple-page-example",children:"Freebrand Simple page example"}),`
`,o.jsx("a",{href:"?path=/story/pages-freebrand-detail-page-simple--example",children:"Go to the Canvas Tab"}),`
`,o.jsx(e.hr,{}),`
`,o.jsx("a",{href:"?id=pages-freebrand-detail-page-simple--example",target:"_blank",children:"Open page in full width in a new tab"}),`
`,o.jsx(e.p,{children:"Freebrand design. See bottom of page for configuration options."}),`
`,o.jsx(i,{of:p}),`
`,o.jsx(e.p,{children:"Overwrite the colors by setting the color style attributes on the body"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-javascript",children:`const freebrandColors = [
  { key: '--color-primary-50', value: '#eaffe9' },
  { key: '--color-primary-100', value: '#d3ebd2' },
  { key: '--color-primary-200', value: '#bdd8bc' },
  { key: '--color-primary-300', value: '#a7c4a6' },
  { key: '--color-primary-400', value: '#91b191' },
  { key: '--color-primary-500', value: '#7c9f7c' },
  { key: '--color-primary-600', value: '#678d67' },
  { key: '--color-primary-700', value: '#537b54' },
  { key: '--color-primary-800', value: '#3e6940' },
  { key: '--color-primary-900', value: '#2a582e' },
  { key: '--color-secondary-50', value: '#efffee' },
  { key: '--color-secondary-100', value: '#b0beb0' },
  { key: '--color-secondary-200', value: '#768176' },
  { key: '--color-secondary-300', value: '#404941' },
  { key: '--color-secondary-400', value: '#758874' },
  { key: '--color-secondary-500', value: '#6a7f69' },
  { key: '--color-secondary-600', value: '#5f755f' },
  { key: '--color-secondary-700', value: '#546c55' },
  { key: '--color-secondary-800', value: '#49634b' },
  { key: '--color-secondary-900', value: '#3e5a41' },
]

for (const brandColor of freebrandColors) {
  document.body.style.setProperty(brandColor.key, brandColor.value)
}
`})}),`
`,o.jsx(e.p,{children:"Overwrite fonts by loading the font faces. Has to be loaded last in order for the overwrite to work."}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`@font-face {
  font-family: 'Font-Regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('../fonts/Font-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Font-Bold';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('../fonts/Font-Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Font-Italic';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url('../fonts/Font-Italic.ttf') format('truetype');
}

@font-face {
  font-family: 'Font-Bold-Italic';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url('../fonts/Font-Bold-Italic.ttf') format('truetype');
}

@font-face {
  font-family: 'Fallback-font';
  src: local(Verdana);
  advance-override: 125%;
  ascent-override: 95%;
  descent-override: -25%;
  line-gap-override: 25%;
}
`})})]})}function po(r={}){const{wrapper:e}={...t(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}export{po as default};
