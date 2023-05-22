import Vue from 'vue'
import en from './en.json'
import zhHans from './zh-Hans.json'
import zhHant from './zh-Hant.json'
const messages = {
	'zh-Hans': zhHans,
	'zh-Hant': zhHant,
	en,
};

export function getLanguage() {
  const chooseLanguage = uni.getStorageSync("language");
  if (chooseLanguage) return chooseLanguage;

  if (uni.getLocale()) return uni.getLocale()
  return "zh-Hant";
}

let i18nConfig = {
  locale: getLanguage(),
  messages
}
// #ifndef VUE3
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
var i18n = new VueI18n(i18nConfig)
// #endif
// #ifdef VUE3
import { createI18n } from 'vue-i18n'
var i18n = createI18n(i18nConfig)
// #endif
export default i18n;