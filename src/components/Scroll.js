import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
  return (
    <div className='scrollNoBar'>
      {props.children}
    </div>
  );
};

export default Scroll;