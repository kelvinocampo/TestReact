import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './Layout.css'

function Layout() {
    return (
        <>
            <Header></Header>
            <main className="w-full flex-1 flex flex-col justify-center items-center">
                <Outlet />
            </main>
            <Footer></Footer>
        </>
    )
}

export default Layout
