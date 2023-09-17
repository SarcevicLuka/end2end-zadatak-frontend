import { Dialog } from "primereact/dialog";
import { Dispatch, SetStateAction } from "react";
import EditEmployeeForm from "../forms/EditEmployeeForm";
import { Employee } from "../grids/types";

interface EditEmployeeDialogProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  employeeDetails: Employee;
}

function EditEmployeeDialog({
  visible,
  setVisible,
  employeeDetails,
}: EditEmployeeDialogProps) {
  return (
    <Dialog
      header="Edit employee"
      position="top"
      visible={visible}
      className="w-11 sm:w-11 md:w-10 lg:w-8"
      onHide={() => setVisible(false)}
    >
      <EditEmployeeForm
        setVisible={setVisible}
        employeeDetails={employeeDetails}
      />
    </Dialog>
  );
}

export default EditEmployeeDialog;
