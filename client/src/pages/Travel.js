import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_TRAVEL } from '../utils/queries';
import TravelList from "../components/TravelList";


const Travel = () => {
  const { loading, data } = useQuery(QUERY_TRAVEL);

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (<>
        Something here
        </>
      )}
    </main>
  );
};

export default Travel;
  