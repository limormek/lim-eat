import PropTypes from 'prop-types';
import React from 'react';

const Restaurants = ({ restaurants }) => (

  <div>
    <h3>
      Hello, hungry you!
    </h3>
    <hr />
      <ul>
          {restaurants.map(item => <Restaurant key={item.name} rest = {item}/>)}
      </ul>

  </div>
);


Restaurants.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

const Restaurant = (props) => <li>{props.rest.name}</li>

export default Restaurants;
