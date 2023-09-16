import { Button } from "primereact/button";
import CustomDivider from "../CustomDivider";
import { Employee } from "../grids/types";
import EmployeeContractDetail from "./EmployeeContractDetail";
import { useState } from "react";
import EditEmployeeDialog from "../dialogs/EditEmployeeDialog";

interface EmployeeDetailsProps {
  employee: Employee;
}

function EmployeeDetails({ employee }: EmployeeDetailsProps) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="mt-4">
      <div className="flex flex-column align-items-center justify-content-center">
        <img src={employee.image} alt={employee.id} className="w-12rem" />
        <div className="text-xl font-medium">{`${employee.firstName} ${employee.lastName} born in ${employee.birthYear}`}</div>
        <div>{employee.sex}</div>
      </div>

      <CustomDivider text="Contract info" />

      <EmployeeContractDetail title="Department" detail={employee.department} />
      <EmployeeContractDetail
        title="Start of work"
        detail={employee.startOfWork}
      />
      <EmployeeContractDetail
        title="End of contract"
        detail={employee.lengthOfContract}
      />
      <EmployeeContractDetail
        title="Type of contract"
        detail={employee.typeOfContract}
      />
      <EmployeeContractDetail
        title="Free days"
        detail={employee.freeDays.toString()}
      />
      <EmployeeContractDetail
        title="Days of holiday"
        detail={employee.daysOfHoliday.toString()}
      />
      <EmployeeContractDetail
        title="Days of paid leave"
        detail={employee.daysOfPaidLeave.toString()}
      />

      <div className="flex justify-content-end">
        <Button
          label="Edit"
          icon="pi pi-user-edit"
          onClick={() => setVisible(true)}
        />
      </div>

      <EditEmployeeDialog
        visible={visible}
        setVisible={setVisible}
        employeeDetails={employee}
      />
    </div>
  );
}

export default EmployeeDetails;
