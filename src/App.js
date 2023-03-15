import './App.css';
import { Route, Routes } from 'react-router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { Recipes } from './components/recipes/recipes';
import { IndividualRecipe } from './components/recipes/individualRecipe';
import { Ingredients } from './components/ingredients/ingredients';
import { Restaurants } from './components/restaurants/restaurants';

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
        element={<IndividualRecipe/>}
        />
        <Route exact path='/ingredients'
        element={<Ingredients/>}
        />
        <Route exact path='/restaurants'
        element={<Restaurants/>}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
