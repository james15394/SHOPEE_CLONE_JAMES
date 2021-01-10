import FormModel from "./model";
import * as Yup from "yup";

const {
  formField: { email, password },
} = FormModel;

export default Yup.object().shape({
  [email.name]: Yup.string().email(`${email.errMsg}`).required("Required"),
  [password.name]: Yup.string().required("Required"),
});
