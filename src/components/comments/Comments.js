import {useEffect, useState} from "react";

import CommentForm from "../commentForm/CommentForm";
import {commentService} from "../../services";
import Comment from "../comment/Comment";

export default function Comments() {

    let [comments, setComments] = useState([]);
console.log(comments);
    useEffect(() => {
        commentService.getAll().then(value => setComments(value.data.slice(0,10)))
    }, []);
    return (
        <div>
            <CommentForm setComments={setComments}/>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
}