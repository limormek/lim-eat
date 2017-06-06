import PropTypes from 'prop-types';
import React from 'react';

export default class CheckBox extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.title}</span>
                <input
                    name={this.props.name}
                    type="checkbox"
                    onChange={this.props.toggle}>
                </input>
            </div>
        )
    }

}

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    toggle: PropTypes.func.isRequired
};
