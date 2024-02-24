import { Outlet } from "react-router-dom"
import { Header } from "../components"
import './MainLayout.modules.css'
export const MainLayout = () => {
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}