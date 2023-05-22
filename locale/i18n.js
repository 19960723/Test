import Vue from "vue";
import VueI18n from "vue-i18n";
import zhCN from "./lang/zh-CN/index";
import en from "./lang/en/index";
import zhHK from "./lang/zh-HK/index";
Vue.use(VueI18n);
const messages = {
  ZH_CN: zhCN,
  en: en,
  ZH_HK: zhHK,
};

export function getLanguage() {
  const chooseLanguage = uni.getStorageSync("language");
  if (chooseLanguage) return chooseLanguage;

  if (uni.getLocale()) return uni.getLocale()
  return "ZH_CN";
}

const i18n = new VueI18n({
  locale: getLanguage(),
  messages,
});

export default i18n;
