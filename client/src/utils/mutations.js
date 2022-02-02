import {gql} from '@apollo/client';

// not sure about the set up
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser ($username: String!, $email: String!, $password: String!){ 
  addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
}
`

export const ADD_TRAVEL = gql`
mutation addTravel($travelText: String!) {
  addTravel (travelText: $travelText){
    _id
    username
    travelText
    createdAt
    voteCount
  }
}
`;

export const DELETE_TRAVEL = gql`
mutation deleteTravel($id: ID!) {
  deleteTravel (travelId: $id){
    _id
    username
    travelText
    createdAt
    voteCount
  }
}
`;

export const ADD_VOTE = gql`
mutation addVote($id: ID!) {
  addVote (travelId: $id){
    _id
    username
    travelText
    createdAt
    voteCount
  }
}
`;

export const DELETE_VOTE = gql`
mutation deleteVote($id: ID!) {
  deleteVote (travelId: $id){
    _id
    username
    travelText
    createdAt
    voteCount
  }
}
`;