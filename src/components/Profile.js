import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function ReservedRocketsTable({ rockets }) {
  return (
    <table>
      <thead>
        <tr>
          <th>My Rockets</th>
        </tr>
      </thead>
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
        <table>
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          <tbody>
            {reservedMissions.map((reservedMission) => (
              <tr key={reservedMission.mission_id}>
                <td>{reservedMission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
        <div className="dragons-table">
          <h2>My Dragons</h2>
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
