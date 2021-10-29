# bootcamp
 
/**
 * Runs all the functions
 */
// async function main() {
//   try {
//     await start();
//     const objects = await createRows();
//     await runQueries(objects);
//   } catch (e) {
//     throw new Error(e.message);
//   }
// }

// run main and log any errors
// main().catch((e) => console.log(`Caught error: ${e}`));

/**
 * Creates the rows in the db
 * @returns array of objects
 */
// async function createRows() {
//   // create the objects (and rows!)
//   const pizzaRestaurant = await Restaurant.create({
//     name: "Pizza Hut",
//     imagelink: "http://domain.myimagelink.jpg",
//   });

//   const drinkRestaurant = await Restaurant.create({
//     name: "Drinks4Us",
//     imagelink: "http://domain.myimagelink.jpg",
//   });

//   const pizzaMenu = await Menu.create({
//     name: "Pizza menu",
//   });

//   const drinkMenu = await Menu.create({
//     name: "Drink Menu",
//   });

//   const pizza = await MenuItem.create({
//     name: "Pizza",
//     price: 6.99,
//   });
//   // Updates pizza price
//   const pizzaUpdate = await pizza.update({
//     name: "Pizza",
//     price: 12.99,
//   });

//   const fanta = await MenuItem.create({
//     name: "Fanta",
//     price: 0.99,
//   });

//   const sprite = await MenuItem.create({
//     name: "Sprite",
//     price: 0.7,
//   });
//   // destroys Sprite
//   /*const spriteDestroy = */ await sprite.destroy({});

//   // add the associations (foreign keys) (these are sequelize specific functions)
//   await pizzaRestaurant.addMenu(pizzaMenu);
//   await pizzaMenu.addMenuItem(pizza);
//   await drinkRestaurant.addMenu(drinkMenu);
//   await drinkMenu.addMenuItem(fanta);
//   await drinkMenu.addMenuItem(sprite);

//   return [
//     pizzaRestaurant,
//     drinkRestaurant,
//     pizzaMenu,
//     drinkMenu,
//     pizza,
//     fanta,
//     sprite,
//   ];
// }

/**
 * A space to run any queries
 * @param [] array of objects
 */
// async function runQueries(objects) {
//   [
//     pizzaRestaurant,
//     drinkRestaurant,
//     pizzaMenu,
//     drinkMenu,
//     pizza,
//     fanta,
//     sprite,
//   ] = objects; // objects[0], objects[1], objects[2]

//   const restaurants = await Restaurant.findAll({}); // get all restaurants

//   // get Menus that belong to a restaurant
//   const menus = await pizzaRestaurant.getMenus();

//   // --> get menu items that belong to a menu here
//   const items = await drinkMenu.getMenuItems();
//   // --> write tests in jest to prove your restaurant CRUD functions work

//   console.log(`**** Found all restos: ${JSON.stringify(restaurants)}`);
//   console.log(`**** Found all menus: ${JSON.stringify(menus)}`);
//   console.log(`**** Found all items: ${JSON.stringify(items)}`);
// }