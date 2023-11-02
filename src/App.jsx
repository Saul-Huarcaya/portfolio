
import './App.css';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Error404 from './components/Error404/Error404';
import Crud from './Projects/Project01/Crud';
import AppCountries from './Projects/Project03/AppCountries.jsx';
import Ecommerce from './Projects/Project04/Ecommerce';
import ShoppingCart from './Projects/Project04/ShoppingCart';
import RoomPage from './Projects/Project02/RoomPage';
import ManagePage from './Projects/Project05/ManagePage';
import SectionCountries from './Projects/Project03/SectionCountries';
import TierList from './Projects/Project06/TierList';
import { ProviderEcommerce } from './Context/ContextEcommerce';
import { ProviderTierList } from './Context/contextTierList';
function App() {

  return (
    <div className="App">
      <ProviderEcommerce>
        <ProviderTierList>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='*' element={<Error404/>}/>
            <Route path='/projects/crud' element={<Crud/>}/>
            <Route path='/projects/api-countries' element={<AppCountries/>}/>
            <Route path='/projects/api-countries/:pais' element={<SectionCountries/>}/>
            <Route path='/projects/ecommerce' element={<Ecommerce/>}/>
            <Route path='/projects/ecommerce/cart' element={<ShoppingCart/>}/>
            <Route path='/projects/room-page' element={<RoomPage/>} />
            <Route path='/projects/mana-page' element={<ManagePage/>}/>
            <Route path='/projects/tier-list' element={<TierList/>}/>
          </Routes>
        </ProviderTierList>
      </ProviderEcommerce>
    </div>
  )
}

export default App;
