/* eslint-disable import/no-unresolved */
import { FormProps } from 'interfaces';
import api from 'services/api';

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
  } catch (err) {
    console.log(err);
  }
  return response;
}
