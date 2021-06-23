import TheNavbar from "../TheNavabar/TheNavbar";


const Layout =(props)=>{
    return <>
        <TheNavbar />
        <main>
        {props.children}
    </main>
    </>
}
export default Layout;
