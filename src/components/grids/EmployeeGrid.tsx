import { useContext, useEffect, useState } from "react";
import { useAxios } from "../../api/hooks/useAxios";
import { EmployeeRoutes } from "../../api/endpoints";
import { ProgressSpinner } from "primereact/progressspinner";
import { Employee } from "./types";
import EmployeeItem from "./EmployeeItem";
import { EmployeeChangeContext } from "../../provider/EmployeeChangeProvider";

function EmployeeGrid() {
  const { axiosInstance } = useAxios();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { employeeChanged } = useContext(EmployeeChangeContext);

  const handleFetchAllEmployees = () => {
    setLoading(true);
    setEmployees([]);
    axiosInstance
      .get(EmployeeRoutes.ALL_EMPLOYEES)
      .then((response) => {
        console.log(response);
        response.data.data.forEach((employee: Employee) => {
          setEmployees((current) => [...current, employee]);
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleFetchAllEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeChanged]);

  return loading ? (
    <ProgressSpinner />
  ) : (
    <div className="grid gap-3 mt-6">
      {employees.map((employee: Employee) => {
        return <EmployeeItem employee={employee} />;
      })}
    </div>
  );
}

export default EmployeeGrid;
