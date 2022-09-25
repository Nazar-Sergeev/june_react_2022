import {useEffect, useState} from "react";
import {Outlet} from "react-router";

import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";

const Comments = () => {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) =>setComments(data) )
    }, []);

    return (
        <div>
            <Outlet/>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};