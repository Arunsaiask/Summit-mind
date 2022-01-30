import React, { useState } from "react";
import "./ByName.css";
import axios from "axios";
import { Form, Container, ListGroup, Button } from "react-bootstrap";

const ByName = () => {
  const [text, setText] = useState({ name: "" });
  const { name } = text;
  const [data, setData] = useState([]);
  const [error,setError] = useState(false)
  

  function onchange(e) {
    setText({ ...text, [e.target.name]: e.target.value });
  }
  async function onsubmit(e) {
    e.preventDefault();
    if(name){
      const res = await axios.get(`http://localhost:5000/${name}`);
      setData(res.data)
      setError(false)
    } else{
       setError(true)
    }
  }

  return (
    <>
      <Container className="byName">
        <ListGroup>
        <ListGroup className="text-center"><h4>Search Noble Prize Winner By Name</h4></ListGroup>
          <Form onSubmit={onsubmit} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="search"
                onChange={onchange}
                name="name"
                value={name}

                placeholder="Enter Name"
              />
            </Form.Group>
            <Button type="submit">Search</Button>
          </Form>
        </ListGroup>
        {error===true ? <ListGroup className="my-3">{"Please enter name"}</ListGroup> : null }
        <ListGroup className="my-3">
        <ListGroup.Item className="text-center">Person details</ListGroup.Item>
        <ListGroup.Item>Id:   {data.id}</ListGroup.Item>
        <ListGroup.Item>First Name:   {data.firstname}</ListGroup.Item>
        <ListGroup.Item>SurName:    {data.surname}</ListGroup.Item>
        <ListGroup.Item>Motivation:    {data.motivation}</ListGroup.Item>
        <ListGroup.Item>share:    {data.share}</ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
};

export default ByName;
