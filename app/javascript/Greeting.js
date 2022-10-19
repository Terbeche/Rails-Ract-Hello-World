import React from 'react';
import { useSelector } from 'react-redux';


const Greeting = () => {
  const { message } = useSelector((state) => state.messages.message);


  return <div>{message}</div>;
};

// const Greeting = () => (

//   <h1>Salam Mustapha!</h1>

// );

export default Greeting;
