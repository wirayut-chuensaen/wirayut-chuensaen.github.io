import React from 'react'
import { ProviderComposer } from './ProviderComposer'
import { AppProvider } from './index'

const ContextProvider = ({ children }) => {
    return (
        <ProviderComposer
            contexts={[
                <AppProvider key={'AppProvider'} />,
            ]}>
            {children}
        </ProviderComposer>
    )
}
export default ContextProvider