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

CheckBox.PropTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    toggle: React.PropTypes.func.isRequired
};
