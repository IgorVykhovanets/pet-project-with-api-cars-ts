import React, {FC} from 'react';

import './car.modules.css'
import {ICar} from "../../interfaces/car.interface/car.interface";
import {useAppDispatch} from "../../hooks/redux.hook";
import {delCarThunk} from "../../store/slice/cars.slice";
import {Link} from "react-router-dom";

const Car: FC<{ car: ICar; }> = ({car}) => {

    const {id, year, price, model} = car;

    const dispatch = useAppDispatch();

    return (
        <div className={'car-element'}>
            <h1>Model: {model.toUpperCase()}</h1>
            <h3>Year: {year}</h3>
            <h3>Price: {price}</h3>
            <div className={'button-card-box'}>
                <Link to={`/update&carId=${id}`} state={car}>
                    <button>update</button>
                </Link>
                <button onClick={() => dispatch(delCarThunk(id as number))}>delete</button>
            </div>
        </div>
    );
};

export default Car;