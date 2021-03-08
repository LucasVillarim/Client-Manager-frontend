/* eslint-disable import/no-unresolved */
import { useGlobal } from 'Context';
import { FormProps, UserProps } from 'interfaces';
import api from 'services/api';

const { setMainList, setModal } = useGlobal();

export function clearEmptyRows(tableData: any) {
  const cleanTable = tableData.filter(
    (element: any) => element.product !== '' && element.price !== '',
  );
  return cleanTable;
}

export async function SendForm(
  endpoint: string,
  form: FormProps,
  total: number | string,
  tableData?: any,
): Promise<Response> {
  const table = clearEmptyRows(tableData);
  let response: any;
  try {
    response = await api.post(`/${endpoint}`, {
      form,
      tableData: table,
    });
    setMainList((prevData: UserProps[]) => [...prevData, response]);
    setModal({ show: false, modalType: null });
  } catch (err) {
    console.log(err);
  }
  return response.data;
}
