import { Divider } from "primereact/divider";

interface CustomDividerProps {
  text: string;
}

function CustomDivider({ text }: CustomDividerProps) {
  return (
    <Divider align="left">
      <div className="inline-flex align-items-center text-lg">
        <b>{text}</b>
      </div>
    </Divider>
  );
}

export default CustomDivider;
