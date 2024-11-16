import React from 'react';
import { useState } from 'react';


const AddCarForm = ({addCar} )=> {
    const [carName, setCarName] = useState ("");

    const handelSubmit = (e) => {
        e.preventDefault();
        if (carName.trim()){
            addCar(carName);
            setCarName("");
        }
    };

    return (
        <form onSubmit={handelSubmit}>
            <label>Add Car</label>
            <input
                type= "text"
                value={carName}
                onChange={(e) => setCarName(e.target.value)}
                placeholder='Enter Car Name'
            />
            <button type='submit'>Add</button>

        </form>
    );

} ;

export default AddCarForm;