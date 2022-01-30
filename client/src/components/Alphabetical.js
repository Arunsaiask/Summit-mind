import React, { useState } from "react";
import { Form, Container, Table, Button } from "react-bootstrap";
import axios from "axios";

const Alphabetical = () => {
  const [formdata, setformData] = useState([]);

  async function onsubmit(e) {
    e.preventDefault();
    const res = await axios.get("http://localhost:5000/");
    setformData(res.data);
  }

  return (
    <Container>
      <h3 className="text-center mx-2">Get Winners List in Alphabetical order</h3>
      <p className="text-center mx-2">please wait for sometime as data is long</p>
      <Form onSubmit={onsubmit}>
        <Button type="submit">Get List</Button>
      </Form>
      <Table className="my-3" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Year</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {formdata.map((data) => {
            return (
              <>
                <tr>
                  <td>{data.firstname}</td>
                  <td>{data.year}</td>
                  <td>{data.category}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Alphabetical;

// <ListGroup.Item>Firstname: {data.firstname} </ListGroup.Item>
//             <ListGroup.Item>Surname: {data.surname} </ListGroup.Item>
//             <ListGroup.Item>Year: {data.year} </ListGroup.Item>
//             <ListGroup.Item>Category: {data.category} </ListGroup.Item>
