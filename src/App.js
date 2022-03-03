
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/filter/:byFilter' element={<ItemListContainer/>} />
          <Route path='/' element={<ItemListContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
