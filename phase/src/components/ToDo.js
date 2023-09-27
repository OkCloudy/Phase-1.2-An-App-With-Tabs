import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Form from 'react-bootstrap/Form';


class ToDo extends Component {
	constructor(props) {
		super(props);

		// Setting up state
		this.state = {
			userInput: "",
			list: [],
		};
	}

	// Set a user input value
	updateInput(value) {
		this.setState({
			userInput: value,
		});
	}

	// Add item if user input in not empty
	addItem() {
		if (this.state.userInput !== "") {
			const userInput = {
				// Add a random id which is used to delete
				id: Math.random(),

				// Add a user value to list
				value: this.state.userInput,
			};

			// Update list
			const list = [...this.state.list];
			list.push(userInput);

			// reset state
			this.setState({
				list,
				userInput: "",
			});
		}
	}

	// Function to delete item from list use id to delete
	deleteItem(key) {
		const list = [...this.state.list];

		// Filter values and leave value which we need to delete
		const updateList = list.filter((item) => item.id !== key);

		// Update list in state
		this.setState({
			list: updateList,
		});
	}

	editItem = (index) => {
	const todos = [...this.state.list];
	const editedTodo = prompt('Edit the todo:');
	if (editedTodo !== null && editedTodo.trim() !== '') {
		let updatedTodos = [...todos]
		updatedTodos[index].value= editedTodo
		this.setState({
		list: updatedTodos,
	});
	}
	}

	render() {
		return (
			<Container>
				<Row
					style={{
						display: "flex",
						justifyContent: "Left",
						alignItems: "center",
						fontSize: "3rem",
					}}
				>
					ToDo List
				</Row>

				<Row
					style={{
						marginTop: "1rem",
						marginBottom: "1rem",
					}}
				>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="New entry..."
							size="lg"
							value={this.state.userInput}
							onChange={(item) =>
								this.updateInput(item.target.value)
							}
							aria-label="add something"
							aria-describedby="basic-addon2"
						/>
							<Button
								style={{marginLeft:"10px"}}
								variant="dark"
								className="mt-2"
								onClick={() => this.addItem()}
							>
								Add
							</Button>
					</InputGroup>
				</Row>
				<Row>
					<Col md={{ span: 5, offset: 4 }}>
						<ListGroup>
							{/* map over and print items */}
							{this.state.list.map((item, index) => {
								return (
								<div key = {index} >
									<ListGroup.Item
										variant="dark"
										action
										style={{display:"flex",
												justifyContent:'space-between',
												padding: "5px"
									}}
									>
										{item.value}
										<Button style={{marginRight:"10px", marginLeft:"10px"}}
										variant = "light"
										onClick={() => this.deleteItem(item.id)}>
										Delete
										</Button>
										<Form.Check
											type='checkbox'
										/>
									</ListGroup.Item>
								</div>
								);
							})}
						</ListGroup>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ToDo;
