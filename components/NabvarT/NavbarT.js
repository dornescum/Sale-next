import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/logo.svg";
// import { FaBars} from "react-icons/fa";
// import { HiOutlineX } from "react-icons/hi";
import React, {useState} from "react";
// import './navbarT.module.css';
import { FaBars} from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { GiFruitTree } from "react-icons/hi";



const NavbarT = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        console.log('click')
        setSidebar(!sidebar)
    }
    // console.log(SidebarData)
    return <div className="navbarm">
        <div className='left'>
                <button onClick={showSidebar} className="show-sidebar" id='open'>
                    <FaBars/>
                </button>
            <Image src={logo} className='logo' />
            <Link href='/'><p className='link-route'>Burnitei 60-62</p></Link>
        </div>
        <div className='right'>
            <ul className='links'>
                <li className='link'><Link href='/'><p className='link-route'>Acasa</p></Link></li>
                <li className='link'><Link href='/Living'><p className='link-route'>Camera de zi</p></Link></li>
                <li className='link'><Link href='/Dormitor'><p className='link-route'>Dormitor</p></Link></li>
                <li className='link'><Link href='/Bucatarie'><p className='link-route'>Bucatarie</p></Link></li>
                <li className='link'><Link href='/Balcon'><p className='link-route'>Balcon</p></Link></li>
                <li className='link'><Link href='/Baie'><p className='link-route'>Baie</p></Link></li>
                <li className='link'><Link href='/Parcare'><p className='link-route'>Parcare</p></Link></li>

            </ul>
        </div>
        <div className={sidebar ? "show sidebar":"sidebar"}>
                {/*<div className={sidebar ? "show":"sidebar"}>*/}
                    <div className='close'>
                        <button onClick={showSidebar} id='close'>
                            <HiOutlineX/>
                        </button>
                    </div>
                {/*</div>*/}
            <ul className='sidelinks' onClick={showSidebar}>
                <li className='sidelink'><Link href='/'><p className='route'>Acasa</p></Link></li>
                <li className='sidelink'><Link href='/Living'><p className='route'>Camera de zi</p></Link></li>
                <li className='sidelink'><Link href='/Dormitor'><p className='route'>Dormitor</p></Link></li>
                <li className='sidelink'><Link href='/Bucatarie'><p className='route'>Bucatarie</p></Link></li>
                <li className='sidelink'><Link href='/Balcon'><p className='route'>Balcon</p></Link></li>
                <li className='sidelink'><Link href='/Baie'><p className='route'>Baie</p></Link></li>
                <li className='sidelink'><Link href='/Parcare'><p className='route'>Parcare</p></Link></li>
            </ul>
        </div>

    </div>

}
export default NavbarT;
 {/*<div className="nav-left">*/}
 {/*    <button onClick={showSidebar} className="show-sidebar">*/}
 {/*        X*/}
 {/*    </button>*/}
 {/*    <a href="">Mihai Dornescu</a>*/}
 {/*    <div className={sidebar ? "side show":"side"}>*/}
 {/*        <div className='close'>*/}
 {/*            <button onClick={showSidebar} className="show-sidebar">*/}
 {/*                X*/}
 {/*            </button>*/}
 {/*        </div>*/}

 {/*        <ul onClick={showSidebar} className="sidebar-ul">*/}
 {/*            <li><a href="">test1</a></li>*/}
 {/*            <li><a href="">test1</a></li>*/}
 {/*            <li><a href="">test1</a></li>*/}
 {/*            <li><a href="">test1</a></li>*/}
 {/*            <li><a href="">test1</a></li>*/}

 {/*        </ul>*/}

 {/*    </div>*/}
 {/*</div>*/}
 {/*<div className="nav-right">*/}
 {/*    <ul className="ul-links">*/}
 {/*        <li className="links">*/}
 {/*            <a href="">home</a>*/}
 {/*        </li>*/}
 {/*        <li className="links">*/}
 {/*            <a href="">home</a>*/}
 {/*        </li>*/}
 {/*        <li className="links">*/}
 {/*            <a href="">home</a>*/}
 {/*        </li>*/}
 {/*        <li className="links">*/}
 {/*            <a href="">home</a>*/}
 {/*        </li>*/}
 {/*        <li className="links">*/}
 {/*            <a href="">home</a>*/}
 {/*        </li>*/}


 {/*    </ul>*/}
 {/*</div>*/}
