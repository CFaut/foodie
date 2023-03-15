const apiKey = 'd98e74fefb6d4014bbf9a4571115817b'
const ingredientsRoot = `https://api.spoonacular.com/food/ingredients/search?apiKey=${apiKey}&`
const recipesRoot = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&`
const restaurantRoot = `https://api.spoonacular.com/food/restaurants/search?apiKey=${apiKey}&`

export const searchIngredients = async (query) => {
  const endpoint = `${ingredientsRoot}query=${query}`;
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
      if(response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse
      }
  }
  catch(error) {
    console.log(error)
  }
}

export const searchRecipes = async (query) => {
  const endpoint = `${recipesRoot}query=${query}`;
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
      if(response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse
      }
  }
  catch(error) {
    console.log(error)
  }
}

export const searchRestaurants = async (query) => {
  const endpoint = `${restaurantRoot}query=${query}`;
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
      if(response.ok) {
        const jsonResponse = await response.json()
        console.log('API', jsonResponse)
        return jsonResponse
      }
  }
  catch(error) {
    console.log(error)
  }
}

export const getRecipeInformation = async (id) => {
  const endpoint = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=false`
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
      if(response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse
      }
  }
  catch(error) {
    console.log(error)
  }
}

export const getSimilarRecipes = async(id) => {
  const endpoint = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`
  try {
    const response = await fetch(endpoint, {cache: 'no-cache'});
    console.log(response, 'similar response')
      if(response.ok) {
        const jsonResponse = await response.json()
        return jsonResponse
      }
  }
  catch(error) {
    console.log(error)
  }
}