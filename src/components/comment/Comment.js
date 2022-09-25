import {Link} from "react-router-dom";

const Comment = ({comment: {id, name, body, postId}}) => {
    return (
        <div>
            <div>
                <h4>id: {id} - name: {name}</h4>
                <p>{body}</p>
                <Link to={`${postId}/post`}>details</Link>
            </div>
            <hr/>
        </div>
    );
};

export {Comment};