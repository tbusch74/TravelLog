import React from 'react';
import commentList from '../components/commentList';
import commentForm from '../components/commentForm';
import FriendList from '../components/FriendList';

import Auth from '../utils/auth';
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
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
