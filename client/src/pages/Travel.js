import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_TRAVEL } from '../utils/queries';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VoteButton from "../components/VoteButton"
import Auth from '../utils/auth';

const Travel = () => {
  const { _id:travelId} = useParams();

  const { loading, data } = useQuery(QUERY_TRAVEL,{
    variables:{id:travelId}
  });

  const isPresent = function() {
    for(let i=0; i<data.travel.votes.length; i++){
      if(Auth.getProfile().data.username === data.travel.votes[i].username){
        return true
      }
    }
    return false
  }

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div key={data.travel._id}>
          <p>
            <Link
              to={`/profile/${data.travel.username}`}
            >
              {data.travel.username}
            </Link>{' '}
            traveled on {data.travel.createdAt}
          </p>
          <div>
            <Link to={`/travel/${data.travel._id}`}>
              <p>{data.travel.travelText}</p>
              <p>
                {data.travel.voteCount} Traveler{data.voteCount === 1 ? '' : 's'} liked this trip!
              </p>
              {Auth.loggedIn() ? (
                <>
              <VoteButton travelId={data.travel._id} voted={isPresent()} />
              </>
              ):(<></>)}
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default Travel;
  