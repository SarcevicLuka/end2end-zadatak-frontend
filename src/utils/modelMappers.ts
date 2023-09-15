import {
  CreateEmployeeData,
  EmployeeFormData,
} from "../components/forms/types";

export const insertable = (values: EmployeeFormData): CreateEmployeeData => {
  const data: CreateEmployeeData = {
    firstName: values.firstName,
    lastName: values.lastName,
    sex: values.sex.sex,
    image: values.image,
    birthYear: values.birthYear,
    startOfWork: values.startOfWork?.toLocaleDateString(),
    typeOfContract: values.typeOfContract.typeOfContract,
    lengthOfContract: values.lengthOfContract?.toLocaleDateString(),
    department: values.department.department,
  };

  return data;
};
