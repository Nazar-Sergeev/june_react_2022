const Cat = ({cat:{id, name}, deleteCat}) => {

    return (
        <div>
            <h3>Cat: {name}</h3>
            <button onClick={() => deleteCat(id)}>delete cat</button>
        </div>
    );
};

export {Cat};