import React, { createContext, useState, useEffect } from 'react'
import i18n from '../I18n/I18n'

export const AppContext = createContext()
export const AppProvider = ({ children }) => {

    const [localeState, setLocaleState] = useState("")

    useEffect(() => {
        initLocale()
    }, [])

    const initLocale = () => {
        const locale = window.localStorage.getItem("locale")
        // console.log("locale : ", locale)
        if (locale != null) {
            setLocaleState(locale)
            i18n.changeLanguage(locale)
        } else {
            setLocaleState("en")
            i18n.changeLanguage("en")
            window.localStorage.setItem("locale", "en")
        }
    }

    const onChangeLocale = (locale = "en") => {
        setLocaleState(locale)
        i18n.changeLanguage(locale)
        window.localStorage.setItem("locale", locale)
    }

    return (
        <AppContext.Provider
            value={{
                localeState, setLocaleState,
                onChangeLocale
            }}
        >
            {children}
        </AppContext.Provider>
    )
}