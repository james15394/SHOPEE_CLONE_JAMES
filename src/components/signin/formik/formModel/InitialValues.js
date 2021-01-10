import model from "./model";

const {
  formField: { phone, email, password },
} = model;

export default {
  [phone.name]: "",
  [email.name]: "",
  [password.name]: "",
};
