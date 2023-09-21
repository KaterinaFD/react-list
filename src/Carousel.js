import { useState } from 'react';
import {data} from './data';
import './App.css';


function Carousel() {

    const [plase, setPlace] = useState(0);
    const {id, name, image} = data [plase];

    const prePlace = () => {
        setPlace((place =>{
            place --;
            if (place < 0) {
                return data.length-1;
            }
            return place;
        }))
    }

    const nextPlace = () => {
        setPlace((place =>{
            place ++;
            if (place > data.length -1) {
                place = 0;
            }
            return place;
        }))
    }



     return (
        <div>
            <div className='container'>
                <img src={image} alt="natural" width="600px" />
            </div>
            <div className='container'>
                <h2>{id} {name}</h2>
            </div>
            <div className='container btn'>
                <button onClick={prePlace}>Previous</button>
                <button onClick={nextPlace}>Next</button>
            </div>
        </div>
     );

}


export default Carousel;