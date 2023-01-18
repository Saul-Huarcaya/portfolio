
import './App.css';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import RickAndMorty from './Projects/Project01/RickAndMorty/RickAndMorty';
import Crud from './Projects/Project02/Crud/Crud';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/portfolio' element={<Main/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='/portfolio/projects/rick-and-morty' element={<RickAndMorty/>}/>
        <Route path='/portfolio/projects/crud' element={<Crud/>}/>
      </Routes>
    </div>
  )
}

export default App;