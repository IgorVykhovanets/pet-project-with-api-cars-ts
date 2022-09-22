import React, {FC, useEffect, useState} from 'react';

import './cars.modules.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hook";
import {getAllCarsThunk} from "../../store/slice/cars.slice";
import Car from "../Car/Car";

const Cars:FC = () => {

    const dispatch = useAppDispatch();

    const {cars} = useAppSelector(state => state.carReducer);


    useEffect(() => {
        dispatch(getAllCarsThunk());
    },[]);

    return (
        <div className={'car-card-element'}>
            {cars && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;