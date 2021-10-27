// get the instance of sequelize
const { connection, Restaurant, Menu, MenuItem } = require("./connect");

/**
 * Runs all the functions
 */
async function main() {
  try {
    await start();
    const objects = await createRows();
    await runQueries(objects);
  } catch (e) {
    throw new Error(e.message);
  }
}

/**
 * Synchronize all models with db
 */
async function start() {
  await connection.sync({
    logging: false, // don't log everything
    force: true, // drop tables each time
  });
}

// run main and log any errors
main().catch((e) => console.log(`Caught error: ${e}`));

/**
 * Creates the rows in the db
 * @returns array of objects
 */
async function createRows() {
  // create the objects (and rows!)
  const pizzaRestaurant = await Restaurant.create({
    name: "Pizza Hut",
    imagelink: "http://domain.myimagelink.jpg",
  });

  const drinkRestaurant = await Restaurant.create({
    name: "Drinks4Us",
    imagelink: "http://domain.myimagelink.jpg",
  });

  const pizzaMenu = await Menu.create({
    title: "Pizza menu",
  });

  const drinkMenu = await Menu.create({
    title: "Drink Menu",
  });

  const pizza = await MenuItem.create({
    name: "Pizza",
    price: 6.99,
  });

  const fanta = await MenuItem.create({
    name: "Fanta",
    price: 0.99,
  });

  // add the associations (foreign keys) (these are sequelize specific functions)
  await pizzaRestaurant.addMenu(pizzaMenu);
  await pizzaMenu.addMenuItem(pizza);

  return [pizzaRestaurant];
}

/**
 * A space to run any queries
 * @param [] array of objects
 */
async function runQueries(objects) {
  [pizzaRestaurant] = objects; // objects[0], objects[1], objects[2]

  const restaurants = await Restaurant.findAll({}); // get all restaurants

  // C = Restaurant.create({}) - done
  // R = Restaurant.findAll({}) - done
  // U = Restaurant.update()
  // D = Restaurant.destroy()

  // get Menus that belong to a restaurant
  const menus = await pizzaRestaurant.getMenus();

  // --> get menu items that belong to a menu here
  // --> write tests in jest to prove your restaurant CRUD functions work

  console.log(`**** Found all restos: ${JSON.stringify(restaurants)}`);
  console.log(`**** Found all menus: ${JSON.stringify(menus)}`);
}