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
      </div>
    </div>
  );
};

export default Profile;
