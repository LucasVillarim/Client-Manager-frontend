import styled from 'styled-components';

export const Message = styled.div`
  color: #fff;
  position: absolute;
  margin-top: 5rem;
`;

export const Table = styled.table`
  background-color: #3e414d;
  border-collapse: collapse;
  flex-direction: column-reverse;
  width: 70vw;
  height: auto;
  border-radius: 16px;
  box-shadow: 2px 2px 4px 3px rgb(0, 0, 0, 0.2);
  overflow: hidden;
  animation: enlarge 2s 1;

  @keyframes enlarge {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .table-header {
    background-color: #70737c;
    width: 70vw;
    height: 3rem;
    box-shadow: 1px 2px 4px 3px rgb(0, 0, 0, 0.2);
    :hover {
      background-color: #70737c;
    }
  }

  th:first-child {
    border-radius: 16px 0 0 0;
  }
  th:last-child {
    border-radius: 0 16px 0 0;
  }

  tr {
    color: #fff;
    text-align: center;
    animation: fade 1s 1;
    transition: 0.1s ease-in;

    :hover {
      background-color: #9097b2;
    }
  }

  td:last-child {
    width: 200px;
  }

  tbody {
    width: 100%;
    height: 50vh;
    overflow: scroll;
  }

  .row {
    height: 4rem;
    border-bottom: 1px solid grey;
    :last-child {
      border: none;
    }
  }

  button {
    background-color: transparent;
    color: #f9f9f9;
    width: 40px;
    height: 40px;
    margin: 0 4px 0 4px;
    border: none;
    border-radius: 8px;
    outline: none;
    transition: 0.2s ease-in;

    :hover {
      background-color: #3e414d;
      box-shadow: 1px 1px 5px 2px rgb(0, 0, 0, 0.3);
      transform: scale(1.2);
    }
  }

  .docx-button {
    :hover {
      background-color: #3956cc;
    }
  }

  .delete-button {
    :hover {
      background-color: #d73c3c;
    }
  }
`;
