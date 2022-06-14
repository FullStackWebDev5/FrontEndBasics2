import React, { Component } from "react";

export class RenderingUsingLoops extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
          name: "Pranati",
          batch: 10,
          country: "India",
        },
        {
          name: "Satyam",
          batch: 9,
          country: "USA",
        },
        {
          name: "Sunil",
          batch: 6,
          country: "India",
        },
        {
          name: "Santhana",
          batch: 5,
          country: "America",
        },
        {
          name: "Shubham",
          batch: 11,
          country: "Canada",
        },
      ],
    };
  }
  render() {
    let { students } = this.state;
    return (
			<>
				{students.map((student, index) => (
					<div
						style={{
							display: "flex",
							justifyContent: "space-around",
							border: "1px solid black",
							margin: "10px",
							padding: "10px",
						}}
						key={index}
					>
						<h1>{student.name}</h1>
						<h1>{student.batch}</h1>
						<h1>{student.country}</h1>
					</div>
				))}
			</>
    );
  }
}

export default RenderingUsingLoops;
