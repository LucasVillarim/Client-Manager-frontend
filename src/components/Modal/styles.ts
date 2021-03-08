import styled from 'styled-components';

export const Filter = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  animation: fade 1s 1;

  @keyframes fade {
    0% {
      background-color: rgba(0, 0, 0, 0.1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const Dots = styled.div`
  background-color: #fafafa;
  display: flex;
  align-content: center;
  width: 25vw;
  height: 15vh;
  border-radius: 16px;

  .wrapper {
    margin: auto;
    display: flex;
  }

  div {
    background-color: #323232;
    width: 20px;
    height: 20px;
    margin: 8px;
    border-radius: 16px;
  }
  .left-dot {
    animation: bounce 1s infinite;

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(20px);
      }
      50% {
        transform: translateY(15px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .center-dot {
    animation: bounce 1.5s infinite;

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(20px);
      }
      50% {
        transform: translateY(15px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .right-dot {
    animation: bounce 2s infinite;

    @keyframes bounce {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(20px);
      }
      50% {
        transform: translateY(15px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;
