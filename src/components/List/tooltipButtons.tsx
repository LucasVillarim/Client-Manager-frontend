/* eslint-disable import/no-unresolved */
import {
  faEdit,
  faFileWord,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { generateDocx } from 'utils/generateDocx';
import { TooltipButtonsProps, UserProps } from 'interfaces';
import { useGlobal } from 'Context';
import ToolTipComponent from '../Tooltip';

// eslint-disable-next-line react/prop-types
const TooltipButtons: React.FC<TooltipButtonsProps> = ({ data }) => {
  const { setModal } = useGlobal();

  const docx = async (dataPayload: any) => {
    console.log(dataPayload);
    // external function.
    generateDocx(dataPayload);
  };

  const editUser = (user: UserProps) => {
    setModal({ show: true, modalType: 'EditModal', payload: user });
  };

  const deleteUser = (user: UserProps) => {
    setModal({ show: true, modalType: 'DeleteModal', payload: user });
  };

  return (
    <>
      <ToolTipComponent content="Generates Word file" direction="top">
        <button
          className="docx-button"
          type="button"
          onClick={() => docx(data)}
        >
          <FontAwesomeIcon icon={faFileWord} size="lg" />
        </button>
      </ToolTipComponent>
      <ToolTipComponent content="Edit" direction="top">
        <button
          className="edit-button"
          type="button"
          onClick={() => editUser(data)}
        >
          <FontAwesomeIcon icon={faEdit} size="lg" />
        </button>
      </ToolTipComponent>
      <ToolTipComponent content="Deletar" direction="top">
        <button
          className="delete-button"
          type="button"
          onClick={() => deleteUser(data)}
        >
          <FontAwesomeIcon icon={faTrashAlt} size="lg" />
        </button>
      </ToolTipComponent>
    </>
  );
};

export default TooltipButtons;
