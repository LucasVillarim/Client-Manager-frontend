import React from 'react';
import { Dots } from './styles';

const Fallback: React.FC = () => {
  return (
    <Dots>
      <section className="wrapper">
        <div className="left-dot" />
        <div className="center-dot" />
        <div className="right-dot" />
      </section>
    </Dots>
  );
};

export default Fallback;
