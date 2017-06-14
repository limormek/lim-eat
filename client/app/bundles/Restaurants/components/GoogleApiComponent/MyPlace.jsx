import React from 'react'
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class MyPlace extends React.Component {
    static propTypes = {
        name: PropTypes.string,
    };

    static defaultProps = {};

    constructor() {
        super();
        this.state = {
            clickOn: false
        }
    }

    shouldComponentUpdate = shouldPureComponentUpdate;

    onClick() {
        this.setState({clickOn: !this.state.clickOn});
    }

    render() {
        return (
            <div>
                {this.state.clickOn ? <p className="triangle-isosceles top">{this.props.name}</p> : ''}

                <div className="restPin"
                     onClick={this.onClick.bind(this)}
                />
            </div>
        );
    }
}