import { Outlet } from "react-router-dom"
import { Header } from "../components"

export const MainLayout = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}