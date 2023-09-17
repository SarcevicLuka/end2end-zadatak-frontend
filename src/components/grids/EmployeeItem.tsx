import { Employee } from "./types";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import EmployeeDetails from "../employeeDetails/EmployeeDetails";

interface EmployeeItemProps {
  employee: Employee;
}

function EmployeeItem({ employee }: EmployeeItemProps) {
  const [visible, setVisible] = useState<boolean>(false);

  const header = (
    <div className="flex justify-content-center">
      <img className="w-10rem" alt="Card" src={employee.image} />
    </div>
  );

  const footer = (
    <div className="flex flex-wrap justify-content-between">
      <Tag value={employee.department.toLocaleUpperCase()} rounded />
      <Button
        label="Details"
        icon="pi pi-user"
        className="p-button-outlined"
        size="small"
        onClick={() => setVisible(true)}
      />
    </div>
  );

  return (
    <>
      <Card
        className="employee-card hover:bg-indigo-100"
        title={`${employee.firstName} ${employee.lastName}`}
        header={header}
        footer={footer}
        key={employee.id}
      />

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="w-full md:w-20rem lg:w-30rem"
      >
        <h2>Employee details</h2>

        <EmployeeDetails employee={employee} />
      </Sidebar>
    </>
  );
}

export default EmployeeItem;
