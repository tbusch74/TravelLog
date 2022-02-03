import React from 'react';

import Nav from '../components/Nav';

const Profile = () => {
  return (
    <div>
      <div className="">
        <Nav />
        <h2 className="">
          {/* Viewing <usernames>'s profile. */}
        </h2>
      </div>

      <div className="">
        <div className="">{/* PRINT COMMENT LIST  */}</div>

        <div className="">{/* PRINT FRIEND LIST */}</div>
      </div>
    </div>
  );
};

export default Profile;
