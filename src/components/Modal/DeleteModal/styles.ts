import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  max-width: 300px;
  border-radius: 16px;
  flex-wrap: wrap;
  animation: popup 0.2s 1;

  @keyframes popup {
    0% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }

  p {
    width: 80%;
  }

  div {
    display: flex;
    justify-content: center;
    margin: 16px;
  }

  button {
    background-color: #323232;
    color: #fff;
    width: 7rem;
    height: 2.5rem;
    border: none;
    margin: 4px 8px;
    border-radius: 8px;
    box-shadow: 1px 1px 5px 2px rgb(0, 0, 0, 0.3);
    outline: none;
    transition: 0.1s all;

    :hover {
      opacity: 0.7;
    }
  }
`;
