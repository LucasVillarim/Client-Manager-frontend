import styled from 'styled-components';

export const Header = styled.div`
  background-color: #11c26d;
  font-size: 24px;
  color: #f9f9f9;
  height: 10vh;
  display: flex;
  align-items: center;
  padding-left: 32px;
  box-shadow: 2px 2px 5px 3px rgb(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  position: relative;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  height: auto;
  margin: 64px auto;
  padding-bottom: 3rem;

  .body-header {
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin: 16px;
  }

  h3 {
    color: #dfdfdf;
    width: 8rem;
    opacity: 0.7;
    margin: 0;
  }

  input {
    width: 17rem;
    height: 24px;
    padding: 4px;
    margin: 0 16px 0 0;
    border: none;
    border-radius: 4px;
    outline: none;
  }

  .add-button {
    background-color: #323232;
    color: #f9f9f9;
    float: right;
    width: 100px;
    height: 40px;
    margin: 16px 8px 0 0;
    border: none;
    border-radius: 8px;
    outline: none;
    /* animation: button-slide 1s 1; */
    box-shadow: 1px 1px 5px 2px rgb(0, 0, 0, 0.3);
    transition: 0.2s ease-in;

    :hover {
      background-color: grey;
    }
    @keyframes button-slide {
      0% {
        margin-top: 70px;
        opacity: 0;
      }
      100% {
        margin-top: 32px;
        opacity: 1;
      }
    }
  }

  .button-container {
    position: absolute;
    top: 1rem;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 0 16px 0;
    animation: fade-transition 0.5s 1;

    @keyframes fade-transition {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    button:first-child {
      :hover {
        background-color: #11c26d;
      }
    }
  }

  .side-button {
    position: fixed;
    top: 5%;
    right: 5%;
    display: flex;
    flex-direction: column;
    animation: fade-buttons 1s 1;

    @keyframes fade-buttons {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    button:first-child {
      :hover {
        background-color: #11c26d;
      }
    }
  }

  .search-icon {
    margin-left: -45px;
    opacity: 0.5;
  }
`;
