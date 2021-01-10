import React from "react";
import InputField from "../../../formFields/InputField";
import model from "../formModel/model";

const Phone = (props) => {
  const {
    formField: { phone },
  } = props;
  return (
    <>
      <InputField type={phone.type} label={phone.label} name={phone.name} />
    </>
  );
};

export default Phone;
