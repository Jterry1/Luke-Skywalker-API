import React, { useState, navigate } from 'react';

const Wrapper = (props) => {
    const [category, setCategory] = useState('');
    const [id, setId] = useState('');

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
        navigate(`/${category}/${id}`);
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
        </div>
    )

}


export default Wrapper;