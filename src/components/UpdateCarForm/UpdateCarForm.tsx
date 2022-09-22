import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces/car.interface/car.interface";
import {useAppDispatch} from "../../hooks/redux.hook";
import {updateCarThunk} from "../../store/slice/cars.slice";
import {formValidation} from "../../validation/form.validation";
import Car from "../Car/Car";
import {joiResolver} from "@hookform/resolvers/joi";

const UpdateCarForm: FC<{ id: number; car: ICar }> = ({id, car}) => {

    const dispatch = useAppDispatch();

    const {handleSubmit, register, reset, formState: {errors}} = useForm<ICar>({
        resolver: joiResolver(formValidation),
        mode: 'onTouched'
    });


    const submit: SubmitHandler<ICar> = (car) => {
        dispatch(updateCarThunk({id: id, car: car}))
        reset()
    }

    return (
        <div className={'form-box-element'}>
            <form onSubmit={handleSubmit(submit)}>
                {errors.model && <span>{errors.model.message}</span>}
                <input type="text" placeholder={'model'} {...register('model')}/>
                {errors.price && <span>{errors.price.message}</span>}
                <input type="number" placeholder={'price'} {...register('price')}/>
                {errors.year && <span>{errors.year.message}</span>}
                <input type="number" placeholder={'year'} {...register('year')}/>
                <button>update car</button>
            </form>
            <Car car={car}/>
        </div>
    );
};

export default UpdateCarForm;