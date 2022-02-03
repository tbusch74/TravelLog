import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_VOTE, DELETE_VOTE } from '../../utils/mutations';

const VoteButton = ({travelId, voted}) => {

    const [addVote, { addError }] = useMutation(ADD_VOTE)
    const [deleteVote, { deleteError }] = useMutation(DELETE_VOTE)
    
    const handleClick = async event => {
        event.preventDefault();
        console.log(voted)
        console.log(travelId)
        if(!voted){
            try{
                await addVote({
                    variables:{id:travelId}
                })
            } catch(error){
                console.error(error);
            }
        }else{
            try{
                await deleteVote({
                    variables:{id:travelId}
                })
            } catch(error){
                console.error(error);
            }
        }
    }

    return (
        <>

        <button type = 'button' onClick={handleClick}>
            {!voted ?(
                <div>Upvote This Trip!</div>
            ):(
                <div>Remove Upvote For This Trip!</div>
            )}
        </button>
        {addError && <div>Upvote Failed</div>}
        {deleteError && <div>Vote Removal Failed</div>}
        </>
    )
}

export default VoteButton;