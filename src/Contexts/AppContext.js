import React, { createContext, useState, useEffect } from 'react'
import i18n from '../I18n/I18n'
import { db } from '../Utils/Firebase';
import { collection, getDocs } from "firebase/firestore";

export const AppContext = createContext()
export const AppProvider = ({ children }) => {

    const [localeState, setLocaleState] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [appData, setAppData] = useState({})

    useEffect(() => {
        initLocale()
        getAppData()
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

    const getAppData = async () => {
        setIsLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "myInfo"))
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    const snapshotData = JSON.stringify(doc.data())
                    const snapshotParsed = JSON.parse(snapshotData)
                    // console.log("getAppData : ", snapshotParsed)
                    setAppData(snapshotParsed)
                });
            }
        } catch (e) {
            console.error("Error getAppData : ", e);
        } finally {
            setTimeout(() => setIsLoading(false), 500)
        }
    }

    return (
        <AppContext.Provider
            value={{
                localeState, setLocaleState,
                onChangeLocale,
                isLoading, setIsLoading,
                getAppData,
                appData, setAppData
            }}
        >
            {children}
        </AppContext.Provider>
    )
}