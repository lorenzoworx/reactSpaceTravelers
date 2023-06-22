import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);

  return (
    <div>
      <h2>My Profile</h2>
      <div className="dragons-table">
        <table>
          <thead>
            <tr>
              <th>My Dragons</th>
            </tr>
          </thead>
          <tbody>
            {reservedDragons.map((dragon) => (
              <tr key={dragon.id}>
                <td>{dragon.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.mission.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  return (
    <div className="profileBox" data-id="profile-box">
      <div className="missionsProfile">
        <h2>My Missions</h2>
        <div className="missionsContainer">
          {reservedMissions.map((reservedMission) => (
            <div
              key={reservedMission.mission_id}
              className="missions"
              data-id="mission"
            >
              {reservedMission.mission_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
