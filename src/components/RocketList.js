import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/RocketsSlice';
import RocketItem from './RocketItem';

const RocketList = () => {
  const { rockets, isLoading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (<h2 className="rocketLoading">Loading...</h2>);
  }

  return (
    <ul className="rocketList">
      {rockets.map((rocket) => <RocketItem key={rocket.id} rocket={rocket} />)}
    </ul>
  );
};

export default RocketList;
