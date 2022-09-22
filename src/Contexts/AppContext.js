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
        setLocaleState(locale)
        i18n.changeLanguage(locale)
    }

    const onChangeLocale = (locale = "en") => {
        setLocaleState(locale)
        i18n.changeLanguage(locale)
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