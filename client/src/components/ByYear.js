import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Table } from "react-bootstrap";

const ByYear = () => {
  const [formData, setformData] = useState([]);
  const [text, setText] = useState({ year: "" });
  const { year } = text;

  function onchange(e) {
    setText({ ...text, [e.target.name]: e.target.value });
  }
  async function onsubmit(e) {
    e.preventDefault();
    const res = await axios.post(`http://localhost:5000/${year}`);
    setformData(res.data);
  }

  return (
    <>
      <Container>
        <h3 className="text-center my-3">Search Noble Prize Winners By Year</h3>
        <Form onSubmit={onsubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Year</Form.Label>
            <Form.Control
              type="search"
              onChange={onchange}
              name="year"
              value={year}
              placeholder="Enter year"
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
                  <tr key={data}>
                    <td>{data.id}</td>
                    <td>{data.firstname}</td>
                    <td>{data.surname}</td>
                    <td>{data.motivation}</td>
                    <td>{data.share}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ByYear;
