import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dispatch, SetStateAction, useContext } from "react";
import { SearchContext } from "../provider/SearchProvider";

interface ActionsProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

function Actions({ setVisible }: ActionsProps) {
  const { searchTerm, setTermChanged } = useContext(SearchContext);

  return (
    <div className="flex justify-content-end gap-2 m-3 flex-column sm:flex-row">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          className="w-full"
          placeholder="Search employees"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
            if (setTermChanged) setTermChanged(e.target.value);
          }}
        />
      </span>
      <Button
        label="Add employee"
        icon="pi pi-user-plus"
        onClick={() => setVisible(true)}
      />
    </div>
  );
}

export default Actions;
