import{j as o,M as a,C as i}from"./index-DfXsuEQa.js";import{useMDXComponents as t}from"./index-CBLv6QKo.js";import"./detailPageSimple-CyizoIMK.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-CLq_Rfg2.js";import"./iframe-D8gYqSl3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bx-go_-4.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-Ch9_S53f.js";import"./AudioPlayer-DRB5ULYv.js";import"./DownloadItem-B5A9lIsi.js";import"./SvgIcon-M_KVJINb.js";import"./MetaInfo-BhOWf0oO.js";import"./Newsletter-7ti8Eh8h.js";import"./Input-DujZxub3.js";import"./Btn-D2Xuq4p3.js";import"./Notification-DiR7pAGt.js";import"./RelatedTags-DGfF-7Bk.js";import"./TagItem-CY51dSJy.js";import"./SlideshowExample-DrL51fFl.js";import"./swiper-vue-B4fAsP-m.js";import"./TableSortable-YMyeg3X5.js";import"./ContactSection-DatzqIgE.js";import"./Contact-b-MUg9HA.js";import"./AccordionItem-HnIj-AbL.js";import"./Accordion-3JELBM4F.js";import"./Hero-C3P-b7n8.js";import"./Authors-AfgrjKyD.js";import"./MoreInfosAccordionSection-ymrF4VyG.js";import"./Card-Bskhd9D7.js";import"./QuoteSection-D7Ow-4Z0.js";import"./Badge-BcsQogqG.js";import"./Modal-CRdh5l9D.js";import"./Popover-BQkcPYKe.js";import"./ShareBar-B40yqrCn.js";import"./Print-BR-091WJ.js";import"./AlterBodyClasses-BNNtTx-O.js";import"./TopHeader-BE_y5Zc2.js";import"./pinia-DqXaOfHn.js";import"./LanguageSwitcher-5hrC9i7Z.js";import"./Select-CUFaGqMN.js";import"./Logo-kEksdMpn.js";import"./Breadcrumb-Dh1XW-xM.js";import"./DesktopMenu-DXa66omR.js";import"./MainNavigation-mFTI73hb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-CVDUAmt7.js";import"./FooterNavigation-D7OMpvUj.js";import"./MobileMenu-DebbV0ZI.js";import"./TopBarNavigation-Dj7FemLk.js";import"./v4-C6aID195.js";import"./TopBar-DjVav8JW.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
`,o.jsx(e.h1,{id:"freebrand-simple-page-example",children:"Freebrand Simple page example"}),`
`,o.jsx("a",{href:"?path=/story/pages-freebrand-detail-page-simple--example",children:"Go to the Canvas Tab"}),`
`,o.jsx(e.hr,{}),`
`,o.jsx("a",{href:"?id=pages-freebrand-detail-page-simple--example",target:"_blank",children:"Open page in full width in a new tab"}),`
`,o.jsx(e.p,{children:"Freebrand design. See bottom of page for configuration options."}),`
`,o.jsx(i,{of:p}),`
`,o.jsx(e.p,{children:"Overwrite the colors by setting the color style attributes on the body"}),`
`,`
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
`})})]})}function lo(r={}){const{wrapper:e}={...t(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}export{lo as default};
