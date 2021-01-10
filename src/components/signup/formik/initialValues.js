import FormModel from "./model";

const {
  formField: { email, password },
} = FormModel;

export default {
  [email.name]: "",
  [password.name]: "",
};
