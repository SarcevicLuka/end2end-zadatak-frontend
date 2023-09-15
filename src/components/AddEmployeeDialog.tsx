import { Dialog } from "primereact/dialog";
import { Dispatch, SetStateAction } from "react";
import AddEmployeeForm from "./forms/AddEmployeeForm";

interface AddEmployeeDialogProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  setAddedEmployee: Dispatch<SetStateAction<number>>;
}

function AddEmployeeDialog({
  visible,
  setVisible,
  setAddedEmployee,
}: AddEmployeeDialogProps) {
  return (
    <Dialog
      header="Add employee"
      position="top"
      visible={visible}
      className="w-11 sm:w-11 md:w-9 lg:w-6"
      onHide={() => setVisible(false)}
    >
      <AddEmployeeForm
        setVisible={setVisible}
        setAddedEmployee={setAddedEmployee}
      />
    </Dialog>
  );
}

export default AddEmployeeDialog;
