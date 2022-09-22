import React, {FC} from 'react';

import './create.car.modules.page.css'
import CreateCarForm from "../../components/CreateCarForm/CreateCarForm";

const CreateCarPage:FC = () => {
    return (
        <div className={'form-car'}>
            <CreateCarForm/>
        </div>
    );
};

export default CreateCarPage;