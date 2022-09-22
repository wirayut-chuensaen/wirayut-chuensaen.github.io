import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import th from './th.json'

i18n.use(initReactI18next).init({
    resources: {
        en: en,
        th: th
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: false
})

export default i18n
