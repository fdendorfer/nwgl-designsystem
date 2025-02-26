import{j as o,M as a,C as i}from"./index-0F6vfxFc.js";import{useMDXComponents as t}from"./index-BNpHBleQ.js";import"./detailPageSimple-bO1LXlYl.js";import{F as l,E as p}from"./FreebrandPageSimple.stories-HaifP0JB.js";import"./iframe-cSwccYO5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cu4lwwaE.js";import"./index-Bx-go_-4.js";import"./index-ogSvIofg.js";import"./vue.esm-bundler-C14dN-al.js";import"./AudioPlayer-ersRu54r.js";import"./DownloadItem-Dt16yktp.js";import"./SvgIcon-CpZw2VHn.js";import"./MetaInfo-3xQwXXuy.js";import"./Newsletter-CPz3cp4-.js";import"./Input-BE2IJoXv.js";import"./Btn-BjlVMAnt.js";import"./Notification-21RkRZEE.js";import"./RelatedTags-CaUXTpNy.js";import"./TagItem-Ds7LYVVe.js";import"./SlideshowExample-IX8N9jkk.js";import"./swiper-vue-e8EsdxY3.js";import"./TableSortable-tlubEhSc.js";import"./ContactSection-C1mjG8wC.js";import"./Contact-KbJCjaCD.js";import"./AccordionItem-C8_uvMc5.js";import"./Accordion-3JELBM4F.js";import"./Hero-D9H85Dh1.js";import"./Authors-D_-4lnrK.js";import"./MoreInfosAccordionSection-C6yYBRCO.js";import"./Card-BUaOwynk.js";import"./QuoteSection-BoKeKVmI.js";import"./Badge-BXOEtoSv.js";import"./Modal-BWOisUM2.js";import"./Popover-DR7mVA6d.js";import"./ShareBar-BqlakPlD.js";import"./Print-BJyqmbX-.js";import"./AlterBodyClasses-Ad-TQ2RG.js";import"./TopHeader-ByrbscUw.js";import"./pinia-DCeAKrlw.js";import"./LanguageSwitcher-DV08oEak.js";import"./Select-DBKSxubj.js";import"./Logo-Dd-Odi6P.js";import"./Breadcrumb-C-p59dyu.js";import"./DesktopMenu-BO5S4UH3.js";import"./MainNavigation-CJZXH-eP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FooterInformation-DiEP7Hc4.js";import"./FooterNavigation-Benidy9E.js";import"./MobileMenu-hnyM1bMA.js";import"./TopBarNavigation-B5viAA-0.js";import"./v4-C6aID195.js";import"./TopBar-B7zzS9mv.js";function n(r){const e={code:"code",h1:"h1",hr:"hr",p:"p",pre:"pre",...t(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:l}),`
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
