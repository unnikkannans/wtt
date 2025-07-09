import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import New from './pages/New';
import Furniture from './pages/Furniture';
import LivingRoom from './pages/LivingRoom';
import Dining from './pages/Dining';
import Bedroom from './pages/Bedroom';
import Study from './pages/Study';
import Outdoor from './pages/Outdoor';
import LogIn from './pages/LogIn';
import CollectionPage from './pages/CollectionPage';
import Search from './pages/Search'; 
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new" element={<New />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/living-room" element={<LivingRoom />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/study" element={<Study />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/collection" element={<CollectionPage />} />
         <Route path="/search" element={<Search />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />


      </Routes>
    </Router>
  );
}

export default App;



{/*

|-project/
├── public/
├── src/
│   ├── assets/
│   │   └── bgimage1.svg
│   ├── components/
│   │   └── Homepage.tsx ✅
│   ├── App.tsx
│   └── main.tsx or index.tsx
*/}