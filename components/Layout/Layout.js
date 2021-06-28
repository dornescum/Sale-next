import NavbarT from "../NabvarT/NavbarT";
import Footer from "../Footer/Footer";


const Layout = (props) => {
    return <>
        <NavbarT/>
        <main>
            {props.children}
        </main>
        <Footer />
    </>
}
export default Layout;
