import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const message = useSelector((state) => state.messages.greeting);
  return <div className="message">{message}</div>;
};

export default Greeting;
