import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, Button, Badge,
} from 'react-bootstrap';
import { fetchDragons, reserveDragon, cancelReservation } from '../redux/Dragons/dragonsSlice';
import './Dragons.css';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  const handleReserveDragon = (id) => {
    dispatch(reserveDragon({ id }));
  };

  const handleCancelReservation = (id) => {
    dispatch(cancelReservation({ id }));
  };

  if (dragons.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        Space Travellers Hub
      </h1>
      <div>
        {dragons.map((dragon) => (
          <Card key={dragon.id} className="dragon-card">
            <Card.Img variant="top" src={dragon.flickr_images[0]} className="dragon-card-image" />
            <Card.Body className="dragon-card-body">
              <Card.Title>{dragon.rocket_name}</Card.Title>
              <Card.Text>
                {' '}
                {dragon.name}
              </Card.Text>
              <Card.Text>
                {dragon.reserved && (
                <Badge className="reserved" variant="danger">Reserved</Badge>
                )}
                {' '}
                {dragon.description}
              </Card.Text>
              <Card.Body>
                {dragon.reserved ? (
                  <Button className="cancel" variant="danger" onClick={() => handleCancelReservation(dragon.id)}>
                    Cancel Reservation
                  </Button>
                ) : (
                  <Button className="Reserve" onClick={() => handleReserveDragon(dragon.id)}>
                    Reserve Dragon
                  </Button>
                )}
              </Card.Body>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dragons;
