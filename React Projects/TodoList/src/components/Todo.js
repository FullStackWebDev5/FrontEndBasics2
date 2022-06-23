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
import { MdDeleteOutline, MdOutlineAddBox, MdOutlineAdd } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { GrAdd } from "react-icons/gr";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputToDo: "",
      toDoList: [],
			isEditing: false,
			editingIndex: ''
    };
  }

	addOrUpdateToDo(){
		const { inputToDo, isEditing, editingIndex } = this.state;
		if(inputToDo){
			if(isEditing) {
				this.setState((prevState) => ({
					toDoList: prevState.toDoList.map((todo, index) => {
						if(index === editingIndex)
							todo = inputToDo
						return todo
					}),
					inputToDo: "",
					isEditing: false,
					editingIndex: ''
				}))
			} else {
				this.setState((prevState) => ({
					toDoList: [...prevState.toDoList, inputToDo],
					inputToDo: "",
				}))
			}
		}
	}

	editTodo(inputIndex) {
		this.setState((prevState) => ({
			inputToDo: prevState.toDoList[inputIndex],
			isEditing: true,
			editingIndex: inputIndex
		}))
	}

	deleteTodo(inputIndex) {
		this.setState((prevState) => ({
			toDoList: prevState.toDoList.filter((todo, index) => index !== inputIndex)
		}))
	}

  render() {
    const { inputToDo, toDoList, isEditing } = this.state;
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
							className='to-do-input'
            />
            <Button
              variant="dark"
              id="button-addon2"
              onClick={() => this.addOrUpdateToDo()}
            >
              {isEditing ? <AiOutlineCheckCircle /> : <MdOutlineAdd />}
            </Button>
          </InputGroup>
          <ListGroup className="to-do-list">
            {toDoList.map((toDo, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col xs={9}>{toDo}</Col>
                  <Col xs={3} className="action-btns">
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => this.editTodo(index)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => this.deleteTodo(index)}
                    >
                      <MdDeleteOutline />
                    </Button>
										<Button
											variant="success"
											size="sm"
										>
											<IoCheckmarkDoneOutline />
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
