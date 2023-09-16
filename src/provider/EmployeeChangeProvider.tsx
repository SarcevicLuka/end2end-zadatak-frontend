import { ReactNode, FunctionComponent, createContext, useState } from "react";

interface EmployeeChangetProps {
  addedEmployee: number;
  employeeChanged: undefined | (() => void);
}

const EmployeeChangeContext = createContext<EmployeeChangetProps>({
  addedEmployee: 0,
  employeeChanged: undefined,
});

const EmployeeChangeProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [addedEmployee, setAddedEmployee] = useState<number>(0);

  const employeeChanged = () => {
    setAddedEmployee(addedEmployee + 1);
  };

  return (
    <EmployeeChangeContext.Provider
      value={{
        addedEmployee: addedEmployee,
        employeeChanged: employeeChanged,
      }}
    >
      {children}
    </EmployeeChangeContext.Provider>
  );
};

export default EmployeeChangeProvider;
export { EmployeeChangeContext };
