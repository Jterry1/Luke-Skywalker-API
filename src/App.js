import { Router, navigate } from '@reach/router';
import React, {useState, useEffect} from 'react';
import './App.css';
import People from './components/People';
import Planet from './components/Planets';
import axios from 'axios';


function App() {
    const [category, setCategory] = useState('');
    const [id, setId] = useState('');
    const [state, setState] = useState({});

    const onChangeHandler = e => {
        if (e.target.name === 'category') (
            setCategory(e.target.value)
        )
        else if (e.target.name === 'id') (
            setId(e.target.value)
        )
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        useEffect(() => {
            axios.get(`https://swapi.co/api/people`)
                .then(response => {
                    setState(response.data)
                    navigate(`/${category}/${id}`)
                }).catch(err => {
                    console.log(err);
                });
        }, []);
    }
    return (
        <div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <label name="luke">Choose</label>
                <select name='category' onChange={(e) => onChangeHandler(e)}>
                    <option value='people'>People</option>
                    <option value='planets'>Planet</option>
                </select>
                <input type='text' value={id} name='id' onChange={(e) => onChangeHandler(e)} />
                <input type="submit" value="Submit" />
            </form>
            <Router>
                <People path='/people/:id' info={state} />
                <Planet path='people/:id' info={state} />
            </Router>
        </div>
    )
}


export default App;
