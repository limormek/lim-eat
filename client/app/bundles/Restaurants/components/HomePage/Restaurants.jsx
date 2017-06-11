import PropTypes from 'prop-types';
import React from 'react';

import Header from '../Header/Header';
import Restaurant from '../RestaurantItem/Restaurant';

//Filters
import Stars from '../Filters/Stars'
import CheckBox from '../Filters/Checkbox'
import RangeBar from '../Filters/RangeBar'

const cuisineTypes = [
    'Asian', 'Cafe', 'Italian', 'Hamburgers', 'Salads'
];

class Restaurants extends React.Component {

    static propTypes = {
        restaurants: React.PropTypes.array.isRequired
    };

    constructor() {
        super();

        this.state = {
            filterTenbis: false,
            filterKosher: false,
            max_time: 120,
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
                this.state.filterCuisine === cuisineTypes[0] ||
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

        //todo change
        let mapPlaceholderUrl = "http://dailygenius.com/wp-content/uploads/2016/04/google-maps-new-interface1.jpg";

        return (

            <div>
                <Header/>

                <div>

                    {/*Filters*/}
                    <Stars title='Filter by rating:'
                           name='Rating' count={3} val={0}
                           update={this.onStarClick.bind(this)}/>
                    <CheckBox title={'Kosher only?'} name={'isKosher'} toggle={this.onToggleCheckbox.bind(this)}/>
                    <CheckBox title={'10bis only?'} name={'isTenbis'} toggle={this.onToggleCheckbox.bind(this)}/>

                    <RangeBar
                        title='Max delivery time:'
                        name="max_time"
                        val={+this.state.max_time}
                        update={this.onMaxTimeUpdate.bind(this)}/>

                    <label>
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

                <br/>

                <img style={mapStyle}
                     src={mapPlaceholderUrl}/>
                <ul>
                    {this.state.filteredRestList.map(item => <Restaurant key={item.name} rest={item}/>)}
                </ul>

            </div>

        )
    }

}

//temp internal styling
const mapStyle = {
    width: 400,
    height: 200
};


export default Restaurants;
