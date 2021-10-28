const Sequelize = require('sequelize');
const { connection, Restaurant, Menu, MenuItem } = require("./connect");

describe('Relationships', () => {
       
    test('restaurants have menus', async () => {
        const ronalds = await Restaurant.create({name: 'Ronalds', imagelink: 'http://some.image.url'})
        const vegMenu = await Menu.create({name: 'Veg Menu'});
        await ronalds.addMenu(vegMenu);
        const menus = await ronalds.getMenus();
        expect(menus[0].name).toBe('Veg Menu');
    })
    test('menus have items', async () => {
        const donalds = await Restaurant.create({name: 'Donalds', imagelink: 'http://some.image.url'})
        const meatMenu = await Menu.create({name: 'Meat Menu'});
        const meatBalls = await MenuItem.create({name: 'Meat Balls', price: 6.99})
        await donalds.addMenu(meatMenu);
        await meatMenu.addMenuItem(meatBalls)
        const menuItems = await meatMenu.getMenuItems();
        expect(menuItems[0].name).toBe('Meat Balls');
    })
})