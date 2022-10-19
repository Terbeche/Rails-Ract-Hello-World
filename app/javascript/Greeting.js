import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from './redux/messages';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.messages);

  useEffect(() => dispatch(fetchMessage()), null);

  return <div>{message}</div>;
};

// const Greeting = () => (

//   <h1>Salam Mustapha!</h1>

// );

export default Greeting;
