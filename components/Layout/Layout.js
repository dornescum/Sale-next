import TheNavbar from "../TheNavabar/TheNavbar";
import NavbarT from "../NabvarT/NavbarT";


const Layout =(props)=>{
    return <>
        <TheNavbar />
        {/*<NavbarT />*/}
        <main>
        {props.children}
    </main>
    </>
}
export default Layout;
