import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <h3>
                Hello, hungry you!
            </h3>

            <Link to={'/new'}>
                Add a new restaurant
            </Link>
        </div>
    )
}

