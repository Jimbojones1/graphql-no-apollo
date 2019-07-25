import React, { Component } from 'react';
import AddDog from '../AddDog';
import Movies from '../DogList';
import { Grid } from 'semantic-ui-react';

class DogContainer extends Component {
  constructor(){
    super();

    this.state = {
      dogs: []
    }
  }
  componentDidMount(){
    // initial fetching of data
    // setting up sockets
    // masonery grids
    // firebase
    this.getDogs();
  }
  getDogs = async () => {

      const options = {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query: '{ getDogs { id, firstName, lastName } }'
        })
      };

    try {
      const response = await fetch('http://localhost:4000/graphql', options);

      if(response.status !== 200){
        // for http errors, Fetch doesn't reject the promise on 404 or 500
        throw Error(response.statusText, ' thrown');
      }

      const dogsParsed = await response.json();
      // after setState render is automatically called
      console.log(dogsParsed, ' data in dogsParsed Fetch')
      this.setState({dogs: dogsParsed.data.getDogs});

    } catch (err){
      console.log(err);
    }
  }
  addDog = async (movie, e) => {
    // The Predefined arguments we pass with .bind
    // this.props.addMovie.bind(null, this.state)

    e.preventDefault();
    console.log(movie)

    const createDog = `
      mutation createDog($input: DogInput){
        createDog(input: $input){
          id
          firstName
          lastName
        }
      }
    `

    const { firstName, lastName } = movie;
    // make our request to the express app
    try {
      const createDog = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: createDog,
          variables: {input: {firstName, lastName}}
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // parse the json into a regular javascript object
      const parsedResponse = await createDog.json();
      console.log(parsedResponse, ' createdMoive data response')


      // During this lesson I'm showing functional Ways of changing our state
      // This reiterates the idea immutability
      // instead of mutating stuff
      // we are creating brand new objects

      // ... the spread operator, nice new tool in es6
      this.setState({dogs: [...this.state.dogs, parsedResponse.data.createDog]})


    } catch(err){
      console.log(err)
    }
  }
  render(){
    return (
      <Grid columns={2} divided style={{ height: '100%' }} verticalAlign='top' stackable>
        <Grid.Row>
          <Grid.Column>
            <Movies movies={this.state.dogs}/>
          </Grid.Column>
          <Grid.Column centered>
            <AddDog addDog={this.addDog}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      )
  }
}


export default DogContainer;
