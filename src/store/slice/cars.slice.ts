import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ICar} from "../../interfaces/car.interface/car.interface";
import {carsService} from "../../services/cars.service";

export const getAllCarsThunk = createAsyncThunk<any, void>(
    'carSlice/getAllCarsThunk',
    async (_, {dispatch}) => {
        const {data} = await carsService.getAll();
        dispatch(getAllCars(data));
    }
);

export const createCarThunk = createAsyncThunk<any, ICar>(
    'carSlice/createCarThunk',
    async (car, {dispatch}) => {
        const {data} = await carsService.create(car);
        dispatch(addCar(data));
    }
);

export const delCarThunk = createAsyncThunk<any, number>(
    'carSlice/delCarThunk',
    async (id, {dispatch}) => {
        const {data} = await carsService.delete(id);
        dispatch(delCar(data));
    }
);

export const updateCarThunk = createAsyncThunk<any, any>(
    'carSlice/updateCarThunk',
    async ({id, car}, {dispatch}) => {
        const {data} = await carsService.update(id, car);
        dispatch(updateCar(data));
    }
);

interface IState {
    cars: [] | ICar[];
    update: null | ICar
}

const initialState: IState = {
    cars: [],
    update: null,
}


export const carsSlice = createSlice({
    name: 'carsSlice',
    initialState: initialState,
    reducers: {
        getAllCars: (state, action: PayloadAction<ICar[]>) => {
            state.cars = action.payload;
        },
        addCar: (state, action: PayloadAction<ICar>) => {
            // @ts-ignore
            state.cars.push(action.payload);
        },
        delCar: (state, action: PayloadAction<number>) => {
            // @ts-ignore
            state.cars = state.cars.filter(car => car.id !== action.payload);
        },
        updateCar: (state, action: PayloadAction<ICar>) => {
            // @ts-ignore
            const carFind = state.cars.find(car => car.id === action.payload.id);
            state.cars.filter(car => {
                // @ts-ignore
                if (car.id === carFind.id) {
                    // @ts-ignore
                    car = carFind;
                }
            });
        },
    }
})

export const carReducer = carsSlice.reducer;

export const {getAllCars, addCar, delCar, updateCar} = carsSlice.actions;


