import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    My Portfolio
                </Link>
            </div>
            <a href="" className="cta-btn">ボタン</a>
        </div>
    )
}

export default Navbar;