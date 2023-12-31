import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMission } from '../redux/Missions/missionsSlice';

const Missions = () => {
  const missions = useSelector((state) => state.mission.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissions());
    }
  }, [dispatch, missions]);

  const handleJoinMission = (missionId) => {
    const mission = missions.find((mission) => mission.mission_id === missionId);

    if (mission.reserved) {
      dispatch(joinMission(missionId));
    } else {
      dispatch(joinMission(missionId));
    }
  };

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr className="table-head">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="table-status-action">
                {' '}
                <span
                  className={mission.reserved ? 'active-member' : 'not-member'}
                >
                  {mission.reserved ? 'Active Member' : 'Not a Member'}
                </span>
              </td>
              <td className="table-status-action">
                <button
                  className={mission.reserved ? 'leave-mission' : 'join-mission'}
                  type="button"
                  onClick={() => handleJoinMission(mission.mission_id)}
                  disabled={mission.loading}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
