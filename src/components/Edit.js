import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default props => {
    const { id } = props;
    const [ name, setName ] = useState('');
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + id)
            .then(res => {
                setName(res.data.name);
                setLoaded(true)
            })
    }, [])

    const editAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/users/update/' + id, {name})
            .then(res => {
                navigate("/");
            })
    }


    return (
        <div>
            <h2>Update this Author</h2>
            { loaded ?
            <form onSubmit={editAuthor}>
                <span>Name</span>
                <input type="text" value={name} name="name"
                onChange={e=>{setName(e.target.value)}}/>
                <br />
                <input type="submit"/> 
                <br/>
                <p><Link to="/">Cancel</Link></p>          
            </form>
            : "not loading"}
        </div>
    )
}