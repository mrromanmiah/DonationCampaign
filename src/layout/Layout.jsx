import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Banner from "../components/Header/Banner/Banner";


const Layout = () => {
    return (
        <div>
            <div className="relative">
                <div
                    className="bg-[url('https://i.ibb.co/4NB4zB2/Banner-10.png')] bg-no-repeat bg-cover bg-center"
                >
                    <Navbar></Navbar>
                    <Banner></Banner>
                </div>
            </div>
            <Outlet></Outlet>
        </div >
    );
};

export default Layout;