import React from 'react';
import { Routes, Route } from 'react-router';
import Greeting from './Greeting';

const App = () => {
  (

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
