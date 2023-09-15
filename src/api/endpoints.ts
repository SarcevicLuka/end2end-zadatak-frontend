export const EmployeeRoutes = {
  ALL_EMPLOYEES: "employees",
  EMPLOYEE_INFO: (employee_id?: string) => `employees/${employee_id}`,
  ADD_EMPLOYEE: "employee-create",
};
