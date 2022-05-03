import React, { Component } from "react";

export class ClassComponent2 extends Component {
  constructor(props) {
    super(props);
    console.log("Inside the constructor");
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    // Mock API which takes 5s to load
    console.log("Inside componentDidMount");
    setTimeout(() => {
      this.setState({
        products: [
          {
            title: "Product 1",
            description:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum",
          },
          {
            title: "Product 2",
            description:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum",
          },
          {
            title: "Product 3",
            description:
              "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum",
          },
        ],
      });
    }, 5000);
  }

  componentDidUpdate(){
    console.log("Inside componentDidUpdate")
  }

  render() {
    console.log("Inside the render method");
    let { products } = this.state;
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassComponent2;

/*
  Life Cycle of React Components:
  1. Mounting - Rendered to the DOM for the first time
    (Birth in case of Human)
    componentDidMount - This method will execute only when the component has mounted successfully

    Eg: For making API Calls (Component depended on certain data)
  2. Updating - If any change in props (New props) or state (setState), the component will apply new state and props and re-render
    (Any life milestones in case of Human)
    componentDidUpdate - This method will execute only when the component has updated successfully
  3. Unmounting


  render -> process in which components are evaluated and respective html is generated out of it and pushed inside the DOM

  Components will re-render whenever there is any change is state/props
*/
