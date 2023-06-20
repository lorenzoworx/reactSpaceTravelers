import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = ({ rocket }) => (
  <li>
    <img src={rocket.image} alt={rocket.name} />
    <h2>{rocket.name}</h2>
    <p>{rocket.description}</p>
    <button type="button">Reserve Rocket</button>
  </li>
);

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default RocketItem;
