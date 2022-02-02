import React from "react";
import { useQuery } from '@apollo/client';
import Footer from "../components/Footer";
import Login from "./Login";
import Nav from "../components/Nav";

const Home = () => {
  // use useQuery hook to make query request
  // const {  data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];
  // console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
        </div>
      </div>
    </main>
  );
};

export default Home;
  