import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import ViewRecipes from './components/ViewRecipes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<ViewRecipes/>}/>
        <Route path='/1'element={<AddRecipe/>}/>
        <Route path='/2'element={<SearchRecipe/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
