import React from 'react';
import { Card, Button} from 'semantic-ui-react';
// Pure Function, takes an input and renders ui
const Movies = (props) => {
  // you'll propably have to map over the movies and create your list items here
  const movies = props.movies.map((movie, i) => {
    console.log(movie, ' movie')
    return (
      <Card key={movie.id}>
        <Card.Content>
          <Card.Header>{movie.firstName}</Card.Header>
          <Card.Description>{movie.lastName}</Card.Description>
        </Card.Content>
      </Card>
      )
  })

  return (
    <div>
      <h3>Movies</h3>
      <Card.Group className="centered">
        {movies}
      </Card.Group>
    </div>
    )
}


export default Movies;
