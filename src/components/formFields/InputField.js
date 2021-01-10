import { TextField } from "@material-ui/core";
import { useField } from "formik";
import React, { useEffect } from "react";

const InputField = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField
        fullWidth
        {...field}
        {...props}
        helperText={meta.touched && meta.error}
        size="medium"
        color="secondary"
        error={!!(meta.touched && meta.error)}
      />
    </>
  );
};

export default InputField;
