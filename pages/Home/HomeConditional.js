import React, {useState} from "react";
import {Button, Fade} from "react-bootstrap";



const HomeConditional=()=>{
    const [open, setOpen] = useState(false);
    const test = 'Pentru mai multe informații, vă rog să mă contactați pe numarul de telefon +40 756 058 966 sau pe adresa de email dornescu@gmail.com.';
    const nothing = '';
    return <div className="home-bottom">

        <button onClick={() => setOpen(!open)} className='btn-contact'>
            Contact
        </button>
        {open && <p className='contact'>Pentru mai multe informații, vă rog să mă contactați pe numarul de telefon +40 756 058 966 sau pe adresa de email <span className='email'>dornescu@gmail.com</span>.</p>}
        {!open && <p className='contact-leave'>{nothing}</p>}
    </div>


}

export default HomeConditional;
