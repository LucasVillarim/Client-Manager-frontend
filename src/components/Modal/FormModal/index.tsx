/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {
  FormComponentProps,
  changedInputProps,
  tableRowsProps,
  ProductProps,
  FormProps,
  Input,
  Select,
  Textarea,
  ReactInputMask,
  FontAwesomeIcon,
  faWindowClose,
  faSave,
  Form,
  uuidv4,
  options,
  SendForm,
  useGlobal,
  generateDocx,
  ProductsTable,
  clearEmptyRows,
  UserProps,
} from 'utils/imports';
import { Container, LeftSide, RightSide } from './styles';

const FormComponent: React.FC<FormComponentProps> = () => {
  const { mainList, setMainList, setModal } = useGlobal();
  const formRef = useRef<FormHandles>(null);
  const [tableRows, setTableRows] = useState<tableRowsProps[]>([]);
  const [total, setTotal] = useState<number>(0);

  const initTableRow = () => {
    const id = uuidv4();
    const defaultTableData = { id, product: '', price: '' };
    setTableRows([defaultTableData]);
  };
  useEffect(() => {
    initTableRow();
  }, []);

  const docx = () => {
    const formData = formRef.current?.getData();
    const products = clearEmptyRows(tableRows);
    const payload = { ...formData, products };
    generateDocx(payload);
  };

  const closeModal = () => {
    setModal({ show: false, modalType: null });
  };

  const totalSum = (value: number): void => {
    setTotal(value);
  };

  const handleSubmit = (form: FormProps): void => {
    const response = SendForm('Main', form, total, tableRows);

    setMainList((prevData: UserProps[]) => [...prevData, response]);
    // setMainList([...mainList, response]);
    setModal({ show: false, modalType: null });
  };

  const addRow = (): void => {
    const id = uuidv4(); // generates random unique user id.
    setTableRows((prevState: tableRowsProps[]) => [
      ...prevState,
      { id, product: '', price: '' },
    ]);
  };

  const deleteRow = (row: ProductProps) => {
    setTableRows([...tableRows].filter(element => element.id !== row.id));
  };

  const editTableRow = (changedInput: changedInputProps): void => {
    setTableRows(
      [...tableRows].map(element => {
        return element.id === changedInput.id
          ? {
              ...element,
              [changedInput.name]: changedInput.value,
            }
          : element;
      }),
    );
  };

  return (
    <Container>
      <FontAwesomeIcon
        icon={faWindowClose}
        size="lg"
        className="close-icon"
        onClick={closeModal}
      />
      <h3>Cadastrar novo cliente</h3>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <LeftSide>
          <Input name="name" type="text" placeholder="Nome" required />
          <Input name="email" type="email" placeholder="E-mail" required />
          <ReactInputMask
            name="contact"
            type="text"
            mask="(99) 99999-999999"
            placeholder="Contato"
            required
          />
          <Input name="company" type="text" placeholder="Empresa" required />
          <ReactInputMask
            name="date"
            type="text"
            mask="99/99/9999"
            placeholder="Data"
            required
          />
          <Textarea name="notes" placeholder="Observações.:" />
        </LeftSide>
        <RightSide>
          <ProductsTable
            tableData={tableRows}
            editRow={editTableRow}
            addButton={addRow}
            deleteRow={deleteRow}
            totalSum={totalSum}
            total={total}
          />
          <section>
            <div className="select-wrapper">
              <h4>Situação do Projeto:</h4>
              <Select
                name="situation"
                options={options}
                className="select"
                required
              />
            </div>
            <button name="save" className="save-button" type="submit">
              Salvar
              <FontAwesomeIcon icon={faSave} size="lg" className="save-icon" />
            </button>
            <button
              name="docx"
              className="docx-button"
              type="button"
              onClick={docx}
            >
              Gerar .pdf
              <FontAwesomeIcon
                icon={faFileAlt}
                size="lg"
                className="pdf-icon"
              />
            </button>
          </section>
        </RightSide>
      </Form>
    </Container>
  );
};

export default FormComponent;
