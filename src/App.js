import React from 'react';
import NavBar from './components/global/NavBar/NavBar.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx'
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Assuming routing here is where I would normally select a routing method via react-router-dom 
      or with a HOC privatizing the routes*/}
      <ProductPage />
    </div>
  );
}

export default App;
