import API_ENDPOINT from '../../globals/api-endpoint';

const categories = (restaurant) => restaurant.categories.map((category) => `
  <span>${category.name},</span>`).join(' ');

const foods = (restaurant) => restaurant.menus.foods.map((food) => `
  <span>${food.name},</span>`).join(' ');

const drinks = (restaurant) => restaurant.menus.drinks.map((drink) => `
  <span>${drink.name},</span>`).join(' ');

const reviews = (restaurant) => restaurant.customerReviews.map((review) => `
    <div class="review_container">
      <h2>${review.name}</h2>
      <p>${review.date}</p>
      <h3>${review.review}</h3>
    </div>`).join(' ');

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
<div class="restaurant-item__header">
  <img
    class="lazyload"
    src="./images/placeholder.png"
    data-src="${API_ENDPOINT.IMAGE_SMALL}${restaurant.pictureId}"
    alt="${restaurant.name}"
    title="${restaurant.name}"
    width="100%"
    height="250"
    data-sizes="auto"
  />
  <div class="restaurant-item__header__rating">
    <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
  </div>
</div>
<div class="restaurant-item__content">
  <h2 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
  <h3>${restaurant.city}</h3>
  <p>${restaurant.description}</p>
</div>
</div>
  `;

const createRestaurantDetailTemplate = (restaurant) => `
<h1 class="restaurant__title">${restaurant.name}</h1>
<div class="restaurant__poster">
  <img class="lazyload" src="./images/placeholder.png" data-src="${API_ENDPOINT.IMAGE_LARGE}${restaurant.pictureId}" alt="${restaurant.name}" data-sizes="auto" width="100%" height="100%"/>
</div>
<div class="restaurant__info">
  <h2>Information</h2>
  <h3>City</h3>
  <p>${restaurant.city}</p>
  <h3>Address</h3>
  <p>${restaurant.address}</p>
  <h3>Category</h3>
  <p>${categories(restaurant)}</p>
  <h3>Rating</h3>
  <p>${restaurant.rating}</p>
</div>
<div class="restaurant__overview">
  <h2>Description</h2>
  <p>${restaurant.description}</p>
</div>
<h1 class="restaurant__title">Restaurant Menu</h1>
<div id="menu" class="menu">
  <div class="food_container">
    <h2>Foods Menu</h2>
    <div id="food" class="food">${foods(restaurant)}</div>
  </div>

  <div class="drink_container">
    <h2>Drinks Menu</h2>
    <div id="drink" class="drink">${drinks(restaurant)}</div>
  </div>

  <h1 class="restaurant__title_review">Restaurant Review</h1>
  <div id="review" class="review">${reviews(restaurant)}</div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <img class="lazyload" src="/images/heart-out.png" data-src="/images/heart-out.png" alt="Like Restaurant" 
    title="Like Restaurant" aria-hidden="true"/>
  </button>
`;
const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likedButton" class="like">
    <img class="lazyload" src="/images/heart.png" data-src="/images/heart.png" alt="Unlike Restaurant" 
    title="Unlike Restaurant" aria-hidden="true"/>
  </button>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurant-item">
        <div class="restaurant-item__header">
          <img class="restaurant-item__header__poster" width="100%" height="350px"
          src="./images/placeholder.png" alt="skeleton">
        </div>
        <div class="restaurant-item__content">
          <h2 class="skeleton">Lorem ipsum dolor sit.</a></h3>
          <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti 
          dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati 
          optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
        </div>
      </div>
    `;
  }
  return template;
};

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createSkeletonRestaurantTemplate,
};
