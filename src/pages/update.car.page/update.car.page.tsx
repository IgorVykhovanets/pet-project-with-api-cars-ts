import React, {FC} from 'react';

import UpdateCarForm from "../../components/UpdateCarForm/UpdateCarForm";
import {useLocation} from "react-router-dom";

const UpdateCarPage:FC = () => {

    const {state} = useLocation();

    return (
        <div className={'form-car'}>
            <UpdateCarForm id={state.id} car={state}/>
        </div>
    );
};

export default UpdateCarPage;