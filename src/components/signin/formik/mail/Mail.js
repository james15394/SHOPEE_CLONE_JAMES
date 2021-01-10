import React from "react";
import InputField from "../../../formFields/InputField";
import model from "../formModel/model";

const Mail = (props) => {
  const {
    formField: { email, password },
  } = props;
  return (
    <>
      <div>
        <InputField type={email.type} label={email.label} name={email.name} />
      </div>

      <div>
        <InputField
          type={password.type}
          label={password.label}
          name={password.name}
        />
      </div>
    </>
  );
};

export default Mail;
