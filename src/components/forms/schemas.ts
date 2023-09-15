import * as Yup from "yup";

export const AddEmployeeSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  sex: Yup.object().required("Required"),
  birthYear: Yup.number().required("Required"),
  startOfWork: Yup.string().required("Required"),
  typeOfContract: Yup.object().required("Required"),
  lengthOfContract: Yup.string().required("Required"),
  department: Yup.object().required("Required"),
});
