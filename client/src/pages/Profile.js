import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { useParams } from 'react-router-dom';
import TravelList from "../components/TravelList";

const Profile = () => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });
  const userTravels = data?.user?.travels|| data?.me?.travels || [];
  console.log(data)
  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : ( 
        <>
      <h2 className="">
          Viewing {userParam ? `${data.user.username}'s` : 'your'} profile. 
      </h2>
        <TravelList travels = {userTravels} />
        </>
      )}
    </main>
  );
}

export default Profile;
