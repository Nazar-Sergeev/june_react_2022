import {useDispatch} from "react-redux";

import {postActions} from "../../redux/slices";

const Post = ({post, post:{id,title, body}}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div><strong>Title:</strong> {title}</div>
            <div><strong>Body:</strong> {body}</div>
            <button onClick={() => dispatch(postActions.setCurrentPost(post))}>select</button>
            <button onClick={() => dispatch(postActions.deleteById(id))}>delete</button>
            <button onClick={() => dispatch(postActions.getById({id}))}>details</button>
            <hr/>
        </div>
    );
};

export {Post};