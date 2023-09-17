import { useContext, useEffect, useRef, useState } from "react";
import { useAxios } from "../../api/hooks/useAxios";
import { EmployeeRoutes } from "../../api/endpoints";
import { ProgressSpinner } from "primereact/progressspinner";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { Employee } from "./types";
import EmployeeItem from "./EmployeeItem";
import { EmployeeChangeContext } from "../../provider/EmployeeChangeProvider";
import { SearchContext } from "../../provider/SearchProvider";

function EmployeeGrid() {
  const { axiosInstance } = useAxios();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(0);
  const { employeeChanged } = useContext(EmployeeChangeContext);
  const { searchTerm } = useContext(SearchContext);
  const page = useRef<number>(0);

  console.log(page);

  const handleFetchAllEmployees = () => {
    setLoading(true);
    setEmployees([]);
    axiosInstance
      .get(EmployeeRoutes.ALL_EMPLOYEES(searchTerm, page.current + 1))
      .then((response) => {
        //console.log(response);
        setTotal(response.data.total);
        setPerPage(response.data.perPage);
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

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    page.current = event.first / perPage;
    handleFetchAllEmployees();
  };

  useEffect(() => {
    handleFetchAllEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeChanged, searchTerm]);

  return loading ? (
    <ProgressSpinner />
  ) : (
    <div className="flex flex-column justify-content-center align-items-center w-11">
      {employees.length === 0 ? (
        <div className="mt-6">No employees found</div>
      ) : (
        <div className="min-w-full">
          <div className="grid-container mt-6">
            {employees.map((employee: Employee) => {
              return <EmployeeItem employee={employee} />;
            })}
          </div>
          <Paginator
            className="mt-4"
            first={page.current * perPage}
            rows={perPage}
            totalRecords={total}
            onPageChange={onPageChange}
            template={{
              layout:
                "FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default EmployeeGrid;
