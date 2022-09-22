import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './layout.modules.css'

const Layout:FC = () => {
    return (
        <div className={'footer-nav-link-menu'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/create'}>Create car</NavLink>
        </div>
    );
};

export default Layout;