import React, {useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default () => {
    const [ name, setName ] = useState("");
    const [ age, setAge ] = useState("");
    

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/new',{name, age})
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    

    return (
        <div>
            <h1>Add an Author to the Database</h1>
            <form onSubmit={onSubmitHandler}>
                <span>Name</span>
                <input type="text" onChange={e => setName(e.target.value)}/>
                <br/>
                <span>Age</span>
                <input type="number" onChange={e => setAge(e.target.value)}/>
                <br/>
                <input type='submit' />
            </form>
            <Link to="/" >Author Database</Link>
        </div>
    )
}