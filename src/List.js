import { useState } from 'react';
import { data } from './data';
import './App.css';

function List() {
    const [placeName, setPlaceName] = useState(data);

    const removePlace = (id) => {
        let newPlace = placeName.filter(placeName => placeName.id !== id);
        setPlaceName(newPlace)
    }

    return ( 
        <div>
            <div className='container'>
                <h2>Vacation list {} </h2>
            </div>

            {placeName.map((item => {
                const {id, name, image, text} = item

                return(
                    <div>
                        <div className='container'>
                            <h3>{id} - {name}</h3>
                        </div>
                        <div className='container'>
                            <p>{text}</p>
                        </div>
                        <div className='container'>
                            <img src={image} alt="natural" width='400px' />
                        </div>
                        <div className='container'>
                            <button  onClick={()=> removePlace(id)}>Remove</button>
                        </div>
                    </div>
                )
            }))}
            <div className='container'>
                <button className='btnn' onClick={()=> setPlaceName([])}>Delete all</button>
            </div>

        </div>
    )
}

export default List;