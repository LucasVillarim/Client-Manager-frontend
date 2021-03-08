/* eslint-disable import/no-unresolved */
import React, { ChangeEvent, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { ProductsTableProps } from 'interfaces';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TableContainer } from './styles';

const ProductsTable: React.FC<ProductsTableProps> = ({
  editRow,
  addButton,
  totalSum,
  deleteRow,
  tableData,
  total,
}) => {
  const sumValues = () => {
    let totalValue = 0;
    [...tableData].map(element => {
      totalValue += Number(element.price);
      return totalValue;
    });
    totalSum(totalValue);
  };

  useEffect(() => {
    sumValues();
  }, [tableData]);

  const handleInputChange = (
    element: any,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.currentTarget;
    return editRow({ id: element.id, name, value });
  };

  const handleDelete = (element: any) => {
    deleteRow(element);
  };

  const row = [...tableData].map(element => {
    return (
      <tr key={element.id} className="table-rows">
        <td style={{ position: 'relative' }}>
          <input
            className="product-input"
            name="product"
            type="text"
            onChange={e => handleInputChange(element, e)}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className="x-icon"
            style={{ display: tableData.length > 1 ? 'inline' : 'none' }}
            onClick={() => handleDelete(element)}
          />
        </td>
        <td>
          <input
            className="price-input"
            name="price"
            type="text"
            onChange={e => handleInputChange(element, e)}
          />
        </td>
      </tr>
    );
  });

  const tableFooter = () => {
    return (
      <tfoot>
        <tr>
          <td>
            <button
              className="add-row-button"
              type="button"
              onClick={addButton}
            >
              +
            </button>
          </td>
          <td className="total-box">
            <p>Total:</p>
            <strong>{total}</strong>
          </td>
        </tr>
      </tfoot>
    );
  };

  return (
    <TableContainer>
      {/* <div className="table-wrapper"> */}
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody>{row.reverse()}</tbody>
        {tableFooter()}
      </table>
      {/* </div> */}
    </TableContainer>
  );
};

export default ProductsTable;
