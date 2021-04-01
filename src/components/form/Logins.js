import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class Logins extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    city: "",
    message: "",
    cities: [],
  };

  componentDidMount() {
    this.getCities();
  }

  getCities = () => {
    fetch("http://localhost:3000/cities")
      .then((response) => response.json())
      .then((response2) => this.setState({ cities: response2 }));
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(`${this.state.email} added database`);
  };

  render() {
    return (
      <div className="bg-light">
        <h1 className="text-center text-primary font-italic py-2">Sign In</h1>
        <Form onSubmit={this.handleSubmit} autoComplete="off">
          <FormGroup>
            <Label className="text-info" htmlFor="username">
              Username
            </Label>
            <Input
              onChange={this.handleChange}
              type="text"
              id="username"
              name="username"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label className="text-info" htmlFor="password">
              Password
            </Label>
            <Input
              onChange={this.handleChange}
              type="password"
              id="password"
              name="password"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label className="text-info" htmlFor="email">
              Email
            </Label>
            <Input
              onChange={this.handleChange}
              type="email"
              id="email"
              name="email"
              required
            />
            <small className="form-text">
              We'll never share your email with anyone else.
            </small>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="city">City</Label>
            <Input
              onChange={this.handleChange}
              type="select"
              id="city"
              name="city"
              required
            >
              <option>select</option>
              {this.state.cities.map((city) => (
                <option key={city.id}>{city.cityName}</option>
              ))}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Input
              onChange={this.handleChange}
              type="textarea"
              id="message"
              name="message"
              placeholder="Type..."
              style={{ resize: "none" }}
              required
            />
          </FormGroup>
          <Button type="submit" color="danger" block>
            Send
          </Button>
        </Form>
      </div>
    );
  }
}
