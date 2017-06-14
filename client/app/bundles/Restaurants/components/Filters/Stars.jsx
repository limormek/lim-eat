import PropTypes from 'prop-types';
import React from 'react';

import StarRatingComponent from 'react-star-rating-component';
import {COLOR_PRIMARY, COLOR_UNSELECTED} from '../../constants/restaurantsConstants'

export default class Stars extends React.Component {
    render() {

        return (
            <div className="filter">
                <span>{this.props.title}</span><br/>
                <StarRatingComponent
                    name={this.props.name}
                    value={this.props.val}
                    starCount={this.props.count}
                    starColor={COLOR_PRIMARY}
                    emptyStarColor={COLOR_UNSELECTED}
                    onStarClick={this.props.update}
                    editing={true}
                />

            </div>
        )
    }

}

Stars.propTypes = {
    title: React.PropTypes.string,
    name: React.PropTypes.string,
    count: React.PropTypes.number,
    val: React.PropTypes.number,
    update: React.PropTypes.func.isRequired
};


Stars.defaultProps = {
    count: 3,
    val: 0
};