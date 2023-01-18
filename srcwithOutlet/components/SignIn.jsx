import {  Nav, Button ,Container,Card,Modal,Navbar} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useEffect, useState } from "react";
import { validate } from "./signupSchema";
import { initialValues } from "./signupModel";
import TextField from "./TextField";
import { Formik, Form } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function SignIN() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  
  useEffect(() => {
    let allData;
    const data = localStorage.getItem("record");
    allData = JSON.parse(data);
    //let login = localStorage.getItem('token');
    if (allData) {
      navigate("/");
    }
  });
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>Assessment</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Navbar.Brand
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "15rem",
              }}
            >
              <Button variant="primary" onClick={handleShow}>
                <AccountBoxIcon />
              </Button>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Card>

      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values, action) => {
          const { email, password } = values;
          let record = {
            email,
            password,
          };
          setFormData(record);
          localStorage.setItem("record", JSON.stringify(record));
          //localStorage.setItem("token", true);
          navigate("/");
          action.resetForm();
          console.log("submited");
        }}
      >
        {(formik) => (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <h1 style={{ textAlign: "center" }}>SignUp</h1>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <TextField label="Email" name="email" type="email" />
                <br></br>
                <TextField
                  label="Password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                />
                <br></br>
                <span className="eye-btn" onClick={togglePasswordVisiblity}>
                  {passwordShown ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </span>
                <br></br>
                <Button variant="primary" type="submit">
                  SignIN
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </Formik>
    </>
  );
}

export default SignIN;
