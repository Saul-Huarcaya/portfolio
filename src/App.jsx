
import './App.css';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import Crud from './Projects/Project01/Crud';
import RickAndMorty from './Projects/Project02/RickAndMorty/RickAndMorty';
import AppCountries from './Projects/Project03/AppCountries.jsx';
import Ecommerce from './Projects/Project05/Ecommerce';
import ShoppingCart from './Projects/Project05/ShoppingCart';
import { ProviderEcommerce } from './Context/ContextEcommerce';
import RoomPage from './Projects/Project04/RoomPage';
import ManagePage from './Projects/Project06/ManagePage';

function App() {

  return (
    <div className="App">
      <ProviderEcommerce>
        
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='*' element={<Error404/>}/>
          <Route path='/projects/crud' element={<Crud/>}/>
          <Route path='/projects/rick-and-morty' element={<RickAndMorty/>}/>
          <Route path='/projects/api-countries' element={<AppCountries/>}/>
          <Route path='/projects/ecommerce' element={<Ecommerce/>}/>
          <Route path='/projects/ecommerce/cart' element={<ShoppingCart/>}/>
          <Route path='/projects/room-page' element={<RoomPage/>} />
          <Route path='/projects/mana-page' element={<ManagePage/>}/>
        </Routes>

      </ProviderEcommerce>
    </div>
  )
}

export default App;
