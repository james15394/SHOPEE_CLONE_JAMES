import model from "./model";
import * as Yup from "yup";
const {
  formField: { email, password, phone },
} = model;
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
export default [
  Yup.object().shape({
    [phone.name]: Yup.string()
      .required(`${phone.requiredErrMesg}`)
      .matches(phoneRegExp, "Phone number is not valid"),
  }),
  Yup.object().shape({
    [email.name]: Yup.string()
      .email("Invalid email")
      .required(`${email.requiredErrMesg}`),
    [password.name]: Yup.string()
      .required(`${password.requiredErrMesg}`)
      .min(8, "Password is too short - should be 8 chars minimum."),
  }),
];
