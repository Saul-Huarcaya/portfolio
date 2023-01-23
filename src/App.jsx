
import './App.css';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import RickAndMorty from './Projects/Project01/RickAndMorty/RickAndMorty';
import Crud from './Projects/Project02/Crud/Crud';
import RestCountries from './Projects/Project03/RestCountries';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='/projects/rick-and-morty' element={<RickAndMorty/>}/>
        <Route path='/projects/crud' element={<Crud/>}/>
        <Route path='/projects/api-countries' element={<RestCountries/>}/>
      </Routes>
    </div>
  )
}

export default App;
