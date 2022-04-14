import React from "react";
import { Link } from 'react-router-dom';

import { AreaHeader } from './styled';

function Header(){
    
    return (
        <AreaHeader>
            <div className="container">
                <div className="logo">
                    <img src="../../../logo.png" />
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/config">Config</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </div>
        </AreaHeader>
    );
}

export default Header;