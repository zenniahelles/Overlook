import React from 'react';
import "./Footer.scss";
import { Link } from 'react-router-dom';

import { IconContext } from "react-icons";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa"

export default function Footer(props) {
    return (
        <footer>
<div className="FooterGrid">
    <div className="FooterLeft">© 2019 Hotel Overlook. Alle rettigheder forbeholdt.</div>
    
    <IconContext.Provider value={{ color: "#d9d9d9", size: "2em" }}>
<div className="FooterMiddle">
    <AiFillTwitterCircle className="socialicon" />
    <FaFacebook className="socialicon" />
    </div>
    </IconContext.Provider>

<div className="FooterRight">
<Link to="../hoteller-og-destinationer" > Hoteller og destinationer </Link>
<Link to="../rooms" > Værelser </Link>
<Link to="../reservation" > Reservation </Link>
<Link to="../about" > Om Overlook </Link> 
</div>
</div>
        </footer>
    )
}