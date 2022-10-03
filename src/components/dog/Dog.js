const Dog = ({dog:{id, name},deleteDog}) => {
    return (
        <div>
            <h3>Dog: {name}</h3>
            <button onClick={() => deleteDog(id)}>delete dog</button>
        </div>
    );
};

export {Dog};