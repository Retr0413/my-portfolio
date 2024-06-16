import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    TopPage
                </Link>
            </div>
        </div>
    )
}

export default Navbar;