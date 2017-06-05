import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h3>
                    Hello, hungry you!
                </h3>

                <button style={divStyle}>Add a restaurant placeholder</button>
            </div>

        )
    }
}


const divStyle = {
    color: 'blue',
};
