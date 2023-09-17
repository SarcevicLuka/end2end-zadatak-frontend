export const EmployeeRoutes = {
  ALL_EMPLOYEES: (searchTerm: string, page?: number) =>
    `employees?page=${page}&name=${searchTerm}&perPage=5`,
  EMPLOYEE_INFO: (employee_id?: string) => `employees/${employee_id}`,
  ADD_EMPLOYEE: "employee-create",
  EDIT_EMPLOYEE: (employee_id?: string) => `employees/${employee_id}/edit`,
};
