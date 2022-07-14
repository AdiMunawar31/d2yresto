import {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant, favoriteRestaurants }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this.isRestaurantExist(id)) {
      this._likedButton();
    } else {
      this._likeButton();
    }
  },

  async isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _likeButton() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.updateRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _likedButton() {
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likedButton = document.querySelector('#likedButton');
    likedButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
