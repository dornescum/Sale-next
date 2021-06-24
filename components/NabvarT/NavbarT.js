import classes from './NavbarT.module.scss';
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/justify.svg";

const NavbarT =()=>{
    return (<div  className={classes.navbar}>
        <div className={classes.left}>
            <Image src={logo} alt=""  style={{paddingRight:"10px"}} />
            <Link href='/' passHref>Burnitei 60-62</Link>
        </div>
            <nav className={sidebar ? 'menu active': 'menu'}>
                <ul className={classes.right}>
                    <li className={classes.toggle}></li>
                </ul>

            </nav>
    </div>

    )

}
export default NavbarT;
