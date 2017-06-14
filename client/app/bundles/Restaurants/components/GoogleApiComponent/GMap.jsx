/*
 * Base Google Map example
 */
import React from 'react'
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyPlace from './MyPlace.jsx';
import WeWorkLocation from './WeWorkLocation';

export default class GMap extends React.Component {
    static propTypes = {
        restList: PropTypes.array,
        center: PropTypes.array,
        zoom: PropTypes.number,
        weworkPlaceCoords: PropTypes.any
    };

    static defaultProps = {
        center: [32.079182, 34.785519],
        zoom: 14,
        weworkPlaceCoords: {lat: 32.075306, lng: 34.781972}
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
    }

    render() {
        const {restList, center, zoom, weworkPlaceCoords} = this.props;
        return (
            <div className="map">
                <GoogleMap
                    bootstrapURLKeys={{key: 'AIzaSyD9z80J0xTs9BrluT_bUDH6LxQet8p9ujM'}}
                    center={center}
                    zoom={zoom}>

                    <WeWorkLocation {...weworkPlaceCoords} text={'We'}/>


                    {restList.length > 0 ?  restList.map(item =>
                        <MyPlace key={item.name}
                                 lat={item.lat}
                                 lng={item.lng}
                                 name={item.name}/>) : ''
                    }
                </GoogleMap>
            </div>
        );
    }
}