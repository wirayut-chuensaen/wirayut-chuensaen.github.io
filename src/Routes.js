import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from './Pages/NavigationBar'
import MainPage from './Pages/MainPage'
import AboutMePage from "./Pages/AboutMePage";
import WorksPage from './Pages/WorksPage'
import WorksDetailPage from './Pages/WorksDetailPage'
import AdminLoginPage from "./Pages/AdminLoginPage";
import EditDataPage from './Pages/EditDataPage'

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
                <Route path="/">
                    <Route path="admin" element={<AdminLoginPage />} />
                    <Route path="EditDataPage" element={<EditDataPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router