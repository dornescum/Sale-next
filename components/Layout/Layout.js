import TheNavbar from "../TheNavabar/TheNavbar";
import NavbarT from "../NabvarT/NavbarT";
import Footer from "../Footer/Footer";
// import Sidebar from "../NabvarT/Sidebar";


const Layout = (props) => {
    return <>
        {/*<TheNavbar />*/}
        <NavbarT/>
        {/*<Sidebar />*/}
        <main>
            {props.children}
        </main>
        <Footer />
    </>
}
export default Layout;
