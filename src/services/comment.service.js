import {axiosService} from "./axios.service";
import {urls} from "../configs";


const commentService = {
    getAll: () => axiosService.get(urls.comments),
    create: (comment) => axiosService.post(urls.comments, comment)
};

export {commentService};