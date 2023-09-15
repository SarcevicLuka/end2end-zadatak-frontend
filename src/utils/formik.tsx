import { FormikErrors, FormikTouched } from "formik";
import { ReactNode } from "react";
import { EmployeeFormData } from "../components/forms/types";

type FormikTypes = EmployeeFormData;

export const checkErrors = (
  errors: FormikErrors<FormikTypes>,
  touched: FormikTouched<FormikTypes>,
  name: string
): ReactNode => {
  return (errors as { [key: string]: boolean })[name] &&
    (touched as { [key: string]: boolean })[name] ? (
    <small className="p-error">
      {(errors as { [key: string]: string })[name]}
    </small>
  ) : (
    <small className="p-error">&nbsp;</small>
  );
};
