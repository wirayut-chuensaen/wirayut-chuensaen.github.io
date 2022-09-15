import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from './Pages/NavigationBar'
import MainPage from './Pages/MainPage'
import AboutMePage from "./Pages/AboutMePage";
import WorksPage from './Pages/WorksPage'
import WorksDetailPage from './Pages/WorksDetailPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavigationBar />}>
                    <Route index element={<MainPage />} />
                    <Route path="AboutMePage" element={<AboutMePage />} />
                    <Route path="WorksPage" element={<WorksPage />} />
                    <Route path="WorksDetailPage" element={<WorksDetailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router