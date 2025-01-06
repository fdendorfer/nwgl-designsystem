import{ae as o,af as a,ag as i}from"./index-DbNt1n0J.js";import{u as t}from"./index-DeYwbRx9.js";import"./detailPageSimple-PmxF99Ao.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-Bvu3oEKy.js";import"./iframe-Cv_d_Xw5.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-pVbLjA8_.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-BiTVOWp5.js";import"./AudioPlayer-C6vBVwW5.js";import"./DownloadItem-DWtxSB73.js";import"./SvgIcon-DJ1DxYZI.js";import"./MetaInfo-DU4lcIFw.js";import"./Newsletter-BpyK_k78.js";import"./Input-CDaIcUOV.js";import"./Btn-B1NleKrw.js";import"./Notification-CwQOzW0X.js";import"./RelatedTags-CHbdm3zo.js";import"./TagItem-CMy61PxR.js";import"./SlideshowExample-CvFyj0Qe.js";import"./swiper-vue-BLuH32Ww.js";import"./TableSortable-VO051vab.js";import"./ContactSection-hlnXQ1mA.js";import"./Contact-B0D-qZUc.js";import"./AccordionItem-CKsZfPuo.js";import"./Accordion-3JELBM4F.js";import"./Hero-BvYaY9En.js";import"./Authors-COaYB-vW.js";import"./MoreInfosAccordionSection-mwU1uto-.js";import"./Card-CvOquYcC.js";import"./QuoteSection-Dc_K1qd8.js";import"./Badge-B5hKSuSY.js";import"./Modal-BEK4icx-.js";import"./Popover-Ci65nJC_.js";import"./ShareBar-ZAHHp5MS.js";import"./Print-BFhL4ZIg.js";import"./AlterBodyClasses-DwV3sxeL.js";import"./TopHeader-Cpq9B669.js";import"./Logo-F7Vw6xka.js";import"./LanguageSwitcher-BjQBMait.js";import"./Select-BPQXZez3.js";import"./pinia-DN70hQ40.js";import"./Breadcrumb-2FHOwWtL.js";import"./DesktopMenu-K6QRKoGe.js";import"./MainNavigation-IaGYyueq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-DmlFs-Vr.js";import"./FooterNavigation-BtVJocTB.js";import"./MobileMenu-CqV7MDz2.js";import"./TopBarNavigation-EIBnGT8p.js";import"./v4-Ch9TGLTe.js";import"./TopBar-0EQiqDOT.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
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
