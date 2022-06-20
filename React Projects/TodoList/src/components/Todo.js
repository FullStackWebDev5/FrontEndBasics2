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
import './Todo.css';
import { FaEdit } from 'react-icons/fa'
import { MdDeleteOutline, MdOutlineAddBox } from 'react-icons/md'

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        "Revise Asynchronous Javascript",
        "Practive Array Method Questions",
        "Revise React Components and props",
        "Revise React States",
      ],
    };
  }

  render() {
		const { toDoList } = this.state
    return (
      <Container style={{ margin: "20px auto" }}>
        <Col md={{ span: 4, offset: 4 }}>
          <InputGroup className="mb-3">
            <Form.Control size="lg" type="text" placeholder="Enter To-Do" />
            <Button variant="outline-dark" id="button-addon2">
              <MdOutlineAddBox />
            </Button>
          </InputGroup>
          <ListGroup className='to-do-list'>
						{toDoList.map(toDo => (
							<ListGroup.Item>
              <Row>
                <Col md={9}>{toDo}</Col>
                <Col md={3} className='action-btns'>
                  <Button variant="warning" size='sm'><FaEdit /></Button>
									<Button variant="danger" size='sm'><MdDeleteOutline /></Button>
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
