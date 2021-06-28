import React, {useState} from "react";
import classes from './HomeConditional.module.scss'

const HomeConditional=()=>{
    const [open, setOpen] = useState(false);
    const test = 'Pentru mai multe informații, vă rog să mă contactați pe numarul de telefon +40 756 058 966 sau pe adresa de email dornescu@gmail.com.';
    const nothing = '';
    return <div className={classes.bottom}>

        <button onClick={() => setOpen(!open)} className={classes.btncontact}>
            Contact
        </button>
        {open && <p className={classes.contact}>Pentru mai multe informații, vă rog să mă contactați pe numarul de telefon +40 756 058 966 sau pe adresa de email <span className='email'>dornescu@gmail.com</span>.</p>}
        {/*Fixme*/}
        {!open && <p className={classes.leave}>{nothing}</p>}
    </div>


}

export default HomeConditional;
