import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TRAVEL } from '../../utils/mutations';
import { QUERY_USER, QUERY_USERS } from '../../utils/queries';
import Auth from '../../utils/auth';

const TravelForm = () => {

    const [travelText, setText] = useState('');
    const handleChange = event => {
        setText(event.target.value);
    };
    const username = Auth.getProfile().data.username 

    const [addTravel] = useMutation(ADD_TRAVEL, {
    //     update(cache, { data: { addTravel } }) {
    //         const { users } = cache.readQuery({ query: QUERY_USERS })
    //     try {
    //         // could potentially not exist yet, so wrap in a try...catch
    //          const {user} = cache.readQuery({
    //             query: QUERY_USER,
    //             variables: {'username':username}
    //             });
    //         cache.writeQuery({
    //             query: QUERY_USER,
    //             variables: {'username':username},
    //             data: {user: {...user, travels: [addTravel, ...user.travels] }}
    //         });
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
    });
    
    const handleFormSubmit = async event => {
    event.preventDefault();
    try {
        // add thought to database
        await addTravel({
          variables: { travelText }
        });
    
        // clear form value
        setText('');
      } catch (e) {
        console.error(e);
      }
    };
    return (
        <div>
            <form
            onSubmit={handleFormSubmit}
            >
                <textarea
                placeholder="Tell the world about your recent trip!"
                value={travelText}
                onChange={handleChange}
                ></textarea>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default TravelForm;