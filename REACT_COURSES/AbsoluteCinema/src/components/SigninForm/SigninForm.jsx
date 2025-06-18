import { useState } from "react";
import classes from "./SigninForm.module.css";
import { Form, Button } from "react-bootstrap";

function SigninForm() {
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const [errors, setError] = useState({
    email: "", //ошибок нет
    password: "",
  });

  function changeEmailInput(event) {
    console.log(event.target.value);
    setSigninData({
      ...signinData, // сохраняем старые данные
      email: event.target.value, // обновляем только email
    });
  }

  function changePasswordInput(event) {
    console.log(event.target.value);
    setSigninData({
      ...signinData, // сохраняем старые данные
      password: event.target.value, // обновляем только пароль
    });
  }

  function submitForm(event) {
    event.preventDefault(); // отменяем стандартное поведение формы (перезагрузку страницы)

    const { email, password } = signinData;

    if (!email) {
      // проверяем, заполнены ли поля
      setError((errors) => ({ ...errors, email: "Email is required!" }));
    }
    if (!password) {
      setError((errors) => ({ ...errors, password: "Password is required!" }));
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={changeEmailInput}
          type="email"
          placeholder="Enter email"
          isInvalid={Boolean(errors.email)} // Boolean('') => flase, Boolean('Email is required!') => true
        />
        <Form.Control.Feedback type="invalid">
          {errors.email} {/*Email is required!*/}
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={changePasswordInput}
          type="password"
          placeholder="Enter password"
          isInvalid={Boolean(errors.password)}
        />
         <Form.Control.Feedback type="invalid">
          {errors.password} {/*Password is required!*/}
        </Form.Control.Feedback>
      </Form.Group>
      <Button onClick={submitForm} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SigninForm;
