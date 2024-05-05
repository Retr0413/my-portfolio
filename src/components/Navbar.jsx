import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    TopPage
                </Link>
            </div>
            <a href="" className="cta-btn">履歴書</a>
        </div>
    )
}

export default Navbar;