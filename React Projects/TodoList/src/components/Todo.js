import React, { Component } from "react";
import {
  Container,
  InputGroup,
  Form,
  Row,
  Col,
  Button,
  ListGroup,
} from "react-bootstrap";
import "./Todo.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineAddBox } from "react-icons/md";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputToDo: "",
      toDoList: [
        "Revise Asynchronous Javascript",
        "Practive Array Method Questions",
        "Revise React Components and props",
        "Revise React States",
      ],
    };
  }

  render() {
    const { inputToDo, toDoList } = this.state;
    return (
      <Container style={{ margin: "20px auto" }}>
        <Col md={{ span: 4, offset: 4 }}>
          <InputGroup className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Enter To-Do"
              value={inputToDo}
              onChange={(e) => this.setState({ inputToDo: e.target.value })}
            />
            <Button
              variant="outline-dark"
              id="button-addon2"
              onClick={() =>
                this.setState((prevState) => ({
                  toDoList: [...prevState.toDoList, inputToDo],
                }))
              }
            >
              <MdOutlineAddBox />
            </Button>
          </InputGroup>
          <ListGroup className="to-do-list">
            {toDoList.map((toDo, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={9}>{toDo}</Col>
                  <Col md={3} className="action-btns">
                    <Button variant="warning" size="sm">
                      <FaEdit />
                    </Button>
                    <Button variant="danger" size="sm">
                      <MdDeleteOutline />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Container>
    );
  }
}

export default Todo;
