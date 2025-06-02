Ext.define('MyApp.store.Products', {
  extend: 'Ext.data.Store',
  alias: 'store.products',
  model: 'MyApp.model.Product',
  data: [
    {id: 1, name: 'Ноутбук', description: 'Игровой ноутбук', price: 1500, quantity: 5},
    {id: 2, name: 'Смартфон', description: 'Флагманский', price: 1000, quantity: 3},
    {id: 3, name: 'Консоль', description: 'Игровая консоль', price: 2000, quantity: 4},
    {id: 4, name: 'Телефон', description: 'Проводной', price: 700, quantity: 0}
  ]
});