export default function  Comment({comment:{id, name, body}}) {
    return (
        <div>
           <h5>id: {id} - Name: {name}</h5>
            <p>{body}</p>
            <hr/>
        </div>
    );
}