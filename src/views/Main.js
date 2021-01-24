import React from 'react';
import { Link } from '@reach/router';
import List from '../components/List';

export default () => {
    
    
    return (
        <div>
            <>
            <Link to="/user/new">     <p>Add and author</p>   </Link>
            <p>We have quotes by:</p>
            <List />
            </>
        </div>
    )
}