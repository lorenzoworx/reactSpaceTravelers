import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, ListGroup, Button, Badge,
} from 'react-bootstrap';
import { fetchDragons, reserveDragon, cancelReservation } from '../redux/Dragons/dragonsSlice';

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
    return <div>Loading...</div>; // Add a loading state or UI while fetching data
  }

  return (
    <div>
      <h1>Dragons</h1>
      <div>
        {dragons.map((dragon) => (
          <Card key={dragon.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dragon.flickr_images[0]} />
            <Card.Body>
              <Card.Title>{dragon.rocket_name}</Card.Title>
              <Card.Text>
                {' '}
                Type:
                {' '}
                {dragon.type}
              </Card.Text>
              <Card.Text>
                {dragon.reserved && (
                  <Badge variant="danger">Reserved</Badge>
                )}
                Description:
                {' '}
                {dragon.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                ID:
                {' '}
                {dragon.id}
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {dragon.reserved ? (
                <Button variant="danger" onClick={() => handleCancelReservation(dragon.id)}>
                  Cancel Reservation
                </Button>
              ) : (
                <Button onClick={() => handleReserveDragon(dragon.id)}>
                  Reserve Dragon
                </Button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dragons;
