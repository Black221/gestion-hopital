import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <main className="overflow-y-hidden">
            <Outlet />
        </main>
    )
}

export default Layout;