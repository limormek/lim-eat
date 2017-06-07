import PropTypes from 'prop-types';
import React from 'react';

export default class RangeBar extends React.Component {
    render() {

        return (
            <div>
                <span>{this.props.title}</span>
                <input
                    name={this.props.name}
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}

                    defaultValue={this.props.val}
                    onChange={this.props.update} />
                {this.props.val}

            </div>
        )
    }

}

RangeBar.propTypes = {
    title: React.PropTypes.string,
    name: React.PropTypes.string,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.number,
    update: React.PropTypes.func.isRequired
};


RangeBar.defaultProps = {
    min: 15,
    max: 120,
    step: 5,
    val: 120
};