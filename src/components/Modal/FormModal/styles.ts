import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f0f0f0;
  position: relative;
  width: 56rem;
  padding: 16px 16px 40px 16px;
  border-radius: 16px;
  z-index: 3;
  animation: popup 0.2s 1;

  button {
    cursor: pointer;
  }

  @keyframes popup {
    0% {
      transform: scale(0.7);
    }
    100% {
      transform: scale(1);
    }
  }

  h3 {
    margin-left: 5%;
  }

  .close-icon {
    position: absolute;
    right: 24px;
    top: 24px;
    opacity: 0.7;
  }

  form {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding: 0 16px 0 16px;
  }

  h3 {
    align-self: center;
    opacity: 0.7;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  border-right: 1px solid #c4c4c4;
  margin-right: 24px;

  input {
    background-color: #d6d5d5;
    width: 90%;
    height: 24px;
    padding: 8px;
    margin-top: 16px;
    border: none;
    border-radius: 5px;
    outline: none;
    transition: 0.1s ease-in;
    :hover {
      opacity: 0.7;
    }
  }

  input:first-child {
    margin-top: 0;
  }

  textarea {
    background-color: #d6d5d5;
    width: 90%;
    height: 5rem;
    margin-top: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    resize: none;
    outline: none;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;

  .select-wrapper {
    display: flex;
    align-items: flex-end;

    h4 {
      margin-left: 4.5rem;
    }
  }
  .save-icon,
  .pdf-icon {
    margin-left: 8px;
    transition: 0.2s all;
  }
  button:hover .save-icon,
  button:hover .pdf-icon {
    transform: scale(1.2);
  }

  .docx-button,
  .save-button {
    background-color: #323232;
    float: right;
    color: #f9f9f9;
    width: 7rem;
    height: 2.5rem;
    margin: 8px 8px 0 0;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: 1px 1px 5px 2px rgb(0, 0, 0, 0.3);
    transition: 0.2s ease-in-out;
    :active {
      opacity: 1;
    }
  }

  .docx-button {
    :hover {
      background-color: #3956cc;
    }
  }

  .save-button {
    :hover {
      background-color: #11c26d;
    }
  }

  .select {
    margin: 0 8px 16px auto;
  }
`;
