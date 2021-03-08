/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from '@unform/web';
import React from 'react';
import { useGlobal } from 'Context';
import { UserProps } from 'interfaces';
import api from 'services/api';
import { options, Select, Input } from 'utils/imports';
import { Container } from './styles';
// eslint-disable-next-line react/prop-types

const EditModal: React.FC = () => {
  const { modal, setModal, mainList, setMainList } = useGlobal();
  const { payload } = modal;

  const updateInfo = (data: UserProps) => {
    setMainList(
      [...mainList].map(element => {
        if (element._id === data._id) {
          return {
            ...element,
            name: data.name,
            email: data.email,
            contact: data.contact,
            company: data.company,
            date: data.date,
            situation: data.situation,
          };
        }
        return element;
      }),
    );
  };

  const handleSubmit = async (form: UserProps) => {
    const response = await api.post('/Main/edit', {
      userData: modal.payload,
      newData: form,
    });
    setModal({ show: false, modalType: null });
    updateInfo(response.data[0]);
  };

  return (
    <Container>
      <Form
        initialData={{
          name: payload.name,
          email: payload.email,
          contact: payload.contact,
          company: payload.company,
          date: payload.date,
          situation: payload.situation,
        }}
        onSubmit={handleSubmit}
      >
        <FontAwesomeIcon
          icon={faWindowClose}
          size="lg"
          style={{ opacity: 0.7, alignSelf: 'flex-end', marginRight: -64 }}
        />
        <h3>Alterar dados do cliente</h3>
        <label>Nome:</label>
        <Input name="name" type="text" />
        <label>E-mail:</label>
        <Input name="email" type="email" />
        <label>Contato:</label>
        <Input name="contact" type="text" />
        <label>Empresa:</label>
        <Input name="company" type="text" />
        <label>Data:</label>
        <Input name="date" type="text" />
        <label htmlFor="">Situação:</label>
        <Select name="situation" options={options} className="select" />
        <button type="submit">Alterar</button>
      </Form>
    </Container>
  );
};

export default EditModal;
