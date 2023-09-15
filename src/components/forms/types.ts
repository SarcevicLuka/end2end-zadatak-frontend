export type EmployeeFormData = {
  firstName: string;
  lastName: string;
  sex: DropdownSex;
  image: string;
  birthYear: number;
  startOfWork: Date;
  typeOfContract: DropdownTypeOfContract;
  lengthOfContract: Date;
  department: DropdownDepartment;
  daysOfHoliday?: number;
  freeDays?: number;
  daysOfPaidLeave?: number;
};

export type CreateEmployeeData = {
  firstName: string;
  lastName: string;
  sex: string;
  image: string;
  birthYear: number;
  startOfWork?: string;
  typeOfContract: string;
  lengthOfContract?: string;
  department: string;
  daysOfHoliday?: number;
  freeDays?: number;
  daysOfPaidLeave?: number;
};

type DropdownDepartment = {
  department: string;
};

type DropdownSex = {
  sex: string;
};

type DropdownTypeOfContract = {
  typeOfContract: string;
};
