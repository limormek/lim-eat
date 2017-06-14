/*
 * Base Google Map example
 */
import React from 'react'
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyPlace from './MyPlace.jsx';
import WeWorkLocation from './WeWorkLocation';

export default class SimpleMapPage extends React.Component {
    static propTypes = {
        center: PropTypes.array,
        zoom: PropTypes.number,
        greatPlaceCoords: PropTypes.any
    };

    static defaultProps = {
        center: [32.075306, 34.781972],
        zoom: 14,
        greatPlaceCoords: {lat: 32.065229, lng: 34.769776}

    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="map">
                <GoogleMap
                    bootstrapURLKeys={{key: 'AIzaSyD9z80J0xTs9BrluT_bUDH6LxQet8p9ujM'}}
                    center={this.props.center}
                    zoom={this.props.zoom}>
                    <WeWorkLocation lat={32.075306} lng={34.781972} text={'We'} /* Kreyser Avrora */ />
                    <MyPlace lat={32.087192} lng={34.782392}  /* Kreyser Avrora */ />
                    <MyPlace {...this.props.greatPlaceCoords}/* road circle */ />
                </GoogleMap>
            </div>
        );
    }
}