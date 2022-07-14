const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Liked one of the restaurants', async ({ I }) => {
  I.waitForElement('.restaurant__title a', 30);
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliked one of the restaurants', async ({ I }) => {
  I.waitForElement('.restaurant__title a', 30);
  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.click(likedRestaurantTitle);

  I.waitForElement('#likedButton', 10);
  I.seeElement('#likedButton');
  I.click('#likedButton');

  I.amOnPage('/#/favorite');

  I.waitForElement('.content__heading', 10);
  I.see('Favorite restaurant is empty!', '.content__heading');
});
