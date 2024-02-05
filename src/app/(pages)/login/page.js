// Import necessary components and libraries
"use client";
import React, { useEffect, useState } from "react";
import { Button, Container, TextField, Modal } from "@mui/material";
import Header from "@/app/components/Header";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import {createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../utils/firebase"
const Page = () => {
  const initialValues = {
    email: "",
    password: "",
    username: "",
  };
  const [isSignUP, setIsSignUP] = useState(false);



  const handleSubmit = (values) => {
    console.log("Sign In values:", values);
  };



  const validateForm = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <Header />
        <div className="login-form-outer-wrapper">
          <div className="login-form-inner-wrapper">
            <Container maxWidth="sm">
              <h1 className="sign-in-header">
                {isSignUP ? "Sign UP" : "Sign In"}
              </h1>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validate={validateForm}
              >
                {/* Sign In Form */}
                {({ isSubmitting }) => (
                  <Form>
                    {isSignUP && (
                      <>
                        <Field
                          name="username"
                          as={TextField}
                          label="Username"
                          variant="filled"
                          fullWidth
                          margin="normal"
                          id="outlined-basic"
                          className="login-form-field"
                        />
                        <div>
                          <span className="error">
                            <ErrorMessage name="username" />
                          </span>
                        </div>
                      </>
                    )}

                    <Field
                      name="email"
                      as={TextField}
                      label="Email"
                      variant="filled"
                      fullWidth
                      margin="normal"
                      id="outlined-basic"
                      className="login-form-field"
                    />
                    <div>
                      <span className="error">
                        <ErrorMessage name="email" />
                      </span>
                    </div>
                    <Field
                      className="login-form-field"
                      name="password"
                      as={TextField}
                      id="outlined-basic"
                      label="Password"
                      type="password"
                      variant="filled"
                      fullWidth
                      margin="normal"
                    />
                    <div>
                      <span className="error">
                        <ErrorMessage name="password" />
                      </span>
                    </div>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      className="login-btn"
                    >
                    {isSignUP ? "Sign Up ":"Login"} 
                    </Button>
                  </Form>
                )}
              </Formik>

              <div className="mt-4 text-center">
                {isSignUP ? (
                  <> 
                   <span
                      className="sign-in-btn"
                      onClick={() => setIsSignUP(!isSignUP)}
                    >
                      Sign in?
                    </span>
                    </>
                ) : (
                  <>
                    <span className="text-gray-400 ">New to Netflix? </span>
                    <span
                      className="sign-up-btn"
                      onClick={() => setIsSignUP(!isSignUP)}
                    >
                      Sign up now.
                    </span>
                  </>
                )}
              </div>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
