export interface GlobalProps {
  children: any;
}

export interface FormProps {
  name: string;
  contact: string;
  company: string;
  date: number | string;
  situation: string;
}

export interface ProductProps {
  id: string;
  product: string;
  price: string;
}

export interface UserProps {
  _id: string;
  name: string;
  email: string;
  contact: string;
  company: string;
  date: string;
  situation: string;
}

export interface ModalProps {
  show: boolean;
  modalType: string | null;
  payload?: UserProps;
}

export interface ListData {
  name: string;
  email: string;
  contact: string;
  project: string;
  situation: string;
}

export interface ListProps {
  searchData: string | null;
  // listCallback: (data: any) => void;
  // callback: (
  //   user: any,
  //   index: number,
  //   checked: React.ChangeEvent<HTMLInputElement>,
  // ) => void;
}

export interface FormComponentProps {
  dataPayload?: any;
  dataCallback?: (data: any) => void;
}

export interface TooltipButtonsProps {
  data: UserProps;
}

export interface TooltipProps {
  children: any;
  direction: string;
  content: string;
}

export interface tableRowsProps {
  id: string;
  product: string;
  price: string;
}

export interface changedInputProps {
  id: string;
  name: string;
  value: string;
}

export interface ProductsTableProps {
  tableData: any[];
  total: number | string;
  editRow: (changes: any) => void;
  addButton: () => void;
  totalSum: (amount: number) => void;
  deleteRow: (row: any) => void;
}
