
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Pokemons from './components/Pokemons';
import NotFound from './pages/NotFound';
import SinglePoke from './pages/SinglePoke';

import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
  
      <Navbar/>

   <Routes>
   <Route path={`/`}  element={<Home/>}  /> 

        <Route path={`/pokemon`}  element={<Pokemons/>}  /> 

        <Route path={`/pokemon/:id`}  element={<SinglePoke/>}  /> 
        <Route path="*"  element={ <NotFound/> } />
</Routes>

    </div>
  );
}

export default App;
