import { Formik, FormikHelpers } from "formik";
import { useAxios } from "../../api/hooks/useAxios";
import { EmployeeFormData } from "./types";
import { checkErrors } from "../../utils/formik";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import classNames from "classnames";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import Avatar from "react-avatar-edit";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { EmployeeRoutes } from "../../api/endpoints";
import { insertable } from "../../utils/modelMappers";
import { AddEmployeeSchema } from "./schemas";
import CustomDivider from "../CustomDivider";
import { Employee } from "../grids/types";
import { convertToLocaleDate } from "../../utils/dateTimeConverter";
import { EmployeeChangeContext } from "../../provider/EmployeeChangeProvider";

interface AddEmployeeFormProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
  employeeDetails: Employee;
}

function EditEmployeeForm({
  setVisible,
  employeeDetails,
}: AddEmployeeFormProps) {
  const initialValues: EmployeeFormData = {
    firstName: employeeDetails.firstName,
    lastName: employeeDetails.lastName,
    sex: { sex: employeeDetails.sex },
    image: employeeDetails.image,
    birthYear: employeeDetails.birthYear,
    startOfWork: convertToLocaleDate(employeeDetails.startOfWork),
    typeOfContract: { typeOfContract: employeeDetails.typeOfContract },
    lengthOfContract: convertToLocaleDate(employeeDetails.lengthOfContract),
    department: { department: employeeDetails.department },
    daysOfHoliday: employeeDetails.daysOfHoliday,
    freeDays: employeeDetails.freeDays,
    daysOfPaidLeave: employeeDetails.daysOfPaidLeave,
  };

  const { axiosInstance } = useAxios();
  const [imageError, setImageError] = useState<string>("");
  const { employeeChanged } = useContext(EmployeeChangeContext);
  const departments = [
    { department: "HR" },
    { department: "Financial" },
    { department: "IT" },
    { department: "Accounting" },
  ];
  const typesOfContract = [
    { typeOfContract: "Full time" },
    { typeOfContract: "Part time" },
  ];
  const sexes = [{ sex: "Male" }, { sex: "Female" }];

  const handleAddEmployee = (
    values: EmployeeFormData,
    actions: FormikHelpers<EmployeeFormData>
  ) => {
    const data = insertable(values);
    axiosInstance
      .post(EmployeeRoutes.EDIT_EMPLOYEE(employeeDetails.id), data)
      .then((response) => {
        console.log(response.data);
        if (employeeChanged) employeeChanged();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        actions.setSubmitting(false);
        setVisible(false);
      });
  };

  const onBeforeFileLoad = (elem: React.ChangeEvent<HTMLInputElement>) => {
    if (elem.target.files && elem.target.files[0].size > 2000000) {
      setImageError("Image too big. Should be 2MB");
      elem.target.value = "";
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values);
        handleAddEmployee(values, actions);
        actions.setSubmitting(true);
      }}
      validationSchema={AddEmployeeSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-column gap-2 mt-4 gap-1"
        >
          <CustomDivider text="Employee info" />

          <div className="flex flex-column align-items-center justify-content-center mb-3">
            <Avatar
              label="Upload image"
              width={200}
              height={200}
              onCrop={(image: string | null) => setFieldValue("image", image)}
              onBeforeFileLoad={onBeforeFileLoad}
              shadingOpacity={0.8}
            />
            {imageError ? (
              <small className="p-error mt-2 gap-1">{imageError}</small>
            ) : (
              <small className="p-error mt-2 gap-1">&nbsp;</small>
            )}
          </div>
          <div className="flex flex-column sm:flex-row gap-1">
            <div className="flex flex-column flex-1">
              <label htmlFor="firstName">First name</label>
              <InputText
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={values.firstName}
                onChange={handleChange}
                className={classNames({
                  "p-invalid": errors.firstName && touched.firstName,
                })}
              />
              {checkErrors(errors, touched, "firstName")}
            </div>
            <div className="flex flex-column flex-1">
              <label htmlFor="lastName">Last name</label>
              <InputText
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={values.lastName}
                onChange={handleChange}
                className={classNames({
                  "p-invalid": errors.lastName && touched.lastName,
                })}
              />
              {checkErrors(errors, touched, "lastName")}
            </div>
          </div>
          <div className="flex flex-column sm:flex-row mt-4 gap-1">
            <div className="flex flex-column flex-1">
              <label htmlFor="sex">Sex</label>
              <Dropdown
                inputId="sex"
                name="sex"
                value={values.sex}
                options={sexes}
                optionLabel="sex"
                placeholder="Select a Sex"
                className={classNames({
                  "p-invalid": errors.sex && touched.sex,
                })}
                onChange={handleChange}
              />
              {checkErrors(errors, touched, "sex")}
            </div>
            <div className="flex flex-column flex-1">
              <label htmlFor="birthYear">Birth year</label>
              <InputNumber
                id="birthYear"
                name="birthYear"
                useGrouping={false}
                placeholder="Year of birth"
                value={values.birthYear}
                className={classNames({
                  "p-invalid": errors.birthYear && touched.birthYear,
                })}
                onChange={handleChange}
              />
              {checkErrors(errors, touched, "birthYear")}
            </div>
          </div>

          <CustomDivider text="Contract info" />

          <div className="flex flex-column sm:flex-row mt-4 gap-1">
            <div className="flex flex-column flex-1">
              <label htmlFor="department">Department</label>
              <Dropdown
                inputId="department"
                name="department"
                value={values.department}
                options={departments}
                optionLabel="department"
                placeholder="Select a Department"
                className={classNames({
                  "p-invalid": errors.department && touched.department,
                })}
                onChange={handleChange}
              />
              {checkErrors(errors, touched, "department")}
            </div>
            <div className="flex flex-column flex-1">
              <label htmlFor="startOfwork">Start of work</label>
              <Calendar
                inputId="startOfWork"
                name="startOfWork"
                placeholder="Starting day"
                value={values.startOfWork}
                className={classNames({
                  "p-invalid": errors.startOfWork && touched.startOfWork,
                })}
                onChange={handleChange}
              />
              {checkErrors(errors, touched, "startOfWork")}
            </div>
          </div>
          <div className="flex flex-column sm:flex-row mt-4 gap-1">
            <div className="flex flex-column flex-1">
              <label htmlFor="typeOfContract">Type of contract</label>
              <Dropdown
                inputId="typeOfContract"
                name="typeOfContract"
                value={values.typeOfContract}
                options={typesOfContract}
                optionLabel="typeOfContract"
                placeholder="Select a type of contract"
                className={classNames({
                  "p-invalid": errors.typeOfContract && touched.typeOfContract,
                })}
                onChange={handleChange}
              />
              {checkErrors(errors, touched, "typeOfContract")}
            </div>
            <div className="flex flex-column flex-1">
              <label htmlFor="lengthOfContract">End of contract</label>
              <Calendar
                inputId="lengthOfContract"
                name="lengthOfContract"
                placeholder="End of contract"
                value={values.lengthOfContract}
                className={classNames({
                  "p-invalid":
                    errors.lengthOfContract && touched.lengthOfContract,
                })}
                onChange={handleChange}
              />
              {checkErrors(errors, touched, "lengthOfContract")}
            </div>
          </div>

          <CustomDivider text="Optional" />

          <div className="flex flex-column w-12 sm:w-12 md:w-6">
            <label htmlFor="daysOfPaidLeave">Days of paid leave</label>
            <InputNumber
              inputId="daysOfPaidLeave"
              name="daysOfPaidLeave"
              placeholder="Days of paid leave"
              value={values.daysOfPaidLeave}
              onValueChange={handleChange}
              useGrouping={false}
              className={classNames({
                "p-invalid": errors.daysOfPaidLeave && touched.daysOfPaidLeave,
                "flex-1": true,
              })}
            />
            {checkErrors(errors, touched, "daysOfPaidLeave")}
            <label htmlFor="daysOfHoliday">Days of holiday</label>
            <InputNumber
              inputId="daysOfHoliday"
              name="daysOfHoliday"
              placeholder="Days of holiday"
              value={values.daysOfHoliday}
              onValueChange={handleChange}
              useGrouping={false}
              className={classNames({
                "p-invalid": errors.daysOfHoliday && touched.daysOfHoliday,
                "flex-1": true,
              })}
            />
            {checkErrors(errors, touched, "daysOfHoliday")}
            <label htmlFor="freeDays">Free days</label>
            <InputNumber
              inputId="freeDays"
              name="freeDays"
              placeholder="Free days"
              value={values.freeDays}
              onValueChange={handleChange}
              useGrouping={false}
              className={classNames({
                "p-invalid": errors.freeDays && touched.freeDays,
                "flex-1": true,
              })}
            />
            {checkErrors(errors, touched, "freeDays")}
          </div>

          <Button
            className="mt-4 gap-1"
            type="submit"
            label="Edit employee"
            disabled={isSubmitting}
            loading={isSubmitting}
          />
        </form>
      )}
    </Formik>
  );
}

export default EditEmployeeForm;
