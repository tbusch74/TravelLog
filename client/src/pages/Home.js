import React from "react";
import { useQuery } from '@apollo/client';
import Footer from "../components/Footer";
import Login from "./Login";
import Nav from "../components/Nav";

const Home = () => {

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
  