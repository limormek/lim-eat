import PropTypes from 'prop-types';
import React from 'react';

export default class RangeBar extends React.Component {
    render() {

        const {title, name, min, max, step, val, update} = this.props;

        return (
            <div>
                <span>{title}</span>
                <input
                    name={name}
                    type="range"
                    min={min}
                    max={max}
                    step={step}

                    defaultValue={val}
                    onChange={update} />
                {val}

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