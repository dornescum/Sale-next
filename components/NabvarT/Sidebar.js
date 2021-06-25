import React, {useState} from 'react';
import Link from "next/link";

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        console.log('click')
        setSidebar(!sidebar)
    }
    return (
        <div className='sidebar'>
                    <div className='close'>
                        <button onClick={showSidebar} className="show-sidebar">
                            X
                        </button>
                    </div>
        <ul className='sidelinks' onClick={showSidebar}>
            <li className='sidelink'><Link href='/'>Acasa</Link></li>
            <li className='sidelink'><Link href='/Living'>Camera de zi</Link></li>
            <li className='sidelink'><Link href='/Dormitor'>Acasa</Link></li>
            <li className='sidelink'><Link href='/Bucatarie'>Bucatarie</Link></li>
            <li className='sidelink'><Link href='/Balcon'>Balcon</Link></li>
            <li className='sidelink'><Link href='/Baie'>Baie</Link></li>
            <li className='sidelink'><Link href='/Parcare'>Parcare</Link></li>
        </ul>
        </div>
    );
};

export default Sidebar;
