import PropTypes from 'prop-types';
import React from 'react';

export default class CheckBox extends React.Component {

    render() {
        const {name, title, toggle} = this.props;
        return (
            <div>
                <span>{title}</span>
                <input
                    name={name}
                    type="checkbox"
                    onChange={toggle}>
                </input>
            </div>
        )
    }

}

CheckBox.PropTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    toggle: React.PropTypes.func.isRequired
};
