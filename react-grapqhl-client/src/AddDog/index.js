import React, { Component } from 'react';
import { Form, Button, Header }from 'semantic-ui-react';
class AddDog extends Component {
  state = {
    firstName: '',
    lastName: ''
  }
  handleInput = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value});
  }
  render(){
    return (
      <React.Fragment>
        <Header as='h1'>Add Dog </Header>
        <Form onSubmit={this.props.addDog.bind(null, this.state)}>
          <Form.Input value={this.state.firstName} placeholder="first name" name='firstName' onChange={this.handleInput}/>
          <Form.Input value={this.state.lastName} placeholder="last name" name='lastName' onChange={this.handleInput}/>
          <Button type="Submit">Add Contact</Button>
        </Form>
      </React.Fragment>

      )
  }

}


export default AddDog;
