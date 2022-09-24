export default function  User({user:{id, name, username, email}}) {
    return (
        <div>
            <div>
                <p>id: {id}</p>
                <p>Name: {name} {username}</p>
                {email && <p>Email: {email}</p>}
            </div>
            <hr/>
        </div>
    );
}