import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { changeRestaurant, selectRestaurants } from "./restaurantsSlice";
import { searchRestaurants } from "../../api-data/api-data";
import './restaurants.css'

// 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

export function Restaurants() {

  const dispatch = useDispatch();
  const [restaurant, setRestaurant] = useState('')
  const restaurantsfinal = useSelector(selectRestaurants)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('term submitted: ' + restaurant)
  }

  useEffect(() => {
    searchRestaurants(restaurant).then(response => {
      console.log('response', response)
      dispatch(
        changeRestaurant(response.restaurants)
      )
    })
    }, [restaurant, dispatch])
  
  console.log(restaurant)

  return(
    <div>
      <header className="restaurants-header">
        <h2>Restaurants</h2>
        <p>Bring a spark to your night!</p>
      </header>
      <form onSubmit={handleSubmit} className='search-bar'>
        <input onChange={(e) => setRestaurant(e.target.value)} value={restaurant} className='search-input' type='text' placeholder="Search for Restaurants" />
      </form>
      <section className="restaurants-container">
        {restaurantsfinal? restaurantsfinal.map(restaurant => (
          <div className="restaurant-card" key={restaurant.id} id={restaurant.id}>
            <div className='restaurant-card-header'>
            <p>{restaurant.name}</p>
            {restaurant.logo_photos?.map(photo => (
              <img src={photo} alt='restaurant logo' />
            ))}
            </div>
            <div className="restaurant-address">
              <p>{restaurant.address.city}, {restaurant.address.street_addr}</p>
            </div>
            <div className='cuisine-tags'>
              {restaurant.cuisines?.map(cuisine => (
                <p key={cuisine}>{cuisine}</p>
              ))}
            </div>
            <div className="restaurant-description">
              <p>{restaurant.description}</p>
            </div>
          </div>
        )) : <p>Loading...</p>}
      </section>
    </div>
  )
}