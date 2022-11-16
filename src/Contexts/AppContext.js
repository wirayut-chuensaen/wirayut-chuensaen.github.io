import React, { createContext, useState, useEffect } from 'react'
import i18n from '../I18n/I18n'
import { db } from '../Utils/Firebase';
import { collection, getDocs } from "firebase/firestore";

export const AppContext = createContext()
export const AppProvider = ({ children }) => {

    const [localeState, setLocaleState] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [myInfo, setMyInfo] = useState({})
    const [profile, setProfile] = useState({})
    const [aboutWeb, setAboutWeb] = useState({})

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
            const querySnapshotMyInfo = await getDocs(collection(db, "myInfo"))
            if (!querySnapshotMyInfo.empty) {
                querySnapshotMyInfo.forEach((doc) => {
                    const snapshotData = JSON.stringify(doc.data())
                    const snapshotParsed = JSON.parse(snapshotData)
                    // console.log("getAppData : ", snapshotParsed)
                    setMyInfo(snapshotParsed)
                });
            }
            const querySnapshotProfile = await getDocs(collection(db, "myInfo_full"))
            if (!querySnapshotProfile.empty) {
                querySnapshotProfile.forEach((doc) => {
                    const snapshotData = JSON.stringify(doc.data())
                    const snapshotParsed = JSON.parse(snapshotData)
                    // console.log("getProfile : ", snapshotParsed)
                    setProfile(snapshotParsed)
                });
            }
            const querySnapshotAboutWeb = await getDocs(collection(db, "about_web"))
            if (!querySnapshotAboutWeb.empty) {
                querySnapshotAboutWeb.forEach((doc) => {
                    const snapshotData = JSON.stringify(doc.data())
                    const snapshotParsed = JSON.parse(snapshotData)
                    // console.log("getAboutWeb : ", snapshotParsed)
                    setAboutWeb(snapshotParsed)
                });
            }
        } catch (e) {
            console.error("Error getMyInfo : ", e);
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
                myInfo, setMyInfo,
                profile, setProfile,
                aboutWeb, setAboutWeb
            }}
        >
            {children}
        </AppContext.Provider>
    )
}