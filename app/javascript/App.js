import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Greeting from './Greeting';
import { useDispatch } from 'react-redux';



const App = () => {
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchMessage()), []);

   return (

    <Routes>
      <Route exact path="/" element={<Greeting />} />
    </Routes>
  );
};
export default App;

// const App = () =>

//   (

//     <h1>Salam Mustapha!</h1>

//   );
