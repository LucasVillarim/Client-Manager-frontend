/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React, { lazy, Suspense } from 'react';
import { useGlobal } from 'Context';
import Fallback from './fallback';
import { Filter } from './styles';

const ModalManager: React.FC = () => {
  const { modal, setModal } = useGlobal();
  const ModalComponent = lazy(() => import(`./${modal.modalType}`));

  function closeModal(event: any) {
    if (
      !event.target.className.includes ||
      !event.target.className.includes('filter')
    ) {
      return;
    }
    setModal({ show: false, modalType: null });
  }

  if (modal.show) {
    return (
      <Filter className="filter" onClick={closeModal}>
        <Suspense fallback={<Fallback />}>
          <ModalComponent />
        </Suspense>
      </Filter>
    );
  }
  return null;
};

export default ModalManager;
