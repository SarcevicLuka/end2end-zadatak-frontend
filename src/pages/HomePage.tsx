import EmployeeGrid from "../components/grids/EmployeeGrid";
import { useState } from "react";
import AddEmployeeDialog from "../components/dialogs/AddEmployeeDialog";
import Actions from "../components/Actions";

function HomePage() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Actions setVisible={setVisible} />
      <div className="flex flex-column align-items-center justify-content-center mt-7 sm:mt-5 w-12">
        <div className="title text-4xl font-bold">Employees</div>
        <EmployeeGrid />
      </div>
      <AddEmployeeDialog visible={visible} setVisible={setVisible} />
    </>
  );
}

export default HomePage;
