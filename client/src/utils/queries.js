import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
    me {
      _id
      username
      email
      travels {
        _id
        travelText
        createdAt
        username
        voteCount
      }
    }
  }`

  export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      travels {
        _id
        travelText
        createdAt
        username
        voteCount
      }
    }
  }
  `

  export const QUERY_USER = gql`
  query user ($username:String!) {
    user (username: $username) {
      _id
      username
      email
      travels {
        _id
        travelText
        createdAt
        username
        voteCount
      }
    }
  }
  `

  export const QUERY_TRAVELS = gql`
    query travels ($username: String) {
      travels (username: $username) {
        _id
        username
        travelText
        createdAt
        voteCount
        votes {
          _id
          username
          createdAt
        }
      }
    }
  `

  export const QUERY_TRAVEL = gql`
  query travel ($id: ID!) {
    travel (_id: $id) {
      _id
      username
      travelText
      createdAt
      voteCount
      votes {
        _id
        username
        createdAt
      }
    }
  }
  `