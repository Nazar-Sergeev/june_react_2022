import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postActions} from "../../redux/slices";
import {Post} from "../Post/Post";

const Posts = () => {

    const dispatch = useDispatch();
    const {posts, loading, error, postFromAPI} = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(postActions.getAll());
    }, []);

    return (
        <div>
            {loading && <h1>Loading..........</h1>}
            {error && <h1>ERROR</h1>}
            {postFromAPI && <h2>{postFromAPI.title}</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};