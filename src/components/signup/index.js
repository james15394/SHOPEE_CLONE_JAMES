import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./Signup";
import { auth } from "../../firebase";
import initialValues from "./formik/initialValues";
import validationSchema from "./formik/validationSchema";
import { Formik, Form } from "formik";
import FormModel from "./formik/model";
import InputField from "../formFields/InputField";

const SignUp = () => {
  const {
    formField: { email, password },
  } = FormModel;
  const history = useHistory();
  const classes = useStyles();
  const [errors, setErrors] = useState("");
  const handleSubmit = (values, { setSubmitting }) => {
    const { email, password } = values;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          history.push("/");
        }
      })
      .catch((err) => {
        setErrors(err.message);
        setSubmitting(false);
      });
  };
  return (
    <Box className={classes.root}>
      <AppBar position="relative" color="transparent">
        <Toolbar style={{ padding: "0 50px" }}>
          <Link href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1200px-Shopee.svg.png"
              alt=""
              style={{ width: "100px" }}
            />
          </Link>
          <Typography
            variant="h5"
            style={{ flexGrow: 1, marginLeft: "20px" }}
            fullWidth
          >
            Đăng nhập
          </Typography>
          <Typography variant="body1">
            <Link href="#">Cần trợ giúp</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Paper className={classes.signInWrap}>
          <Typography variant="h5">Đăng nhập</Typography>
          {errors && (
            <Alert fullWidth variant="filled" severity="warning">
              {errors}
            </Alert>
          )}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => {
              return (
                <Form>
                  <InputField
                    type="text"
                    name={email.name}
                    label={email.label}
                  />
                  <InputField
                    type="password"
                    name={password.name}
                    label={password.label}
                  />
                  <div className={classes.submitBtn}>
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={isSubmitting}
                      className={classes.button}
                      fullWidth
                    >
                      {isSubmitting ? <CircularProgress /> : "Đăng nhập"}
                    </Button>
                  </div>
                  <Typography
                    variant="body1"
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Divider
                      style={{
                        flexGrow: 1,
                      }}
                    />
                    HOẶC
                    <Divider
                      style={{
                        flexGrow: 1,
                      }}
                    />
                  </Typography>
                  <Box className={classes.socialBtn}>
                    <Button
                      style={{ background: "#2C83F3" }}
                      startIcon={<FacebookIcon />}
                    >
                      Facebook
                    </Button>
                    <Button style={{ background: "#528FF4" }}>Google</Button>
                    <Button
                      style={{ background: "#000" }}
                      startIcon={<AppleIcon />}
                    >
                      Apple
                    </Button>
                  </Box>
                  <Typography variant="caption" style={{ margin: "10px 0" }}>
                    Bạn chưa có tài khoản? <Link href="/signin">Đăng kí</Link>
                  </Typography>
                </Form>
              );
            }}
          </Formik>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignUp;
