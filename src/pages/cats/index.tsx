/** @format */

import * as React from 'react'

import client from '../../graphql-client'
import {getCatsMongoQuery, createCatMongoMutation} from '../../query/catsMongo'

interface IState {
  catsList: any[]
}

let catNum = 1

class Cats extends React.Component<{}, {}> {
  public state: IState = {
    catsList: [],
  }

  public componentDidMount() {
    console.log('componentDidMount')
    this.getCats()
  }

  public getCats = () => {
    client
      .query({
        query: getCatsMongoQuery,
      })
      .then(res => {
        const {getCatsMongo} = res.data
        console.log(getCatsMongo)
        this.setState({
          catsList: getCatsMongo,
        })
      })
  }

  public createCat = () => {
    const postData = {
      name: `katty_${++catNum}`,
      age: catNum,
      breed: true,
    }
    client
      .mutate({
        mutation: createCatMongoMutation,
        variables: {createCatMongoInput: postData},
      })
      .then(res => {
        console.log(res)
        this.getCats()
      })
      .catch(err => {
        console.log(err)
      })
  }

  public renderList = () => {
    const {catsList} = this.state
    const listItems = catsList.map(cat => <li key={cat.id}>{cat.name}</li>)
    return listItems
  }

  public render() {
    return (
      <>
        <h1>Cats</h1>
        <ul>{this.renderList()}</ul>
        <button onClick={this.createCat}>新增Cat</button>
      </>
    )
  }
}

export default Cats
