import './App.css';
import { Route, Routes } from 'react-router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Recipes } from './components/recipes/recipes';
import { RecipeInfo } from './components/recipeInfo/recipeInfo';
import { Ingredients } from './components/ingredients/ingredients';

function App() {
  // const key = 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

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'
        element={<Home/>}
        />
        <Route exact path='/recipes' 
        element={<Recipes/>}
        />
        <Route exact path='/recipes/:recipeId' 
        element={<RecipeInfo/>}
        />
        <Route exact path='/ingredients'
        element={<Ingredients/>}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
