import React from 'react'
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class MyPlace extends React.Component {
    static propTypes = {
        text: PropTypes.string,
        onClick: PropTypes.func
    };

    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div className="restPin" onClick={this.props.onClick}>
                {this.props.text}
            </div>
        );
    }
}