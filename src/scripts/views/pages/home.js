import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
      <div class="hero-container">
        <picture>
          <source class="lazyload" media="(max-width: 600px)" data-srcset="./images/heros/hero-small.jpg" 
          type="image/jpeg" data-sizes="auto">
          <img class="lazyload" src="./images/placeholder.png" data-src="./images/heros/hero-large.jpg" alt="image-hero" title="image-hero" data-sizes="auto">
        </picture>
      </div>
      <div class="content">
        <h2 class="content__heading">Restaurant List</h2>
        <div id="restaurants" class="restaurants">
          ${createSkeletonRestaurantTemplate(20)}
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
