import en from './en.json';
import vi from './vi.json';
import i18n, {NewableModule} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules} from 'react-native';
import {Utils} from '../utils';

const languageDetector: NewableModule<any> = {
  type: 'languageDetector',
  async: true,
  detect: (cb: any) => {
    const deviceLanguage = Utils.isIOS()
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLocale[0]
      : NativeModules.I18nManager.localeIdentifier;
    cb(deviceLanguage.indexOf('vi') >= 0 ? 'vi' : 'en');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      },
    },
  });

export default i18n;
