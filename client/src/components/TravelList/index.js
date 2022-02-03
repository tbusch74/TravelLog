import React from 'react';
import { Link } from 'react-router-dom';

const TravelList = ({ travels }) => {
  if (!travels.length) {
    return <h3>No Travels Yet</h3>;
  }

  return (
    <div>
      {travels &&
        travels.map(travels => (
          <div key={travels._id}>
            <p>
              <Link
                to={`/profile/${travels.username}`}
              >
                {travels.username}
              </Link>{' '}
              traveled on {travels.createdAt}
            </p>
            <div>
              <Link to={`/travel/${travels._id}`}>
                <p>{travels.travelText}</p>
                <p>
                  {travels.voteCount} Traveler{travels.voteCount === 1 ? '' : 's'} liked this trip!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TravelList;