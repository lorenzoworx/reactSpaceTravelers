import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function ReservedRocketsTable({ rockets }) {
  return (
    <table>
      <tbody>
        {rockets.map((rocket) => (
          <tr key={rocket.id}>
            <td>{rocket.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ReservedRocketsTable.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

const Profile = () => {
  const missions = useSelector((state) => state.mission.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter(
    (rocket) => rocket.reserved === true,
  );
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
      <div className="rocketsProfile">
        <h2>My Rockets</h2>
        {reservedRockets.length > 0 ? (
          <ReservedRocketsTable rockets={reservedRockets} />
        ) : (
          <div>No Rockets Reserved</div>
        )}
      </div>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
