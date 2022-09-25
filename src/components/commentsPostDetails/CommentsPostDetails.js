import {useEffect, useState} from "react";
import {useParams} from "react-router";

import {commentsService} from "../../services";

const CommentsPostDetails = () => {

    const {id} = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        commentsService.getByIdOfPost(id).then(({data}) => setPost(data))
    }, [id]);

    return (
        <div>
            <h4>Post: {post.id}</h4>
            <h5>Title: {post.title}</h5>
            <p>{post.body}</p>
            <hr/>
        </div>
    );
};

export {CommentsPostDetails};