import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReserve, cancelReserve } from '../redux/rockets/RocketsSlice';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();
  return (
    <li className="rocketItem">
      <img src={rocket.image} alt={rocket.name} />
      <div className="itemDiv">
        <h2>{rocket.name}</h2>
        {rocket.reserved && <div className="reserved">Reserved</div>}
        <p>{rocket.description}</p>
        {!rocket.reserved && <button type="button" onClick={() => dispatch(rocketReserve(rocket.id))}>Reserve Rocket</button>}
        {rocket.reserved && <button type="button" onClick={() => dispatch(cancelReserve(rocket.id))}>Cancel Reservation</button>}
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketItem;
