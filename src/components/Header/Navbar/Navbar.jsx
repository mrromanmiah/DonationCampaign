import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div>
            <nav className="lg:flex md:flex space-y-4 lg:space-y-0 md:space-y-0 items-center justify-between py-8 px-16">
                <Logo></Logo>
                <ul className="flex items-center gap-12 text-lg">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;