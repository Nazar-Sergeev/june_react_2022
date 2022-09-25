import {axiosService} from "./axios.service";
import {urls} from "../configs";


const commentsService = {
    getAll: () => axiosService.get(urls.comments),
    getByPostOfId: (id) => axiosService.get(`${urls.posts}/${id}`)
};

export {commentsService};