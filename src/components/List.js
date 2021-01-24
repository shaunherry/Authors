import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {

    const [author, setAuthor] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/users/")
            .then(response => {
                setAuthor(response.data.users)
            })
            .catch(err => console.log(err))
    }, []);

    


    return (
        <div className="form">
            <table className="table">
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        author && author.map((authors, i) => {
                            return  <tr key={i}>

                                <td>{authors.name}</td>
                                <td>
                                    <Link to={`/users/${authors._id}`}><button>edit</button></Link>
                                    <button>DESTROY</button>
                                </td>
                            </tr>
                        })}
                </tbody>






            </table>
        </div>
    )
}


