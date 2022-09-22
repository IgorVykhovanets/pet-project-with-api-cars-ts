import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import './create.car.form.modules.css'
import {ICar} from "../../interfaces/car.interface/car.interface";
import {createCarThunk} from "../../store/slice/cars.slice";
import {useAppDispatch} from "../../hooks/redux.hook";
import {joiResolver} from "@hookform/resolvers/joi";
import {formValidation} from "../../validation/form.validation";

const CreateCarForm: FC = () => {

    const {handleSubmit, register, reset, formState: {errors}} = useForm<ICar>({
        resolver: joiResolver(formValidation),
        mode: 'onTouched'
    });

    const dispatch = useAppDispatch();

    const submit: SubmitHandler<ICar> = (car) => {
        dispatch(createCarThunk(car));
        reset()
    }

    return (
        <div className={'form-box-element'}>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')} className={'form-input-1'}/>
                {errors.model && <span>{errors.model.message}</span>}
                <input type="number" placeholder={'price'} {...register('price')}/>
                {errors.price && <span>{errors.price.message}</span>}
                <input type="number" placeholder={'year'} {...register('year')}/>
                {errors.year && <span>{errors.year.message}</span>}
                <button>create car</button>
            </form>
        </div>
    );
};

export default CreateCarForm;