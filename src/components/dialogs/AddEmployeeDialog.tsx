import { Dialog } from "primereact/dialog";
import { Dispatch, SetStateAction } from "react";
import AddEmployeeForm from "../forms/AddEmployeeForm";

interface AddEmployeeDialogProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

function AddEmployeeDialog({ visible, setVisible }: AddEmployeeDialogProps) {
  return (
    <Dialog
      header="Add employee"
      position="top"
      visible={visible}
      className="w-11 sm:w-11 md:w-10 lg:w-8 scroll-container"
      onHide={() => setVisible(false)}
    >
      <AddEmployeeForm setVisible={setVisible} />
    </Dialog>
  );
}

export default AddEmployeeDialog;
