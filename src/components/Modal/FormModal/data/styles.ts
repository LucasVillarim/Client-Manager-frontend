import styled from 'styled-components';

export const TableContainer = styled.div`
  table {
    background-color: #f1f1f1;
    width: 100%;
    height: 100px;
    border-collapse: collapse;
  }

  input {
    display: block;
    width: 100%;
    height: 32px;
    outline: none;
    box-sizing: border-box;
  }

  .product-input {
    padding-left: 24px;
  }

  .x-icon {
    position: absolute;
    top: 25%;
    left: 5px;
    opacity: 0.3;
    :hover {
      opacity: 1;
      color: #d73c3c;
    }
  }

  thead,
  tbody,
  tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  th {
    background-color: #323232;
    color: #fff;
  }

  th:first-child {
    border-radius: 8px 0 0 0;
    width: 60%;
  }
  th:last-child {
    border-radius: 0 8px 0 0;
  }

  td {
    padding: 0;
  }

  td:first-child {
    width: 60%;
  }

  tbody {
    background-color: #c4c4c4;
    display: block;
    overflow-y: scroll;
    table-layout: fixed;
    min-height: 20px;
    max-height: 150px;

    ::-webkit-scrollbar {
      width: 4px;
      margin-right: -10px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      background: #c4c4c4;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .add-row-button {
    background-color: #3e414d;
    color: #fff;
    font-size: 14px;
    width: 2.5rem;
    height: 100%;
    padding: 4px;
    margin-top: 8px;
    border: none;
    border-radius: 4px;
    outline: none;
    box-shadow: 1px 1px 4px 2px rgb(0, 0, 0, 0.2);
    transition: 0.2s all;
    :hover {
      opacity: 0.8;
    }
  }

  .total-box {
    background-color: #3e414d;
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin-right: 2px;
    padding: 4px;
    border: none;
    border-radius: 0 0 4px 4px;
  }

  p {
    margin: 0;
  }

  tfoot {
    display: flex;
    justify-content: space-between;
  }
`;
