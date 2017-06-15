import PropTypes from 'prop-types';
import React from 'react';

import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import Restaurant from '../RestaurantItem/Restaurant';
import GMap from '../GoogleApiComponent/GMap'

//Filters
import Stars from '../Filters/Stars'
import CheckBox from '../Filters/Checkbox'
import RangeBar from '../Filters/RangeBar'

const cuisineTypes = [
    'Asian', 'Cafe', 'Italian', 'Meat', 'Salads', 'Fish and Chips', 'Ice Cream'
];

class Restaurants extends React.Component {

    static propTypes = {
        restaurants: React.PropTypes.array.isRequired,
    };

    constructor() {
        super();

        this.state = {
            filterTenbis: false,
            filterKosher: false,
            max_time: 60,
            filterStars: 0,
            filteredRestList: []
        }
    }

    componentWillMount() {
        this.setState({filteredRestList: this.props.restaurants})
    }

    updateFilteredList() {
        let rests = this.props.restaurants;
        //filter by rating
        if (this.state.filterStars) {
            rests = rests.filter(rest => rest.rating >= this.state.filterStars);
        }

        //filter by cuisine
        if (this.state.filterCuisine) {
            rests = rests.filter(rest => (
                rest.cuisine === this.state.filterCuisine
            ));
        }

        //filter by kosher + 10bis
        if (this.state.filterKosher) {
            rests = rests.filter(rest => (
                rest.kosher === this.state.filterKosher
            ));
        }

        if (this.state.filterTenbis) {
            rests = rests.filter(rest => (
                rest.tenbis === this.state.filterTenbis
            ));
        }

        //filter by max_time
        if (this.state.max_time) {
            rests = rests.filter(rest => rest.max_time <= this.state.max_time);
        }

        this.setState({
            filteredRestList: rests
        })
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({filterStars: nextValue}, this.updateFilteredList);
    };

    onMapPinClick() {
        console.log('clicked!');
    }


    onCuisineSelected(e) {
        this.setState({filterCuisine: e.target.value}, this.updateFilteredList);
    }

    onToggleCheckbox(e) {
        if (e.target.name === 'isTenbis') {
            this.setState({filterTenbis: e.target.checked}, this.updateFilteredList)
        } else if (e.target.name === 'isKosher') {
            this.setState({filterKosher: e.target.checked}, this.updateFilteredList)
        }
    }

    onMaxTimeUpdate(e) {
        this.setState({
            max_time: e.target.value
        }, this.updateFilteredList);

    }

    render() {

        return (

            <div className="pageContent">
                <Link to={'/new'}>
                    <button type="button" className="btn btn-danger btn-circle btn-lg">
                        <i className="glyphicon glyphicon-plus"></i>
                    </button>
                </Link>

                <Header/>

                <div>
                    <div className="filters">

                        {/*Filters*/}
                        <Stars
                            title='Filter by rating:'
                            name='Rating' count={3} val={0}
                            update={this.onStarClick.bind(this)}/>
                        <CheckBox title={'Kosher only?'} name={'isKosher'} toggle={this.onToggleCheckbox.bind(this)}/>
                        <CheckBox title={'10bis only?'} name={'isTenbis'} toggle={this.onToggleCheckbox.bind(this)}/>

                        <RangeBar
                            title='Max delivery time:'
                            name="max_time"
                            val={+this.state.max_time}
                            update={this.onMaxTimeUpdate.bind(this)}/>

                        <label className="filter">
                            What's your type?
                            <select
                                onChange={this.onCuisineSelected.bind(this)}
                                placeholder="What's your type?">
                                <option></option>

                                {cuisineTypes.map(n => (
                                        <option key={n} value={n} defaultValue={this.state.selected === n}>{n}</option>
                                    )
                                )}
                            </select>
                        </label>
                    </div>

                    <GMap restList={this.state.filteredRestList}/>

                </div>

                {this.state.filteredRestList.map(item => <Restaurant key={item.name} rest={item}/>)}

            </div>

        )
    }

}


export default Restaurants;
