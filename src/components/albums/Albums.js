import {useEffect, useState} from "react";

import {albumsService} from "../../services";

const Albums = () => {

    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data))
    }, []);

    return (

        <div>
            {
                albums.map(album => <div key={album.id}>
                    <h4>id: {album.id} - title: {album.title}</h4>
                    <hr/>
                </div>)
            }
        </div>
    );
};

export {Albums};