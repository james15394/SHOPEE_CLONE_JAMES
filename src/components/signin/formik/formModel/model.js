export default {
  formId: "signUpForm",
  formField: {
    phone: {
      type: "text",
      name: "phone",
      label: "Your phone number",
      requiredErrMesg: "Phone number is required",
    },
    email: {
      type: "text",
      name: "email",
      label: "Your email",
      requiredErrMesg: "Email is required",
    },
    password: {
      type: "password",
      name: "password",
      label: "Your password",
      requiredErrMesg: "Password is required",
    },
  },
};
