import { Employee } from "./types";
import { Card } from "primereact/card";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";

interface EmployeeItemProps {
  employee: Employee;
}

function EmployeeItem({ employee }: EmployeeItemProps) {
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
      />
    </div>
  );

  return (
    <Card
      className="w-17rem col-12 md:col-6 lg:col-3"
      title={`${employee.firstName} ${employee.lastName}`}
      header={header}
      footer={footer}
      key={employee.id}
    ></Card>
  );
}

export default EmployeeItem;
