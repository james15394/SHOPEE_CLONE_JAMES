import React, { useState } from "react";
import { auth } from "../../firebase";
import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import initialValues from "./formik/formModel/InitialValues";
import validationSchema from "./formik/formModel/validationSchema";
import { Formik, Form } from "formik";
import Mail from "./formik/mail/Mail";
import Phone from "./formik/phone/Phone";
import formModel from "./formik/formModel/model";
import { useStyles } from "./SignIn";
const { formId, formField } = formModel;

const SignIn = () => {
  const classes = useStyles();
  const [errors, setErrors] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];

  const steps = (step) => {
    switch (step) {
      case 0:
        return <Phone formField={formField} />;
        break;
      case 1:
        return <Mail formField={formField} />;
        break;
      default:
        return <div>Not Found</div>;
        break;
    }
  };

  const handleSubmit = async (values, actions) => {
    if (activeStep === 1) {
      const { email, password } = values;
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          setErrors("");
          actions.setSubmitting(false);
          setActiveStep((prev) => prev + 1);
        })
        .catch((err) => {
          setErrors(err.message);
        });
    } else {
      setActiveStep((prev) => prev + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
      setErrors("");
    }
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
          <Typography variant="h5" style={{ flexGrow: 1, marginLeft: "20px" }}>
            Đăng kí
          </Typography>
          <Typography variant="body1">
            <Link href="#">Cần trợ giúp</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Paper className={classes.signInWrap}>
          <Typography variant="h5">Đăng kí</Typography>
          {errors && (
            <Alert fullWidth variant="filled" severity="warning">
              {errors}
            </Alert>
          )}
          <>
            {activeStep === 2 ? (
              <>
                <Typography variant="body1">Ban da hoan thanh</Typography>
                <Button
                  onClick={() => setActiveStep(0)}
                  className={classes.button}
                  fullWidth
                >
                  Reset
                </Button>
              </>
            ) : (
              <>
                <Formik
                  initialValues={initialValues}
                  validationSchema={currentValidationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => {
                    return (
                      <Form>
                        {steps(activeStep)}
                        <div className={classes.submitBtn}>
                          <Button
                            disabled={activeStep === 0}
                            onClick={() => setActiveStep((prev) => prev - 1)}
                            variant="contained"
                            style={{ marginRight: "10px" }}
                          >
                            Quay lại
                          </Button>
                          <Button
                            variant="contained"
                            type="submit"
                            disabled={isSubmitting}
                            className={classes.button}
                          >
                            {activeStep === 1 ? "Hoàn thành" : "Tiếp theo"}
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
                              flex: 1,
                            }}
                          />
                          HOẶC
                          <Divider
                            style={{
                              flex: 1,
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
                          <Button style={{ background: "#528FF4" }}>
                            Google
                          </Button>
                          <Button
                            style={{ background: "#000" }}
                            startIcon={<AppleIcon />}
                          >
                            Apple
                          </Button>
                        </Box>
                        <Typography
                          variant="caption"
                          style={{ margin: "10px 0" }}
                        >
                          Bạn đã có tài khoản?{" "}
                          <Link href="/signup">Đăng nhập</Link>
                        </Typography>
                      </Form>
                    );
                  }}
                </Formik>
              </>
            )}
          </>
        </Paper>
      </Box>
    </Box>
  );
};

export default SignIn;
