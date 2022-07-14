import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h1 class="content__heading">Your Favorited Restaurant</h1>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    const heading = document.querySelector('.content__heading');

    if (restaurants.length === 0) {
      heading.innerHTML = '<h1 class="content__heading">Favorite restaurant is empty!</h1>';
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
