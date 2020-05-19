/** @format */

import {gql} from 'apollo-boost'

export const getCatsMongoQuery = gql`
  query getCatsMongoQuery {
    getCatsMongo {
      id
      name
      age
      breed
    }
  }
`

export const createCatMongoMutation = gql`
  mutation($createCatMongoInput: CreateCatMongoInput) {
    createCatMongo(createCatMongoInput: $createCatMongoInput) {
      id
      name
      age
      breed
    }
  }
`

export const getRatesQuery = gql`
  {
    rates(currency: "USD") {
      currency
    }
  }
`
