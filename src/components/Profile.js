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
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter(
    (rocket) => rocket.reserved === true,
  );

  return (
    <div>
      <div className="rocketsProfile">
        <h2>My Rockets</h2>
        {reservedRockets.length > 0 ? (
          <ReservedRocketsTable rockets={reservedRockets} />
        ) : (
          <div>No Rockets Reserved</div>
        )}
      </div>
    </div>
  );
};
export default Profile;
