/* eslint-disable import/no-unresolved */
import React from 'react';
import { useGlobal } from 'Context';
import api from 'services/api';
import { UserProps } from 'interfaces';
import { Container } from './styles';

const DeleteModal: React.FC = () => {
  const { mainList, setMainList, modal, setModal } = useGlobal();
  const { payload } = modal;

  const deleteSelectedUser = async () => {
    const response = await api.post('/Main/remove', {
      deleteUser: payload,
    });
    const newList = [...mainList].filter(
      (element: UserProps) => element._id !== payload._id,
    );
    setMainList(newList);
    setModal({ show: false });
  };

  const closeModal = (): void => {
    setModal({ show: false });
  };

  return (
    <Container>
      <p>
        Tem certeza que deseja remover
        <strong>{` ${payload.name} `}</strong>
        da lista de clientes?
      </p>
      <div>
        <button type="button" onClick={deleteSelectedUser}>
          Confirmar
        </button>
        <button type="button" onClick={closeModal}>
          Cancelar
        </button>
      </div>
    </Container>
  );
};

export default DeleteModal;
