import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const Layout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div >
    );
};

export default Layout;