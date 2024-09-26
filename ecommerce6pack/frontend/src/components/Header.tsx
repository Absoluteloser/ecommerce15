import React from 'react'
import { Link } from "react-router-dom"
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
//link is added to the file which will be present on all pages
//in app.tsx we use router routes and route to render pages
interface User {
    id: string;
    role: string;
}
const user:User = {
    id: "",
    role:""
}
//that is when you press FaSearch then it will render the search page
const Header: React.FC = () => {
    return (
        <nav>
            <Link to={"/"}>Header fo all pages which is common</Link>
            <Link to={"/cart"}>
                <FaShoppingCart />
            </Link>
            <Link to={"/search"}>
                <FaSearch />
            </Link>
            {/* Link to the login page */}
            <Link to={"/login"}>Login</Link>
            {
                user.id ? (
                    <>
                        <button>
                            <FaUser />
                        </button>
                        <dialog open>
                            <Link to={"/logout"}>Logout</Link>
                        </dialog>

                    </>
                ) : (
                    <Link to={"/login"}>
                        <FaUser />
                    </Link>
                )
            }
        </nav>
    )
}

export default Header
//FaSearch and FaShoppingCart are icons imported from react-icons/fa