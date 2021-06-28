import phone from '../../public/img/phone.png';
import Image from "next/image";
import classes from './Footer.module.scss';

import React from "react";
// import {Image} from "react-bootstrap";
// import {GrPhone} from "react-icons/fa/GrPhone";


const TheFooter = () => {
    return <div className={classes.footer}>
        <button className={classes.button}>
            0756 058 966
        </button>

    </div>

}
export default TheFooter;
