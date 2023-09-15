import EmployeeGrid from "../components/grids/EmployeeGrid";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import AddEmployeeDialog from "../components/AddEmployeeDialog";

function HomePage() {
  const [visible, setVisible] = useState<boolean>(false);
  const [addedEmployee, setAddedEmployee] = useState<number>(0);

  return (
    <>
      <div className="flex justify-content-end gap-2 m-3">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText placeholder="Search employees" />
        </span>
        <Button
          label="Add employee"
          icon="pi pi-user-plus"
          onClick={() => setVisible(true)}
        />
      </div>
      <div className="flex flex-column align-items-center mt-5">
        <div className="title text-4xl font-bold">Employees</div>
        <EmployeeGrid addedEmployee={addedEmployee} />
      </div>
      <AddEmployeeDialog
        visible={visible}
        setVisible={setVisible}
        setAddedEmployee={setAddedEmployee}
      />
    </>
  );
}

export default HomePage;
