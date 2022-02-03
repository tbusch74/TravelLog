import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_TRAVELS } from '../utils/queries';
import TravelList from "../components/TravelList";


const Home = () => {
  const { loading, data } = useQuery(QUERY_TRAVELS);
  const travels = data?.travels || [];

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <TravelList travels = {travels} />
      )}
    </main>
  );
};

export default Home;
  