import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/Missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const loading = useSelector((state) => state.missions.loading);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions]);

  if (loading) {
    return <div>Loading missions...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1>Missions</h1>
      {missions.map((mission) => (
        <div key={mission.mission_id}>
          <h2>{mission.mission_name}</h2>
          <p>{mission.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Missions;
