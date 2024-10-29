import{ae as o,af as a,ag as i}from"./index-BZaX9365.js";import{u as t}from"./index-B_eSlS-H.js";import"./detailPageSimple-CDOHHsKd.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-BQWdIFsd.js";import"./iframe-7qbarU-q.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-CxISiSMm.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-8gVuwTo0.js";import"./AudioPlayer-DLez_XqW.js";import"./DownloadItem-dO5ZoSI0.js";import"./SvgIcon-oCs0WQGZ.js";import"./MetaInfo-3mcCqzZ_.js";import"./Newsletter-BO8EHWSN.js";import"./Input-OHQ8Yd2z.js";import"./Btn-B4Pu59KB.js";import"./Notification-BqOl-XVX.js";import"./RelatedTags-yPc18Nox.js";import"./TagItem-CsuiL5Zi.js";import"./SlideshowExample-BKijdbAj.js";import"./swiper-vue-CK8r6Ueo.js";import"./TableSortable-BrwTs0Le.js";import"./ContactSection-CLranfuL.js";import"./Contact-ZzxET366.js";import"./AccordionItem-CL_7WhHx.js";import"./Accordion-3JELBM4F.js";import"./Hero-BIzZeYlG.js";import"./Authors-CdBa0B-4.js";import"./MoreInfosAccordionSection-BtWJTi6w.js";import"./Card-D2iaOmVk.js";import"./QuoteSection-Bx5RLYI5.js";import"./Badge-D1ThOYFH.js";import"./Modal-KhQtVFd6.js";import"./Popover-zIlXKPTv.js";import"./ShareBar-DhuhUCdJ.js";import"./Print-vas2FVAt.js";import"./AlterBodyClasses-DT65EMt1.js";import"./TopHeader-C35PPVpq.js";import"./Logo-adldwgE6.js";import"./LanguageSwitcher-tDfIDR9t.js";import"./Select-rmYmztcG.js";import"./pinia-D7GAMojH.js";import"./Breadcrumb-qWlcLNF8.js";import"./DesktopMenu-BJ1xaxTk.js";import"./MainNavigation-DfqWZiTr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-g0KsClF4.js";import"./FooterNavigation-BMxCvS8v.js";import"./MobileMenu-C6jalGoD.js";import"./TopBarNavigation-Cqu_7Tcd.js";import"./v4-DvF23Exx.js";import"./TopBar-Cric9iyc.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
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
`})})]})}function mo(r={}){const{wrapper:e}={...t(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(n,{...r})}):n(r)}export{mo as default};
