import React from "react";
import { useFormik } from "formik";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup} from "react-bootstrap";
import './style.css'

const initialValues = {
    name: "",
    email: "",
    address: {
        street: "",
        number: "",
        city: ""
    },
    password: "",
    confirmPassword: ""
};

const MyForm = () => {
    const onSubmit = values => {};

    const formik = useFormik({
        initialValues,
        onSubmit  
    });

    return (
        <div className="principal">
            <form>
        <FormGroup>
          <Form.Control placeholder="Name" {...formik.getFieldProps("name")} />
            <br />
            <Form.Control placeholder="Email" {...formik.getFieldProps("email")} />
            <br />
            <Form.Control type="password" placeholder="Password" {...formik.getFieldProps("password")} />
            <br />
            <Form.Control type="password" placeholder="confirm password" {...formik.getFieldProps("confirmPassword")} />
            <br />
            <Form.Control placeholder="Address" {...formik.getFieldProps("address.street")} />
            <br />
            <Form.Control placeholder="City" {...formik.getFieldProps("address.city")} />
        </FormGroup>
        </form>

        <div className="json"> 
            <pre>{JSON.stringify(formik.values, null, 2)}</pre>
        </div>
        </div>
    );
};

export default MyForm;