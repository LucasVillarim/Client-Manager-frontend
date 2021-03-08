/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import List from 'components/List';
import { useGlobal } from 'Context';
import { Container, Header } from './styles';

const Main: React.FC = () => {
  const { setModal } = useGlobal(); // React Context Hook.
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [searchKeyword, setSearchKeyword] = useState<string | null>(null);

  const getScrollPosition = () => {
    const positionY = window.pageYOffset;
    setScrollPosition(positionY);
  };

  useEffect(() => {
    window.addEventListener('scroll', getScrollPosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', getScrollPosition);
    };
  }, []);

  const addUser = (action: boolean, modalType: string) => {
    const payload = { show: action, modalType };
    setModal(payload);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);
  };

  return (
    <>
      <Header>Cadastro App</Header>
      <Container>
        <header className="body-header">
          <h3>Clientes cadastrados</h3>
          <input
            type="input"
            name="search"
            placeholder="Procure por um Cliente"
            onChange={handleSearch}
          />
          <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" />
        </header>
        <div className="list-container">
          <div
            className={
              scrollPosition > 150 ? 'side-button' : 'button-container'
            }
          >
            <button
              className="add-button"
              type="button"
              onClick={() => addUser(true, 'FormModal')}
            >
              Adicionar
            </button>
          </div>
          <List searchData={searchKeyword} />
        </div>
      </Container>
    </>
  );
};

export default Main;
