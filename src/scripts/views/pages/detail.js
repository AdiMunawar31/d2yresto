import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant">
          <div id="mainContent">
            <ul>
              <li data-title="D">D</li>
              <li data-title="2">2</li>
              <li data-title="Y">Y</li>
              <li data-title=""></li>
              <li data-title="R">R</li>
              <li data-title="E">E</li>
              <li data-title="S">S</li>
              <li data-title="T">T</li>
              <li data-title="O">O</li>
            </ul>
          </div>
        </div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getDetailRestaurant(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
  },
};

export default Detail;
