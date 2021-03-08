/* eslint-disable import/no-unresolved */
import React, { createContext, useState, useContext } from 'react';
import { Context } from 'vm';
import { GlobalProps, ModalProps, UserProps } from 'interfaces';

const StateContext = createContext<Context>({} as Context);

// eslint-disable-next-line react/prop-types
export const StateProvider: React.FC<GlobalProps> = ({ children }) => {
  const [mainList, setMainList] = useState<UserProps[]>([]);
  const [modal, setModal] = useState<ModalProps>({} as ModalProps);

  return (
    <StateContext.Provider
      value={{
        mainList,
        setMainList,
        modal,
        setModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export function useGlobal() {
  const varState = useContext(StateContext);
  return varState;
}
