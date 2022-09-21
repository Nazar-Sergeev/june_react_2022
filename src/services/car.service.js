import {axiosService} from "./axios.service";
import {urls} from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`),
    upDateById: (id) => axiosService.put(`${urls.cars}/${id}`),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)

};

export {carService};
