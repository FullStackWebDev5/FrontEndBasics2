import "./App.css";
// import ChildComponent from "./components/ChildComponent";
// import StudentIntroduction from './components/StudentIntroduction';
// import ClassComponent1 from './components/ClassComponent1';
// import Counter from './components/Counter'
// import BulbOnOff from './components/BulbOnOff'
import ClassComponent2 from './components/ClassComponent2'

function App() {
  return (
    <div className="App">
      {/* <ChildComponent
        personNo="1"
        personImg='https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/check_user_man-512.png'
        personDetail={{
          firstName: "John",
          lastName: "Doe",
        }}
        hobbies={["Swimming", "Jogging"]}
      />
      <ChildComponent
        personNo="2"
        personImg='https://thumbs.dreamstime.com/b/young-man-confusing-answering-test-paper-cartoon-illustration-83975396.jpg'
        personDetail={{
          firstName: "Shyam",
          lastName: "Kumar",
        }}
        hobbies={["Reading", "Cycling"]}
      /> */}
      {/* <StudentIntroduction
        firstName="Sumit"
        lastName="Kumar"
        batchNo={8}
        hobbies={["Reading", "Cycling", "Jogging"]}
      />
      <StudentIntroduction
        firstName="Prakash"
        lastName="Sharma"
        hobbies={["Swimming", "Running", "Reading Novels"]}
      />
      <StudentIntroduction
        firstName="Devesh"
        batchNo={6}
        hobbies={["Stamp Collection", "Programming", "Reading Novels", "Swimming"]}
      /> */}
      {/* <ClassComponent1 message='JavaScript' /> */}
      {/* <ClassComponent1 message='React' /> */}
      {/* <Counter /> */}
      {/* <BulbOnOff /> */}
      <ClassComponent2 />
    </div>
  );
}

export default App;

// Component are two types:
// 1. Class based components
// 2. Function based components

// Components are re-rendered only in two cases:
// 1. Any change in 'props'
// 2. Any change in 'state'

/* state vs props:
    1. State is local value for the component
       Props are sent from parent component down to the child component */

// props -> Parent Component to the Child Component (One-way data-binding)

// In function based components - you can relate props with parameters

/* Class Based Components v/s Function based components
1. a) 'this' keyword dependency in class based components, no 'this' keyword dependecy in functional components
   b) Need to type releatively extra lines of code for each class based component (extends, constructor, super)
2. Class based components use render method, function based components return directly
3. State could only be created in Class based components
    - Because of that, only Class based components were used for stateful logic/code, functional components were use for stateless logic (this.state, this.setState)
    - With the coming of hooks, you can now create states in functional components
    (useState)
*/
