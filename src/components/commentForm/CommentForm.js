import {useForm} from "react-hook-form";

import {commentService} from "../../services";

export default function CommentForm({setComments}) {
    let {register, reset, handleSubmit} = useForm();

    const submit = async (comment) => {
        let {data} = await commentService.create(comment);
        setComments(comments => [...comments, data]);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')} required={true}/>
            <input type="text" placeholder={'body'} {...register('body')} required={true}/>
            <button>create comment</button>
        </form>
    );
}