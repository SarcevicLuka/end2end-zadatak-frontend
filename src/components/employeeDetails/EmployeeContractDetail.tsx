interface EmployeeContractDetailProps {
  title: string;
  detail: string;
}

function EmployeeContractDetail({
  title,
  detail,
}: EmployeeContractDetailProps) {
  return (
    <div className="mt-1 text-md">
      <span className="font-bold">{title}:</span>
      <span className="ml-2">{detail}</span>
    </div>
  );
}

export default EmployeeContractDetail;
