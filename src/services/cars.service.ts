import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";
import {ICar} from "../interfaces/car.interface/car.interface";

export const carsService = {
    getAll: () => axiosService.get<ICar[]>(urls.cars),
    create: (car: ICar) => axiosService.post<ICar>(urls.cars, car),
    delete: (id: number) => axiosService.delete(`${urls.cars}/${id}`),
    update: (id: number, car: ICar) => axiosService.patch<ICar>(`${urls.cars}/${id}`, car),
}