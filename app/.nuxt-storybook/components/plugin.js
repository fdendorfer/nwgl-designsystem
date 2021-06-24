import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Alert: () => import('../../components/daisy/ui/Alert.vue' /* webpackChunkName: "components/alert" */).then(c => wrapFunctional(c.default || c)),
  Avatar: () => import('../../components/daisy/ui/Avatar.vue' /* webpackChunkName: "components/avatar" */).then(c => wrapFunctional(c.default || c)),
  Button: () => import('../../components/daisy/ui/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c)),
  Checkbox: () => import('../../components/daisy/ui/Checkbox.vue' /* webpackChunkName: "components/checkbox" */).then(c => wrapFunctional(c.default || c)),
  Collapse: () => import('../../components/daisy/ui/Collapse.vue' /* webpackChunkName: "components/collapse" */).then(c => wrapFunctional(c.default || c)),
  FormControl: () => import('../../components/daisy/ui/FormControl.vue' /* webpackChunkName: "components/form-control" */).then(c => wrapFunctional(c.default || c)),
  Hero: () => import('../../components/daisy/ui/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  Icon: () => import('../../components/daisy/ui/Icon.vue' /* webpackChunkName: "components/icon" */).then(c => wrapFunctional(c.default || c)),
  Input: () => import('../../components/daisy/ui/Input.vue' /* webpackChunkName: "components/input" */).then(c => wrapFunctional(c.default || c)),
  Menu: () => import('../../components/daisy/ui/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c)),
  MenuItem: () => import('../../components/daisy/ui/MenuItem.vue' /* webpackChunkName: "components/menu-item" */).then(c => wrapFunctional(c.default || c)),
  Navbar: () => import('../../components/daisy/ui/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c)),
  Progress: () => import('../../components/daisy/ui/Progress.vue' /* webpackChunkName: "components/progress" */).then(c => wrapFunctional(c.default || c)),
  Radio: () => import('../../components/daisy/ui/Radio.vue' /* webpackChunkName: "components/radio" */).then(c => wrapFunctional(c.default || c)),
  Select: () => import('../../components/daisy/ui/Select.vue' /* webpackChunkName: "components/select" */).then(c => wrapFunctional(c.default || c)),
  Textarea: () => import('../../components/daisy/ui/Textarea.vue' /* webpackChunkName: "components/textarea" */).then(c => wrapFunctional(c.default || c)),
  Toggle: () => import('../../components/daisy/ui/Toggle.vue' /* webpackChunkName: "components/toggle" */).then(c => wrapFunctional(c.default || c)),
  Badge: () => import('../../components/daisy/ui/badge.vue' /* webpackChunkName: "components/badge" */).then(c => wrapFunctional(c.default || c)),
  Card: () => import('../../components/daisy/ui/card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c)),
  GalleryCard: () => import('../../components/daisy/demo/GalleryCard.vue' /* webpackChunkName: "components/gallery-card" */).then(c => wrapFunctional(c.default || c)),
  MobileScreen: () => import('../../components/daisy/demo/MobileScreen.vue' /* webpackChunkName: "components/mobile-screen" */).then(c => wrapFunctional(c.default || c)),
  CardsDemo: () => import('../../components/daisy/landing/CardsDemo.vue' /* webpackChunkName: "components/cards-demo" */).then(c => wrapFunctional(c.default || c)),
  FeatureCustomize: () => import('../../components/daisy/landing/FeatureCustomize.vue' /* webpackChunkName: "components/feature-customize" */).then(c => wrapFunctional(c.default || c)),
  FeatureHtmlCompare: () => import('../../components/daisy/landing/FeatureHtmlCompare.vue' /* webpackChunkName: "components/feature-html-compare" */).then(c => wrapFunctional(c.default || c)),
  FeatureInstall: () => import('../../components/daisy/landing/FeatureInstall.vue' /* webpackChunkName: "components/feature-install" */).then(c => wrapFunctional(c.default || c)),
  FeatureTheming: () => import('../../components/daisy/landing/FeatureTheming.vue' /* webpackChunkName: "components/feature-theming" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoAlert: () => import('../../components/daisy/landing/HomepageDemoAlert.vue' /* webpackChunkName: "components/homepage-demo-alert" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoAvatar: () => import('../../components/daisy/landing/HomepageDemoAvatar.vue' /* webpackChunkName: "components/homepage-demo-avatar" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoBreadcrumb: () => import('../../components/daisy/landing/HomepageDemoBreadcrumb.vue' /* webpackChunkName: "components/homepage-demo-breadcrumb" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoButton: () => import('../../components/daisy/landing/HomepageDemoButton.vue' /* webpackChunkName: "components/homepage-demo-button" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoCard: () => import('../../components/daisy/landing/HomepageDemoCard.vue' /* webpackChunkName: "components/homepage-demo-card" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoCard2: () => import('../../components/daisy/landing/HomepageDemoCard2.vue' /* webpackChunkName: "components/homepage-demo-card2" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoCheckbox: () => import('../../components/daisy/landing/HomepageDemoCheckbox.vue' /* webpackChunkName: "components/homepage-demo-checkbox" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoLoading: () => import('../../components/daisy/landing/HomepageDemoLoading.vue' /* webpackChunkName: "components/homepage-demo-loading" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoMenu: () => import('../../components/daisy/landing/HomepageDemoMenu.vue' /* webpackChunkName: "components/homepage-demo-menu" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoNav: () => import('../../components/daisy/landing/HomepageDemoNav.vue' /* webpackChunkName: "components/homepage-demo-nav" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoPagination: () => import('../../components/daisy/landing/HomepageDemoPagination.vue' /* webpackChunkName: "components/homepage-demo-pagination" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoTab: () => import('../../components/daisy/landing/HomepageDemoTab.vue' /* webpackChunkName: "components/homepage-demo-tab" */).then(c => wrapFunctional(c.default || c)),
  HomepageDemoToggle: () => import('../../components/daisy/landing/HomepageDemoToggle.vue' /* webpackChunkName: "components/homepage-demo-toggle" */).then(c => wrapFunctional(c.default || c)),
  HomepageHero: () => import('../../components/daisy/landing/HomepageHero.vue' /* webpackChunkName: "components/homepage-hero" */).then(c => wrapFunctional(c.default || c)),
  TryOnline: () => import('../../components/daisy/landing/TryOnline.vue' /* webpackChunkName: "components/try-online" */).then(c => wrapFunctional(c.default || c)),
  Btn: () => import('../../components/ch/components/Btn.vue' /* webpackChunkName: "components/btn" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/ch/components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  SvgIcon: () => import('../../components/ch/components/SvgIcon.vue' /* webpackChunkName: "components/svg-icon" */).then(c => wrapFunctional(c.default || c)),
  ClassTable: () => import('../../components/daisy/ClassTable.vue' /* webpackChunkName: "components/class-table" */).then(c => wrapFunctional(c.default || c)),
  CollapseTransition: () => import('../../components/daisy/CollapseTransition.vue' /* webpackChunkName: "components/collapse-transition" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/daisy/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/daisy/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  PromoDropdown: () => import('../../components/daisy/PromoDropdown.vue' /* webpackChunkName: "components/promo-dropdown" */).then(c => wrapFunctional(c.default || c)),
  TabHandler: () => import('../../components/daisy/TabHandler.vue' /* webpackChunkName: "components/tab-handler" */).then(c => wrapFunctional(c.default || c)),
  Wrapper: () => import('../../components/daisy/Wrapper.vue' /* webpackChunkName: "components/wrapper" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
