import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import './home.page.modules.css'
import Layout from "../../components/Layout/Layout";
import Cars from "../../components/Cars/Cars";

const HomePage: FC = () => {
    return (
        <div>
            <div className={'footer-layout-element'}>
                <Layout/>
            </div>
            <div>
                <Outlet/>
            </div>
            <div className={'cars-box-element'}>
                <Cars/>
            </div>
        </div>
    );
};

export default HomePage;