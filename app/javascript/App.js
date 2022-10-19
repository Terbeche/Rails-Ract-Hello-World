import React from 'react';
import { Routes, Route } from 'react-router';
import Greeting from './Greeting';

const App = () => {
  (

    <Routes>
      <Route index element={<Greeting />} />

    </Routes>

  );
};
export default App;

// const App = () =>

//   (

//     <h1>Salam Mustapha!</h1>

//   );
