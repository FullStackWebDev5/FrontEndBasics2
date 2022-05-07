import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { citiesOption } from './citiesOption';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    city: '',
    tnCAgreed: false,
  })

  useEffect(() => {
    
  }, [formData])

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [gender, setGender] = useState("");
  // const [city, setCity] = useState("");

  return (
    <Form style={{ width: "500px", margin: "50px auto" }}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Form.Control.Feedback style={{ display: "block" }}>
          Looks good!
        </Form.Control.Feedback>
        <Form.Control.Feedback style={{ display: "block" }} type="invalid">
          Looks good!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <br />

        {["Male", "Female", "Others"].map((gender, index) => (
          <Form.Check
            inline
            label={gender}
            name="gender"
            type="radio"
            id={`inline-${index}`}
            onClick={() => setFormData({ ...formData, gender: gender })}
          />
        ))}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        >
          {citiesOption.map((city, index) => (
            <option value={city} key={index}>
              {city}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicCheckbox"
        style={{ textAlign: "left" }}
      >
        <Form.Check
          type="checkbox"
          label="You agree to terms and conditions"
          onClick={(e) =>
            setFormData({ ...formData, tnCAgreed: e.target.checked })
          }
        />
      </Form.Group>
      <Button variant="dark" type="submit" style={{ width: "100%" }}>
        Log In
      </Button>
    </Form>
  );
}

export default Signup;
