
import './App.css';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import Crud from './Projects/Project01/Crud/Crud';
import RickAndMorty from './Projects/Project02/RickAndMorty/RickAndMorty';
import RestCountries from './Projects/Project03/RestCountries/RestCountries';
import ApiCoin from './Projects/project04/ApiCoin/ApiCoin';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='/projects/crud' element={<Crud/>}/>
        <Route path='/projects/rick-and-morty' element={<RickAndMorty/>}/>
        <Route path='/projects/api-countries' element={<RestCountries/>}/>
        <Route path='/projects/api-cryptomonedas' element={<ApiCoin/>}/>
      </Routes>
    </div>
  )
}

export default App;
