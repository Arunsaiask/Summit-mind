import React, { useState } from "react";
import axios from "axios";
import { Container, Table, Form, Button } from "react-bootstrap";

const Bycandyear = () => {
  const [text, setText] = useState({ category: "", year: "" });

  const [formData, setformData] = useState([]);

  const { year, category } = text;

  async function onsubmit(e) {
    e.preventDefault();
    const res = await axios.get(`http://localhost:5000/${year}/${category}`);
    setformData(res.data);
  }

  function onchange(e) {
    setText({ ...text, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Container>
        <h3 className="text-center my-2">Search Winners by Year and Category</h3>
        <Form onSubmit={onsubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Year</Form.Label>
            <Form.Control
              type="search"
              onChange={onchange}
              name="year"
              value={year}
              placeholder="Enter Year"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Category</Form.Label>
            <Form.Control
              type="search"
              onChange={onchange}
              name="category"
              value={category}
              placeholder="Enter category"
            />
          </Form.Group>
          <Button type="submit">Search</Button>
        </Form>
        <Table className="my-3" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Fistname</th>
              <th>Surname</th>
              <th>Motivation</th>
              <th>Share</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data) => {
              return (
                <>
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.firstname}</td>
                    <td>{data.surname}</td>
                    <td>{data.motivation}</td>
                    <td>{data.share}</td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Bycandyear;
