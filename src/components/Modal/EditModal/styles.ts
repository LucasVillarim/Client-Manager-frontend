import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f0f0f0;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 36rem;
  height: auto;
  padding-bottom: 40px;
  border-radius: 16px;
  z-index: 3;
  animation: popup 0.2s 1;

  @keyframes popup {
    0% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    margin-top: 40px;
  }

  h3 {
    align-self: center;
    opacity: 0.7;
  }

  label {
    margin-top: 16px;
    font-weight: bold;
    opacity: 0.7;
  }

  input {
    background-color: #d6d5d5;
    width: 300px;
    height: 24px;
    padding: 8px;
    border: none;
    border-radius: 5px;
    outline: none;
    transition: 0.1s ease-in;

    :hover {
      opacity: 0.7;
    }
  }

  button {
    background-color: #323232;
    align-self: center;
    color: #f9f9f9;
    width: 7rem;
    height: 2.5rem;
    margin-top: 32px;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: 1px 1px 5px 2px rgb(0, 0, 0, 0.3);
    transition: 0.2s ease-in-out;

    :hover {
      opacity: 0.7;
    }
    :active {
      opacity: 1;
    }
  }

  .register-button {
    :hover {
      background-color: #11c26d;
    }
  }
`;
