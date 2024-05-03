import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <>
        <Sidebar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        </>
    )
}

export default Layout;