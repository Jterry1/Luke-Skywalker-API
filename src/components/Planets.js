import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Planet = (props) => {
    const [state, setState] = useState([])
    useEffect(() => {
        axios.get('https://swapi.co/api/planets')
            .then(response => { setState(response.data.results) })
            .catch(err => {
                console.log(err);
            }, []);
    })

    return (
        <div>
            Name: {state.name}
        </div>
    );
}
export default Planet;