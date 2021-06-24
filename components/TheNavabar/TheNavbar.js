import logo from '../../public/img/logo.svg';
import Image from "next/image";
import Link from "next/link";
import {Nav, Navbar} from 'react-bootstrap';
import classes from './Navbar.module.scss';
// import classes from "../../styles/module/navbar.module.scss";

const TheNavbar=()=>{
    const links = [
        {
            name: 'Acasa',
            path: '/',
            id: 1
        },
        {
            name: 'Camera de zi',
            path: '/Living',
            id: 2
        },
        {
            name: 'Dormitor',
            path: '/Dormitor',
            id: 3
        },
        {
            name: 'Bucatarie',
            path: '/Bucatarie',
            id: 4
        },
        {
            name: 'Balcon',
            path: '/Balcon',
            id: 5
        },
        {
            name: 'Baie',
            path: '/Baie',
            id: 6
        },
        {
            name: 'Parcare',
            path: '/Parcare',
            id: 7
        },

    ]

    return <>
        <Navbar expand="lg" className={classes.navmihai} style={{background:"$dark"}}>
           {/*Fixme*/}
            <Navbar.Brand href="/" className="brand">
                <Image src={logo} alt=""  style={{paddingRight:"10px"}} />Burnitei 60-62
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {links.map((item)=>{
                        return     <Nav.Item key={item.id}>
                            {/*fara passHref nu merge*/}
                            <Link href={item.path} passHref>
                            <Nav.Link >{item.name}</Nav.Link>
                            </Link>
                        </Nav.Item>

                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        {/*<p className={classes.navmihai}>test</p>*/}
    </>
}
export default TheNavbar;
